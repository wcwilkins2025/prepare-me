"""Build Prepare Me's place and hazard tables from public data. Standard library only.

    python scripts/build_hazards.py [LAND_FINDER_DIR]

Inputs (already downloaded by the Land Finder, C:/Projects/brotherhood-land-finder):
  downloads/fema/nri_*.json   FEMA National Risk Index, county layer, December 2025 (official ArcGIS service)
  data/counties.json          county names, January low and yearly mean temperature (NOAA 1991-2020 normals)
  data/counties.geojson       Census county shapes (1:20m), to place each town and ZIP in its county
  data/places.json            Census towns and cities with their center points
  data/zips.json              ZIP code center points (Census ZCTA)

Outputs:
  data/hazards.json   one row per county: name, state, climate, and FEMA's rating and score for each hazard
  data/places.json    town -> county, and ZIP -> county
"""
import glob, json, os, sys, datetime

LF = sys.argv[1] if len(sys.argv) > 1 else 'C:/Projects/brotherhood-land-finder'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data')

# FEMA's 18 hazards, the order kept in hazards.json
NRI = ['AVLN', 'CFLD', 'CWAV', 'DRGT', 'ERQK', 'HAIL', 'HWAV', 'HRCN', 'ISTM', 'LNDS', 'LTNG', 'IFLD', 'SWND', 'TRND', 'TSUN', 'VLCN', 'WFIR', 'WNTW']
# FEMA's rating words -> a number. -1 means the hazard does not apply in that county.
RATING = {'Very High': 5, 'Relatively High': 4, 'Relatively Moderate': 3, 'Relatively Low': 2, 'Very Low': 1,
          'No Rating': 0, 'Insufficient Data': 0, 'Not Applicable': -1, None: -1, '': -1}


def load(fn):
    with open(fn, encoding='utf-8') as f:
        return json.load(f)


def main():
    lf_c = load(os.path.join(LF, 'data', 'counties.json'))
    cf = lf_c['fields']
    climate = {}
    for r in lf_c['rows']:
        d = dict(zip(cf, r))
        climate[d['fips']] = (d.get('jan_tmin_f'), d.get('tavg_f'), d.get('density'))

    counties, ver = {}, None
    for fn in sorted(glob.glob(os.path.join(LF, 'downloads', 'fema', 'nri_*.json'))):
        for ft in load(fn)['features']:
            a = ft['attributes']
            ver = a.get('NRI_VER') or ver
            fips = a['STCOFIPS']
            ratings = [RATING.get(a.get(h + '_RISKR'), 0) for h in NRI]
            scores = [round(a[h + '_RISKS']) if isinstance(a.get(h + '_RISKS'), (int, float)) else None for h in NRI]
            freqs = [a.get(h + '_AFREQ') if isinstance(a.get(h + '_AFREQ'), (int, float)) else 0 for h in NRI]
            jt, ta, dens = climate.get(fips, (None, None, None))
            name = a['COUNTY'] + ('' if a.get('COUNTYTYPE') in (None, '') else ' ' + a['COUNTYTYPE'])
            counties[fips] = [name, a['STATEABBRV'], jt, ta, dens, ratings, scores, freqs]

    # ---- how often, against every other county: FEMA's yearly frequency (events a year, or the yearly chance
    # for earthquake and wildfire) turned into a 0-100 rank among all counties. 0 when it does not happen there.
    for i in range(len(NRI)):
        vals = sorted(r[7][i] for r in counties.values() if r[7][i] > 0)
        n = len(counties)
        zero = n - len(vals)
        import bisect
        for r in counties.values():
            v = r[7][i]
            if v <= 0:
                r[7][i] = 0
            else:
                below = zero + bisect.bisect_left(vals, v)
                r[7][i] = max(1, round(100 * below / n))
    for r in counties.values():
        r[6] = r[7]; del r[7]   # keep the frequency rank in the scores slot; the risk score is not used

    # ---- place each town and ZIP in a county (point in polygon, with a box test first)
    shapes = []
    for ft in load(os.path.join(LF, 'data', 'counties.geojson'))['features']:
        g = ft['geometry']
        polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
        xs = [p[0] for poly in polys for p in poly[0]]
        ys = [p[1] for poly in polys for p in poly[0]]
        shapes.append((ft['id'], (min(xs), min(ys), max(xs), max(ys)), polys))

    def inside(x, y, ring):
        hit, j = False, len(ring) - 1
        for i in range(len(ring)):
            xi, yi = ring[i][0], ring[i][1]
            xj, yj = ring[j][0], ring[j][1]
            if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
                hit = not hit
            j = i
        return hit

    def county_of(lat, lon):
        best = None
        for fips, (x0, y0, x1, y1), polys in shapes:
            if not (x0 <= lon <= x1 and y0 <= lat <= y1):
                continue
            for poly in polys:
                if inside(lon, lat, poly[0]) and not any(inside(lon, lat, h) for h in poly[1:]):
                    return fips
            best = best or fips
        return best  # a point on the coast just outside the 1:20m line: the county whose box holds it

    def nearest(lat, lon):
        bd, bf = 9e9, None
        for fips, (x0, y0, x1, y1), _ in shapes:
            cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
            d = (cx - lon) ** 2 + (cy - lat) ** 2
            if d < bd:
                bd, bf = d, fips
        return bf

    pl = load(os.path.join(LF, 'data', 'places.json'))
    pf = pl['fields']
    towns, miss = [], 0
    for r in pl['rows']:
        d = dict(zip(pf, r))
        f = county_of(d['lat'], d['lon'])
        if not f:
            f = nearest(d['lat'], d['lon']); miss += 1
        if f in counties:
            towns.append([d['name'], d['st'], f, d.get('pop') or 0])
    zips = {}
    for z, (lat, lon) in load(os.path.join(LF, 'data', 'zips.json')).items():
        f = county_of(lat, lon) or nearest(lat, lon)
        if f in counties:
            zips[z] = f

    built = datetime.date.today().isoformat()
    with open(os.path.join(OUT, 'hazards.json'), 'w', encoding='utf-8') as f:
        json.dump({'built': built, 'source': 'FEMA National Risk Index, county layer', 'version': ver,
                   'fields': ['name', 'st', 'jan_tmin_f', 'tavg_f', 'density', 'ratings', 'freq_rank'], 'hazards': NRI,
                   'counties': counties}, f, separators=(',', ':'))
    with open(os.path.join(OUT, 'places.json'), 'w', encoding='utf-8') as f:
        json.dump({'built': built, 'fields': ['name', 'st', 'fips', 'pop'], 'towns': towns, 'zips': zips}, f, separators=(',', ':'))
    print('%d counties (NRI %s), %d towns (%d placed by nearest county), %d ZIPs' % (len(counties), ver, len(towns), miss, len(zips)))


if __name__ == '__main__':
    main()

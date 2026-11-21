/* Prepare Me: National Weather Service warnings and watches, matched to the disasters in data/tasks.js (RD.HAZARDS),
   so a weather alert can open the steps that fit it. The sender (supabase/functions/push) decides which NWS products
   become alerts; this file only says which of his steps go with each one. Event names follow the NWS product list. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};

  /* every rule that matches adds its disasters */
  var RULES = [
    [/Tornado/i, ['tornado']],
    [/Hurricane|Typhoon|Tropical Storm/i, ['hurricane', 'outage', 'evacuate']],
    [/Storm Surge/i, ['hurricane', 'flood', 'evacuate']],
    [/Flood|Hydrologic/i, ['flood']],
    [/Severe Thunderstorm|Extreme Wind|High Wind|Dust Storm|Dust Advisory/i, ['storm']],
    [/Winter|Blizzard|Ice Storm|Snow|Sleet|Freez|Frost|Wind Chill|Extreme Cold|Cold Weather/i, ['winter']],
    [/Blizzard|Ice Storm|Extreme Cold/i, ['outage']],
    [/Heat/i, ['heat']],
    [/Red Flag|Fire Weather|Fire Warning|Wildfire/i, ['wildfire']],
    [/Earthquake/i, ['earthquake']],
    [/Tsunami/i, ['tsunami', 'evacuate']],
    [/Volcano|Ashfall/i, ['volcano']],
    [/Avalanche/i, ['avalanche']],
    [/Debris Flow|Landslide/i, ['landslide']],
    [/Hazardous Materials|Shelter In Place/i, ['chemical']],
    [/Radiological|Nuclear Power Plant/i, ['nuclear']],
    [/Evacuation/i, ['evacuate']]
  ];

  RD.NWS = {
    /* 'Tornado Warning' -> ['tornado']; an event with no match gives [] */
    hazards: function (event) {
      var out = [];
      event = String(event || '');
      RULES.forEach(function (r) {
        if (r[0].test(event)) r[1].forEach(function (id) { if (out.indexOf(id) < 0) out.push(id); });
      });
      return out;
    },
    /* the steps for an alert: his own steps that cover those disasters, the ones not done first.
       With no match, his family-plan steps (meeting places, contacts, leaving fast). */
    steps: function (event, ctx, state, limit) {
      var E = RD.engine, hz = RD.NWS.hazards(event);
      var mine = E.tasksFor(ctx);
      var pick = hz.length
        ? mine.filter(function (t) { return t.hz.some(function (h) { return hz.indexOf(h) >= 0; }); })
        : mine.filter(function (t) { return t.area === 'plan'; });
      pick.sort(function (a, b) {
        var da = E.isDone(a, state) ? 1 : 0, db = E.isDone(b, state) ? 1 : 0;
        return da - db || a.rank - b.rank || a.cost - b.cost;
      });
      return pick.slice(0, limit || 6);
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

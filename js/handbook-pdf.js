/* Prepare Me: builds the survival handbook as a PDF description for pdfmake (loaded from cdnjs only when he asks for
   the PDF). No page code here, so the tests can build the whole book in Node and check it. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var E = RD.engine;

  /* long web addresses: let them wrap after each slash */
  function wrapUrl(u) { return u.replace(/\//g, '/​'); }
  function by(list) { return list.filter(function (v, i, a) { return a.indexOf(v) === i; }); }
  function joinAnd(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
  function nice(d) { return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }); }

  /* which guides: 'all', 'basics', or a list of step ids. Always in the book's order: area by area, as on the Guides page. */
  RD.handbookIds = function (pick) {
    var have = function (t) { return !!(RD.HOWTO || {})[t.id]; };
    if (pick === 'basics') return RD.BASICS.filter(function (id) { return E.task(id) && RD.HOWTO[id]; });
    var want = pick === 'all' ? null : pick;
    var out = [];
    RD.AREAS.forEach(function (a) {
      RD.TASKS.forEach(function (t) { if (t.area === a.id && have(t) && (!want || want.indexOf(t.id) >= 0)) out.push(t.id); });
    });
    return out;
  };

  /* opts: { ctx: household context, household: 'a household of 4' etc., paper: 'LETTER' or 'A4', date: Date } */
  RD.handbookDoc = function (ids, opts) {
    var H = RD.HANDBOOK, ctx = opts.ctx, date = opts.date || new Date();
    var fill = function (s) { return E.fill(s, ctx); };
    var lineW = (opts.paper === 'A4' ? 595 : 612) - 108;
    var content = [], used = {};

    /* the cover */
    content.push({ text: 'Prepare Me', style: 'kicker', margin: [0, 150, 0, 6] });
    content.push({ text: H.title, style: 'cover' });
    content.push({ text: ids.length + (ids.length === 1 ? ' guide' : ' guides') + ', printed ' + nice(date) + '.', style: 'coverSub', margin: [0, 12, 0, 0] });
    content.push({ text: 'Amounts in this copy are for ' + opts.household + '.', style: 'coverSub' });
    content.push({ text: 'preparemeapp.org', style: 'coverSub', margin: [0, 40, 0, 0] });

    /* how to use it, and where it comes from */
    content.push({ text: 'How to use this book', style: 'h1', pageBreak: 'before' });
    content.push({ ul: H.use, margin: [0, 0, 0, 14] });
    content.push({ text: 'Where this comes from', style: 'h1' });
    H.where.forEach(function (p) { content.push({ text: p, margin: [0, 0, 0, 8] }); });

    content.push({ toc: { title: { text: 'Contents', style: 'h1' } }, pageBreak: 'before' });

    var area = null;
    ids.forEach(function (id, n) {
      var t = E.task(id), h = RD.HOWTO[id];
      if (!t || !h) return;
      if (t.area !== area) {
        area = t.area;
        var a = RD.AREAS.filter(function (x) { return x.id === area; })[0];
        content.push({ text: a ? a.name : area, style: 'area', tocItem: true, tocStyle: { bold: true }, pageBreak: 'before' });
      } else if (n) content.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: lineW, y2: 0, lineWidth: 0.5, lineColor: '#999' }], margin: [0, 10, 0, 4] });

      content.push({ text: t.title, style: 'h2', tocItem: true, tocMargin: [14, 0, 0, 0] });
      content.push({ text: [{ text: 'Why: ', bold: true }, t.why], margin: [0, 0, 0, 4] });
      content.push({ table: { widths: [70, '*'], body: [['Who', fill(t.who)], ['When', fill(t.when)], ['Done looks like', fill(t.done)]].map(function (r) { return [{ text: r[0], bold: true }, r[1]]; }) }, layout: 'noBorders', margin: [0, 2, 0, 6] });
      content.push({ text: 'The short version', style: 'h3' });
      content.push({ ol: t.steps.map(fill), margin: [0, 0, 0, 6] });

      content.push({ text: 'How to do it, in full', style: 'h3' });
      content.push({ text: h.intro, margin: [0, 0, 0, 4] });
      h.parts.forEach(function (p) {
        content.push({ text: p.head, style: 'h4' });
        if (p.rows) {
          content.push({ table: { headerRows: 1, widths: p.cols.map(function () { return '*'; }),
            body: [p.cols.map(function (c) { return { text: c, bold: true }; })].concat(p.rows) }, layout: 'lightHorizontalLines', fontSize: 9, margin: [0, 2, 0, 4] });
          if (p.note) content.push({ text: p.note, italics: true, margin: [0, 0, 0, 4] });
        } else content.push({ ul: p.items, margin: [0, 0, 0, 4] });
      });
      if (h.mistakes && h.mistakes.length) {
        content.push({ text: 'Mistakes to skip', style: 'h4' });
        content.push({ ul: h.mistakes, margin: [0, 0, 0, 4] });
      }
      /* the credit for this guide: each source by name, title and web address */
      var srcs = by(h.sources.concat(t.links)).filter(function (k) { return RD.LINKS[k]; });
      srcs.forEach(function (k) { used[k] = 1; });
      content.push({ text: 'Sources. In our own words, from ' + joinAnd(by(h.sources.map(function (k) { return RD.LINKS[k].by; }))) + '. Checked ' + nice(new Date(h.checked + 'T12:00:00')) + '.', style: 'src', margin: [0, 6, 0, 2] });
      content.push({ ul: srcs.map(function (k) { var l = RD.LINKS[k]; return { text: [{ text: l.by + ': ', bold: true }, l.title + '. ', { text: wrapUrl(l.url), link: l.url, color: '#7a3d12' }] }; }), style: 'src' });
    });

    /* every source in this copy, by group */
    content.push({ text: 'Sources and credits', style: 'area', tocItem: true, tocStyle: { bold: true }, pageBreak: 'before' });
    content.push({ text: H.credits, margin: [0, 0, 0, 10] });
    var groups = {};
    Object.keys(used).forEach(function (k) { var l = RD.LINKS[k]; (groups[l.by] = groups[l.by] || []).push(l); });
    Object.keys(groups).sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; }).forEach(function (g) {
      content.push({ text: g, style: 'h4' });
      content.push({ ul: groups[g].sort(function (a, b) { return a.title < b.title ? -1 : 1; }).map(function (l) { return { text: [l.title + '. ', { text: wrapUrl(l.url), link: l.url, color: '#7a3d12' }] }; }), style: 'src', margin: [0, 0, 0, 6] });
    });

    return {
      pageSize: opts.paper === 'A4' ? 'A4' : 'LETTER',
      pageMargins: [54, 54, 54, 60],
      info: { title: 'Prepare Me ' + H.title, author: 'Prepare Me', subject: 'Getting ready at home' },
      footer: function (cur, total) {
        return cur === 1 ? null : { text: 'Prepare Me ' + H.title + '   ·   page ' + cur + ' of ' + total, alignment: 'center', fontSize: 8, color: '#555', margin: [0, 24, 0, 0] };
      },
      content: content,
      defaultStyle: { fontSize: 10, lineHeight: 1.2 },
      styles: {
        kicker: { fontSize: 14, bold: true, color: '#9a4f1f' },
        cover: { fontSize: 40, bold: true },
        coverSub: { fontSize: 12, color: '#333' },
        h1: { fontSize: 18, bold: true, margin: [0, 0, 0, 10] },
        area: { fontSize: 22, bold: true, color: '#9a4f1f', margin: [0, 0, 0, 12] },
        h2: { fontSize: 15, bold: true, margin: [0, 6, 0, 4] },
        h3: { fontSize: 11.5, bold: true, margin: [0, 6, 0, 3] },
        h4: { fontSize: 10.5, bold: true, margin: [0, 5, 0, 2] },
        src: { fontSize: 8, color: '#333' }
      }
    };
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Prepare Me: draws a step's "How to do it" (data/howto.js). Used by coach.html (inside the step) and guides.html (public). */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var UI = RD.ui;

  RD.howto = function (id) { return (RD.HOWTO || {})[id] || null; };

  /* the guide body: intro, each part as a list or a table, the mistakes to skip, and the sources */
  UI.howto = function (id, opts) {
    var h = RD.howto(id), el = UI.el;
    if (!h) return null;
    opts = opts || {};
    var box = el('div', { class: 'howto' });
    box.appendChild(el('p', { class: 'howto-intro' }, h.intro));
    h.parts.forEach(function (p) {
      box.appendChild(el(opts.big ? 'h3' : 'h4', null, p.head));
      if (p.rows) {
        var table = el('table', { class: 'howto-table' }, [
          el('thead', null, el('tr', null, p.cols.map(function (c) { return el('th', { scope: 'col' }, c); }))),
          el('tbody', null, p.rows.map(function (r) { return el('tr', null, r.map(function (c, i) { return el(i ? 'td' : 'th', i ? null : { scope: 'row' }, c); })); }))
        ]);
        box.appendChild(el('div', { class: 'howto-scroll' }, table));
        if (p.note) box.appendChild(el('p', { class: 'howto-note' }, p.note));
      } else {
        box.appendChild(el('ul', null, p.items.map(function (s) { return el('li', null, s); })));
      }
    });
    if (h.mistakes && h.mistakes.length) {
      box.appendChild(el(opts.big ? 'h3' : 'h4', null, 'Mistakes to skip'));
      box.appendChild(el('ul', { class: 'howto-mistakes' }, h.mistakes.map(function (s) { return el('li', null, s); })));
    }
    box.appendChild(el('p', { class: 'howto-src' }, ['From ', h.sources.map(function (k) { return RD.LINKS[k].by; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).join(' and '),
      '. Checked ' + UI.date(h.checked + 'T12:00:00') + '.']));
    return box;
  };
})(typeof window !== 'undefined' ? window : globalThis);

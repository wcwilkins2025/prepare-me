/* Prepare Me: the written family plan. Draws the form from RD.PLAN, reads it back, and builds the two printed
   copies: the plan itself (blank lines where nothing is filled in, to finish by hand) and fold-over wallet cards. */
(function (root) {
  'use strict';
  var RD = root.RD, UI = RD.ui, el = UI.el, PL = RD.PLAN;
  var V = RD.planView = {};

  function allFields() { var o = []; PL.sections.forEach(function (s) { s.fields.forEach(function (f) { o.push(f); }); }); return o; }
  function cut(v, long) { return String(v == null ? '' : v).replace(/\s+$/, '').slice(0, long ? PL.limits.long : PL.limits.short); }

  /* only the known spots, as plain text, within the limits */
  V.clean = function (d) {
    d = d && typeof d === 'object' ? d : {};
    var out = { v: 1, people: [], f: {}, hz: {} };
    (Array.isArray(d.people) ? d.people : []).slice(0, PL.limits.people).forEach(function (p) {
      var q = {};
      PL.person.forEach(function (f) { if (p && p[f.id]) q[f.id] = cut(p[f.id], f.long); });
      out.people.push(q);
    });
    allFields().forEach(function (f) { if (d.f && d.f[f.id]) out.f[f.id] = cut(d.f[f.id], f.long); });
    RD.HAZARDS.forEach(function (h) { if (d.hz && d.hz[h.id]) out.hz[h.id] = cut(d.hz[h.id], true); });
    return out;
  };
  V.blank = function () { return { v: 1, people: [], f: {}, hz: {} }; };

  /* ---------- the form ---------- */
  var n = 0;
  function input(f, value, onChange, attrs) {
    var id = 'pf' + (++n);
    var box = el(f.long ? 'textarea' : 'input', Object.assign({ id: id, maxlength: f.long ? PL.limits.long : PL.limits.short, oninput: onChange },
      f.long ? { rows: 3 } : { type: f.tel ? 'tel' : 'text', autocomplete: f.tel ? 'tel' : 'off' }, attrs || {}));
    box.value = value || '';
    return el('div', { class: 'field' }, [el('label', { for: id }, f.label), f.hint ? el('span', { class: 'hint' }, f.hint) : null, box]);
  }

  V.form = function (form, data, hazards, opts) {
    UI.clear(form);
    var change = opts.onChange;

    /* people */
    var list = el('div', { class: 'people' });
    function person(p) {
      var row = el('div', { class: 'person' });
      PL.person.forEach(function (f) { row.appendChild(input(f, p[f.id], change, { 'data-p': f.id })); });
      row.appendChild(el('div', { class: 'actions' }, el('button', { class: 'btn ghost', type: 'button', onclick: function () {
        row.remove(); renumber(); change();
      } }, 'Remove this person')));
      list.appendChild(row);
      renumber();
    }
    function renumber() {
      var rows = list.querySelectorAll('.person');
      Array.prototype.forEach.call(rows, function (r, i) {
        var h = r.querySelector('h4') || r.insertBefore(el('h4'), r.firstChild);
        h.textContent = 'Person ' + (i + 1);
      });
      add.disabled = rows.length >= PL.limits.people;
    }
    var add = el('button', { class: 'btn ghost', type: 'button', onclick: function () { person({}); change(); } }, 'Add a person');
    data.people.forEach(person);
    form.appendChild(el('fieldset', null, [el('legend', null, 'Who is in this plan'),
      el('p', { class: 'muted' }, 'Everyone who lives with you, and anyone you look after.'), list, el('div', { class: 'actions' }, add)]));
    renumber();

    /* the sections */
    PL.sections.forEach(function (s) {
      var fs = el('fieldset', null, [el('legend', null, s.head), s.intro ? el('p', { class: 'muted' }, s.intro) : null]);
      var g = el('div', { class: 'fields' });
      s.fields.forEach(function (f) { g.appendChild(input(f, data.f[f.id], change, { 'data-f': f.id })); });
      fs.appendChild(g);
      form.appendChild(fs);
    });

    /* what we do for each disaster on his list */
    var hz = el('fieldset', null, [el('legend', null, 'What we do for each disaster'),
      el('p', { class: 'muted' }, opts.hasAssessment ? 'These are the disasters on your list. ' + PL.hzHint
        : 'Take the assessment to list the disasters for your county. For now, these are the ones every home plans for. ' + PL.hzHint)]);
    var g = el('div', { class: 'fields' });
    hazards.forEach(function (h) { g.appendChild(input({ id: h.id, label: h.name, long: true }, data.hz[h.id], change, { 'data-h': h.id, rows: 2 })); });
    hz.appendChild(g);
    form.appendChild(hz);
  };

  V.read = function (form) {
    var d = { people: [], f: {}, hz: {} };
    Array.prototype.forEach.call(form.querySelectorAll('.person'), function (r) {
      var p = {};
      Array.prototype.forEach.call(r.querySelectorAll('[data-p]'), function (x) { if (x.value.trim()) p[x.getAttribute('data-p')] = x.value; });
      d.people.push(p);
    });
    Array.prototype.forEach.call(form.querySelectorAll('[data-f]'), function (x) { if (x.value.trim()) d.f[x.getAttribute('data-f')] = x.value; });
    Array.prototype.forEach.call(form.querySelectorAll('[data-h]'), function (x) { if (x.value.trim()) d.hz[x.getAttribute('data-h')] = x.value; });
    return V.clean(d);
  };

  /* ---------- printed copies ---------- */
  function val(v, cls) { return v ? el('span', { class: cls || null }, v) : el('span', { class: 'blank' + (cls ? ' ' + cls : '') }, ' '); }
  function named(people) { return people.filter(function (p) { return p.name || p.phone; }); }

  V.planPage = function (data, hazards, when) {
    var out = el('div', { class: 'plan-print' });
    out.appendChild(el('h1', null, 'Our family emergency plan'));
    out.appendChild(el('p', { class: 'pp-sub' }, (when ? 'Updated ' + when.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) + '. ' : '') +
      'In an emergency, call 911 first. Keep a copy on the fridge, one in the car and one in each go-bag. Look it over every six months.'));

    /* room to add someone by hand: two blank rows, and at least five in all */
    var people = named(data.people), rows = people.concat([{}, {}, {}, {}, {}].slice(0, Math.max(2, 5 - people.length)));
    out.appendChild(el('h2', null, 'Who is in this plan'));
    out.appendChild(el('table', { class: 'pp-table' }, [
      el('thead', null, el('tr', null, PL.person.map(function (f) { return el('th', { class: 'pp-' + f.id }, f.label); }))),
      el('tbody', null, rows.map(function (p) { return el('tr', null, PL.person.map(function (f) { return el('td', null, val(p[f.id])); })); }))
    ]));

    PL.sections.forEach(function (s) {
      var dl = el('dl', { class: 'pp-dl' });
      s.fields.forEach(function (f) { dl.appendChild(el('dt', null, f.label)); dl.appendChild(el('dd', null, val(data.f[f.id], f.long ? 'pp-long' : null))); });
      out.appendChild(el('section', { class: 'pp-sec' }, [el('h2', null, s.head), dl]));
    });

    if (hazards.length) {
      out.appendChild(el('section', { class: 'pp-sec' }, [el('h2', null, 'What we do for each disaster'),
        el('table', { class: 'pp-table' }, [el('thead', null, el('tr', null, [el('th', null, 'Disaster'), el('th', null, 'Where we go, and when we leave')])),
          el('tbody', null, hazards.map(function (h) { return el('tr', null, [el('td', null, h.name), el('td', null, val(data.hz[h.id], 'pp-long'))]); }))])]));
    }
    out.appendChild(el('p', { class: 'pp-foot' }, 'Laid out after the Ready.gov family emergency plan (ready.gov/plan). Made with Prepare Me, preparemeapp.org.'));
    return out;
  };

  /* fold-over wallet cards, one per person: contacts and meeting spots on the front, everyone's phones on the back */
  V.cards = function (data) {
    var people = named(data.people), f = data.f;
    var who = people.length ? people : [{}, {}, {}, {}];
    var phones = (people.length ? people : [{}, {}, {}, {}]).slice(0, 8);
    function line(label, v) { return el('div', { class: 'wc-line' }, [el('b', null, label + ' '), val(v)]); }
    var out = el('div', { class: 'wallet-cards' });
    who.slice(0, 10).forEach(function (p) {
      out.appendChild(el('div', { class: 'wallet-card' }, [
        el('div', { class: 'wc-half' }, [
          el('div', { class: 'wc-head' }, ['Emergency card', p.name ? ': ' + p.name : '']),
          el('div', { class: 'wc-line' }, el('b', null, 'In an emergency, call 911.')),
          line('Out-of-town contact:', [f.outName, f.outPhone].filter(Boolean).join(', ')),
          line('Local contact:', [f.localName, f.localPhone].filter(Boolean).join(', ')),
          line('Meet outside home:', f.meetNear),
          line('Meet in neighborhood:', f.meetHood),
          line('Meet out of town:', f.meetFar)
        ]),
        el('div', { class: 'wc-half' }, [el('div', { class: 'wc-head' }, 'Family phones')]
          .concat(phones.map(function (q) { return el('div', { class: 'wc-line' }, [val(q.name), ' ', val(q.phone)]); }))
          .concat([line('Home:', f.address), line('Doctor:', f.doctor), line('Pharmacy:', f.pharmacy)]))
      ]));
    });
    out.appendChild(el('p', { class: 'pp-foot' }, 'Cut along the dashed lines, fold in half, and keep one in every wallet, purse and backpack.'));
    return out;
  };

  /* print one of the two copies, then put the page back */
  V.print = function (kind, data, hazards, when) {
    var planOut = UI.clear(UI.$('planOut')), cardOut = UI.clear(UI.$('cardOut'));
    if (kind === 'plan') planOut.appendChild(V.planPage(data, hazards, when)); else cardOut.appendChild(V.cards(data));
    var cls = kind === 'plan' ? 'printing-plan' : 'printing-card';
    document.body.classList.add(cls);
    var done = function () { document.body.classList.remove(cls); root.removeEventListener('afterprint', done); };
    root.addEventListener('afterprint', done);
    root.print();
  };
})(typeof window !== 'undefined' ? window : globalThis);

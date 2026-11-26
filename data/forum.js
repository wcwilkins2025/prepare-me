/* Prepare Me: the forum's boards, house rules and limits. Loaded after data/tasks.js.
   The board ids must match the list in supabase/schema.sql (a test checks). The limits match the checks there too. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  var ABOUT = {
    water: 'Storing, treating and finding water.',
    food: 'Pantry, rotation, cooking without power.',
    sanitation: 'Toilets with no water, trash, keeping clean and well.',
    power: 'Outages, backup power, staying warm or cool.',
    medical: 'First aid, medicine, care at home.',
    comms: 'Radios, phones, staying in touch.',
    plan: 'Meeting places, kids, pets, leaving fast.',
    home: 'Fire, locks, smoke alarms, the house itself.',
    skills: 'Classes, practice, teaching the family.',
    money: 'Savings, papers, insurance, a lost paycheck.'
  };
  RD.FORUM = {
    boards: [{ id: 'start', name: 'Start here', about: 'New here? Ask anything about getting started or using Prepare Me.' }]
      .concat(RD.AREAS.map(function (a) { return { id: a.id, name: a.name, about: ABOUT[a.id] || '' }; }))
      .concat([{ id: 'disasters', name: 'Disasters', about: 'Storms, floods, fire, quakes, outages, and getting ready for the ones in your county.' }]),
    rules: [
      'Be calm and kind.',
      'Ask anything. There are no dumb questions.',
      'No selling, ads or links to shops.',
      'No personal details: no full names, addresses, phone numbers or where your supplies are kept.',
      'In an emergency, call 911. This forum is not watched around the clock.'
    ],
    limits: { title: [5, 120], body: 4000, reply: 2000, name: [2, 30], reason: 300, perMinute: 3, perDay: 30 },
    /* a display name: 2 to 30 letters, numbers, spaces, . _ ' -; starts with a letter or number. No @, so never an email. */
    nameOk: function (n) {
      n = String(n || '').trim();
      return n.length >= 2 && n.length <= 30 && /^[A-Za-z0-9][A-Za-z0-9 ._'-]*[A-Za-z0-9.]$/.test(n) && n.indexOf('  ') < 0;
    },
    board: function (id) { for (var i = 0; i < RD.FORUM.boards.length; i++) if (RD.FORUM.boards[i].id === id) return RD.FORUM.boards[i]; return null; }
  };
})(typeof window !== 'undefined' ? window : globalThis);

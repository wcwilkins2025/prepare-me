/* Prepare Me: the printable survival handbook. The Survival basics list (also the top of the Guides page), and the
   words at the front and back of the book. The guides themselves come from data/howto.js and data/tasks.js. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  /* water, a toilet, food, heat, first aid and getting out */
  RD.BASICS = ['water-3day', 'water-treat', 'home-toilet', 'med-hygiene', 'food-3day', 'food-cook', 'food-fire', 'power-heat', 'power-co', 'med-kit', 'med-cpr-video', 'plan-gobag', 'comm-radio'];
  RD.HANDBOOK = {
    title: 'Survival Handbook',
    use: [
      'Keep a printed copy with your kit. It works with no power and no signal.',
      'Each guide starts with why it matters and the short version. The full how-to follows.',
      'Amounts like gallons of water are worked out for the household named on the first page.',
      'In an emergency, call 911 first.'
    ],
    where: [
      'Every guide is written in our own words. The facts come from the sources named at the end of each guide, and every source is listed with its web address at the back of this book.',
      'Facts were checked against those sources on the date shown with each guide. Advice changes, so check the source for the latest word, most of all for medical care.',
      'Prepare Me is not part of, and is not endorsed by, any of the groups named in this book. Naming a source is a credit, not a claim that it backs Prepare Me.',
      'This is a plain guide, not medical, legal or money advice.'
    ],
    credits: 'These are the pages the guides in this book were checked against. The wording in this book is our own. The facts, and the credit for them, belong to these groups.'
  };
})(typeof window !== 'undefined' ? window : globalThis);

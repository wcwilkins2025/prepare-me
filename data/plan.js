/* Prepare Me: the written family plan. What the form asks, in the order of the Ready.gov family plan form.
   plan.html draws the form and the printed copies from this list; the tests check it. Nothing here asks for
   Social Security, bank, card or policy numbers: a plan never needs them. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  RD.PLAN = {
    limits: { people: 20, short: 120, long: 1000 },
    /* one row per person in the plan */
    person: [
      { id: 'name', label: 'Name' },
      { id: 'phone', label: 'Cell phone', tel: true },
      { id: 'where', label: 'Work or school most days', hint: 'Name and address.' },
      { id: 'wherePhone', label: 'Phone there', tel: true },
      { id: 'health', label: 'Medicines, allergies or health needs', long: true, hint: 'What someone helping would need to know.' }
    ],
    sections: [
      { id: 'contacts', head: 'Who to call', intro: 'Pick a contact outside your area. After a disaster, a long-distance call or a text often gets through when local calls do not. Everyone checks in with this person.', fields: [
        { id: 'outName', label: 'Out-of-town contact', card: true },
        { id: 'outPhone', label: 'Their phone', tel: true, card: true },
        { id: 'localName', label: 'Local contact', card: true },
        { id: 'localPhone', label: 'Their phone', tel: true, card: true },
        { id: 'neighbor', label: 'A neighbor who can help, and their phone' }
      ] },
      { id: 'meet', head: 'Where we meet', intro: 'Three places, so everyone knows where to go if you cannot reach each other.', fields: [
        { id: 'meetNear', label: 'Right outside the home', hint: 'A mailbox, a tree, a neighbor\'s driveway. In a fire, everyone goes here and stays.', card: true },
        { id: 'meetHood', label: 'In the neighborhood', hint: 'A church, school or store lot you can all reach on foot.', card: true },
        { id: 'meetFar', label: 'Out of town', hint: 'Family or a friend an hour or more away. Name and address.', card: true },
        { id: 'routes', label: 'Ways out of town', long: true, hint: 'Two routes to the out-of-town spot.' }
      ] },
      { id: 'kids', head: 'Children', intro: 'Leave this blank if no children live with you.', fields: [
        { id: 'pickup', label: 'Who picks up the children', hint: 'And who picks them up if that person cannot. Make sure the school has both names.' },
        { id: 'schoolPlan', label: 'What the school or daycare does in an emergency', long: true }
      ] },
      { id: 'home', head: 'Our home', fields: [
        { id: 'address', label: 'Home address', hint: 'Optional. It helps a sitter or a guest call 911.', card: true },
        { id: 'shelterIn', label: 'Where we shelter inside', hint: 'The lowest floor, an inside room with no windows.' },
        { id: 'offWater', label: 'Water shutoff', hint: 'Where it is, and what you need to turn it.' },
        { id: 'offGas', label: 'Gas shutoff', hint: 'Where it is. Only turn it off if you smell gas or hear a hiss, then call the gas company.' },
        { id: 'offPower', label: 'Electric panel', hint: 'Where it is.' }
      ] },
      { id: 'supplies', head: 'Where things are', intro: 'Where each thing is kept, so anyone in the house can find it in the dark.', fields: [
        { id: 'atWater', label: 'Stored water and food' },
        { id: 'atBags', label: 'Go-bags (bug-out bags)' },
        { id: 'atFirstAid', label: 'First aid kit' },
        { id: 'atLights', label: 'Flashlights, radio and batteries' },
        { id: 'atExt', label: 'Fire extinguisher' },
        { id: 'atPapers', label: 'Copies of important papers', hint: 'Where they are kept. Not the numbers themselves.' }
      ] },
      { id: 'health', head: 'Doctors and insurance', intro: 'Names and phone numbers only. Do not type policy, account or Social Security numbers here.', fields: [
        { id: 'doctor', label: 'Doctor and phone', card: true },
        { id: 'pharmacy', label: 'Pharmacy and phone', card: true },
        { id: 'insurance', label: 'Health insurance company and phone' },
        { id: 'homeIns', label: 'Home or renters insurance company and phone' },
        { id: 'device', label: 'Medical devices and how to keep them running', long: true }
      ] },
      { id: 'pets', head: 'Pets and animals', fields: [
        { id: 'pets', label: 'Pets, their food and medicine, and where they can go', long: true, hint: 'Many shelters take only service animals. Name a pet-friendly place to stay.' },
        { id: 'vet', label: 'Vet and phone' }
      ] },
      { id: 'other', head: 'Anything else', fields: [
        { id: 'notes', label: 'Notes for the family', long: true }
      ] }
    ],
    /* what each household writes for each disaster on its list */
    hzHint: 'Where you go, and when you leave.'
  };
})(typeof window !== 'undefined' ? window : globalThis);

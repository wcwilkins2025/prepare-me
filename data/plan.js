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
        { id: 'outName', label: 'Out-of-town contact', card: true, ask: 'Who is our out-of-town contact?', with: 'outPhone' },
        { id: 'outPhone', label: 'Their phone', tel: true, card: true },
        { id: 'localName', label: 'Local contact', card: true, ask: 'Who is our local contact?', with: 'localPhone' },
        { id: 'localPhone', label: 'Their phone', tel: true, card: true },
        { id: 'neighbor', label: 'A neighbor who can help, and their phone', ask: 'Which neighbor can help, and how do we reach them?' }
      ] },
      { id: 'meet', head: 'Where we meet', intro: 'Three places, so everyone knows where to go if you cannot reach each other.', fields: [
        { id: 'meetNear', label: 'Right outside the home', hint: 'A mailbox, a tree, a neighbor\'s driveway. In a fire, everyone goes here and stays.', card: true, ask: 'Where do we meet right outside the home?' },
        { id: 'meetHood', label: 'In the neighborhood', hint: 'A church, school or store lot you can all reach on foot.', card: true, ask: 'Where do we meet in the neighborhood?' },
        { id: 'meetFar', label: 'Out of town', hint: 'Family or a friend an hour or more away. Name and address.', card: true, ask: 'Where do we meet out of town?' },
        { id: 'routes', label: 'Ways out of town', long: true, hint: 'Two routes to the out-of-town spot.', ask: 'What are our two ways out of town?' }
      ] },
      { id: 'kids', head: 'Children', intro: 'Leave this blank if no children live with you.', fields: [
        { id: 'pickup', label: 'Who picks up the children', hint: 'And who picks them up if that person cannot. Make sure the school has both names.', ask: 'Who picks up the children?' },
        { id: 'schoolPlan', label: 'What the school or daycare does in an emergency', long: true, ask: 'What does the school or daycare do in an emergency?' }
      ] },
      { id: 'home', head: 'Our home', fields: [
        { id: 'address', label: 'Home address', hint: 'Optional. It helps a sitter or a guest call 911.', card: true, ask: 'What is our home address?' },
        { id: 'shelterIn', label: 'Where we shelter inside', hint: 'The lowest floor, an inside room with no windows.', ask: 'Where do we shelter inside the house?' },
        { id: 'offWater', label: 'Water shutoff', hint: 'Where it is, and what you need to turn it.', ask: 'Where is the water shutoff, and what turns it?' },
        { id: 'offGas', label: 'Gas shutoff', hint: 'Where it is. Only turn it off if you smell gas or hear a hiss, then call the gas company.', ask: 'Where is the gas shutoff?' },
        { id: 'offPower', label: 'Electric panel', hint: 'Where it is.', ask: 'Where is the electric panel?' }
      ] },
      { id: 'supplies', head: 'Where things are', intro: 'Where each thing is kept, so anyone in the house can find it in the dark.', fields: [
        { id: 'atWater', label: 'Stored water and food', ask: 'Where are the stored water and food?' },
        { id: 'atBags', label: 'Go-bags (bug-out bags)', ask: 'Where are the go-bags?' },
        { id: 'atFirstAid', label: 'First aid kit', ask: 'Where is the first aid kit?' },
        { id: 'atLights', label: 'Flashlights, radio and batteries', ask: 'Where are the flashlights, radio and batteries?' },
        { id: 'atExt', label: 'Fire extinguisher', ask: 'Where is the fire extinguisher?' },
        { id: 'atPapers', label: 'Copies of important papers', hint: 'Where they are kept. Not the numbers themselves.', ask: 'Where are the copies of our important papers?' }
      ] },
      { id: 'health', head: 'Doctors and insurance', intro: 'Names and phone numbers only. Do not type policy, account or Social Security numbers here.', fields: [
        { id: 'doctor', label: 'Doctor and phone', card: true, ask: 'Who is our doctor, and what is the number?' },
        { id: 'pharmacy', label: 'Pharmacy and phone', card: true, ask: 'Which pharmacy do we use, and what is the number?' },
        { id: 'insurance', label: 'Health insurance company and phone', ask: 'Who is our health insurance company, and what is the number?' },
        { id: 'homeIns', label: 'Home or renters insurance company and phone', ask: 'Who is our home or renters insurance company, and what is the number?' },
        { id: 'device', label: 'Medical devices and how to keep them running', long: true, ask: 'How do we keep the medical devices running?' }
      ] },
      { id: 'pets', head: 'Pets and animals', fields: [
        { id: 'pets', label: 'Pets, their food and medicine, and where they can go', long: true, hint: 'Many shelters take only service animals. Name a pet-friendly place to stay.', ask: 'What is the plan for the pets?' },
        { id: 'vet', label: 'Vet and phone', ask: 'Who is our vet, and what is the number?' }
      ] },
      { id: 'other', head: 'Anything else', fields: [
        { id: 'notes', label: 'Notes for the family', long: true }
      ] }
    ],
    /* what each household writes for each disaster on its list */
    hzHint: 'Where you go, and when you leave.',
    /* flash cards from his own plan (js/cards.js) */
    askPhone: 'What is the cell phone number for {name}?',
    askHealth: 'What should someone helping {name} know about health and medicines?',
    askHz: '{hazard}: where do we go, and when do we leave?'
  };
})(typeof window !== 'undefined' ? window : globalThis);

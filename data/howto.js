/* Prepare Me: "How to do it", the full how-to behind a step. Keyed by step id in data/tasks.js.
   Every fact comes from the step's sources (data/links.js), checked against the source page on the date in "checked".
   Shape: { intro, parts: [{ head, items: [..] } or { head, cols: [..], rows: [[..]] , note }], mistakes: [..], sources: [link ids], checked }
   No household numbers here ({people} and the like): these pages are also read signed out, on guides.html. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};
  RD.HOWTO = {

    'water-3day': {
      intro: 'Stored water is the first thing to set up. It costs almost nothing if you use jugs you already have.',
      parts: [
        { head: 'How much', items: [
          'One gallon a person a day. That covers drinking, cooking and brushing teeth.',
          'Store three days at the least. Two weeks is better when you can.',
          'Store more for someone who is pregnant or sick, for pets, or if you live where it is hot.'
        ] },
        { head: 'Containers that work', items: [
          'Best: food-grade water containers, made for storing water.',
          'Fine: soda bottles and juice jugs with caps that close tight.',
          'The container should close tight, not break if dropped, and pour easily. No glass.',
          'Never use anything that held bleach, pesticide or any other chemical.'
        ] },
        { head: 'Clean the containers', items: [
          'Wash each one with dish soap and rinse it well.',
          'Mix 1 teaspoon of plain, unscented bleach into 1 quart (4 cups) of water. The bleach label should say 5% to 9% sodium hypochlorite.',
          'Pour some in, cap it and shake, so it touches every inside surface.',
          'Wait 30 seconds. Pour it out and let the container air-dry.'
        ] },
        { head: 'Fill, label and store', items: [
          'Fill with clean tap water and cap it tight.',
          'Write "drinking water" and the date on each one.',
          'Keep it somewhere cool, 50°F to 70°F, out of the sun.',
          'Keep it away from gas, paint, pesticides and other chemicals.',
          'Swap in fresh water every six months. Store-bought water keeps until the date on the bottle.'
        ] },
        { head: 'When you use it', items: [
          'Pour it out, or use a clean scoop each time.',
          'Keep hands out of the water and the inside of the container.'
        ] }
      ],
      mistakes: [
        'Reusing a jug that once held a chemical.',
        'Storing water in a hot garage next to the gas can.',
        'Skipping the date, then not knowing how old the water is.'
      ],
      sources: ['cdc-store', 'ready-water'],
      checked: '2026-11-21'
    },

    'water-treat': {
      intro: 'Stored water runs out. These are the ways to make more water safe to drink, from the CDC. Boiling is the best.',
      parts: [
        { head: 'Boil it (best)', items: [
          'If the water is cloudy, let it settle, or strain it through a clean cloth, paper towel or coffee filter.',
          'Bring it to a rolling boil for 1 minute. Above 6,500 feet, boil it for 3 minutes.',
          'Let it cool. Store it in clean containers with tight lids.',
          'Flat taste: pour it back and forth between two containers, or add a pinch of salt per quart.'
        ] },
        { head: 'Bleach it', items: [
          'Use plain, unscented bleach. The label should say 5% to 9% sodium hypochlorite.',
          'If the label has directions for drinking water, follow them.',
          'Strain cloudy water first. Add the bleach, stir well, and wait at least 30 minutes before drinking.'
        ] },
        { head: 'How much bleach (5% to 9%)', cols: ['Water', 'Dropper', 'Measuring spoon'], rows: [
          ['1 quart', '2 drops', 'Too small to measure; use a dropper'],
          ['1 gallon', '8 drops', 'A little less than 1/8 teaspoon'],
          ['5 gallons', '40 drops', '1/2 teaspoon']
        ], note: 'Double it if the water is cloudy, colored or very cold.' },
        { head: 'Tablets and drops', items: [
          'Follow the label. Each one is made for a set amount of water.',
          'They kill germs but may not kill every parasite. Chlorine dioxide tablets work on more of them when used as directed.',
          'Skip iodine if you are pregnant or have thyroid trouble. No one should drink iodine-treated water for more than a few weeks.'
        ] },
        { head: 'Filters', items: [
          'A camping filter takes out parasites but not viruses, and many do not take out bacteria.',
          'After filtering, add bleach or a tablet as well.'
        ] },
        { head: 'Sunlight, when you have nothing else', items: [
          'Fill clean, clear plastic bottles with clear water.',
          'Lay them on their side in the sun, on a dark surface if you can.',
          'Leave them 6 hours on a sunny day, or 2 days if it is cloudy.'
        ] }
      ],
      mistakes: [
        'Using scented bleach. It must be plain and unscented.',
        'Drinking it before the 30 minutes are up.',
        'Thinking boiling or bleach fixes water with fuel or chemicals in it. It does not. Use bottled water or find another source.'
      ],
      sources: ['cdc-safe'],
      checked: '2026-11-21'
    },

    'food-fridge': {
      intro: 'In an outage the fridge and freezer keep food cold for a while if you leave them shut. These are the USDA rules.',
      parts: [
        { head: 'Before an outage', items: [
          'Put an appliance thermometer in the fridge and one in the freezer. The fridge should read 40°F or below, the freezer 0°F or below.',
          'Keep the freezer full. Fill empty space with frozen jugs of water.',
          'Have a cooler and some frozen gel packs or ice.'
        ] },
        { head: 'How long it holds', cols: ['Where', 'Keeps food safe', 'If the doors stay shut'], rows: [
          ['Fridge', 'About 4 hours', 'Yes'],
          ['Full freezer', 'About 48 hours', 'Yes'],
          ['Half-full freezer', 'About 24 hours', 'Yes']
        ] },
        { head: 'During the outage', items: [
          'Keep the doors shut.',
          'Past 4 hours, move fridge food into a cooler with ice. Keep adding ice so it stays at 40°F or below.',
          'For a long outage, dry ice or block ice helps. 50 pounds of dry ice holds an 18 cubic foot freezer about 2 days. Never touch dry ice bare-handed or set it right on food.',
          'In snow, do not put food outside. Fill buckets or cans with water, set them outside to freeze, and use that ice.'
        ] },
        { head: 'Throw out after 4 hours without power', items: [
          'Meat, poultry, fish, eggs and leftovers.',
          'Lunch meat and hot dogs.',
          'Milk, cream, yogurt, sour cream and soft cheese.',
          'Casseroles, soups, stews, pizza and mixed salads.',
          'Cut fruit, cooked vegetables and opened juice.',
          'Creamy dressings, doughs and batters, cream pies and cream-filled pastries.'
        ] },
        { head: 'Usually fine to keep', items: [
          'Hard cheese, butter and margarine.',
          'Whole fruit and vegetables, unopened juice, dried fruit and nuts.',
          'Bread, rolls, muffins and fruit pies.',
          'Mustard, ketchup, pickles, jam and other high-acid foods.',
          'Frozen food that still has ice crystals, or stayed at 40°F or below, can go back in the freezer.'
        ] }
      ],
      mistakes: [
        'Opening the door to check. Every look lets the cold out.',
        'Tasting food to see if it is still good. Never do that.',
        'Keeping food that smells, looks or feels off. When in doubt, throw it out.'
      ],
      sources: ['usda-food'],
      checked: '2026-11-21'
    },

    'home-extinguisher': {
      intro: 'A small fire put out in seconds stays small. Pick the right extinguisher, know when to use it, and know when to just get out.',
      parts: [
        { head: 'Pick one', items: [
          'Get a multipurpose one, labeled A-B-C. It works on most home fires: wood and paper, grease and oil, and things plugged in.',
          'Look for the UL listed label.',
          'Get the biggest one you can handle easily.',
          'Reading the label: on a 1A:10B:C, the 1A means it works like 1.25 gallons of water, and the 10B means it can put out a grease or fuel fire up to 10 square feet.'
        ] },
        { head: 'Only use it if every answer is yes', items: [
          'Have I told everyone in the house there is a fire?',
          'Has someone called 911?',
          'Am I able to use it? Young children and older adults should not.',
          'Is the fire small, in one thing, like a pan or a wastebasket?',
          'Am I clear of the smoke?',
          'Do I have a clear way out behind me?',
          'Any "no": get everyone out and call 911 from a cell phone or a neighbor\'s phone.'
        ] },
        { head: 'Use it: PASS', items: [
          'Pull the pin. Hold it with the nozzle pointing away from you.',
          'Aim low, at the base of the fire.',
          'Squeeze the handle slowly and evenly.',
          'Sweep the nozzle side to side.'
        ] },
        { head: 'Check it monthly', items: [
          'Nothing blocks the way to it.',
          'The gauge needle is in the green.',
          'No dents, rust or cracked hose.',
          'Wipe off dust and grease.',
          'Read its label: some need shaking each month, some need testing every few years, some are thrown out when the pressure drops.',
          'Your fire department may offer training. Call and ask.'
        ] }
      ],
      mistakes: [
        'Mounting it by the stove, where you cannot reach it through the fire.',
        'Fighting a fire that is already spreading. Get out.',
        'Aiming at the flames instead of the base.'
      ],
      sources: ['usfa-ext'],
      checked: '2026-11-21'
    },

    'plan-gobag': {
      intro: 'A go-bag is what you grab when you have ten minutes to leave. This is Ready.gov\'s kit list, cut down to what one person can carry.',
      parts: [
        { head: 'The basics', items: [
          'Water and food that keeps, for at least a day.',
          'A flashlight and spare batteries.',
          'A phone charger and a charged backup battery.',
          'A small first aid kit.',
          'A whistle, to signal for help.',
          'A dust mask.',
          'Wet wipes, a few garbage bags and plastic ties.'
        ] },
        { head: 'Medicine and papers', items: [
          'Your prescription medicine, plus pain reliever and stomach medicine.',
          'Glasses or contact lens supplies.',
          'Copies of ID, insurance cards and bank details, in a waterproof bag or saved where you can reach them from a phone.',
          'Your family plan card with phone numbers and meeting spots.',
          'Cash in small bills. Card readers may be down.'
        ] },
        { head: 'Clothes and comfort', items: [
          'A full change of clothes for the season, and sturdy shoes.',
          'A warm blanket or sleeping bag if it fits.',
          'Toothbrush and personal care items.'
        ] },
        { head: 'If they come with you', items: [
          'A baby: formula, bottles, diapers, wipes and rash cream.',
          'Kids: a snack, a small toy or book, and their own small bag.',
          'Pets: food, water, a leash or carrier, and their shot records.'
        ] },
        { head: 'Pack and keep it', items: [
          'Use a backpack you already own. Put things in zip bags inside it.',
          'Add a paper map with your routes out marked.',
          'Keep it by the door or in the vehicle.',
          'Twice a year, swap the water, food and medicine, and check the batteries.'
        ] }
      ],
      mistakes: [
        'Packing more than you can carry for an hour.',
        'Letting the medicine in it run past its date.',
        'Keeping the only copy of your papers in the bag.'
      ],
      sources: ['ready-kit', 'redcross-kit'],
      checked: '2026-11-21'
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

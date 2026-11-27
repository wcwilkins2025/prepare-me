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
          'Fine: plastic soda bottles with caps that close tight. Not milk or juice jugs.',
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

    'water-find': {
      intro: 'Your house already holds clean water in the water heater, the pipes and the freezer. Learn now how to get it out safely.',
      parts: [
        { head: 'Where the safe water is', items: [
          'The tank on your water heater, the one that feeds your faucets and showers.',
          'The water still sitting in your pipes.',
          'Ice cubes made from clean water. Melt them in a clean pot.',
          'The liquid in canned fruit and vegetables.',
          'The toilet tank, not the bowl, if the water is clear and no tank cleaner has ever been used in it.'
        ] },
        { head: 'Never drink these', items: [
          'Water from radiators or boilers, or from a tank that feeds the home heating system. In older homes, make sure you use the tap water heater, not the heating tank.',
          'Water from a waterbed.',
          'Pool or spa water. It is fine for washing and cleaning, but not for drinking.',
          'Flood water, or any water that smells of fuel or chemicals.'
        ] },
        { head: 'Protect it first', items: [
          'If you hear of broken water or sewer lines, or local officials warn of a problem, close your main water valve.',
          'That keeps bad water out of the heater and pipes.',
          'Find the main valve now. Show the other adults how to close it.'
        ] },
        { head: 'Drain the water heater', items: [
          'Turn off the electricity or gas to the heater first.',
          'Close the cold water intake valve at the tank.',
          'Turn on a hot water faucet so air can get in.',
          'Open the drain at the bottom and let the water run into a clean container.',
          'Refill the tank before you turn the power or gas back on.',
          'If the gas was shut off, you will need a professional to turn it back on.'
        ] },
        { head: 'Drain the pipes', items: [
          'Turn on the highest faucet in the house to let air into the pipes. A little water will trickle out.',
          'Then collect water from the lowest faucet in the house.',
          'If you are not sure the water is clean, boil or treat it before you drink it.'
        ] }
      ],
      mistakes: [
        'Draining the tank that feeds the radiators instead of the tap water heater.',
        'Turning the heater back on while the tank is empty.',
        'Leaving the main valve open after a water main break is reported.'
      ],
      sources: ['cdc-findwater', 'fema-foodwater', 'epa-emergwater', 'cdc-safe'],
      checked: '2026-11-21'
    },

    'water-rotate': {
      intro: 'Water you bottle yourself needs a fresh start every six months. A repeating reminder makes it a short chore.',
      parts: [
        { head: 'How long it keeps', items: [
          'Water you filled yourself: replace it every six months.',
          'Store-bought water in its sealed bottle: keep it until the date on the bottle.',
          'Write "drinking water" and the fill date on every container, so you always know which is which.'
        ] },
        { head: 'Set the reminder', items: [
          'Put a reminder on your phone calendar six months from today, set to repeat.',
          'Name it so you know what to do, like "Swap stored water and check bleach."',
          'Once a year, also look over your whole kit and update it as your family changes.'
        ] },
        { head: 'On swap day', items: [
          'Do not pour the old water down the drain. Use it on house plants or the garden.',
          'Wash each container with dish soap and rinse it well.',
          'Sanitize it: 1 teaspoon of plain, unscented bleach in 1 quart of water. Cap, shake so it touches every surface, wait 30 seconds, pour it out, and let it air-dry.',
          'Refill with clean tap water, cap it tight, and write the new date.'
        ] },
        { head: 'Check where it sits', items: [
          'The spot should stay cool, about 50°F to 70°F, and out of direct sun.',
          'Keep it away from gas, pesticides and other chemicals.',
          'Keep the caps tight, and keep hands out of the water when you use it.'
        ] },
        { head: 'Keep the bleach fresh too', items: [
          'Keep a bottle of plain, unscented bleach with your water. The label should say 5% to 9% sodium hypochlorite.',
          'Bleach for treating water should be fresh, stored at room temperature for less than a year.',
          'Swap in a new bottle about once a year, on one of your swap days.'
        ] }
      ],
      mistakes: [
        'Skipping the date, then guessing how old the water is.',
        'Dumping good water down the sink when the plants could use it.',
        'Counting on a bottle of bleach that has sat in the garage for years.'
      ],
      sources: ['cdc-store', 'ready-water', 'ready-drought', 'epa-emergwater', 'ready-kit'],
      checked: '2026-11-21'
    },

    'water-well': {
      intro: 'On a well, an outage can also mean no water. Know what your well needs and how to keep its water safe.',
      parts: [
        { head: 'Plan for no pump', items: [
          'An electric well pump stops when the power goes out, so stored water matters more for you.',
          'Store at least 1 gallon a person a day. Try for two weeks.',
          'Your water heater and pipes still hold water you can drain in an outage.',
          'If you fill your own jugs from the well, add 2 drops of plain, unscented bleach to each gallon, because well water has no chlorine in it.'
        ] },
        { head: 'If you use a generator', items: [
          'Run it outdoors only, at least 20 feet from windows, doors and attached garages.',
          'Put carbon monoxide detectors on every level of the house.',
          'Keep it dry. A wet generator, or anything plugged into it, can shock you.',
          'Let it cool before you add fuel.',
          'Plug things into it with heavy-duty extension cords, and follow the maker\'s instructions exactly.'
        ] },
        { head: 'Test the water every year', items: [
          'Test once a year for coliform bacteria, nitrates, total dissolved solids and pH.',
          'Use a lab that is certified for drinking water. Your local health department can point you to one, and may test for free.',
          'Test right away after a flood, after any repair to the well, or if the water changes in smell, color or taste.',
          'Test more often if small children, older adults or someone pregnant or nursing lives with you.'
        ] },
        { head: 'After a flood or disaster', items: [
          'If floodwater reached the well, or you think it is contaminated, do not drink the water. Use bottled water.',
          'Call your local or state health department or Extension office for advice for your area.',
          'Disinfecting a well is a job for a well or pump contractor. Never go down into a well pit. Gases can build up there.',
          'Before the power goes back on to the well, a qualified electrician or pump contractor should check the wiring.',
          'Until the water is tested, boil it at a rolling boil for 1 minute. Testing is done 7 to 10 days after the well is disinfected.',
          'If the water smells of fuel or chemicals, boiling will not fix it. Use bottled water and call the health department.'
        ] },
        { head: 'Everyday care', items: [
          'Keep the ground sloped so rain runs away from the well.',
          'Keep a cap or seal on the well.',
          'Do not mix or use pesticides, fertilizer, fuel or other chemicals near it.',
          'Look for a cracked casing or a broken cap now and then.',
          'If the pump turns on when no water is running, you have a leak.'
        ] }
      ],
      mistakes: [
        'Running a generator in the garage or by an open window.',
        'Drinking well water after a flood before it has been tested.',
        'Fixing wet wiring at the well yourself.'
      ],
      sources: ['cdc-wells', 'epa-wells', 'ready-power', 'ready-drought', 'fema-foodwater'],
      checked: '2026-11-21'
    },

    'water-2week': {
      intro: 'The CDC says to try for two weeks of stored water. Build it a few jugs at a time.',
      parts: [
        { head: 'How much', cols: ['People', 'Three days', 'Two weeks'], rows: [
          ['1', '3 gallons', '14 gallons'],
          ['2', '6 gallons', '28 gallons'],
          ['4', '12 gallons', '56 gallons'],
          ['6', '18 gallons', '84 gallons']
        ], note: 'At 1 gallon a person a day. Store more for children, anyone pregnant, nursing or sick, and pets. In very hot weather, water needs can double.' },
        { head: 'Containers', items: [
          'Best: food-grade water storage containers. They will not put anything harmful into the water.',
          'If you reuse bottles, pick ones with a tight cap, made of plastic that will not break, with a narrow neck for pouring.',
          'Two-liter soda bottles work well.',
          'Skip milk jugs. Milk protein cannot be fully washed out, and germs can grow in it.',
          'No glass. No container that ever held bleach, pesticide or any other chemical.'
        ] },
        { head: 'Fill them', items: [
          'Wash with dish soap, rinse, and sanitize with 1 teaspoon of unscented bleach in 1 quart of water. Pour it out and let it air-dry.',
          'City tap water that is treated with chlorine needs nothing added.',
          'Well water or other water without chlorine: add 2 drops of plain, unscented bleach to each gallon.',
          'Fill to the top. Do not touch the inside of the cap.',
          'Label "drinking water" with the date.'
        ] },
        { head: 'Store them', items: [
          'Somewhere cool, about 50°F to 70°F, and dark.',
          'Away from gas, pesticides and other chemicals.',
          'Store-bought water stays in its sealed bottle until you need it.',
          'When you use it, pour it out or use a clean scoop. Keep hands out of the water.'
        ] }
      ],
      mistakes: [
        'Reusing milk jugs.',
        'Putting all of it in a hot garage next to the gas can.',
        'Adding new jugs without adding them to the six-month swap.'
      ],
      sources: ['cdc-store', 'ready-water', 'fema-foodwater'],
      checked: '2026-11-21'
    },

    'water-filter': {
      intro: 'A filter turns a creek, pond or rain barrel into drinking water, but only when you add a second step after it.',
      parts: [
        { head: 'Read the box', cols: ['To remove', 'Absolute pore size needed'], rows: [
          ['Parasites, like Giardia and Cryptosporidium', '1 micron or smaller'],
          ['Bacteria', '0.3 micron or smaller'],
          ['Viruses', 'Filters do not remove them']
        ], note: 'Look for the word "absolute" next to the pore size. Most filters remove parasites but not bacteria or viruses.' },
        { head: 'Where to get water', items: [
          'Rainwater.',
          'Streams, rivers and other moving water. Moving water is usually better than still water.',
          'Ponds, lakes and natural springs.',
          'Skip water with things floating in it, a dark color or an odd smell.',
          'Never use flood water, or water with fuel or chemicals in it. No filter, boiling or bleach can make it safe.'
        ] },
        { head: 'Use it', items: [
          'If the water is cloudy, let it settle, or strain it through a clean cloth, paper towel or coffee filter first.',
          'Follow the directions for your filter.',
          'After filtering, kill what is left: add bleach, chlorine or chlorine dioxide, or boil it.',
          'Bleach: 8 drops of plain bleach (5% to 9%) per gallon. Stir and wait at least 30 minutes.',
          'Boil: a rolling boil for 1 minute, or 3 minutes above 6,500 feet.'
        ] },
        { head: 'UV light units', items: [
          'A portable UV light can kill germs in small amounts of clear water.',
          'It does not work well in cloudy water, so filter or settle the water first.'
        ] },
        { head: 'Practice and store', items: [
          'Run one batch from a creek, pond or rain barrel on a calm day, then treat it.',
          'Store the filter with your water, a bottle of plain bleach and your treatment card.'
        ] }
      ],
      mistakes: [
        'Drinking filtered water without boiling or bleaching it.',
        'Trying to filter water that smells of fuel or chemicals.',
        'Using a UV light on cloudy water.'
      ],
      sources: ['cdc-safe', 'cdc-findwater', 'epa-emergwater', 'fema-foodwater'],
      checked: '2026-11-21'
    },

    'food-count': {
      intro: 'You may already have days of food on the shelf. Count it in meals so you know the real number and the gap.',
      parts: [
        { head: 'What counts', items: [
          'Food that needs no fridge, no water, no special prep and no cooking.',
          'Canned meat, fruit and vegetables.',
          'Protein or fruit bars, dry cereal or granola, and peanut butter.',
          'Dried fruit, canned juice, and shelf-stable milk.',
          'Leave out food from the fridge and freezer. In an outage it is used first, and it does not last long.'
        ] },
        { head: 'Count meals, not cans', items: [
          'Three meals a day is 9 meals a person for three days, and 42 meals for two weeks.',
          'Count only food your family will actually eat.',
          'Note anyone with a special diet, allergy, a baby or an older adult. They may need different food.',
          'Write the number of days on your plan, and what is short.'
        ] },
        { head: 'Check every can', items: [
          'A small dent is fine if the can is otherwise in good shape.',
          'Throw out a can with a deep dent, one you can lay your finger in.',
          'Throw out any can with a dent on a seam, or one that bulges, leaks or is badly rusted.',
          'The code stamped on a can is a packing code, not a use-by date.'
        ] },
        { head: 'How long it keeps', cols: ['Food', 'On the shelf'], rows: [
          ['Low-acid canned food: meat, stews, beans, corn, carrots, most soups', '2 to 5 years'],
          ['High-acid canned food: tomatoes, fruit, juice, pickles', '12 to 18 months'],
          ['Rice and dried pasta', '2 years'],
          ['Dried fruit, crisp crackers, boxed powdered milk', 'Use within about 6 months']
        ], note: 'Eat what is closest to its date first, and move it to the front.' }
      ],
      mistakes: [
        'Counting cans instead of meals.',
        'Counting food in the fridge or freezer.',
        'Counting food nobody in the house will eat.'
      ],
      sources: ['ready-food', 'usda-shelf', 'fema-foodwater', 'usda-food'],
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

    'food-cook': {
      intro: 'A grill, camp stove or wood fire can cook in an outage, but only outdoors. Their fumes carry carbon monoxide, a gas you cannot see or smell.',
      parts: [
        { head: 'What you can use', items: [
          'Outdoors: a charcoal grill or a camp stove.',
          'Outdoors with no power and no gas: a wood fire in a cleared pit. See the step on cooking over a wood fire.',
          'Indoors: a fireplace, if the chimney is checked or cleaned every year.',
          'To keep food warm: candle warmers, chafing dishes or fondue pots.'
        ] },
        { head: 'Where to use it', items: [
          'Grills and camp stoves go outdoors, at least 20 feet from windows.',
          'Never burn charcoal indoors.',
          'Never use a portable gas camp stove indoors.',
          'Never use a gas oven or stovetop to heat the house.',
          'Put out every flame before you leave it.'
        ] },
        { head: 'Carbon monoxide', items: [
          'Put battery or battery-backup carbon monoxide detectors near every sleeping area.',
          'Signs it is building up: headache, dizziness, weakness, upset stomach, vomiting, chest pain or confusion. It often feels like the flu.',
          'People who are asleep can be overcome before they feel anything.',
          'If the alarm sounds or anyone has these signs, get everyone outside to fresh air and call 911.'
        ] },
        { head: 'With no power and no gas', items: [
          'Plan some meals that need no cooking at all. Canned food can be eaten cold, right from the can.',
          'Dried fruit and stored root crops keep without a fridge. See the step on drying food and storing it cool.',
          'For a hot meal, cook over a wood fire outdoors and check meat with a food thermometer.',
          'Never partly cook meat and finish it later. Cook it all the way in one go.'
        ] },
        { head: 'Heating food in the can', items: [
          'Take the label off.',
          'Wash the can, then wipe it with 1 part bleach to 10 parts water.',
          'Open the can before you heat it. Never heat a sealed can.'
        ] },
        { head: 'Fuel and a test meal', items: [
          'Cook one full meal outside on what you have, start to finish.',
          'Note how much fuel it used, so you know how many meals your fuel will cook.',
          'Store propane, charcoal and firewood away from the house. See the step on storing cooking fuel.'
        ] }
      ],
      mistakes: [
        'Running a grill or camp stove in the garage, even with the door open.',
        'Heating a can before opening it.',
        'Using the gas oven to warm the house.'
      ],
      sources: ['cdc-co', 'ready-power', 'ready-food', 'fema-foodwater', 'fsis-grilling', 'smokey-campfire'],
      checked: '2026-11-26'
    },

    'food-opener': {
      intro: 'Canned food is the backbone of most food stores, and it is no use without a way to open it. A hand opener costs little and needs no power.',
      parts: [
        { head: 'Why a hand opener', items: [
          'A manual can opener is on Ready.gov\'s basic kit list.',
          'Electric openers stop when the power does.',
          'Pick a wheel-type opener that turns by hand.'
        ] },
        { head: 'Keep these with it', items: [
          'Forks, spoons and a knife you can spare from the kitchen.',
          'Paper cups and plates, paper towels and plastic utensils, so you save water on dishes.',
          'Store it all in the same box or bin as the canned food.'
        ] },
        { head: 'Test it', items: [
          'Open one can with it, all the way around.',
          'A can dented so badly a hand opener cannot open it should be thrown out.'
        ] },
        { head: 'Keep it clean', items: [
          'Wash it with soap and water, hot if you have it, after each use.',
          'If it touches flood water, wash it, then boil it in clean water or soak it 15 minutes in 1 tablespoon of unscented bleach per gallon of water.',
          'Cans that touched flood water need the same care before you open them: wash, sanitize, and let them air-dry for at least an hour.'
        ] }
      ],
      mistakes: [
        'Keeping the only opener in the kitchen drawer, away from the stored food.',
        'Never trying it until the day you need it.'
      ],
      sources: ['ready-kit', 'ready-food', 'usda-food'],
      checked: '2026-11-21'
    },

    'food-3day': {
      intro: 'Three days of food is the first goal. Food your family already eats is the best kind, because it gets used and replaced.',
      parts: [
        { head: 'How much', items: [
          'Three meals a day for three days is 9 meals a person.',
          'Familiar food helps. It lifts spirits and feels normal when things are not.',
          'Pick food that is filling and has some nutrition, not just snacks.'
        ] },
        { head: 'What to pick', items: [
          'Food that needs no fridge, no water, and no cooking.',
          'Ready-to-eat canned meat, fruit and vegetables.',
          'Protein or fruit bars, dry cereal or granola, peanut butter and dried fruit.',
          'Canned juice and shelf-stable milk.',
          'A few comfort foods.',
          'Food for anyone with a special diet or allergy.'
        ] },
        { head: 'Go easy on salt', items: [
          'Salty food makes you thirsty, and water may be short.',
          'Lean on salt-free crackers, whole grain cereal, and canned food with a lot of liquid in it.'
        ] },
        { head: 'Pack it', items: [
          'Keep it in a cool, dry place, dark if you can. Below 85°F is best.',
          'Never above or beside the stove, under the sink, or in a damp garage or basement.',
          'Put boxed food in a tightly closed plastic or metal container.',
          'Wrap crackers in plastic bags inside a sealed container. Put open sugar, dried fruit and nuts in screw-top jars.',
          'Add a hand can opener and utensils to the box.'
        ] },
        { head: 'Keep it fresh', items: [
          'Write the date on each item with a marker.',
          'Put new food at the back and older food in front.',
          'Eat what is near its date and replace it on your next trip.'
        ] }
      ],
      mistakes: [
        'Stocking mostly salty food with little water to go with it.',
        'Picking food that needs water or cooking for the first three days.',
        'Storing the box next to the stove or in a hot garage.'
      ],
      sources: ['ready-food', 'fema-foodwater', 'usda-shelf', 'ready-kit'],
      checked: '2026-11-21'
    },

    'food-special': {
      intro: 'Babies and pets cannot wait for the store to reopen. Their supplies need their own spot and their own check.',
      parts: [
        { head: 'Babies on formula', items: [
          'Ready-to-feed formula in single-serving cans or bottles is the safest choice. It needs no water and comes sterile.',
          'Unopened ready-to-feed formula does not need the fridge.',
          'If you also keep powdered formula, store bottled water to mix it, a liquid measuring cup, and a clean container with a lid.',
          'Pack bottles and nipples, plus disposable cups in case you cannot clean bottles.',
          'Babies grow fast. Check the supply every month and make sure it still covers several days.'
        ] },
        { head: 'Babies on breast milk', items: [
          'Breastfeeding is the safest way to feed a baby in an emergency. Plan to keep going.',
          'Pack one or two boxes of disposable nursing pads.',
          'If you pump, keep a manual pump, and learn to express by hand in case you have no pump.',
          'Fresh milk keeps up to 24 hours in a cooler with frozen ice packs.'
        ] },
        { head: 'For every little one', items: [
          'At least one large pack of diapers, two packs of wipes, and rash cream.',
          'Gallon zip bags for dirty diapers and clothes.',
          'Shelf-stable baby food and snacks right for their age.',
          'Disposable cups, dishes and spoons.',
          'Bottled water, extra clothes, two blankets, and a copy of their medical and shot records.'
        ] },
        { head: 'Pets', items: [
          'Several days of food in an airtight, waterproof container.',
          'A water bowl and several days of water for them.',
          'Extra of any medicine they take, in a waterproof container.',
          'A collar with ID, a leash or harness, and a spare of each.',
          'A carrier or crate, litter if needed, and a photo of you with your pet.',
          'Keep a bigger kit for staying home and a light one for leaving.'
        ] }
      ],
      mistakes: [
        'Storing only powdered formula and no safe water to mix it.',
        'Mixing formula with tap water during a boil notice.',
        'Forgetting the pet\'s medicine.'
      ],
      sources: ['cdc-infant-kit', 'cdc-infant-special', 'ready-pets', 'ready-kit'],
      checked: '2026-11-21'
    },

    'food-2week': {
      intro: 'Two weeks of food is built the same way as three days, just longer. Buy a little extra each trip and keep it moving.',
      parts: [
        { head: 'What keeps longest', cols: ['Food', 'On the shelf'], rows: [
          ['Low-acid canned food: meat, poultry, stews, beans, corn, carrots, peas, most soups', '2 to 5 years'],
          ['Rice and dried pasta', '2 years'],
          ['Tuna and other seafood in pouches', '18 months'],
          ['High-acid canned food: tomatoes, fruit, juice, pickles', '12 to 18 months'],
          ['Packaged jerky', '12 months']
        ], note: 'Use dried fruit, crisp crackers and boxed powdered milk within about 6 months.' },
        { head: 'Where to keep it', items: [
          'Cool and dry. Below 85°F is best.',
          'Never above or beside the stove, under the sink, or in a damp garage or basement.',
          'If your home can flood, keep it up high, not in the basement or low cabinets.'
        ] },
        { head: 'Keep out air and pests', items: [
          'Put boxed food in tightly closed plastic or metal containers.',
          'Pour open sugar, dried fruit and nuts into screw-top jars or airtight canisters.',
          'Open boxes carefully so they close tight again.'
        ] },
        { head: 'Rotate it', items: [
          'Write the date you bought it on each item.',
          'New food goes in the back, older food in front. Eat from the front.',
          'Look over the shelf every few weeks and use what has been there longest.',
          'The code stamped on a can is a packing code, not a use-by date. Go by your own date.'
        ] },
        { head: 'Throw it out if', items: [
          'The can bulges, leaks or is badly rusted.',
          'The dent is deep enough to lay a finger in, or sits on a seam.',
          'The food smells, looks or feels wrong when you open it. Never taste it to check.'
        ] }
      ],
      mistakes: [
        'Storing it in a hot garage or over the stove.',
        'Buying a pile once and never eating from it.',
        'Keeping a bulging can because it is still sealed.'
      ],
      sources: ['usda-shelf', 'fema-foodwater', 'ready-food', 'usda-food'],
      checked: '2026-11-21'
    },

    'food-grow': {
      intro: 'A small garden and a few jars put up each season add food the store cannot run out of. Start small and use tested methods.',
      parts: [
        { head: 'Start the garden', items: [
          'Have your soil tested. It tells you what lime or fertilizer to add. Your county Extension office can tell you how.',
          'Look up your zone on the USDA Plant Hardiness Zone Map.',
          'Do not dig wet soil. Squeeze a handful: if it stays in a ball, wait. If it crumbles, it is ready.',
          'Cool-season crops like peas, spinach, lettuce and radish can be seeded when the soil is 40°F to 50°F.',
          'Wait until after your last frost for tomatoes, peppers and squash. They want soil at 50°F to 60°F.'
        ] },
        { head: 'Water it', items: [
          'A vegetable garden needs about 1 inch of water a week. For 100 square feet, that is about 62 gallons.',
          'Dig down with a trowel. If the soil is dry 2 inches down, water.',
          'Water at the base of the plants, low and slow, not on the leaves.',
          'Mulch holds water in the soil, so you water less.'
        ] },
        { head: 'Pick the right canner', items: [
          'Low-acid foods must go in a pressure canner. That is meat, poultry, seafood, and all fresh vegetables except most tomatoes.',
          'Acid foods can go in a boiling-water canner. That is fruit, pickles, sauerkraut, jams and jellies.',
          'Tomatoes and figs need lemon juice or citric acid added before boiling-water canning.',
          'At 1,000 feet or higher, use the longer time or higher pressure the recipe gives for your elevation.',
          'Have a dial gauge checked every year. Many county Extension offices do it.'
        ] },
        { head: 'Methods to skip', items: [
          'Open-kettle canning, where hot food is sealed in jars with no processing.',
          'Processing jars in the oven, microwave or dishwasher.',
          '"Dry canning" vegetables without the liquid the recipe calls for.',
          'Canning powders. They do not replace heat.'
        ] },
        { head: 'After the canner', items: [
          'Let jars cool, untouched, for 12 to 24 hours. Do not tighten the lids.',
          'Check the seal: press the center of the lid. If it springs back up, it did not seal.',
          'An unsealed jar goes in the fridge. Eat it within a week.',
          'Label and date sealed jars. Store them at 50°F to 70°F, never above 95°F, and can only what you will eat within a year.'
        ] },
        { head: 'Before you eat a jar', items: [
          'Check that the lid is still curved down and tight.',
          'Throw it out if the lid bulges, liquid spurts, it smells wrong, or you see mold.',
          'Never taste food from a jar that looks off. Bag it and put it in the trash.'
        ] }
      ],
      mistakes: [
        'Guessing at canning times, or using an old family recipe that was never tested.',
        'Putting green beans or corn in a boiling-water canner.',
        'Skipping the change for your elevation.',
        'Tasting a jar to see if it is still good.'
      ],
      sources: ['usda-preserve', 'nchfp-canners', 'nchfp-safe', 'nchfp-storing', 'usda-extension', 'umn-garden', 'umn-garden-water'],
      checked: '2026-11-21'
    },

    'power-lights': {
      intro: 'Most outages come in a storm or at night. A flashlight within reach is safer than any candle.',
      parts: [
        { head: 'Why flashlights, not candles', items: [
          'The U.S. Fire Administration says to use flashlights, not candles, in a power outage.',
          'On average, about 20 home candle fires are reported each day.',
          'Never use lit candles in bedrooms or where people sleep.',
          'If you like the look of a candle, use a battery-operated flameless one.'
        ] },
        { head: 'One light for every person', items: [
          'Ready.gov says to have a flashlight for every person in the house.',
          'Keep each one in the same spot every night, so a hand finds it without looking.',
          'A battery lantern lights a whole room. It also helps anyone who talks by sign language or lip reading see in the dark.'
        ] },
        { head: 'Lights beyond the bedroom', items: [
          'Put a flashlight and extra batteries in your emergency kit.',
          'Keep a flashlight with extra batteries in the car kit too.',
          'Have extra batteries for every radio and flashlight you own.'
        ] },
        { head: 'When the power goes out', items: [
          'Reach for a flashlight, not a match.',
          'Use the phone light only for a moment. Save its battery for calls and alerts.',
          'Turn off or unplug appliances and electronics. Power can come back with surges that damage them.'
        ] }
      ],
      mistakes: [
        'Lighting candles in a bedroom or leaving one burning when you go to sleep.',
        'Using the phone as the only light, then having no battery left for calls.',
        'Keeping the only flashlight in a drawer no one remembers.'
      ],
      sources: ['ready-power', 'usfa-candle', 'usfa-severe', 'ready-kit'],
      checked: '2026-11-21'
    },

    'power-heat': {
      intro: 'When the heat goes out in winter, the risks are the cold and the fumes from the wrong heater. Plan for both before the first freeze.',
      parts: [
        { head: 'Get the house ready now', items: [
          'Seal drafts around doors and windows with caulk and weather stripping.',
          'Insulate water lines that run along outside walls, so they are less likely to freeze.',
          'Covering windows with plastic from the inside helps hold the heat.',
          'If you would use a fireplace or wood stove for heat, have the chimney or flue inspected every year.',
          'Have the furnace and its vent checked by a qualified technician each winter.'
        ] },
        { head: 'Heat only with safe sources', items: [
          'Never heat the house with a gas stove or oven. It raises the risk of carbon monoxide, fire and burns.',
          'Never burn charcoal or use a camp stove indoors. Grills and generators belong outside.',
          'Do not use flameless chemical heaters indoors either.',
          'Keep anything that can burn at least 3 feet from a fireplace, wood stove or space heater.',
          'Turn space heaters off when you leave the room or go to bed.',
          'Heating with a fireplace, wood stove or kerosene heater? Put a smoke alarm and a battery carbon monoxide alarm near that area.'
        ] },
        { head: 'Stay warm', items: [
          'Wear layers of warm clothing, and limit time outside.',
          'Pace yourself shoveling snow. Overdoing it raises the risk of a heart attack.',
          'Over 65? Keep an easy-to-read thermometer where you see it often. People feel cold less as they age.',
          'If the house gets too cold, go to a place with power. Check with local officials about warming locations near you.',
          'If heating bills are hard to pay, the Low Income Home Energy Assistance Program (LIHEAP) can help.'
        ] },
        { head: 'Frostbite', items: [
          'Signs: numbness, white or grayish-yellow skin, skin that feels firm or waxy. It hits the face, fingers and toes first.',
          'Go to a warm room. Soak in warm water, or use body heat to warm the spot.',
          'Do not rub it or use a heating pad.'
        ] },
        { head: 'Hypothermia', items: [
          'Signs: shivering, exhaustion, confusion, fumbling hands, memory loss, slurred speech or drowsiness.',
          'A body temperature below 95°F is an emergency. Call 911.',
          'Go to a warm room. Warm the center of the body first: chest, neck, head and groin.',
          'Keep the person dry and wrapped in warm blankets, head and neck too.'
        ] }
      ],
      mistakes: [
        'Turning on the oven to warm the kitchen.',
        'Running a generator or grill in the garage.',
        'Rubbing frostbitten skin or putting a heating pad on it.'
      ],
      sources: ['ready-winter', 'cdc-co', 'cdc-winter', 'usfa-heating', 'ready-power'],
      checked: '2026-11-21'
    },

    'power-cool': {
      intro: 'Extreme heat causes more deaths each year than any other kind of weather. A cooler house, a place to go and the warning signs cover most of it.',
      parts: [
        { head: 'Keep the house cooler', items: [
          'Cover windows with drapes or shades. Window reflectors made to bounce heat back out also help.',
          'Weather-strip doors and windows, and add insulation where you can.',
          'Use the oven less on hot days.',
          'If cooling bills are hard to pay, the Low Income Home Energy Assistance Program (LIHEAP) can help.'
        ] },
        { head: 'Fans and cool places', items: [
          'Use a fan only while the room is under 90°F. Above that, a fan can raise body temperature.',
          'A fan moves air but does not cool your body. Do not count on it as your only cooling.',
          'Find places to cool off, like a library. Dial 2-1-1 or call your local health department to find cooling centers.',
          'A friend or relative with air conditioning can be your cool place. Ask ahead.'
        ] },
        { head: 'Stay cool and drink', items: [
          'Take cool showers or baths.',
          'Wear loose, lightweight, light-colored clothes.',
          'Carry a water bottle. Drink and refill it all day.',
          'Go easy on drinks with lots of sugar, salt, caffeine or alcohol.',
          'Light yellow or clear urine usually means you are drinking enough.',
          'Do outdoor work early or late. Skip hard work in the midday heat.'
        ] },
        { head: 'Know the warning signs', items: [
          'Heat cramps: muscle pain or spasms in the stomach, arms or legs.',
          'Heat exhaustion: heavy sweating, paleness, cramps, weakness, a fast or weak pulse, dizziness, headache, fainting, nausea or vomiting.',
          'For either one: go somewhere cooler, take off extra clothes, and sip water or a sports drink. Call your doctor if it gets worse or lasts more than an hour.',
          'Heat stroke: body temperature above 103°F, red, hot, dry skin with no sweat, a fast strong pulse, confusion or passing out.',
          'Heat stroke is an emergency. Call 911.',
          'While you wait: move the person to shade, take off outer clothes, put cold wet cloths or ice on the head, neck, armpits and groin, and raise the feet.'
        ] },
        { head: 'Who needs extra care', items: [
          'Adults over 65, babies and young children, pregnant women, and people with heart disease or asthma.',
          'Many medicines make it easier to get dehydrated or overheated. Do not stop or change a medicine before you talk to the doctor.',
          'Never leave a person or a pet in a closed car on a warm day.',
          'Check on family and neighbors, most of all those who live alone.',
          'Give pets outside plenty of cool water and shade.'
        ] }
      ],
      mistakes: [
        'Counting on a fan when the room is over 90°F.',
        'Leaving a child or a pet in a closed car, even for a minute.',
        'Stopping a medicine because of the heat without asking the doctor.'
      ],
      sources: ['ready-heat', 'cdc-heat', 'ready-disab'],
      checked: '2026-11-21'
    },

    'power-device': {
      intro: 'If someone in the house depends on a device that plugs in, an outage is a medical problem. Settle the plan with the doctor and the power company now.',
      parts: [
        { head: 'Talk to the doctor', items: [
          'Ask for a power outage plan for the device and for any medicine kept cold.',
          'Ask how long each medicine can be kept at higher temperatures.',
          'Get specific guidance for any medicine the person cannot do without.'
        ] },
        { head: 'Call the power company and the county', items: [
          'Ask the power company to put you on its list for priority power restoration.',
          'Many city and county emergency offices keep a voluntary list of people who may need help in a disaster. Call yours and ask.'
        ] },
        { head: 'Back up the device', items: [
          'Get an extra battery for a power wheelchair or any battery-run medical device. Keep the spares charged at all times.',
          'If you cannot afford a spare battery, ask what agencies or local charities can help buy one.',
          'Keep a backup supply of oxygen if the person uses it.',
          'If you use a power wheelchair, keep a light manual chair as a backup if you can.'
        ] },
        { head: 'Write it down', items: [
          'The style and serial number of each device, with any special steps to run it.',
          'Where the equipment came from: Medicaid, Medicare or private insurance.',
          'The doctor\'s and supplier\'s numbers, and copies of insurance cards.',
          'Keep it in a watertight bag in your kit, and on your phone.'
        ] },
        { head: 'Know where you would go', items: [
          'If the person needs dialysis or other life-sustaining care, know more than one place that can provide it.',
          'Keep a list of the nearest hospitals and medical facilities, and accessible rides to reach them.',
          'If heat or cold is extreme, go to a place in your area that has power.',
          'If the person cannot be cared for at a regular cooling center, talk to local hospitals or nursing homes ahead of time.',
          'For a medical emergency, call 911.'
        ] }
      ],
      mistakes: [
        'Waiting for the first outage to learn how long the battery lasts.',
        'Keeping a spare battery that was never charged.',
        'Having the device model and serial number only in your head.'
      ],
      sources: ['ready-disab', 'ready-power'],
      checked: '2026-11-21'
    },

    'power-shutoff': {
      intro: 'Gas, water and power each have a main shutoff. Find them while things are calm, so you can reach each one in a minute.',
      parts: [
        { head: 'Gas: learn it, do not practice it', items: [
          'Call your gas company. Shutoff steps differ by meter, and they can tell you yours.',
          'Make sure every adult in the house knows the steps.',
          'Walk through the steps, but do not actually turn the gas off.',
          'Keep a wrench or pliers in your kit for shutting off utilities.'
        ] },
        { head: 'If you smell gas', items: [
          'If you smell gas or hear a blowing or hissing sound, open a window and get everyone out fast.',
          'Turn off the gas at the outside main valve if you can.',
          'Call the gas company from a neighbor\'s home. If anyone is hurt or there is a fire, call 911.',
          'Once the gas is off, only a qualified professional can turn it back on. Never do it yourself.'
        ] },
        { head: 'Water', items: [
          'Find the main valve where the water line enters the house. Tag it so anyone can spot it.',
          'Make sure it closes all the way. If it is rusted open or will not close fully, have it replaced.',
          'This is the house valve, not the street valve in the box at the curb. That one is very hard to turn and needs a special tool.',
          'After a disaster, shut off the water until officials say it is safe. Cracked lines can foul the water coming in.',
          'Shutting it off also keeps the clean water in your water heater and toilet tanks from draining away.'
        ] },
        { head: 'Electricity', items: [
          'Find the breaker box or fuse box, and keep the path to it clear.',
          'To shut it all off, switch off each single circuit first, then the main.',
          'Sparks can light leaking gas, so every adult who is able should know how.'
        ] }
      ],
      mistakes: [
        'Turning the gas off just to practice, then waiting for the gas company to turn it back on.',
        'Fighting the street valve instead of the house valve.',
        'Finding out in a flood that the water valve is rusted open.'
      ],
      sources: ['ready-skills', 'ready-kit', 'usfa-garage'],
      checked: '2026-11-21'
    },

    'power-co': {
      intro: 'Carbon monoxide has no color and no smell. An alarm is the only way most people will know it is there.',
      parts: [
        { head: 'Where they go', items: [
          'Put one near every sleeping area.',
          'Put one on every level of the home too, in a central spot outside each separate sleeping area.',
          'If the basement has oil, gas or wood-burning equipment, put one there.',
          'Heating with a fireplace, wood stove or kerosene heater? Put one near the area you heat.'
        ] },
        { head: 'What kind', items: [
          'Pick one that runs on batteries or has a battery backup, so it still works in an outage.',
          'One with a digital readout can show the highest level it has picked up, not only sound an alarm.'
        ] },
        { head: 'Keep them working', items: [
          'Test them monthly.',
          'Change the batteries twice a year. An easy time is when the clocks change in spring and fall.',
          'Replace each alarm when its maker says, or every 5 years.',
          'Set a phone reminder for the replacement date the day you put it up.'
        ] },
        { head: 'Know the signs', items: [
          'Headache, dizziness, weakness, upset stomach, vomiting, chest pain and confusion. People often say it feels like the flu.',
          'People who are asleep or drunk can die before they notice anything.',
          'Babies, older adults, and people with heart disease, anemia or breathing problems get sick from it sooner.',
          'If the alarm sounds or someone has these signs, treat it as an emergency and call 911.'
        ] },
        { head: 'Stop it at the source', items: [
          'Have the furnace, water heater and any gas, oil or coal appliance serviced by a qualified technician every year.',
          'Have the chimney checked or cleaned every year.',
          'Keep vents for the dryer, furnace, stove and fireplace clear of snow and debris.',
          'Never run a car or truck in a garage attached to the house, even with the door open.',
          'Run a generator only outside, more than 20 feet from windows, doors and vents.'
        ] }
      ],
      mistakes: [
        'Buying a plug-in alarm with no battery backup. It goes quiet in an outage, when you need it most.',
        'Keeping an alarm long past its replacement date.',
        'Thinking you would smell it. You cannot.'
      ],
      sources: ['cdc-co', 'usfa-co', 'cdc-winter', 'usfa-garage'],
      checked: '2026-11-21'
    },

    'power-batteries': {
      intro: 'Lights, radios and alarms are only as good as their batteries. A spare set for each, stored the right way, keeps them working.',
      parts: [
        { head: 'What needs spares', items: [
          'Every flashlight and lantern.',
          'The battery-powered or hand-crank radio, and a NOAA Weather Radio.',
          'Smoke alarms and carbon monoxide alarms with battery backup.',
          'Hearing aids, if anyone uses them.',
          'A power wheelchair or battery-run medical device. Keep those spares charged at all times.'
        ] },
        { head: 'Make one list', items: [
          'Open each device and write down its battery size and how many it takes.',
          'Keep the list with your kit, so you can restock without opening everything again.'
        ] },
        { head: 'Store them right', items: [
          'Keep kit items in airtight plastic bags.',
          'Store rechargeable lithium-ion batteries at room temperature, away from anything that can burn.',
          'Keep lithium-ion batteries out of direct sun and hot cars. That is a fire risk.',
          'Do not charge them below 32°F or above 105°F.'
        ] },
        { head: 'Keep them fresh', items: [
          'Replace anything past its date.',
          'Change smoke and carbon monoxide alarm batteries twice a year.',
          'Once a year, think again about what you need and update the kit.'
        ] },
        { head: 'When a battery goes bad', items: [
          'Stop using a lithium-ion battery that smells, changes color, gets too hot, changes shape, leaks or makes odd noises.',
          'Do not put lithium-ion batteries in the trash. Take them to a battery recycling spot.'
        ] }
      ],
      mistakes: [
        'Storing lithium-ion spares in a hot car.',
        'Throwing lithium-ion batteries in the trash.',
        'Forgetting the backup batteries in the smoke and carbon monoxide alarms.'
      ],
      sources: ['ready-kit', 'usfa-batt', 'usfa-severe', 'ready-disab', 'cdc-winter'],
      checked: '2026-11-21'
    },

    'power-phone': {
      intro: 'The phone brings alerts and keeps you in touch. Charge it before a storm, then make the battery last once the power is out.',
      parts: [
        { head: 'Before a storm', items: [
          'Charge every phone and device fully before bad weather comes.',
          'Keep a charged backup battery at home.',
          'Keep a car charger and a portable charger in the car at all times.'
        ] },
        { head: 'Charging from the car', items: [
          'Run the car only outside, in open air.',
          'Never run it in a garage attached to the house, even with the door open. The exhaust is carbon monoxide.'
        ] },
        { head: 'Make the battery last', items: [
          'Switch to low power mode, or airplane mode when you do not need a signal.',
          'Use the phone as little as you can.',
          'Keep calls short and limit calls that are not emergencies.'
        ] },
        { head: 'When calls will not go through', items: [
          'Send a text. Texts often get through when calls do not.',
          'Try another way: email, or a landline if you have one.',
          'Wait 10 seconds before you redial. Redialing too fast clogs the network.',
          'Keep your emergency numbers saved in the phone.',
          'In a vehicle, make calls while it is stopped.'
        ] },
        { head: 'Other backups', items: [
          'Find out whether your home phone works in an outage, and how long its battery backup lasts.',
          'A corded phone that does not need electricity can work in an outage. Cordless phones usually will not.',
          'Keep battery packs at room temperature, not in a hot car.'
        ] }
      ],
      mistakes: [
        'Charging in a running car inside the garage.',
        'Redialing again and again, which jams the network for everyone.',
        'Letting the battery pack sit uncharged in the drawer.'
      ],
      sources: ['ready-tech', 'fcc-tips', 'ready-power', 'cdc-co', 'usfa-batt'],
      checked: '2026-11-21'
    },

    'power-backup': {
      intro: 'A generator helps in a long outage, but its exhaust is carbon monoxide. Every rule here is about running it safely.',
      parts: [
        { head: 'Decide what must run', items: [
          'Walk the house and list everything you need that runs on electricity.',
          'Put medical devices and medicine that must stay cold at the top.',
          'Ask the doctor about a power plan for those first.'
        ] },
        { head: 'Where it runs', items: [
          'Outdoors only, at least 20 feet from windows, doors, vents and attached garages.',
          'Never inside the house or garage, even with the doors and windows open.',
          'Keep it dry and out of the rain and floodwater. Touching a wet generator, or what is plugged into it, can shock you.'
        ] },
        { head: 'Hooking things up', items: [
          'Plug appliances into the generator with heavy-duty extension cords.',
          'Follow the maker\'s instructions every time.',
          'Start it and check it now and then. A generator that is rarely used or cared for is a fire risk.'
        ] },
        { head: 'Fuel', items: [
          'Never add fuel while it is running.',
          'Let it cool first. Fuel spilled on a hot engine can catch fire.',
          'Store gasoline in a shed away from the house, not in the house or attached garage.'
        ] },
        { head: 'Inside while it runs', items: [
          'Have a battery or battery-backup carbon monoxide alarm working on every level.',
          'Know the signs: headache, dizziness, weakness, upset stomach, chest pain, confusion. If they show up, call 911.'
        ] }
      ],
      mistakes: [
        'Running it in the garage with the door open.',
        'Setting it under an open window.',
        'Refueling it while it is hot.'
      ],
      sources: ['ready-power', 'cdc-co', 'usfa-severe', 'usfa-garage'],
      checked: '2026-11-21'
    },

    'med-list': {
      intro: 'If you cannot speak for yourself, a written list speaks for you. It also helps you get refills when your usual pharmacy is closed.',
      parts: [
        { head: 'What to write for each person', items: [
          'Each prescription medicine, what it is for, how much and how often, as the label says.',
          'Allergies, and any medical supplies the person uses.',
          'The style and serial number of any medical device.',
          'Doctors, and the relatives or friends to call if the person is hurt.',
          'Copies of insurance, Medicare and Medicaid cards.'
        ] },
        { head: 'Where to keep it', items: [
          'One copy in a watertight bag in your emergency kit.',
          'A copy on your phone. Your phone camera can scan the list and your cards.',
          'Store digital copies in a password-protected place, like a secure drive or the cloud.',
          'Add key medical facts to your phone, and wear a medical alert tag or bracelet if you need one.'
        ] },
        { head: 'Who should know', items: [
          'Pick at least one trusted person who knows where your supplies are and how to give your medicine.',
          'Tell them where the list is kept.',
          'Add the medical facts to your family emergency plan form.'
        ] },
        { head: 'If someone cannot speak for themselves', items: [
          'Carry printed cards that tell responders how to communicate with the person.',
          'Laminated cards with common phrases or pictures help if a speech device stops working.'
        ] },
        { head: 'Keep it current', items: [
          'Change the list the day a medicine or dose changes.',
          'Once a year, read it over with the whole household.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy at home.',
        'Leaving off allergies.',
        'Carrying an old list with a medicine that has changed.'
      ],
      sources: ['ready-disab', 'ready-plan', 'ready-older', 'ready-tech'],
      checked: '2026-11-21'
    },

    'med-kit': {
      intro: 'Much of a first aid kit is already in your house. Pull it into one box, then see what the Red Cross list says is missing.',
      parts: [
        { head: 'Where kits go', items: [
          'Keep one kit at home and one in the car.',
          'Find out where the first aid kits are at work.'
        ] },
        { head: 'Start with what you have', items: [
          'Adhesive bandages of different sizes, and sterile gauze pads.',
          'Adhesive cloth tape.',
          'Antibiotic ointment and antiseptic wipes.',
          'Tweezers and a few pairs of nonlatex gloves.',
          'A thermometer that is not mercury and not glass.',
          'A first aid guide, so anyone can follow the steps.'
        ] },
        { head: 'Add what is personal', items: [
          'Your own medicines and a list of emergency phone numbers.',
          'Anything your doctor suggests for your family.',
          'Severe allergies: ask the doctor about allergy medicine or an epinephrine injector for the kit.',
          'Diabetes: a juice box and glucose tablets or gels, and ask the doctor about an emergency glucagon kit.'
        ] },
        { head: 'Pack it', items: [
          'Use one container that is easy to carry.',
          'Put small items in airtight plastic bags so they stay dry and easy to find.'
        ] },
        { head: 'Keep it ready', items: [
          'Check the kit regularly.',
          'Replace anything you use, and anything past its date.'
        ] }
      ],
      mistakes: [
        'Keeping supplies spread across three drawers.',
        'Using the last bandage and not replacing it.',
        'Forgetting the medicines your own family needs.'
      ],
      sources: ['redcross-firstaidkit', 'ready-home', 'ready-kit'],
      checked: '2026-11-21'
    },

    'med-app': {
      intro: 'The free Red Cross First Aid app teaches the basics with short videos and quizzes. A few minutes a night adds up fast.',
      parts: [
        { head: 'Get it', items: [
          'It is free in your phone\'s app store. Or text GETFIRST to 90999 for a link.',
          'It works in English or Spanish. Switch with the toggle inside the app.'
        ] },
        { head: 'What is inside', items: [
          'Simple step-by-step advice for common emergencies.',
          'Videos that show each step.',
          'Quizzes to check what you know.',
          'A way to find the nearest hospital, and your class certificates if you take a Red Cross course.'
        ] },
        { head: 'How to work through it', items: [
          'Pick one topic a night and read it start to finish.',
          'Watch the video, then take the quiz. Take it again until you pass.',
          'Show another adult what you learned. Teaching it makes it stick.'
        ] },
        { head: 'Other free Red Cross apps', items: [
          'Emergency app: weather alerts from the National Weather Service, live weather maps and open shelters near you. Text GETEMERGENCY to 90999.',
          'Pet First Aid app: first aid and everyday care for cats and dogs. Text GETPET to 90999.',
          'Child Care app: care and emergency first aid for babies and children.'
        ] },
        { head: 'Know its limits', items: [
          'First aid is a skill. An app teaches the steps, but a hands-on class trains your hands.',
          'In a real emergency, call 911 first, then use what you learned.'
        ] }
      ],
      mistakes: [
        'Downloading it and never opening it.',
        'Waiting for an emergency to learn your way around the app.',
        'Skipping a hands-on class because you have the app.'
      ],
      sources: ['redcross-apps', 'ready-home'],
      checked: '2026-11-21'
    },

    'med-bleed': {
      intro: 'Bleeding is the top cause of preventable death after an injury. A Stop the Bleed class teaches you to act in the minutes before help arrives.',
      parts: [
        { head: 'What the class covers', items: [
          'How to tell when bleeding is life-threatening.',
          'Three ways to control it: pressing on the wound with your hands, packing the wound, and putting on a tourniquet.',
          'An instructor watches you practice and keeps working with you until you do each skill right.',
          'The hands-on practice is the point. These skills are learned with an instructor, not from a page.'
        ] },
        { head: 'Find a class', items: [
          'Go to the Stop the Bleed site, choose Find a Course, and enter your location.',
          'Classes are open to anyone old enough to understand what is taught.',
          'There is also an online course. Use it to get started, then take an in-person class to practice.',
          'When you sign up, ask the host how long it runs and whether there is a fee.'
        ] },
        { head: 'Bring someone', items: [
          'Bring another adult from your house, so two of you know what to do.',
          'Older kids can learn it too, if they are old enough to follow it.'
        ] },
        { head: 'After the class', items: [
          'In a real emergency, call 911 first, or have someone call while you help.',
          'Ask the instructor what bleeding control supplies to add to your first aid kit, and put them on your list.',
          'Talk through the steps with your household now and then, so they stay fresh.'
        ] }
      ],
      mistakes: [
        'Doing only the online course and never practicing with an instructor.',
        'Starting to help before anyone has called 911.',
        'Putting the class off for a year.'
      ],
      sources: ['stopthebleed', 'stb-train'],
      checked: '2026-11-21'
    },

    'med-rx': {
      intro: 'About half of Americans take a prescription every day, and pharmacies can close in a storm. A small supply on hand turns a crisis into a wait.',
      parts: [
        { head: 'Build the extra supply', items: [
          'Ask your doctor or pharmacist how you can build an emergency supply of each medicine.',
          'Refill as early as your plan allows, so you stay ahead.',
          'Keep several days of each prescription medicine in your emergency kit.',
          'Add extra nonprescription basics too, like pain and fever relievers and allergy medicine.'
        ] },
        { head: 'Medicine that must stay cold', items: [
          'Have a cooler and chemical ice packs ready for an outage.',
          'Ask how long each medicine can be kept at higher temperatures.',
          'If the power is out for more than a day, throw out medicine that should be refrigerated, unless its label says otherwise.',
          'Then call your doctor or pharmacist right away for a new supply.'
        ] },
        { head: 'Hot weather', items: [
          'Some medicines must be kept out of hot places. Do not store them in a car or hot garage.',
          'Many medicines make it easier to get dehydrated or overheated on hot days.',
          'Do not stop or change a medicine before you talk to the doctor.'
        ] },
        { head: 'Regular treatments', items: [
          'If you get treatments at a clinic or hospital, ask about their emergency plan and a backup place to go.',
          'If you are on dialysis or another life-sustaining treatment, know more than one place that can help.',
          'Make sure at least one trusted person knows how to give your medicine.'
        ] }
      ],
      mistakes: [
        'Waiting for the last pill before you refill.',
        'Keeping the emergency supply in a hot car or garage.',
        'Changing how you take a medicine on your own during a heat wave.'
      ],
      sources: ['ready-disab', 'ready-older', 'ready-power', 'cdc-heat', 'ready-kit'],
      checked: '2026-11-21'
    },

    'med-fill': {
      intro: 'The Red Cross lists what a first aid kit for a family of four should hold. Check yours against it, item by item.',
      parts: [
        { head: 'Dressings and bandages', cols: ['Item', 'How many'], rows: [
          ['Absorbent compress dressings, 5 x 9 inches', '2'],
          ['Adhesive bandages, assorted sizes', '25'],
          ['Adhesive cloth tape, 10 yards x 1 inch', '1 roll'],
          ['Gauze roller bandage, 3 inches', '1'],
          ['Roller bandage, 4 inches wide', '1'],
          ['Sterile gauze pads, 3 x 3 inches', '5'],
          ['Sterile gauze pads, 4 x 4 inches', '5'],
          ['Triangular bandages', '2']
        ] },
        { head: 'Ointments, wipes and tools', cols: ['Item', 'How many'], rows: [
          ['Antibiotic ointment packets', '5'],
          ['Antiseptic wipe packets', '5'],
          ['Hydrocortisone ointment packets', '2'],
          ['Instant cold compress', '1'],
          ['Nonlatex gloves, large', '2 pairs'],
          ['Breathing barrier with one-way valve', '1'],
          ['Emergency blanket', '1'],
          ['Oral thermometer, not mercury or glass', '1'],
          ['Tweezers', '1'],
          ['First aid instructions', '1']
        ], note: 'The Red Cross list also has aspirin packets. Ask your doctor whether they belong in your kit.' },
        { head: 'Beyond the list', items: [
          'A few days of each person\'s prescription medicine.',
          'Extra nonprescription basics your family uses, like pain and fever relievers, allergy medicine and diarrhea medicine.',
          'Spare glasses or contacts, and hearing aid batteries.',
          'Ask your doctor or pharmacist what else to keep for your family.'
        ] },
        { head: 'Keep it full', items: [
          'Check the kit regularly.',
          'Replace anything used or out of date.',
          'Once a year, think about what has changed in your family and update it.'
        ] }
      ],
      mistakes: [
        'Buying a ready-made kit and never checking what is inside.',
        'Leaving used items unreplaced.',
        'Letting ointments and medicines run past their dates.'
      ],
      sources: ['redcross-firstaidkit', 'ready-home', 'ready-disab'],
      checked: '2026-11-21'
    },

    'med-sick': {
      intro: 'Flu and other bugs often go through a whole house. A little planning keeps them from spreading and keeps the house running.',
      parts: [
        { head: 'Keep the sick person apart', items: [
          'The sick person stays home and away from others, including people in the house who are not sick.',
          'If you do not have space to stay fully apart, wear well-fitted masks at home and keep the air fresh.',
          'Bring in fresh outside air, or use an air purifier.'
        ] },
        { head: 'Stop the spread', items: [
          'Cover coughs and sneezes.',
          'Wash hands often with soap and water for at least 20 seconds. No soap? Use hand sanitizer with at least 60 percent alcohol.',
          'Try not to touch your eyes, nose or mouth.',
          'Clean things people touch often, like counters, handrails and doorknobs.',
          'Do not share food or utensils.'
        ] },
        { head: 'Plan the house', items: [
          'Keep cleaning supplies, food that keeps, prescriptions and water to stay home for several days or weeks.',
          'Have a thermometer in your first aid kit.',
          'Schools and workplaces may close. Plan who stays home with the kids if the adults are sick.',
          'Know how your health insurance covers visits by phone or video.'
        ] },
        { head: 'When to get care', items: [
          'Adults: trouble breathing, pain or pressure in the chest or belly that will not go away, dizziness or confusion that will not go away, seizures, not urinating, or severe weakness.',
          'Children: fast or hard breathing, bluish lips or face, ribs pulling in with each breath, no urine for 8 hours, a dry mouth or no tears, or seizures.',
          'A baby younger than 12 weeks with any fever.',
          'Anyone whose fever or cough gets better, then comes back worse.',
          'People 65 or older, pregnant women, young children, and people with asthma, diabetes or heart disease should call the doctor early. Prescription flu medicine works best when started within two days.',
          'For a medical emergency, call 911.'
        ] },
        { head: 'When they can go back out', items: [
          'When, for at least 24 hours, symptoms are getting better and there has been no fever without fever-reducing medicine.',
          'For the next 5 days, take extra care around others: masks, clean hands, fresh air and some distance.'
        ] }
      ],
      mistakes: [
        'Asking for antibiotics for the flu. They do not work on viruses.',
        'Going back to work the day a fever breaks.',
        'Sharing cups and utensils with the sick person.'
      ],
      sources: ['cdc-resp-sick', 'cdc-flu-signs', 'cdc-flu-prevent', 'cdc-flu-treat', 'ready-pandemic'],
      checked: '2026-11-21'
    },

    'med-class': {
      intro: 'An app teaches the steps; a class puts them in your hands. CPR from a bystander can double or triple the odds a person lives through cardiac arrest.',
      parts: [
        { head: 'Why a hands-on class', items: [
          'First aid is a skill. You need proper training in the techniques.',
          'Beyond basic first aid, CPR and using an AED (automated external defibrillator) are key skills.',
          'Survival after the heart stops depends on fast CPR or a fast AED.'
        ] },
        { head: 'Where to find one', items: [
          'The American Red Cross runs classes. Contact your local chapter, or call 1-800-RED-CROSS (1-800-733-2767) to register.',
          'Local government groups also run first aid classes. Ask your city or county.',
          'Some classes cost more than others. Read the course details before you sign up.'
        ] },
        { head: 'What to look for', items: [
          'A class with CPR, AED and first aid together.',
          'Time to practice with your own hands, not only videos.',
          'A certificate at the end. Ready.gov notes it helps protect you under Good Samaritan laws, which vary by state.'
        ] },
        { head: 'After the class', items: [
          'Write the date your certificate runs out on your calendar.',
          'Refresh your skills regularly. They fade if you do not use them.',
          'Keep a copy of your card with your emergency plan.',
          'In an emergency, call 911 first, then start helping.'
        ] }
      ],
      mistakes: [
        'Taking an online-only course with no hands-on practice.',
        'Letting the certificate lapse.',
        'Waiting to call 911 until you have tried to help.'
      ],
      sources: ['ready-skills', 'ready-home', 'cdc-cerp', 'redcross-class'],
      checked: '2026-11-21'
    },

    'comm-contact': {
      intro: 'When local lines are busy, a call or text to someone far away often still goes through. One person out of the area can pass the word for the whole family.',
      parts: [
        { head: 'Pick the right person', items: [
          'Choose a relative or friend who lives far enough away that the same storm or outage will not hit them.',
          'Pick someone who answers texts and knows how to send them.',
          'Ask them plainly if they will do it. Tell them what you need: take check-ins and pass news along.',
          'Tell them about any medical needs in your house, so they can share it if someone asks.'
        ] },
        { head: 'Put them in every phone', items: [
          'Save the contact in each phone under the name "In Case of Emergency". This helps a stranger or a medic find who to call.',
          'Make a group list in each phone of the people you would need to reach in an emergency.',
          'Also write the number on paper for each person. A phone can die or get lost.',
          'Give the number to the school, daycare and anyone else who watches your kids.'
        ] },
        { head: 'How to check in during an emergency', items: [
          'Text first. A text may go through when a call will not, even if it arrives late.',
          'Keep any call short. Say only what matters: where you are, who is with you, and that you are safe.',
          'If a call does not connect, wait 10 seconds before you try again. Fast redialing jams the network more.',
          'Call 911 only for an emergency. Use your state\'s other number for things like a minor road accident.'
        ] },
        { head: 'Plan for people who are away', items: [
          'Think about family who live elsewhere part of the year, like a student at college or someone deployed.',
          'Decide how the plan changes when they are home, and when they are away.',
          'Write the contact on your family plan, and practice it with your household.'
        ] }
      ],
      mistakes: [
        'Picking someone in the same town. Their lines may be down too.',
        'Never testing it. Send a practice text so everyone knows it works.',
        'Kids who have a phone but have never sent a text.'
      ],
      sources: ['redcross-plan', 'fcc-emergency', 'ready-plan'],
      checked: '2026-11-21'
    },

    'comm-card': {
      intro: 'A phone holds every number until the battery dies. A paper card in each wallet and backpack keeps the key numbers when the phone cannot.',
      parts: [
        { head: 'What goes on the card', items: [
          'Your home address and home phone.',
          'Each family member\'s name and cell number, and an email or other way to reach them.',
          'The out-of-area contact, with cell, home phone and email.',
          'Your meeting places, with a short note on how to get there.',
          'The school, daycare and each workplace, with their emergency or hotline number.'
        ] },
        { head: 'Medical and other numbers', items: [
          'The doctor and the children\'s doctor.',
          'Allergies and prescriptions for anyone who has them.',
          'The health insurance name and policy number.',
          'The vet, if you have pets.',
          'Utilities, the insurance company and other services you would need to call.'
        ] },
        { head: 'Make it', items: [
          'Ready.gov has a free fillable form for a family communication plan, and a wallet-size card.',
          'Fill it in, print it, and cut out one card for each person.',
          'Put the cards in a zip bag or tape over them so they stay dry.',
          'Keep extra copies in the go-bag and the car.'
        ] },
        { head: 'Keep it current', items: [
          'Check the cards when a number, school or job changes.',
          'Ask each person to show you their card now and then.',
          'Make sure the school or daycare has the same numbers on file.'
        ] }
      ],
      mistakes: [
        'A card with only cell numbers. Add the school, the doctor and the outside contact.',
        'Leaving a young child\'s card loose where it falls out. Tape it inside the backpack.',
        'Making the cards once and never updating them.'
      ],
      sources: ['ready-planform', 'ready-plan', 'redcross-plan', 'fcc-emergency'],
      checked: '2026-11-21'
    },

    'comm-alerts': {
      intro: 'Warnings reach you in several ways. Phone alerts come free with no sign-up, and local alerts add details for your own town.',
      parts: [
        { head: 'Phone alerts (WEA)', items: [
          'Wireless Emergency Alerts come to phones in the area of the danger. They are free and you do not sign up.',
          'They look like a text but come with a special sound and vibration.',
          'Look in your phone settings for "Emergency alerts", "Government alerts" or "Emergency alert messages" and make sure they are on.',
          'Some older phones cannot get them. Ask your wireless company if yours can.',
          'They do not track where you are.'
        ] },
        { head: 'If an alert does not come', items: [
          'The phone must be on, out of airplane mode, and getting service from a carrier that takes part.',
          'Turning off some alert types is allowed, but you cannot turn off national alerts. Leave the others on too.',
          'Talk to your kids about alerts. Their phones get them as well.'
        ] },
        { head: 'Local alerts', items: [
          'Sign up for alerts from your local government. They add to the phone alerts and cover more local events.',
          'Also sign up with your school and your workplace if they offer alerts.',
          'Write down the local emergency office number on your plan.'
        ] },
        { head: 'The FEMA app and texts', items: [
          'The FEMA app is free. It gives weather alerts from the National Weather Service for up to five places.',
          'It shows open shelters and disaster recovery centers, and helps you see if your area can get FEMA help.',
          'Without the app, text SHELTER and your ZIP code to 43362 to find shelters. Message and data rates apply.',
          'Text PREPARE to 43362 for general tips, or a word like FLOOD, FIRE or WINTER for that hazard.'
        ] },
        { head: 'Other ways warnings come', items: [
          'TV and radio carry the Emergency Alert System.',
          'NOAA Weather Radio broadcasts warnings all day and night. It works when cell service is down.'
        ] }
      ],
      mistakes: [
        'Turning off alerts after a few loud test messages.',
        'Counting on the phone alone. Have a weather radio too.',
        'Setting the FEMA app to your old address. Update the main location when you move.'
      ],
      sources: ['ready-alerts', 'fcc-wea', 'fcc-emergency', 'fema-app'],
      checked: '2026-11-21'
    },

    'comm-ham-learn': {
      intro: 'Ham radio works without the internet or cell towers. The first license, Technician, takes one written test, and every question on it is published ahead of time.',
      parts: [
        { head: 'What the license gives you', items: [
          'Technician is the first license most new hams get.',
          'It lets you use all ham frequencies above 30 MHz, including the popular 2-meter band, and a little shortwave.',
          'That covers talking around your area on a small handheld radio.',
          'Morse code is not required.',
          'The license is good for 10 years before you renew it.'
        ] },
        { head: 'The test', items: [
          'One written test of 35 questions on rules, operating practice and basic electronics.',
          'You need 26 right to pass.',
          'The questions come from a public question pool that is at least 10 times larger than the test.',
          'A new Technician pool started July 1, 2026, and runs until June 30, 2030. Make sure what you study uses it.'
        ] },
        { head: 'How to study', items: [
          'Read through the question pool topic by topic, not all at once.',
          'Take free practice exams. ARRL offers them online with short explanations, but you set up a login first.',
          'Basic study materials usually cost less than $40.',
          'If you learn better with people, ARRL lists local and online license classes.'
        ] },
        { head: 'Know when you are ready', items: [
          'Practice tests are drawn at random from the real pool, so each one is different.',
          'Keep taking them until you pass with room to spare, several times in a row.',
          'Then find an exam session.'
        ] }
      ],
      mistakes: [
        'Studying from an old question pool.',
        'Memorizing answers without the short explanations. The test mixes up which questions you get.',
        'Buying a radio before you have a license. You cannot talk on it yet.'
      ],
      sources: ['arrl-tech', 'arrl-license', 'fcc-ham-exams', 'arrl-pools', 'arrl-practice', 'arrl-whatis'],
      checked: '2026-11-21'
    },

    'comm-club': {
      intro: 'A local club is where new hams get help. Many teach classes, give the test and run the local repeater.',
      parts: [
        { head: 'Find one', items: [
          'Use the ARRL club search. It lists thousands of clubs across the country.',
          'Each listing shows the club\'s city, call sign and what it does.',
          'Look under "Services offered" for license classes, test sessions and mentors.',
          'Look under "Specialties" for public service and emergency work.'
        ] },
        { head: 'Your first meeting', items: [
          'You do not need a license to go. Say you are studying for the Technician test.',
          'Ask if the club runs a class or a test session, and when.',
          'Ask if someone will mentor you while you get started.',
          'Ask which repeater the club uses, and listen to it once you can.'
        ] },
        { head: 'The emergency group (ARES)', items: [
          'ARES is made up of licensed hams who sign up their skills and gear to help in a disaster.',
          'Any licensed ham can apply. Only licensed hams can join.',
          'Training may be required. Ask your local group what they want.',
          'Emergency-powered radios help but are not required.',
          'To join, fill out the ARES registration form and send it to your local Emergency Coordinator.'
        ] },
        { head: 'What ARES volunteers do', items: [
          'Help at public events like parades, walks and races, often with just a handheld radio.',
          'Help with local disasters such as floods and tornadoes.',
          'In a big disaster, serve for weeks. Volunteers prepare their own family first.'
        ] }
      ],
      mistakes: [
        'Waiting until you are licensed to go. Clubs help you get there.',
        'Signing up for deployment before your own household is ready.'
      ],
      sources: ['arrl-club', 'arrl-ares', 'arrl-class'],
      checked: '2026-11-21'
    },

    'comm-radio': {
      intro: 'NOAA Weather Radio broadcasts warnings, watches and forecasts from your nearest Weather Service office all day and night. It needs its own kind of radio.',
      parts: [
        { head: 'What to look for', items: [
          'A regular AM/FM radio cannot pick it up. The radio must have the weather band.',
          'Look for the Public Alert or NOAA Weather Radio All Hazards logo on the box.',
          'Tone alarm: it wakes the radio for a warning, even with the sound off.',
          'SAME: you pick your county, so it only sounds for alerts near you.',
          'Battery backup, for when the power goes out.',
          'An outside antenna jack helps if you live far from the station.'
        ] },
        { head: 'Cost and kinds', items: [
          'Prices run from about $20 to over $100, depending on features.',
          'A standalone weather radio is best if you want alarms day and night.',
          'The weather band also comes on some AM/FM, shortwave, CB and marine radios, scanners, and two-way family radios.',
          'A hand-crank or solar radio may also charge a phone. Check its manual first.'
        ] },
        { head: 'Set it up', items: [
          'Find your county on the NWS county coverage list. It shows your station\'s frequency and your county\'s SAME code.',
          'There are seven weather frequencies, from 162.400 to 162.550 MHz.',
          'Set the frequency, then enter your county\'s SAME code. Add nearby counties if storms come from there.',
          'Turn on alert mode, so it stays quiet until an alert comes.',
          'For help programming it, call the maker of the radio.'
        ] },
        { head: 'Get good reception', items: [
          'A station reaches about 40 miles on flat ground. Hills, forests and city buildings cut that down.',
          'Try it in different rooms. Moving a few feet can help.',
          'Set it near a window facing the station, upstairs if you can, away from other electronics.'
        ] },
        { head: 'Test it', items: [
          'Most stations test the alarm each Wednesday between 10 a.m. and noon, local time.',
          'If your radio stays quiet during the test, check the batteries, the code and where it sits.',
          'If storms are coming, the test moves to the next good-weather day.'
        ] }
      ],
      mistakes: [
        'Leaving it unplugged and on batteries all the time. Plug it in and keep batteries as backup.',
        'Not entering the SAME code, then turning it off after alarms for far-away counties.',
        'Buying the cheapest model. Those have the most reception trouble.'
      ],
      sources: ['nws-nwr', 'nws-nwr-receivers', 'nws-nwr-counties', 'nws-nwr-test', 'fcc-emergency'],
      checked: '2026-11-21'
    },

    'comm-ham-test': {
      intro: 'The Technician test is given by volunteer examiners, in person or online by video. Get your FCC number first, then the test, then the fee.',
      parts: [
        { head: 'Before exam day', items: [
          'Make an account in the FCC\'s CORES system, then register to get your FCC Registration Number (FRN).',
          'You need your Social Security number to register.',
          'You must have the FRN before the exam. You also need a working email; the FCC sends your license by email.',
          'Find a session with the ARRL exam search, by ZIP code. Check the box to show online sessions if you want to test from home.',
          'Contact the team to confirm the date, the fee and what to bring.'
        ] },
        { head: 'What to bring', items: [
          'Your FRN.',
          'One photo ID, like a driver\'s license, passport or state ID.',
          'No photo ID: bring two other IDs, such as a birth certificate, Social Security card, or a utility bill or bank statement in your name.',
          'The exam fee. It is set by the exam team, usually $15 or less.'
        ] },
        { head: 'The test', items: [
          '35 questions. You need 26 right to pass.',
          'Volunteer examiners watch you the whole time and grade your answers.',
          'If you pass, you get a certificate of passing (CSCE). It counts for 365 days.'
        ] },
        { head: 'After you pass: pay and wait', items: [
          'The FCC fee for a new license is $35. Pay it to the FCC online, not to the exam team.',
          'The FCC emails you a payment link. You have 10 calendar days from when the application is filed.',
          'Miss the 10 days and the application is dropped. You do not have to retest; ask the exam coordinator on your CSCE to send it again.',
          'Once paid and processed, the FCC emails a link to your license. The link works for 30 days, so save the license right away.',
          'You can go on the air once your call sign shows up in the FCC license database.'
        ] },
        { head: 'Under 18', items: [
          'With an ARRL-sponsored team, the exam fee is $5.',
          'ARRL pays back the $35 FCC fee after the license is issued, with a reimbursement form.',
          'A parent may stay in the room during the test.'
        ] }
      ],
      mistakes: [
        'Showing up without an FRN.',
        'Missing the FCC payment email in the spam folder.',
        'Not saving the license before the 30-day link runs out.'
      ],
      sources: ['arrl-exam', 'arrl-bring', 'arrl-fee', 'fcc-ham-exams'],
      checked: '2026-11-21'
    },

    'comm-family-radio': {
      intro: 'Handheld two-way radios keep the family talking when phones are down. Know the two kinds: FRS needs no license, and GMRS needs one license for the family.',
      parts: [
        { head: 'FRS and GMRS', cols: ['', 'FRS', 'GMRS'], rows: [
          ['License', 'None', 'One FCC license'],
          ['Who can use it', 'Anyone, any age', 'You and your immediate family'],
          ['Channels', '22, shared with GMRS', '30'],
          ['Range', 'Short', '1 to 25 miles, by radio type, ground and repeaters']
        ], note: 'FRS handhelds are limited to 2 watts or less. All FRS channels are shared with GMRS, so you may hear GMRS users on them.' },
        { head: 'Get the GMRS license', items: [
          'You must be 18 or older.',
          'Get an FCC Registration Number (FRN) in the FCC\'s CORES system first.',
          'Apply online in the FCC licensing system. The fee for a new license is $35.',
          'The license lasts 10 years.',
          'Renew it in the 90 days before it runs out. After it expires, you need a new license.'
        ] },
        { head: 'Use it well', items: [
          'No channel belongs to anyone. Listen before you talk.',
          'Pick a main family channel and a backup. Write both on your family plan and the paper cards.',
          'Range depends on the kind of radio and the ground between you. A repeater can reach farther.',
          'Many of these radios also have the NOAA weather band.'
        ] },
        { head: 'Practice', items: [
          'Once a month, talk from the house to your meeting spot.',
          'Try a second spot farther away, so you learn your real range.',
          'Charge or change batteries after each practice.'
        ] }
      ],
      mistakes: [
        'Using GMRS channels before the license comes through.',
        'Thinking the range on the package is what you will get. Test it.',
        'Packing radios with dead batteries.'
      ],
      sources: ['fcc-gmrs', 'fcc-frs', 'fcc-fees-personal', 'nws-nwr-receivers'],
      checked: '2026-11-21'
    },

    'plan-meet-near': {
      intro: 'A spot right outside is where everyone goes first in a fire, so you can count heads fast. Pick it, walk it, and make "stay out" the rule.',
      parts: [
        { head: 'Pick the spot', items: [
          'Choose something fixed in front of the home, a safe distance from it: a tree, a light post, the mailbox.',
          'In an apartment or high-rise, pick a spot outside the building, and know where every exit stair is.'
        ] },
        { head: 'Know two ways out', items: [
          'Draw a simple map of the home with every door and window.',
          'Find two ways out of every room, in case one is blocked by smoke or fire.',
          'Check that windows open, screens come out fast, and any security bars open from inside.',
          'An upper floor may need an escape ladder for its second way out.'
        ] },
        { head: 'Teach the rule', items: [
          'Once you are out, stay out. Never go back inside.',
          'Get to the spot first, then call 911, and keep everyone close until firefighters come.',
          'If someone is still inside, tell the firefighters where that person is.',
          'Teach children not to hide from firefighters.'
        ] },
        { head: 'Small children', items: [
          'Children under six may not get out on their own. Decide which adult helps each one.',
          'Show older children what to do if the alarm sounds and no adult is near: get out and go to the spot.'
        ] },
        { head: 'An inside spot too', items: [
          'The family plan card also asks for an indoor meeting place, for when it is safer to stay in, like a tornado.',
          'Write both spots on your plan.'
        ] }
      ],
      mistakes: [
        'Picking a spot so close to the house it is not safe in a real fire.',
        'Going back in for a person or a pet. Tell firefighters instead.',
        'Never walking the kids out to the spot, so they do not know where it is.'
      ],
      sources: ['usfa-escape', 'ready-fireplan', 'ready-commcard', 'ready-plan'],
      checked: '2026-11-21'
    },

    'plan-meet-far': {
      intro: 'If a disaster hits while you are apart, you need set places to find each other. Ready.gov\'s family card has three outside spots: in the neighborhood, out of the neighborhood, and out of town.',
      parts: [
        { head: 'The three outside spots', items: [
          'Neighborhood: a place close by that everyone can reach on foot.',
          'Out of the neighborhood: a familiar place farther off, with its address written down.',
          'Out of town: a friend\'s or family member\'s home, or a motel, in another town.',
          'Pick places that are familiar and easy to find. Write the address and any instructions for each.'
        ] },
        { head: 'Pick places in different directions', items: [
          'Choose more than one destination, in different directions, so you have a choice on the day.',
          'If you have pets, find a place that takes them. Most public shelters allow only service animals.',
          'Check with local officials each year about what shelter spaces are open.'
        ] },
        { head: 'Know the routes', items: [
          'Learn your main route and other routes out of the area.',
          'Follow the routes officials name on the day. Do not take shortcuts; they may be blocked.',
          'Your way out may be on foot, depending on the disaster. Know how you would walk it.',
          'Write normal and other routes on paper and keep a copy in your wallet.'
        ] },
        { head: 'An outside contact', items: [
          'Pick one out-of-town or out-of-state contact everyone will call or text.',
          'When you leave, tell them where you are going. Leave a note at home saying when you left and where you went.',
          'Texts often get through when calls do not.'
        ] }
      ],
      mistakes: [
        'Picking every spot in the same direction, toward the same hazard.',
        'Knowing only one road out.',
        'Choosing a far spot that will not take your pets.'
      ],
      sources: ['ready-commcard', 'ready-evacuation', 'ready-plan', 'ready-tech'],
      checked: '2026-11-21'
    },

    'plan-write': {
      intro: 'A written plan lets anyone in the house act without you. Ready.gov has a free fillable form and a wallet card for it.',
      parts: [
        { head: 'Talk it through first', items: [
          'How will we get alerts and warnings?',
          'Where do we shelter, and what is our way out?',
          'How do we reach each other, and where do we meet?',
          'Does our kit need updating?'
        ] },
        { head: 'Think about your household', items: [
          'Ages, and who helps whom.',
          'Medicine, medical equipment, diets and disabilities.',
          'Pets or service animals, and children in school.',
          'Places you go often, and languages spoken.'
        ] },
        { head: 'What goes on the page', items: [
          'Each person\'s name, mobile number, email and key medical facts.',
          'Each school, child care, caregiver and workplace, with its emergency number and pick-up plan.',
          'An in-case-of-emergency contact and an out-of-town contact.',
          'Meeting places: indoor, neighborhood, out of the neighborhood and out of town.',
          'Doctors, pharmacy, poison control, insurance and policy numbers, vet, and the power, gas and water companies.'
        ] },
        { head: 'Keep it where you need it', items: [
          'Make copies. Keep one with your emergency supplies, where you can reach it in a disaster.',
          'Keep the small card in a wallet or bag.',
          'Practice the plan with your household, and update it when things change.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy on a phone that may be dead or lost.',
        'Leaving out the school and work plans.',
        'Writing it once and never updating it.'
      ],
      sources: ['ready-plan', 'ready-planform', 'ready-commcard', 'nws-hurricane-prep'],
      checked: '2026-11-21'
    },

    'plan-docs': {
      intro: 'After a disaster, papers are how you prove who you are, what you own and what you are owed. Copy them now, while it is easy.',
      parts: [
        { head: 'Who you are', items: [
          'Birth, marriage and divorce certificates, adoption and custody papers.',
          'Passports, driver\'s licenses, Social Security cards, green cards and military ID.',
          'Pet ownership papers and ID tags.'
        ] },
        { head: 'Money, home and law', items: [
          'Lease, mortgage or deed. Car loan, registration and title.',
          'Insurance policies: home or renters, auto, life and flood.',
          'Bank and retirement accounts, pay stubs and benefits.',
          'Recent tax returns. A will, trust or power of attorney.'
        ] },
        { head: 'Health', items: [
          'Health and dental insurance cards, including Medicare, Medicaid or VA.',
          'A list of medicines, allergies, shots and medical devices, with the pharmacy.',
          'Names and numbers for doctors, dentists, pediatricians and the vet.'
        ] },
        { head: 'Photos and electronic copies', items: [
          'A phone camera works as a scanner. Take clear photos of each paper.',
          'Keep them on a password-protected drive or a secure cloud service.',
          'Take photos and video of your major belongings and valuables too. They help with insurance claims.'
        ] },
        { head: 'Paper copies and originals', items: [
          'Keep paper copies in a fireproof, waterproof box or safe, a bank safe deposit box, or with a trusted friend or relative.',
          'Keep originals in a watertight safe deposit box if you can.',
          'Put a set in a waterproof container you can grab when you leave.'
        ] }
      ],
      mistakes: [
        'Storing papers in a basement that can flood.',
        'Sharing account or Social Security numbers with anyone who calls or texts. The government will not call or text you about owing money.',
        'Keeping the only copies in the house.'
      ],
      sources: ['ready-money', 'ready-docsheet', 'ready-tech', 'fema-flood'],
      checked: '2026-11-21'
    },

    'plan-practice': {
      intro: 'People do what they have practiced. A short drill twice a year makes the plan real for everyone, kids most of all.',
      parts: [
        { head: 'Fire drill, step by step', items: [
          'Review the outside meeting spot with everyone.',
          'Test the smoke alarm so the kids know the sound.',
          'Send the kids to their rooms. One adult sounds the alarm and starts a timer.',
          'Assign adults to help young children.',
          'Everyone gets to the spot. Aim for under 2 minutes. If not, try again.'
        ] },
        { head: 'Make it real', items: [
          'Run drills at different times of day and night.',
          'Use different ways out, not just the front door.',
          'Practice getting low and moving to the exit, as if there were smoke.',
          'Practice feeling your way out with eyes closed.',
          'Show kids how to check a door with the back of the hand, and to use another way out if it is hot.'
        ] },
        { head: 'Shelter drill', items: [
          'Practice going to your shelter spot for your local disasters, like a tornado safe room.',
          'For a tsunami zone, walk the route to high ground, including at night and in bad weather.'
        ] },
        { head: 'Test the contact plan', items: [
          'Ask each person: who do you text, and where do we meet?',
          'Send a test text to the out-of-town contact.'
        ] },
        { head: 'Keep it going', items: [
          'Do the fire drill at least twice a year. Test smoke alarms twice a year too.',
          'Put the next date on the calendar before you finish.'
        ] }
      ],
      mistakes: [
        'Only ever practicing in daylight through the front door.',
        'Not checking that windows and screens open.',
        'Skipping a drill because everyone "knows it".'
      ],
      sources: ['ready-fireplan', 'ready-homefire', 'usfa-escape', 'nws-tsunami-before'],
      checked: '2026-11-21'
    },

    'plan-hazards': {
      intro: 'You get ready for what is likely where you live, not for everything. A few free official lookups tell you which.',
      parts: [
        { head: 'Look up your risks', items: [
          'FEMA\'s National Risk Index shows natural hazard risk by area. Ready.gov links to it from its evacuation page.',
          'Look up your address on the FEMA Flood Map Service Center.',
          'Remember that flooding does not follow lines on a map. Where it rains, it can flood. Almost one-third of flood insurance claims come from outside high-risk areas.'
        ] },
        { head: 'Ask your local offices', items: [
          'Your county or state emergency management site has evacuation zones, routes and shelter plans.',
          'Your state geologic survey or county may have landslide and tsunami hazard maps.',
          'If no landslide is mapped near you, that does not mean there is no hazard. Many areas are not mapped yet.'
        ] },
        { head: 'Think past the obvious', items: [
          'Hurricanes are not just a coastal problem. Rain, wind and tornadoes can reach far inland.',
          'A wildfire burn scar raises the chance of landslides for several years.',
          'Floods can follow landslides, because the same rain starts both.'
        ] },
        { head: 'Set up warnings', items: [
          'Wireless Emergency Alerts come to most phones with no sign-up. Check your phone settings to make sure they are on.',
          'Sign up for your local emergency alerts.',
          'A NOAA Weather Radio gives warnings 24 hours a day, and non-weather emergencies too.'
        ] },
        { head: 'Then use it', items: [
          'For each hazard on your list, decide: do we shelter here, or do we leave?',
          'Read the National Weather Service safety page for each weather hazard you face.'
        ] }
      ],
      mistakes: [
        'Skipping flood planning because you are not in a mapped flood zone.',
        'Planning only for the last disaster you saw.',
        'Leaving phone alerts turned off.'
      ],
      sources: ['landfinder', 'fema-floodmap', 'nws-safety', 'ready-evacuation', 'ready-floods', 'fema-flood', 'ready-alerts'],
      checked: '2026-11-21'
    },

    'plan-kids': {
      intro: 'If it hits on a school day, the school plan decides where your kids go. Learn it now and fit your own plan around it.',
      parts: [
        { head: 'Ask the school or child care', items: [
          'Where do children go if they shelter inside, and where if they leave the building?',
          'How will you tell parents what is happening?',
          'Where and how do parents pick children up after the danger passes?',
          'In a tsunami zone, ask where the assembly area is.'
        ] },
        { head: 'Write it down', items: [
          'Ready.gov\'s family card has a line for each school and child care: name, address, emergency number, website and pick-up plan.',
          'Fill in one for each child.'
        ] },
        { head: 'Plan for when you cannot get there', items: [
          'Make a backup plan for the kids in case you cannot get home, such as a trusted adult nearby.',
          'Tell the kids who that adult is.',
          'In a radiation emergency, stay where you are. Schools have plans to keep children safe inside, and going out to get them could expose you both.'
        ] },
        { head: 'Get the kids ready', items: [
          'Children with phones get emergency alerts too. Talk with them about what an alert means.',
          'Teach them the meeting spots and the out-of-town contact\'s number.',
          'Walk them through the plan so they know what will happen.'
        ] }
      ],
      mistakes: [
        'Driving to the school during a shelter order.',
        'Never asking where the school goes if it has to leave.',
        'A backup adult the kids have never been told about.'
      ],
      sources: ['ready-kids', 'ready-locations', 'ready-commcard', 'cdc-getinside', 'ready-alerts'],
      checked: '2026-11-21'
    },

    'plan-pets': {
      intro: 'If you are told to leave, your pets should leave too. A plan and a small kit make that easy.',
      parts: [
        { head: 'Where they can stay', items: [
          'Many public shelters and hotels do not allow pets inside. Find a safe place before you need it.',
          'Set up a buddy system: a neighbor, friend or relative who can care for or move your pets if you cannot.',
          'Your local emergency management office, animal shelter or animal control can give advice.'
        ] },
        { head: 'ID and records', items: [
          'Have each pet microchipped. Keep your phone and address current, with an out-of-area contact.',
          'Keep a collar with an ID tag, and a backup collar, leash and tag.',
          'Keep shot and registration records in a waterproof container and saved electronically.',
          'Keep a photo of you with your pet. It proves ownership and helps others find them.'
        ] },
        { head: 'Two kits', items: [
          'A larger kit for staying home, a lighter one for leaving.',
          'Several days of food in an airtight, waterproof container, plus water and a bowl.',
          'Extra medicine in a waterproof container, and a pet first aid kit (ask your vet what to put in it).',
          'A carrier for each pet, litter and box or bags, and a familiar toy or bed.'
        ] },
        { head: 'Practice the carrier', items: [
          'Leave the carrier out and open where your pet likes to be.',
          'Put treats and a favorite blanket inside.',
          'Note where your pets hide, so you can find them fast.',
          'Bring pets indoors at the first sign or warning of a storm.'
        ] },
        { head: 'Large animals', items: [
          'Give every animal some form of ID.',
          'Map two routes, line up trailers and handlers, and move the animals early when you can.',
          'Make sure where you are going has food, water and vet care.'
        ] }
      ],
      mistakes: [
        'Leaving pets behind "just for a day".',
        'A carrier the cat has never been inside.',
        'Old phone numbers on the microchip.'
      ],
      sources: ['ready-pets', 'ready-petsheet'],
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
    },

    'hz-tornado': {
      intro: 'A tornado warning gives you minutes. If you already know the spot, nobody has to think.',
      parts: [
        { head: 'Pick the spot', items: [
          'Best: a safe room built to FEMA criteria, or a storm shelter built to ICC 500.',
          'Next best: a basement, or a small room on the lowest floor with no windows, in the middle of a sturdy building.',
          'In a mobile home, or a home without a basement, pick a nearby sturdy building you can reach quickly.',
          'Sheds, mobile homes and tents are not safe.'
        ] },
        { head: 'Watch or warning', cols: ['Alert', 'What it means', 'What you do'], rows: [
          ['Tornado watch', 'Tornadoes are possible', 'Review the plan, check supplies and the safe spot, be ready to move'],
          ['Tornado warning', 'A tornado is seen or shown on radar', 'Go to your spot now'],
          ['Tornado emergency', 'A violent tornado is on the ground', 'Take shelter in the safest place right away']
        ] },
        { head: 'In the spot', items: [
          'Stay away from windows, doors and outside walls.',
          'Cover your head and neck with your arms.',
          'Put furniture or blankets around or over you.',
          'Bring pets if there is time.'
        ] },
        { head: 'Get the warning', items: [
          'Learn your community\'s warnings. If you have sirens, know the tone.',
          'Keep a NOAA Weather Radio, and make sure phone alerts are on.',
          'Signs to know: a rotating funnel cloud, a cloud of debris coming toward you, or a loud roar like a freight train.'
        ] },
        { head: 'Practice', items: [
          'Have a family drill so everyone goes to the spot when a warning comes.',
          'At work or school, follow the drill. Avoid large open rooms like gyms and cafeterias.'
        ] }
      ],
      mistakes: [
        'Hiding under a bridge or overpass. It gives little protection.',
        'Waiting to see the tornado before you move.',
        'Staying in a mobile home.'
      ],
      sources: ['ready-tornadoes', 'nws-tornado-alerts', 'nws-tornado-during', 'nws-tornado-prep'],
      checked: '2026-11-21'
    },

    'hz-hurricane': {
      intro: 'Water, not wind, causes most hurricane deaths. Know your zone, decide in advance, and leave early when it is called.',
      parts: [
        { head: 'Know the season and the threat', cols: ['Ocean', 'Season'], rows: [
          ['Atlantic', 'June 1 to November 30'],
          ['Eastern Pacific', 'May 15 to November 30'],
          ['Central Pacific', 'June 1 to November 30']
        ], note: 'Storm surge is the leading cause of hurricane deaths. Flooding from rain is second, and can reach hundreds of miles inland.' },
        { head: 'Before the season', items: [
          'Find out if you live in an evacuation zone. Ask your local emergency office or check its website.',
          'Pick where you would go, and learn the routes there.',
          'Review your insurance. Homeowners insurance does not cover flood.',
          'Make copies of ID and policies and keep them in a password-protected place.'
        ] },
        { head: 'Get the home ready', items: [
          'Clear drains and gutters.',
          'Plan to bring in outside furniture. Loose things become flying debris.',
          'Consider hurricane shutters.',
          'Keep at least half a tank of gas, and a full tank when a storm is coming.'
        ] },
        { head: 'When a storm comes', items: [
          'If officials tell your zone to leave, go right away.',
          'If you stay for wind, use a storm shelter or an inside room.',
          'If water traps you, go to the highest floor. Do not go into a closed attic.',
          'Do not walk, swim or drive through flood water.'
        ] }
      ],
      mistakes: [
        'Waiting to see how bad it gets before leaving.',
        'Thinking you are safe because you live inland.',
        'Climbing into a closed attic to escape rising water.'
      ],
      sources: ['ready-hurricanes', 'nws-hurricane', 'nws-hurricane-prep', 'ready-evacuation'],
      checked: '2026-11-21'
    },

    'hz-flood': {
      intro: 'Floods are the most common disaster in the country. More than half of flood drownings happen in vehicles, so the main rule is simple: turn around.',
      parts: [
        { head: 'Know your risk', items: [
          'Look up your address on the FEMA Flood Map Service Center.',
          'Know where water collects on the roads you drive most.',
          'Know the fastest way to higher ground that does not cross low spots.'
        ] },
        { head: 'How little water it takes', cols: ['Moving water', 'What it can do'], rows: [
          ['6 inches', 'Knock an adult off their feet'],
          ['12 inches', 'Carry away most cars'],
          ['2 feet', 'Carry away SUVs and trucks']
        ], note: 'Water may be deeper than it looks, and the road under it may be gone.' },
        { head: 'Protect the house', items: [
          'Move papers and valuables to a higher floor, in waterproof containers.',
          'Clear drains and gutters.',
          'Have check valves put in the plumbing so flood water does not back up into drains.',
          'Make sure the sump pump works, and think about a battery backup.',
          'Label which breaker runs each part of the house.'
        ] },
        { head: 'Flood insurance', items: [
          'Homeowners insurance does not cover flooding.',
          'A National Flood Insurance Program policy usually takes 30 days to start. Buy it well before a storm.'
        ] },
        { head: 'When water rises', items: [
          'Leave right away if told to. If your home is likely to flood, do not wait for an order.',
          'Never drive around barricades. Stay off bridges over fast water.',
          'If moving water traps you, get to the highest point and call 911 if you can.',
          'If water is rising inside your car, get on the roof.',
          'Do not go into a room where water covers outlets or cords.'
        ] }
      ],
      mistakes: [
        'Driving into water you cannot see the bottom of.',
        'Buying flood insurance when the storm is already coming.',
        'Going into a closed attic. You can be trapped.'
      ],
      sources: ['ready-floods', 'nws-turnaround', 'nws-flood-before', 'fema-floodmap', 'fema-flood'],
      checked: '2026-11-21'
    },

    'hz-wildfire': {
      intro: 'The first 5 feet around your home matter most. Work out from the walls, closest first, and plan to leave early.',
      parts: [
        { head: 'The zones around your home', cols: ['Zone', 'Distance', 'What to do'], rows: [
          ['Immediate', '0 to 5 feet', 'Clear roof and gutters of leaves and needles. Fix loose shingles. Move mulch, plants, leaves and firewood away from the walls.'],
          ['Intermediate', '5 to 30 feet', 'Mow grass to 4 inches. Remove plants under trees. Prune trees 6 to 10 feet up from the ground.'],
          ['Extended', '30 to 100 feet', 'Clear ground litter and dead plants. Clear plants from around sheds.']
        ], note: 'The first 5 feet is the most important zone.' },
        { head: 'Get the home ready', items: [
          'Use fire-resistant materials when you build or repair.',
          'Have an outside hose that reaches every part of the property.',
          'Pick a room you can close off from outside air when it is smoky.'
        ] },
        { head: 'Plan to leave', items: [
          'Learn your evacuation zone and routes, and where you will go.',
          'Practice with your pets.',
          'Plan for work, school and child care too.',
          'Keep the go-bag ready and the phone charged in fire season.'
        ] },
        { head: 'When fire is near', items: [
          'Leave right away when officials say to.',
          'If you are trapped, call 911 and say where you are. Turn on lights to help rescuers find you.'
        ] },
        { head: 'When it is smoky', items: [
          'Stay inside with doors and windows shut.',
          'Use an N95 mask if you must go out.',
          'Set the air system to recirculate and close the outside air intake.',
          'Use a portable air cleaner in the closed-off room.'
        ] }
      ],
      mistakes: [
        'Stacking firewood against the house.',
        'Waiting for the last minute to leave.',
        'Going home before officials say it is safe. The ground can hold hidden hot spots.'
      ],
      sources: ['ready-wildfires', 'usfa-wildfire', 'usfa-zones'],
      checked: '2026-11-21'
    },

    'hz-earthquake': {
      intro: 'Most earthquake injuries come from things that fall. The work is done before the shaking: fasten what can fall, and practice the first few seconds.',
      parts: [
        { head: 'Hunt for hazards, room by room', items: [
          'Walk each room with the family and picture it shaking. Anything that can move, break or fall is a hazard.',
          'Look at tall bookcases and shelves. Would the case tip over, or would things fly off?',
          'Look where people sit and sleep. Heavy mirrors and pictures should not hang over beds or couches. Move beds away from windows.',
          'Swap glass bottles in the medicine cabinet and around the tub for plastic.'
        ] },
        { head: 'Fasten what can fall', items: [
          'Anchor bookcases and other top-heavy furniture into the wall studs, not just the drywall. Use flexible straps and lag screws.',
          'Keep heavy and breakable things on low shelves.',
          'Hang pictures and mirrors on closed hooks.',
          'Put latches on kitchen cabinets above waist level so the doors stay shut.',
          'Strap down the TV, computer and microwave with flexible straps.'
        ] },
        { head: 'The water heater', items: [
          'Fasten it to the wall studs with metal straps. Strap kits are sold at hardware stores.',
          'Gas and water lines to it should be flexible connectors. A plumber can fit them.',
          'A strapped heater also keeps its tank of water for you after a quake.',
          'Check the straps once a year. Shaking and vibration can loosen them.'
        ] },
        { head: 'Know the shutoffs', items: [
          'Teach the adults where the main water valve, the gas meter and the circuit box are.',
          'Call your gas company and ask how to shut off your meter. Do not actually turn it off when you practice.',
          'If you smell gas or hear hissing, open a window, get everyone out, and call the gas company from a neighbor\'s home.',
          'Once the gas is off, only a professional can turn it back on.'
        ] },
        { head: 'When it shakes: Drop, Cover, Hold On', items: [
          'Drop onto your hands and knees where you are.',
          'Cover your head and neck with one arm. Crawl under a sturdy table if one is close. If not, get next to an inside wall, away from windows.',
          'Hold on until the shaking stops. Under a table, hold it with one hand and move with it.',
          'In bed: turn face down and cover your head and neck with a pillow.',
          'Stay inside. Do not run out, and do not stand in a doorway.',
          'In a walker or wheelchair: lock the wheels, bend over, cover your head and neck, and hold on.'
        ] },
        { head: 'After the shaking', items: [
          'Expect aftershocks. Drop, Cover, Hold On again each time.',
          'If the building is damaged, go outside and move away from it.',
          'If you are trapped, text, bang on a pipe or wall, or use a whistle. Save your voice.',
          'Near the coast, head inland or to high ground as soon as the shaking stops.',
          'For a medical emergency, call 911. Use texts for everything else; they can work better than calls.'
        ] }
      ],
      mistakes: [
        'Running outside or standing in a doorway while it shakes.',
        'Screwing straps into drywall instead of the studs.',
        'Turning the gas back on yourself.',
        'Thinking home insurance covers it. A standard policy does not cover earthquake damage.'
      ],
      sources: ['ready-earthquakes', 'fema-eqhunt', 'ready-skills'],
      checked: '2026-11-21'
    },

    'hz-winter': {
      intro: 'A winter storm can cut heat, power and roads for days. Get the pipes, the house and the vehicle ready before the first hard freeze.',
      parts: [
        { head: 'Keep pipes from freezing', items: [
          'On cold nights, let hot and cold water drip from a faucet.',
          'Open the cabinet doors under sinks and along outside walls so warm air reaches the pipes.',
          'Keep the heat on and set no lower than 55°F.',
          'Going away? Have someone check daily that the heat is still on, or drain and shut off the water.'
        ] },
        { head: 'If a pipe freezes or bursts', items: [
          'Find the main water valve where the line comes into the house. Tag it, and make sure it closes all the way.',
          'Thaw a frozen pipe with a hair dryer. Never use an open flame or a torch.',
          'Be careful of shock around standing water.'
        ] },
        { head: 'Get the house ready', items: [
          'Insulation, caulking and weather stripping keep the cold out.',
          'Test smoke alarms and carbon monoxide alarms. Get ones with battery backup.',
          'Refill heating fuel before you run low. Deliveries may not reach you for days after a storm.',
          'Keep furnace and heater vents outside clear of leaves and drifted snow.',
          'Never heat the house with a gas stove or oven. Run a generator only outside, at least 20 feet from windows, doors and an attached garage.'
        ] },
        { head: 'The vehicle kit', items: [
          'Blankets or sleeping bags, and a dry change of clothes.',
          'Flashlight and batteries, a phone charger and a first aid kit.',
          'High-calorie food that keeps, and water. A small can and waterproof matches to melt snow for drinking.',
          'A shovel, a scraper and brush, sand or cat litter for traction, a tow rope and jumper cables.',
          'A large empty can and tissues for an emergency toilet.',
          'A compass and road maps, so you do not depend on the phone.',
          'Keep the tank near full.'
        ] },
        { head: 'If you must drive, or you get stuck', items: [
          'Stay off the roads if you can. If you go, tell someone your route and when you expect to arrive.',
          'Stuck: stay with the vehicle. In wind-driven snow you can lose your way fast.',
          'Run the engine about 10 minutes each hour for heat. Crack a window and clear snow from the exhaust pipe first.',
          'Be easy to find: dome light on at night while the engine runs, a bright cloth on the antenna or door, and the hood up once the snow stops.',
          'Move your arms, legs, fingers and toes now and then. Do not wear yourself out pushing or digging.'
        ] }
      ],
      mistakes: [
        'Thawing a pipe with a torch or open flame.',
        'Leaving the vehicle to walk for help in a storm.',
        'Running the engine with the exhaust pipe packed with snow.',
        'Heating the house with the oven.'
      ],
      sources: ['ready-winter', 'nws-winter-before', 'nws-winter-during', 'nws-cold-pipes', 'ready-skills'],
      checked: '2026-11-21'
    },

    'hz-chemical': {
      intro: 'If a chemical is released nearby, officials may tell you to stay inside. A room picked and supplies cut ahead of time make sealing up quick.',
      parts: [
        { head: 'Pick the room', items: [
          'An inside room above ground, with as few windows and doors as you can.',
          'Big enough for everyone and your pets.',
          'Keep plastic sheeting, duct tape, scissors and a radio there.'
        ] },
        { head: 'Know your air system', items: [
          'Learn how to turn off the furnace, air conditioner and fans.',
          'If the system has a recirculate setting, learn where it is.',
          'Know where the fireplace damper is and how to close it.'
        ] },
        { head: 'If told to stay inside', items: [
          'Bring everyone and pets inside.',
          'Close and lock outside doors and windows. Close vents, dampers and inside doors.',
          'Turn off the air, or set it to recirculate so no outside air comes in.',
          'Go to the room and tape plastic over windows, doors and vents.',
          'Seal gaps with wet towels, plastic or foil, including under the door and at fans and dryer vents.',
          'If fumes may have come in, take shallow breaths through a cloth or towel.'
        ] },
        { head: 'If you are outside or in a car', items: [
          'Move away right away, upwind of the source.',
          'In a car, close the windows and vents and turn off the air and heat.',
          'Get into the nearest building and shelter there.'
        ] },
        { head: 'Stay tuned and stay in', items: [
          'Listen to local radio or TV. Some chemicals have no smell.',
          'Do not go outside, even to help others, until officials say it is safe.',
          'If officials say to leave instead, leave right away.'
        ] }
      ],
      mistakes: [
        'Picking a basement. Ready.gov says to use a room above ground.',
        'Leaving the air running while you seal the room.',
        'Going out to check before officials give the all-clear.'
      ],
      sources: ['ready-chemical', 'ready-shelter'],
      checked: '2026-11-21'
    },

    'att-nuclear': {
      intro: 'For a power plant accident, a dirty bomb or a nuclear explosion, the steps are the same: get inside, stay inside, stay tuned. Walls and time protect you.',
      parts: [
        { head: 'Pick your spot now', items: [
          'At home: the basement, or the middle of the house, away from outside walls and the roof.',
          'Brick or concrete buildings protect best. Any building is better than being outside.',
          'Learn the plans at work, school and any care home your family uses.'
        ] },
        { head: 'Get inside', items: [
          'If warned, go into the nearest building right away and move away from windows.',
          'If there is a blast and you are outside, get behind something solid and lie face down. When the shock wave passes, go inside.',
          'After a blast, you have 10 minutes or more to get inside before fallout arrives.',
          'If you can, take off your outer layer of clothing before you go in. It removes up to 90% of the material.'
        ] },
        { head: 'Stay inside', items: [
          'Close and lock windows and doors. Close the fireplace damper.',
          'Turn off fans, air conditioning and any heat that pulls in outside air.',
          'Bring pets in. Wash any skin and hair that was uncovered, and put on clean clothes.',
          'Stay at least 24 hours unless there is a fire, gas leak or collapse, or officials say to leave. Radiation drops fast in the first day.',
          'Do not go out to get family. Schools and care homes have plans to keep people safe inside.'
        ] },
        { head: 'Stay tuned', items: [
          'A battery or hand-crank radio is the best way to hear officials. Keep spare batteries.',
          'Texts may get through when calls do not.',
          'If a device stops working, take the batteries out, put them back and restart it.',
          'Officials will say when and how to leave, and where to go to be checked.'
        ] },
        { head: 'Food and water', items: [
          'Food and drink that was inside, or sealed, is safe. Wipe sealed containers that were outside.',
          'Do not eat garden food or anything left uncovered outside until officials say so.',
          'Boiling water does not remove radioactive material. Officials will test the water supply.'
        ] }
      ],
      mistakes: [
        'Leaving the shelter early to drive somewhere.',
        'Using household cleaning wipes or hand sanitizer on skin. Use soap and water or a clean wet cloth.',
        'Turning on a fan or furnace that pulls in outside air.'
      ],
      sources: ['ready-radiation', 'cdc-getinside', 'cdc-stayinside', 'cdc-staytuned'],
      checked: '2026-11-21'
    },

    'att-clean': {
      intro: 'If radioactive dust or germs get on you, the fastest help is to get them off. These are the CDC and Ready.gov steps.',
      parts: [
        { head: 'Get ready now', items: [
          'Pack a spare change of clothes for each person in your kit.',
          'Add a trash bag for clothes that need to come off.'
        ] },
        { head: 'Take off the outer layer', items: [
          'Taking off your outer layer of clothes can remove up to 90 percent of radioactive material.',
          'Take it off slowly, so dust does not shake loose and get breathed in.',
          'Try not to touch your eyes, nose or mouth.',
          'Put the clothes in a plastic bag or other sealed container. Set it far from people and pets.',
          'After a germ exposure, bag your clothes and personal items, and follow official instructions for getting rid of them.'
        ] },
        { head: 'If you can shower', items: [
          'Take a warm shower and wash gently with lots of soap.',
          'Do not scald, scrub or scratch your skin.',
          'Wash your hair with shampoo or soap.',
          'Keep cuts and scrapes covered so nothing gets in.',
          'Put on clean clothes.'
        ] },
        { head: 'If you cannot shower', items: [
          'At a sink, wash your hands, face and any skin that was not covered, with soap and plenty of water.',
          'No sink? Use a moist wipe, a clean wet cloth or a damp paper towel.',
          'Gently blow your nose. Wipe your eyelids, eyelashes and ears.',
          'Bag the used wipes or cloths and set them far from people and pets.',
          'Do not use household cleaning wipes on skin. Hand sanitizer does not remove radioactive material.',
          'If officials say not to drink tap water, it is still fine for washing skin, hair and clothes.'
        ] },
        { head: 'Pets, food and what comes next', items: [
          'Pets that were outside: brush the coat gently, then wash with soap and water.',
          'Food and drinks that stayed inside are safe.',
          'Sealed cans and containers from outside are fine once you wipe them with a damp cloth. Bag the cloth.',
          'Do not eat from the garden, or anything left outside uncovered, until officials say it is safe.',
          'After a germ exposure, contact the authorities and get medical help. For a medical emergency, call 911.'
        ] }
      ],
      mistakes: [
        'Pulling a shirt off fast and shaking the dust into the air.',
        'Scrubbing hard, or using very hot water.',
        'Using cleaning wipes or hand sanitizer instead of soap and water.'
      ],
      sources: ['cdc-decon', 'ready-radiation', 'ready-bio'],
      checked: '2026-11-21'
    },

    'att-kit': {
      intro: 'This bin holds what Ready.gov and the CDC list for sealing a room and cleaning up after a chemical or radiation release. Packed ahead, it turns a scramble into a few calm minutes.',
      parts: [
        { head: 'To seal the room', items: [
          'Thick plastic sheeting, duct tape and scissors.',
          'Measure the room\'s windows, doors and vents. Cut each sheet several inches wider than its opening.',
          'Label each sheet with where it goes.',
          'A few old towels to wet and lay along the bottom of the door.'
        ] },
        { head: 'To breathe and see', items: [
          'A mask for each person. Ready.gov lists a dust mask to filter air; a well-fitting N95 is best for smoke and ash.',
          'A battery or hand-crank radio, a flashlight and spare batteries.'
        ] },
        { head: 'To clean up', items: [
          'A spare change of clothes for each person.',
          'Heavy trash bags to seal up clothes that were outside.',
          'Soap, water and clean cloths or moist wipes for skin and hair. Not household cleaning wipes.',
          'Scissors also let you cut off a shirt instead of pulling it over your face.'
        ] },
        { head: 'Pack and keep it', items: [
          'Put everything in one bin in the shelter room.',
          'Add sealed food, water and any daily medicine for a day or more.',
          'Check it once a year. Replace what is old and anything you used.'
        ] }
      ],
      mistakes: [
        'Plastic cut too small to tape past the edges.',
        'Keeping the bin in the garage instead of the shelter room.',
        'Counting on hand sanitizer. It does not remove radioactive material.'
      ],
      sources: ['ready-shelter', 'ready-chemical', 'ready-radiation', 'ready-kit'],
      checked: '2026-11-21'
    },

    'att-bio': {
      intro: 'A germ release may not be obvious at first. It usually shows up as a wave of sick people, so being stocked, informed and clean matters most.',
      parts: [
        { head: 'Before', items: [
          'Ask your doctor whether everyone\'s shots are up to date.',
          'Keep supplies to stay home for several days or weeks: cleaning supplies, food that keeps, prescriptions and water.',
          'Buy a little at a time, so everyone can get what they need.',
          'A HEPA filter in the furnace return duct can filter out most germs that get into the house.',
          'Keep password-protected digital copies of your important papers.'
        ] },
        { head: 'How you will hear', items: [
          'Often, doctors and nurses notice a pattern of unusual illness first.',
          'Alerts may come by emergency radio or TV, a phone call, or a visit from a responder.',
          'Watch official news for the signs of the illness, the areas at risk, whether medicine or shots are being given out, and where to get care.',
          'It can take officials time to learn what the illness is. Follow your county or state health department.'
        ] },
        { head: 'If you see a suspicious substance', items: [
          'Get away from it quickly.',
          'Cover your nose and mouth with two or three layers of cotton, like a T-shirt, handkerchief or towel.',
          'Once you are clear, call 911.'
        ] },
        { head: 'If you may have been exposed', items: [
          'Take off your clothes and personal items and bag them. Follow official instructions for getting rid of them.',
          'Wash with soap and water and put on clean clothes.',
          'Contact the authorities and get medical help. You may be asked to stay away from others or to quarantine.',
          'If your symptoms match what officials describe and you are in a group at risk, get emergency care right away.'
        ] },
        { head: 'During an outbreak', items: [
          'Avoid crowds, and stay home when you are sick except to get care.',
          'Wash your hands often with soap and water for at least 20 seconds.',
          'Do not share food or utensils.',
          'Wear a mask in public when health officials advise it.',
          'Watch out for scams, and share only official information.'
        ] }
      ],
      mistakes: [
        'Trusting rumors over the health department.',
        'Staying near a strange powder to take a closer look.',
        'Rushing out to buy everything at once.'
      ],
      sources: ['ready-bio', 'ready-pandemic', 'cdc-flu-prevent'],
      checked: '2026-11-21'
    },

    'att-cyber-lock': {
      intro: 'Most account break-ins start with a stolen password or a bad link. About an hour of setup closes most of those doors, and it costs nothing.',
      parts: [
        { head: 'Turn on two-step sign-in', items: [
          'Start with email, the bank, credit cards and payment apps. Then the rest.',
          'Look in the account settings, under Security. It may be called two-factor authentication, two-step verification or multifactor authentication.',
          'An authenticator app or a security key is safer than a code by text. A text code is still better than nothing.',
          'Never give a code to anyone who contacts you, whatever the story.',
          'Let an account remember only your own devices, never a shared or library computer.'
        ] },
        { head: 'Make strong passwords', items: [
          'Long: at least 16 characters.',
          'Random: a jumble of letters, numbers and symbols, or a passphrase of 4 to 7 unrelated words.',
          'Unique: a different one for every account. Reusing one lets a single leak open everything.',
          'A password manager makes and stores them for you. You only remember one strong passphrase.'
        ] },
        { head: 'Protect your phone and its account', items: [
          'Lock the phone with a passcode of at least 6 digits.',
          'Call your phone company and add a PIN or password to your account. It blocks changes you did not ask for.',
          'Turn on email and text alerts for the bank and other money accounts.',
          'If your phone suddenly has no service, or only allows 911 calls, call the phone company right away. Someone may have moved your number.'
        ] },
        { head: 'Turn on automatic updates', items: [
          'On each phone and computer, find automatic updates in Settings, often under Software or Security.',
          'When an update shows up, install it soon. Do not tap "remind me later." Browsers and security software matter most.',
          'Update apps too.'
        ] },
        { head: 'Freeze your credit', cols: ['What', 'What it does', 'How long', 'How'], rows: [
          ['Credit freeze', 'No one, not even you, can open new credit in your name', 'Until you lift it', 'Contact all three credit bureaus'],
          ['Initial fraud alert', 'Lenders must check with you first', '1 year, can renew', 'Contact one bureau; it tells the other two'],
          ['Extended fraud alert', 'Same, for identity theft victims with a report', '7 years', 'Contact one bureau']
        ], note: 'All of these are free, and a freeze does not hurt your credit score. To get a loan, lift the freeze at the bureau that lender uses, then put it back.' },
        { head: 'Watch for trouble', items: [
          'Pull your free credit reports at AnnualCreditReport.com. You can check each bureau free once a week.',
          'Look for accounts and charges you do not know.',
          'Warning signs in a message: it is urgent, it asks for personal details, it uses a short link or a misspelled address.',
          'If a message might be real, do not use its link or number. Reach the company a way you already know.',
          'The government will not call, text or message you about money you owe.'
        ] }
      ],
      mistakes: [
        'Using the same password for email and the bank.',
        'Reading a sign-in code to someone who called you.',
        'Freezing credit at only one of the three bureaus.',
        'Putting off updates.'
      ],
      sources: ['ready-cyber', 'cisa-mfa', 'cisa-passwords', 'cisa-updates', 'cisa-phishing', 'ftc-2fa', 'ftc-phone', 'ftc-simswap', 'fcc-portout', 'ftc-freeze', 'ftc-credit-reports', 'credit-report'],
      checked: '2026-11-21'
    },

    'att-cyber-offline': {
      intro: 'An attack on networks looks a lot like a long power outage: phones, cards and maps stop at once. A plan on paper keeps the family together and fed.',
      parts: [
        { head: 'What can stop', items: [
          'Phone calls, texts and internet.',
          'Card readers, ATMs, banks and gas pumps.',
          'Stores, gas stations and transportation.',
          'Your home phone too. Find out if it works with no power, and for how long.'
        ] },
        { head: 'Paper copies', items: [
          'The family plan and contact numbers, written out.',
          'A local paper map with your routes.',
          'Your normal and other routes to work and school, kept in your wallet.',
          'Paper and a pencil.'
        ] },
        { head: 'Money', items: [
          'Keep some cash at home in small bills, in a safe place.',
          'Keep at least half a tank of gas. Pumps may not work.'
        ] },
        { head: 'Getting news', items: [
          'A battery or hand-crank radio keeps working when other ways fail.',
          'A NOAA Weather Radio also carries national security alerts.',
          'Phone emergency alerts are not slowed by network crowding, if the network is up at all.',
          'A flashlight for each person, and spare batteries.'
        ] },
        { head: 'Finding each other', items: [
          'Agree now on where you will meet if you cannot reach each other, and when.',
          'Know how each person gets home with no phone map.',
          'When a network comes back, try a text first. Texts get through more easily than calls.'
        ] },
        { head: 'After it is back', items: [
          'Check bank and card statements and your credit reports for anything you did not do.',
          'Change your passwords if there was strange activity.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy of the plan on a phone.',
        'Having no cash at home.',
        'No meeting plan for when the phones are out.'
      ],
      sources: ['ready-cyber', 'ready-plan', 'ready-power', 'ready-money', 'ready-alerts', 'ready-commuter'],
      checked: '2026-11-21'
    },

    'att-cyber-backup': {
      intro: 'Ransomware locks your files and demands money. A copy kept on a drive that is not plugged in means you can restore your files instead.',
      parts: [
        { head: 'What to back up', items: [
          'Family photos and videos.',
          'Scans or photos of your key papers: IDs, insurance, deeds and the like.',
          'Anything that lives on only one phone or computer.',
          'Back up the phone too, to the computer or a cloud service you trust.'
        ] },
        { head: 'Make the copy', items: [
          'Use the backup tool built into your computer or phone, and copy to an external drive.',
          'Turn on encryption for the drive. Most computers have it built in. If it asks which kind, pick AES.',
          'Scan the drive with your security software before you use it.',
          'Open a few files from the drive to be sure the copy worked.'
        ] },
        { head: 'Unplug it and put it away', items: [
          'Unplug the drive as soon as the backup is done. Ransomware spreads to any drive that is connected.',
          'Keep it in a safe place, apart from the computer.',
          'Back up often. Put a date on the calendar.'
        ] },
        { head: 'If you are attacked', items: [
          'Disconnect the device from the internet.',
          'Stop signing in to bank and shopping accounts on it.',
          'Run a security scan, or get help from the maker or a repair shop you trust.',
          'Once the device is clean, change your passwords. Scan the backup drive before you restore from it.',
          'Paying does not promise your files back. Some attackers take the money and still keep the files locked.'
        ] },
        { head: 'Report it', items: [
          'File a complaint with the FBI\'s Internet Crime Complaint Center (IC3). They send it to the right agency.',
          'If personal information was stolen, report it at IdentityTheft.gov for a recovery plan.',
          'Call your bank and card companies. Close any accounts you did not open.',
          'File a police report so there is an official record.'
        ] }
      ],
      mistakes: [
        'Leaving the backup drive plugged in all the time.',
        'Keeping the only copy on the same computer.',
        'Calling a phone number that pops up on the screen. Real companies do not call to take over your computer.'
      ],
      sources: ['cisa-ransomware', 'cisa-data', 'ftc-malware', 'ftc-phone', 'ready-cyber', 'ftc-idtheft', 'fbi-ic3'],
      checked: '2026-11-21'
    },

    'hz-evacuate': {
      intro: 'Floods, fires and spills can give little warning. Fifteen minutes is enough if each person knows their job.',
      parts: [
        { head: 'Ready all the time', items: [
          'Keep at least half a tank of gas. Fill it when trouble looks likely; stations may be closed or without power.',
          'Keep the go-bag where everyone knows, with one person in charge of it.',
          'Keep an emergency kit in the car.',
          'Know a place in each direction to go.'
        ] },
        { head: 'The grab list', items: [
          'The go-bag and medicine.',
          'Phones and chargers.',
          'Papers or their copies.',
          'Pets, carriers and leashes.',
          'Give each item to one person. Write it on the list by the door.'
        ] },
        { head: 'If there is time before you leave', items: [
          'Call or text your out-of-town contact and say where you are going.',
          'Close and lock doors and windows.',
          'Unplug small electronics. Leave the fridge and freezer on unless there is a flood risk.',
          'If the home is damaged and officials say to, shut off water, gas and power.',
          'Leave a note saying when you left and where you went.',
          'Wear sturdy shoes, long pants, long sleeves and a hat.'
        ] },
        { head: 'On the road', items: [
          'Take one car per family to cut traffic.',
          'Follow the routes officials give. Shortcuts may be blocked.',
          'Watch for washed-out roads, bridges and downed lines. Do not drive into flooded areas.',
          'Check on neighbors who may need a ride.'
        ] },
        { head: 'Coming home', items: [
          'Wait until officials say it is safe, both where you are and back home.',
          'Stay away from downed power lines and report them.',
          'Run a generator only outside, away from the house.'
        ] }
      ],
      mistakes: [
        'Letting the tank run low.',
        'Leaving late and getting caught by the weather.',
        'Never timing it, so you find out on the day.'
      ],
      sources: ['ready-evacuation'],
      checked: '2026-11-21'
    },

    'hz-storm': {
      intro: 'Most storm damage around a home comes from wind throwing loose things and dropping limbs. An hour in the yard and a room picked ahead of time take care of most of it.',
      parts: [
        { head: 'Before storm season', items: [
          'Trim branches away from the house and power lines. Cut down trees that could fall on the house.',
          'Fix loose gutters and shutters.',
          'Make a list of what is outside that must be tied down or put away.',
          'Charge phones, battery packs and the weather radio.',
          'Surge protectors help guard electronics from lightning.'
        ] },
        { head: 'Pick your storm room', items: [
          'A small inside room on the lowest floor: a basement, an inside bathroom or a closet.',
          'Stay away from windows. Put as many walls as you can between you and the wind.',
          'In a mobile home, pick a sturdy building nearby, and go before the wind picks up.'
        ] },
        { head: 'When a watch or warning comes', items: [
          'Watch: storms are possible. Work through your tie-down list right away.',
          'Warning: the storm is here or close. Go inside and to your storm room.',
          'If time and safety allow, move vehicles into the garage or under a carport. Bring the pets in.',
          'Listen to NOAA Weather Radio or local news.'
        ] },
        { head: 'Lightning', items: [
          'If you can hear thunder, lightning can reach you. Go inside.',
          'Safe places: a solid building with wiring and plumbing, or a hard-topped vehicle with the windows up. Rain shelters, small sheds and open vehicles are not safe.',
          'Inside, stay off corded phones and plugged-in electronics, out of the shower and sink, and away from windows and doors.',
          'Wait 30 minutes after the last thunder before going back out.',
          'Someone struck by lightning carries no charge and is safe to touch. Call 911 and start CPR if needed.'
        ] },
        { head: 'On the road', items: [
          'Avoid driving through severe storms. Pull over or wait.',
          'In high wind, hold the wheel with both hands and slow down. Stay clear of trucks, buses and trailers.',
          'Never drive through water on the road. Six inches of moving water can knock you down, and a foot can carry off a vehicle.',
          'Park away from trees and power lines.'
        ] },
        { head: 'After the storm', items: [
          'Stay inside until the storm has passed and alerts say it is safe to go out.',
          'Watch for fallen trees and power lines. A line on the ground may be live. Stay away and report it.'
        ] }
      ],
      mistakes: [
        'Going back out as soon as the rain lightens.',
        'Sheltering under a tree or on a porch.',
        'Waiting for the warning to start tying things down.',
        'Driving into a flooded road.'
      ],
      sources: ['ready-thunderstorms', 'nws-wind-before', 'nws-wind-during', 'nws-lightning', 'nws-severe-rules'],
      checked: '2026-11-21'
    },

    'hz-drought': {
      intro: 'The best way to get ready for a drought is to waste less water every day. Most of the savings come from leaks and the yard.',
      parts: [
        { head: 'Find the leaks', items: [
          'Read your water meter, use no water for two hours, then read it again. If it moved, you have a leak.',
          'Put a few drops of food coloring in the toilet tank. If color shows in the bowl within 10 minutes, the toilet leaks. Flush right after so it does not stain.',
          'A worn toilet flapper can leak thousands of gallons a year. Replace it at least every five years.',
          'A faucet dripping once a second wastes more than 3,000 gallons a year. A new washer often fixes it.',
          'Check the garden hose where it meets the spigot. A new hose washer stops most drips.'
        ] },
        { head: 'Save water inside', items: [
          'Take short showers instead of baths.',
          'Do not let the water run while you brush your teeth or shave.',
          'Run the washer and dishwasher only when full.',
          'Catch the cold water while you wait for hot, and use it on plants.',
          'Wash vegetables in a pan of water, not under the tap. Thaw food in the fridge, not under running water.'
        ] },
        { head: 'Save water outside', items: [
          'Water early in the morning or in the evening, when it is cool.',
          'Never leave a hose running. It can pour out 600 gallons or more in a few hours.',
          'Before you water a lawn, check the soil. If it is moist, or the grass springs back, skip it.',
          'Mulch around trees and plants to hold water in the soil.',
          'Drip watering and native, drought-tolerant plants need less water.',
          'In a bad drought, let the lawn go and save water for trees and large shrubs.'
        ] },
        { head: 'Rules, wells and rain', items: [
          'Follow your state and local water limits. Your water utility or local government posts them.',
          'On a well, if the pump turns on while no water is running, you have a leak.',
          'Catch rainwater where it is practical and allowed, for the garden and animals.',
          'Never pour water down the drain if it could water a plant or garden.'
        ] }
      ],
      mistakes: [
        'Leaving a hose or sprinkler running while you do something else.',
        'Ignoring a toilet that runs or refills on its own.',
        'Watering in the heat of the day.'
      ],
      sources: ['ready-drought', 'epa-leaks', 'umn-garden-water'],
      checked: '2026-11-21'
    },

    'hz-landslide': {
      intro: 'Landslides often follow heavy rain or fire, and many give signs first. Learn them and keep a way out ready.',
      parts: [
        { head: 'Look around your land', items: [
          'See where gutters, the driveway and storm water run. Water poured onto a slope weakens it.',
          'Keep native plants on slopes. Their roots help hold the soil.',
          'Do not dump yard waste on a slope. It adds weight and smothers roots.',
          'Ask your county planning office about landslide maps and local geologists.'
        ] },
        { head: 'Slow signs, around the house', items: [
          'Doors or windows that stick for the first time.',
          'New cracks in plaster, tile, brick or the foundation.',
          'Walls, walks or stairs pulling away from the house.',
          'Widening cracks in the ground, street or driveway.',
          'Fences, walls, poles or trees that tilt. Bulging ground at the base of a slope.',
          'Water coming up from the ground in new places.'
        ] },
        { head: 'Fast signs, in a storm', items: [
          'Rushing water or mud, or trees cracking and boulders knocking.',
          'A faint rumble that grows louder.',
          'A creek that suddenly rises or drops, or turns from clear to muddy.',
          'Near a burn scar, watch the forecast and sign up for alerts.'
        ] },
        { head: 'Stay safe', items: [
          'Stay awake and alert in a storm that could cause a slide. Many people are caught while asleep.',
          'Leave if told to, or if it feels unsafe to stay.',
          'Never cross a road with water or mud flowing, or a bridge if a flow is coming.',
          'If a slide is coming at you, move uphill fast. Stay out of valleys and low ground.'
        ] },
        { head: 'Afterward', items: [
          'Stay away from the slide. More can follow, and floods often do too.',
          'Report broken utility lines and damaged roads.',
          'Ask your insurance agent. Debris flow may be covered by flood insurance.'
        ] }
      ],
      mistakes: [
        'Waiting until you are sure a slide is coming. By then it is too late to get away.',
        'Sending the gutter water onto the slope.',
        'Thinking no map means no risk.'
      ],
      sources: ['ready-landslide', 'usgs-landslide-prep'],
      checked: '2026-11-21'
    },

    'hz-tsunami': {
      intro: 'A tsunami from a nearby quake can arrive in minutes. The route you have walked is the one you will take.',
      parts: [
        { head: 'Know your zone', items: [
          'Find out if your home, work, school and the places you go are in a tsunami hazard or evacuation zone.',
          'Your local emergency office, your state geologic or tsunami site, and your local weather service office have the maps.',
          'Pick safe places 100 feet or more above sea level, or at least a mile inland.',
          'If no high ground is close, ask your emergency office about tall, strong buildings for vertical evacuation.'
        ] },
        { head: 'Plan to walk', items: [
          'Plan to reach your safe place on foot. Roads may be damaged or jammed.',
          'Map routes from home, work and anywhere you visit often.',
          'Walk them, including at night and in bad weather.',
          'Route signs often show a wave with an arrow pointing to high ground.'
        ] },
        { head: 'Natural warnings: go now', items: [
          'A strong or long earthquake.',
          'A loud roar from the ocean, like a train or plane.',
          'The sea rising fast like a flood, or draining away to show the sea floor.',
          'Any one of these is enough. Do not wait for an official warning.'
        ] },
        { head: 'If the ground shakes', items: [
          'Drop, cover and hold on until the shaking stops.',
          'Then move to high ground or inland as soon as you can safely.',
          'On the beach, any earthquake at all is a reason to leave the beach.'
        ] },
        { head: 'Stay away', items: [
          'The first wave may not be the last or the largest. Danger can last hours or days.',
          'Stay out of the zone until officials say it is safe.',
          'If you are already outside the zone, stay where you are unless told otherwise.'
        ] }
      ],
      mistakes: [
        'Going to the beach to watch the water pull back.',
        'Driving when you could walk.',
        'Going back after the first wave.'
      ],
      sources: ['ready-tsunamis', 'nws-tsunami-before', 'nws-tsunami-during'],
      checked: '2026-11-21'
    },

    'hz-volcano': {
      intro: 'Volcanic ash reaches more people than any other part of an eruption, and it can travel hundreds of miles. Know your hazard map, keep masks, and plan to stay in or leave early.',
      parts: [
        { head: 'Know your risk', items: [
          'Ask your local emergency office for the volcano hazard map, evacuation plans and shelter plans.',
          'Sign up for the free USGS Volcano Notification Service.',
          'Find out what your home insurance covers in an eruption.'
        ] },
        { head: 'Supplies', items: [
          'A well-fitting N95 mask for each person.',
          'Glasses for anyone who wears contacts. Ash under a lens can hurt the eye.',
          'Food, water, cleaning supplies and medicine for several days.',
          'Anyone with breathing trouble should talk to their doctor ahead of time.'
        ] },
        { head: 'If ash is coming', items: [
          'Go home if you can, before it falls.',
          'Bring pets in. Put vehicles under cover or a tarp.',
          'Close doors and windows. Cover vents. Turn off systems that draw in outside air.',
          'Stay inside until officials say it is safe.'
        ] },
        { head: 'If told to leave', items: [
          'Leave early.',
          'Stay away from areas downwind, and river valleys downstream, of the volcano.',
          'Avoid driving in heavy ash. It can clog engines and stall cars. If you must, keep windows up and the air off.'
        ] },
        { head: 'After the ash', items: [
          'Do not climb on the roof to clear ash unless you have training. Ash is slippery and heavy.',
          'Wear a mask and covering clothes to clean up. Children should not help.',
          'If ash is in your water, let it settle and use the clear water.'
        ] }
      ],
      mistakes: [
        'Driving through heavy ash.',
        'Wearing contacts in ashfall.',
        'Climbing on the roof to sweep it off.'
      ],
      sources: ['ready-volcanoes', 'usgs-ash'],
      checked: '2026-11-21'
    },

    'hz-avalanche': {
      intro: 'Avalanches catch people out on the snow, mostly on slopes of 30 to 45 degrees. The work is done at home: get the forecast, the gear and the training.',
      parts: [
        { head: 'Know when and where', items: [
          'Most happen from December through March.',
          'People, new snow and wind set them off.',
          'Watch for warning signs: recent avalanches, and cracks shooting across the snow.',
          'Steer clear of slopes steeper than 30 degrees, and the ground right under them.',
          'A moving slide can reach 60 to 80 mph, and the snow sets hard as concrete when it stops.'
        ] },
        { head: 'Check the forecast every trip', cols: ['Level', 'Danger'], rows: [
          ['1', 'Low'],
          ['2', 'Moderate'],
          ['3', 'Considerable'],
          ['4', 'High'],
          ['5', 'Extreme']
        ], note: 'Forecasters use this five-level scale. Find the U.S. Forest Service avalanche center for your area and sign up for its alerts.' },
        { head: 'Carry the gear, and know how to use it', items: [
          'A helmet, to guard your head and help keep an air pocket.',
          'An avalanche beacon, worn on you, so rescuers can find you.',
          'A probe and a small shovel, so you can find and dig out others.',
          'An avalanche airbag can help keep you from being buried all the way.',
          'Practice with each one before the season.'
        ] },
        { head: 'Get trained', items: [
          'Take an avalanche class from a trained educator. The avalanche.org site lists course providers.',
          'Start with the "Know Before You Go" awareness video.',
          'Take first aid training too, so you can help with breathing problems, cold and injuries.',
          'Tell someone where you are going and when to expect you back.'
        ] },
        { head: 'If someone is buried', items: [
          'Call 911, then start searching if it is safe.',
          'Watch for hypothermia: shivering, confusion, fumbling hands, slurred speech, sleepiness.',
          'Get them warm and dry. Warm the center of the body first: chest, neck, head and groin.',
          'On mountain roads, follow avalanche warnings. Roads may close, or you may be told not to stop.'
        ] }
      ],
      mistakes: [
        'Skipping the forecast because the sky looks clear.',
        'Carrying a beacon and probe you have never practiced with.',
        'Heading onto steep slopes right after new snow or strong wind.'
      ],
      sources: ['ready-avalanche', 'avalanche-scale', 'avalanche-basics', 'nps-10essentials'],
      checked: '2026-11-21'
    },

    'home-smoke': {
      intro: 'When a smoke alarm goes off, you may have less than 2 minutes to get everyone out. Working alarms in the right places give you that time.',
      parts: [
        { head: 'Where they go', items: [
          'Inside every bedroom.',
          'Outside each sleeping area.',
          'On every level, basement too.',
          'On the ceiling or high on the wall. Check the alarm\'s instructions.',
          'Best: alarms linked together, so when one sounds they all sound.'
        ] },
        { head: 'Which kind', items: [
          'There are two kinds, and they catch different fires. Have both kinds, or dual-sensor alarms that do both.',
          'Basic alarms start at about $6. Dual-sensor ones start at about $24.',
          'For someone with hearing loss, there are alarms that flash or shake.',
          'Some fire departments give out or put in alarms for free. Call their non-emergency number.',
          'Hardwired alarms should be put in by an electrician.'
        ] },
        { head: 'Keep them working', cols: ['Power', 'Test', 'Battery', 'Replace the alarm'], rows: [
          ['9-volt battery', 'Monthly', 'At least once a year', 'Every 10 years'],
          ['10-year sealed battery', 'Monthly', 'None to change', 'When the label says'],
          ['Hardwired', 'Monthly', 'Backup once a year', 'Every 10 years']
        ], note: 'Count the 10 years from the date made, printed on the alarm, not from when you put it up.' },
        { head: 'When cooking sets it off', items: [
          'Never take the battery out.',
          'Open a window or door, press the hush button, and wave a towel at it.',
          'If it keeps happening, move the alarm a few feet farther from the kitchen or bathroom.'
        ] },
        { head: 'Pair it with a way out', items: [
          'Draw a map of the house with every door and window.',
          'Find two ways out of each room, and keep them clear.',
          'Pick a meeting spot outside, in front of the house.',
          'Push the test button to start a home fire drill, and practice getting out.'
        ] }
      ],
      mistakes: [
        'Pulling the battery while you cook.',
        'Counting 10 years from the day you put it up instead of the date made.',
        'Skipping the monthly test on a sealed 10-year alarm.'
      ],
      sources: ['usfa-smoke', 'usfa-escape', 'ready-kids-fire'],
      checked: '2026-11-21'
    },

    'home-neighbors': {
      intro: 'When roads, phones or power are down, the closest help is next door. A short talk now makes that help easy to ask for and to give.',
      parts: [
        { head: 'Start the talk', items: [
          'Introduce yourself and swap phone numbers.',
          'Ask how you could help each other before and after a storm.',
          'Invite them into your emergency plan, and ask about theirs.'
        ] },
        { head: 'Learn what is on the street', items: [
          'Find out who has useful equipment, like a generator.',
          'Find out who has skills that help in a crisis, like medical training.',
          'Decide together who will check on older or disabled neighbors.'
        ] },
        { head: 'Plan the check-ins', items: [
          'Agree to check on each other if extreme cold or a storm knocks out power.',
          'Make a backup plan for the kids, in case you cannot get home.',
          'Ask a neighbor to check your house daily when you are away in winter, so the heat stays on.',
          'Talk about who could help with pets, child care or passing messages.'
        ] },
        { head: 'Put it on paper', items: [
          'Add their names and numbers to your family cards.',
          'Kids should know a neighbor\'s number too.',
          'Keep a paper copy. A phone list is no help when the phone is dead.'
        ] }
      ],
      mistakes: [
        'Waiting until the storm to meet.',
        'Assuming someone else on the street will check on the older neighbor.',
        'Keeping the numbers only in your phone.'
      ],
      sources: ['ready-locations', 'ready-resolution', 'ready-plan', 'ready-2-help', 'nws-cold-pipes'],
      checked: '2026-11-21'
    },

    'home-check': {
      intro: 'A slow walk around the house, inside and out, shows you what needs fixing before it matters. Look at the ways out, the loose things, and the shutoffs.',
      parts: [
        { head: 'Doors and windows', items: [
          'Check that no door or window you would use to get out is blocked by furniture or boxes.',
          'Each room should have two ways out. Note any that do not.'
        ] },
        { head: 'Outside the house', items: [
          'Look for branches over the roof or near power lines. Trim the ones you can reach safely.',
          'Look for loose gutters, shutters and roof tiles.',
          'Look at a brick chimney. In an earthquake, bricks can fall into the house.',
          'Make a list of yard items that wind could throw.'
        ] },
        { head: 'Find the shutoffs on the way', items: [
          'The main water valve, where the line comes into the house. Tag it.',
          'The gas meter. Ask the gas company how your meter shuts off.',
          'The circuit box. Make sure an adult can reach it and the labels make sense.'
        ] },
        { head: 'Make the list', items: [
          'Write down every fix you find.',
          'Do the free and quick ones this week.',
          'Put the rest on a date, before storm or winter season.'
        ] }
      ],
      mistakes: [
        'Parking furniture in front of a window you would need in a fire.',
        'Leaving dead limbs over the roof until the storm.',
        'Not knowing where the water valve is until a pipe bursts.'
      ],
      sources: ['usfa-escape', 'nws-wind-before', 'fema-eqhunt', 'ready-skills'],
      checked: '2026-11-21'
    },

    'home-inventory': {
      intro: 'After a fire, flood or storm, a claim goes faster when you can show what you owned. A video walk-through of the house is the easiest record to make.',
      parts: [
        { head: 'What to record', items: [
          'Photos and video of every major item and anything of value.',
          'Serial numbers, where items have them. Make and model for appliances and electronics.',
          'Parts of the house: the furnace, the water heater, the fridge and the stove.',
          'Belongings: furniture, clothing, electronics, and valuables like art.'
        ] },
        { head: 'How to do it', items: [
          'Go room by room so you do not miss one.',
          'Say what each big item is as you film it.',
          'Get close enough that a serial plate is readable.'
        ] },
        { head: 'Store it safely', items: [
          'Keep a copy off the phone: on an external drive, in the cloud, or both.',
          'Store it with your other key papers, in a safe, dry, waterproof place.',
          'Keep originals of papers in a watertight safe deposit box if you can.',
          'Keep one copy away from home.'
        ] },
        { head: 'If damage happens', items: [
          'Report the loss to your insurance company as soon as you can.',
          'Before cleanup, photograph and video the damage.',
          'For a flood, keep samples of carpet, flooring and curtains for the adjuster.',
          'A flood claim often takes 4 to 8 weeks to be paid.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy on the phone, which can be lost with the house.',
        'Filming too fast to read the serial numbers.',
        'Throwing out damaged things before you photograph them.'
      ],
      sources: ['fs-document', 'fs-claim', 'ready-money', 'fema-eqhunt'],
      checked: '2026-11-21'
    },

    'home-insurance': {
      intro: 'No two policies are the same, and most gaps show up after the damage. Read yours now so you know what is covered and what is not.',
      parts: [
        { head: 'Read your policy', items: [
          'If you have no property insurance, get it: homeowners if you own, renters if you rent.',
          'Check that the coverage fits the hazards where you live.',
          'If something is unclear, call your agent and ask.'
        ] },
        { head: 'What most policies leave out', items: [
          'Flood. Most homeowners and renters policies do not cover it.',
          'Earthquake. A standard homeowners policy does not cover it.',
          'Renters: your landlord\'s insurance covers the building, not your things.',
          'A renters policy can cover theft, wind and fire, but usually not flood.'
        ] },
        { head: 'Flood insurance limits (NFIP)', cols: ['Policy', 'Covers up to'], rows: [
          ['Home building', '$250,000'],
          ['Home contents', '$100,000'],
          ['Renter contents', '$100,000'],
          ['Art, jewelry, furs', '$2,500']
        ], note: 'In a basement, contents coverage is limited to a washer, dryer, freezer and the food in it.' },
        { head: 'Buying flood insurance', items: [
          'A new flood policy takes 30 days to start. Do not wait for a forecast.',
          'Anyone in a community that is part of the National Flood Insurance Program can buy it, owners and renters alike.',
          'Rates through the program are the same no matter which agent sells it.',
          'Nearly a third of flood claims come from outside high-risk areas. Look up your address on FEMA\'s flood map.'
        ] },
        { head: 'Keep the numbers handy', items: [
          'Write the policy number and the claims phone number on your plan.',
          'Keep a copy of the policy with your other key papers.',
          'If you cannot find your flood insurer after a flood, call the NFIP at 877-336-2627.'
        ] }
      ],
      mistakes: [
        'Waiting for a flood forecast to buy a policy that takes 30 days to start.',
        'Renters assuming the landlord\'s policy covers their things.',
        'Thinking low risk means no risk.'
      ],
      sources: ['ready-money', 'fema-flood', 'fs-coverage', 'nfip-renters', 'ready-earthquakes', 'fema-floodmap'],
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

    'skill-map': {
      intro: 'A phone map needs a signal and a charge. A paper map and a compass need neither, and the basics take an afternoon to learn.',
      parts: [
        { head: 'Get the maps', items: [
          'USGS topographic maps are free to download. The standard series, US Topo, is at 1:24,000 scale, also called 7.5-minute maps.',
          'You can print one at a print shop or order a printed copy from the USGS Store.',
          'Keep a road map in the vehicle too. Phones run out of battery.'
        ] },
        { head: 'Read a topo map', items: [
          'Contour lines join points at the same height. Together they show the height and shape of hills and how steep the slopes are.',
          'The map also shows roads, rivers, lakes, boundaries and place names.',
          'At the bottom edge is a diagram showing true north and magnetic north.'
        ] },
        { head: 'Know your compass', items: [
          'The dial turns and is marked 0 to 360 degrees.',
          'The direction-of-travel arrow points where you are going. The orienting arrow is inside the dial. The red needle points to magnetic north.',
          'Keep it away from metal when you read it: keys, belt buckles, the vehicle, fences.',
          'To take a bearing on something you can see: point the travel arrow at it, turn the dial until the needle sits in the orienting arrow, and read the number.'
        ] },
        { head: 'Allow for declination', items: [
          'The needle points to magnetic north, not true north. The gap is called declination.',
          'It is different in each place and slowly changes. It is about 6 degrees west in the Smokies and about 15 degrees east on the Olympic Peninsula.',
          'Read it off your map\'s diagram. If the map is more than 15 years old, look up the current figure.'
        ] },
        { head: 'Walk a route from the map', items: [
          'Draw a line on the map from where you are to where you are going.',
          'Lay the compass edge along the line, with the travel arrow toward where you are going.',
          'Turn the dial until its north lines up with north on the map. Do not move the compass.',
          'Adjust for declination. East: subtract (turn the dial clockwise). West: add (turn it counterclockwise).',
          'Hold the compass flat, travel arrow pointing away from you. Turn your whole body until the red needle sits in the orienting arrow.',
          'Pick a landmark straight ahead and walk to it. Repeat until you arrive.'
        ] }
      ],
      mistakes: [
        'Reading the compass while leaning on the truck.',
        'Forgetting declination. A few degrees off adds up over miles.',
        'Letting the needle drift out of the orienting arrow as you walk.',
        'Learning it for the first time on the day you need it.'
      ],
      sources: ['usgs-maps', 'usgs-topo-faq', 'usgs-compass', 'nps-compass-course', 'nps-declination', 'nps-olym-travel', 'nps-10essentials', 'nws-winter-before'],
      checked: '2026-11-21'
    },

    'skill-teach': {
      intro: 'You will not always be home when something happens. Teach everyone in the house a few simple things, then practice them until they stick.',
      parts: [
        { head: 'Who we are and where we live', items: [
          'Everyone learns the home address and phone number by heart. The 911 operator needs to know where you are.',
          'Kids learn their full name and their parents\' full names.',
          'They learn a few key numbers: a parent\'s cell, a neighbor, a grandparent.',
          'Write it all on a card for each child\'s backpack.'
        ] },
        { head: 'When to call 911', items: [
          'Someone is badly hurt, or will not wake up.',
          'There is a fire, or you need the police.',
          'Not for a small cut, a limping pet, or a ride somewhere.'
        ] },
        { head: 'How to call', items: [
          'Stay calm. Say what is happening.',
          'Give your name, phone number and address. Away from home, give the address or a landmark nearby.',
          'Speak slowly and clearly. Do not hang up until the operator says to.',
          'If you call by mistake, stay on the line and say so. If you hang up, they have to send someone to check.',
          'Show the kids how to reach the emergency screen on a locked phone.'
        ] },
        { head: 'Where things are', items: [
          'Walk the house together: the kit, the water, the flashlights, and the written plan.',
          'Show two ways out of each room, and the meeting spot in front of the house.',
          'Let the kids help pack the kit. They remember what they handled.'
        ] },
        { head: 'Practice', items: [
          'Act out a 911 call with a made-up emergency. Take turns being the operator.',
          'Press the smoke alarm test button and run a fire drill.',
          'Quiz them again a week later, and every few months.'
        ] }
      ],
      mistakes: [
        'Teaching it once and never practicing.',
        'A child who only knows "Mom," not her full name or number.',
        'Hanging up after calling 911 by mistake.'
      ],
      sources: ['ready-kids', 'ready-kids-fire', 'ready-2-help', 'usfa-escape', 'ready-plan'],
      checked: '2026-11-21'
    },

    'skill-fix': {
      intro: 'After a big storm, repair help can be booked for weeks. A few basic skills keep the water, power and drains working until then.',
      parts: [
        { head: 'Shut off the water', items: [
          'Find the main valve where the water line comes into the house. Tag it so anyone can find it.',
          'Make sure it closes all the way. If it is rusted open or will not close, have it replaced.',
          'This is not the street valve in the box at the curb. That one needs a special tool.',
          'After a disaster, shutting the main also keeps clean water in your water heater and toilet tanks.'
        ] },
        { head: 'Shut off the power', items: [
          'Find the circuit box and show the other adults.',
          'To shut off everything, switch off each circuit first, then the main.',
          'Sparks can light leaking gas. That is one more reason every adult should know how to shut the power off.'
        ] },
        { head: 'Gas: know it, do not test it', items: [
          'Call your gas company and ask how your meter shuts off. Do not actually turn it off to practice.',
          'If you smell gas or hear hissing, open a window and get everyone out.',
          'Turn off the outside main valve if you can, and call the gas company from a neighbor\'s home.',
          'Only a professional can turn the gas back on.'
        ] },
        { head: 'Clear a clogged sink', items: [
          'Plug the overflow hole with a rag. In a double sink, plug the other drain.',
          'Set the plunger over the drain. Press down smoothly, then jerk it up sharply. Do this 20 to 30 times.',
          'If it clears, run hot soapy water through it.',
          'Still clogged? Look for a cleanout plug on the U-shaped trap under the sink. Set a bucket under it and unscrew the plug with an adjustable wrench.',
          'Most clogs sit in the trap. Pull it out with a finger or a wire, put the plug back, and run hot water.',
          'If that fails, or there is no plug, call a plumber or the landlord.'
        ] },
        { head: 'Clear a tub', items: [
          'Cover the overflow with a wet cloth and take out the stopper.',
          'Run about 2 inches of water. Plunge 20 to 30 times while holding the cloth in place.',
          'For a tub with a lever, take off the overflow cover (two screws) and clean the hair off the rod and coil behind it.'
        ] },
        { head: 'About drain cleaners', items: [
          'They only help slow drains, and they are hard on septic tanks.',
          'Wear rubber gloves, open the windows, and follow the label.',
          'Never mix two kinds, or pour one on top of another. The fumes can kill.',
          'Never plunge after using one.',
          'Prevent clogs: no grease down the drain, and keep a strainer in the kitchen sink.'
        ] }
      ],
      mistakes: [
        'Mixing two drain cleaners.',
        'Turning the gas back on yourself.',
        'Fighting the curb valve instead of the house main.'
      ],
      sources: ['ready-skills', 'uf-drains', 'usda-extension'],
      checked: '2026-11-21'
    },

    'skill-fema': {
      intro: 'FEMA\'s Independent Study courses are free, online and open to anyone. One evening is enough for your first certificate.',
      parts: [
        { head: 'Before you start', items: [
          'Get a free FEMA Student ID (SID). You need it to take the exam.',
          'The exam signs you in with a Login.gov account.',
          'Use a desktop or laptop. Phones are not recommended.'
        ] },
        { head: 'Two good first courses', cols: ['Course', 'Topic', 'Time', 'Credit'], rows: [
          ['IS-909', 'Community preparedness', '1 hour', '0.1 CEU'],
          ['IS-317.A', 'Introduction to CERT', '2 hours', '0.2 CEU']
        ], note: 'IS-909 is written for people who lead preparedness activities. IS-317 is the first step toward CERT.' },
        { head: 'Take the course and exam', items: [
          'Open the course page and work through the web course.',
          'Then choose "Take Final Exam" and sign in.',
          'You pass at 75%. There is no limit on tries, and the questions change each time.',
          'FEMA does not show your score or which questions you missed.'
        ] },
        { head: 'Get your certificate', items: [
          'Your record updates as soon as you pass. You also get an email.',
          'Download the certificate from the Student Portal any time.',
          'These do not count as college credit.'
        ] },
        { head: 'Pick the next one', items: [
          'Browse the full course list for one that fits the disasters where you live.',
          'Questions not about your SID go to the Independent Study office at 301-447-1200.'
        ] }
      ],
      mistakes: [
        'Starting the exam before you have a FEMA SID.',
        'Trying to take the exam on a phone.',
        'Taking IS-317 and thinking you are now CERT trained. You still need the classroom course.'
      ],
      sources: ['fema-is', 'fema-is909', 'fema-is317', 'fema-isfaq'],
      checked: '2026-11-21'
    },

    'skill-cert': {
      intro: 'CERT trains regular people in basic disaster response. You learn to help your household and your street until professional help arrives.',
      parts: [
        { head: 'What you learn', items: [
          'Fire safety, including putting out small fires.',
          'Light search and rescue.',
          'Disaster first aid: helping the injured and setting up a treatment area.',
          'How a team is organized and works with responders.',
          'The basic training takes about 20 hours.'
        ] },
        { head: 'Find a program', items: [
          'There are more than 3,200 local programs across all 50 states.',
          'The classroom course is run by local government: the emergency management office, or the fire or police department.',
          'Not sure who runs it near you? FEMA keeps a directory of state CERT coordinators.'
        ] },
        { head: 'Get a head start online', items: [
          'Take FEMA\'s free IS-317, Introduction to CERT. It takes about 2 hours.',
          'Some programs ask for it before the classroom course.',
          'It does not replace the classroom training.'
        ] },
        { head: 'After you finish', items: [
          'Stay with your team for drills and exercises. They keep the skills fresh.',
          'In a disaster, trained volunteers handle simple tasks so responders can take the hard ones.',
          'There are CERT programs for teens, colleges and workplaces too.'
        ] }
      ],
      mistakes: [
        'Thinking the online course alone makes you CERT trained.',
        'Skipping the drills after the class.',
        'Going beyond your training at a scene. Do what you were taught, and call 911.'
      ],
      sources: ['ready-cert', 'fema-cert-coord', 'ready-teen-cert', 'fema-is317'],
      checked: '2026-11-21'
    },

    'money-bills': {
      intro: 'After a disaster or a lost job, the bills keep coming. A paper list of every bill and account lets you make the calls that protect your credit.',
      parts: [
        { head: 'What to list for each bill', items: [
          'Rent or mortgage, utilities, phone, car and other loans, credit cards, insurance and child support.',
          'For each one: the company name, whose name it is in, the account number and the phone number.',
          'Note which bills come out on their own each month.',
          'For autopay bills, print a recent statement and keep it with the list.'
        ] },
        { head: 'Accounts and income', items: [
          'Checking, savings and retirement accounts, with the bank\'s phone number.',
          'Every insurance policy: home or renters, car, health, life and flood, with the claims number.',
          'Where your income comes from, and your employer\'s contact.',
          'Recent tax papers. You may need proof of income to get disaster help.'
        ] },
        { head: 'Keep it safe', items: [
          'Use Ready.gov\'s free Emergency Financial First Aid Kit. It has the forms and checklists.',
          'Keep the paper copy in a fireproof, waterproof box you can grab and go.',
          'Keep a copy elsewhere: a safe deposit box, a trusted relative, or a password-protected drive.',
          'Do not share account numbers or your Social Security number with anyone who calls or texts you.'
        ] },
        { head: 'If you cannot pay', items: [
          'You still owe the mortgage and credit cards after a disaster, even if the house is damaged.',
          'Call your lenders, landlord and utilities right away. Explain what happened.',
          'They may delay payments, set up a payment plan, give more time or waive late fees.',
          'Call before you miss a payment, not after.'
        ] },
        { head: 'Keep it current', items: [
          'Look it over at tax time, or when the clocks change.',
          'Update it when you move, change insurance, or open or close an account.',
          'If you get federal benefits by paper check, think about direct deposit. Mail can stop for weeks after a disaster.'
        ] }
      ],
      mistakes: [
        'Keeping the only list on a phone or computer.',
        'Skipping payments without calling first.',
        'Giving account details to a caller who says they are from the government. The government will not call or text you about money owed.'
      ],
      sources: ['ready-money', 'ready-effak', 'ftc-papers', 'ftc-back-on-track'],
      checked: '2026-11-21'
    },

    'money-nets': {
      intro: 'If the paycheck stops or a disaster hits, help is there. Know the numbers now, while things are calm.',
      parts: [
        { head: 'If you lose work', items: [
          'Ask your employer if your pay and health insurance will continue, and for how long.',
          'Call the U.S. Department of Labor at 1-866-4-USA-DOL. They connect you with your state\'s unemployment office.',
          'Apply for unemployment, health care and food help when you need it.',
          'Write your state unemployment website and phone number on your bill list.'
        ] },
        { head: 'If you get benefits', items: [
          'Social Security: 1-800-772-1213. Ask how to keep getting your payments if you have to leave home.',
          'Veterans benefits: 1-800-827-1000.',
          'Direct deposit keeps payments coming when mail is slow.'
        ] },
        { head: 'After a declared disaster', items: [
          'Apply for FEMA help at DisasterAssistance.gov, in the FEMA app, or by phone at 1-800-621-3362.',
          'The phone line is open 7 a.m. to 10 p.m. in your time zone, every day.',
          'On the website, pick your state to see if your county is in a declared area.',
          'To find a Disaster Recovery Center, text DRC and your ZIP code to 43362.',
          'Keep proof of where you live and your income. You may need both to apply.'
        ] },
        { head: 'Protect your credit', items: [
          'Get your free credit report at AnnualCreditReport.com or 1-877-322-8228. It lists every lender, even if your papers are lost.',
          'Call lenders, landlords and utilities early and ask for help.'
        ] },
        { head: 'Watch for scams', items: [
          'Never pay anyone to help you get government aid. FEMA help is free.',
          'The government will not call, text or message you on social media about money owed or payments.',
          'Do not click links in texts or emails from people you do not know.',
          'Report scams at ReportFraud.ftc.gov.'
        ] }
      ],
      mistakes: [
        'Waiting weeks to apply for unemployment.',
        'Paying a stranger who promises to speed up FEMA aid.',
        'Not writing the numbers down until you need them.'
      ],
      sources: ['ready-money', 'ftc-back-on-track', 'fema-disasterassistance', 'fema-app', 'ready-effak'],
      checked: '2026-11-21'
    },

    'money-cash': {
      intro: 'When the power is out, ATMs and card readers may not work. A little cash at home lets you buy food, fuel and supplies anyway.',
      parts: [
        { head: 'How much', items: [
          'Base it on what your household needs each day: food, gas and the other things you use.',
          'Start small and add to it over time.',
          'Keep small bills. A store may not be able to make change.'
        ] },
        { head: 'Where to keep it', items: [
          'In a safe place at home. A lockable, fireproof box works well.',
          'Keep it with your important papers, a spare set of house and car keys, and your safe deposit box key.',
          'Or keep some with a trusted relative or friend.',
          'Tell the other adult in the house where it is.'
        ] },
        { head: 'Know the risks', items: [
          'Cash can be lost, stolen or burned. Keep only a small amount at home.',
          'Keep the rest of your emergency savings in an insured bank or credit union account.'
        ] },
        { head: 'Keep it ready', items: [
          'Use it only for an emergency.',
          'If you spend it, put it back as soon as you can.',
          'Check it when you check the rest of your kit.'
        ] }
      ],
      mistakes: [
        'Keeping only large bills.',
        'Borrowing from it for everyday spending.',
        'Hiding it so well that no one else can find it.'
      ],
      sources: ['ready-money', 'ready-effak', 'ftc-papers', 'cfpb-emergency-fund'],
      checked: '2026-11-21'
    },

    'money-starter': {
      intro: 'Most emergencies are a car repair, a doctor bill or a broken appliance. A small fund set aside for those keeps them from turning into debt.',
      parts: [
        { head: 'Set a goal', items: [
          'Think back to your last few surprise bills. What did they cost?',
          'Use that to set your first goal.',
          'Even a small amount helps, if money is tight or your pay changes from week to week.'
        ] },
        { head: 'How fast it adds up', cols: ['Each week', 'To $500', 'To $1,000'], rows: [
          ['$10', '50 weeks', '100 weeks'],
          ['$20', '25 weeks', '50 weeks'],
          ['$40', '13 weeks', '25 weeks']
        ] },
        { head: 'Make it automatic', items: [
          'Set a recurring transfer from checking to savings each payday.',
          'Or ask your employer to split your direct deposit between two accounts.',
          'Check your balance before transfers, so you do not get an overdraft fee.',
          'Put all or part of a tax refund or cash gift into it.'
        ] },
        { head: 'Where to keep it', items: [
          'A separate savings account at a bank or credit union, so you do not spend it by accident.',
          'At an FDIC-insured bank, deposits are covered up to $250,000 per person, per bank, per type of account.',
          'Check that a bank is insured with the FDIC\'s BankFind tool.',
          'Money left sitting in a payment app is usually not insured. Move it to your account.'
        ] },
        { head: 'Using it', items: [
          'Decide now what counts as an emergency, and stick to it.',
          'Do not be afraid to use it when you need it. That is what it is for.',
          'When you use it, start building it back up.'
        ] }
      ],
      mistakes: [
        'Keeping it in checking, where it gets spent.',
        'Putting a surprise bill on a credit card when the cash is there. Interest makes it cost more.',
        'Stopping the transfers once you reach the goal. Raise the goal instead.'
      ],
      sources: ['cfpb-emergency-fund', 'fdic-deposit-ins', 'cfpb-payment-app', 'fdic-moneysmart'],
      checked: '2026-11-21'
    },

    'money-month': {
      intro: 'A month of living costs set aside gives you time to find work or get through a disaster. Build it the same way you built the starter fund, one step at a time.',
      parts: [
        { head: 'Find your number', items: [
          'Use your bill list. Add up one month of housing, utilities, phone, food, gas, insurance and loan payments.',
          'Leave out the extras you could stop for a while.',
          'That total is your goal.'
        ] },
        { head: 'Keep it growing', items: [
          'Keep the automatic transfer going.',
          'Track your total. A running list or a balance alert both work.',
          'Mark each step, like a quarter or half of the goal.'
        ] },
        { head: 'Find more to save', items: [
          'Look at when money comes in and when bills go out.',
          'Ask your landlord, utilities or card company if you can move a due date to better fit your paydays.',
          'In weeks when you have more, move a little extra to savings.',
          'Put tax refunds and gifts in, in whole or in part.'
        ] },
        { head: 'Debt and the cushion', items: [
          'Debt from a card or loan used for emergencies grows with interest and fees.',
          'A cushion keeps you from adding new debt when something goes wrong.',
          'Keep saving while you pay down what you owe.'
        ] }
      ],
      mistakes: [
        'Setting the goal from a guess. Use your real bills.',
        'Using the fund for things that are not emergencies.',
        'Pulling from retirement savings to cover a surprise bill.'
      ],
      sources: ['cfpb-emergency-fund', 'ready-effak', 'ready-money'],
      checked: '2026-11-21'
    },

    'money-three': {
      intro: 'A bigger cushion lets you wait out a longer job loss or recovery. The work is the same: keep saving, keep it safe, and refill it after you use it.',
      parts: [
        { head: 'Keep going', items: [
          'Keep the automatic transfer going after you reach one month.',
          'When your pay goes up, raise the transfer.',
          'If your pay drops, lower it, but try not to stop.',
          'Set your next goal each time you reach one.'
        ] },
        { head: 'Keep it safe and easy to reach', items: [
          'You want this money safe, easy to get, and hard to spend on other things.',
          'A savings account at an insured bank or credit union does that.',
          'FDIC insurance covers deposits like savings, checking, money market deposit accounts and CDs.',
          'It does not cover stocks, bonds, mutual funds, annuities or crypto.',
          'If you have more than $250,000 at one bank, check your coverage with the FDIC.'
        ] },
        { head: 'Protect what you saved', items: [
          'Review your insurance. Make sure home or renters and car coverage would be enough.',
          'Homeowners insurance usually does not cover floods. Flood insurance is separate.',
          'Keep your bill list and account papers current.'
        ] },
        { head: 'After you use it', items: [
          'Using it is fine. That is the point.',
          'Start refilling it once things settle.',
          'Look back at what happened, and adjust your goal if it was not enough.'
        ] }
      ],
      mistakes: [
        'Stopping once you hit one month.',
        'Leaving savings in a payment app that is not insured.',
        'Letting insurance lapse, so one big loss wipes out the savings.'
      ],
      sources: ['cfpb-emergency-fund', 'fdic-deposit-ins', 'ready-money', 'ready-effak', 'ftc-prepare-scams'],
      checked: '2026-11-21'
    },

    'med-cpr-video': {
      intro: 'Hands-Only CPR is CPR without breaths. The American Heart Association teaches it in two steps, in a video about 90 seconds long.',
      parts: [
        { head: 'When to use it', items: [
          'Use it when a teen or adult suddenly collapses.',
          'For babies and children, someone who drowned, a drug overdose, or a person who collapsed from breathing trouble, the Heart Association still recommends CPR with breaths.',
          'A full CPR class teaches the breaths. The Heart Association calls Hands-Only CPR a first step toward one.'
        ] },
        { head: 'The two steps, in this order', items: [
          'Call 911.',
          'Push hard and fast in the center of the chest.',
          'Place one hand on top of the other, the way the video shows.'
        ] },
        { head: 'The pace', items: [
          'Push 100 to 120 times a minute.',
          'Pick a song you know with that beat and push to it. People keep the right pace better that way.',
          'The Heart Association keeps a list of songs at that pace on its site.'
        ] },
        { head: 'Learn it as a house', items: [
          'Watch the video together. It is free.',
          'The Heart Association asks at least one person in every home to learn it.',
          'Then find a full CPR class as the next step.'
        ] },
        { head: 'Why it matters', items: [
          'About 70 percent of cardiac arrests outside a hospital happen in homes.',
          'CPR, most of all right away, can double or triple the chance of living.',
          'Hands-Only CPR has been shown to work as well as standard CPR for cardiac arrest at home, at work or in public.'
        ] }
      ],
      mistakes: [
        'Starting to push before anyone has called 911.',
        'Pushing too slowly. Use the song.',
        'Using Hands-Only CPR on a baby or child, when breaths are recommended too.'
      ],
      sources: ['aha-hocpr-facts', 'aha-hocpr-news'],
      checked: '2026-11-21'
    },

    'med-heat-cold': {
      intro: 'Heat stroke and hypothermia both affect the brain, so the person often cannot tell they are in trouble. These are the CDC\'s signs and first steps.',
      parts: [
        { head: 'Heat stroke: call 911', items: [
          'Signs: confusion or slurred speech, passing out, seizures, hot dry skin or heavy sweating, a very high temperature.',
          'Body temperature can climb to 106°F or more in 10 to 15 minutes.',
          'Call 911 and stay with the person.',
          'Move them to shade or a cool spot. Take off outer clothing.',
          'Cool them fast: a cold water or ice bath if you can, or wet the skin and soak the clothes with cool water. Fan the air around them.',
          'Put cold, wet cloths or ice on the head, neck, armpits and groin.'
        ] },
        { head: 'Heat exhaustion', items: [
          'Signs: headache, nausea, dizziness, weakness, irritability, thirst, heavy sweating, passing less urine.',
          'Get them out of the heat. Take off extra clothing, shoes and socks too.',
          'Cool them with cold packs, or have them wash the head, face and neck with cold water.',
          'Give frequent sips of cool water.',
          'Get them to a clinic or emergency room to be checked. Call 911 if no care is available.'
        ] },
        { head: 'Hypothermia', items: [
          'It can happen above 40°F when a person is wet from rain, sweat or cold water.',
          'Signs in adults: shivering, exhaustion, confusion, fumbling hands, memory loss, slurred speech, drowsiness. In babies: bright red, cold skin and very low energy.',
          'Take their temperature. Below 95°F is an emergency. Get medical help right away.',
          'Until help comes: get them into a warm room and take off wet clothing.',
          'Warm the chest, neck, head and groin first. Skin-to-skin contact under loose, dry blankets works.',
          'Warm drinks help if they are awake. No alcohol, and no drinks for someone who is not awake.',
          'If they seem to have no pulse or breathing, call 911 and do CPR even if they seem gone. Keep warming them.'
        ] },
        { head: 'Frostbite', items: [
          'Redness or pain in the skin can be the first sign. Get out of the cold.',
          'Later signs: white or grayish-yellow skin, skin that feels firm or waxy, numbness. The person often does not notice.',
          'Check for hypothermia too. It is the bigger emergency.',
          'Do not walk on frostbitten feet or toes unless you must.',
          'Warm the area in warm water that feels comfortable to normal skin, or with body heat, like fingers in an armpit.',
          'Never rub it. Never warm it with a heating pad, heat lamp, stove, fireplace or radiator. Numb skin burns easily.',
          'Have a health care provider check it.'
        ] },
        { head: 'Who is most at risk', items: [
          'Cold: older adults without enough food, clothing or heat, and babies sleeping in cold rooms.',
          'Cold: people outdoors for long periods, like hikers and hunters, and people who drink alcohol or use drugs.',
          'Heat: people who are pregnant, children with asthma, and anyone with a heart condition or other long-term illness.'
        ] }
      ],
      mistakes: [
        'Waiting to see if heat stroke passes. Call 911 at once.',
        'Rubbing frostbitten skin, or warming it by the stove.',
        'Thinking it is too warm for hypothermia. Wet and 40°F is enough.'
      ],
      sources: ['cdc-heat-ill', 'cdc-heat', 'cdc-hypo', 'cdc-frostbite'],
      checked: '2026-11-21'
    },

    'med-wounds': {
      intro: 'These steps are from MedlinePlus, the National Library of Medicine\'s health site. For heavy bleeding, use what you learn in Stop the Bleed and call 911.',
      parts: [
        { head: 'A minor burn (skin not broken)', items: [
          'Run cool water over it, or soak it in cool water, not ice water, for 5 to 30 minutes. A clean, cold, wet towel eases the pain.',
          'Then cover it with a dry, sterile bandage or a clean dressing.',
          'Keep pressure and rubbing off it.',
          'Once it has cooled, a lotion with aloe can help. If the skin is broken, use an ointment so the dressing does not stick.',
          'Make sure the person is up to date on the tetanus shot.'
        ] },
        { head: 'A big burn: call 911', items: [
          'Call 911 for a burn the size of a palm or bigger, a deep burn, one from chemicals or electricity, or if the person breathed smoke.',
          'Someone on fire: stop, drop and roll. Wrap them in a wool or cotton coat, rug or blanket, and pour on water.',
          'Leave burned clothing that is stuck to the skin.',
          'Cover the burn with a dry sterile bandage or a clean cloth, or a sheet for a large area. No ointment. Do not break blisters.',
          'Raise the burned part above the heart.',
          'Electrical burn: do not touch the person while they touch the wire. Move them away with something that is not metal.',
          'Watch for shock: pale, clammy skin, weakness, blue lips. With no head, neck, back or leg injury, lay them flat, raise the feet about 12 inches and cover them.'
        ] },
        { head: 'A cut', items: [
          'Wash your hands first.',
          'Wash the cut well with mild soap and water. Even a cut that looks clean gets washed.',
          'Press directly on it to stop the bleeding.',
          'Put on antibiotic ointment and a bandage that will not stick.',
          'Leave anything stuck deep in the wound where it is, and get care.'
        ] },
        { head: 'When a cut needs more', items: [
          'Call 911 if the bleeding is severe, or does not stop after 10 minutes of pressure.',
          'Call 911 if the person cannot feel the area, or it does not work right.',
          'See a provider right away if it is deeper than a quarter inch, on the face, or down to the bone. It may need stitches.',
          'Also for a bite, a fishhook, a rusty object, stepping on a nail, or a last tetanus shot over 10 years ago.',
          'Signs of infection: warmth, redness, throbbing, fever, swelling, a red streak, or pus.'
        ] },
        { head: 'A sprain', items: [
          'Ice it right away, wrapped in cloth. Never put ice right on the skin.',
          'Wrap it firmly, but not tight, to limit movement. Splint it if needed.',
          'Keep it raised above the heart, even while sleeping.',
          'Rest it for several days. Keep weight off it until the pain goes.',
          'Do not give aspirin to children.',
          'Go to the hospital or call 911 if you think a bone is broken, the joint looks out of place, or you heard a pop and cannot use it.',
          'See a provider if the swelling has not started to go down in 2 days.'
        ] }
      ],
      mistakes: [
        'Putting butter, oil or ice on a burn.',
        'Pulling out an object stuck deep in a wound.',
        'Wrapping a sprain so tight it cuts off the blood.',
        'Skipping the wash on a cut that looks clean.'
      ],
      sources: ['nih-burns', 'nih-cuts', 'nih-sprains'],
      checked: '2026-11-21'
    },

    'med-hygiene': {
      intro: 'When the water is off or unsafe, sickness spreads through a house fast. The CDC\'s plan is simple: clean hands, safe water for teeth and wounds, and care with bathing.',
      parts: [
        { head: 'Wash hands the CDC way', items: [
          'Wet your hands with clean water, then put on soap.',
          'Lather the backs of your hands, between the fingers and under the nails.',
          'Scrub for at least 20 seconds.',
          'Rinse well in clean water.',
          'Dry with a clean towel or let them air-dry.'
        ] },
        { head: 'With no running water', items: [
          'Make a hand-washing station from a large water jug.',
          'Use the cleanest water you have. If local officials or your doctor say to take extra care, use water that was boiled or disinfected.',
          'Water but no soap: rub your hands together under the water and dry them. It rinses off some germs.',
          'No soap and no water: use hand sanitizer with at least 60% alcohol.'
        ] },
        { head: 'Using sanitizer right', items: [
          'Put enough in one palm to cover both hands.',
          'Rub every surface until dry, about 20 seconds. Do not wipe it off first.',
          'It does not work well on dirty or greasy hands, and it does not remove chemicals. Wash those off.',
          'Watch young children so they do not swallow it.'
        ] },
        { head: 'Key times to wash', items: [
          'Before, during and after making food, and before eating.',
          'After the toilet, and after changing diapers.',
          'Before and after caring for someone sick with vomiting or diarrhea.',
          'Before and after treating a cut or wound.',
          'After touching garbage, animals or pet food, or blowing your nose.'
        ] },
        { head: 'Teeth, bathing and wounds', items: [
          'Brush teeth only with clean water. Ask local officials whether the tap water is safe.',
          'Some water that is not safe to drink is fine for bathing. Do not swallow it or get it in your eyes.',
          'Never bathe in water that may hold sewage, chemicals or flood water.',
          'Keep cuts clean with soap and clean water, and covered with a waterproof bandage. Stay out of flood water with an open wound.',
          'Get care if a wound turns red, swells or oozes.'
        ] }
      ],
      mistakes: [
        'Using sanitizer on hands that are visibly dirty.',
        'Brushing teeth with water you would not drink.',
        'Wading in flood water with an open cut.'
      ],
      sources: ['cdc-hygiene', 'cdc-handwash', 'cdc-sanitizer', 'cdc-hands-faq'],
      checked: '2026-11-21'
    },

    'home-toilet': {
      intro: 'When the water is off or the sewer is broken, you still need a toilet. FEMA and Ready.gov list a few low-cost things that cover it, and Extension shows how to run one for weeks.',
      parts: [
        { head: 'What to gather', items: [
          'A medium-sized plastic bucket with a tight lid. For a long outage, Oregon State University Extension uses two 5-gallon buckets with lids, marked "pee" and "poo."',
          'Heavy-duty plastic garbage bags and ties. Extension says 3 to 5 mil contractor bags, several boxes of them.',
          'A dry cover material: wood shavings, sawdust, shredded paper, bark chips or peat moss.',
          'Toilet paper, moist towelettes, and closable bags for used paper.',
          'A disinfectant, household chlorine bleach, and disposable gloves.',
          'Soap and hand sanitizer, plus a jug of water with a spigot for hand washing.',
          'FEMA also lists a small shovel, for when you must dig a latrine. See the step on digging a latrine.'
        ] },
        { head: 'Flush, or switch to the bucket', items: [
          'If the pipes work but the water is off, flush with water poured from a bucket. FEMA says to store water in buckets or the tub for this when pipes may freeze.',
          'Ready.gov counts sanitation in its one gallon a person a day of stored water.',
          'After a flood, do not flush until you know the sewage lines are intact.',
          'After a big earthquake, Extension says to avoid flushing even if your own pipes look fine. The pipes in the street may be broken.',
          'On a septic system, the EPA says not to use it until the water in the drain field is lower than the water around the house.',
          'Until then, use the bucket. The CDC describes a bucket toilet as a container lined with a plastic bag that gets replaced.'
        ] },
        { head: 'Use it day to day', items: [
          'Line the poo bucket with a heavy bag. The pee bucket can stay unlined.',
          'Try to keep pee out of the poo bucket. Extension says urine causes most of the smell.',
          'After each use, sprinkle about half a cup of cover material over the waste until it is covered. This cuts odor and keeps flies off.',
          'Put used toilet paper in the poo bag or a separate bag, not the pee bucket.',
          'Close the lid between uses, but not airtight, so the waste can dry.',
          'Plan on about one bag a person a day.'
        ] },
        { head: 'Empty and store it', items: [
          'Fill the poo bucket no more than half full. Put on gloves, tie the bag, and put it in a second bag. Seal it.',
          'Store full bags in their own can with a lid, away from food, water and other garbage. Keep pets, flies and rats out.',
          'Do not put them in the regular trash unless local officials say so. You may need to store them until the sewer is fixed.',
          'When the pee bucket is about a quarter full, add a little water and pour it on the ground. Use a new spot each time.',
          'If you must bury waste, pick a spot away from where people live and work, at least 100 feet from any water, and mark it.',
          'Clean the buckets with disinfectant when you are done with them.'
        ] },
        { head: 'Kids, older adults and others', items: [
          'A child who uses a potty chair can keep using it. Empty it into the family buckets.',
          'Bag used diapers, for babies or adults, in heavy bags and store them with the poo bags. Keep extra diapers in the kit.',
          'Bag pads and tampons the same way.',
          'The CDC notes bucket toilets can be hard for older people and small children to use.',
          'For anyone with balance trouble, put the buckets by a sturdy chair or rail. Raising them on scrap wood or bricks helps too.'
        ] },
        { head: 'Keep hands clean', items: [
          'The CDC says to put a hand-washing station at every toilet of any kind.',
          'A jug with a spigot, soap, a towel and a bucket underneath is enough. Extension suggests a second one by the kitchen.',
          'Wash with soap and water after every use, or use sanitizer with at least 60% alcohol.',
          'Wash after every diaper change, too.'
        ] }
      ],
      mistakes: [
        'Flushing after a flood or earthquake before you know the sewer lines are good.',
        'Peeing in the poo bucket, or leaving waste uncovered.',
        'Storing full bags with regular garbage, or near food and water.',
        'Forgetting a way to wash hands next to the toilet.'
      ],
      sources: ['ready-kit', 'fema-supplies', 'fema-is909-handouts', 'cdc-sanitation', 'cdc-hygiene', 'osu-sanitation', 'epa-septic-flood', 'fema-cert-manual'],
      checked: '2026-11-26'
    },

    'food-can': {
      intro: 'Canning keeps food on the shelf for a year, but only when done by the tested method. Everything here is from the USDA-funded National Center for Home Food Preservation.',
      parts: [
        { head: 'Pick the right canner', items: [
          'Acid foods go in a boiling-water canner: fruits, pickles, sauerkraut, jams, jellies and fruit butters.',
          'Low-acid foods need a pressure canner: red meat, seafood, poultry, milk, and all fresh vegetables except most tomatoes. Boiling water is a real botulism risk for these.',
          'Low-acid foods must reach 240°F to 250°F, which takes a pressure canner at 10 to 15 pounds.',
          'Tomatoes and figs can sit just above the line. Add the lemon juice or citric acid the recipe calls for.'
        ] },
        { head: 'Use a tested recipe, every time', items: [
          'Use the times in the USDA Complete Guide to Home Canning or on the National Center\'s site. Never guess.',
          'Times depend on the food, how it is packed and the jar size.',
          'At 1,000 feet or higher, use the time or pressure for your elevation. Your county Extension office can tell you your elevation.',
          'Not recommended: open-kettle canning, or processing jars in the oven, microwave or dishwasher. Canning powders do not preserve food.'
        ] },
        { head: 'Boiling-water canner, step by step', items: [
          'Rack in the bottom and the canner about half full. Preheat the water to 140°F for raw-packed food, 180°F for hot-packed.',
          'Lower the filled, lidded jars in, kept upright. Water should cover the tops by 1 inch, or 2 inches for times over 30 minutes.',
          'Lid on, heat on high. Start the timer only when the water boils hard.',
          'Keep a full boil the whole time. If it stops boiling, bring it back and start the time over.',
          'When time is up, turn off the heat, take off the lid and wait 5 minutes. Lift the jars onto a towel, 1 inch apart.'
        ] },
        { head: 'Pressure canner basics', items: [
          'Have a dial gauge checked every year. Replace it if it reads more than 2 pounds off.',
          'Vent steam for a full 10 minutes before you close the vent. Trapped air means a lower temperature.',
          'Start timing when the gauge reaches the pressure, or when the weight rocks the way the maker describes.',
          'If the pressure drops below the mark, bring it back up and start the time over.',
          'Let it cool on its own. Never run water over it or open the vent early.',
          'Once it is at zero, wait 10 more minutes, then lift the lid away from your face.'
        ] },
        { head: 'Seal, store and check', items: [
          'Let jars cool 12 to 24 hours without touching them. Do not tighten the bands.',
          'Test each seal: press the center of the lid. If it springs back, it did not seal. A sealed lid curves down a little.',
          'A jar that did not seal can go in the fridge to eat soon, or be reprocessed within 24 hours with a new lid.',
          'Take off the bands, wash the jars, label and date them. Store them dark and dry at 50°F to 70°F, never above 95°F.',
          'Can only what you will eat in a year.'
        ] },
        { head: 'If a jar looks wrong', items: [
          'Never taste food from an unsealed jar, or one that shows signs of spoiling.',
          'Signs: a swollen or loose lid, streaks down the jar, rising bubbles, odd color or smell, spurting liquid, or mold.',
          'Treat any suspect low-acid jar, tomatoes included, as if it holds botulism toxin. Even a taste can kill.',
          'Wear gloves. A suspect jar that is still sealed goes in a heavy garbage bag in the trash. An open or leaking one must be boiled 30 minutes first; follow the National Center\'s full steps.'
        ] }
      ],
      mistakes: [
        'Canning green beans or other vegetables in a boiling-water canner.',
        'Using a recipe that was never tested.',
        'Skipping the elevation adjustment.',
        'Tasting a jar to see if it has spoiled.'
      ],
      sources: ['usda-preserve', 'nchfp-safe', 'nchfp-canners', 'nchfp-store', 'nchfp-spoiled', 'nchfp-notrec'],
      checked: '2026-11-21'
    },

    'skill-fire': {
      intro: 'A small fire gives heat, light and a signal for help. The Forest Service way: check the rules, build small, never leave it, and put it out until it is cold.',
      parts: [
        { head: 'Before you light it', items: [
          'Check for fire restrictions where you are. Some places need a free permit.',
          'Do not build one on dry, windy days.',
          'Have plenty of water, a bucket and a shovel at hand.',
          'Gather tinder (small twigs, dry leaves, grass and needles), kindling (sticks under 1 inch around) and larger wood.',
          'Use dead wood from the ground. Never cut trees or branches.'
        ] },
        { head: 'Pick and clear the spot', items: [
          'Open, level ground, out of the wind.',
          'At least 15 feet from tents, brush and low branches.',
          'Use an existing fire ring if there is one.',
          'If not, scrape a circle 10 feet across down to bare soil, scoop a shallow pit in the middle, and ring it with rocks.',
          'Pull spare wood back from the fire.'
        ] },
        { head: 'Build and light it', items: [
          'Lay kindling over the tinder like a teepee, or stack it like a log cabin for a longer fire.',
          'Light it with a match or lighter. Never use gas or other flammable liquids.',
          'Blow gently at the base, then add kindling, then bigger wood.',
          'Keep it small. A bed of coals gives plenty of heat.',
          'Never burn trash, aerosol cans, batteries, glass or plastic.'
        ] },
        { head: 'While it burns', items: [
          'Never leave it, even for a minute. A small breeze can spread it.',
          'An adult stays with it. Keep an eye on children and pets.',
          'If it jumps out of the ring into the brush, call 911.'
        ] },
        { head: 'Put it out: drown, stir, feel', items: [
          'Drown it with water until the hissing stops. It takes more than most people think.',
          'Stir the ashes and embers with the shovel. Scrape the burned sticks and turn the coals so every side gets wet.',
          'Add more water and stir again. Move the rocks; embers hide under them.',
          'Short on water: mix in dirt or sand and keep stirring until it is all cool. Do not just bury the coals; they can smolder and break out.',
          'Feel it with the back of your hand. If it is too hot to touch, it is too hot to leave.'
        ] }
      ],
      mistakes: [
        'Starting it with gas or lighter fluid.',
        'Burying the coals instead of drowning them.',
        'Walking away from a fire that is still warm.'
      ],
      sources: ['fs-campfire', 'fs-fire-safety', 'fs-inyo-campfire', 'smokey-campfire'],
      checked: '2026-11-21'
    },

    'skill-ten': {
      intro: 'The National Park Service groups the 10 essentials into ten systems. Pack them once, keep them in the vehicle or a day pack, and add to them for the trip.',
      parts: [
        { head: 'Find your way, and see', items: [
          'Navigation: a map and compass, and a GPS or phone. Bring the paper map as a backup, and a spare phone battery.',
          'Know how to use the map and compass before you go.',
          'Light: a headlamp is best because it leaves your hands free. Pack spare batteries.',
          'A light also helps you signal for help.'
        ] },
        { head: 'Stay warm, dry and covered', items: [
          'Extra clothing: a layer for the worst weather you could meet. A rain shell, jacket, hat and gloves.',
          'Bright clothing makes you easier for searchers to see.',
          'Sun protection: sunglasses, sunscreen and a hat, or long sleeves and pants.',
          'Emergency shelter: a tent, tarp, bivy sack or space blanket. All are light.'
        ] },
        { head: 'Fire, first aid and repair', items: [
          'Fire: matches, waterproof if you can, or a lighter, plus fire starters. Fire is heat, cooking and an emergency signal.',
          'First aid: start with a ready-made kit and fit it to your trip. Add your daily medicine and check the dates.',
          'Repair kit: duct tape, a knife, scissors or a multi-tool. A trowel and toilet paper too.'
        ] },
        { head: 'Food and water', items: [
          'An extra day of food that needs no cooking: trail mix, nuts, granola bars.',
          'Water, and a way to treat more.',
          'Drink often, before you feel thirsty, most of all in hot weather.',
          'Know where water is along your route before you go.'
        ] },
        { head: 'In the vehicle', items: [
          'Ready.gov says to keep a kit in the car in case you are stranded.',
          'In winter, the Forest Service adds tire chains, an ice scraper, an extra blanket and food.',
          'Tell someone where you are going and when you will be back.'
        ] }
      ],
      mistakes: [
        'Counting on the phone alone for a map and a light.',
        'Letting the first aid supplies and batteries run past their dates.',
        'Leaving the pack at home for a short trip.'
      ],
      sources: ['nps-10', 'ready-kit', 'fs-backcountry'],
      checked: '2026-11-21'
    },

    'skill-compass': {
      intro: 'A topographic map shows the shape of the land, and a compass gives you direction. Together they get you across country with no signal. These steps are the USGS method.',
      parts: [
        { head: 'Read the land on the map', items: [
          'Contour lines join points of the same elevation. They are usually brown.',
          'The heavier index contours carry the elevation numbers.',
          'The contour interval, the rise from one line to the next, is printed in the margin.',
          'Lines close together mean a steep slope.',
          'Woods are green and water is blue. Use the scale bar in the margin for distance.'
        ] },
        { head: 'Know your declination', items: [
          'A compass points to magnetic north, not true north. The angle between them is the declination.',
          'It changes from place to place and over time.',
          'The diagram at the bottom of a USGS map gives it. If the map is over 15 years old, get a current figure from the online calculator the USGS links to.',
          'Magnetic north east of true north: declination is positive. West of it: negative.'
        ] },
        { head: 'Take a bearing off the map', items: [
          'Step away from metal: keys, belt buckle, the truck, a fence.',
          'Draw a line from your start to your destination, and run it on through the map border.',
          'Set the compass needle\'s pivot right where your line crosses the border.',
          'Turn the dial until compass north matches map north. Read the bearing. Due east is 90, not 270.',
          'Adjust in your head: subtract the declination if it is positive, add it if it is negative. Turn the dial to that number.'
        ] },
        { head: 'Walk the bearing', items: [
          'Hold the compass with the travel arrow pointing straight away from you.',
          'Turn your whole body with it until the red needle sits over the orienting arrow.',
          'Pick a landmark on that line and walk to it. Repeat until you arrive.',
          'Practice in a park you know before you need it.'
        ] }
      ],
      mistakes: [
        'Taking a bearing next to the truck or a metal fence.',
        'Forgetting declination, or adding it when you should subtract.',
        'Reading the bearing backward: due east is 90, not 270.'
      ],
      sources: ['usgs-mapcompass', 'usgs-bearing', 'usgs-declination', 'usgs-maps'],
      checked: '2026-11-21'
    },

    'skill-signal': {
      intro: 'If you are lost or hurt, your job is to be found. The Park Service and Forest Service teach a few simple signals that work anywhere.',
      parts: [
        { head: 'The rule of three', items: [
          'Any signal done three times in a row is the universal call for help.',
          'Three whistle blasts, three flashes of a mirror or flashlight, or three puffs of smoke.',
          'Repeat it at regular intervals.',
          'A search party that hears it answers with two signals.',
          'Use it only when you need help.'
        ] },
        { head: 'Whistle', items: [
          'If you are lost or separated, stay put and blow three blasts.',
          'Give every child a whistle with one rule: if you are lost, stop and blow.'
        ] },
        { head: 'Mirror and light', items: [
          'Flash sunlight toward searchers with a signal mirror, foil or anything shiny.',
          'At night, flash a flashlight or headlamp in threes.'
        ] },
        { head: 'Be seen from the air', items: [
          'Lay brightly colored clothing out in a forest clearing.',
          'Wear bright clothing when you go out, so searchers can spot you.',
          'Hurt and alone, where fire is safe: clear an area down to bare soil and build a signal fire. Green boughs make heavy smoke.'
        ] },
        { head: 'Your phone', items: [
          'If you have a signal, call 911.',
          'If a call will not go through, a text to someone who can call 911 for you may.',
          'Save the battery: keep the phone off or in airplane mode until you need it.'
        ] }
      ],
      mistakes: [
        'Leaving the whistle in the truck.',
        'Signaling once and stopping. Repeat at regular intervals.',
        'Running the phone battery down before you need it.'
      ],
      sources: ['fs-willamette-lost', 'fs-backcountry', 'nps-yose-safety', 'nps-olym-safety', 'nps-whsa-safety'],
      checked: '2026-11-21'
    },

    'skill-lost': {
      intro: 'People who get lost are found sooner when they stop moving. The plan you leave at home is what starts the search.',
      parts: [
        { head: 'Before you go', items: [
          'Leave your plan with someone you trust: which trails, where you park, and when you will be back.',
          'Tell them to call 911 if you are not back by a set time. Rangers do not track overdue hikers.',
          'Do not leave your plan on the windshield. Thieves look for it.',
          'Phones often get no signal in the backcountry. Do not count on one.',
          'Stay on the trail and stay with your group.'
        ] },
        { head: 'The moment you are lost', items: [
          'Stop. Stay calm and think it through.',
          'Try to fix where you are with the map, compass and landmarks.',
          'If you cannot find the trail, stay put. You will be found sooner.',
          'Do not try to follow a creek or river out. Those are often the most dangerous routes.'
        ] },
        { head: 'While you wait', items: [
          'Turn to your 10 essentials.',
          'Stay warm and dry, and out of the wind.',
          'In rain, snow or fog, staying put is often safer than traveling.',
          'Signal: three whistle blasts, mirror flashes, bright clothing laid out in a clearing.',
          'If you have a signal, call or text 911. Describe where you are and where you started.'
        ] },
        { head: 'If someone else is hurt or missing', items: [
          'If someone in your party is hurt, send someone for help with a written note: the exact location, the person\'s age, height and weight, and what happened.',
          'If someone in your party is missing, call 911, the county sheriff or a Forest Service office.'
        ] },
        { head: 'Teach the kids', items: [
          'Keep children in sight at all times.',
          'Give each a whistle and the rule: if lost, stop and blow.'
        ] }
      ],
      mistakes: [
        'Wandering to find the way out once you are lost.',
        'Following a creek downhill.',
        'Telling no one where you went.'
      ],
      sources: ['nps-yose-safety', 'nps-hale-safety', 'nps-olym-safety', 'nps-whsa-safety', 'fs-backcountry', 'fs-willamette-lost'],
      checked: '2026-11-21'
    },

    'skill-night': {
      intro: 'Hypothermia comes from cold made worse by wet, wind and being worn out. The Forest Service way to beat it: stay dry, block the wind, and stop before you are spent.',
      parts: [
        { head: 'Dress in layers', items: [
          'Next to the skin: a light layer that wicks sweat away.',
          'Middle: wool or fleece. Both stay warm when damp.',
          'Outside: a wind- and water-resistant shell.',
          'Skip cotton. It makes you colder when wet.',
          'Two pairs of socks; wool keeps feet warm even in wet boots. A hat and scarf that cover the ears.',
          'Shed a layer when you get hot, so you do not soak it with sweat.'
        ] },
        { head: 'Stay dry and out of the wind', items: [
          'Wet clothes lose about 90% of their warmth.',
          'Put rain gear on before you get wet. Put wool on before you start to shiver.',
          'Wind drives cold through clothing. A good windbreaker matters; a poncho does little against wind.',
          'Keep the sleeping bag and spare clothes dry in plastic bags inside the pack.'
        ] },
        { head: 'Shelter for the night', items: [
          'Stop and make camp while you still have energy.',
          'Get out of the wind and rain first. A storm-proof tent is best; plastic sheeting and cord make a backup.',
          'Put something between you and the ground, like a small foam pad to sit on.',
          'Use a space blanket for warmth. Build a fire if it is safe and allowed.',
          'Never use a flame or heater inside a tent.'
        ] },
        { head: 'Fuel', items: [
          'Eat and drink all day. Thirst and hunger bring fatigue and poor decisions.',
          'Carry trail food and keep nibbling in cold, wet weather.',
          'Skip alcohol and smoking before time in the cold.'
        ] },
        { head: 'Know when to stop', items: [
          'Persistent or violent shivering means hypothermia is close.',
          'Other signs: slurred speech, memory lapses, fumbling hands, stumbling, drowsiness.',
          'The person may say they are fine. Believe the signs.',
          'Get them out of the wind, off with wet clothes, into dry clothes and a warm sleeping bag. Warm drinks if they are awake.',
          'Below 95°F is an emergency. Get medical help as soon as you can.'
        ] }
      ],
      mistakes: [
        'Wearing cotton.',
        'Waiting until you shiver to add layers.',
        'Pushing on until you are worn out before making camp.',
        'Sitting or sleeping right on cold ground.'
      ],
      sources: ['fs-backcountry', 'fs-hypothermia', 'fs-willamette-winter', 'nps-olym-travel'],
      checked: '2026-11-21'
    },

    'skill-knots': {
      intro: 'NOAA teaches the basic knots sailors have used for centuries, with step-by-step pictures. These four cover most jobs around a camp, a truck or a boat.',
      parts: [
        { head: 'Get set up', items: [
          'A few pieces of rope about 3 feet long and 1/4 to 1/2 inch thick. Nylon, polypropylene, manila or cotton all work.',
          'Open NOAA\'s "Tied Up In Knots" page for the pictures.',
          'Know the kinds: a bend joins two ropes, a hitch holds under strain but adjusts once the strain is off, and a knot makes a loop or a stopper.'
        ] },
        { head: 'Bowline', items: [
          'Makes a loop at the end of a rope that will not close up under strain.',
          'It unties easily, even after a heavy load.',
          'Check: the free end must lie inside the loop when you finish.'
        ] },
        { head: 'Clove hitch', items: [
          'Ties a line to something round, like a post or a rail.',
          'Two wraps around the post, with the end tucked under the second wrap, as the pictures show.'
        ] },
        { head: 'Figure-eight and sheet bend', items: [
          'Figure-eight: a stopper on the end of a rope, so it cannot slip through a pulley or ring.',
          'Sheet bend: one of the best ways to join two ropes, even of different sizes.',
          'Make the sheet bend\'s loop in the thicker rope.'
        ] },
        { head: 'Practice', items: [
          'Tie each one again and again until you can do it without the pictures.',
          'NOAA\'s game: five pieces of rope, five knots. First to tie all of them right wins.',
          'A good knot can be untied easily. Test each one after a hard pull.'
        ] }
      ],
      mistakes: [
        'Using a square (reef) knot to join two ropes. NOAA says never use it that way; a jerk on one end spills it.',
        'Finishing a bowline with the free end outside the loop.',
        'Making the sheet bend\'s loop in the thinner rope.'
      ],
      sources: ['noaa-knots'],
      checked: '2026-11-21'
    },

    'skill-hunted': {
      intro: 'Hunter education is run by each state wildlife agency, with funding through the U.S. Fish and Wildlife Service. Over a million people take it every year.',
      parts: [
        { head: 'What it covers', items: [
          'Firearm and archery safety.',
          'Wildlife management and conservation.',
          'Ethics and game laws.',
          'Outdoor survival and wilderness first aid.'
        ] },
        { head: 'Find your course', items: [
          'Open the Fish and Wildlife Service hunting license page and pick your state. It links to the state agency.',
          'On the state site, look for hunter education. Many offer a class in person, online, or both.',
          'Some national wildlife refuges host the state class.'
        ] },
        { head: 'What to expect', items: [
          'Rules, ages and fees differ by state. Check yours.',
          'In one state, the in-person class runs about six hours, is free for ages 11 and up, and needs some study at home first. Its online version charges a fee.'
        ] },
        { head: 'After you pass', items: [
          'Most states require the course before you can buy a hunting license.',
          'Buy your license from the state where you will hunt. Some refuges need their own permit too.',
          'Look for mentored hunts. Some refuges run them for new hunters with no one to teach them.'
        ] }
      ],
      mistakes: [
        'Assuming one state\'s rules apply in another.',
        'Skipping the course because you grew up hunting. Most states still require it for a license.'
      ],
      sources: ['fws-hunter-ed', 'fws-hunt-license', 'fws-refuge-huntered'],
      checked: '2026-11-21'
    },

    'skill-fish': {
      intro: 'The U.S. Fish and Wildlife Service has a first-timer\'s guide that covers the gear, the knot and the cast. The license comes from your state.',
      parts: [
        { head: 'Get the license and the rules', items: [
          'Each state sells its own license. Most sell them online, by phone or in person.',
          'Every state\'s rules are a little different. Look yours up.',
          'Get a copy of the state fishing rules. They list the kinds of fish, the minimum size, and how many you can keep a day.',
          'Some places ban certain baits. Check before you go.',
          'License money funds your state fish and wildlife agency, including fish stocking and public access.'
        ] },
        { head: 'The basic gear', items: [
          'Monofilament line, 4- to 12-pound test.',
          'Hooks in sizes 6 to 10, and a pack of sinkers.',
          'Live bait or lures.',
          'A rubber net and a rubber glove.',
          'Some libraries, state agencies, fish hatcheries and wildlife refuges lend tackle to families and beginners. Call around.'
        ] },
        { head: 'Rod, reel and rig', items: [
          'A spin-casting reel with a push button is the easiest for beginners.',
          'Tie on the hook with an improved clinch knot: put the line through the hook eye, wrap the loose end 5 times around the line, tuck it through the first loop by the eye, then through the big loop. Wet it and pull it tight slowly.',
          'Add 1 or 2 sinkers 6 to 12 inches above the hook.',
          'Clip on a bobber. It bobs when a fish bites.'
        ] },
        { head: 'Practice the cast', items: [
          'Swap the hook for a rubber casting plug. Find open ground away from people.',
          'Hold the grip and press and hold the button.',
          'Stand a quarter turn from the target, rod tip pointed at it, about eye level.',
          'Smoothly raise the rod until it is almost straight up, then bring your forearm forward.',
          'Let go of the button when the rod reaches eye level.',
          'Plug landed close in front of you: you let go too late. Went straight up: too soon.'
        ] },
        { head: 'Handle fish and stay safe', items: [
          'Release undersized or unwanted fish quickly. Wet your hands or use a wet rubber glove.',
          'Keep the fish in the water as much as you can.',
          'If it swallowed the hook, cut the line close to its mouth instead of tearing the hook out.',
          'Fish with a companion. Look around before every cast, and handle hooks with care.',
          'Hundreds of national wildlife refuges and fish hatcheries allow fishing. Check each site\'s rules first.'
        ] }
      ],
      mistakes: [
        'Fishing without the license or the state rules.',
        'Keeping a fish under the legal size.',
        'Casting without looking around first.'
      ],
      sources: ['fws-fish-guide', 'fws-fish-license', 'fws-learn-fish'],
      checked: '2026-11-21'
    },

    'san-latrine': {
      intro: 'A latrine is a pit for waste, for when the sewer is out for weeks and you have land to dig. Use the bucket toilet first; the latrine is the backup.',
      parts: [
        { head: 'When a latrine makes sense', items: [
          'Oregon State University Extension says rural households can dig a latrine or hole and bury the solid waste when the sewer is out.',
          'The CDC says pit and trench latrines do not work where the water table is high, and rain can flood them.',
          'Where the ground is wet or floods, the CDC says a bagged bucket toilet works better.',
          'Ask local officials how they want human waste handled. Local radio may carry this.',
          'FEMA puts a small shovel for digging a latrine in its sanitation supplies.'
        ] },
        { head: 'Where to dig', cols: ['Keep it away from', 'At least', 'Source'], rows: [
          ['Any water source: a well, spring, creek or pond', '100 feet', 'Oregon State University Extension'],
          ['Water, campsites and trails, for a one-time hole in the woods', '200 feet', 'USDA Forest Service']
        ], note: 'Extension also says not to bury waste where it can seep downhill into water. The EPA says sandy soil lets waste travel farther, so give more room there.' },
        { head: 'Pick the spot', items: [
          'Choose a spot away from where people live and work, as FEMA CERT training teaches.',
          'Do not dig uphill of a well or creek, where waste could seep down to it.',
          'Skip low spots where rain collects.',
          'Pick a place with room for a simple screen or tarp for privacy.',
          'Walk the yard now and pick the spot, so you are not guessing later.'
        ] },
        { head: 'Dig and use it', items: [
          'The CDC describes a family pit about 1 foot wide, 1.6 feet long and 1.6 feet deep.',
          'A trench is another choice: narrow, with soil thrown over the waste every day.',
          'Dig a shallow ditch around it to steer rain away. The CDC lists this for trenches.',
          'Cover the waste with a layer of soil each day, so flies stay off it. Flies carry germs to food and water.',
          'For one use on the trail, the Forest Service says a hole 6 to 8 inches deep.'
        ] },
        { head: 'Wash hands, then close it', items: [
          'The CDC says to put a hand-washing station at every toilet of any kind.',
          'A jug of clean water with a spigot, soap, a towel and a bucket under it is enough.',
          'When the pit is near full, fill it with soil. The CDC says full pits need to be capped.',
          'Mark the spot so no one digs there later, and so it can be cleaned up.'
        ] }
      ],
      mistakes: [
        'Digging less than 100 feet from a well or creek, or uphill of one.',
        'Digging in low, wet ground that floods.',
        'Leaving waste uncovered, which draws flies.',
        'No hand-washing station by the latrine.'
      ],
      sources: ['osu-sanitation', 'cdc-sanitation', 'usfs-human-waste', 'epa-septic-wells', 'fema-supplies', 'fema-cert-manual'],
      checked: '2026-11-26'
    },

    'san-trash': {
      intro: 'When trash pickup stops, garbage piles up fast and draws rats and flies. A covered can and a few rules keep it under control until trucks come back.',
      parts: [
        { head: 'Keep it covered', items: [
          'The CDC says to throw out trash as soon as you can, in a covered can or dumpster.',
          'Tie each bag shut before it goes in the can.',
          'Clean up trash and debris outside the house as soon as you can. Piles give rats a place to hide.',
          'Check the can and its lid once a week. If water collects in it, empty it, so mosquitoes cannot breed.'
        ] },
        { head: 'Spoiled food', items: [
          'The CDC says to throw out meat, fish, eggs, milk, cut fruit and leftovers after 4 hours in a fridge with no power.',
          'Throw out any food that touched floodwater.',
          'Never taste food to find out if it is safe. When in doubt, throw it out.',
          'Bag spoiled food right away and keep it in the covered can. Rotting food draws rats.'
        ] },
        { head: 'Sort it for pickup', items: [
          'The EPA asks homeowners to sort into six piles: household garbage, building debris, yard waste, hazardous waste, large appliances and electronics.',
          'Put household garbage at the curb the night before pickup.',
          'The EPA example limits curb garbage to two 32-gallon cans or 8 bags.',
          'Tape fridge and freezer doors shut before they go out.',
          'Put piles between the sidewalk and the street, not against trees or poles. Crews cannot pick up from private property.',
          'Pickup rules vary. Check with your local officials first.'
        ] },
        { head: 'What stays out of the trash', items: [
          'Chemicals, paint, pesticides, oil and batteries. The CDC says to follow your local solid waste rules for them.',
          'Never pour chemicals onto the ground, down drains or into water.',
          'Leave damaged or unlabeled containers alone. Call local officials about them.',
          'Bagged human waste. Extension says to store it in its own can, apart from other garbage, until officials say how to dispose of it.'
        ] },
        { head: 'Do not burn it', items: [
          'The EPA says burning household trash is far more harmful than most people think.',
          'The smoke can raise the risk of heart disease and make asthma worse.',
          'It also makes dioxins, toxic chemicals that settle on crops and in water.',
          'Many states and towns ban or limit trash burning.'
        ] },
        { head: 'Dead animals', items: [
          'Wear gloves. Put your gloved hand inside a trash bag, pick up the animal, turn the bag over it and seal it.',
          'Use a shovel for a larger animal, then rinse the shovel.',
          'Call animal control or the health department about pickup.',
          'Wash your hands when you are done.'
        ] }
      ],
      mistakes: [
        'Burning trash in a barrel or pile.',
        'Leaving bags open or on the ground, where animals tear them.',
        'Putting chemicals or batteries in the regular trash.',
        'Mixing bagged toilet waste with household garbage.'
      ],
      sources: ['cdc-disaster-animals', 'cdc-food-after', 'epa-debris-sort', 'cdc-disaster-chemicals', 'epa-backyard-burning', 'cdc-dead-animals', 'osu-sanitation', 'cdc-mosquito-home'],
      checked: '2026-11-26'
    },

    'san-pests': {
      intro: 'After a storm or flood, rats, mosquitoes and snakes move into new places, often near people. Most of the fix is keeping food sealed and water from standing.',
      parts: [
        { head: 'Keep rats and mice out', items: [
          'The CDC says rodents move to new areas after a disaster, looking for food, water and shelter.',
          'Store food and water in thick plastic, glass or metal with a tight lid.',
          'Close holes in the walls. Some rodents fit through a hole the size of a dime.',
          'Wash dishes and pots as soon as you are done with them.',
          'Do not eat or drink anything a rodent may have touched.',
          'Trap rodents with spring-loaded snap traps. Wear gloves, seal a dead rodent in two plastic bags, and throw it out.'
        ] },
        { head: 'Clean up droppings safely', items: [
          'Never sweep or vacuum droppings or urine. That puts germs in the air.',
          'Spray them with a disinfectant or a bleach mix of 1 1/2 cups of bleach in 1 gallon of water until soaked.',
          'Let it soak 5 minutes, then wipe it up with a paper towel.',
          'Throw the towel out in a sealed can outside.',
          'If a building sat empty a long time, the CDC says airing it out 2 to 3 days first may help.'
        ] },
        { head: 'Stop mosquitoes from breeding', items: [
          'Right after a flood, most mosquitoes are nuisance kinds. The kinds that spread disease can increase 2 weeks to 2 months after a hurricane.',
          'Once a week, empty and scrub, turn over, cover or throw out anything that holds water: tires, buckets, toys, pots and trash cans.',
          'Cover stored water tightly. Use fine wire mesh on any container with no lid.',
          'Fix cracks in a septic tank and cover open vent pipes.',
          'Keep window and door screens in good repair, and do not prop doors open.'
        ] },
        { head: 'Prevent bites', items: [
          'Use an insect repellent registered by the EPA. Look for an EPA registration number on the label.',
          'Wear loose long sleeves and long pants.',
          'Do not use oil of lemon eucalyptus or PMD on a child under 3.',
          'Put repellent on your own hands, then on a child\'s face. Keep it off a child\'s hands, eyes, mouth and cuts.',
          'If you use sunscreen, put it on first and repellent second.'
        ] },
        { head: 'Snakes and other animals', items: [
          'Stay away from wild or stray animals. Call local authorities to handle them.',
          'Snakes may be swimming to high ground, hiding under debris, or inside your home.',
          'If you see a snake, back away slowly. Do not touch it or try to trap it.',
          'If one is in your home, call your county animal control.'
        ] },
        { head: 'If a snake bites', items: [
          'Call 911. Poison Control is 1-800-222-1222.',
          'Keep the person still and calm, with the bite below the heart.',
          'Try to remember the snake\'s color and shape.',
          'Wash the bite with warm soapy water and cover it with a clean, dry dressing.',
          'Do not use a tourniquet, cut the wound, suck it, put ice on it, or give alcohol or caffeine.'
        ] }
      ],
      mistakes: [
        'Sweeping or vacuuming rodent droppings.',
        'Leaving buckets and tires full of rainwater.',
        'Reaching under debris without looking for snakes.',
        'Cutting or icing a snake bite instead of calling 911.'
      ],
      sources: ['cdc-disaster-animals', 'cdc-disaster-rodents', 'cdc-rodents-home', 'cdc-mosquito-home', 'cdc-mosquito-bites'],
      checked: '2026-11-26'
    },

    'san-clean': {
      intro: 'Bleach kills germs when you use the right kind, mixed the right way. After a flood or a long outage, it keeps dishes, counters and floors safe.',
      parts: [
        { head: 'The right bleach', items: [
          'Use regular, unscented household bleach. The label should say 5% to 9% sodium hypochlorite.',
          'Do not use it if the percent is missing or outside that range.',
          'Some laundry bleach and splashless bleach will not disinfect. Skip scented bleach, too.',
          'Follow the label first. Use the mixes below only if the bottle gives none.',
          'If you have no bleach, soap and water still remove most germs.'
        ] },
        { head: 'Safety rules', items: [
          'Never mix bleach with ammonia or any other cleaner. The mix gives off fumes that are dangerous to breathe.',
          'Open windows and doors first. Never use bleach in a closed space.',
          'Wear rubber gloves, boots and eye protection.',
          'Get medical care right away for a bad headache, blurred vision or trouble breathing after using bleach. For trouble breathing, call 911.',
          'Keep bleach and every mix out of reach of children and pets. Label any mix you make.'
        ] },
        { head: 'The mixes', cols: ['Job', 'Bleach', 'Water', 'Leave it on'], rows: [
          ['Disinfect hard surfaces', '5 tablespoons (1/3 cup)', '1 gallon', 'At least 1 minute, kept wet'],
          ['Same, a small batch', '4 teaspoons', '1 quart', 'At least 1 minute, kept wet'],
          ['Dishes, pots, utensils, counters', '1 cup', '5 gallons', 'Soak 1 minute'],
          ['Cans and pouches that sat in floodwater', '1 cup', '5 gallons', '15 minutes'],
          ['Rodent droppings and urine', '1 1/2 cups', '1 gallon', 'Soak 5 minutes'],
          ['A floor after sewage backs up', '1/2 cup', '1 gallon', 'Disinfect it thoroughly']
        ], note: 'CDC mixes, except the sewage floor, which is the EPA\'s. Use room-temperature water. Mix fresh each day; it weakens after 24 hours.' },
        { head: 'Dishes with no dishwasher', items: [
          'Wash in hot, soapy water.',
          'Rinse in clean, safe water.',
          'Soak 1 minute in 1 cup of bleach to 5 gallons of water. The water must cover everything. Wipe counters with a cloth dipped in it.',
          'Let everything air dry on a clean towel. Do not rub it dry with a dish towel.',
          'Throw out wooden cutting boards, baby bottle nipples and pacifiers that touched floodwater. Bleach cannot make them safe.',
          'Do not drink the water you used for sanitizing.'
        ] },
        { head: 'Laundry and washing up', items: [
          'Wash clothes with detergent in the warmest water the label allows, and dry them all the way.',
          'Wash clothes worn for flood cleanup in hot water and detergent, apart from other laundry.',
          'Wash your hands after you handle dirty laundry.',
          'Throw out soft things you cannot clean or dry fast, like mattresses, pillows and stuffed toys.',
          'Under a boil-water advisory, wash up with water boiled 1 minute, or with 8 drops of bleach per gallon of clear water, left to stand 30 minutes.',
          'On a septic system during a flood, the CDC says to cut back on laundry and dishwashing.'
        ] }
      ],
      mistakes: [
        'Mixing bleach with ammonia or another cleaner.',
        'Using scented, splashless or unlabeled bleach.',
        'Using a mix made yesterday.',
        'Skipping the soap-and-water step before bleach.'
      ],
      sources: ['cdc-bleach', 'cdc-clean-home', 'cdc-food-after', 'cdc-disaster-cleanup', 'cdc-bleach-flyer', 'cdc-disaster-animals', 'epa-septic-flood', 'cdc-septic-flood'],
      checked: '2026-11-26'
    },

    'food-fire': {
      intro: 'A wood fire can cook a real meal when the power and the gas are both out. Pick the spot with care, cook to a safe temperature, and put the fire all the way out.',
      parts: [
        { head: 'Before you light it', items: [
          'Check your local rules on burning. Some places allow fires only at certain hours, and some forbid them.',
          'Do not build a fire on dry or windy days.',
          'Have a bucket of water and a shovel by the fire before you light it.',
          'A responsible adult stays with the fire the whole time. Keep children and pets back.'
        ] },
        { head: 'Pick and build the site', items: [
          'Choose an open, level spot away from trees, overhanging branches, logs, stumps and dry grass.',
          'Clear a circle at least 10 feet across, scraping away grass, leaves and needles down to bare soil.',
          'Stay at least 15 feet from tents, plants and low branches, with open space above of at least 3 times the height of the flames.',
          'Use an existing fire ring if there is one. If not, dig a pit about 1 foot deep and ring it with rocks or a metal ring.',
          'Keep the fire small. A good bed of coals gives plenty of heat for cooking.',
          'Light it with a match or lighter, never with a flammable liquid. Never burn trash, aerosol cans, batteries or glass.'
        ] },
        { head: 'The pot', items: [
          'A camp Dutch oven is cast iron, with three legs and a lid shaped to hold coals, so you can put coals under it and on top.',
          'Cast iron holds an even heat and stands up to the heat of a fire or charcoal.',
          'Use a lid lifter to take off the lid and move the pot, and long tongs to move coals. The lid and pot get very hot.',
          'Wash cast iron by hand with a little soap and hot water, dry it right away, and rub it with a little oil.'
        ] },
        { head: 'Cook to these temperatures', cols: ['Food', 'Safe inside temperature'], rows: [
          ['Beef, pork, lamb and veal steaks, chops and roasts', '145°F, then rest 3 minutes'],
          ['Ground meat', '160°F'],
          ['All poultry, including ground poultry', '165°F'],
          ['Eggs', '160°F'],
          ['Fish and shellfish', '145°F'],
          ['Leftovers and casseroles', '165°F']
        ], note: 'Check with a food thermometer before you take food off the heat. Meat browns fast over a fire, so the outside does not tell you the inside is done. Temperatures are from the USDA.' },
        { head: 'Keep the food safe', items: [
          'Use one plate and set of tools for raw meat and a clean set for cooked food.',
          'Never partly cook meat or poultry and finish it later.',
          'Keep cooked food at 140°F or hotter, at the side of the fire, until you eat.',
          'Throw out food left out more than 2 hours, or 1 hour if it is above 90°F outside.'
        ] },
        { head: 'Put it all the way out', items: [
          'Drown the fire with water. It takes more than most people think.',
          'Stir the ashes and embers with the shovel, mix in dirt, and turn every stick and coal to wet all sides.',
          'Move the rocks. Embers can hide under them.',
          'Feel everything with the back of your hand, rocks included. If it is too hot to touch, it is too hot to leave.',
          'No water? Mix in dirt or sand and keep stirring until it is all cool.',
          'If the fire spreads beyond the pit or embers land in dry plants, call 911 right away.'
        ] }
      ],
      mistakes: [
        'Starting or reviving the fire with a flammable liquid.',
        'Judging meat by its color instead of with a thermometer.',
        'Sprinkling a little water on the coals and walking away. Drown them, stir, and soak again.',
        'Leaving the fire alone, even for a few minutes.'
      ],
      sources: ['smokey-campfire', 'fs-campfire', 'fs-inyo-campfire', 'fs-fire-safety', 'fsis-temps', 'fsis-grilling', 'il-dutchoven'],
      checked: '2026-11-26'
    },

    'food-fuel': {
      intro: 'Fuel is what turns stored food into a hot meal. Store it where it cannot hurt the house, and learn how far it goes before you need it.',
      parts: [
        { head: 'Propane cylinders', items: [
          'Propane is highly flammable. Always keep cylinders upright.',
          'Never store a spare cylinder under or near the grill, or indoors.',
          'Keep propane, gasoline and other fuels in a shed away from the house, not in the garage.',
          'Never leave a filled cylinder in a hot car or trunk. Heat raises the pressure and can open the relief valve and let gas out.',
          'Never store or use gasoline or other flammable liquids near the grill.',
          'After a storm, watch for damaged propane cylinders and leaking gas lines.'
        ] },
        { head: 'Check a gas grill or stove before you cook', items: [
          'Look over the hoses for cracks, brittle spots, holes and leaks. There should be no sharp bends.',
          'Test for leaks: open the gas valve fully and brush soapy water on the connection. Bubbles mean a leak.',
          'Try tightening the connection. If it still bubbles, close the valve and have it repaired before you use it.',
          'Keep the hoses away from hot surfaces and dripping grease.'
        ] },
        { head: 'Charcoal', items: [
          'Use charcoal grills outside only.',
          'Never burn charcoal inside a home, garage, tent, camper or vehicle, even with a window open.',
          'Charcoal gives off carbon monoxide until it is completely out. Do not bring the grill indoors with freshly used coals.',
          'To put out used coals, soak them with plenty of water, stir, and soak again, until they are cold.'
        ] },
        { head: 'Firewood', items: [
          'Store only the wood you need for the season, at least 30 feet from the house and other buildings.',
          'Do not stack firewood against a building. It gives a fire a path to the house.',
          'Clear leaves, needles and dry plants from around the woodpile.',
          'If you live where wildfires happen, keep the first 30 feet around the house free of leaves, debris and anything that burns.'
        ] },
        { head: 'Count your meals', items: [
          'Cook one full meal on each fuel you have, start to finish.',
          'Note how much it used: the cylinder level, the charcoal or the wood.',
          'Divide what you have stored by that amount. That is roughly how many meals your fuel will cook.',
          'Write the number on your plan, next to the days of food you counted.'
        ] }
      ],
      mistakes: [
        'Keeping the spare propane cylinder in the garage or the house.',
        'Moving a charcoal grill into the garage to keep it dry or to finish cooking.',
        'Leaving a full cylinder in the car trunk on a hot day.',
        'Stacking the woodpile against the house.'
      ],
      sources: ['cpsc-grills', 'cpsc-grillcheck', 'cpsc-charcoal', 'usfa-garage', 'usfa-severe', 'fs-fire-safety', 'mndnr-firewood', 'ready-wildfires'],
      checked: '2026-11-26'
    },

    'food-flood': {
      intro: 'Floodwater carries germs and chemicals. Most food it touches has to go, but undamaged all-metal cans and pouches can be cleaned and saved.',
      parts: [
        { head: 'Before a flood, and right after', items: [
          'If you can, raise the fridge and freezer off the floor, with cement blocks under the corners.',
          'Move canned goods and other food from the basement and low cabinets to a higher place.',
          'After a flood, drink only bottled water that floodwater has not touched.'
        ] },
        { head: 'Throw out this food', items: [
          'Any food that may have touched floodwater or stormwater.',
          'Food in packages that are not waterproof, and anything in cardboard, including juice, milk and baby formula boxes.',
          'Food in containers with screw caps, snap lids, crimped caps, twist caps, flip tops or pull tops.',
          'Home-canned food that floodwater touched. It cannot be cleaned well enough.',
          'Cans that are swollen, leaking, punctured, deeply rusted, or crushed so badly they will not stack or open with a hand opener.',
          'Fridge food that went more than 4 hours without power or ice, and anything with an odd smell, color or texture.'
        ] },
        { head: 'Throw out these kitchen items too', items: [
          'Wooden cutting boards, plastic utensils, baby bottle nipples and pacifiers that floodwater touched. There is no way to clean them safely.',
          'A fridge or freezer that sat in floodwater, even partly. It is not safe to use.'
        ] },
        { head: 'Save all-metal cans and pouches', items: [
          'Take the labels off if you can, and note the date first.',
          'Brush or wipe away dirt and silt, wash with hot, soapy water, and rinse with clean, safe water.',
          'Sanitize them one of two ways: boil them in water for 2 minutes, or soak them 15 minutes in 1 cup of unscented household bleach mixed into 5 gallons of water.',
          'Let them air-dry at least 1 hour before you open or store them.',
          'Relabel each one with a marker, with the date, and use them soon.',
          'Concentrated baby formula from a cleaned can must be mixed with clean drinking water.'
        ] },
        { head: 'Clean pans, dishes and counters', items: [
          'Wash metal pans, dishes and utensils, can openers included, with hot, soapy water. Rinse with clean, safe water.',
          'Sanitize them by boiling in clean water, or by soaking 1 minute in 1 cup of unscented bleach to 5 gallons of water. The mix should cover them.',
          'For counters and fridge drawers, wipe the same bleach mix on with a cloth.',
          'Let everything air-dry.'
        ] }
      ],
      mistakes: [
        'Keeping a jar or bottle because it looks fine. Floodwater gets under screw caps and lids, and unsafe food can look and smell normal.',
        'Tasting food to check it. When in doubt, throw it out.',
        'Opening a cleaned can before it has dried.',
        'Keeping a fridge that sat in floodwater.'
      ],
      sources: ['usda-food', 'cdc-food-after'],
      checked: '2026-11-26'
    },

    'food-dry': {
      intro: 'Drying and cool storage are old ways to keep food with no fridge. Both work best when you follow tested Extension steps.',
      parts: [
        { head: 'What can dry outdoors', items: [
          'Fruit can dry outdoors when the weather is right. Its sugar and acid make it safe to dry that way.',
          'Vegetables and meat should not be dried outdoors, except beans dried on the vine. Dry them indoors in an oven or dehydrator.',
          'You need hot, dry, breezy days: at least 85°F, hotter is better, and humidity below 60 percent.',
          'Outdoor drying takes several days, and rain can ruin a batch.'
        ] },
        { head: 'Get the fruit ready', items: [
          'Start with clean counters and tools, and wash your hands.',
          'Wash the fruit under cold running water. Cut pieces the same size and thickness so they dry evenly.',
          'Apples, pears, peaches and apricots dry better pretreated. Soak them 10 minutes in equal parts bottled lemon juice and water.',
          'Lay the pieces one layer deep, not touching.'
        ] },
        { head: 'Drying in the sun', items: [
          'Set the racks or screens on blocks so air moves under them, over a concrete driveway or a sheet of metal.',
          'Use screens of stainless steel, coated fiberglass or plastic. Not galvanized hardware cloth, copper or aluminum.',
          'Cover the food with a second screen or cheesecloth to keep birds and insects off.',
          'Cover the food or bring it under shelter at night. Night air puts moisture back in.',
          'When the fruit is about two-thirds dry, you can finish it in the shade where air moves well.'
        ] },
        { head: 'When it is done', items: [
          'Fruit is dry when it bends and no beads of moisture form when you press it. Vegetables are tough, brittle or crunchy.',
          'Pack dried fruit loosely in an airtight container for several days. If moisture forms inside, dry it more.',
          'Kill insect eggs on unpeeled or uncovered fruit: heat it at 160°F for 30 minutes, or freeze it at 0°F for 48 hours.',
          'Store dried food in airtight containers in a dark place.'
        ] },
        { head: 'Storing root crops cool', items: [
          'Potatoes, beets, turnips, rutabagas, carrots and parsnips can keep three to four months or longer in the right conditions.',
          'Store only sound produce, with no cuts, cracks or bruises. One damaged one can spoil the rest.',
          'Cure potatoes, sweet potatoes, winter squash, onions and garlic before storing so the skins toughen.',
          'Find a spot that stays between 32°F and 60°F without big swings: an unheated cellar, a shed, a breezeway, or a garage with no car or chemicals in it.',
          'Root crops like damp air. Squash and pumpkins like it drier. Keep fruit away from vegetables, since fruit speeds their ripening.',
          'Use food-grade containers only, never ones that held garbage or chemicals.',
          'Check every week. Look for signs of rodents, and throw out anything rotten or moldy.'
        ] }
      ],
      mistakes: [
        'Drying vegetables or meat in the sun.',
        'Using galvanized hardware cloth as a drying screen. It can leave harmful metal on the food.',
        'Storing bruised or cut produce with the good ones.',
        'Leaving drying fruit out overnight.'
      ],
      sources: ['nchfp-sundry', 'usu-drymethods', 'psu-dry', 'purdue-storage', 'uconn-coldstore'],
      checked: '2026-11-26'
    },

    'home-return': {
      intro: 'Going back in after a flood or storm is its own job. Do it in order: wait for the all-clear, check the outside, handle gas and power, then document before you clean.',
      parts: [
        { head: 'Before you go back', items: [
          'Wait until local officials say it is safe to return. Even then, go slowly.',
          'Go in daylight so you do not need lights. Bring flashlights, not candles or gas lanterns.',
          'Bring a battery radio for updates from local officials.',
          'Expect no power, water, sewer or trash pickup for a while.',
          'Call or text 211 to find local disaster help and services.'
        ] },
        { head: 'Check the outside first', items: [
          'Walk all the way around. Look for loose power lines, gas leaks and damage to the walls and foundation.',
          'Do not go in if you smell gas, if floodwater is still around the house, or if you see downed lines, downed trees, or cracks in the walls or foundation.',
          'If you have any doubt, have a building inspector or structural engineer check it before you enter.',
          'Never touch a fallen power line. Call the power company to report it.',
          'Watch for animals, snakes most of all. Use a stick to poke through debris.'
        ] },
        { head: 'Gas and power', items: [
          'If you smell gas or think there is a leak: turn off the main gas valve, open the windows, and leave right away.',
          'Call the gas company, the police or the fire department. Do not turn on lights or do anything that could make a spark. Stay out until you are told it is safe.',
          'If there is standing water and you can reach the main power switch from a dry spot, turn it off. If you would have to step into water to reach it, call an electrician.',
          'Never turn power on or off, or use an electric tool, while you are standing in water.',
          'Have an electrician check the system before the power goes back on. Appliances must be completely dry before you use them.',
          'If you see sparks or frayed wires, or smell burning, after the power comes back, shut it off at the main breaker.'
        ] },
        { head: 'Air, water and food', items: [
          'If the house was closed up for days, go in briefly, open doors and windows, and let it air out at least 30 minutes before you stay.',
          'If it flooded and stayed closed for several days, assume there is mold. It may also have sewage in it.',
          'Follow local word on whether tap water is safe. If you have a well and the area flooded, have the water tested before you use it.',
          'Until then, use bottled, boiled or treated water for drinking, cooking, dishes, brushing teeth, ice and baby formula.',
          'Throw out food that touched flood water, and cold food that sat without power. When in doubt, throw it out.'
        ] },
        { head: 'Photos and insurance', items: [
          'Call your insurance company and start a claim as soon as you can.',
          'Before you clean up, take photos and video of the damage and your belongings. Make a list.',
          'Write down or photograph the make, model and serial number of appliances and electronics.',
          'For a flood claim, keep samples of damaged carpet, flooring and curtains.',
          'Save every receipt for repairs and cleanup.',
          'Ask to see ID from anyone who comes to the house. A flood adjuster carries a Flood Control Number card. Scammers often pose as adjusters or officials.',
          'Flood insurance does not cover mold, so start drying out as soon as you have documented.'
        ] },
        { head: 'While you clean up', items: [
          'Run generators, pressure washers and pumps outside only, at least 20 feet from windows, doors and vents.',
          'Use a battery carbon monoxide alarm any time something that burns fuel is running.',
          'Lift heavy things in teams of two. No more than 50 pounds per person.',
          'Rest when you need to, drink water, and do the most important jobs first.',
          'If someone is hurt or has had an electric shock, call 911.'
        ] }
      ],
      mistakes: [
        'Going in as soon as the water drops, before officials say it is safe.',
        'Flipping the breaker while standing in water.',
        'Cleaning up before taking photos, then having no proof for the claim.',
        'Running the generator in the garage with the door open.'
      ],
      sources: ['cdc-return-home', 'cdc-flood-reenter', 'cdc-elec-hazards', 'ready-recovering', 'cdc-disaster-cleanup', 'fs-claim'],
      checked: '2026-11-26'
    },

    'home-mold': {
      intro: 'After water gets in, mold can start within a day or two. Dry fast, protect your lungs, and throw out what cannot be cleaned.',
      parts: [
        { head: 'Dry it out fast', items: [
          'Dry the house and everything in it within 24 to 48 hours if you can.',
          'If you could not dry it in that time, you probably have mold, even where you cannot see it: behind cabinets, under carpet, inside walls.',
          'Open doors and windows. Set fans in a window or door so they blow air out, not in.',
          'If the heating and cooling system flooded, have a pro with mold experience check and clean it before you turn it on.',
          'Fix leaks in the roof, walls or pipes as soon as you can. Mold comes back if the water does.'
        ] },
        { head: 'The size rule', items: [
          'Under about 10 square feet (a 3 by 3 foot patch): most of the time you can clean it yourself.',
          'More than 10 square feet, or a lot of water damage: follow the EPA guide for larger jobs, or hire a contractor with mold experience and check references.',
          'If sewage or other dirty water caused it, call a professional who cleans buildings hit by contaminated water.',
          'If it smells moldy but you cannot find it, think about a pro. Pulling off wallpaper or paneling can release a lot of spores.',
          'You do not need a mold test. Whatever the kind, remove it.'
        ] },
        { head: 'Protect yourself', items: [
          'Wear at least an N95 respirator approved by NIOSH. Fit it by the package directions. It seals best on a clean-shaven face.',
          'For more than 4 hours of tearing out moldy drywall, a reusable half-face or full-face respirator is better.',
          'Wear goggles with no vent holes, long gloves to the middle of the forearm, boots, long sleeves and long pants.',
          'With bleach, use gloves made of natural rubber, neoprene, nitrile, polyurethane or PVC.',
          'Take a break about every hour, away from the mold, and drink water.',
          'Throw the N95 away when it is damaged, dirty or harder to breathe through.'
        ] },
        { head: 'Who stays out', items: [
          'Children do not help with cleanup. Respirators are not made for children.',
          'Anyone with asthma, COPD or a weak immune system stays away from moldy rooms.',
          'If you have health concerns, talk to a health professional before you start.'
        ] },
        { head: 'What to throw out', items: [
          'Photograph it first, for insurance. Keep samples of carpet and flooring for a flood claim.',
          'Throw out what you cannot clean and dry quickly: mattresses, carpet and padding, rugs, upholstered furniture, pillows, foam items, books, paper, stuffed animals and baby toys.',
          'Tear out drywall and insulation that got wet with flood water or sewage.',
          'Moldy ceiling tiles and other soft, porous things may not come clean. Mold fills the tiny spaces.',
          'Wash hard toys in 1 cup of bleach to 5 gallons of water and let them air-dry.'
        ] },
        { head: 'Clean hard surfaces', items: [
          'Scrub mold off hard surfaces with hot water and detergent, then dry them completely.',
          'If you use bleach, use no more than 1 cup of household bleach in 1 gallon of water. Open doors and windows first.',
          'Never mix bleach with ammonia or any other cleaner. It makes a toxic gas.',
          'Use a wet mop or a vacuum with a HEPA filter. Do not dry-sweep.',
          'Do not paint or caulk over mold. Clean and dry it first.',
          'It is done when the water problem is fixed, no mold or musty smell is left, and it stays that way when you check back.'
        ] }
      ],
      mistakes: [
        'Painting over mold. The paint peels and the mold stays.',
        'Keeping a soaked mattress or carpet because it looks dry.',
        'Mixing bleach with another cleaner.',
        'Letting the kids help with the cleanup.'
      ],
      sources: ['epa-mold-brief', 'cdc-mold-about', 'cdc-disaster-cleanup', 'cdc-mold-lungs', 'cdc-return-home'],
      checked: '2026-11-26'
    },

    'med-stress': {
      intro: 'Feeling upset after a disaster is normal, and there is no right way to feel. A few simple habits help adults and kids get through it.',
      parts: [
        { head: 'Help by phone or text', items: [
          'Disaster Distress Helpline: call or text 1-800-985-5990. It is toll-free, open 24 hours a day, all year, anywhere in the U.S. and its territories.',
          'Trained crisis counselors listen without judgment, share ways to cope, and can connect you to local help.',
          'You do not have to give your name. You can call for yourself or for someone else.',
          'Counselors can bring in an interpreter in over 100 languages. Deaf and hard of hearing callers can text or call the same number.',
          'If you are struggling or having thoughts of hurting yourself, call or text 988, or chat at 988lifeline.org.',
          'If someone is in danger right now, call 911. For shelter, food and local services, call 211.'
        ] },
        { head: 'What is normal', items: [
          'Worry about your family, sadness, grief and anger are normal reactions to an abnormal event.',
          'You may have strong, mixed feelings, or feel numb.',
          'Recovery takes time. Be patient with yourself.',
          'Even seeing a disaster on the news over and over can affect people.'
        ] },
        { head: 'Take care of yourself', items: [
          'Eat well, get some exercise, even a walk or slow deep breaths, and get enough sleep.',
          'Stay away from alcohol, drugs, and medicines that were not prescribed to you.',
          'Keep as much routine as you can: the same wake time, regular meals, the dog walk.',
          'Limit the news. Constant coverage can raise anxiety.',
          'Talk with someone you trust about how you feel.',
          'Put off big life decisions, like a job change, until things settle.',
          'Pace the cleanup. Take breaks and drink water.'
        ] },
        { head: 'Signs an adult needs more help', items: [
          'Trouble concentrating or thinking clearly, or confusion.',
          'Drinking or using drugs more than before.',
          'Headaches or stomach problems.',
          'Mood swings, easy crying, hopelessness, or heavy guilt.',
          'Not wanting to leave home, or fear of crowds or being alone.',
          'If you see these, call the helpline or a counselor.'
        ] },
        { head: 'What you may see in kids', cols: ['Age', 'What you may see'], rows: [
          ['Under 2', 'Crankier, cries more, wants to be held more'],
          ['3 to 6', 'Bed-wetting or toilet accidents, fear of being apart from you, tantrums, trouble sleeping'],
          ['7 to 10', 'Sad or mad, afraid it will happen again, worried about school, talks about it all the time or not at all'],
          ['Preteens and teens', 'Acting out, more arguing, pulling away from friends, sleeping too much or too little']
        ], note: 'From the CDC. For most kids these fade with time. They can come back with reminders, like a storm or a siren.' },
        { head: 'Helping kids', items: [
          'Hug them and spend extra time with them, like at bedtime.',
          'Ask how they feel. Answer their questions truthfully, at their level. Show your own feelings so they know feelings are normal.',
          'If talking is hard for a child, let them draw a picture or tell a story about what happened.',
          'Tell them calmly what you are doing to keep them safe.',
          'Get back to meals, school, play and bedtime. Give them small chores so they feel they are helping.',
          'Keep them away from news coverage, and let their teacher know how they are doing.',
          'If a child is still anxious, fearful, sad or angry after two to four weeks, or is getting worse, talk to their doctor or school counselor.'
        ] }
      ],
      mistakes: [
        'Leaving the news on all day where the kids can hear it.',
        'Making a big life decision in the first weeks.',
        'Waiting it out alone when a free call or text could help.'
      ],
      sources: ['samhsa-ddh', 'samhsa-coping', 'ready-coping', 'cdc-kids-cope', 'cdc-return-home'],
      checked: '2026-11-26'
    },

    'plan-access': {
      intro: 'A disaster can cut off care, rides and power for days. This plan is built around the person\'s own needs, with people, spares and a way out lined up ahead.',
      parts: [
        { head: 'Build a support network', items: [
          'Pick family, friends, neighbors or caregivers who can help with rides, communication and care when the usual services stop.',
          'Tell them where you keep the emergency supplies. Give at least one of them a key to the home.',
          'Make sure at least one knows how to use any lifesaving equipment and how to give medicine.',
          'Keep their names and numbers in a watertight container in the kit and on the phone.',
          'Make the plan with them and practice it together.',
          'In hot weather, ask them to check in often.'
        ] },
        { head: 'Spares for aids and devices', items: [
          'Pack extra glasses, contacts, hearing aids and hearing aid batteries.',
          'If you use a power wheelchair, keep a light manual chair as a backup if you can, and show others how to fold, set up and run the chair.',
          'Keep an extra battery for a power chair or other battery device, and keep it charged. If you cannot buy one, ask local agencies or charities for help.',
          'Keep a tire patch kit or sealant, a spare inner tube and a small pump for chair or scooter tires that can go flat.',
          'Keep a spare cane or walker, and an extra seat cushion if you use one.',
          'Write down the style, model and serial number of each device, how to run it, and where it came from (Medicare, Medicaid or insurance).'
        ] },
        { head: 'Communication', items: [
          'Carry a printed card, or keep a note on the phone, that tells responders how to talk with you. The Administration for Community Living offers a communication card and a medical information card.',
          'Deaf or hard of hearing: a weather radio with a text display and flashing alert, pen and paper, a battery lantern for signing or lip reading in the dark, and smoke alarms with a strobe or vibrating pad.',
          'Blind or low vision: label supplies in Braille or large print, and keep a list of them as an audio file or on a flash drive.',
          'Speech: plan for the device failing. Keep laminated cards with phrases or pictures.',
          'Wear a medical alert tag or bracelet, and keep a list of medicines, doses and allergies.'
        ] },
        { head: 'Service animals and treatment', items: [
          'Pack food, water, a collar with an ID tag and medical records for a service or support animal.',
          'All shelters take service animals. Many do not take pets, so plan another place for them.',
          'If you get dialysis or other regular treatment, know more than one place that can give it. Ask your clinic about its emergency plan and backup providers.',
          'If a device needs power, see the step on medical devices that need power.'
        ] },
        { head: 'Medical-needs lists', items: [
          'Many city and county emergency management offices keep a voluntary list of people who may need help in a disaster. Not every place has one.',
          'Ask your county emergency management office or your power company if they keep one, and how to sign up.',
          'Ask your power company to put you on its list for priority power restoration if someone relies on power for health.',
          'Do not count on a list to keep you safe. Responders may not reach you even if you signed up, so make your own plan too.'
        ] },
        { head: 'Getting out fast', items: [
          'Know two ways out of every room.',
          'If you can, live or sleep near an exit: the ground floor of an apartment building, the first floor of a home with stairs.',
          'In an apartment building, ask the management to mark accessible exits and to arrange help to leave the building. In a high-rise, ask about an evacuation chair.',
          'Line up neighbors who can help you out of the building.',
          'Plan an accessible ride out of town. Ask local transit and your emergency management office what options exist.',
          'Leave early. For someone with dementia, never leave them alone, and bring a pillow or blanket they can hold. At a shelter, pick a quiet corner away from the exits.'
        ] }
      ],
      mistakes: [
        'Counting on a medical-needs list to bring help, with no plan of your own.',
        'A spare chair battery that was never charged.',
        'Only one person who knows how the wheelchair or the oxygen works.'
      ],
      sources: ['ready-disab', 'ready-older', 'cdc-disab-plan', 'acl-emergency', 'usfa-disab-fire', 'fema-ayr-basic'],
      checked: '2026-11-26'
    },

    'plan-livestock': {
      intro: 'Horses and livestock take time, trailers and help to move. A written plan, ID and practice let you leave early and calm.',
      parts: [
        { head: 'Write the plan', items: [
          'Emergency contacts: your vet, your farrier, local officials and neighbors.',
          'Animal information: health records, medicines and ID for each animal.',
          'A farm map with access routes and water sources, and a checklist of halters, leads, first aid, feed and water.',
          'A plan to shelter in place, a plan to evacuate (transport, routes, destination) and a plan to find each other and the animals after.',
          'Post copies in the tack room or barn office, in the trailer, at the barn doors and in the house, so a neighbor or responder can follow it if you are not there.',
          'Go over it and practice it at least once a year with everyone on the farm.'
        ] },
        { head: 'ID and proof of ownership', items: [
          'Give every animal some form of ID.',
          'Take clear photos from all sides, with close-ups of markings, at different times of year. Include some of you with the animal.',
          'Write a description: breed, color, markings and temperament.',
          'Quick ID: a livestock crayon or marker with your name and phone number, a neck band, tags, mane tags or painted numbers on the hooves. Lasting ID: a microchip, brand or tattoo.',
          'Put a tag on each halter with the animal\'s name, your name, your phone and a second number.',
          'Keep Coggins tests, vet records, proof of rabies shots and the bill of sale or registration papers in a watertight bag with your other papers.'
        ] },
        { head: 'Trailers and loading', items: [
          'Arrange trailers ahead. If you do not have enough room, keep a list of haulers or friends with trailers and have people on standby.',
          'Keep trailers and tow vehicles in good working order.',
          'Get the animals used to being gathered, penned and loaded. Practice until they load and unload calm.',
          'Line up experienced handlers and drivers.',
          'Animals can spook in a disaster. Normal handling may not work as well, so practice now.'
        ] },
        { head: 'Where to go', items: [
          'Arrange a place outside your area before you need it: a friend\'s farm, fairgrounds, stockyards, an Extension facility or a horse venue. Find more than one.',
          'Make sure the place has feed, water, vet care and handling gear.',
          'Map a main route and a second route.',
          'Your county Extension agent, animal control or emergency management office can tell you about local animal shelters.',
          'Call the place before you leave to make sure it is still open and not hit by the disaster. Listen for special livestock evacuation routes.'
        ] },
        { head: 'Feed and water for days', cols: ['When', 'Have on hand', 'Source'], rows: [
          ['Sheltering in place', '7 days of feed, water and fuel', 'California Dept. of Food and Agriculture'],
          ['Kit kept at home', 'At least a week of feed and of water; replace feed every 3 months', 'UConn Extension'],
          ['Evacuating', 'Feed, hay and water for at least 3 days, loaded in the trailer', 'New Jersey Dept. of Agriculture'],
          ['If you must leave them', 'Hay and water for 48 to 72 hours', 'New Jersey Dept. of Agriculture']
        ], note: 'Store feed in airtight, waterproof containers. Do not count on automatic waterers; the power may go out. Do not leave large amounts of grain, which can upset a horse\'s gut.' },
        { head: 'Stay, turn out or leave', items: [
          'Follow officials on whether to evacuate or shelter in place. Leave early: if you wait, you may be told to leave the animals behind, and you may be kept out for days.',
          'If you cannot move them, decide ahead whether they are safer in the barn or loose in a field. It depends on the disaster, how sound the barn is, flood risk, and trees and debris nearby.',
          'In a flood or tornado it is usually best not to shut them in the barn, since the roof can come down. In a flood, move them to higher ground.',
          'Tie down or put away troughs, buckets and loose gear that wind can throw, and fill every trough.',
          'If you leave them, put them in the spot you picked for that disaster, with hay and water for 48 to 72 hours.',
          'Make sure every animal carries ID in case you have to turn them loose or claim them from a shelter.'
        ] }
      ],
      mistakes: [
        'Waiting for the evacuation order, then being told to leave the animals behind.',
        'A trailer the horse has never been loaded into.',
        'Counting on an automatic waterer when the power is out.',
        'Leaving a pile of grain for animals you leave behind.'
      ],
      sources: ['ready-pets', 'fema-ayr-basic', 'cdfa-horse-evac', 'fdacs-horse-prep', 'nj-horse-during', 'uconn-equine', 'msstate-livestock'],
      checked: '2026-11-26'
    },

    'plan-shelter': {
      intro: 'If you have to leave, you have three choices: friends or family, a hotel, or a public shelter. Pick them now, in more than one direction.',
      parts: [
        { head: 'Pick your places', items: [
          'Know where you will go before you need to. Write it on your plan.',
          'Choose several places: a friend\'s or relative\'s home in another town, a motel, or a public shelter.',
          'Pick places in different directions, so you have a choice whichever way the danger comes.',
          'Many states have set evacuation zones and routes. Check your state and county emergency management websites.',
          'Shelter spaces can change from year to year. Check with local officials about what is set for this year.'
        ] },
        { head: 'Find an open public shelter', items: [
          'The FEMA app lists open shelters near you during a disaster. It is free.',
          'Without the app, text SHELTER and your ZIP code to 43362 (for example: Shelter 01234). Standard text rates apply.',
          'Sign up for local emergency alerts and weather alerts. They give shelter locations as well as warnings.',
          'Keep a battery radio and follow local instructions on where to go and which roads to take.'
        ] },
        { head: 'What to bring', items: [
          'Bring your emergency kit. Shelters often have water, food, medicine and toilets, but you should have your own supplies.',
          'A sleeping bag or warm blanket for each person, a change of clothes and sturdy shoes.',
          'Medicines, a list of them, glasses, and chargers with a backup battery.',
          'Copies of IDs and insurance papers, and some cash.',
          'Soap, hand sanitizer and disinfecting wipes. You will be living close to many people.',
          'Books or games for the kids, and a familiar pillow or blanket for anyone who struggles with change.'
        ] },
        { head: 'Shelter rules', items: [
          'Alcohol and weapons are not allowed in emergency shelters. Smoking is limited.',
          'All shelters take service animals. Most public shelters do not take pets, so plan another place for them.',
          'Shelter life is crowded and hard. Work with the shelter managers and the people helping them.',
          'Stay until local officials say it is safe to leave.'
        ] },
        { head: 'Friends, family and hotels', items: [
          'Ask now if you can stay, and what they can and cannot take, such as pets.',
          'Find which hotels and motels on your route take pets. Look at some outside your area too, in case the local ones close.',
          'When you leave, call or text your out-of-town contact and tell them where you are going.',
          'Leave a note at home saying when you left and where you went.'
        ] },
        { head: 'Before you head home', items: [
          'Check with officials both where you are staying and back home before you travel.',
          'Tell family when you leave and when you arrive.',
          'Bring water and food for the drive.',
          'See the step on going back in safely after a flood or storm.'
        ] }
      ],
      mistakes: [
        'Driving to a shelter without checking that it is open.',
        'Leaving the kit at home because the shelter will have supplies.',
        'Showing up at a shelter with a pet and no other plan.',
        'Only one place to go, in the same direction as the storm.'
      ],
      sources: ['ready-shelter', 'ready-evacuation', 'fema-app', 'ready-kit', 'fema-ayr-basic'],
      checked: '2026-11-26'
    },

    'plan-car': {
      intro: 'A car that starts, with a full tank and a kit in the back, is how you leave fast or wait out a storm on the road. Check it before storm and winter season, and keep the kit in it all year.',
      parts: [
        { head: 'The kit to keep in the car', items: [
          'Jumper cables, a flashlight with spare batteries, and flares or a reflective triangle.',
          'A phone charger that works in the car.',
          'A first aid kit and any medicines you need every day.',
          'Water, food that will not spoil, and a blanket.',
          'Work gloves, a change of clothes, paper towels and a little duct tape for a leaking hose.',
          'A tire pressure gauge, a jack, and basic tools.',
          'A paper map of your area. Do not count on a phone with a low battery.'
        ] },
        { head: 'Add these for winter', items: [
          'An ice scraper and brush, a small shovel, and a broom for snow.',
          'A bag of sand or cat litter to put under the tires if you get stuck.',
          'Blankets or sleeping bags, and extra warm, dry clothes.',
          'High-calorie food, a water container, and a small can with waterproof matches to melt snow for water.',
          'A tow rope and a bright cloth to tie on the antenna if you are stuck.',
          'Extra windshield washer fluid of the winter kind, with de-icer.'
        ] },
        { head: 'Check the tires', items: [
          'Fill each tire to the pressure on the label on the driver\'s door frame, or in the owner\'s manual.',
          'Do not use the number on the tire itself. That is the most the tire can hold, not what your car needs.',
          'Check the pressure cold, after the car has sat at least three hours. Cold weather lowers tire pressure.',
          'Tread must be at least 2/32 of an inch. Put a penny in the tread with Lincoln\'s head upside down. If you can see the top of his head, it is time for new tires.',
          'Look for cuts, bulges and cracks once a month. Uneven wear means the tires need rotating or the wheels need aligning.',
          'Check the spare, and make sure the jack is in the car.'
        ] },
        { head: 'Check the rest before the season', items: [
          'Oil, coolant, brake fluid, transmission fluid, power steering fluid and washer fluid. Fill any that are low. If you see a leak, have it looked at.',
          'Have a mechanic test the battery and charging system. Cold weather drains a battery fast.',
          'Test the wipers and the defroster. Replace worn wiper blades.',
          'Check the headlights, brake lights, turn signals and flashers.',
          'Look at the belts and hoses for bulges, blisters and cracks.',
          'Look up your car for open recalls with its VIN on the NHTSA recall tool. Recall repairs are free.'
        ] },
        { head: 'Fuel and charge', items: [
          'Keep the tank close to full, in case you have to leave or the power goes out.',
          'In winter, a full tank also keeps ice out of the tank and fuel lines.',
          'If the car is electric, keep it charged. In winter, plug it in at night so the battery stays warm.',
          'If the car is a hybrid, keep gas in the tank too.'
        ] },
        { head: 'If you are on the road in a storm', items: [
          'Stay off the roads in a storm unless you must go. Call 511 for road conditions before you leave, and tell someone your route.',
          'Never drive into flood water. Six inches can stall a car or make you lose control. A foot of water will float many cars.',
          'If you are stuck in snow, stay in the car. Run the engine about 10 minutes an hour for heat, with a window open a crack.',
          'Keep the exhaust pipe clear of snow, so carbon monoxide does not build up inside.',
          'Turn on the dome light at night, tie a bright cloth to the antenna, and raise the hood when the snow stops.',
          'If a power line falls on the car, stay inside until help comes. If you are in danger, call 911.'
        ] }
      ],
      mistakes: [
        'Filling the tires to the number printed on the tire.',
        'Running the engine while stuck with snow blocking the exhaust pipe.',
        'Walking away from a stuck car in blowing snow.',
        'Driving into water on the road because it looks shallow.'
      ],
      sources: ['ready-car', 'nhtsa-winter', 'nhtsa-summer', 'nws-winter-before', 'nws-winter-during'],
      checked: '2026-11-26'
    },

    'hz-smoke': {
      intro: 'Wildfire smoke gets into houses, even far from the fire. One closed room with filtered air gives everyone a cleaner place to breathe until it passes.',
      parts: [
        { head: 'Check the air', cols: ['AQI', 'Color', 'What it means'], rows: [
          ['0 to 50', 'Green', 'Good. Little or no risk.'],
          ['51 to 100', 'Yellow', 'Moderate. Some very sensitive people may feel it.'],
          ['101 to 150', 'Orange', 'Unhealthy for people at higher risk.'],
          ['151 to 200', 'Red', 'Unhealthy. Some healthy people feel it, and people at higher risk feel it more.'],
          ['201 to 300', 'Purple', 'Very unhealthy for everyone.'],
          ['301 and up', 'Maroon', 'Hazardous. Everyone is likely to be affected.']
        ], note: 'From AirNow. Check the AirNow Fire and Smoke Map, the AirNow app, your state air quality website or local news. People at higher risk: children and teens, adults over 65, pregnant women, and people with asthma, COPD, heart disease or diabetes. If the fire is close, it may be best to leave. Follow local alerts.' },
        { head: 'Set up the room', items: [
          'Pick a room big enough for everyone and comfortable to stay in. A bedroom with its own bathroom works well, since you can keep the door shut for a long time.',
          'Close the windows and doors, but do nothing that makes it hard to get out.',
          'Use a bathroom or kitchen fan only for short times. It can pull smoke in from the rest of the house.',
          'If the central air pulls in outside air, set it to recirculate or close the outdoor intake.',
          'Close the outdoor air damper on a window air conditioner. If you cannot close it, do not use that unit.',
          'Keep cool with fans or air conditioning. If you cannot stay cool, or smoke keeps getting in, go somewhere else: family out of the smoke, or a public cleaner-air shelter.'
        ] },
        { head: 'Filter the air', items: [
          'A portable air cleaner with a HEPA or other pleated filter works best. Pick one whose smoke CADR is at least two-thirds of the room\'s floor area in square feet. A 150-square-foot room needs a smoke CADR of at least 100.',
          'Pick one that makes little or no ozone. The EPA points to the California Air Resources Board list of certified air cleaners.',
          'Skip ionizers, electrostatic and UV air cleaners for smoke. They may not remove it and can make ozone.',
          'Run it all the time on the highest setting, with space around it so air flows freely.',
          'If you have central air, put in a MERV 13 or higher filter if the system can take it, and set the fan to On instead of Auto.',
          'Buy it before fire season and keep spare filters. Change them when they look dirty or start to smell of smoke.'
        ] },
        { head: 'A box-fan filter if you cannot get an air cleaner', items: [
          'The EPA says a do-it-yourself air cleaner is a stand-in for when a portable air cleaner is not available or affordable.',
          'You need a 20 by 20 inch box fan, a 20 by 20 inch furnace filter rated MERV 13, and duct tape, clamps or bungee cords.',
          'Point the arrows on the filter the way the air flows, so air goes through the filter first, then the fan. Seal the edges so no air gets around it.',
          'Tape a cardboard cover over the front corners of the fan, with a round hole the size of the blades. It works much better.',
          'More filters work better: two in a wedge, or four or five in a cube. Thicker filters, 2 to 4 inches, help too.',
          'Use a box fan made in 2012 or later with a UL or ETL mark. Never leave an older fan running alone or while you sleep.',
          'Do not use an extension cord or a damaged fan, do not leave children alone with it, and make sure the smoke alarms work.'
        ] },
        { head: 'Masks', items: [
          'Buy masks with "NIOSH" and "N95" or "P100" printed on them, with two straps that go around the head.',
          'Masks with ear loops, dust masks, surgical masks, bandanas and wet cloths do not protect your lungs from smoke.',
          'Put one strap below the ears and one above, press the nose clip with both hands, and check the seal by the package directions.',
          'It only seals on a clean-shaven face.',
          'Throw it away when it gets dirty or harder to breathe through.',
          'Anyone with heart or lung problems, or who is pregnant, should ask a doctor before wearing one.',
          'Children 2 and older can wear one, but N95 masks are not made in small sizes. Pick one that fits over the nose and under the chin and watch that they keep it on right.'
        ] },
        { head: 'Do not add smoke inside', items: [
          'No smoking or vaping inside.',
          'Do not fry or broil food. Keep food on hand that needs no cooking.',
          'Do not burn candles or incense, or use a gas, propane or wood stove.',
          'Do not spray air fresheners or other aerosol cleaners.',
          'Do not vacuum unless the vacuum has a HEPA filter. Dust with a damp cloth instead.',
          'Rest instead of exercising. When the air gets better, even for a while, open up and air the house out.',
          'If someone has severe trouble breathing or chest pain, call 911.'
        ] }
      ],
      mistakes: [
        'Counting on a dust mask, a surgical mask or a bandana.',
        'Buying an ionizer or ozone air cleaner for smoke.',
        'Running an old box fan all night while everyone sleeps.',
        'Frying dinner or lighting candles in the house while it is smoky.'
      ],
      sources: ['epa-cleanroom', 'airnow-aqi', 'epa-wf-iaq', 'epa-filtration', 'epa-diy-cleaner', 'epa-smoke-masks', 'cdc-wf-kids', 'airnow-smokeready'],
      checked: '2026-11-26'
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

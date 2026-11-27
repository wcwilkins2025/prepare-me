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
          'Store more for someone who is pregnant or sick, for pets, or if you live where it is hot.',
          'The American Red Cross sets three days for a kit you carry if you have to leave, and two weeks for water kept at home.'
        ] },
        { head: 'Containers that work', items: [
          'Best: food-grade water containers, made for storing water.',
          'Fine: plastic soda bottles with caps that close tight. Not milk or juice jugs.',
          'The container should close tight, not break if dropped, and pour easily. No glass.',
          'Never use anything that held bleach, pesticide or any other chemical.',
          'The Church of Jesus Christ of Latter-day Saints\' preparedness guide says to skip milk jugs: they do not seal well and they turn brittle over time.',
          'For store-bought water, that guide picks bottles made of PETE plastic. Its long-term storage page says to look for PETE or PET under the recycle sign.'
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
          'Keep hands out of the water and the inside of the container.',
          'Hesperian Health Guides says narrow-mouthed containers are the safest. If you must reach in, use a clean, long-handled dipper.'
        ] }
      ],
      mistakes: [
        'Reusing a jug that once held a chemical.',
        'Storing water in a hot garage next to the gas can.',
        'Skipping the date, then not knowing how old the water is.'
      ],
      sources: ['cdc-store', 'ready-water', 'redcross-kit', 'church-water', 'church-longterm', 'hesperian-water-store'],
      checked: '2026-11-26'
    },

    'water-treat': {
      intro: 'Stored water runs out. These are the ways to make more water safe to drink, from the CDC. Boiling is the best.',
      parts: [
        { head: 'Boil it (best)', items: [
          'If the water is cloudy, let it settle, or pour it through a coffee filter, paper towel or clean cloth.',
          'Bring it to a rolling boil for 1 minute. Above 6,500 feet, boil it for 3 minutes.',
          'Let it cool. Store it in clean containers with tight lids.',
          'Flat taste: pour it back and forth between two containers, or add a pinch of salt per quart.',
          'The Church of Jesus Christ of Latter-day Saints\' preparedness guide boils for 3 to 5 minutes, and Utah State University Extension for 5. The CDC says 1 minute is enough, or 3 minutes above 6,500 feet.',
          'Hesperian Health Guides strains through a cloth folded 4 times. Pour through the same side every time, then wash the cloth and dry it in the sun.'
        ] },
        { head: 'Bleach it', items: [
          'Use plain, unscented bleach. The label should say 5% to 9% sodium hypochlorite.',
          'If the label has directions for drinking water, follow them.',
          'Strain cloudy water first. Add the bleach, stir well, and wait at least 30 minutes before drinking.',
          'After 30 minutes the water should smell a little of chlorine. If it does not, Utah State University Extension says to add the same dose again and wait 15 more minutes.'
        ] },
        { head: 'How much bleach (5% to 9%)', cols: ['Water', 'Dropper', 'Measuring spoon'], rows: [
          ['1 quart', '2 drops', 'Too small to measure; use a dropper'],
          ['1 gallon', '8 drops', 'A little less than 1/8 teaspoon'],
          ['5 gallons', '40 drops', '1/2 teaspoon']
        ], note: 'Use twice as much if the water is very cold, cloudy or colored.' },
        { head: 'Tablets and drops', items: [
          'Follow the label. Each one is made for a set amount of water.',
          'They kill germs but may not kill every parasite. Chlorine dioxide tablets work on more of them when used as directed.',
          'Skip iodine if you are pregnant or have thyroid trouble. No one should drink iodine-treated water for more than a few weeks.',
          'Check the date on tablets. Utah State University Extension says most keep about 2 to 5 years unopened.'
        ] },
        { head: 'Filters', items: [
          'A camping filter takes out parasites but not viruses, and many do not take out bacteria.',
          'After filtering, add bleach or a tablet as well.'
        ] },
        { head: 'Sunlight, when you have nothing else', items: [
          'Fill clear, clean plastic bottles with water that is clear.',
          'Lay them on their side in the sun, on a dark surface if you can.',
          'Leave them 6 hours on a sunny day, or 2 days if it is cloudy.',
          'Hesperian Health Guides adds a step: fill the bottle half full, shake it for 20 seconds, then fill it to the top. The air helps.',
          'Drink straight from the bottle, so hands and cups do not put germs back in.'
        ] }
      ],
      mistakes: [
        'Using scented bleach. It must be plain and unscented.',
        'Drinking it before the 30 minutes are up.',
        'Thinking boiling or bleach fixes water with fuel or chemicals in it. It does not. Use bottled water or find another source.'
      ],
      sources: ['cdc-safe', 'church-water', 'usu-water', 'hesperian-water-safe'],
      checked: '2026-11-26'
    },

    'water-find': {
      intro: 'Your house already holds clean water in the water heater, the pipes and the freezer. Learn now how to get it out safely.',
      parts: [
        { head: 'Where the safe water is', items: [
          'The tank on your water heater, the one that feeds your faucets and showers.',
          'The water still sitting in your pipes.',
          'Ice cubes made from clean water. Melt them in a clean pot.',
          'The liquid in canned fruit and vegetables.',
          'The toilet tank, not the bowl, if the water is clear and no tank cleaner has ever been used in it.',
          'Utah State University Extension is more careful with the toilet tank. It treats that water as a last resort, to disinfect before you drink it.'
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
          'First, shut off the gas or electricity to the heater.',
          'Close the cold water intake valve at the tank.',
          'Turn on a hot water faucet so air can get in.',
          'Open the drain at the bottom and let the water run into a clean container.',
          'Refill the tank before you turn the power or gas back on.',
          'If the gas was shut off, you will need a professional to turn it back on.',
          'Utah State University Extension adds 8 drops of plain bleach to each gallon drained from the heater, stirs it, and waits 30 minutes before using it.'
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
      sources: ['cdc-findwater', 'fema-foodwater', 'epa-emergwater', 'cdc-safe', 'usu-water'],
      checked: '2026-11-26'
    },

    'water-rotate': {
      intro: 'Water you bottle yourself needs a fresh start every six months. A repeating reminder makes it a short chore.',
      parts: [
        { head: 'How long it keeps', items: [
          'Water you filled yourself: replace it every six months.',
          'Store-bought water in its sealed bottle: keep it until the date on the bottle.',
          'Write "drinking water" and the fill date on every container, so you always know which is which.',
          'Utah State University Extension says safe water that was treated and sealed well can keep indefinitely, if you check it every 6 to 12 months for loose lids, cracks and cloudiness. The CDC and The Church of Jesus Christ of Latter-day Saints\' preparedness guide both say to replace it every six months.'
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
          'Refill with clean tap water, cap it tight, and write the new date.',
          'Stored water can taste flat or dusty. The Latter-day Saints guide says that alone does not mean it has gone bad. Pour it back and forth between two clean containers to freshen it.'
        ] },
        { head: 'Check where it sits', items: [
          'The spot should stay cool, about 50°F to 70°F, and out of direct sun.',
          'Keep it away from gas, pesticides and other chemicals.',
          'Keep the caps tight, and keep hands out of the water when you use it.',
          'Clear bottles let light in. That guide suggests covering them or keeping them in dark plastic bags, and storing water where a leak will not damage the house.'
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
      sources: ['cdc-store', 'ready-water', 'ready-drought', 'epa-emergwater', 'ready-kit', 'usu-water', 'church-water'],
      checked: '2026-11-26'
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
          'Once a year, test for nitrates, coliform bacteria, pH and total dissolved solids.',
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
          'If the pump turns on when no water is running, you have a leak.',
          'Keep pit toilets, garbage pits and livestock well away from the well. Hesperian Health Guides says at least 30 meters, about 100 feet.'
        ] }
      ],
      mistakes: [
        'Running a generator in the garage or by an open window.',
        'Drinking well water after a flood before it has been tested.',
        'Fixing wet wiring at the well yourself.'
      ],
      sources: ['cdc-wells', 'epa-wells', 'ready-power', 'ready-drought', 'fema-foodwater', 'hesperian-wells'],
      checked: '2026-11-26'
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
          'Label "drinking water" with the date.',
          'The CDC uses 2 drops a gallon for stored well water. The Church of Jesus Christ of Latter-day Saints\' preparedness guide and Utah State University Extension use 8 drops a gallon for any stored water that has no chlorine.'
        ] },
        { head: 'Store them', items: [
          'Somewhere cool, about 50°F to 70°F, and dark.',
          'Away from gas, pesticides and other chemicals.',
          'Store-bought water stays in its sealed bottle until you need it.',
          'When you use it, pour it out or use a clean scoop. Keep hands out of the water.',
          'Put it where a leak will not damage the house, and where it will not freeze.'
        ] },
        { head: 'More ways to hold two weeks', items: [
          'The Church of Jesus Christ of Latter-day Saints\' preparedness guide also counts 14 gallons for each adult for two weeks. It says adults drink at least 2 quarts a day. The rest is for cooking and washing.',
          'If you have freezer space, Utah State University Extension suggests keeping some water there. It also helps keep food frozen in an outage. Leave 2 to 3 inches at the top for the ice.',
          'Utah State University Extension also cans water: clean canning jars with 1 inch of space at the top, processed 20 minutes in a boiling-water canner. A white ring of minerals inside is normal.'
        ] }
      ],
      mistakes: [
        'Reusing milk jugs.',
        'Putting all of it in a hot garage next to the gas can.',
        'Adding new jugs without adding them to the six-month swap.'
      ],
      sources: ['cdc-store', 'ready-water', 'fema-foodwater', 'church-water', 'usu-water'],
      checked: '2026-11-26'
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
          'Never use flood water, or water with fuel or chemicals in it. No filter, boiling or bleach can make it safe.',
          'For rainwater, Hesperian Health Guides says to clean the roof, gutters and tank first, and let the first rain of the year run through to rinse them.',
          'Metal roofs are best. Do not collect drinking water from roofs made of lead, asbestos or tar. Screen the tank inlet to keep out insects and leaves.'
        ] },
        { head: 'Use it', items: [
          'Cloudy water? First let it settle, or strain it through a coffee filter, paper towel or clean cloth.',
          'Follow the directions for your filter.',
          'After filtering, kill what is left: add bleach, chlorine or chlorine dioxide, or boil it.',
          'Bleach: 8 drops of plain bleach (5% to 9%) per gallon. Stir and wait at least 30 minutes.',
          'Boil: a rolling boil for 1 minute, or 3 minutes above 6,500 feet.'
        ] },
        { head: 'UV light units', items: [
          'A portable UV light can kill the germs in a small amount of clear water.',
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
      sources: ['cdc-safe', 'cdc-findwater', 'epa-emergwater', 'fema-foodwater', 'hesperian-rain'],
      checked: '2026-11-26'
    },

    'food-count': {
      intro: 'You may already have days of food on the shelf. Count it in meals so you know the real number and the gap.',
      parts: [
        { head: 'What counts', items: [
          'Food that needs no fridge, no water, no special prep and no cooking.',
          'Canned meat, fruit and vegetables.',
          'Fruit or protein bars, granola or dry cereal, and peanut butter.',
          'Dried fruit, canned juice, and shelf-stable milk.',
          'Leave out food from the fridge and freezer. In an outage it is used first, and it does not last long.'
        ] },
        { head: 'Count meals, not cans', items: [
          'Three meals a day is 9 meals a person for three days, and 42 meals for two weeks.',
          'Count only food your family will actually eat.',
          'Note anyone with a special diet, allergy, a baby or an older adult. They may need different food.',
          'Write the number of days on your plan, and what is short.',
          'Starting from nothing? The Church of Jesus Christ of Latter-day Saints\' preparedness guide says to store one day of food, multiply it by seven for a week, then build toward a month.',
          'Keep a list of the places you store food, so you can find it and count it fast.'
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
          ['Dried fruit, crisp crackers, boxed powdered milk', 'Use within about 6 months'],
          ['Home-canned food (Utah State University Extension)', 'Best within 1 year; use within 2 years']
        ], note: 'Eat what is closest to its date first, and move it to the front.' }
      ],
      mistakes: [
        'Counting cans instead of meals.',
        'Counting food in the fridge or freezer.',
        'Counting food nobody in the house will eat.'
      ],
      sources: ['ready-food', 'usda-shelf', 'fema-foodwater', 'usda-food', 'church-food', 'usu-canned'],
      checked: '2026-11-26'
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
          'In snow, do not put food outside. Fill buckets or cans with water, set them outside to freeze, and use that ice.',
          'Eat the fresh food from the fridge first, the American Red Cross says, and keep a thermometer in the cooler too.'
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
      sources: ['usda-food', 'redcross-power'],
      checked: '2026-11-26'
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
          'A portable gas camp stove is never for indoor use.',
          'Never use a gas oven or stovetop to heat the house.',
          'Put out every flame before you leave it.'
        ] },
        { head: 'Carbon monoxide', items: [
          'Put battery or battery-backup carbon monoxide detectors near every sleeping area.',
          'Signs it is building up: chest pain, headache, weakness, dizziness, upset stomach, vomiting or confusion. It often feels like the flu.',
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
          'Pick food that is filling and has some nutrition, not just snacks.',
          'The American Red Cross sets three days for food you carry if you leave, and two weeks for food at home.'
        ] },
        { head: 'What to pick', items: [
          'Food that needs no fridge, no water, and no cooking.',
          'Ready-to-eat canned meat, fruit and vegetables.',
          'Dried fruit, peanut butter, dry cereal or granola, and protein or fruit bars.',
          'Canned juice and shelf-stable milk.',
          'A few comfort foods.',
          'Food for anyone with a special diet or allergy.',
          'The Church of Jesus Christ of Latter-day Saints\' preparedness guide says to pick from different food groups, and to include a source of vitamin C.'
        ] },
        { head: 'Go easy on salt', items: [
          'Salty food makes you thirsty, and water may be short.',
          'Lean on salt-free crackers, whole grain cereal, and canned food with a lot of liquid in it.'
        ] },
        { head: 'Pack it', items: [
          'Keep it in a cool, dry place, dark if you can. Below 85°F is best.',
          'Never under the sink, beside or above the stove, or in a damp basement or garage.',
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
      sources: ['ready-food', 'fema-foodwater', 'usda-shelf', 'ready-kit', 'redcross-kit', 'church-food'],
      checked: '2026-11-26'
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
          'In an emergency, the safest way to feed a baby is breastfeeding. Plan to keep going.',
          'Pack disposable nursing pads, one or two boxes.',
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
          'Keep a bigger kit for staying home and a light one for leaving.',
          'The American Red Cross adds a pet first aid kit, the feeding schedule, and your vet\'s name and number, with the medical records in a waterproof container.'
        ] }
      ],
      mistakes: [
        'Storing only powdered formula and no safe water to mix it.',
        'Mixing formula with tap water during a boil notice.',
        'Forgetting the pet\'s medicine.'
      ],
      sources: ['cdc-infant-kit', 'cdc-infant-special', 'ready-pets', 'ready-kit', 'redcross-pets'],
      checked: '2026-11-26'
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
          'Never under the sink, beside or above the stove, or in a damp basement or garage.',
          'If your home can flood, keep it up high, not in the basement or low cabinets.',
          'Keep it off bare concrete. The Church of Jesus Christ of Latter-day Saints\' preparedness guide and Utah State University Extension both say concrete can rust cans and let moisture into plastic.',
          'Cooler is better. Utah State University Extension says 40°F to 70°F is best. In its tests, wheat kept good quality 25 years in a cool basement but only 5 in a hot garage or attic.'
        ] },
        { head: 'Keep out air and pests', items: [
          'Store boxed food inside plastic or metal containers that close tightly.',
          'Pour open sugar, dried fruit and nuts into screw-top jars or airtight canisters.',
          'Open boxes carefully so they close tight again.',
          'Never seal moist food with oxygen absorbers. The Latter-day Saints guide says this can cause botulism. Only dry food, about 10 percent moisture or less, such as grains and dry beans, belongs in that kind of package.'
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
        ] },
        { head: 'Longer-term staples', cols: ['Dry food, sealed airtight', 'Can still feed you for'], rows: [
          ['Wheat, white rice and corn', '30 years or more'],
          ['Pinto beans, rolled oats, pasta and potato flakes', '30 years'],
          ['Nonfat powdered milk', '20 years'],
          ['Dehydrated carrots', '10 years'],
          ['Sugar', 'No set limit']
        ], note: 'Estimates from The Church of Jesus Christ of Latter-day Saints\' preparedness guide, for dry food sealed in cans, foil pouches or PETE bottles with oxygen absorbers and kept at 75°F or cooler. Rice and pasta in their store box still follow the USDA\'s 2 years above. Brown rice, whole wheat flour, nuts, granola and jerky do not keep this long.' }
      ],
      mistakes: [
        'Storing it in a hot garage or over the stove.',
        'Buying a pile once and never eating from it.',
        'Keeping a bulging can because it is still sealed.'
      ],
      sources: ['usda-shelf', 'fema-foodwater', 'ready-food', 'usda-food', 'church-longterm', 'church-food', 'usu-storage-conditions'],
      checked: '2026-11-26'
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
          'Canning powders. They do not replace heat.',
          'Canning butter, quick breads baked in jars, or wheat kernels soaked in water. Utah State University Extension says none of these is safe.',
          'Adding extra flour or starch to thicken, or extra onions or peppers to a tested salsa. Both can leave the food under-processed.'
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
      sources: ['usda-preserve', 'nchfp-canners', 'nchfp-safe', 'nchfp-storing', 'usda-extension', 'umn-garden', 'umn-garden-water', 'usu-canmistakes'],
      checked: '2026-11-26'
    },

    'power-lights': {
      intro: 'Most outages come in a storm or at night. A flashlight within reach is safer than any candle.',
      parts: [
        { head: 'Why flashlights, not candles', items: [
          'The U.S. Fire Administration says to use flashlights, not candles, in a power outage.',
          'Each day, on average, people report about 20 candle fires in homes.',
          'Never use lit candles in bedrooms or where people sleep.',
          'If you like the look of a candle, use a battery-operated flameless one.',
          'If you do light a candle, NFPA says to keep it at least 12 inches from anything that can burn, and blow it out before you leave the room or go to bed.',
          'NFPA found that over a third of home candle fires start in the bedroom, and more than half start when something that can burn is too close to the flame.'
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
      sources: ['ready-power', 'usfa-candle', 'usfa-severe', 'ready-kit', 'nfpa-candles'],
      checked: '2026-11-26'
    },

    'power-heat': {
      intro: 'When the heat goes out in winter, the risks are the cold and the fumes from the wrong heater. Plan for both before the first freeze.',
      parts: [
        { head: 'Get the house ready now', items: [
          'Seal drafts around doors and windows with caulk and weather stripping.',
          'Insulate water lines that run along outside walls, so they are less likely to freeze.',
          'Covering windows with plastic from the inside helps hold the heat.',
          'If you would use a fireplace or wood stove for heat, have the chimney or flue inspected every year.',
          'Have the furnace and its vent checked by a qualified technician each winter.',
          'The Red Cross suggests an indoor thermometer, so you can watch how cold the house is getting.'
        ] },
        { head: 'Heat only with safe sources', items: [
          'Never heat the house with a gas stove or oven. It raises the risk of carbon monoxide, fire and burns.',
          'Never burn charcoal or use a camp stove indoors. Grills and generators belong outside.',
          'Do not use flameless chemical heaters indoors either.',
          'Keep at least 3 feet between a fireplace, wood stove or space heater and anything that can burn.',
          'Turn space heaters off when you leave the room or go to bed.',
          'Heating with a fireplace, wood stove or kerosene heater? Put a smoke alarm and a battery carbon monoxide alarm near that area.',
          'NFPA found that space heaters and heating stoves cause about 30 percent of home heating fires, but nearly 3 in 4 of the deaths. Give them room.'
        ] },
        { head: 'Stay warm', items: [
          'Wear layers of warm clothing, and limit time outside.',
          'Pace yourself shoveling snow. Overdoing it raises the risk of a heart attack.',
          'Over 65? Keep an easy-to-read thermometer where you see it often. People feel cold less as they age.',
          'If the house gets too cold, go to a place with power. Check with local officials about warming locations near you.',
          'If heating bills are hard to pay, the Low Income Home Energy Assistance Program (LIHEAP) can help.',
          'Drink plenty of warm fluids, but go easy on caffeine and alcohol, the Red Cross says.',
          'When you go out, cover your fingers, toes, nose, ears, cheeks and chin. Frostbite hits them first.'
        ] },
        { head: 'Stock for the cold', items: [
          'The Red Cross says to have enough hats, mittens and blankets for everyone in the house.',
          'Keep a stay-at-home kit with at least two weeks of supplies, and a go-kit with three days you can carry if you must go somewhere warmer.',
          'Put backup batteries and chargers for devices like a CPAP or wheelchair in the go-kit.',
          'Keep a blanket, warm clothes, boots and a first aid kit in the car.'
        ] },
        { head: 'Frostbite', items: [
          'Signs: numbness, white or grayish-yellow skin, skin that feels firm or waxy. It hits the face, fingers and toes first.',
          'Move to a warm room. Warm the spot by soaking it in warm water, or with body heat.',
          'Do not rub it or use a heating pad.'
        ] },
        { head: 'Hypothermia', items: [
          'Signs include shivering, confusion, exhaustion, memory loss, fumbling hands, drowsiness or slurred speech.',
          'A body temperature below 95°F is an emergency. Call 911.',
          'Head to a warm room. Heat the core of the body first: the chest, neck, head and groin.',
          'Keep the person dry and wrapped in warm blankets, head and neck too.'
        ] }
      ],
      mistakes: [
        'Turning on the oven to warm the kitchen.',
        'Running a generator or grill in the garage.',
        'Rubbing frostbitten skin or putting a heating pad on it.'
      ],
      sources: ['ready-winter', 'cdc-co', 'cdc-winter', 'usfa-heating', 'ready-power', 'redcross-winter', 'nfpa-heating'],
      checked: '2026-11-26'
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
          'A friend or relative with air conditioning can be your cool place. Ask ahead.',
          'The Red Cross sets the mark a bit higher. Once it reaches the high 90s, a fan may not keep heat illness away. Either way, a cool shower or an air-conditioned place works better.',
          'A few hours a day in air conditioning helps prevent heat illness, the Red Cross says.'
        ] },
        { head: 'Stay cool and drink', items: [
          'Take cool showers or baths.',
          'Wear loose, lightweight, light-colored clothes.',
          'Keep a water bottle with you. Sip from it and fill it again all day long.',
          'Go easy on drinks with lots of sugar, salt, caffeine or alcohol.',
          'Light yellow or clear urine usually means you are drinking enough.',
          'Do outdoor work early or late. Skip hard work in the midday heat.',
          'The Red Cross says the average person needs roughly three-quarters of a gallon of water each day. If you sweat a lot, replace the salt you lose with snacks or a sports drink.'
        ] },
        { head: 'Know the warning signs', items: [
          'Heat cramps: muscle spasms or pain in the arms, legs or stomach.',
          'Heat exhaustion: heavy sweating, cramps, paleness, weakness, dizziness, headache, a weak or fast pulse, nausea or vomiting, and fainting.',
          'For either one: go somewhere cooler, take off extra clothes, and sip water or a sports drink. Call your doctor if it gets worse or lasts more than an hour.',
          'Heat stroke: body temperature above 103°F, red, hot, dry skin with no sweat, a fast strong pulse, confusion or passing out.',
          'Heat stroke is an emergency. Call 911.',
          'While you wait: get the person into shade and remove outer clothes. Put ice or cold wet cloths on the neck, head, armpits and groin. Raise the feet.'
        ] },
        { head: 'Who needs extra care', items: [
          'Adults over 65, babies and young children, pregnant women, and people with heart disease or asthma.',
          'Many medicines make it easier to get dehydrated or overheated. Do not stop or change a medicine before you talk to the doctor.',
          'On a warm day, never leave a person or a pet inside a closed car.',
          'Check on family and neighbors, most of all those who live alone.',
          'Give pets outside plenty of cool water and shade.',
          'Mayo Clinic adds children under 4, and people not used to the heat yet, as in an early heat wave or after a move from a cold place.'
        ] }
      ],
      mistakes: [
        'Counting on a fan when the room is over 90°F.',
        'Leaving a child or a pet in a closed car, even for a minute.',
        'Stopping a medicine because of the heat without asking the doctor.'
      ],
      sources: ['ready-heat', 'cdc-heat', 'ready-disab', 'redcross-heat', 'mayo-heatexh'],
      checked: '2026-11-26'
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
          'Get a spare battery for any battery-run medical device or a power wheelchair. Keep the spares charged at all times.',
          'If you cannot afford a spare battery, ask what agencies or local charities can help buy one.',
          'Keep a backup supply of oxygen if the person uses it.',
          'If you use a power wheelchair, keep a light manual chair as a backup if you can.',
          'The Red Cross says to list everything in the house that needs power, then plan both a backup and a no-power way for each: the device, cold medicine, lights, garage doors and locks.',
          'Pack backup batteries and chargers for devices like a CPAP or wheelchair in a go-kit you can carry.'
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
          'For a medical emergency, call 911.',
          'Leave if the device needs power you do not have, or if the home gets too hot or too cold. Communities often open warming or cooling centers and charging stations, the Red Cross says.',
          'Keep the car\'s gas tank at least half full, so you can leave when you need to.'
        ] }
      ],
      mistakes: [
        'Waiting for the first outage to learn how long the battery lasts.',
        'Keeping a spare battery that was never charged.',
        'Having the device model and serial number only in your head.'
      ],
      sources: ['ready-disab', 'ready-power', 'redcross-power', 'redcross-winter'],
      checked: '2026-11-26'
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
          'If you smell gas or notice a hissing or blowing sound, open a window first. Then get everyone out, fast.',
          'If you can, shut the gas off at the main valve outside.',
          'Go to a neighbor\'s home and call the gas company from there. If anyone is hurt or there is a fire, call 911.',
          'Once the gas is off, never turn it back on yourself. Only a qualified professional should do that.',
          'The Red Cross says to turn utilities off only if you think there is damage, or officials tell you to.'
        ] },
        { head: 'Water', items: [
          'Find the main valve where the water line enters the house. Tag it so anyone can spot it.',
          'Make sure it closes all the way. If it is rusted open or will not close fully, have it replaced.',
          'This is the valve at the house, not the street valve in the curb box. The street one is very hard to turn and needs a special tool.',
          'After a disaster, shut off the water until officials say it is safe. Cracked lines can foul the water coming in.',
          'Shutting it off also keeps the clean water in your water heater and toilet tanks from draining away.'
        ] },
        { head: 'Electricity', items: [
          'Find the breaker box or fuse box, and keep the path to it clear.',
          'To shut it all off, switch off each single circuit first, then the main.',
          'Sparks can light leaking gas, so every adult who is able should know how.',
          'If breakers have tripped, the Red Cross says to have an electrician check them before you turn them back on.',
          'Stay at least 35 feet from a fallen power line and anything it touches, and call 911.'
        ] }
      ],
      mistakes: [
        'Turning the gas off just to practice, then waiting for the gas company to turn it back on.',
        'Fighting the street valve instead of the house valve.',
        'Finding out in a flood that the water valve is rusted open.'
      ],
      sources: ['ready-skills', 'ready-kit', 'usfa-garage', 'redcross-power'],
      checked: '2026-11-26'
    },

    'power-co': {
      intro: 'Carbon monoxide has no color and no smell. An alarm is the only way most people will know it is there.',
      parts: [
        { head: 'Where they go', items: [
          'Put one near every sleeping area.',
          'Put one on every level of the home too, in a central spot outside each separate sleeping area.',
          'If the basement has oil, gas or wood-burning equipment, put one there.',
          'Heating with a fireplace, wood stove or kerosene heater? Put one near the area you heat.',
          'NFPA says to connect the alarms to each other if you can, so when one sounds, they all sound.',
          'Follow the maker\'s directions for where and how high to mount each one.'
        ] },
        { head: 'What kind', items: [
          'Pick one that runs on batteries or has a battery backup, so it still works in an outage.',
          'One with a digital readout can show the highest level it has picked up, not only sound an alarm.',
          'Pick one with the label of a recognized testing lab, NFPA says.'
        ] },
        { head: 'Keep them working', items: [
          'Test them monthly.',
          'Change the batteries twice a year. An easy time is when the clocks change in spring and fall.',
          'Replace each alarm when its maker says, or every 5 years.',
          'Set a phone reminder for the replacement date the day you put it up.',
          'If it chirps with a trouble signal, check the battery. If it still sounds with a new battery, call the fire department.'
        ] },
        { head: 'Know the signs', items: [
          'Headache, weakness, dizziness, chest pain, upset stomach, vomiting and confusion. People often say it feels like the flu.',
          'People who are asleep or drunk can die before they notice anything.',
          'Babies, older adults, and people with heart disease, anemia or breathing problems get sick from it sooner.',
          'If the alarm sounds or someone has these signs, treat it as an emergency and call 911.',
          'Mayo Clinic says memory or mood problems can show up later, after someone seems to recover. Get checked even if you feel better.'
        ] },
        { head: 'If the alarm sounds', items: [
          'Believe it, Mayo Clinic says. Get to fresh air right away, outside or by an open door or window.',
          'Make sure everyone in the home is accounted for.',
          'Call for help from the fresh air, and stay there until responders arrive.',
          'Opening doors and windows or running fans will not stop carbon monoxide from building up, the Red Cross says. Get out.',
          'Ahead of time, call your fire department\'s non-emergency number and ask which number to call if the alarm sounds.'
        ] },
        { head: 'Stop it at the source', items: [
          'Have the furnace, water heater and any gas, oil or coal appliance serviced by a qualified technician every year.',
          'Have the chimney checked or cleaned every year.',
          'Keep snow and debris away from the vents of the furnace, dryer, fireplace and stove.',
          'Never run a car or truck in a garage attached to the house, even with the door open.',
          'Run a generator only outside. Keep it more than 20 feet away from doors, windows and vents.'
        ] }
      ],
      mistakes: [
        'Buying a plug-in alarm with no battery backup. It goes quiet in an outage, when you need it most.',
        'Keeping an alarm long past its replacement date.',
        'Thinking you would smell it. You cannot.',
        'Opening a window and staying inside when the alarm sounds.'
      ],
      sources: ['cdc-co', 'usfa-co', 'cdc-winter', 'usfa-garage', 'nfpa-co', 'mayo-co', 'redcross-generator'],
      checked: '2026-11-26'
    },

    'power-batteries': {
      intro: 'Lights, radios and alarms are only as good as their batteries. A spare set for each, stored the right way, keeps them working.',
      parts: [
        { head: 'What needs spares', items: [
          'Every flashlight and lantern.',
          'A NOAA Weather Radio, plus the radio that runs on batteries or a hand crank.',
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
          'Do not charge them below 32°F or above 105°F.',
          'NFPA says to buy batteries listed by a recognized testing lab, and to use the charger that came with the device.',
          'Stop charging a battery once it is full.'
        ] },
        { head: 'Keep them fresh', items: [
          'Replace anything past its date.',
          'Change smoke and carbon monoxide alarm batteries twice a year.',
          'Once a year, think again about what you need and update the kit.'
        ] },
        { head: 'When a battery goes bad', items: [
          'Stop using a lithium-ion battery that smells, changes color, gets too hot, changes shape, leaks or makes odd noises.',
          'Do not put lithium-ion batteries in the trash. Take them to a battery recycling spot.',
          'Have any repairs done by a qualified professional.'
        ] }
      ],
      mistakes: [
        'Storing lithium-ion spares in a hot car.',
        'Throwing lithium-ion batteries in the trash.',
        'Forgetting the backup batteries in the smoke and carbon monoxide alarms.'
      ],
      sources: ['ready-kit', 'usfa-batt', 'usfa-severe', 'ready-disab', 'cdc-winter', 'nfpa-liion'],
      checked: '2026-11-26'
    },

    'power-phone': {
      intro: 'The phone brings alerts and keeps you in touch. Charge it before a storm, then make the battery last once the power is out.',
      parts: [
        { head: 'Before a storm', items: [
          'Charge every phone and device fully before bad weather comes.',
          'Keep a charged backup battery at home.',
          'Keep a car charger and a portable charger in the car at all times.',
          'The Red Cross says to sign up for local text alerts and to keep your contact list on paper too.'
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
          'Keep battery packs at room temperature, not in a hot car.',
          'The Red Cross lists a battery or crank radio, a home phone that is not cordless, and chargers or batteries for phones and computers.'
        ] }
      ],
      mistakes: [
        'Charging in a running car inside the garage.',
        'Redialing again and again, which jams the network for everyone.',
        'Letting the battery pack sit uncharged in the drawer.'
      ],
      sources: ['ready-tech', 'fcc-tips', 'ready-power', 'cdc-co', 'usfa-batt', 'redcross-power', 'redcross-winter'],
      checked: '2026-11-26'
    },

    'power-backup': {
      intro: 'A generator helps in a long outage, but its exhaust is carbon monoxide. Every rule here is about running it safely.',
      parts: [
        { head: 'Decide what must run', items: [
          'Walk the house and list everything you need that runs on electricity.',
          'Put medical devices and medicine that must stay cold at the top.',
          'Ask the doctor about a power plan for those first.',
          'To size a generator, the Red Cross says to add up the watts on each appliance\'s label and the bulbs you want, then divide by volts to get amps.',
          'Pick one that makes more amps than you need. Some machines draw up to 3 times their power when they start.'
        ] },
        { head: 'Where it runs', items: [
          'Outdoors only, at least 20 feet from windows, doors, vents and attached garages.',
          'Never inside the house or garage, even with the doors and windows open.',
          'Keep it dry and out of the rain and floodwater. Touching a wet generator, or what is plugged into it, can shock you.',
          'Use it under an open, canopy-style cover, such as a tarp on poles, and on a dry surface. Do not touch it with wet hands.',
          'Opening doors and windows or running fans will not stop carbon monoxide from building up inside.'
        ] },
        { head: 'Hooking things up', items: [
          'Plug appliances into the generator with heavy-duty extension cords.',
          'Follow the maker\'s instructions every time.',
          'Start it and check it now and then. A generator that is rarely used or cared for is a fire risk.',
          'Use a heavy-duty, outdoor-rated cord rated for at least the total load. Check it for cuts, and make sure the plug has all three prongs.',
          'Never plug the generator into a wall outlet. This backfeeding can electrocute utility workers, neighbors and your family. To connect it to the house wiring, have an electrician put in a transfer switch.'
        ] },
        { head: 'Fuel', items: [
          'Never add fuel while it is running.',
          'Let it cool first. Fuel spilled on a hot engine can catch fire.',
          'Store gasoline in a shed away from the house, not in the house or attached garage.',
          'Store fuel in an approved safety can, and not near a fuel-burning appliance like a gas water heater. Ask your fire department how much you may store.'
        ] },
        { head: 'Avoid overloads', items: [
          'Even a properly connected generator can overload, overheat or fail, the Red Cross says.',
          'If needed, take turns running things, so the load stays under what the generator makes.'
        ] },
        { head: 'Inside while it runs', items: [
          'Have a battery or battery-backup carbon monoxide alarm working on every level.',
          'Know the signs: headache, dizziness, weakness, upset stomach, chest pain, confusion. If they show up, call 911.'
        ] }
      ],
      mistakes: [
        'Running it in the garage with the door open.',
        'Setting it under an open window.',
        'Refueling it while it is hot.',
        'Plugging the generator into a wall outlet to power the house.'
      ],
      sources: ['ready-power', 'cdc-co', 'usfa-severe', 'usfa-garage', 'redcross-generator'],
      checked: '2026-11-26'
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
          'Add key medical facts to your phone, and wear a medical alert tag or bracelet if you need one.',
          'The Red Cross suggests a small card with your medicines and doses, as written on the label, that you carry with you.'
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
          'Once a year, read it over with the whole household.',
          'The Red Cross says to review your plan, supplies and papers every six months.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy at home.',
        'Leaving off allergies.',
        'Carrying an old list with a medicine that has changed.'
      ],
      sources: ['ready-disab', 'ready-plan', 'ready-older', 'ready-tech', 'redcross-older', 'redcross-winter'],
      checked: '2026-11-26'
    },

    'med-kit': {
      intro: 'Much of a first aid kit is already in your house. Pull it into one box, then see what the Red Cross list says is missing.',
      parts: [
        { head: 'Where kits go', items: [
          'Keep one kit at home and one in the car.',
          'Find out where the first aid kits are at work.',
          'Mayo Clinic says to store each kit where it is easy to reach but out of reach of young children, and to show older kids where it is.'
        ] },
        { head: 'Start with what you have', items: [
          'Adhesive bandages of different sizes, and sterile gauze pads.',
          'Adhesive cloth tape.',
          'Antibiotic ointment and antiseptic wipes.',
          'Tweezers and a few pairs of nonlatex gloves.',
          'A thermometer that is not mercury and not glass.',
          'A first aid guide, so anyone can follow the steps.',
          'Mayo Clinic also lists things most homes already have: safety pins, scissors, plastic bags, duct tape and hand sanitizer.'
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
          'Replace anything you use, and anything past its date.',
          'Mark the kit with the date it was last used. Kits can go years between uses, and some things expire.',
          'Check that the flashlight batteries in it still work.'
        ] }
      ],
      mistakes: [
        'Keeping supplies spread across three drawers.',
        'Using the last bandage and not replacing it.',
        'Forgetting the medicines your own family needs.'
      ],
      sources: ['redcross-firstaidkit', 'ready-home', 'ready-kit', 'mayo-kit'],
      checked: '2026-11-26'
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
          'The hands-on practice is the point. These skills are learned with an instructor, not from a page.',
          'Stop the Bleed has trained over 5 million people, from students to teachers.'
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
        { head: 'Until help comes', items: [
          'Mayo Clinic says to put on gloves if you have them.',
          'Put sterile gauze or a clean cloth over the wound, then press firmly with your palm.',
          'If blood soaks through, add more gauze or cloth on top and keep pressing. Leave the first layer on.',
          'Leave large or deeply stuck objects in place, and do not probe the wound.',
          'Keep the person still, lying down and warm, on a rug or blanket if you can.',
          'A tourniquet is for life-threatening bleeding from an arm or leg. Mayo Clinic says to use a ready-made one only if you are trained, never a scarf or belt, and to tell responders how long it has been on.',
          'Wash your hands afterward, even if no blood seems to have touched them.'
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
        'Putting the class off for a year.',
        'Lifting soaked gauze to look. Add more on top instead.'
      ],
      sources: ['stopthebleed', 'stb-train', 'mayo-bleeding'],
      checked: '2026-11-26'
    },

    'med-rx': {
      intro: 'About half of Americans take a prescription every day, and an emergency can make it hard to refill one or find an open pharmacy. A supply on hand, kept dry and at the right temperature, turns a crisis into a wait.',
      parts: [
        { head: 'Build the supply and refill early', items: [
          'Ask your doctor or pharmacist how you can build an emergency supply of each medicine.',
          'Know how much you have on hand. If a storm may close the pharmacy, ask for an early refill.',
          'Learn your state\'s emergency refill law, and ask your pharmacist what it allows. In some states, such as North Carolina, a pharmacist can give an early refill of some medicines when an emergency is declared.',
          'Add extra nonprescription basics too, like pain and fever relievers, allergy medicine and diarrhea medicine.',
          'If you get treatments at a clinic or hospital, ask about their emergency plan. If you are on dialysis or another life-sustaining treatment, know more than one place that can help.',
          'The Red Cross suggests more than a few days: a 1-month supply of needed medicine and medical supplies, and at least 30 days for older adults. Ask your doctor what is possible for you.',
          'The Red Cross says to keep the supply in a child-proof container.'
        ] },
        { head: 'The list and the go-bag', items: [
          'Write a list of every medicine: its name and strength, its purpose, and the amount you take and when you take it.',
          'Add medical conditions, medical supplies you need, and allergies. The step on writing down everyone\'s medicines and doctors covers the rest.',
          'Keep a copy of each prescription with your emergency supplies.',
          'Keep several days of each prescription medicine in your emergency kit or go-bag.',
          'Pack the supplies that go with them: syringes, test strips, a blood sugar monitor, a spare inhaler or an epinephrine autoinjector.',
          'Put bottles and packages in watertight containers, such as lidded plastic ones, and keep them where floodwater is unlikely to reach.',
          'Make sure at least one trusted person knows where the supply is and how to give your medicine.'
        ] },
        { head: 'Medicine that must stay cold', items: [
          'Keep a cooler ready for an outage, with ice or frozen gel packs. Follow the storage directions on the label.',
          'Most medicine that needs the fridge can stay in a closed fridge for several hours without a problem. Ask your doctor or pharmacist about yours.',
          'Ask how long each medicine can be kept at higher temperatures.',
          'If the power stays out longer than a day, throw out medicine that should be refrigerated, unless its label says otherwise. Then call your doctor or pharmacist right away for a new supply.',
          'If a medicine was not kept at the right temperature, check its storage directions or ask a pharmacist, your doctor or the maker if it can still be used.',
          'If a medicine is needed to stay alive, like insulin, and you cannot get a replacement, the FDA says it may be used until you get a new supply.'
        ] },
        { head: 'Insulin storage', cols: ['Insulin', 'Temperature', 'How long it keeps'], rows: [
          ['Unopened, in the fridge', '36°F to 46°F', 'Until the expiration date'],
          ['Vials or cartridges from the maker, opened or not, out of the fridge', '59°F to 86°F', 'Up to 28 days'],
          ['Diluted, or taken out of the maker\'s vial', 'Any', 'Throw away within two weeks'],
          ['In a pump\'s reservoir and tubing', 'Any', 'Throw away after 48 hours, unless the pump or insulin directions say longer'],
          ['In a pump', 'Above 98.6°F', 'Throw it away'],
          ['Frozen', 'Below freezing', 'Do not use it']
        ], note: 'From the FDA. Keep insulin as cool as you can, out of direct sun and away from heat. If you use ice, do not let the insulin freeze. Some insulins have longer limits, so check the package insert. Once you have properly stored insulin again, replace any that got too hot or cold. Switch to a different insulin only under a doctor\'s care.' },
        { head: 'If medicine got wet, hot or frozen', items: [
          'After a disaster, check every medicine for damage.',
          'Heat from a fire can weaken or ruin medicine. Think about replacing any that got very hot.',
          'Throw out medicine that touched floodwater or unsafe water, even in its original container with a screw cap, snap lid or dropper.',
          'Do not use medicine that is wet or looks changed. It is contaminated.',
          'One exception: if a medicine from a fire or unsafe water is needed for a life-threatening condition and you cannot get a replacement soon, it may be used if it looks unchanged. Replace it as soon as you can.',
          'If a medicine has to be mixed with water, use only purified or bottled water.',
          'Never use insulin that froze. For other medicine that froze or got too hot, ask the pharmacist.'
        ] },
        { head: 'Hot weather', items: [
          'Some medicines must be kept out of hot places.',
          'Many medicines make it easier to get dehydrated or overheated on hot days.',
          'Do not stop or change a medicine before you talk to the doctor.'
        ] }
      ],
      mistakes: [
        'Waiting for the last pill before you refill.',
        'Keeping medicine that sat in floodwater because the cap was on tight.',
        'Letting insulin freeze against the ice in a cooler.',
        'Changing how you take a medicine on your own during a heat wave.'
      ],
      sources: ['fda-disaster', 'fda-insulin', 'cdc-rx', 'ready-disab', 'ready-older', 'ready-power', 'ready-space', 'cdc-heat', 'redcross-winter', 'redcross-heat', 'redcross-older'],
      checked: '2026-11-26'
    },

    'med-fill': {
      intro: 'The Red Cross lists what a family of four should keep in a first aid kit. Check yours against it, item by item.',
      parts: [
        { head: 'Dressings and bandages', cols: ['Item', 'How many'], rows: [
          ['Absorbent compress dressings, 5 x 9 inches', '2'],
          ['Adhesive bandages, assorted sizes', '25'],
          ['Adhesive cloth tape, 1 inch wide, 10 yards long', '1 roll'],
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
          'Ask your doctor or pharmacist what else to keep for your family.',
          'Mayo Clinic\'s longer list adds an elastic wrap bandage, a finger splint, an eye pad, eyewash, sterile saline and a bulb syringe for rinsing wounds.',
          'Write the Poison Control number in the kit: 1-800-222-1222. It is free and open 24 hours, Mayo Clinic notes.'
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
      sources: ['redcross-firstaidkit', 'ready-home', 'ready-disab', 'mayo-kit'],
      checked: '2026-11-26'
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
          'Clean your hands often. Use soap and water and scrub for at least 20 seconds. If there is no soap, use a hand sanitizer that has at least 60 percent alcohol.',
          'Try to keep your hands away from your eyes, nose and mouth.',
          'Clean things people touch often, like counters, handrails and doorknobs.',
          'Do not share food or utensils.'
        ] },
        { head: 'Plan the house', items: [
          'Stock water, prescriptions, cleaning supplies and food that keeps. Have enough for several days or weeks at home.',
          'Have a thermometer in your first aid kit.',
          'Schools and workplaces may close. Plan who stays home with the kids if the adults are sick.',
          'Know how your health insurance covers visits by phone or video.',
          'Mayo Clinic says rest and plenty of liquids, like water, juice and warm soup, help ease the flu.',
          'Never give aspirin to children or teens getting over a flu-like illness. Mayo Clinic says it is linked to Reye\'s syndrome, which is rare but can kill.'
        ] },
        { head: 'When to get care', items: [
          'Adults: trouble breathing, pain or pressure in the chest or belly that will not go away, dizziness or confusion that will not go away, seizures, not urinating, or severe weakness.',
          'Children: breathing that is fast or hard, lips or face turning blue, ribs that pull in with every breath, no urine in 8 hours, a dry mouth or no tears, or seizures.',
          'A baby younger than 12 weeks with any fever.',
          'Anyone whose fever or cough gets better, then comes back worse.',
          'People 65 or older, pregnant women, young children, and people with asthma, diabetes or heart disease should call the doctor early. Prescription flu medicine works best when started within two days.',
          'For a medical emergency, call 911.'
        ] },
        { head: 'When they can go back out', items: [
          'When, for at least 24 hours, symptoms are getting better and there has been no fever without fever-reducing medicine.',
          'For the next 5 days, take extra care around others: masks, clean hands, fresh air and some distance.',
          'If the fever comes back or they feel worse, they stay apart again until they have gone 24 hours with no fever, without fever medicine, Mayo Clinic says.'
        ] }
      ],
      mistakes: [
        'Asking for antibiotics for the flu. They do not work on viruses.',
        'Going back to work the day a fever breaks.',
        'Sharing cups and utensils with the sick person.'
      ],
      sources: ['cdc-resp-sick', 'cdc-flu-signs', 'cdc-flu-prevent', 'cdc-flu-treat', 'ready-pandemic', 'mayo-flu'],
      checked: '2026-11-26'
    },

    'med-class': {
      intro: 'An app teaches the steps; a class puts them in your hands. CPR from a bystander can double or triple the odds a person lives through cardiac arrest.',
      parts: [
        { head: 'Why a hands-on class', items: [
          'First aid is a skill. You need proper training in the techniques.',
          'Beyond basic first aid, CPR and using an AED (automated external defibrillator) are key skills.',
          'Survival after the heart stops depends on fast CPR or a fast AED.',
          'In a winter storm or other disaster, emergency services may be delayed, the Red Cross notes. That is when your skills count most.'
        ] },
        { head: 'Where to find one', items: [
          'The American Red Cross runs classes. To register, contact your local chapter or call 1-800-RED-CROSS. That is 1-800-733-2767.',
          'Local government groups also run first aid classes. Ask your city or county.',
          'Some classes cost more than others. Read the course details before you sign up.'
        ] },
        { head: 'What to look for', items: [
          'A class with CPR, AED and first aid together.',
          'Time to practice with your own hands, not only videos.',
          'A certificate at the end. Ready.gov notes it helps protect you under Good Samaritan laws, which vary by state.',
          'Mayo Clinic says to choose an accredited course that teaches both CPR and how to use an AED.'
        ] },
        { head: 'After the class', items: [
          'Write the date your certificate runs out on your calendar.',
          'Refresh your skills regularly. They fade if you do not use them.',
          'Keep a copy of your card with your emergency plan.',
          'In an emergency, call 911 first, then start helping.',
          'If you ever doubt your skills, Mayo Clinic says trying is always better than doing nothing.'
        ] }
      ],
      mistakes: [
        'Taking an online-only course with no hands-on practice.',
        'Letting the certificate lapse.',
        'Waiting to call 911 until you have tried to help.'
      ],
      sources: ['ready-skills', 'ready-home', 'cdc-cerp', 'redcross-class', 'mayo-cpr', 'redcross-winter'],
      checked: '2026-11-26'
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
          'Call 911 only for an emergency. Use your state\'s other number for things like a minor road accident.',
          'The Red Cross says calls are most likely to go through at off-peak hours.'
        ] },
        { head: 'Plan for people who are away', items: [
          'Think about family who live elsewhere part of the year, like a student at college or someone deployed.',
          'Decide how the plan changes when they are home, and when they are away.',
          'Write the contact on your family plan, and practice it with your household.'
        ] },
        { head: 'If you cannot reach someone', items: [
          'The Red Cross says to be creative and keep trying. If one way fails, try another.',
          'Send a text or an email, check their social media pages, or even mail a letter. Their mail may be forwarded to where they are staying.',
          'Call friends and relatives, and the places where the person is known: neighbors, their employer, school or place of worship.',
          'If the person is older, has a disability or a medical condition, or has trouble with English, your local Red Cross chapter can help look for them after a disaster.'
        ] }
      ],
      mistakes: [
        'Picking someone in the same town. Their lines may be down too.',
        'Never testing it. Send a practice text so everyone knows it works.',
        'Kids who have a phone but have never sent a text.'
      ],
      sources: ['redcross-plan', 'fcc-emergency', 'ready-plan', 'redcross-reconnect'],
      checked: '2026-11-26'
    },

    'comm-card': {
      intro: 'A phone holds every number until the battery dies. A paper card in each wallet and backpack keeps the key numbers when the phone cannot.',
      parts: [
        { head: 'What goes on the card', items: [
          'Your home address and home phone.',
          'Each family member\'s name and cell number, and an email or other way to reach them.',
          'The out-of-area contact, with cell, home phone and email.',
          'Your meeting places, with a short note on how to get there.',
          'The school, daycare and each workplace, with their emergency or hotline number.',
          'Any other numbers you may need. The Red Cross notes that 911 lines can be overloaded in a disaster.'
        ] },
        { head: 'Medical and other numbers', items: [
          'The doctor and the children\'s doctor.',
          'Allergies and prescriptions for anyone who has them.',
          'The health insurance name and policy number.',
          'The vet, if you have pets.',
          'Utilities, the insurance company and other services you would need to call.',
          'Poison Control: 1-800-222-1222. The Red Cross lists it, with 911, for a poisoning or chemical emergency.'
        ] },
        { head: 'Make it', items: [
          'Ready.gov has a free fillable form for a family communication plan, and a wallet-size card.',
          'Fill it in, print it, and cut out one card for each person.',
          'Put the cards in a zip bag or tape over them so they stay dry.',
          'Keep extra copies in the go-bag and the car.',
          'The Red Cross also has a free contact card template. Print one for each person, fold it to fit a pocket or wallet, and carry it.'
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
      sources: ['ready-planform', 'ready-plan', 'redcross-plan', 'fcc-emergency', 'redcross-informed', 'redcross-chemical', 'redcross-disab'],
      checked: '2026-11-26'
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
          'Write down the local emergency office number on your plan.',
          'The Red Cross says to find out now how local officials will warn you: by local radio, TV or NOAA Weather Radio.'
        ] },
        { head: 'The FEMA app and texts', items: [
          'The FEMA app is free. It sends National Weather Service weather alerts for as many as five places.',
          'It shows open shelters and disaster recovery centers, and helps you see if your area can get FEMA help.',
          'Without the app, find shelters by texting SHELTER plus your ZIP code to 43362. Message and data rates apply.',
          'Text PREPARE to 43362 for general tips, or a word like FLOOD, FIRE or WINTER for that hazard.'
        ] },
        { head: 'Other ways warnings come', items: [
          'TV and radio carry the Emergency Alert System.',
          'NOAA Weather Radio broadcasts warnings all day and night. It works when cell service is down.',
          'For a chemical spill, a warning may come by siren, a phone call, a loudspeaker from a passing vehicle, or officials at your door. The Red Cross says to go inside and turn on a local emergency station.',
          'When you travel or move to a new place, learn its alerts and its likely disasters too.'
        ] }
      ],
      mistakes: [
        'Turning off alerts after a few loud test messages.',
        'Counting on the phone alone. Have a weather radio too.',
        'Setting the FEMA app to your old address. Update the main location when you move.'
      ],
      sources: ['ready-alerts', 'fcc-wea', 'fcc-emergency', 'fema-app', 'redcross-informed', 'redcross-chemical'],
      checked: '2026-11-26'
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
          'A hand-crank or solar radio may also charge a phone. Check its manual first.',
          'The Red Cross kit list puts a battery-powered or hand-crank radio, a NOAA Weather Radio if possible, and extra batteries among the basics.'
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
          'Most stations test the alarm every Wednesday, local time, between 10 a.m. and noon.',
          'If your radio stays quiet during the test, check the batteries, the code and where it sits.',
          'If storms are coming, the test moves to the next good-weather day.'
        ] }
      ],
      mistakes: [
        'Leaving it unplugged and on batteries all the time. Plug it in and keep batteries as backup.',
        'Not entering the SAME code, then turning it off after alarms for far-away counties.',
        'Buying the cheapest model. Those have the most reception trouble.'
      ],
      sources: ['nws-nwr', 'nws-nwr-receivers', 'nws-nwr-counties', 'nws-nwr-test', 'fcc-emergency', 'redcross-kit'],
      checked: '2026-11-26'
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
        ], note: 'FRS handhelds are limited to 2 watts or less. GMRS shares every FRS channel, so GMRS users may come through on them.' },
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
          'In an apartment or high-rise, pick a spot outside the building, and know where every exit stair is.',
          'NFPA gives examples: a neighbor\'s house, a light post, a mailbox or a stop sign. Mark the spot on your escape plan.',
          'Check that your house number can be seen from the street. If not, paint it on the curb or put up numbers, so firefighters can find you.'
        ] },
        { head: 'Know two ways out', items: [
          'Draw a simple map of the home with every door and window.',
          'Find two ways out of every room, in case one is blocked by smoke or fire.',
          'Check that windows open, screens come out fast, and any security bars open from inside.',
          'An upper floor may need an escape ladder for its second way out.',
          'Mark each smoke alarm on the map too, NFPA says.'
        ] },
        { head: 'Teach the rule', items: [
          'Once you are out, stay out. Never go back inside.',
          'Get to the spot first, then call 911, and keep everyone close until firefighters come.',
          'If someone is still inside, tell the firefighters where that person is.',
          'Teach children not to hide from firefighters.',
          'NFPA notes you may have as little as one or two minutes to get out once the smoke alarm sounds.'
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
      sources: ['usfa-escape', 'ready-fireplan', 'ready-commcard', 'ready-plan', 'nfpa-escape'],
      checked: '2026-11-26'
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
          'Follow the routes officials name on the day. Skip shortcuts, since they may be blocked.',
          'Your way out may be on foot, depending on the disaster. Know how you would walk it.',
          'Write normal and other routes on paper and keep a copy in your wallet.',
          'The Red Cross says to practice twice a year: grab your kit as you would for real, then drive your route. Plot other routes on a map in case roads are closed.',
          'Save the places and maps on phones and GPS units, and keep them on paper too.'
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
      sources: ['ready-commcard', 'ready-evacuation', 'ready-plan', 'ready-tech', 'redcross-plan'],
      checked: '2026-11-26'
    },

    'plan-write': {
      intro: 'A written plan lets anyone in the house act without you. Ready.gov has a free fillable form and a wallet card for it.',
      parts: [
        { head: 'Talk it through first', items: [
          'How will we get alerts and warnings?',
          'Where do we shelter, and what is our way out?',
          'How do we reach each other, and where do we meet?',
          'Does our kit need updating?',
          'The Red Cross adds: give each person a job, and agree on how the group will work as a team.',
          'Plan for disasters that keep you home, like a winter storm, and ones that make you leave, like a hurricane.'
        ] },
        { head: 'Think about your household', items: [
          'Ages, and who helps whom.',
          'Medicine, medical equipment, diets and disabilities.',
          'Pets or service animals, and children in school.',
          'Places you go often, and languages spoken.',
          'If someone has a disability, the Red Cross says to base the plan on the lowest level of ability they may have.',
          'Make sure at least one person has first aid and CPR training and can use an AED. Help may be slow after a big disaster.'
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
          'Practice the plan with your household, and update it when things change.',
          'The Red Cross has free plan templates in English and Spanish, with tips for filling them in.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy on a phone that may be dead or lost.',
        'Leaving out the school and work plans.',
        'Writing it once and never updating it.'
      ],
      sources: ['ready-plan', 'ready-planform', 'ready-commcard', 'nws-hurricane-prep', 'redcross-plan', 'redcross-informed', 'redcross-disab'],
      checked: '2026-11-26'
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
          'Recent tax returns. A will, trust or power of attorney.',
          'Add cash for several days and a few blank checks from each account, Mississippi State Extension suggests.',
          'List your debts with due dates and contacts. Copy the front and back of each card, with the company\'s phone number.'
        ] },
        { head: 'Health', items: [
          'Health and dental insurance cards, including Medicare, Medicaid or VA.',
          'A list of medicines, allergies, shots and medical devices, with the pharmacy.',
          'Names and numbers for doctors, dentists, pediatricians and the vet.'
        ] },
        { head: 'Photos and electronic copies', items: [
          'A phone camera works as a scanner. Take clear photos of each paper.',
          'Keep them on a password-protected drive or a secure cloud service.',
          'Take photos and video of your major belongings and valuables too. They help with insurance claims.',
          'Mississippi State Extension suggests sending a copy of the scanned files to a friend or relative you trust who lives 300 miles away or more.',
          'Make a household inventory. NC State Extension says not to forget tools in the garage, lawn furniture, the attic and food in the freezer.'
        ] },
        { head: 'Paper copies and originals', items: [
          'Keep paper copies in one of these places: a fireproof, waterproof box or safe; a safe deposit box at your bank; or a friend or relative you trust.',
          'Keep originals in a watertight safe deposit box if you can.',
          'Put a set in a waterproof container you can grab when you leave.',
          'Put papers in folders, then in sealed waterproof plastic bags, then in a sturdy box that locks. If you leave, keep the box with you, not alone in the car.',
          'Review it all at least once a year, and after a birth, death, move, marriage or divorce.'
        ] }
      ],
      mistakes: [
        'Storing papers in a basement that can flood.',
        'Sharing account or Social Security numbers with anyone who calls or texts. Government agencies do not call or text to say you owe money.',
        'Keeping the only copies in the house.',
        'Putting old papers with account or Social Security numbers in the trash. Colorado State Extension says to shred them.'
      ],
      sources: ['ready-money', 'ready-docsheet', 'ready-tech', 'fema-flood', 'msstate-gobox', 'ncsu-records', 'colostate-papers'],
      checked: '2026-11-26'
    },

    'plan-practice': {
      intro: 'People do what they have practiced. A short drill twice a year makes the plan real for everyone, kids most of all.',
      parts: [
        { head: 'Fire drill, step by step', items: [
          'Review the outside meeting spot with everyone.',
          'Test the smoke alarm so the kids know the sound.',
          'Send the kids to their rooms. One adult sounds the alarm and starts a timer.',
          'Assign adults to help young children.',
          'Everyone gets to the spot. Aim for under 2 minutes. If not, try again.',
          'Watch whether children and others wake to the alarm. If they do not, give someone the job of waking them, in drills and for real.'
        ] },
        { head: 'Make it real', items: [
          'Run drills at different times of day and night.',
          'Use different ways out, not just the front door.',
          'Practice getting low and moving to the exit, as if there were smoke.',
          'Practice feeling your way out with eyes closed.',
          'Show kids how to check a door with the back of the hand, and to use another way out if it is hot.',
          'Close doors behind you as you leave. NFPA says it slows the fire and gives you more time.'
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
          'Put the next date on the calendar before you finish.',
          'NFPA says to let children learn the drill by day before you practice at night. Telling them before bed works as well as a surprise.'
        ] },
        { head: 'If you cannot get out', items: [
          'NFPA suggests practicing how to seal yourself in if smoke blocks the way. Close the doors between you and the fire.',
          'Stuff towels or tape in the door cracks, and cover vents, to keep smoke out.',
          'Call the fire department and say exactly where you are. Wave a flashlight or a light-colored cloth at the window.',
          'If you have an escape ladder, practice setting it up from a first-floor window. Children practice only with an adult.'
        ] }
      ],
      mistakes: [
        'Only ever practicing in daylight through the front door.',
        'Not checking that windows and screens open.',
        'Skipping a drill because everyone "knows it".'
      ],
      sources: ['ready-fireplan', 'ready-homefire', 'usfa-escape', 'nws-tsunami-before', 'nfpa-escape'],
      checked: '2026-11-26'
    },

    'plan-hazards': {
      intro: 'You get ready for what is likely where you live, not for everything. A few free official lookups tell you which.',
      parts: [
        { head: 'Look up your risks', items: [
          'FEMA\'s National Risk Index shows natural hazard risk by area. Ready.gov links to it from its evacuation page.',
          'Look up your address on the FEMA Flood Map Service Center.',
          'Remember that flooding does not stop at lines drawn on a map. If it rains somewhere, it can flood there. Close to a third of flood insurance claims come from places outside high-risk areas.',
          'The Red Cross says the biggest risk factor for a landslide is a past one. Any hill or mountain can have one.'
        ] },
        { head: 'Ask your local offices', items: [
          'Your county or state emergency management site has evacuation zones, routes and shelter plans.',
          'Your state geologic survey or county may have landslide and tsunami hazard maps.',
          'If no landslide is mapped near you, that does not mean there is no hazard. Many areas are not mapped yet.'
        ] },
        { head: 'Think past the obvious', items: [
          'Hurricanes are not just a coastal problem. Rain, wind and tornadoes can reach far inland.',
          'A wildfire burn scar raises the chance of landslides for several years.',
          'Floods can follow landslides, because the same rain starts both.',
          'The Red Cross says to plan for emergencies that can happen anywhere, like home fires and floods, as well as the ones special to your region.'
        ] },
        { head: 'Set up warnings', items: [
          'Wireless Emergency Alerts come to most phones with no sign-up. Check your phone settings to make sure they are on.',
          'Sign up for your local emergency alerts.',
          'A NOAA Weather Radio gives warnings 24 hours a day, and non-weather emergencies too.'
        ] },
        { head: 'Then use it', items: [
          'For each hazard on your list, decide: do we shelter here, or do we leave?',
          'Read the National Weather Service safety page for each weather hazard you face.',
          'Learn what to do for the disasters where you travel or have just moved, too.'
        ] }
      ],
      mistakes: [
        'Skipping flood planning because you are not in a mapped flood zone.',
        'Planning only for the last disaster you saw.',
        'Leaving phone alerts turned off.'
      ],
      sources: ['landfinder', 'fema-floodmap', 'nws-safety', 'ready-evacuation', 'ready-floods', 'fema-flood', 'ready-alerts', 'redcross-plan', 'redcross-informed', 'redcross-landslide'],
      checked: '2026-11-26'
    },

    'plan-kids': {
      intro: 'If it hits on a school day, the school plan decides where your kids go. Learn it now, fit your own plan around it, and teach the kids their part.',
      parts: [
        { head: 'Ask the school or child care', items: [
          'Every school and child care center should have a written emergency plan. Ask to see it.',
          'Where do children go if they shelter inside, and where if they leave the building?',
          'How will you tell parents what is happening, and how can parents reach you?',
          'Where and how do parents pick children up after the danger passes?',
          'What drills do you run? Ask the teacher how to help your child see drills as a way to be strong, not scared.',
          'In a tsunami zone, ask where the assembly area is.',
          'Keep your contact details on file current, and tell the school right away when your address or phone changes.'
        ] },
        { head: 'Write it down', items: [
          'Ready.gov\'s family card has a line for each school and child care: name, address, emergency number, website and pick-up plan. Fill in one for each child.',
          'Put an emergency card in each child\'s backpack with emergency contacts, medicines and allergies.',
          'Ready.gov\'s kids\' card has room for the family numbers, an out-of-state contact, two meeting spots and a small map. Keep it in a backpack, notebook or wallet.',
          'If your child has a phone, put the numbers in it too.'
        ] },
        { head: 'Plan for when you cannot get there', items: [
          'Make a backup plan in case you cannot get home, such as a trusted adult nearby. Tell the kids who that adult is.',
          'If the school moves children to a safer place, do not go to them during the emergency. Wait until it is over or the school says pickup is safe.',
          'In a radiation emergency, stay where you are. Schools have plans to keep children safe inside, and going out to get them could expose you both.',
          'Plan to reunite somewhere other than home in case you cannot go back, such as a community center.'
        ] },
        { head: 'Teach the kids', items: [
          'When old enough, teach them when and how to call 911. Only call for a real emergency.',
          'The 911 operator will ask for name, phone number and address, so have them learn the home address and phone.',
          'Have them learn your cell number by heart too.',
          'Make a family password or phrase, so they do not go with a stranger.',
          'Teach them the meeting spots and the out-of-town contact\'s number. Text, don\'t talk: texts get through more easily.',
          'Children with phones get emergency alerts too. Talk with them about what an alert means.',
          'Go over the warning signs for the dangers where you live, and what to do, such as where to go in a tornado.'
        ] },
        { head: 'Practice', items: [
          'Walk them through the plan so they know what will happen.',
          'Hold a short family meeting now and then to review and practice the plan, including how you would leave the house.',
          'Let them help pack the family kit and choose what goes in. For their own bag, see the step on a kit each child builds.',
          'Family needs change over time, so update the plan regularly.'
        ] },
        { head: 'Talk with them calmly', items: [
          'Stay calm and reassure them.',
          'Keep it simple and truthful, in words they understand. Correct wrong things they hear from friends.',
          'Ask how they feel, and let them ask questions.',
          'After a disaster, get back to normal routines like family meals and school as soon as you can.',
          'Limit how much news coverage of the disaster they see.',
          'Kids can help in safe ways, but keep them out of cleanup.',
          'If a child stays very upset or it gets in the way of school or friends, talk with a doctor or school counselor.'
        ] }
      ],
      mistakes: [
        'Driving to the school during a shelter order.',
        'Never asking where the school goes if it has to leave.',
        'A backup adult the kids have never been told about.',
        'Kids who do not know their own address.'
      ],
      sources: ['ready-kids', 'ready-locations', 'ready-commcard', 'ready-kids-commplan', 'ready-kids-plan', 'cdc-kids-before', 'cdc-kids-cope', 'ready-heat', 'ready-kids-fire', 'cdc-getinside', 'ready-alerts'],
      checked: '2026-11-26'
    },

    'plan-pets': {
      intro: 'If you are told to leave, your pets should leave too. Pets left behind are likely to be lost or hurt, so a place to go, a kit and a little practice make leaving easy.',
      parts: [
        { head: 'Where they can stay', items: [
          'Many hotels and public shelters do not let pets in, other than service animals. Find a safe place before you need it.',
          'Line up choices: friends or family out of the area, pet-friendly hotels along your evacuation route, and boarding places or animal hospitals near where you would stay.',
          'Ask your local emergency management office if it offers shelter for owners with pets. Your animal shelter or animal control can also give advice.',
          'Find a vet near where you would stay, and put the number in the kit.',
          'Never leave a pet chained outside.',
          'For shelters in general, see the step on where to go if you cannot stay home.',
          'The Red Cross says to call pet-friendly hotels ahead if you may need to leave, and ask if a no-pets rule can be waived in an emergency.'
        ] },
        { head: 'A buddy for when you are away', items: [
          'Set up a buddy system: a trusted neighbor, friend or relative who can care for or move your pets if you cannot get home.',
          'Show them where the pets hide, and where the carrier, leash and kit are.',
          'Keep a leash and carrier near the door so anyone can grab them.',
          'If you have no car, make plans with neighbors, family or friends, or ask your local government about rides in a disaster.'
        ] },
        { head: 'ID, microchip and records', items: [
          'A microchip is one of the best ways to get a lost pet back. Register it with the chip company and keep your phone and address current, with an out-of-area contact.',
          'Keep a collar with an up-to-date ID tag on each pet, plus a backup collar, leash and tag.',
          'Write the pet\'s name, your name and your phone numbers on each carrier.',
          'Keep copies of vet records: rabies certificate, shots, medical history, and prescriptions.',
          'Add proof of ownership or adoption, a short description (breed, sex, color, weight), the chip number and company, and recent photos, including one of you with your pet.',
          'Keep the papers in a waterproof container and saved electronically.'
        ] },
        { head: 'The kit', items: [
          'Two kits: a larger one for staying home and a lighter one for leaving. Check them often so food and medicine stay fresh.',
          'Food in an airtight, waterproof container, water, and bowls that do not spill. Ready.gov says several days. The CDC list says two weeks of each for every animal.',
          'Extra medicine in a waterproof container, with written instructions, plus a month of flea, tick and heartworm medicine.',
          'A pet first aid kit. Ask your vet what to put in it.',
          'A carrier for each pet with a blanket or towel, and a harness or leash.',
          'Litter and box or bags, paper towels, trash bags and a disinfectant for accidents.',
          'A familiar toy, treats or bed to lower stress, a manual can opener and feeding notes.'
        ] },
        { head: 'Practice', items: [
          'Leave the carrier out and open where your pet likes to be. Put treats and a favorite blanket inside.',
          'Take your pet on car rides, so the trip is not new on the day.',
          'Note where your pets hide, and practice catching them. A cat can go in a pillowcase or sturdy box if the carrier is not at hand.',
          'Have the whole family practice leaving with the pets, so everyone knows what to take and where to meet.',
          'At the first warning or sign of a storm, bring pets inside.',
          'Be ready to house your pets apart, even if they usually live together.',
          'A rescue sticker on a front window tells rescuers how many pets, and what kinds, are inside, with your vet\'s number. If you leave with them, write "EVACUATED" across it.'
        ] },
        { head: 'In a shelter and after', items: [
          'Owners of dogs, cats and ferrets should bring proof of rabies shots to a shelter that takes pets.',
          'Keep pets in a carrier or on a leash. Scared pets may bite or scratch, even gentle ones.',
          'Wash your hands after touching pets, their food or their waste. Do not let pets play in or drink flood water.',
          'After a disaster, smells and landmarks change and pets get lost. Keep them leashed outside, and check the home for sharp objects, spilled chemicals and bare wires.',
          'If a pet goes missing, call the microchip company and check local shelters and animal control.',
          'For horses, goats, pigs and other large animals, see the step on livestock and horses.',
          'The Red Cross says its shelters try to take household pets, though they may be housed in a separate place run by animal groups. Ready.gov says many shelters do not take pets, so keep another place lined up.'
        ] }
      ],
      mistakes: [
        'Leaving pets behind "just for a day".',
        'A carrier the cat has never been inside.',
        'Old phone numbers on the microchip.',
        'No buddy who can reach the pets when you are at work.'
      ],
      sources: ['ready-pets', 'ready-petsheet', 'cdc-pets-em', 'cdc-pet-kit', 'cdc-pet-evac', 'redcross-pets', 'redcross-shelter'],
      checked: '2026-11-26'
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
          'Cash in small bills. Card readers may be down.',
          'A small card listing your medicines and doses, the Red Cross suggests, plus proof of address and a copy of your deed or lease.',
          'An extra set of car and house keys.'
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
        ] },
        { head: 'How much to pack', items: [
          'The list above says at least a day of water and food. The Red Cross suggests a go-kit with 3 days of supplies you can carry, and a home kit with 2 weeks.',
          'Water at one gallon per person per day, the Red Cross says, for both kits.',
          'For medicine, the Red Cross kit list says a 7-day supply. Its storm pages say to keep a 1-month supply on hand, in a child-proof container.',
          'Pack backup batteries and chargers for anything you rely on, like a phone, a breathing machine or a power wheelchair.'
        ] }
      ],
      mistakes: [
        'Packing more than you can carry for an hour.',
        'Letting the medicine in it run past its date.',
        'Keeping the only copy of your papers in the bag.'
      ],
      sources: ['ready-kit', 'redcross-kit', 'redcross-hurricane'],
      checked: '2026-11-26'
    },

    'hz-tornado': {
      intro: 'A tornado warning gives you minutes. If you already know the spot, nobody has to think.',
      parts: [
        { head: 'Pick the spot', items: [
          'Best: a safe room built to FEMA criteria, or an ICC 500 storm shelter.',
          'Next best: a basement, or a small windowless room on the lowest floor, in the middle of a sturdy building.',
          'In a mobile home, or a home without a basement, pick a nearby sturdy building you can reach quickly.',
          'Sheds, mobile homes and tents are not safe.',
          'The Red Cross says to find a shelter spot in every place you spend a lot of time, not just at home.'
        ] },
        { head: 'Watch or warning', cols: ['Alert', 'What it means', 'What you do'], rows: [
          ['Tornado watch', 'Tornadoes are possible', 'Review the plan, check supplies and the safe spot, be ready to move'],
          ['Tornado warning', 'A tornado is seen or shown on radar', 'Go to your spot now'],
          ['Tornado emergency', 'A violent tornado is on the ground', 'Take shelter in the safest place right away']
        ] },
        { head: 'In the spot', items: [
          'Keep clear of outside walls, doors and windows.',
          'Use your arms to cover your head and neck.',
          'Put furniture or blankets around or over you.',
          'Bring pets if there is time.'
        ] },
        { head: 'Get the warning', items: [
          'Learn your community\'s warnings. If you have sirens, know the tone.',
          'Keep a NOAA Weather Radio, and make sure phone alerts are on.',
          'Signs to know: a rotating funnel cloud, a debris cloud heading toward you, or a loud roar that sounds like a freight train.',
          'You may not always get a warning, the Red Cross says. If you feel you are in danger, take shelter.'
        ] },
        { head: 'Practice', items: [
          'Have a family drill so everyone goes to the spot when a warning comes.',
          'At work or school, follow the drill. Avoid large open rooms like gyms and cafeterias.'
        ] },
        { head: 'After it passes', items: [
          'Stay in your shelter until the warning is over.',
          'Do not go into damaged buildings. If yours is damaged, leave with care. Leave right away if you smell gas.',
          'If you are trapped, cover your mouth with a cloth. Instead of shouting, text, blow a whistle, or bang on a wall or pipe.',
          'Do not use matches or lighters inside. Use flashlights.',
          'Clean up in long pants, work gloves and shoes with thick soles. Keep children out of cleanup.',
          'Unless they are in danger, do not move someone who has a neck or back injury. Call 911.'
        ] }
      ],
      mistakes: [
        'Hiding under a bridge or overpass. It gives little protection.',
        'Waiting to see the tornado before you move.',
        'Staying in a mobile home.',
        'Shouting for help when trapped, instead of texting, banging on a pipe or using a whistle.'
      ],
      sources: ['ready-tornadoes', 'nws-tornado-alerts', 'nws-tornado-during', 'nws-tornado-prep', 'redcross-tornado'],
      checked: '2026-11-26'
    },

    'hz-hurricane': {
      intro: 'Water, not wind, causes most hurricane deaths. Know your zone, decide in advance, leave early when it is called, and stay careful after the storm passes.',
      parts: [
        { head: 'Know the season and the alerts', cols: ['Alert', 'What it means'], rows: [
          ['Tropical storm watch', 'Within 48 hours, 39 to 73 mph winds are possible.'],
          ['Hurricane watch', 'Winds of 74 mph or more are possible. Issued 48 hours before tropical storm winds are expected, while you can still prepare.'],
          ['Tropical storm warning', 'Within 36 hours, 39 to 73 mph winds are expected.'],
          ['Hurricane warning', 'Winds of 74 mph or more are expected. Issued 36 hours ahead. Finish getting ready, and leave right away if told to.'],
          ['Storm surge warning', 'Rising water moving in from the shore is expected, generally within 36 hours. Check for evacuation orders.'],
          ['Extreme wind warning', 'Winds of 115 mph or more are expected within an hour. Take shelter in the inside part of a sturdy building now.']
        ], note: 'The Atlantic and Central Pacific seasons run June 1 to November 30, and the Eastern Pacific May 15 to November 30. Most hurricane deaths come from storm surge. Rain flooding comes second, and it can reach hundreds of miles inland and last for days.' },
        { head: 'Before the season', items: [
          'Find out if you live in an evacuation zone. Ask your local emergency office or check its website.',
          'Pick where you would go, and learn the routes there. For choices, see the step on where to go if you cannot stay home.',
          'Review your insurance. Homeowners insurance does not cover flood, and a flood policy usually takes up to 30 days to start.',
          'Make copies of ID and policies and keep them in a password-protected place.',
          'If anyone in the house is older or has a disability and cannot leave fast, ask your local officials for advice now.',
          'Write emergency numbers on the fridge and put them in your phone.',
          'Check the battery in your carbon monoxide detector.'
        ] },
        { head: 'Get the home ready', items: [
          'Clear drains and gutters.',
          'Bring in outside furniture, bikes, grills, propane tanks and building materials, or put them under cover. Loose things become flying debris.',
          'Consider hurricane shutters, or plan to nail plywood to the outside window frames.',
          'Keep at least half a tank of gas, and a full tank when a storm is coming. Gas stations may be closed during emergencies.',
          'Before the storm, fill clean containers with drinking water. Fill sinks and tubs with water for washing.',
          'Anchor anything that is unsafe to bring inside, like a propane tank or gas grill. The Red Cross says to trim or take down trees near enough to hit the house.',
          'Keep plastic sheeting and sandbags on hand. Think about raising the furnace, water heater and electric panel above flood level.'
        ] },
        { head: 'When a storm comes', items: [
          'If officials tell your zone to leave, go right away. Even sturdy houses may not hold up.',
          'If you leave, take only what you need: phone, chargers, medicine, ID and cash. If you have time, unplug appliances. Turn off gas, power and water if officials tell you to.',
          'Follow the roads officials name, even with traffic. Other roads may be blocked or flooded.',
          'If you stay for wind, use a storm shelter or an inside room with no windows, or a closet.',
          'Stay inside until you hear an official all-clear. A calm can come in the middle of the storm, and the weather can turn bad again fast.',
          'If water traps you, go to the highest floor. Do not go into a closed attic.',
          'Do not drive, walk or swim through flood water.'
        ] },
        { head: 'After the storm: outside', items: [
          'Keep listening to a weather radio or local news. If you left, go back only when officials say it is safe. For going back in, see the step on going back in after a flood or storm.',
          'Drive only if you must. Avoid flooded roads and washed-out bridges, and watch for fallen objects, downed wires and weak roads.',
          'Stay out of flood water. It can carry germs, chemicals, waste and debris, and power lines can charge it. If you must be near it, wear a life jacket, and wash your hands after.',
          'Stay clear of fallen power lines, including ones hanging overhead. Report them to the electric company.',
          'Stay out of a building if you smell gas, water is still around it, or officials have not called it safe. Leave if you hear shifting or odd noises.',
          'Save calls for emergencies. Text family instead.',
          'Heart attacks are a leading cause of death after a hurricane, the Red Cross says. Pace yourself, and work with a partner on heavy debris.'
        ] },
        { head: 'After the storm: power, heat and people', items: [
          'After storms, carbon monoxide is a leading cause of death. Never run a generator, grill, camp stove or pressure washer inside the home, garage or basement. Keep it outdoors, at least 20 feet from doors, windows and vents.',
          'Any time something burns fuel, use a carbon monoxide detector that runs on batteries or has a battery backup. If it sounds, get out and call 911.',
          'Use flashlights, not candles. Turn the flashlight on before you walk into a closed-up building, since a spark could light leaking gas.',
          'Do not touch wet electrical equipment. Do not touch any while standing in water. Turn off power at the main breaker if you can do it safely.',
          'If the power is out in hot weather, drink plenty, take cool showers, and go to a cooling center or a place with power. A fan alone will not keep you safe. Signs of heat stroke, like a temperature above 103 degrees or hot, red, dry skin, mean call 911.',
          'Check on family, older adults and neighbors.',
          'Photograph the damage and call your insurance company. Keep children out of cleanup. For food, see the step on which food is safe after a flood.'
        ] }
      ],
      mistakes: [
        'Waiting to see how bad it gets before leaving.',
        'Thinking you are safe because you live inland.',
        'Climbing into a closed attic to escape rising water.',
        'Running a generator in the garage with the door open.'
      ],
      sources: ['ready-hurricanes', 'nws-hurricane', 'nws-hurricane-prep', 'nws-hurr-ww', 'nws-hurr-after', 'cdc-hurr-prep', 'cdc-hurr-after', 'cdc-co', 'ready-heat', 'ready-evacuation', 'ready-floods', 'redcross-hurricane'],
      checked: '2026-11-26'
    },

    'hz-flood': {
      intro: 'Floods happen more often than any other disaster in the country. More than half of flood drownings happen in vehicles, so the main rule is simple: turn around.',
      parts: [
        { head: 'Know your risk', items: [
          'Look up your address on the FEMA Flood Map Service Center.',
          'Know where water collects on the roads you drive most.',
          'Know the fastest way to higher ground that does not cross low spots.',
          'Flash floods can come with little or no warning. The Red Cross says to pick a place on higher ground you can reach quickly.',
          'Know the kinds of flooding near you: flash floods, river floods, storm surge, burn scars, ice jams, and dam or levee breaks.'
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
        ] },
        { head: 'After the water goes down', items: [
          'Go home only after officials say it is safe. Stay away from downed power lines.',
          'Clean up in boots, long pants, work gloves, eye protection and an N95 mask. Work with a partner and take breaks.',
          'Dry the home and everything in it within 24 to 48 hours if you can. If you cannot, the Red Cross says to assume mold is growing.',
          'Food that got wet or warm goes in the trash. Ask the health department whether the tap water is safe to drink.'
        ] }
      ],
      mistakes: [
        'Driving into water you cannot see the bottom of.',
        'Buying flood insurance when the storm is already coming.',
        'Going into a closed attic. You can be trapped.',
        'Waiting days to dry out a flooded home. After 24 to 48 hours, expect mold.'
      ],
      sources: ['ready-floods', 'nws-turnaround', 'nws-flood-before', 'fema-floodmap', 'fema-flood', 'redcross-flood'],
      checked: '2026-11-26'
    },

    'hz-wildfire': {
      intro: 'The first 5 feet around your home matter most. Work out from the walls, closest first, have the go-bag ready, and leave early.',
      parts: [
        { head: 'The zones around your home', cols: ['Zone', 'Distance', 'What to do'], rows: [
          ['Immediate', '0 to 5 feet', 'Clear roof and gutters of leaves and needles. Fix loose shingles. Move mulch, plants, leaves and firewood away from the walls.'],
          ['Intermediate', '5 to 30 feet', 'Mow grass to 4 inches. Clear plants from beneath trees. Cut branches off trees up to 6 to 10 feet above the ground.'],
          ['Extended', '30 to 100 feet', 'Clear ground litter and dead plants. Remove dead trees. Clear plants from around sheds.']
        ], note: 'The first 5 feet is the most important zone, because embers are most likely to land there. Your local fire department may have stricter rules. NFPA says embers can blow more than a mile, and most homes that burn are lit by embers and small flames.' },
        { head: 'More for the first 5 feet', items: [
          'Use gravel, pavers or concrete there instead of bark or wood-chip mulch.',
          'Keep the space under decks, porches and stairs free of plants and things that burn.',
          'Do not keep firewood or lumber there. Keep wood piles farther out, with 10 feet cleared around them.',
          'Move trash cans and recycling bins out of this zone, and keep less that burns on the deck.',
          'Keep tree branches 10 feet from the chimney.',
          'These tips come from California\'s state fire agency. Ask your local fire department what applies where you live.',
          'NFPA says to cover vents in the eaves and attic with 1/8-inch metal mesh to keep embers out, and to screen or box in the space under decks.'
        ] },
        { head: 'Get ready and get set', items: [
          'Ready, Set, Go: get ready by clearing the zones, get set with a plan and go-bags, and go early.',
          'Use fire-resistant materials when you build or repair. Have an outside hose that reaches every part of the property.',
          'Learn your evacuation zone and routes, and where you will go. Plan for work, school and child care too.',
          'Practice leaving with the whole family and the pets.',
          'In fire season, keep a go-bag packed for each person, the phone charged, at least half a tank of gas, and shoes by the bed.',
          'Store N95 masks if you can.',
          'Keep copies of ID and insurance in a password-protected place.'
        ] },
        { head: 'Go early, and close up if there is time', items: [
          'Leave right away when officials say to. If you feel at risk, do not wait for an order.',
          'Inside: close every door and window, but don\'t lock them. Remove curtains that can burn, and pull things that can burn into the center of each room. For wildfire, CAL FIRE says to shut off the air conditioning and the gas at the meter. Leave lights on.',
          'Outside: bring in patio furniture, doormats and trash bins. Shut off propane tanks and move grills away from the house.',
          'Hook hoses to the outside taps for firefighters, but do not leave sprinklers or water running. It lowers water pressure.',
          'Park the car facing out, loaded, with the windows shut.',
          'Wear long pants, long sleeves and sturdy shoes, in cotton if you can.'
        ] },
        { head: 'If you are trapped', items: [
          'Call 911 and tell them where you are. Help may be slow, or may not reach you. Switch on lights so rescuers can find you.',
          'In a car: park away from plants. Close the vents and windows. Lie on the floor and cover yourself with a jacket or wool blanket.',
          'On foot: get to open ground, such as a ditch or a flat spot. Lie down on your stomach and cover your body.',
          'At home: gather everyone. Fill the tubs and sinks with cold water. Close the windows and doors, but don\'t lock them. Stay away from windows and outside walls.',
          'Stay as calm as you can.'
        ] },
        { head: 'Smoke, and coming home', items: [
          'When it is smoky, stay inside with doors and windows shut. Use an N95 mask if you must go out.',
          'Set the air system to recirculate and close the outside air intake.',
          'Use a portable air cleaner in a closed-off room. For how to set it up, see the step on a clean-air room for wildfire smoke.',
          'Do not go home until officials say it is safe. Hot ash, embers and hidden hot spots can burn you or start a new fire.',
          'Photograph the damage, make a list, and call your insurance company.',
          'Watch for pits of ash in the ground. Hot embers can hide under them. Mark them and warn others, the Red Cross says.',
          'Wear gloves, goggles, an N95, long pants and long sleeves to clean up ash. Kids, pregnant women, and anyone with asthma or a heart or lung condition should not breathe ash dust.'
        ] }
      ],
      mistakes: [
        'Stacking firewood against the house.',
        'Waiting for the last minute to leave.',
        'Leaving sprinklers running when you go. It drains the water firefighters need.',
        'Going home before officials say it is safe. The ground can hold hidden hot spots.'
      ],
      sources: ['ready-wildfires', 'usfa-wildfire', 'usfa-zones', 'calfire-space', 'calfire-rsg', 'calfire-go', 'nfpa-wildfire', 'redcross-wildfire'],
      checked: '2026-11-26'
    },

    'hz-earthquake': {
      intro: 'Most earthquake injuries come from things that fall. The work is done before the shaking: fasten what can fall, and practice the first few seconds.',
      parts: [
        { head: 'Hunt for hazards, room by room', items: [
          'Walk through each room with your family and imagine it shaking. Anything that could fall, break or move is a hazard.',
          'Look at tall bookcases and shelves. Would the case tip over, or would things fly off?',
          'Look where people sit and sleep. Heavy mirrors and pictures should not hang over beds or couches. Move beds away from windows.',
          'Replace glass bottles near the tub and in the medicine cabinet with plastic ones.'
        ] },
        { head: 'Fasten what can fall', items: [
          'Anchor bookcases and other top-heavy furniture into the wall studs, not just the drywall. Use flexible straps and lag screws.',
          'Keep heavy and breakable things on low shelves.',
          'Hang pictures and mirrors on closed hooks.',
          'Put latches on kitchen cabinets above waist level so the doors stay shut.',
          'Strap down the TV, computer and microwave with flexible straps.',
          'The Red Cross adds the refrigerator and the TV to the list of things to secure. Straps, hooks and latches are made for this.'
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
          'If you hear hissing or smell gas, open a window. Get everyone outside. Once you are at a neighbor\'s home, call the gas company from there.',
          'Once the gas is off, only a professional can turn it back on.'
        ] },
        { head: 'When it shakes: Drop, Cover, Hold On', items: [
          'Drop onto your hands and knees where you are.',
          'Use one arm to cover your head and neck. If a sturdy table is close, crawl under it. If not, get beside an inside wall, away from windows.',
          'Hold on until the shaking stops. Under a table, hold it with one hand and move with it.',
          'In bed: roll onto your stomach. Use a pillow to shield your head and neck.',
          'Stay inside. Do not run out, and do not stand in a doorway.',
          'In a walker or wheelchair: lock the wheels, bend over, cover your head and neck, and hold on.',
          'The Red Cross suggests tying a small bag to each bed with sturdy shoes, glasses, a whistle, a flashlight and a dust mask.'
        ] },
        { head: 'After the shaking', items: [
          'Expect aftershocks. Drop, Cover, Hold On again each time.',
          'If the building is damaged, go outside and move away from it.',
          'If you are trapped, save your voice. Text, use a whistle, or bang on a wall or pipe.',
          'Near the coast, head inland or to high ground as soon as the shaking stops.',
          'For a medical emergency, call 911. Use texts for everything else; they can work better than calls.',
          'The Red Cross says to wait a minute before you get up, then put on sturdy shoes. Broken glass is one of the most common earthquake injuries.',
          'Do not use matches, lighters or light switches until you know there is no gas leak. A spark can set off the gas.'
        ] }
      ],
      mistakes: [
        'Running outside or standing in a doorway while it shakes.',
        'Screwing straps into drywall instead of the studs.',
        'Turning the gas back on yourself.',
        'Thinking home insurance covers it. A standard policy does not cover earthquake damage.'
      ],
      sources: ['ready-earthquakes', 'fema-eqhunt', 'ready-skills', 'rc-earthquake'],
      checked: '2026-11-26'
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
          'Refill heating fuel before you run low. After a storm, deliveries may take days to reach you.',
          'Keep furnace and heater vents outside clear of leaves and drifted snow.',
          'Never heat the house with a gas stove or oven. Run a generator only outside, at least 20 feet from windows, doors and an attached garage.'
        ] },
        { head: 'The vehicle kit', items: [
          'Blankets or sleeping bags, and a dry change of clothes.',
          'Flashlight and batteries, a phone charger and a first aid kit.',
          'High-calorie food that keeps, and water. Waterproof matches and a small can, to melt snow to drink.',
          'A shovel, a scraper and brush, sand or cat litter for traction, a tow rope and jumper cables.',
          'A large empty can and tissues for an emergency toilet.',
          'A compass and road maps, so you do not depend on the phone.',
          'Keep the tank near full.'
        ] },
        { head: 'If you must drive, or you get stuck', items: [
          'Stay off the roads if you can. If you go, tell someone which route you will take and when you plan to arrive.',
          'Stuck: stay with the vehicle. In wind-driven snow you can lose your way fast.',
          'Run the engine about 10 minutes each hour for heat. Crack a window and clear snow from the exhaust pipe first.',
          'Be easy to find: dome light on at night while the engine runs, a bright cloth on the antenna or door, and the hood up once the snow stops.',
          'Move your arms, legs, fingers and toes now and then. Do not wear yourself out pushing or digging.',
          'The Red Cross says to leave the vehicle only if help is in sight, within about 100 yards.',
          'Huddle together. Wrap up in floor mats, maps or newspapers to hold in body heat. If more than one of you is there, take turns sleeping.'
        ] },
        { head: 'If the heat goes out', items: [
          'Know where you will go if the house gets too cold: a public library, a friend\'s house or a warming center (Red Cross).',
          'Keep anything that can burn 3 feet or more away from space heaters and fireplaces. Use flashlights, not candles.',
          'If the heat may stay off for a long time in freezing weather, Purdue Extension says to shut the main water valve, or the well pump if it is inside, and open every faucet until the lines drain.',
          'Drain the toilet tanks too, and the drains and hoses on the washer and dishwasher. Purdue says never to put antifreeze in those appliances.'
        ] }
      ],
      mistakes: [
        'Thawing a pipe with a torch or open flame.',
        'Leaving the vehicle to walk for help in a storm.',
        'Running the engine with the exhaust pipe packed with snow.',
        'Heating the house with the oven.'
      ],
      sources: ['ready-winter', 'nws-winter-before', 'nws-winter-during', 'nws-cold-pipes', 'ready-skills', 'redcross-winter', 'purdue-plumbing'],
      checked: '2026-11-26'
    },

    'hz-chemical': {
      intro: 'If a chemical is released nearby, officials may tell you to stay inside. A room picked and supplies cut ahead of time make sealing up quick.',
      parts: [
        { head: 'Pick the room', items: [
          'An inside room above ground, with as few windows and doors as you can.',
          'Big enough for everyone and your pets.',
          'Keep plastic sheeting, duct tape, scissors and a radio there.',
          'The Red Cross explains why it should be above ground: some chemicals are heavier than air and can seep into a basement even with the windows shut.'
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
          'If officials say to leave instead, leave right away.',
          'Use the phone only for a life-threatening emergency. Call 911, or Poison Control at 1-800-222-1222.',
          'If someone seems hurt by a chemical, check that you are safe yourself before you help.'
        ] },
        { head: 'Prevent accidents at home', items: [
          'Most chemical accidents happen at home, the Red Cross says, and most can be prevented.',
          'Never mix household products. Ammonia and bleach together make a toxic gas.',
          'Keep products closed in their first containers. Buy only what you will use.',
          'Keep medicines and cleaners out of sight and reach of children.',
          'If a child swallows something, take the container to the phone and call Poison Control or 911. Do not give anything by mouth unless they tell you to.'
        ] }
      ],
      mistakes: [
        'Picking a basement. Ready.gov says to use a room above ground.',
        'Leaving the air running while you seal the room.',
        'Going out to check before officials give the all-clear.',
        'Mixing bleach with ammonia or other cleaners to make them stronger.'
      ],
      sources: ['ready-chemical', 'ready-shelter', 'redcross-chemical', 'redcross-terror'],
      checked: '2026-11-26'
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
          'Officials will say when and how to leave, and where to go to be checked.',
          'Call your family contact, then use the phone only for a life-threatening emergency, the Red Cross says.',
          'Take turns listening to the news with the other adults. Keep children from watching the same upsetting footage again and again; young children may think it is happening again.'
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
      sources: ['ready-radiation', 'cdc-getinside', 'cdc-stayinside', 'cdc-staytuned', 'redcross-terror'],
      checked: '2026-11-26'
    },

    'att-clean': {
      intro: 'If radioactive dust or germs get on you, the fastest help is to get them off. These are the CDC and Ready.gov steps.',
      parts: [
        { head: 'Get ready now', items: [
          'Pack a spare change of clothes for each person in your kit.',
          'Add a trash bag for clothes that need to come off.',
          'The Red Cross notes you can be exposed to a chemical even when you cannot see or smell anything unusual.'
        ] },
        { head: 'Take off the outer layer', items: [
          'Taking off your outer layer of clothes can remove up to 90 percent of radioactive material.',
          'Take it off slowly, so dust does not shake loose and get breathed in.',
          'Try to keep your hands away from your eyes, nose and mouth.',
          'Put the clothes in a plastic bag or other sealed container. Set it far from people and pets.',
          'After a germ exposure, bag your clothes and personal items, and follow official instructions for getting rid of them.'
        ] },
        { head: 'If you can shower', items: [
          'Take a warm shower and wash gently with lots of soap.',
          'Be gentle with your skin: no scratching, scrubbing or scalding.',
          'Wash your hair with shampoo or soap.',
          'Keep cuts and scrapes covered so nothing gets in.',
          'Put on clean clothes.'
        ] },
        { head: 'If you cannot shower', items: [
          'At a sink, wash your hands, face and any skin that was not covered, with soap and plenty of water.',
          'No sink? Wipe with a moist wipe, a damp paper towel or a clean wet cloth.',
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
          'After a germ exposure, contact the authorities and get medical help. For a medical emergency, call 911.',
          'If you find someone hurt by a chemical, make sure you are not in danger yourself before you help, the Red Cross says.',
          'For a swallowed chemical, call Poison Control at 1-800-222-1222, or 911. Give nothing by mouth until they tell you to.'
        ] }
      ],
      mistakes: [
        'Pulling a shirt off fast and shaking the dust into the air.',
        'Scrubbing hard, or using very hot water.',
        'Using cleaning wipes or hand sanitizer instead of soap and water.'
      ],
      sources: ['cdc-decon', 'ready-radiation', 'ready-bio', 'redcross-chemical'],
      checked: '2026-11-26'
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
          'Keep enough supplies for several days or weeks at home: cleaning supplies, food that keeps, prescriptions and water.',
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
          'Wash up with soap and water, then change into clean clothes.',
          'Contact the authorities and get medical help. You may be asked to stay away from others or to quarantine.',
          'If your symptoms match what officials describe and you are in a group at risk, get emergency care right away.'
        ] },
        { head: 'During an outbreak', items: [
          'Avoid crowds. When you are sick, stay home unless you need to get care.',
          'Wash your hands often for 20 seconds or more, using soap and water.',
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
          'Look under Security in the account settings. The name may be multifactor authentication, two-step verification or two-factor authentication.',
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
          'Keep at least half a tank of gas. Pumps may not work.',
          'Mississippi State Extension suggests cash for several days of living costs, and a few blank checks from each account.'
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
          'When a network comes back, try a text first. Texts get through more easily than calls.',
          'If you cannot reach someone, the Red Cross suggests another way: an email, a letter, or a call to friends, neighbors or their workplace.',
          'Try calling at off-peak hours, when calls are most likely to go through.'
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
      sources: ['ready-cyber', 'ready-plan', 'ready-power', 'ready-money', 'ready-alerts', 'ready-commuter', 'msstate-gobox', 'redcross-reconnect'],
      checked: '2026-11-26'
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
          'Know a place in each direction to go.',
          'The Red Cross says to practice leaving twice a year: grab your kit as if it were real, and drive the route.'
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
          'Wear sturdy shoes, long pants, long sleeves and a hat.',
          'Leave the natural gas on unless officials say to turn it off. Only a professional can turn it back on, and after a disaster that can take weeks, the Red Cross says.'
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
          'Run a generator only outside, away from the house.',
          'Go back only when you have the supplies you will need, the Red Cross says.'
        ] }
      ],
      mistakes: [
        'Letting the tank run low.',
        'Leaving late and getting caught by the weather.',
        'Never timing it, so you find out on the day.'
      ],
      sources: ['ready-evacuation', 'redcross-plan', 'redcross-terror', 'redcross-hurricane'],
      checked: '2026-11-26'
    },

    'hz-storm': {
      intro: 'Most storm damage around a home comes from wind throwing loose things and dropping limbs. An hour in the yard and a room picked ahead of time take care of most of it.',
      parts: [
        { head: 'Before storm season', items: [
          'Trim branches away from the house and power lines. Cut down trees that could fall on the house.',
          'Fix loose gutters and shutters.',
          'Make a list of what is outside that must be tied down or put away.',
          'Charge phones, battery packs and the weather radio.',
          'Surge protectors help guard electronics from lightning.',
          'Keep gutters, drains and downspouts clear.',
          'Tie down or secure things that are unsafe to bring inside, like a gas grill or a propane tank (Red Cross).'
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
          'Someone struck by lightning carries no charge and is safe to touch. Call 911 and start CPR if needed.',
          'The Red Cross says taking shelter under a tree is the leading cause of lightning deaths.'
        ] },
        { head: 'On the road', items: [
          'Avoid driving through severe storms. Pull over or wait.',
          'In high wind, hold the wheel with both hands and slow down. Stay clear of trucks, buses and trailers.',
          'Never drive through water on the road. Moving water just six inches deep can knock you down, and a foot of it can carry off a vehicle.',
          'Park away from trees and power lines.'
        ] },
        { head: 'After the storm', items: [
          'Stay inside until the storm has passed and alerts say it is safe to go out.',
          'Watch for fallen trees and power lines. A line on the ground may be live. Stay away and report it.',
          'Use flashlights, not candles. Run generators, grills and camp stoves only outside, away from windows.',
          'Food that got warm or wet goes in the trash. If you are unsure, throw it out.'
        ] }
      ],
      mistakes: [
        'Going back out as soon as the rain lightens.',
        'Sheltering under a tree or on a porch.',
        'Waiting for the warning to start tying things down.',
        'Driving into a flooded road.'
      ],
      sources: ['ready-thunderstorms', 'nws-wind-before', 'nws-wind-during', 'nws-lightning', 'nws-severe-rules', 'rc-thunderstorm'],
      checked: '2026-11-26'
    },

    'hz-drought': {
      intro: 'The best way to get ready for a drought is to waste less water every day. Most of the savings come from leaks and the yard.',
      parts: [
        { head: 'Find the leaks', items: [
          'Read your water meter, use no water for two hours, then read it again. If it moved, you have a leak.',
          'Add a few drops of food coloring to the tank of the toilet. If color shows in the bowl within 10 minutes, the toilet leaks. Flush right after so it does not stain.',
          'A worn toilet flapper can leak thousands of gallons a year. Replace it at least every five years.',
          'A faucet dripping once a second wastes more than 3,000 gallons a year. A new washer often fixes it.',
          'Check the garden hose where it meets the spigot. A new hose washer stops most drips.'
        ] },
        { head: 'Save water inside', items: [
          'Take short showers instead of baths.',
          'Do not let the water run while you brush your teeth or shave.',
          'Run the washer and dishwasher only when full.',
          'Catch the cold water while you wait for hot, and use it on plants.',
          'Wash vegetables in a pan of water, not under the tap. Thaw food in the fridge, not under running water.',
          'Keep a bucket in the shower to catch water for plants. The American Red Cross also suggests turning the water off while you lather.',
          'Washing dishes by hand? Fill one basin with soapy water and one with rinse water, instead of running the tap.'
        ] },
        { head: 'Save water outside', items: [
          'Water early in the morning or in the evening, when it is cool.',
          'Never leave a hose running. In a few hours it can send out 600 gallons or more.',
          'Before you water a lawn, check the soil. If it is moist, or the grass springs back, skip it.',
          'Mulch around trees and plants to hold water in the soil.',
          'Drip watering and native, drought-tolerant plants need less water.',
          'In a bad drought, let the lawn go and save water for trees and large shrubs.',
          'The Red Cross says most lawns need water only every 5 to 7 days in summer. In winter, every 10 to 14 days is enough. A heavy rain covers up to two weeks.'
        ] },
        { head: 'Rules, wells and rain', items: [
          'Follow your state and local water limits. Your water utility or local government posts them.',
          'On a well, if the pump turns on while no water is running, you have a leak.',
          'Catch rainwater where it is practical and allowed, for the garden and animals.',
          'Never pour water down the drain if it could water a plant or garden.',
          'The Red Cross notes that water limits apply to you even if your water comes from your own well.'
        ] }
      ],
      mistakes: [
        'Leaving a hose or sprinkler running while you do something else.',
        'Ignoring a toilet that runs or refills on its own.',
        'Watering in the heat of the day.'
      ],
      sources: ['ready-drought', 'epa-leaks', 'umn-garden-water', 'redcross-drought'],
      checked: '2026-11-26'
    },

    'hz-landslide': {
      intro: 'Landslides often follow heavy rain or fire, and many give signs first. Learn them and keep a way out ready.',
      parts: [
        { head: 'Look around your land', items: [
          'See where gutters, the driveway and storm water run. Water poured onto a slope weakens it.',
          'Keep native plants on slopes. Their roots help hold the soil.',
          'Do not dump yard waste on a slope. It adds weight and smothers roots.',
          'Ask your county planning office about landslide maps and local geologists.',
          'The Red Cross says a past landslide is the top risk factor for a new one. Even a few inches of movement can crack a foundation and break water and sewer lines.',
          'Do not cut into steep slopes. Ask a professional to survey your land if you are unsure.'
        ] },
        { head: 'Slow signs, around the house', items: [
          'Doors or windows that stick for the first time.',
          'New cracks in plaster, tile, brick or the foundation.',
          'Walls, walks or stairs pulling away from the house.',
          'Widening cracks in the ground, street or driveway.',
          'Fences, walls, poles or trees that tilt. Bulging ground at the base of a slope.',
          'Water coming up from the ground in new places.',
          'Sagging utility lines, leaking pipes, and soil pulling away from the foundation.'
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
          'Never cross a road where water or mud is flowing, or a bridge if a flow is coming.',
          'If a slide is coming at you, move uphill fast. Stay out of valleys and low ground.',
          'Know the alerts. An advisory points out where slides could happen. A watch means slides are possible. A warning means slides are happening: leave the area.'
        ] },
        { head: 'Afterward', items: [
          'Stay away from the slide. More can follow, and floods often do too.',
          'Report broken utility lines and damaged roads.',
          'Ask your insurance agent. Flood insurance may cover debris flow.',
          'Without going into the slide, look for hurt or trapped people and point rescuers to them.'
        ] }
      ],
      mistakes: [
        'Waiting until you are sure a slide is coming. By then it is too late to get away.',
        'Sending the gutter water onto the slope.',
        'Thinking no map means no risk.'
      ],
      sources: ['ready-landslide', 'usgs-landslide-prep', 'redcross-landslide'],
      checked: '2026-11-26'
    },

    'hz-tsunami': {
      intro: 'A tsunami from a nearby quake can arrive in minutes. The route you have walked is the one you will take.',
      parts: [
        { head: 'Know your zone', items: [
          'Find out whether your home, work, school and the places you visit sit in a tsunami evacuation or hazard zone.',
          'Your local emergency office, your state geologic or tsunami site, and your local weather service office have the maps.',
          'Pick safe places at least a mile inland, or places that sit 100 feet or higher above sea level.',
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
          'Any one of these is enough. Do not wait for an official warning.',
          'A natural sign may be your first or only warning, the Red Cross says. You may not get an official alert at all.'
        ] },
        { head: 'If the ground shakes', items: [
          'Drop, cover and hold on until the shaking stops.',
          'Then move to high ground or inland as soon as you can safely.',
          'On the beach, any earthquake at all is a reason to leave the beach.'
        ] },
        { head: 'Stay away', items: [
          'More waves may follow the first one, and a later wave can be bigger. Danger can last hours or days.',
          'Stay out of the zone until officials say it is safe.',
          'If you are already outside the zone, stay where you are unless told otherwise.',
          'Tsunami waves can flood, drain and flood the land again for hours, and reach more than a mile inland.',
          'Afterward, keep off roads that flooded. They could be damaged and may collapse.'
        ] },
        { head: 'Official alerts', cols: ['Alert', 'What it means', 'What you do'], rows: [
          ['Information statement', 'A quake happened, but there is no threat, or it is not known yet', 'Watch local news'],
          ['Watch', 'A distant quake happened. A tsunami is possible', 'Be ready to act'],
          ['Advisory', 'Dangerous currents or waves are expected', 'Stay out of the water and off beaches'],
          ['Warning', 'Widespread flooding is expected', 'Move to high ground or inland now']
        ], note: 'From the Red Cross. Alerts come on local radio, TV, weather radios and phone alerts.' }
      ],
      mistakes: [
        'Going to the beach to watch the water pull back.',
        'Driving when you could walk.',
        'Going back after the first wave.'
      ],
      sources: ['ready-tsunamis', 'nws-tsunami-before', 'nws-tsunami-during', 'redcross-tsunami'],
      checked: '2026-11-26'
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
          'Anyone with breathing trouble should talk to their doctor ahead of time.',
          'An N95 helps with ash for a short time, but it does not filter volcanic gases, the Red Cross says.',
          'Add goggles, long sleeves and long pants. Keep at least a gallon of water per person per day, since ash can make water unsafe.'
        ] },
        { head: 'If ash is coming', items: [
          'Go home if you can, before it falls.',
          'Bring pets in. Put vehicles under cover or a tarp.',
          'Close doors and windows. Cover vents. Turn off systems that draw in outside air.',
          'Stay inside until officials say it is safe.'
        ] },
        { head: 'If told to leave', items: [
          'Leave early.',
          'Stay out of river valleys downstream of the volcano and areas downwind of it.',
          'Avoid driving in heavy ash. It can clog engines and stall cars. If you must, keep windows up and the air off.',
          'Stay out of river valleys. Fast mudflows called lahars can rush down them.'
        ] },
        { head: 'After the ash', items: [
          'Do not climb on the roof to clear ash unless you have training. Ash is slippery and heavy.',
          'Wear a mask and covering clothes to clean up. Children should not help.',
          'If ash is in your water, let it settle and use the clear water.',
          'Throw out food that was exposed to ash. The Red Cross adds: ask your health department whether your water is safe.'
        ] }
      ],
      mistakes: [
        'Driving through heavy ash.',
        'Wearing contacts in ashfall.',
        'Climbing on the roof to sweep it off.'
      ],
      sources: ['ready-volcanoes', 'usgs-ash', 'redcross-volcano'],
      checked: '2026-11-26'
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
          'Practice with each one before the season.',
          'NOLS warns that a beacon only helps if you also carry a shovel and probe, are trained, have practiced searching, and travel with partners who can do the same.',
          'Follow the maker\'s guidance on batteries. Newer beacons need more practice, not less.'
        ] },
        { head: 'Get trained', items: [
          'Take an avalanche class from a trained educator. The avalanche.org site lists course providers.',
          'Start with the "Know Before You Go" awareness video.',
          'Take first aid training too, so you can help with breathing problems, cold and injuries.',
          'Tell someone where you are going and when to expect you back.',
          'Never head into avalanche terrain alone. NOLS says always go with a partner or a group.'
        ] },
        { head: 'If someone is buried', items: [
          'Call 911, then start searching if it is safe.',
          'Watch for hypothermia: shivering, confusion, fumbling hands, slurred speech, sleepiness.',
          'Get them warm and dry. Heat the core of the body first: the chest, neck, head and groin.',
          'On mountain roads, follow avalanche warnings. Roads may close, or you may be told not to stop.'
        ] }
      ],
      mistakes: [
        'Skipping the forecast because the sky looks clear.',
        'Carrying a beacon and probe you have never practiced with.',
        'Heading onto steep slopes right after new snow or strong wind.'
      ],
      sources: ['ready-avalanche', 'avalanche-scale', 'avalanche-basics', 'nps-10essentials', 'nols-avy-beacons', 'nols-backcountry-ski'],
      checked: '2026-11-26'
    },

    'home-smoke': {
      intro: 'Once a smoke alarm sounds, you may have under 2 minutes to get everyone outside. Working alarms in the right places give you that time.',
      parts: [
        { head: 'Where they go', items: [
          'Inside every bedroom.',
          'Outside each sleeping area.',
          'On every level, basement too.',
          'High on the wall or on the ceiling. Follow the alarm\'s instructions.',
          'Best: alarms linked together, so when one sounds they all sound.',
          'NFPA adds: on a level with no bedrooms, put one in the living room or near the stairs to the next level.',
          'In the basement, put it on the ceiling at the bottom of the stairs.'
        ] },
        { head: 'Which kind', items: [
          'There are two kinds, and they catch different fires. Have both kinds, or dual-sensor alarms that do both.',
          'Basic alarms start at about $6. Dual-sensor ones start at about $24.',
          'For someone with hearing loss, there are alarms that flash or shake.',
          'Some fire departments give out or put in alarms for free. Call their non-emergency number.',
          'Hardwired alarms should be put in by an electrician.',
          'NFPA explains the two kinds: ionization alarms react faster to flaming fires, photoelectric alarms to smoldering ones.',
          'If you link alarms, buy them all from the same maker. Alarms that do not match may not sound together.'
        ] },
        { head: 'Keep them working', cols: ['Power', 'Test', 'Battery', 'Replace the alarm'], rows: [
          ['9-volt battery', 'Monthly', 'At least once a year', 'Every 10 years'],
          ['10-year sealed battery', 'Monthly', 'None to change', 'When the label says'],
          ['Hardwired', 'Monthly', 'Backup once a year', 'Every 10 years']
        ], note: 'Count the 10 years from the date made, printed on the alarm, not from when you put it up.' },
        { head: 'When cooking sets it off', items: [
          'Never take the battery out.',
          'Open a window or door, press the hush button, and wave a towel at it.',
          'If it keeps happening, move the alarm a few feet farther from the kitchen or bathroom.',
          'NFPA says to keep alarms at least 10 feet from the stove.',
          'Keep them away from windows, doors and vents, where drafts can keep them from working. Never paint over one.'
        ] },
        { head: 'Pair it with a way out', items: [
          'Draw a map of the house with every door and window.',
          'Find two ways out of each room, and keep them clear.',
          'Pick a meeting spot outside, in front of the house.',
          'Push the test button to start a home fire drill, and practice getting out.'
        ] },
        { head: 'When it chirps', items: [
          'A sealed 10-year alarm that chirps for low battery: replace the whole alarm right away (NFPA).',
          'Any other alarm that chirps: change the battery right away.',
          'Use the battery the maker lists on the back of the alarm. A different kind may not work right.'
        ] }
      ],
      mistakes: [
        'Pulling the battery while you cook.',
        'Counting 10 years from the day you put it up instead of the date made.',
        'Skipping the monthly test on a sealed 10-year alarm.',
        'Painting over an alarm, or covering it with stickers.'
      ],
      sources: ['usfa-smoke', 'usfa-escape', 'ready-kids-fire', 'nfpa-smoke-alarms'],
      checked: '2026-11-26'
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
          'Decide together who will check on older or disabled neighbors.',
          'The Red Cross calls this a support team: people you may help, and who can help you. Plan how you will help each other.'
        ] },
        { head: 'Plan the check-ins', items: [
          'Agree to check on each other if extreme cold or a storm knocks out power.',
          'Make a backup plan for the kids, in case you cannot get home.',
          'Ask a neighbor to check your house daily when you are away in winter, so the heat stays on.',
          'Talk about who could help with pets, child care or passing messages.',
          'In a winter storm, the Red Cross says to check that loved ones and neighbors are staying warm, older adults and babies most of all.'
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
      sources: ['ready-locations', 'ready-resolution', 'ready-plan', 'ready-2-help', 'nws-cold-pipes', 'redcross-winter', 'rc-earthquake'],
      checked: '2026-11-26'
    },

    'home-check': {
      intro: 'A slow walk around the house, inside and out, shows you what needs fixing before it matters. Look at the ways out, the loose things, and the shutoffs.',
      parts: [
        { head: 'Doors and windows', items: [
          'Check that no door or window you would use to get out is blocked by furniture or boxes.',
          'Each room should have two ways out. Note any that do not.',
          'NFPA says to check that each door and window on your way out opens easily.',
          'Bars on a window or door need a quick-release latch inside, so you can open them at once in a fire.'
        ] },
        { head: 'Outside the house', items: [
          'Look for branches over the roof or near power lines. Trim the ones you can reach safely.',
          'Look for loose gutters, shutters and roof tiles.',
          'Look at a brick chimney. In an earthquake, bricks can fall into the house.',
          'Make a list of yard items that wind could throw.',
          'Check that your house number can be read from the street, so responders can find you. If not, put up numbers or paint them on the curb (NFPA).'
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
      sources: ['usfa-escape', 'nws-wind-before', 'fema-eqhunt', 'ready-skills', 'nfpa-escape'],
      checked: '2026-11-26'
    },

    'home-inventory': {
      intro: 'After a fire, flood or storm, a claim goes faster when you can show what you owned. A video walk-through of the house is the easiest record to make.',
      parts: [
        { head: 'What to record', items: [
          'Photos and video of every major item and anything of value.',
          'Serial numbers, where items have them. Make and model for appliances and electronics.',
          'Parts of the house: the furnace, the water heater, the fridge and the stove.',
          'Belongings: furniture, clothing, electronics, and valuables like art.',
          'Extension adds: open closets, cabinets, cupboards and drawers, and film what is inside.',
          'Include the garage, basement, attic and outbuildings, and things family members keep away from home.'
        ] },
        { head: 'How to do it', items: [
          'Go room by room so you do not miss one.',
          'Say what each big item is as you film it.',
          'Get close enough that a serial plate is readable.',
          'Date the photos. Take close-ups of costly or unusual things to show they exist and their condition.',
          'For furniture, note the color, wood and size. Gather the product manuals; they list model details.'
        ] },
        { head: 'Store it safely', items: [
          'Keep a copy off the phone: on an external drive, in the cloud, or both.',
          'Store it with your other key papers, in a safe, dry, waterproof place.',
          'Keep originals of papers in a watertight safe deposit box if you can.',
          'Keep one copy away from home.',
          'Update it when you buy or get rid of things, and look it over twice a year (Extension).',
          'Antiques and art may need an expert appraisal and a rider on your policy to be covered for what they are worth.'
        ] },
        { head: 'If damage happens', items: [
          'Report the loss to your insurance company as soon as you can.',
          'Before cleanup, photograph and video the damage.',
          'For a flood, keep samples of carpet, flooring and curtains for the adjuster.',
          'A flood claim often takes 4 to 8 weeks to be paid.',
          'LSU AgCenter: after you call the insurer, send a letter about the damage and keep a copy.'
        ] }
      ],
      mistakes: [
        'Keeping the only copy on the phone, which can be lost with the house.',
        'Filming too fast to read the serial numbers.',
        'Throwing out damaged things before you photograph them.'
      ],
      sources: ['fs-document', 'fs-claim', 'ready-money', 'fema-eqhunt', 'pf-inventory', 'lsu-claims'],
      checked: '2026-11-26'
    },

    'home-insurance': {
      intro: 'No two policies are the same, and most gaps show up after the damage. Read yours now so you know what is covered and what is not.',
      parts: [
        { head: 'Read your policy', items: [
          'If you have no property insurance, get it: homeowners if you own, renters if you rent.',
          'Check that the coverage fits the hazards where you live.',
          'If something is unclear, call your agent and ask.',
          'Ask your agent whether claims are paid at replacement cost or actual cash value, and whether it pays the full cost or only a percent (University of Minnesota Extension).',
          'Make sure the coverage keeps up with any remodeling or improvements.'
        ] },
        { head: 'What most policies leave out', items: [
          'Flood. Most homeowners and renters policies do not cover it.',
          'Earthquake. A standard homeowners policy does not cover it.',
          'Renters: your landlord\'s insurance covers the building, not your things.',
          'A renters policy can cover theft, wind and fire, but usually not flood.',
          'Renters insurance is usually not very expensive. Ask the agent who insures your vehicle what adding it would cost.',
          'University of Minnesota Extension notes that after one flood, renters qualified for few government recovery programs and leaned on their own insurance.'
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
          'If you cannot find your flood insurer after a flood, call the NFIP at 877-336-2627.',
          'Keep a copy of your home inventory and policies outside the house, such as with a trusted family member.'
        ] }
      ],
      mistakes: [
        'Waiting for a flood forecast to buy a policy that takes 30 days to start.',
        'Renters assuming the landlord\'s policy covers their things.',
        'Thinking low risk means no risk.'
      ],
      sources: ['ready-money', 'fema-flood', 'fs-coverage', 'nfip-renters', 'ready-earthquakes', 'fema-floodmap', 'umn-insurance-review', 'pf-disaster-finances'],
      checked: '2026-11-26'
    },

    'home-extinguisher': {
      intro: 'A small fire put out in seconds stays small. Pick the right extinguisher, know when to use it, and know when to just get out.',
      parts: [
        { head: 'Pick one', items: [
          'Get a multipurpose one, labeled A-B-C. It works on most home fires: wood and paper, grease and oil, and things plugged in.',
          'Look for the UL listed label.',
          'Get the biggest one you can handle easily.',
          'Reading the label: on a 1A:10B:C, the 1A means it works like 1.25 gallons of water, and the 10B means it can put out a grease or fuel fire up to 10 square feet.',
          'Read its instructions and learn its parts before a fire ever starts (NFPA).'
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
          'Sweep the nozzle side to side.',
          'Keep your back to a clear exit while you use it. If the room fills with smoke, leave right away.'
        ] },
        { head: 'Check it monthly', items: [
          'Nothing blocks the way to it.',
          'The gauge needle is in the green.',
          'No dents, rust or cracked hose.',
          'Wipe off dust and grease.',
          'Read its label: some need shaking each month, some need testing every few years, some are thrown out when the pressure drops.',
          'Your fire department may offer training. Call and ask.'
        ] },
        { head: 'Where it goes, and who uses it', items: [
          'NFPA says to mount it close to an exit.',
          'Getting out safely comes first. The extinguisher is only one part of your fire plan.',
          'NFPA says only adults who know how should use one. Children are taught to get out and stay out.'
        ] }
      ],
      mistakes: [
        'Mounting it by the stove, where you cannot reach it through the fire.',
        'Fighting a fire that is already spreading. Get out.',
        'Aiming at the flames instead of the base.'
      ],
      sources: ['usfa-ext', 'nfpa-extinguishers'],
      checked: '2026-11-26'
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
          'Pick a landmark straight ahead and walk to it. Repeat until you arrive.',
          'NOLS says to glance back over your shoulder as you head out, so you know what the route will look like on the return.'
        ] },
        { head: 'Practice before you need it', items: [
          'NOLS says to learn the map and compass in a city park or near a trailhead, not miles out.',
          'Use handrails: rivers, peaks or trails along your route that keep you on track.',
          'Stop for map checks where the view is good, so you can match the map to the land.',
          'The more unsure you are of your position, the slower you go, and the more often you check where you are.'
        ] }
      ],
      mistakes: [
        'Reading the compass while leaning on the truck.',
        'Forgetting declination. A few degrees off adds up over miles.',
        'Letting the needle drift out of the orienting arrow as you walk.',
        'Learning it for the first time on the day you need it.'
      ],
      sources: ['usgs-maps', 'usgs-topo-faq', 'usgs-compass', 'nps-compass-course', 'nps-declination', 'nps-olym-travel', 'nps-10essentials', 'nws-winter-before', 'nols-lost'],
      checked: '2026-11-26'
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
          'Let the kids help pack the kit. They remember what they handled.',
          'During a drill, check that each child wakes to the alarm. If one does not, give an adult the job of waking them (NFPA).',
          'Practice getting low and going under the smoke to the way out.'
        ] },
        { head: 'Practice', items: [
          'Act out a 911 call with a made-up emergency. Take turns being the operator.',
          'Press the smoke alarm test button and run a fire drill.',
          'Quiz them again a week later, and every few months.',
          'NFPA and the Red Cross say to practice the fire drill twice a year.',
          'Let kids learn the plan before you hold a drill at night. Tell them a drill is coming; the point is to practice, not to frighten.'
        ] }
      ],
      mistakes: [
        'Teaching it once and never practicing.',
        'A child who only knows "Mom," not her full name or number.',
        'Hanging up after calling 911 by mistake.',
        'Teaching kids to use the fire extinguisher. NFPA says children should get out and stay out.'
      ],
      sources: ['ready-kids', 'ready-kids-fire', 'ready-2-help', 'usfa-escape', 'ready-plan', 'nfpa-escape', 'rc-homefire', 'nfpa-extinguishers'],
      checked: '2026-11-26'
    },

    'skill-fix': {
      intro: 'After a big storm, repair help can be booked for weeks. A few basic skills keep the water, power and drains working until then.',
      parts: [
        { head: 'Shut off the water', items: [
          'Find the main valve where the water line comes into the house. Tag it so anyone can find it.',
          'Make sure it closes all the way. If it is rusted open or will not close, have it replaced.',
          'Don\'t confuse it with the street valve in the curb box. That one needs a special tool.',
          'After a disaster, shutting the main also keeps clean water in your water heater and toilet tanks.',
          'If the heat may be off a long time in freezing weather, Purdue Extension says to shut the main valve, or the well pump if it is inside, then open every faucet until the lines drain.',
          'Drain the toilet tanks too, and the hoses and drains on the washer and dishwasher. Purdue says never to put antifreeze in those appliances.'
        ] },
        { head: 'Shut off the power', items: [
          'Find the circuit box and show the other adults.',
          'To shut off everything, switch off each circuit first, then the main.',
          'Sparks can light leaking gas. That is one more reason every adult should know how to shut the power off.'
        ] },
        { head: 'Gas: know it, do not test it', items: [
          'Call your gas company and ask how your meter shuts off. Do not actually turn it off to practice.',
          'If you smell gas or hear hissing, open a window and get everyone out.',
          'If you can, shut the main valve outside the house. Then go to a neighbor\'s home and call the gas company.',
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
      sources: ['ready-skills', 'uf-drains', 'usda-extension', 'purdue-plumbing'],
      checked: '2026-11-26'
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
          'Call before you miss a payment, not after.',
          'If money is short, the Church of Jesus Christ of Latter-day Saints\' finance guide says to cover food, shelter, utilities and needed transportation first.',
          'Ask each biller about hardship grace periods, payment plans without interest, or a later due date. Delays can add fees, so ask what it will cost.'
        ] },
        { head: 'Keep it current', items: [
          'Look it over at tax time, or when the clocks change.',
          'Update it when you move, change insurance, or open or close an account.',
          'If you get federal benefits by paper check, think about direct deposit. Mail can stop for weeks after a disaster.',
          'Track your spending for one month to see where the money goes, then sort it into needs and wants.'
        ] }
      ],
      mistakes: [
        'Keeping the only list on a phone or computer.',
        'Skipping payments without calling first.',
        'Giving account details to a caller who says they are from the government. The government won\'t text or call you about money you owe.'
      ],
      sources: ['ready-money', 'ready-effak', 'ftc-papers', 'ftc-back-on-track', 'lds-fin-crisis', 'lds-budget'],
      checked: '2026-11-26'
    },

    'money-nets': {
      intro: 'If the paycheck stops or a disaster hits, help is there. Know the numbers now, while things are calm.',
      parts: [
        { head: 'If you lose work', items: [
          'Ask your employer if your pay and health insurance will continue, and for how long.',
          'For help, phone 1-866-4-USA-DOL. That is the U.S. Department of Labor. They connect you with your state\'s unemployment office.',
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
          'Every day, the phone line is open from 7 a.m. until 10 p.m., your local time.',
          'On the website, choose your state. It shows whether your county is part of a declared area.',
          'To find a Disaster Recovery Center, send a text to 43362 with DRC and your ZIP code.',
          'Keep proof of where you live and your income. You may need both to apply.'
        ] },
        { head: 'Protect your credit', items: [
          'Get your free credit report at AnnualCreditReport.com or 1-877-322-8228. It lists every lender, even if your papers are lost.',
          'Call lenders, landlords and utilities early and ask for help.',
          'If you can only make minimum payments, or cannot keep up, a nonprofit credit counselor can help you make a plan with your lenders.',
          'Calling your insurer to ask whether something is covered does not file a claim (Church of Jesus Christ finance guide).'
        ] },
        { head: 'Watch for scams', items: [
          'Never pay anyone to help you get government aid. FEMA help is free.',
          'The government will not call, text or message you on social media about money owed or payments.',
          'If you do not know the sender, do not click links in their texts or emails.',
          'Report scams at ReportFraud.ftc.gov.',
          'For free or low-cost money counseling, pick a well-established nonprofit and check that it is properly registered.'
        ] }
      ],
      mistakes: [
        'Waiting weeks to apply for unemployment.',
        'Paying a stranger who promises to speed up FEMA aid.',
        'Not writing the numbers down until you need them.'
      ],
      sources: ['ready-money', 'ftc-back-on-track', 'fema-disasterassistance', 'fema-app', 'ready-effak', 'lds-fin-crisis'],
      checked: '2026-11-26'
    },

    'money-cash': {
      intro: 'When the power is out, ATMs and card readers may not work. A little cash at home lets you buy food, fuel and supplies anyway.',
      parts: [
        { head: 'How much', items: [
          'Base it on what your household needs each day: food, gas and the other things you use.',
          'Start small and add to it over time.',
          'Keep small bills. A store may not be able to make change.',
          'Utah State University Extension says to picture a real emergency. Would you need cash for food, gas, or a motel if you had to leave? Count everyone you would pay for.',
          'Start with $20 in small bills and coins and add a little each month, or use part of a tax refund. Ones and fives work best, plus a roll of quarters.'
        ] },
        { head: 'Where to keep it', items: [
          'In a safe place at home. A lockable, fireproof box works well.',
          'Keep it with your important papers, a spare set of house and car keys, and your safe deposit box key.',
          'Or keep some with a trusted relative or friend.',
          'Tell the other adult in the house where it is.',
          'USU suggests a small fireproof, waterproof safe bolted to the floor. Most thieves skip what takes time.',
          'Put a few small bills in each person\'s grab-and-go kit, in case you get separated.'
        ] },
        { head: 'Know the risks', items: [
          'Cash can be lost, stolen or burned. Keep only a small amount at home.',
          'Keep the rest of your emergency savings in an insured bank or credit union account.',
          'Cash at home is not FDIC insured. Ask whether your home policy covers cash lost to fire or theft.',
          'Write down where it is, and keep the note with your will or key papers.'
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
      sources: ['ready-money', 'ready-effak', 'ftc-papers', 'cfpb-emergency-fund', 'usu-cash-stash'],
      checked: '2026-11-26'
    },

    'money-starter': {
      intro: 'Most emergencies are a car repair, a doctor bill or a broken appliance. A small fund set aside for those keeps them from turning into debt.',
      parts: [
        { head: 'Set a goal', items: [
          'Think back to your last few surprise bills. What did they cost?',
          'Use that to set your first goal.',
          'Even a small amount helps, if money is tight or your pay changes from week to week.',
          'Utah State University Extension suggests a first goal of about $500 on income under $20,000 a year, and at least $2,000 on income over $40,000.',
          'The Church of Jesus Christ\'s finance pages suggest another first goal: enough to cover your spending between one paycheck and the next. Then build to two, then three.'
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
          'Put all or part of a tax refund or cash gift into it.',
          'If you can, aim to save 10 to 20 percent of your income. If not, save what you can (Church of Jesus Christ finance pages).',
          'University of Illinois Extension: even $50 to $100 a paycheck adds up. A small fund beats none.'
        ] },
        { head: 'Where to keep it', items: [
          'A separate savings account at a bank or credit union, so you do not spend it by accident.',
          'At an FDIC-insured bank, deposits are covered up to $250,000 per person, per bank, per type of account.',
          'Check that a bank is insured with the FDIC\'s BankFind tool.',
          'Money left sitting in a payment app is usually not insured. Move it to your account.',
          'Illinois Extension: an account at a different bank can make it harder to spend on a whim. Keep it where you can reach it fast, not tied up.'
        ] },
        { head: 'Using it', items: [
          'Decide now what counts as an emergency, and stick to it.',
          'Do not be afraid to use it when you need it. That is what it is for.',
          'When you use it, start building it back up.',
          'If you dip into it, treat it like a loan to yourself, with a payback schedule (USU Extension).'
        ] }
      ],
      mistakes: [
        'Keeping it in checking, where it gets spent.',
        'Putting a surprise bill on a credit card when the cash is there. Interest makes it cost more.',
        'Stopping the transfers once you reach the goal. Raise the goal instead.'
      ],
      sources: ['cfpb-emergency-fund', 'fdic-deposit-ins', 'cfpb-payment-app', 'fdic-moneysmart', 'usu-saving-plan', 'lds-fin-emergency', 'lds-fin-prepared', 'il-emergency-fund'],
      checked: '2026-11-26'
    },

    'money-month': {
      intro: 'A month of living costs set aside gives you time to find work or get through a disaster. Build it the same way you built the starter fund, one step at a time.',
      parts: [
        { head: 'Find your number', items: [
          'Use your bill list. Add up one month of housing, utilities, phone, food, gas, insurance and loan payments.',
          'Leave out the extras you could stop for a while.',
          'That total is your goal.',
          'Some households need a bigger cushion, says Extension\'s Financial Security for All: the self-employed, seasonal or commission workers, someone with an uncertain job, or big medical costs ahead.',
          'Utah State University Extension says to think about how long it would take to find work in your field. Some jobs fill fast; others take months.'
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
          'Keep saving while you pay down what you owe.',
          'The Church of Jesus Christ\'s finance pages: pay the minimum on every debt, then put any extra toward the one with the highest interest rate.'
        ] }
      ],
      mistakes: [
        'Setting the goal from a guess. Use your real bills.',
        'Using the fund for things that are not emergencies.',
        'Pulling from retirement savings to cover a surprise bill.'
      ],
      sources: ['cfpb-emergency-fund', 'ready-effak', 'ready-money', 'pf-cash-reserve', 'usu-saving-plan', 'lds-fin-emergency'],
      checked: '2026-11-26'
    },

    'money-three': {
      intro: 'A bigger cushion lets you wait out a longer job loss or recovery. The work is the same: keep saving, keep it safe, and refill it after you use it.',
      parts: [
        { head: 'Keep going', items: [
          'Keep the automatic transfer going after you reach one month.',
          'When your pay goes up, raise the transfer.',
          'If your pay drops, lower it, but try not to stop.',
          'Set your next goal each time you reach one.',
          'Most experts cited by Extension\'s Financial Security for All put the full goal at 3 to 6 months of living expenses. Three months is the low end.',
          'Utah State University Extension says to plan for six months without work if you lose a job.'
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
          'Look back at what happened, and adjust your goal if it was not enough.',
          'The Church of Jesus Christ\'s finance pages say not to feel guilty using it, for living costs or an insurance deductible. Refill it as fast as you can.'
        ] }
      ],
      mistakes: [
        'Stopping once you hit one month.',
        'Leaving savings in a payment app that is not insured.',
        'Letting insurance lapse, so one big loss wipes out the savings.'
      ],
      sources: ['cfpb-emergency-fund', 'fdic-deposit-ins', 'ready-money', 'ready-effak', 'ftc-prepare-scams', 'pf-cash-reserve', 'usu-saving-plan', 'lds-fin-crisis'],
      checked: '2026-11-26'
    },

    'med-cpr-video': {
      intro: 'Hands-Only CPR is CPR without breaths. The American Heart Association teaches it in two steps, in a video about 90 seconds long.',
      parts: [
        { head: 'When to use it', items: [
          'Use it when a teen or adult suddenly collapses.',
          'For babies and children, someone who drowned, a drug overdose, or a person who collapsed from breathing trouble, the Heart Association still recommends CPR with breaths.',
          'A full CPR class teaches the breaths. The Heart Association calls Hands-Only CPR a first step toward one.',
          'Mayo Clinic adds: if you are not trained in breaths, or not sure of your skills, Hands-Only CPR is still far better than doing nothing, for anyone but a newborn.'
        ] },
        { head: 'The two steps, in this order', items: [
          'Call 911.',
          'Push fast and hard in the middle of the chest.',
          'Stack one hand over the other, the way the video shows.',
          'Mayo Clinic adds: lay the person face up on a firm surface. Put the heel of your hand on the center of the chest, with elbows straight and shoulders right over your hands.',
          'Push down at least 2 inches but not more than 2.4 inches. After each push, let the chest spring back.'
        ] },
        { head: 'The pace', items: [
          'Push 100 to 120 times a minute.',
          'Pick a song you know with that beat and push to it. People keep the right pace better that way.',
          'The Heart Association keeps a list of songs at that pace on its site.'
        ] },
        { head: 'Alone, or with help', items: [
          'If someone is with you, one person calls 911 and gets an AED, if one is near. The other starts pushing.',
          'Alone with a phone? Call 911 first and put it on speaker. The dispatcher can talk you through CPR.',
          'If you get an AED, turn it on. It tells you what to do.',
          'Keep pushing until the person moves or responders take over, Mayo Clinic says.'
        ] },
        { head: 'Learn it as a house', items: [
          'Watch the video together. It is free.',
          'The Heart Association asks at least one person in every home to learn it.',
          'Then find a full CPR class as the next step.'
        ] },
        { head: 'Why it matters', items: [
          'About 70 percent of cardiac arrests outside a hospital happen in homes.',
          'CPR, most of all right away, can double or triple the chance of living.',
          'Studies show Hands-Only CPR works as well as standard CPR when cardiac arrest happens in public, at work or at home.'
        ] }
      ],
      mistakes: [
        'Starting to push before anyone has called 911.',
        'Pushing too slowly. Use the song.',
        'Using Hands-Only CPR on a baby or child, when breaths are recommended too.'
      ],
      sources: ['aha-hocpr-facts', 'aha-hocpr-news', 'mayo-cpr'],
      checked: '2026-11-26'
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
          'Put ice or cold, wet cloths on the neck, head, groin and armpits.',
          'If the person is awake, offer cool water or a sports drink with no alcohol or caffeine. If they pass out and show no breathing, coughing or movement, start CPR, Mayo Clinic says.'
        ] },
        { head: 'Heat exhaustion', items: [
          'Signs: heavy sweating, thirst, headache, dizziness, nausea, weakness, irritability, passing less urine.',
          'Get them out of the heat. Take off extra clothing, shoes and socks too.',
          'Cool them with cold packs, or have them wash the head, face and neck with cold water.',
          'Give frequent sips of cool water.',
          'Get them to a clinic or emergency room to be checked. Call 911 if no care is available.',
          'Mayo Clinic says to get help right away if the person becomes confused, passes out or cannot drink.'
        ] },
        { head: 'Hypothermia', items: [
          'It can happen above 40°F if someone is wet from sweat, rain or cold water.',
          'Signs in adults: confusion, shivering, slurred speech, exhaustion, drowsiness, memory loss, fumbling hands. In babies: very low energy and skin that is cold and bright red.',
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
        { head: 'More on the cold, from Mayo Clinic and NOLS', items: [
          'If you cannot get indoors, block the wind and put a blanket or pad under the person. The cold ground pulls heat away.',
          'Do not rewarm too fast with a heat lamp or hot bath. Do not warm or rub the arms and legs. That strains the heart and lungs.',
          'A hot water bottle or hot pack goes against the chest or near the armpits, wrapped in a towel or clothing, never on bare skin.',
          'Shivering may stop as the body gets colder. That is a worse sign, not a better one.',
          'NOLS teaches that warm drinks and high-calorie food help, if the person is awake and can swallow. The body needs fuel to make heat.',
          'NOLS also warns that a cold person often says they are just tired, fumbles with zippers and buckles, and plays down how cold they are.',
          'Frostbite: if a thawed spot could freeze again, do not thaw it yet. Once it can stay warm, Mayo Clinic says to soak it in warm water for about 30 minutes.'
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
        'Thinking it is too warm for hypothermia. Wet and 40°F is enough.',
        'Rubbing or heating the arms and legs of someone with hypothermia.'
      ],
      sources: ['cdc-heat-ill', 'cdc-heat', 'cdc-hypo', 'cdc-frostbite', 'mayo-heatstroke', 'mayo-hypothermia', 'mayo-frostbite', 'mayo-heatexh', 'nols-hypothermia'],
      checked: '2026-11-26'
    },

    'med-wounds': {
      intro: 'These steps are from MedlinePlus, the National Library of Medicine\'s health site. For heavy bleeding, use what you learn in Stop the Bleed and call 911.',
      parts: [
        { head: 'A minor burn (skin not broken)', items: [
          'Run cool water over it, or soak it in cool water, not ice water, for 5 to 30 minutes. To ease the pain, use a clean towel that is cold and wet.',
          'Then cover it with a clean dressing or a dry, sterile bandage.',
          'Keep pressure and rubbing off it.',
          'Once it has cooled, a lotion with aloe can help. If the skin is broken, use an ointment so the dressing does not stick.',
          'Check that the person\'s tetanus shot is up to date.',
          'Mayo Clinic says about 10 minutes of cool, not cold, water, and to take off rings or anything tight before it swells.',
          'Do not pop blisters. If one breaks, clean it gently with water and put on antibiotic ointment.'
        ] },
        { head: 'A big burn: call 911', items: [
          'Call 911 for a burn the size of a palm or bigger, a deep burn, one from chemicals or electricity, or if the person breathed smoke.',
          'Someone on fire: stop, drop and roll. Wrap them in a rug, a blanket, or a coat made of wool or cotton, and pour on water.',
          'If burned clothing is stuck to the skin, leave it there.',
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
          'Leave anything stuck deep in the wound where it is, and get care.',
          'Mayo Clinic says to rinse the wound under running water and wash around it with soap, keeping soap out of the wound itself. Skip hydrogen peroxide and iodine, which irritate it.',
          'Change the bandage at least once a day, or when it gets wet or dirty.'
        ] },
        { head: 'When a cut needs more', items: [
          'Call 911 if the bleeding is severe, or does not stop after 10 minutes of pressure.',
          'Call 911 if the person cannot feel the area, or it does not work right.',
          'See a provider right away if it is deeper than a quarter inch, on the face, or down to the bone. It may need stitches.',
          'Also for a bite, a fishhook, a rusty object, stepping on a nail, or a last tetanus shot over 10 years ago.',
          'Signs of infection: warmth, redness, throbbing, fever, swelling, a red streak, or pus.',
          'Mayo Clinic is stricter on tetanus: get a shot for a deep or dirty wound if the last one was more than 5 years ago.'
        ] },
        { head: 'A sprain', items: [
          'Ice it right away, wrapped in cloth. Never put ice right on the skin.',
          'Wrap it firmly, but not tight, to limit movement. Splint it if needed.',
          'Keep it raised above the heart, even while sleeping.',
          'Rest it for several days. Keep weight off it until the pain goes.',
          'Do not give aspirin to children.',
          'Go to the hospital or call 911 if you think a bone is broken, the joint looks out of place, or you heard a pop and cannot use it.',
          'See a provider if the swelling has not started to go down in 2 days.'
        ] },
        { head: 'More from Mayo Clinic', items: [
          'Get emergency help for a burn larger than 3 inches across, one that wraps around an arm or leg, or one on the face, hands, feet, groin or a major joint.',
          'Before a big burn swells, gently take off jewelry, belts and tight clothing near it. Leave clothing that is stuck to the skin.',
          'Sprain: ice it for 15 to 20 minutes at a time. Do this 4 to 8 times a day during the first 48 hours. Never more than 20 minutes at once.',
          'See a provider if a sprain is no better after 2 or 3 days.'
        ] }
      ],
      mistakes: [
        'Putting butter, oil or ice on a burn.',
        'Pulling out an object stuck deep in a wound.',
        'Wrapping a sprain so tight it cuts off the blood.',
        'Skipping the wash on a cut that looks clean.'
      ],
      sources: ['nih-burns', 'nih-cuts', 'nih-sprains', 'mayo-burns', 'mayo-cuts', 'mayo-sprain'],
      checked: '2026-11-26'
    },

    'med-hygiene': {
      intro: 'When the water is off or unsafe, sickness spreads through a house fast. The CDC\'s plan is simple: clean hands, safe water for teeth and wounds, and care with bathing.',
      parts: [
        { head: 'Wash hands the CDC way', items: [
          'Wet your hands with clean water, then put on soap.',
          'Lather the backs of your hands, between the fingers and under the nails.',
          'Scrub for at least 20 seconds.',
          'Rinse well in clean water.',
          'Dry with a clean towel or let them air-dry.',
          'Scrub your wrists too. Mayo Clinic says plain soap works as well as antibacterial soap.'
        ] },
        { head: 'With no running water', items: [
          'Make a hand-washing station from a large water jug.',
          'Use the cleanest water you have. If local officials or your doctor say to take extra care, use water that was boiled or disinfected.',
          'Water but no soap: rub your hands together while they are under the water, then dry them. It rinses off some germs.',
          'No soap and no water: use hand sanitizer with at least 60% alcohol.',
          'Hesperian Health Guides shows a tippy tap: a soda bottle with a small hole near the bottom and a short straw pushed in. Loosen the cap and a thin stream runs out, so you wash with very little water.',
          'The CDC says water alone rinses off some germs. Hesperian says water alone is not enough, and with no soap, to scrub with clean sand or ash.'
        ] },
        { head: 'Using sanitizer right', items: [
          'Put enough in one palm to cover both hands.',
          'Rub every surface until dry, about 20 seconds. Do not wipe it off first.',
          'It does not work well on dirty or greasy hands, and it does not remove chemicals. Wash those off.',
          'Watch young children so they do not swallow it.',
          'Mayo Clinic says to keep sanitizer out of children\'s reach between uses. Swallowing it can cause alcohol poisoning.'
        ] },
        { head: 'Key times to wash', items: [
          'Before, during and after making food, and before eating.',
          'After the toilet, and after changing diapers.',
          'Before and after caring for someone sick with vomiting or diarrhea.',
          'Before you treat a cut or wound, and after.',
          'After touching garbage, animals or pet food, or blowing your nose.',
          'NOLS, which teaches long trips in the wild, notes that stomach illness blamed on bad water is often spread by hands instead. Wash before every meal.'
        ] },
        { head: 'Teeth, bathing and wounds', items: [
          'Brush teeth only with clean water. Ask local officials whether the tap water is safe.',
          'Some water that is not safe to drink is fine for bathing. Do not swallow it or get it in your eyes.',
          'Never bathe in water that may hold sewage, chemicals or flood water.',
          'Keep cuts clean with soap and clean water, and covered with a waterproof bandage. Stay out of flood water with an open wound.',
          'Get care if a wound turns red, swells or oozes.'
        ] },
        { head: 'Help kids do it', items: [
          'Wash your hands with them, so they see how. Mayo Clinic gives these tips.',
          'Have them hum the "Happy Birthday" song twice, so they do not rush.',
          'Keep a step stool by the sink or wash station for children who cannot reach.'
        ] }
      ],
      mistakes: [
        'Using sanitizer on hands that are visibly dirty.',
        'Brushing teeth with water you would not drink.',
        'Wading in flood water with an open cut.'
      ],
      sources: ['cdc-hygiene', 'cdc-handwash', 'cdc-sanitizer', 'cdc-hands-faq', 'mayo-handwashing', 'hesperian-germs', 'nols-handwashing'],
      checked: '2026-11-26'
    },

    'home-toilet': {
      intro: 'When the water is off or the sewer is broken, you still need a toilet. FEMA and Ready.gov list a few low-cost things that cover it, and Extension shows how to run one for weeks.',
      parts: [
        { head: 'What to gather', items: [
          'A medium-sized plastic bucket with a tight lid. For a long outage, Oregon State University Extension uses two 5-gallon buckets with lids, marked "pee" and "poo."',
          'Heavy-duty plastic garbage bags and ties. Extension says 3 to 5 mil contractor bags, several boxes of them.',
          'A dry cover material such as sawdust, wood shavings, peat moss, bark chips or shredded paper.',
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
          'Clean the buckets with disinfectant when you are done with them.',
          'To cut down on flies, hang a fly trap near the toilet. Hesperian Health Guides shows one made from a jar or bottle with a paper cone in its mouth and sweet bait under it.'
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
          'Wash after every diaper change, too.',
          'No jug with a spigot? Hesperian shows how to make a tippy tap from a soda bottle and a straw. See the step on staying clean without running water.'
        ] }
      ],
      mistakes: [
        'Flushing after a flood or earthquake before you know the sewer lines are good.',
        'Peeing in the poo bucket, or leaving waste uncovered.',
        'Storing full bags with regular garbage, or near food and water.',
        'Forgetting a way to wash hands next to the toilet.'
      ],
      sources: ['ready-kit', 'fema-supplies', 'fema-is909-handouts', 'cdc-sanitation', 'cdc-hygiene', 'osu-sanitation', 'epa-septic-flood', 'fema-cert-manual', 'hesperian-germs'],
      checked: '2026-11-26'
    },

    'food-can': {
      intro: 'Canning keeps food on the shelf for a year, but only when done by the tested method. Everything here is from the USDA-funded National Center for Home Food Preservation.',
      parts: [
        { head: 'Pick the right canner', items: [
          'Acid foods go in a boiling-water canner: fruits, pickles, sauerkraut, jams, jellies and fruit butters.',
          'Low-acid foods need a pressure canner: poultry, red meat, seafood, milk, and every fresh vegetable except most tomatoes. A boiling water bath is a real botulism risk for these.',
          'Low-acid foods must reach 240°F to 250°F, which takes a pressure canner at 10 to 15 pounds.',
          'Tomatoes and figs can sit just above the line. Add the lemon juice or citric acid the recipe calls for.'
        ] },
        { head: 'Use a tested recipe, every time', items: [
          'Use the times in the USDA Complete Guide to Home Canning or on the National Center\'s site. Never guess.',
          'Times depend on the food, how it is packed and the jar size.',
          'At 1,000 feet or higher, use the time or pressure for your elevation. Your county Extension office can tell you your elevation.',
          'Not recommended: open-kettle canning, or processing jars in the oven, microwave or dishwasher. Canning powders do not preserve food.',
          'Food made for a hot pack goes into the canner hot. Utah State University Extension says letting it cool in the jars first can leave it under-processed.',
          'In a tested salsa you may use fewer vegetables, or swap one kind of pepper for another, but never add more. Extra vegetables lower the acid.'
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
      sources: ['usda-preserve', 'nchfp-safe', 'nchfp-canners', 'nchfp-store', 'nchfp-spoiled', 'nchfp-notrec', 'usu-canmistakes'],
      checked: '2026-11-26'
    },

    'skill-fire': {
      intro: 'A small fire gives heat, light and a signal for help. The Forest Service way: check the rules, build small, never leave it, and put it out until it is cold.',
      parts: [
        { head: 'Before you light it', items: [
          'Check for fire restrictions where you are. Some places need a free permit.',
          'Do not build one on dry, windy days.',
          'Have plenty of water, a bucket and a shovel at hand.',
          'Gather tinder (small twigs, dry leaves, grass and needles), kindling (sticks under 1 inch around) and larger wood.',
          'Use dead wood from the ground. Never cut trees or branches.',
          'Backwoods Home: the smaller and drier the fuel, the easier it lights. Dead wood caught up off the ground, in brush, is drier than wood lying on it.',
          'In wet weather, shave a dry stick into curls left attached, called a fuzz stick, or split a dead piece to reach the dry wood inside.'
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
          'Never burn trash, aerosol cans, batteries, glass or plastic.',
          'Add damp wood one or two pieces at a time to a fire that is already burning well. It needs the heat to dry out.',
          'Softwoods catch fast. Hardwoods like oak and hickory are slower to start but burn longer and leave good coals.'
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
        ] },
        { head: 'Carry more than one way to light it', items: [
          'Backwoods Home suggests two or three kinds of fire starters, kept in different pockets or packs.',
          'Strike-anywhere matches in a waterproof case, a lighter, and a spark rod that works when wet.',
          'Practice in rain or snow before you need it, where fires are allowed.'
        ] }
      ],
      mistakes: [
        'Starting it with gas or lighter fluid.',
        'Burying the coals instead of drowning them.',
        'Walking away from a fire that is still warm.'
      ],
      sources: ['fs-campfire', 'fs-fire-safety', 'fs-inyo-campfire', 'smokey-campfire', 'bwh-fire-weather', 'bwh-firebuilding'],
      checked: '2026-11-26'
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
          'Emergency shelter: a tent, tarp, bivy sack or space blanket. All are light.',
          'A simple shelter kit from Backwoods Home: a rain poncho, a space blanket, cord and a knife.'
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
          'Know where water is along your route before you go.',
          'NOLS says to carry enough extra food and gear for an unplanned night or two out.'
        ] },
        { head: 'In the vehicle', items: [
          'Ready.gov says to keep a kit in the car in case you are stranded.',
          'In winter, the Forest Service adds food, an extra blanket, tire chains and an ice scraper.',
          'Tell someone where you are going and when you will be back.',
          'The Red Cross winter car kit adds: rain gear, dry clothes, mittens, socks and wool hats; plastic bags for a toilet; high-energy snacks; and water.',
          'Keep the phone charged, and travel in daylight with someone else when you can.'
        ] }
      ],
      mistakes: [
        'Counting on the phone alone for a map and a light.',
        'Letting the first aid supplies and batteries run past their dates.',
        'Leaving the pack at home for a short trip.'
      ],
      sources: ['nps-10', 'ready-kit', 'fs-backcountry', 'redcross-winter', 'nols-lost', 'bwh-firebuilding'],
      checked: '2026-11-26'
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
          'Practice in a park you know before you need it.',
          'NOLS says to have more than one navigator in the group, in case the only one gets sick or hurt.',
          'If you are unsure, slow down and check the map and compass more often. Head back to the last place you were sure of.'
        ] }
      ],
      mistakes: [
        'Taking a bearing next to the truck or a metal fence.',
        'Forgetting declination, or adding it when you should subtract.',
        'Reading the bearing backward: due east is 90, not 270.'
      ],
      sources: ['usgs-mapcompass', 'usgs-bearing', 'usgs-declination', 'usgs-maps', 'nols-lost'],
      checked: '2026-11-26'
    },

    'skill-signal': {
      intro: 'If you are lost or hurt, your job is to be found. The Park Service and Forest Service teach a few simple signals that work anywhere.',
      parts: [
        { head: 'The rule of three', items: [
          'Any signal done three times in a row is the universal call for help.',
          'Three whistle blasts, three flashes of a mirror or flashlight, or three puffs of smoke.',
          'Repeat it at regular intervals.',
          'A search party that hears it answers with two signals.',
          'Use it only when you need help.',
          'Trapped in a building after a quake, the Red Cross says to knock loudly on something solid three times every few minutes. Rescuers listen for it.'
        ] },
        { head: 'Whistle', items: [
          'If you are lost or separated, stay put and blow three blasts.',
          'Give every child a whistle with one rule: if you are lost, stop and blow.',
          'NOLS: there is no shame in yelling if you get split up from your group. Carry a whistle for just that.'
        ] },
        { head: 'Mirror and light', items: [
          'Flash sunlight toward searchers with a signal mirror, foil or anything shiny.',
          'At night, flash a flashlight or headlamp in threes.',
          'Stuck in a vehicle in snow: a bright cloth, red if you can, on the antenna, the hood up once the snow stops, and the dome light on while the engine runs (Red Cross).'
        ] },
        { head: 'Be seen from the air', items: [
          'Lay brightly colored clothing out in a forest clearing.',
          'Wear bright clothing when you go out, so searchers can spot you.',
          'Hurt and alone, where fire is safe: clear a patch down to bare soil, then build a signal fire on it. Heavy smoke comes from green boughs.'
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
      sources: ['fs-willamette-lost', 'fs-backcountry', 'nps-yose-safety', 'nps-olym-safety', 'nps-whsa-safety', 'rc-earthquake', 'redcross-winter', 'nols-lost'],
      checked: '2026-11-26'
    },

    'skill-lost': {
      intro: 'People who get lost are found sooner when they stop moving. The plan you leave at home is what starts the search.',
      parts: [
        { head: 'Before you go', items: [
          'Leave your plan with someone you trust: which trails, where you park, and when you will be back.',
          'Tell them to call 911 if you are not back by a set time. Rangers do not track overdue hikers.',
          'Do not leave your plan on the windshield. Thieves look for it.',
          'Phones often get no signal in the backcountry. Do not count on one.',
          'Stay on the trail and stay with your group.',
          'NOLS says to carry enough gear and extra food for an unplanned night or two out.'
        ] },
        { head: 'The moment you are lost', items: [
          'Stop. Stay calm and think it through.',
          'Try to fix where you are with the map, compass and landmarks.',
          'If you cannot find the trail, stay put. You will be found sooner.',
          'Do not try to follow a creek or river out. Those are often the most dangerous routes.',
          'NOLS: most lost people carry a wrong picture in their head of where they are. Stand still, take off the pack, get out the map, and think.',
          'The Park Service says stay put if you cannot find the trail. NOLS adds: if you can safely retrace your steps to the last place you were sure of, do it, and mark the way with sticks or rocks.'
        ] },
        { head: 'While you wait', items: [
          'Turn to your 10 essentials.',
          'Stay warm and dry, and out of the wind.',
          'In rain, snow or fog, staying put is often safer than traveling.',
          'Signal: three whistle blasts, mirror flashes, bright clothing laid out in a clearing.',
          'If you have a signal, call or text 911. Describe where you are and where you started.',
          'If dark comes while you are lost, stop, make camp and rest. Morning light often helps you get your bearings (NOLS).',
          'A large search can take 24 hours or more to get going. Be ready to wait.'
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
      sources: ['nps-yose-safety', 'nps-hale-safety', 'nps-olym-safety', 'nps-whsa-safety', 'fs-backcountry', 'fs-willamette-lost', 'nols-lost'],
      checked: '2026-11-26'
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
          'Shed a layer when you get hot, so you do not soak it with sweat.',
          'In the sleeping bag, NOLS suggests clean, dry base layers rather than your puffy jacket. The bag warms you by holding your own heat.'
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
          'Never use a flame or heater inside a tent.',
          'A pad under you keeps the cold ground from pulling heat away. NOLS says a foam or insulated pad combined with an inflatable one works best; the thicker the pads, the warmer you sleep.',
          'Choose a sleeping bag rated 10 to 20 degrees below the coldest night you expect.'
        ] },
        { head: 'Fuel', items: [
          'Eat and drink all day. Thirst and hunger bring fatigue and poor decisions.',
          'Carry trail food and keep nibbling in cold, wet weather.',
          'Skip alcohol and smoking before time in the cold.',
          'Eat a high-calorie snack right before bed. NOLS says your body burns it for heat through the night.',
          'Get warm before you get in the bag, with a little exercise, but do not work up a sweat.'
        ] },
        { head: 'Know when to stop', items: [
          'Persistent or violent shivering means hypothermia is close.',
          'Other signs: slurred speech, memory lapses, fumbling hands, stumbling, drowsiness.',
          'The person may say they are fine. Believe the signs.',
          'Get them out of the wind, off with wet clothes, into dry clothes and a warm sleeping bag. Warm drinks if they are awake.',
          'Below 95°F is an emergency. Get medical help as soon as you can.',
          'Mayo Clinic: move the person gently, and lay them on a blanket off the cold ground. Warm the center of the body, like the neck, chest and groin, not the arms and legs.',
          'Do not rub or heat the arms and legs, and no hot bath or heat lamp. Call 911. Begin CPR if they show no signs of life.'
        ] }
      ],
      mistakes: [
        'Wearing cotton.',
        'Waiting until you shiver to add layers.',
        'Pushing on until you are worn out before making camp.',
        'Sitting or sleeping right on cold ground.'
      ],
      sources: ['fs-backcountry', 'fs-hypothermia', 'fs-willamette-winter', 'nps-olym-travel', 'nols-sleep-warm', 'mayo-hypothermia'],
      checked: '2026-11-26'
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
          'Ties a loop at a rope\'s end that won\'t close up under strain.',
          'It unties easily, even after a heavy load.',
          'Check: the free end must lie inside the loop when you finish.',
          'Mother Earth News cautions that a bowline can slip in some slick synthetic ropes.'
        ] },
        { head: 'Clove hitch', items: [
          'Ties a line to something round, like a post or a rail.',
          'Two wraps around the post, with the end tucked under the second wrap, as the pictures show.',
          'It holds only while there is a load on both ends. Use it for temporary jobs (Mother Earth News).'
        ] },
        { head: 'Figure-eight and sheet bend', items: [
          'Figure-eight: a stopper on the end of a rope, so it cannot slip through a pulley or ring.',
          'Sheet bend: one of the best ways to join two ropes, even of different sizes.',
          'Make the sheet bend\'s loop in the thicker rope.',
          'The figure-eight is easier to untie than a plain overhand knot after a hard pull.',
          'Snug a sheet bend up by hand.'
        ] },
        { head: 'Practice', items: [
          'Tie each one again and again until you can do it without the pictures.',
          'NOAA\'s game: five pieces of rope, five knots. First to tie all of them right wins.',
          'A good knot can be untied easily. Test each one after a hard pull.'
        ] },
        { head: 'Three more worth learning', items: [
          'Trucker\'s hitch: NOLS often teaches it first, for pitching a tent. It works like a pulley, about 3 to 1, to cinch a load on a pack or a roof rack.',
          'Timber hitch: wraps around a log or post to drag or lift it. More turns slip less (Mother Earth News).',
          'Taut-line hitch: ties a tarp line to a stake and slides to tighten it.'
        ] }
      ],
      mistakes: [
        'Using a square (reef) knot to join two ropes. NOAA says never use it that way; a jerk on one end spills it.',
        'Finishing a bowline with the free end outside the loop.',
        'Making the sheet bend\'s loop in the thinner rope.',
        'Tying a granny knot by mistake. It looks like a square knot but slips and cannot take a load.'
      ],
      sources: ['noaa-knots', 'nols-truckers-hitch', 'men-knots'],
      checked: '2026-11-26'
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
          'Put 1 or 2 sinkers on the line, 6 to 12 inches up from the hook.',
          'Clip on a bobber. It bobs when a fish bites.'
        ] },
        { head: 'Practice the cast', items: [
          'Swap the hook for a rubber casting plug. Find open ground away from people.',
          'Hold the grip and press and hold the button.',
          'Stand a quarter turn from the target, rod tip pointed at it, about eye level.',
          'Smoothly raise the rod until it is almost straight up, then bring your forearm forward.',
          'Let go of the button when the rod reaches eye level.',
          'If the plug lands close in front of you, you let go too late. If it goes straight up, you let go too soon.'
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
          'Walk the yard now and pick the spot, so you are not guessing later.',
          'Hesperian Health Guides says to make it private, and safe for women and children to use.'
        ] },
        { head: 'Dig and use it', items: [
          'The CDC describes a family pit about 1 foot wide, 1.6 feet long and 1.6 feet deep.',
          'A trench is another choice: narrow, with soil thrown over the waste every day.',
          'Dig a shallow ditch around it to steer rain away. The CDC lists this for trenches.',
          'Cover the waste with a layer of soil each day, so flies stay off it. Flies carry germs to food and water.',
          'For one use on the trail, the Forest Service says a hole 6 to 8 inches deep.',
          'Hesperian digs a trench latrine downhill from water and as deep as you can, up to about 6 1/2 feet (2 meters). The CDC\'s family pit is smaller. Dig what your ground and time allow.',
          'NOLS teaches to press each layer of soil down with a foot or shovel, and to fill the hole in once the waste is within 4 inches of the top.'
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
      sources: ['osu-sanitation', 'cdc-sanitation', 'usfs-human-waste', 'epa-septic-wells', 'fema-supplies', 'fema-cert-manual', 'hesperian-emerg-toilet', 'nols-waste'],
      checked: '2026-11-26'
    },

    'san-trash': {
      intro: 'When trash pickup stops, garbage piles up fast and draws rats and flies. A covered can and a few rules keep it under control until trucks come back.',
      parts: [
        { head: 'Keep it covered', items: [
          'The CDC says to get trash out as soon as you can, into a covered can or dumpster.',
          'Tie each bag shut before it goes in the can.',
          'Clean up trash and debris outside the house as soon as you can. Piles give rats a place to hide.',
          'Check the can and its lid once a week. If water collects in it, empty it, so mosquitoes cannot breed.',
          'With no drain, strain dishwater and scatter it at least 200 feet from any well, creek or pond, as NOLS teaches. Put what the strainer catches in the trash.',
          'Hesperian Health Guides suggests feeding leftover scraps to animals or putting them on a compost pile, so less rots in the can.'
        ] },
        { head: 'Spoiled food', items: [
          'The CDC says to throw out meat, fish, eggs, milk, cut fruit and leftovers after 4 hours in a fridge with no power.',
          'Throw out any food that touched floodwater.',
          'Never taste food to find out if it is safe. When in doubt, throw it out.',
          'Bag spoiled food right away and keep it in the covered can. Rotting food draws rats.',
          'Flies gather at garbage. Hesperian shows a simple trap: a jar with a paper cone in its mouth and sweet bait under it. Hesperian says to hang traps near toilets and where food is made.'
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
          'It also makes dioxins. These toxic chemicals settle in water and on crops.',
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
      sources: ['cdc-disaster-animals', 'cdc-food-after', 'epa-debris-sort', 'cdc-disaster-chemicals', 'epa-backyard-burning', 'cdc-dead-animals', 'osu-sanitation', 'cdc-mosquito-home', 'nols-waste', 'hesperian-germs'],
      checked: '2026-11-26'
    },

    'san-pests': {
      intro: 'After a storm or flood, rats, mosquitoes and snakes move into new places, often near people. Most of the fix is keeping food sealed and water from standing.',
      parts: [
        { head: 'Keep rats and mice out', items: [
          'The CDC says rodents move to new areas after a disaster, looking for food, water and shelter.',
          'Keep food and water in containers of glass, metal or thick plastic that have a tight lid.',
          'Close holes in the walls. Some rodents fit through a hole the size of a dime.',
          'Wash dishes and pots as soon as you are done with them.',
          'Do not eat or drink anything a rodent may have touched.',
          'Use spring-loaded snap traps for rodents. With gloves on, seal a dead rodent inside two plastic bags, then throw it out.'
        ] },
        { head: 'Clean up droppings safely', items: [
          'Never sweep or vacuum droppings or urine. That puts germs in the air.',
          'Spray them with a disinfectant or a bleach mix of 1 1/2 cups of bleach in 1 gallon of water until soaked.',
          'Let it soak 5 minutes, then wipe it up with a paper towel.',
          'Throw the towel out in a sealed can outside.',
          'If a building sat empty a long time, the CDC says airing it out 2 to 3 days first may help.'
        ] },
        { head: 'Stop mosquitoes from breeding', items: [
          'Just after a flood, most mosquitoes are nuisance kinds. Kinds that spread disease can rise in the 2 weeks to 2 months following a hurricane.',
          'Once a week, check anything that holds water, such as tires, buckets, toys, pots and trash cans. Empty and scrub it, turn it over, cover it or throw it out.',
          'Cover stored water tightly. Use fine wire mesh on any container with no lid.',
          'Fix cracks in a septic tank and cover open vent pipes.',
          'Keep window and door screens in good repair, and do not prop doors open.',
          'Once a week matters. Hesperian Health Guides says mosquito eggs take about 7 days to hatch, so emptying water every week breaks the cycle.'
        ] },
        { head: 'Prevent bites', items: [
          'Use an insect repellent registered by the EPA. Look for an EPA registration number on the label.',
          'Wear loose long sleeves and long pants.',
          'Do not use oil of lemon eucalyptus or PMD on a child under 3.',
          'Put repellent on your own hands, then on a child\'s face. Keep it off a child\'s hands, eyes, mouth and cuts.',
          'If you use sunscreen, put it on first and repellent second.'
        ] },
        { head: 'Snakes and other animals', items: [
          'Keep away from stray or wild animals. Call local authorities and let them handle it.',
          'Snakes may be swimming to high ground, hiding under debris, or inside your home.',
          'If you see a snake, back away slowly. Do not touch it or try to trap it.',
          'If one is in your home, call your county animal control.'
        ] },
        { head: 'If a snake bites', items: [
          'Call 911. Poison Control is 1-800-222-1222.',
          'Keep the person still and calm, with the bite below the heart.',
          'Try to remember the snake\'s color and shape.',
          'Wash the bite with warm soapy water and cover it with a clean, dry dressing.',
          'Do not use a tourniquet, cut the wound, suck it, put ice on it, or give alcohol or caffeine.',
          'Mayo Clinic adds: take off rings, watches and tight clothing before swelling starts, and mark the edge of any swelling with the time.',
          'The CDC says to keep the bite below the heart. Mayo Clinic says at about heart level. Both say to keep the person and the limb still.'
        ] }
      ],
      mistakes: [
        'Sweeping or vacuuming rodent droppings.',
        'Leaving buckets and tires full of rainwater.',
        'Reaching under debris without looking for snakes.',
        'Cutting or icing a snake bite instead of calling 911.'
      ],
      sources: ['cdc-disaster-animals', 'cdc-disaster-rodents', 'cdc-rodents-home', 'cdc-mosquito-home', 'cdc-mosquito-bites', 'hesperian-mosquito', 'mayo-snakebite'],
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
          'Never mix bleach with any other cleaner, including ammonia. The mix gives off fumes that are dangerous to breathe.',
          'Open windows and doors first. Never use bleach in a closed space.',
          'Wear rubber gloves, boots and eye protection.',
          'Get medical care right away for a bad headache, blurred vision or trouble breathing after using bleach. For trouble breathing, call 911.',
          'Keep bleach and every mix out of reach of children and pets. Label any mix you make.',
          'For flood cleanup, the American Red Cross adds long pants, work gloves and an N95 mask. Have a partner with you, and take breaks often.'
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
          'If wooden cutting boards, pacifiers or baby bottle nipples touched floodwater, throw them out. Bleach cannot make them safe.',
          'Do not drink the water you used for sanitizing.'
        ] },
        { head: 'Laundry and washing up', items: [
          'Wash clothes with detergent in the warmest water the label allows, and dry them all the way.',
          'Wash clothes worn for flood cleanup in hot water and detergent, apart from other laundry.',
          'Wash your hands after you handle dirty laundry.',
          'Throw out soft things you cannot clean or dry fast, like mattresses, pillows and stuffed toys.',
          'Under a boil-water advisory, wash up with water boiled 1 minute, or with 8 drops of bleach per gallon of clear water, left to stand 30 minutes.',
          'On a septic system during a flood, the CDC says to cut back on laundry and dishwashing.',
          'Dry everything you keep as fast as you can. The Red Cross says if a flooded home cannot be dried within 24 to 48 hours, assume mold is growing.'
        ] }
      ],
      mistakes: [
        'Mixing bleach with ammonia or another cleaner.',
        'Using scented, splashless or unlabeled bleach.',
        'Using a mix made yesterday.',
        'Skipping the soap-and-water step before bleach.'
      ],
      sources: ['cdc-bleach', 'cdc-clean-home', 'cdc-food-after', 'cdc-disaster-cleanup', 'cdc-bleach-flyer', 'cdc-disaster-animals', 'epa-septic-flood', 'cdc-septic-flood', 'redcross-flood'],
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
          'Stay 15 feet or more from tents, plants and low branches, with open space above that is at least 3 times as tall as the flames.',
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
          ['Steaks, chops and roasts of beef, pork, lamb and veal', '145°F, then rest 3 minutes'],
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
          'Drown the fire with water. Most people are surprised how much it takes.',
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
          'Store only the wood you need for one season. Keep it 30 feet or more from the house and other buildings.',
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
          'Food in containers closed with twist caps, screw caps, pull tops, flip tops, snap lids or crimped caps.',
          'Home-canned food that floodwater touched. It cannot be cleaned well enough.',
          'Cans that are swollen, leaking, punctured, deeply rusted, or crushed so badly they will not stack or open with a hand opener.',
          'Fridge food that went more than 4 hours without power or ice, and anything with an odd smell, color or texture.'
        ] },
        { head: 'Throw out these kitchen items too', items: [
          'Plastic utensils, wooden cutting boards, pacifiers and baby bottle nipples that floodwater touched. They cannot be cleaned safely.',
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
          'Sanitize them by boiling them in clean water. You can also soak them for 1 minute in 1 cup of unscented bleach mixed into 5 gallons of water. The mix should cover them.',
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
          'Store dried food in airtight containers in a dark place.',
          'The bend test is for everyday use. For long-term storage, The Church of Jesus Christ of Latter-day Saints\' preparedness guide says dried fruit and vegetables should be dry inside and out, enough that they snap when you bend them.'
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
      sources: ['nchfp-sundry', 'usu-drymethods', 'psu-dry', 'purdue-storage', 'uconn-coldstore', 'church-longterm'],
      checked: '2026-11-26'
    },

    'home-return': {
      intro: 'Going back in after a flood or storm is its own job. Do it in order: wait for the all-clear, check the outside, handle gas and power, then document before you clean.',
      parts: [
        { head: 'Before you go back', items: [
          'Stay away until local officials give the all-clear to return. Even then, take it slowly.',
          'Go in daylight so you do not need lights. Bring flashlights, not candles or gas lanterns.',
          'Bring a battery radio for updates from local officials.',
          'Expect no power, water, sewer or trash pickup for a while.',
          'Call or text 211 to find local disaster help and services.'
        ] },
        { head: 'Check the outside first', items: [
          'Walk all the way around. Look for loose power lines, gas leaks and damage to the walls and foundation.',
          'Do not go in if you smell gas, if floodwater is still around the house, or if you see downed lines, downed trees, or cracks in the walls or foundation.',
          'If you have any doubt, have a building inspector or structural engineer check it before you enter.',
          'Never touch a power line that has fallen. Report it to the power company.',
          'Watch for animals, snakes most of all. Use a stick to poke through debris.',
          'LSU AgCenter adds signs of structure damage: cracks, a sagging roofline, leaning, and a shifted foundation. Watch for fire ants as well as snakes.'
        ] },
        { head: 'Gas and power', items: [
          'If you smell gas or think there may be a leak: shut off the main gas valve, then open the windows and get out right away.',
          'Call the gas company, the police or the fire department. Do not turn on lights or do anything that could make a spark. Stay out until you are told it is safe.',
          'If there is standing water and you can reach the main power switch from a dry spot, turn it off. If you would have to step into water to reach it, call an electrician.',
          'While you are standing in water, never switch power on or off or use any electric tool.',
          'Have an electrician check the system before the power goes back on. Appliances must be completely dry before you use them.',
          'If you see sparks or frayed wires, or smell burning, after the power comes back, shut it off at the main breaker.'
        ] },
        { head: 'Air, water and food', items: [
          'If the house was closed up for days, go in briefly, open doors and windows, and let it air out at least 30 minutes before you stay.',
          'If it flooded and stayed closed for several days, assume there is mold. It may also have sewage in it.',
          'Follow local word on whether tap water is safe. If you have a well and the area flooded, have the water tested before you use it.',
          'Until then, drink and cook with bottled, boiled or treated water. Use it too for dishes, brushing teeth, ice and baby formula.',
          'Throw out food that touched flood water, and cold food that sat without power. When in doubt, throw it out.',
          'LSU AgCenter: a flooded well is not safe to drink from until a lab test shows no coliform bacteria. Boiling or bleach does not remove chemicals that got in.',
          'If they touched floodwater, throw out wooden cutting boards and spoons, plastic utensils, pacifiers and baby bottle nipples.'
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
          'If someone is hurt or has had an electric shock, call 911.',
          'A house built before 1978 may have lead paint or asbestos. Learn lead-safe work practices, or get a hazard check, before you tear out walls (LSU AgCenter).',
          'Pump a flooded basement out in stages, about a third of the water each day (University of Minnesota Extension).'
        ] }
      ],
      mistakes: [
        'Going in as soon as the water drops, before officials say it is safe.',
        'Flipping the breaker while standing in water.',
        'Cleaning up before taking photos, then having no proof for the claim.',
        'Running the generator in the garage with the door open.'
      ],
      sources: ['cdc-return-home', 'cdc-flood-reenter', 'cdc-elec-hazards', 'ready-recovering', 'cdc-disaster-cleanup', 'fs-claim', 'lsu-storm-cleanup', 'umn-flood-cleanup'],
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
          'Fix leaks in the roof, walls or pipes as soon as you can. Mold comes back if the water does.',
          'Keep indoor humidity under 60 percent, ideally 30 to 50 (University of Georgia Extension, citing the EPA).',
          'Wood can look dry and still be wet. LSU AgCenter says to wait until a moisture meter reads under 16 percent before you put insulation and drywall back, and never close up wood above 19 percent.'
        ] },
        { head: 'The size rule', items: [
          'Under about 10 square feet (a 3 by 3 foot patch): most of the time you can clean it yourself.',
          'More than 10 square feet, or a lot of water damage: follow the EPA guide for larger jobs, or hire a contractor with mold experience and check references.',
          'If sewage or other dirty water caused it, call a professional who cleans buildings hit by contaminated water.',
          'If it smells moldy but you cannot find it, think about a pro. Pulling off wallpaper or paneling can release a lot of spores.',
          'You do not need a mold test. Whatever the kind, remove it.',
          'LSU AgCenter notes that most homeowners policies do not pay for mold damage or cleanup. Read your own policy.'
        ] },
        { head: 'Protect yourself', items: [
          'Wear at least an N95 respirator approved by NIOSH. Fit it by the package directions. It seals best on a clean-shaven face.',
          'For more than 4 hours of tearing out moldy drywall, a reusable half-face or full-face respirator is better.',
          'Wear goggles with no vent holes, long gloves to the middle of the forearm, boots, long sleeves and long pants.',
          'With bleach, use gloves made of natural rubber, neoprene, nitrile, polyurethane or PVC.',
          'Take a break about every hour, away from the mold, and drink water.',
          'Throw the N95 away when it is damaged, dirty or harder to breathe through.',
          'Seal the moldy area off with plastic, tape plastic over air grilles, and do not run the central air while you work (LSU AgCenter).'
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
          'Wash hard toys in 1 cup of bleach to 5 gallons of water and let them air-dry.',
          'Cut wall covering out above the water line, because water wicks up. University of Minnesota Extension says that can be a foot and a half or more.',
          'Take out wet insulation even if the drywall looks dry.'
        ] },
        { head: 'Clean hard surfaces', items: [
          'Scrub mold off hard surfaces with hot water and detergent, then dry them completely.',
          'If you use bleach, use no more than 1 cup of household bleach in 1 gallon of water. Open doors and windows first.',
          'Never mix bleach with ammonia or with any other cleaner. It makes a toxic gas.',
          'Use a wet mop or a vacuum with a HEPA filter. Do not dry-sweep.',
          'Do not paint or caulk over mold. Clean and dry it first.',
          'It is done when the water problem is fixed, no mold or musty smell is left, and it stays that way when you check back.',
          'Use a cleaner without phosphates; the residue feeds mold. Rinse, but skip the pressure washer, which drives water into materials (LSU AgCenter).'
        ] }
      ],
      mistakes: [
        'Painting over mold. The paint peels and the mold stays.',
        'Keeping a soaked mattress or carpet because it looks dry.',
        'Mixing bleach with another cleaner.',
        'Letting the kids help with the cleanup.'
      ],
      sources: ['epa-mold-brief', 'cdc-mold-about', 'cdc-disaster-cleanup', 'cdc-mold-lungs', 'cdc-return-home', 'lsu-mold', 'lsu-storm-cleanup', 'uga-mold', 'umn-flood-cleanup'],
      checked: '2026-11-26'
    },

    'med-stress': {
      intro: 'Feeling upset after a disaster is normal, and there is no right way to feel. A few simple habits help adults and kids get through it.',
      parts: [
        { head: 'Help by phone or text', items: [
          'The Disaster Distress Helpline takes calls and texts at 1-800-985-5990. The call is toll-free, and the line is open 24 hours a day, all year, anywhere in the U.S., including its territories.',
          'Trained crisis counselors listen without judgment, share ways to cope, and can connect you to local help.',
          'You do not have to give your name. You can call for yourself or for someone else.',
          'Counselors can bring in an interpreter in over 100 languages. Deaf and hard of hearing callers can text or call the same number.',
          'If you are struggling or having thoughts of hurting yourself, call or text 988, or chat at 988lifeline.org.',
          'If someone is in danger right now, call 911. For shelter, food and local services, call 211.'
        ] },
        { head: 'What is normal', items: [
          'Worry about your family, sadness, anger and grief are normal ways to react to an abnormal event.',
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
          'In hot weather, ask them to check in often.',
          'Arrange for more than one person to check on you, the Red Cross says, so there is a backup if the first cannot come.'
        ] },
        { head: 'Spares for aids and devices', items: [
          'Pack extra glasses, contacts, hearing aids and hearing aid batteries.',
          'If you use a power wheelchair, keep a light manual chair as a backup if you can, and show others how to fold, set up and run the chair.',
          'Keep an extra battery for a power chair or other battery device, and keep it charged. If you cannot buy one, ask local agencies or charities for help.',
          'Keep a tire patch kit or sealant, a spare inner tube and a small pump for chair or scooter tires that can go flat.',
          'Keep a spare cane or walker, and an extra seat cushion if you use one.',
          'Write down the style, model and serial number of each device, how to run it, and where it came from (Medicare, Medicaid or insurance).',
          'Label each device and attach laminated instructions, so a helper can run it.'
        ] },
        { head: 'Communication', items: [
          'Carry a printed card, or keep a note on the phone, that tells responders how to talk with you. The Administration for Community Living offers a communication card and a medical information card.',
          'Deaf or hard of hearing: a weather radio with a text display and flashing alert, pen and paper, a battery lantern for signing or lip reading in the dark, and smoke alarms with a strobe or vibrating pad.',
          'Blind or low vision: label supplies in Braille or large print, and keep a list of them as an audio file or on a flash drive.',
          'Speech: plan for the device failing. Keep laminated cards with phrases or pictures.',
          'Wear a medical alert tag or bracelet, and keep a list of medicines, doses and allergies.',
          'A medical alert system often needs a working phone line. Keep a backup, like a charged cell phone.',
          'Plan for someone to pass on warnings if you cannot use the TV or radio.'
        ] },
        { head: 'Service animals and treatment', items: [
          'Pack food, water, a collar with an ID tag and medical records for a service or support animal.',
          'All shelters take service animals. Many do not take pets, so plan another place for them.',
          'If you get dialysis or other regular treatment, know more than one place that can give it. Ask your clinic about its emergency plan and backup providers.',
          'If a device needs power, see the step on medical devices that need power.',
          'If your care attendant comes from an agency, ask what the agency does in an emergency. Not all shelters help with daily care, so bring the attendant if you go to one.',
          'When you reach a shelter, check whether the shelter can meet your care needs. People with disabilities can access Red Cross shelters.'
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
          'In an apartment building, ask the managers to mark the exits that are accessible and to set up help getting out of the building. In a high-rise, ask about an evacuation chair.',
          'Line up neighbors who can help you out of the building.',
          'Plan an accessible ride out of town. Ask local transit and your emergency management office what options exist.',
          'Leave early. For someone with dementia, never leave them alone, and bring a pillow or blanket they can hold. At a shelter, pick a quiet corner away from the exits.',
          'Most basements are not wheelchair accessible, the Red Cross notes. Pick another tornado shelter, and plan how you will get there.'
        ] }
      ],
      mistakes: [
        'Counting on a medical-needs list to bring help, with no plan of your own.',
        'A spare chair battery that was never charged.',
        'Only one person who knows how the wheelchair or the oxygen works.'
      ],
      sources: ['ready-disab', 'ready-older', 'cdc-disab-plan', 'acl-emergency', 'usfa-disab-fire', 'fema-ayr-basic', 'redcross-disab', 'redcross-shelter'],
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
          'Go over it and practice it at least once a year with everyone on the farm.',
          'Partner with other farms for trailers and places to go, Mississippi State Extension says, and talk through disease risks if herds must share space.'
        ] },
        { head: 'ID and proof of ownership', items: [
          'Give every animal some form of ID.',
          'Take clear photos from all sides, with close-ups of markings, at different times of year. Include some of you with the animal.',
          'Write a description: breed, color, markings and temperament.',
          'Quick ID: a livestock crayon or marker with your name and phone number, a neck band, tags, mane tags or painted numbers on the hooves. Lasting ID: a microchip, brand or tattoo.',
          'Put a tag on each halter with the animal\'s name, your name, your phone and a second number.',
          'Keep Coggins tests, vet records, proof of rabies shots and the bill of sale or registration papers in a watertight bag with your other papers.',
          'Spray paint or paint sticks give a quick mark after a storm, but they do not replace lasting ID.'
        ] },
        { head: 'Trailers and loading', items: [
          'Arrange trailers ahead. If you do not have enough room, keep a list of haulers or friends with trailers and have people on standby.',
          'Keep trailers and tow vehicles in good working order.',
          'Get the animals used to being gathered, penned and loaded. Practice until they load and unload calm.',
          'Line up experienced handlers and drivers.',
          'Animals can spook in a disaster. Normal handling may not work as well, so practice now.',
          'Check trailers for safe floors, working lights and good tires, with spares.'
        ] },
        { head: 'Where to go', items: [
          'Arrange a place outside your area before you need it: a friend\'s farm, fairgrounds, stockyards, an Extension facility or a horse venue. Find more than one.',
          'Make sure the place has feed, water, vet care and handling gear.',
          'Map a main route and a second route.',
          'Your county Extension agent, animal control or emergency management office can tell you about local animal shelters.',
          'Call the place before you leave to make sure it is still open and not hit by the disaster. Listen for special livestock evacuation routes.',
          'For a hurricane, start moving livestock about 96 hours before landfall, MSU Extension says. Later, traffic can trap animals in trucks.',
          'Do not go out to check on animals during the storm. Wait until it is safe; responders might not be able to get to you.'
        ] },
        { head: 'Feed and water for days', cols: ['When', 'Have on hand', 'Source'], rows: [
          ['Sheltering in place', '7 days of feed, water and fuel', 'California Dept. of Food and Agriculture'],
          ['Kit kept at home', 'At least a week of feed and of water; replace feed every 3 months', 'UConn Extension'],
          ['Evacuating', 'At least 3 days of feed, hay and water, loaded in the trailer', 'New Jersey Dept. of Agriculture'],
          ['If you must leave them', 'Hay and water for 48 to 72 hours', 'New Jersey Dept. of Agriculture']
        ], note: 'Store feed in airtight, waterproof containers. Do not count on automatic waterers; the power may go out. Do not leave large amounts of grain, which can upset a horse\'s gut.' },
        { head: 'Stay, turn out or leave', items: [
          'Follow officials on whether to evacuate or shelter in place. Leave early: if you wait, you may be told to leave the animals behind, and you may be kept out for days.',
          'If you cannot move them, decide ahead whether they are safer in the barn or loose in a field. It depends on the disaster, how sound the barn is, flood risk, and trees and debris nearby.',
          'In a flood or tornado it is usually best not to shut them in the barn, since the roof can come down. In a flood, move them to higher ground.',
          'Tie down or put away troughs, buckets and loose gear that wind can throw, and fill every trough.',
          'If you leave them, put them in the spot you picked for that disaster, with hay and water for 48 to 72 hours.',
          'Make sure every animal carries ID in case you have to turn them loose or claim them from a shelter.',
          'If you cannot move cattle, turn them into large pastures on high ground, clear of debris and overhead power lines. Do not pen them in small areas or barns.'
        ] }
      ],
      mistakes: [
        'Waiting for the evacuation order, then being told to leave the animals behind.',
        'A trailer the horse has never been loaded into.',
        'Counting on an automatic waterer when the power is out.',
        'Leaving a pile of grain for animals you leave behind.'
      ],
      sources: ['ready-pets', 'fema-ayr-basic', 'cdfa-horse-evac', 'fdacs-horse-prep', 'nj-horse-during', 'uconn-equine', 'msstate-livestock', 'msstate-beef'],
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
          'Without the app, text SHELTER plus your ZIP code to 43362 (for example: Shelter 01234). Standard text rates apply.',
          'Sign up for local emergency alerts and weather alerts. They give shelter locations as well as warnings.',
          'Keep a battery radio and follow local instructions on where to go and which roads to take.',
          'The Red Cross shows its open shelters on a map on its website, and its free Emergency app lists shelters too.',
          'Red Cross service sites may offer meals, first aid, help replacing lost prescriptions and glasses, and charging for phones and medical devices.'
        ] },
        { head: 'What to bring', items: [
          'Bring your emergency kit. Shelters often have water, food, medicine and toilets, but you should have your own supplies.',
          'For each person, a warm blanket or sleeping bag, plus sturdy shoes and a change of clothes.',
          'Medicines, a list of them, glasses, and chargers with a backup battery.',
          'Copies of IDs and insurance papers, and some cash.',
          'Soap, hand sanitizer and disinfecting wipes. You will be living close to many people.',
          'Books or games for the kids, and a familiar pillow or blanket for anyone who struggles with change.'
        ] },
        { head: 'Shelter rules', items: [
          'Alcohol and weapons are not allowed in emergency shelters. Smoking is limited.',
          'All shelters take service animals. Most public shelters do not take pets, so plan another place for them.',
          'Shelter life is crowded and hard. Work with the shelter managers and the people helping them.',
          'Stay until local officials say it is safe to leave.',
          'Red Cross shelters are free and open to anyone in need. You do not need ID, just your name and where you lived. Tell staff about any needs for equipment, food, culture or religion.',
          'The Red Cross says its shelters try to take household pets, sometimes housed in a separate place nearby. Ready.gov says most public shelters do not, so keep another plan for them.'
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
      sources: ['ready-shelter', 'ready-evacuation', 'fema-app', 'ready-kit', 'fema-ayr-basic', 'redcross-shelter', 'redcross-hurricane'],
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
          'Extra windshield washer fluid of the winter kind, with de-icer.',
          'The Red Cross adds newspapers for warmth, plastic bags for sanitation, and an insulated bottle of warm broth.'
        ] },
        { head: 'Check the tires', items: [
          'Fill each tire to the pressure on the label on the driver\'s door frame, or in the owner\'s manual.',
          'Do not use the number on the tire itself. That is the most the tire can hold, not what your car needs.',
          'Check the pressure cold, after the car has sat at least three hours. Cold weather lowers tire pressure.',
          'Tread depth must be 2/32 of an inch or more. Set a penny upside down in a groove, Lincoln\'s head first. If the top of his head shows, it is time for new tires.',
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
          'Never drive into flood water. Six inches can stall a car or make you lose control. Many cars will float in one foot of water.',
          'If you are stuck in snow, stay in the car. Run the engine about 10 minutes an hour for heat, with a window open a crack.',
          'Keep the exhaust pipe clear of snow, so carbon monoxide does not build up inside.',
          'Turn on the dome light at night, tie a bright cloth to the antenna, and raise the hood when the snow stops.',
          'If a power line falls on the car, stay inside until help comes. If you are in danger, call 911.',
          'If you are stuck, stay with the car unless help is in sight within 100 yards. Move your arms and legs now and then, take turns sleeping, and huddle together for warmth.'
        ] }
      ],
      mistakes: [
        'Filling the tires to the number printed on the tire.',
        'Running the engine while stuck with snow blocking the exhaust pipe.',
        'Walking away from a stuck car in blowing snow.',
        'Driving into water on the road because it looks shallow.'
      ],
      sources: ['ready-car', 'nhtsa-winter', 'nhtsa-summer', 'nws-winter-before', 'nws-winter-during', 'redcross-winter'],
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
          'Keep cool with fans or air conditioning. If you cannot stay cool, or smoke keeps getting in, go somewhere else: family out of the smoke, or a public cleaner-air shelter.',
          'Turn off a swamp cooler. Like a window unit, it pulls in outside air (University of Nevada, Reno Extension).'
        ] },
        { head: 'Filter the air', items: [
          'A portable air cleaner with a HEPA or other pleated filter works best. Pick one whose smoke CADR is at least two-thirds of the room\'s floor area in square feet. A 150-square-foot room needs a smoke CADR of at least 100.',
          'Pick one that makes little or no ozone. The EPA points to the California Air Resources Board list of certified air cleaners.',
          'Skip ionizers, electrostatic and UV air cleaners for smoke. They may not remove it and can make ozone.',
          'Run it all the time on the highest setting, with space around it so air flows freely.',
          'If you have central air, put in a MERV 13 or higher filter if the system can take it, and set the fan to On instead of Auto.',
          'Buy it before fire season and keep spare filters. Change them when they look dirty or start to smell of smoke.',
          'Oregon State University Extension says portable air cleaners with good filters may cut indoor particles by as much as 45 percent during smoke.'
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
      sources: ['epa-cleanroom', 'airnow-aqi', 'epa-wf-iaq', 'epa-filtration', 'epa-diy-cleaner', 'epa-smoke-masks', 'cdc-wf-kids', 'airnow-smokeready', 'osu-smoke', 'unr-smoke'],
      checked: '2026-11-26'
    },

    'plan-pandemic': {
      intro: 'In a long outbreak, schools and work may close and you may need to stay home for weeks. A plan for supplies, caring for the sick and staying in touch keeps the house running.',
      parts: [
        { head: 'Stock up for two weeks at home', items: [
          'Gather supplies for staying home several days or weeks: water, prescriptions, food that keeps and cleaning supplies.',
          'Store at least a gallon of water per person per day, and try for two weeks. The steps on two weeks of water and two weeks of food show how.',
          'Buy a little at a time, so everyone can get what they need.',
          'If you expect trouble getting to a pharmacy, ask for early refills. See the step on keeping a week of extra daily medicine.',
          'Keep the sick-day basics from the step on sickness in the house, plus extra soap, tissues and household cleaner.',
          'Keep masks that fit well. N95 respirators protect the most, then other filtering respirators, then disposable masks, then cloth.'
        ] },
        { head: 'Caring for a sick person at home', items: [
          'The sick person stays home and away from others, including people in the house who are not sick.',
          'Spend as little time close to the sick person as you can, and avoid being face to face.',
          'When you hold a sick child, put their chin on your shoulder so they do not cough in your face.',
          'After you touch the sick person, their tissues or their laundry, wash your hands.',
          'A mask on the sick person, the caregiver or both adds protection, most of all when there is no room to stay fully apart.',
          'Bring in fresh air: open windows and doors, run exhaust fans, or use a portable HEPA air cleaner. With central air that uses a filter, switch the fan setting to on instead of auto, and use pleated filters.',
          'Watch for the emergency signs in the guide on sickness in the house. For a medical emergency, call 911.'
        ] },
        { head: 'Cleaning when someone is sick', items: [
          'Clean first with soap or detergent and water. When someone is sick, disinfect after cleaning.',
          'Use an EPA-registered disinfectant or a stronger bleach solution. See the step on cleaning with bleach the safe way.',
          'Leave the disinfectant wet on the surface for the contact time on the label.',
          'Wear gloves, open windows or run a fan, and never mix products.',
          'Clean things people touch often: light switches, doorknobs, countertops and handrails.',
          'It is safe to wash a sick person\'s laundry with everyone else\'s. Use detergent, dry it completely, and wash your hands after.'
        ] },
        { head: 'When schools and work close', items: [
          'Prepare for schools, workplaces and community centers to close.',
          'Set up online school, working from home and video calls before you need them.',
          'Ask your employer about paid time off and working from home. The CDC asks employers to offer both.',
          'Know that a person with flu should stay home from work for at least 5 days after symptoms start, even with no fever.',
          'Review your health insurance, including visits by phone or video.',
          'Make password-protected digital copies of important papers and keep them in a safe place.'
        ] },
        { head: 'Stay in touch and stay informed', items: [
          'Have more than one way to reach family, friends and caregivers: calls, texts, the internet and social media. Texts often go through when calls do not.',
          'Keep important phone numbers in your plan. See the step on writing the key phone numbers on paper.',
          'Stay connected with family and friends by phone and video calls.',
          'It is normal to feel anxious or stressed. Talk to someone if you are upset. See the step on handling stress.',
          'Follow the CDC and your state and local health departments for vaccine and testing news.',
          'Share only accurate information, and watch out for scams and fraud.'
        ] }
      ],
      mistakes: [
        'Buying everything at once at the first news.',
        'Holding a sick child face to face.',
        'Mixing cleaning products to make them stronger.',
        'Passing on rumors about cures instead of word from the health department.'
      ],
      sources: ['ready-pandemic', 'cdc-flu-caring', 'cdc-flu-home', 'cdc-resp-sick', 'cdc-resp-air', 'cdc-resp-masks', 'cdc-clean-home', 'cdc-store', 'cdc-stay-connected', 'fda-disaster'],
      checked: '2026-11-26'
    },

    'hz-space': {
      intro: 'Space weather means the changing conditions in space and on the sun that can affect technology on Earth. Earth\'s magnetic field and atmosphere block the most harmful effects, and power outages from it are rare, so a strong storm is handled with the same plan as any long outage.',
      parts: [
        { head: 'What it is', items: [
          'The sun is the main source. Bursts of plasma called coronal mass ejections, and bursts of radiation called solar flares, cause space weather.',
          'A coronal mass ejection that reaches Earth can cause a geomagnetic storm. Most take several days to arrive, but some have arrived in as little as 18 hours.',
          'Solar flares can cause radio blackouts on the side of Earth facing the sun.',
          'A big storm can bring the northern lights far south. At the extreme level they have been seen as far south as Florida and southern Texas.'
        ] },
        { head: 'What it can do', items: [
          'Power: a storm can push strong currents through long power lines. In extreme cases this can cause wide blackouts and damage transformers. A storm on March 13, 1989 left 6 million people in Canada without power for 9 hours.',
          'GPS: a storm can throw off GPS positions, for hours in a severe storm and for days in an extreme one.',
          'Radio: long-range high frequency (HF) radio can fade or black out, from minutes to a day or two.',
          'Satellites: particles from the sun can damage satellites used for communications, GPS and weather forecasts.',
          'A long outage could then stop water and wastewater systems, food and medicine kept cold, heat and air conditioning, phones, public transit and fuel delivery.'
        ] },
        { head: 'The storm scale', cols: ['Level', 'Name', 'What it can do to the power grid', 'How often in an 11-year cycle'], rows: [
          ['G1', 'Minor', 'Weak power grid swings', 'About 1,700 storms (900 days)'],
          ['G2', 'Moderate', 'Voltage alarms in far-north power systems. Long storms may damage transformers.', 'About 600 (360 days)'],
          ['G3', 'Strong', 'Voltage fixes may be needed. False alarms on some protection devices.', 'About 200 (130 days)'],
          ['G4', 'Severe', 'Possible wide voltage problems. Some protective systems may trip key parts of the grid off.', 'About 100 (60 days)'],
          ['G5', 'Extreme', 'Wide voltage problems. Some grids may collapse or black out, and transformers may be damaged.', 'About 4 (4 days)']
        ], note: 'From NOAA\'s Space Weather Scales. NOAA also has an R scale for radio blackouts and an S scale for solar radiation storms. The S scale mostly affects satellites, high-flying aircraft and radio near the poles.' },
        { head: 'Where to get the forecast', items: [
          'NOAA\'s Space Weather Prediction Center, swpc.noaa.gov, is the official source. Its home page shows current conditions on the NOAA scales.',
          'Its 3-Day Forecast is a plain-language, one-page forecast issued every 12 hours.',
          'It issues alerts, watches and warnings, like weather bulletins, and you can sign up to get them by email.',
          'A geomagnetic storm watch can come up to three days ahead, but it is less sure of the timing and strength. A warning is more certain, but often comes only minutes to a couple of hours ahead.',
          'Follow Emergency Alert System messages and your local officials for what to do.'
        ] },
        { head: 'Get ready, and what to do in a storm', items: [
          'Build your kit and family communication plan. The steps on lights, phone charging, water, food and the fridge cover a space weather outage too.',
          'Keep the gas tank close to full. Gas pumps need power.',
          'Learn where the manual release lever is on an electric garage door, and how to use it.',
          'Keep extra batteries or chargers for phones and laptops, and a charger in the car.',
          'Most refrigerated medicine can stay in a closed fridge for several hours. Ask the doctor or pharmacist about yours.',
          'During a storm, use as little electricity as you can, to help the power company avoid rolling blackouts. Unplug appliances if officials ask, and keep phone calls to what you need.',
          'If GPS is off, see the step on getting around without your phone.'
        ] },
        { head: 'After the power comes back', items: [
          'Throw out food that sat at 40°F or warmer for two hours or more, or that smells, looks or feels wrong.',
          'Never taste food to check it. Some food looks and smells fine but is not safe.',
          'Food that still has ice crystals and is colder than 40°F can be refrozen. If you are not sure, check with a food thermometer.'
        ] }
      ],
      mistakes: [
        'Treating every solar storm headline as a coming blackout. Most storms are minor, and big outages are rare.',
        'Taking rumors over the NOAA forecast.',
        'Running the car low on gas when pumps may not work in an outage.',
        'Tasting food to see if it is still safe after an outage.'
      ],
      sources: ['ready-space', 'noaa-swpc', 'noaa-scales', 'noaa-3day', 'noaa-swpc-alerts', 'nws-space', 'noaa-gstorm'],
      checked: '2026-11-26'
    },

    'plan-locations': {
      intro: 'A disaster may hit while you are at work, on the road or apart from the kids. Find out the plans at the places you go most, and fit your own plan around them.',
      parts: [
        { head: 'The places to plan for', items: [
          'Ready.gov lists them: work, the car, the bus or train, school and daycare, places of worship, sports fields, theaters, shopping areas, and hotels when you travel.',
          'For each one, ask the building manager or the group what plan they have. If there is none, you may need to help build one.',
          'Learn the local alerts there, the building alarm, the evacuation plan with other exits, and the shelter-in-place plan.',
          'Outdoor places like ball fields need a quick place to shelter from lightning or a tornado.',
          'Notice low ground that could flash flood, and buildings like mobile or modular ones that need a plan to go elsewhere.'
        ] },
        { head: 'At work', items: [
          'Ask your employer about its policies for disasters, and how it will give you warnings.',
          'Many workplaces must have an emergency action plan. It covers how to report an emergency, how to evacuate and which route to take, how everyone is counted afterward, and who to contact.',
          'Ask who can order an evacuation, which exit is yours, where the meeting point is, and when you would shelter inside instead, such as for a tornado or a chemical spill nearby.',
          'Learn what each alarm sounds like. Different alarms can mean different actions.',
          'A workplace with 10 or fewer workers may give its plan by word of mouth, not on paper. Ask anyway.',
          'In a high-rise: know the closest exit and a second one. Do not use the elevators. Stay to the right on the stairs so responders can come up.'
        ] },
        { head: 'What to keep at work', items: [
          'Plan to stay sheltered at work for 24 hours or more.',
          'Pack food, water and any medicines you need in one grab-and-go case.',
          'Keep comfortable walking shoes there. Leaving may mean walking a long way.'
        ] },
        { head: 'Getting home when roads or transit are out', items: [
          'Use Ready.gov\'s Commuter Emergency Plan. Write your daily route and other routes, to and from work and the other places you go.',
          'List the bus, train or ferry lines, the stops and the fares, and the numbers for a local taxi, commuter rail and bus line.',
          'Check if your area has a 511 traffic and travel information service, and write down the local links.',
          'Keep the plan in your wallet or another place you can reach in a disaster.',
          'If a car is hard to control, pull over, stop and set the parking brake. If the road could be damaged, stay off overpasses and bridges and away from power lines and signs.',
          'If a power line comes down on your car, stay in the car. Wait for a trained person to remove the line. Listen to the radio for instructions.'
        ] },
        { head: 'School and daycare', items: [
          'Ask if the school stores food, water and other basic supplies.',
          'Ask what extra your child would need overnight there: diapers, a battery pack for equipment, special food or formula, and medicines such as inhalers. Ask if the school keeps them or if you should bring them to store.',
          'Ask how and when staff can give your child medicine, and who does it.',
          'Keep your phone number and address current with the school. Tell them as soon as either changes.',
          'If the school shelters in place, you may not be allowed to drive there, and the doors will likely be locked. Wait until school officials say it is safe to pick up your child.',
          'See the step on the school plan for the pickup list.'
        ] },
        { head: 'Meeting up', items: [
          'Talk as a family about what each person would do if a warning came while they were away from home.',
          'Use the meeting spots on your family plan. See the step on meeting spots.',
          'Text instead of calling. Texts get through more easily and leave the lines open for emergency workers.'
        ] }
      ],
      mistakes: [
        'Keeping dress shoes at work and the walking shoes at home.',
        'Knowing only the elevator and the front door of the building.',
        'Knowing one way home, and not which bus runs if the trains stop.'
      ],
      sources: ['ready-locations', 'ready-commuter', 'osha-eap', 'osha-evac', 'ready-kit', 'fema-ayr-basic', 'cdc-kids-abc', 'cdc-kids-before'],
      checked: '2026-11-26'
    },

    'plan-kids-kit': {
      intro: 'A child who helped build the kit knows what is in it and feels calmer when it comes out. Ready.gov and the CDC both say to bring the kids into the work.',
      parts: [
        { head: 'Start from the kids\' checklist', items: [
          'Ready.gov has a printable emergency checklist for kids. Sit down together and mark what the family already has and what you still need.',
          'Plan enough for at least three days.',
          'Each child\'s part: a change of clothes for three days with sturdy shoes, right for your weather, and a sleeping bag or warm blanket.',
          'A toothbrush, toothpaste and soap.',
          'A flashlight with spare batteries, and a whistle to signal for help.',
          'Keep the kit together in a safe place that everyone can find easily.'
        ] },
        { head: 'Comfort items', items: [
          'Books, games or puzzles.',
          'A favorite stuffed animal or blanket.',
          'The CDC says a flashlight, games and special toys help keep children calm in an emergency.',
          'Ask the child what they think should go in. Let them choose their own comfort items.'
        ] },
        { head: 'The contact card', items: [
          'The CDC says to make a card for your child\'s backpack and one for your wallet.',
          'On it: any allergies or medical conditions, plus the child\'s name and date of birth.',
          'Contact details for each parent or guardian, and for the school, daycare or caregivers.',
          'Emergency contacts in case you cannot be reached. Include one out-of-town person that everyone in the family contacts.',
          'Keep it in the backpack, a school notebook or a wallet, or put the numbers in the child\'s phone.',
          'Help them memorize the home number and each parent\'s cell number.'
        ] },
        { head: 'Jobs that fit their age', items: [
          'Young children: pick their comfort items, and find the supplies on a family scavenger hunt.',
          'Matches go in a waterproof container, and a grown-up handles them.',
          'Children old enough: learn how to call 911 and memorize the key numbers.',
          'Older kids: read the checklist and find what is missing. Ready.gov Kids has a free Build a Kit game for practice.',
          'Every child can draw a map with home, school and the meeting spot marked.',
          'Teens can lead the family\'s planning. Some areas run a Teen CERT program for more training.'
        ] },
        { head: 'Children with special health care needs', items: [
          'Put together an emergency care kit and an emergency care plan. Let the child help when possible.',
          'Ask the child\'s health care provider to help make sure the medical needs are in the plan.',
          'Tell your local EMS and emergency management office if the child has special equipment, or equipment that needs power. Ask about transportation and shelters that can meet the child\'s needs.',
          'Practice the plan with the child so they stay calm.'
        ] },
        { head: 'Keep it going', items: [
          'Hold regular family meetings to go over the plan and the kit.',
          'Rethink the kit every year as the child grows. Swap clothes and comfort items they have outgrown.',
          'Replace anything past its date.'
        ] }
      ],
      mistakes: [
        'Packing the kit for the kids instead of with them.',
        'A contact card with no line for allergies or medicines.',
        'Letting a child pack or carry the matches.'
      ],
      sources: ['ready-kids-kit', 'ready-kids-checklist', 'ready-kids-commplan', 'cdc-kids-before', 'cdc-kids-abc', 'cdc-kids-shcn', 'ready-kit', 'ready-teen-cert'],
      checked: '2026-11-26'
    },

    'money-farm': {
      intro: 'The USDA Farm Service Agency runs disaster programs for farms and ranches. They may help after a loss, but only if you can prove what you had and what you lost, and file in time.',
      parts: [
        { head: 'The main programs for livestock', cols: ['Program', 'What the page says it covers', 'Last day to file'], rows: [
          ['Livestock Indemnity Program (LIP)', 'Deaths above normal from eligible adverse weather, from disease, or from attacks by animals under federal protection. Also animals sold at a reduced price after an injury from an eligible loss.', 'March 1 after the year of the loss'],
          ['Emergency Assistance for Livestock, Honeybees, and Farm-Raised Fish (ELAP)', 'Losses other programs do not cover: disease, some adverse weather, and shortages of feed and water, including hauling feed and water. Not on federally managed land.', 'March 1 after the year of the loss'],
          ['Livestock Forage Disaster Program (LFP)', 'Grazing losses from qualifying drought, or from fire on federally managed land.', 'March 1 after the year of the loss'],
          ['Emergency Conservation Program (ECP)', 'Repairing farmland, permanent fences and water structures after a natural disaster, and emergency water measures in severe drought.', 'Set signup periods after a disaster. Apply as soon as you can.'],
          ['Emergency Farm Loans', 'Loans for farms in a disaster-designated county that cannot get enough credit elsewhere.', 'Within eight months of the disaster designation']
        ], note: 'From the Farm Service Agency and farmers.gov pages as loaded on November 26, 2026.' },
        { head: 'Records to keep now', items: [
          'Take time- and date-stamped photos or video of your animals before any loss, to show your starting numbers.',
          'Keep purchase and sales receipts, production records and vaccination records.',
          'Keep vet records, brand inspection records, and ear tag, shearing or docking records.',
          'Keep the inventory records you use for taxes, property tax records, and bank or loan papers.',
          'Keep trucking or livestock hauling records, and any private insurance papers.',
          'Records made at the time count. Write the counts down as they change.',
          'University of Georgia Extension: write down the hay on hand, with the number of bales, the type, the quality and the bale size.'
        ] },
        { head: 'Proof after a loss', items: [
          'Take photos, with the date, of the animals that died.',
          'Keep rendering truck receipts or certificates, and vet records.',
          'Keep any FEMA or National Guard records, and any third-party certification.',
          'If you sell injured animals at a reduced price, keep the sales receipt from an independent auction or sale barn, or the processing plant receipt.',
          'For feed or water losses, keep the feed and water receipts.',
          'Photograph damaged hay where it sits, with time stamps, and write a signed statement of the count, type and size.',
          'Mark on a map where floodwater reached and when it went down, and keep a log of lost grazing days.'
        ] },
        { head: 'Report the loss', items: [
          'Report losses to your local Farm Service Agency office, and to your crop insurance provider if you have crop coverage.',
          'Deadlines differ by program. The crop ones are short: crop insurance wants a call within 72 hours of finding damage and a written follow-up within 15 days. Noninsured crop coverage wants notice within 15 days.',
          'For LIP and ELAP you file a notice of loss and a payment application, with proof of your herd count, the losses and the event that caused them.',
          'Go in early. The office can tell you the forms and the current dates.',
          'A UGA Extension circular says a notice of crop loss goes to the FSA office within 30 days. Some limits above are shorter. Go by the shortest one that fits you.',
          'Get flood-damaged hay out of the barn right away. Wet hay can heat up and catch fire on its own.'
        ] },
        { head: 'Find your local office', items: [
          'Use the Service Center Locator on farmers.gov. Pick your state and county.',
          'A USDA Service Center connects you with the Farm Service Agency, the Natural Resources Conservation Service and Rural Development.',
          'The FSA Office Locator lets you book an appointment with your local farm program or farm loan office.',
          'The Disaster Assistance Discovery Tool on farmers.gov asks five short questions to point you to programs that may fit.'
        ] },
        { head: 'Programs change', items: [
          'Congress and the USDA change these programs. A new law changed some LIP, ELAP and LFP rules starting in 2026.',
          'The LIP records fact sheet is dated January 2026. The rest is from the program pages as loaded on November 26, 2026.',
          'A county committee reviews your records. Payment is never certain, and some programs depend on the funds Congress sets aside.',
          'Check the program page or call your local office before you count on any help.'
        ] }
      ],
      mistakes: [
        'No dated count of the herd from before the loss.',
        'Losing the proof: no dated photos and no rendering receipt.',
        'Waiting to report because the deadline seems far off.',
        'Assuming one program covers every kind of loss.'
      ],
      sources: ['fsa-lip', 'fsa-elap', 'fsa-lfp', 'fsa-ecp', 'fsa-emloan', 'usda-lip-docs', 'fg-flood', 'fg-servicecenter', 'fg-disaster', 'uga-livestock-losses'],
      checked: '2026-11-26'
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* Prepare Me: the areas, the disasters, the questions and every step the coach can give.
   A step is one job a man can finish. Each says who, what, when, why and what done looks like.
   cost: 0 nothing, 1 under $25, 2 $25 to $100, 3 $100 to $300, 4 over $300. Free steps come first.
   rank: 1 is the most basic. need: the household facts that make the step apply (all must hold).
   hz: the disasters the step gets him ready for ('all' means every one).
   comfort: true marks a comfort step: his own choice, shown as an extra, never scored. Survival steps make the score.
   Text may carry {people}, {gal3}, {gal14}, {petsLine}, filled in from his answers. */
(function (root) {
  'use strict';
  var RD = root.RD = root.RD || {};

  RD.AREAS = [
    { id: 'water',    name: 'Water',               short: 'Water' },
    { id: 'food',     name: 'Food',                short: 'Food' },
    { id: 'sanitation', name: 'Sanitation and hygiene', short: 'Sanitation' },
    { id: 'power',    name: 'Power and heat',      short: 'Power' },
    { id: 'medical',  name: 'Medical and first aid', short: 'Medical' },
    { id: 'comms',    name: 'Communications',      short: 'Comms' },
    { id: 'plan',     name: 'Family plan',         short: 'Plan' },
    { id: 'home',     name: 'Security and home',   short: 'Home' },
    { id: 'skills',   name: 'Skills',              short: 'Skills' },
    { id: 'money',    name: 'Money cushion',       short: 'Money' }
  ];

  /* The disasters. "always" ones apply to every home. The rest come from his town: FEMA's National Risk Index
     for his county (data/hazards.json), using the FEMA hazards listed in nri. */
  RD.HAZARDS = [
    { id: 'outage',     name: 'Long power outage',             always: true, link: 'ready-power' },
    { id: 'fire',       name: 'House fire',                    always: true, link: 'ready-fire' },
    { id: 'sickness',   name: 'Sickness in the house',         always: true, link: 'ready-pandemic' },
    { id: 'income',     name: 'Losing a paycheck',             always: true, link: 'ready-money' },
    { id: 'evacuate',   name: 'Having to leave home fast',     always: true, link: 'ready-evacuation' },
    /* Attacks: they can reach any town, so every plan starts with them. Unlike the every-home list, he can take one off. */
    { id: 'chemical',   name: 'Chemical spill or chemical attack', always: true, attack: true, link: 'ready-chemical' },
    { id: 'cyber',      name: 'Cyber attack on power, banks or phones', always: true, attack: true, link: 'ready-cyber' },
    { id: 'nuclear',    name: 'Nuclear or radiation emergency', always: true, attack: true, link: 'ready-radiation' },
    { id: 'bio',        name: 'Biological attack or outbreak', always: true, attack: true, link: 'ready-bio' },
    { id: 'tornado',    name: 'Tornado',                       nri: ['TRND'], link: 'ready-tornadoes' },
    { id: 'hurricane',  name: 'Hurricane',                     nri: ['HRCN'], link: 'ready-hurricanes' },
    { id: 'flood',      name: 'Flood',                         nri: ['IFLD', 'CFLD'], link: 'ready-floods' },
    { id: 'storm',      name: 'Severe thunderstorms, hail and high wind', nri: ['SWND', 'HAIL', 'LTNG'], link: 'ready-thunderstorms' },
    { id: 'winter',     name: 'Winter storm, ice and deep cold', nri: ['WNTW', 'ISTM', 'CWAV'], link: 'ready-winter' },
    { id: 'heat',       name: 'Extreme heat',                  nri: ['HWAV'], link: 'ready-heat' },
    { id: 'drought',    name: 'Drought',                       nri: ['DRGT'], link: 'ready-drought' },
    { id: 'wildfire',   name: 'Wildfire',                      nri: ['WFIR'], link: 'ready-wildfires' },
    { id: 'earthquake', name: 'Earthquake',                    nri: ['ERQK'], link: 'ready-earthquakes' },
    { id: 'landslide',  name: 'Landslide and mudslide',        nri: ['LNDS'], link: 'ready-landslide' },
    { id: 'tsunami',    name: 'Tsunami',                       nri: ['TSUN'], link: 'ready-tsunamis' },
    { id: 'volcano',    name: 'Volcano',                       nri: ['VLCN'], link: 'ready-volcanoes' },
    { id: 'avalanche',  name: 'Avalanche',                     nri: ['AVLN'], link: 'ready-avalanche' }
  ];

  RD.COST = [
    { tier: 0, label: 'Costs nothing' },
    { tier: 1, label: 'Under $25' },
    { tier: 2, label: '$25 to $100' },
    { tier: 3, label: '$100 to $300' },
    { tier: 4, label: 'Over $300' }
  ];

  /* The household questions. Everything else in the assessment is the "what you already have" list,
     built from the steps themselves. */
  RD.QUESTIONS = [
    { id: 'town',    type: 'town',   label: 'Your town, or your ZIP code', def: '', hint: 'Used only to look up the disasters FEMA counts in your county. It stays in your account.' },
    { id: 'adults',  type: 'number', label: 'Adults 18 to 64 in the house', min: 0, max: 20, def: 1 },
    { id: 'seniors', type: 'number', label: 'Adults 65 and over', min: 0, max: 20, def: 0 },
    { id: 'kids',    type: 'number', label: 'Children 2 to 17', min: 0, max: 20, def: 0 },
    { id: 'babies',  type: 'number', label: 'Babies under 2', min: 0, max: 10, def: 0 },
    { id: 'pets',    type: 'number', label: 'Dogs and cats', min: 0, max: 20, def: 0, hint: 'Count house pets here. Livestock and horses have their own question.' },
    { id: 'livestock', type: 'yesno', label: 'Do you keep livestock or horses?', def: 'no' },
    { id: 'meds',    type: 'yesno',  label: 'Does anyone take a daily medicine they cannot go without?', def: 'no' },
    { id: 'device',  type: 'yesno',  label: 'Does anyone use a medical device that needs power (oxygen, CPAP, a pump)?', def: 'no' },
    { id: 'access',  type: 'yesno',  label: 'Does anyone need help to get around, see, hear or understand, or to leave fast?', def: 'no', hint: 'For example a wheelchair or walker, low vision, hearing loss or memory loss.' },
    { id: 'home',    type: 'choice', label: 'What kind of home?', def: 'house',
      options: [['house', 'A house'], ['apartment', 'An apartment or condo'], ['mobile', 'A mobile or manufactured home'], ['rv', 'An RV or camper']] },
    { id: 'own',     type: 'choice', label: 'Do you own or rent?', def: 'own', options: [['own', 'Own'], ['rent', 'Rent'], ['family', 'Live with family']] },
    { id: 'water',   type: 'choice', label: 'Where does your water come from?', def: 'city',
      options: [['city', 'City or town water'], ['well', 'A well with an electric pump'], ['other', 'Something else (cistern, spring, hauled)']] },
    { id: 'vehicle', type: 'yesno',  label: 'Is there a vehicle at the house that runs?', def: 'yes' }
  ];

  var T = RD.TASKS = [];
  function add(t) { T.push(t); }

  /* ======================= WATER ======================= */
  add({ id: 'water-3day', area: 'water', rank: 1, cost: 0, weight: 3, hz: ['all'],
    title: 'Store three days of water in containers you already have',
    have: 'Three days of water stored ({gal3} gallons)',
    who: 'You. Have a kid help fill and label; then two people know where it is.',
    steps: [
      'Count heads: {people}. You need one gallon a person a day, so {gal3} gallons for three days{petsLine}.',
      'Gather clean bottles with tight caps: plastic soda bottles or water jugs. Not milk or juice jugs, and nothing that held bleach or chemicals.',
      'Wash each with dish soap and rinse. To sanitize, swish 1 teaspoon of plain bleach in 1 quart of water, pour it out and let it air-dry.',
      'Fill from the tap. If your water is not from a city system, add 8 drops of plain unscented bleach per gallon.',
      'Cap tight. Write "drinking water" and today\'s date on each one.',
      'Store them cool and dark, away from gas, paint and chemicals.'
    ],
    when: 'This week. About an hour.',
    why: 'Water runs short first when the taps stop. The CDC and Ready.gov both set the floor at one gallon a person a day for three days.',
    done: '{gal3} gallons, dated, in one spot everyone in the house knows.',
    links: ['cdc-store', 'ready-water'] });

  add({ id: 'water-treat', area: 'water', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Learn two ways to make water safe',
    have: 'I know how to boil and bleach water to make it safe',
    who: 'You and one other adult.',
    steps: [
      'Boiling: bring clear water to a rolling boil for 1 minute. Above 6,500 feet, boil 3 minutes. Let it cool.',
      'Bleach: check the label says 5% to 9% sodium hypochlorite, plain and unscented. Add 8 drops per gallon. Double it if the water is cloudy or very cold.',
      'Stir and wait 30 minutes before you drink it.',
      'Cloudy water: let it settle or strain it through a clean cloth first.',
      'Write both methods on a card and tape it to your stored water. Keep one bottle of plain bleach with it.',
      'Know the limit: boiling and bleach do not fix water with fuel or chemicals in it.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'Stored water runs out. Knowing how to make more safe water turns any clean source into drinking water.',
    done: 'The card is taped to the water, a bottle of plain bleach sits with it, and one other adult can tell you both ways.',
    links: ['cdc-safe'] });

  add({ id: 'water-find', area: 'water', rank: 3, cost: 0, weight: 1, hz: ['all'], need: ['notRv'],
    title: 'Find the water already in your house',
    have: 'I know where the hidden water in my house is and how to get it out',
    who: 'You.',
    steps: [
      'Find your water heater. It holds 30 to 80 gallons. Read the label.',
      'Learn the drain valve at the bottom. To use it in an outage: turn off the power or gas to the heater first, close the cold water inlet, open a hot tap upstairs to let air in, then drain into a clean pot.',
      'Ice in the freezer is drinking water as it melts.',
      'Water in the toilet tank, not the bowl, is fine for flushing and washing. Do not drink it if you use tank cleaners.',
      'Never drink water from a radiator or boiler.',
      'Write this on the same card as the treatment steps.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'Most homes hold more water than men think. Knowing where it is adds days before you need anything else.',
    done: 'You can find the drain valve in the dark and you know the steps to drain it safely.',
    links: ['ready-water'] });

  add({ id: 'water-rotate', area: 'water', rank: 3, cost: 0, weight: 1, hz: ['all'],
    title: 'Set a date to swap your stored water',
    have: 'My stored water has a swap date on the calendar',
    who: 'You.',
    steps: [
      'Water you filled yourself: swap it every 6 months.',
      'Store-bought sealed water: keep it until the date on the bottle.',
      'Put a reminder on your phone calendar six months out, repeating.',
      'When the day comes, use the old water on plants or for flushing, wash and refill.'
    ],
    when: 'Today. Five minutes.',
    why: 'Stored water that is never swapped gets forgotten. A date on the calendar keeps it fresh without you thinking about it.',
    done: 'A repeating reminder is on the calendar.',
    links: ['cdc-store'] });

  add({ id: 'water-well', area: 'water', rank: 2, cost: 0, weight: 2, hz: ['outage', 'winter', 'hurricane', 'tornado'], need: ['well'],
    title: 'Know what your well needs when the power is out',
    have: 'I know how my well runs, or what I do, when the power is out',
    who: 'You.',
    steps: [
      'Find the pump size on the well paperwork, the pressure tank or the breaker. Write it down.',
      'Know that an electric pump stops when the power stops. Plan to store more water than a city home.',
      'Learn which breaker runs the pump.',
      'If you ever add backup power, the pump size tells you what it must carry. Have an electrician do any hookup.',
      'After a flood reaches the wellhead, do not drink the water until it is tested. Your county health office can tell you how.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'On a well, a power outage is also a water outage. A plan now saves a scramble later.',
    done: 'The pump size and breaker are written on your plan.',
    links: ['cdc-safe', 'ready-power'] });

  add({ id: 'water-2week', area: 'water', rank: 5, cost: 2, costNote: 'About $30 to $80 for food-grade containers, or less if you reuse jugs', weight: 2, hz: ['all'],
    title: 'Build up to two weeks of water',
    have: 'Two weeks of water stored ({gal14} gallons)',
    who: 'You.',
    steps: [
      'You need {gal14} gallons for two weeks{petsLine}. Add more in a hot climate, for anyone sick, or anyone pregnant.',
      'Keep filling clean jugs you already have. When you buy, buy food-grade water containers with tight caps, not glass.',
      'Clean, sanitize, fill, label and date them the same way as your first three days.',
      'Store them in more than one spot if you can, so one leak or one flood does not take it all.',
      'Add the new jugs to your swap date.'
    ],
    when: 'Over the next month. A little each week.',
    why: 'The CDC says try for two weeks. Many outages and boil notices run longer than three days.',
    done: '{gal14} gallons, dated, on your swap schedule.',
    links: ['cdc-store', 'ready-water'] });

  add({ id: 'water-filter', area: 'water', rank: 6, cost: 2, costNote: 'About $25 to $60', weight: 1, hz: ['all'],
    title: 'Add a water filter for the long run',
    have: 'A water filter for when stored water runs out',
    who: 'You.',
    steps: [
      'Pick a filter with an absolute pore size of 1 micron or smaller for parasites, or 0.3 micron for bacteria too. It says on the box.',
      'Know the limit: filters do not remove viruses. After filtering, bleach or boil water you are not sure of.',
      'Practice once with water from a creek, pond or rain barrel, then boil or bleach it.',
      'Store it with your water and the treatment card.'
    ],
    when: 'After the free water steps are done.',
    why: 'Stored water lasts days. A filter plus boiling or bleach turns a creek or rain barrel into weeks of water.',
    done: 'A filter you have used once, stored with your water.',
    links: ['cdc-safe'] });

  /* ======================= FOOD ======================= */
  add({ id: 'food-count', area: 'food', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Count the food you already have',
    have: 'I know how many days the food in my house would last',
    who: 'You and whoever does the shopping.',
    steps: [
      'Go through the pantry and cabinets. Set aside food that needs no fridge and little or no cooking: canned meat, beans, soup, peanut butter, crackers, cereal, dried fruit.',
      'Count meals, not cans. Figure three meals a day for {people}.',
      'Write the number of days on your plan.',
      'Check dates. Eat what is close to expiring this week.'
    ],
    when: 'This weekend. Thirty minutes.',
    why: 'Most homes already have more than they think. Counting turns a guess into a number and shows the gap.',
    done: 'A number of days, written on your plan.',
    links: ['ready-food'] });

  add({ id: 'food-fridge', area: 'food', rank: 2, cost: 0, weight: 1, hz: ['outage', 'hurricane', 'tornado', 'winter', 'flood'],
    title: 'Learn the fridge and freezer rules for an outage',
    have: 'I know how long food stays safe in the fridge and freezer with the power out',
    who: 'You and the other adults.',
    steps: [
      'Keep the doors shut. A closed fridge keeps food safe about 4 hours.',
      'A full freezer holds about 48 hours. Half full, about 24.',
      'Food at 40°F or below is safe. Toss meat, milk, eggs and leftovers that sat above 40°F for 2 hours or more.',
      'Fill empty freezer space with jugs of water. They hold the cold and become drinking water.',
      'When in doubt, throw it out. Never taste food to check it.',
      'Write the 4 and 48 hour rules on the fridge.'
    ],
    when: 'This week. Fifteen minutes.',
    why: 'Bad food makes people sick right when a doctor is hardest to reach. The USDA rules are simple and they work.',
    done: 'The rules are on the fridge, and spare freezer space holds water jugs.',
    links: ['usda-food'] });

  add({ id: 'food-cook', area: 'food', rank: 3, cost: 0, weight: 1, hz: ['outage', 'winter', 'hurricane', 'tornado', 'earthquake'],
    title: 'Plan how you would cook with the power out',
    have: 'A way to cook without power, used outdoors, with fuel on hand',
    who: 'You.',
    steps: [
      'Use what you have: a grill, camp stove or fire pit. If you have none, plan meals that need no cooking.',
      'Cook outside only, 20 feet from the house, and never in the garage, porch or tent. Fumes from them kill.',
      'Check your fuel. Know how many meals it will cook.',
      'Cook one full meal on it this month, start to finish, so you know it works.'
    ],
    when: 'This month. One meal.',
    why: 'A hot meal keeps a family steady. Doing it once on a calm day means no surprises later.',
    done: 'You cooked one meal outside and you know how many more your fuel will cook.',
    links: ['cdc-co', 'ready-power'] });

  add({ id: 'food-opener', area: 'food', rank: 3, cost: 1, costNote: 'About $5 if you need one', weight: 1, hz: ['all'],
    title: 'Keep a hand can opener with your food',
    have: 'A hand can opener kept with the stored food',
    who: 'You.',
    steps: [
      'Check the kitchen drawer. If there is a hand can opener, move a second one, or that one, to your stored food.',
      'If not, get one.',
      'Open one can with it to make sure it works.'
    ],
    when: 'This week.',
    why: 'Canned food is no good if the only opener is electric.',
    done: 'A working hand opener sits with the stored food.',
    links: ['ready-kit'] });

  add({ id: 'food-3day', area: 'food', rank: 2, cost: 1, costNote: 'About $20 spread over a few trips', weight: 3, hz: ['all'],
    title: 'Set aside three days of food that needs no cooking',
    have: 'Three days of no-cook food set aside',
    who: 'You and whoever does the shopping.',
    steps: [
      'Start with what you counted. Move enough for three days for {people} into one box or shelf.',
      'Fill the gap by buying one or two extra of what you already eat each trip. No special food needed.',
      'Pick foods that need no fridge and no cooking, and that your family will actually eat.',
      'Mark the box with the soonest date in it.'
    ],
    when: 'Over the next two or three shopping trips.',
    why: 'Ready.gov says to keep at least several days of food, and three days is the place to start. Food you already eat gets rotated and does not go to waste.',
    done: 'A box or shelf with three days of food for {people}, kept apart from everyday food.',
    links: ['ready-food', 'redcross-kit'] });

  add({ id: 'food-special', area: 'food', rank: 2, cost: 1, costNote: 'About $15 to $25', weight: 2, hz: ['all'], need: ['babiesOrPets'],
    title: 'Set aside food for the baby and the pets',
    have: 'Three days of baby food, formula or pet food set aside',
    who: 'You and the other parent.',
    steps: [
      'Babies: three days of formula, food and diapers. Ready-to-feed formula needs no water.',
      'Pets: three days of food in a sealed bag or can, plus water, a bowl and a leash or carrier.',
      'Put them with your stored food and add them to your swap date.'
    ],
    when: 'This month.',
    why: 'Stores close in an outage, and babies and pets cannot wait.',
    done: 'Three days of their food stored with yours.',
    links: ['ready-pets', 'ready-kids'] });

  add({ id: 'food-2week', area: 'food', rank: 5, cost: 3, costNote: 'About $100 to $200, spread over months', weight: 2, hz: ['all'],
    title: 'Build up to two weeks of food',
    have: 'Two weeks of food stored and rotated',
    who: 'You and whoever does the shopping.',
    steps: [
      'Keep buying one or two extra of what you eat. Rice, beans, oats, canned meat and canned vegetables stretch furthest.',
      'Store it in the order you bought it. Eat the oldest first and put new food at the back.',
      'Check the dates twice a year on your water swap day.',
      'Keep it cool, dry and off the floor.'
    ],
    when: 'Over the next three months.',
    why: 'Two weeks covers most storms, outages and short layoffs without a trip to the store.',
    done: 'Two weeks of food for {people}, rotated as you eat it.',
    links: ['ready-food', 'usda-food'] });

  add({ id: 'food-grow', comfort: true, area: 'food', rank: 7, cost: 1, costNote: 'Seeds and a few jars, under $25 to start', weight: 1, hz: ['income', 'all'],
    title: 'Grow or put up some of your own food',
    have: 'I grow or preserve some of our food',
    who: 'You and the family.',
    steps: [
      'Start small: one bed, a few pots, or a row of beans.',
      'Call your county extension office. They teach gardening and canning, often for free.',
      'If you can food, follow tested recipes from the National Center for Home Food Preservation. Never guess on canning times.',
      'Put up one batch of something this season.'
    ],
    when: 'This season.',
    why: 'Food you grow or put up is food the store cannot run out of.',
    done: 'One crop grown or one batch put up, start to finish.',
    links: ['usda-preserve', 'usda-extension', 'groundwork'] });

  /* ======================= POWER AND HEAT ======================= */
  add({ id: 'power-lights', area: 'power', rank: 1, cost: 0, weight: 2, hz: ['outage', 'tornado', 'hurricane', 'winter', 'earthquake', 'evacuate'],
    title: 'Put a light where every person can find it in the dark',
    have: 'A working flashlight for every person, where they can find it in the dark',
    who: 'You.',
    steps: [
      'Gather every flashlight and headlamp in the house. Test each one.',
      'Give each person one, kept by their bed.',
      'Keep one in the kitchen drawer and one in the vehicle.',
      'Do not use candles. They start house fires.'
    ],
    when: 'Tonight. Fifteen minutes.',
    why: 'Most outages start at night or in a storm. A light within reach keeps people from falling and keeps kids calm.',
    done: 'Every person can reach a working light from bed.',
    links: ['ready-power'] });

  add({ id: 'power-heat', area: 'power', rank: 2, cost: 0, weight: 2, hz: ['winter', 'outage'], need: ['cold'],
    title: 'Plan how you stay warm if the heat goes out',
    have: 'A plan to stay warm with no heat',
    who: 'You and the other adults.',
    steps: [
      'Pick one warm room for everyone, on the side of the house away from the wind, with few windows.',
      'Gather blankets, sleeping bags, hats and wool socks into that room.',
      'Plan to hang blankets over doorways and cover windows at night to hold the heat.',
      'Dress in layers. Keep everyone dry.',
      'Never heat the house with the oven, a grill or a camp stove. Fumes from them kill.',
      'If the house will not stay warm, know where you would go: family, a church, a warming center.'
    ],
    when: 'Before the first freeze.',
    why: 'Cold is the real danger in a winter outage, most of all for babies and older adults. A plan makes it routine.',
    done: 'A warm room picked, blankets in it, and a place to go if it gets too cold.',
    links: ['ready-winter', 'cdc-co'] });

  add({ id: 'power-cool', area: 'power', rank: 2, cost: 0, weight: 2, hz: ['heat', 'outage'], need: ['hot'],
    title: 'Plan how you stay cool in a heat wave or summer outage',
    have: 'A plan to stay cool with no air conditioning',
    who: 'You.',
    steps: [
      'Find the coolest room: low, shaded, on the north side.',
      'Know the cooling centers or cool public places near you. Call 211 or check the county website.',
      'Drink water often, before you are thirsty. Wet cloths and cool showers help.',
      'Learn the signs of heat exhaustion: heavy sweat, cramps, dizziness, nausea. Move to a cool place.',
      'Heat stroke is an emergency: hot skin, confusion, passing out. Call 911 and cool the person down.',
      'Check on older neighbors in a heat wave.'
    ],
    when: 'Before summer.',
    why: 'Heat hurts more people than most storms, and it is the easiest to plan for.',
    done: 'A cool room, a cool place to go, and the warning signs written on your plan.',
    links: ['cdc-heat', 'ready-heat'] });

  add({ id: 'power-device', area: 'power', rank: 1, cost: 0, weight: 3, hz: ['outage', 'winter', 'hurricane', 'tornado'], need: ['device'],
    title: 'Make a power plan for the medical device',
    have: 'A power plan for the medical device in the house',
    who: 'You and the person who uses the device.',
    steps: [
      'Call your power company. Ask about their medical needs list.',
      'Call the device supplier. Ask how long the battery lasts and what backup they recommend.',
      'Write down where you would go if the power stays out: a hospital, a fire station, family with power.',
      'Keep the doctor\'s and supplier\'s numbers on paper in your plan.'
    ],
    when: 'This week. Two phone calls.',
    why: 'For someone on oxygen or a pump, an outage is a medical problem. A plan settles it in advance.',
    done: 'The power company knows, you know the battery hours, and you know where you would go.',
    links: ['ready-disab', 'ready-power'] });

  add({ id: 'power-shutoff', area: 'power', rank: 2, cost: 0, weight: 2, hz: ['earthquake', 'flood', 'hurricane', 'fire', 'tornado'], need: ['notApartment'],
    title: 'Learn where to shut off the power, water and gas',
    have: 'I know where and how to shut off the power, water and gas',
    who: 'You and one other adult.',
    steps: [
      'Find the main breaker. Label it.',
      'Find the main water shutoff. Turn it off and back on once so you know it moves.',
      'If you have gas, find the meter or tank valve. Call your gas company to learn the steps for your meter. Do not turn the gas off just to practice.',
      'Shut gas off only if you smell gas, hear a leak, or are told to. Once off, the gas company must turn it back on.',
      'Show the other adult. Write the spots on your plan.'
    ],
    when: 'This weekend. Thirty minutes.',
    why: 'A broken pipe, a flood or a gas leak goes from bad to worse fast. Shutting it off in a minute saves the house.',
    done: 'Two adults can find and work every shutoff.',
    links: ['ready-skills'] });

  add({ id: 'power-co', area: 'power', rank: 4, cost: 2, costNote: 'About $25 to $40 each', weight: 2, hz: ['outage', 'winter', 'fire'],
    title: 'Put a carbon monoxide alarm on every level of your home',
    have: 'A working carbon monoxide alarm on every level of the home',
    who: 'You.',
    steps: [
      'Check if you have any. Test them.',
      'If not, put one on every level of the home, and one outside each sleeping area.',
      'Use one with a battery backup so it works in an outage.',
      'Test it when you test the smoke alarms.'
    ],
    when: 'This month.',
    why: 'Carbon monoxide has no smell. It is the hidden risk when people run generators, grills or heaters in an outage.',
    done: 'An alarm on every level and outside each sleeping area, tested.',
    links: ['cdc-co'] });

  add({ id: 'power-batteries', area: 'power', rank: 4, cost: 1, costNote: 'About $15 to $25', weight: 1, hz: ['outage', 'tornado', 'hurricane', 'winter', 'earthquake'],
    title: 'Keep spare batteries for the lights and radio',
    have: 'Spare batteries for every light and the radio',
    who: 'You.',
    steps: [
      'Write down the battery sizes your lights and radio take.',
      'Get one spare set for each, in the package.',
      'Keep them with the flashlights, not in the devices.',
      'Check them on your water swap day.'
    ],
    when: 'Next shopping trip.',
    why: 'A light with dead batteries is no light at all.',
    done: 'One spare set for every light and the radio.',
    links: ['ready-kit'] });

  add({ id: 'power-phone', area: 'power', rank: 4, cost: 2, costNote: 'About $25 to $50', weight: 1, hz: ['outage', 'hurricane', 'tornado', 'winter', 'evacuate'],
    title: 'Keep a way to charge phones without the wall',
    have: 'A way to charge phones without wall power',
    who: 'You.',
    steps: [
      'Free first: a car charger. The car can charge phones while it runs, outside, never in a closed garage.',
      'Then a battery pack. Keep it charged. Top it off on your water swap day.',
      'In an outage, turn phone brightness down and close apps to stretch the battery.'
    ],
    when: 'This month.',
    why: 'The phone is your flashlight, your radio and your line to family. Keeping it alive keeps you in touch.',
    done: 'A charged battery pack, or a car charger in the vehicle.',
    links: ['ready-power'] });

  add({ id: 'power-backup', comfort: true, area: 'power', rank: 9, cost: 4, costNote: 'Usually $500 or more', weight: 1, hz: ['outage', 'winter', 'hurricane', 'heat'],
    title: 'Plan backup power for the things that matter',
    have: 'Backup power for the essentials, and I know how to run it safely',
    who: 'You. Use a licensed electrician for any hookup to the house.',
    steps: [
      'List what must run: fridge, freezer, well pump, a medical device, a few lights, phone charging.',
      'Add up the watts from each label. That number sets the size you need.',
      'A generator runs outside only, 20 feet from the house, exhaust pointed away from doors and windows. Never in the garage.',
      'Never plug a generator into a wall outlet. It can kill a lineman. Use a transfer switch put in by an electrician.',
      'Store fuel safely, away from the house, and rotate it.'
    ],
    when: 'After the free and low-cost steps are done.',
    why: 'Backup power is a comfort, not the foundation. Water, food, light and a plan come first.',
    done: 'Power sized to your list, run safely, with an alarm for carbon monoxide inside.',
    links: ['ready-power', 'cdc-gen'] });

  /* ======================= MEDICAL ======================= */
  add({ id: 'med-list', area: 'medical', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Write down everyone\'s medicines and doctors',
    have: 'A written list of each person\'s medicines, doses, allergies and doctors',
    who: 'You and the other adults.',
    steps: [
      'For each person: name, birthday, medicines and doses, allergies, blood type if known.',
      'Add each doctor\'s name and number, and the pharmacy.',
      'Keep one copy in your plan, one in your wallet, and a photo on your phone.',
      'Update it when a medicine changes.'
    ],
    when: 'This week. Thirty minutes.',
    why: 'If you are away from home or not able to talk, this list speaks for you. It also helps refill medicine fast.',
    done: 'A list for every person, in three places.',
    links: ['ready-plan'] });

  add({ id: 'med-kit', area: 'medical', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Gather a first aid kit from what you have',
    have: 'A first aid kit in one known spot',
    who: 'You.',
    steps: [
      'Pull together what is in the house: bandages, gauze, tape, antibiotic ointment, pain reliever, tweezers, gloves, scissors.',
      'Put it all in one box or bag.',
      'Check it against the Red Cross list. Write down what is missing.',
      'Keep it where every adult can grab it. Tell them where.'
    ],
    when: 'This weekend. Thirty minutes.',
    why: 'Small cuts and burns are the most common injury after any storm. A kit you can find saves a trip you may not be able to make.',
    done: 'One kit in a known spot, and a short list of what to add.',
    links: ['redcross-firstaidkit'] });

  add({ id: 'med-app', area: 'medical', rank: 2, cost: 0, weight: 1, hz: ['all'],
    title: 'Learn first aid basics from the free Red Cross app',
    have: 'I have worked through basic first aid (app or class)',
    who: 'You. Then the other adults and older kids.',
    steps: [
      'Get the free Red Cross First Aid app on your phone.',
      'Work through bleeding, burns, broken bones, choking and CPR. Ten minutes a night.',
      'It works without a signal once it is on your phone.',
      'Take its quizzes until you pass them.'
    ],
    when: 'This week. Ten minutes a night.',
    why: 'In a disaster you may be the first help for a while. Help can take hours or days to arrive.',
    done: 'You passed the quizzes for bleeding, burns, choking and CPR.',
    links: ['redcross-apps'] });

  add({ id: 'med-bleed', area: 'medical', rank: 3, cost: 0, weight: 2, hz: ['tornado', 'earthquake', 'hurricane', 'all'],
    title: 'Take a free Stop the Bleed class',
    have: 'I have taken a Stop the Bleed class',
    who: 'You. Bring another adult.',
    steps: [
      'Search for a class near you on the Stop the Bleed site. Most are free and about an hour.',
      'Sign up and go.',
      'Learn to pack a wound and put on a tourniquet.',
      'Add what you learn to your first aid kit list.'
    ],
    when: 'In the next month or two.',
    why: 'Heavy bleeding can take a life in minutes, before help arrives. This is the one skill that makes the most difference.',
    done: 'You took the class and can show someone how to pack a wound.',
    links: ['stopthebleed'] });

  add({ id: 'med-rx', area: 'medical', rank: 2, cost: 1, costNote: 'Usually your normal copay', weight: 3, hz: ['all'], need: ['meds'],
    title: 'Keep a week of extra daily medicine',
    have: 'At least a week of extra daily medicine on hand',
    who: 'You and the person who takes it.',
    steps: [
      'Ask the doctor or pharmacist about a 90-day supply. Many plans allow it and it often costs less.',
      'Refill as soon as your plan allows, so you are always a week or more ahead.',
      'Keep a list of the medicine with the doses, in your plan.',
      'For medicine kept cold, ask the pharmacist how long it lasts out of the fridge.'
    ],
    when: 'At your next refill.',
    why: 'Pharmacies close in storms and outages. A week ahead turns a crisis into a wait.',
    done: 'Seven or more days of every daily medicine, on hand at all times.',
    links: ['ready-older', 'ready-disab'] });

  add({ id: 'med-fill', area: 'medical', rank: 4, cost: 2, costNote: 'About $25 to $60', weight: 1, hz: ['all'],
    title: 'Fill the gaps in your first aid kit',
    have: 'A full first aid kit checked against the Red Cross list',
    who: 'You.',
    steps: [
      'Use the list of what was missing from your kit.',
      'Add pain reliever, gauze, tape, gloves, a cold pack and a thermometer if you lack them.',
      'Add a few days of anything your family uses: allergy medicine, an inhaler spare, glasses.',
      'Check dates on your water swap day.'
    ],
    when: 'This month.',
    why: 'The kit is only as good as what is in it when you open it.',
    done: 'Your kit matches the Red Cross list.',
    links: ['redcross-firstaidkit'] });

  add({ id: 'med-sick', area: 'medical', rank: 3, cost: 0, weight: 1, hz: ['sickness'],
    title: 'Plan for sickness in the house',
    have: 'A plan for caring for someone sick at home',
    who: 'You and the other adults.',
    steps: [
      'Pick a room where a sick person can rest apart from the others.',
      'Keep on hand: a thermometer, fever reducer, fluids with salt and sugar, soap, and a box of masks and gloves.',
      'Decide who cares for the kids if both adults are sick.',
      'Know your doctor\'s after-hours line and nearest urgent care.'
    ],
    when: 'This month.',
    why: 'Flu season and stomach bugs hit whole houses. A little plan keeps it from spreading and keeps the house running.',
    done: 'A sick room picked, the basics on hand, and a backup for the kids.',
    links: ['ready-pandemic'] });

  add({ id: 'med-class', area: 'medical', rank: 6, cost: 2, costNote: 'About $30 to $100, and many fire departments run free ones', weight: 2, hz: ['all'],
    title: 'Take a CPR and first aid class',
    have: 'I have a current CPR and first aid card',
    who: 'You and the other adults.',
    steps: [
      'Ask your local fire department, hospital or church first. Many run free classes.',
      'If not, find a Red Cross class near you.',
      'Take the hands-on class, not only online.',
      'Put the renewal date on your calendar. Cards last two years.'
    ],
    when: 'In the next three months.',
    why: 'CPR in the first minutes doubles or triples the chance a person lives. Hands-on practice makes it stick.',
    done: 'A current CPR and first aid card.',
    links: ['redcross-class'] });

  /* ======================= COMMUNICATIONS ======================= */
  add({ id: 'comm-contact', area: 'comms', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Pick one family contact outside your area',
    have: 'One family contact out of the area that everyone checks in with',
    who: 'You. Then call the person you pick.',
    steps: [
      'Pick a relative or friend who lives in another state or region.',
      'Call them. Ask if they will be the one everyone checks in with.',
      'Tell every person in your house: if we get split up, text this person.',
      'Texts often get through when calls do not. Teach the kids to text.'
    ],
    when: 'This week. One phone call.',
    why: 'Local lines jam in a disaster. A long-distance call or text often goes through, and one person can pass the word.',
    done: 'The contact said yes, and everyone in the house knows who it is.',
    links: ['ready-plan', 'redcross-plan'] });

  add({ id: 'comm-card', area: 'comms', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Write the key phone numbers on paper',
    have: 'Paper cards with key phone numbers for every person',
    who: 'You.',
    steps: [
      'On a card: home address, each parent\'s cell, the outside contact, a neighbor, the doctor and the school.',
      'Make one for every person. Put it in wallets, backpacks and the glove box.',
      'Kids too young to read: tape one inside their backpack.',
      'Test it. Ask each person where their card is.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'A dead phone takes every number with it. Paper does not run out of battery.',
    done: 'Every person carries a card.',
    links: ['ready-plan'] });

  add({ id: 'comm-alerts', area: 'comms', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Sign up for local emergency alerts',
    have: 'Local alerts signed up and phone emergency alerts turned on',
    who: 'You and every adult with a phone.',
    steps: [
      'On each phone, open settings and turn on emergency alerts.',
      'Find your county\'s alert sign-up. Search your county name and "emergency alerts". Sign up for texts.',
      'Get the free FEMA app for weather alerts and shelter locations.',
      'Write your county emergency office number on your plan.'
    ],
    when: 'Today. Ten minutes.',
    why: 'Warning time is the most valuable thing in a storm, flood or fire. Alerts give it to you for free.',
    done: 'Alerts on for every phone, and county texts signed up.',
    links: ['ready-alerts', 'fema-app'] });

  add({ id: 'comm-ham-learn', comfort: true, area: 'comms', rank: 3, cost: 0, weight: 2, hz: ['all'],
    title: 'Start learning for the ham radio Technician license',
    have: 'I am studying for, or already hold, a ham radio license',
    who: 'You. Older kids can study with you.',
    steps: [
      'Open Radio Elmer. It teaches the Technician test from the start, free.',
      'Study 15 minutes a day. Most men are ready in three to six weeks.',
      'Take the practice tests until you pass them three times in a row.',
      'Read ARRL\'s getting licensed page to see how the test works.'
    ],
    when: 'Start this week. 15 minutes a day.',
    why: 'Ham radio works when cell towers and the internet are down. It is how towns talk in the worst disasters.',
    done: 'You pass the practice test three times in a row.',
    links: ['radioelmer', 'arrl-license'] });

  add({ id: 'comm-club', comfort: true, area: 'comms', rank: 5, cost: 0, weight: 1, hz: ['all'], after: 'comm-ham-learn',
    title: 'Find a local radio club',
    have: 'I know my local radio club or emergency radio group',
    who: 'You.',
    steps: [
      'Use the ARRL club search for your area.',
      'Go to one meeting. Clubs help new hams, often give the test, and lend radios.',
      'Ask about the local emergency group (ARES). They train for exactly this.'
    ],
    when: 'This month.',
    why: 'Radio is learned best from neighbors. A club also gives you people to talk to when it counts.',
    done: 'You went to one meeting.',
    links: ['arrl-club', 'arrl-ares'] });

  add({ id: 'comm-radio', area: 'comms', rank: 4, cost: 2, costNote: 'About $20 to $100', weight: 2, hz: ['all'],
    title: 'Get a battery or crank weather radio',
    have: 'A battery or hand-crank radio with NOAA Weather Radio',
    who: 'You.',
    steps: [
      'Pick a radio with NOAA Weather Radio, and a battery or hand crank.',
      'Look up your local NOAA station frequency and set it.',
      'Turn on the alert setting if it has one. It will wake you for a warning.',
      'Keep it with the flashlights. Test it monthly.'
    ],
    when: 'This month.',
    why: 'When power and cell service go, a weather radio still tells you what is coming.',
    done: 'The radio is set to your station and sits with the lights.',
    links: ['nws-nwr'] });

  add({ id: 'comm-ham-test', comfort: true, area: 'comms', rank: 6, cost: 2, costNote: 'About $35 FCC fee, plus up to $15 for the test', weight: 2, hz: ['all'], after: 'comm-ham-learn',
    title: 'Take the Technician exam',
    have: 'I hold a ham radio license',
    who: 'You.',
    steps: [
      'Find an exam session near you or online with the ARRL exam search.',
      'Get your FCC Registration Number (FRN) first. Radio Elmer walks you through it.',
      'Take the test. 35 questions, 26 to pass.',
      'Pay the FCC fee when the email comes. Your call sign shows up in a few days.'
    ],
    when: 'When the practice tests are passing.',
    why: 'The license lets you talk on the radio, legally, when it counts.',
    done: 'You have a call sign.',
    links: ['arrl-exam', 'radioelmer'] });

  add({ id: 'comm-family-radio', comfort: true, area: 'comms', rank: 7, cost: 3, costNote: 'About $100 to $200 for a few radios, plus a $35 FCC license', weight: 1, hz: ['all'],
    title: 'Get handheld radios for the family',
    have: 'Handheld radios the family has practiced with',
    who: 'You and the family.',
    steps: [
      'GMRS radios reach farther than toy radios. One FCC license, about $35 for 10 years, covers your whole family. No test.',
      'Get the license first on the FCC site.',
      'Pick one channel for the family. Write it on the plan.',
      'Practice once a month: talk from the house to the meeting spot.'
    ],
    when: 'After the free and low-cost steps.',
    why: 'Radios keep the family talking across a farm, a neighborhood or a campground when phones are down.',
    done: 'Licensed, a family channel picked, and practiced once.',
    links: ['fcc-gmrs', 'radioelmer'] });

  /* ======================= FAMILY PLAN ======================= */
  add({ id: 'plan-meet-near', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['fire', 'earthquake', 'tornado', 'all'],
    title: 'Pick a meeting spot right outside your home',
    have: 'A meeting spot right outside the home that everyone knows',
    who: 'You and the whole family.',
    steps: [
      'Pick a spot a safe distance from the house: a mailbox, a tree, a neighbor\'s driveway.',
      'Walk everyone to it.',
      'Rule: if there is a fire, get out, go there, and stay there. Never go back in.',
      'Write it on your plan.'
    ],
    when: 'Tonight. Ten minutes.',
    why: 'In a fire, the worst danger is someone going back in for a person who is already out. A meeting spot ends that.',
    done: 'Every person can walk you to the spot.',
    links: ['usfa-escape', 'ready-plan'] });

  add({ id: 'plan-meet-far', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Pick a meeting spot outside your neighborhood and one out of town',
    have: 'A meeting spot outside the neighborhood and one out of town',
    who: 'You and the other adults.',
    steps: [
      'Neighborhood spot: a church, school or store lot you can all reach on foot if the street is closed.',
      'Out of town spot: family or a friend an hour or more away, in a different direction from your main hazard.',
      'Know two routes to each one. Drive them once.',
      'Write both, with addresses, on the plan.'
    ],
    when: 'This week.',
    why: 'If you are at work and the kids are at school when it hits, you need a place to find each other.',
    done: 'Both spots and two routes written down, and driven once.',
    links: ['ready-plan', 'ready-evacuation'] });

  add({ id: 'plan-write', area: 'plan', rank: 2, cost: 0, weight: 3, hz: ['all'],
    title: 'Write your family plan on one page',
    have: 'A written family emergency plan',
    who: 'You and the other adults.',
    steps: [
      'Use the free family plan form from Ready.gov, or a sheet of paper.',
      'Fill in: meeting spots, the outside contact, phone numbers, medicines, where the water, food, kit and shutoffs are.',
      'Add what you do for each disaster on your list: where you shelter, when you leave.',
      'Print or copy it. One on the fridge, one in the car, one in the go-bag.'
    ],
    when: 'This weekend. One hour.',
    why: 'A plan in your head is gone when you are hurt or away. On paper, anyone in the house can follow it.',
    done: 'One page, in three places.',
    links: ['ready-plan', 'redcross-plan'] });

  add({ id: 'plan-docs', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Copy the papers that matter',
    have: 'Copies of key papers (IDs, insurance, deeds or lease, medical) kept safe',
    who: 'You.',
    steps: [
      'Gather: IDs, birth certificates, Social Security cards, insurance cards and policies, the deed or lease, car titles, medical list, pet records.',
      'Take clear photos of each and keep them in a locked folder or a password-protected place.',
      'Make paper copies. Put them in a zip bag in the go-bag or a fireproof spot.',
      'Leave a set with your outside contact if you trust them.'
    ],
    when: 'This month. One evening.',
    why: 'After a fire, flood or storm, these papers are how you prove who you are, what you own and what insurance owes you.',
    done: 'Photos in a safe place and paper copies in a sealed bag.',
    links: ['ready-money'] });

  add({ id: 'plan-practice', area: 'plan', rank: 3, cost: 0, weight: 2, hz: ['fire', 'tornado', 'earthquake', 'all'],
    title: 'Walk the plan with the family',
    have: 'We have practiced our plan together in the last year',
    who: 'You and everyone in the house.',
    steps: [
      'Fire drill: find two ways out of every room. Push the test button on a smoke alarm and walk out to the meeting spot.',
      'Shelter drill: go to your shelter spot for your local disasters.',
      'Ask each person: who do you text? Where do we meet?',
      'Do it twice a year. Put the dates on the calendar.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'People do what they practiced. Kids who have walked it stay calm.',
    done: 'One drill done, the next one on the calendar.',
    links: ['usfa-escape', 'ready-kids'] });

  add({ id: 'plan-hazards', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['all'],
    title: 'Know the disasters that can reach your home',
    have: 'I know the disasters most likely where I live',
    who: 'You.',
    steps: [
      'Look up your county on Land Finder. It shows FEMA\'s hazard scores for floods, tornadoes, wildfire, heat and more.',
      'Look up your address on the FEMA flood map.',
      'Ask an older neighbor what has hit the area in their lifetime.',
      'Check the list Prepare Me made from your town. Add any it missed that you have seen hit.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'You get ready for what is likely, not for everything. This tells you which.',
    done: 'You read the FEMA list for your county, and your Prepare Me list matches what you know.',
    links: ['landfinder', 'fema-floodmap', 'nws-safety'] });

  add({ id: 'plan-kids', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['all'], need: ['kids'],
    title: 'Know the school\'s plan and who can pick up the kids',
    have: 'I know the school\'s emergency plan and who else can pick up the kids',
    who: 'You and the other parent.',
    steps: [
      'Ask the school for their emergency plan: where they go and how they reach parents.',
      'Put one or two trusted adults on the school pickup list.',
      'Tell the kids who may pick them up.',
      'Write it on the plan.'
    ],
    when: 'This month. One call or email.',
    why: 'If it hits on a school day, you may not be the closest one. The school needs to know who else it can hand them to.',
    done: 'Pickup list updated and the kids know who may come.',
    links: ['ready-kids'] });

  add({ id: 'plan-pets', area: 'plan', rank: 3, cost: 0, weight: 1, hz: ['all'], need: ['pets'],
    title: 'Plan for the pets',
    have: 'A plan for the pets, including where they can stay if we leave',
    who: 'You.',
    steps: [
      'Find a pet-friendly hotel, a friend or a boarding place on your evacuation route. Many shelters do not take pets.',
      'Keep a photo of each pet with you, in case you are separated.',
      'Keep shot records with your document copies.',
      'Know where the leashes and carriers are.'
    ],
    when: 'This month.',
    why: 'Men stay behind for their animals. A place for them makes leaving easy.',
    done: 'A place for the pets, written on the plan.',
    links: ['ready-pets'] });

  add({ id: 'plan-gobag', area: 'plan', rank: 4, cost: 1, costNote: 'Mostly what you have; under $25 to fill gaps', weight: 2, hz: ['evacuate', 'wildfire', 'hurricane', 'flood', 'chemical', 'fire'],
    title: 'Pack a grab-and-go bag',
    have: 'A packed go-bag for the household',
    who: 'You. Each older kid packs their own small one.',
    steps: [
      'Use a backpack you have.',
      'Water and snacks for a day, a flashlight, a phone charger, the first aid kit or a small one, medicines, a copy of the plan and papers, cash, a change of clothes, glasses.',
      'Add what the kids or the baby need.',
      'Keep it by the door or in the vehicle.'
    ],
    when: 'This month. One hour.',
    why: 'When you must leave in ten minutes, a packed bag means you leave with what matters, calm.',
    done: 'A packed bag by the door.',
    links: ['ready-kit', 'redcross-kit'] });

  /* ---------- disaster plans (they show only for the disasters he picks) ---------- */
  add({ id: 'hz-tornado', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['tornado'], need: ['hz:tornado'],
    title: 'Pick your tornado shelter spot',
    have: 'We know where we shelter for a tornado',
    who: 'You and the whole family.',
    steps: [
      'Best: a basement or storm shelter. Next best: a small room on the lowest floor with no windows, like a closet or hallway.',
      'In a mobile home or RV, do not stay. Find a sturdy building nearby and know how to get there fast.',
      'Keep shoes, a light, a helmet or pillows, and the radio in that spot.',
      'Know the difference: a watch means be ready. A warning means go now.',
      'Practice once: everyone to the spot in under two minutes.'
    ],
    when: 'This week. Fifteen minutes.',
    why: 'Tornado warnings give minutes. Knowing the spot means nobody has to think.',
    done: 'Everyone can reach the spot in two minutes.',
    links: ['ready-tornadoes'] });

  add({ id: 'hz-hurricane', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['hurricane'], need: ['hz:hurricane'],
    title: 'Know your hurricane zone and when you leave',
    have: 'I know my evacuation zone and route for a hurricane',
    who: 'You and the other adults.',
    steps: [
      'Look up your evacuation zone on your county or state emergency site.',
      'Pick where you would go and two routes there.',
      'Decide in advance: if they call your zone, you go. No debate on the day.',
      'Keep the tank at least half full in storm season.',
      'Know how you would board windows and tie down what could blow away.'
    ],
    when: 'Before storm season.',
    why: 'Most hurricane harm comes from water, not wind. Leaving early, on a plan, is the safe call.',
    done: 'Your zone, your destination and two routes written on the plan.',
    links: ['ready-hurricanes', 'ready-evacuation'] });

  add({ id: 'hz-flood', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['flood', 'hurricane'], need: ['hz:flood'],
    title: 'Make your flood plan',
    have: 'A flood plan: my flood risk, high ground, and what we move up',
    who: 'You.',
    steps: [
      'Look up your address on the FEMA flood map.',
      'Know your way to high ground that does not cross low water.',
      'Never drive or walk into flood water. Six inches of moving water can knock you down. A foot can carry away most cars, and two feet can carry away trucks. Turn around.',
      'Know what you would move up first: papers, medicine, electronics.',
      'Check if your insurance covers flood. Most home and renter policies do not.'
    ],
    when: 'This month.',
    why: 'Floods are the most common disaster in the country. Most flood deaths are in vehicles.',
    done: 'Your route to high ground on the plan, and you know if you have flood coverage.',
    links: ['ready-floods', 'fema-floodmap', 'fema-flood'] });

  add({ id: 'hz-wildfire', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['wildfire'], need: ['hz:wildfire'],
    title: 'Make your wildfire plan and clear the first five feet',
    have: 'A wildfire plan, and the first five feet around the house cleared',
    who: 'You and the family.',
    steps: [
      'Clear leaves, pine needles and anything that burns from the gutters, roof and the first 5 feet around the house.',
      'Keep the first 30 feet around the house clear of things that burn. Move firewood piles away from the walls.',
      'Pick two ways out of the area. Wildfire can close a road.',
      'Leave as soon as you are told, or sooner if it feels wrong. Keep the go-bag ready.',
      'In smoke, stay inside with windows shut.'
    ],
    when: 'Before fire season.',
    why: 'Most homes lost to wildfire catch from embers landing near the house. The first five feet matter most.',
    done: 'The first five feet are clear and two routes out are on the plan.',
    links: ['ready-wildfires', 'usfa-wildfire'] });

  add({ id: 'hz-earthquake', area: 'home', rank: 1, cost: 0, weight: 2, hz: ['earthquake'], need: ['hz:earthquake'],
    title: 'Make your home safer for an earthquake',
    have: 'Heavy furniture secured and we know Drop, Cover, Hold On',
    who: 'You.',
    steps: [
      'Teach everyone: Drop, Cover, Hold On. Get under a sturdy table and hold on.',
      'Strap tall shelves and the water heater to the wall studs.',
      'Move heavy things off high shelves and away from beds.',
      'Know where your gas shutoff is.',
      'Practice once with the family.'
    ],
    when: 'This month.',
    why: 'Most earthquake injuries come from things falling, not buildings falling.',
    done: 'Tall furniture and the water heater are strapped, and the family has practiced.',
    links: ['ready-earthquakes'] });

  add({ id: 'hz-winter', area: 'home', rank: 2, cost: 0, weight: 2, hz: ['winter'], need: ['hz:winter'],
    title: 'Get the house and truck ready for a winter storm',
    have: 'House and vehicle ready for winter storms',
    who: 'You.',
    steps: [
      'Know how to keep pipes from freezing: let faucets drip, open cabinet doors under sinks.',
      'Know where to shut the water off if a pipe bursts.',
      'Keep a winter kit in the vehicle: blanket, boots, gloves, water, snacks, a scraper and sand or cat litter.',
      'Do not travel in a storm unless you must. If you get stuck, stay with the vehicle and keep the exhaust pipe clear.'
    ],
    when: 'Before the first freeze.',
    why: 'Burst pipes and stuck vehicles are the two big winter problems. Both are easy to get ahead of.',
    done: 'The vehicle kit is packed and you know the pipe steps.',
    links: ['ready-winter'] });

  add({ id: 'hz-chemical', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['chemical'], need: ['hz:chemical'],
    title: 'Know how to shelter in place from a chemical release',
    have: 'I know how to shelter in place from a chemical release and which room we use',
    who: 'You and the family.',
    steps: [
      'Pick an inside room with as few windows and doors as you can, above ground. Chemicals in the air can settle low.',
      'Learn how to turn off your furnace, air conditioner and fans, so no outside air comes in.',
      'If told to stay inside: bring everyone and pets in. Close and lock windows and doors. Close vents and fireplace dampers. Shut off the air.',
      'Seal the room\'s door, windows and vents with plastic and duct tape, or wet towels.',
      'If you are outside when it happens: move away fast, upwind of the source, then get into the nearest building. In a car, close the windows and vents and shut off the air.',
      'Stay in until officials say it is safe, even to help others. Listen to the radio or alerts.',
      'Signs of a release: trouble breathing, stinging eyes, burning in the nose or throat, or many dead birds or insects. Some chemicals have no smell.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'Whether it is a tanker wreck or an attack, the safest move is often to get inside and seal up. Knowing how makes it quick.',
    done: 'A room picked, and every adult knows how to shut off the air and seal the room.',
    links: ['ready-chemical', 'ready-shelter'] });

  /* ---------- attacks (on for every plan; he can take one off on the home page) ---------- */
  add({ id: 'att-nuclear', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['nuclear'], need: ['hz:nuclear'],
    title: 'Learn the radiation rule: get inside, stay inside, stay tuned',
    have: 'We know what to do in a nuclear or radiation emergency, and where we would shelter',
    who: 'You and the whole family.',
    steps: [
      'Learn the rule: get inside, stay inside, stay tuned. It is the same for a power plant accident, a dirty bomb or a nuclear explosion.',
      'Pick your best spot at home: the basement, or the middle of the house away from outside walls and the roof. Brick or concrete is best.',
      'Know the best spot at work and how the kids\' school shelters in place.',
      'If there is a blast and you are outside: get behind anything solid and lie face down. When the shock wave passes, get into the nearest building. You have 10 minutes or more before fallout arrives.',
      'Once inside: close windows and doors, close the fireplace damper, and turn off fans, air conditioning and a furnace that pulls in outside air. Bring pets in.',
      'Plan to stay inside at least 24 hours unless there is a fire or gas leak, or officials say it is safe to leave. Radiation drops fast in the first day.',
      'Stay tuned to the radio or alerts for when to leave and where to go.'
    ],
    when: 'This month. Twenty minutes at dinner.',
    why: 'Most people in a radiation emergency are not near the center of it. Getting inside and staying there is what protects them, and it costs nothing.',
    done: 'Everyone can say the rule and point to the shelter spot at home.',
    links: ['ready-radiation', 'cdc-getinside'] });

  add({ id: 'att-clean', area: 'medical', rank: 3, cost: 0, weight: 1, hz: ['nuclear', 'chemical', 'bio'], needAny: ['hz:nuclear', 'hz:chemical', 'hz:bio'],
    title: 'Learn how to clean off after an exposure',
    have: 'I know how to clean off radiation, chemicals or germs after an exposure',
    who: 'You and the other adults.',
    steps: [
      'Take off the outer layer of clothes carefully, so dust does not shake loose. That alone removes up to 90 percent of radioactive dust.',
      'Put the clothes in a plastic bag. Seal it and set it away from people and pets.',
      'Shower warm with lots of soap. Wash your hair with shampoo or soap. Do not scrub or scratch the skin. Keep cuts covered.',
      'No shower? Wash hands, face and bare skin at a sink. Wipe eyelids, ears and nose with a damp cloth, then bag the cloth.',
      'Brush and wash pets that were outside.',
      'Food and water that stayed inside are fine. Wipe off sealed cans from outside. Do not eat from the garden until officials say it is safe.',
      'Then call for medical help if anyone is sick or was exposed to germs or chemicals.'
    ],
    when: 'This month. Ten minutes.',
    why: 'Getting it off your skin and clothes fast is the biggest thing you can do yourself after an exposure.',
    done: 'Two adults can walk through the steps.',
    links: ['cdc-decon', 'ready-radiation', 'ready-bio'] });

  add({ id: 'att-kit', area: 'plan', rank: 5, cost: 2, costNote: 'About $30 to $60', weight: 1, hz: ['nuclear', 'chemical', 'bio'], needAny: ['hz:nuclear', 'hz:chemical', 'hz:bio'],
    title: 'Stock a shelter and clean-up kit',
    have: 'A shelter kit: plastic sheeting, duct tape, masks, spare clothes and trash bags',
    who: 'You.',
    steps: [
      'Plastic sheeting and duct tape, cut to fit the shelter room\'s windows, door and vents. Label each piece.',
      'Scissors, and a few old towels for under the door.',
      'A well-fitting N95 mask for each person.',
      'A spare change of clothes for each person, and heavy trash bags for exposed clothes.',
      'Soap, a gallon of water and moist wipes (not household cleaning wipes).',
      'Keep it all in one bin in the shelter room, with the radio and a flashlight.'
    ],
    when: 'After the free steps.',
    why: 'Ready.gov lists these for chemical, radiation and germ emergencies. Having them in the room saves a search when it counts.',
    done: 'One bin, in the shelter room, packed.',
    links: ['ready-chemical', 'ready-radiation', 'ready-kit'] });

  add({ id: 'att-bio', area: 'medical', rank: 3, cost: 1, costNote: 'A box of N95 masks, about $15 to $25', weight: 2, hz: ['bio', 'sickness'], need: ['hz:bio'],
    title: 'Get ready for a biological attack or outbreak',
    have: 'Shots up to date, masks on hand, and we know how to get official health news',
    who: 'You and the other adults.',
    steps: [
      'Ask your doctor whether everyone\'s shots are up to date.',
      'Keep a box of well-fitting N95 masks. In a pinch, two or three layers of cotton over the nose and mouth help.',
      'Know where official word comes from: the county health department, the radio and your alerts. A germ release may first show up as many people getting sick.',
      'If you see a suspicious powder or spray, get away from it. Then call 911.',
      'If you may have been exposed: bag your clothes, wash with soap and water, and call your doctor or the health department. You may be asked to stay apart from others.',
      'In an outbreak: wash hands often, do not share food or utensils, and avoid crowds.',
      'Keep two weeks of food, water and medicine, so you can stay home if asked.'
    ],
    when: 'This month.',
    why: 'Germs spread person to person. A family that can stay home, masked and stocked, keeps itself and its neighbors safer.',
    done: 'Masks on hand, shots checked, and the health department number on the plan.',
    links: ['ready-bio', 'ready-pandemic'] });

  add({ id: 'att-cyber-lock', area: 'home', rank: 2, cost: 0, weight: 2, hz: ['cyber', 'income'], need: ['hz:cyber'],
    title: 'Lock down your email, bank and phone accounts',
    have: 'Two-step sign-in on email and bank, strong passwords, updates on',
    who: 'You and every adult with a phone.',
    steps: [
      'Turn on two-step sign-in for email, the bank and your phone carrier account. It is in each one\'s security settings.',
      'Use a long passphrase, different for each of those accounts. A password manager keeps track of them.',
      'Turn on automatic updates on phones and computers.',
      'Freeze your credit with the three credit bureaus. It is free, and you can lift it any time you need a loan.',
      'Pull your free credit reports and look for accounts you did not open.',
      'Rule for the house: no one clicks a link in a text or email they did not expect. The government will not call or text demanding money.'
    ],
    when: 'This weekend. About an hour.',
    why: 'Most hacks start with a stolen password or a bad link. These steps stop most of them, and they cost nothing.',
    done: 'Two-step sign-in on email and bank, credit frozen, updates on.',
    links: ['ready-cyber', 'ftc-freeze', 'credit-report'] });

  add({ id: 'att-cyber-offline', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['cyber', 'outage', 'all'], need: ['hz:cyber'],
    title: 'Make a plan for when phones, cards and the internet are down',
    have: 'We have a plan for a week with no phones, internet or card readers',
    who: 'You and the family.',
    steps: [
      'Set a rule: if phones are down and we are apart, we meet at the near meeting spot at noon and at 6 p.m. each day until all are there.',
      'Keep paper copies: the phone cards, the bill list, the plan and a map.',
      'Keep some cash at home. Card readers and ATMs stop when networks do.',
      'Know how you would get news: a battery or crank radio.',
      'Know how the kids get home and how you get to work without a phone map.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'A cyber attack on power, banks or phones looks a lot like a long outage. A plan on paper keeps the family together when the screens go dark.',
    done: 'The family knows the noon and 6 p.m. rule, and the paper copies are in the go-bag.',
    links: ['ready-cyber', 'ready-plan'] });

  add({ id: 'att-cyber-backup', comfort: true, area: 'home', rank: 4, cost: 1, costNote: 'About $15 for a USB drive', weight: 1, hz: ['cyber', 'fire', 'flood'], need: ['hz:cyber'],
    title: 'Back up your photos and papers where no one can reach them',
    have: 'Photos and key papers backed up on a drive kept apart from the computer',
    who: 'You.',
    steps: [
      'Get a USB drive, or use an old external drive.',
      'Copy family photos and the photos of your key papers onto it. Turn on the drive\'s password or encryption if it has one.',
      'Unplug it when done. A drive left plugged in can be locked up by the same attack.',
      'Keep it with your document copies, or with your outside contact. Redo it every few months.',
      'If you are ever hacked, report it at IdentityTheft.gov and the FBI\'s IC3 site, and call your bank.'
    ],
    when: 'This month. One evening.',
    why: 'Ransom attacks lock files until you pay. A copy on a drive in a drawer means you never have to.',
    done: 'A backup drive, unplugged, kept apart from the computer.',
    links: ['ready-cyber', 'ftc-idtheft', 'fbi-ic3'] });

  add({ id: 'hz-evacuate', area: 'plan', rank: 3, cost: 0, weight: 2, hz: ['evacuate'], need: ['vehicle'],
    title: 'Get ready to leave fast',
    have: 'We can leave home in 15 minutes with what matters',
    who: 'You and the family.',
    steps: [
      'Keep the tank at least half full.',
      'Make a short list by the door: go-bag, medicine, phones and chargers, papers, pets.',
      'Decide who grabs what. Write it down.',
      'Time it once: how long to get everyone in the vehicle?'
    ],
    when: 'This month.',
    why: 'Floods, fires and spills can give little warning. Fifteen minutes is enough if it is planned.',
    done: 'You timed it once at 15 minutes or less.',
    links: ['ready-evacuation'] });

  /* ---------- more disaster steps (they show when his county has the disaster) ---------- */
  add({ id: 'hz-storm', area: 'home', rank: 2, cost: 0, weight: 2, hz: ['storm'], need: ['hz:storm'],
    title: 'Get ready for severe storms and high wind',
    have: 'Ready for severe storms: loose things tied down, trees checked, a storm room picked',
    who: 'You.',
    steps: [
      'Walk the yard. Tie down or put away what wind could throw: grills, trampolines, lawn chairs, trash cans.',
      'Look at trees near the house. Dead limbs over the roof should come down. Leave anything near a power line to the power company.',
      'Pick an inside room away from windows for when the storm hits.',
      'When thunder roars, go indoors. Stay in 30 minutes after the last thunder.',
      'Park under cover when hail is forecast.'
    ],
    when: 'This month. One hour.',
    why: 'Wind and hail damage more homes each year than most bigger disasters. Most of it comes from loose things and dead limbs.',
    done: 'The yard is tied down and a storm room is on the plan.',
    links: ['ready-thunderstorms', 'nws-safety'] });

  add({ id: 'hz-drought', area: 'water', rank: 4, cost: 0, weight: 1, hz: ['drought'], need: ['hz:drought'],
    title: 'Plan for a dry season',
    have: 'A plan to save water in a drought',
    who: 'You and the family.',
    steps: [
      'Fix drips and running toilets. A running toilet can waste hundreds of gallons a day.',
      'Know your town\'s water rules in a drought. Check the water utility website.',
      'On a well, know your well depth. Land Finder shows the typical well depth in your county.',
      'Catch rain where it is allowed, for the garden and animals.'
    ],
    when: 'Before the dry season.',
    why: 'In a drought, water you do not waste is water you have. On a well, it can mean the well keeps up.',
    done: 'Drips fixed and the local rules known.',
    links: ['ready-drought', 'landfinder'] });

  add({ id: 'hz-landslide', area: 'plan', rank: 2, cost: 0, weight: 1, hz: ['landslide'], need: ['hz:landslide'],
    title: 'Know the landslide signs around your home',
    have: 'I know the warning signs of a landslide near my home',
    who: 'You.',
    steps: [
      'Look at the slope above and below the house. Note cracks in the ground, leaning trees or fences, or new springs.',
      'After heavy rain, listen for rumbling and watch for sudden muddy water in creeks.',
      'Know a way out that does not cross a creek or the bottom of a slope.',
      'Leave when officials say, or sooner if the ground starts moving.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'Landslides often follow heavy rain or fire, and they give warning signs to those who know them.',
    done: 'You walked the slope and the way out is on the plan.',
    links: ['ready-landslide'] });

  add({ id: 'hz-tsunami', area: 'plan', rank: 1, cost: 0, weight: 2, hz: ['tsunami'], need: ['hz:tsunami'],
    title: 'Know your way to high ground for a tsunami',
    have: 'I know the tsunami zone and the walk to high ground',
    who: 'You and the family.',
    steps: [
      'Look up your county\'s tsunami zone map on the county or state emergency site.',
      'Find high ground or go inland: 100 feet above sea level, or at least 1 mile inland.',
      'Plan to walk it. Roads jam.',
      'Rule: if you feel a strong quake near the coast, or see the sea pull back, go to high ground now. Do not wait for a warning.'
    ],
    when: 'This month.',
    why: 'A local tsunami can arrive in minutes. The walk you know is the one you will take.',
    done: 'The family has walked the route to high ground.',
    links: ['ready-tsunamis'] });

  add({ id: 'hz-volcano', area: 'plan', rank: 3, cost: 0, weight: 1, hz: ['volcano'], need: ['hz:volcano'],
    title: 'Know your volcano plan',
    have: 'I know the volcano hazard zone and what to do about ash',
    who: 'You.',
    steps: [
      'Look up your county\'s volcano hazard map on the state emergency site.',
      'Keep masks for ash in the go-bag. Ash is hard on the lungs.',
      'Know that ash can close roads and stop engines. Keep the tank full.',
      'Follow evacuation orders.'
    ],
    when: 'This year.',
    why: 'Ash travels far. Simple masks and a full tank cover most of it.',
    done: 'Masks in the go-bag and the hazard map read.',
    links: ['ready-volcanoes'] });

  add({ id: 'hz-avalanche', area: 'skills', rank: 4, cost: 0, weight: 1, hz: ['avalanche'], need: ['hz:avalanche'],
    title: 'Learn avalanche basics before you go out in the snow',
    have: 'I know avalanche basics for the backcountry near me',
    who: 'You and anyone who hunts, works or rides in the mountains.',
    steps: [
      'Check the local avalanche forecast before every trip onto snowy slopes.',
      'Take an avalanche awareness class if one is offered near you. Many are free.',
      'Never go alone. Tell someone your route and when you will be back.',
      'Stay off steep slopes and gullies after big snow or a quick warm-up.'
    ],
    when: 'Before the snow season.',
    why: 'Avalanches catch people outdoors, not homes. Checking the forecast keeps you out of one.',
    done: 'You know where to find the forecast and you check it.',
    links: ['ready-avalanche'] });

  /* ======================= SECURITY AND HOME ======================= */
  add({ id: 'home-smoke', area: 'home', rank: 1, cost: 0, weight: 3, hz: ['fire'],
    title: 'Test every smoke alarm',
    have: 'Smoke alarms tested: in each bedroom, outside sleeping areas, on every level',
    who: 'You.',
    steps: [
      'Push the test button on each smoke alarm.',
      'Check you have one inside each bedroom, outside each sleeping area, and on every level.',
      'Replace dead batteries. Replace any alarm 10 years old or older; the date is on the back.',
      'Put a monthly test on the calendar.'
    ],
    when: 'Today. Ten minutes.',
    why: 'House fire is the disaster most families actually face. Working alarms give you the minutes to get out.',
    done: 'Every alarm tested and in the right places.',
    links: ['usfa-smoke'] });

  add({ id: 'home-neighbors', area: 'home', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Know two neighbors by name',
    have: 'I know at least two neighbors and we have each other\'s numbers',
    who: 'You.',
    steps: [
      'Introduce yourself to two neighbors. Swap numbers.',
      'Ask who in the area might need help: older folks, someone on oxygen, a single mom.',
      'Ask what skills they have. A nurse, a mechanic, a ham operator.',
      'Add their numbers to the family cards.'
    ],
    when: 'This month.',
    why: 'Neighbors are the first help in every disaster. A street that knows each other is safer every day, not just in a storm.',
    done: 'Two neighbors\' numbers on your cards.',
    links: ['ready-plan'] });

  add({ id: 'home-check', area: 'home', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Walk the house at night like a stranger',
    have: 'Doors lock, windows latch and the outside lights work',
    who: 'You.',
    steps: [
      'After dark, walk around the outside of the house.',
      'Check every door locks and every window latches.',
      'Make sure the outside lights work and nothing hides the doors.',
      'Fix what you can this week with what you have. Write down the rest.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'A home that looks cared for is passed over. Most of this costs nothing.',
    done: 'Every door and window checked, and a list of fixes.',
    links: ['ready-plan'] });

  add({ id: 'home-inventory', area: 'home', rank: 3, cost: 0, weight: 1, hz: ['fire', 'flood', 'tornado', 'hurricane', 'wildfire', 'earthquake'],
    title: 'Video the house for insurance',
    have: 'A video or photo record of what is in the house',
    who: 'You.',
    steps: [
      'Walk each room with your phone video on. Open closets and drawers.',
      'Say what big items are and about what they cost.',
      'Get serial numbers on tools, guns and electronics.',
      'Save the video somewhere off the phone, and redo it each year.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'After a fire or storm, insurance pays for what you can show. This is your proof.',
    done: 'A saved video of every room.',
    links: ['ready-money'] });

  add({ id: 'home-insurance', area: 'home', rank: 3, cost: 0, weight: 1, hz: ['fire', 'flood', 'tornado', 'hurricane', 'wildfire', 'earthquake'],
    title: 'Read your home or renter policy',
    have: 'I know what my home or renter insurance covers',
    who: 'You.',
    steps: [
      'Find your policy. If you rent and have none, get a renter quote. It is often a few dollars a month.',
      'Check: does it cover flood? Earthquake? Most do not.',
      'Write the policy number and the claims phone number on the plan.',
      'Call your agent with questions. It costs nothing to ask.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'Many men find out what they are not covered for after the storm. Better to know now.',
    done: 'You know what is and is not covered, and the claim number is on the plan.',
    links: ['fema-flood', 'ready-money'] });

  add({ id: 'home-extinguisher', area: 'home', rank: 4, cost: 2, costNote: 'About $25 to $50', weight: 2, hz: ['fire'],
    title: 'Keep a fire extinguisher in the kitchen',
    have: 'A fire extinguisher in the kitchen that I know how to use',
    who: 'You and the other adults.',
    steps: [
      'Get a multipurpose (ABC) extinguisher. Mount it near the kitchen exit, not by the stove.',
      'Learn PASS: Pull the pin, Aim at the base, Squeeze, Sweep.',
      'Rule: only fight a small fire, and only with a clear way out behind you. Otherwise, get out.',
      'Check the gauge monthly.'
    ],
    when: 'This month.',
    why: 'A small kitchen fire put out in seconds stays small.',
    done: 'An extinguisher mounted by the kitchen exit, and two adults know PASS.',
    links: ['usfa-ext'] });

  /* ======================= SKILLS ======================= */
  add({ id: 'skill-map', area: 'skills', rank: 2, cost: 0, weight: 2, hz: ['evacuate', 'all'],
    title: 'Learn to get around without your phone',
    have: 'A paper map, and I can reach my meeting spots without a phone',
    who: 'You.',
    steps: [
      'Print or pick up a paper map of your county and the route to your out-of-town spot.',
      'Mark your home, meeting spots, hospital and two routes out.',
      'Drive one route using only the map.',
      'Keep the map in the vehicle.'
    ],
    when: 'This month.',
    why: 'GPS needs a signal and a charge. A map always works.',
    done: 'A marked map in the vehicle, and one route driven with it.',
    links: ['usgs-maps'] });

  add({ id: 'skill-teach', area: 'skills', rank: 2, cost: 0, weight: 1, hz: ['all'], need: ['household'],
    title: 'Teach the family three things',
    have: 'Everyone in the house knows our address, how to call 911 and where the plan is',
    who: 'You.',
    steps: [
      'Every person: say the home address from memory.',
      'Every person: how to call 911 and what to say.',
      'Every person: where the plan, the water, the kit and the lights are.',
      'Quiz them at dinner a week later.'
    ],
    when: 'This week. At dinner.',
    why: 'You will not always be home. A family that knows these three things can look after itself.',
    done: 'Everyone passed the dinner quiz.',
    links: ['ready-kids'] });

  add({ id: 'skill-fix', comfort: true, area: 'skills', rank: 3, cost: 0, weight: 1, hz: ['all'],
    title: 'Learn three repairs you would need with no repairman',
    have: 'I can do basic repairs: reset a breaker, stop a leak, clear a drain',
    who: 'You. Bring a kid along.',
    steps: [
      'Reset a tripped breaker. Know which breaker runs what.',
      'Stop a leak: shut the water to that fixture and patch or cap it.',
      'Clear a drain with a plunger or snake.',
      'Keep a small kit: tape, a wrench, pliers, screwdrivers, a utility knife.'
    ],
    when: 'This month.',
    why: 'After a storm, repairmen are booked for weeks. Small fixes keep the house running.',
    done: 'You did each repair once, or know how.',
    links: ['ready-skills', 'usda-extension'] });

  add({ id: 'skill-fema', comfort: true, area: 'skills', rank: 3, cost: 0, weight: 1, hz: ['all'],
    title: 'Take a free FEMA online course',
    have: 'I have taken a free FEMA preparedness course',
    who: 'You.',
    steps: [
      'Open FEMA\'s Independent Study page.',
      'Start with IS-909, Community Preparedness. About an hour.',
      'Take the short test for the certificate.',
      'Pick a second one that fits your hazards.'
    ],
    when: 'This month. About an hour.',
    why: 'Free, at home, and taught the way emergency managers learn it.',
    done: 'One certificate.',
    links: ['fema-is'] });

  add({ id: 'skill-cert', comfort: true, area: 'skills', rank: 5, cost: 0, weight: 2, hz: ['all'],
    title: 'Join your local CERT training',
    have: 'I have taken CERT (Community Emergency Response Team) training',
    who: 'You. Another adult can come.',
    steps: [
      'Find your local CERT program on the FEMA page, or call your county emergency office.',
      'Sign up. It is free and runs a few evenings or weekends.',
      'It covers light search and rescue, first aid, fire safety and team organizing.',
      'Stay on the list. They call CERT members when the town needs help.'
    ],
    when: 'The next session in your area.',
    why: 'CERT makes you useful to your whole town, not just your house.',
    done: 'You finished CERT.',
    links: ['ready-cert'] });

  /* ======================= MONEY ======================= */
  add({ id: 'money-bills', area: 'money', rank: 1, cost: 0, weight: 2, hz: ['income', 'all'],
    title: 'List your bills and how to pay them offline',
    have: 'A list of our bills, accounts and how to reach each one',
    who: 'You and the other adult who handles money.',
    steps: [
      'List every bill: who, how much, when it is due, the account number and the phone number.',
      'List bank accounts and insurance with their phone numbers.',
      'Keep it with the document copies, not on the phone alone.',
      'Ready.gov has a free form for this: the Emergency Financial First Aid Kit.'
    ],
    when: 'This month. One evening.',
    why: 'After a disaster or a layoff, one call can delay a bill or stop a late fee. This list makes those calls easy.',
    done: 'A paper list with every bill and account.',
    links: ['ready-money'] });

  add({ id: 'money-nets', area: 'money', rank: 2, cost: 0, weight: 1, hz: ['income', 'all'],
    title: 'Know your safety nets before you need them',
    have: 'I know where to turn if the paycheck stops: unemployment, 211, food help',
    who: 'You and the other adult who handles money.',
    steps: [
      'Find your state unemployment office website. Write it on the bill list.',
      'Know 211. Call or text it for local help with rent, food, utilities and disaster aid.',
      'Find the nearest food pantry or church food help. Write down the hours.',
      'After a declared disaster, know that FEMA aid is applied for at DisasterAssistance.gov or in the FEMA app.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'A layoff or disaster is no time to be searching. Knowing where to turn keeps a hard month from turning into a hard year.',
    done: 'The numbers and sites are written on your bill list.',
    links: ['ready-money', 'fema-app'] });

  add({ id: 'money-cash', area: 'money', rank: 3, cost: 1, costNote: 'Money you keep, not spend. Start with $50', weight: 2, hz: ['outage', 'all'],
    title: 'Keep some cash at home',
    have: 'Some cash at home in small bills',
    who: 'You.',
    steps: [
      'Start with what you can: even $50 in small bills.',
      'Build to enough for a few days of gas, food and a motel.',
      'Keep it hidden in a safe spot, or in the go-bag.',
      'Do not spend it on anything but an emergency.'
    ],
    when: 'Start this payday.',
    why: 'Card readers and ATMs go down with the power. Cash still works.',
    done: 'Cash in small bills, in a known safe spot.',
    links: ['ready-money'] });

  add({ id: 'money-starter', area: 'money', rank: 4, cost: 3, costNote: 'Saved, not spent. $500 to $1,000', weight: 3, hz: ['income', 'all'],
    title: 'Save a starter cushion',
    have: 'A starter cushion saved ($500 to $1,000)',
    who: 'You and the other adult who handles money.',
    steps: [
      'Open a savings account apart from checking, so it is not spent by accident.',
      'Set up an automatic transfer each payday. Even $20 a week is $1,000 a year.',
      'Put tax refunds and side money in it.',
      'Only use it for an emergency. Refill it after.'
    ],
    when: 'Start this payday.',
    why: 'Most emergencies are a car repair, a doctor bill or a short layoff. A cushion keeps those from becoming debt.',
    done: '$500 to $1,000 in savings.',
    links: ['fdic-moneysmart', 'ready-money'] });

  add({ id: 'money-month', comfort: true, area: 'money', rank: 6, cost: 4, costNote: 'Saved, not spent. One month of living costs', weight: 2, hz: ['income'], after: 'money-starter',
    title: 'Build the cushion to one month of expenses',
    have: 'One month of living costs saved',
    who: 'You and the other adult who handles money.',
    steps: [
      'Add up one month of rent or mortgage, utilities, food, gas and insurance.',
      'Keep the automatic transfer going.',
      'If there is high-interest debt, pay it down alongside. Groundwork has a free payoff plan.'
    ],
    when: 'Over the next year.',
    why: 'A month of cushion turns a layoff into a job search instead of a crisis.',
    done: 'One month of living costs saved.',
    links: ['fdic-moneysmart', 'groundwork'] });

  add({ id: 'money-three', comfort: true, area: 'money', rank: 8, cost: 4, costNote: 'Saved, not spent. Three months of living costs', weight: 1, hz: ['income'], after: 'money-month',
    title: 'Grow the cushion to three months',
    have: 'Three months of living costs saved',
    who: 'You and the other adult who handles money.',
    steps: [
      'Keep the transfer going after you hit one month.',
      'Raise it with each raise.',
      'Three months is a common goal. More if your work is seasonal.'
    ],
    when: 'Over the next few years.',
    why: 'Three months is real freedom. You can wait out most hard seasons.',
    done: 'Three months saved.',
    links: ['fdic-moneysmart'] });

  /* ---------- survival skills, added 2026-11-21 ---------- */
  add({ id: 'med-cpr-video', area: 'medical', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Learn Hands-Only CPR from a short free video',
    have: 'I know Hands-Only CPR and have practiced the pace',
    who: 'You. Then every teen and adult in the house.',
    steps: [
      'Watch the American Heart Association\'s free Hands-Only CPR video. It runs about a minute and a half.',
      'Learn the two steps, in order: call 911, then push hard and fast in the center of the chest.',
      'Learn the pace: 100 to 120 pushes a minute. Pick a song you know with that beat.',
      'Know the limit: for babies, children, drowning and overdose, a full class with breaths is the next step.',
      'Watch it again with the others in the house.'
    ],
    when: 'This week. Ten minutes.',
    why: 'About 70 percent of cardiac arrests outside a hospital happen at home, so the person you save will likely be family. CPR right away can double or triple the chance they live.',
    done: 'You watched the video, know the two steps and the pace, and showed one other person.',
    links: ['aha-hocpr', 'aha-hocpr-facts'] });

  add({ id: 'med-heat-cold', area: 'medical', rank: 2, cost: 0, weight: 2, hz: ['heat', 'winter', 'outage', 'all'],
    title: 'Learn the signs of heat stroke and hypothermia, and what to do',
    have: 'I know the signs of heat stroke, heat exhaustion, hypothermia and frostbite, and what to do',
    who: 'You and the other adults.',
    steps: [
      'Heat stroke: confusion, slurred speech, passing out, hot dry skin or heavy sweating. Call 911 and cool the person fast with water and wet cloths.',
      'Heat exhaustion: heavy sweating, headache, dizziness, weakness, nausea, thirst. Get them out of the heat, give sips of cool water, and get them checked.',
      'Hypothermia: shivering, exhaustion, confusion, fumbling hands, slurred speech, drowsiness. Below 95°F is an emergency.',
      'Frostbite: white or grayish-yellow skin that feels firm, waxy or numb. Warm it in warm, not hot, water. Never rub it.',
      'Write all four on a card and keep it with the first aid kit.'
    ],
    when: 'This week. Twenty minutes.',
    why: 'Heat and cold are the quiet dangers in an outage or a day outdoors. Both cloud a person\'s thinking, so someone else has to spot them.',
    done: 'You can name the signs of all four and what to do, and the card is in the kit.',
    links: ['cdc-heat-ill', 'cdc-hypo'] });

  add({ id: 'med-wounds', area: 'medical', rank: 3, cost: 0, weight: 2, hz: ['all'],
    title: 'Learn to treat a burn, a deep cut and a sprain',
    have: 'I know first aid for a burn, a cut and a sprain',
    who: 'You and the other adults.',
    steps: [
      'Burn: cool it in cool water, not ice, for at least 5 minutes. Cover it loosely with a clean, dry bandage.',
      'A burn the size of your palm or bigger, or from chemicals or electricity: call 911.',
      'Cut: wash your hands, wash the cut with mild soap and water, press on it to stop the bleeding, then cover it.',
      'A cut that still bleeds after 10 minutes of pressure: call 911. A deep or gaping one may need stitches.',
      'Sprain: ice wrapped in cloth, a firm but not tight wrap, raise it above the heart, and rest it.',
      'Check the kit has gauze, non-stick bandages, a wrap and a cold pack.'
    ],
    when: 'This week. Thirty minutes.',
    why: 'Clean-up and outdoor work bring burns, cuts and twisted ankles. Knowing the first ten minutes keeps a small injury small.',
    done: 'You can walk through all three without looking, and the kit has what they need.',
    links: ['nih-burns', 'nih-cuts', 'nih-sprains'] });

  add({ id: 'med-hygiene', area: 'sanitation', rank: 3, cost: 1, costNote: 'Hand sanitizer and wipes, about $10', weight: 1, hz: ['all'],
    title: 'Plan how to stay clean without running water',
    have: 'A way to wash hands and stay clean when the water is off',
    who: 'You and whoever runs the house.',
    steps: [
      'Set aside a large water jug with soap and a clean towel as a hand-washing station.',
      'Keep hand sanitizer with at least 60% alcohol for when there is no water.',
      'Wash before food, and after the toilet, diapers, garbage, or caring for someone sick.',
      'Use only safe water to brush teeth. Keep cuts clean and covered.',
      'Put soap, sanitizer and wipes in the kit.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'Clean hands matter most when safe water is hard to find. The CDC calls handwashing critical to stop sickness from spreading.',
    done: 'A hand-washing jug set aside, sanitizer in the kit, and everyone knows when to wash.',
    links: ['cdc-hygiene', 'cdc-sanitizer'] });

  add({ id: 'home-toilet', area: 'sanitation', rank: 3, cost: 1, costNote: 'A bucket with a lid, heavy bags and bleach, about $15 to $25 if you have none', weight: 2, hz: ['all'],
    title: 'Make an emergency toilet',
    have: 'An emergency toilet kit: a bucket with a lid, heavy bags, ties and bleach',
    who: 'You.',
    steps: [
      'Gather a medium plastic bucket with a tight lid, heavy-duty trash bags and ties, toilet paper, and household bleach.',
      'Pack it all inside the bucket, with soap or hand sanitizer.',
      'If the pipes are fine but the water is off, flush with water poured from a bucket. Keep some water set aside for it.',
      'After a flood, do not flush until you know the sewer lines are intact. Use the bucket, lined with a bag.',
      'Show one other adult where it is and how it works.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'When the water or the sewer stops, waste becomes the next health problem. FEMA and Ready.gov both put sanitation supplies in the basic kit.',
    done: 'The kit is packed in the bucket, and one other adult knows where it is.',
    links: ['ready-kit', 'fema-supplies'] });

  add({ id: 'food-can', comfort: true, area: 'food', rank: 7, cost: 2, costNote: 'About $40 to $80 for a canner, jars and lids, less if you have some', weight: 1, hz: ['all'],
    title: 'Learn to can and preserve food safely',
    have: 'I can food with tested recipes and the right canner',
    who: 'You and anyone who helps in the kitchen.',
    steps: [
      'Use only tested recipes, from the National Center for Home Food Preservation or the USDA Complete Guide to Home Canning.',
      'Know the rule: fruits, jams and pickles can go in a boiling-water canner. Vegetables, meat, poultry and fish need a pressure canner.',
      'Find your elevation. At 1,000 feet or higher, the time or pressure goes up.',
      'Start with one batch of fruit or jam in a boiling-water canner.',
      'After 12 to 24 hours, check every seal. Label, date and store the jars cool and dark.'
    ],
    when: 'This season. One afternoon.',
    why: 'Canning done wrong can cause botulism, which can kill. Done by the tested method, it puts a season of food on the shelf.',
    done: 'One batch canned from a tested recipe, every seal checked, every jar labeled.',
    links: ['usda-preserve', 'usda-extension'] });

  add({ id: 'skill-fire', area: 'skills', rank: 4, cost: 0, weight: 1, hz: ['all'],
    title: 'Learn to build and put out a fire safely',
    have: 'I can build a small fire outdoors and put it dead out',
    who: 'You. Bring a kid along.',
    steps: [
      'Check for fire bans first. No fire on dry or windy days.',
      'Use a fire ring, or clear a circle 10 feet across down to bare dirt, away from branches, tents and dry grass.',
      'Set a bucket of water and a shovel next to it before you light it.',
      'Build small: tinder, then kindling, then bigger wood. Light it with a match, never with gas or lighter fluid.',
      'Never leave it. Put it out by drowning, stirring and feeling until it is cold to the touch.'
    ],
    when: 'This month. One evening.',
    why: 'Fire is heat, light, cooking and a signal for help. People start most wildfires, so putting it out matters as much as lighting it.',
    done: 'You built a fire and put it out until it was cold to the touch.',
    links: ['fs-campfire', 'smokey-campfire'] });

  add({ id: 'skill-ten', area: 'skills', rank: 4, cost: 2, costNote: 'Mostly what you have; about $25 to $60 to fill gaps', weight: 1, hz: ['all'],
    title: 'Pack the 10 essentials for the vehicle and the outdoors',
    have: 'The 10 essentials packed, in the vehicle or a day pack',
    who: 'You. One pack for each person who goes out.',
    steps: [
      'Navigation: a paper map and compass, plus a phone and a spare battery.',
      'Light: a headlamp or flashlight, with spare batteries. Fire: waterproof matches or a lighter, and fire starters.',
      'A first aid kit, a knife or multi-tool, and duct tape.',
      'Extra clothes: rain shell, jacket, hat and gloves. Sun protection: sunglasses, sunscreen, a hat.',
      'An extra day of food, water and a way to treat more.',
      'Emergency shelter: a space blanket, tarp or bivy sack.'
    ],
    when: 'This month. One hour.',
    why: 'A breakdown on a back road or a hike that runs late can turn into a night out. The National Park Service built this list for exactly that.',
    done: 'All ten in one pack, in the vehicle or by the door.',
    links: ['nps-10'] });

  add({ id: 'skill-compass', area: 'skills', rank: 4, cost: 1, costNote: 'About $10 to $20 for a basic compass', weight: 1, hz: ['all'], after: 'skill-map',
    title: 'Learn to use a compass and read the land on a topo map',
    have: 'I can take a bearing with a compass and read contour lines',
    who: 'You. Bring a kid along.',
    steps: [
      'Get a USGS topographic map of land near you and a basic baseplate compass.',
      'Learn the contour lines: each line is one elevation, and lines close together mean steep ground.',
      'Find the declination in the map\'s bottom margin. If the map is over 15 years old, look up a current figure.',
      'At the table, draw a line between two points and take its bearing, adjusted for declination.',
      'In a park you know, sight a landmark on the bearing, walk to it, and repeat.'
    ],
    when: 'This month. Two short sessions.',
    why: 'Off the road there are no street signs, and GPS often gets no signal in deep valleys and thick woods. A compass and the shape of the land still work.',
    done: 'You took a bearing off the map and walked it to a landmark.',
    links: ['usgs-maps', 'usgs-bearing'] });

  add({ id: 'skill-signal', area: 'skills', rank: 3, cost: 1, costNote: 'A whistle and a signal mirror, under $15', weight: 1, hz: ['all'],
    title: 'Learn to signal for help',
    have: 'A whistle and a signal mirror in each pack, and I know the signals',
    who: 'You and every kid who goes outdoors.',
    steps: [
      'Put a whistle and a small signal mirror in every pack and the vehicle kit.',
      'Learn the rule: three of anything is a call for help. Three whistle blasts, three flashes, three puffs of smoke.',
      'Repeat it at regular intervals. Searchers answer with two.',
      'Carry bright clothing you can lay out in a clearing to be seen from the air.',
      'Give each child a whistle and one rule: if lost, stop and blow.'
    ],
    when: 'This week. Fifteen minutes.',
    why: 'Searchers have to find you before they can help. A whistle, a mirror and bright cloth make you easy to find.',
    done: 'Every pack has a whistle and a mirror, and every kid knows "stop and blow."',
    links: ['fs-willamette-lost', 'nps-olym-safety'] });

  add({ id: 'skill-lost', area: 'skills', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'If you get lost outdoors, stay put and get found',
    have: 'I leave a trip plan, and I know to stay put if lost',
    who: 'You and everyone in the house who hunts, hikes or fishes.',
    steps: [
      'Before every trip, leave your route and return time with someone at home. Never on the windshield.',
      'Tell them to call 911 if you are overdue. No one else is tracking you.',
      'If lost: stop, stay calm, and try to fix your spot with the map, compass and landmarks.',
      'If you still cannot find the trail, stay put. You will be found sooner.',
      'Stay warm and dry, and signal: three whistle blasts, a mirror, bright clothing.'
    ],
    when: 'Before your next trip out. Ten minutes.',
    why: 'Rangers do not keep track of overdue hikers. The person at home with your plan is your link to help, and staying put makes you easier to find.',
    done: 'Everyone who goes out leaves a plan and knows to stay put.',
    links: ['nps-yose-safety', 'nps-olym-safety'] });

  add({ id: 'skill-night', area: 'skills', rank: 4, cost: 1, costNote: 'A space blanket and a small sit pad, under $25', weight: 1, hz: ['all'],
    title: 'Learn to stay warm through a night outdoors',
    have: 'I can get through a cold night outdoors: layers, shelter and dry clothes',
    who: 'You and anyone who hunts, hikes or drives back roads in winter.',
    steps: [
      'Dress in layers: a thin layer that wicks sweat, wool or fleece over it, and a wind- and water-resistant shell. No cotton.',
      'Pack a warm hat, extra socks and gloves, a space blanket or tarp, and a small pad to sit on.',
      'Stay dry. Put rain gear on before you get wet, and add layers before you shiver.',
      'Get out of the wind and make camp while you still have energy.',
      'Eat and drink all day. Never ignore shivering.'
    ],
    when: 'Before cold weather.',
    why: 'Most hypothermia cases happen between 30 and 50 degrees, when people do not think it is cold enough to matter. Wet and wind do the damage.',
    done: 'Your pack has the layers, hat, shelter and sit pad, and you know the warning signs.',
    links: ['fs-hypothermia', 'fs-backcountry'] });

  add({ id: 'skill-knots', comfort: true, area: 'skills', rank: 4, cost: 0, weight: 1, hz: ['all'],
    title: 'Learn to tie four useful knots',
    have: 'I can tie a bowline, a clove hitch, a figure-eight and a sheet bend',
    who: 'You. Teach a kid.',
    steps: [
      'Cut a few pieces of rope about 3 feet long, 1/4 to 1/2 inch thick.',
      'Bowline: a loop at the end of a rope that will not slip. The free end must sit inside the loop.',
      'Clove hitch: ties a line to a post or a rail.',
      'Figure-eight: a stopper at the end of a rope, so it cannot pull through a ring.',
      'Sheet bend: joins two ropes, even of different sizes. Make the loop in the thicker one.',
      'Follow NOAA\'s pictures and tie each one until you can do it without looking.'
    ],
    when: 'This week. Twenty minutes a night.',
    why: 'A tarp, a load in the truck, a line on a boat: each needs the right knot. A good knot holds under strain and still unties easily.',
    done: 'You can tie all four from memory and teach one to someone else.',
    links: ['noaa-knots'] });

  add({ id: 'skill-hunted', comfort: true, area: 'skills', rank: 6, cost: 1, costNote: 'Some states run the class free in person; online versions may charge a fee', weight: 1, hz: ['all'],
    title: 'Take a hunter education course',
    have: 'I have passed hunter education',
    who: 'You, and any kid old enough for your state\'s course.',
    steps: [
      'Find your state wildlife agency. The U.S. Fish and Wildlife Service lists them by state.',
      'Look up its hunter education course: in person, online, or both.',
      'Sign up and finish it.',
      'Keep the card. Most states require it before you can buy a hunting license.'
    ],
    when: 'Before the next season. Check your state\'s class dates early.',
    why: 'Hunter education teaches safety, ethics, game laws, outdoor survival and wilderness first aid. Most states require it, and it is the first step to putting meat on the table.',
    done: 'You passed and have the card.',
    links: ['fws-hunt-license', 'fws-hunter-ed'] });

  add({ id: 'skill-fish', comfort: true, area: 'skills', rank: 6, cost: 2, costNote: 'A state license plus a basic rod and tackle, about $40 to $100', weight: 1, hz: ['all'],
    title: 'Learn to fish and get your license',
    have: 'I have a fishing license and can rig, cast and land a fish',
    who: 'You and the kids.',
    steps: [
      'Buy your state fishing license, online, by phone or in person. Get a copy of the state fishing rules.',
      'Start with a push-button spin-casting rod and reel. It is the easiest for beginners.',
      'Rig it: tie on a hook, add a sinker 6 to 12 inches up the line, and clip on a bobber.',
      'Practice casting in an open yard with a rubber casting plug in place of the hook.',
      'Go fish. Keep only legal fish and release the rest quickly.'
    ],
    when: 'This season. One afternoon to start.',
    why: 'Fishing turns nearby water into food, and the license money pays for the fish and the public access.',
    done: 'A license in hand, and one trip where you rigged, cast and landed a fish.',
    links: ['fws-fish-license', 'fws-fish-guide'] });


  /* ---------- sanitation, cooking and recovery, added 2026-11-26 ---------- */
  add({ id: 'san-latrine', area: 'sanitation', rank: 6, cost: 0, weight: 1, hz: ['earthquake', 'hurricane', 'tornado', 'outage'], need: ['notApartment'],
    title: 'Know how to dig a latrine if the sewer is out for weeks',
    have: 'I know where on my land a latrine could go, and how to dig and close one',
    who: 'You, and one other adult who can dig.',
    steps: [
      'Use the bucket toilet first. A latrine is for when the sewer is out for weeks.',
      'Pick the spot now: at least 100 feet from any well, spring, creek or pond, and not uphill of one.',
      'Skip low, wet ground. A pit fails where the water table is high or the ground floods.',
      'Keep a small shovel with the toilet kit. Know the plan: a narrow pit, soil over the waste each day, a hand-washing station beside it.',
      'When it is near full, fill it with soil and mark the spot.'
    ],
    when: 'This season. Half an hour to walk the yard and pick the spot.',
    why: 'Oregon State University Extension says rural households can bury waste when the sewer is out, but never within 100 feet of a water source. The CDC lists pit and trench latrines as short-term options.',
    done: 'You picked a spot that meets the distance rule, and the shovel is with the kit.',
    links: ['osu-sanitation', 'cdc-sanitation', 'fema-supplies'] });

  add({ id: 'san-trash', area: 'sanitation', rank: 3, cost: 0, weight: 1, hz: ['outage', 'hurricane', 'flood', 'tornado', 'earthquake', 'winter', 'storm'],
    title: 'Plan how to handle trash when pickup stops',
    have: 'A covered trash can and a plan for spoiled food and debris',
    who: 'You.',
    steps: [
      'Keep trash in tied bags inside a can with a tight lid, outside the house.',
      'Bag spoiled food as soon as you throw it out, and keep it in the covered can.',
      'Never burn household trash.',
      'Keep paint, batteries, chemicals and bagged toilet waste out of the regular trash.',
      'When pickup comes back, sort debris the way your local officials ask.'
    ],
    when: 'This month. Fifteen minutes.',
    why: 'The CDC says to put trash in a covered can and clean up debris fast after a disaster, because it draws rats. The EPA warns that burning trash is a health hazard.',
    done: 'You have a can with a tight lid and you know what stays out of it.',
    links: ['cdc-disaster-animals', 'epa-debris-sort', 'epa-backyard-burning'] });

  add({ id: 'san-pests', area: 'sanitation', rank: 4, cost: 1, costNote: 'Insect repellent and a few snap traps, if you have none', weight: 1, hz: ['hurricane', 'flood', 'storm', 'tornado', 'earthquake'],
    title: 'Keep rats, mosquitoes and snakes away after a disaster',
    have: 'I know how to keep rodents and mosquitoes down and what to do about snakes',
    who: 'You and everyone in the house.',
    steps: [
      'Store food and water in thick plastic, glass or metal with tight lids.',
      'Once a week, empty, cover or throw out anything outside that holds water.',
      'Keep an insect repellent the EPA has registered, and wear long sleeves and long pants.',
      'Close any hole in the walls. Mice can get through a hole the size of a dime.',
      'If you see a snake, back away slowly and call animal control. For a snake bite, call 911.'
    ],
    when: 'This month. Twenty minutes.',
    why: 'The CDC says rodents, mosquitoes and snakes all move toward people after a storm or flood. A few habits keep them out.',
    done: 'Food is sealed, the yard has no standing water, and repellent is in the kit.',
    links: ['cdc-disaster-animals', 'cdc-mosquito-home', 'cdc-rodents-home'] });

  add({ id: 'san-clean', area: 'sanitation', rank: 3, cost: 1, costNote: 'Plain bleach, gloves and goggles, under $25', weight: 2, hz: ['all'],
    title: 'Learn to clean and disinfect with bleach the safe way',
    have: 'Plain bleach and gloves on hand, and I know the safe mixes',
    who: 'You and any adult who cleans.',
    steps: [
      'Keep a jug of plain, unscented bleach that says 5% to 9% sodium hypochlorite, plus gloves and eye protection.',
      'Clean with soap and water first. Use bleach only after.',
      'To disinfect, mix 5 tablespoons (1/3 cup) of bleach in a gallon of water. Mix it fresh each day.',
      'Never mix bleach with ammonia or any other cleaner. Open windows while you work.',
      'Learn the four steps for dishes: wash, rinse, soak in weak bleach water, air dry.'
    ],
    when: 'This month. Fifteen minutes to read the label and write the mixes on the jug.',
    why: 'After a flood or a long outage, germs spread on dishes and surfaces. The CDC gives exact bleach mixes and one hard rule: never mix bleach with other cleaners.',
    done: 'The bleach, gloves and goggles are together, and the mixes are written on the jug.',
    links: ['cdc-bleach', 'cdc-food-after', 'cdc-disaster-cleanup'] });

  add({ id: 'food-fire', area: 'food', rank: 4, cost: 1, costNote: 'A food thermometer, under $25 if you have none', weight: 1, hz: ['outage', 'winter', 'hurricane', 'tornado', 'earthquake'],
    title: 'Learn to cook a meal safely over a wood fire',
    have: 'I can cook over a wood fire and put it out cold',
    who: 'You and one other adult.',
    steps: [
      'Check your local burn rules first, and skip the fire on dry, windy days.',
      'Pick an open spot, clear a 10-foot circle down to bare dirt, and ring the fire with rocks.',
      'Keep a bucket of water and a shovel by the fire, and an adult with it the whole time.',
      'Cook in a cast iron pot or Dutch oven, and check meat with a food thermometer.',
      'Drown, stir and feel the ashes until they are cold to the touch.'
    ],
    when: 'This season. One evening.',
    why: 'The Forest Service says to drown, stir and feel every fire until it is cold. The USDA says a food thermometer, not the color of the meat, tells you it is done.',
    done: 'You cooked one meal over a wood fire, checked it with a thermometer and left the ashes cold.',
    links: ['smokey-campfire', 'fsis-temps', 'fs-inyo-campfire'] });

  add({ id: 'food-fuel', area: 'food', rank: 3, cost: 0, weight: 1, hz: ['outage', 'winter', 'hurricane', 'tornado', 'earthquake'],
    title: 'Store cooking fuel safely and know how many meals it covers',
    have: 'My cooking fuel is stored safely, and I know how many meals it will cook',
    who: 'You.',
    steps: [
      'Keep propane cylinders upright and out of the house, the garage and the space under the grill.',
      'Check gas hoses, and test the connection with soapy water before you cook.',
      'Use charcoal grills outside only, and soak used coals until they are cold.',
      'Stack firewood at least 30 feet from the house, not against any building.',
      'Cook one meal on each fuel you have, note what it used, and write the meal count on your plan.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'The CPSC says propane is highly flammable and burning charcoal gives off carbon monoxide until it is fully out. Stored right, fuel is what turns stored food into hot meals.',
    done: 'Fuel is stored away from the house, and your plan shows how many meals it will cook.',
    links: ['cpsc-grills', 'cpsc-charcoal', 'usfa-garage'] });

  add({ id: 'food-flood', area: 'food', rank: 2, cost: 0, weight: 2, hz: ['flood', 'hurricane'],
    title: 'Know which food to keep and which to throw out after a flood',
    have: 'I know which food is safe to keep after a flood',
    who: 'You and the other adults.',
    steps: [
      'Move canned and boxed food out of the basement and low cabinets to a high shelf.',
      'After a flood, throw out any food floodwater may have touched, unless it is in an undamaged all-metal can or pouch.',
      'Throw out cardboard boxes, jars with screw caps or snap lids, home-canned food and damaged cans.',
      'Save good cans and pouches: wash, rinse, sanitize, air-dry and relabel them.',
      'When in doubt, throw it out. Never taste food to check it.'
    ],
    when: 'This week. Ten minutes to move the food up.',
    why: 'The USDA and the CDC say floodwater makes most food unsafe, even food that looks and smells normal. Knowing the rules saves the cans that can be saved.',
    done: 'Your food is off the low shelves, and you know what goes and what can be saved.',
    links: ['usda-food', 'cdc-food-after'] });

  add({ id: 'food-dry', comfort: true, area: 'food', rank: 7, cost: 1, costNote: 'Food-safe screens or racks, under $25 if you have none', weight: 1, hz: ['outage', 'income'],
    title: 'Keep food without a fridge by drying it and storing it cool',
    have: 'I can dry fruit and store root crops without a fridge',
    who: 'You and anyone who helps in the kitchen.',
    steps: [
      'Dry fruit outdoors only on hot, dry, breezy days. Dry vegetables and meat indoors.',
      'Lay the fruit one layer deep on food-safe screens, cover it against insects, and bring it in at night.',
      'Store dried food in airtight containers in a dark place.',
      'Keep potatoes, carrots and other root crops in a cool spot that does not freeze, and check them every week.'
    ],
    when: 'This season. One batch.',
    why: 'The National Center for Home Food Preservation and university Extension services publish tested ways to dry food and store root crops. Neither needs power.',
    done: 'One batch of fruit dried and stored, and a cool spot picked for root crops.',
    links: ['nchfp-sundry', 'psu-dry', 'uconn-coldstore'] });

  add({ id: 'home-return', area: 'home', rank: 3, cost: 0, weight: 2, hz: ['flood', 'hurricane', 'tornado', 'storm', 'earthquake', 'wildfire'],
    title: 'Learn how to go back in safely after a flood or storm',
    have: 'I know my gas, power and water shutoffs, and how to go back in safely',
    who: 'You and one other adult.',
    steps: [
      'Find your main gas valve, main breaker and water shutoff. Learn how to turn each one off.',
      'Pack a return bag: flashlights, a battery radio, work gloves, boots, N95 masks and a charged phone.',
      'Rule: go back only when officials say it is safe, in daylight, and walk the outside first.',
      'If you smell gas, do not go in. Leave and call the gas company from outside.',
      'Before you clean anything, take photos and video of the damage and call your insurance.'
    ],
    when: 'This month. Thirty minutes.',
    why: 'Gas leaks, wet wiring and weak walls are still there after the storm passes. The CDC and Ready.gov say wait for the all-clear, check the outside first, and photograph damage before cleanup.',
    done: 'Two adults know the three shutoffs, and the return bag is packed.',
    links: ['cdc-return-home', 'cdc-flood-reenter', 'fs-claim'] });

  add({ id: 'home-mold', area: 'home', rank: 4, cost: 1, costNote: 'N95 masks, goggles and long rubber gloves, about $20 to $25 if you have none', weight: 1, hz: ['flood', 'hurricane', 'storm'],
    title: 'Learn how to clean up mold after water damage',
    have: 'I know how to clean up mold safely, and have masks, goggles and gloves',
    who: 'You.',
    steps: [
      'Set aside a few N95 masks, goggles with no vent holes and long rubber gloves.',
      'Know the size rule: a patch under about 10 square feet you can clean yourself. Bigger, or from sewage, calls for a pro.',
      'After a flood, dry the house within 24 to 48 hours, or plan on mold.',
      'Throw out soaked things you cannot clean and dry, like mattresses, carpet and pillows.',
      'Keep kids, and anyone with asthma or lung trouble, out of moldy rooms.'
    ],
    when: 'This month. Fifteen minutes.',
    why: 'Mold grows fast on wet drywall, carpet and wood. The EPA and the CDC say dry within 24 to 48 hours, protect your lungs, and throw out what cannot be cleaned.',
    done: 'Masks, goggles and gloves set aside, and you know the 10-square-foot rule.',
    links: ['epa-mold-brief', 'cdc-mold-about', 'cdc-disaster-cleanup'] });

  add({ id: 'med-stress', area: 'medical', rank: 2, cost: 0, weight: 2, hz: ['all'],
    title: 'Plan how to handle stress after a disaster, for you and the kids',
    have: 'I know the signs of disaster stress and where to call or text for help',
    who: 'You and the other adults.',
    steps: [
      'Save the Disaster Distress Helpline in every phone: call or text 1-800-985-5990, any time.',
      'After a disaster, keep the routine: same wake time, meals together, enough sleep.',
      'Limit the news, for you and the kids.',
      'Talk with the kids. Answer plainly and tell them what you are doing to keep them safe.',
      'If a child is still anxious, sad or angry two to four weeks later, talk to their doctor or school counselor.'
    ],
    when: 'Today. Five minutes to save the number.',
    why: 'Strong feelings after a disaster are normal, and kids feel them too. SAMHSA runs a toll-free helpline for disaster stress, and the CDC lists what helps kids.',
    done: 'The helpline is saved in every phone, and you know what helps the kids.',
    links: ['samhsa-ddh', 'samhsa-coping', 'cdc-kids-cope'] });


  /* ---------- people, animals, the car and smoke, added 2026-11-26 ---------- */
  add({ id: 'plan-access', area: 'plan', rank: 2, cost: 1, costNote: 'The plan is free; spare batteries and a few small supplies are about $10 to $25', weight: 2, hz: ['all'], needAny: ['seniors', 'access', 'device'],
    title: 'Make a plan for anyone older or living with a disability',
    have: 'A plan for the older or disabled people in the house, with a support network and spares',
    who: 'You, the person the plan is for, and the people in their support network.',
    steps: [
      'Pick a few people who will check in and help. Tell them where the supplies are, and give one a key.',
      'Set aside spares: glasses, hearing aid batteries, a cane or walker, and a charged spare chair battery.',
      'Write a card that tells responders how to talk with the person, plus a list of medicines and devices.',
      'Plan food, water and records for a service animal.',
      'Ask your county emergency management office or your power company if they keep a medical-needs list.',
      'Plan the fastest way out: two ways out of each room, help to leave the building, and a ride out of town.'
    ],
    when: 'This month. One evening, with the person.',
    why: 'Helpers and medical care may not reach you quickly in a disaster. Ready.gov and the CDC say to build a support network and a plan around each person\'s own needs.',
    done: 'The support network knows the plan, the spares are packed, and the way out is worked out.',
    links: ['ready-disab', 'ready-older', 'cdc-disab-plan'] });

  add({ id: 'plan-livestock', area: 'plan', rank: 3, cost: 0, weight: 2, hz: ['evacuate', 'wildfire', 'flood', 'hurricane', 'tornado', 'winter'], need: ['livestock'],
    title: 'Make a disaster plan for your livestock and horses',
    have: 'A plan for the livestock: ID, trailers, a place to go and feed for days',
    who: 'You and everyone who works with the animals, plus a neighbor.',
    steps: [
      'Give every animal ID, take photos from all sides, and put the papers in a waterproof bag.',
      'Line up trailers and drivers, and practice loading until the animals load calm.',
      'Arrange a place to take them outside your area, and map two routes there.',
      'Keep at least a week of feed and water on hand. Do not count on automatic waterers.',
      'Decide ahead, for each disaster, whether the animals go to the barn or stay out in a field if you cannot move them.',
      'Post the plan in the barn and the trailer.'
    ],
    when: 'This season. One afternoon, then a loading practice.',
    why: 'Large animals take time and trailers to move. Ready.gov and state agriculture offices say give them ID, practice loading, and leave early.',
    done: 'Every animal has ID, they load calm, and you have a place to go with two routes.',
    links: ['ready-pets', 'cdfa-horse-evac', 'msstate-livestock'] });

  add({ id: 'plan-shelter', area: 'plan', rank: 2, cost: 0, weight: 2, hz: ['evacuate', 'hurricane', 'flood', 'wildfire', 'fire', 'chemical'],
    title: 'Know where you will go if you cannot stay home',
    have: 'I know where we will stay if we must leave, and how to find an open shelter',
    who: 'You and the other adults.',
    steps: [
      'Ask a friend or family member in another town if you can stay with them, and pick a second place in a different direction.',
      'List a few hotels or motels on your route, and which ones take pets.',
      'Learn how to find an open public shelter: the FEMA app, or text SHELTER and your ZIP code to 43362.',
      'Plan to take your emergency kit, bedding and medicines with you, even to a shelter.',
      'Know that shelters do not allow alcohol or weapons, and most take only service animals.'
    ],
    when: 'This week. Twenty minutes and one call.',
    why: 'Ready.gov says to know your evacuation destination ahead of time, with options in different directions. Shelter spaces change, so you also need a way to find one that is open.',
    done: 'Two places to stay in two directions, and everyone knows how to find an open shelter.',
    links: ['ready-shelter', 'ready-evacuation', 'fema-app'] });

  add({ id: 'plan-car', area: 'plan', rank: 3, cost: 2, costNote: 'Jumper cables, a blanket, a scraper, a first aid kit and the rest, about $25 to $100 for what you do not already have', weight: 2, hz: ['winter', 'storm', 'hurricane', 'flood', 'evacuate'], need: ['vehicle'],
    title: 'Pack a car emergency kit and check the car before the season',
    have: 'The car has an emergency kit, and I check it before storm and winter season',
    who: 'You, and whoever drives the car most.',
    steps: [
      'Pack a kit in the car: jumper cables, flashlight, flares or a reflective triangle, blanket, water, snacks, a first aid kit and a phone charger.',
      'Before winter, add a scraper, a small shovel, sand or cat litter, warm clothes and a paper map.',
      'Check the tire pressure against the label on the driver\'s door frame, and check the tread and the spare.',
      'Check the oil, coolant and washer fluid, test the wipers and lights, and have a mechanic test the battery.',
      'Keep the tank close to full. If the car is electric, keep it charged.'
    ],
    when: 'This month, and again before each storm or winter season. One hour.',
    why: 'Ready.gov, NHTSA and the National Weather Service all say to keep a kit in the car and check it before bad weather. A full tank and a working battery are what get you out when you have to leave.',
    done: 'The kit is in the car, and the tires, fluids, wipers and battery have been checked this season.',
    links: ['ready-car', 'nhtsa-winter', 'nws-winter-before'] });

  add({ id: 'hz-smoke', area: 'home', rank: 2, cost: 2, costNote: 'A box fan, a MERV 13 furnace filter and a box of N95 masks, about $25 to $100. A portable HEPA air cleaner costs more.', weight: 2, hz: ['wildfire'], need: ['hz:wildfire'],
    title: 'Set up a clean-air room for wildfire smoke',
    have: 'I have a room picked for smoke, a way to filter its air, and N95 masks',
    who: 'You and the family.',
    steps: [
      'Learn to check the Air Quality Index on AirNow.gov or its app.',
      'Pick one room big enough for everyone, with a door that closes. A bedroom with its own bathroom works well.',
      'Get a portable HEPA air cleaner sized for the room, or a box fan and a MERV 13 filter for a do-it-yourself one. Buy before fire season.',
      'Keep a few NIOSH N95 masks with two head straps for each adult.',
      'When smoke comes, close the room up and do not fry food, burn candles or vacuum inside.'
    ],
    when: 'Before fire season. One hour.',
    why: 'The EPA says smoke gets into homes, and a closed room with a filter keeps the air cleaner. Filters and masks can sell out once the smoke arrives.',
    done: 'The room is picked, the air cleaner or box-fan filter is ready, and the masks are stored.',
    links: ['epa-cleanroom', 'airnow-aqi', 'epa-smoke-masks'] });


  /* ---------- health, work, kids and the farm, added 2026-11-26 ---------- */
  add({ id: 'plan-pandemic', area: 'plan', rank: 4, cost: 0, weight: 2, hz: ['sickness', 'bio'],
    title: 'Plan for a long outbreak with the family at home',
    have: 'A plan to stay home for weeks in an outbreak, with care for the sick and a backup for school and work',
    who: 'You and the other adults.',
    steps: [
      'Build food, water, medicine and cleaning supplies up to two weeks, a little at a time.',
      'Plan how you will care for a sick person at home: who does it, how they keep close contact short, and how you clean.',
      'Ask the school and your work what happens if they close: online classes, working from home and sick leave.',
      'Set up more than one way to stay in touch with family and friends: calls, texts and video.',
      'Check what your health insurance covers, including visits by phone or video.',
      'Know where official word comes from: the CDC and your state and county health departments.'
    ],
    when: 'This month. One evening, then a little each shopping trip.',
    why: 'Ready.gov says to prepare for schools and workplaces to close and to gather supplies to stay home for several days or weeks. The CDC says how to care for a sick person at home without the whole house getting sick.',
    done: 'Two weeks of supplies, a plan for caring for the sick, and a backup for school and work.',
    links: ['ready-pandemic', 'cdc-flu-caring', 'cdc-clean-home'] });

  add({ id: 'hz-space', area: 'power', rank: 5, cost: 0, weight: 1, hz: ['outage'],
    title: 'Learn what space weather can do and where to check it',
    have: 'I know what a solar storm can do and where NOAA posts the space weather forecast',
    who: 'You.',
    steps: [
      'Bookmark NOAA\'s Space Weather Prediction Center at swpc.noaa.gov. It posts a 3-day forecast, plus watches and warnings.',
      'Learn the G scale for geomagnetic storms: G1 is minor and common, G5 is extreme and rare.',
      'Know that a strong storm can upset GPS, long-range radio and satellites, and in rare cases cause wide power outages.',
      'Keep the gas tank close to full. Gas pumps need power.',
      'Keep your power outage plan up to date: lights, water, food, phone chargers and medicine. It covers space weather too.'
    ],
    when: 'This year. Fifteen minutes.',
    why: 'NOAA says space weather can disrupt power lines, GPS and radio, though power outages from it are rare. Ready.gov says the same outage plan gets you ready.',
    done: 'The forecast page is bookmarked, and your outage plan is in place.',
    links: ['ready-space', 'noaa-swpc', 'noaa-scales'] });

  add({ id: 'plan-locations', area: 'plan', rank: 2, cost: 1, costNote: 'The plan is free; a work kit is mostly what you have, under $25 to fill gaps', weight: 2, hz: ['all'],
    title: 'Make a plan for work, the commute and the places you go',
    have: 'I know the plans at work and school, keep supplies at work, and have other ways home',
    who: 'You and each adult who works or commutes.',
    steps: [
      'Ask your employer for its emergency plan: the alarm, your exit, the meeting point, and when you shelter inside.',
      'Keep a small kit at work: food, water, medicine and walking shoes, enough for at least a day.',
      'Write your normal route home and other routes, plus the bus or train lines, and keep it in your wallet.',
      'Ask the school or daycare what supplies it keeps, and what extra your child needs there overnight.',
      'Agree as a family what each person does if it hits while you are apart.'
    ],
    when: 'This month. One evening, and one question at work.',
    why: 'Ready.gov says you cannot know where you will be when a disaster hits, so plan for each place you go often. At work, be ready to stay at least 24 hours.',
    done: 'You know the plans at work and school, the work kit is packed, and the routes home are in your wallet.',
    links: ['ready-locations', 'ready-commuter', 'osha-eap'] });

  add({ id: 'plan-kids-kit', area: 'plan', rank: 3, cost: 1, costNote: 'Mostly what you have; a few small items, under $25', weight: 1, hz: ['all'], need: ['kids'],
    title: 'Build a kit with each child, with comfort items and a contact card',
    have: 'Each child helped build their part of the kit and carries a contact card',
    who: 'You and each child.',
    steps: [
      'Sit down with each child and go over the kids\' checklist on Ready.gov: what you have and what you still need.',
      'Let each child pick comfort items: a book, a game or puzzle, a stuffed animal or a blanket.',
      'Make a contact card for each backpack: name, birth date, allergies and medical needs, and who to call.',
      'Give each child a job that fits their age, from a scavenger hunt for supplies to checking the list.',
      'Go over the kit with them every year and swap what they have outgrown.'
    ],
    when: 'This month. An hour with the kids.',
    why: 'The CDC says children who help prepare learn the basics of staying safe and feel less stress. Ready.gov puts books, games and a favorite stuffed animal in the kit.',
    done: 'Each child can show you their part of the kit and their card.',
    links: ['ready-kids-kit', 'cdc-kids-before', 'cdc-kids-abc'] });

  add({ id: 'money-farm', area: 'money', rank: 3, cost: 0, weight: 2, hz: ['flood', 'hurricane', 'tornado', 'winter', 'storm', 'drought', 'wildfire'], need: ['livestock'],
    title: 'Keep the records USDA farm disaster programs ask for',
    have: 'I keep dated herd counts and records, and I know my USDA Service Center',
    who: 'You and whoever keeps the farm books.',
    steps: [
      'Take dated photos or video of your animals now, so you can show how many you had before a loss.',
      'Keep purchase, sale, vet, vaccination and tag records in one place, with copies of bank or loan papers.',
      'After a loss, take dated photos, and keep rendering receipts, vet records and feed or water bills.',
      'Find your local USDA Service Center on farmers.gov and save its number.',
      'Report losses to the Farm Service Agency early. Deadlines differ by program.'
    ],
    when: 'This month, then each season. One hour.',
    why: 'The Farm Service Agency asks for proof of how many animals you had before a loss and proof of what was lost. Records kept now are what an application stands on.',
    done: 'Dated herd photos and records are filed, and the Service Center number is saved.',
    links: ['fsa-lip', 'fg-flood', 'fg-servicecenter'] });

})(typeof window !== 'undefined' ? window : globalThis);

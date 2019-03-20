export default {
  // ============= Mats.Minerals
  Copper_Ore: null,
  Cave_Sulfur: null,
  Diamond: null,
  Gas_Pod: null,
  Gold: null,
  Kyanite: null,
  Lead: null,
  Lithium: null,
  Magnetite: null,
  Metal_Salvage: null,
  Nickel_Ore: null,
  Quartz: null,
  Ruby: null,
  Salt_Deposit: null,
  Titanium: null,
  Alien_Feces: null,
  Silver_Ore: null,
  Stalker_Teeth: null,
  Crystalline_Sulfur: null,
  Uraninite_Crystal: null,
  Ion_Cube: null,

  // ============= Mats.Corals
  Coral_Tube_Sample: null,
  Fungal_Sample: null,
  Brain_Coral_Sample: null,
  Table_Coral_Sample: null,

  // ============= Mats.Flora
  Acid_Mushroom: null,
  Deep_Shroom: null,
  Gel_Sack: null,

  // ============= Mats.Seeds_Spores
  Blood_Oil: null,
  Creepvine_Sample: null,
  Creepvine_Seed_Cluster: null,

  // ============= Recipes.Fabricator.Basic_Materials
  Titanium_Ingot: [
    { c: 'Titanium', q: 10 },
  ],
  Fiber_Mesh: [
    { c: 'Creepvine_Sample', q: 2 },
  ],
  Silicone_Rubber: [
    { c: 'Creepvine_Seed_Cluster', q: 0.5 }, // TODO: figure out a way to indicate that 2 Silicone Rubber are produced from 1 component
  ],
  Glass: [
    { c: 'Quartz', q: 2 },
  ],
  Bleach: [
    { c: 'Salt_Deposit', q: 1 },
    { c: 'Coral_Tube_Sample', q: 1 },
  ],
  Enameled_Glass: [
    { c: 'Glass', q: 1 },
    { c: 'Stalker_Tooth', q: 1 },
  ],
  Plasteel_Ingot: [
    { c: 'Titanium_Ingot', q: 1 },
    { c: 'Lithium', q: 2 },
  ],

  // ============= Recipes.Fabricator.Advanced_Materials
  Hydrochloric_Acid: [
    { c: 'Deep_Shroom', q: 3 },
    { c: 'Salt_Deposit', q: 1 },
  ],
  Benzene: [
    { c: 'Blood_Oil', q: 3 },
  ],
  Synthetic_Fibers: [
    { c: 'Benzene', q: 1 },
    { c: 'Fiber_Mesh', q: 1 },
  ],
  Aerogel: [
    { c: 'Gel_Sack', q: 1 },
    { c: 'Ruby', q: 1 },
  ],
  Polyaniline: [
    { c: 'Gold', q: 1 },
    { c: 'Hydrochloric_Acid', q: 1 },
  ],

  // ============= Recipes.Fabricator.Electronics
  Copper_Wire: [
    { c: 'Copper_Ore', q: 2 },
  ],
  Battery: [
    { c: 'Copper_Ore', q: 1 },
    { c: 'Acid_Mushroom', q: 2 },
  ],
  Power_Cell: [
    { c: 'Battery', q: 2 },
    { c: 'Silicone_Rubber', q: 1 },
  ],
  Computer_Chip: [
    { c: 'Table_Coral_Sample', q: 2 },
    { c: 'Gold', q: 1 },
    { c: 'Copper_Wire', q: 1 },
  ],
  Wiring_Kit: [
    { c: 'Silver_Ore', q: 2 },
  ],
  Advanced_Wiring_Kit: [
    { c: 'Wiring_Kit', q: 1 },
    { c: 'Gold', q: 2 },
    { c: 'Computer_Chip', q: 1 },
  ],
  Reactor_Rod: [
    { c: 'Uraninite_Crystal', q: 3 },
    { c: 'Lead', q: 1 },
    { c: 'Titanium', q: 1 },
    { c: 'Glass', q: 1 },
  ],
  Ion_Battery: [
    { c: 'Ion_Cube', q: 1 },
    { c: 'Gold', q: 1 },
    { c: 'Silver_Ore', q: 1 },
  ],
  Ion_Power_Cell: [
    { c: 'Ion_Battery', q: 2 },
    { c: 'Silicone_Rubber', q: 1 },
  ],

  // ============= Recipes.Fabricator.Deployables
  Beacon: [
    { c: 'Copper_Ore', q: 1 },
    { c: 'Titanium', q: 1 },
  ],
  Gravsphere: [
    { c: 'Copper_Ore', q: 1 },
    { c: 'Titanium', q: 1 },
    { c: 'Battery', q: 1 },
  ],

  // ============= Recipes.Habitat_Builder
  Scanner_Room: [
    { c: 'Copper_Ore', q: 2 },
    { c: 'Gold', q: 1 },
    { c: 'Table_Coral_Sample', q: 1 },
    { c: 'Titanium', q: 5 },
  ],
  Solar_Panel: [
    { c: 'Quartz', q: 2 },
    { c: 'Copper_Ore', q: 1 },
    { c: 'Titanium', q: 2 },
  ],
  Radio: [
    { c: 'Copper_Ore', q: 1 },
    { c: 'Titanium', q: 1 },
  ],

  // ============= Recipes.Scanner_Room
  Scanner_Room_Range_Upgrade: [
    { c: 'Copper_Ore', q: 1 },
    { c: 'Magnetite', q: 1 },
  ],
};

export default {
  // ============= Raw_Materials.Minerals
  Copper_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Crystalline_Sulfur: { t: 'Raw_Materials.Minerals', m: null },
  Diamond: { t: 'Raw_Materials.Minerals', m: null },
  Gold: { t: 'Raw_Materials.Minerals', m: null },
  Lead: { t: 'Raw_Materials.Minerals', m: null },
  Lithium: { t: 'Raw_Materials.Minerals', m: null },
  Magnetite: { t: 'Raw_Materials.Minerals', m: null },
  Nickel_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Quartz: { t: 'Raw_Materials.Minerals', m: null },
  Ruby: { t: 'Raw_Materials.Minerals', m: null },
  Salt_Deposit: { t: 'Raw_Materials.Minerals', m: null },
  Silver_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Titanium: { t: 'Raw_Materials.Minerals', m: null },
  Uraninite_Crystal: { t: 'Raw_Materials.Minerals', m: null },
  Ion_Cube: { t: 'Raw_Materials.Minerals', m: null },

  // ============= Raw_Materials.Plants_Corals
  Blood_Oil: { t: 'Raw_Materials.Plants_Corals', m: null },
  Coral_Tube_Sample: { t: 'Raw_Materials.Plants_Corals', m: null },
  Creepvine_Sample: { t: 'Raw_Materials.Plants_Corals', m: null },
  Creepvine_Seed_Cluster: { t: 'Raw_Materials.Plants_Corals', m: null },
  Deep_Shroom: { t: 'Raw_Materials.Plants_Corals', m: null },
  Gel_Sack: { t: 'Raw_Materials.Plants_Corals', m: null },
  Ribbon_Plant: { t: 'Raw_Materials.Plants_Corals', m: null },
  Table_Coral_Sample: { t: 'Raw_Materials.Plants_Corals', m: null },

  // ============= Raw_Materials.Fauna
  Bladderfish: { t: 'Raw_Materials.Fauna', m: null },

  // ============= Recipes.Fabricator.Basic_Materials
  Titanium_Ingot: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Titanium', q: 10 },
    ],
  },
  Fiber_Mesh: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Creepvine_Sample', q: 2 },
    ],
  },
  Silicone_Rubber: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Creepvine_Seed_Cluster', q: 0.5 }, // TODO: figure out a way to indicate that 2 Silicone Rubber are produced from 1 component
    ],
  },
  Glass: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Quartz', q: 2 },
    ],
  },
  Bleach: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Salt_Deposit', q: 1 },
      { c: 'Coral_Tube_Sample', q: 1 },
    ],
  },
  Lubricant: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Creepvine_Seed_Cluster', q: 1 },
    ],
  },
  Enameled_Glass: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Diamond', q: 1 },
      { c: 'Lead', q: 1 },
    ],
  },
  Plasteel_Ingot: {
    t: 'Recipes.Fabricator.Basic_Materials',
    m: [
      { c: 'Titanium_Ingot', q: 1 },
      { c: 'Lithium', q: 2 },
    ],
  },

  // ============= Recipes.Fabricator.Advanced_Materials
  Hydrochloric_Acid: {
    t: 'Recipes.Fabricator.Advanced_Materials',
    m: [
      { c: 'Deep_Shroom', q: 3 },
      { c: 'Salt_Deposit', q: 1 },
    ],
  },
  Benzene: {
    t: 'Recipes.Fabricator.Advanced_Materials',
    m: [
      { c: 'Blood_Oil', q: 3 },
    ],
  },
  Synthetic_Fibers: {
    t: 'Recipes.Fabricator.Advanced_Materials',
    m: [
      { c: 'Benzene', q: 1 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Aerogel: {
    t: 'Recipes.Fabricator.Advanced_Materials',
    m: [
      { c: 'Gel_Sack', q: 1 },
      { c: 'Ruby', q: 1 },
    ],
  },
  Polyaniline: {
    t: 'Recipes.Fabricator.Advanced_Materials',
    m: [
      { c: 'Gold', q: 1 },
      { c: 'Hydrochloric_Acid', q: 1 },
    ],
  },

  // ============= Recipes.Fabricator.Electronics
  Copper_Wire: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Copper_Ore', q: 2 },
    ],
  },
  Battery: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Ribbon_Plant', q: 2 },
    ],
  },
  Power_Cell: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Battery', q: 2 },
      { c: 'Silicone_Rubber', q: 1 },
    ],
  },
  Computer_Chip: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Table_Coral_Sample', q: 2 },
      { c: 'Gold', q: 1 },
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  Wiring_Kit: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Silver_Ore', q: 2 },
    ],
  },
  Advanced_Wiring_Kit: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Gold', q: 2 },
      { c: 'Computer_Chip', q: 1 },
    ],
  },
  Reactor_Rod: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Uraninite_Crystal', q: 3 },
      { c: 'Lead', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Glass', q: 1 },
    ],
  },
  Ion_Battery: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Ion_Cube', q: 1 },
      { c: 'Gold', q: 1 },
      { c: 'Silver_Ore', q: 1 },
    ],
  },
  Ion_Power_Cell: {
    t: 'Recipes.Fabricator.Electronics',
    m: [
      { c: 'Ion_Battery', q: 2 },
      { c: 'Silicone_Rubber', q: 1 },
    ],
  },

  // ============= Recipes.Fabricator.Sustenance
  Filtered_Water: {
    t: 'Recipes.Fabricator.Sustenance',
    m: [
      { c: 'Bladderfish', q: 1 },
    ],
  },
  Disinfected_Water: {
    t: 'Recipes.Fabricator.Sustenance',
    m: [
      { c: 'Bleach', q: 0.5 }, // TODO: figure out a way to indicate that 2 Disinfected Water are produced from 1 component
    ],
  },

  // ============= Recipes.Fabricator.Cooked_Food
  // TODO

  // ============= Recipes.Fabricator.Cured_Food
  // TODO

  // ============= Recipes.Fabricator.Deployables
  Beacon: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Gravsphere: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Battery', q: 1 },
    ],
  },
  // TODO: remaining Deployables

  // ============= Recipes.Fabricator.Personal.Equipment
  'Standard_O₂_Tank': { // TODO: Figure out if non-ASCII subscript works for linking & stuff
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Titanium', q: 2 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  /**
   * TODO: This could get weird, Standard O2 Tank is not calculated as a basic mat, even though it is.
   * It may require a special flag to indicate that it should be treated as a raw material,
   * to prevent adding the components that were already used when constructing the original item.
   */
  'High_Capacity_O₂_Tank': {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Standard_O₂_Tank', q: 1 },
      { c: 'Titanium', q: 4 },
      { c: 'Glass', q: 2 },
      { c: 'Silver_Ore', q: 1 },
    ],
  },
  Fins: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Silicone_Rubber', q: 2 },
    ],
  },
  // TODO: remaining Personal.Equipment

  // ============= Recipes.Habitat_Builder
  Scanner_Room: {
    t: 'Recipes.Habitat_Builder',
    m: [
      { c: 'Copper_Ore', q: 2 },
      { c: 'Gold', q: 1 },
      { c: 'Table_Coral_Sample', q: 1 },
      { c: 'Titanium', q: 5 },
    ],
  },
  Solar_Panel: {
    t: 'Recipes.Habitat_Builder',
    m: [
      { c: 'Quartz', q: 2 },
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Radio: {
    t: 'Recipes.Habitat_Builder',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },

  // ============= Recipes.Scanner_Room
  Scanner_Room_Range_Upgrade: {
    t: 'Recipes.Scanner_Room',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Magnetite', q: 1 },
    ],
  },
};

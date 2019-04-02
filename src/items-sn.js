export default {
  // ============= Raw_Materials.Minerals
  Copper_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Cave_Sulfur: { t: 'Raw_Materials.Minerals', m: null },
  Diamond: { t: 'Raw_Materials.Minerals', m: null },
  Gas_Pod: { t: 'Raw_Materials.Minerals', m: null },
  Gold: { t: 'Raw_Materials.Minerals', m: null },
  Kyanite: { t: 'Raw_Materials.Minerals', m: null },
  Lead: { t: 'Raw_Materials.Minerals', m: null },
  Lithium: { t: 'Raw_Materials.Minerals', m: null },
  Magnetite: { t: 'Raw_Materials.Minerals', m: null },
  Metal_Salvage: { t: 'Raw_Materials.Minerals', m: null },
  Nickel_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Quartz: { t: 'Raw_Materials.Minerals', m: null },
  Ruby: { t: 'Raw_Materials.Minerals', m: null },
  Salt_Deposit: { t: 'Raw_Materials.Minerals', m: null },
  Titanium: { t: 'Raw_Materials.Minerals', m: null },
  Alien_Feces: { t: 'Raw_Materials.Minerals', m: null },
  Silver_Ore: { t: 'Raw_Materials.Minerals', m: null },
  Stalker_Teeth: { t: 'Raw_Materials.Minerals', m: null },
  Crystalline_Sulfur: { t: 'Raw_Materials.Minerals', m: null },
  Uraninite_Crystal: { t: 'Raw_Materials.Minerals', m: null },
  Ion_Cube: { t: 'Raw_Materials.Minerals', m: null },

  // ============= Raw_Materials.Corals
  Coral_Tube_Sample: { t: 'Raw_Materials.Corals', m: null },
  Fungal_Sample: { t: 'Raw_Materials.Corals', m: null },
  Brain_Coral_Sample: { t: 'Raw_Materials.Corals', m: null },
  Table_Coral_Sample: { t: 'Raw_Materials.Corals', m: null },

  // ============= Raw_Materials.Flora
  Acid_Mushroom: { t: 'Raw_Materials.Flora', m: null },
  Deep_Shroom: { t: 'Raw_Materials.Flora', m: null },
  Gel_Sack: { t: 'Raw_Materials.Flora', m: null },

  // ============= Raw_Materials.Fauna
  Bladderfish: { t: 'Raw_Materials.Fauna', m: null },

  // ============= Raw_Materials.Seeds_Spores
  Blood_Oil: { t: 'Raw_Materials.Seeds_Spores', m: null },
  Creepvine_Sample: { t: 'Raw_Materials.Seeds_Spores', m: null },
  Creepvine_Seed_Cluster: { t: 'Raw_Materials.Seeds_Spores', m: null },

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
      { c: 'Stalker_Teeth', q: 1 },
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
      { c: 'Acid_Mushroom', q: 2 },
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
  Seaglide: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Battery', q: 1 },
      { c: 'Lubricant', q: 1 },
      { c: 'Copper_Wire', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Mobile_Vehicle_Bay: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Titanium', q: 10 },
      { c: 'Lubricant', q: 1 },
      { c: 'Power_Cell', q: 1 },
    ],
  },
  Beacon: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Waterproof_Locker: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Titanium', q: 4 },
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
  Creature_Decoy: {
    t: 'Recipes.Fabricator.Deployables',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },

  // ============= Recipes.Fabricator.Personal.Equipment
  'Standard_O₂_Tank': { // TODO: Figure out if non-ASCII subscript works for linking & stuff
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Titanium', q: 3 },
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
  Radiation_Suit: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Fiber_Mesh', q: 2 },
      { c: 'Lead', q: 2 },
    ],
  },
  Reinforced_Dive_Suit: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Synthetic_Fibers', q: 1 },
      { c: 'Diamond', q: 2 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Stillsuit: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Synthetic_Fibers', q: 1 },
      { c: 'Aerogel', q: 1 },
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  First_Aid_Kit: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Fire_Extinguisher: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Titanium', q: 3 },
    ],
  },
  Rebreather: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Compass: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Copper_Wire', q: 1 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Pipe: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Titanium', q: 2 }, // TODO: figure out a way to indicate that 5 Pipe are produced from 1 component
    ],
  },
  Pipe_Surface_Floater: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Purple_Tablet: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Ion_Cube', q: 1 },
      { c: 'Diamond', q: 2 },
    ],
  },
  Blue_Tablet: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Ion_Cube', q: 1 },
      { c: 'Kyanite', q: 2 },
    ],
  },
  Orange_Tablet: {
    t: 'Recipes.Fabricator.Personal.Equipment',
    m: [
      { c: 'Ion_Cube', q: 1 },
      { c: 'Nickel_Ore', q: 2 },
    ],
  },

  // ============= Recipes.Fabricator.Personal.Tools
  Scanner: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Battery', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Repair_Tool: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Silicone_Rubber', q: 1 },
      { c: 'Cave_Sulfur', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Flashlight: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Battery', q: 1 },
      { c: 'Glass', q: 1 },
    ],
  },
  Survival_Knife: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Silicone_Rubber', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Dive_Reel: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Creepvine_Seed_Cluster', q: 2 },
      { c: 'Copper_Wire', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Air_Bladder: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Creepvine_Seed_Cluster', q: 0.5 },
      { c: 'Bladderfish', q: 1 },
    ],
  },
  Flare: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Cave_Sulfur', q: 1 }, // TODO: figure out a way to indicate that 5 Flare are produced from 1 component
    ],
  },
  Habitat_Builder: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Computer_Chip', q: 1 },
      { c: 'Battery', q: 1 },
    ],
  },
  Laser_Cutter: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Diamond', q: 2 },
      { c: 'Battery', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Cave_Sulfur', q: 1 },
    ],
  },
  Stasis_Rifle: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Battery', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Magnetite', q: 2 },
    ],
  },
  Propulsion_Cannon: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Battery', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Light_Stick: {
    t: 'Recipes.Fabricator.Personal.Tools',
    m: [
      { c: 'Battery', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Glass', q: 1 },
    ],
  },

  // ============= Recipes.Habitat_Builder.Base_Pieces
  Foundation: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 2 },
      { c: 'Lead', q: 2 },
    ],
  },
  Corridor: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  L_Corridor: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  T_Corridor: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
    ],
  },
  X_Corridor: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
    ],
  },
  I_Corridor_Glass: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Glass', q: 2 },
    ],
  },
  L_Corridor_Glass: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Glass', q: 2 },
    ],
  },
  Vertical_Connector: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Multipurpose_Room: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium', q: 6 },
    ],
  },
  Scanner_Room: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Copper_Ore', q: 2 },
      { c: 'Gold', q: 1 },
      { c: 'Table_Coral_Sample', q: 1 },
      { c: 'Titanium', q: 5 },
    ],
  },
  Moon_Pool: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Titanium_Ingot', q: 2 },
      { c: 'Lubricant', q: 1 },
      { c: 'Lead', q: 2 },
    ],
  },
  Observatory: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Enameled_Glass', q: 2 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Hatch: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Quartz', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Window: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Quartz', q: 2 },
    ],
  },
  Reinforcement: {
    t: 'Recipes.Habitat_Builder.Base_Pieces',
    m: [
      { c: 'Lithium', q: 1 },
      { c: 'Titanium', q: 3 },
    ],
  },

  // ============= Recipes.Habitat_Builder.Exterior_Modules
  Solar_Panel: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Quartz', q: 2 },
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Thermal_Plant: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Titanium', q: 5 },
      { c: 'Magnetite', q: 2 },
      { c: 'Aerogel', q: 1 },
    ],
  },
  Power_Transmitter: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Gold', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Floodlight: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Spotlight: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Exterior_Growbed: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Base_Pipe_Connector: {
    t: 'Recipes.Habitat_Builder.Exterior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },

  // ============= Recipes.Habitat_Builder.Interior_Pieces
  Ladder: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Water_Filtration_Machine: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Copper_Wire', q: 1 },
      { c: 'Aerogel', q: 1 },
    ],
  },
  Bulkhead: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Silicone_Rubber', q: 1 },
    ],
  },
  Vehicle_Upgrade_Console: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Computer_Chip', q: 1 },
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  Bioreactor: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Lubricant', q: 1 },
    ],
  },
  Nuclear_Reactor: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Lead', q: 3 },
    ],
  },
  Alien_Containment: {
    t: 'Recipes.Habitat_Builder.Interior_Pieces',
    m: [
      { c: 'Glass', q: 5 },
      { c: 'Titanium', q: 2 },
    ],
  },

  // ============= Recipes.Habitat_Builder.Interior_Modules
  Fabricator: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Table_Coral_Sample', q: 1 },
    ],
  },
  Radio: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Medical_Kit_Fabricator: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Fiber_Mesh', q: 1 },
      { c: 'Silver_Ore', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Wall_Locker: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Locker: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Quartz', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Battery_Charger: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Wiring_Kit', q: 1 },
      { c: 'Copper_Wire', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Power_Cell_Charger: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Ruby', q: 2 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Aquarium: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Glass', q: 2 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Modification_Station: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Titanium', q: 1 },
      { c: 'Diamond', q: 1 },
      { c: 'Lead', q: 1 },
    ],
  },
  Basic_Plant_Pot: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Composite_Plant_Pot: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Chic_Plant_Pot: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Indoor_Growbed: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 4 },
    ],
  },
  Plant_Shelf: {
    t: 'Recipes.Habitat_Builder.Interior_Modules',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },

  // ============= Recipes.Habitat_Builder.Miscellaneous
  Bench: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Bed: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Bed_2: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Narrow_Bed: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
      { c: 'Fiber_Mesh', q: 1 },
    ],
  },
  Desk: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Chair: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Chair_2: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Chair_3: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Sign: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  Picture_Frame: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  Bar_Table: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Trash_Can: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Nuclear_Waste_Disposal: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Vending_Machine: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 2 },
    ],
  },
  Coffee_Vending_Machine: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Lab_Counter: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Wall_Planter: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Single_Wall_Shelf: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 1 },
    ],
  },
  Wall_Shelves: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Titanium', q: 2 },
    ],
  },
  Markiplier_Doll: {
    t: 'Recipes.Habitat_Builder.Miscellaneous',
    m: [
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },

  // ============= Recipes.Scanner_Room
  Scanner_Room_HUD_Chip: {
    t: 'Recipes.Scanner_Room',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Magnetite', q: 1 },
    ],
  },
  Camera_Drone: {
    t: 'Recipes.Scanner_Room',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Battery', q: 1 },
      { c: 'Glass', q: 1 },
      { c: 'Titanium', q: 1 },
    ],
  },
  Scanner_Room_Range_Upgrade: {
    t: 'Recipes.Scanner_Room',
    m: [
      { c: 'Copper_Ore', q: 1 },
      { c: 'Magnetite', q: 1 },
    ],
  },
  Scanner_Room_Speed_Upgrade: {
    t: 'Recipes.Scanner_Room',
    m: [
      { c: 'Silver_Ore', q: 1 },
      { c: 'Gold', q: 1 },
    ],
  },

  // ============= Recipes.Mobile_Vehicle_Bay
  Seamoth: {
    t: 'Recipes.Mobile_Vehicle_Bay',
    m: [
      { c: 'Titanium_Ingot', q: 1 },
      { c: 'Power_Cell', q: 1 },
      { c: 'Glass', q: 2 },
      { c: 'Lubricant', q: 1 },
      { c: 'Lead', q: 1 },
    ],
  },
  Cyclops: {
    t: 'Recipes.Mobile_Vehicle_Bay',
    m: [
      { c: 'Plasteel_Ingot', q: 3 },
      { c: 'Enameled_Glass', q: 3 },
      { c: 'Lubricant', q: 1 },
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Lead', q: 3 },
    ],
  },
  Prawn_Suit: {
    t: 'Recipes.Mobile_Vehicle_Bay',
    m: [
      { c: 'Plasteel_Ingot', q: 2 },
      { c: 'Aerogel', q: 2 },
      { c: 'Enameled_Glass', q: 1 },
      { c: 'Diamond', q: 2 },
      { c: 'Lead', q: 2 },
    ],
  },
  Neptune_Launch_Platform: {
    t: 'Recipes.Mobile_Vehicle_Bay',
    m: [
      { c: 'Lead', q: 4 },
      { c: 'Titanium_Ingot', q: 2 },
      { c: 'Computer_Chip', q: 1 },
    ],
  },


  // ============= Recipes.Modification_Station
  Thermoblade: {
    t: 'Recipes.Modification_Station.Survival_Knife',
    m: [
      { c: 'Survival_Knife', q: 1 },
      { c: 'Battery', q: 1 },
    ],
  },
  Lightweight_High_Capacity_Tank: {
    t: 'Recipes.Modification_Station.High_Capacity_O₂_Tank',
    m: [
      { c: 'High_Capacity_O₂_Tank', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
    ],
  },
  Ultra_High_Capacity_Tank: {
    t: 'Recipes.Modification_Station.High_Capacity_O₂_Tank',
    m: [
      { c: 'High_Capacity_O₂_Tank', q: 1 },
      { c: 'Lithium', q: 4 },
    ],
  },
  Ultra_Glide_Fins: {
    t: 'Recipes.Modification_Station.Fins',
    m: [
      { c: 'Fins', q: 1 },
      { c: 'Silicone_Rubber', q: 2 },
      { c: 'Titanium', q: 1 },
      { c: 'Lithium', q: 1 },
    ],
  },
  Swim_Charge_Fins: {
    t: 'Recipes.Modification_Station.Fins',
    m: [
      { c: 'Fins', q: 1 },
      { c: 'Polyaniline', q: 1 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Repulsion_Cannon: {
    t: 'Recipes.Modification_Station.Propulsion_Cannon',
    m: [
      { c: 'Propulsion_Cannon', q: 1 },
      { c: 'Computer_Chip', q: 1 },
      { c: 'Magnetite', q: 2 },
    ],
  },
  Cyclops_Depth_Module_MK2: {
    t: 'Recipes.Modification_Station.Cyclops_Upgrades',
    m: [
      { c: 'Cyclops_Depth_Module_MK1', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Nickel_Ore', q: 3 },
    ],
  },
  Cyclops_Depth_Module_MK3: {
    t: 'Recipes.Modification_Station.Cyclops_Upgrades',
    m: [
      { c: 'Cyclops_Depth_Module_MK2', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Kyanite', q: 3 },
    ],
  },
  Prawn_Suit_Depth_Module_MK2: {
    t: 'Recipes.Modification_Station.Prawn_Suit_Upgrades',
    m: [
      { c: 'Prawn_Suit_Depth_Module_MK1', q: 1 },
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 2 },
      { c: 'Kyanite', q: 3 },
    ],
  },
  Seamoth_Depth_Module_MK2: {
    t: 'Recipes.Modification_Station.Seamoth_Upgrades',
    m: [
      { c: 'Seamoth_Depth_Module_MK1', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Magnetite', q: 2 },
      { c: 'Enameled_Glass', q: 1 },
    ],
  },
  Seamoth_Depth_Module_MK3: {
    t: 'Recipes.Modification_Station.Seamoth_Upgrades',
    m: [
      { c: 'Seamoth_Depth_Module_MK2', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Ruby', q: 3 },
    ],
  },

  // ============= Recipes.Vehicle_Upgrade_Console
  Hull_Reinforcement: {
    t: 'Recipes.Vehicle_Upgrade_Console.Common_Modules',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Lithium', q: 1 },
      { c: 'Diamond', q: 4 },
    ],
  },
  Energy_Efficiency_Module: {
    t: 'Recipes.Vehicle_Upgrade_Console.Common_Modules',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Polyaniline', q: 1 },
    ],
  },
  Storage_Module: {
    t: 'Recipes.Vehicle_Upgrade_Console.Common_Modules',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Lithium', q: 1 },
    ],
  },
  Seamoth_Depth_Module_MK1: {
    t: 'Recipes.Vehicle_Upgrade_Console.Seamoth_Modules',
    m: [
      { c: 'Titanium_Ingot', q: 1 },
      { c: 'Glass', q: 2 },
    ],
  },
  Seamoth_Solar_Charger: {
    t: 'Recipes.Vehicle_Upgrade_Console.Seamoth_Modules',
    m: [
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Enameled_Glass', q: 1 },
    ],
  },
  Seamoth_Perimeter_Defense_System: {
    t: 'Recipes.Vehicle_Upgrade_Console.Seamoth_Modules',
    m: [
      { c: 'Polyaniline', q: 1 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Seamoth_Torpedo_System: {
    t: 'Recipes.Vehicle_Upgrade_Console.Seamoth_Modules',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Lithium', q: 1 },
      { c: 'Aerogel', q: 1 },
    ],
  },
  Seamoth_Sonar: {
    t: 'Recipes.Vehicle_Upgrade_Console.Seamoth_Modules',
    m: [
      { c: 'Copper_Wire', q: 1 },
      { c: 'Magnetite', q: 2 },
    ],
  },
  Prawn_Suit_Depth_Module_MK1: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Nickel_Ore', q: 3 },
      { c: 'Ruby', q: 2 },
    ],
  },
  Prawn_Suit_Thermal_Reactor: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Kyanite', q: 2 },
      { c: 'Polyaniline', q: 2 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Prawn_Suit_Jump_Jet_Upgrade: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Nickel_Ore', q: 2 },
      { c: 'Crystalline_Sulfur', q: 3 },
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 1 },
    ],
  },
  Prawn_Suit_Propulsion_Cannon: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 1 },
      { c: 'Magnetite', q: 1 },
    ],
  },
  Prawn_Suit_Grappling_Arm: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 1 },
      { c: 'Benzene', q: 1 },
    ],
  },
  Prawn_Suit_Drill_Arm: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 1 },
      { c: 'Diamond', q: 4 },
    ],
  },
  Prawn_Suit_Torpedo_Arm: {
    t: 'Recipes.Vehicle_Upgrade_Console.Prawn_Suit_Modules',
    m: [
      { c: 'Titanium', q: 5 },
      { c: 'Lithium', q: 1 },
      { c: 'Aerogel', q: 1 },
    ],
  },
  Seamoth_Vortex_Torpedo: {
    t: 'Recipes.Vehicle_Upgrade_Console.Torpedoes',
    m: [
      { c: 'Titanium', q: 0.5 }, // TODO: figure out a way to indicate that 5 Flare are produced from 1 component
      { c: 'Magnetite', q: 0.5 },
    ],
  },
  Seamoth_Gas_Torpedo: {
    t: 'Recipes.Vehicle_Upgrade_Console.Torpedoes',
    m: [
      { c: 'Titanium', q: 0.5 }, // TODO: figure out a way to indicate that 5 Flare are produced from 1 component
      { c: 'Gas_Pod', q: 0.5 },
    ],
  },

  // ============= Recipes.Cyclops_Upgrade_Fabricator
  Cyclops_Depth_Module_MK1: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Ruby', q: 3 },
    ],
  },
  Cyclops_Engine_Efficiency_Module: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Benzene', q: 1 },
      { c: 'Polyaniline', q: 1 },
    ],
  },
  Cyclops_Thermal_Reactor_Module: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Polyaniline', q: 2 },
      { c: 'Kyanite', q: 4 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Cyclops_Sonar_Module: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Computer_Chip', q: 1 },
      { c: 'Magnetite', q: 3 },
    ],
  },
  Cyclops_Fire_Suppression_System: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Aerogel', q: 2 },
      { c: 'Crystalline_Sulfur', q: 2 },
    ],
  },
  Cyclops_Docking_Bay_Repair_Module: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Repair_Tool', q: 1 },
      { c: 'Copper_Wire', q: 1 },
    ],
  },
  Cyclops_Decoy_Tube_Upgrade: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Titanium', q: 3 },
      { c: 'Lithium', q: 2 },
      { c: 'Aerogel', q: 1 },
    ],
  },
  Cyclops_Shield_Generator: {
    t: 'Recipes.Cyclops_Upgrade_Fabricator',
    m: [
      { c: 'Advanced_Wiring_Kit', q: 1 },
      { c: 'Polyaniline', q: 1 },
      { c: 'Power_Cell', q: 1 },
    ],
  },

  // ============= Recipes.Neptune_Launch_Platform
  Neptune_Gantry: {
    t: 'Recipes.Neptune_Launch_Platform',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Copper_Wire', q: 1 },
      { c: 'Lubricant', q: 1 },
    ],
  },
  Neptune_Boosters: {
    t: 'Recipes.Neptune_Launch_Platform',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Nickel_Ore', q: 3 },
      { c: 'Aerogel', q: 2 },
      { c: 'Wiring_Kit', q: 1 },
    ],
  },
  Neptune_Fuel_Reserve: {
    t: 'Recipes.Neptune_Launch_Platform',
    m: [
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Crystalline_Sulfur', q: 4 },
      { c: 'Kyanite', q: 4 },
      { c: 'Ion_Power_Cell', q: 2 },
    ],
  },
  Neptune_Cockpit: {
    t: 'Recipes.Neptune_Launch_Platform',
    m: [
      { c: 'Cyclops_Shield_Generator', q: 1 },
      { c: 'Plasteel_Ingot', q: 1 },
      { c: 'Enameled_Glass', q: 1 },
      { c: 'Computer_Chip', q: 1 },
    ],
  },

};

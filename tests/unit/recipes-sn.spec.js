import itemsSn from '@/items-sn';
import Algo from '@/algo';

const algo = new Algo(itemsSn);

describe('Test recipes', () => {
  /* Raw_Materials.Minerals */
  test('it returns the correct Raw_Materials.Minerals', () => {
    expect(algo.listOfMaterials('Copper_Ore')).toEqual([{ c: 'Copper_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Cave_Sulfur')).toEqual([{ c: 'Cave_Sulfur', q: 1 }]);
    expect(algo.listOfMaterials('Diamond')).toEqual([{ c: 'Diamond', q: 1 }]);
    expect(algo.listOfMaterials('Gas_Pod')).toEqual([{ c: 'Gas_Pod', q: 1 }]);
    expect(algo.listOfMaterials('Gold')).toEqual([{ c: 'Gold', q: 1 }]);
    expect(algo.listOfMaterials('Kyanite')).toEqual([{ c: 'Kyanite', q: 1 }]);
    expect(algo.listOfMaterials('Lead')).toEqual([{ c: 'Lead', q: 1 }]);
    expect(algo.listOfMaterials('Lithium')).toEqual([{ c: 'Lithium', q: 1 }]);
    expect(algo.listOfMaterials('Magnetite')).toEqual([{ c: 'Magnetite', q: 1 }]);
    expect(algo.listOfMaterials('Metal_Salvage')).toEqual([{ c: 'Metal_Salvage', q: 1 }]);
    expect(algo.listOfMaterials('Nickel_Ore')).toEqual([{ c: 'Nickel_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Quartz')).toEqual([{ c: 'Quartz', q: 1 }]);
    expect(algo.listOfMaterials('Ruby')).toEqual([{ c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Salt_Deposit')).toEqual([{ c: 'Salt_Deposit', q: 1 }]);
    expect(algo.listOfMaterials('Titanium')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Alien_Feces')).toEqual([{ c: 'Alien_Feces', q: 1 }]);
    expect(algo.listOfMaterials('Silver_Ore')).toEqual([{ c: 'Silver_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Stalker_Teeth')).toEqual([{ c: 'Stalker_Teeth', q: 1 }]);
    expect(algo.listOfMaterials('Crystalline_Sulfur')).toEqual([{ c: 'Crystalline_Sulfur', q: 1 }]);
    expect(algo.listOfMaterials('Uraninite_Crystal')).toEqual([{ c: 'Uraninite_Crystal', q: 1 }]);
    expect(algo.listOfMaterials('Ion_Cube')).toEqual([{ c: 'Ion_Cube', q: 1 }]);
  });

  /* Raw_Materials.Corals */
  test('it returns the correct Raw_Materials.Corals', () => {
    expect(algo.listOfMaterials('Coral_Tube_Sample')).toEqual([{ c: 'Coral_Tube_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Fungal_Sample')).toEqual([{ c: 'Fungal_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Brain_Coral_Sample')).toEqual([{ c: 'Brain_Coral_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Table_Coral_Sample')).toEqual([{ c: 'Table_Coral_Sample', q: 1 }]);
  });

  /* Raw_Materials.Flora */
  test('it returns the correct Raw_Materials.Flora', () => {
    expect(algo.listOfMaterials('Acid_Mushroom')).toEqual([{ c: 'Acid_Mushroom', q: 1 }]);
    expect(algo.listOfMaterials('Deep_Shroom')).toEqual([{ c: 'Deep_Shroom', q: 1 }]);
    expect(algo.listOfMaterials('Gel_Sack')).toEqual([{ c: 'Gel_Sack', q: 1 }]);
  });

  /* Raw_Materials.Fauna */
  test('it returns the correct Raw_Materials.Fauna', () => {
    expect(algo.listOfMaterials('Bladderfish')).toEqual([{ c: 'Bladderfish', q: 1 }]);
  });

  /* Raw_Materials.Seeds_Spores */
  test('it returns the correct Raw_Materials.Seeds_Spores', () => {
    expect(algo.listOfMaterials('Blood_Oil')).toEqual([{ c: 'Blood_Oil', q: 1 }]);
    expect(algo.listOfMaterials('Creepvine_Sample')).toEqual([{ c: 'Creepvine_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Creepvine_Seed_Cluster')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
  });

  /* Recipes.Fabricator.Basic_Materials */
  test('it returns the correct list of base materials for Recipes.Fabricator.Basic_Materials', () => {
    expect(algo.listOfMaterials('Titanium_Ingot')).toEqual([{ c: 'Titanium', q: 10 }]);
    expect(algo.listOfMaterials('Fiber_Mesh')).toEqual([{ c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Silicone_Rubber')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }]);
    expect(algo.listOfMaterials('Glass')).toEqual([{ c: 'Quartz', q: 2 }]);
    expect(algo.listOfMaterials('Bleach')).toEqual([{ c: 'Salt_Deposit', q: 1 }, { c: 'Coral_Tube_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Lubricant')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
    expect(algo.listOfMaterials('Enameled_Glass')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Stalker_Teeth', q: 1 }]);
    expect(algo.listOfMaterials('Plasteel_Ingot')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }]);
  });

  /* Recipes.Fabricator.Advanced_Materials */
  test('it returns the correct list of base materials for Recipes.Fabricator.Advanced_Materials', () => {
    expect(algo.listOfMaterials('Hydrochloric_Acid')).toEqual([{ c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
    expect(algo.listOfMaterials('Benzene')).toEqual([{ c: 'Blood_Oil', q: 3 }]);
    expect(algo.listOfMaterials('Synthetic_Fibers')).toEqual([{ c: 'Blood_Oil', q: 3 }, { c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Aerogel')).toEqual([{ c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Polyaniline')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
  });

  /* Recipes.Fabricator.Electronics */
  test('it returns the correct list of base materials for Recipes.Fabricator.Electronics', () => {
    expect(algo.listOfMaterials('Copper_Wire')).toEqual([{ c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Battery')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);
    expect(algo.listOfMaterials('Advanced_Wiring_Kit')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Reactor_Rod')).toEqual([{ c: 'Uraninite_Crystal', q: 3 }, { c: 'Lead', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Quartz', q: 2 }]);
    expect(algo.listOfMaterials('Ion_Battery')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Ion_Power_Cell')).toEqual([{ c: 'Ion_Cube', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 0.5 }]);
  });

  /* Recipes.Fabricator.Deployables */
  test('it returns the correct list of base materials for Recipes.Fabricator.Deployables', () => {
    expect(algo.listOfMaterials('Seaglide')).toEqual([{ c: 'Copper_Ore', q: 3 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Mobile_Vehicle_Bay')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Creepvine_Seed_Cluster', q: 1.5 }, { c: 'Copper_Ore', q: 2 }, { c: 'Acid_Mushroom', q: 4 }]);
    expect(algo.listOfMaterials('Beacon')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Waterproof_Locker')).toEqual([{ c: 'Titanium', q: 4 }]);
    expect(algo.listOfMaterials('Gravsphere')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);
    expect(algo.listOfMaterials('Creature_Decoy')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Silver_Ore', q: 2 }]);
  });

  /* Recipes.Fabricator.Personal.Equipment */
  test('it returns the correct list of base materials for Recipes.Fabricator.Personal.Equipment', () => {
    expect(algo.listOfMaterials('Standard_O₂_Tank')).toEqual([{ c: 'Titanium', q: 3 }]);
    expect(algo.listOfMaterials('High_Capacity_O₂_Tank')).toEqual([{ c: 'Titanium', q: 7 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
    expect(algo.listOfMaterials('Radiation_Suit')).toEqual([{ c: 'Creepvine_Sample', q: 4 }, { c: 'Lead', q: 2 }]);
    expect(algo.listOfMaterials('Reinforced_Dive_Suit')).toEqual([{ c: 'Blood_Oil', q: 3 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Diamond', q: 2 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Stillsuit')).toEqual([{ c: 'Blood_Oil', q: 3 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('First_Aid_Kit')).toEqual([{ c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Fire_Extinguisher')).toEqual([{ c: 'Titanium', q: 3 }]);
    expect(algo.listOfMaterials('Rebreather')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Compass')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Pipe')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Pipe_Surface_Floater')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Purple_Tablet')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Diamond', q: 2 }]);
    expect(algo.listOfMaterials('Blue_Tablet')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Kyanite', q: 2 }]);
    expect(algo.listOfMaterials('Orange_Tablet')).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Nickel_Ore', q: 2 }]);
  });

  /* Recipes.Fabricator.Personal.Tools */
  test('it returns the correct list of base materials for Recipes.Fabricator.Personal.Toold', () => {
    expect(algo.listOfMaterials('Scanner')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Repair_Tool')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Cave_Sulfur', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Flashlight')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Quartz', q: 2 }]);
    expect(algo.listOfMaterials('Survival_Knife')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Dive_Reel')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Air_Bladder')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Bladderfish', q: 1 }]);
    expect(algo.listOfMaterials('Flare')).toEqual([{ c: 'Cave_Sulfur', q: 1 }]);
    expect(algo.listOfMaterials('Habitat_Builder')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 3 }, { c: 'Acid_Mushroom', q: 2 }]);
    expect(algo.listOfMaterials('Laser_Cutter')).toEqual([{ c: 'Diamond', q: 2 }, { c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Cave_Sulfur', q: 1 }]);
    expect(algo.listOfMaterials('Stasis_Rifle')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 3 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Magnetite', q: 2 }]);
    expect(algo.listOfMaterials('Propulsion_Cannon')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Light_Stick')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Quartz', q: 2 }]);
  });

  /* Recipes.Fabricator.Sustenance */
  test('it returns the correct list of base materials for Recipes.Fabricator.Sustenance', () => {
    expect(algo.listOfMaterials('Filtered_Water')).toEqual([{ c: 'Bladderfish', q: 1 }]);
    expect(algo.listOfMaterials('Disinfected_Water')).toEqual([{ c: 'Salt_Deposit', q: 0.5 }, { c: 'Coral_Tube_Sample', q: 0.5 }]);
  });

  /* Recipes.Habitat_Builder.Base_Pieces */
  test('it returns the correct list of base materials for Recipes.Habitat_Builder.Base_Pieces', () => {
    expect(algo.listOfMaterials('Foundation')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Lead', q: 2 }]);
    expect(algo.listOfMaterials('Corridor')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('L_Corridor')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('T_Corridor')).toEqual([{ c: 'Titanium', q: 3 }]);
    expect(algo.listOfMaterials('X_Corridor')).toEqual([{ c: 'Titanium', q: 3 }]);
    expect(algo.listOfMaterials('I_Corridor_Glass')).toEqual([{ c: 'Quartz', q: 4 }]);
    expect(algo.listOfMaterials('L_Corridor_Glass')).toEqual([{ c: 'Quartz', q: 4 }]);
    expect(algo.listOfMaterials('Vertical_Connector')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Multipurpose_Room')).toEqual([{ c: 'Titanium', q: 6 }]);
    expect(algo.listOfMaterials('Scanner_Room')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Table_Coral_Sample', q: 1 }, { c: 'Titanium', q: 5 }]);
    expect(algo.listOfMaterials('Moon_Pool')).toEqual([{ c: 'Titanium', q: 20 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Lead', q: 2 }]);
    expect(algo.listOfMaterials('Observatory')).toEqual([{ c: 'Quartz', q: 4 }, { c: 'Stalker_Teeth', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Hatch')).toEqual([{ c: 'Quartz', q: 1 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Window')).toEqual([{ c: 'Quartz', q: 2 }]);
    expect(algo.listOfMaterials('Reinforcement')).toEqual([{ c: 'Lithium', q: 1 }, { c: 'Titanium', q: 3 }]);
  });

  /* Recipes.Habitat_Builder.Exterior_Modules */
  test('it returns the correct list of base materials for Recipes.Habitat_Builder.Exterior_Modules', () => {
    expect(algo.listOfMaterials('Solar_Panel')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Copper_Ore', q: 1 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Thermal_Plant')).toEqual([{ c: 'Titanium', q: 5 }, { c: 'Magnetite', q: 2 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Power_Transmitter')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Floodlight')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Spotlight')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Exterior_Growbed')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Base_Pipe_Connector')).toEqual([{ c: 'Titanium', q: 2 }]);
  });

  /* Recipes.Habitat_Builder.Interior_Pieces */
  test('it returns the correct list of base materials for Recipes.Habitat_Builder.Interior_Pieces', () => {
    expect(algo.listOfMaterials('Ladder')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Water_Filtration_Machine')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Copper_Ore', q: 2 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Bulkhead')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Creepvine_Seed_Cluster', q: 0.5 }]);
    expect(algo.listOfMaterials('Vehicle_Upgrade_Console')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 4 }]);
    expect(algo.listOfMaterials('Bioreactor')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }]);
    expect(algo.listOfMaterials('Nuclear_Reactor')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Lead', q: 3 }]);
    expect(algo.listOfMaterials('Alien_Containment')).toEqual([{ c: 'Quartz', q: 10 }, { c: 'Titanium', q: 2 }]);
  });

  /* Recipes.Habitat_Builder.Interior_Modules */
  test('it returns the correct list of base materials for Recipes.Habitat_Builder.Interior_Modules', () => {
    expect(algo.listOfMaterials('Fabricator')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Table_Coral_Sample', q: 1 }]);
    expect(algo.listOfMaterials('Radio')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Medical_Kit_Fabricator')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }, { c: 'Creepvine_Sample', q: 2 }, { c: 'Silver_Ore', q: 1 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Wall_Locker')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Locker')).toEqual([{ c: 'Quartz', q: 1 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Battery_Charger')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Power_Cell_Charger')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Ruby', q: 2 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Aquarium')).toEqual([{ c: 'Quartz', q: 4 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Modification_Station')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Diamond', q: 1 }, { c: 'Lead', q: 1 }]);
    expect(algo.listOfMaterials('Basic_Plant_Pot')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Composite_Plant_Pot')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Chic_Plant_Pot')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Indoor_Growbed')).toEqual([{ c: 'Titanium', q: 4 }]);
    expect(algo.listOfMaterials('Plant_Shelf')).toEqual([{ c: 'Titanium', q: 1 }]);
  });

  /* Recipes.Habitat_Builder.Miscellaneous */
  test('it returns the correct list of base materials for Recipes.Habitat_Builder.Miscellaneous', () => {
    expect(algo.listOfMaterials('Bench')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Bed')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Bed_2')).toEqual([{ c: 'Titanium', q: 2 }, { c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Narrow_Bed')).toEqual([{ c: 'Titanium', q: 1 }, { c: 'Creepvine_Sample', q: 2 }]);
    expect(algo.listOfMaterials('Desk')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Chair')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Chair_2')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Chair_3')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Sign')).toEqual([{ c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Picture_Frame')).toEqual([{ c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Bar_Table')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Trash_Can')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Nuclear_Waste_Disposal')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Vending_Machine')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Coffee_Vending_Machine')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Lab_Counter')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Wall_Planter')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Single_Wall_Shelf')).toEqual([{ c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Wall_Shelves')).toEqual([{ c: 'Titanium', q: 2 }]);
    expect(algo.listOfMaterials('Markiplier_Doll')).toEqual([{ c: 'Quartz', q: 2 }, { c: 'Titanium', q: 1 }]);
  });

  /* Recipes.Scanner_Room */
  test('it returns the correct list of base materials for Recipes.Scanner_Room', () => {
    expect(algo.listOfMaterials('Scanner_Room_HUD_Chip')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }, { c: 'Magnetite', q: 1 }]);
    expect(algo.listOfMaterials('Camera_Drone')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 3 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Quartz', q: 2 }, { c: 'Titanium', q: 1 }]);
    expect(algo.listOfMaterials('Scanner_Room_Range_Upgrade')).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Magnetite', q: 1 }]);
    expect(algo.listOfMaterials('Scanner_Room_Speed_Upgrade')).toEqual([{ c: 'Silver_Ore', q: 1 }, { c: 'Gold', q: 1 }]);
  });

  /* Recipes.Mobile_Vehicle_Bay */
  test('it returns the correct list of base materials for Recipes.Mobile_Vehicle_Bay', () => {
    expect(algo.listOfMaterials('Seamoth')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Copper_Ore', q: 2 }, { c: 'Acid_Mushroom', q: 4 }, { c: 'Creepvine_Seed_Cluster', q: 1.5 }, { c: 'Quartz', q: 4 }, { c: 'Lead', q: 1 }]);
    expect(algo.listOfMaterials('Cyclops')).toEqual([{ c: 'Titanium', q: 30 }, { c: 'Lithium', q: 6 }, { c: 'Quartz', q: 6 }, { c: 'Stalker_Teeth', q: 3 }, { c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Lead', q: 3 }]);
    expect(algo.listOfMaterials('Prawn_Suit')).toEqual([{ c: 'Titanium', q: 20 }, { c: 'Lithium', q: 4 }, { c: 'Gel_Sack', q: 2 }, { c: 'Ruby', q: 2 }, { c: 'Quartz', q: 2 }, { c: 'Stalker_Teeth', q: 1 }, { c: 'Diamond', q: 2 }, { c: 'Lead', q: 2 }]);
    expect(algo.listOfMaterials('Neptune_Launch_Platform')).toEqual([{ c: 'Lead', q: 4 }, { c: 'Titanium', q: 20 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
  });

  /* Recipes.Modification_Station */
  test('it returns the correct list of base materials for Recipes.Mobile_Vehicle_Bay', () => {
    expect(algo.listOfMaterials('Thermoblade')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Titanium', q: 1 }, { c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);
    expect(algo.listOfMaterials('Lightweight_High_Capacity_Tank')).toEqual([{ c: 'Titanium', q: 17 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }, { c: 'Lithium', q: 2 }]);
    expect(algo.listOfMaterials('Ultra_High_Capacity_Tank')).toEqual([{ c: 'Titanium', q: 7 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }, { c: 'Lithium', q: 4 }]);
    expect(algo.listOfMaterials('Ultra_Glide_Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Lithium', q: 1 }]);
    expect(algo.listOfMaterials('Swim_Charge_Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }, { c: 'Gold', q: 1 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Repulsion_Cannon')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Copper_Ore', q: 3 }, { c: 'Acid_Mushroom', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Magnetite', q: 2 }]);
    expect(algo.listOfMaterials('Cyclops_Depth_Module_MK2')).toEqual([{ c: 'Titanium', q: 20 }, { c: 'Lithium', q: 4 }, { c: 'Ruby', q: 3 }, { c: 'Nickel_Ore', q: 3 }]);
    expect(algo.listOfMaterials('Cyclops_Depth_Module_MK3')).toEqual([{ c: 'Titanium', q: 30 }, { c: 'Lithium', q: 6 }, { c: 'Ruby', q: 3 }, { c: 'Nickel_Ore', q: 3 }, { c: 'Kyanite', q: 3 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Depth_Module_MK2')).toEqual([{ c: 'Titanium', q: 15 }, { c: 'Lithium', q: 4 }, { c: 'Nickel_Ore', q: 3 }, { c: 'Ruby', q: 2 }, { c: 'Kyanite', q: 3 }]);
    expect(algo.listOfMaterials('Seamoth_Depth_Module_MK2')).toEqual([{ c: 'Titanium', q: 20 }, { c: 'Quartz', q: 6 }, { c: 'Lithium', q: 2 }, { c: 'Magnetite', q: 2 }, { c: 'Stalker_Teeth', q: 1 }]);
    expect(algo.listOfMaterials('Seamoth_Depth_Module_MK3')).toEqual([{ c: 'Titanium', q: 30 }, { c: 'Quartz', q: 6 }, { c: 'Lithium', q: 4 }, { c: 'Magnetite', q: 2 }, { c: 'Stalker_Teeth', q: 1 }, { c: 'Ruby', q: 3 }]);
  });

  /* Recipes.Vehicle_Upgrade_Console */
  test('it returns the correct list of base materials for Recipes.Vehicle_Upgrade_Console', () => {
    /* Common_Modules */
    expect(algo.listOfMaterials('Hull_Reinforcement')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Lithium', q: 1 }, { c: 'Diamond', q: 4 }]);
    expect(algo.listOfMaterials('Energy_Efficiency_Module')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
    expect(algo.listOfMaterials('Storage_Module')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Lithium', q: 1 }]);

    /* Seamoth_Modules */
    expect(algo.listOfMaterials('Seamoth_Depth_Module_MK1')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Quartz', q: 4 }]);
    expect(algo.listOfMaterials('Seamoth_Solar_Charger')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Quartz', q: 2 }, { c: 'Stalker_Teeth', q: 1 }]);
    expect(algo.listOfMaterials('Seamoth_Perimeter_Defense_System')).toEqual([{ c: 'Gold', q: 1 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Seamoth_Torpedo_System')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Lithium', q: 1 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Seamoth_Sonar')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Magnetite', q: 2 }]);

    /* Prawn_Suit_Modules */
    expect(algo.listOfMaterials('Prawn_Suit_Depth_Module_MK2')).toEqual([{ c: 'Titanium', q: 15 }, { c: 'Lithium', q: 4 }, { c: 'Nickel_Ore', q: 3 }, { c: 'Ruby', q: 2 }, { c: 'Kyanite', q: 3 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Thermal_Reactor')).toEqual([{ c: 'Kyanite', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Deep_Shroom', q: 6 }, { c: 'Salt_Deposit', q: 2 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Jump_Jet_Upgrade')).toEqual([{ c: 'Nickel_Ore', q: 2 }, { c: 'Crystalline_Sulfur', q: 3 }, { c: 'Titanium', q: 5 }, { c: 'Lithium', q: 1 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Propulsion_Cannon')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 5 }, { c: 'Lithium', q: 1 }, { c: 'Magnetite', q: 1 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Grappling_Arm')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 5 }, { c: 'Lithium', q: 1 }, { c: 'Blood_Oil', q: 3 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Drill_Arm')).toEqual([{ c: 'Titanium', q: 5 }, { c: 'Lithium', q: 1 }, { c: 'Diamond', q: 4 }]);
    expect(algo.listOfMaterials('Prawn_Suit_Torpedo_Arm')).toEqual([{ c: 'Titanium', q: 5 }, { c: 'Lithium', q: 1 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);

    /* Torpedoes */
    expect(algo.listOfMaterials('Seamoth_Vortex_Torpedo')).toEqual([{ c: 'Titanium', q: 0.5 }, { c: 'Magnetite', q: 0.5 }]);
    expect(algo.listOfMaterials('Seamoth_Gas_Torpedo')).toEqual([{ c: 'Titanium', q: 0.5 }, { c: 'Gas_Pod', q: 0.5 }]);
  });

  /* Recipes.Cyclops_Upgrade_Fabricator */
  test('it returns the correct list of base materials for Recipes.Cyclops_Upgrade_Fabricator', () => {
    expect(algo.listOfMaterials('Cyclops_Depth_Module_MK1')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Ruby', q: 3 }]);
    expect(algo.listOfMaterials('Cyclops_Engine_Efficiency_Module')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Blood_Oil', q: 3 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }]);
    expect(algo.listOfMaterials('Cyclops_Thermal_Reactor_Module')).toEqual([{ c: 'Gold', q: 2 }, { c: 'Deep_Shroom', q: 6 }, { c: 'Salt_Deposit', q: 2 }, { c: 'Kyanite', q: 4 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Cyclops_Sonar_Module')).toEqual([{ c: 'Table_Coral_Sample', q: 2 }, { c: 'Gold', q: 1 }, { c: 'Copper_Ore', q: 2 }, { c: 'Magnetite', q: 3 }]);
    expect(algo.listOfMaterials('Cyclops_Fire_Suppression_System')).toEqual([{ c: 'Gel_Sack', q: 2 }, { c: 'Ruby', q: 2 }, { c: 'Crystalline_Sulfur', q: 2 }]);
    expect(algo.listOfMaterials('Cyclops_Docking_Bay_Repair_Module')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Cave_Sulfur', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Copper_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Cyclops_Decoy_Tube_Upgrade')).toEqual([{ c: 'Titanium', q: 3 }, { c: 'Lithium', q: 2 }, { c: 'Gel_Sack', q: 1 }, { c: 'Ruby', q: 1 }]);
    expect(algo.listOfMaterials('Cyclops_Shield_Generator')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 4 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 4 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }, { c: 'Acid_Mushroom', q: 4 }, { c: 'Creepvine_Seed_Cluster', q: 0.5 }]);
  });

  /* Recipes.Neptune_Gantry */
  test('it returns the correct list of base materials for Recipes.Neptune_Gantry', () => {
    expect(algo.listOfMaterials('Neptune_Gantry')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Copper_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 1 }]);
    expect(algo.listOfMaterials('Neptune_Boosters')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Nickel_Ore', q: 3 }, { c: 'Gel_Sack', q: 2 }, { c: 'Ruby', q: 2 }, { c: 'Silver_Ore', q: 2 }]);
    expect(algo.listOfMaterials('Neptune_Fuel_Reserve')).toEqual([{ c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Crystalline_Sulfur', q: 4 }, { c: 'Kyanite', q: 4 }, { c: 'Ion_Cube', q: 4 }, { c: 'Gold', q: 4 }, { c: 'Silver_Ore', q: 4 }, { c: 'Creepvine_Seed_Cluster', q: 1 }]);
    expect(algo.listOfMaterials('Neptune_Cockpit')).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 5 }, { c: 'Table_Coral_Sample', q: 4 }, { c: 'Copper_Ore', q: 6 }, { c: 'Deep_Shroom', q: 3 }, { c: 'Salt_Deposit', q: 1 }, { c: 'Acid_Mushroom', q: 4 }, { c: 'Creepvine_Seed_Cluster', q: 0.5 }, { c: 'Titanium', q: 10 }, { c: 'Lithium', q: 2 }, { c: 'Quartz', q: 2 }, { c: 'Stalker_Teeth', q: 1 }]);
  });

});

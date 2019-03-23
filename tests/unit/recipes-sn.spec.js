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
    expect(algo.listOfMaterials('Gravsphere')).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);
  });

  /* Recipes.Fabricator.Personal.Equipment */
  test('it returns the correct list of base materials for Recipes.Fabricator.Personal.Equipment', () => {
    expect(algo.listOfMaterials('Standard_O₂_Tank')).toEqual([{ c: 'Titanium', q: 3 }]);
    expect(algo.listOfMaterials('High_Capacity_O₂_Tank')).toEqual([{ c: 'Titanium', q: 7 }, { c: 'Quartz', q: 4 }, { c: 'Silver_Ore', q: 1 }]);
    expect(algo.listOfMaterials('Fins')).toEqual([{ c: 'Creepvine_Seed_Cluster', q: 1 }]);
  });

  /* Recipes.Fabricator.Sustenance */
  test('it returns the correct list of base materials for Recipes.Fabricator.Sustenance', () => {
    expect(algo.listOfMaterials('Filtered_Water')).toEqual([{ c: 'Bladderfish', q: 1 }]);
    expect(algo.listOfMaterials('Disinfected_Water')).toEqual([{ c: 'Salt_Deposit', q: 0.5 }, { c: 'Coral_Tube_Sample', q: 0.5 }]);
  });
});

import algo from '@/algo';

describe('Test recipes', () => {
  /* Raw Materials */
  test('it returns the correct raw materials', () => {
    expect(algo.listOfMaterials('Copper_Ore')).toEqual([{ c: 'Copper_Ore', q: 1 }]);

    expect(algo.listOfMaterials('Uraninite_Crystal')).toEqual([{ c: 'Uraninite_Crystal', q: 1 }]);
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
});

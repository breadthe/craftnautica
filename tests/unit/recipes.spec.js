import algo from '@/algo';

describe('Test recipes', () => {
  /* Raw Materials */
  test('it returns the correct raw materials', () => {
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

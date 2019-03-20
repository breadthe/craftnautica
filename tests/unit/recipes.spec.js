import algo from '@/algo';
// import { concat } from 'rxjs';

test('it returns the correct list of base materials for any item', () => {
  let res;

  /* Raw Materials */
  res = algo.listOfMaterials('Copper_Ore');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 1 }]);

  res = algo.listOfMaterials('Uraninite_Crystal');
  expect(res).toEqual([{ c: 'Uraninite_Crystal', q: 1 }]);

  /* Recipes.Fabricator.Electronics */
  res = algo.listOfMaterials('Copper_Wire');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 2 }]);

  res = algo.listOfMaterials('Battery');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);

  res = algo.listOfMaterials('Advanced_Wiring_Kit');
  expect(res).toEqual([{ c: 'Silver_Ore', q: 2 }, { c: 'Gold', q: 3 }, { c: 'Table_Coral_Sample', q: 2 }, { c: 'Copper_Ore', q: 2 }]);

  res = algo.listOfMaterials('Reactor_Rod');
  expect(res).toEqual([{ c: 'Uraninite_Crystal', q: 3 }, { c: 'Lead', q: 1 }, { c: 'Titanium', q: 1 }, { c: 'Quartz', q: 2 }]);

  res = algo.listOfMaterials('Ion_Battery');
  expect(res).toEqual([{ c: 'Ion_Cube', q: 1 }, { c: 'Gold', q: 1 }, { c: 'Silver_Ore', q: 1 }]);

  res = algo.listOfMaterials('Ion_Power_Cell');
  expect(res).toEqual([{ c: 'Ion_Cube', q: 2 }, { c: 'Gold', q: 2 }, { c: 'Silver_Ore', q: 2 }, { c: 'Creepvine_Seed_Cluster', q: 0.5 }]);

  /* Recipes.Fabricator.Deployables */
  res = algo.listOfMaterials('Gravsphere');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 2 }, { c: 'Titanium', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);
});

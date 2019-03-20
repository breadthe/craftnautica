import algo from '@/algo';
// import { concat } from 'rxjs';

test('it returns the correct list of base materials for any item', () => {
  let res;

  /* Depth 1 */
  res = algo.listOfMaterials('Copper_Ore');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 1 }]);

  res = algo.listOfMaterials('Uraninite_Crystal');
  expect(res).toEqual([{ c: 'Uraninite_Crystal', q: 1 }]);

  /* Depth 2 */
  res = algo.listOfMaterials('Copper_Wire');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 2 }]);

  res = algo.listOfMaterials('Battery');
  expect(res).toEqual([{ c: 'Copper_Ore', q: 1 }, { c: 'Acid_Mushroom', q: 2 }]);

  /* Depth 3 */
  // res = algo.listOfMaterials('Even_More_One');
  // expect(res).toEqual([{ c: 'One', q: 6 }]);

  // res = algo.listOfMaterials('Once_Again_Two');
  // expect(res).toEqual([{ c: 'One', q: 14 }, { c: 'Two', q: 1 }]);
});

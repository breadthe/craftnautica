import itemsSn from '@/items-sn';
// import itemsBz from '@/items-bz';
import Algo from '@/algo';

const algo = new Algo(itemsSn);

describe('Test shopping list', () => {
  test('it returns the correct Shopping List', () => {
    let cart = [
      { Neptune_Launch_Platform: 1 },
      { Neptune_Gantry: 1 },
      { Neptune_Boosters: 1 },
      { Neptune_Fuel_Reserve: 1 },
      { Neptune_Cockpit: 1 },
    ];

    let shoppingList = [
      { c: 'Lead', q: 4 },
      { c: 'Titanium', q: 60 },
      { c: 'Table_Coral_Sample', q: 6 },
      { c: 'Gold', q: 10 },
      { c: 'Copper_Ore', q: 10 },
      { c: 'Lithium', q: 8 },
      { c: 'Creepvine_Seed_Cluster', q: 2.5 },
      { c: 'Nickel_Ore', q: 3 },
      { c: 'Gel_Sack', q: 2 },
      { c: 'Ruby', q: 2 },
      { c: 'Silver_Ore', q: 8 },
      { c: 'Crystalline_Sulfur', q: 4 },
      { c: 'Kyanite', q: 4 },
      { c: 'Ion_Cube', q: 4 },
      { c: 'Deep_Shroom', q: 3 },
      { c: 'Salt_Deposit', q: 1 },
      { c: 'Acid_Mushroom', q: 4 },
      { c: 'Quartz', q: 2 },
      { c: 'Stalker_Teeth', q: 1 },
    ];

    expect(algo.shoppingList(cart)).toEqual(shoppingList);

    cart = [
      { Cyclops: 1 },
      { Prawn_Suit: 1 },
    ];

    shoppingList = [
      { c: 'Titanium', q: 50 },
      { c: 'Lithium', q: 10 },
      { c: 'Quartz', q: 8 },
      { c: 'Stalker_Teeth', q: 4 },
      { c: 'Creepvine_Seed_Cluster', q: 1 },
      { c: 'Silver_Ore', q: 2 },
      { c: 'Gold', q: 3 },
      { c: 'Table_Coral_Sample', q: 2 },
      { c: 'Copper_Ore', q: 2 },
      { c: 'Lead', q: 5 },
      { c: 'Gel_Sack', q: 2 },
      { c: 'Ruby', q: 2 },
      { c: 'Diamond', q: 2 },
    ];

    expect(algo.shoppingList(cart)).toEqual(shoppingList);
  });
});

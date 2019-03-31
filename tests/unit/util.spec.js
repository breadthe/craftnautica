import util from '@/util';
import itemsSn from '@/items-sn';

describe('Test utils', () => {
  test('it returns the correct recipe', () => {
    expect(util.recipe('Copper_Ore', itemsSn)).toEqual(null);
    expect(util.recipe('Advanced_Wiring_Kit', itemsSn)).toEqual([{ c: 'Wiring_Kit', q: 1 }, { c: 'Gold', q: 2 }, { c: 'Computer_Chip', q: 1 }]);
    expect(util.recipe('Cyclops', itemsSn)).toEqual([{ c: 'Plasteel_Ingot', q: 3 }, { c: 'Enameled_Glass', q: 3 }, { c: 'Lubricant', q: 1 }, { c: 'Advanced_Wiring_Kit', q: 1 }, { c: 'Lead', q: 3 }]);
  });
});

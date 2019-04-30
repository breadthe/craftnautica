import fromEntries from 'object.fromentries';

// TODO: test coverage

const defaultInventories = ['Lifepod', 'Seamoth', 'Cyclops', 'Prawn'];

const id = item => Object.keys(item)[0]; // {'Copper_Ore': 2} -> Copper_Ore

const icon = item => `/img/items/${item}.png`;

const pretty = n => n.split('_')
  .join(' ');

const types = items => Object.values(items)
  .map(v => v.t)
  .filter((val, key, self) => self.indexOf(val) === key);

const filterByType = (items, type) => fromEntries(Object.entries(items)
  .filter(i => i[1].t === type));

const formatType = type => type.split('.').join(' > ').split('_').join(' ');

// Returns an item's recipe
const recipe = (item, items) => items[item].m || [];

/**
 * Gets all the recipes that the item is used in, with quantity
 * usedIn('Some_Item', itemsSn) -> [{ c: 'Recipe_1', q: 3 }, { c: 'Recipe_2', q: 5 }]
 */
const usedIn = (item, items) => {
  const arr = [];

  Object.entries(items).forEach((entries) => {
    const mats = entries[1].m;

    if (mats) { // Make sure it's a recipe
      mats.forEach((mat) => { // Loop thru all the mats and
        if (mat.c === item) {
          arr.push({
            c: entries[0],
            q: mat.q,
          });
        }
      });
    }
  });

  return arr;
};

const search = (items, srcStr) => fromEntries(Object.entries(items)
  .filter(i => formatType(i[0]).match(new RegExp(srcStr, 'ig')) || formatType(i[1].t).match(new RegExp(srcStr, 'ig'))));

const fullDomainName = (domain) => {
  switch (domain) {
    case 'sn':
    case 'subnautica':
      return 'Subnautica';
    case 'bz':
    case 'belowzero':
      return 'Below Zero';
    default:
      return 'Subnautica';
  }
};

/**
 * Ensure quantity is between (0, 9999)
 */
const validatedQty = (quantity) => {
  const qty = parseInt(quantity, 10);

  if (qty < 0 || isNaN(qty)) {
    return 1;
  }

  if (qty > 9999) {
    return 9999;
  }

  return qty;
};

const isDefaultInventory = inventory => !defaultInventories.every(inv => inv.toUpperCase() !== inventory.toUpperCase());

export default {
  defaultInventories, id, icon, pretty, types, filterByType, search, fullDomainName, formatType, recipe, usedIn, validatedQty, isDefaultInventory,
};

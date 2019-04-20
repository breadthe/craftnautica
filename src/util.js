import fromEntries from 'object.fromentries';

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

const recipe = (item, items) => items[item].m || [];

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

export default {
  id, icon, pretty, types, filterByType, search, fullDomainName, formatType, recipe,
};

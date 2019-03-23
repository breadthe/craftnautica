export default {
  pretty: n => n.split('_').join(' '),
  types: items => Object.values(items).map(v => v.t).filter((val, key, self) => self.indexOf(val) === key),
  filterByType: (items, type) => Object.fromEntries(Object.entries(items).filter(i => i[1].t === type)),
  search: (items, srcStr) => Object.fromEntries(Object.entries(items).filter(i => i[0].match(new RegExp(srcStr, 'ig')))),
  fullDomainName: (domain) => {
    switch (domain) {
      case 'sn':
      case 'subnautica': return 'Subnautica';
      case 'bz':
      case 'belowzero': return 'Below Zero';
      default: return 'Subnautica';
    }
  },
};

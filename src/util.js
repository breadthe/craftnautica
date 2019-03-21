import items from '@/items';

export default {
  pretty: n => n.split('_').join(' '),
  base: () => Object.keys(items).filter(k => !items[k]),
  adv: () => Object.keys(items).filter(k => items[k]),
};

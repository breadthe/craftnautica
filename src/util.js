import items from '@/items';

export default {
  pretty: n => n.split('_').join(' '),
  rawMats: () => Object.keys(items).filter(k => !items[k]),
  recipes: () => Object.keys(items).filter(k => items[k]),
};

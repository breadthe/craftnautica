import itemsSn from '@/items-sn';
import _flattenDeep from 'lodash.flattendeep';
import _groupBy from 'lodash.groupby';
import _toPairs from 'lodash.topairs';

const recurse = (com, qt = 1) => {
  const obj = itemsSn[com].m;

  // Key doesn't exist
  if (typeof obj === 'undefined') {
    return null;
  }

  // Leaf element
  if (obj === null) {
    return [{ c: com, q: qt }];
  }

  // Parent element
  return Object.values(obj).map(i => recurse(i.c, i.q * qt));
};

const listOfMaterials = (com) => {
  let arr = _flattenDeep(recurse(com));

  if (arr.length === 1) {
    return arr;
  }

  arr = _groupBy(arr, 'c');

  arr = _toPairs(arr);

  arr = arr.map(ar => ({ c: ar[0], q: ar[1].reduce((sum, { q }) => sum + q, 0) }));

  return arr;
};

export default { listOfMaterials };

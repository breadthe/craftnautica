import _flattenDeep from 'lodash.flattendeep';
import _groupBy from 'lodash.groupby';
import _toPairs from 'lodash.topairs';

class Algo {
  constructor(items) {
    this.items = items;
  }

  recurse(com, qty = 1) {
    const obj = this.items[com].m;

    // Key doesn't exist
    if (typeof obj === 'undefined') {
      return null;
    }

    // Leaf element
    if (obj === null) {
      return [{ c: com, q: qty }];
    }

    // Parent element
    return Object.values(obj).map(i => this.recurse(i.c, i.q * qty));
  }

  listOfMaterials(com, qty = 1) {
    let arr = _flattenDeep(this.recurse(com, qty));

    if (arr.length === 1) {
      return arr;
    }

    arr = _groupBy(arr, 'c');

    arr = _toPairs(arr);

    arr = arr.map(ar => ({ c: ar[0], q: ar[1].reduce((sum, { q }) => sum + q, 0) }));

    return arr;
  }
}

export default Algo;

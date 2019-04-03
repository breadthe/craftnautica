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

  /**
   * An item's Base Components
   */
  listOfMaterials(com, qty = 1) {
    const arr = _flattenDeep(this.recurse(com, qty));

    if (arr.length === 1) {
      return arr;
    }

    return Algo.groupReduce(arr);
  }

  /**
   * Sum of all the Base Components for all the items in the cart
   */
  shoppingList(cart) {
    const arr = _flattenDeep(cart.map((item) => {
      const id = Object.keys(item)[0];
      const qty = Object.values(item)[0];
      return this.listOfMaterials(id, qty);
    }));

    return Algo.groupReduce(arr);
  }

  /**
   * Group an array of objects by the component
   * and reduce by the qty
   */
  static groupReduce(objArr) {
    let arr = _groupBy(objArr, 'c');

    arr = _toPairs(arr);

    arr = arr.map(ar => ({ c: ar[0], q: ar[1].reduce((sum, { q }) => sum + q, 0) }));

    return arr;
  }
}

export default Algo;

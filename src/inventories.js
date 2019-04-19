export default class Inventories {
  set(data) {
    if (data) {
      window.localStorage.setItem('inventory', JSON.stringify(data));
    }
  }

  get(domain = null) {
    const inventory = JSON.parse(window.localStorage.getItem('inventory')) || {};
    if (domain) {
      return inventory[domain] || [];
    }
    return inventory || {};
  }

  // Reset the entire inventory, or pass the domain (sn, bz) to reset only the specific inventory
  static reset(domain = null) {
    if (domain) {
      const tmpinv = this.get();
      if (typeof tmpinv[domain] !== 'undefined') {
        tmpinv[domain] = [];
        window.localStorage.setItem('inventory', JSON.stringify(tmpinv));
      }
    }
    window.localStorage.setItem('inventory', JSON.stringify({}));
  }
}

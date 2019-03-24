class Cart {
  set(data) {
    if (data) {
      window.localStorage.setItem('cart', JSON.stringify(data));
    }
  }

  get() {
    return JSON.parse(window.localStorage.getItem('cart')) || {};
  }

  // Reset the entire cart, or pass the domain (sn, bz) to reset only the specific cart
  static reset(domain = null) {
    if (domain) {
      const tmpcart = this.get();
      if (typeof tmpcart[domain] !== 'undefined') {
        tmpcart[domain] = [];
        window.localStorage.setItem('cart', JSON.stringify(tmpcart));
      }
    }

    window.localStorage.setItem('cart', JSON.stringify({}));
  }
}

export default Cart;

import Cart from '@/cart';
import _findIndex from 'lodash.findindex';

const state = {
  cart: {},
};

const mutations = {
  INIT_CART(state) {
    const cart = new Cart();

    const storedCart = cart.get();
    if (storedCart) {
      state.cart = storedCart;
    } else {
      cart.reset();
    }
  },
  ADD_TO_CART(state, obj) {
    const { domain, id, qty } = { ...obj };

    const cart = new Cart();
    const storedCart = cart.get();

    const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

    const ix = _findIndex(domainCart, id);

    if (ix > -1) {
      domainCart[ix][id] += qty; // items is in cart, increment qty
    } else {
      domainCart.push({ [id]: qty }); // item is not in cart, add it
    }

    storedCart[domain] = domainCart;

    state.cart = storedCart;

    cart.set(state.cart);
  },
  DELETE_ITEM(state, obj) {
    const { domain, id } = { ...obj };

    const cart = new Cart();
    const storedCart = cart.get();

    const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

    const ix = _findIndex(domainCart, id);

    if (ix > -1) {
      domainCart.splice(ix, 1);
    }

    storedCart[domain] = domainCart;

    state.cart = storedCart;

    cart.set(state.cart);
  },
  INCREMENT_QTY(state, obj) {
    const { domain, id } = { ...obj };

    const cart = new Cart();
    const storedCart = cart.get();

    const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

    const ix = _findIndex(domainCart, id);

    if (ix > -1) {
      domainCart[ix][id]++; // items is in cart, increment qty
    }

    storedCart[domain] = domainCart;

    state.cart = storedCart;

    cart.set(state.cart);
  },
  DECREMENT_QTY(state, obj) {
    const { domain, id } = { ...obj };

    const cart = new Cart();
    const storedCart = cart.get();

    const domainCart = storedCart[domain] || []; // cart.sn | cart.bz

    const ix = _findIndex(domainCart, id);

    if (ix > -1) {
      if (domainCart[ix][id] > 1) {
        domainCart[ix][id]--; // items is in cart, decrement qty, make sure it doesn't go to 0
      }
    }

    storedCart[domain] = domainCart;

    state.cart = storedCart;

    cart.set(state.cart);
  },
  EMPTY_CART(state, obj) {
    const { domain } = obj;

    const cart = new Cart();
    const storedCart = cart.get();

    storedCart[domain] = [];

    state.cart = storedCart;

    cart.set(state.cart);
  },
};

const actions = {
  addToCart({ commit }, obj) {
    commit('ADD_TO_CART', obj);
  },
  deleteItem({ commit }, obj) {
    commit('DELETE_ITEM', obj);
  },
  incrementQty({ commit }, obj) {
    commit('INCREMENT_QTY', obj);
  },
  decrementQty({ commit }, obj) {
    commit('DECREMENT_QTY', obj);
  },
  emptyCart({ commit }, obj) {
    commit('EMPTY_CART', obj);
  },
};

const getters = {
};

export default {
  state,
  mutations,
  actions,
  getters,
};

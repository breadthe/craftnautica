import Vue from 'vue';
import Vuex from 'vuex';
import Cart from '@/storage';
import items_sn from '@/items-sn';
import items_bz from '@/items-bz';
import _findIndex from 'lodash.findindex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
    cart: {},
  },
  mutations: {
    SET_SRC_STR(state, srcStr) {
      state.search = srcStr;
    },
    INIT_ITEMS(state) {
      state.items_sn = items_sn;
      state.items_bz = items_bz;
    },
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
      const domain = obj.domain;
      const id = obj.id;
      const qty = obj.qty;

      const storedCart = new Cart();
      const domainCart = storedCart.get(domain); // cart.sn | cart.bz

      const ix = _findIndex(domainCart, id);

      if (ix > -1) {
        domainCart[ix][id] += qty; // items is in cart, increment qty
      } else {
        domainCart.push({ [id]: qty }); // item is not in cart, add it
      }

      storedCart[domain] = domainCart;

      storedCart.set(storedCart);

      state.cart = storedCart;
    },
    DELETE_ITEM(state, obj) {
      const domain = obj.domain;
      const id = obj.id;

      const storedCart = new Cart();
      const domainCart = storedCart.get(domain); // cart.sn | cart.bz

      const ix = _findIndex(domainCart, id);

      if (ix > -1) {
        domainCart.splice(ix, 1);
      }

      storedCart[domain] = domainCart;

      storedCart.set(storedCart);

      state.cart = storedCart;
    },
    INCREMENT_QTY(state, obj) {
      const domain = obj.domain;
      const id = obj.id;

      const storedCart = new Cart();
      const domainCart = storedCart.get(domain); // cart.sn | cart.bz

      const ix = _findIndex(domainCart, id);

      if (ix > -1) {
        domainCart[ix][id] ++; // items is in cart, increment qty
      }

      storedCart[domain] = domainCart;

      storedCart.set(storedCart);

      state.cart = storedCart;
    },
    DECREMENT_QTY(state, obj) {
      const domain = obj.domain;
      const id = obj.id;

      const storedCart = new Cart();
      const domainCart = storedCart.get(domain); // cart.sn | cart.bz

      const ix = _findIndex(domainCart, id);

      if (ix > -1) {
        if (domainCart[ix][id] > 1) {
          domainCart[ix][id] --; // items is in cart, decrement qty, make sure it doesn't go to 0
        }
      }

      storedCart[domain] = domainCart;

      storedCart.set(storedCart);

      state.cart = storedCart;
    },
  },
  actions: {
    setSrcStr({ commit }, srcStr) {
      commit('SET_SRC_STR', srcStr);
    },
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
  },
});

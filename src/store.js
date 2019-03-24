import Vue from 'vue';
import Vuex from 'vuex';
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
      const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
      if (localStorageCart) {
        state.cart = localStorageCart;
      } else {
        window.localStorage.setItem('cart', JSON.stringify({}));
      }
    },
    ADD_TO_CART(state, obj) {
      const domain = obj.domain;
      const id = obj.id;
      const qty = obj.qty;

      let cart = state.cart;
      let domainCart = cart[domain] || []; // cart.sn | cart.bz

      const ix = _findIndex(domainCart, id);
      if (ix > -1) {
        domainCart[ix][id] += qty;
      } else {
        domainCart.push({ [id]: qty });
      }

      cart[domain] = domainCart;

      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {
    setSrcStr({ commit }, srcStr) {
      commit('SET_SRC_STR', srcStr);
    },
    addToCart({ commit }, obj) {
      commit('ADD_TO_CART', obj);
    },
  },
});

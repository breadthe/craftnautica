import Vue from 'vue';
import Vuex from 'vuex';
import items_sn from '@/items-sn';
import items_bz from '@/items-bz';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
  },
  mutations: {
    SET_SRC_STR(state, srcStr) {
      state.search = srcStr;
    },
    SET_ITEMS(state) {
      state.items_sn = items_sn;
      state.items_bz = items_bz;
    },
  },
  actions: {
    setSrcStr({ commit }, srcStr) {
      commit('SET_SRC_STR', srcStr);
    },
  },
});

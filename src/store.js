import Vue from 'vue';
import Vuex from 'vuex';
import itemsSn from '@/items-sn';
import itemsBz from '@/items-bz';

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
      state.itemsSn = itemsSn;
      state.itemsBz = itemsBz;
    },
  },
  actions: {
    setSrcStr({ commit }, srcStr) {
      commit('SET_SRC_STR', srcStr);
    },
  },
});

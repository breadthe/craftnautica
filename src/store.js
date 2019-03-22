import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: '',
  },
  mutations: {
    UPDATE(state, srcStr) {
      state.search = srcStr;
    },
  },
  actions: {
    update({ commit }, srcStr) {
      commit('UPDATE', srcStr);
    },
  },
});

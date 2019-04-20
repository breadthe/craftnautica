import itemsSn from '@/items-sn';
import itemsBz from '@/items-bz';

const state = {
  search: '',
};

const mutations = {
  SET_SRC_STR(state, srcStr) {
    state.search = srcStr;
  },
  INIT_ITEMS(state) {
    state.items_sn = itemsSn;
    state.items_bz = itemsBz;
  },
};

const actions = {
  setSrcStr({ commit }, srcStr) {
    commit('SET_SRC_STR', srcStr);
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

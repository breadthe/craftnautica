import Inventories from '@/inventories';

const state = {
  inventories: {},
};

const mutations = {
  INIT_INVENTORIES(state) {
    const inventories = new Inventories();

    const storedInventories = inventories.get();
    if (storedInventories) {
      state.inventories = storedInventories;
    } else {
      inventories.reset();
    }
  },
  ADD_TO_INVENTORY(state, obj) {
    const { domain, inv, id, qty } = { ...obj };

    const inventories = new Inventories();
    const domainInventories = inventories.get(domain);

    if (typeof domainInventories[inv] === 'undefined') {
      domainInventories[inv] = { [id]: parseInt(qty, 10) };
    } else {
      domainInventories[inv][id] = parseInt(qty, 10);
    }

    state.inventories[domain] = { ...domainInventories };

    inventories.set(state.inventories);
  },
};

const actions = {
  addToInventory({ commit }, obj) {
    commit('ADD_TO_INVENTORY', obj);
  },
};

const getters = {

  domainInventories: state => domain => state.inventories[domain],

  /**
   * List of inventories per domain
   */
  inventoriesList: state => (domain) => {
    const defaultInventories = ['Lifepod', 'Seamoth', 'Cyclops', 'Prawn']; // Merge default inventories...
    const allInventories = Object.keys(state.inventories[domain]).sort() || []; // ... with user-created ones

    // Ensure default inventories are always at the top of the list
    return Array.from(new Set([...defaultInventories, ...allInventories]));
  },

  /**
   * Total inventories per domain
   */
  inventoriesCount: state => domain => Object.keys(state.inventories[domain]).length || 0,

  /**
   * Counts how much qty of an item is in a specific inventory
   */
  itemCountInInventory: state => (domain, inventory, id) => state.inventories[domain][inventory][id] || 0,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

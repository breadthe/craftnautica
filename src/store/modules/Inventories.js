import Inventories from '@/inventories';
import util from '@/util';

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

    state.inventories = inventories.get();
  },

  /**
   * Performs delete, increment, decrement on an inventory item
   * Also empties an inventory (TODO: this should probably belong to a different namespace)
   */
  INVENTORY_ACTION(state, obj) {
    const { action, domain, inventory, id, quantity } = { ...obj };

    const inventories = new Inventories();
    const domainInventories = inventories.get(domain);
    let inv = domainInventories[inventory]; // get the specified inventory
    const qty = parseInt(quantity, 10);

    switch (action) {
      case 'delete':
        delete inv[id];
        break;

      case 'update':
        inv[id] = util.validatedQty(qty);
        break;

      case 'empty':
        inv = {};
        break;

      default:
        break;
    }

    // Delete default inventory from permanent storage if it is empty
    if (['Lifepod', 'Seamoth', 'Cyclops', 'Prawn'].indexOf(inventory) > -1 && !Object.keys(inv).length) {
      delete domainInventories[inventory];
    } else {
      domainInventories[inventory] = inv; // replace the domain inventory with the modified inventory
    }

    state.inventories[domain] = { ...domainInventories };

    inventories.set(state.inventories);

    state.inventories = inventories.get();
  },

  /**
   * Deletes an empty custom (user-created) inventory
   */
  DELETE_INVENTORY(state, obj) {
    const { domain, inventory } = { ...obj };

    const inventories = new Inventories();
    const domainInventories = inventories.get(domain);

    delete domainInventories[inventory];

    state.inventories[domain] = { ...domainInventories };

    inventories.set(state.inventories);

    state.inventories = inventories.get();
  },
};

const actions = {
  addToInventory({ commit }, obj) {
    commit('ADD_TO_INVENTORY', obj);
  },
  inventoryAction({ commit }, obj) {
    commit('INVENTORY_ACTION', obj);
  },
  deleteInventory({ commit }, obj) {
    commit('DELETE_INVENTORY', obj);
  },
};

const getters = {

  domainInventories: state => domain => state.inventories[domain] || {},
  inventoryItems: state => (domain, inventory) => state.inventories[domain][inventory] || [],

  /**
   * List of inventories per domain
   */
  inventoriesList: state => (domain) => {
    const defaultInventories = ['Lifepod', 'Seamoth', 'Cyclops', 'Prawn']; // Merge default inventories...
    const domainInventories = typeof state.inventories[domain] !== 'undefined'
      ? Object.keys(state.inventories[domain]).sort() // ... with user-created ones
      : [];

    // Ensure default inventories are always at the top of the list
    return Array.from(new Set([...defaultInventories, ...domainInventories]));
  },

  /**
   * Total inventories per domain
   */
  inventoriesCount: state => domain => (
    typeof state.inventories[domain] !== 'undefined'
      ? Object.keys(state.inventories[domain]).length
      : 0
  ),

  /**
   * Counts how much qty of an item is in a specific inventory
   */
  itemCountInInventory: state => (domain, inventory, id) => {
    const domainInventories = state.inventories[domain];
    if (typeof domainInventories === 'undefined') {
      return 0;
    }
    if (typeof domainInventories[inventory] === 'undefined') {
      return 0;
    }
    return parseInt(domainInventories[inventory][id], 10);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

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

  /**
   * Performs delete, increment, decrement on an inventory item
   */
  INVENTORY_ACTION(state, obj) {
    const { action, domain, inventory, id, quantity } = { ...obj };

    const inventories = new Inventories();
    const domainInventories = inventories.get(domain);
    let inv = domainInventories[inventory]; // get the specified inventory
    let qty = parseInt(quantity, 10);
    let invQty = parseInt(inv[id], 10);

    switch (action) {
      case 'delete':
        delete inv[id];
        break;

      case 'increment':
        invQty += qty;

        if (invQty > 9999) {
          invQty = 9999;
        }

        inv[id] = invQty;
        break;

      case 'decrement':
        invQty -= qty;

        if (invQty < 1) {
          invQty = 1;
        }

        inv[id] = invQty;
        break;

      case 'update':
        if (qty < 1) {
          qty = 1;
        }

        if (qty > 9999) {
          qty = 9999;
        }

        inv[id] = qty;
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
  },
};

const actions = {
  addToInventory({ commit }, obj) {
    commit('ADD_TO_INVENTORY', obj);
  },
  inventoryAction({ commit }, obj) {
    commit('INVENTORY_ACTION', obj);
  },
};

const getters = {

  domainInventories: state => domain => state.inventories[domain] || {},

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

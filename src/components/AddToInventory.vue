<template>
  <div class="">
    <!-- ============= Inventories ============= -->
    <div
        v-show="!creatingNewInventory && !addingToInventory"
        class="h-48 overflow-x-hidden overflow-y-scroll"
    >
      <div
          v-for="inventory in inventoriesList"
          :key="inventory"
          @click="openAddingToInventory(inventory)"
          class="menu-entry"
      >
        {{ inventory }}

        <small
            v-if="itemCountInInventory(inventory)"
            v-html="`(${itemCountInInventory(inventory)})`"
            class="text-blue-light font-bold ml-1"
        ></small>
      </div>
    </div>

    <!-- ============= Added to Inventory ============= -->
    <div v-show="addedToInventory" class="added">
      Added to inventory
    </div>

    <!-- ============= + New Inventory ============= -->
    <div
        v-show="!creatingNewInventory && !addingToInventory && !addedToInventory"
        @click="creatingNewInventory = true"
        class="flex items-center bg-blue text-blue-darkest font-normal border-t border-blue-darkest p-2 py-4"
    >
      <v-icon icon="plus" color="blue-darkest" class="mr-2"></v-icon>New Inventory
    </div>

    <!-- ============= Adding to Inventory ============= -->
    <div
        v-if="addingToInventory && !addedToInventory"
        class="flex flex-wrap items-center bg-blue text-blue-darkest font-normal p-2"
    >

      <div class="mb-4">
        Adding to <span class="text-xl font-bold">{{ selectedInventory }}</span>
      </div>

      <small class="w-full">Quantity (0-9999)</small>

      <input
          v-focus
          v-select
          type="number"
          name="quantity"
          min="1"
          max="9999"
          v-model="quantity"
          @keyup.enter="addToInventory"
          placeholder="Quantity (1-9999)"
          class="w-full p-2 text-right"
      >

      <div class="flex items-center justify-between w-full mt-2">
        <button
            type="button"
            @click="addToInventory"
            :disabled="parseInt(quantity, 10) < 1"
            class="bg-blue-dark hover:bg-blue-darkest text-grey p-2 rounded"
        >Add</button>

        <button
            type="button"
            @click="closeAddingToInventory"
            class="underline text-grey hover:text-blue-darkest p-2 rounded"
        >Cancel</button>
      </div>
    </div>

    <!-- ============= Create New Inventory ============= -->
    <div
        v-if="creatingNewInventory && !addedToInventory"
        class="flex flex-wrap bg-blue text-blue-darkest font-normal border-blue-darkest p-2"
    >
      <input
          v-focus
          type="text"
          name="newInventory"
          v-model="newInventory"
          @keyup.enter="addToNewInventory"
          placeholder="New Inventory"
          class="w-full p-2 mb-4"
        >

      <small class="w-full">Quantity (0-9999)</small>

      <input
          type="number"
          name="quantity"
          min="1"
          max="9999"
          v-model="quantity"
          @keyup.enter="addToNewInventory"
          placeholder="Quantity (1-9999)"
          class="w-full p-2 text-right"
      >

      <div class="flex items-center justify-between w-full mt-2">
          <button
              type="button"
              @click="addToNewInventory"
              :disabled="quantity < 1"
              class="bg-blue-dark hover:bg-blue-darkest text-grey p-2 rounded"
          >Create & Add</button>

          <button
              type="button"
              @click="cancelAddingToNewInventory"
              class="underline text-grey hover:text-blue-darkest p-2 rounded"
          >Cancel</button>
        </div>
    </div>

  </div>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'AddToInventory',
  components: {
    VIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null,
    },
    domain: {
      type: String,
      required: true,
      default: null,
    },
  },
  data: function () {
    return {
      validatedQty: util.validatedQty,
      newInventory: null,
      selectedInventory: null,
      quantity: 0, // TODO: get the actual quantity of the item in that inventory, computed
      creatingNewInventory: false,
      addingToInventory: false,
      addedToInventory: false,
    };
  },
  computed: {
    inventoriesList: function () {
      return this.$store.getters.inventoriesList(this.domain);
    },
  },
  methods: {
    openAddingToInventory: function (selectedInventory) {
      this.addingToInventory = true;
      this.selectedInventory = selectedInventory;

      // Fill in the existing quantity of this item in the selected inventory, if it exists
      this.quantity = parseInt(this.itemCountInInventory(this.selectedInventory), 10) || 0;
    },
    closeAddingToInventory: function () {
      this.addingToInventory = false;
      this.selectedInventory = null;
    },
    addToInventory: function () {
      const qty = this.validatedQty(this.quantity);

      // Checking for quantity allows using Enter to add/create instead of clicking the button
      if (qty) {
        this.$store.dispatch('addToInventory', {
          domain: this.domain,
          inv: this.selectedInventory,
          id: this.id,
          qty,
        });

        this.addedToInventory = true;

        setTimeout(() => { this.addedToInventory = false; this.$emit('closeMenu'); }, 750);
      }
    },
    addToNewInventory: function () {
      // Check if the inventory name already exists
      const ix = this.inventoriesList.map(i => i.toUpperCase()).indexOf(this.newInventory.trim().toUpperCase());

      // If inventory name exists (case insensitive)...
      if (ix > -1) {
        this.selectedInventory = this.inventoriesList[ix]; // use the existing inventory name, preserving case
      } else {
        this.selectedInventory = this.newInventory; // otherwise use the new name
      }

      this.addToInventory();

      // TODO: otherwise show an error message requesting uniqueness
    },
    cancelAddingToNewInventory: function () {
      this.creatingNewInventory = false;
      this.newInventory = null;
    },
    itemCountInInventory: function (inventory) {
      return this.$store.getters.itemCountInInventory(this.domain, inventory, this.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menu-entry {
    @apply flex;
    @apply items-center;
    @apply text-grey-light;
    @apply font-light;
    @apply p-2;
    @apply py-4;
    @apply cursor-pointer;
    &:hover {
      @apply bg-blue;
      //@apply text-blue-light;
    }
  }

  .added {
    @apply font-normal;
    @apply p-2;
    @apply py-4;
    @apply text-center;
    @apply text-green-light;
  }
</style>

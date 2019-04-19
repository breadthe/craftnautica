<template>
  <div class="">
    <!-- ============= Inventories ============= -->
    <div
        v-show="!creatingNewInventory && !addingToInventory"
        class="h-48 overflow-x-hidden overflow-y-scroll"
    >
      <div
          v-for="inventory in inventories"
          :key="inventory"
          @click="openAddingToInventory(inventory)"
          class="menu-entry"
      >
        {{ inventory }}
      </div>
    </div>

    <!-- ============= + New Inventory ============= -->
    <div
        v-show="!creatingNewInventory && !addingToInventory"
        @click="creatingNewInventory = true"
        class="flex items-center bg-blue text-blue-darkest font-normal border-t border-blue-darkest p-2 py-4"
    >
      <v-icon icon="plus" color="blue-darkest" class="mr-2"></v-icon>New Inventory
    </div>

    <!-- ============= Adding to Inventory ============= -->
    <div
        v-show="addingToInventory"
        class="flex flex-wrap items-center bg-blue text-blue-darkest font-normal p-2 py-4"
    >

      <div class="flex items-center justify-between w-full">
        <span class="text-xl">{{ selectedInventory }}</span>
        <small>quantity</small>
      </div>

      <input
          type="number"
          name="quantity"
          v-model="quantity"
          placeholder="Quantity"
          class="w-full p-2 mt-2 text-right"
      >

      <div class="flex items-center justify-between w-full mt-2">
        <button
            type="button"
            @click="addToInventory"
            :disabled="quantity < 1"
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
        v-show="creatingNewInventory"
        class="flex flex-wrap bg-blue text-blue-darkest font-normal border-t border-blue-darkest p-2"
    >
        <input
            type="text"
            name="newInventory"
            v-model="newInventory"
            placeholder="New Inventory"
            class="w-full p-2"
        >

        <div class="flex items-center justify-between w-full mt-2">
          <button
              type="button"
              class="bg-blue-dark hover:bg-blue-darkest text-grey p-2 rounded"
          >Create</button>

          <button
              type="button"
              @click="creatingNewInventory = false"
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
      icon: util.icon,
      pretty: util.pretty,
      inventories: [
        'Lifepod',
        'Seamoth',
        'Cyclops',
        'Prawn',
      ],
      newInventory: null,
      selectedInventory: null,
      quantity: 0, // TODO: get the actual quantity of the item in that inventory, computed
      creatingNewInventory: false,
      addingToInventory: false,
    };
  },
  methods: {
    openAddingToInventory: function (selectedInventory) {
      this.addingToInventory = true;
      this.selectedInventory = selectedInventory;
    },
    closeAddingToInventory: function () {
      this.addingToInventory = false;
      this.selectedInventory = null;
    },
    addToInventory: function () {
      this.$store.dispatch('addToInventory', {
        domain: this.domain,
        inv: this.selectedInventory,
        id: this.id,
        qty: this.quantity,
      });
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
</style>

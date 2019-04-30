<template>
<section
    class="flex flex-col hover:bg-blue-darker -mx-4 px-4"
>
  <div class="flex flex-wrap sm:flex-nowrap justify-between items-center my-2 -mx-2 p-2 font-light">
      <router-link :to="`/${domain}/i/${id}`" class="flex items-center w-1/2 text-lg">
        <item-icon :id="id" class="mr-4"></item-icon>

        {{ pretty(id) }}
      </router-link>

      <div v-show="!confirmDelete" class="flex items-center justify-end w-1/4">

        <div v-if="qty(item) > 1" class="w-12 flex justify-center mr-1">
          <button @click="decrementQty()" class="flex">
            <v-icon icon="minus-circle" color="blue-dark" class=""></v-icon>
          </button>
        </div>
        <div v-else class="w-12">
          &nbsp;
        </div>

        <input
            type="number"
            name="quantity"
            ref="quantity"
            min="1"
            max="9999"
            class="w-24 p-2 text-right"
            v-model="quantity"
            @keyup.enter="$refs.quantity.blur()"
        >

        <div v-if="qty(item) < 9999" class="w-12 flex justify-center ml-1">
          <button @click="incrementQty()" class="flex">
            <v-icon icon="plus-circle" color="blue-dark" class=""></v-icon>
          </button>
        </div>
        <div v-else class="w-12">
          &nbsp;
        </div>
      </div>

      <div v-show="!confirmDelete" class="flex items-center">
        <button @click="confirmDelete = true" class="flex ml-4">
          <v-icon icon="x-circle" color="blue-dark" class=""></v-icon>
        </button>
      </div>
      <div v-show="confirmDelete" class="flex flex-grow items-center justify-end mx-auto sm:mx-0 mt-2 sm:mt-0">
          Are you sure?

          <v-button link @click="confirmDelete = false">Cancel</v-button>

          <v-button icon="trash-2" @click="deleteItem">Delete</v-button>
      </div>

    </div>

</section>
</template>

<script>
import util from '@/util';
import ItemIcon from '@/components/ItemIcon.vue';
import VButton from '@/components/VButton.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'InventoryItem',
  components: {
    ItemIcon,
    VButton,
    VIcon,
  },
  props: {
    inventory: {
      type: String,
      required: true,
      default: null,
    },
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data: function () {
    return {
      pretty: util.pretty,
      icon: util.icon,
      validatedQty: util.validatedQty,
      quantity: this.qty(this.item),
      confirmDelete: false,
    };
  },
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sncart"
    id: function () {
      return util.id(this.item);
    },
  },
  watch: {
    quantity: function () {
      const qty = this.validatedQty(this.quantity);

      this.$store.dispatch('inventoryAction', { action: 'update', domain: this.domain, inventory: this.inventory, id: this.id, quantity: qty });
    },
  },
  methods: {
    qty: item => parseInt(item[Object.keys(item)[0]], 10),

    deleteItem: function () {
      this.$store.dispatch('inventoryAction', { action: 'delete', domain: this.domain, inventory: this.inventory, id: this.id, quantity: null });
    },
    incrementQty: function () {
      this.quantity = this.validatedQty(parseInt(this.quantity, 10) + 1);
    },
    decrementQty: function () {
      this.quantity = this.validatedQty(parseInt(this.quantity, 10) - 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

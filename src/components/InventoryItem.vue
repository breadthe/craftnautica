<template>
<section
    class="flex flex-col hover:bg-blue-darker -mx-4 px-4"
>
  <div class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light">
      <div class="flex items-center w-1/2">
        <div class="item-icon" :style="'background-image: url(' + icon(id(item)) + ')'"></div>

        <div class="relative flex flex-col ml-4 -my-2">
          <router-link :to="`/${domain}/i/${id(item)}`" class="my-1">{{ pretty(id(item)) }}</router-link>
        </div>
      </div>

      <div class="flex items-center justify-end w-1/4">

        <div v-if="qty(item) > 1" class="w-12 flex justify-center">
          <button @click="decrementQty(id(item))" class="flex">
            <v-icon icon="minus-circle" color="blue-dark" class=""></v-icon>
          </button>
        </div>
        <div v-else class="w-12">
          &nbsp;
        </div>

        <input
            type="number"
            name="quantity"
            min="1"
            max="9999"
            class="w-24 p-2 text-right"
            v-model="q"
            @blur="updateQty(id(item))"
            @keyup.enter.prevent="updateQty(id(item))"
        >

        <div v-if="qty(item) < 9999" class="w-12 flex justify-center">
          <button @click="incrementQty(id(item))" class="flex">
            <v-icon icon="plus-circle" color="blue-dark" class=""></v-icon>
          </button>
        </div>
        <div v-else class="w-12">
          &nbsp;
        </div>
      </div>

      <div class="flex items-center">
        <button @click="deleteItem(id(item))" class="flex ml-4">
          <v-icon icon="x-circle" color="blue-dark" class=""></v-icon>
        </button>
      </div>
    </div>

</section>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
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
      quantity: null,
    };
  },
  computed: {
    domain: vm => vm.$route.name.replace(/inventories/, ''), // strip out "inventories" from "sncart"
    q: {
      get: function () { return this.qty(this.item); },
      set: function (data) { this.quantity = parseInt(data, 10); },
    },
  },
  methods: {
    id: item => util.id(item),
    qty: item => item[Object.keys(item)[0]],

    deleteItem: function (id) {
      this.$store.dispatch('itemAction', { action: 'delete', domain: this.domain, inventory: this.inventory, id, quantity: null });
    },
    incrementQty: function (id) {
      this.$store.dispatch('itemAction', { action: 'increment', domain: this.domain, inventory: this.inventory, id, quantity: 1 });
    },
    decrementQty: function (id) {
      this.$store.dispatch('itemAction', { action: 'decrement', domain: this.domain, inventory: this.inventory, id, quantity: 1 });
    },
    updateQty: function (id) {
      this.$store.dispatch('itemAction', { action: 'update', domain: this.domain, inventory: this.inventory, id, quantity: this.quantity });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

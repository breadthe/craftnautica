<template>
  <div class="item-menu">

    <!-- ============= Item Header ============= -->
    <div
      class="flex items-center justify-between bg-blue text-blue-darkest font-normal border-b border-blue-darkest p-2"
    >
      <router-link
          v-show="!addingToInventory"
          :to="{name: domain + 'details', params: { id }}"
          class="flex items-center text-blue-darkest hover:text-grey-light"
      >
        <div
          class="item-icon--sm border border-blue-light mr-2"
          :style="'background-image: url(' + icon(id) + ')'"
        ></div>
        {{ pretty(id) }}
      </router-link>

      <span v-show="addingToInventory">&nbsp;</span>

      <v-icon @click.native="$emit('closeMenu')" icon="x" color="blue-darkest"></v-icon>
    </div>

    <!-- ============= Add to Cart ============= -->
    <div v-show="addingToCart && !addingToInventory" class="added">
      Added to cart
    </div>

    <div v-show="!addingToCart && !addingToInventory" @click.stop.prevent="addToCart" class="menu-entry">
      <v-icon icon="shopping-cart" color="blue-darkest" class="mr-2"></v-icon>Add to Cart
    </div>

    <!-- ============= Add to Inventory ============= -->
    <div v-show="!addingToInventory" @click.stop.prevent="addToInventory" class="menu-entry">
      <v-icon icon="folder-plus" color="blue-darkest" class="mr-2"></v-icon>Add to Inventory
    </div>

    <add-to-inventory
        v-show="addingToInventory"
        :id="id"
        :domain="domain"
        @closeMenu="$emit('closeMenu')"
    ></add-to-inventory>

  </div>
</template>

<script>
import util from '@/util';
import AddToInventory from '@/components/AddToInventory.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'ItemMenu',
  components: {
    AddToInventory,
    VIcon,
  },
  props: {
    id: {
      type: String,
      required: true,
      default: null,
    },
    item: {
      type: Object,
      required: true,
      default: () => [],
    },
  },
  data: function () {
    return {
      icon: util.icon,
      pretty: util.pretty,
      addingToCart: false,
      addingToInventory: false,
    };
  },
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
  },
  methods: {
    addToCart: function () {
      this.addingToCart = true;
      this.$store.dispatch('addToCart', { domain: this.domain, id: this.id, qty: 1 });
      setTimeout(() => { this.addingToCart = false; this.$emit('closeMenu'); }, 750);
    },
    addToInventory: function () {
      this.addingToInventory = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-menu {
  @apply flex;
  @apply flex-col;
  @apply absolute;
  @apply border;
  @apply border-blue-dark;
  @apply rounded;
  @apply bg-blue-dark;
  @apply pin-x;
  @apply w-64;
  @apply z-10;
  margin-left: -1px;
  margin-right: -1px;

  .menu-entry {
    @apply flex;
    @apply items-center;
    @apply text-blue-darkest;
    @apply font-normal;
    @apply p-2;
    @apply py-4;
    @apply cursor-pointer;
    &:hover {
      @apply bg-blue;
    }
  }

  .added {
    @apply font-normal;
    @apply p-2;
    @apply py-4;
    @apply text-center;
    @apply text-green-light;
  }
}
</style>

<template>
  <div class="item-menu">

    <!-- ============= Icon ============= -->
    <div class="flex items-center justify-between bg-blue text-blue-darkest font-normal border-b border-blue-darkest p-2">
      <div class="flex items-center">
        <div class="item-icon--sm border border-blue-light mr-2" :style="'background-image: url(' + icon(id) + ')'"></div>
        {{ pretty(id) }}
      </div>
      <v-icon @click.native="$emit('closeMenu')" icon="x" color="blue-darkest"></v-icon>
    </div>

    <!-- ============= Details ============= -->
    <router-link
        :to="{name: domain + 'details', params: { id }}"
        class="menu-entry"
    >
      <v-icon icon="info" color="blue-darkest" class="mr-2"></v-icon>View Details
    </router-link>

    <!-- ============= Add to Cart ============= -->
    <div v-show="addingToCart" class="added">
      Added to cart
    </div>

    <div v-show="!addingToCart" @click.stop.prevent="addToCart" class="menu-entry">
      <v-icon icon="shopping-cart" color="blue-darkest" class="mr-2"></v-icon>Add to Cart
    </div>

    <!-- ============= Add to Inventory ============= -->
    <div v-show="addingToInventory" class="added">
      Added to Inventory
    </div>

    <div v-show="!addingToInventory" @click.stop.prevent="addToInventory" class="menu-entry">
      <v-icon icon="folder-plus" color="blue-darkest" class="mr-2"></v-icon>Add to Inventory
    </div>

  </div>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'ItemMenu',
  components: {
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
      // this.$store.dispatch('addToCart', { domain: this.domain, id: this.id, qty: 1 });
      setTimeout(() => { this.addingToInventory = false; this.$emit('closeMenu'); }, 750);
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
  @apply w-48;
  @apply z-10;
  //-webkit-box-shadow: 0 2px 10px #fff;
  //-moz-box-shadow: 0 2px 10px #fff;
  //box-shadow: 0 2px 10px #fff;
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
      //@apply text-blue-light;
    }
  }

  .added {
    //@apply flex;
    //@apply items-center;
    //@apply text-blue-darkest;
    @apply font-normal;
    @apply p-2;
    @apply py-4;
    @apply text-center;
    @apply text-green-light;
    //@apply cursor-pointer;
  }
}
</style>

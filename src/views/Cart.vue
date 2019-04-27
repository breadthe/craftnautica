<template>
  <main class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-8">
      <h1 class="flex items-center">
        <v-icon icon="shopping-cart" :size=10 color="blue-dark" class="mr-4"></v-icon>
        {{ fullDomainName }}
      </h1>
      <span v-if="cart.length">{{ cart.length }} items</span>
    </div>

    <button
        v-if="cart.length"
        type="button"
        @click="showAllRecipes = !showAllRecipes"
        class="mx-4 flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue mb-4"
        v-html="(showAllRecipes ? 'Hide ' : 'Show ') + 'All Recipes'"
    >
    </button>

    <!-- ============= Cart Items ============= -->
    <div class="mx-4" v-if="cart.length">
      <div
        v-for="(item, ix) in cart"
        :key="ix"
        class=""
      >
        <cart-item
            :item="item"
            :data-show-recipe="showAllRecipes"
            :recipe="recipe(id(item), items)"
        ></cart-item>
      </div>

      <!-- ============= Empty Cart ============= -->
      <empty-cart-or-inventory
          what="Cart"
          :domain="domain"
      ></empty-cart-or-inventory>

      <!-- ============= Shopping List ============= -->
      <div class="flex flex-col mt-4">
        <h3 class="border-b border-grey-darkest py-2">Shopping List</h3>

        <div
          v-for="comp in shoppingList"
          :key="comp.c"
          class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker"
        >
          <router-link :to="`/${domain}/i/${comp.c}`" class="flex items-center">
            <item-icon :id="comp.c" class="mr-4"></item-icon>

            {{ pretty(comp.c) }}
          </router-link>

          <div>{{ comp.q }}</div>
        </div>
      </div>

    </div>

    <div class="flex flex-col text-center" v-else>
      Your cart is empty.
    </div>

  </main>
</template>

<script>
import 'array-flat-polyfill';
import util from '@/util';
import Algo from '@/algo';
import CartItem from '@/components/CartItem.vue';
import EmptyCartOrInventory from '@/components/EmptyCartOrInventory.vue';
import ItemIcon from '@/components/ItemIcon.vue';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Cart',
  components: {
    CartItem,
    EmptyCartOrInventory,
    ItemIcon,
    VIcon,
  },
  data: () => ({
    pretty: util.pretty,
    icon: util.icon,
    recipe: util.recipe,
    confirmEmptyCart: false,
    showAllRecipes: false,
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/cart/, ''), // strip out "cart" from "sncart"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    cart: vm => vm.$store.state.Cart.cart[vm.domain] || [],
    items: vm => vm.$store.state.App['items_' + vm.domain],
    shoppingList: vm => (new Algo(vm.items)).shoppingList(vm.cart),
  },
  methods: {
    id: item => util.id(item),
    components: function (id) {
      return (new Algo(this.items)).listOfMaterials(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

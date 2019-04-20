<template>
<section
    class="flex flex-col hover:bg-blue-darker -mx-4 px-4"
>
  <div class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light">
      <div class="flex items-center w-1/2">
        <div class="item-icon" :style="'background-image: url(' + icon(id(item)) + ')'"></div>

        <div class="relative flex flex-col ml-4 -my-2">
          <router-link :to="`/${domain}/i/${id(item)}`" class="my-1">{{ pretty(id(item)) }}</router-link>

          <a
              v-if="recipe.length"
              href="#"
              @click.stop.prevent="showingRecipe = !showingRecipe"
              class="flex items-center my-1 text-sm text-grey"
          >
            {{ showingRecipe ? 'Hide  recipe' : 'Show recipe'}}
            <v-icon :icon="showingRecipe ? 'chevron-up' : 'chevron-down'" :size=6 color="grey" class=""></v-icon>
          </a>

        </div>
      </div>

      <div class="flex items-center justify-end w-1/4">
        <button @click="decrementQty(id(item))" class="flex mr-4">
          <v-icon icon="minus-circle" color="blue-dark" class="" v-if="qty(item) > 1"></v-icon>
        </button>
        {{ qty(item) }}
        <button @click="incrementQty(id(item))" class="flex ml-4">
          <v-icon icon="plus-circle" color="blue-dark" class=""></v-icon>
        </button>
      </div>

      <div class="flex items-center">
        <button @click="deleteItem(id(item))" class="flex ml-4">
          <v-icon icon="x-circle" color="blue-dark" class=""></v-icon>
        </button>
      </div>
    </div>

    <!-- ============= Recipe ============= -->
    <div
      v-if="showingRecipe"
      class="flex p-1 -mt-2 -mx-2 mb-6 z-10 flex-wrap"
    >
        <div
          v-for="(item, ix) in recipe"
          :key="ix"
          class="mx-2 flex items-center rounded-full bg-blue-darker pr-2"
        >
          <div class="item-icon--sm mr-2" :style="'background-image: url(' + icon(item.c) + ')'"></div>
          {{ pretty(item.c) }}
          &nbsp;x&nbsp;
          {{ item.q }}
        </div>
    </div>
</section>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'CartItem',
  components: {
    VIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {},
    },
    dataShowRecipe: {
      type: Boolean,
      required: false,
      default: false,
    },
    recipe: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: function () {
    return {
      pretty: util.pretty,
      icon: util.icon,
      showRecipe: false,
    };
  },
  computed: {
    domain: vm => vm.$route.name.replace(/cart/, ''), // strip out "cart" from "sncart"
    showingRecipe: {
      get: function () { return this.showRecipe; },
      set: function (data) { this.showRecipe = data; },
    },
  },
  watch: {
    dataShowRecipe: function () {
      this.showingRecipe = this.dataShowRecipe;
    },
  },
  methods: {
    id: item => util.id(item),
    qty: item => item[Object.keys(item)[0]],

    // TODO: refactor the following cart methods into 1 with an additional action param
    deleteItem: function (id) {
      this.$store.dispatch('deleteItem', { domain: this.domain, id: id });
    },
    incrementQty: function (id) {
      this.$store.dispatch('incrementQty', { domain: this.domain, id: id });
    },
    decrementQty: function (id) {
      this.$store.dispatch('decrementQty', { domain: this.domain, id: id });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

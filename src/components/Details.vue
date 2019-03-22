<template>
  <section class="container mx-auto max-w-lg">
    <div class="flex justify-between my-4">
      <router-link :to="{name: 'home'}">&laquo; Back</router-link>
      <div>{{ type }}</div>
    </div>

    <div class="flex justify-between items-center my-8 text-lg font-light">
      <div class="flex items-center">
        <div class="item-icon"></div>
        <h2 class="ml-4 text-blue">{{ pretty(id) }}</h2>
      </div>
    </div>


    <div class="" v-if="rawMat">
      This item is a raw material or base component.
    </div>

    <div class="flex flex-col" v-else>
      <h3 class="border-b border-grey-darkest py-2">Components</h3>

      <div v-for="comp in components" :key="comp.c" class="flex justify-between items-center my-2 -mx-2 p-2 text-lg font-light hover:bg-blue-darker">
        <div class="flex items-center">
          <div class="item-icon"></div>
          <div class="ml-4">{{ pretty(comp.c) }}</div>
        </div>
        <div>{{ comp.q }}</div>
      </div>
    </div>

  </section>
</template>

<script>
import items from '@/items';
import algo from '@/algo';
import util from '@/util';

export default {
  name: 'Details',
  props: {
    id: String,
  },
  data: () => ({
    pretty: util.pretty,
    components: null,
  }),
  computed: {
    type: vm => items[vm.id].t,
    rawMat: vm => vm.type.split('.')[0] === 'Raw_Materials',
  },
  methods: {
    setData: function(components) {
      this.components = components;
    },
  },
  beforeRouteEnter(to, from, next) {
    const components = algo.listOfMaterials(to.params.id);
    if (components.length) {
      next(vm => vm.setData(components));
    } else {
      next(vm => vm.$router.push({ path: '/404' }));
    }
  },
  beforeRouteUpdate(to, from, next) {
    const components = algo.listOfMaterials(to.params.id);
    if (components.length) {
      this.setData(components);
    } else {
      this.$router.push({ path: '/404' });
    }
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

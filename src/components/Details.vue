<template>
  <section class="container mx-auto max-w-lg">
    <div class="my-4">
      <router-link :to="{name: 'home'}">&laquo; Back</router-link>
    </div>

    <div class="flex items-center my-8 text-lg font-light">
      <div class="item-icon"></div>
      <h2 class="ml-4">{{ pretty(id) }}</h2>
    </div>

    <h3 class="border-b border-grey-darkest py-2">Bill of Materials</h3>

    <div class="flex flex-col -mx-2">
      <div v-for="comp in components" :key="comp.c" class="flex justify-between items-center my-2 p-2 text-lg font-light">
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

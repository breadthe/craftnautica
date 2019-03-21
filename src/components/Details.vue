<template>
  <section class="container mx-auto max-w-lg">
    <div class="my-4">
      <router-link :to="{name: 'home'}">&laquo; Back</router-link>
    </div>

    <h2>{{ pretty(id) }}</h2>

    <div class="flex flex-wrap -mx-2">
      <div v-for="comp in components" :key="comp.c" class="flex items-center m-2 p-2 border border-grey-darkest text-lg font-light">
        <div class="w-12 h-12 mr-2 rounded-full bg-grey-darkest border border-grey-darker"></div>
        {{ pretty(comp.c) }} x {{ comp.q }}
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

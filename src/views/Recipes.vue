<template>
  <main class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center sm:items-baseline justify-center sm:justify-between mx-4">
      <h1 class="logo" v-if="fullDomainName === 'Subnautica'">
        <span class="sub">Sub</span><span class="nautica">nautica</span>
      </h1>
      <h1 class="logo text-blue-light" v-if="fullDomainName === 'Below Zero'">
        <span class="sub">Sub</span><span class="nautica">nautica</span>
        <br>Below Zero
      </h1>

      <search></search>
    </div>

    <div v-for="type in types" :key="type" class="">
      <type :type="formatType(type)" :types="filterByType(type)"></type>
    </div>

  </main>
</template>

<script>
import util from '@/util';
import Type from '@/components/Type.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'Recipes',
  components: {
    Type,
    Search,
  },
  data: () => ({
  }),
  computed: {
    domain: vm => vm.$route.path.replace(/\//, ''),
    fullDomainName: vm => util.fullDomainName(vm.domain),
    items: vm => vm.$store.state.App[`items_${vm.domain}`],
    types: vm => util.types(vm.items),
  },
  methods: {
    filterByType: function (type) {
      return util.filterByType(this.items, type);
    },
    formatType: type => util.formatType(type),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

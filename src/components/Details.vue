<template>
  <section>

    <div class="flex">
      <div v-for="a in adv" :key="a" class="m-2 p-2 border border-grey-darkest text-xs text-grey-darkest">
        <router-link :to="{name: 'details', params: { id: a }}" class="border-0">
          {{ pretty(a) }}
        </router-link>
      </div>
    </div>

    <div class="my-4">
      <router-link :to="{name: 'home'}">&laquo; Back</router-link>
    </div>

    <h2>{{ pretty(id) }}</h2>

    <div class="flex">
      <div v-for="c in comps" :key="c.c" class="m-2 p-2 border border-grey-darkest text-xs text-grey-darkest">
        {{ pretty(c.c) }} {{ c.q }}
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
    comps: null,
    base: util.base(),
    adv: util.adv(),
  }),
  methods: {
    setData: function(comps) {
      this.comps = comps;
    },
  },
  beforeRouteEnter(to, from, next) {
    const comps = algo.flatten(to.params.id);
    if (comps.length) {
      next(vm => vm.setData(comps));
    } else {
      next(vm => vm.$router.push({ path: '/404' }));
    }
  },
  beforeRouteUpdate(to, from, next) {
    const comps = algo.flatten(to.params.id);
    if (comps.length) {
      this.setData(comps);
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

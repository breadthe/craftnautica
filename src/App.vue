<template>
  <div id="app">
    <div v-if="unsupported" class="flex justify-center w-full border border-pink-darkest bg-red">
      <div class="max-w-lg p-8 text-xl">
        You are using an unsupported browser. Please use Firefox 63+ or Chrome 73+.
      </div>
    </div>

    <nav-main></nav-main>

    <router-view/>

    <app-footer :version="version"></app-footer>
  </div>
</template>

<script>
import NavMain from '@/components/NavMain.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    NavMain,
    AppFooter,
  },
  data: () => ({
    version: require('../package.json').version,
  }),
  computed: {
    unsupported: () => typeof Object.fromEntries === 'undefined',
  },
  created() {
    this.$store.commit('INIT_ITEMS');
    this.$store.commit('INIT_CART');
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Luckiest+Guy');

@tailwind preflight;
@tailwind components;
@tailwind utilities;

@import 'assets/app';
</style>

<template>
  <div id="app">
    <nav-main></nav-main>

    <router-view/>
  </div>
</template>

<script>
import NavMain from '@/components/NavMain.vue';

export default {
  components: {
    NavMain,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');

@tailwind preflight;
@tailwind components;
@tailwind utilities;

@import 'assets/app';
</style>

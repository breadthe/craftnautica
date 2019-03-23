<template>
  <section class="container mx-auto p-4">
    <div class="flex justify-center">
      <!--<Dashboard/>-->
      <router-link
          to="/sn"
          class="p-8 m-8 text-2xl border border-blue-darker hover:border-blue-dark"
      >
        Subnautica
      </router-link>
      <router-link
          to="/bz"
          class="p-8 m-8 text-2xl border border-blue-darker hover:border-blue-dark"
      >
        Below Zero
      </router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'home',
  components: {
    // Dashboard,
  },
};
</script>

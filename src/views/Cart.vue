<template>
  <section class="container mx-auto mt-4">
    <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mx-4">
      <h1>{{ fullDomainName }} Cart</h1>
      <span v-if="cart.length">{{ cart.length }} items</span>
    </div>

    <!--<div v-for="type in types" :key="type" class="">
      <type :type="type" :types="filterByType(type)"></type>
    </div>-->

  </section>
</template>

<script>
import util from '@/util';

export default {
  name: 'Cart',
  components: {
  },
  data: () => ({
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/cart/, ''), // strip out "cart" from "sncart"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    cart: vm => vm.$store.state.cart[vm.domain],
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

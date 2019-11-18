<template>
  <h1 class="logo flex items-center">
    <slot></slot>
    <span class="sub">{{ prefix }}</span><span class="nautica">{{ suffix }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    fullDomainName: {
      required: true,
      type: String,
    },
  },
  data: () => ({
  }),
  computed: {
    prefix: vm => (vm.fullDomainName === 'Subnautica' ? 'Sub' : 'Below'),
    suffix: vm => (vm.fullDomainName === 'Subnautica' ? 'nautica' : 'Zero'),
  },
};
</script>

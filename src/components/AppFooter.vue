<template>
  <footer
    class="mt-8 p-8 bg-black flex items-center"
  >
    <div class="beta">beta</div>
    {{ version }}
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  components: {
  },
  props: {
    version: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.beta {
  @apply border;
  @apply border-blue-dark;
  @apply bg-blue-dark;
  @apply rounded;
  @apply text-black;
  @apply p-1;
  @apply mr-2;
}
</style>

<template>
  <footer>
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
footer {
  @apply static;
  @apply pin-b;
  @apply mt-8;
  @apply p-8;
  @apply bg-black;
  @apply flex;
  @apply items-center;
}
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

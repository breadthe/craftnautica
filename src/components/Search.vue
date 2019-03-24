<template>
  <div class="flex items-center relative w-full max-w-sm">
    <input
        type="text"
        ref="searchBar"
        v-model="search"
        class="search flex-1 w-full sm:w-4/5 mt-4 sm:mt-0 ml-0 sm:ml-4"
        :placeholder="placeholder"
    >
    <button
      v-if="search"
      @click="search = ''"
      class="absolute pin-r mr-2 border-0 bg-transparent p-0 text-blue-darker"
    >
      <v-icon icon="x" color="blue-dark"></v-icon>
    </button>
  </div>
</template>

<script>
import util from '@/util';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Search',
  components: {
    VIcon,
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
    domain: vm => vm.$route.name.replace(/details/, ''), // strip out "details" from "sndetails"
    fullDomainName: vm => util.fullDomainName(vm.domain),
    search: {
      set(srcStr) { this.$store.dispatch('setSrcStr', srcStr); },
      get() { return this.$store.state.search; },
    },
    placeholder: (vm) => `Search ${vm.fullDomainName}... (Hit "/" to focus)`,
  },
  methods: {
    handleKeyPress: function (e) {
      switch (e.key) {
        case '/':
          e.preventDefault();
          this.$refs.searchBar.focus();
          break;
        case 'Escape':
          e.preventDefault();
          this.search = '';
          this.$refs.searchBar.blur();
          break;
        default: break;
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  button {
    margin-top:1px;
  }
</style>

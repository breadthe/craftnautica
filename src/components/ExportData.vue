<template>
  <section>
    <h2>Export</h2>
    <p>You can export your <strong>Cart</strong> and <strong>Inventory</strong> in JSON format and then restore them from the saved backup.</p>
    <p>The file is saved to your default Downloads directory.</p>

    <button class="flex items-center text-blue-dark p-2 border border-blue rounded hover:bg-blue" @click.stop="exportData()">
      <v-icon icon="download" color="blue-dark" title="Export all data" class="mr-2"></v-icon>
      Export
    </button>
  </section>
</template>

<script>
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    VIcon,
  },
  computed: {
    filename() {
      const date = new Date();
      const now = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}T${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

      return `craftnautica-data_${now}.json`;
    },
  },
  methods: {
    exportData: function () {
      const exportStr = JSON.stringify({
        cart: window.localStorage.getItem('cart'),
        inventory: window.localStorage.getItem('inventory'),
      });
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(exportStr)}`;

      const link = document.createElement('a');
      link.href = dataUri;
      link.style = 'visibility:hidden';
      link.download = this.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

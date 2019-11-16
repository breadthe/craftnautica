<template>
  <main class="container mx-4 sm:mx-auto mt-4">
    <h1>Settings</h1>

    <section>
      <h2>Export</h2>
      <p>You can export your <strong>Cart</strong> and <strong>Inventory</strong> in JSON format and then restore them from the saved backup.</p>
      <p>The file is saved to your default Downloads directory.</p>

      <button class="flex items-center text-blue-dark p-2 border border-blue rounded hover:bg-blue" @click.stop="exportData()">
        <v-icon icon="download" color="blue-dark" title="Export all data" class="mr-2"></v-icon>
        Export
      </button>
    </section>

    <section>
      <h2>Import</h2>
      <p>Import a previously saved JSON export of your data.</p>
      <p class="text-red">This will overwrite your existing <strong>Cart</strong> and <strong>Inventory</strong>!</p>

      <form id="fileImportForm">
        <label
          for="fileUploader"
          class="relative flex flex-col justify-center items-center mt-2 sm:mt-0 p-8 sm:p-4 border-2 rounded border-dashed w-full font-light text-lg text-center"
          :class="{
                    'border-red bg-red': error,
                    'border-blue-dark bg-blue-dark': draggingOver,
                    'border-blue-dark bg-blue-darker': !draggingOver,
                }"
        >
          <input
            id="fileUploader"
            name=""
            type="file"
            alt="Image upload"
            @change="readFile($event)"
            @dragenter="onDragenter"
            @dragleave="onDragleave"
            @drop="onDrop"
            class="absolute w-full inset-0 opacity-0 bg-green-100"
          >
        </label>
      </form>

      <div class="notification is-info" v-if="restoreMsg">
        <button class="delete" @click="restoreMsg = null"></button>
        <p>{{ restoreMsg }}</p>
      </div>

    </section>

    <section v-if="restoreConfirm">
      <div class="flex flex-col max-w-sm mx-auto my-4 bg-blue-darker p-4 rounded">
        <p>Are you sure you want to restore the following data?</p>

        <div class="flex flex-row justify-between mt-4">
          <button class="flex items-center text-blue-dark p-2" @click.stop="cancelImport()">
            <v-icon icon="x" color="blue-dark" title="Cancel restore data" class="mr-2"></v-icon>
            Cancel
          </button>

          <button class="flex items-center text-blue-dark p-2 border border-blue rounded hover:bg-blue" @click.stop="restoreData()">
            <v-icon icon="upload" color="blue-dark" title="Restore data" class="mr-2"></v-icon>
            Restore
          </button>
        </div>
      </div>

      <h2>Cart</h2>
      <div class="bg-blue-darker p-4 shadow-inner rounded overflow-auto font-mono max-w-full sm:mx-0 mx-4">
          {{ importedData.cart }}
      </div>

      <h2>Inventory</h2>
      <div class="bg-blue-darker p-4 shadow-inner rounded overflow-auto font-mono max-w-full sm:mx-0 mx-4">
          {{ importedData.inventory }}
      </div>

    </section>

  </main>
</template>

<script>
import Cart from '@/cart';
import Inventories from '@/inventories';
import VIcon from '@/components/VIcon.vue';

export default {
  name: 'Settings',
  components: {
    VIcon,
  },
  data() {
    return {
      importedFileName: '',
      importedData: null,
      restoreConfirm: false,
      restoreMsg: null,
      error: null,
      draggingOver: false,
    };
  },
  methods: {
    exportData: function () {
      const now = (new Date()).toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      const filename = `craftnautica-data_${now.replace(/\/|,|\s|:/gi, '-')}.json`; // 'YYYY-MM-DD_HH.mm.ss'
      const exportStr = JSON.stringify({
        cart: window.localStorage.getItem('cart'),
        inventory: window.localStorage.getItem('inventory'),
      });
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(exportStr)}`;

      const link = document.createElement('a');
      link.href = dataUri;
      link.style = 'visibility:hidden';
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    restoreData: function () {
      const cart = new Cart();
      cart.set(JSON.parse(this.importedData.cart));
      this.$store.commit('INIT_CART');

      const inventories = new Inventories();
      inventories.set(JSON.parse(this.importedData.inventory));
      this.$store.commit('INIT_INVENTORIES');

      this.restoreMsg = 'Data restored successfully';
      this.restoreConfirm = false;
      this.resetImportedData();
      setTimeout(() => { this.restoreMsg = null; }, 5000);
    },
    async readFile($event) { // async
      const file = $event.target.files[0];
      if (file) {
        this.importedFileName = file.name;
        const reader = new FileReader();

        reader.onload = await function (event) { // await
          this.importedData = JSON.parse(event.target.result);

          this.showImportedData();
        }.bind(this);

        reader.onerror = await function () { // await
          // handle file read error
        };

        await reader.readAsText(file); // await
      } else {
        this.resetImportedData();
      }
    },
    showImportedData() {
      this.restoreConfirm = true;
    },
    resetImportedData() {
      // Reset the file input explicitly; simply clearing the data won't reset it properly
      document.getElementById('fileImportForm').reset();
      this.importedFileName = '';
      this.importedData = null;
    },
    cancelImport() {
      this.restoreConfirm = false;
      this.resetImportedData();
    },
    onDragenter: function (e) {
      this.draggingOver = true;
    },
    onDragleave: function (e) {
      this.draggingOver = false;
    },
    onDrop: function (e) {
      this.draggingOver = false;
      this.error = null;
    },
  },
};
</script>

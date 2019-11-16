<template>
  <section class="border-b border-grey-darkest flex flex-col sm:flex-row my-8 pb-8">
    <h2 class="w-full sm:w-1/6">Import</h2>

    <div class="w-full sm:w-5/6">
      <p class="mb-4 mt-4 sm:mt-0">Import a previously saved JSON export of your data.</p>
      <p class="mb-4 text-red">This will overwrite your existing <strong>Cart</strong> and <strong>Inventory</strong>!</p>

      <form id="fileImportForm" v-show="!restoreConfirm && !restoredSuccessfully">
        <label
          for="fileUploader"
          class="relative flex flex-col justify-center items-center mt-2 sm:mt-0 p-8 sm:p-4 border-2 rounded border-dashed w-full font-light text-lg text-center"
          :class="{
                    'border-red bg-red': error,
                    'border-blue-dark bg-blue-dark': draggingOver,
                    'border-blue-dark bg-blue-darker': !draggingOver,
                }"
        >
          <span class="font-bold mb-4">Upload a file by clicking or dragging here</span>
          <span><strong>.json</strong> files only</span>

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

      <div
        v-if="restoredSuccessfully"
        class="mt-2 sm:mt-0 p-4 border-2 rounded border-dashed w-full font-light text-center text-2xl bg-green-darkest border-green-darker text-green-lightest"
      >
        Data restored successfully!
      </div>

      <!--  Restore confirmation  -->
      <section v-if="restoreConfirm">
        <div class="flex flex-col max-w-sm mx-auto my-4 mt-8 bg-blue-darker p-4 rounded">
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

        <h2 class="mt-8 p-4 bg-blue-darker rounded rounded-b-none border-b border-blue-darkest">Cart</h2>
        <div class="bg-blue-darker p-4 shadow-inner rounded rounded-t-none overflow-auto font-mono max-w-full">
          {{ importedData.cart }}
        </div>

        <h2 class="mt-8 p-4 bg-blue-darker rounded rounded-b-none border-b border-blue-darkest">Inventory</h2>
        <div class="bg-blue-darker p-4 shadow-inner rounded rounded-t-none overflow-auto font-mono max-w-full">
          {{ importedData.inventory }}
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Cart from '@/cart';
import Inventories from '@/inventories';
import VIcon from '@/components/VIcon.vue';

export default {
  components: {
    VIcon,
  },
  data() {
    return {
      importedFileName: '',
      importedData: null,
      restoreConfirm: false,
      restoredSuccessfully: false,
      error: null,
      draggingOver: false,
    };
  },
  computed: {
  },
  methods: {
    restoreData: function () {
      const cart = new Cart();
      cart.set(JSON.parse(this.importedData.cart));
      this.$store.commit('INIT_CART');

      const inventories = new Inventories();
      inventories.set(JSON.parse(this.importedData.inventory));
      this.$store.commit('INIT_INVENTORIES');

      this.restoredSuccessfully = true;
      this.restoreConfirm = false;
      this.resetImportedData();
      setTimeout(() => { this.restoredSuccessfully = false; }, 5000);
    },
    async readFile($event) { // async
      const file = $event.target.files[0];

      if (file && file.type === 'application/json') {
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

<template>
  <main class="container mx-auto p-4">

    <section class="text-xl mx-auto mt-4 leading-normal">
      <h1 class="logo text-5xl text-center"><span class="sub">Craft</span><span class="nautica">nautica</span></h1>
      <h2 class="text-blue font-light text-center">Subnautica & Subnautica: Below Zero crafting helper</h2>

      <p class="mt-8">
        Welcome to <span class="font-bold">Craftnautica</span>! After crashing-landing on 4546B you've had your work cut out for you, so why not enjoy a respite with our crafting helper?
      </p>

      <p class="mt-4">
        Pick a game to get started!
      </p>
    </section>

    <!-- Select game -->
    <section class="flex justify-around flex-col sm:flex-row mx-auto mt-4">
        <router-link
          to="/sn"
          class="flex flex-col items-center justify-center p-4 py-8 sm:w-1/2 text-center m-4 sm:m-8 border border-blue rounded hover:border-blue-dark hover:bg-blue-darker hover:text-blue-light"
        >
          <h1 class="logo text-4xl">
            <span class="sub">Sub</span><span class="nautica">nautica</span>
          </h1>
          <span class="mt-2 text-xl text-blue">The original game</span>
        </router-link>
        <router-link
          to="/bz"
          class="flex flex-col items-center justify-center p-4 py-8 sm:w-1/2 text-center m-4 sm:m-8 border border-blue rounded hover:border-blue-dark hover:bg-blue-darker hover:text-blue-light"
        >
          <h1 class="logo text-4xl text-blue-light">
            <span class="sub">Sub</span><span class="nautica">nautica</span> Below Zero
          </h1>
          <span class="mt-2 text-xl text-blue">The upcoming expansion</span>
        </router-link>
    </section>

    <!--  Features  -->
    <section class="features flex flex-wrap justify-around">
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f1 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Items database</span></dt>
          <dd class="ml-12 text-xl leading-normal">Quickly search in-game raw materials or crafted items.</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f2 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Component tree</span></dt>
          <dd class="ml-12 text-xl leading-normal">See at a glance the total amount of base components required to craft anything.</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f3 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Shopping list</span></dt>
          <dd class="ml-12 text-xl leading-normal">Create a shopping list of crafted items and see a grand total of all the raw materials required!</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f4 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Inventory management</span></dt>
          <dd class="ml-12 text-xl leading-normal">Manage your inventory by defining storage locations and assigning items and quantities.</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f6 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Separate lists</span></dt>
          <dd class="ml-12 text-xl leading-normal">Individual shopping lists and inventories for Subnautica and Below Zero.</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f5 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Your data</span></dt>
          <dd class="ml-12 text-xl leading-normal">No account needed. No data collection. All data is stored in your browser.</dd>
        </dl>
        <dl class="sm:w-1/3 p-8 flex flex-col sm:my-2">
          <dt class="f7 flex mb-2 font-bold text-blue text-2xl"><span class="ml-4">Data backup</span></dt>
          <dd class="ml-12 text-xl leading-normal">Backup your data by exporting it in CSV format, and restore it later.</dd>
        </dl>
    </section>
  </main>
</template>

<template>
  <main class="container mx-auto p-4">

    <div class="max-w-lg mx-auto mt-4 text-xl leading-normal">
      <p>
        Welcome to <span class="font-bold">Craftnautica</span>! After crashing-landing on 4546B you've had your work cut out for you, so why not enjoy a respite with our crafting helper?
      </p>
      <p class="mt-4">
        <ul class="features">
          <li class="f1">Quickly search a raw material or crafted item.</li>
          <li class="f2">See at a glance the total amount of base components required to craft it.</li class="f2">
          <li class="f3"><small class="text-xs border border-blue-dark rounded p-1">SOON</small> Create "shopping lists" of crafted items and see a grand total of all the raw materials required! 🔥 Useful when building a new base!</li>
          <li class="f4"><small class="text-xs border border-blue-dark rounded p-1">SOON</small> Manage your inventory by defining storage locations and assigning items and quantities. No more trying to remember "Uh how much Gold do I have in my Lifepod?".</li>
          <li class="f5">And more...</li>
        </ul>
      </p>
      <p class="mt-4">
        Pick a game to get started!
      </p>
    </div>

    <div class="flex flex-col justify-center max-w-sm mx-auto">
      <!--<Dashboard/>-->
      <router-link
          to="/sn"
          class="flex flex-col text-center p-8 m-8 border border-blue-dark rounded hover:border-blue-dark hover:bg-blue-darker hover:text-blue-light"
      >
        <h1 class="font-light text-3xl">Subnautica</h1>
        <span class="mt-2 text-blue-dark">The original game</span>
      </router-link>
      <router-link
          to="/bz"
          class="flex flex-col text-center p-8 m-8 border border-blue-dark rounded hover:border-blue-dark hover:bg-blue-darker hover:text-blue-light"
      >
        <h1 class="font-light text-3xl">Below Zero</h1>
        <span class="mt-2 text-blue-dark">The upcoming expansion</span>
      </router-link>
    </div>

  </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
};
</script>

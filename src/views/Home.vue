<template>
  <main class="container mx-auto p-4">

    <div class="max-w-lg mx-auto mt-4 text-xl leading-normal">
      <h1>Craftnautica</h1>
      <h2 class="text-blue font-light mb-4">The Subnautica and Subnautica: Below Zero crafting helper tool.</h2>

      <p>
        Welcome to <span class="font-bold">Craftnautica</span>! After crashing-landing on 4546B you've had your work cut out for you, so why not enjoy a respite with our crafting helper?
      </p>
      <p class="mt-4">
        <ul class="features">
          <li class="f1">Quickly search a raw material or crafted item.</li>
          <li class="f2">See at a glance the total amount of base components required to craft it.</li class="f2">
          <li class="f3">Create a shopping list of crafted items and see a grand total of all the raw materials required! 🔥 Useful when building a new base!</li>
          <li class="f4"><small class="text-xs border border-blue-dark rounded p-1">SOON</small> Manage your inventory by defining storage locations and assigning items and quantities. No more trying to remember "Uh how much Gold do I have in my Lifepod?".</li>
          <li class="f5">And more...</li>
        </ul>
      </p>
      <p class="mt-4">
        Pick a game to get started!
      </p>
    </div>

    <div class="flex flex-col justify-center max-w-sm mx-auto mt-4">
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

    <div class="flex flex-col justify-center max-w-lg mx-auto text-xl border border-red-darkest text-red-darkest bg-pink-light rounded p-4 mt-8 leading-normal">
      <h3>Known Issues</h3>
      <ul>
        <li>Most <strong>Below Zero</strong> items are missing. Not my main focus at the moment as the expansion is in flux, but I will continue to add them slowly, time permitting.</li>
        <li>Icons are missing. I'm aware how important they are but short of grabbing them from the wiki, I don't know an easy and ethical way to get a hold of them.</li>
        <li>Not very mobile-friendly. The main intent is to run the app in a desktop browser while playing the game, so there are broken/ugly things on mobile which are very low on my priority list. Eventually I do plan on making it work well on small screens.</li>
        <li>All items appear on one page. Currently brainstorming better ways to organize them but in the meantime the search works great. <strong>Tip:</strong> press "/" to focus the searchbar and start typing quickly.</li>
        <li>Upgrade recipes requiring an existing piece of equipment or module (such as vehicle depth modules, or oxygen tanks) will break down the components all the way down to the raw materials instead of showing the item that is upgraded as a component. Not a huge deal. Worst case is that you will have some extra raw mats left. It's on my to-do list but not a major priority.</li>
      </ul>
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

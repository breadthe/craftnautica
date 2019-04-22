<template>
  <main class="container mx-4 sm:mx-auto mt-4">
    <h1>Contact</h1>

    <p class="mt-4">We'll get back to you ASAP as possible!</p>

    <form
        name="contact"
        method="post"
        class="mt-8"
        netlify
    >
      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full">
          <input placeholder="Your Name" type="text" id="name" name="name" class="p-2" />
        </div>
      </div>
      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full">
          <input placeholder="Your Email" type="email" id="email" name="email" class="p-2" />
        </div>
      </div>
      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full">
          <textarea placeholder="Message" id="message" name="message" class="p-2 w-64 h-32"></textarea>
        </div>
      </div>
      <div class="text-right">
        <button
            type="submit"
            class="flex items-center text-blue-dark border border-blue p-2 rounded hover:bg-blue hover:text-blue-darkest"
        >Send</button>
      </div>
    </form>

  </main>
</template>

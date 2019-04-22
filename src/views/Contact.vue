<template>
  <main class="container mx-4 sm:mx-auto mt-4">
    <h1>Contact</h1>

    <p class="mt-4">We'll get back to you ASAP as possible!</p>

    <form
        name="contact"
        method="POST"
        action="/thanks"
        class="mt-8"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
      <input type="text" name="form-name" value="contact" class="hidden invisible" />

      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full max-w-xs">
          <label class="flex flex-col">
            <span class="mb-2">Name:</span>
            <input placeholder="Your Name" type="text" id="name" name="name" class="p-2" />
          </label>
        </div>
      </div>

      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full max-w-xs">
          <label class="flex flex-col">
            <span class="mb-2">Email:</span>
            <input placeholder="Your Email" type="email" id="email" name="email" class="p-2" />
          </label>
        </div>
      </div>

      <div
          class="flex justify-start pb-4"
      >
        <div class="w-full max-w-xs">
          <label class="flex flex-col">
            <span class="mb-2">Message:</span>
            <textarea placeholder="Message" id="message" name="message" class="p-2 h-32"></textarea>
          </label>
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

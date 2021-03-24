<template>
  <div class="contact-container">
    <h1 class="contact-form-header">Contact (Work in progress)</h1>
    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="contact-form"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="contact-form-section">
        <label for="name" class="contact-form-label">Name</label>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Enter your name..."
          class="contact-form-text-field"
        />
      </div>
      <div class="contact-form-section">
        <label for="email" class="contact-form-label">Email</label>
        <input
          type="text"
          name="email"
          v-model="email"
          placeholder="Enter your email..."
          class="contact-form-text-field"
        />
      </div>
      <div class="contact-form-section">
        <label for="name" class="contact-form-label">Message</label>
        <textarea
          name="message"
          v-model="message"
          placeholder="Send me a message..."
          class="contact-form-text-field"
        />
      </div>

      <button class="contact-form-submit">Submit</button>
    </form>
    <p class="social-links">
      Alternatively, you can visit me on
      <a href="https://www.linkedin.com/in/sam-hookstra-686b741a5">LinkedIn</a>
    </p>

    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import "@/styles/contact.css";

export default {
  title: "Sam Hookstra Portfolio | Contact",
  data: function () {
    return {
      name: "Sam",
      email: "email@email.com",
      message: "",
    };
  },
};
</script>

<style>
</style>
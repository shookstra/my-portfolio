<template>
  <div class="contact-container">
    <h1 class="contact-form-header">Contact (Work in progress)</h1>
    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="contact-form"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <div class="contact-form-section">
        <label for="name" class="contact-form-label">Name</label>
        <input
          type="text"
          name="name"
          v-model="form.name"
          placeholder="Enter your name..."
          class="contact-form-text-field"
        />
      </div>
      <div class="contact-form-section">
        <label for="email" class="contact-form-label">Email</label>
        <input
          type="text"
          name="email"
          v-model="form.email"
          placeholder="Enter your email..."
          class="contact-form-text-field"
        />
      </div>
      <div class="contact-form-section">
        <label for="name" class="contact-form-label">Message</label>
        <textarea
          name="message"
          v-model="form.message"
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

    <p>{{ form.name }}</p>
    <p>{{ form.email }}</p>
    <p>{{ form.message }}</p>
  </div>
</template>

<script>
import axios from "axios";
import "@/styles/contact.css";

export default {
  title: "Sam Hookstra Portfolio | Contact",
  data: function () {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form,
        }),
        axiosConfig
      );
    },
  },
};
</script>

<style>
</style>
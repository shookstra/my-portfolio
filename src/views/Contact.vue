<template>
  <div class="contact-container">
    <h1 class="contact-form-header">Contact (Work in progress)</h1>
    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
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
        <!-- name error section -->
        <transition
          name="name-error-message-animation"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div v-if="errors.name" class="submit-error-container">
            <p class="submit-error-message">{{ errors.name }}</p>
            <button
              class="close-button"
              type="button"
              @click="errors.name = ''"
            >
              &#10799;
            </button>
          </div>
        </transition>
      </div>
      <div class="contact-form-section">
        <label for="email" class="contact-form-label">Email</label>
        <input
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Enter your email..."
          class="contact-form-text-field"
        />
        <!-- email error section -->
        <transition
          name="email-error-message-animation"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div v-if="errors.email" class="submit-error-container">
            <p class="submit-error-message">{{ errors.email }}</p>
            <button
              class="close-button"
              type="button"
              @click="errors.email = ''"
            >
              &#10799;
            </button>
          </div>
        </transition>
      </div>
      <div class="contact-form-section">
        <label for="name" class="contact-form-label">Message</label>
        <textarea
          name="message"
          v-model="form.message"
          placeholder="Send me a message..."
          class="contact-form-text-field"
        />
        <!-- Message Error section -->
        <transition
          name="error-message-animation"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <div v-if="errors.message" class="submit-error-container">
            <p class="submit-error-message">{{ errors.message }}</p>
            <button
              class="close-button"
              type="button"
              @click="errors.message = ''"
            >
              &#10799;
            </button>
          </div>
        </transition>
      </div>

      <transition
        name="error-message-animation"
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
      >
        <div v-if="errors.request" class="submit-error-container">
          <p class="submit-error-message">{{ errors.request }}</p>
          <button
            class="close-button"
            type="button"
            @click="errors.request = ''"
          >
            &#10799;
          </button>
        </div>
      </transition>
      <button class="contact-form-submit" @click="validateInputs">
        Submit
      </button>
    </form>
    <p class="social-links">
      Alternatively, you can visit me on
      <a href="https://www.linkedin.com/in/sam-hookstra-686b741a5">LinkedIn</a>
    </p>
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
      errors: {
        name: "",
        email: "",
        message: "",
        request: "",
      },
    };
  },
  methods: {
    validateInputs() {
      if (!this.form.name) {
        this.errors.name = "Please enter your name.";
      }
      if (!this.form.email) {
        this.errors.email = "Please enter your email.";
      }
      if (!this.form.message) {
        this.errors.message = "Please enter a message.";
      }
    },
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
      axios
        .post(
          "/",
          this.encode({
            "form-name": "ask-question",
            ...this.form,
          }),
          axiosConfig
        )
        .then((response) => {
          console.dir(response);
        })
        .catch((error) => {
          console.error(error.message);
          this.errors.request = error.message;
        });
    },
  },
};
</script>

<style>
</style>
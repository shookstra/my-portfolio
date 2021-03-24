<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <transition
      name="router-anim"
      enter-active-class="animated fadeInLeftBig"
      leave-active-class="animated fadeOutLeftBig"
    >
      <router-view />
    </transition>
    <div class="footer">
      <button class="hamburger-menu" @click="footerToggled = !footerToggled">
        <span class="hamburger-menu-bar"></span>
        <span class="hamburger-menu-bar"></span>
        <span class="hamburger-menu-bar"></span>
      </button>
      <transition
        name="router-anim"
        enter-active-class="animated fadeInRightBig"
        leave-active-class="animated fadeOutRightBig"
      >
        <div v-if="footerToggled" class="footer-content">
          <button
            class="close-button"
            type="button"
            @click="footerToggled = !footerToggled"
          >
            &#10799;
          </button>
          <p>
            <a href="https://github.com/shookstra/my-portfolio" target="_blank"
              >Created</a
            >
            by me using Vue.js
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import "@/styles/global.css";
export default {
  data() {
    return {
      footerToggled: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>

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
  </div>
</template>

<script>
import "@/styles/global.css";
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>

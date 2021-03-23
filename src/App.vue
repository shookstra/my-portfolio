<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #2b2e4a;
  height: 100vh;
  padding: 0;
  margin: 0;
  /* border: 5px solid blue; */
}

#app {
  font-family: "Lexend", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d3d3d3;
  height: 100%;
  position: relative;
  /* border: 5px solid yellow; */
}

#nav {
  padding: 15px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 2;
  /* border: 1px solid blue; */
}

#nav a {
  font-weight: bold;
  color: #d3d3d3;
  padding: 10px 25px;
  text-decoration: none;
  background-color: #2b2e4a;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.25),
    15px 15px 25px 0px rgba(0, 0, 0, 0.1);
  border: 3px solid transparent;
}

#nav a:nth-child(1) {
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  background-color: #bbe1fa;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.35),
    15px 15px 25px 0px rgba(0, 0, 0, 0.2);
  color: #2b2e4a;
  border: 3px solid #2b2e4a;
}

@media only screen and (max-width: 1200px) {
  #nav {
    margin: 0 auto;
    justify-content: center;
  }
}
</style>

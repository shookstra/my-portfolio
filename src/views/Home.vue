<template>
  <div class="home">
    <div class="home-content-container">
      <h1 class="home-header">Sam Hookstra</h1>
      <h2>Software Engineer</h2>
      <p class="home-page-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus totam
        excepturi vel animi aut libero ut laboriosam possimus non consectetur
        nisi quis eum, maiores saepe distinctio necessitatibus exercitationem
        dignissimos itaque? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Ex eveniet tenetur minima explicabo. Corporis laudantium fugit
        deserunt, repellendus fuga neque temporibus mollitia, sint possimus
        sapiente animi tempora. Architecto, dignissimos fugiat.
      </p>
    </div>
    <div class="headshot-container">
      <img src="../assets/headshot.jpeg" height="500" class="headshot" />
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import "@/styles/home.css";

// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

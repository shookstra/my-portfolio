<template>
  <div class="projects-container">
    <ul class="project-list">
      <h1 class="mb-10 projects-header">Projects</h1>
      <div class="bar"></div>
      <li class="project-card">
        <a
          href="https://risk.optimized-systems.com/Controller.php"
          class="project-card-header h2 mb-5"
          >COVID Mitigation Matrix</a
        >
        <p>
          A dashboard that allows businesses to view infographics regarding the
          risks facilities and buildings face. It allows a user to enter details
          about their building or select a generic building type, receive a risk
          rating based on input, and finally generate some steps to mitigate
          risks. The site logic and structure written entirely by myself using
          PHP on the backend and plain HTML, JavaScript, and CSS on the
          frontend.
        </p>
        <h3 class="project-card-subheader">Features</h3>
        <ul class="project-feature-list">
          <li>Enter details about your building and receive a risk rating.</li>
          <li>
            View steps to mitigate the risk to your building and its occupants.
          </li>
          <li>
            Read details about which precautions are more effective and why.
          </li>
        </ul>
      </li>
      <li class="project-card">
        <h2>Pantry Stock</h2>
        <p>
          A work in progress site where users can keep tabs on items in their
          pantry. The project is co-written by myself and friend
          <a href="https://www.linkedin.com/in/cperault/"
            >Christopher Perault</a
          >
          using a combination of React.js frontend, a Node.js with Express
          backend, and a SQL database.
        </p>
        <h3 class="project-card-subheader">Features</h3>
        <ul class="project-feature-list">
          <li>
            View a list of items in your pantry in a table format with the
            ability to sort based on fields.
          </li>
          <li>A user can create, edit, delete, items in their pantry.</li>
          <li>Search for items in your pantry using keywords.</li>
          <li>Create a list of items needed on your next trip to the store.</li>
        </ul>
      </li>
      <li class="project-card">
        <a
          href="https://mystartpage.netlify.app/"
          class="project-card-header h2 mb-5"
          >My-Start-Page</a
        >
        <p>
          Another work in progress site, but one that is functional, simple, and
          elegant. This project is a start page written in Vue.js that allows
          users to create bookmarks and sort them based on categories. The page
          also displays basic information like the time, your name (optional),
          and a convenient search bar for browsing the web. I was inspired to
          attempt my own after seeing many others out there creating unique and
          interesting start pages.
        </p>
        <h3 class="project-card-subheader">Features</h3>
        <ul class="project-feature-list">
          <li>
            Create a bookmark and categorize them for easy, organized
            navigation.
          </li>
          <li>
            Search bar for a convenient way to find the answers to all your
            questions.
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import "@/styles/global.css";
import "@/styles/projects.css";

export default {
  title: "Sam Hookstra Portfolio | Projects",
};
</script>
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <header>
      <Navbar />
    </header>
    <LandingPage />
   
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Card from "./components/Card.vue";
import LandingPage from "./components/pages/LandingPage";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    LandingPage,
    Navbar
  },
};
</script>

<style>
html{
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */

}


</style>

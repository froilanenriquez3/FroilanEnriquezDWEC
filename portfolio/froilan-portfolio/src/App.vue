<template>
  <div id="app"> 
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <header>
      <Navbar />
    </header>
   

    <LoadingPage id="loading" v-if="!loaded" />
   
    <LandingPage id="landing" v-if="loaded" />
   
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Card from "./components/Card.vue";
import LandingPage from "./components/pages/LandingPage";
import LoadingPage from "./components/pages/LoadingPage";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    LandingPage,
    LoadingPage,
    Navbar
  },
  data() {
    return {
       loaded: false
    } 
  },
  mounted (){
    setTimeout(()=> this.loaded = true, 3000)
  }
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
  background-color: #00AEDC;
}

#landing{
  animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>

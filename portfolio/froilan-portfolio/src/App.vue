<template>
  <div id="app"> 
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <header>
      <Navbar />
    </header>
    <LoadingPage id="loading" v-if="page == 'loading' " />
    <LandingPage id="landing" v-if="page == 'landing' " />
   
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
       loaded: false,
       page: "loading"
    } 
  },
  mounted (){
    setTimeout(()=> this.page = 'landing', 3000)
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
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
  overflow: hidden
}

#landing{
  animation: fadeIn 5s;
}
header{
  box-sizing: border-box;
  width: 100vw;
}
.nav{
  padding: 0px;
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

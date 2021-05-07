<template>
  <div id="landingPage">
    <img src="../../assets/img/grayplane.svg" alt="" id="plane" />
    <!-- <div id="plane">
      <font-awesome-icon icon="fighter-jet" size="10x" class="fa-rotate-270"></font-awesome-icon>
    </div> -->
    <main>
      <SafetyVideo />

    <!-- <section id="blank"></section> -->

      <section id="markerOne" >
        <Card />
         <Card />
      </section>
      <section></section>
      <section id="markerTwo">
         <Card />
         <Card />
      </section>
      <section></section>
      <section id="markerThree">
         <Card />
         <Card />
      </section>

      <Email />
    </main>

    <!-- <footer id="footer">
      <div class="mt-5">
        Icons made by <a href="" title="monkik">monkik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >

        <a href="https://www.freepik.com/vectors/background">Background vector created by starline - www.freepik.com</a>
      </div>
    </footer> -->
  </div>
</template>
<script>
import Card from "../Card.vue";
import SafetyVideo from "../SafetyVideo.vue";
import Email from "../Email.vue";

export default {
  setup() {},
  components: {
    Card,
    Email,
    SafetyVideo,

  },
};
</script>
<style scoped>
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 12vh;
  background-image: url("../../assets/img/sky.jpg");
  background-color: #cccccc;
  background-size: cover; 

}
#plane {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1) ;
  font-size: 30px;
  width: 30vw;
  /* background-color: cyan; */

}
section {
  margin: 1%;
  padding-top: 15vh;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 50vh;
  /* background-color: cyan; */
}
#blank {
  height: 5vh;
}


</style>
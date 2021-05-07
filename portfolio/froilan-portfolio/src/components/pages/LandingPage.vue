<template>
  <div id="landingPage">
    <img src="../../assets/img/plane.svg" alt="" id="plane" />
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
    </main>

    <footer id="footer">
      <div class="mt-5">
        Icons made by <a href="" title="monkik">monkik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </footer>
  </div>
</template>
<script>
import Card from "../Card.vue";
import SafetyVideo from "../SafetyVideo.vue";

export default {
  setup() {},
  components: {
    Card,
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
}
#plane {
  position: fixed;
  width: 30vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1);
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
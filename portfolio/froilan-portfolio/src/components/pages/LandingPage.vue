<template>
  <div id="landingPage">
    <img src="../../assets/img/grayplane.svg" alt="" id="plane" />
    <!-- <div id="plane">
      <font-awesome-icon icon="fighter-jet" size="10x" class="fa-rotate-270"></font-awesome-icon>
    </div> -->
    <main>
      <span id="about"></span>
      <SafetyVideo />

      <span id="skills"></span>

      <section >
        <div data-aos="fade-right" data-aos-duration="1000"><Card /></div>
        <div data-aos="fade-left" data-aos-duration="1000"><Card /></div>
      </section>

       <span id="projects"></span>

      <span id="contact"></span>
      <Email />
    </main>

    <footer id="footer">
      <div class="mt-1 mb-1">
        Icons made by <a href="" title="monkik">monkik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
        <br />
        Background vector created by starline
        <a href="https://www.freepik.com/vectors/background">
          www.freepik.com</a
        >
      </div>
    </footer>
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
  margin-top: 10vh;
  background-image: url("../../assets/img/sky.jpg");
  background-color: #cccccc;
  background-size: cover;
}
#plane {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1);
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
  /* background-color: cyan; */
}
#blank {
  height: 5vh;
}
span {
  width: 100vw;
  /* border: solid black; */
  margin-bottom: 10vh;
}
#about {
  margin-bottom: 0;
}
</style>
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

      <section id="markerOne" @mouseover="fillBars('frontbars')">
        <div data-aos="fade-right" data-aos-duration="1000">
          <FrontEndCard />
        </div>
        <button
          class="btn btn-secondary navBtn"
          id="btnFront"
          @click="scrollSection('markerTwo'), fillBars('backbars')"
        >
          Next stop!
        </button>

        <div data-aos="fade-left" data-aos-duration="1000">
          <FrontEndCard2 />
        </div>
      </section>

      <section id="markerTwo" @mouseover="fillBars('backbars')">
        <div data-aos="fade-up" data-aos-duration="750">
          <BackEndCard />
        </div>
        <button
          class="btn btn-secondary navBtn"
          id="btnBack"
          @click="scrollSection('markerThree')"
        >
          Next stop!
        </button>

        <div data-aos="fade-up" data-aos-duration="750">
          <BackEndCard2 />
        </div>
      </section>

      <span id="projects"></span>
      <section id="markerThree"></section>

      <span id="contact"></span>
      <section>
        <Email />
      </section>
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
// import Card from "../Card.vue";
import BackEndCard from '../BackEndCard';
import BackEndCard2 from '../BackEndCard2';
import Email from "../Email.vue";
import FrontEndCard from "../FrontEndCard.vue";
import FrontEndCard2 from "../FrontEndCard2.vue";
import SafetyVideo from "../SafetyVideo.vue";

export default {
  setup() {},
  components: {
    // Card,
    BackEndCard,
    BackEndCard2,
    Email,
    FrontEndCard,
    FrontEndCard2,
    SafetyVideo,
  },
  methods: {
    fillBars(className) {
      let vals = [];
      switch(className){
        case 'frontbars':
            vals = ["90%", "85%", "75%", "65%", "95%", "55%", "80%"];
          break;
          case 'backbars':
              vals = ["95%", "92%", "87%", "60%", "50%", "50%"]; 
            break;
      }
      let bars = document.getElementsByClassName(className);

      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = vals[i];
        }, 500);
      });
    },
    emptyBars() {
      let bars = document.getElementsByClassName("progress-bar");

      bars.forEach((bar) => {
        bar.style.width = "0%";
      });
    },
    scrollSection(id) {
      document
        .getElementById(id)
        .scrollIntoView({ block: "start", inline: "nearest" });
    },
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
  padding-top: 10vh;
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
  /* margin-bottom: 10vh; */
}
.navBtn {
  height: 5vh;
  margin-top: 70vh;
  z-index: 1;
}

#about {
  margin-bottom: 0;
}
</style>
<template>
  <div id="landingPage">
    <header>
      <Navbar :textArray="textArray" />
    </header>

    <img src="../../assets/img/grayplane.svg" alt="" id="plane" />
    <!-- <div id="plane">
      <font-awesome-icon icon="fighter-jet" size="10x" class="fa-rotate-270"></font-awesome-icon>
    </div> -->
    <main>
      <SafetyVideo />

      <span id="skillsSec" class="secSpan"></span>

      <section id="markerOne" @mouseover="fillBars('frontbars')">
        <div data-aos="fade-right" data-aos-duration="1000">
          <FrontEndCard class="col-sm-12" />
        </div>
        <div>
          <div class="card-header bg-primary text-white mt-1 secLabel">
            <h5 class="mt-2">FRONT END</h5>
          </div>
          <button
            class="btn btn-secondary navBtn"
            id="btnFront"
            @click="scrollSection('markerTwo'), fillBars('backbars')"
          >
            <font-awesome-icon icon="plane" rotation="90" />
            <span class="translate" id="next1"> Next stop! </span>
            <font-awesome-icon icon="plane" rotation="90" />
          </button>
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <FrontEndCard2 />
        </div>
      </section>

      <section id="markerTwo" @mouseover="fillBars('backbars')">
        <div data-aos="fade-up" data-aos-duration="750">
          <BackEndCard />
        </div>
        <div>
          <div class="card-header bg-info text-white mt-1 secLabel">
            <h5 class="mt-2">BACK END</h5>
          </div>
          <button
            class="btn btn-secondary navBtn"
            id="btnBack"
            @click="scrollSection('markerThree')"
          >
            <font-awesome-icon icon="plane" rotation="90" />
            <span class="translate" id="next2"> Next stop! </span>
            <font-awesome-icon icon="plane" rotation="90" />
          </button>
        </div>

        <div data-aos="fade-up" data-aos-duration="750">
          <BackEndCard2 />
        </div>
      </section>

      <span id="projects" class="secSpan"></span>

      <section id="markerThree">
        <ProjectCard />
        <button
          class="btn btn-secondary navBtn"
          id="btnProject"
          @click="scrollSection('markerFour')"
        >
          <font-awesome-icon icon="plane" rotation="90" />
          <span class="translate" id="next3"> Next stop! </span>
          <font-awesome-icon icon="plane" rotation="90" />
        </button>
      </section>

      <span id="softSkillsSec" class="secSpan"></span>

      <section id="markerFour">
        <div data-aos="fade-up-right" data-aos-duration="750">
          <SoftSkills />
        </div>
        <div>
          <div class="card-header bg-info text-white mt-1 secLabel">
            <h5 class="mt-2">SOFT SKILLS</h5>
          </div>
          <button
            class="btn btn-secondary navBtn"
            id="btnSoft"
            @click="scrollSection('markerFive')"
          >
            <font-awesome-icon icon="plane" rotation="90" />
            <span class="translate" id="next4"> Next stop! </span>
            <font-awesome-icon icon="plane" rotation="90" />
          </button>
        </div>

        <div data-aos="fade-up-left" data-aos-duration="750">
          <SoftSkills2 />
        </div>
      </section>

      <span id="aboutSec" class="secSpan"></span>
      <section id="markerFive">
        <div data-aos="zoom-out" data-aos-duration="500">
          <AboutMeCard />
        </div>

        <button
          class="btn btn-secondary navBtn"
          id="btnAbout"
          @click="scrollSection('markerSix')"
        >
          <font-awesome-icon icon="plane-arrival"  />
          <span class="translate" id="final"> Final stop! </span>
          <!-- <font-awesome-icon icon="plane-arrival"  /> -->
        </button>
      </section>

      <span id="contact" class="secSpan"></span>
      <section id="markerSix">
        <Email />
      </section>
    </main>

    <footer id="footer" class="bg-white p-1">
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
import AboutMeCard from "../AboutMeCard";
import BackEndCard from "../BackEndCard";
import BackEndCard2 from "../BackEndCard2";
import Email from "../Email.vue";
import FrontEndCard from "../FrontEndCard.vue";
import FrontEndCard2 from "../FrontEndCard2.vue";
import Navbar from "../Navbar.vue";
import ProjectCard from "../ProjectCard.vue";
import SafetyVideo from "../SafetyVideo.vue";
import SoftSkills from "../SoftSkills.vue";
import SoftSkills2 from "../SoftSkills2.vue";

export default {
  setup() {},
  components: {
    // Card,
    AboutMeCard,
    BackEndCard,
    BackEndCard2,
    Email,
    FrontEndCard,
    FrontEndCard2,
    Navbar,
    ProjectCard,
    SafetyVideo,
    SoftSkills,
    SoftSkills2,
  },
  data() {
    return {
      textArray: [],
    };
  },
  methods: {
    fillBars(className) {
      let vals = [];
      switch (className) {
        case "frontbars":
          vals = [
            "90%",
            "95%",
            "75%",
            "80%",
            "85%",
            "65%",
            "95%",
            "55%",
            "50%",
            "70%",
          ];
          break;
        case "backbars":
          vals = ["95%", "92%", "87%", "90%",
                "60%", "50%", "50%", "70%"];
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
  mounted() {
    console.log("Landing page mounted");
    this.textArray = document.getElementsByClassName("translate");
  },
};
</script>
<style scoped>
#landingPage {
  position: relative;
  height: 100%;
  overflow-y: scroll;
}
main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5vh;
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
span.secSpan {
  width: 100vw;
  padding-top: 15vh;
  /* border: solid black; */
  /* margin-bottom: 10vh; */
}
.navBtn {
  position: relative;
  /* height: 7vh; */
  /* margin-top: 65vh; */
  z-index: 1;
}

#about {
  margin-bottom: 0;
}
#btnFront {
  margin-top: 130vh;
}

#btnBack {
  margin-top: 100vh;
}
#btnProject {
  margin-top: 1%;
}
#btnAbout{
  margin-top: 1%;
  font-size: 2em;
  height: fit-content;
}
#btnSoft {
  margin-top: 88vh;
  /* font-size: 1.5em; */
}
.secLabel {
  position: relative;
  width: 20vw;
  z-index: 1;
}
#markerThree,
#markerFive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;
}

</style>
<template>
  <div id="landingPage">
    <header>
      <!-- <Navbar :textArray="textArray" /> -->
      <NewNavbar :textArray="textArray" />
    </header>

    <img src="../../assets/img/grayplane.svg" alt="Plane" id="plane" class="" />

    <!-- <div id="plane">
      <font-awesome-icon icon="fighter-jet" size="10x" class="fa-rotate-270"></font-awesome-icon>
    </div> -->

    <main>
      <SafetyVideo class=" col-md-10 col-lg-7" />

      <span id="skillsSec" class="secSpan"></span>

      <section id="markerOne" class="row" @mouseover="fillBars('frontbars')">
        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <FrontEndCard />
        </div>

        <div class="col-md-4 col-lg-2 middle-bit ">
          <div class="card-header bg-primary text-white mt-1 secLabel">
            <h5 class="mt-2">FRONT END</h5>
          </div>
          <button
            class="btn btn-secondary navBtn middleBtn"
            id="btnFront"
            @click="scrollSection('markerTwo'), fillBars('backbars')"
          >
            <font-awesome-icon icon="plane" rotation="90" />
            <span class="translate" id="next1"> Next stop! </span>
            <font-awesome-icon icon="plane" rotation="90" />
          </button>
        </div>

        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <FrontEndCard2 />
        </div>
      </section>

      <section id="markerTwo" class="row" @mouseover="fillBars('backbars')">
        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <BackEndCard />
        </div>

        <div class="col-md-4 col-lg-2 middle-bit">
          <div class="card-header bg-info text-white mt-1 secLabel">
            <h5 class="mt-2">BACK END</h5>
          </div>
          <button
            class="btn btn-secondary navBtn "
            id="btnBack"
            @click="scrollSection('markerThree')"
          >
            <font-awesome-icon icon="plane" rotation="90" />
            <span class="translate" id="next2"> Next stop! </span>
            <font-awesome-icon icon="plane" rotation="90" />
          </button>
        </div>

        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <BackEndCard2 />
        </div>
      </section>

      <span id="projects" class="secSpan"></span>

      <section id="markerThree">
        <ProjectCard class="col-10" />
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

      <section id="markerFour" class="row">
        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <SoftSkills />
        </div>

        <div class="col-md-4 col-lg-2 middle-bit">
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

        <div
          class="cardHolder col-md-11 col-lg-5 mb-3"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <SoftSkills2 />
        </div>
      </section>

      <span id="aboutSec" class="secSpan"></span>
      <section id="markerFive">
        <div
          class="cardHolder row"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <AboutMeCard class="col-md-10 col-lg-6" />
        </div>

        <button
          class="btn btn-secondary navBtn"
          id="btnAbout"
          @click="scrollSection('markerSix')"
        >
          <font-awesome-icon icon="plane-arrival" />
          <span class="translate" id="final"> Final stop! </span>
          <!-- <font-awesome-icon icon="plane-arrival"  /> -->
        </button>
      </section>

      <span id="contact" class="secSpan"></span>
      <section id="markerSix" >
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
// import Navbar from "../Navbar.vue";
import NewNavbar from "../NewNavbar.vue";
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
    // Navbar,
    NewNavbar,
    ProjectCard,
    SafetyVideo,
    SoftSkills,
    SoftSkills2,
  },
  data() {
    return {
      textArray: [],
      sectionArr: [
        { id: "safetyVideo", link: "intro" },
        { id: "markerOne", link: "skills" },
        // { id: "markerTwo", link: "skills" },
        { id: "markerThree", link: "projectsText" },
        { id: "markerFour", link: "softSkillsLink" },
        { id: "markerFive", link: "aboutMe" },
        { id: "markerSix", link: "contactMe" },
      ],
      activeLink: null,
      activeLinkId: "intro",
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
          vals = ["95%", "92%", "87%", "90%", "60%", "50%", "50%", "70%"];
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
    initScrollSpy() {
      // console.log("Init scroll spy");
      this.sectionsArr.forEach((sec) => {
        let section = document.getElementById(sec.id);
        section.addEventListener("mouseover", () => {
          this.workingScrollSpy(sec);
        });
        section.addEventListener("mouseout", () => {
          this.revertColor(sec);
        });
      });
    },
    workingScrollSpy(section) {
      this.activeLink = document.getElementById(section.link);
      this.activeLink.className = "nav-link translate text-dark";
    },
    revertColor(section) {
      this.activeLink = document.getElementById(section.link);
      this.activeLink.className = "nav-link translate text-white";
    },
    initScroll() {
      let sections = [];
      const sectionMargin = 200;
      let menu_links = document.querySelectorAll(".customScroll");

      let currentActive = 0;

      this.sectionArr.forEach((sec) => {
        let section = document.getElementById(sec.id);
        sections.push(section);
      });

      const makeActive = (link) =>
        (menu_links[link].className =
          "customScroll nav-link translate text-white active");
      const removeActive = (link) => {
        link.className = "customScroll nav-link translate text-white ";
      };

      const removeAllActive = () => {
        menu_links.forEach((link) => removeActive(link));
      };

      window.addEventListener("scroll", () => {
        const current =
          sections.length -
          [...sections]
            .reverse()
            .findIndex(
              (section) => window.scrollY >= section.offsetTop - sectionMargin
            ) -
          1;
        if (current !== currentActive) {
          removeAllActive();
          currentActive = current;
          makeActive(current);
        }
      });
    },
  },
  mounted() {
    // console.log("Landing page mounted");
    this.textArray = document.getElementsByClassName("translate");
    // this.initScrollSpy();
    this.initScroll();
  },
};
</script>
<style scoped>
#landingPage {
  /* position: relative; */
  /* height: auto; */
  /* width: 100%; */
  overflow-y: none;
}

main {
  /* position: relative; */
  /* height: 100%; */
  width: 100%;
  /* overflow-y: none; */

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 5vh;
  background-image: url("../../assets/img/sky.jpg");
  background-color: #cccccc;
  background-size: cover;

  /* padding-top: 25vh; */

  /* z-index: -2; */
}

#plane {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1);
  font-size: 30px;
  /* max-width: 30vw; */
  max-height: 70vh;
  z-index: 1;
  /* background-color: cyan; */
}
section {
  margin: 1%;
  padding-top: 10vh;
  display: flex;
  justify-content: center;
  /* width: 100vw; */
  /* z-index: -1; */
  /* background-color: cyan; */
}
#blank {
  height: 20vh;
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

#btnProject {
  margin-top: 1%;
}
#btnAbout {
  margin-top: 1%;
  font-size: 2em;
  height: fit-content;
}

.secLabel {
  position: relative;
  /* width: 20vw; */
  z-index: 1;
}

/* #markerThree{
  padding-top: 35vh;
} */

#markerThree,
#markerFive {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* z-index: 2; */
}

.cardHolder {
  z-index: 2;
  display: flex;
  justify-content: center;
}

a.nav-link,
a.active {
  /* border-bottom: solid white 3px; */
  border-radius: 5px;
  background-color: #369;
}

.middle-bit {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: middle;
  /* padding: 1%; */
  padding-right: 1%;
  padding-left: 1%;
  padding-bottom: 1%;
}


#skillsSec{
  height: 50vh;
} 

#markerSix{
  margin-bottom: 27vh;
}

/* Large screen styles */
@media (min-width: 768px) {
  #skillsSec {
    height: 10vh;
  }

  main{
    padding-top: 0vh;
  }

}
</style>
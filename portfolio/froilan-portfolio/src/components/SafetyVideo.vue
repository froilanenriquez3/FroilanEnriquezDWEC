<template>
  <div class="card bg-white text-black mt-5" id="safetyVideo">

    <div class="card-header bg-info text-white">
      <h2 class="card-title mt-2 translate" id="preFlight">
        Before your flight...
      </h2>
    </div>

    <div class="card-body row" id="videoRow">
      <!-- <div class="row"> -->
      <div class="col-md-12 col-lg-3 mb-5" id="controls1">
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="introduction"
          @click="playSection(0, 8)"
        >
          Introduction
        </button>
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="aboutMe2"
          @click="playSection(8.1, 23)"
        >
          About Me
        </button>
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="language"
          @click="playSection(23, 40)"
        >
          Languages
        </button>
      </div>

      <div class="col-md-12 col-lg-6">
        <p class="card-text translate" id="clickABtn">
          Click a button to go to a specific section
        </p>
        <div v-if="!videoReady" id="spinner">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <video
          v-show="videoReady"
          id="myVideo"
          @timeupdate="changeProgress($event)"
          @canplay="changeProgress($event)"
        >
          <source src="../assets/videos/video.mp4" type="video/mp4" />
          <!-- Your navigator does not support this video -->
        </video>

        <div id="controls">
          <button
            class="btn btn-primary m-1"
            id="playButton"
            @click="playVideo"
          >
            <span v-show="play === true">
              <font-awesome-icon icon="play" size="2x"></font-awesome-icon>
            </span>
            <span v-show="play === false">
              <font-awesome-icon icon="pause" size="2x"></font-awesome-icon>
            </span>
          </button>

          <div
            id="videoBar"
            @click="setProgress($event)"
            class="progress-range bg-primary ml-1"
          >
            <div id="videoBarBar" class="progress-bar bg-info"></div>
          </div>
          <button @click="toggleMute" class="btn btn-primary m-1">
            <font-awesome-icon
              v-show="mute === true"
              id="muteIcon"
              icon="volume-mute"
              size="2x"
            ></font-awesome-icon>
            <font-awesome-icon
              v-show="mute === false"
              id="muteIcon"
              icon="volume-up"
              size="2x"
            ></font-awesome-icon>
          </button>

          <!-- </div> -->
        </div>

        <p class="mt-3 translate" id="ready">
          All ready? Click below to go to our first stop!
        </p>
      </div>

      <div class="col-md-12 col-lg-3 mb-5" id="controls2">
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="frameworks"
          @click="playSection(40.5, 50.7)"
        >
          Frameworks
        </button>
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="experience"
          @click="playSection(51, 63)"
        >
          Experience
        </button>
        <button
          class="btn btn-primary m-1 col-md-3 col-lg-10 translate"
          id="softSkills"
          @click="playSection(63, 79)"
        >
          Soft Skills
        </button>
      </div>
    </div>
    <div class="card-footer bg-info">
      <button
        class="btn btn-secondary m-2"
        id="btnTakeOff"
        @click="scrollDown()"
      >
        <font-awesome-icon icon="plane-departure" class="mr-2" />
        <span id="takeOff" class="translate"> Take Off! </span>
        <!-- <font-awesome-icon icon="plane-departure" /> -->
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mute: false,
      play: true,
      timestamp: null,
      videoId: "#myVideo",
      video: "",
      videoReady: false,
    };
  },
  setup() {},
  methods: {
    changeProgress(event) {
      let progressBar = document.querySelector(".progress-bar");
      // Adaptamos el % de barra pintada conforme avanza el video.
      progressBar.style.width =
        (event.target.currentTime / event.target.duration) * 100 + "%";
    },
    fillBars() {
      let vals = [
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
      let bars = document.getElementsByClassName("frontbars");

      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = vals[i];
        }, 1000);
      });
    },
    pauseAtTimestamp() {
      //If you dont want video to pause from fast fowarding, remove greater than
      if (this.video.currentTime >= this.timestamp) {
        this.pauseVideo();
        this.video.removeEventListener("timeupdate", this.pauseAtTimestamp);
      }
    },
    pauseVideo() {
      this.video.pause();

      this.play = true;
      document
        .querySelector("#playButton")
        .removeEventListener("click", this.pauseVideo);
      document
        .querySelector("#playButton")
        .addEventListener("click", this.playVideo);
    },
    playSection(start, end) {
      this.video.currentTime = start;
      this.playVideo();
      this.timestamp = end;
      this.video.addEventListener("timeupdate", this.pauseAtTimestamp);
    },
    playVideo() {
      if (this.video.paused) this.video.play();

      this.play = false;
      document
        .querySelector("#playButton")
        .removeEventListener("click", this.playVideo);
      document
        .querySelector("#playButton")
        .addEventListener("click", this.pauseVideo);
    },
    scrollDown() {
      document
        .getElementById("markerOne")
        .scrollIntoView({ block: "start", inline: "nearest" });
      this.fillBars();
    },
    setProgress(event) {
      // Dividimos el punto en el que hemos clicado entre el total del div.
      let progressRange = document.querySelector(".progress-range");
      let newTime = event.offsetX / progressRange.offsetWidth;
      let progressBar = document.querySelector(".progress-bar");
      // Cambiamos porcentaje de la barra
      progressBar.style.width = newTime * 100 + "%";
      // Cambiamos punto del video en el que estamos.
      this.video.currentTime = newTime * this.video.duration;
    },
    toggleMute() {
      // let muteIcon= document.querySelector('#muteIcon');
      this.video.muted = !this.video.muted;

      this.mute = !this.mute;
    },
  },
  mounted() {
    this.video = document.querySelector("#myVideo");

    this.video.addEventListener("canplay", () => {
      this.videoReady = true;
      // console.log(this.videoReady);
    });
  },
  created() {},
};
</script>
<style scoped>
#safetyVideo {
  /* width: 65vw; */
  margin: 1%;
  z-index: 2;
  padding: 0px;
}
#image {
  width: 20vw;
}
#myVideo {
  /* width: 30vw; */
  width: 100%;
}
#controls {
  display: flex;
  justify-content: flex-start;
}
.progress-range {
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
  height: 8px;
  width: 90%;
  background-color: rgb(0, 172, 194);
}
.progress-bar {
  background: #e1157b9d;
  width: 20%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
}

#btnTakeOff {
  font-size: 1.7em;
}
#takeOff {
  font-size: 1em;
  margin: 0;
}
.spinner-border {
  position: relative;
  z-index: 1000;
}
#spinner {
  margin-top: 15vh;
  margin-bottom: 15vh;
  display: flex;
  justify-content: center;
  vertical-align: middle;
}

#videoRow {
  display: flex;
  justify-content: center;
}

#controls1,
#controls2 {
  padding-top: 5%;
}
</style>
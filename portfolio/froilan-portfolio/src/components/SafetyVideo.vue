<template>
  <div class="card mt-5" id="safetyVideo">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mt-2">Pre-flight Safety Video</h5>
      <h6 class="card-subtitle">About Me</h6>
    </div>

    <div class="card-body row">
      <div class="col-md-3 mt-5">
        <button class="btn btn-secondary m-1 col-10" @click="playSection(0,10)">Introduction</button>
        <button class="btn btn-secondary m-1 col-10">About me</button>
        <button class="btn btn-secondary m-1 col-10">Languages</button>
      </div>

      <div class="col-md-6">
        <p class="card-text">Click a button to go to a specific section</p>
        <!-- <img src="../assets/img/froilan.jpeg" alt="" id="image" /> -->
        <video
          muted
          id="myVideo"
          controls
          @timeupdate="changeProgress($event)"
          @canplay="changeProgress($event)"
        >
          <source src="../assets/videos/video.mp4" type="video/mp4" />
          Your navigator does not support this video
        </video>

        <div id="controls">
          <button
            class="btn btn-primary m-1"
            id="playButton"
            @click="playVideo"
          >
            <span v-show="play === true"
              ><font-awesome-icon icon="play"></font-awesome-icon
            ></span>
            <span v-show="play === false"
              ><font-awesome-icon icon="pause"></font-awesome-icon
            ></span>
          </button>

          <div id="videoBar" @click="setProgress($event)" class="progress-range bg-primary ml-1">
            <div id="videoBarBar" class="progress-bar bg-info "></div>
          </div>
        </div>

        <p class="mt-3">
          All ready? Now let's get ready for our flight. Click the button below
          to go to our first stop!
        </p>
      </div>

      <div class="col-md-3 mt-5">
        <button class="btn btn-secondary m-1 col-10">Frameworks</button>
        <button class="btn btn-secondary m-1 col-10">Experience</button>
        <button class="btn btn-secondary m-1 col-10">Soft skills</button>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary m-2" @click="scrollDown()">
        <font-awesome-icon icon="caret-down" />
        Take off!
        <font-awesome-icon icon="caret-down" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      play: true,
      timestamp: null,
      videoId: "#myVideo",
      video: "",
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
      let vals = ["90%", "85%", "75%", "65%", "95%", "55%", "80%"];
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
        this.video.pause();
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
  },
  mounted() {
    this.video = document.querySelector("#myVideo");
  },
};
</script>
<style scoped>
#safetyVideo {
  width: 50vw;
  margin: 1%;
}
#image {
  width: 20vw;
}
#myVideo {
  width: 23vw;
}
#controls {
  display: flex;
  justify-content: flex-start;
}
.progress-range{
    margin: auto;
    border-radius: 10px;
    cursor: pointer;
    height: 8px;
    width: 94%;
    background-color:  rgb(0, 172, 194);
}
.progress-bar{
    background: #e1157b9d;
    width: 20%;
    height: 100%;
    border-radius: 10px;
    transition: all 0.3s ease;
}
</style>
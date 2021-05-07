<template>
  <div class="card " id="safetyVideo">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mt-2">Pre-flight Safety Video</h5>
      <h6 class="card-subtitle">Introduction and Overview</h6>
    </div>

    <div class="card-body row">
      <div class="col-md-3">
        <button class="btn btn-secondary m-1">
          CLick here to go to section x
        </button>
        <button class="btn btn-secondary m-1">
          Clicxk here to go to section x
        </button>
        <button class="btn btn-secondary m-1">
          Click here to go to section x
        </button>
      </div>
      <div class="col-md-6">
        <p class="card-text">Click a button to go to a specific section</p>
        <img src="../assets/img/froilan.jpeg" alt="" id="image" />
      </div>
      <div class="col-md-3">
        <button class="btn btn-secondary m-1">
          CLick here to go to section x
        </button>
        <button class="btn btn-secondary m-1">
          Clicxk here to go to section x
        </button>
        <button class="btn btn-secondary m-1">
          Click here to go to section x
        </button>
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
  setup() {},
  methods: {
    scrollDown() {
      document.getElementById("markerOne").scrollIntoView({block: "start", inline: "nearest"});
    },
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
</style>
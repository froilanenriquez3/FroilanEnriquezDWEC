<template>
  <div id="landingPage">
    <!-- <img src="../../assets/img/plane.svg" alt="" id="plane" /> -->
    <main>
      <SafetyVideo />

      <section id="markerOne">
      </section>
    </main>

    <footer id="footer">
      <div>
        Icons made by <a href="" title="monkik">monkik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </footer>
  </div>
</template>
<script>
import SafetyVideo from "../SafetyVideo.vue";
export default {
  setup() {},
  components: {
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
  height: 50vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1);
}
section {
  height: 80vh;
  margin: 1%;
}

#markerOne {
 width: 100vw;
}
</style>
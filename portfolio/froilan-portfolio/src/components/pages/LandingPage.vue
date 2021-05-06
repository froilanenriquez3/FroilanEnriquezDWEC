<template>
  <div id="landingPage">
    <img src="../../assets/img/plane.svg" alt="" id="plane" />
    <main></main>

    <footer>
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
export default {
  setup() {},
};
</script>
<style scoped>
#landingPage {
  display: grid;
  grid-row: 5fr 1fr;
}
main {
  display: flex;
  height: 1000vh;
}
section {
  width: 50vw;
}
#plane {

  position: fixed;
  height: 50vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(-1, -1);
  
}
</style>
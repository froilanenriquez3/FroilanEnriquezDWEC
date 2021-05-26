<template>
  <div id="start" class="bg-primary">
    <img src="../../assets/img/logo.svg" alt="Logo" id="myLogo" />
  </div>
</template>
<script>
export default {
  methods: {

  },
  mounted() {
  },
  setup() {},
};
</script>
<style scoped>
#start {
    display: flex;
    justify-content: center;
    /* height: 100vh; */
}
#myLogo {
  animation: fadeIn 3s;
  height: 100vh;
  width: 100vw;
  transition: all 1s linear;

}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
}
}



</style>

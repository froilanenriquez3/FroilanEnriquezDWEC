<template>
  <div id="projectThreePage">
    <div class="flex-row d-flex justify-content-around mb-3">
        <i class="m-1">
        <img
          src="../../assets/icons/tech-html.svg"
          alt="HTML icon"
          class="langIcons"
        />
      </i>
      <i class="m-1">
        <img
          src="../../assets/icons/tech-css.svg"
          alt="CSS icon"
          class="langIcons"
        />
      </i>
      <i class="m-1">
        <img
          src="../../assets/icons/js.svg"
          alt="JS icon"
          class="langIcons"
        />
      </i>
      <i class="m-1">
        <img
          src="../../assets/icons/react.svg"
          alt="React icon"
          class="langIcons"
        />
      </i>
      <i class="m-1">
        <img
          src="../../assets/icons/ionic.svg"
          alt="Ionic icon"
          class="langIcons"
        />
      </i>
      
    </div>

    <div class="row mt-4" id="content5">
      <p class="col-5 ml-5" align="justify">
        For the final assignment for our mobile programming class, a partner and I
        decided to go out of our comfort zone by creating an app with React. Using the 
        Ionic framework, this application is built with both the desktop and mobile experience
        in mind.
        The assignment was to create an application that uses an external API. This 
        project uses the Spotify API to search for tracks and get specific information
        for a particular item.
        Click on the picture to give it a try!
      </p>
      <a
        class="col-6"
        href="https://froilex.netlify.app/"
        target="_blank"
      >
        <img
          src="../../assets/img/tempQr.png"
          alt="Froilex screenshot"
          id="broggiGrab"
        />
      </a>
    </div>

    <div align="left" class="mt-4  ml-5">
      <p>
        Link to
        <a href="https://github.com/froilanenriquez3/ionicthree" target="_blank"
          >Github</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
#broggiGrab {
  width: 35vw;
  border: solid black;
  border-radius: 10px;
}
#broggiGrab:hover {
  opacity: 0.75;
  width: 36vw;
}
.langIcons {
  height: 13vh;
}
</style>
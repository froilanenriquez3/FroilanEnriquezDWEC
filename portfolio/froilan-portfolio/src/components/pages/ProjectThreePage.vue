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
        <img src="../../assets/icons/js.svg" alt="JS icon" class="langIcons" />
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

    <div class="row mt-5" id="content5">
      <p class="col-8 ml-5" align="justify">
        For the final assignment for our mobile programming class, a partner and
        I decided to go out of our comfort zone by creating an app with React.
        Using the Ionic framework, this application is built with both the
        desktop and mobile experience in mind. The assignment was to create an
        application that uses an external API. This project uses the Spotify API
        to search for tracks and get specific information for a particular item.
        Click on or scan the qr code to give it a try!
      </p>
      <a class="col-3" href="https://froilex.netlify.app/" target="_blank">
        <img
          src="../../assets/img/qr.png"
          alt="Froilex screenshot"
          id="qrimagee"
        />
      </a>
    </div>

    <div class="justify-content-around">
      <img
        src="../../assets/img/ionmobil.png"
        alt="Mobile screenshot"
        class="mobileImages"
      />
      <img
        src="../../assets/img/ionmobileqr.png"
        alt="screenshot qr"
        class="mobileImages"
      />
      <img
        src="../../assets/img/ion.png"
        alt="Ion screenshot"
        class="deskImages"
      />
       <img
        src="../../assets/img/ionqr.png"
        alt="Ion screenshot"
        class="deskImages"
      />
    </div>

    <div align="left" class="mt-4 ml-5">
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
#qrimagee {
  width: 13vw;
}
#qrimagee:hover {
  opacity: 0.75;
  width: 14vw;
}
#content5{
  height: 32vh;
}
.langIcons {
  height: 13vh;
}
.mobileImages {
  height: 40vh;
  margin: 1%;
  border: solid black 1px;
  border-radius: 10px;
}
.deskImages{
  width: 23vw;
  margin: 1%;
  border: solid black 1px;
  border-radius: 10px;
}
</style>
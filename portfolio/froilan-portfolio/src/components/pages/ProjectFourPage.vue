<template>
  <div id="projectFourPage">
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
          src="../../assets/icons/angular.svg"
          alt="Angular icon"
          class="langIcons"
        />
      </i>
    </div>

    <div class="row mt-4" id="content4">
        <a
        class="col-5"
        href="https://froilanenriquezcubing.netlify.app/"
        target="_blank"
      >
        <img
          src="../../assets/img/rubiks.png"
          alt="Game 2 screenshot"
          id="rubiks"
        />
      </a>
      <p class="col-6 ml-5" align="justify">
       This simple application helped me learn some of the basics of Angular: routing, services,
       working with components.The objective of this assignment was to make a single page
       application that, once it downloaded from the server, never needed to make another 
       request or reload in order to go to different sections. This is illustrated through
       the separate cube cards, distinct pages from the main pages where the lists are 
       shown. Click the cube to check it out!
      </p>
      
    </div>

    <div align="left" class="mt-4">
      <p>
        Link to
        <a href="https://github.com/froilanenriquez3/spa" target="_blank"
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
#rubiks {
  width: 35vw;
  border: solid black;
  border-radius: 10px;
}
#rubiks:hover {
  opacity: 0.75;
  width: 36vw;
}

.langIcons {
  height: 13vh;
}
</style>
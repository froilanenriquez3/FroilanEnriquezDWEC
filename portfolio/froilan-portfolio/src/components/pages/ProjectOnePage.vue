<template>
  <div id="projectOnePage" class="p-2">
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
          src="../../assets/icons/tech-bootstrap.svg"
          alt="Bootstrap icon"
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
          src="../../assets/icons/php.svg"
          alt="PHP icon"
          class="langIcons"
        />
      </i>
      <i class="m-1">
        <img
          src="../../assets/icons/tech-mysql.svg"
          alt="mySQL icon"
          class="langIcons"
        />
      </i>
    </div>
    <div class="row mb-4 ml-1">
      <iframe
        id="videoOne"
        src="https://www.youtube.com/embed/gh2KclK7a_w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p class="col-6" align="justify">
        Restore is a project that aims to promote shopping in local businesses.
        For this reason, we have created four games through which players can
        accumulate points in order to win promotions and discounts in different
        stores. These four games are centered around Teresa, a sweet grandmother
        who is going shopping and needs your help in navigating the different
        stores.
      </p>
      <small>Breakdown of project + demo</small>
    </div>

    <div class="row" id="content2">
      <p class="col-6" align="justify">
        As a part of the project, each of the group members had to create a
        minigame, incorporating certain technical competencies of JavaScript.
        This included interaction with the DOM, usage of QuerySelector, Data-set
        attributes, and callback functions among others. The object of my game
        is to find a combination of clothes that the character likes. You drag
        and drop different items onto the man and check to see if your outfit is
        a winner.The game also has origin background music which I made. Click
        on the image to try the game for yourself!
      </p>
      <a
        class="col-6"
        href="https://froilanenriquez3.github.io/FroilanEnriquezDWEC/webAppFroilan/game/index.html"
        target="_blank"
      >
        <img
          src="../../assets/img/game2screenshot.png"
          alt="Game 2 screenshot"
          id="game"
        />
      </a>
    </div>

    <div align="left" class="mt-4">
      <p>
        Link to
        <a href="https://github.com/froilanenriquez3/Project1" target="_blank"
          >Github</a
        >
      </p>
      <p>
        Link to
        <a href="https://froilanenriquez3.github.io/Project1/" target="_blank"
          >Github Pages</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  mounted() {},
};
</script>
<style scoped>
#game {
  width: 35vw;
}
#game:hover {
  opacity: 0.75;
  width: 36vw;
}
#videoOne {
  width: 35vw;
  height: 40vh;
}
#content2 {
  height: 38vh;
}
.langIcons {
  height: 13vh;
}
</style>
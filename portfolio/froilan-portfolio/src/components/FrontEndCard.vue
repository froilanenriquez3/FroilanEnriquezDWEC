<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mt-2" align="left"><font-awesome-icon icon="user" class="mr-1"></font-awesome-icon></h5>
    </div>
    <div class="card-body bg-white text-black">
      <b>JavaScript</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated frontbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p align="left">
        Having worked with JavaScript through many projects, in both the
        front and back end, as well as through various frameworks, it is
        probably the language I'm most comfortable with. I'm confident in using JS
        for DOM manipulation, calling API's, and making reactive and interactive sites.
      </p>

      <b>HTML</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-secondary progress-bar-animated frontbars"
          role="progressbar"
           style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p align="left">
        I've created many pages with HTML, and through my experience I've learned to make
        solid layouts, use semantic tags, and integrate HTML well with JavaScript and CSS.
      </p>

      <b>CSS</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-success progress-bar-animated frontbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p align="left">
        Of the big three in front end programming, CSS is probably my weakest
        area. However, I still know the fundamentals, have worked extensively with Flexbox and Grid,
        and am practicing and learning all the time.
      </p>

      <b>SASS</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped  progress-bar-animated bg-danger frontbars"
          role="progressbar"
           style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p align="left">
        After working with CSS for so long, SASS came as breath of fresh air to me. Whenever I am given the chance, I like
        to take advantage of the features SASS provides: variables, mixins, nesting, and more.
      </p>

      <b>Bootstrap</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped  progress-bar-animated  frontbars"
          role="progressbar"
           style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          id="bootstrap"
        ></div>
      </div>
      <p align="left">
        After working with CSS for so long, SASS came as breath of fresh air to me. Whenever I am given the chance, I like
        to take advantage of the features SASS provides: variables, mixins, nesting, and more.
      </p>
    </div>

    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  setup() {},
  mounted() {
    
  },
};
</script>

<style scoped>
.cardcom {
  width: 35vw;
  opacity: 0.95;
  padding: 0;
    height: 100%;
}
#bootstrap {
  background-color: pink;
}
</style>

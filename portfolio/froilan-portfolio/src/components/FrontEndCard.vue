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
        I started learning JavaScript in the summer between my first and second
        year. Having worked with JavaScript through many projects, in both the
        front and back end, as well as through various frameworks, it is
        probably the language I'm most comfortable with.
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
        I began with HTML when I was fifteen. It was my introduction to web
        design and the world of web applications. I have made many webpages
        since then, but now combined with my skills in JavaScript, I can make
        interactive, dynamic, and robust webpages for you.
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
        area. However, I still know the fundamentals and can bring about the
        designs that I have in mind. I am learning and practicing all the time,
        and what I lack I have looked to strengthen through other languages and
        frameworks.
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
}
</style>

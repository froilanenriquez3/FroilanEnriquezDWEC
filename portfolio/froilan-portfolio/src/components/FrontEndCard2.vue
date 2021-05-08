<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mt-2" align="left">END<font-awesome-icon icon="user" class="ml-1"></font-awesome-icon></h5>
    </div>
    <div class="card-body bg-white text-black">

        <b>Angular</b>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-info frontbars"
            role="progressbar"
             style="width: 0%"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p align="left">
          Angular was my first JavaScript framework. I created a handful of projects, including a simple SPA that uses
          routers for fast loading.
        </p>


      <b>Vue</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-secondary progress-bar-animated bg-warning frontbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p align="left">
        If JavaScript is the language I'm most comfortable with, then Vue is the framework I'm most comfortable with.
        My second group project for the year uses Vue for the front end. 
      </p>

      <b>React</b>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-dark frontbars"
            role="progressbar"
             style="width: 0%"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p align="left">
          As the latest framework I've picked up, I still have much to learn with React. However, I've learned how to use JSX, the React Router, 
          and how to integrate Material UI.
        </p>


       <b>SASS</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-success progress-bar-animated bg-danger frontbars"
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


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  setup() {},
};
</script>

<style scoped>
.cardcom {
  width: 35vw;
  opacity: 0.95;
}
</style>

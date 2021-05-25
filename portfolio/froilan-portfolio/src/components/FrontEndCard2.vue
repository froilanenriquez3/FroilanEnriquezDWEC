<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title mt-2" align="right"><font-awesome-icon icon="user" class="ml-1"></font-awesome-icon></h5>
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
        <p class="translate" id="angularText" align="left">
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
      <p class="translate" id="vueText" align="left">
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
        <p class="translate" id="reactText" align="left">
          As the latest framework I've picked up, I still have much to learn with React. However, I've learned how to use JSX, the React Router, 
          and how to integrate Material UI.
        </p>


       <b>Ionic</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated frontbars"
          role="progressbar"
           style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          id="ionic"
        ></div>
      </div>
      <p class="translate" id="ionicText" align="left">
        In my Mobile Programming class, I learned how to make responsive web apps for mobile,
        working with Angular and React while applying what I learned about creating web apps for other 
        environments.
      </p>

      <b>Material UI</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated frontbars"
          role="progressbar"
           style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
          id="material"
        ></div>
      </div>
      <p class="translate" id="materialText" align="left">
        In my on-the-job training, I helped create a front-end app using React and Material UI.
        During this project, I became familiar with the different components that this framework
        has to offer to create functional and good looking interfaces.
      </p>

       <small class="translate" id="familiarity">*Indicators of familiarity and basic competency</small>

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
  height: 100%;
  z-index: 2;
}
#ionic {
  background-color: purple;
}

#material {
  background-color: brown;
}
</style>

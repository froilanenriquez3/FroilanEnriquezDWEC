<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-info text-white">
      <h5 class="card-title mt-2" align="right">
        <font-awesome-icon icon="server"></font-awesome-icon>
      </h5>
    </div>
    <div class="card-body bg-light text-black">
      <b>Node JS</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-info progress-bar-animated backbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="translate" id="nodeText" align="left">
        Although my first experiences with Node were through the Angular, Ionic,
        and Vue frameworks, I mainly started using Node JS proper for back end
        during my on-the-job training. I learned to convert what I had learned
        about back end into the world of JS and Node.
      </p>

      <b>Express</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-info progress-bar-animated backbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="translate" id="expressText" align="left">
        I first used Node JS through the framework Express, along with the
        Sequelize ORM. I've had much practice creating routes and controllers
        for the back end of a data-heavy application.
      </p>

      <b>Sequelize</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-info progress-bar-animated backbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="translate" id="sequelizeText" align="left">
        My experience in Sequelize comes from creating models, relationships,
        and seeders for filling databases with values.
      </p>

      <b>C++</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-info progress-bar-animated backbars"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="translate" id="cppText" align="left">
        My first programming language, C++ is where I picked up the basics. I
        learned from conditionals and loops, up to matrixes, structs, functions
        and full on CRUD projects.
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
  mounted() {},
};
</script>

<style scoped>
.cardcom {
  width: 35vw;
  opacity: 0.95;
  height: 100%;
  z-index: 2;
}
</style>

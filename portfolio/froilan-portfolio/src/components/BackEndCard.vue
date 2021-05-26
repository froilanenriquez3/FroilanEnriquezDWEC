<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-info text-white">
      <h5 class="card-title mt-2" align="left">
        <font-awesome-icon icon="server"></font-awesome-icon>
      </h5>
    </div>
    <div class="card-body bg-light text-black">
      <b>PHP</b>
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated backbars bg-info"
          role="progressbar"
          style="width: 0%"
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p class="translate" id="phpText" align="left">
        In the same summer I learned JavaScript, I began my journey with PHP.
        Most of my projects with a backend run on PHP. I've used it vanilla,
        with a framework, with MySQL, with ORM... so by now I pretty much see
        the world through dollar sign variables.
      </p>

      <b>Laravel</b>
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
      <p class="translate" id="laravelText" align="left">
        Laravel was my introduction to frameworks with routing, controllers,
        models, middleware, and so on. My second group project uses this
        framework to manage, process, and handle complex data.
      </p>

      <b>Eloquent</b>
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
      <p class="translate" id="eloquentText" align="left">
        Hand in hand with Laravel, I've learned to use Eloquent to help
        translate the classes of object oriented programming into the relational
        databases of MySQL.
      </p>

      <b>Java</b>
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
      <p class="translate" id="javaText" align="left">
        Though I've not worked with Java in web apps strictly, I've learned the
        fundamentals of Object-Oriented Programming, worked with databases both
        relational and object-oriented, and utilized the JUnit library for unit
        tests.
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
  /* width: 35vw; */
  opacity: 0.95;
  height: 100%;
  z-index: 2;
}
</style>

<template>
  <div class="jumbotron bg-white text-black" id="emailSection">
    <div class="row">
      <h1 class="display-5" align="left">Thank you for flying with us!</h1>
      <div class="col" align="right">
        <font-awesome-icon icon="envelope" size="6x" id="envelope"></font-awesome-icon>
      </div>
    </div>

    <h2 align="left">Get in touch</h2>
    <hr class="my-4 bg-secondary" />
    <p>
      It uses utility classes for typography and spacing to space content out
      within the larger container.
    </p>
    <div class="form-group row" id="emailDiv">
      <label for="exampleInputEmail1">Email address</label>
    </div>

    <div class="row">
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>

    <div class="row">
      <label for="emailBody">Body</label>
    </div>

    <div class="form-group row">
      <textarea class="form-control" id="emailBody" />
    </div>

    <button class="btn btn-lg bg-secondary text-white">Send</button>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
#emailSection {
    margin-top: 80vh;
  width: 80vw;
  opacity: 1;
  z-index: 1;
  padding-left: 7%;
  padding-right: 7%;
}
#envelope{
    color: #00AEDC;
}
</style>
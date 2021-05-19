<template>
  <div class="jumbotron bg-white text-black" id="emailSection">
    <div class="row">
      <h1 class="display-6 translate" align="left" id="thankYou">Thank you for flying with us!</h1>
      <div class="col" align="right">
        <div data-aos="flip-down" data-aos-duration="1000">
          <font-awesome-icon
            icon="envelope"
            size="5x"
            id="envelope"
          />
        </div>
      </div>
    </div>

    <h2 align="left" class="translate" id="getInTouch">Get in touch</h2>
    <hr class="my-4 bg-secondary" />

    <div v-show="incomplete" class="alert alert-danger alert-dismissible fade show" role="alert">
      Please fill out all the fields.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="hideAlert"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div v-show="success" class="alert alert-success alert-dismissible fade show" role="alert">
      Form processed correctly!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="hideSuccess"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>


    <div class="row" id="emailDiv">
      <label for="inEmail" id="email" class="translate">Email address</label>
    </div>

    <div class="row">
      <input
        type="email"
        class="form-control"
        id="inEmail"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>

    <div class="row mt-2">
      <label for="inSubject" class="translate" id="subject">Subject</label>
    </div>

    <div class="row">
      <input
        type="text"
        class="form-control"
        id="inSubject"
        aria-describedby="emailHelp"
        v-model="subject"
      />
    </div>

    <div class="row mt-2">
      <label for="emailBody" id="bodyText" class="translate">Body</label>
    </div>

    <div class="form-group row">
      <textarea class="form-control" id="emailBody" v-model="body" />
    </div>

    <button class="btn btn-lg bg-secondary text-white" @click="sendEmail" >
     <span class="translate" id="sendEmail">Send </span>
      <font-awesome-icon
            icon="paper-plane"
          />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: null,
      email: null,
      incomplete: false,
      subject: null,
      success: false,
    };
  },
  setup() {},
  methods: {
    sendEmail() {
      if (this.body != null && this.subject != null && this.email != null) {
        this.incomplete = false;
        this.body += `%0D%0A Reply to me at:  ${this.email}`;
        window.open(
          `mailto:froilanenriquez3@gmail.com?subject=${this.subject}&body=${this.body}`
        );
        this.body = null;
        this.subject = null;
        this.email = null;

        this.success = true;
      } else {
        this.incomplete = true;
      }
    },
    hideAlert(){
      this.incomplete = false;
    },
    hideSuccess(){
      this.success = false;
    }
  },
};
</script>
<style scoped>
#emailSection {
  width: 80vw;
  opacity: 1;
  z-index: 1;
  padding-left: 7%;
  padding-right: 7%;
}
#envelope {
  color: #00aedc;
}
</style>
<template>
  <b-navbar toggleable="md" type="dark" variant="primary" class="fixed-top">
    <b-navbar-brand href="#">
      <div class="bg-white rounded-circle" height="60">
        <img src="../assets/img/logo.svg" alt="" height="40" />
      </div>
    </b-navbar-brand>
    <h4 class="text-white">Froilan Enriquez</h4>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto text-white ">
        <b-navbar-nav >
          <b-nav-item href="#about">
            <p class="text-white">About me</p>
          </b-nav-item>
          <b-nav-item href="#skills">
            <p class="text-white">Skills</p>
          </b-nav-item>
          <b-nav-item href="#projects">
            <p class="text-white">Projects</p>
          </b-nav-item>
          <b-nav-item href="#contact">
            <p class="text-white">Contact Me</p>
          </b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="LANG"  right>
          <b-dropdown-item @click="changeLang">
            <span v-if="isEng" class="text-primary">EN</span>
            <span v-else>EN</span>
            </b-dropdown-item>
          <b-dropdown-item @click="changeLang">
            <span v-if="!isEng" class="text-primary">ES</span>
            <span v-else>ES</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      isEng: true
    };
  },
  methods: {
    changeLang(){
      this.isEng = !this.isEng;
    }
  },
  setup() {},

};
</script>

<style scoped>
p {
  margin: 0;
}
#dropdownMenuButton{
  margin-top: 2px;
}

</style>

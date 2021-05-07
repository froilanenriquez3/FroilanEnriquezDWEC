<template>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="fixed-top" >
      <b-navbar-brand href="#">
        <div class="bg-white rounded-circle" height="60">
          <img src="../assets/img/logo.svg" alt="" height="40" />
        </div>
      </b-navbar-brand>
      <h4 class="text-white">Froilan Enriquez</h4>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
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

</style>

<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-info text-white">
      <h5 class="card-title mt-2" align="right"><font-awesome-icon icon="people-carry" /></h5>
    </div>
    <div class="card-body bg-white text-black">
      <ul class="list-group">
        <li class="list-group-item active" aria-current="true">
            Flexibility
        </li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item active">Diligence</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item active">Time Management</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
.cardcom {
  width: 35vw;
  opacity: 0.95;
}
</style>

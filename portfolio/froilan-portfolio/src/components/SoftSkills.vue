<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-info text-white">
      <h5 class="card-title mt-2" align="left"><font-awesome-icon icon="people-carry" /></h5>
    </div>
    <div class="card-body bg-white text-black">
      <ul class="list-group">
        <li class="list-group-item active translate" id="teamworkHeader" aria-current="true">
          Teamwork
        </li>
        <li class="list-group-item translate" id="teamworkText" align="justify">
          Through our center's project based learning model, I had the opportunity
          to work in two group projects. During these projects, I practiced my teamwork 
          skills and learned how to collaborate with others.
        </li>
        <li class="list-group-item active translate" id="responsibilityHeader">Responsibility</li>
        <li class="list-group-item translate" id="responsibilityText" align='justify'>
          I strive to be accountable, dependable, and reliable. I know that when 
          you are entrusted with something, it is important to keep that trust and not lose it. 
        </li>
        <li class="list-group-item active translate" id="organizationHeader">Organization</li>
        <li class="list-group-item translate" id="organizationText" align="justify">
          An important trait when it comes to working is the ability to stay organized.
          This makes the workflow easier, and so I strive to stay organized in every aspect
          of my work. Whether it means maintaining my physical workspace, or keeping my
          projects well structured, organization is smoething I highly value.
        </li>
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
    height: 100%;
}
</style>

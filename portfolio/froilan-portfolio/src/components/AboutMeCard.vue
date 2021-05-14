<template>
  <div class="card m-1 cardcom">
    <div class="card-header bg-secondary text-white">
      <h3 class="card-title mt-2 translate" id="aboutMe3">About Me</h3>
    </div>
    <div class="card-body bg-white text-black">
      <img
        src="../assets/img/froilan.jpeg"
        alt="Picture of Froilan Enriquez"
        id="fe3"
      />
      <div id="iconsRow" class="text-white">
        <div class="bg-secondary rounded-circle m-3 p-2 pr-3 pl-3">
          <font-awesome-icon icon="flag-usa" />
        </div>
        <div class="bg-secondary rounded-circle m-3 p-2 pr-3 pl-3">
          <font-awesome-icon icon="guitar" />
        </div>
        <div class="bg-secondary rounded-circle m-3 p-2 pr-3 pl-3">
          <font-awesome-icon icon="chess-knight" />
        </div>
      </div>
      <p class="card-text m-1" align="justify">
        I am a web app development student from the US but newly a resident of
        Barcelona. I play the organ for the choir at my church and when I'm not
        programming, I'm noodling on the guitar, spending time with my
        girlfriend, or playing chess online.
      </p>

        <a class="btn btn-primary btn-download translate" download href="/FroilanEnriquezCurriculum.pdf">
          Download curriculum
           <font-awesome-icon icon="file-download" />
        </a>

    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
     
    }
  },
  setup() {},
};
</script>
<style scoped>
.cardcom {
  width: 50vw;
  /* height: 70vh; */
}
#fe3 {
  width: 18vw;
}
#iconsRow {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

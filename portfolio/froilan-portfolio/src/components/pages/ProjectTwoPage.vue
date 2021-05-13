<template>
  <div id="projectOnePage">
    <div class="row mb-4 ml-1">
      <iframe
        id="videoTwo"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/N0tb3QsHDOk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <p class="col-6" align="justify">
        This project is an emergency teleoperator simulator application aimed to help 
        Technician in Emergency Health Care students learn how to fill out the important 
        forms in attending to an incident. It also simulates assignment of emergency resources with interactive maps, using the Mapbox API.
      </p>
      <small>Project demo</small>
    </div>

    <div class="row">
      <p class="col-6" align="justify">
        This project was built using the PHP framework Laravel, in combination with
        the Eloquent ORM, and Vue for the Front End. The application also uses RESTful API's 
        for retrieving, saving, and editing data. Click on the image to check out the 
        application!
      </p>
      <a
        class="col-6"
        href="http://daw.abp-politecnics.com/daw2a01/Project2/broggi/public/"
        target="_blank"
      >
        <img
          src="../../assets/img/broggi.png"
          alt="Broggi screenshot"
          id="broggiGrab"
        />
      </a>
    </div>

    <div align="left" class="mt-4">
      <p>
        Link to
        <a href="https://github.com/froilanenriquez3/Project2" target="_blank">Github</a>
      </p>
      <p>
          Link to 
          <a href="http://daw.abp-politecnics.com/daw2a01/Project2/broggi/public/" target="_blank">Site</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
#broggiGrab {
  width: 35vw;
  border:solid black;

}
#broggiGrab:hover {
  opacity: 0.75;
  width: 37vw;
}
#videoTwo {
  width: 35vw;
  height: 40vh;
}
</style>
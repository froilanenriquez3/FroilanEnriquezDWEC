<template>
  <div class="card mt-3" id="projects">
    <div class="card-header bg-secondary text-white">
      <h5 class="card-title mt-2 mb-0">Projects</h5>
    </div>

    <div class="card-body">
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active bg-secondary"></li>
          <li data-target="#carousel" data-slide-to="1" class="bg-secondary"></li>
          <li data-target="#carousel" data-slide-to="2" class="bg-secondary"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-none d-md-block">
              <h6>First slide label</h6>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
            <img src="../assets/img/restore.png" class="d-block" alt="..." />
          </div>
          <div class="carousel-item">
            <div class="d-none d-md-block">
              <h6>Second slide label</h6>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
            <img src="../assets/img/broggi.png" class="d-block" alt="..." />
          </div>
          <div class="carousel-item">
            <div class="d-none d-md-block">
              <h6>Third slide label</h6>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
            <img src="../assets/img/broggi.png" class="d-block" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <font-awesome-icon icon="angle-left" size="3x" class="text-secondary" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <font-awesome-icon icon="angle-right" size="3x" class="text-secondary" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
#carousel {
  max-width: 60vw;
}
img {
  width: 60vw;
}
.carousel-caption {
  color: black;
}
</style>

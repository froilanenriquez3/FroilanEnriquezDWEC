<template>
  <div class="card mt-3" id="projects">
    <div class="card-header bg-secondary text-white">
      <h5 class="card-title mt-2 mb-0 translate" id="projectCardHeader">
        Projects
      </h5>
    </div>

    <div class="card-body">
      <div id="carousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#carousel"
            data-slide-to="0"
            class="active bg-secondary"
          ></li>
          <li
            data-target="#carousel"
            data-slide-to="1"
            class="bg-secondary"
          ></li>
          <li
            data-target="#carousel"
            data-slide-to="2"
            class="bg-secondary"
          ></li>
          <li
            data-target="#carousel"
            data-slide-to="3"
            class="bg-secondary"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-none d-md-block">
              <h6 class="translate" id="projectOneHeader">
                Project One (Restore)
              </h6>
            </div>
            <a role="button" data-toggle="modal" data-target="#project1"
              ><img src="../assets/img/restore.png" class="d-block" alt="..."
            /></a>
          </div>
          <div class="carousel-item">
            <div class="d-none d-md-block">
              <h6 class="translate" id="projectTwoHeader">
                Project Two (Broggi)
              </h6>
            </div>
            <a role="button" data-toggle="modal" data-target="#project2"
              ><img src="../assets/img/broggi.png" class="d-block" alt="..."
            /></a>
          </div>
          <div class="carousel-item">
            <div class="d-none d-md-block">
              <h6 class="translate" id="projectThreeHeader">Froilex Song QR Code Generator</h6>
            </div>
            <a role="button" data-toggle="modal" data-target="#project3"
              ><img src="../assets/img/tempQr.png" class="d-block" alt="..."
            /></a>
          </div>
          <div class="carousel-item">
            <div class="d-none d-md-block">
              <h6 class="translate" id="projectFourHeader">Speed Cubes SPA</h6>
            </div>
            <a role="button" data-toggle="modal" data-target="#project4"
              ><img src="../assets/img/rubiks.png" class="d-block" alt="..."
            /></a>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <font-awesome-icon
            icon="angle-left"
            size="3x"
            class="text-secondary"
          />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <font-awesome-icon
            icon="angle-right"
            size="3x"
            class="text-secondary"
          />
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div
      v-for="project in projects"
      :key="project.id"
      class="modal fade"
      :id="'project' + project.id"
      tabindex="-1"
      role="dialog"
      :aria-labelledby="'project' + project.id"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div :class="'modal-header text-white ' + project.color">
            <h5 class="modal-title" :id="project.id + 'Header'">
              {{ project.name }}
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-show="project.id == 1" class="modal-body">
            <ProjectOnePage />
          </div>
          <div v-show="project.id == 2" class="modal-body">
            <ProjectTwoPage />
          </div>
          <div v-show="project.id == 3" class="modal-body">
            <ProjectThreePage />
          </div>
          <div v-show="project.id == 4" class="modal-body">
            <ProjectFourPage />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- PROJECT 1 -->
    <!-- <div
      class="modal fade"
      id="project1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="project1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="project1">Project One (Restore)</h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"><ProjectOnePage /></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- PROJECT 2 -->

    <!-- <div
      class="modal fade"
      id="project2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="project2"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header bg-secondary text-white">
            <h5 class="modal-title" id="project2">Project 2</h5>
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body"><ProjectTwoPage /></div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- PROJECT 3 -->

    <!-- <div
      class="modal fade"
      id="project3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="project3"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="project3">Project 3</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import ProjectOnePage from "./pages/ProjectOnePage";
import ProjectTwoPage from "./pages/ProjectTwoPage";
import ProjectThreePage from "./pages/ProjectThreePage";
import ProjectFourPage from "./pages/ProjectFourPage";

export default {
  components: {
    ProjectOnePage,
    ProjectTwoPage,
    ProjectThreePage,
    ProjectFourPage,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Project 1 (Restore)",
          color: "bg-primary",
        },
        {
          id: 2,
          name: "Project 2 (Broggi)",
          color: "bg-secondary",
        },
        {
          id: 3,
          name: "Froilex Song QR Code Generator",
          color: "bg-info",
        },
        {
          id: 4,
          name: "Speed Cubes SPA",
          color: "bg-success",
        },
      ],
    };
  },
  setup() {},
};
</script>
<style scoped>
#projects {
  width: 60vw;
}
#carousel {
  /* max-width: 60vw; */
  width: 100%;
  height: 60vh;
}
img {
  /* width: 60vw; */
  /* width: 90vw; */
  width: 100%;
}
.carousel-caption {
  color: black;
}
</style>

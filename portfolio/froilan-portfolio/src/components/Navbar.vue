<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="primary"
    class="fixed-top nav"
    id="maNavbar"
  >
    <b-navbar-brand href="#about">
      <div class="bg-white rounded-circle" height="60">
        <img src="../assets/img/logo.svg" alt="Logo" height="40" />
      </div>
    </b-navbar-brand>
    <h4 class="text-white">Froilan Enriquez</h4>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto text-white">
        <!-- <b-navbar-nav class="nav"> -->
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">
              <p class="translate text-white" id="intro">Introduction</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#markerOne">
              <p class="translate text-white" id="skills">Skills</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#markerThree">
              <p class="translate text-white" id="projectsText">Projects</p>
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#markerFour">
              <p class="translate text-white" id="softSkillsLink">Soft Skills</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#markerFive">
              <p class="translate text-white" id="aboutMe">About Me</p>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#markerSix">
              <p class="translate text-white" id="contactMe">Contact Me</p>
            </a>
          </li>
        </ul>
        <!-- </b-navbar-nav> -->

        <b-nav-item-dropdown :text="language" right>
          <b-dropdown-item @click="changeLangEng">
            <span v-if="isEng" class="text-primary">EN</span>
            <span v-else>EN</span>
          </b-dropdown-item>
          <b-dropdown-item @click="changeLangEsp">
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
  props: {
    textArray: {
      required: true,
    },
  },
  data() {
    return {
      isEng: true,
      eng: {
        intro: "Introduction",
        aboutMe: "About Me",
        aboutMe2: "About Me",
        aboutMe3: "About Me",
        skills: "Skills",
        projectsText: "Projects",
        contactMe: "Contact Me",
        preFlight: "Before your flight...",
        introduction: "Introduction",
        language: "Languages",
        frameworks: "Frameworks",
        experience: "Experience",
        softSkills: "Soft skills",
        takeOff: " Take Off! ",
        clickABtn: "Click a button to go to a specific section",
        ready:
          "All ready? Click the button below to go to our first stop!",
        next1: " Next stop! ",
        next2: " Next stop! ",
        next3: " Next stop! ",
        next4: " Next stop! ",
        final: " Final stop! ",
        thankYou: "Thank you for flying with us!",
        getInTouch: "Get in touch",
        email: "Email address",
        subject: "Subject",
        bodyText: "Body",
        sendEmail: "Send",
        softSkillsLink: "Soft Skills"
      },
      esp: {
        intro: "Introducciòn",
        aboutMe: "Sobre Mi",
        aboutMe2: "Sobre Mi",
        aboutMe3: "Sobre Mi",
        skills: "Habilidades",
        projectsText: "Proyectos",
        contactMe: "Contacto",
        preFlight: "Antes de volar...",
        introduction: "Introducción",
        language: "Lenguajes",
        frameworks: "Frameworks",
        experience: "Experiencia",
        softSkills: "Soft skills",
        takeOff: " ¡Despeguemos! ",
        clickABtn: "Clica un botón para ir a una sección específica",
        ready:
          "¿Preparado? Clica el botón de abajo para ir a nuestro primer destino!",
        next1: " ¡Proximo destino! ",
        next2: " ¡Proximo destino! ",
        next3: " ¡Proximo destino! ",
        next4: " ¡Proximo destino! ",
        final: " ¡Ultimo destino! ",
        thankYou: "¡Gracias por volar con nosotros!",
        getInTouch: "Contáctame",
        email: "Correo electrónico",
        subject: "Asunto",
        bodyText: "Mensaje",
        sendEmail: "Enviar",
        softSkillsLink: "Soft Skills"
      },
      language: "English",
    };
  },
  methods: {
    changeLangEsp() {
      this.isEng = false;
      let lang = this.esp;
      this.language = "Español";

      for (const textItem of this.textArray) {
        this.changeText(textItem.id, lang);
      }
    },
    changeLangEng() {
      this.isEng = true;
      let lang = this.eng;
      this.language = "English";

      for (const textItem of this.textArray) {
        this.changeText(textItem.id, lang);
      }
    },
    changeText(stringID, lang) {
      // console.log('change text running');
      // console.log(stringID);
      // console.log(lang);
      // console.log(document.getElementById(stringID).innerHTML);
      // console.log(lang.stringID);

      document.getElementById(stringID).innerHTML = lang[stringID];
    },
  },
  mounted() {},
  setup() {},
};
</script>

<style scoped>
p {
  margin: 0;
}
#dropdownMenuButton {
  margin-top: 2px;
}
.active {
  background-color: red;
}
</style>

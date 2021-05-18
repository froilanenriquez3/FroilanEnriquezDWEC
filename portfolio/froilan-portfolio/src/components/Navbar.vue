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
              <p class="translate text-white" id="softSkillsLink">
                Soft Skills
              </p>
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
        ready: "All ready? Click the button below to go to our first stop!",
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
        softSkillsLink: "Soft Skills",
        jsText:
          "Having worked with JavaScript through many projects, in both the front and back end, as well as through various frameworks, it is probably the language I'm most comfortable with. I'm confident in using JS for DOM manipulation, calling API's, and making reactive and interactive sites.",
        htmlText:
          "I've created many pages with HTML, and through my experience I've learned to make solid layouts, use semantic tags, and integrate HTML well with JavaScript and CSS.",
        cssText:
          "Of the big three in front end programming, CSS is probably my weakest area. However, I still know the fundamentals, have worked extensively with Flexbox and Grid, and am practicing and learning all the time.",
        sassText:
          "After working with CSS for so long, SASS came as breath of fresh air to me. Whenever I am given the chance, I like to take advantage of the features SASS provides: variables, mixins, nesting, and more.",
        bootstrapText: "I began working with Bootstrap together with my PHP Projects. Since then, I've implemented it in many places, on its own or in combination with Bootswatch and Bootstrap Vue. This very site is made with Bootstrap.",
        angularText: "Angular was my first JavaScript framework. I created a handful of projects, including a simple SPA that uses routers for fast loading.",
        vueText: "If JavaScript is the language I'm most comfortable with, then Vue is the framework I'm most comfortable with. My second group project for the year uses Vue for the front end.",
        reactText: "As the latest framework I've picked up, I still have much to learn with React. However, I've learned how to use JSX, the React Router, and how to integrate Material UI.",
        ionicText: "In my Mobile Programming class, I learned how to make responsive web apps for mobile, working with Angular and React while applying what I learned about creating web apps for other environments.",
        materialText: "In my on-the-job training, I helped create a front-end app using React and Material UI. During this project, I became familiar with the different components that this framework has to offer to create functional and good looking interfaces.",
        phpText: "In the same summer I learned JavaScript, I began my journey with PHP. Most of my projects with a backend run on PHP. I've used it vanilla, with a framework, with MySQL, with ORM... so by now I pretty much see the world through dollar sign variables.",
        laravelText: "Laravel was my introduction to frameworks with routing, controllers, models, middleware, and so on. My second group project uses this framework to manage, process, and handle complex data.",
        eloquentText: "Hand in hand with Laravel, I've learned to use Eloquent to help translate the classes of object oriented programming into the relational databases of MySQL.",
        javaText: "Though I've not worked with Java in web apps strictly, I've learned the fundamentals of Object-Oriented Programming, worked with databases both relational and object-oriented, and utilized the JUnit library for unit tests.",
        nodeText: "Although my first experiences with Node were through the Angular, Ionic, and Vue frameworks, I mainly started using Node JS proper for back end during my on-the-job training. I learned to convert what I had learned about back end into the world of JS and Node.",
        expressText: "I first used Node JS through the framework Express, along with the Sequelize ORM. I've had much practice creating routes and controllers for the back end of a data-heavy application.",
        sequelizeText: "My experience in Sequelize comes from creating models, relationships, and seeders for filling databases with values.",
        cppText: "My first programming language, C++ is where I picked up the basics. I learned from conditionals and loops, up to matrices, structs, functions and full on CRUD projects.",
        teamworkHeader: "Teamwork",
        teamworkText: "Through our center's project based learning model, I had the opportunity to work in two group projects. During these projects, I practiced my teamwork skills and learned how to collaborate with others.",
        responsibilityHeader: "Responsibility",
        responsibilityText: "I strive to be accountable, dependable, and reliable. I know that when you are entrusted with something, it is important to keep that trust and not lose it.",
        organizationHeader: "Organization",
        organizationText: "An important trait when it comes to working is the ability to stay organized. This makes the workflow easier, and so I strive to stay organized in every aspect of my work. Whether it means maintaining my physical workspace, or keeping my projects well structured, organization is smoething I highly value.",
        flexHeader: "Flexibility",
        flexText: "I've spent all my life adapting to different situations, having moved from place to place every couple of years. I know the value of being able to pivot to confront whatever the current situation brings. I apply this mindset to whatever challenge I face.",
        diligenceHeader: "Diligence",
        diligenceText: "I've been no stranger to a heavy workload. The key to getting through is patience, endurance, and a willingness to work hard. I do my best to put this into practice and show that I am eager to work.",
        timeHeader: "Time Management",
        timeText: "Another key to dealing with numerous taks is to manage time well. Having had many responsibilites, I'm accustomed to balancing between different obligations, so that I can always deliver what is required of me in a timely manner.",
        projectCardHeader: "Projects",
        projectOneHeader: "Project One (Restore)",
        projectTwoHeader: "Project Two (Broggi)",
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
        softSkillsLink: "Soft Skills",
        jsText:
          "Habiendo trabajado con JavaScript a través de muchos proyectos, tanto en el front como en el back-end, así como a través de varios frameworks, es probablemente el lenguaje con el que me siento más cómodo. Confío en usar JS para la manipulación de DOM, llamar a API y crear sitios reactivos e interactivos.",
        htmlText:
          "He creado muchas páginas con HTML y, a través de mi experiencia, he aprendido a hacer diseños sólidos, usar etiquetas semánticas e integrar bien HTML con JavaScript y CSS.",
        cssText:
          "De los tres grandes en programación de front-end, CSS es probablemente mi área más débil. Sin embargo, todavía conozco los fundamentos, he trabajado mucho con Flexbox y Grid, y estoy practicando y aprendiendo todo el tiempo.",
        sassText:
          "Después de trabajar con CSS durante tanto tiempo, SASS fue como un soplo de aire fresco para mí. Siempre que tengo la oportunidad, me gusta aprovechar las funciones que ofrece SASS: variables, mixins, anidamiento y más.",
        bootstrapText: "Comencé a trabajar con Bootstrap junto con mis proyectos PHP. Desde entonces, lo he implementado en muchos lugares, solo o en combinación con Bootswatch y Bootstrap Vue. Este mismo sitio está hecho con Bootstrap.",
        angularText: "Angular fue mi primer marco de JavaScript. Creé varios proyectos, incluido un SPA simple que usa enrutadores para una carga rápida.",
        vueText: "Si JavaScript es el lenguaje con el que me siento más cómodo, entonces Vue es el marco con el que me siento más cómodo. Mi segundo proyecto grupal del año usa Vue como interfaz.",
        reactText: "Como último framework que he adquirido, todavía tengo mucho que aprender con React. Sin embargo, aprendí cómo usar JSX, React Router y cómo integrar Material UI.",
        ionicText: "En mi clase de programación móvil, aprendí cómo crear aplicaciones web receptivas para dispositivos móviles, trabajando con Angular y React mientras aplicaba lo que aprendí sobre la creación de aplicaciones web para otros entornos.",
        materialText: "En mi capacitación en el trabajo, ayudé a crear una aplicación front-end usando React y Material UI. Durante este proyecto, me familiaricé con los diferentes componentes que este marco tiene para ofrecer para crear interfaces funcionales y atractivas.",
        phpText: "El mismo verano que aprendí JavaScript, comencé mi viaje con PHP. La mayoría de mis proyectos con backend se ejecutan en PHP. Lo he usado vainilla, con un marco, con MySQL, con ORM ... así que ahora veo el mundo a través de variables de signo de dólar.",
        laravelText: "Laravel fue mi introducción a los marcos con enrutamiento, controladores, modelos, middleware, etc. Mi segundo proyecto grupal usa este marco para administrar, procesar y manejar datos complejos.",
        eloquentText: "De la mano de Laravel, he aprendido a usar Eloquent para ayudar a traducir las clases de programación orientada a objetos a las bases de datos relacionales de MySQL.",
        javaText: "Aunque no he trabajado estrictamente con Java en aplicaciones web, aprendí los fundamentos de la programación orientada a objetos, trabajé con bases de datos tanto relacionales como orientadas a objetos, y utilicé la biblioteca JUnit para pruebas unitarias.",
        nodeText: "Aunque mis primeras experiencias con Node fueron a través de los marcos Angular, Ionic y Vue, principalmente comencé a usar Node JS adecuado para back-end durante mi capacitación en el trabajo. Aprendí a convertir lo que había aprendido sobre back-end en el mundo de JS y Node.",
        expressText: "Primero usé Node JS a través del framework Express, junto con Sequelize ORM. He tenido mucha práctica creando rutas y controladores para el back-end de una aplicación con muchos datos.",
        sequelizeText: "Mi experiencia en Sequelize proviene de la creación de modelos, relaciones y sembradoras para llenar bases de datos con valores.",
        cppText: "Mi primer lenguaje de programación, C ++, es donde aprendí los conceptos básicos. Aprendí de condicionales y bucles, hasta matrices, estructuras, funciones y proyectos CRUD completos.",
        teamworkHeader: "Trabajo en equipo",
        teamworkText: "A través del modelo de aprendizaje basado en proyectos de nuestro centro, tuve la oportunidad de trabajar en dos proyectos grupales. Durante estos proyectos, practiqué mis habilidades de trabajo en equipo y aprendí a colaborar con otros.",
        responsibilityHeader: "Responsabilidad",
        responsibilityText: "Me esfuerzo por ser responsable, confiable y confiable. Sé que cuando se te confía algo, es importante mantener esa confianza y no perderla.",
        organizationHeader: "Organización",
        organizationText: "Un rasgo importante cuando se trata de trabajar es la capacidad de mantenerse organizado. Esto facilita el flujo de trabajo, por lo que me esfuerzo por mantenerme organizado en todos los aspectos de mi trabajo. Ya sea que signifique mantener mi espacio de trabajo físico o mantener bien estructurados mis proyectos, la organización es algo que valoro mucho.",
        flexHeader: "Flexibilidad",
        flexText: "He pasado toda mi vida adaptándome a diferentes situaciones, trasladándome de un lugar a otro cada dos años. Conozco el valor de poder girar para afrontar lo que sea que nos depare la situación actual. Aplico esta mentalidad a cualquier desafío que enfrente",
        diligenceHeader: "Diligencia",
        diligenceText: "No he sido ajeno a una gran carga de trabajo. La clave para salir adelante es la paciencia, la resistencia y la voluntad de trabajar duro. Hago todo lo posible para poner esto en práctica y demostrar que tengo muchas ganas de trabajar.",
        timeHeader: "Gestión del tiempo",
        timeText: "Otra clave para lidiar con numerosas tareas es administrar bien el tiempo. Habiendo tenido muchas responsabilidades, estoy acostumbrado a equilibrar entre diferentes obligaciones, de modo que siempre puedo entregar lo que se me pide en el momento oportuno.",
         projectCardHeader: "Proyectos",
        projectOneHeader: "Proyecto Uno (Restore)",
        projectTwoHeader: "Proyecto Dos (Broggi)",
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

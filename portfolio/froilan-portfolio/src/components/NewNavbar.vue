<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="maNavbar">
    <a class="navbar-brand" href="#">
      <div class="bg-white rounded-circle" height="60">
        <img src="../assets/img/logo.svg" alt="Logo" height="40" />
      </div>
    </a>
    <h4 class="text-white">Froilan Enriquez</h4>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navDiv"
      aria-controls="navDiv"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navDiv">
      <ul class="nav navbar-nav ml-auto " id="navBarr">
        <li class="nav-item">
          <a class="customScroll nav-link translate text-white active" href="#about" id="intro">
            Introduction
            <!-- <p class="translate" id="intro">Introduction</p> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="customScroll nav-link translate text-white" href="#markerOne" id="skills">
            Skills
            <!-- <p class="translate" id="skills">Skills</p> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="customScroll nav-link translate text-white" href="#markerThree" id="projectsText">
            Projects
            <!-- <p class="translate" >Projects</p> -->
          </a>
        </li>

        <li class="nav-item">
          <a class="customScroll nav-link translate text-white" href="#markerFour" id="softSkillsLink">
            Soft Skills
            <!-- <p class="translate" >Soft Skills</p> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="customScroll nav-link translate text-white" href="#markerFive" id="aboutMe">
            About Me
            <!-- <p class="translate" >About Me</p> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="customScroll nav-link translate text-white" href="#markerSix" id="contactMe">
            Contact Me
            <!-- <p class="translate" id="contactMe">Contact Me</p> -->
          </a>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-white btn btn-info"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
          {{ language }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <button class="dropdown-item" @click="changeLangEng">
              <span v-if="isEng" class="text-primary">EN</span>
              <span v-else>EN</span>
            </button>
            <button class="dropdown-item" @click="changeLangEsp">
              <span v-if="!isEng" class="text-primary">ES</span>
              <span v-else>ES</span>
            </button>
          </div>
        </li>

      </ul>
    </div>


  </nav>
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
        ready: "All ready? Click below to go to our first stop!",
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
        sendEmail: "Send ",
        softSkillsLink: "Soft Skills",
        jsText:
          "Having worked with JavaScript through many projects, in both the front and back end, as well as through various frameworks, it is probably the language I'm most comfortable with. I'm confident in using JS for DOM manipulation, calling API's, and making reactive and interactive sites.",
        htmlText:
          "I've created many pages with HTML, and through my experience I've learned to make solid layouts, use semantic tags, and integrate HTML well with JavaScript and CSS.",
        cssText:
          "Of the big three in front end programming, CSS is probably my weakest area. However, I still know the fundamentals, have worked extensively with Flexbox and Grid, and am practicing and learning all the time.",
        sassText:
          "After working with CSS for so long, SASS came as breath of fresh air to me. Whenever I am given the chance, I like to take advantage of the features SASS provides: variables, mixins, nesting, and more.",
        bootstrapText:
          "I began working with Bootstrap together with my PHP Projects. Since then, I've implemented it in many places, on its own or in combination with Bootswatch and Bootstrap Vue. This very site is made with Bootstrap.",
        angularText:
          "Angular was my first JavaScript framework. I created a handful of projects, including a simple SPA that uses routers for fast loading.",
        vueText:
          "If JavaScript is the language I'm most comfortable with, then Vue is the framework I'm most comfortable with. My second group project for the year uses Vue for the front end.",
        reactText:
          "As the latest framework I've picked up, I still have much to learn with React. However, I've learned how to use JSX, the React Router, and how to integrate Material UI.",
        ionicText:
          "In my Mobile Programming class, I learned how to make responsive web apps for mobile, working with Angular and React while applying what I learned about creating web apps for other environments.",
        materialText:
          "In my on-the-job training, I helped create a front-end app using React and Material UI. During this project, I became familiar with the different components that this framework has to offer to create functional and good looking interfaces.",
        phpText:
          "In the same summer I learned JavaScript, I began my journey with PHP. Most of my projects with a backend run on PHP. I've used it vanilla, with a framework, with MySQL, with ORM... so by now I pretty much see the world through dollar sign variables.",
        laravelText:
          "Laravel was my introduction to frameworks with routing, controllers, models, middleware, and so on. My second group project uses this framework to manage, process, and handle complex data.",
        eloquentText:
          "Hand in hand with Laravel, I've learned to use Eloquent to help translate the classes of object oriented programming into the relational databases of MySQL.",
        javaText:
          "Though I've not worked with Java in web apps strictly, I've learned the fundamentals of Object-Oriented Programming, worked with databases both relational and object-oriented, and utilized the JUnit library for unit tests.",
        nodeText:
          "Although my first experiences with Node were through the Angular, Ionic, and Vue frameworks, I mainly started using Node JS proper for back end during my on-the-job training. I learned to convert what I had learned about back end into the world of JS and Node.",
        expressText:
          "I first used Node JS through the framework Express, along with the Sequelize ORM. I've had much practice creating routes and controllers for the back end of a data-heavy application.",
        sequelizeText:
          "My experience in Sequelize comes from creating models, relationships, and seeders for filling databases with values.",
        cppText:
          "My first programming language, C++ is where I picked up the basics. I learned from conditionals and loops, up to matrices, structs, functions and full on CRUD projects.",
        teamworkHeader: "Teamwork",
        teamworkText:
          "Through our center's project based learning model, I had the opportunity to work in two group projects. During these projects, I practiced my teamwork skills and learned how to collaborate with others.",
        responsibilityHeader: "Responsibility",
        responsibilityText:
          "I strive to be accountable, dependable, and reliable. I know that when you are entrusted with something, it is important to keep that trust and not lose it.",
        organizationHeader: "Organization",
        organizationText:
          "An important trait when it comes to working is the ability to stay organized. This makes the workflow easier, and so I strive to stay organized in every aspect of my work. Whether it means maintaining my physical workspace, or keeping my projects well structured, organization is something I highly value.",
        flexHeader: "Flexibility",
        flexText:
          "I've spent all my life adapting to different situations, having moved from place to place every couple of years. I know the value of being able to pivot to confront whatever the current situation brings. I apply this mindset to whatever challenge I face.",
        diligenceHeader: "Diligence",
        diligenceText:
          "I've been no stranger to a heavy workload. The key to getting through is patience, endurance, and a willingness to work hard. I do my best to put this into practice and show that I am eager to work.",
        timeHeader: "Time Management",
        timeText:
          "Another key to dealing with numerous taks is to manage time well. Having had many responsibilites, I'm accustomed to balancing between different obligations, so that I can always deliver what is required of me in a timely manner.",
        projectCardHeader: "Projects",
        projectOneHeader: "Project One (Restore)",
        projectTwoHeader: "Project Two (Broggi)",
        projectThreeHeader: "Froilex Song QR Code Generator",
        projectFourHeader: "Speed Cubes SPA",
        aboutMeText:
          "I am a web app development student from the US but newly a resident of Barcelona. I play the organ for the choir at my church and when I'm not programming, I'm noodling on the guitar, spending time with my girlfriend, or playing chess online.",
        download: "Download curriculum ",
        familiarity: "",
      },
      esp: {
        intro: "Introducción",
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
        next1: " ¡Próximo destino! ",
        next2: " ¡Próximo destino! ",
        next3: " ¡Próximo destino! ",
        next4: " ¡Próximo destino! ",
        final: " ¡Último destino! ",
        thankYou: "¡Gracias por volar con nosotros!",
        getInTouch: "Contáctame",
        email: "Correo electrónico",
        subject: "Asunto",
        bodyText: "Mensaje",
        sendEmail: "Enviar ",
        softSkillsLink: "Soft Skills",
        jsText:
          "Habiendo trabajado con JavaScript a través de muchos proyectos, tanto en el front como en el back-end, así como a través de varios frameworks, es probablemente el lenguaje con el que me siento más cómodo. Confío en usar JS para la manipulación de DOM, llamar a API y crear sitios reactivos e interactivos.",
        htmlText:
          "He creado muchas páginas con HTML y, a través de mi experiencia, he aprendido a hacer diseños sólidos, usar etiquetas semánticas e integrar bien HTML con JavaScript y CSS.",
        cssText:
          "De los tres grandes en programación de front-end, CSS es probablemente mi área más débil. Sin embargo, todavía conozco los fundamentos, he trabajado mucho con Flexbox y Grid, y estoy practicando y aprendiendo todo el tiempo.",
        sassText:
          "Después de trabajar con CSS durante tanto tiempo, SASS fue como un soplo de aire fresco para mí. Siempre que tengo la oportunidad, me gusta aprovechar las funciones que ofrece SASS: variables, mixins, anidamiento y más.",
        bootstrapText:
          "Comencé a trabajar con Bootstrap junto con mis proyectos PHP. Desde entonces, lo he implementado en muchos lugares, solo o en combinación con Bootswatch y Bootstrap Vue. Este mismo sitio está hecho con Bootstrap.",
        angularText:
          "Angular fue mi primer marco de JavaScript. Creé varios proyectos, incluido un SPA simple que usa enrutadores para una carga rápida.",
        vueText:
          "Si JavaScript es el lenguaje con el que me siento más cómodo, entonces Vue es el marco con el que me siento más cómodo. Mi segundo proyecto grupal del año usa Vue como interfaz.",
        reactText:
          "Como último framework que he adquirido, todavía tengo mucho que aprender con React. Sin embargo, aprendí cómo usar JSX, React Router y cómo integrar Material UI.",
        ionicText:
          "En mi clase de programación móvil, aprendí cómo crear aplicaciones web receptivas para dispositivos móviles, trabajando con Angular y React mientras aplicaba lo que aprendí sobre la creación de aplicaciones web para otros entornos.",
        materialText:
          "En mi capacitación en el trabajo, ayudé a crear una aplicación front-end usando React y Material UI. Durante este proyecto, me familiaricé con los diferentes componentes que este marco tiene para ofrecer para crear interfaces funcionales y atractivas.",
        phpText:
          "El mismo verano que aprendí Javascript, empecé mi viaje con PHP. La mayoría de mis proyectos que contienen back-end están realizados con este lenguaje. Lo he utilizado tanto solo como con un framework, con mysql, ORM, etc. de modo que ahora veo el mundo a través de las variables con signo de dólar. ",
        laravelText:
          "Laravel ha sido mi introducción a los frameworks con enrutamiento, controladores, modelos, middleware, etc. Lo utilizo en el segundo proyecto en grupo que hice para administrar, procesar y manejar datos complejos. ",
        eloquentText:
          "De la mano de Laravel, he aprendido a usar Eloquent para ayudar a traducir las clases de programación orientadas a objetos a las bases de datos relacionales de MySQL.",
        javaText:
          "Aunque no he trabajado con Java como tal en aplicaciones web, he aprendido los fundamentos de la programación orientada a objetos, he trabajado con bases de datos tanto relacionales como orientadas a objetos y he utilizado la biblioteca JUnit para hacer pruebas unitarias. ",
        nodeText:
          "Aunque mis primeras experiencias con Node fueron a través de los frameworks Angular, Ionic y Vue, lo he empezado a utilizar más a fondo para el back-end durante mis practicas escolares. He aprendido a transformar lo que había aprendido sobre back-end al mundo de JS y Node.   ",
        expressText:
          "He utilizado NodeJs a través del framework Express junto con Sequelize ORM. Tengo mucha práctica creando rutas y controladores para el back-end de aplicaciones con muchos datos. ",
        sequelizeText:
          "Con Sequelize he creado modelos, relaciones y seeders para llenar las bases de datos con valores",
        cppText:
          "C++ fue mi primer lenguaje de programación y con el que aprendí los conceptos básicos como los condicionales y los bucles, las matrices, estructuras, funciones y proyectos CRUD completos.",
        teamworkHeader: "Trabajo en equipo",
        teamworkText:
          "A través del modelo de aprendizaje basado en proyectos de nuestro centro, tuve la oportunidad de trabajar en dos proyectos grupales. Durante estos proyectos, practiqué mis habilidades de trabajo en equipo y aprendí a colaborar con otros.",
        responsibilityHeader: "Responsabilidad",
        responsibilityText:
          "Soy consciente del valor de la confianza y procuro dar lo mejor de mi en todas las situaciones. ",
        organizationHeader: "Organización",
        organizationText:
          "Una cualidad importante cuando se trata de trabajar es la capacidad de organización ya que facilita el flujo de trabajo. Por eso me esfuerzo por mantenerme organizado en todos los aspectos de mi trabajo, ya sea mantener mi espacio de trabajo o tener bien estructurados mis proyectos.",
        flexHeader: "Flexibilidad",
        flexText:
          "Durante mi vida me he adaptado a diferentes situaciones dado que me he trasladado de un lugar a otro cada dos años. Esto me ha dado herramientas para afrontar los cambios con los que me encuentre. Esto también se aplica a cualquier desafío con el que me enfrente.  ",
        diligenceHeader: "Diligencia",
        diligenceText:
          "No me asustan las grandes cargas de trabajo. La clave para salir adelante es la paciencia, la resistencia y la voluntad de trabajar duro. Hago todo lo posible para poner esto en práctica y demostrar mis ganas de trabajar o superar cualquier reto con el que me encuentre. ",
        timeHeader: "Gestión del tiempo",
        timeText:
          "Considero que la gestión del tiempo es importante para lidiar con varias tareas. Habiendo tenido muchas responsabilidades, estoy acostumbrado a encontrar el equilibrio entre diversas obligaciones, de modo que puedo entregar lo que se necesita en el momento oportuno.   ",
        projectCardHeader: "Proyectos",
        projectOneHeader: "Proyecto Uno (Restore)",
        projectTwoHeader: "Proyecto Dos (Broggi)",
        projectThreeHeader: "Froilex Generador de Código QR de Canción",
        projectFourHeader: "Speed Cubes SPA",
        aboutMeText:
          "Soy un estudiante de desarrollo de aplicaciones web de Estados Unidos pero resido en Barcelona. Soy organista para el coro de mi iglesia y cuando no estoy programando, toco la guitarra, paso tiempo con mi novia e juego al ajedrez en línea.",
        download: "Descargar curriculum ",
        familiarity: "*Indicadores de familiaridad y competencia básica",
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
      if (document.getElementById(stringID) == null) {
        console.log(stringID);
      } else document.getElementById(stringID).innerHTML = lang[stringID];
    },
  },
  mounted() {
    console.log("Navbar mounted");
  },
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
a.active{
  border-bottom: solid white 3px;
  /* border-radius: 5px; */
  /* background-color: #369; */
}
</style>

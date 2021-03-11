var eventBus = new Vue()


Vue.component('skillform', {
    props: {

    },
    template: `
    <div :style="styleObject" >
        <form @submit.prevent="onSubmit">

        <div v-for="error in errors">
            <p>{{ error }}</p>
        </div>

        <p>
            <label for="name">Name:</label>
            <input class="name" v-model="name">
        </p>
        
        <p>
            <label for="prof">Proficiency (1-5):</label>
            <select class="prof" v-model.number="prof">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
            </select>
        </p>
            
        <p>
            <label for="xp">Experience:</label>      
            <textarea class="xp" v-model="xp"></textarea>
        </p>

        <p>
            <label for="desc">Description:</label>      
            <textarea class="desc" v-model="desc"></textarea>
        </p>

        <p>
            <input type="submit" value="Submit">  
        </p>    

        </form>
    </div>
    `,
    data() {
        return {

            name: null,
            prof: null,
            xp: null,
            desc: null,
            errors: [],


            styleObject: {
                border: "solid black 1px",
                height: "100%",
                width: "23vw",
                padding: "20px",
                margin: "10px",
                display: "none"
            }
        }

    },
    methods: {
        onSubmit() {

            this.errors = [];

            if (this.name && this.prof && this.xp && this.desc) {
                let newSkill = {
                    name: this.name,
                    prof: this.prof,
                    xp: this.xp,
                    desc: this.desc
                }

                eventBus.$emit('skill-submitted', newSkill)

                this.name = null,
                    this.prof = null,
                    this.xp = null,
                    this.desc = null

            } else {
                if (!this.name) this.errors.push("Name required.")
                if (!this.prof) this.errors.push("Proficiency required.")
                if (!this.xp) this.errors.push("Experience required.")
                if (!this.desc) this.errors.push("Description required.")
            }
        }
    },
    mounted() {
        eventBus.$on('show-form', displayForm => {
            if (displayForm) {
                this.styleObject['display'] = "block"
            } else {
                this.styleObject['display'] = "none"
            }
        })
    }
})

Vue.component('newskill', {
    props: {

    },
    template: `
    <div>
        <button @click="addSkill"> {{ getMessage }} </button>
    </div>

    `,
    data() {
        return {
            displayForm: true,
            message: "Add a new skill"
        }
    },
    methods: {
        addSkill() {
            eventBus.$emit('show-form', this.displayForm)
            if (this.displayForm) {
                this.message = "Minimize";
                this.displayForm = false;
            } else {
                this.message = "Add a new skill";
                this.displayForm = true;
            }
        }

    },
    computed: {
        getMessage() {
            message = "";
            if (!this.displayForm) {
                message = "Minimize";
            } else {
                message = "Add a new skill";
            }
            return message;
        }
    }
})


Vue.component('skillcards', {
    props: {
        skillsinfo: {
            required: "yes"
        }
    },
    template: `
   <div>
   <p>Colors correspond to proficiency level: 1 = red, 2 = orange, 3 = yellow, 4 = green, 5 = blue</p>
    <div class="cardlist">
    
        <div v-for="skill in skillsinfo" >
            <div :class="{ blue : skill.prof == '5', green : skill.prof == '4', yellow : skill.prof == '3', orange : skill.prof == '2', 
            red : skill.prof == '1',
            skillcard : skill.namne != '' }">
                <h4 v-text="skill.name">  </h4>
                <p> Proficiency: {{ skill.prof }} </p>
                <p> Experience: {{ skill.xp }} </p>
                <p> Description: {{ skill.desc }} </p>
            </div>
        </div>
        
    </div>
    </div>
   `,
    data() {
        return {
            name: "",
            prof: "",
            xp: "",
            desc: ""

        }
    },
    methods: {

    }
})


var app = new Vue({
    el: "#app",
    data: {
        skillsarray: [
            {
                name: "C++",
                prof: "2",
                xp: "One year in Programming 1 including project with reading/writing files",
                desc: "My first programming language. Familiar with basic syntax and fundamental concepts."
            },
            {
                name: "Java",
                prof: "5",
                xp: "Programming 2, Databases 2 in progress ",
                desc: "Third programming language. Began learning during summer of first year. Several months of experience with OOP, as well as some work with JUnit, DB4O and Exceptions "
            },
            {
                name: "Javascript",
                prof: "3",
                xp: "Client side web development, mobile programming, in progress",
                desc: "Second programming language, began learning during summer of first year. Experience with different frameworks using Javascript and Typescript (Angular, Ionic, Vue)"
            },
            {
                name: "PHP",
                prof: "4",
                xp: "Server side web development, in progress",
                desc: "Fourth programming language, began learning during summer of first year. Experience with projects using PHP for backend, including PDO and databases, and work with Laravel framework"
            },
            {
                name: "Bash scripting",
                prof: "1",
                xp: "One year scripting experience",
                desc: "Basic scripting exercises in SI"
            },
            {
                name: "HTML",
                prof: "5",
                xp: "Web design in high school, plus two years of creating static/dynamic webpages",
                desc: "One year web design, one year Markup Languages, on year in client side web development and design of web interfaces (both in progress)"
            },
            {
                name: "CSS",
                prof: "5",
                xp: "Web design in high school, plus two years of creating static/dynamic webpages",
                desc: "One year web design, one year Markup Languages, on year in client side web development and design of web interfaces (both in progress)"
            },
            {
                name: "SASS",
                prof: "1",
                xp: "",
                desc: ""
            }
        ]
    },
    methods: {

    },
    mounted() {
        eventBus.$on('skill-submitted', newSkill => {
            this.skillsarray.unshift(newSkill)
            console.log(newSkill)
        })
    }
});
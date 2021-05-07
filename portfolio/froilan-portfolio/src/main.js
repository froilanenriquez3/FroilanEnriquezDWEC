import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BootstrapVue } from "bootstrap-vue";
import "./styles/app.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faEnvelope, faFighterJet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faEnvelope, faFighterJet)

Vue.component('font-awesome-icon', FontAwesomeIcon)




Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')

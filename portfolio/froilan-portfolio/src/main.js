import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BootstrapVue } from "bootstrap-vue";
import "./styles/app.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown, faEnvelope, faFighterJet, faServer, faUser, faPlay, faPause,
  faVolumeMute, faVolumeUp, faAngleLeft, faAngleRight, faPeopleCarry, faPlaneDeparture,
  faPlaneArrival, faGlobeEurope, faPlane, faGuitar, faChessKnight, faFlagUsa, faFileDownload,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router';


library.add(faCaretDown, faEnvelope, faFighterJet, faServer, faUser, faPlay, faPause,
  faVolumeMute, faVolumeUp, faAngleLeft, faAngleRight, faPeopleCarry, faPlaneDeparture,
  faPlaneArrival, faGlobeEurope, faPlane, faGuitar, faChessKnight, faFlagUsa, faFileDownload,
  faPaperPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// Vue.use(BootstrapVue);
Vue.use(VueRouter);

new Vue({
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')

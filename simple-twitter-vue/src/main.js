import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSpinner, faBell, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery');

library.add(faUserSecret)
library.add(faSpinner)
library.add(faBell)
library.add(faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

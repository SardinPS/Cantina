// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.js'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  bootstrap,
  bootstrapJS,
  Toasted,
  components: { App },
  template: '<App/>'
})

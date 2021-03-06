// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.js'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  bootstrap,
  bootstrapJS,
  components: { App },
  template: '<App/>'
})

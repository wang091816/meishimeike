import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import Vant from 'vant';
import 'vant/lib/index.css';
// <<<<<<< HEAD
// =======
// <<<<<<< HEAD
// =======
import axios from 'axios'
// >>>>>>> f59da9b43fb959360a4724e9b5d745c6eafa3c37
// >>>>>>> 8f616080c624a13b6fdd246d0f11de7993c76ee1

Vue.use(Vant);
Vue.use(YDUI);


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

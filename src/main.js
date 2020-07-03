import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

Vue.use(Vant);
Vue.use(YDUI);


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

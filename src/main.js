import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { router } from './routes';

Vue.config.productionTip = false;


new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

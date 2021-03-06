import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from './locales'
import VWave from 'v-wave'

Vue.use(VWave)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

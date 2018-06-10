import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'

Vue.config.productionTip = false
Vue.use(filters)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

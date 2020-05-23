import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LiquorTree from 'liquor-tree'

Vue.config.productionTip = false

Vue.use(LiquorTree)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

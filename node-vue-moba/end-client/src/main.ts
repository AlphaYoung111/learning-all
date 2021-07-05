
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/main.css'
import httpInstall from '@/api/http'
declare module 'vue/types/vue' {
  interface Vue {
    $http: any
  }
}
Vue.use(ElementUI)
Vue.use(httpInstall)
let token = window.localStorage.getItem('token') || ''
Vue.mixin({
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${token}`
      }
    }
  }
})
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

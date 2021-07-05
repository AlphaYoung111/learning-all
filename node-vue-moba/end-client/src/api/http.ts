
import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'
const http = axios.create({
  baseURL: 'http://localhost:11111/admin/api'
})

http.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  return config
}, err => {
  Promise.reject(err)
})



http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
    return Promise.reject(err)
  }
})

const httpInstall = {
  install: (Vue: any, options: any) => {
    Vue.prototype.$http = http
  }
}

export default httpInstall;

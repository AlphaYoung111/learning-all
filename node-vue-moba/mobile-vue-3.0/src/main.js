import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/iconfont/iconfont.css';
import '@/assets/style/index.scss';
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Card from '@/components/Card'
import ListCard from '@/components/ListCard'
import axios from 'axios'
// app.config.productionTip = false;
const app = createApp(App)
app.component('m-card',Card)
app.component('m-list-card', ListCard)
app.config.globalProperties.$http = axios.create({
  baseURL:'http://localhost:11111/web/api'
})
app.use(Antd).use(router).mount('#app')

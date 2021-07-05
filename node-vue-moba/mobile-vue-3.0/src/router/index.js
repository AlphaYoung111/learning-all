import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'
import Hero from '@/views/Hero.vue'

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {path:'/',name:'home',component:Home},
      {path:'/articles/:id',name:'article',component:Article,props:true}
    ]
  },
  {
    path: '/hero/:id',
    name: 'hero',
    component:Hero
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

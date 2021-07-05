import { createWebHashHistory, RouteRecordRaw, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/a',
    // component: () => import('@/components/HelloWorld.vue')
    component: () => import('../components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'
import CategoryEdit from '@/views/category/CategoryEdit.vue'
import CategoryList from '@/views/category/CategoryList.vue'

import ItemsEdit from '@/views/items/ItemsEdit.vue'
import ItemsList from '@/views/items/ItemsList.vue'

import HerosEdit from '@/views/heros/HerosEdit.vue'
import HerosList from '@/views/heros/HerosList.vue'

import ArticlesEdit from '@/views/articles/ArticlesEdit.vue'
import ArticlesList from '@/views/articles/ArticlesList.vue'

import AdsEdit from '@/views/ads/AdsEdit.vue'
import AdsList from '@/views/ads/AdsList.vue'

import AdminUsersEdit from '@/views/adminUsers/AdminUsersEdit.vue'
import AdminUsersList from '@/views/adminUsers/AdminUsersList.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/categories/list',
        component: CategoryList
      },
      {
        path: '/items/create',
        component: ItemsEdit
      },
      {
        path: '/items/edit/:id',
        component: ItemsEdit,
        props: true
      },
      {
        path: '/items/list',
        component: ItemsList
      },
      {
        path: '/heros/create',
        component: HerosEdit
      },
      {
        path: '/heros/edit/:id',
        component: HerosEdit,
        props: true
      },
      {
        path: '/heros/list',
        component: HerosList
      },
      {
        path: '/articles/create',
        component: ArticlesEdit
      },
      {
        path: '/articles/edit/:id',
        component: ArticlesEdit,
        props: true
      },
      {
        path: '/articles/list',
        component: ArticlesList
      },
      {
        path: '/ads/create',
        component: AdsEdit
      },
      {
        path: '/ads/edit/:id',
        component: AdsEdit,
        props: true
      },
      {
        path: '/ads/list',
        component: AdsList
      },
      {
        path: '/adminUsers/create',
        component: AdminUsersEdit
      },
      {
        path: '/adminUsers/edit/:id',
        component: AdminUsersEdit,
        props: true
      },
      {
        path: '/adminUsers/list',
        component: AdminUsersList
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.getItem('token')) {
    return next('/login')
  }
  next()
})
export default router

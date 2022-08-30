import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobListView from '../views/JobListView.vue'
import JobDetailView from '../views/JobDetailView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/joblist',
    name: 'joblist',
    component: JobListView,
  },
    {
    path: '/joblist/:id',
    name: 'jobDetail',
    component: JobDetailView,
    props: true
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

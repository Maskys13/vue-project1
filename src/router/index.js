import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Film from './routes/film'
import Cinema from './routes/cinema'
import Center from './routes/center'

const routes = [
  { path: '/', redirect: '/films/nowplaying' },
  ...Film,
  Cinema,
  Center
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

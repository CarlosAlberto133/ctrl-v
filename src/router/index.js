import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const CodigoSalvoVue = () => import('@/components/CodigoSalvoVue.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'CodigoSalvoVue',
    component: CodigoSalvoVue
  },
  { 
    path: '/:catchall(.*)*', 
    component: PaginaNaoEncontrada 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router

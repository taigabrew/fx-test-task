import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue')
const CustomVPS = () => import('./pages/CustomVPS.vue')
const ErrorAlert = () => import('./components/ErrorAlert.vue')

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/custom-vps', component: CustomVPS, name: 'custom-vps' },

  {
    path: '/:pathMatch(.*)*',
    name: 'error-page',
    component: ErrorAlert,
    props: {
      error: {
        status: 404,
      },
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

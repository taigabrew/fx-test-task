import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('./pages/HomePage.vue')
const CustomVPS = () => import('./pages/CustomVPS.vue')

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/custom-vps', component: CustomVPS, name: 'custom-vps' },

  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorWrap',
    component: 'Error',
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

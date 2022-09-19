import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    name: "Admin",
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/login',
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: '/pizza',
    name: "Pizza",
    component: () => import('../views/Pizza.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
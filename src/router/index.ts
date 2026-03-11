import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';

// Use the RouteRecordRaw type for your array to get autocomplete and validation
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginForm
  },
  // Catch-all route for 404s
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/RegisterForm.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
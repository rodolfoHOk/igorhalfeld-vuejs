import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/Home/HomeIndex.vue');
const Feedbacks = () => import('@/views/Feedbacks/FeedbacksIndex.vue');
const Credentials = () => import('@/views/Credentials/CredentialsIndex.vue');

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

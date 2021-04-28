import Vue from 'vue';
import VueRouter from 'vue-router';

const Dashboard = () => import('../views/dashboard/index.vue');
const Character = () => import('../views/character/index.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/novo',
    name: 'Character',
    component: Character,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

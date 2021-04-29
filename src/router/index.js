import Vue from 'vue';
import VueRouter from 'vue-router';

const Characters = () => import('../views/character/CharacterList.vue');
const NewCharacter = () => import('../views/character/CharacterNew.vue');
const CharacterProfile = () => import('../views/character/CharacterProfile.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/personagem/:id',
    name: 'CharacterProfile',
    component: CharacterProfile,
  },
  {
    path: '/novo',
    name: 'NewCharacter',
    component: NewCharacter,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

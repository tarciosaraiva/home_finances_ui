import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */ '@/views/Categories.vue'),
    },
    {
      path: '/buckets',
      name: 'buckets',
      component: Home,
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Home,
    },
  ],
});

export default router;

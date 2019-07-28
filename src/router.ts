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
      component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/Categories.vue'),
      children: [
        {
          path: 'new',
          name: 'new_category',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/CategoryForm.vue'),
        },
        {
          path: ':id/edit',
          name: 'edit_category',
          props: true,
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/CategoryForm.vue'),
        },
      ],
    },
    {
      path: '/buckets',
      name: 'buckets',
      component: () => import(/* webpackChunkName: "buckets" */ '@/views/buckets/Buckets.vue'),
      children: [
        {
          path: 'new',
          name: 'new_bucket',
          component: () => import(/* webpackChunkName: "buckets" */ '@/views/buckets/BucketForm.vue'),
        },
        {
          path: ':id/edit',
          name: 'edit_bucket',
          props: true,
          component: () => import(/* webpackChunkName: "buckets" */ '@/views/buckets/BucketForm.vue'),
        },
      ],
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

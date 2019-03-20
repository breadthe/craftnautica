import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import(/* webpackChunkName: "recipes" */ './views/Recipes.vue'),
    },
    {
      path: '/recipes2',
      name: 'recipes2',
      component: () => import(/* webpackChunkName: "recipes2" */ './views/Recipes2.vue'),
    },
  ],
});

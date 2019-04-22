import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFound from './views/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
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
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import(/* webpackChunkName: "thanks" */ './views/ThankYou.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import(/* webpackChunkName: "recipes" */ './views/Recipes.vue'),
    },
    {
      path: '/sn',
      name: 'subnautica',
      component: () => import(/* webpackChunkName: "recipes" */ './views/Recipes.vue'),
    },
    {
      path: '/bz',
      name: 'belowzero',
      component: () => import(/* webpackChunkName: "recipes" */ './views/Recipes.vue'),
    },
    {
      path: '/sn/cart',
      name: 'sncart',
      component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
    },
    {
      path: '/bz/cart',
      name: 'bzcart',
      component: () => import(/* webpackChunkName: "cart" */ './views/Cart.vue'),
    },
    {
      path: '/sn/inventories',
      name: 'sninventories',
      component: () => import(/* webpackChunkName: "inventories" */ './views/Inventories.vue'),
    },
    {
      path: '/bz/inventories',
      name: 'bzinventories',
      component: () => import(/* webpackChunkName: "inventories" */ './views/Inventories.vue'),
    },
    {
      path: '/sn/i/:id', // Subnautica Classic
      name: 'sndetails',
      parent: '/sn',
      component: () => import(/* webpackChunkName: "details" */ './components/Details.vue'),
      props: true,
    },
    {
      path: '/bz/i/:id', // Below Zero
      name: 'bzdetails',
      parent: '/bz',
      component: () => import(/* webpackChunkName: "details" */ './components/Details.vue'),
      props: true,
    },
  ],
});

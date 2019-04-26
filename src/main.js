import Vue from 'vue';
import App from './App.vue';
import directives from './directives';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.directive('click-outside', directives.clickOutside);
Vue.directive('focus', directives.focus);
Vue.directive('select', directives.select);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

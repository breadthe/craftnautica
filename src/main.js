import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// TODO: Extract this
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

// Use v-focus to focus an input
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

// Use v-select to select all the text in an input
Vue.directive('select', {
  inserted(el) {
    el.select();
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

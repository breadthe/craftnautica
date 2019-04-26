export default {
  clickOutside: {
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
  },

  // Use v-focus to focus an input
  focus: {
    inserted(el) {
      el.focus();
    },
  },

  // Use v-select to select all the text in an input
  select: {
    inserted(el) {
      el.select();
    },
  },
};

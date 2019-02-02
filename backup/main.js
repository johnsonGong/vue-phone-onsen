import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Webpack CSS import
import 'onsenui/css/onsenui.css';
// 重置页面元素样式,,,等
import 'onsenui/css/onsen-css-components.css';

import './assets/css/demo-main.less'

// This imports 'onsenui', so no need to import it separately
import VueOnsen from 'vue-onsenui';

// VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(VueOnsen);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

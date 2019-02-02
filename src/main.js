import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
import store from "./store";
import AppNavigator from './AppNavigator.vue';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
// 重置页面元素样式,,,等
import 'onsenui/css/onsen-css-components.css';

import './assets/css/demo-main.less'

// This imports 'onsenui', so no need to import it separately
import VueOnsen from 'vue-onsenui';
import CustomToolbar from './partials/CustomToolbar.vue';

// VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(VueOnsen);
Vue.component('custom-toolbar', CustomToolbar);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(AppNavigator),
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();

    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }
  }
}).$mount("#app");

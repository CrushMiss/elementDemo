import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies';
import "lib-flexible-computer";

Vue.use(VueCookies);
Vue.use(ElementUI);

import App from './App.vue';

import router from '@/router/index';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

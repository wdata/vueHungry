// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router/index.js';

import 'common/stylus/index.styl';

// 全局注册vue-resource
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

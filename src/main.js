// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// 使用vue-router
import VueRouter from 'vue-router';
import goods from './components/goods/goods.vue';

Vue.config.productionTip = false;

// 安装 vue-router
Vue.use(VueRouter);

let app = Vue.extend(App);
let rou = new VueRouter();

/* eslint-disable no-new */

router.map({
  '/goods': {
    component: goods
  }
});

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// });


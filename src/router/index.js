import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '../components/goods/goods.vue';
import seller from '../components/seller/seller.vue';
import ratings from '../components/ratings/ratings.vue';

// 安装 vue-router
Vue.use(VueRouter);

// 使用vue-router

// 2.0 vue写法
const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: goods },
  { path: '/seller', component: seller },
  { path: '/ratings', component: ratings }
];

// 3. 创建 router 实例，然后传 `routes` 配置
let router = new VueRouter({
  routes,
  // 实例化选中时，添加一个class，名为：active
  linkActiveClass: 'active'
});

export default router;

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
  { path: './goods', component: goods },
  { path: './seller', component: seller },
  { path: './ratings', component: ratings },
  { path: '*', redirect: '/goods' }
];

// 3. 创建 router 实例，然后传 `routes` 配置
let router = new VueRouter({
  routes
});
console.log(router);
export default router;
// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: routes
//     }
//   ]
// });

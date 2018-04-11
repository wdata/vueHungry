<template>
  <div id="app">
    <!--将seller传入header.vue-->
    <app-header :seller="seller"></app-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller" class="content"></router-view>
  </div>
</template>

<script  type="text/ecmascript-6">
  import header from './components/header/header.vue';
  // 添加一个状态判断，如果多次使用，使用常量
  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then(response => {
        // get body data 成功
        // response是个属性，需要转化为json
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      }, response => {
        // error callback 失败
      });
    },
    name: 'App',
    components: {
      'app-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /* 不管在script中是否引用mixin.styl，都必须在style中重新引用 */
  @import  "./common/stylus/mixin.styl";
  /*商品、评价、商家 tab导航*/
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    //border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    // 在移动端中，会将border中1px渲染成2px，所以使用伪类解决；
    border-1px(rgba(7, 17, 27, 0.1));

    .tab-item{
      flex: 1;
      a{
        color: rgb(77, 85, 93);
        font-size: 14px;
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .active{
        color: rgb(240, 20, 20);
      }
    }
  }
</style>

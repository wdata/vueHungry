<template>
  <div id="app">
    <app-header></app-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{ path:'/' }" href=""></a>
        商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      I am content
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
  import header from './components/header/header.vue';

  export default {
    name: 'App',
    components: {
      'app-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*商品、评价、商家 tab导航*/
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: rgb(77, 85, 93);
    font-size: 14px;
    text-align: center;

    .tab-item{
      flex: 1;
    }
  }
</style>

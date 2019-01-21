<template>
  <footer>
    <router-link to="/index" tag="a">
      <i class="iconfont icon-home"></i>首页
    </router-link>
    <router-link to="/classify" tag="a">
      <i class="iconfont icon-guizifenlei"></i>分类
    </router-link>
    <router-link to="/vip" tag="a">
      <i class="iconfont icon-zuanshi"></i>会员
    </router-link>
    <router-link to="/carts" tag="a">
      <i class="iconfont icon-gouwuche"></i>购物车
    </router-link>
    <router-link to="/me" tag="a">
      <i class="iconfont icon-geren"></i>我的
    </router-link>
  </footer>
</template>

<script>
    export default {
        name: "MeFooter"
    }
</script>

<style scoped>

</style>

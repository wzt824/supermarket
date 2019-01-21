<template>
  <header>
    <div class="headerTop">
      <a class="headerLeft">
        <i class="zyg"><img src="../../assets/img/pic1.png" alt=""></i>
        <span>自由购</span>
      </a>
      <a class="headerCen">
        <span>送至:</span><span>立人科技园</span><i class="iconfont icon-sanjiaojiantoutriangular"></i>
      </a>
      <div class="headerRight">
        <a class="headerRight1">
          <i class="hym"><img src="../../assets/img/header.png" alt=""></i>
          <span>会员码</span>
        </a>
        <a class="headerRight2">
          <i class="code"><img src="../../assets/img/pic2.png" alt=""></i>
          <span>扫一扫</span>
        </a>
      </div>
    </div>
    <div class="headerBottom">
      <div class="headerBottomL">
        <h1>多点超市</h1>
        <div class="jian">
          <span>满49减12<i class="jiantou"></i></span>
        </div>
      </div>
      <a class="headerBottomR">
        <img src="../../assets/img/pic3.png" alt="">
      </a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>
 header{
   width: 100%!important;
   position: fixed;
   top: 0;
   z-index: 999;
   background: #f0f0f0;
 }
</style>

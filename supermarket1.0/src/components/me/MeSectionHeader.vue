<template>
  <div class="meHeader">
    <a href="javascript:;" class="go">去签到</a>
    <div class="headMe">
      <router-link tag="a" to="/login">
        <img src="../../assets/img/c1.png" alt="" class="via">
      </router-link>
      <div class="welcome">
        <p><span>沙漏</span> </p>
        <a href="javascript:;" class="grade">
          <img class="vipImg" src="../../assets/img/VIPS.png" alt="">
          <span class="vipsGrade">普通会员<i class="iconfont icon-zuoyoujiantou"></i></span>
        </a>
      </div>
      <a href="javascript::"><img class="APPimg" src="../../assets/img/APP.png" alt=""></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MeSectionHeader"
    }
</script>

<style scoped>

</style>

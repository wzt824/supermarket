<template>
  <div class="delatisHeader">
    <router-link to="/classify">
      <div class="icon left"><img src="../../assets/img/d3.png" alt=""></div></router-link>
    <div class="spanTxt"> <p>鸡小腿 约500g </p></div>
    <div class="icon"><img src="../../assets/img/d1.png" alt=""></div>
    <div class="icon right1"><img src="../../assets/img/d2.png" alt=""></div>
  </div>
</template>

<script>
    export default {
        name: "DelatisHeader"
    }
</script>

<style scoped>
  .delatisHeader{
    position: fixed;
    z-index: 9999;
    background: rgba(255,255,255,0);
  }
</style>

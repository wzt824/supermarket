<template>
  <div class="classify">
    <div class="server">
      <img src="../../assets/img/banUp.png" alt="">
    </div>
    <a href="javascript:;" class="serach">
      <i class="iconfont icon-sousuo"></i>翼支付满40减20
    </a>
    <div class="classifyBox" :key="i" v-for="(a,i) in indexData">
      <router-link to="/delList" tag="a"  class="classBox" :key="i" v-for="(b,i) in a.classify">
        <div class="classImg"><img :src="b.classImg" alt=""></div>
        <span>{{b.classTitle}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexSectionClassify",
        props:["indexData"]
    }
</script>

<style scoped>

</style>

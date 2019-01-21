<template>
  <ul class="secLeft" id="UlsLeft">
    <li :key="i" v-for="(p,i) in classData " @click="changeNum(i)">
      <a href="javascript:;" :class="{'changeBg':aaa==i}">{{p.type}}</a>
      <!--<ul class="submenu">-->
        <!--<li :key="i" v-for="(k,i) in p.subkey1" @click="changeNum(i)"><a href="javascript:;">{{k.tabType}}</a></li>-->
      <!--</ul>-->
    </li>
  </ul>
</template>

<script>
    export default {
        name: "ClassifySectionLeft",
        props:["classData","changeNum","aaa"],
    }
</script>

<style scoped>
  .changeBg{
    background: white;
    border-right: 1px dashed #eeeeee;
    color: red;
  }
</style>

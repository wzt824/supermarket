<template>
  <div class="delClassBox">
    <div class="delClass" v-for="b in delListData">
      <span v-for="(a,i) in b.subBox" @click="change(i)" :class="{'changeBg':aaa==i}">{{a.subType}}</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "delListSectionClass",
        props:["delListData","change","aaa"]
    }
</script>

<style scoped>
  .delClass{
    display: flex;
    width: 100%;
    overflow-x: auto;
    height: .44rem;
    background: white;
    color: #000;
    font-size: .16rem;
    overflow-y: hidden;
  }
  .delClass::-webkit-scrollbar{
    display: none;
  }
  .delClass span{
     display: block;
     float: left;
     height: .2rem;
     margin: .08rem .08rem 0;
     line-height: .18rem;
     padding:.04rem .2rem;
     border-radius: .12rem;
     flex-shrink: 0;
   }
  .delClass span:hover{
    background: #ff702a;
    color: white;
  }
  .changeBg{
    background: #ff702a;
    color: white;
  }
</style>

<template>
    <div class="delHeader">
      <router-link to="/index">
        <i class="iconfont icon-zuoyoujiantou_"></i>
      </router-link>
        <span>肉蛋水产</span>
        <span class="delHeaderLeft">
           <i class="delImg"><img src="/static/img/del.png" alt=""></i>
           <i class="iconfont icon-gouwuche">
             <em>11</em>
           </i>
        </span>
    </div>
</template>

<script>
    export default {
        name: "delListHeader"
    }
</script>

<style scoped>
  .delHeader{
    width: 100%;
    height: .44rem;
    background: #ffffff;
    padding:0 .05rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .2rem ;
    color: #292d35;
    border-bottom: 1px solid #ddd;
  }
  .delHeader i{
    padding: 0.1rem;
    display: block;
    font-size: .24rem ;
  }
  .delHeaderLeft{
    display: flex;
  }
  .delHeaderLeft .delImg{
    width: .22rem;
    height: .22rem;
  }
  .delHeaderLeft .icon-gouwuche{
    position: relative;
  }
  .delHeaderLeft .icon-gouwuche em{
    display: block;
    width: .2rem;
    height: .2rem;
    background: red;
    border-radius: 50%;
    color: white;
    font-size: .12rem;
    font-style: inherit;
    text-align: center;
    line-height: .2rem;
    position: absolute;
    top: 2px;
    right: 0;
  }
</style>

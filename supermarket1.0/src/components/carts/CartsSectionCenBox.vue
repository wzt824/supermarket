<template>
  <div>
    <div class="section" :key="index" v-for="(a,index) in cartsData">
      <div class="address">
        <a href="javascript:;">收货地址：<span>陕西省西安市雁塔区立人科技园</span><i class="iconfont icon-zuoyoujiantou"></i></a>
      </div>
      <div class="supermarket">
        <img class="superImg" src="../../assets/img/dCar.png" alt="">多点超市
      </div>
      <div class="carListTop">
        <div class="listBoxLeft">
          <div class="selectMenu">
            <input type="checkbox" class="inputs" id="labels" v-model="a.checked" @change="changeCheck">
            <label for="labels"></label>
          </div>
          <img class="carTopImg" src="../../assets/img/ren.png" alt="">
          <span>人人乐景泽店</span>
          <span class="peisong"> 仅配送 </span>
        </div>
        <i class="iconfont icon-sort_asc"></i>
      </div>
      <div class="carBox">
        <div class="carList" :key="i" v-for="(b,i) in a.shops">
          <div class="selectMenu">
            <input type="checkbox" class="inputs" v-model="b.checked" @click="subCheck">
            <label></label>
          </div>
          <div class="listImg"><img :src="b.pic" alt=""></div>
          <div class="carListTxt">
            <p>{{b.title}}</p>
            <span class="spanBox">￥<span class="Pprice">{{b.price}}</span></span>
            <div class="addAndJian">
              <div class="minus" @click="minus(i)">－</div>
              <div class="contant">{{b.qal}}</div>
              <div class="add" @click="add(i)">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CartsSectionCenBox",
        props:["cartsData","add","minus"],
        methods:{
          changeCheck(){
            this.$emit("ShopsChecked")
          },
          subCheck(){
            this.$emit("SubShopsChecked")
          }
        }

    }
</script>

<style scoped>

</style>

<template>
  <div>
    <b :item="a" :key="i" v-for="(a,i) in indexData[0].active3">
      <a class="imgBox">
        <img :src="a.picImg" alt="">
      </a>
      <div class="day">
        <a href="javascript:;" class="publicProduct"  :key="i" v-for="(b,i) in a.productBox">
          <div class="publicImg">
            <img :src="b.proImg" alt="">
          </div>
          <div class="mouldnews">
            <span class="moulTitle">{{b.proTitle}}</span>
          </div>
          <div class="moulprice">
            <span class="worldoriginal">{{b.proPrice}}</span>
            <span class="promo-price">${{b.proXian}}</span>
          </div>
          <span class="spanAdd">+</span>
        </a>
        <!--<a href="javascript:;" class="publicProduct">-->
          <!--<div class="publicImg">-->
            <!--<img src="../../assets/img/p2.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="mouldnews">-->
            <!--<span class="moulTitle">太平梳打饼干 奶盐味 600g</span>-->
          <!--</div>-->
          <!--<div class="moulprice">-->
            <!--<span class="worldoriginal">$15.9</span>-->
            <!--<span class="promo-price">$14.9</span>-->
          <!--</div>-->
          <!--<span class="spanAdd">+</span>-->
        <!--</a>-->
        <!--<a href="javascript:;" class="publicProduct">-->
          <!--<div class="publicImg">-->
            <!--<img src="../../assets/img/p1.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="mouldnews">-->
            <!--<span class="moulTitle">太平梳打饼干 奶盐味 600g</span>-->
          <!--</div>-->
          <!--<div class="moulprice">-->
            <!--<span class="promo-price">$14.9</span>-->
          <!--</div>-->
          <!--<span class="spanAdd">+</span>-->
        <!--</a>-->
        <!--<a href="javascript:;" class="publicProduct">-->
          <!--<div class="publicImg">-->
            <!--<img src="../../assets/img/p2.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="mouldnews">-->
            <!--<span class="moulTitle">太平梳打饼干 奶盐味 600g</span>-->
          <!--</div>-->
          <!--<div class="moulprice">-->
            <!--<span class="worldoriginal">$15.9</span>-->
            <!--<span class="promo-price">$14.9</span>-->
          <!--</div>-->
          <!--<span class="spanAdd">+</span>-->
        <!--</a>-->
        <!--<a href="javascript:;" class="publicProduct">-->
          <!--<div class="publicImg">-->
            <!--<img src="../../assets/img/p1.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="mouldnews">-->
            <!--<span class="moulTitle">太平梳打饼干 奶盐味 600g</span>-->
          <!--</div>-->
          <!--<div class="moulprice">-->
            <!--<span class="worldoriginal">$15.9</span>-->
            <!--<span class="promo-price">$14.9</span>-->
          <!--</div>-->
          <!--<span class="spanAdd">+</span>-->
        <!--</a>-->
        <!--<a href="javascript:;" class="publicProduct">-->
          <!--<div class="publicImg">-->
            <!--<img src="../../assets/img/p2.jpg" alt="">-->
          <!--</div>-->
          <!--<div class="mouldnews">-->
            <!--<span class="moulTitle">太平梳打饼干 奶盐味 600g</span>-->
          <!--</div>-->
          <!--<div class="moulprice">-->
            <!--<span class="promo-price">$14.9</span>-->
          <!--</div>-->
          <!--<span class="spanAdd">+</span>-->
        <!--</a>-->
      </div>
    </b>
  </div>

</template>

<script>
    export default {
        name: "IndexSectionDay",
        props:["indexData"],
    }
</script>

<style scoped>

</style>

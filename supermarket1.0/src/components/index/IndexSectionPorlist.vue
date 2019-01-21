<template>
  <div>
    <b v-for="(a0,i) in indexData">
      <b v-for="(a,i) in a0.active4">
    <a class="imgBox">
      <img :src="a.picImg" alt="">
    </a>
      <div class="prolist1" v-for="(b,i) in a.productBox">
        <a href="javascript:;"><img :src="b.ListImg" alt=""></a>
        <a href="javascript:;" class="publicProduct" v-for="(c,i) in b.listBox">
          <div class="publicImg">
            <img :src="c.proImg" alt="">
          </div>
          <div class="mouldnews">
            <span class="moulTitle">{{c.proTitle}}</span>
          </div>
          <div class="moulprice">
            <span class="worldoriginal">{{c.proPrice}}</span>
            <span class="promo-price">${{c.proXian}}</span>
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
    </b>
  </div>

</template>

<script>
    export default {
        name: "IndexSectionPorlist",
      props:["indexData"],

    }
</script>

<style scoped>

</style>

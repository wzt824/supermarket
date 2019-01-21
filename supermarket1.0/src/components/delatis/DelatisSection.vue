<template>
    <div class="delatisBox">
      <delatis-section-banner :indexData="indexData"></delatis-section-banner>
      <delatis-section-price-box></delatis-section-price-box>
      <delatis-section-serve></delatis-section-serve>
      <delatis-section-dicuss></delatis-section-dicuss>
      <delatis-section-you-like></delatis-section-you-like>
      <delatis-section-you-del></delatis-section-you-del>
      <delatis-section-you-param></delatis-section-you-param>
      <delatis-section-back-top></delatis-section-back-top>
    </div>
</template>

<script>
    import $ from "jQuery/tmp/jquery";
    import DelatisSectionBanner from "./DelatisSectionBanner";
    import DelatisSectionPriceBox from "./DelatisSectionPriceBox";
    import DelatisSectionServe from "./DelatisSectionServe";
    import DelatisSectionDicuss from "./DelatisSectionDicuss";
    import DelatisSectionYouLike from "./DelatisSectionYouLike";
    import DelatisSectionYouDel from "./DelatisSectionYouDel";
    import DelatisSectionYouParam from "./DelatisSectionYouParam";
    import DelatisSectionBackTop from "./DelatisSectionBackTop";
    export default {
      name: "DelatisSection",
      components: {
        DelatisSectionBackTop,
        DelatisSectionYouParam,
        DelatisSectionYouDel,
        DelatisSectionYouLike,
        DelatisSectionDicuss, DelatisSectionServe, DelatisSectionPriceBox, DelatisSectionBanner},
      props:["indexData"],
      // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
      mounted () {
        window.addEventListener('scroll', this.scrollToTop)
      },


      methods: {
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop() {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop>284){
            document.getElementsByClassName("backTop")[0].style.cssText="display:block";
            document.getElementsByClassName("delatisHeader")[0].style.cssText="background: rgba(255,255,255,1);transition:all .3s";
            document.getElementsByClassName("backTop")[0].onclick = function(){
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          }else{
            document.getElementsByClassName("backTop")[0].style.cssText="display:none";
            document.getElementsByClassName("delatisHeader")[0].style.cssText="background: rgba(255,255,255,0);transition:all 2s";
          }

        }
      }

    }
</script>

<style scoped>
  .delatisBox{
    margin-bottom: .5rem;
  }
</style>

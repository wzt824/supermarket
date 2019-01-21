<template>
    <div class="vipSectionBox">
      <vip-section-header></vip-section-header>
      <vip-section-banner-top :indexData="indexData"></vip-section-banner-top>
      <vip-section-active-box :indexData="indexData"></vip-section-active-box>
      <vip-section-banner-bottom :indexData="indexData"></vip-section-banner-bottom>
      <vip-section-fixed></vip-section-fixed>
    </div>
</template>

<script scoped>
    import VipSectionHeader from "./VipSectionHeader";
    import VipSectionBannerTop from "./VipSectionBannerTop";
    import VipSectionBannerBottom from "./VipSectionBannerBottom";
    import VipSectionActiveBox from "./VipSectionActiveBox";
    import VipSectionFixed from "./VipSectionFixed";
    export default {
        name: "VipSection",
      components: {VipSectionFixed, VipSectionActiveBox, VipSectionBannerBottom, VipSectionBannerTop, VipSectionHeader},
      props:["indexData"],
      mounted(){
        window.addEventListener("scroll",this.vipTop)
      },
      methods:{
        vipTop(){
          var scrollTop = window.pageXOffset ||document.body.scrollTop || document.documentElement.scrollTop;
          if (scrollTop>45) {
            document.getElementsByClassName("vipHeaderBox")[0].style.cssText="background: rgba(195, 132, 31, 1);transition:all 1s";
          }else {
            document.getElementsByClassName("vipHeaderBox")[0].style.cssText="background: rgba(195, 132, 31, 0);";
          }
        }
      }
    }
</script>

<style scoped>
  .vipSectionBox{
    width: 100%;
    margin-bottom: .56rem;
  }
</style>

<template>
  <div class="banner">
    <div class="swiper-container" v-for="a in indexData">
      <div class="swiper-wrapper">
        <div class="swiper-slide"  v-for="(p,index) in a.bannerTop">
          <img :src="p.picImg" class="img">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import swipers from 'swiper'
  import SliderServer from  '../../apis/indexData'
    export default {
      name: "VipSectionBannerBottom",
      props:["indexData"],
      mounted(){
        new swipers(".swiper-container",{
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      },
    }
</script>

<style scoped>
  .swiper-pagination{
    bottom: -10px;
  }
</style>

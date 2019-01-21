<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper" :key="index" v-for="(p,index) in indexData">
        <div class="swiper-slide" :key="i" v-for="(a,i) in p.banner">
          <img :src="a.picImg" class="img">
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
        name: "VipSectionBannerTop",
      props:["indexData"],
      mounted(){

        this.$nextTick(function () {
          new swipers(".swiper-container",{
            autoplay: {
              disableOnInteraction: false,
              observer:true,
              observeParents:true
            },
            loop: true,
            pagination: {
              el: ".swiper-pagination"
            }
          });
        });
      },

    }
</script>

<style scoped>
  .swiper-pagination{
    bottom: -10px;
  }
</style>

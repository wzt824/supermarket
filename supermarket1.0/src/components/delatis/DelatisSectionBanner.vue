<template>
  <div class="bannerD">
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
        name: "DelatisSectionBanner",
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
    // data(){
    //   return{
    //     banner:[]
    //   }
    // },
    // methods:{
    //   /**
    //    * 初始化
    //    */
    //   _initData(){
    //     SliderServer.getBannerImg(data=>{
    //       this.banner = data.banner
    //       // var datas = data;
    //       console.info(this.banner)
    //     })
    //   },
    // },
    // created(){
    //   this._initData();
    // }
  }
</script>

<style scoped>

</style>

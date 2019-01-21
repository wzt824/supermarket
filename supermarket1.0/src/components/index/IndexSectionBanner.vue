<template>
  <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-for="(p,index) in indexData">
          <div class="swiper-slide" v-for="(a,i) in p.banner">
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
    name: "IndexSectionBanner",
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
  .banner{
    margin-top: 1.39rem;
  }
  .swiper-pagination{
    bottom: 30px;
    left: 0;
    width: 100%;
  }
</style>

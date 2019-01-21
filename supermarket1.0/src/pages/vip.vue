<template>
  <div class="VueVipBox">
    <vip-top></vip-top>
    <vip-section :indexData="indexData"></vip-section>
    <vip-footer></vip-footer>
  </div>

</template>

<script>
    import "../assets/css/vip.css"
    import VipFooter from "../components/vip/VipFooter";
    import VipSection from "../components/vip/VipSection";
    import VipTop from "../components/vip/VipTop";
    export default {
        name: "vip",
        components: {VipTop, VipSection, VipFooter},
        data() {
          return {
            "indexData": [
              {
                "banner": [
                  {"picImg": "/static/img/vipBanner01.png"},
                  {"picImg": "/static/img/vipBanner02.jpg"},
                  {"picImg": "/static/img/vipBanner03.png"},
                  {"picImg": "/static/img/vipBanner04.jpg"},
                  {"picImg": "/static/img/vipBanner05.jpg"},
                  {"picImg": "/static/img/vipBanner06.jpg"}
                ],
                "active":[
                  {"active": "/static/img/vipActive1.png"},
                  {"active": "/static/img/vipActive2.png"},
                  {"active": "/static/img/vipActive3.png"},
                  {"active": "/static/img/vipActive4.png"},
                  {"active": "/static/img/vipActive5.png"},
                  {"active": "/static/img/vipActive6.png"},
                ],
                "bannerTop": [
                  {"picImg": "/static/img/vipBanner01.png"},
                  {"picImg": "/static/img/vipBanner02.jpg"},
                  {"picImg": "/static/img/vipBanner03.png"},
                  {"picImg": "/static/img/vipBanner04.jpg"},
                  {"picImg": "/static/img/vipBanner05.jpg"},
                  {"picImg": "/static/img/vipBanner06.jpg"}
                ],
              }]
          }
    }
    }
</script>

<style scoped>
  .VueVipBox{
    width: 100%;
  }
</style>

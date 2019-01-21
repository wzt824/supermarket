<template>
    <div class="sectionBox">
        <index-section-banner :indexData="indexData"></index-section-banner>
        <index-section-classify :indexData="indexData"></index-section-classify>
        <index-section-go :indexData="indexData"></index-section-go>
        <index-section-welface1 :indexData="indexData"></index-section-welface1>
        <index-section-day :indexData="indexData"></index-section-day>
        <index-section-img></index-section-img>
        <index-section-porlist :indexData="indexData"></index-section-porlist>
        <index-section-porlist></index-section-porlist>
        <index-section-porlist></index-section-porlist>
        <index-section-porlist></index-section-porlist>
        <index-section-img></index-section-img>
        <index-section-porlist></index-section-porlist>
    </div>
</template>

<script>
    import IndexSectionBanner from "./IndexSectionBanner";
    import IndexSectionClassify from "./IndexSectionClassify";
    import IndexSectionGo from "./IndexSectionGo";
    import IndexSectionWelface from "./IndexSectionWelface";
    import IndexSectionImg from "./IndexSectionImg";
    import IndexSectionWelface1 from "./IndexSectionWelface1";
    import IndexSectionDay from "./IndexSectionDay";
    import IndexSectionPorlist from "./IndexSectionPorlist";
    export default {
        name: "IndexSection",
        props:["indexData"],
        components: {
          IndexSectionPorlist,
          IndexSectionDay,
          IndexSectionWelface1,
          IndexSectionImg, IndexSectionGo, IndexSectionClassify, IndexSectionBanner},
        mounted(){
          window.addEventListener("scroll",this.backTop)
        },
        methods:{
          backTop(){
            var scrollTop = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop>100){
              document.getElementsByClassName("headerTop")[0].style.cssText="display:none";
              document.getElementsByClassName("sectionBox")[0].style.cssText="margin-top:.77rem";
            }else {
              document.getElementsByClassName("headerTop")[0].style.cssText="display:block";
              document.getElementsByClassName("sectionBox")[0].style.cssText="margin-top:1.38rem";
            }
          }
        }
    }
</script>

<style scoped>
    .sectionBox{
      width: 100%;
      /*-webkit-flex: 1;*/
      /*overflow-y: auto;*/
      margin-bottom: .56rem;
    }
</style>

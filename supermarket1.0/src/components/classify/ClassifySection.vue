<template>
  <div class="vuesecBox">
    <section>
      <classify-section-left :classData="classData" :changeNum="changeNum" :aaa="aaa"></classify-section-left>
      <class-ify-section-right :classData="classData" :num="num"></class-ify-section-right>
    </section>
  </div>

</template>

<script>
    // import $ from "jQuery";
    import ClassifySectionLeft from "./ClassifySectionLeft";
    import ClassIfySectionRight from "./ClassIfySectionRight";
    export default {
        name: "ClassifySection",
        components: {ClassIfySectionRight, ClassifySectionLeft},
        props:["classData"],
        data(){
          return{
            num:0,
            aaa:null
          }
        },
        methods:{
          changeNum(i){
            this.num = i;this.aaa = 0;this.aaa = i;
            // console.info(this.num)
          }
        },
        // mounted(){
        //   this.$nextTick(function () {
        //     var aa = document.getElementById("UlsLeft").childNodes;
        //     for (let i=0;i<aa;i++){
        //       aa[0].style.cssText = "background:green";
        //
        //     }
        //     console.log(aa)
        //
        //   })
        // }
    }
</script>

<style scoped>
  .vuesecBox{
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>

<template>
  <div>
    <a class="imgBox" href="javascript:;" :key="index" v-for="(p,index) in imgBoxs">
      <img :src="p.picImg" alt="">
    </a>
  </div>

</template>

<script>
  import ImgServer from  '../../apis/indexData'
    export default {
        name: "IndexSectionImg",
      data(){
          return{
            imgBoxs:[]
        }
      },
      methods:{
          _createImg(){
            ImgServer.getImgBoxs(data=>{
              this.imgBoxs = data.imgBoxs
            })
          }
      },
      created(){
          this._createImg();
      }
    }
</script>

<style scoped>

</style>

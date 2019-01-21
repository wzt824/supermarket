<template>
    <div>
      <b class="goBox" :item="a" :key="i" v-for="(a,i) in indexData[0].active1">
        <a class="go">
          <img :src="a.picImg" alt="">
        </a>
        <div class="welface">
          <a href="javascript:;" :key="n" v-for="(d,n) in a.imgBox">
            <img :src="d.picImg" alt="">
          </a>
        </div>
      </b>
    </div>
</template>

<script>
    export default {
        name: "IndexSectionGo",
      props:["indexData"]
    }
</script>

<style scoped>

</style>

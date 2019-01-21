<template>
  <div>
    <div class="delImg" v-for="b in delListData">
      <img :src="b.typeImg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "delListSectionImg",
        props:["delListData"]
    }
</script>

<style scoped>
  .delImg{
    width: 100%;
    height: 1.5rem;
  }
</style>

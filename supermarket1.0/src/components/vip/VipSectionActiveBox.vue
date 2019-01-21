<template>
  <div>
    <div class="activeBox" v-for="a in indexData">
      <a href="javascript:;" class="vipActive" v-for="b in a.active">
        <img :src="b.active" alt="">
      </a>
    </div>
  </div>
</template>

<script>
    export default {
      name: "VipSectionActiveBox",
      props:["indexData"]
    }
</script>

<style scoped>

</style>

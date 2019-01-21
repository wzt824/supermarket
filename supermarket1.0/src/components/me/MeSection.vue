<template>
  <div class="meSecBox">
    <me-section-header></me-section-header>
    <me-section-bill-box1></me-section-bill-box1>
    <me-section-bill-box2></me-section-bill-box2>
    <me-section-bill-box3></me-section-bill-box3>
  </div>
</template>

<script>
    import MeSectionHeader from "./MeSectionHeader";
    import MeSectionBillBox1 from "./MeSectionBillBox1";
    import MeSectionBillBox2 from "./MeSectionBillBox2";
    import MeSectionBillBox3 from "./MeSectionBillBox3";
    export default {
        name: "MeSection",
      components: {MeSectionBillBox3, MeSectionBillBox2, MeSectionBillBox1, MeSectionHeader}
    }
</script>

<style scoped>
  .meSecBox{
    width: 100%;
    flex: 1;
    overflow-y: auto;
  }
</style>

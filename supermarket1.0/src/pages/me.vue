<template>
    <div class="meVueBox">
      <me-section></me-section>
      <me-footer></me-footer>
    </div>
</template>

<script>
    import "../assets/css/me.css"
    import MeSection from "../components/me/MeSection";
    import MeFooter from "../components/me/MeFooter";
    export default {
        name: "me",
      components: {MeFooter, MeSection}
    }
</script>

<style scoped>
  .meVueBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

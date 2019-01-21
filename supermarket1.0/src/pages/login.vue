<template>
  <div class="_LoginBox">
    <login-header></login-header>
    <login-section></login-section>
  </div>
</template>

<script>
    import "../assets/css/login.css";
    import LoginHeader from "../components/login/LoginHeader";
    import LoginSection from "../components/login/LoginSection";
    export default {
        name: "login",
      components: {LoginSection, LoginHeader}
    }
</script>

<style scoped>
  ._LoginBox{
    width: 100%;
  }
</style>

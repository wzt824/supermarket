<template>
  <div class="loginSectionBox">
    <login-section-tab></login-section-tab>
    <login-section-id></login-section-id>
    <LoginSectionD></LoginSectionD>
    <login-section-other></login-section-other>
    <LoginSectionTemawork></LoginSectionTemawork>
  </div>
</template>

<script>
    import LoginSectionTab from "./LoginSectionTab";
    import LoginSectionId from "./LoginSectionId";
    import LoginSectionD from "./LoginSectionD";
    import LoginSectionOther from "./LoginSectionOther";
    import LoginSectionTemawork from "./LoginSectionTemawork";
    export default {
        name: "LoginSection",
      components: {LoginSectionTemawork, LoginSectionOther, LoginSectionD, LoginSectionId, LoginSectionTab}
    }
</script>

<style scoped>
    .loginSectionBox{
      width: 100%;
      padding: 0 .22rem;
      box-sizing: border-box;
      background: #f6f6f6;
      flex: 1;
      overflow-y: auto;
    }
</style>

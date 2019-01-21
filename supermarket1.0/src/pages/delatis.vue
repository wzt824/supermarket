<template>
    <div class="delBox">
      <delatis-header ></delatis-header>
      <delatis-section :indexData="indexData"></delatis-section>
      <delatis-footer></delatis-footer>
    </div>
</template>

<script>
    import "../assets/css/delatis.css"
    import DelatisHeader from "../components/delatis/DelatisHeader";
    import DelatisSection from "../components/delatis/DelatisSection";
    import DelatisFooter from "../components/delatis/DelatisFooter";
    export default {
        name: "delatis",
        components: {DelatisFooter, DelatisSection, DelatisHeader},
        data() {
          return {
            "indexData": [
              {
                "banner": [
                  {"picImg": "/static/img/db.jpg"},
                  {"picImg": "/static/img/db1.jpg"},
                  {"picImg": "/static/img/db2.jpg"},
                  {"picImg": "/static/img/db1.jpg"},
                  {"picImg": "/static/img/db2.jpg"},
                  {"picImg": "/static/img/db.jpg"}
                ],
              },

              ],
            num:""
          }
        },
        mounted(){
          let oog=this.$route.params.id;
          this.num = oog;
        }
    }
</script>

<style scoped>
  .delBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

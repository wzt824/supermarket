<template>
    <div class="castsBox">
      <carts-section-cen-box @ShopsChecked="ShopCheck" @SubShopsChecked="SubShopCheck" :cartsData="cartsData"  :add="add" :minus="minus"></carts-section-cen-box>
      <carts-section-account @ShopsChecked="ShopCheck" :cartsData="cartsData" :getSum="getSum"></carts-section-account>
    </div>
</template>
<script>
    import CartsSectionCenBox from "./CartsSectionCenBox";
    import CartsSectionAccount from "./CartsSectionAccount";
    export default {
        name: "CartsSection",
        components: {CartsSectionAccount, CartsSectionCenBox},
        props:["cartsData","add","minus","getSum"],
        methods:{
          ShopCheck(){
            this.$emit("ShopCheck")
          },
          SubShopCheck(){
            this.$emit("SubShopCheck")
          }
        }
    }
</script>

<style scoped>
  .castsBox{
    width: 100%;
    -webkit-flex: 1;
    overflow-y: auto;
  }

</style>

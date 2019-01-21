<template>
  <div class="account">
    <div class="selectAll" v-for="a in cartsData">
      <div class="selectMenu">
        <input type="checkbox" class="inputs" id="labelsALL" v-model="a.checked" @change="changeCheck">
        <label for="labelsALL"></label>
      </div>
      <span>全选</span>
    </div>
    <div class="calculate">
      <p class="totalBox">合计:
        <span class="total">￥<span class="totalPrice">{{cartsData | counteCarts}}</span></span>
      </p>
      <p class="totalBox2">
        总额:<span class="total">￥<span class="totalPrice">{{cartsData | counteCarts}}</span></span>&nbsp;&nbsp;
        优惠:<span class="total">￥<span class="totalPrice">0.00</span></span>
      </p>
    </div>
    <div class="accBox">
      <p>结算(<span id="spanBox">{{getSum}}</span>)</p>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CartsSectionAccount",
      props:["cartsData","getSum"],
      filters:{
        counteCarts(cartsData){
          let total=0;
          let SunQul=0;
          // let arr=[];
          cartsData[0].shops.forEach((products,pid)=>{
            if(products.checked){
              total += products.price * products.qal;
              SunQul += products.qal;
            }
            // document.getElementById("spanBox").innerHTML = SunQul;
          });
         return total.toFixed(2);
        },
      },
      methods:{
        changeCheck(){
          this.$emit("ShopsChecked")
        },
      },
    }
</script>

<style scoped>

</style>

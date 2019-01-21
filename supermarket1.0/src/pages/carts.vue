<template>
  <div class="cartsBox">
    <carts-header></carts-header>
    <carts-section :cartsData="cartsData" @ShopCheck="checkAll" :SubShopCheck="checkNoAll" :add="addQal" :minus="minusQal" :getSum="getSum"></carts-section>
    <carts-footer></carts-footer>
  </div>
</template>

<script>
    import "../assets/css/carts.css";
    import CartsHeader from "../components/carts/CartsHeader";
    import CartsSection from "../components/carts/CartsSection";
    import CartsFooter from "../components/carts/CartsFooter";
    export default {
        name: "carts",
        components: {CartsFooter, CartsSection, CartsHeader},
        data() {
          return {
            cartsData: [
              {
                "userid": 2.0,
                "totalPrice": 0.0,
                "discounts":0.0,
                "checked": true,
                "TotalSum":0,
                "shops": [
                  {
                    "title": "金龙鱼非转基因黄金比例调和油1.8L",
                    "pic": "/static/img/c2.png",
                    "price": 59.20,
                    "qal": 1.0,
                    "checked": true
                  },
                  {
                    "title": "太平梳打饼干 奶盐味 600g",
                    "pic": "/static/img/p1.jpg",
                    "price": 120.80,
                    "qal": 3.0,
                    "checked": true
                  },
                  {
                    "title": "鸡小腿 约500g",
                    "pic": "/static/img/db2.jpg",
                    "price": 12.80,
                    "qal": 1.0,
                    "checked": true
                  },
                  {
                    "title": "立白新金桔洗洁精 1.29kg",
                    "pic": "/static/img/xxx1.jpg",
                    "price": 213.80,
                    "qal": 1.0,
                    "checked": true
                  },
                  {
                    "title": "立白新金桔洗洁精 1.29kg",
                    "pic": "/static/img/xxx1.jpg",
                    "price": 213.80,
                    "qal": 1.0,
                    "checked": true
                  }
                ]
              }
            ],
          }
        },
        methods:{
          /**
           * 全选
           */
          checkAll(){
            let isCheck =  this.cartsData[0].checked;
            this.cartsData[0].shops.forEach((products,pid)=>{
              products.checked=isCheck;
            });
          },

          /**
           * 加
           */
          addQal(i){
            this.cartsData[0].shops[i].qal++
          },
          /**
           * 减
           */
          minusQal(i){
            this.cartsData[0].shops[i].qal--;
            if(this.cartsData[0].shops[i].qal <= 1){
              this.cartsData[0].shops[i].qal = 1
            }
          },

        },
      computed:{
        /**
         * 求和
         */
        getSum(){
          var numb = 0;
          var shops = this.cartsData[0].shops;
          for (let i=0;i<shops.length;i++){
            if(this.cartsData[0].shops[i].checked){
              numb += shops[i].qal;
            }
          }
          return this.cartsData[0].TotalSum=numb;
        },
        /**
         * 非全选
         */
        checkNoAll(){
          /* 方法一 */
          // this.cartsData[0].checked = this.cartsData[0].shops.every(i=>i.checked);
          /* 方法二 */
          let shops = this.cartsData[0].shops;
          let num = 0;
          for (let i=0,len=shops.length;i<len;i++){
            if (shops[i].checked){
              num++;
            }
            if(num == shops.length){
              this.cartsData[0].checked = true;
            }else {
              this.cartsData[0].checked = false;
            }
          }
        },
      },
      // watch:{
      //   cartsData:{
      //       handler(n,o){
      //         this.checkNoAll()
      //       },
      //       deep:true
      //     }
      // }
    }
</script>

<style scoped>
  .cartsBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

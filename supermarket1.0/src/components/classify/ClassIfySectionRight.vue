<template>
  <ul class="secRight" >
    <b :key="index" v-for="(p,index) in classData[num].subkey1">
      <!--<b :key="index" v-for="(a,index) in p.subkey1">-->
        <li :key="index" v-for="(b,index) in p.products" @click="skip(index)">
          <!--<router-link tag="a" to="/delatis">-->
          <a href="javascript:;">
            <span class="secRimg"><img :src="b.picImg" alt=""></span>
            <div class="secprice">
              <p>{{b.picTitle}}</p>
              ￥<sub>{{b.price}}</sub>
              <div class="secAdd">+</div>
            </div>
          </a>
          <!--</router-link>-->
        </li>
      <!--</b>-->
    </b>
  </ul>
</template>

<script>
    export default {
         name: "ClassIfySectionRight",
        props:["classData","num"],
        methods:{
          skip(id){
            this.$router.push({path:`/delatis/${id}`})
          }
        }
    }
</script>

<style scoped>

</style>

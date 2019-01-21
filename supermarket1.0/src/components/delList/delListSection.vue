<template>
    <div class="delListSectionBox">
      <del-list-section-img :delListData="delListData"></del-list-section-img>
      <del-list-section-class :delListData="delListData" :change="change" :aaa="aaa"></del-list-section-class>
      <del-lister-section-type-box :delListData="delListData" :num="num"></del-lister-section-type-box>
    </div>
</template>

<script>
    import DelListSectionImg from "./delListSectionImg";
    import DelListSectionClass from "./delListSectionClass";
    import DelListerSectionTypeBox from "./delListerSectionTypeBox";
    export default {
        name: "delListSection",
        components: {DelListerSectionTypeBox, DelListSectionClass, DelListSectionImg},
        props:["delListData"],
        data(){
            return{
              num:0,
              aaa:0
            }
        },
        methods:{
          change(i){
            this.num =i;
            this.aaa=0;
            this.aaa=i;
            console.log(this.num);
          }
        }
    }
</script>

<style scoped>
  .delListSectionBox{
    width: 100%;
    flex: 1;
    overflow-y: auto;
  }
</style>

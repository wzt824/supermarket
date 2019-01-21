<template>
  <div>
    <div v-for="a in delListData">
      <div class="typeBox" v-for="b in a.subBox[num].subMinBox">
        <div class="typeImg">
          <img :src="b.subTypeImg" alt="">
        </div>
        <div class="specialBox">
          <div class="special" v-for="c in b.subTypePro">
            <div class="specLeft">
              <img :src="c.subTypeProImg" alt="">
              <div class="active">
                <img :src="c.subTypeProActive" alt="">
              </div>
            </div>
            <div class="specRight">
              <div class="specRTop">
                <p>{{c.subTypeProName}}</p>
              </div>
              <div class="specRBottom">
                <p>￥<span class="price">{{c.subTypeProPrice}}</span></p>
                <!--<span class="zhePrice">￥10.00</span>-->
                <i>立即抢购</i>
              </div>
            </div>
          </div>
        </div>
        <ul class="proList">
          <li v-for="d in b.subList">
            <div class="subMinImg" >
              <img :src="d.subListImg" alt="">
              <img class="subActive" :src="d.subListActive" alt="">
            </div>
            <div class="subMinTxt">
              <p>{{d.subListName}}</p>
            </div>
            <div class="subMinPrice">
              <p class="subListZhePrice">￥<span>{{d.subListZhePrice}}</span></p>
              <p class="subListPrice">￥<span>{{d.subListPrice}}</span></p>
              <div class="addCar"></div>
            </div>
          </li>
        </ul>
        <div class="proList2">
          <div class="ProListMinBox" v-for="e in b.subListSpe">
              <div class="ProLeft">
                <img :src="e.subListImg" alt="">
              </div>
              <div class="ProRight">
                <p>{{e.subListName}}</p>
                <div class="ProPriceBox">
                  <span class="ProPrice">￥<span class="ProPrice1">{{e.subListPrice}}</span></span>
                  <span class="ProZhePrice">￥<span class="ProPrice1">{{e.subListZhePrice}}</span></span>
                  <span class="span">去抢购</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="delFooter"><img :src="a.typeFooter" alt=""></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "delListerSectionTypeBox",
        props:["delListData","num"],
        methods:{

        }
    }
</script>

<style scoped>
  img{
    height: 99%!important;
  }
  .typeBox{
    width: 100%;
    font-size: .16rem;
    color: #09090d;
    overflow: hidden;
  }
  .typeImg{
    width: 100%;
    height: .4rem;
    margin-bottom: .02rem;
  }
  .specialBox{
    margin: .1rem 0;
    background: white;
  }
  .special{
    width: 100%;
    height: 1.58rem;
    display: flex;
  }
  .special .specLeft{
    width: 1.55rem;
    height: 1.55rem;
    position: relative;
    margin-right: .1rem;
  }
  .special .active{
    width: 1.55rem;
    height: 1.55rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  .special .specRight{
    flex: 1;
    padding-right: .1rem;
    position: relative;
  }
  .specRTop p{
    width: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: .15rem 0 .1rem;
  }
  .specRBottom{
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    position: absolute;
    right: 0;
    bottom: .06rem;
  }
  .specRBottom P{
    color: #ff680a;
    font-size: .16rem;
    margin-right: .08rem;
    float: left;
  }
  .specRBottom P .price{
    font-size: .24rem;
  }
  .specRBottom .zhePrice{
    font-size: .2rem;
    text-decoration: line-through;
    color: #5e5e5e;
    float: left;
  }
  .specRBottom i{
    font-style: inherit;
    display: block;
    float: right;
    line-height: .10rem;
    font-size: .12rem;
    padding: .07rem .12rem;
    background: #ff741f;
    color: white;
    margin-right: .1rem;
    border-radius: .03rem;
  }
  .proList{
    overflow: hidden;
  }
  .proList li{
    float: left;
    background: white;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .subMinImg{
    width: 1.14rem;
    height: 1.14rem;
    overflow: hidden;
    padding: .05rem;
    position:relative ;
  }
  .subMinImg .subActive{
    position: absolute;
    top: 0;
    left: .1rem;
  }
  .subMinTxt{
    width: 1.04rem;
    padding: 0 .1rem;
    height: .32rem;
    margin-top: .1rem;
    font-size: .12rem;
  }
  .subMinPrice{
    width: 1.04rem;
    height: .45rem;
    padding: .1rem;
    position: relative;
  }
  .subListZhePrice{
    text-decoration: line-through;
  }
  .subListPrice{
    color: #f46c18;
  }
  .addCar{
    width: .26rem;
    height: .26rem;
    background-image:url("/static/img/add.png");
    background-position: 0 0;
    border-radius: 50%;
    position: absolute;
    bottom: .14rem;
    right: .08rem;
  }
  .addCar:hover{
    background-image:url("/static/img/add1.png");
    background-position: 0 0;
  }
  .proList2{
    background: white;
  }
  .proList2 .ProListMinBox{
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 0 .2rem 0 0;
  }
  .proList2 .ProListMinBox .ProLeft{
    width: .9rem;
    height: .9rem;
    padding: .1rem;
  }
  .proList2 .ProListMinBox .ProRight{
    flex: 1;
    position: relative;
  }
  .proList2 .ProListMinBox .ProRight p{
    margin-top: .15rem;
    width: 2.4rem;
    font-size: .14rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ProPriceBox{
    width: 100%;
    position: absolute;
    bottom: .1rem;
    left: 0;
  }
  .ProPriceBox .ProPrice{
    color: #ff702a;
    float: left;
    margin-right: .1rem;
  }
  .ProPriceBox .ProZhePrice{
    float: left;
    text-decoration: line-through;
  }
  .ProPriceBox .ProPrice1{
    font-size: .2rem;
  }
  .ProPriceBox .span{
    padding: .02rem .1rem;
    background: #ff702a;
    float: right;
    color: white;
    border-radius: .03rem;
  }

  .delFooter{
    width: 100%;
    height: .55rem;
  }
</style>

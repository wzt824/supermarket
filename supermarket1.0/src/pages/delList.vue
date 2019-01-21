<template>
  <div class="delListBox">
    <del-list-header></del-list-header>
    <del-list-section :delListData="delListData"></del-list-section>
  </div>
</template>

<script>
    import DelListHeader from "../components/delList/delListHeader";
    import DelListSection from "../components/delList/delListSection";
    export default {
        name: "delList",
        components: {DelListSection, DelListHeader},
        data(){
          return{
        "delListData":[
          {
            "type":"肉蛋水产",
            "typeImg":"/static/img/rou.png",
            "subBox":[
              {
                "subType":"安心好蛋",
                "subMinBox":[
                  {
                    "subType":"安心好蛋",
                    "subTypeImg":"/static/img/subType01.png",
                    "subTypePro":[
                      {
                        "subTypeProName":"黄壳鸡蛋 8枚",
                        "subTypeProImg":"/static/img/pro01.jpg",
                        "subTypeProZhePrice":"",
                        "subTypeProPrice":"5.50",
                        "subTypeProActive":"/static/img/proActive.png"
                      }
                    ],
                    "subList":[
                      {
                        "subListName":"长军松花皮蛋 15枚",
                        "subListImg":"/static/img/proList01.jpg",
                        "subListZhePrice":"",
                        "subListPrice":"29.90",
                        "subListActive":"/static/img/proActive.png"
                      },
                      {
                        "subListName":"长军土鸡蛋 15枚",
                        "subListImg":"/static/img/proList02.jpg",
                        "subListZhePrice":"16.90",
                        "subListPrice":"13.90",
                        "subListActive":"/static/img/proActive.png"
                      },
                      {
                        "subListName":"长军土鸡蛋 15枚",
                        "subListImg":"/static/img/proList02.jpg",
                        "subListZhePrice":"16.90",
                        "subListPrice":"13.90",
                        "subListActive":"/static/img/proActive.png"
                      }
                    ]},
                ]

              },
              {
                "subType":"营养猪肉",
                "subMinBox":[{
                  "subType":"营养猪肉",
                  "subTypeImg":"/static/img/subType02.png",
                  "subList":[
                    {
                      "subListName":"五花肉丁 约300g",
                      "subListImg":"/static/img/proList03.jpg",
                      "subListZhePrice":"",
                      "subListPrice":"10.90",
                      "subListActive":"/static/img/proActive.png"
                    },
                    {
                      "subListName":"五花肉片 约300g",
                      "subListImg":"/static/img/proList04.jpg",
                      "subListZhePrice":"16.90",
                      "subListPrice":"10.90",
                      "subListActive":"/static/img/proActive.png"
                    }
                  ]
                }]

              },
              {
                "subType":"牛/羊/禽肉",
                "subMinBox":[{
                  "subType":"牛/羊/禽肉",
                  "subTypeImg":"/static/img/subType03.png",
                  "subListSpe":[
                    {
                      "subListName":"骨肉相连 约30g/串",
                      "subListImg":"/static/img/proList05.jpg",
                      "subListZhePrice":"",
                      "subListPrice":"0.99",
                      "subListActive":"/static/img/proActive.png"
                    },
                    {
                      "subListName":"恒都西冷牛排 约130g",
                      "subListImg":"/static/img/proList06.jpg",
                      "subListZhePrice":"14.90",
                      "subListPrice":"11.90",
                      "subListActive":"/static/img/proActive.png"
                    }
                  ]
                }]

              },
              {
                "subType":"牛/羊/禽肉",
                "subMinBox":[{
                  "subType":"牛/羊/禽肉",
                  "subTypeImg":"/static/img/subType03.png",
                  "subListSpe":[
                    {
                      "subListName":"骨肉相连 约30g/串",
                      "subListImg":"/static/img/proList05.jpg",
                      "subListZhePrice":"",
                      "subListPrice":"0.99",
                      "subListActive":"/static/img/proActive.png"
                    },
                    {
                      "subListName":"恒都西冷牛排 约130g",
                      "subListImg":"/static/img/proList06.jpg",
                      "subListZhePrice":"14.90",
                      "subListPrice":"11.90",
                      "subListActive":"/static/img/proActive.png"
                    }
                  ]
                }]

              },
            ],
            "typeFooter":"/static/img/delFooter.jpg"
          },
        ],
      }
    },

    }
</script>

<style scoped>
  .delListBox{
    width: 100%;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
  }
</style>

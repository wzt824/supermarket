<template>
    <div class="classBox">
      <classify-header></classify-header>
      <classify-section :classData="classData"></classify-section>
      <classify-footer></classify-footer>
    </div>
</template>

<script>
    import "../assets/css/classify.css";
    import ClassifyHeader from "../components/classify/ClassifyHeader";
    import ClassifySection from "../components/classify/ClassifySection";
    import ClassifyFooter from "../components/classify/ClassifyFooter";
    export default {
        name: "classify",
        components: {ClassifyFooter, ClassifySection, ClassifyHeader},
        data(){
              return{
            "classData":[
              {
                "type":"推荐商品",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                    {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                  ]
                },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"蔬菜水果",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist1.jpg", "picTitle":"进口龙眼 约500g/盒","price":"10.80"}
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                    ]
                  }]
              },
              {
                "type":"肉蛋水产",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                    ]
                  }]
              },
              {
                "type":"粮油散货",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                      {"picImg":"/static/img/type11.png","picTitle":"陶华碧老干妈风味豆豉油辣椒 280g","price":"8.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"熟食速食",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2..jpg", "picTitle":"统一100老坛酸菜牛肉五合一 121g*5","price":"11.90"},
                      {"picImg":"/static/img/prolist3.jpg","picTitle":"双汇王中王特级火腿肠 30g*9","price":"9.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/prolist4.jpg","picTitle":"鑫麦客雪花馒头 400g","price":"4.90"},
                    ]
                  }]
              },
              {
                "type":"推荐商品",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"蔬菜水果",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist1.jpg", "picTitle":"进口龙眼 约500g/盒","price":"10.80"}
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                    ]
                  }]
              },
              {
                "type":"肉蛋水产",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"粮油散货",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                      {"picImg":"/static/img/type11.png","picTitle":"陶华碧老干妈风味豆豉油辣椒 280g","price":"8.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"熟食速食",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2..jpg", "picTitle":"统一100老坛酸菜牛肉五合一 121g*5","price":"11.90"},
                      {"picImg":"/static/img/prolist3.jpg","picTitle":"双汇王中王特级火腿肠 30g*9","price":"9.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/prolist4.jpg","picTitle":"鑫麦客雪花馒头 400g","price":"4.90"},
                    ]
                  }]
              },
              {
                "type":"推荐商品",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"蔬菜水果",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist1.jpg", "picTitle":"进口龙眼 约500g/盒","price":"10.80"}
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                    ]
                  }]
              },
              {
                "type":"肉蛋水产",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2.png", "picTitle":"鲜美来带鱼段 600g","price":"15.90"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"粮油散货",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/type1.jpg", "picTitle":"鲁花压榨特香菜籽油5.436L","price":"59.90"},
                      {"picImg":"/static/img/type11.png","picTitle":"陶华碧老干妈风味豆豉油辣椒 280g","price":"8.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/type12.jpg","picTitle":"长军土鸡蛋 15枚","price":"13.90"},
                    ]
                  }]
              },
              {
                "type":"熟食速食",
                "subkey1":[
                  {"tabType":"热卖top","products":[
                      {"picImg":"/static/img/prolist2..jpg", "picTitle":"统一100老坛酸菜牛肉五合一 121g*5","price":"11.90"},
                      {"picImg":"/static/img/prolist3.jpg","picTitle":"双汇王中王特级火腿肠 30g*9","price":"9.80"},
                    ]
                  },{
                    "tabType":"什么值得买","products":[
                      {"picImg":"/static/img/prolist4.jpg","picTitle":"鑫麦客雪花馒头 400g","price":"4.90"},
                    ]
                  }]
              },
              ]
          }
        }
    }
</script>
<style src="../assets/css/classify.css"></style>
<style scoped>
  .classBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<template>
    <div class="indexBox">
      <index-header></index-header>
      <index-section :indexData="indexData"></index-section>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import "../assets/css/index.css";
    import iconfonts from "../assets/css/iconfont.css";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexSection from "../components/index/IndexSection";
    import IndexFooter from "../components/index/IndexFooter";
    export default {
        name: "index",
        components: {IndexFooter, IndexSection, IndexHeader,iconfonts},
        data() {
          return {
            "indexData": [
              {
                "banner": [
                  {"picImg": "/static/img/ups1.jpg"},
                  {"picImg": "/static/img/ups2.jpg"},
                  {"picImg": "/static/img/ups3.jpg"},
                  {"picImg": "/static/img/ups1.jpg"},
                  {"picImg": "/static/img/ups2.jpg"},
                  {"picImg": "/static/img/ups3.jpg"}
                ],
                "classify":[
                  {classImg:"/static/img/c1.2ea74fb.png",classTitle:"精选果蔬"},
                  {classImg:"/static/img/c2.png",classTitle:"肉蛋水产"},
                  {classImg:"/static/img/c3.png",classTitle:"奶饮熟食"},
                  {classImg:"/static/img/c4.png",classTitle:"粮油速食"},
                  {classImg:"/static/img/c5.png",classTitle:"厨房调味"},
                  {classImg:"/static/img/c6.png",classTitle:"休闲零食"},
                  {classImg:"/static/img/c7.png",classTitle:"酒水饮料"},
                  {classImg:"/static/img/c8.png",classTitle:"纸品家清"},
                  {classImg:"/static/img/c9.png",classTitle:"美妆个护"},
                  {classImg:"/static/img/c10.png",classTitle:"母婴家居"}
                ],
                "active1":[
                  {
                    "picImg": "/static/img/go.gif",
                    "imgBox":[
                      {"picImg": "/static/img/class1.png"},
                      {"picImg": "/static/img/class2.png"}
                    ]
                  },
                ],
                "active2":[
                  {
                    "picImg": "/static/img/img1.png",
                    "imgBox":[
                      {"picImg": "/static/img/class2-1.png"},
                      {"picImg": "/static/img/class3.jpg"},
                      {"picImg": "/static/img/class2-2.png"}
                    ]
                  },
                ],
                "active3":[
                  {
                  "picImg": "/static/img/img2.png",
                  "productBox":[
                    {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                    {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                    {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"},
                    {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                    {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                    {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"},
                    {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                    {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                    {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"}
                  ]
                },
                ],
                "active4":[
                  {
                    "picImg": "/static/img/img3.png",
                    "productBox":[
                      {"ListImg":"/static/img/list1.png","listBox":[
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"},
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"}]
                      },
                      {"ListImg":"/static/img/list2.png","listBox":[
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"}]
                      },
                      {"ListImg":"/static/img/list3.png","listBox":[
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"},
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"}]
                      },
                      {"ListImg":"/static/img/list4.png","listBox":[
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"}]
                      },
                    ],
                  },
                  {
                    "picImg": "/static/img/img4.png",
                    "productBox":[
                      {"listBox":[
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/db2.jpg","proTitle":"鸡小腿 约500g","proPrice":"","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"},
                          {"proImg": "/static/img/p1.jpg","proTitle":"太平梳打饼干 奶盐味 600g","proPrice":"$15.90","proXian":"12.80"},
                          {"proImg": "/static/img/xxx1.jpg","proTitle":"立白新金桔洗洁精 1.29kg","proPrice":"","proXian":"13.50"}]
                      }
                    ],
                  },
                ]
              }]
          }
        }
    }
</script>
<!--<style  src="../assets/css/index.css"></style>-->
<style scoped>
  .indexBox{
    background: #f6f6f6;
    width: 100%;
    /*display: flex;*/
    /*flex-direction: column;*/
  }
</style>

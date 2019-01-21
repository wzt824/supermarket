import {indexUrl} from "../commons/ajaxIndexUrl";

export default {

  /**
   * 获取首页轮播图数据
   * @param calb
   */
  getBannerImg(calb){
    fetch(indexUrl).then(res=> {
      res.json().then(data => {
        calb(data)
      })
    })
  },

  /**
   * 获取活动图片
   * @param callback
   */
  getImgBoxs(callback){
    fetch(indexUrl).then(res=> {
      res.json().then(data => {
        callback(data)
      })
    })
  },
}

// index.ts

import swiper from "../../api/swiper"

// 获取应用实例
const app = getApp<IAppOption>()

interface swiperList {
  imageUrl:string,
  type:string,
  target:string,
  isLogin:false
}
Page({
  data: {
    swiperList:<swiperList[]>[],
    currentIndex:0
  },
  onSwiperChange(e:any){
    this.setData({
      currentIndex:e.detail.current
    })
  },  
  handleLogin(){
    wx.navigateTo({
      url:'/pages/login/index'
    })
    
  },
  handleSwiperItem(e:any){
     const {item} = e.currentTarget.dataset
    item.type === 'url' ? wx.navigateTo({
      url:`/pages/web-view/index?url=${item.target}`
    }) :wx.navigateTo({
      url:`/pages/product/detail?id=${item.target}`
    })
  },
  onLoad() {
    this.setData({
      isLogin:app.globalData.openid
    })
    swiper.list().then((res:any)=>{
      console.log('res',res);
      this.setData({
        swiperList:res.data
      })
    })
  }
  // getUserProfile() {
  //   // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
  //   wx.getUserProfile({
  //     desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
  //     success: (res) => {
  //       console.log(res)
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   })
  // }
})

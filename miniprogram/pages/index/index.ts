// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

interface swiperList {
  imageUrl:string,
  type:string,
  target:string
}
Page({
  data: {
    swiperList:<swiperList[]>[
      {
        imageUrl:"https://www.mclarencars.cn/content/dam/mclaren-automotive/models/720s/720s-spider/sustainment-2021/images/720S_Spider_Front34_Static.jpg",
        type:'url',
        target:"https://www.mclarencars.cn/cn-zh/super-series/720s-spider"
      },
      {
        imageUrl:"https://www.mclarencars.cn/content/dam/mclaren-automotive/models/720s/720s/sustainment-2021/images/360_revised.png",
        type:'url',
        target:"https://www.mclarencars.cn/cn-zh/super-series/720s"
      },
      {
        imageUrl:"https://www.mclarencars.cn/content/dam/mclaren-automotive/models/720s/720s-spider/sustainment-2021/images/720S_Spider_Front34_Static.jpg",
        type:'url',
        target:"https://www.mclarencars.cn/cn-zh/super-series/720s-spider"
      },
      {
        imageUrl:"https://www.mclarencars.cn/content/dam/mclaren-automotive/models/720s/720s/sustainment-2021/images/360_revised.png",
        type:'url',
        target:"https://www.mclarencars.cn/cn-zh/super-series/720s-spider"
      }
    ],
    currentIndex:0
  },
  onSwiperChange(e:any){
    this.setData({
      currentIndex:e.detail.current
    })
  },  
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad() {
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})

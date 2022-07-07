// app.ts
App<IAppOption>({
  globalData: {
    openid:wx.getStorageSync('openid') || ''
  },
  onLaunch() {
    // 初始化云环境
    wx.cloud.init({
      env:'mixue-1gtmlyu345a21b4e'
    })
  },
})
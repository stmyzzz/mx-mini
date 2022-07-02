// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 初始化云环境
    wx.cloud.init()
  },
})
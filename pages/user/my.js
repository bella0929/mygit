// pages/user/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wechat_code:"111WSSSS"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  copyTBL: function (e) {

    wx.setClipboardData({
      data: this.data.wechat_code,
      success: function (res) {
        // self.setData({copyTip:true}),
        wx.showModal({
          title: '提示',
          showCancel:false,
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            // } else if (res.cancel) {
            //   console.log('取消')
            }
          }
        })
      }
    });

  }



})
// pages/goodsdetail/goodsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      'https://img.alicdn.com/imgextra/i1/TB1nnTDeCBYBeNjy0FeYXHnmFXa_M2.SS2_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i7/TB1SuEzeCtYBeNjSspkYXHU8VXa_M2.SS2_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i8/TB174jEeCtYBeNjSspkYXHU8VXa_M2.SS2_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i1/2038648986/TB1zWfza5jQBKNjSZFnXXa_DpXa_!!0-item_pic.jpg_430x430q90.jpg'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 1500, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    inputShowed: false,
    inputVal: ""


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  previewImage(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  }  



})
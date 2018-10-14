// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId:1,
    goodsList:[
      {id:1,name:"精选"},
      { id: 2, name: "美食" },
      { id: 3, name: "母婴" },
      { id: 4, name: "水果" },
      { id: 5, name: "女装" },
      { id: 6, name: "百货" },
      { id: 7, name: "美妆" },
      { id: 8, name: "电器" },
      { id: 9, name: "男装" },
      { id: 10, name: "家纺" },
      { id: 11, name: "鞋包" },
      { id: 12, name: "运动" },
      { id: 13, name: "手机" },
      { id: 14, name: "内衣" },
      { id: 15, name: "文具" },
      { id: 16, name: "家装" },
      { id: 17, name: "汽车" },
    ]
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
  handleGoodsIdChange(e){
    this.setData({ goodsId: e.target.dataset.goodsId})
  },
  goOne(){
    wx.navigateTo({
      url: '/pages/9.9baoyou/9.9baoyou',
    })
  },
  goTwo() {
    wx.navigateTo({
      url: '/pages/gotwo/gotwo',
    })
  },
  goThree() {
    wx.navigateTo({
      url: '/pages/gothree/gothree',
    })
  },
  goSearch(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  goDetail(){
    wx.navigateTo({
      url: '/pages/goodsdetail/goodsdetail',
    })
  }
})
// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newses: [{
      "title": "1",
      "main": "2",
      "people": "3",
      "mt": "4"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
     var that = this;
    that.data.newses = [];
    var newNewses = []; 
     const db = wx.cloud.database()
     // 查询当前用户所有的 counters
     db.collection('newses').get({
       success: res => {
         var dataDB = res.data;
         for (let i = 0; i < dataDB.length; ++i) {
           console.log(dataDB[i])
           var news = {
             "title": dataDB[i].title,
             "main": dataDB[i].main,
             "people": dataDB[i].peopleOk+" 位用户觉得赞",
             "mt": dataDB[i].mt
           }
           newNewses.push(news)
         }
         this.setData({
           newses: newNewses
         })
         console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
           title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
       }
     })
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
  onShareAppMessage: function() {

  }
})
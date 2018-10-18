// pages/index/index.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    onload: false,
    goods: [{
        img: './images/goods_1.png',
        title: '化妆品',
        price: 25.9,
        sold: 132
      },
      {
        img: './images/goods_2.png',
        title: '化妆品',
        price: 25.9,
        sold: 132
      },
      {
        img: './images/goods_1.png',
        title: '化妆品',
        price: 25.9,
        sold: 132
      },
      {
        img: './images/goods_2.png',
        title: '化妆品',
        price: 25.9,
        sold: 132
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  onReachBottom() {
    this.setData({
      goods: this.data.goods.concat(this.data.goods)
    })
  }
})
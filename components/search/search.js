// components/search/search.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    backSwitch: {
      type: Boolean,
      value: false,
      observer: function (newVal, oldVal, changedPath) {
        console.log(newVal, oldVal, changedPath)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created() {
    console.log(this.properties.backSwitch)
  }
})
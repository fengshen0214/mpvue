import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/logs/main', 'pages/demo/main', 'pages/swiper/main', 'pages/movable/main', 'pages/hmac_mdf/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChatcc',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#a9b7b7',
      selectedColor: '#1296db',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/main',
        text: 'index1',
        iconPath: 'static/images/home.png',
        selectedIconPath: 'static/images/home_select.png'
      }, {
        pagePath: 'pages/logs/main',
        text: 'logs',
        iconPath: 'static/images/up.png',
        selectedIconPath: 'static/images/up_select.png'
      }, {
        pagePath: 'pages/swiper/main',
        text: 'swiper',
        iconPath: 'static/images/down.png',
        selectedIconPath: 'static/images/down_select.png'
      }]
    }
  }
}

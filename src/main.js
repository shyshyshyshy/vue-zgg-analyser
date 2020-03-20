import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import application from './application'

Vue.use(Antd)
Vue.config.productionTip = false

// 初始化应用
window.application = application

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import uView from 'uview-ui'
import App from './App'
import store from './store'
import bootstrap from './core/bootstrap'
import mixin from './core/mixins/app'
import './js_sdk/ican-H5Api/ican-H5Api'
import {
  navTo,
  showToast,
  showSuccess,
  showError,
  getShareUrlParams,
  navigationAltitude
} from './core/app'

import loading from '@/components/test/index.vue';
Vue.component('loading', loading)
Vue.config.productionTip = false

App.mpType = 'app'

// 载入uView库
Vue.use(uView)

// 全局mixin
Vue.mixin(mixin)

// 挂载全局函数
Vue.prototype.$toast = showToast
Vue.prototype.$navigationAltitude = navigationAltitude()
Vue.prototype.$success = showSuccess
Vue.prototype.$error = showError
Vue.prototype.$navTo = navTo
Vue.prototype.$getShareUrlParams = getShareUrlParams
Vue.prototype.$loading= function(obj){
  console.log('this.$refs')
  console.log(this.$refs)
  this.$refs.loadingView.showt(obj)
}
// 实例化应用
const app = new Vue({
  ...App,
  store,
  created: bootstrap
})
app.$mount()

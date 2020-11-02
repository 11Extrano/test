import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import 'vant/lib/index.css'
import '@/vantui'

Vue.config.productionTip = false
Vue.filter('RNMFormat',function(val){
  let newVal = Number(val);
    return '￥ '+ parseFloat(newVal).toFixed(2) + ' 元';
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
let scrollOptions = {
  container: "body", //滚动的容器
  duration: 500, //滚动时间
  easing: "ease", //缓动类型
  offset: -50, // 滚动时应应用的偏移量。此选项接受回调函数
  force: true, // 是否应执行滚动
  cancelable: true, // 用户是否可以取消滚动
  onStart: false, // 滚动开始时的钩子函数
  onDone: false, // 滚动结束时候的钩子函数
  onCancel: false, // 用户取消滚动的钩子函数
  x: false, // 是否要在x轴上也滚动
  y: true    // 是否要在y轴上滚动
};
Vue.use(ElementUI)
Vue.use(VueScrollTo, scrollOptions);
// import './assets/css/global.css';
import './style/bootstrap.min.css'
import './style/bootstrap.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

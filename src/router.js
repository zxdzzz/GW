import VueRouter from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import websiteHome from './views/websiteHome'
import websiteHomecn from './views/websiteHomecn'
import mobileWebsiteHome from './views/mobileWebsiteHome'
import mobileWebsiteHomecn from './views/mobileWebsiteHomecn'



// 屏幕可用宽度
const availWidth = screen.availWidth;
// 屏幕可用高度
const availHeight = screen.availHeight;
console.log(availWidth / availHeight,"availWidthavailWidth");

let routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '/', component: websiteHome },
      { path: '/home', component: websiteHome },
      { path: '/cn', component: websiteHomecn },
    ],
  },
]
if ((availWidth / availHeight) < 1) {
  routes = [
    {
      path: '/',
      component: mobileWebsiteHome,
    },
     {
      path: '/home',
      component: mobileWebsiteHome,
    },
    {
      path: '/cn',
      component: mobileWebsiteHomecn,
    },
    
  ]
}

const router = new VueRouter({
  routes, // 对应到你之前定义的 routes 常量
  mode: 'history' // 使用HTML5的History路由模式
})
export default router

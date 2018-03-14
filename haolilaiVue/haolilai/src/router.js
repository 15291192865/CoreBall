import Vue from 'vue'
import VueRouter from 'vue-router' // 路由
import home from './components/home' // 主页
import goods from './components/goods' // 商品
import proson from './components/proson' // 个人
import login from './components/login' // 登录
import register from './components/register' // 注册
import denglu from './components/denglu' // 登录  jq
import zhuce from './components/zhuce' // 注册  jq
import xiangqing from './components/xiangqing' // 商品详情
import search from './components/search' // 搜索

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', component: home}, // 首页
    {path: '/goods', component: goods}, // 商品
    {path: '/proson', component: proson}, // 个人
    {path: '/login', component: login}, // 登录
    {path: '/register', component: register}, // 注册
    {path: '/denglu', component: denglu}, // 登录  jq
    {path: '/zhuce', component: zhuce}, // 注册  jq
    {path: '/xiangqing/:id', component:xiangqing}, // 详情
    {path: '/search', component:search} // 搜索
  ],
  mode:'history',
  // 路由跳转页面时，让跳转到的页面从最顶端开始展示
  scrollBehavior (to, from , savedPosition) {
    return {x:0,y:0}
  }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import commons from './modules/commons/index' //组件模块

const routes = [{
        path: '/',
        component: resolve => require(['@/layout'], resolve),
        title: "首页",
        redirect: '/commons/defaults',
        hidden: false,
    },
    {
        path: '/commons',
        component: resolve => require(['@/layout'], resolve),
        title: "组件",
        hidden: true,
        children:commons
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import table from './modules/table/index' //表格模块

const routes = [{
        path: '/',
        component: resolve => require(['@/layout'], resolve),
        title: "首页",
        redirect: '/table',
        hidden: false,
    },
    {
        path: '/table',
        component: resolve => require(['@/layout'], resolve),
        title: "表格",
        hidden: true,
        children:table
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
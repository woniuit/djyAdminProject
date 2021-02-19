import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import '@/assets/css/greentheme/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/init.css'

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'mini',
    zIndex: 3000
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
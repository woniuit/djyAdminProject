import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        sidebar,
    }
})

export default store
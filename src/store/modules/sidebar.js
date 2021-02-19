const state = {
    activeName:localStorage.getItem('tabactiveName')|| 0, // tabs三级菜单高亮
    isCollapseds: false, //折叠菜单
    leftmenu: JSON.parse(localStorage.getItem('rightList') || '[]')
}

const mutations = {
    toggleCollapse(state, collapsed) {
        state.isCollapseds = collapsed
        localStorage.setItem('isCollapseds', JSON.stringify(collapsed))
    },
    parametLeftmenu(state, menu) {
        state.leftmenu = menu
        localStorage.setItem('rightList', JSON.stringify(menu))
    },
    onActiveName(state, activeName) {
        state.activeName = activeName
        localStorage.setItem('tabactiveName',activeName)
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
let table = {
    path: 'defaults',
    name: '表格',
    title: "表格",
    component: resolve => require(['@/views/table'], resolve),
    hidden: true,
    redirect: '',
    meta: {
        tabs: [{
            name: "通用表格",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "defaults"
        }]
    },
    children: [
       
    ]
}
export default {
    table
}
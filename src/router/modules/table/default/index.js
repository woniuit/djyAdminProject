let defaults = {
    path: 'defaults',
    name: '通用表格',
    title: "通用表格",
    component: resolve => require(['@/views/table'], resolve),
    hidden: true,
    redirect: '',
    meta: {
        tabs: [{
            name: "通用表格",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "infoadmin"
        }]
    },
    children: [
       
    ]
}
export default {
    defaults
}
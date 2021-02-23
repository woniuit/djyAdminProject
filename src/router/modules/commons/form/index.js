let form = {
    path: 'form',
    name: 'form',
    title: "form",
    component: resolve => require(['@/views/form'], resolve),
    hidden: true,
    redirect: '',
    meta: {
        tabs: [{
            name: "表单",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "form"
        }]
    },
    children: [{
        name: "表单",
        path: "form",
        route: "platform.admin.partner.index",
        hidden: true,
        component: resolve => require(['@/views/form'], resolve),
        meta: {
            tabs: [{
                name: "表单",
                route: "platform.admin.partner.index",
                hidden: true,
                path: "form"
            }]
        },
    }, ]
}
export default {
    form
}
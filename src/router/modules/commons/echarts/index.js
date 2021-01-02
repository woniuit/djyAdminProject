let echarts = {
    path: 'echarts',
    name: 'echarts',
    title: "echarts",
    component: resolve => require(['@/views/echarts'], resolve),
    hidden: true,
    redirect: 'echarts/default',
    meta: {
        tabs: [{
            name: "default",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "default"
        }]
    },
    children: [{
        name: "default",
        path: "default",
        route: "platform.admin.partner.index",
        hidden: true,
        component: resolve => require(['@/views/echarts/default'], resolve),
        meta: {
            tabs: [{
                    name: "default",
                    route: "platform.admin.partner.index",
                    hidden: true,
                    path: "default"
                }
            ]
        },
    }, ]
}
export default {
    echarts
}
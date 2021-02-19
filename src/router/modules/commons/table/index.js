let table = {
    path: 'table',
    name: '表格',
    title: "表格",
    component: resolve => require(['@/views/table'], resolve),
    hidden: true,
    redirect: 'table/defaults',
    meta: {
        tabs: [{
            name: "通用表格",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "defaults"
        }, {
            name: "多级表头",
            route: "platform.admin.partner.index",
            hidden: true,
            path: "multilevelhead"
        }]
    },
    children: [
        // default
        {
            name: "通用表格",
            path: "defaults",
            route: "platform.admin.partner.index",
            hidden: true,
            component: resolve => require(['@/views/table/default'], resolve),
            meta: {
                tabs: [{
                    name: "通用表格",
                    route: "platform.admin.partner.index",
                    hidden: true,
                    path: "defaults"
                }, {
                    name: "多级表头",
                    route: "platform.admin.partner.index",
                    hidden: true,
                    path: "multilevelhead"
                }]
            },
        },
        // multilevelhead
        {
            name: "多级表头",
            path: "multilevelhead",
            route: "platform.admin.partner.index",
            hidden: true,
            component: resolve => require(['@/views/table/multilevelhead'], resolve),
            meta: {
                tabs: [{
                    name: "通用表格",
                    route: "platform.admin.partner.index",
                    hidden: true,
                    path: "defaults"
                }, {
                    name: "多级表头",
                    route: "platform.admin.partner.index",
                    hidden: true,
                    path: "multilevelhead"
                }]
            },
        },
    ]
}
export default {
    table
}
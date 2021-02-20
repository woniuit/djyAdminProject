<template>
    <div>
        <search
            :selects="searchs.selects"
            :inputs="searchs.inputs"
            :picker="searchs.picker"
            :btn="searchs.btn"
        ></search>
        <tables :data="data" :col-configs="tableHeader" border> </tables>
    </div>
</template>

<script>
    import tables from "@/components/table";
    import search from "@/components/search";
    export default {
        data() {
            return {
                searchs: {
                    inputs: [
                        {
                            title: "关键字查询：",
                            model: "input1",
                            width: 90,
                            placeholder: "ID",
                        },
                    ],
                    selects: [
                        {
                            filterable: true,
                            title: "",
                            model: "select1",
                            width: 110,
                            placeholder: "公司性质",
                            change1: (val) => {
                                // console.log(val);
                            },
                            options: [
                                {
                                    value: 1,
                                    label: "外部",
                                },
                                {
                                    value: 2,
                                    label: "内部",
                                },
                            ],
                        },
                    ],
                    picker: [
                        {
                            title: "收入所属期",
                            model: "picker1",
                            format: "yyyy-MM-dd HH:mm:ss",
                            valueFormat: "yyyy-MM-dd HH:mm:ss",
                            type: "datetimerange",
                            change: (val) => {},
                            input: (val) => {},
                        },
                    ],
                    btn: [
                        {
                            name: "搜索",
                            model: "btn1",
                            type: "success",
                            change: (val) => {},
                        },
                        {
                            name: "重置",
                            model: "btn2",
                            type: "warning",
                            change: (val) => {},
                        },
                    ],
                },
                tableHeader: [
                    { prop: "id", label: "ID", align: "center", show: true },
                    {
                        prop: "tableName1",
                        label: "tableName1",
                        align: "center",
                        show: true,
                    },
                    {
                        prop: "tableName2",
                        label: "tableName2",
                        align: "center",
                        show: true,
                    },
                    {
                        prop: "tableName3",
                        label: "tableName3",
                        align: "center",
                        show: true,
                    },
                    {
                        prop: "tableName4",
                        label: "tableName4",
                        align: "center",
                        show: true,
                    },
                    {
                        prop: "tableName5",
                        label: "tableName5",
                        align: "center",
                        show: true,
                    },
                ],
                data: [
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                    {
                        id: 1,
                        tableName1: "tableName1",
                        tableName2: "tableName2",
                        tableName3: "tableName3",
                        tableName4: "tableName4",
                        tableName5: "tableName5",
                    },
                ],
            };
        },
        props: {},
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        components: {
            tables,
            search,
        },
    };
</script>

<style scoped lang="less">
</style>

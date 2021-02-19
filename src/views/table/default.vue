<template>
    <div>
        <tables :data="data" :col-configs="tableHeader" border> </tables>
    </div>
</template>

<script>
    import tables from "@/components/table";
    export default {
        data() {
            return {
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
        },
    };
</script>

<style scoped lang="less">
</style>

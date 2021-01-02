<template>
    <div class="layout">
        <div>
            <el-header style="height: 46px">
                <top></top>
            </el-header>
        </div>
    </div>
</template>

<script>
    import top from "./sidebar/top";
    export default {
        data() {
            return {};
        },
        props: {},
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        components: {
            top,
        },
    };
</script>

<style scoped lang="less">
    .layout {
        height: 100%;
        .main {
            display: flex;
            aside {
                border-right: 1px solid #dcdfe6;
                width: 140px;
            }
            .main-content {
                width: 100%;
                overflow: auto;
                height: calc(100vh - 45px);
            }
        }
    }
</style>

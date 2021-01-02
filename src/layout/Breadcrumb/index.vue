<template>
    <div class="breadcrumb" :style="{ left: isCollapsed ? '70px' : '220px' }">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="(item, index) in breadList"
                :key="index"
                :to="{ path: item.path }"
                >{{ item.name }}</el-breadcrumb-item
            >
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        props: {
            breadList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {};
        },
        computed: {
            isCollapsed() {
                return this.$store.state.sidebar.isCollapsed;
            }
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {},
        components: {}
    };
</script>

<style scoped lang="less">
    .breadcrumb {
        box-sizing: border-box;
        padding-left: 32px;
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
        // box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
        width: 100%;
        height: 30px;
        line-height: 30px;
        background: #f3f3f4;
        .el-breadcrumb {
            font-size: 12px;
            line-height: 1;
        }
    }
</style>

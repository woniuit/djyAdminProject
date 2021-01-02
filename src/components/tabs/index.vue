<!--djy--tabs导航-->
<template>
    <div class="tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane
                :name="index.toString()"
                v-for="(item, index) in tabsData"
                :key="index"
                :label="item.path"
            >
                <span slot="label">{{ item.name }}</span>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        props: {
            tabsData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {};
        },
        computed: {
            activeName: {
                get() {
                    return this.$store.state.sidebar.activeName;
                },
                set(val) {
                    this.$store.state.sidebar.activeName = val;
                }
            }
        },
        created() {
        },
        mounted() {},
        watch: {},
        methods: {
            handleClick(val) {
                this.$store.commit("sidebar/onActiveName", val.index);
                this.$emit("handleClick", val);
                // window.sessionStorage.removeItem("page");
            }
        },
        components: {}
    };
</script>

<style scoped lang="less">
    .tabs {
        height: 30px;
        line-height: 30px;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 10px;
        /deep/ .el-tabs__item {
            padding: 0 20px;
            height: 30px;
            box-sizing: border-box;
            line-height: 30px;
            display: inline-block;
            list-style: none;
            font-size: 12px;
            font-weight: 500;
            color: #303133;
            position: relative;
        }
    }
</style>

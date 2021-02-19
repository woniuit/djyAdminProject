<template>
    <div class="sidebarItem">
        <el-menu
            background-color="#ffffff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="isCollapsed"
            :collapse-transition="false"
            router
            :default-active="
                $route.path
                    .split('/')
                    .slice(0, 3)
                    .join('/')
            "
            :default-openeds="openeds"
            class="menu-wrapper"
            @select="onselect"
        >
            <!-- 一级菜单 -->
            <el-submenu
                v-for="(item, index) in siderMenuData"
                :key="index"
                v-show="item.hidden"
                :index="item.path"
            >
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                    <span>{{ item.title }}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                    v-for="(subItem, sunindex) in item.children"
                    :key="sunindex"
                    :index="item.path + '/' + subItem.path"
                    v-show="subItem.hidden"
                >
                    <template slot="title">
                        <span>{{ subItem.title }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props: {
            siderMenuData: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                openeds: ["0"]
            };
        },
        computed: {
            isCollapsed() {
                return this.$store.state.sidebar.isCollapsed;
            }
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {
            onselect(){
                this.$store.commit("sidebar/onActiveName", '0');
                sessionStorage.setItem('activeName2','first');
                window.sessionStorage.removeItem("page");
            }
        },
        components: {}
    };
</script>

<style scoped lang="less">
    .sidebarItem {
        overflow: hidden;
        width: 140px;
        /deep/ .el-submenu .el-menu-item {
            height: 36px !important;
            line-height: 36px !important;
            padding: 0 !important;
            min-width: 0px !important;
            text-align: center !important;
            font-size: 12px;
        }
        /deep/ .el-menu {
            border-right: solid 1px #e6e6e6;
            list-style: none;
            position: relative;
            margin: 0;
            padding-left: 0;
            background-color: #fff;
            width: 140px;
        }
    }
</style>

<template>
    <div class="layout">
        <div>
            <el-header style="height:46px">
                <topSystem
                    :isCollapseds="isCollapseds"
                    @toggleCollapse="toggleCollapse"
                ></topSystem>
            </el-header>
        </div>
        <div class="main el-col el-col-24">
            <aside v-show="!isCollapseds">
                <siderMenu :siderMenuData="siderMenuData"></siderMenu>
            </aside>
            <div class="main-content myscroll">
                <breadcrumb v-show="!isCollapseds" :breadList="breadList"></breadcrumb>
                <div class="app-container">
                    <tabs
                        :tabsData="tabsData"
                        v-show="tabsshow"
                        @handleClick="handleClick"
                    ></tabs>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import siderMenu from "./sidebar/left";
    import topSystem from "./sidebar/top";
    import breadcrumb from "./Breadcrumb";
    import tabs from "@/components/tabs";
    // import { getInfo } from "@/request/api/getmenu";
    export default {
        props: {},
        data() {
            return {
                leftMenu:true,
                siderMenuData: [],
                tabsData: [],
                tabspathData: [],
                threeLevel: "",
                breadList: []
            };
        },
        computed: {
            isCollapseds: {
                get() {
                    return this.$store.state.sidebar.isCollapseds;
                },
                set(val) {
                    this.$store.state.sidebar.isCollapseds = val;
                }
            },
            tabsshow() {
                if (this.tabsData.length == 0) {
                    return false;
                } else {
                    return true;
                }
            },
            top() {
                if (this.tabsData.length == 0) {
                    return "90px";
                } else {
                    return "135px";
                }
            }
        },
        created() {
            this.getBreadcrumb();
            // localStorage.clear();
            // 模拟后端左侧菜单数据请求
            // getInfo().then(res => {
            //     this.$store.commit("sidebar/parametLeftmenu", res);
            // });
            this.siderMenuData = this.$router.options.routes;
            // 是否有tabs
            if (this.$route.meta.tabs != undefined) {
                this.tabsData = this.$route.meta.tabs.filter(
                    item => item.hidden == true
                );
            } else {
                this.tabsData = [];
            }
        },
        mounted() {},
        watch: {
            $route: function(newval, oldval) {
                // 三级菜单是否有url
                let threeLevelpath = newval.matched;
                this.threeLevel = threeLevelpath.filter(
                    item => item.path == newval.path
                );
                // 没有三级路由的时候判断是否有tabs
                if (newval.meta.tabs != undefined) {
                    this.tabsData = newval.meta.tabs.filter(
                        item => item.hidden == true
                    );
                } else {
                    this.tabsData = [];
                }
                this.getBreadcrumb();
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name);
                this.breadList = matched;
            },
            toggleCollapse() {
                this.leftMenu=!this.leftMenu
                this.$store.commit(
                    "sidebar/toggleCollapse",
                    (this.isCollapseds = !this.isCollapseds)
                );
            },
            handleClick(val) {
                // tabs切换到不同的路径
                this.$router.push(val.label);
            }
        },
        components: { siderMenu, topSystem, breadcrumb, tabs }
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
        // @media screen and (max-width: 900px) {
        //     .leftMenu {
        //         display: none;
        //     }
        // }
    }
</style>

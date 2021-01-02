<template>
    <div class="topSystem">
        <div class="system">
            <div class="header-left">
                <div class="logo-container leftMenu">
                    <a href="">
                        <img :src="srcLogo" alt="" />
                    </a>
                </div>
                <div class="menu-toggle" @click="toggleCollapse">
                    <i class="el-icon-s-fold"></i>
                </div>
                <div class="top-menu">
                    <!-- <el-button type="success">菜单1</el-button>
                    <el-button type="success">菜单2</el-button> -->
                </div>
            </div>
            <div class="header-right">
                <div class="topbar-account">
                    <i class="el-icon-user-solid"></i><span>djy</span>
                    <el-button type="success" @click="onQuit">退出</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                srcLogo: "http://cas.itowan.com/static/images/logo.png",
            };
        },
        computed: {
            isCollapsed() {
                // return this.$store.state.sidebar.isCollapsed;
            },
            userInfo() {
                // return this.$store.state.user.userInfo;
            },
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {
            toggleCollapse() {},
            onIssue() {},
            onQuit() {
                // location.href = this.$store.state.user.logout_url;
                // localStorage.clear();
                // sessionStorage.clear();
                // this.$store.commit("user/onuser", "");
            },
        },
        components: {},
    };
</script>

<style scoped lang="less">
    .topSystem {
        height: 45px;
        box-sizing: border-box;
        .system {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            height: 45px;
            border-bottom: 1px solid #dcdfe6;
            .header-left {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                .logo-container {
                    width: 140px;
                    height: 45px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    a {
                        width: 140px;
                        height: 30px;
                        img {
                            width: auto;
                            height: 100%;
                            margin: 0 auto;
                        }
                    }
                }
                // @media screen and (max-width: 900px) {
                //     .leftMenu {
                //         display: none !important;
                //     }
                // }
                .menu-toggle {
                    cursor: pointer;
                    .el-icon-s-fold {
                        font-family: element-icons !important;
                        font-style: normal;
                        font-weight: 400;
                        font-variant: normal;
                        text-transform: none;
                        line-height: 1;
                        vertical-align: baseline;
                        display: inline-block;
                        -webkit-font-smoothing: antialiased;
                        padding: 10px;
                        font-size: 16px;
                    }
                }
                .top-menu {
                    margin-left: 10px;
                }
            }
            .header-right {
                padding-right: 10px;
                .topbar-account {
                    span {
                        margin-right: 10px;
                        font-size: medium;
                    }
                }
                .el-icon-user-solid {
                    font-family: element-icons !important;
                    font-style: normal;
                    font-weight: 400;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                    vertical-align: baseline;
                    display: inline-block;
                    -webkit-font-smoothing: antialiased;
                    font-size: 16px;
                }
            }
        }
    }
</style>

<!--详情页面和编辑页面头部 djy-->
<template>
    <div>
        <el-page-header
            class="margin-top-form"
            @back="$router.go(-1)"
            :content="Title"
        >
        </el-page-header>
        <el-divider></el-divider>
    </div>
</template>

<script>
    export default {
        props: {
            headTitle: {
                type: String,
                default: "",
            },
            pagetitle:{
                type: String,
                default: "",
            }
        },
        data() {
            return {
                Title:""
            };
        },
        computed: {},
        created() {},
        mounted() {
            let vm = this;
            
            vm.pagetitle == "look"
                ? (vm.Title = "查看")
                : vm.pagetitle == "edit"
                ? (vm.Title = "修改")
                : (vm.Title = "添加");
        },
        watch: {},
        methods: {},
        components: {},
    };
</script>

<style scoped lang="less">
</style>

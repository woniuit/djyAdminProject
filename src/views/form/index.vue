<template>
    <div>
        <forms
            ref="form"
            :formItem="formItem"
            :deployForm="deployForm"
            :form="form"
            @onsub="onsub"
        >
            <!-- slot 多选框 -->
            <div slot="multiple" class="upload-box">
                <el-checkbox-group v-model="multiple">
                    <el-checkbox
                        label="美食/餐厅线上活动"
                        name="type"
                    >1</el-checkbox>
                    <el-checkbox label="地推活动" name="type">2</el-checkbox>
                    <el-checkbox label="线下主题活动" name="type">3</el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type">4</el-checkbox>
                </el-checkbox-group>
            </div>
        </forms>
    </div>
</template>

<script>
    import forms from "@/components/Form-components/index";
    import { deployForm } from "./form.json";
    export default {
        data() {
            return {
                multiple:[],
                form: {},
                formItem: {
                    formbtn: false,
                    cancel: "取 消",
                    confirm: "确 定",
                    disabled: false,
                    labelwidth: "200px",
                    formbtn: true,
                },
                deployForm: deployForm,
                parameter: {}, //处理传给后端的数据
            };
        },
        props: {},
        computed: {},
        watch: {},
        created() {
            let vm = this;
            vm.deployForm.forEach(({ prop, name }) => (vm.parameter[prop] = "")); //处理表单中的v-model
            vm.form = JSON.parse(JSON.stringify(vm.parameter)); //深拷贝参
        },
        mounted() {},
        components: {
            forms,
        },
        methods: {
            onsub() {
                let vm = this;
                console.log(vm.form);
                console.log(vm.multiple);
                let flag = false;
                vm.$refs["form"].$refs["form"].validate((valid) => {
                    flag = valid;
                    if (valid) {
                    } else {
                        return flag;
                    }
                });
            },
        },
    };
</script>

<style scoped lang="less">
</style>

<!--
form表单  input表单  select下拉框 单选框 日期选择 图片上传 富文本
djy
下载管理中有四种情况需要表单上传，现在的表单组件中只匹配一种情况。后面想到方法再把多种图片上传整合到表单组件中。目前用的是插槽
-->
<template>
    <div class="formbox">
        <el-form
            :model="form"
            :label-width="formItem.labelwidth"
            class="myscroll"
            ref="form"
            :class="{ flexs: formItem.flexs }"
        >
            <div v-for="(item, index) in deployForm" :key="index">
                <el-form-item
                    v-if="item.isShow"
                    :rules="item.rule"
                    :prop="item.prop"
                    :label="item.label"
                >
                    <!-- 输入框 -->
                    <el-input
                        v-if="item.type == 1"
                        v-model="form[item.prop]"
                        :class="item.class"
                        :type="item.inputType"
                        :placeholder="item.placeholder"
                        :rows="item.inputRow"
                        :disabled="item.disabled"
                    ></el-input>
                    <!-- 单选框 -->
                    <el-radio-group
                        :class="item.class"
                        v-model="form[item.prop]"
                        v-if="item.type == 2"
                        :disabled="item.disabled"
                    >
                        <el-radio
                            v-for="(ite, inde) in item.radio"
                            :key="inde"
                            :label="ite.label"
                        >
                            {{ ite.name }}
                        </el-radio>
                    </el-radio-group>
                    <!-- 下拉选择 -->
                    <el-select
                        v-if="item.type == 3"
                        :class="item.class"
                        :filterable="item.filterable"
                        :clearable="item.clearable"
                        :multiple="item.multiple"
                        v-model="form[item.prop]"
                        :disabled="item.disabled"
                        :placeholder="item.placeholder"
                        @change="item.change ? item.change($event) : undefined"
                        @clear="item.clear ? item.clear() : undefined"
                    >
                        <el-option
                            v-for="(option, index) in item.options"
                            :key="option.label + '' + index"
                            :label="option.label"
                            :value="option.value"
                            :disabled="option.disabled"
                        >
                        </el-option>
                    </el-select>
                    <!-- 时间选择器 -->
                    <el-date-picker
                        v-if="item.type == 4"
                        v-model="form[item.prop]"
                        :type="item.typetime"
                        range-separator="至"
                        :format="item.format"
                        :value-format="item.valueformat"
                        placeholder="'请选择时间'"
                        :style="{ width: item.width + 'px' }"
                        @change="item.change ? item.change($event) : undefined"
                        @input="item.input ? item.input($event) : undefined"
                    />
                    <!-- 图片上传 -->
                    <div v-if="item.type == 5">
                        <div class="gameicon">{{ item.size }}</div>
                        <upload
                            :uploadlength="item.uploadlength"
                            :echo="item.echo"
                        ></upload>
                    </div>
                    <!-- 富文本 -->
                    <div v-if="item.type == 6">
                        <tinymceEditor
                            v-model="form[item.prop]"
                            v-if="item.tinymceShow"
                            :readonly="item.readonly"
                        ></tinymceEditor>
                    </div>
                    <!-- 单个多选框 -->
                    <el-checkbox
                        v-if="item.type == 7"
                        v-model="form[item.prop]"
                        :disabled="item.disabled"
                        >{{ item.name }}</el-checkbox
                    >
                    <!-- 插槽 -->
                    <div v-if="item.type == 'slot'">
                        <div class="gameicon">{{ item.size }}</div>
                        <slot :name="item.slot" />
                    </div>
                </el-form-item>
            </div>
            <el-form-item v-if="formItem.formbtn">
                <el-button @click="$router.go(-1)">{{
                    formItem.cancel
                }}</el-button>
                <el-button type="primary" @click="onsub">{{
                    formItem.confirm
                }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import upload from "./upload";
    import tinymceEditor from "@/components/richText";
    export default {
        name: "ProForm",
        components: { upload, tinymceEditor },
        props: {
            formItem: {
                type: Object,
                default: () => {},
            },
            deployForm: {
                type: Array,
                default: () => [],
            },
            form: {
                type: Object,
                default: () => {},
            },
            //富文本查看详情的时候回显
            richTextValue: {
                type: String,
                default: "",
            },
        },
        data() {
            return {};
        },
        watch: {
            //富文本查看详情的时候回显
            richTextValue: {
                handler(newValue, oldValue) {
                    this.form.intro = newValue;
                },
                deep: true,
            },
        },
        computed: {},
        created() {},
        mounted() {},
        methods: {
            onsub() {
                this.$emit("onsub");
            },
            handlAddTable() {
                this.$emit("handlAddTable");
            },
        },
    };
</script>

<style scoped lang="less">
    .formbox {
        .gameicon {
            position: absolute;
            left: -100px;
            top: 22px;
            color: #999999;
        }
        .flexs {
            display: flex;
            flex-wrap: wrap;
            div {
                width: 50%;
            }
        }
        /deep/ .el-form-item__label {
            text-align: right;
            vertical-align: middle;
            float: left;
            font-size: 12px;
            color: #606266;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
        /deep/ .el-input.is-disabled .el-input__inner {
            background-color: #ffffff;
            border-color: #e4e7ed;
            color: #000000;
            cursor: not-allowed;
        }
        /deep/ .el-dialog__body {
            padding: 10px 20px;
        }
        /deep/ .el-textarea.is-disabled .el-textarea__inner {
            background-color: none;
            border-color: none;
            color: #333;
            cursor: not-allowed;
        }
        /deep/ .el-textarea.is-disabled .el-textarea__inner {
            background-color: none !important;
            border-color: none !important;
            color: #333333 !important;
            cursor: not-allowed;
        }
        /deep/ .el-textarea.is-disabled .el-textarea__inner {
            background-color: white;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
</style>

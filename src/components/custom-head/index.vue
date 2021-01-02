<!--自定义表头 djy   待优化，目前只有控制一级-->
<template>
    <div>
        <el-dialog
            title="自定义表头"
            :visible.sync="Dialog"
            :close-on-click-modal="false"
            :before-close="handleClose"
            width="720px"
        >
            <el-checkbox-group v-model="tableHead.headList">
                <el-checkbox
                    v-for="(item, index) in tableHead.checkbox"
                    :key="index"
                    :label="item.val"
                    @change="change"
                >
                    {{ item.name }}
                </el-checkbox>
            </el-checkbox-group>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <div style="margin: 0 auto; width: 134px; display: flex">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="onsub">确 定</el-button>
                </div>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            tableHead: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                Dialog: true,
            };
        },
        computed: {},
        created() {
        },
        mounted() {},
        watch: {},
        methods: {
            handleClose() {
                this.$emit("handleClose");
            },
            change() {
                this.$emit('change')
            },
            onsub(){
                this.$emit('onsub')
            }
        },
        components: {},
    };
</script>

<style scoped lang="less">
    /deep/ .el-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 12px;
        width: 100px;
    }
</style>

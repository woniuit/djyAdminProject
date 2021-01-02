<!--djy--table-->
<template>
    <div class="table">
        <el-table
            ref="table"
            :data="data"
            :border="border"
            :fold-list="foldList"
            :row-style="toggleDisplayTr"
            style="width: 100%"
            :header-cell-style="headercellstyle"
            class="small-padding fixed-width"
            :row-class-name="tableRowClassName"
            :max-height="tableHeight"
            :span-method="SpanMethod"
            true
            @selection-change="handleSelectionChange"
            @select="handlselection"
            @row-click="handlRowclick"
            @header-click="headerclick"
        >
            <template v-for="colConfig in colConfigs">
                <slot v-if="colConfig.slot" :name="colConfig.slot" />
                <el-table-column
                    :key="colConfig[0]"
                    show-overflow-tooltip
                    v-bind="colConfig"
                    v-if="colConfig.show"
                >
                    <template v-if="colConfig.children">
                        <slot
                            v-if="colConfig.children.slot"
                            :name="colConfig.children.slot"
                        />
                        <el-table-column
                            v-for="(item, index) in colConfig.children"
                            :key="index"
                            :label="item.label"
                            :align="item.align"
                            v-bind="item"
                        ></el-table-column>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>
<script>
    export default {
        props: {
            // 表头
            colConfigs: {
                type: Array,
                default: () => [],
            },
            // 表格数据
            data: {
                type: Array,
                default: () => [],
            },
            // 表格边宽
            border: {
                type: Boolean,
                default: false,
            },
            // 表头的样式
            headercellstyle: {
                type: Object,
                default: () => {},
            },
            // 树形表格折叠数组
            foldList: {
                type: Array,
                default: () => [],
            },
            // 树形表格方法
            toggleDisplayTr: {
                type: Function,
                default: () => {},
            },
            // 计算表格合并
            SpanMethod: {
                type: Function,
                default: () => {},
            },
        },
        data() {
            return {
                tableHeight: 600,
                indexarr: [],
            };
        },
        mounted() {
            let vm = this;
            setTimeout(() => {
                var h = window.innerHeight - vm.$refs.table.$el.offsetTop - 60;
                h = h < 350 ? 350 : h;
                vm.tableHeight = h;
            }, 100);
        },
        created() {
            this.$store.commit("commons/clickIndexArr", []);
        },
        methods: {
            // 计算表格合并
            // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            //     // if (rowIndex === 0) {
            //     //     // 在这里多加一个行的判断就行
            //     //     // 合并第二行
            //     //     if (columnIndex === 1) {
            //     //         // 从第二列开始
            //     //         return [1, 4];
            //     //     }
            //     // }
            //     let obj={}
            //     obj.rowIndex=rowIndex
            //     obj.columnIndex=columnIndex
            //     this.$emit('getSummaries',obj)
            // },

            headerclick(column, event) {
                this.$emit("headerclick", column, event);
            },

            tableRowClassName({ row, rowIndex }) {
                row.index = rowIndex;
                if (
                    this.$store.state.commons.clickIndexArr.indexOf(rowIndex) != -1
                ) {
                    return "click-row";
                }
                if (rowIndex % 2 != 0) {
                    return "highlight-row";
                }
                return "";
            },
            // 当选择项发生变化时会触发该事件
            handleSelectionChange(val) {
                this.$emit("handleSelectionChange", val);
            },
            // 点击某一行触发 // 表格行高亮
            handlRowclick(row) {
                let idx = this.indexarr.indexOf(row.index);
                if (idx == -1) {
                    this.indexarr.push(row.index);
                    this.$store.commit("commons/clickIndexArr", this.indexarr);
                } else {
                    this.indexarr.splice(
                        this.indexarr.findIndex((item) => item == row.index),
                        1
                    );
                    this.$store.commit("commons/clickIndexArr", this.indexarr);
                }
            },
            handlselection(row, selected) {
                this.$emit("handlselection", row, selected);
            },
        },
        destroyed() {
            this.$store.commit("commons/clickIndexArr", []);
            this.indexarr = [];
        },
    };
</script>
<style scoped lang="less">
    .table {
        margin-top: 6px;
        /deep/ .el-table__body tr.current-row > td {
            background-color: #ccccff;
        }
    }
</style>

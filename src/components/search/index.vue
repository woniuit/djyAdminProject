<!--djy--搜索条件-->
<template>
    <div class="search-bar">
        <el-card shadow="never">
            <div slot="header" class="clearfix">
                <h3>查询条件</h3>
            </div>
            <div class="subject">
                <!-- 输入框 -->
                <div
                    class="search-cont"
                    v-for="(item, index) in inputs"
                    :key="item.model + '' + index"
                >
                    <div class="title" v-if="item.title">{{ item.title }}</div>
                    <el-input
                        :style="{ width: item.width + 'px' }"
                        v-model="seachData.input[item.model]"
                        :placeholder="
                            item.placeholder ? item.placeholder : '请输入内容'
                        "
                        :clearable="
                            typeof item.clearable == 'undefined'
                                ? false
                                : item.clearable
                        "
                    >
                    </el-input>
                </div>
                <!-- 下拉框 -->
                <div
                    class="search-cont"
                    v-for="(item, index) in selects"
                    :key="item.model + '' + index"
                >
                    <div class="title" v-if="item.title">{{ item.title }}</div>
                    <el-select
                        :style="{ width: item.width + 'px' }"
                        :filterable="item.filterable"
                        :clearable="
                            typeof item.clearable == 'undefined'
                                ? true
                                : item.clearable
                        "
                        :multiple="item.multiple ? true : false"
                        v-model="seachData.select[item.model]"
                        :placeholder="
                            item.placeholder ? item.placeholder : '请输入内容'
                        "
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
                </div>
                <!-- 时间选择器 -->
                <div
                    class="search-cont"
                    v-for="(item, index) in picker"
                    :key="item.model + '' + index"
                >
                    <div class="title" v-if="item.title">
                        {{ item.title }}
                    </div>
                    <!-- format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss" -->
                    <el-date-picker
                        v-model="seachData.picker[item.model]"
                        :type="item.type"
                        :format="item.format"
                        :value-format="item.valueFormat"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                        :style="{ width: item.width + 'px' }"
                        @change="item.change ? item.change($event) : undefined"
                        @input="item.input ? item.input($event) : undefined"
                    />
                </div>
                <div
                    class="search-cont"
                    v-for="(item, index) in btn"
                    :key="item.model + '' + index"
                >
                    <el-button
                        :type="item.type"
                        @click="btnclick(item.event)"
                        >{{ item.name }}</el-button
                    >
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
    export default {
        name: "SearchBar",
        props: {
            inputs: {
                default: () => {
                    return new Array();
                },
            },
            selects: {
                default: () => {
                    return new Array();
                },
            },
            picker: {
                default: () => {
                    return new Array();
                },
            },
            btn: {
                default: () => {
                    return new Array();
                },
            },
        },
        data() {
            return {
                seachData: {
                    input: {},
                    select: {},
                    picker: {},
                },
                pickerOptions: {
                    onPick: ({ maxDate, minDate }) => {
                        this.pickerMinDate = minDate.getTime();
                        if (maxDate) {
                            this.pickerMinDate = "";
                        }
                    },
                    disabledDate: (time) => {
                        if (this.pickerMinDate !== "") {
                            const one = 3650 * 24 * 3600 * 1000;
                            const minTime = this.pickerMinDate + 720;
                            const maxTime = this.pickerMinDate + one;
                            return (
                                time.getTime() < minTime - 8.64e7 ||
                                time.getTime() > maxTime
                            );
                        }
                    },
                },
            };
        },
        methods: {
            btnclick(event) {
                // console.log(event)
            },
        },
    };
</script>
<style scoped lang="less">
    .search-bar {
        margin-top: 20px;

        .el-card {
            border: 1px solid #bdbdbd;
            background: #fff;
            margin-bottom: 20px;
            border-radius: 0;
            .clearfix {
                &:after {
                    visibility: hidden;
                    display: block;
                    font-size: 0;
                    content: " ";
                    clear: both;
                    height: 0;
                }
            }

            .subject {
                display: flex;
                flex-wrap: wrap;
            }
        }
       /deep/ .el-card__header {
            padding: 0 20px;
            position: relative;
            border-bottom: 1px solid #e4e4e4;
            height: 45px;
            line-height: 45px;
            font-size: 14px;
            overflow: hidden;
            background: #f3f3f3;
            background-image: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(0, #f7f7f7),
                color-stop(1, #eaeaea)
            );
        }

        /deep/ .el-icon-date:before {
            content: "";
        }
    }
    .search-cont {
        display: flex;
        align-items: center;
        margin: 5px 10px 5px 0px;
    }
    .search-cont:last-child {
        margin-right: 0;
    }
    .title {
        padding-right: 5px;
        flex-shrink: 0;
    }
</style>
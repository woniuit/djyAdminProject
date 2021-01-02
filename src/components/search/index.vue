<!--djy--搜索条件   待优化-->
<template>
    <div class="search-bar">
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
                    typeof item.clearable == 'undefined' ? false : item.clearable
                "
            >
            </el-input>
        </div>
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
                    typeof item.clearable == 'undefined' ? true : item.clearable
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
        <div
            class="search-cont"
            v-for="(item, index) in picker"
            :key="item.model + '' + index"
        >
            <div class="title" v-if="item.title">
                {{ item.title }}
            </div>
            <el-date-picker
                v-model="seachData.picker[item.model]"
                type="datetimerange"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
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
            v-for="(item, index) in picker2"
            :key="item.model + '' + index"
        >
            <div class="title" v-if="item.title">{{ item.title }}</div>
            <el-date-picker
                v-model="seachData.picker[item.model]"
                type="date"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                :placeholder="
                    item.placeholder ? item.placeholder : '请输入内容'
                "
                :style="{ width: item.width + 'px' }"
                @change="item.change ? item.change($event) : undefined"
                @input="item.input ? item.input($event) : undefined"
            />
        </div>
        <div
            class="search-cont"
            v-for="(item, index) in picker3"
            :key="item.model + '' + index"
        >
            <div class="title" v-if="item.title">
                {{ item.title }}
            </div>
            <el-date-picker
                v-model="seachData.picker3[item.model]"
                type="daterange"
                range-separator="至"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :placeholder="
                    item.placeholder ? item.placeholder : '请选择时间'
                "
                :style="{ width: item.width + 'px' }"
                @change="item.change ? item.change($event) : undefined"
                @input="item.input ? item.input($event) : undefined"
            />
        </div>
        <div class="search-cont">
            <el-button type="success" @click="onsearch" v-show="searchshow"
                >搜索</el-button
            >
        </div>
        <div class="search-cont">
            <el-button type="warning" v-show="addshow" @click="onAdd"
                >添加</el-button
            >
        </div>
        <div class="search-cont">
            <el-button type="warning" v-show="Importshow" @click="onImport">{{
                Import
            }}</el-button>
        </div>
        <div class="search-cont">
            <el-button type="primary" @click="oninc" v-show="searchBtn.searchinc"
                >导入</el-button
            >
        </div>
        <div class="search-cont">
            <el-button
                type="info"
                @click="onrandom"
                v-show="searchBtn.randomshow"
                >{{ searchBtn.random }}</el-button
            >
        </div>
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
            picker2: {
                default: () => {
                    return new Array();
                },
            },
            picker3: {
                default: () => {
                    return new Array();
                },
            },
            searchBtn: {
                default: () => {
                    return new Object();
                },
            },
            button: {
                default: () => {
                    return new Object();
                },
            },
            addshow: {
                type: Boolean,
                default: true,
            },
            searchshow: {
                type: Boolean,
                default: true,
            },
            Importshow: {
                type: Boolean,
                default: false,
            },
            Import: {
                type: String,
                default: "导入",
            },
        },
        data() {
            return {
                seachData: {
                    input: {},
                    select: {},
                    picker: {},
                    picker3: {},
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
            oninc(){
                this.$emit('oninc')
            },
            onsearch() {
                this.$emit("onsearch", this.seachData);
            },
            onAdd() {
                this.$emit("onAdd");
            },
            onImport() {
                this.$emit("onImport");
            },
            onrandom() {
                this.$emit("onrandom");
            },
        },
    };
</script>
<style scoped lang="less">
    .search-bar {
        display: flex;
        flex-wrap: wrap;
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
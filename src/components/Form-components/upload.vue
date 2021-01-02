<template>
    <div>
        <div class="upload-box">
            <div
                v-for="(item, idx) in uploadpicBase64"
                :key="idx"
                class="upload-file upload-block"
            >
                <img :src="item.url" @click="previewPics(item.url)" />
                <i
                    v-if="$route.query.title != 'look'"
                    @click="delUploadpic(idx)"
                    class="el-icon-close"
                ></i>
            </div>
            <div
                class="upload-add upload-block"
                v-show="uploadpicBase64.length < uploadlength"
            >
                <input
                    ref="uploadpicInput"
                    type="file"
                    @change="uploadpicChange"
                    accept="image/png, image/jpeg, image/gif, image/jpg"
                />
            </div>
        </div>
        <!-- 图片预览 -->
        <el-dialog
            :visible.sync="previewimage"
            title="图片预览"
            append-to-body
            width="30%"
        >
            <div style="width: 100%; height: 100%">
                <img :src="previewpic" style="width: 100%" />
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            uploadlength: {
                type: Number,
                default: 1,
            },
            echo: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {};
        },
        computed: {},
        created() {},
        mounted() {
            let vm = this;
            vm.uploadpicBase64 = vm.echo; //图片回显
        },
        watch: {},
        methods: {
            
        },
        components: {},
    };
</script>

<style scoped lang="less">
    .upload-box {
        display: flex;
        flex-wrap: wrap;
        .upload-block {
            border: solid 1px #cccccc;
            box-sizing: border-box;
            width: 60px;
            height: 60px;
            cursor: pointer;
        }
        .upload-file {
            margin-right: 10px;
            padding: 2px;
            position: relative;
            &:hover .svg-box .icon {
                display: inline-block;
            }
            img {
                width: 54px;
                height: 54px;
            }
            i {
                position: absolute;
                right: -8px;
                top: -8px;
            }
        }
        .upload-add {
            background: url("~@/assets/public/upload-icon.png") no-repeat center;
            input {
                opacity: 0;
                height: 100%;
                width: 100%;
                cursor: pointer;
            }
        }
    }
</style>

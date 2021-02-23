<!--djy--富文本-->
<template>
    <div class="richText">
        <textarea
            v-model="value"
            class="tinymce-textarea"
            :upload-url="uploadUrl"
            ref="tinymceEditor"
        />
    </div>
</template>

<script>
    import "../../../public/tinymce.min.js";
    import "../../../public/themes/silver/theme.min.js";
    import "../../../public/langs/zh_CN.js";
    import "../../../public/plugins/preview/plugin.min.js";
    import "../../../public/plugins/table/plugin.min.js";
    import "../../../public/plugins/image/plugin.min.js";
    import "../../../public/plugins/textcolor/plugin.min.js";
    import "../../../public/plugins/textpattern/plugin.min.js";
    import "../../../public/plugins/advlist/plugin.min.js";
    import "../../../public/plugins/lists/plugin.min.js";
    import "../../../public/plugins/insertdatetime/plugin.min.js";
    import "../../../public/plugins/fullscreen/plugin.min.js";
    import "../../../public/plugins/link/plugin.min.js";
    import "../../../public/icons/default/icons.min.js";
    import "../../../public/plugins/code/plugin.min.js";
    import "../../../public/plugins/lineheight/plugin";
    // import * as config from "@/utils/config";
    // import { geturl } from "@/request/api/common/common.js";
    export default {
        props: {
            value: {
                type: String,
                default: "",
            },
            readonly: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                // uploadUrl: config.imgURL,
                uploadUrl: '',
                richTextValue: "",
            };
        },
        computed: {},
        watch: {
            //富文本查看详情的时候回显
            value: {
                handler(newValue, oldValue) {
                    this.richTextValue = newValue;
                },
                deep: true,
            },
        },
        created() {},
        mounted() {
            setTimeout(() => {
                tinymce.init({
                    readonly: this.readonly, //设置只读
                    width: 800,
                    height: 500,
                    selector: ".tinymce-textarea",
                    language_url: "../../../public/langs/zh_CN.js",
                    language: "zh_CN",
                    menubar: false,
                    automatic_uploads: true,
                    fontsize_formats:
                        "12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px",
                    plugins:
                        "table advlist lists  link image insertdatetime fullscreen preview code code lineheight",
                    toolbar:
                        "undo redo code styleselect bullist numlist bold italic aligncenter alignleft alignright alignjustify underline strikethrough fontselect fontsizeselect link table image insertdatetime  forecolor backcolor textcolor textpattern preview  fullscreen lineheight",
                    image_title: false,
                    images_upload_handler: (blobInfo, success, failure) => {
                        // tinymce api文档查阅可知   直接获取blob原始数据
                        var blob = blobInfo.blob();
                        var fd = new FormData();
                        fd.append("upfile[]", blob);
                        fd.append("action", "uploadRichTextImg");
                        axios.post(this.uploadUrl, fd).then((res) => {
                            geturl().then((response) => {
                                success(
                                    // "http://" + response.data + res.data.data.join()
                                    response.data.oss_url + res.data.data.join()
                                );
                            });
                        });
                    },
                    // 监听tinymce 初始化完成事件
                    setup: (editor) => {
                        editor.on("init", (e) => {
                            editor.setContent(this.value);
                        });
                    },
                    // 监听input和change事件,实时更新value
                    init_instance_callback: (editor) => {
                        // 回显富文本
                        if (this.richTextValue) {
                            editor.setContent(this.richTextValue);
                        }
                        editor.on("input", (e) => {
                            this.$emit("input", e.target.innerHTML);
                        });
                        editor.on("change", (e) => {
                            this.$emit("input", e.level.content);
                        });
                    },
                });
            }, 500);
        },

        methods: {
            onClick() {},
            initTinymce() {},
        },
        components: {},
    };
</script>

<style scoped lang="less">
    @import "../../../public/skins/ui/oxide/skin.min.css";
    .richText {
        /deep/ .tox .tox-tbtn--select {
            margin: 2px 0 3px 0;
            padding: 0 4px;
            width: 60px;
        }
    }
</style>

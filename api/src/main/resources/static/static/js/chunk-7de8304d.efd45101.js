(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-7de8304d"],
    {
        2888: function (t, e, i) {
            "use strict";
            i("4223");
        },
        4223: function (t, e, i) { },
        "5fb8": function (t, e, i) {
            "use strict";
            i("8a83");
        },
        8256: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = function () {
                var t = this;
                var e = t.$createElement;
                var i = t._self._c || e;
                return i("div", {
                    staticClass: "tinymce-container",
                    class: { fullscreen: t.fullscreen },
                    style: { width: t.containerWidth }
                }, [
                    i("textarea", {
                        staticClass: "tinymce-textarea",
                        attrs: { id: t.tinymceId }
                    }),
                    t._v(" "),
                    i("div", { staticClass: "editor-custom-btn-container" }, [
                        i("editorImage", {
                            staticClass: "editor-upload-btn",
                            attrs: { color: "#1890ff" },
                            on: { successCBK: t.imageSuccessCBK }
                        })
                    ], 1)
                ]);
            };
            var o = [];
            var s = (i("b680"), i("a9e3"), i("ac1f"), i("00b4"), i("d3b7"), i("159b"), function () {
                var t = this;
                var e = t.$createElement;
                var i = t._self._c || e;
                return i("div", { staticClass: "upload-container" }, [
                    i("el-button", {
                        style: { background: t.color, borderColor: t.color },
                        attrs: { icon: "el-icon-upload", size: "mini", type: "primary" },
                        on: {
                            click: function (e) {
                                t.dialogVisible =!t.dialogVisible;
                            }
                        }
                    }, [t._v(" Upload ")]),
                    i("el-dialog", {
                        attrs: { visible: t.dialogVisible },
                        on: {
                            "update:visible": function (e) {
                                t.dialogVisible = e;
                            }
                        }
                    }, [
                        i("el-upload", {
                            staticClass: "editor-slide-upload",
                            attrs: {
                                multiple: true,
                                "file-list": t.fileList,
                                "show-file-list": true,
                                "on-remove": t.handleRemove,
                                "on-success": t.handleSuccess,
                                "before-upload": t.beforeUpload,
                                action: "https://httpbin.org/post",
                                "list-type": "picture-card"
                            }
                        }, [
                            i("el-button", {
                                attrs: { size: "small", type: "primary" }
                            }, [t._v(" Click to upload ")])
                        ], 1),
                        i("el-button", {
                            on: {
                                click: function (e) {
                                    t.dialogVisible = false;
                                }
                            }
                        }, [t._v(" Cancel ")]),
                        i("el-button", {
                            attrs: { type: "primary" },
                            on: { click: t.handleSubmit }
                        }, [t._v(" Confirm ")])
                    ], 1)
                ], 1);
            });
            var a = [];
            var l = (i("b64b"), i("d81d"), i("3ca3"), i("ddb0"), i("2b3d"), i("9861"), {
                name: "EditorSlideUpload",
                props: {
                    color: { type: String, default: "#1890ff" }
                },
                data: function () {
                    return {
                        dialogVisible: false,
                        listObj: {},
                        fileList: []
                    };
                },
                methods: {
                    checkAllSuccess: function () {
                        var t = this;
                        return Object.keys(this.listObj).every(function (e) {
                            return t.listObj[e].hasSuccess;
                        });
                    },
                    handleSubmit: function () {
                        var t = this;
                        var e = Object.keys(this.listObj).map(function (e) {
                            return t.listObj[e];
                        });
                        if (this.checkAllSuccess()) {
                            this.$emit("successCBK", e);
                            this.listObj = {};
                            this.fileList = [];
                            this.dialogVisible = false;
                        } else {
                            this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!");
                        }
                    },
                    handleSuccess: function (t, e) {
                        for (var i = e.uid, n = Object.keys(this.listObj), o = 0, s = n.length; o < s; o++) {
                            if (this.listObj[n[o]].uid === i) {
                                this.listObj[n[o]].url = t.files.file;
                                this.listObj[n[o]].hasSuccess = true;
                                return;
                            }
                        }
                    },
                    handleRemove: function (t) {
                        for (var e = t.uid, i = Object.keys(this.listObj), n = 0, o = i.length; n < o; n++) {
                            if (this.listObj[i[n]].uid === e) {
                                delete this.listObj[i[n]];
                                return;
                            }
                        }
                    },
                    beforeUpload: function (t) {
                        var e = this;
                        var i = window.URL || window.webkitURL;
                        var n = t.uid;
                        return new Promise(function (o, s) {
                            var a = new Image();
                            a.src = i.createObjectURL(t);
                            a.onload = function () {
                                e.listObj[n] = { hasSuccess: false, uid: t.uid, width: this.width, height: this.height };
                                o(true);
                            };
                        });
                    }
                }
            });
            var c = l;
            var r = (i("2888"), i("2877"));
            var u = Object(r["a"])(c, s, a, false, null, "3dae379b", null);
            var d = u.exports;
            var h = [
                "advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"
            ];
            var f = h;
            var m = [
                "searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample",
                "hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"
            ];
            var b = m;
            var p = i("b85c");
            var g = (i("14d9"), i("d9e2"), []);

            function y() {
                return window.tinymce;
            }

            var v = function (t, e) {
                var i = document.getElementById(t);
                var n = e || function () { };
                if (!i) {
                    var o = document.createElement("script");
                    o.src = t;
                    o.id = t;
                    document.body.appendChild(o);
                    g.push(n);
                    var s = "onload" in o? a : l;
                    s(o);
                }

                function a(e) {
                    e.onload = function () {
                        this.onerror = this.onload = null;
                        var t, i = Object(p["a"])(g);
                        try {
                            for (i.s();!(t = i.n()).done;) {
                                var n = t.value;
                                n(null, e);
                            }
                        } catch (o) {
                            i.e(o);
                        } finally {
                            i.f();
                        }
                        g = null;
                    };
                    e.onerror = function () {
                        this.onerror = this.onload = null;
                        n(new Error("Failed to load " + t), e);
                    };
                }

                function l(t) {
                    t.onreadystatechange = function () {
                        if ("complete" === this.readyState || "loaded" === this.readyState) {
                            this.onreadystatechange = null;
                            var e, i = Object(p["a"])(g);
                            try {
                                for (i.s();!(e = i.n()).done;) {
                                    var n = e.value;
                                    n(null, t);
                                }
                            } catch (o) {
                                i.e(o);
                            } finally {
                                i.f();
                            }
                            g = null;
                        }
                    };
                }
                if (i && n) {
                    if (y()) {
                        n(null, i);
                    } else {
                        g.push(n);
                    }
                }
            };
            var w = v;
            var _ = "https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js";
            var k = {
                name: "Tinymce",
                components: { editorImage: d },
                props: {
                    id: {
                        type: String,
                        default: function () {
                            return "vue-tinymce-" + +new Date + (1000 * Math.random()).toFixed(0);
                        }
                    },
                    value: { type: String, default: "" },
                    toolbar: {
                        type: Array,
                        required: false,
                        default: function () {
                            return [];
                        }
                    },
                    menubar: { type: String, default: "file edit insert view format table" },
                    height: {
                        type: [Number, String],
                        required: false,
                        default: 360
                    },
                    width: {
                        type: [Number, String],
                        required: false,
                        default: "auto"
                    }
                },
                data: function () {
                    return {
                        hasChange: false,
                        hasInit: false,
                        tinymceId: this.id,
                        fullscreen: false,
                        languageTypeList: {
                            en: "en",
                            zh: "zh_CN",
                            es: "es_MX",
                            ja: "ja"
                        }
                    };
                },
                computed: {
                    containerWidth: function () {
                        var t = this.width;
                        return /^[\d]+(\.[\d]+)?$/.test(t)? t + "px" : t;
                    }
                },
                watch: {
                    value: function (t) {
                        var e = this;
                        if (!this.hasChange && this.hasInit) {
                            this.$nextTick(function () {
                                return window.tinymce.get(e.tinymceId).setContent(t || "");
                            });
                        }
                    }
                },
                mounted: function () {
                    this.init();
                },
                activated: function () {
                    if (window.tinymce) {
                        this.initTinymce();
                    }
                },
                deactivated: function () {
                    this.destroyTinymce();
                },
                destroyed: function () {
                    this.destroyTinymce();
                },
                methods: {
                    init: function () {
                        var t = this;
                        w(_, function (e) {
                            if (e) {
                                t.$message.error(e.message);
                            } else {
                                t.initTinymce();
                            }
                        });
                    },
                    initTinymce: function () {
                        var t = this;
                        var e = this;
                        window.tinymce.init({
                            selector: "#" + this.tinymceId,
                            language: this.languageTypeList["en"], // 这里原代码是中文，改为英文
                            height: this.height,
                            body_class: "panel-body ",
                            object_resizing: false,
                            toolbar: this.toolbar.length > 0? this.toolbar : b,
                            menubar: this.menubar,
                            plugins: f,
                            end_container_on_empty_block: true,
                            powerpaste_word_import: "clean",
                            code_dialog_height: 450,
                            code_dialog_width: 1000,
                            advlist_bullet_styles: "square",
                            advlist_number_styles: "default",
                            imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
                            default_link_target: "_blank",
                            link_title: false,
                            nonbreaking_force_tab: true,
                            init_instance_callback: function (i) {
                                if (e.value) {
                                    i.setContent(e.value);
                                }
                                e.hasInit = true;
                                i.on("NodeChange Change KeyUp SetContent", function () {
                                    t.hasChange = true;
                                    t.$emit("input", i.getContent());
                                });
                            },
                            setup: function (t) {
                                t.on("FullscreenStateChanged", function (t) {
                                    e.fullscreen = t.state;
                                });
                            },
                            convert_urls: false
                        });
                    },
                    destroyTinymce: function () {
                        var t = window.tinymce.get(this.tinymceId);
                        if (this.fullscreen) {
                            t.execCommand("mceFullScreen");
                        }
                        if (t) {
                            t.destroy();
                        }
                    },
                    setContent: function (t) {
                        window.tinymce.get(this.tinymceId).setContent(t);
                    },
                    getContent: function () {
                        return window.tinymce.get(this.tinymceId).getContent();
                    },
                    imageSuccessCBK: function (t) {
                        var e = this;
                        t.forEach(function (t) {
                            return window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="' + t.url + '" >');
                        });
                    }
                }
            };
            var C = k;
            var j = (i("5fb8"), Object(r["a"])(C, n, o, false, null, "d1b0fb02", null));
            e["default"] = j.exports;
        },
        "8a83": function (t, e, i) { }
    }
]);
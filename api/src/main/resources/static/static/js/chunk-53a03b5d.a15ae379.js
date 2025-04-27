(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-53a03b5d"], {
    "1f34": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "app-container" }, [
                    t.formVisible ? a("el-dialog", {
                        attrs: { title: "Save Information", visible: t.formVisible },
                        on: { "update:visible": function (e) { t.formVisible = e; } }
                    }, [
                        a("el-form", { attrs: { model: t.form, "label-width": "100px" } }, [
                            a("el-form-item", { attrs: { label: "Avatar" } }, [
                                a("UploadFile", {
                                    attrs: { fs: t.avatar },
                                    on: { success: function (e) { return t.form.avatar = e; } }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Username" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Username" },
                                    model: {
                                        value: t.form.username,
                                        callback: function (e) { t.$set(t.form, "username", e); },
                                        expression: "form.username"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Password" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Password", type: "password" },
                                    model: {
                                        value: t.form.password,
                                        callback: function (e) { t.$set(t.form, "password", e); },
                                        expression: "form.password"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Name" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Nickname" },
                                    model: {
                                        value: t.form.name,
                                        callback: function (e) { t.$set(t.form, "name", e); },
                                        expression: "form.name"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Phone Number" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Phone Number" },
                                    model: {
                                        value: t.form.phone,
                                        callback: function (e) { t.$set(t.form, "phone", e); },
                                        expression: "form.phone"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Is Disabled" } }, [
                                a("el-select", {
                                    attrs: { placeholder: "Select whether to disable" },
                                    model: {
                                        value: t.form.disabled,
                                        callback: function (e) { t.$set(t.form, "disabled", e); },
                                        expression: "form.disabled"
                                    }
                                }, [
                                    a("el-option", { attrs: { label: "Disabled", value: !0 } }),
                                    a("el-option", { attrs: { label: "In Normal Use", value: !1 } })
                                ], 1)
                            ]),
                            a("el-form-item", [
                                a("el-button", {
                                    attrs: { type: "primary" },
                                    on: { click: t.handleSubmit }
                                }, [t._v("Submit Information")])
                            ], 1)
                        ], 1)
                    ]) : t._e(),
                    a("el-dialog", {
                        attrs: { title: "User Role", visible: t.allotVisible },
                        on: { "update:visible": function (e) { t.allotVisible = e; } }
                    }, [
                        a("el-form", { attrs: { model: t.allotForm, "label-width": "100px" } }, [
                            a("el-form-item", { attrs: { label: "Assign Role" } }, [
                                a("el-select", {
                                    staticStyle: { width: "100%" },
                                    attrs: { multiple: "", placeholder: "Please Select Roles" },
                                    model: {
                                        value: t.allotForm.roleIds,
                                        callback: function (e) { t.$set(t.allotForm, "roleIds", e); },
                                        expression: "allotForm.roleIds"
                                    }
                                }, t._l(t.roleList, function (t) {
                                    return a("el-option", { key: t.id, attrs: { label: t.name, value: t.id } });
                                }), 1)
                            ], 1),
                            a("el-form-item", [
                                a("el-button", {
                                    attrs: { type: "primary" },
                                    on: { click: t.handleSubmitAllot }
                                }, [t._v("Confirm Assignment")])
                            ], 1)
                        ], 1)
                    ]),
                    a("el-form", { attrs: { inline: !0, size: "small" } }, [
                        a("el-form-item", { attrs: { label: "Username:" } }, [
                            a("el-input", {
                                model: {
                                    value: t.searchParams.search,
                                    callback: function (e) { t.$set(t.searchParams, "search", e); },
                                    expression: "searchParams.search"
                                }
                            })
                        ], 1),
                        a("el-form-item", [
                            a("el-button", {
                                attrs: { type: "primary" },
                                on: { click: t.fetchData }
                            }, [t._v("Search")])
                        ], 1),
                        a("el-form-item", [
                            a("el-button", {
                                attrs: { type: "success" },
                                on: { click: t.handleInsert }
                            }, [t._v("Add Information")])
                        ], 1)
                    ], 1),
                    a("el-table", {
                        directives: [{ name: "loading", rawName: "v-loading", value: t.listLoading, expression: "listLoading" }],
                        attrs: { data: t.list, "element-loading-text": "Loading", border: "", fit: "", "highlight-current-row": "" }
                    }, [
                        a("el-table-column", { attrs: { align: "center", label: "Avatar" }, scopedSlots: t._u([{ key: "default", fn: function (t) { return [a("el-image", { staticStyle: { width: "40px", height: "40px" }, attrs: { fit: "cover", src: t.row.avatar } })]; } }]) }),
                        a("el-table-column", { attrs: { align: "center", label: "Username" }, scopedSlots: t._u([{ key: "default", fn: function (e) { return [t._v(" " + t._s(e.row.username) + " ")]; } }]) }),
                        a("el-table-column", { attrs: { align: "center", label: "Phone Number" }, scopedSlots: t._u([{ key: "default", fn: function (e) { return [t._v(" " + t._s(e.row.phone) + " ")]; } }]) }),
                        a("el-table-column", { attrs: { align: "center", label: "Name" }, scopedSlots: t._u([{ key: "default", fn: function (e) { return [t._v(" " + t._s(e.row.name) + " ")]; } }]) }),
                        a("el-table-column", { attrs: { align: "center", label: "Is Disabled" }, scopedSlots: t._u([{ key: "default", fn: function (e) { return [e.row.disabled ? a("el-tag", { attrs: { type: "danger" } }, [t._v("Disabled")]) : t._e(), e.row.disabled ? t._e() : a("el-tag", { attrs: { type: "success" } }, [t._v("In Normal Use")])]; } }]) }),
                        a("el-table-column", { attrs: { align: "center", label: "Actions" }, scopedSlots: t._u([{ key: "default", fn: function (e) { return [a("el-button", { attrs: { type: "text", size: "mini" }, on: { click: function (a) { return t.handleUpdate(e.row); } } }, [t._v("Edit")]), a("el-button", { attrs: { type: "text", size: "mini" }, on: { click: function (a) { return t.handleDelete(e.row); } } }, [t._v("Delete")]), a("el-button", { attrs: { type: "text", size: "mini" }, on: { click: function (a) { return t.handleOffline(e.row); } } }, [t._v("Force Offline")]), a("el-button", { attrs: { type: "text", size: "mini" }, on: { click: function (a) { return t.handleAllot(e.row); } } }, [t._v("Assign Role")])]; } }]) })
                    ], 1),
                    a("div", { style: { textAlign: "center", padding: "10px" } }, [
                        a("el-pagination", {
                            attrs: { background: "", layout: "prev, pager, next", total: t.searchParams.total, "current-page": t.searchParams.pageNum },
                            on: {
                                "update:currentPage": function (e) { return t.$set(t.searchParams, "pageNum", e); },
                                "update:current-page": function (e) { return t.$set(t.searchParams, "pageNum", e); },
                                "current-change": t.fetchData
                            }
                        })
                    ], 1)
                ], 1);
            },
            l = [],
            r = a("5530"),
            o = a("3528"),
            i = a("b775");

        // Helper functions for API requests
        function s(t) { return Object(i["a"])({ url: "user/list", method: "get", params: t }); }
        function c(t) { return Object(i["a"])({ url: "user/save", method: "post", data: t }); }
        function u(t) { return Object(i["a"])({ url: "user/del/" + t, method: "delete" }); }
        function f(t) { return Object(i["a"])({ url: "user/offline/" + t, method: "post" }); }
        function d(t) { return Object(i["a"])({ url: "user/role/list/" + t, method: "get" }); }
        function m(t) { var e = t.userId, a = t.roleIds; return Object(i["a"])({ url: "user/role/allot/" + e, method: "post", data: a }); }

        var h = a("b418"),
            p = {
                filters: {
                    statusFilter: function (t) {
                        var e = { published: "success", draft: "gray", deleted: "danger" };
                        return e[t];
                    }
                },
                components: { UploadFile: h["a"] },
                data: function () {
                    return {
                        list: null,
                        listLoading: !0,
                        formVisible: !1,
                        form: {},
                        allotVisible: !1,
                        allotForm: {},
                        roleList: [],
                        avatar: [],
                        searchParams: { total: 0, pageNum: 1, pageSize: 10, search: "" }
                    };
                },
                created: function () {
                    var t = this;
                    this.fetchData();
                    Object(o["b"])().then(function (e) { t.roleList = e.data.records; });
                },
                methods: {
                    handleAllot: function (t) {
                        var e = this;
                        d(t.id).then(function (a) {
                            e.allotForm = { roleIds: a.data, userId: t.id }, e.allotVisible = !0;
                        });
                    },
                    handleSubmitAllot: function () {
                        var t = this;
                        this.$confirm("Are you sure you want to assign roles to the user?", "Warning", { cancelButtonText: "Cancel", confirmButtonText: "Confirm" }).then(function () {
                            m(t.allotForm).then(function () {
                                t.$message.success("Role assignment successful"), t.allotVisible = !1;
                            });
                        });
                    },
                    handleOffline: function (t) {
                        var e = this;
                        this.$confirm("Are you sure you want to force the user offline?", "Warning", { cancelButtonText: "Cancel", confirmButtonText: "Confirm" }).then(function () {
                            f(t.username).then(function () {
                                e.$message.success("Offline successful");
                            });
                        });
                    },
                    handleUpdate: function (t) {
                        this.form = Object(r["a"])({}, t), this.avatar = [t.avatar], this.formVisible = !0;
                    },
                    handleInsert: function () {
                        this.form = { role: parseInt(this.$route.params.role) }, this.formVisible = !0;
                    },
                    handleSubmit: function () {
                        var t = this;
                        c(this.form).then(function () {
                            t.$message.success("Information saved successfully"), t.fetchData(), t.formVisible = !1;
                        });
                    },
                    handleDelete: function (t) {
                        var e = this, a = t.id;
                        this.$confirm("Are you sure you want to delete this information?", "Warning", { cancelButtonText: "Cancel", confirmButtonText: "Confirm" }).then(function () {
                            u(a).then(function () {
                                e.$message.success("Deleted successfully"), e.fetchData();
                            });
                        });
                    },
                    fetchData: function () {
                        var t = this;
                        this.listLoading = !0;
                        s(this.searchParams).then(function (e) {
                            var a = e.data, n = a.records, l = a.total;
                            t.list = n, t.searchParams.total = l, t.listLoading = !1;
                        });
                    }
                }
            },
            b = p,
            v = a("2877"),
            g = Object(v["a"])(b, n, l, !1, null, null, null);
        e["default"] = g.exports;
    },
    "3528": function (t, e, a) {
        "use strict";
        a.d(e, "b", function () { return l; }),
            a.d(e, "a", function () { return r; }),
            a.d(e, "c", function () { return o; });

        var n = a("b775");

        function l() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { pageNum: 1, pageSize: 999999, search: "" };
            return Object(n["a"])({ url: "role/list", params: t });
        }

        function r(t) { return Object(n["a"])({ url: "role/del/" + t, method: "delete" }); }
        function o(t) { return Object(n["a"])({ url: "role/save", method: "post", data: t }); }
    },
    "b418": function (t, e, a) {
        "use strict";
        var n = function () {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticStyle: { width: "100%" } }, [
                    a("el-upload", {
                        attrs: {
                            action: t.uploadAction,
                            "list-type": t.type,
                            limit: t.count,
                            "on-success": t.onSuccess,
                            "on-remove": t.onRemove,
                            "on-error": t.onError,
                            "file-list": t.files
                        }
                    }, [
                        a("div", {
                            style: "file" === t.type ? "width:100px;height:100px;border:1px solid #e5e5e5;text-align:center;display:flex;flex-direction: column;justify-content: center;" : ""
                        }, [
                            a("i", { staticClass: "el-icon-plus" })
                        ])
                    ])
                ], 1);
            },
            l = [],
            r = (a("a9e3"), a("d81d"), a("14d9"), a("4de4"), a("d3b7"), {
                props: {
                    fs: { type: Array, default: void 0 },
                    count: { type: Number, default: 1 },
                    type: { type: String, default: "picture-card" }
                },
                data: function () {
                    return { files: [], uploadAction: "http://localhost:9090/upload" };
                },
                computed: {
                    filelist: function () {
                        return (this.fs || []).map(function (t, e) { return { url: t, name: "File" + e }; });
                    }
                },
                watch: {
                    fs: function (t) {
                        this.files = (t || []).map(function (t, e) { return { url: t, uid: e, name: "File" + e }; });
                    },
                    files: function (t) {
                        t.length > 0 && (1 === this.count ? this.$emit("success", this.files[0].url) : this.$emit("success", this.files.map(function (t) { return t.url; })));
                    }
                },
                created: function () {
                    this.files = (this.fs || []).map(function (t, e) { return { url: t, uid: e, name: "File" + e }; });
                },
                methods: {
                    onSuccess: function (t) {
                        this.files.push(t.data), this.$emit("success", "/dev-api/files/" + t.data.url);
                    },
                    onRemove: function (t) {
                        this.files = this.files.filter(function (e) { return e.uid !== t.uid; });
                    },
                    onError: function () {
                        this.$message.error("Upload failed. Maximum file size is 50MB.");
                    }
                }
            }),
            o = r,
            i = a("2877"),
            s = Object(i["a"])(o, n, l, !1, null, null, null);
        e["a"] = s.exports;
    }
}]);
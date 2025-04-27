(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-42dde139"], {
    "5fed": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = function () {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "app-container" }, [
                    a("el-dialog", {
                        attrs: { title: "Save Information", visible: e.formVisible },
                        on: { "update:visible": function (t) { e.formVisible = t; } }
                    }, [
                        a("el-form", { attrs: { model: e.form, "label-width": "100px" } }, [
                            a("el-form-item", { attrs: { label: "Permission Character" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Permission Character" },
                                    model: {
                                        value: e.form.name,
                                        callback: function (t) { e.$set(e.form, "name", t); },
                                        expression: "form.name"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Permission Name" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Permission Name" },
                                    model: {
                                        value: e.form.description,
                                        callback: function (t) { e.$set(e.form, "description", t); },
                                        expression: "form.description"
                                    }
                                })
                            ], 1),
                            a("el-form-item", [
                                a("el-button", {
                                    attrs: { type: "primary" },
                                    on: { click: e.handleSubmit }
                                }, [e._v("Submit Information")])
                            ], 1)
                        ], 1)
                    ], 1),
                    a("el-form", { attrs: { inline: !0, size: "small" } }, [
                        a("el-form-item", { attrs: { label: "Search:" } }, [
                            a("el-input", {
                                model: {
                                    value: e.searchParams.search,
                                    callback: function (t) { e.$set(e.searchParams, "search", t); },
                                    expression: "searchParams.search"
                                }
                            })
                        ], 1),
                        a("el-form-item", [
                            a("el-button", {
                                attrs: { type: "primary" },
                                on: { click: e.fetchData }
                            }, [e._v("Search")])
                        ], 1),
                        a("el-form-item", [
                            a("el-button", {
                                attrs: { type: "success" },
                                on: { click: e.handleInsert }
                            }, [e._v("Add Information")])
                        ], 1)
                    ], 1),
                    a("el-table", {
                        directives: [{ name: "loading", rawName: "v-loading", value: e.listLoading, expression: "listLoading" }],
                        attrs: { data: e.list, "element-loading-text": "Loading", border: "", fit: "", "highlight-current-row": "" }
                    }, [
                        a("el-table-column", {
                            attrs: { align: "center", label: "ID" },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function (t) {
                                    return [e._v(" " + e._s(t.row.id) + " ")];
                                }
                            }])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Permission Character" },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function (t) {
                                    return [e._v(" " + e._s(t.row.name) + " ")];
                                }
                            }])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Permission Name" },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function (t) {
                                    return [e._v(" " + e._s(t.row.description) + " ")];
                                }
                            }])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Actions" },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function (t) {
                                    return [
                                        a("el-button", {
                                            attrs: { type: "text", size: "mini" },
                                            on: { click: function (a) { return e.handleUpdate(t.row); } }
                                        }, [e._v("Edit")]),
                                        a("el-button", {
                                            attrs: { type: "text", size: "mini" },
                                            on: { click: function (a) { return e.handleDelete(t.row); } }
                                        }, [e._v("Delete")])
                                    ];
                                }
                            }])
                        })
                    ], 1),
                    a("div", { style: { textAlign: "center", padding: "10px" } }, [
                        a("el-pagination", {
                            attrs: { background: "", layout: "prev, pager, next", total: e.searchParams.total, "current-page": e.searchParams.pageNum },
                            on: {
                                "update:currentPage": function (t) { return e.$set(e.searchParams, "pageNum", t); },
                                "update:current-page": function (t) { return e.$set(e.searchParams, "pageNum", t); },
                                "current-change": e.fetchData
                            }
                        })
                    ], 1)
                ], 1);
            },
            r = [],
            i = a("5530"),
            s = a("c1b4"),
            l = {
                filters: {
                    statusFilter: function (e) {
                        var t = { published: "success", draft: "gray", deleted: "danger" };
                        return t[e];
                    }
                },
                data: function () {
                    return {
                        list: null,
                        listLoading: !0,
                        formVisible: !1,
                        form: {},
                        searchParams: { total: 0, pageNum: 1, pageSize: 10, search: "" }
                    };
                },
                created: function () {
                    this.fetchData();
                },
                methods: {
                    handleUpdate: function (e) {
                        this.form = Object(i["a"])({}, e), this.formVisible = !0;
                    },
                    handleInsert: function () {
                        this.form = { role: parseInt(this.$route.params.role) }, this.formVisible = !0;
                    },
                    handleSubmit: function () {
                        var e = this;
                        Object(s["c"])(this.form).then((function () {
                            e.$message.success("Information saved successfully"), e.fetchData(), e.formVisible = !1;
                        }));
                    },
                    handleDelete: function (e) {
                        var t = this,
                            a = e.id;
                        this.$confirm("Are you sure to delete this information?", "Warning", {
                            cancelButtonText: "Cancel",
                            confirmButtonText: "Confirm"
                        }).then((function () {
                            Object(s["a"])(a).then((function () {
                                t.$message.success("Deleted successfully"), t.fetchData();
                            }));
                        }));
                    },
                    fetchData: function () {
                        var e = this;
                        this.listLoading = !0, Object(s["b"])(this.searchParams).then((function (t) {
                            var a = t.data,
                                n = a.records,
                                r = a.total;
                            e.list = n, e.searchParams.total = r, e.listLoading = !1;
                        }));
                    }
                }
            },
            o = l,
            c = a("2877"),
            u = Object(c["a"])(o, n, r, !1, null, null, null);
        t["default"] = u.exports;
    },
    c1b4: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () { return r; })),
            a.d(t, "a", (function () { return i; })),
            a.d(t, "c", (function () { return s; }));
        var n = a("b775");
        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { pageNum: 1, pageSize: 999999, search: "" };
            return Object(n["a"])({ url: "permission/list", params: e });
        }
        function i(e) {
            return Object(n["a"])({ url: "permission/del/" + e, method: "delete" });
        }
        function s(e) {
            return Object(n["a"])({ url: "permission/save", method: "post", data: e });
        }
    }
}]);
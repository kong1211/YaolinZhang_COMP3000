(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0cf73e"],
    {
        "647a": function (e, t, a) {
            "use strict";
            a.r(t);
            var n = function () {
                var e = this;
                var t = e.$createElement;
                var a = e._self._c || t;
                return a("div", { staticClass: "app-container" }, [
                    a("el-dialog", {
                        attrs: { title: "Save Information", visible: e.formVisible },
                        on: {
                            "update:visible": function (t) {
                                e.formVisible = t;
                            }
                        }
                    }, [
                        a("el-form", {
                            attrs: { model: e.form, "label-width": "100px" }
                        }, [
                            a("el-form-item", { attrs: { label: "Dish Name" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Dish Name" },
                                    model: {
                                        value: e.form.name,
                                        callback: function (t) {
                                            e.$set(e.form, "name", t);
                                        },
                                        expression: "form.name"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Dish Details" } }, [
                                a("el-input", {
                                    attrs: { type: "textarea", placeholder: "Dish Details" },
                                    model: {
                                        value: e.form.detail,
                                        callback: function (t) {
                                            e.$set(e.form, "detail", t);
                                        },
                                        expression: "form.detail"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Dish Price" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Dish Price" },
                                    model: {
                                        value: e.form.price,
                                        callback: function (t) {
                                            e.$set(e.form, "price", t);
                                        },
                                        expression: "form.price"
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
                    a("el-form", { attrs: { inline: true, size: "small" } }, [
                        a("el-form-item", { attrs: { label: "Search:" } }, [
                            a("el-input", {
                                model: {
                                    value: e.searchParams.search,
                                    callback: function (t) {
                                        e.$set(e.searchParams, "search", t);
                                    },
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
                        directives: [
                            {
                                name: "loading",
                                rawName: "v-loading",
                                value: e.listLoading,
                                expression: "listLoading"
                            }
                        ],
                        attrs: {
                            data: e.list,
                            "element-loading-text": "Loading",
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        }
                    }, [
                        a("el-table-column", {
                            attrs: { align: "center", label: "ID" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.id) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Dish Name" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.name) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Dish Details" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.detail) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Dish Price" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.price) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Operation" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [
                                            a("el-button", {
                                                attrs: { type: "text", size: "mini" },
                                                on: {
                                                    click: function (a) {
                                                        return e.handleUpdate(t.row);
                                                    }
                                                }
                                            }, [e._v("Modify")]),
                                            a("el-button", {
                                                attrs: { type: "text", size: "mini" },
                                                on: {
                                                    click: function (a) {
                                                        return e.handleDelete(t.row);
                                                    }
                                                }
                                            }, [e._v("Delete")])
                                        ];
                                    }
                                }
                            ])
                        })
                    ], 1),
                    a("div", { style: { textAlign: "center", padding: "10px" } }, [
                        a("el-pagination", {
                            attrs: {
                                background: "",
                                layout: "prev, pager, next",
                                total: e.searchParams.total,
                                "current-page": e.searchParams.pageNum
                            },
                            on: {
                                "update:currentPage": function (t) {
                                    return e.$set(e.searchParams, "pageNum", t);
                                },
                                "update:current-page": function (t) {
                                    return e.$set(e.searchParams, "pageNum", t);
                                },
                                "current-change": e.fetchData
                            }
                        })
                    ], 1)
                ], 1);
            };
            var r = [];
            var l = a("5530");
            var i = a("b775");

            function s() {
                var e = arguments.length > 0 && void 0!== arguments[0]? arguments[0] : { pageNum: 1, pageSize: 999999, search: "" };
                return Object(i["a"])({ url: "hall/item/list", params: e });
            }

            function o(e) {
                return Object(i["a"])({ url: "hall/item/del/".concat(e), method: "delete" });
            }

            function c(e) {
                return Object(i["a"])({ url: "hall/item/save", method: "post", data: e });
            }

            var u = {
                filters: {
                    statusFilter: function (e) {
                        var t = { published: "success", draft: "gray", deleted: "danger" };
                        return t[e];
                    }
                },
                data: function () {
                    return {
                        list: null,
                        listLoading: true,
                        formVisible: false,
                        form: {},
                        searchParams: {
                            total: 0,
                            pageNum: 1,
                            pageSize: 10,
                            search: ""
                        }
                    };
                },
                created: function () {
                    this.fetchData();
                },
                methods: {
                    handleUpdate: function (e) {
                        this.form = Object(l["a"])({}, e);
                        this.formVisible = true;
                    },
                    handleInsert: function () {
                        this.form = {};
                        this.formVisible = true;
                    },
                    handleSubmit: function () {
                        var e = this;
                        c(this.form).then(function () {
                            e.$message.success("Information saved successfully");
                            e.fetchData();
                            e.formVisible = false;
                        });
                    },
                    handleDelete: function (e) {
                        var t = this;
                        var a = e.id;
                        this.$confirm("Are you sure you want to delete this information?", "Warning", {
                            cancelButtonText: "Cancel",
                            confirmButtonText: "Confirm"
                        }).then(function () {
                            o(a).then(function () {
                                t.$message.success("Deleted successfully");
                                t.fetchData();
                            });
                        });
                    },
                    fetchData: function () {
                        var e = this;
                        this.listLoading = true;
                        s(this.searchParams).then(function (t) {
                            var a = t.data;
                            var n = a.records;
                            var r = a.total;
                            e.list = n;
                            e.searchParams.total = r;
                            e.listLoading = false;
                        });
                    }
                }
            };
            var m = u;
            var f = a("2877");
            var d = Object(f["a"])(m, n, r, false, null, null, null);
            t["default"] = d.exports;
        }
    }
]);
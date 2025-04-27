(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0dae66"],
    {
        "6e23": function (e, t, a) {
            "use strict";
            a.r(t);
            var l = function () {
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
                            a("el-form-item", { attrs: { label: "Employee Name" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Employee Name" },
                                    model: {
                                        value: e.form.name,
                                        callback: function (t) {
                                            e.$set(e.form, "name", t);
                                        },
                                        expression: "form.name"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Employee Password" } }, [
                                a("el-input", {
                                    attrs: { type: "password", placeholder: "Employee Password" },
                                    model: {
                                        value: e.form.password,
                                        callback: function (t) {
                                            e.$set(e.form, "password", t);
                                        },
                                        expression: "form.password"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Employee Details" } }, [
                                a("el-input", {
                                    attrs: { type: "textarea", placeholder: "Employee Details" },
                                    model: {
                                        value: e.form.detail,
                                        callback: function (t) {
                                            e.$set(e.form, "detail", t);
                                        },
                                        expression: "form.detail"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Employee Phone" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Employee Phone (Login Account)" },
                                    model: {
                                        value: e.form.phone,
                                        callback: function (t) {
                                            e.$set(e.form, "phone", t);
                                        },
                                        expression: "form.phone"
                                    }
                                })
                            ], 1),
                            a("el-form-item", { attrs: { label: "Employee Gender" } }, [
                                a("el-select", {
                                    attrs: { placeholder: "Please select the gender" },
                                    model: {
                                        value: e.form.sex,
                                        callback: function (t) {
                                            e.$set(e.form, "sex", t);
                                        },
                                        expression: "form.sex"
                                    }
                                }, [
                                    a("el-option", { attrs: { label: "Male", value: "Male" } }),
                                    a("el-option", { attrs: { label: "Female", value: "Female" } })
                                ], 1)
                            ], 1),
                            a("el-form-item", { attrs: { label: "Working Hours" } }, [
                                a("el-input", {
                                    attrs: { placeholder: "Working Hours" },
                                    model: {
                                        value: e.form.jobTime,
                                        callback: function (t) {
                                            e.$set(e.form, "jobTime", t);
                                        },
                                        expression: "form.jobTime"
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
                            attrs: { align: "center", label: "Employee Name" },
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
                            attrs: { align: "center", label: "Employee Details" },
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
                            attrs: { align: "center", label: "Employee Gender" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.sex) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Employee Phone" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.phone) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Working Hours" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.jobTime) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Joining Time" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.joinTime) + " ")];
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
            var n = a("5530");
            var o = a("b775");

            function s() {
                var e = arguments.length > 0 && void 0!== arguments[0]? arguments[0] : { pageNum: 1, pageSize: 999999, search: "" };
                return Object(o["a"])({ url: "hall/emp/list", params: e });
            }

            function i(e) {
                return Object(o["a"])({ url: "hall/emp/del/".concat(e), method: "delete" });
            }

            function c(e) {
                return Object(o["a"])({ url: "hall/emp/save", method: "post", data: e });
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
                        this.form = Object(n["a"])({}, e);
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
                            i(a).then(function () {
                                t.$message.success("Deletion successful");
                                t.fetchData();
                            });
                        });
                    },
                    fetchData: function () {
                        var e = this;
                        this.listLoading = true;
                        s(this.searchParams).then(function (t) {
                            var a = t.data;
                            var l = a.records;
                            var r = a.total;
                            e.list = l;
                            e.searchParams.total = r;
                            e.listLoading = false;
                        });
                    }
                }
            };
            var m = u;
            var f = a("2877");
            var d = Object(f["a"])(m, l, r, false, null, null, null);
            t["default"] = d.exports;
        }
    }
]);
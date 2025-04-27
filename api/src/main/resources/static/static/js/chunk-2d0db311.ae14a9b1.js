(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0db311"],
    {
        "6f8c": function (e, t, a) {
            "use strict";
            a.r(t);
            var n = function () {
                var e = this;
                var t = e.$createElement;
                var a = e._self._c || t;
                return a("div", { staticClass: "app-container" }, [
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
                                attrs: { type: "danger" },
                                on: { click: e.clearLogs }
                            }, [e._v("Clear Logs")])
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
                            attrs: { align: "center", label: "Username" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.username) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Log Content" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.content) + " ")];
                                    }
                                }
                            ])
                        }),
                        a("el-table-column", {
                            attrs: { align: "center", label: "Log Time" },
                            scopedSlots: e._u([
                                {
                                    key: "default",
                                    fn: function (t) {
                                        return [e._v(" " + e._s(t.row.createTime) + " ")];
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
            var l = a("b775");

            function s(e) {
                return Object(l["a"])({ url: "log/page", method: "get", params: e });
            }

            function c(e) {
                return Object(l["a"])({ url: "/log/del/" + e, method: "delete" });
            }

            function o() {
                return Object(l["a"])({ url: "/log/cleanAll", method: "delete" });
            }

            var i = {
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
                    clearLogs: function () {
                        var e = this;
                        this.$confirm("Are you sure you want to clear all log information?", "Prompt").then(function () {
                            o().then(function () {
                                e.$message.success("Logs cleared successfully");
                                e.fetchData();
                            });
                        });
                    },
                    handleDelete: function (e) {
                        var t = this;
                        var a = e.id;
                        this.$confirm("Are you sure you want to delete this information?", "Warning", {
                            cancelButtonText: "Cancel",
                            confirmButtonText: "Confirm"
                        }).then(function () {
                            c(a).then(function () {
                                t.$message.success("Deletion successful");
                                t.fetchData();
                            });
                        });
                    },
                    fetchData: function () {
                        var e = this;
                        this.listLoading = true;
                        s(this.searchParams).then(function (t) {
                            e.list = t.data.records;
                            e.searchParams.total = t.data.total;
                            e.listLoading = false;
                        });
                    }
                }
            };
            var u = i;
            var d = a("2877");
            var f = Object(d["a"])(u, n, r, false, null, null, null);
            t["default"] = f.exports;
        }
    }
]);
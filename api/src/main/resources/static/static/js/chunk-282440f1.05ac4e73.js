(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-282440f1"], {
    "a6dc": function (e, t, a) {
        "use strict";
        a.d(t, "d", function () { return r; });
        a.d(t, "e", function () { return l; });
        a.d(t, "b", function () { return o; });
        a.d(t, "f", function () { return i; });
        a.d(t, "c", function () { return s; });
        a.d(t, "a", function () { return c; });

        var n = a("b775");

        // Function to fetch menu tree
        function r() {
            return Object(n["a"])({ url: "menu/tree", method: "get" });
        }

        // Function to fetch menu list
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { pageNum: 1, pageSize: 999999, search: "" };
            return Object(n["a"])({ url: "menu/list", params: e });
        }

        // Function to delete a menu
        function o(e) {
            return Object(n["a"])({ url: "menu/del/" + e, method: "delete" });
        }

        // Function to save a menu
        function i(e) {
            return Object(n["a"])({ url: "menu/save", method: "post", data: e });
        }

        // Function to fetch assigned menus for a role
        function s(e) {
            return Object(n["a"])({ url: "role/menu/list/" + e, method: "get" });
        }

        // Function to assign menus to a role
        function c(e) {
            var t = e.roleId, a = e.menuIds;
            return Object(n["a"])({ url: "role/menu/allot/" + t, method: "post", data: a });
        }
    },
    "f794": function (e, t, a) {
        "use strict";
        a.r(t);
        var n = function () {
            var e = this,
                t = e.$createElement,
                a = e._self._c || t;
            return a("div", { staticClass: "app-container" }, [
                // Dialog for saving menu information
                a("el-dialog", {
                    attrs: { title: "Save Information", visible: e.formVisible },
                    on: { "update:visible": function (t) { e.formVisible = t; } }
                }, [
                    a("el-form", { attrs: { model: e.form, "label-width": "100px" } }, [
                        a("el-form-item", { attrs: { label: "Menu Name" } }, [
                            a("el-input", {
                                attrs: { placeholder: "Menu Name" },
                                model: {
                                    value: e.form.name,
                                    callback: function (t) { e.$set(e.form, "name", t); },
                                    expression: "form.name"
                                }
                            })
                        ], 1),
                        a("el-form-item", { attrs: { label: "Menu Path" } }, [
                            a("el-input", {
                                attrs: { placeholder: "Menu Path" },
                                model: {
                                    value: e.form.path,
                                    callback: function (t) { e.$set(e.form, "path", t); },
                                    expression: "form.path"
                                }
                            })
                        ], 1),
                        a("el-form-item", { attrs: { label: "Parent Menu" } }, [
                            a("el-select", {
                                attrs: { placeholder: "Select Parent Menu" },
                                model: {
                                    value: e.form.parent,
                                    callback: function (t) { e.$set(e.form, "parent", t); },
                                    expression: "form.parent"
                                }
                            }, [
                                a("el-option", { attrs: { label: "Main Menu", value: 0 } }),
                                e._l(e.treeMenus, function (e) {
                                    return a("el-option", { key: e.id, attrs: { label: e.name, value: e.id } });
                                })
                            ], 2)
                        ], 1),
                        a("el-form-item", { attrs: { label: "Menu Icon" } }, [
                            a("el-select", {
                                attrs: { placeholder: "Select Menu Icon" },
                                model: {
                                    value: e.form.icon,
                                    callback: function (t) { e.$set(e.form, "icon", t); },
                                    expression: "form.icon"
                                }
                            }, [
                                a("el-option", { attrs: { label: "None", value: "" } }),
                                a("el-option", { attrs: { label: "Default", value: "el-icon-menu" } })
                            ], 1)
                        ], 1),
                        a("el-form-item", [
                            a("el-button", {
                                attrs: { type: "primary" },
                                on: { click: e.handleSubmit }
                            }, [e._v("Submit Information")])
                        ], 1)
                    ], 1)
                ], 1),

                // Search and table section
                a("el-form", { attrs: { inline: true, size: "small" } }, [
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
                    a("el-table-column", { attrs: { align: "center", label: "ID" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [e._v(" " + e._s(t.row.id) + " ")]; } }]) }),
                    a("el-table-column", { attrs: { align: "center", label: "Menu Name" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [e._v(" " + e._s(t.row.name) + " ")]; } }]) }),
                    a("el-table-column", { attrs: { align: "center", label: "Parent Menu" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [e._v(" " + e._s(t.row.parentName) + " ")]; } }]) }),
                    a("el-table-column", { attrs: { align: "center", label: "Menu Path" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [e._v(" " + e._s(t.row.path) + " ")]; } }]) }),
                    a("el-table-column", { attrs: { align: "center", label: "Menu Icon" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [e._v(" " + e._s(t.row.icon) + " ")]; } }]) }),
                    a("el-table-column", { attrs: { align: "center", label: "Actions" }, scopedSlots: e._u([{ key: "default", fn: function (t) { return [
                                a("el-button", {
                                    attrs: { type: "text", size: "mini" },
                                    on: { click: function (a) { return e.handleUpdate(t.row); } }
                                }, [e._v("Edit")]),
                                a("el-button", {
                                    attrs: { type: "text", size: "mini" },
                                    on: { click: function (a) { return e.handleDelete(t.row); } }
                                }, [e._v("Delete")])
                            ]; } }]) })
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
        }, r = [], l = a("5530"), o = a("a6dc"), i = {
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
                    searchParams: { total: 0, pageNum: 1, pageSize: 10, search: "" },
                    treeMenus: []
                };
            },
            created: function () {
                this.fetchTree(),
                    this.fetchData();
            },
            methods: {
                fetchTree: function () {
                    var e = this;
                    Object(o["d"])().then(function (t) { e.treeMenus = t.data; });
                },
                handleUpdate: function (e) {
                    this.form = Object(l["a"])({}, e),
                        this.formVisible = true;
                },
                handleInsert: function () {
                    this.form = { role: parseInt(this.$route.params.role) },
                        this.formVisible = true;
                },
                handleSubmit: function () {
                    var e = this;
                    Object(o["f"])(this.form).then(function () {
                        e.$message.success("Information saved successfully"),
                            e.fetchData(),
                            e.formVisible = false;
                    });
                },
                handleDelete: function (e) {
                    var t = this, a = e.id;
                    this.$confirm("Are you sure you want to delete this information?", "Warning", { cancelButtonText: "Cancel", confirmButtonText: "Confirm" }).then(function () {
                        Object(o["b"])(a).then(function () {
                            t.$message.success("Deleted successfully"),
                                t.fetchData();
                        });
                    });
                },
                fetchData: function () {
                    var e = this;
                    this.listLoading = true,
                        Object(o["e"])(this.searchParams).then(function (t) {
                            var a = t.data, n = a.records, r = a.total;
                            e.list = n,
                                e.searchParams.total = r,
                                e.listLoading = false;
                        });
                }
            }
        }, s = i, c = a("2877"), u = Object(c["a"])(s, n, r, false, null, null, null);
        t["default"] = u.exports;
    }
}]);
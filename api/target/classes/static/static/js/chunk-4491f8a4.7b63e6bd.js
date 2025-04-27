// (window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4491f8a4"],{4837:function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"e",(function(){return s}));var n=a("b775");function l(t){return Object(n["a"])({url:"/hall/order/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/hall/order/insert",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/hall/order/get/".concat(t),method:"get"})}function i(t){return Object(n["a"])({url:"/hall/order/del/"+t,method:"delete"})}function s(t){return Object(n["a"])({url:"/hall/order/update",method:"put",data:t})}},feb0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"customer:"}},[a("el-input",{model:{value:t.searchParams.search,callback:function(e){t.$set(t.searchParams,"search",e)},expression:"searchParams.search"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.fetchData}},[t._v("Search")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"order number"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"customer"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.nickName)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"cost"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.totalAmount)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"time"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.createTime)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"order status"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.state)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"Handle"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleShow(e.row)}}},[t._v("View")]),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("change")]),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("delete")])]}}])})],1),a("div",{style:{textAlign:"center",padding:"10px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.searchParams.total,"current-page":t.searchParams.pageNum},on:{"update:currentPage":function(e){return t.$set(t.searchParams,"pageNum",e)},"update:current-page":function(e){return t.$set(t.searchParams,"pageNum",e)},"current-change":t.fetchData}})],1),a("el-dialog",{attrs:{visible:t.formVisible,title:"order info",width:"80%","append-to-body":""},on:{"update:visible":function(e){t.formVisible=e}}},[a("el-card",[a("p",[t._v("order number："+t._s(t.form.id))]),a("p",[t._v("cost："+t._s(t.form.totalAmount))]),a("p",[t._v("time："+t._s(t.form.createTime))]),a("p",[t._v("order人："+t._s(t.form.nickName))]),a("p",[t._v("order status："+t._s(t.form.state))]),a("p",[t._v("customer evaluate："+t._s(t.form.comment||"nothing"))])]),a("br"),a("el-card",[a("el-table",{attrs:{data:t.form.items,fit:"",border:""}},[a("el-table-column",{attrs:{label:"dish name",align:"center",prop:"itemName"}}),a("el-table-column",{attrs:{label:"单价",align:"center",prop:"unitPrice"}}),a("el-table-column",{attrs:{label:"number",align:"center",prop:"num"}}),a("el-table-column",{attrs:{label:"money",align:"center",prop:"totalPrice"}})],1)],1)],1),a("el-dialog",{attrs:{visible:t.updateVisible,title:"order status","append-to-body":"",width:"80"},on:{"update:visible":function(e){t.updateVisible=e}}},[a("el-form",{attrs:{model:t.form,"label-width":"100px"}},[t.checkAnyRoles("customer")?a("el-form-item",{attrs:{label:"evaluate"}},[a("el-input",{attrs:{type:"textarea",placeholder:"evaluate"},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1):a("el-form-item",{attrs:{label:"order status"}},[a("el-select",{attrs:{placeholder:"plschooseorder status"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}},[a("el-option",{attrs:{label:"orderd",value:"orderd"}}),a("el-option",{attrs:{label:"prepare materials",value:"prepare materials"}}),a("el-option",{attrs:{label:"cooking",value:"cooking"}}),a("el-option",{attrs:{label:"meal waiting",value:"meal waiting"}}),a("el-option",{attrs:{label:"meal successful",value:"meal successful"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("Submit")])],1)],1)],1)],1)},l=[],r=a("5530"),o=a("4837"),i={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0,formVisible:!1,updateVisible:!1,form:{},searchParams:{total:0,pageNum:1,pageSize:10,search:""}}},created:function(){this.fetchData()},methods:{handleUpdate:function(t){this.form=Object(r["a"])({},t),this.updateVisible=!0},handleShow:function(t){var e=this;Object(o["b"])(t.id).then((function(t){e.formVisible=!0,e.form=t.data}))},handleSubmit:function(){var t=this;Object(o["e"])(this.form).then((function(){t.$message.success("Save infosuccessful"),t.fetchData(),t.updateVisible=!1}))},handleDelete:function(t){var e=this,a=t.id;this.$confirm("delete the info？","warning",{cancelButtonText:"cancel",confirmButtonText:"confirm"}).then((function(){Object(o["a"])(a).then((function(){e.$message.success("delete successful"),e.fetchData()}))}))},fetchData:function(){var t=this;this.listLoading=!0,Object(o["c"])(this.searchParams).then((function(e){var a=e.data,n=a.records,l=a.total;t.list=n,t.searchParams.total=l,t.listLoading=!1}))}}},s=i,c=a("2877"),u=Object(c["a"])(s,n,l,!1,null,null,null);e["default"]=u.exports}}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-4491f8a4"], {
        4837: function(t, e, a) {
            "use strict";
            a.d(e, "c", (function() {
                return l
            })), a.d(e, "d", (function() {
                return r
            })), a.d(e, "b", (function() {
                return o
            })), a.d(e, "a", (function() {
                return i
            })), a.d(e, "e", (function() {
                return s
            }));
            var n = a("b775");

            function l(t) {
                return Object(n["a"])({
                    url: "/hall/order/list",
                    method: "get",
                    params: t
                })
            }

            function r(t) {
                return Object(n["a"])({
                    url: "/hall/order/insert",
                    method: "post",
                    data: t
                })
            }

            function o(t) {
                return Object(n["a"])({
                    url: "/hall/order/get/".concat(t),
                    method: "get"
                })
            }

            function i(t) {
                return Object(n["a"])({
                    url: "/hall/order/del/" + t,
                    method: "delete"
                })
            }

            function s(t) {
                return Object(n["a"])({
                    url: "/hall/order/update",
                    method: "put",
                    data: t
                })
            }
        },
        feb0: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("el-form", {
                        attrs: {
                            inline: !0,
                            size: "small"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "customer:"
                        }
                    }, [a("el-input", {
                        model: {
                            value: t.searchParams.search,
                            callback: function(e) {
                                t.$set(t.searchParams, "search", e)
                            },
                            expression: "searchParams.search"
                        }
                    })], 1), a("el-form-item", [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.fetchData
                        }
                    }, [t._v("Search")])], 1)], 1), a("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.listLoading,
                            expression: "listLoading"
                        }],
                        attrs: {
                            data: t.list,
                            "element-loading-text": "Loading",
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "order number"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(" " + t._s(e.row.id) + " ")]
                            }
                        }])
                    }), a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "customer"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(" " + t._s(e.row.nickName) + " ")]
                            }
                        }])
                    }), a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "cost"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(" " + t._s(e.row.totalAmount) + " ")]
                            }
                        }])
                    }), a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "time"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(" " + t._s(e.row.createTime) + " ")]
                            }
                        }])
                    }), a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "order status"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [t._v(" " + t._s(e.row.state) + " ")]
                            }
                        }])
                    }), a("el-table-column", {
                        attrs: {
                            align: "center",
                            label: "Handle"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.handleShow(e.row)
                                        }
                                    }
                                }, [t._v("View")]), a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.handleUpdate(e.row)
                                        }
                                    }
                                }, [t._v("change")]), a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(a) {
                                            return t.handleDelete(e.row)
                                        }
                                    }
                                }, [t._v("delete")])]
                            }
                        }])
                    })], 1), a("div", {
                        style: {
                            textAlign: "center",
                            padding: "10px"
                        }
                    }, [a("el-pagination", {
                        attrs: {
                            background: "",
                            layout: "prev, pager, next",
                            total: t.searchParams.total,
                            "current-page": t.searchParams.pageNum
                        },
                        on: {
                            "update:currentPage": function(e) {
                                return t.$set(t.searchParams, "pageNum", e)
                            },
                            "update:current-page": function(e) {
                                return t.$set(t.searchParams, "pageNum", e)
                            },
                            "current-change": t.fetchData
                        }
                    })], 1), a("el-dialog", {
                        attrs: {
                            visible: t.formVisible,
                            title: "order info",
                            width: "80%",
                            "append-to-body": ""
                        },
                        on: {
                            "update:visible": function(e) {
                                t.formVisible = e
                            }
                        }
                    }, [a("el-card", [a("p", [t._v("order number：" + t._s(t.form.id))]), a("p", [t._v("cost：" + t._s(t.form.totalAmount))]), a("p", [t._v("time：" + t._s(t.form.createTime))]), a("p", [t._v("order人：" + t._s(t.form.nickName))]), a("p", [t._v("order status：" + t._s(t.form.state))]), a("p", [t._v("customer evaluate：" + t._s(t.form.comment || "nothing"))])]), a("br"), a("el-card", [a("el-table", {
                        attrs: {
                            data: t.form.items,
                            fit: "",
                            border: ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            label: "dish name",
                            align: "center",
                            prop: "itemName"
                        }
                    }), a("el-table-column", {
                        attrs: {
                            label: "单价",
                            align: "center",
                            prop: "unitPrice"
                        }
                    }), a("el-table-column", {
                        attrs: {
                            label: "number",
                            align: "center",
                            prop: "num"
                        }
                    }), a("el-table-column", {
                        attrs: {
                            label: "money",
                            align: "center",
                            prop: "totalPrice"
                        }
                    })], 1)], 1)], 1), a("el-dialog", {
                        attrs: {
                            visible: t.updateVisible,
                            title: "order status",
                            "append-to-body": "",
                            width: "80"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.updateVisible = e
                            }
                        }
                    }, [a("el-form", {
                        attrs: {
                            model: t.form,
                            "label-width": "100px"
                        }
                    }, [t.checkAnyRoles("customer") ? a("el-form-item", {
                        attrs: {
                            label: "evaluate"
                        }
                    }, [a("el-input", {
                        attrs: {
                            type: "textarea",
                            placeholder: "evaluate"
                        },
                        model: {
                            value: t.form.comment,
                            callback: function(e) {
                                t.$set(t.form, "comment", e)
                            },
                            expression: "form.comment"
                        }
                    })], 1) : a("el-form-item", {
                        attrs: {
                            label: "order status"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "plschooseorder status"
                        },
                        model: {
                            value: t.form.state,
                            callback: function(e) {
                                t.$set(t.form, "state", e)
                            },
                            expression: "form.state"
                        }
                    }, [a("el-option", {
                        attrs: {
                            label: "orderd",
                            value: "orderd"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "prepare materials",
                            value: "prepare materials"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "cooking",
                            value: "cooking"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "meal waiting",
                            value: "meal waiting"
                        }
                    }), a("el-option", {
                        attrs: {
                            label: "meal successful",
                            value: "meal successful"
                        }
                    })], 1)], 1), a("el-form-item", [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleSubmit
                        }
                    }, [t._v("Submit")])], 1)], 1)], 1)], 1)
                },
                l = [],
                r = a("5530"),
                o = a("4837"),
                i = {
                    filters: {
                        statusFilter: function(t) {
                            var e = {
                                published: "success",
                                draft: "gray",
                                deleted: "danger"
                            };
                            return e[t]
                        }
                    },
                    data: function() {
                        return {
                            list: null,
                            listLoading: !0,
                            formVisible: !1,
                            updateVisible: !1,
                            form: {},
                            searchParams: {
                                total: 0,
                                pageNum: 1,
                                pageSize: 10,
                                search: ""
                            }
                        }
                    },
                    created: function() {
                        this.fetchData()
                    },
                    methods: {
                        handleUpdate: function(t) {
                            this.form = Object(r["a"])({}, t), this.updateVisible = !0
                        },
                        handleShow: function(t) {
                            var e = this;
                            Object(o["b"])(t.id).then((function(t) {
                                e.formVisible = !0, e.form = t.data
                            }))
                        },
                        handleSubmit: function() {
                            var t = this;
                            Object(o["e"])(this.form).then((function() {
                                t.$message.success("Save infosuccessful"), t.fetchData(), t.updateVisible = !1
                            }))
                        },
                        handleDelete: function(t) {
                            var e = this,
                                a = t.id;
                            this.$confirm("delete the info？", "warning", {
                                cancelButtonText: "cancel",
                                confirmButtonText: "confirm"
                            }).then((function() {
                                Object(o["a"])(a).then((function() {
                                    e.$message.success("delete successful"), e.fetchData()
                                }))
                            }))
                        },
                        fetchData: function() {
                            var t = this;
                            this.listLoading = !0, Object(o["c"])(this.searchParams).then((function(e) {
                                var a = e.data,
                                    n = a.records,
                                    l = a.total;
                                t.list = n, t.searchParams.total = l, t.listLoading = !1
                            }))
                        }
                    }
                },
                s = i,
                c = a("2877"),
                u = Object(c["a"])(s, n, l, !1, null, null, null);
            e["default"] = u.exports
        }
    }
]);
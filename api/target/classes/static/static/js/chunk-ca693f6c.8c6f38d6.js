// (window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca693f6c"],{4837:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return c}));var r=n("b775");function u(t){return Object(r["a"])({url:"/hall/order/list",method:"get",params:t})}function a(t){return Object(r["a"])({url:"/hall/order/insert",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/hall/order/get/".concat(t),method:"get"})}function o(t){return Object(r["a"])({url:"/hall/order/del/"+t,method:"delete"})}function c(t){return Object(r["a"])({url:"/hall/order/update",method:"put",data:t})}},"83a3":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return i}));var r=n("b775");function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pageNum:1,pageSize:999999,search:""};return Object(r["a"])({url:"hall/item/list",params:t})}function a(t){return Object(r["a"])({url:"hall/item/del/".concat(t),method:"delete"})}function i(t){return Object(r["a"])({url:"hall/item/save",method:"post",data:t})}},"8d4a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("h2",[t._v("order")]),t._l(t.orderForm.items,(function(e,r){return n("el-form",{key:r,attrs:{model:e,inline:!0,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"dish name"}},[n("el-input",{attrs:{readonly:"",value:e.itemName}})],1),n("el-form-item",{attrs:{label:"cost"}},[n("el-input",{attrs:{readonly:"",value:e.unitPrice}})],1),n("el-form-item",{attrs:{label:"number"}},[n("el-input-number",{attrs:{min:0,max:10,label:"pls输入number"},model:{value:e.num,callback:function(n){t.$set(e,"num",n)},expression:"item.num"}})],1),n("el-form-item",{attrs:{label:"money"}},[t._v(" ￥"+t._s(e.num*e.unitPrice)+" ")])],1)})),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("buy（￥"+t._s(t.sumAmount)+"）")])],2)},u=[],a=(n("d3b7"),n("159b"),n("d81d"),n("b0c0"),n("83a3")),i=n("4837"),o={data:function(){return{orderForm:{items:[]},rules:[]}},created:function(){this.loadOrder()},computed:{sumAmount:function(){var t=0;return this.orderForm.items.forEach((function(e){t+=e.unitPrice*e.num})),t}},methods:{loadOrder:function(){var t=this;Object(a["b"])({pageNum:1,pageSize:9999,search:""}).then((function(t){return t.data.records})).then((function(e){t.orderForm.items=e.map((function(t){return{num:0,itemName:t.name,itemId:t.id,unitPrice:t.price}}))}))},handleSubmit:function(){var t=this;this.sumAmount<1?this.$message.error("plschoose菜品"):this.$confirm("confirmorder吗？","提示").then((function(){return Object(i["d"])(t.orderForm)})).then((function(){t.$message.success("order successful")}))}}},c=o,l=n("2877"),m=Object(l["a"])(c,r,u,!1,null,null,null);e["default"]=m.exports}}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-ca693f6c"], {
        4837: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return u
            })), n.d(e, "d", (function() {
                return a
            })), n.d(e, "b", (function() {
                return i
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "e", (function() {
                return c
            }));
            var r = n("b775");

            function u(t) {
                return Object(r["a"])({
                    url: "/hall/order/list",
                    method: "get",
                    params: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "/hall/order/insert",
                    method: "post",
                    data: t
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "/hall/order/get/".concat(t),
                    method: "get"
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/hall/order/del/" + t,
                    method: "delete"
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/hall/order/update",
                    method: "put",
                    data: t
                })
            }
        },
        "83a3": function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return u
            })), n.d(e, "a", (function() {
                return a
            })), n.d(e, "c", (function() {
                return i
            }));
            var r = n("b775");

            function u() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    pageNum: 1,
                    pageSize: 999999,
                    search: ""
                };
                return Object(r["a"])({
                    url: "hall/item/list",
                    params: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "hall/item/del/".concat(t),
                    method: "delete"
                })
            }

            function i(t) {
                return Object(r["a"])({
                    url: "hall/item/save",
                    method: "post",
                    data: t
                })
            }
        },
        "8d4a": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("h2", [t._v("order")]), t._l(t.orderForm.items, (function(e, r) {
                        return n("el-form", {
                            key: r,
                            attrs: {
                                model: e,
                                inline: !0,
                                "label-width": "80px"
                            }
                        }, [n("el-form-item", {
                            attrs: {
                                label: "dish name"
                            }
                        }, [n("el-input", {
                            attrs: {
                                readonly: "",
                                value: e.itemName
                            }
                        })], 1), n("el-form-item", {
                            attrs: {
                                label: "cost"
                            }
                        }, [n("el-input", {
                            attrs: {
                                readonly: "",
                                value: e.unitPrice
                            }
                        })], 1), n("el-form-item", {
                            attrs: {
                                label: "number"
                            }
                        }, [n("el-input-number", {
                            attrs: {
                                min: 0,
                                max: 10,
                                label: "pls输入number"
                            },
                            model: {
                                value: e.num,
                                callback: function(n) {
                                    t.$set(e, "num", n)
                                },
                                expression: "item.num"
                            }
                        })], 1), n("el-form-item", {
                            attrs: {
                                label: "money"
                            }
                        }, [t._v(" ￥" + t._s(e.num * e.unitPrice) + " ")])], 1)
                    })), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.handleSubmit
                        }
                    }, [t._v("buy（￥" + t._s(t.sumAmount) + "）")])], 2)
                },
                u = [],
                a = (n("d3b7"), n("159b"), n("d81d"), n("b0c0"), n("83a3")),
                i = n("4837"),
                o = {
                    data: function() {
                        return {
                            orderForm: {
                                items: []
                            },
                            rules: []
                        }
                    },
                    created: function() {
                        this.loadOrder()
                    },
                    computed: {
                        sumAmount: function() {
                            var t = 0;
                            return this.orderForm.items.forEach((function(e) {
                                t += e.unitPrice * e.num
                            })), t
                        }
                    },
                    methods: {
                        loadOrder: function() {
                            var t = this;
                            Object(a["b"])({
                                pageNum: 1,
                                pageSize: 9999,
                                search: ""
                            }).then((function(t) {
                                return t.data.records
                            })).then((function(e) {
                                t.orderForm.items = e.map((function(t) {
                                    return {
                                        num: 0,
                                        itemName: t.name,
                                        itemId: t.id,
                                        unitPrice: t.price
                                    }
                                }))
                            }))
                        },
                        handleSubmit: function() {
                            var t = this;
                            this.sumAmount < 1 ? this.$message.error("plschoose") : this.$confirm("confirmorder？", "Tip").then((function() {
                                return Object(i["d"])(t.orderForm)
                            })).then((function() {
                                t.$message.success("order successful")
                            }))
                        }
                    }
                },
                c = o,
                l = n("2877"),
                m = Object(l["a"])(c, r, u, !1, null, null, null);
            e["default"] = m.exports
        }
    }
]);
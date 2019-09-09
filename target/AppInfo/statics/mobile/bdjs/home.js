!function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {i: i, l: !1, exports: {}};
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: i})
    }, n.r = function (e) {
        Object.defineProperty(e, "__esModule", {value: !0})
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "../", n(n.s = 242)
}([, , , , , function (e, t, n) {
    "use strict";
    e.exports = n(241)
}, , function (e, t, n) {
    "use strict";
    var i, o = n(231), r = (i = o) && i.__esModule ? i : {default: i};
    var a, s, l, c = [], u = function (e) {
        return Object.prototype.toString.call(e)
    }, d = function (e, t) {
        if ("[object Array]" !== u(e)) {
            for (var n in e) if (e.hasOwnProperty(n) && !1 === t.call(void 0, e[n], n)) return
        } else for (var i = 0, o = e.length; i < o && !1 !== t.call(void 0, e[i], i); i++) ;
    }, f = function (e, t) {
        if (!e) return e;
        var n = new e.constructor;
        return d(e, function (e, i) {
            t(n, e, i)
        }), n
    }, p = function (e, t) {
        return f(e, function (e, n, i) {
            e[i] = t ? t(n, i) : n
        })
    }, h = p, m = function (e, t, n) {
        return e = (n ? h(e) : e) || {}, d(t, function (t, n) {
            e[n] = t
        }), e
    }, v = function (e, t) {
        return e.replace(/\$\{([^\{\}]*)\}/g, function (e, n) {
            var i = t[n.trim()];
            return null == i ? "" : i + ""
        })
    }, g = function (e, t) {
        return (Array.prototype.join.call({length: t + 1}, "0") + e).slice(-t)
    }, y = function (e) {
        return "[object Object]" === u(e)
    }, b = function (e) {
        if (e) {
            var t = BNJS.env.appVersion.split("."), n = e.split(".");
            if (t.length < 3 && t.push(0), n.length < 3 && n.push(0), t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]) return !0
        }
        return !1
    }, _ = function (e) {
        var t = [];
        for (var n in e) n && e.hasOwnProperty(n) && t.push(n + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }, w = function () {
        return "android" === BNJS.device.platform.toLowerCase()
    }, S = function () {
        return "com.nuomi" != BNJS.env.packageName && "com.renren-inc.nuomi" != BNJS.env.packageName && "com.baidu.nuomi.qa.BaiduNuomiTuan" != BNJS.env.packageName || "bainuo-wap" === BNJS.env.appName
    }, x = (a = document.createElement("div"), s = "Khtml O Moz Webkit".split(" "), l = s.length, function (e) {
        if (e in a.style) return !0;
        if ("-ms-" + e in a.style) return !0;
        for (e = e.replace(/^[a-z]/, function (e) {
            return e.toUpperCase()
        }); l--;) if (s[l] + e in a.style) return !0;
        return !1
    });
    e.exports = {
        doNothing: function () {
        }, type: u, forEach: d, transform: f, map: p, filter: function (e, t) {
            return f(e, function (e, n, i) {
                t(n, i) && (e[i] = n)
            })
        }, clone: h, extend: m, format: v, toLen: g, formatDate: function (e, t) {
            e = e.replace(/\$([a-zA-Z])/g, function (e, t) {
                return "${" + t + "}"
            }), t = new Date(t || Date.now());
            return v(e, {
                Y: g(t.getFullYear(), 4),
                y: g(t.getFullYear(), 2),
                M: g(t.getMonth() + 1, 2),
                D: ["日", "一", "二", "三", "四", "五", "六"][t.getDay()],
                d: g(t.getDate(), 2),
                H: g(t.getHours(), 2),
                m: g(t.getMinutes(), 2),
                s: g(t.getSeconds(), 2)
            })
        }, ready: function (e) {
            if ("function" == typeof e) return window.BNJS && window.BNJS._isAllReady ? e(window.BNJS) : (c.push(e), void document.addEventListener("BNJSReady", function () {
                for (; c.length > 0;) c.shift()(window.BNJS)
            }, !1))
        }, isObject: y, isArray: function (e) {
            return "[object Array]" === u(e)
        }, addLog: r.default.addLog, formatUrl: function (e, t) {
            return (t = t && Object.keys(t).map(function (e) {
                return [e, t[e]].map(encodeURIComponent).join("=")
            }).join("&")) ? e + (e.indexOf("?") >= 0 ? "&" : "?") + t : e
        }, getDayInMonth: function (e, t) {
            var n = 0;
            switch (t = parseInt(t, 10)) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    n = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    n = 30;
                    break;
                case 2:
                    n = e % 4 == 0 && e % 100 != 0 || e % 100 == 0 && e % 400 == 0 ? 29 : 28
            }
            return n
        }, compareVerion: b, gtVersion: b, ltVersion: function (e) {
            return !b(e)
        }, canSupportNav: function () {
            return b("6.7.2")
        }, compareBNJSVerion: function (e) {
            if (e) {
                var t = BNJS.version.split("."), n = e.split(".");
                if (t.length < 2 && t.push(0), n.length < 2 && n.push(0), t[0] > n[0] || t[0] == n[0] && t[1] >= n[1]) return !0
            }
            return !1
        }, getExtendUrl: function (e, t) {
            if (e.match(/^http[s]?:\/\//)) e += (e.indexOf("?") > 0 ? "&" : "?") + _(t); else if (e.match(/url=.*/)) {
                var n = e.split("?")[0], i = e.split("?")[1];
                if (i) {
                    var o = function (e) {
                        for (var t = {}, n = e.split("&"), i = 0; i < n.length; i++) {
                            var o = n[i].split("=");
                            n && o && (t[o[0]] = decodeURIComponent(o[1]))
                        }
                        return t
                    }(i);
                    o.url && (o.url += (o.url.indexOf("?") > 0 ? "&" : "?") + _(t)), e = n + "?" + _(o)
                }
            }
            return e
        }, intersect: function (e, t) {
            var n = m(e, t, 1), i = {};
            for (var o in n) o && e.hasOwnProperty(o) && t.hasOwnProperty(o) && (i[o] = t[o]);
            return i
        }, isAndroid: w, isIos: function () {
            return "ios" === BNJS.device.platform.toLowerCase()
        }, featureTest: function (e, t) {
            var n = e + ":", i = document.createElement("div").style;
            return i.cssText = n + ["-webkit-", "-moz-", "-ms-", "-o-", ""].join(t + ";" + n) + t + ";", !!i[e] && !w()
        }, isWap: S, waptitle: function (e) {
            S() && setTimeout(function () {
                document.title = e;
                var t = document.createElement("iframe");
                t.style.visibility = "hidden", t.style.width = "1px", t.style.height = "1px", t.onload = function () {
                    setTimeout(function () {
                        document.body.removeChild(t)
                    }, 0)
                }, document.body.appendChild(t)
            }, 0)
        }, getLS: function (e, t, n) {
            BNJS.localStorage.getItem(e, function (e) {
                var i = void 0;
                try {
                    i = JSON.parse(e.data)
                } catch (e) {
                }
                y(i) && 0 === parseInt(i.errno, 10) && y(i.data) ? t(i) : n()
            }, function () {
                n()
            }, "2.7")
        }, inView: function (e, t) {
            if (!e) return !1;
            var n = window.innerHeight, i = e.getBoundingClientRect(), o = i.top - t,
                r = i.top + Math.round(i.height) + t;
            return 0 <= o && o <= n || 0 <= r && r <= n || o <= 0 && r >= n
        }, inViewAll: function (e, t) {
            if (!e) return !1;
            var n = window.innerHeight, i = e.getBoundingClientRect(), o = i.top - t,
                r = i.top + Math.round(i.height) + t;
            return 0 <= o && r <= n
        }, versionCompare: function (e, t) {
            for (var n = e.split("."), i = t.split("."), o = Math.max(n.length, i.length), r = void 0, a = void 0, s = void 0, l = 0; l < o; l++) if ((a = void 0 === n[l] ? 0 : +n[l]) > (s = void 0 === i[l] ? 0 : +i[l]) ? r = 1 : a == s ? r = 0 : a < s && (r = -1), 0 !== r) return r;
            return r
        }, blobToDataUrl: function (e, t) {
            var n = new FileReader;
            n.onload = function (e) {
                t(e.target.result)
            }, n.readAsDataURL(e)
        }, fileReader: function (e, t) {
            var n = new FileReader;
            n.readAsDataURL(e), n.onload = function (e) {
                t(this.result), n = null
            }
        }, effectiveUrl: function (e) {
            return S() && !/^bainuo:\/\//.test(e) && (e = "bainuo://component?url=" + encodeURIComponent(e)), e
        }, getChannel: function () {
            return "com.nuomi" === BNJS.env.packageName || "com.renren-inc.nuomi" === BNJS.env.packageName || "com.baidu.nuomi.qa.BaiduNuomiTuan" === BNJS.env.packageName ? "nuomi" : "com.baidu.BaiduBoxDev" === BNJS.env.packageName || "com.baidu.BaiduMobile" === BNJS.env.packageName || "com.baidu.BaiduMobile.dcps" === BNJS.env.packageName || "com.nuomi.dcps.plugin" === BNJS.env.packageName || "com.baidu.searchbox" === BNJS.env.packageName ? "shoubai" : ("bainuo-wap" === BNJS.env.appName && BNJS.env.packageName, "wap")
        }, addClickEffect: function (e) {
            var t = e.currentTarget, n = 0, i = 0;
            !function () {
                $(t).append('<div id="arc" class="arc"></div>');
                var o = $(t).offset().left, r = $(t).offset().top, a = parseInt($(t).width(), 10),
                    s = parseInt($(t).height(), 10);
                e.touches ? (n = Number(e.touches[0].pageX), i = Number(e.touches[0].pageY)) : (n = Number(e.pageX), i = Number(e.pageY));
                var l = n, c = i, u = l - o, d = o + a - l, f = c - r, p = r + s - c, h = u > d ? u : d,
                    m = f > p ? f : p, v = Math.sqrt(h * h + m * m), g = l - o - v, y = c - r - v;
                $("#arc").css({
                    left: g,
                    top: y,
                    width: 2.1 * v,
                    height: 2.1 * v
                }), $("#arc").addClass("pulse"), setTimeout(function () {
                    $("#arc").remove()
                }, 250)
            }(), $(t)[0].addEventListener("touchmove", function (e) {
                var t = e.touches[0], o = Number(t.pageX);
                Number(t.pageY) == i && o == n || $("#arc").remove()
            }, !1)
        }, cssSupports: x, isIphoneX: function () {
            return /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    e.exports = {
        channel_cuisine_home_performance: {
            actionID: "channel_cuisine_home_performance",
            actionExt: "美食频道页性能埋点（统一频道页）",
            note: {
                ComExtraParams: {
                    bnjsReadyTime: "${bnjsReadyTime}",
                    apiReadyTime: "${apiReadyTime}",
                    renderTime: "${renderTime}",
                    deviceType: "${deviceType}",
                    deviceName: "${deviceName}",
                    network: "${network}",
                    appVersion: "${appVersion}",
                    compVersion: "${compVersion}"
                }
            }
        },
        adst_show_food_popup: {
            actionID: "adst_show_food_popup",
            note: {ComExtraParams: {pos: "${pos}", adv_id: "${adver_id}"}}
        },
        adst_click_food_popup: {
            actionID: "adst_click_food_popup",
            note: {ComExtraParams: {pos: "${pos}", adv_id: "${adver_id}"}}
        },
        cusine_fdbutton_click: {actionID: "cusine_fdbutton_click", actionExt: ""},
        cusine_dialog_close: {actionID: "cusine_dialog_close", actionExt: ""},
        cusine_dialog_click: {actionID: "cusine_dialog_click", actionExt: ""},
        cusine_dialog_show: {actionID: "cusine_dialog_show", actionExt: "", note: {ComExtraParams: {pos: "${pos}"}}},
        cuisine_searchbar_click: {actionID: "cuisine_searchbar_click", actionExt: "美食搜索栏点击"},
        cuisine_searchbuttion_click: {actionID: "cuisine_searchbuttion_click", actionExt: "美食搜索icon点击"},
        jingang_click: {
            actionID: "cuisine_jingang_click",
            actionExt: "美食金刚位点击",
            note: {ComExtraParams: {place: "${place}"}}
        },
        cuisine_jingangmore_click: {actionID: "cuisine_jingangmore_click", actionExt: "美食金刚更多按钮点击"},
        cuisine_news_click: {actionID: "cuisine_news_click", actionExt: "美食商圈头条点击"},
        adst_click_food_doufukuai: {
            actionID: "adst_click_food_doufukuai",
            note: {ComExtraParams: {pos: "${pos}", adv_id: "${adver_id}"}}
        },
        cuisine_doufukuai_click: {
            actionID: "cuisine_doufukuai_click",
            actionExt: "美食豆腐块点击",
            note: {ComExtraParams: {place: "${place}"}}
        },
        adst_show_food_banner: {
            actionID: "adst_show_food_banner",
            note: {ComExtraParams: {pos: "${pos}", adv_id: "${adver_id}"}}
        },
        adst_click_food_banner: {
            actionID: "adst_click_food_banner",
            note: {ComExtraParams: {pos: "${pos}", adv_id: "${adver_id}"}}
        },
        cuisine_banner_click: {
            actionID: "cuisine_banner_click",
            actionExt: "美食banner点击",
            note: {ComExtraParams: {place: "${place}", id: "${id}"}}
        },
        cuisine_banner_show2: {
            actionID: "cuisine_banner_show2",
            actionExt: "美食banner展现",
            note: {ComExtraParams: {place: "${place}", id: "${id}"}}
        },
        cuisine_selectionbar_click: {
            actionID: "cuisine_selectionbar_click",
            actionExt: "美食筛选栏",
            note: {ComExtraParams: {tab: "${tab}"}}
        },
        cuisine_slide: {
            actionID: "cuisine_slide",
            actionExt: "美食左滑功能使用",
            note: {ComExtraParams: {slide: "${slide}", click: "${click}"}}
        },
        cuisine_turnover: {
            actionID: "cuisine_turnover",
            actionExt: "美食频道翻页",
            note: {ComExtraParams: {paginalNumber: "${paginalNumber}"}}
        },
        cuisine_poilist_click: {
            actionID: "cuisine_poilist_click",
            actionExt: "美食列表-门店点击",
            note: {
                ComExtraParams: {
                    place: "${place}",
                    poi: "${poi}",
                    ad: "${ad}",
                    pos: "${pos}",
                    ishb: "${ishb}",
                    isgif: "${isgif}",
                    dynamictype: "${dynamictype}",
                    s: "${s}"
                }
            }
        },
        cuisine_poilist_show: {
            actionID: "cuisine_adpoi_show",
            actionExt: "美食列表-门店展现",
            note: {
                ComExtraParams: {
                    place: "${place}",
                    poi: "${poi}",
                    ad: "${ad}",
                    pos: "${pos}",
                    ishb: "${ishb}",
                    isgif: "${isgif}",
                    dynamictype: "${dynamictype}",
                    s: "${s}"
                }
            }
        },
        cuisine_poilist_slide: {
            actionID: "cuisine_poilist_slide",
            actionExt: "美食列表滑动点击",
            note: {ComExtraParams: {action: "${action}"}}
        }
    }
}, , , , , , , , , , , , , , , , , , , , function (e, t) {
    (function (t) {
        e.exports = t
    }).call(this, {})
}, , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = (i = r) && i.__esModule ? i : {default: i};
    n(166);
    var s = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "render", value: function () {
                var e = parseFloat(this.props.score);
                if (e < 0) return a.default.createElement("div", {className: "unscore"}, "暂无评分");
                e = e > 5 ? 5 : e;
                var t = parseInt(e),
                    n = {width: 100 * (.148936170212766 * t + .0638297872340426 * t + .148936170212766 * (e - t)) + "%"},
                    i = this.props.hideScore || 0;
                return a.default.createElement("div", {className: "newstars"}, a.default.createElement("div", {className: "star-bg"}, a.default.createElement("span", {
                    className: "star",
                    style: n
                })), i ? null : a.default.createElement("em", {className: "score"}, this.props.score))
            }
        }]), t
    }();
    t.default = s
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    void 0 === (i = function () {
        return e = function () {
            var e, t, n, i, r, a, s = [], l = s.concat, c = s.filter, u = s.slice, d = window.document, f = {}, p = {},
                h = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, m = /^\s*<(\w+|!)[^>]*>/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, y = /^(?:body|html)$/i,
                b = /([A-Z])/g, _ = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                w = d.createElement("table"), S = d.createElement("tr"), x = {
                    tr: d.createElement("tbody"),
                    tbody: w,
                    thead: w,
                    tfoot: w,
                    td: S,
                    th: S,
                    "*": d.createElement("div")
                }, E = /^[\w-]*$/, k = {}, T = k.toString, C = {}, N = d.createElement("div"), P = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, O = Array.isArray || function (e) {
                    return e instanceof Array
                };

            function I(e) {
                return null == e ? String(e) : k[T.call(e)] || "object"
            }

            function M(e) {
                return "function" == I(e)
            }

            function D(e) {
                return null != e && e == e.window
            }

            function j(e) {
                return null != e && e.nodeType == e.DOCUMENT_NODE
            }

            function L(e) {
                return "object" == I(e)
            }

            function z(e) {
                return L(e) && !D(e) && Object.getPrototypeOf(e) == Object.prototype
            }

            function A(e) {
                var t = !!e && "length" in e && e.length, i = n.type(e);
                return "function" != i && !D(e) && ("array" == i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function R(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }

            function $(e) {
                return e in p ? p[e] : p[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
            }

            function B(e, t) {
                return "number" != typeof t || h[R(e)] ? t : t + "px"
            }

            function W(e) {
                return "children" in e ? u.call(e.children) : n.map(e.childNodes, function (e) {
                    if (1 == e.nodeType) return e
                })
            }

            function F(e, t) {
                var n, i = e ? e.length : 0;
                for (n = 0; n < i; n++) this[n] = e[n];
                this.length = i, this.selector = t || ""
            }

            function U(e, t) {
                return null == t ? n(e) : n(e).filter(t)
            }

            function Y(e, t, n, i) {
                return M(t) ? t.call(e, n, i) : t
            }

            function X(e, t, n) {
                null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
            }

            function H(t, n) {
                var i = t.className || "", o = i && i.baseVal !== e;
                if (n === e) return o ? i.baseVal : i;
                o ? i.baseVal = n : t.className = n
            }

            function q(e) {
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? n.parseJSON(e) : e) : e
                } catch (t) {
                    return e
                }
            }

            return C.matches = function (e, t) {
                if (!t || !e || 1 !== e.nodeType) return !1;
                var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                if (n) return n.call(e, t);
                var i, o = e.parentNode, r = !o;
                return r && (o = N).appendChild(e), i = ~C.qsa(o, t).indexOf(e), r && N.removeChild(e), i
            }, r = function (e) {
                return e.replace(/-+(.)?/g, function (e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }, a = function (e) {
                return c.call(e, function (t, n) {
                    return e.indexOf(t) == n
                })
            }, C.fragment = function (t, i, o) {
                var r, a, s;
                return v.test(t) && (r = n(d.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(g, "<$1></$2>")), i === e && (i = m.test(t) && RegExp.$1), i in x || (i = "*"), (s = x[i]).innerHTML = "" + t, r = n.each(u.call(s.childNodes), function () {
                    s.removeChild(this)
                })), z(o) && (a = n(r), n.each(o, function (e, t) {
                    _.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
                })), r
            }, C.Z = function (e, t) {
                return new F(e, t)
            }, C.isZ = function (e) {
                return e instanceof C.Z
            }, C.init = function (t, i) {
                var o, r;
                if (!t) return C.Z();
                if ("string" == typeof t) if ("<" == (t = t.trim())[0] && m.test(t)) o = C.fragment(t, RegExp.$1, i), t = null; else {
                    if (i !== e) return n(i).find(t);
                    o = C.qsa(d, t)
                } else {
                    if (M(t)) return n(d).ready(t);
                    if (C.isZ(t)) return t;
                    if (O(t)) r = t, o = c.call(r, function (e) {
                        return null != e
                    }); else if (L(t)) o = [t], t = null; else if (m.test(t)) o = C.fragment(t.trim(), RegExp.$1, i), t = null; else {
                        if (i !== e) return n(i).find(t);
                        o = C.qsa(d, t)
                    }
                }
                return C.Z(o, t)
            }, (n = function (e, t) {
                return C.init(e, t)
            }).extend = function (n) {
                var i, o = u.call(arguments, 1);
                return "boolean" == typeof n && (i = n, n = o.shift()), o.forEach(function (o) {
                    !function n(i, o, r) {
                        for (t in o) r && (z(o[t]) || O(o[t])) ? (z(o[t]) && !z(i[t]) && (i[t] = {}), O(o[t]) && !O(i[t]) && (i[t] = []), n(i[t], o[t], r)) : o[t] !== e && (i[t] = o[t])
                    }(n, o, i)
                }), n
            }, C.qsa = function (e, t) {
                var n, i = "#" == t[0], o = !i && "." == t[0], r = i || o ? t.slice(1) : t, a = E.test(r);
                return e.getElementById && a && i ? (n = e.getElementById(r)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : u.call(a && !i && e.getElementsByClassName ? o ? e.getElementsByClassName(r) : e.getElementsByTagName(t) : e.querySelectorAll(t))
            }, n.contains = d.documentElement.contains ? function (e, t) {
                return e !== t && e.contains(t)
            } : function (e, t) {
                for (; t && (t = t.parentNode);) if (t === e) return !0;
                return !1
            }, n.type = I, n.isFunction = M, n.isWindow = D, n.isArray = O, n.isPlainObject = z, n.isEmptyObject = function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, n.isNumeric = function (e) {
                var t = Number(e), n = void 0 === e ? "undefined" : o(e);
                return null != e && "boolean" != n && ("string" != n || e.length) && !isNaN(t) && isFinite(t) || !1
            }, n.inArray = function (e, t, n) {
                return s.indexOf.call(t, e, n)
            }, n.camelCase = r, n.trim = function (e) {
                return null == e ? "" : String.prototype.trim.call(e)
            }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function () {
            }, n.map = function (e, t) {
                var i, o, r, a, s = [];
                if (A(e)) for (o = 0; o < e.length; o++) null != (i = t(e[o], o)) && s.push(i); else for (r in e) null != (i = t(e[r], r)) && s.push(i);
                return (a = s).length > 0 ? n.fn.concat.apply([], a) : a
            }, n.each = function (e, t) {
                var n, i;
                if (A(e)) {
                    for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e
                } else for (i in e) if (!1 === t.call(e[i], i, e[i])) return e;
                return e
            }, n.grep = function (e, t) {
                return c.call(e, t)
            }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
                k["[object " + t + "]"] = t.toLowerCase()
            }), n.fn = {
                constructor: C.Z,
                length: 0,
                forEach: s.forEach,
                reduce: s.reduce,
                push: s.push,
                sort: s.sort,
                splice: s.splice,
                indexOf: s.indexOf,
                concat: function () {
                    var e, t, n = [];
                    for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = C.isZ(t) ? t.toArray() : t;
                    return l.apply(C.isZ(this) ? this.toArray() : this, n)
                },
                map: function (e) {
                    return n(n.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return n(u.apply(this, arguments))
                },
                ready: function (e) {
                    if ("complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) setTimeout(function () {
                        e(n)
                    }, 0); else {
                        var t = function t() {
                            d.removeEventListener("DOMContentLoaded", t, !1), window.removeEventListener("load", t, !1), e(n)
                        };
                        d.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)
                    }
                    return this
                },
                get: function (t) {
                    return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function () {
                    return this.get()
                },
                size: function () {
                    return this.length
                },
                remove: function () {
                    return this.each(function () {
                        null != this.parentNode && this.parentNode.removeChild(this)
                    })
                },
                each: function (e) {
                    return s.every.call(this, function (t, n) {
                        return !1 !== e.call(t, n, t)
                    }), this
                },
                filter: function (e) {
                    return M(e) ? this.not(this.not(e)) : n(c.call(this, function (t) {
                        return C.matches(t, e)
                    }))
                },
                add: function (e, t) {
                    return n(a(this.concat(n(e, t))))
                },
                is: function (e) {
                    return this.length > 0 && C.matches(this[0], e)
                },
                not: function (t) {
                    var i = [];
                    if (M(t) && t.call !== e) this.each(function (e) {
                        t.call(this, e) || i.push(this)
                    }); else {
                        var o = "string" == typeof t ? this.filter(t) : A(t) && M(t.item) ? u.call(t) : n(t);
                        this.forEach(function (e) {
                            o.indexOf(e) < 0 && i.push(e)
                        })
                    }
                    return n(i)
                },
                has: function (e) {
                    return this.filter(function () {
                        return L(e) ? n.contains(this, e) : n(this).find(e).size()
                    })
                },
                eq: function (e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function () {
                    var e = this[0];
                    return e && !L(e) ? e : n(e)
                },
                last: function () {
                    var e = this[this.length - 1];
                    return e && !L(e) ? e : n(e)
                },
                find: function (e) {
                    var t = this;
                    return e ? "object" == (void 0 === e ? "undefined" : o(e)) ? n(e).filter(function () {
                        var e = this;
                        return s.some.call(t, function (t) {
                            return n.contains(t, e)
                        })
                    }) : 1 == this.length ? n(C.qsa(this[0], e)) : this.map(function () {
                        return C.qsa(this, e)
                    }) : n()
                },
                closest: function (e, t) {
                    var i = [], r = "object" == (void 0 === e ? "undefined" : o(e)) && n(e);
                    return this.each(function (n, o) {
                        for (; o && !(r ? r.indexOf(o) >= 0 : C.matches(o, e));) o = o !== t && !j(o) && o.parentNode;
                        o && i.indexOf(o) < 0 && i.push(o)
                    }), n(i)
                },
                parents: function (e) {
                    for (var t = [], i = this; i.length > 0;) i = n.map(i, function (e) {
                        if ((e = e.parentNode) && !j(e) && t.indexOf(e) < 0) return t.push(e), e
                    });
                    return U(t, e)
                },
                parent: function (e) {
                    return U(a(this.pluck("parentNode")), e)
                },
                children: function (e) {
                    return U(this.map(function () {
                        return W(this)
                    }), e)
                },
                contents: function () {
                    return this.map(function () {
                        return this.contentDocument || u.call(this.childNodes)
                    })
                },
                siblings: function (e) {
                    return U(this.map(function (e, t) {
                        return c.call(W(t.parentNode), function (e) {
                            return e !== t
                        })
                    }), e)
                },
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = ""
                    })
                },
                pluck: function (e) {
                    return n.map(this, function (t) {
                        return t[e]
                    })
                },
                show: function () {
                    return this.each(function () {
                        var e, t, n;
                        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName, f[e] || (t = d.createElement(e), d.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), f[e] = n), f[e]))
                    })
                },
                replaceWith: function (e) {
                    return this.before(e).remove()
                },
                wrap: function (e) {
                    var t = M(e);
                    if (this[0] && !t) var i = n(e).get(0), o = i.parentNode || this.length > 1;
                    return this.each(function (r) {
                        n(this).wrapAll(t ? e.call(this, r) : o ? i.cloneNode(!0) : i)
                    })
                },
                wrapAll: function (e) {
                    if (this[0]) {
                        var t;
                        for (n(this[0]).before(e = n(e)); (t = e.children()).length;) e = t.first();
                        n(e).append(this)
                    }
                    return this
                },
                wrapInner: function (e) {
                    var t = M(e);
                    return this.each(function (i) {
                        var o = n(this), r = o.contents(), a = t ? e.call(this, i) : e;
                        r.length ? r.wrapAll(a) : o.append(a)
                    })
                },
                unwrap: function () {
                    return this.parent().each(function () {
                        n(this).replaceWith(n(this).children())
                    }), this
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0)
                    })
                },
                hide: function () {
                    return this.css("display", "none")
                },
                toggle: function (t) {
                    return this.each(function () {
                        var i = n(this);
                        (t === e ? "none" == i.css("display") : t) ? i.show() : i.hide()
                    })
                },
                prev: function (e) {
                    return n(this.pluck("previousElementSibling")).filter(e || "*")
                },
                next: function (e) {
                    return n(this.pluck("nextElementSibling")).filter(e || "*")
                },
                html: function (e) {
                    return 0 in arguments ? this.each(function (t) {
                        var i = this.innerHTML;
                        n(this).empty().append(Y(this, e, t, i))
                    }) : 0 in this ? this[0].innerHTML : null
                },
                text: function (e) {
                    return 0 in arguments ? this.each(function (t) {
                        var n = Y(this, e, t, this.textContent);
                        this.textContent = null == n ? "" : "" + n
                    }) : 0 in this ? this.pluck("textContent").join("") : null
                },
                attr: function (n, i) {
                    var o;
                    return "string" != typeof n || 1 in arguments ? this.each(function (e) {
                        if (1 === this.nodeType) if (L(n)) for (t in n) X(this, t, n[t]); else X(this, n, Y(this, i, e, this.getAttribute(n)))
                    }) : 0 in this && 1 == this[0].nodeType && null != (o = this[0].getAttribute(n)) ? o : e
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        1 === this.nodeType && e.split(" ").forEach(function (e) {
                            X(this, e)
                        }, this)
                    })
                },
                prop: function (e, t) {
                    return e = P[e] || e, 1 in arguments ? this.each(function (n) {
                        this[e] = Y(this, t, n, this[e])
                    }) : this[0] && this[0][e]
                },
                removeProp: function (e) {
                    return e = P[e] || e, this.each(function () {
                        delete this[e]
                    })
                },
                data: function (t, n) {
                    var i = "data-" + t.replace(b, "-$1").toLowerCase(),
                        o = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== o ? q(o) : e
                },
                val: function (e) {
                    return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
                        this.value = Y(this, e, t, this.value)
                    })) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function (e) {
                    if (e) return this.each(function (t) {
                        var i = n(this), o = Y(this, e, t, i.offset()), r = i.offsetParent().offset(),
                            a = {top: o.top - r.top, left: o.left - r.left};
                        "static" == i.css("position") && (a.position = "relative"), i.css(a)
                    });
                    if (!this.length) return null;
                    if (d.documentElement !== this[0] && !n.contains(d.documentElement, this[0])) return {
                        top: 0,
                        left: 0
                    };
                    var t = this[0].getBoundingClientRect();
                    return {
                        left: t.left + window.pageXOffset,
                        top: t.top + window.pageYOffset,
                        width: Math.round(t.width),
                        height: Math.round(t.height)
                    }
                },
                css: function (e, i) {
                    if (arguments.length < 2) {
                        var o = this[0];
                        if ("string" == typeof e) {
                            if (!o) return;
                            return o.style[r(e)] || getComputedStyle(o, "").getPropertyValue(e)
                        }
                        if (O(e)) {
                            if (!o) return;
                            var a = {}, s = getComputedStyle(o, "");
                            return n.each(e, function (e, t) {
                                a[t] = o.style[r(t)] || s.getPropertyValue(t)
                            }), a
                        }
                    }
                    var l = "";
                    if ("string" == I(e)) i || 0 === i ? l = R(e) + ":" + B(e, i) : this.each(function () {
                        this.style.removeProperty(R(e))
                    }); else for (t in e) e[t] || 0 === e[t] ? l += R(t) + ":" + B(t, e[t]) + ";" : this.each(function () {
                        this.style.removeProperty(R(t))
                    });
                    return this.each(function () {
                        this.style.cssText += ";" + l
                    })
                },
                index: function (e) {
                    return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function (e) {
                    return !!e && s.some.call(this, function (e) {
                        return this.test(H(e))
                    }, $(e))
                },
                addClass: function (e) {
                    return e ? this.each(function (t) {
                        if ("className" in this) {
                            i = [];
                            var o = H(this), r = Y(this, e, t, o);
                            r.split(/\s+/g).forEach(function (e) {
                                n(this).hasClass(e) || i.push(e)
                            }, this), i.length && H(this, o + (o ? " " : "") + i.join(" "))
                        }
                    }) : this
                },
                removeClass: function (t) {
                    return this.each(function (n) {
                        if ("className" in this) {
                            if (t === e) return H(this, "");
                            i = H(this), Y(this, t, n, i).split(/\s+/g).forEach(function (e) {
                                i = i.replace($(e), " ")
                            }), H(this, i.trim())
                        }
                    })
                },
                toggleClass: function (t, i) {
                    return t ? this.each(function (o) {
                        var r = n(this), a = Y(this, t, o, H(this));
                        a.split(/\s+/g).forEach(function (t) {
                            (i === e ? !r.hasClass(t) : i) ? r.addClass(t) : r.removeClass(t)
                        })
                    }) : this
                },
                scrollTop: function (t) {
                    if (this.length) {
                        var n = "scrollTop" in this[0];
                        return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                            this.scrollTop = t
                        } : function () {
                            this.scrollTo(this.scrollX, t)
                        })
                    }
                },
                scrollLeft: function (t) {
                    if (this.length) {
                        var n = "scrollLeft" in this[0];
                        return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                            this.scrollLeft = t
                        } : function () {
                            this.scrollTo(t, this.scrollY)
                        })
                    }
                },
                position: function () {
                    if (this.length) {
                        var e = this[0], t = this.offsetParent(), i = this.offset(),
                            o = y.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                        return i.top -= parseFloat(n(e).css("margin-top")) || 0, i.left -= parseFloat(n(e).css("margin-left")) || 0, o.top += parseFloat(n(t[0]).css("border-top-width")) || 0, o.left += parseFloat(n(t[0]).css("border-left-width")) || 0, {
                            top: i.top - o.top,
                            left: i.left - o.left
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent || d.body; e && !y.test(e.nodeName) && "static" == n(e).css("position");) e = e.offsetParent;
                        return e
                    })
                }
            }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (t) {
                var i = t.replace(/./, function (e) {
                    return e[0].toUpperCase()
                });
                n.fn[t] = function (o) {
                    var r, a = this[0];
                    return o === e ? D(a) ? a["inner" + i] : j(a) ? a.documentElement["scroll" + i] : (r = this.offset()) && r[t] : this.each(function (e) {
                        (a = n(this)).css(t, Y(this, o, e, a[t]()))
                    })
                }
            }), ["after", "prepend", "before", "append"].forEach(function (t, i) {
                var o = i % 2;
                n.fn[t] = function () {
                    var t, r, a = n.map(arguments, function (i) {
                        var o = [];
                        return "array" == (t = I(i)) ? (i.forEach(function (t) {
                            return t.nodeType !== e ? o.push(t) : n.zepto.isZ(t) ? o = o.concat(t.get()) : void (o = o.concat(C.fragment(t)))
                        }), o) : "object" == t || null == i ? i : C.fragment(i)
                    }), s = this.length > 1;
                    return a.length < 1 ? this : this.each(function (e, t) {
                        r = o ? t : t.parentNode, t = 0 == i ? t.nextSibling : 1 == i ? t.firstChild : 2 == i ? t : null;
                        var l = n.contains(d.documentElement, r);
                        a.forEach(function (e) {
                            if (s) e = e.cloneNode(!0); else if (!r) return n(e).remove();
                            r.insertBefore(e, t), l && function e(t, n) {
                                n(t);
                                for (var i = 0, o = t.childNodes.length; i < o; i++) e(t.childNodes[i], n)
                            }(e, function (e) {
                                if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
                                    var t = e.ownerDocument ? e.ownerDocument.defaultView : window;
                                    t.eval.call(t, e.innerHTML)
                                }
                            })
                        })
                    })
                }, n.fn[o ? t + "To" : "insert" + (i ? "Before" : "After")] = function (e) {
                    return n(e)[t](this), this
                }
            }), C.Z.prototype = F.prototype = n.fn, C.uniq = a, C.deserializeValue = q, n.zepto = C, n
        }(), window.Zepto = e, void 0 === window.$ && (window.$ = e), function (e) {
            var t, n = 1, i = Array.prototype.slice, o = e.isFunction, r = function (e) {
                    return "string" == typeof e
                }, a = {}, s = {}, l = "onfocusin" in window, c = {focus: "focusin", blur: "focusout"},
                u = {mouseenter: "mouseover", mouseleave: "mouseout"};

            function d(e) {
                return e._zid || (e._zid = n++)
            }

            function f(e, t, n, i) {
                if ((t = p(t)).ns) var o = (r = t.ns, new RegExp("(?:^| )" + r.replace(" ", " .* ?") + "(?: |$)"));
                var r;
                return (a[d(e)] || []).filter(function (e) {
                    return e && (!t.e || e.e == t.e) && (!t.ns || o.test(e.ns)) && (!n || d(e.fn) === d(n)) && (!i || e.sel == i)
                })
            }

            function p(e) {
                var t = ("" + e).split(".");
                return {e: t[0], ns: t.slice(1).sort().join(" ")}
            }

            function h(e, t) {
                return e.del && !l && e.e in c || !!t
            }

            function m(e) {
                return u[e] || l && c[e] || e
            }

            function v(n, i, o, r, s, l, c) {
                var f = d(n), v = a[f] || (a[f] = []);
                i.split(/\s/).forEach(function (i) {
                    if ("ready" == i) return e(document).ready(o);
                    var a = p(i);
                    a.fn = o, a.sel = s, a.e in u && (o = function (t) {
                        var n = t.relatedTarget;
                        if (!n || n !== this && !e.contains(this, n)) return a.fn.apply(this, arguments)
                    }), a.del = l;
                    var d = l || o;
                    a.proxy = function (e) {
                        if (!(e = S(e)).isImmediatePropagationStopped()) {
                            e.data = r;
                            var i = d.apply(n, e._args == t ? [e] : [e].concat(e._args));
                            return !1 === i && (e.preventDefault(), e.stopPropagation()), i
                        }
                    }, a.i = v.length, v.push(a), "addEventListener" in n && n.addEventListener(m(a.e), a.proxy, h(a, c))
                })
            }

            function g(e, t, n, i, o) {
                var r = d(e);
                (t || "").split(/\s/).forEach(function (t) {
                    f(e, t, n, i).forEach(function (t) {
                        delete a[r][t.i], "removeEventListener" in e && e.removeEventListener(m(t.e), t.proxy, h(t, o))
                    })
                })
            }

            s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", e.event = {
                add: v,
                remove: g
            }, e.proxy = function (t, n) {
                var a = 2 in arguments && i.call(arguments, 2);
                if (o(t)) {
                    var s = function () {
                        return t.apply(n, a ? a.concat(i.call(arguments)) : arguments)
                    };
                    return s._zid = d(t), s
                }
                if (r(n)) return a ? (a.unshift(t[n], t), e.proxy.apply(null, a)) : e.proxy(t[n], t);
                throw new TypeError("expected function")
            }, e.fn.bind = function (e, t, n) {
                return this.on(e, t, n)
            }, e.fn.unbind = function (e, t) {
                return this.off(e, t)
            }, e.fn.one = function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            };
            var y = function () {
                return !0
            }, b = function () {
                return !1
            }, _ = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, w = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };

            function S(n, i) {
                if (i || !n.isDefaultPrevented) {
                    i || (i = n), e.each(w, function (e, t) {
                        var o = i[e];
                        n[e] = function () {
                            return this[t] = y, o && o.apply(i, arguments)
                        }, n[t] = b
                    });
                    try {
                        n.timeStamp || (n.timeStamp = Date.now())
                    } catch (e) {
                    }
                    (i.defaultPrevented !== t ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (n.isDefaultPrevented = y)
                }
                return n
            }

            function x(e) {
                var n, i = {originalEvent: e};
                for (n in e) _.test(n) || e[n] === t || (i[n] = e[n]);
                return S(i, e)
            }

            e.fn.delegate = function (e, t, n) {
                return this.on(t, e, n)
            }, e.fn.undelegate = function (e, t, n) {
                return this.off(t, e, n)
            }, e.fn.live = function (t, n) {
                return e(document.body).delegate(this.selector, t, n), this
            }, e.fn.die = function (t, n) {
                return e(document.body).undelegate(this.selector, t, n), this
            }, e.fn.on = function (n, a, s, l, c) {
                var u, d, f = this;
                return n && !r(n) ? (e.each(n, function (e, t) {
                    f.on(e, a, s, t, c)
                }), f) : (r(a) || o(l) || !1 === l || (l = s, s = a, a = t), l !== t && !1 !== s || (l = s, s = t), !1 === l && (l = b), f.each(function (t, o) {
                    c && (u = function (e) {
                        return g(o, e.type, l), l.apply(this, arguments)
                    }), a && (d = function (t) {
                        var n, r = e(t.target).closest(a, o).get(0);
                        if (r && r !== o) return n = e.extend(x(t), {
                            currentTarget: r,
                            liveFired: o
                        }), (u || l).apply(r, [n].concat(i.call(arguments, 1)))
                    }), v(o, n, l, s, a, d || u)
                }))
            }, e.fn.off = function (n, i, a) {
                var s = this;
                return n && !r(n) ? (e.each(n, function (e, t) {
                    s.off(e, i, t)
                }), s) : (r(i) || o(a) || !1 === a || (a = i, i = t), !1 === a && (a = b), s.each(function () {
                    g(this, n, a, i)
                }))
            }, e.fn.trigger = function (t, n) {
                return (t = r(t) || e.isPlainObject(t) ? e.Event(t) : S(t))._args = n, this.each(function () {
                    t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
                })
            }, e.fn.triggerHandler = function (t, n) {
                var i, o;
                return this.each(function (a, s) {
                    (i = x(r(t) ? e.Event(t) : t))._args = n, i.target = s, e.each(f(s, t.type || t), function (e, t) {
                        if (o = t.proxy(i), i.isImmediatePropagationStopped()) return !1
                    })
                }), o
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
                e.fn[t] = function (e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            }), e.Event = function (e, t) {
                r(e) || (e = (t = e).type);
                var n = document.createEvent(s[e] || "Events"), i = !0;
                if (t) for (var o in t) "bubbles" == o ? i = !!t[o] : n[o] = t[o];
                return n.initEvent(e, i, !0), S(n)
            }
        }(e), function (e) {
            var t = {}, n = e.fn.data, i = e.camelCase, o = e.expando = "Zepto" + +new Date, r = [];

            function a(n, a, s) {
                var l = n[o] || (n[o] = ++e.uuid), c = t[l] || (t[l] = function (t) {
                    var n = {};
                    return e.each(t.attributes || r, function (t, o) {
                        0 == o.name.indexOf("data-") && (n[i(o.name.replace("data-", ""))] = e.zepto.deserializeValue(o.value))
                    }), n
                }(n));
                return void 0 !== a && (c[i(a)] = s), c
            }

            e.fn.data = function (r, s) {
                return void 0 === s ? e.isPlainObject(r) ? this.each(function (t, n) {
                    e.each(r, function (e, t) {
                        a(n, e, t)
                    })
                }) : 0 in this ? function (r, s) {
                    var l = r[o], c = l && t[l];
                    if (void 0 === s) return c || a(r);
                    if (c) {
                        if (s in c) return c[s];
                        var u = i(s);
                        if (u in c) return c[u]
                    }
                    return n.call(e(r), s)
                }(this[0], r) : void 0 : this.each(function () {
                    a(this, r, s)
                })
            }, e.data = function (t, n, i) {
                return e(t).data(n, i)
            }, e.hasData = function (n) {
                var i = n[o], r = i && t[i];
                return !!r && !e.isEmptyObject(r)
            }, e.fn.removeData = function (n) {
                return "string" == typeof n && (n = n.split(/\s+/)), this.each(function () {
                    var r = this[o], a = r && t[r];
                    a && e.each(n || a, function (e) {
                        delete a[n ? i(this) : e]
                    })
                })
            }, ["remove", "empty"].forEach(function (t) {
                var n = e.fn[t];
                e.fn[t] = function () {
                    var e = this.find("*");
                    return "remove" === t && (e = e.add(this)), e.removeData(), n.call(this)
                }
            })
        }(e), function (e, t) {
            var n, i, r, a, s, l, c, u, d, f, p = "", h = document.createElement("div"),
                m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, v = {};

            function g(e) {
                return n ? n + e : e.toLowerCase()
            }

            void 0 === h.style.transform && e.each({Webkit: "webkit", Moz: "", O: "o"}, function (e, t) {
                if (void 0 !== h.style[e + "TransitionProperty"]) return p = "-" + e.toLowerCase() + "-", n = t, !1
            }), i = p + "transform", v[r = p + "transition-property"] = v[a = p + "transition-duration"] = v[l = p + "transition-delay"] = v[s = p + "transition-timing-function"] = v[c = p + "animation-name"] = v[u = p + "animation-duration"] = v[f = p + "animation-delay"] = v[d = p + "animation-timing-function"] = "", e.fx = {
                off: void 0 === n && void 0 === h.style.transitionProperty,
                speeds: {_default: 400, fast: 200, slow: 600},
                cssPrefix: p,
                transitionEnd: g("TransitionEnd"),
                animationEnd: g("AnimationEnd")
            }, e.fn.animate = function (t, n, i, o, r) {
                return e.isFunction(n) && (o = n, i = void 0, n = void 0), e.isFunction(i) && (o = i, i = void 0), e.isPlainObject(n) && (i = n.easing, o = n.complete, r = n.delay, n = n.duration), n && (n = ("number" == typeof n ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3), r && (r = parseFloat(r) / 1e3), this.anim(t, n, i, o, r)
            }, e.fn.anim = function (t, n, p, h, g) {
                var y, b, _, w = {}, S = "", x = this, E = e.fx.transitionEnd, k = !1;
                if (void 0 === n && (n = e.fx.speeds._default / 1e3), void 0 === g && (g = 0), e.fx.off && (n = 0), "string" == typeof t) w[c] = t, w[u] = n + "s", w[f] = g + "s", w[d] = p || "linear", E = e.fx.animationEnd; else {
                    for (y in b = [], t) m.test(y) ? S += y + "(" + t[y] + ") " : (w[y] = t[y], b.push(y.replace(/([A-Z])/g, "-$1").toLowerCase()));
                    S && (w[i] = S, b.push(i)), n > 0 && "object" === (void 0 === t ? "undefined" : o(t)) && (w[r] = b.join(", "), w[a] = n + "s", w[l] = g + "s", w[s] = p || "linear")
                }
                return _ = function (t) {
                    if (void 0 !== t) {
                        if (t.target !== t.currentTarget) return;
                        e(t.target).unbind(E, _)
                    } else e(this).unbind(E, _);
                    k = !0, e(this).css(v), h && h.call(this)
                }, n > 0 && (this.bind(E, _), setTimeout(function () {
                    k || _.call(x)
                }, 1e3 * (n + g) + 25)), this.size() && this.get(0).clientLeft, this.css(w), n <= 0 && setTimeout(function () {
                    x.each(function () {
                        _.call(this)
                    })
                }, 0), this
            }, h = null
        }(e), function (e, t) {
            window.document.documentElement;
            var n = e.fn.show, i = e.fn.hide, o = e.fn.toggle;

            function r(n, i, o, r, a) {
                "function" != typeof i || a || (a = i, i = t);
                var s = {opacity: o};
                return r && (s.scale = r, n.css(e.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, i, null, a)
            }

            function a(t, n, o, a) {
                return r(t, n, 0, o, function () {
                    i.call(e(this)), a && a.call(this)
                })
            }

            e.fn.show = function (e, i) {
                return n.call(this), e === t ? e = 0 : this.css("opacity", 0), r(this, e, 1, "1,1", i)
            }, e.fn.hide = function (e, n) {
                return e === t ? i.call(this) : a(this, e, "0,0", n)
            }, e.fn.toggle = function (n, i) {
                return n === t || "boolean" == typeof n ? o.call(this, n) : this.each(function () {
                    var t = e(this);
                    t["none" == t.css("display") ? "show" : "hide"](n, i)
                })
            }, e.fn.fadeTo = function (e, t, n) {
                return r(this, e, t, null, n)
            }, e.fn.fadeIn = function (e, t) {
                var i = this.css("opacity");
                return i > 0 ? this.css("opacity", 0) : i = 1, n.call(this).fadeTo(e, i, t)
            }, e.fn.fadeOut = function (e, t) {
                return a(this, e, null, t)
            }, e.fn.fadeToggle = function (t, n) {
                return this.each(function () {
                    var i = e(this);
                    i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](t, n)
                })
            }
        }(e), function (e) {
            var t = e.zepto, n = t.qsa, i = t.matches;

            function o(t) {
                return !(!(t = e(t)).width() && !t.height()) && "none" !== t.css("display")
            }

            var r = e.expr[":"] = {
                visible: function () {
                    if (o(this)) return this
                }, hidden: function () {
                    if (!o(this)) return this
                }, selected: function () {
                    if (this.selected) return this
                }, checked: function () {
                    if (this.checked) return this
                }, parent: function () {
                    return this.parentNode
                }, first: function (e) {
                    if (0 === e) return this
                }, last: function (e, t) {
                    if (e === t.length - 1) return this
                }, eq: function (e, t, n) {
                    if (e === n) return this
                }, contains: function (t, n, i) {
                    if (e(this).text().indexOf(i) > -1) return this
                }, has: function (e, n, i) {
                    if (t.qsa(this, i).length) return this
                }
            }, a = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), s = /^\s*>/, l = "Zepto" + +new Date;

            function c(e, t) {
                e = e.replace(/=#\]/g, '="#"]');
                var n, i, o = a.exec(e);
                if (o && o[2] in r && (n = r[o[2]], i = o[3], e = o[1], i)) {
                    var s = Number(i);
                    i = isNaN(s) ? i.replace(/^["']|["']$/g, "") : s
                }
                return t(e, n, i)
            }

            t.qsa = function (i, o) {
                return c(o, function (r, a, c) {
                    try {
                        var u;
                        !r && a ? r = "*" : s.test(r) && (u = e(i).addClass(l), r = "." + l + " " + r);
                        var d = n(i, r)
                    } catch (e) {
                        throw console.error("error performing selector: %o", o), e
                    } finally {
                        u && u.removeClass(l)
                    }
                    return a ? t.uniq(e.map(d, function (e, t) {
                        return a.call(e, t, d, c)
                    })) : d
                })
            }, t.matches = function (e, t) {
                return c(t, function (t, n, o) {
                    return (!t || i(e, t)) && (!n || n.call(e, null, o) === e)
                })
            }
        }(e), e;
        var e
    }.call(t, n, t, e)) || (e.exports = i), "object" === o(t) && (e.exports = Zepto)
}, , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    var i, o = n(232), r = (i = o) && i.__esModule ? i : {default: i};
    r.default.index = r.default.host + "/gaiya/food/getInfo", r.default.topline = "https://chi.nuomi.com/bizareatop", r.default.statistic = r.default.host + "/gaiya/jiaoyu/error", e.exports = r.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = s(o);
    n(150);
    var a = s(n(148));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var l = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "render", value: function () {
                var e = this.props.status, t = void 0 === e ? 1 : e;
                switch (t = isNaN(t) ? 1 : t) {
                    case 0:
                        return r.default.createElement("div", {className: "no-data"}, r.default.createElement("div", {className: "baozi"}), r.default.createElement("div", {className: "txt"}, "暂无数据哦"));
                    case 1:
                    case 2:
                        return r.default.createElement("div", {className: "status"}, 1 === t ? "加载中..." : "已加载全部");
                    case 3:
                        return r.default.createElement("div", {className: "loading-status"}, r.default.createElement("div", {className: "icon"}, r.default.createElement("img", {src: a.default})), r.default.createElement("div", {className: "txt"}, "努力加载中..."));
                    case 4:
                        return r.default.createElement("div", {className: "show-more"}, "上拉加载更多");
                    case 9999:
                    default:
                        return null
                }
            }
        }]), t
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    var i, o, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function () {
        var e = Array.prototype.slice;

        function t(e, t) {
            t && (e.prototype = Object.create(t.prototype)), e.prototype.constructor = e
        }

        function n(e) {
            return s(e) ? e : q(e)
        }

        function i(e) {
            return l(e) ? e : V(e)
        }

        function o(e) {
            return c(e) ? e : J(e)
        }

        function r(e) {
            return s(e) && !u(e) ? e : K(e)
        }

        function s(e) {
            return !(!e || !e[f])
        }

        function l(e) {
            return !(!e || !e[p])
        }

        function c(e) {
            return !(!e || !e[h])
        }

        function u(e) {
            return l(e) || c(e)
        }

        function d(e) {
            return !(!e || !e[m])
        }

        t(i, n), t(o, n), t(r, n), n.isIterable = s, n.isKeyed = l, n.isIndexed = c, n.isAssociative = u, n.isOrdered = d, n.Keyed = i, n.Indexed = o, n.Set = r;
        var f = "@@__IMMUTABLE_ITERABLE__@@", p = "@@__IMMUTABLE_KEYED__@@", h = "@@__IMMUTABLE_INDEXED__@@",
            m = "@@__IMMUTABLE_ORDERED__@@", v = 5, g = 1 << v, y = g - 1, b = {}, _ = {value: !1}, w = {value: !1};

        function S(e) {
            return e.value = !1, e
        }

        function x(e) {
            e && (e.value = !0)
        }

        function E() {
        }

        function k(e, t) {
            t = t || 0;
            for (var n = Math.max(0, e.length - t), i = new Array(n), o = 0; o < n; o++) i[o] = e[o + t];
            return i
        }

        function T(e) {
            return void 0 === e.size && (e.size = e.__iterate(N)), e.size
        }

        function C(e, t) {
            if ("number" != typeof t) {
                var n = t >>> 0;
                if ("" + n !== t || 4294967295 === n) return NaN;
                t = n
            }
            return t < 0 ? T(e) + t : t
        }

        function N() {
            return !0
        }

        function P(e, t, n) {
            return (0 === e || void 0 !== n && e <= -n) && (void 0 === t || void 0 !== n && t >= n)
        }

        function O(e, t) {
            return M(e, t, 0)
        }

        function I(e, t) {
            return M(e, t, t)
        }

        function M(e, t, n) {
            return void 0 === e ? n : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
        }

        var D = 0, j = 1, L = 2, z = "function" == typeof Symbol && Symbol.iterator, A = "@@iterator", R = z || A;

        function $(e) {
            this.next = e
        }

        function B(e, t, n, i) {
            var o = 0 === e ? t : 1 === e ? n : [t, n];
            return i ? i.value = o : i = {value: o, done: !1}, i
        }

        function W() {
            return {value: void 0, done: !0}
        }

        function F(e) {
            return !!X(e)
        }

        function U(e) {
            return e && "function" == typeof e.next
        }

        function Y(e) {
            var t = X(e);
            return t && t.call(e)
        }

        function X(e) {
            var t = e && (z && e[z] || e[A]);
            if ("function" == typeof t) return t
        }

        function H(e) {
            return e && "number" == typeof e.length
        }

        function q(e) {
            return null === e || void 0 === e ? ae() : s(e) ? e.toSeq() : function (e) {
                var t = ce(e) || "object" === (void 0 === e ? "undefined" : a(e)) && new ne(e);
                if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
                return t
            }(e)
        }

        function V(e) {
            return null === e || void 0 === e ? ae().toKeyedSeq() : s(e) ? l(e) ? e.toSeq() : e.fromEntrySeq() : se(e)
        }

        function J(e) {
            return null === e || void 0 === e ? ae() : s(e) ? l(e) ? e.entrySeq() : e.toIndexedSeq() : le(e)
        }

        function K(e) {
            return (null === e || void 0 === e ? ae() : s(e) ? l(e) ? e.entrySeq() : e : le(e)).toSetSeq()
        }

        $.prototype.toString = function () {
            return "[Iterator]"
        }, $.KEYS = D, $.VALUES = j, $.ENTRIES = L, $.prototype.inspect = $.prototype.toSource = function () {
            return this.toString()
        }, $.prototype[R] = function () {
            return this
        }, t(q, n), q.of = function () {
            return q(arguments)
        }, q.prototype.toSeq = function () {
            return this
        }, q.prototype.toString = function () {
            return this.__toString("Seq {", "}")
        }, q.prototype.cacheResult = function () {
            return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
        }, q.prototype.__iterate = function (e, t) {
            return ue(this, e, t, !0)
        }, q.prototype.__iterator = function (e, t) {
            return de(this, e, t, !0)
        }, t(V, q), V.prototype.toKeyedSeq = function () {
            return this
        }, t(J, q), J.of = function () {
            return J(arguments)
        }, J.prototype.toIndexedSeq = function () {
            return this
        }, J.prototype.toString = function () {
            return this.__toString("Seq [", "]")
        }, J.prototype.__iterate = function (e, t) {
            return ue(this, e, t, !1)
        }, J.prototype.__iterator = function (e, t) {
            return de(this, e, t, !1)
        }, t(K, q), K.of = function () {
            return K(arguments)
        }, K.prototype.toSetSeq = function () {
            return this
        }, q.isSeq = re, q.Keyed = V, q.Set = K, q.Indexed = J;
        var Z, Q, G, ee = "@@__IMMUTABLE_SEQ__@@";

        function te(e) {
            this._array = e, this.size = e.length
        }

        function ne(e) {
            var t = Object.keys(e);
            this._object = e, this._keys = t, this.size = t.length
        }

        function ie(e) {
            this._iterable = e, this.size = e.length || e.size
        }

        function oe(e) {
            this._iterator = e, this._iteratorCache = []
        }

        function re(e) {
            return !(!e || !e[ee])
        }

        function ae() {
            return Z || (Z = new te([]))
        }

        function se(e) {
            var t = Array.isArray(e) ? new te(e).fromEntrySeq() : U(e) ? new oe(e).fromEntrySeq() : F(e) ? new ie(e).fromEntrySeq() : "object" === (void 0 === e ? "undefined" : a(e)) ? new ne(e) : void 0;
            if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
            return t
        }

        function le(e) {
            var t = ce(e);
            if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
            return t
        }

        function ce(e) {
            return H(e) ? new te(e) : U(e) ? new oe(e) : F(e) ? new ie(e) : void 0
        }

        function ue(e, t, n, i) {
            var o = e._cache;
            if (o) {
                for (var r = o.length - 1, a = 0; a <= r; a++) {
                    var s = o[n ? r - a : a];
                    if (!1 === t(s[1], i ? s[0] : a, e)) return a + 1
                }
                return a
            }
            return e.__iterateUncached(t, n)
        }

        function de(e, t, n, i) {
            var o = e._cache;
            if (o) {
                var r = o.length - 1, a = 0;
                return new $(function () {
                    var e = o[n ? r - a : a];
                    return a++ > r ? {value: void 0, done: !0} : B(t, i ? e[0] : a - 1, e[1])
                })
            }
            return e.__iteratorUncached(t, n)
        }

        function fe(e, t) {
            return t ? function e(t, n, i, o) {
                if (Array.isArray(n)) return t.call(o, i, J(n).map(function (i, o) {
                    return e(t, i, o, n)
                }));
                if (he(n)) return t.call(o, i, V(n).map(function (i, o) {
                    return e(t, i, o, n)
                }));
                return n
            }(t, e, "", {"": e}) : pe(e)
        }

        function pe(e) {
            return Array.isArray(e) ? J(e).map(pe).toList() : he(e) ? V(e).map(pe).toMap() : e
        }

        function he(e) {
            return e && (e.constructor === Object || void 0 === e.constructor)
        }

        function me(e, t) {
            if (e === t || e != e && t != t) return !0;
            if (!e || !t) return !1;
            if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
                if (!e || !t) return !1
            }
            return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
        }

        function ve(e, t) {
            if (e === t) return !0;
            if (!s(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || l(e) !== l(t) || c(e) !== c(t) || d(e) !== d(t)) return !1;
            if (0 === e.size && 0 === t.size) return !0;
            var n = !u(e);
            if (d(e)) {
                var i = e.entries();
                return t.every(function (e, t) {
                    var o = i.next().value;
                    return o && me(o[1], e) && (n || me(o[0], t))
                }) && i.next().done
            }
            var o = !1;
            if (void 0 === e.size) if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult(); else {
                o = !0;
                var r = e;
                e = t, t = r
            }
            var a = !0, f = t.__iterate(function (t, i) {
                if (n ? !e.has(t) : o ? !me(t, e.get(i, b)) : !me(e.get(i, b), t)) return a = !1, !1
            });
            return a && e.size === f
        }

        function ge(e, t) {
            if (!(this instanceof ge)) return new ge(e, t);
            if (this._value = e, this.size = void 0 === t ? 1 / 0 : Math.max(0, t), 0 === this.size) {
                if (Q) return Q;
                Q = this
            }
        }

        function ye(e, t) {
            if (!e) throw new Error(t)
        }

        function be(e, t, n) {
            if (!(this instanceof be)) return new be(e, t, n);
            if (ye(0 !== n, "Cannot step a Range by 0"), e = e || 0, void 0 === t && (t = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), t < e && (n = -n), this._start = e, this._end = t, this._step = n, this.size = Math.max(0, Math.ceil((t - e) / n - 1) + 1), 0 === this.size) {
                if (G) return G;
                G = this
            }
        }

        function _e() {
            throw TypeError("Abstract")
        }

        function we() {
        }

        function Se() {
        }

        function xe() {
        }

        q.prototype[ee] = !0, t(te, J), te.prototype.get = function (e, t) {
            return this.has(e) ? this._array[C(this, e)] : t
        }, te.prototype.__iterate = function (e, t) {
            for (var n = this._array, i = n.length - 1, o = 0; o <= i; o++) if (!1 === e(n[t ? i - o : o], o, this)) return o + 1;
            return o
        }, te.prototype.__iterator = function (e, t) {
            var n = this._array, i = n.length - 1, o = 0;
            return new $(function () {
                return o > i ? {value: void 0, done: !0} : B(e, o, n[t ? i - o++ : o++])
            })
        }, t(ne, V), ne.prototype.get = function (e, t) {
            return void 0 === t || this.has(e) ? this._object[e] : t
        }, ne.prototype.has = function (e) {
            return this._object.hasOwnProperty(e)
        }, ne.prototype.__iterate = function (e, t) {
            for (var n = this._object, i = this._keys, o = i.length - 1, r = 0; r <= o; r++) {
                var a = i[t ? o - r : r];
                if (!1 === e(n[a], a, this)) return r + 1
            }
            return r
        }, ne.prototype.__iterator = function (e, t) {
            var n = this._object, i = this._keys, o = i.length - 1, r = 0;
            return new $(function () {
                var a = i[t ? o - r : r];
                return r++ > o ? {value: void 0, done: !0} : B(e, a, n[a])
            })
        }, ne.prototype[m] = !0, t(ie, J), ie.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            var n = Y(this._iterable), i = 0;
            if (U(n)) for (var o; !(o = n.next()).done && !1 !== e(o.value, i++, this);) ;
            return i
        }, ie.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = Y(this._iterable);
            if (!U(n)) return new $(W);
            var i = 0;
            return new $(function () {
                var t = n.next();
                return t.done ? t : B(e, i++, t.value)
            })
        }, t(oe, J), oe.prototype.__iterateUncached = function (e, t) {
            if (t) return this.cacheResult().__iterate(e, t);
            for (var n, i = this._iterator, o = this._iteratorCache, r = 0; r < o.length;) if (!1 === e(o[r], r++, this)) return r;
            for (; !(n = i.next()).done;) {
                var a = n.value;
                if (o[r] = a, !1 === e(a, r++, this)) break
            }
            return r
        }, oe.prototype.__iteratorUncached = function (e, t) {
            if (t) return this.cacheResult().__iterator(e, t);
            var n = this._iterator, i = this._iteratorCache, o = 0;
            return new $(function () {
                if (o >= i.length) {
                    var t = n.next();
                    if (t.done) return t;
                    i[o] = t.value
                }
                return B(e, o, i[o++])
            })
        }, t(ge, J), ge.prototype.toString = function () {
            return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
        }, ge.prototype.get = function (e, t) {
            return this.has(e) ? this._value : t
        }, ge.prototype.includes = function (e) {
            return me(this._value, e)
        }, ge.prototype.slice = function (e, t) {
            var n = this.size;
            return P(e, t, n) ? this : new ge(this._value, I(t, n) - O(e, n))
        }, ge.prototype.reverse = function () {
            return this
        }, ge.prototype.indexOf = function (e) {
            return me(this._value, e) ? 0 : -1
        }, ge.prototype.lastIndexOf = function (e) {
            return me(this._value, e) ? this.size : -1
        }, ge.prototype.__iterate = function (e, t) {
            for (var n = 0; n < this.size; n++) if (!1 === e(this._value, n, this)) return n + 1;
            return n
        }, ge.prototype.__iterator = function (e, t) {
            var n = this, i = 0;
            return new $(function () {
                return i < n.size ? B(e, i++, n._value) : {value: void 0, done: !0}
            })
        }, ge.prototype.equals = function (e) {
            return e instanceof ge ? me(this._value, e._value) : ve(e)
        }, t(be, J), be.prototype.toString = function () {
            return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
        }, be.prototype.get = function (e, t) {
            return this.has(e) ? this._start + C(this, e) * this._step : t
        }, be.prototype.includes = function (e) {
            var t = (e - this._start) / this._step;
            return t >= 0 && t < this.size && t === Math.floor(t)
        }, be.prototype.slice = function (e, t) {
            return P(e, t, this.size) ? this : (e = O(e, this.size), (t = I(t, this.size)) <= e ? new be(0, 0) : new be(this.get(e, this._end), this.get(t, this._end), this._step))
        }, be.prototype.indexOf = function (e) {
            var t = e - this._start;
            if (t % this._step == 0) {
                var n = t / this._step;
                if (n >= 0 && n < this.size) return n
            }
            return -1
        }, be.prototype.lastIndexOf = function (e) {
            return this.indexOf(e)
        }, be.prototype.__iterate = function (e, t) {
            for (var n = this.size - 1, i = this._step, o = t ? this._start + n * i : this._start, r = 0; r <= n; r++) {
                if (!1 === e(o, r, this)) return r + 1;
                o += t ? -i : i
            }
            return r
        }, be.prototype.__iterator = function (e, t) {
            var n = this.size - 1, i = this._step, o = t ? this._start + n * i : this._start, r = 0;
            return new $(function () {
                var a = o;
                return o += t ? -i : i, r > n ? {value: void 0, done: !0} : B(e, r++, a)
            })
        }, be.prototype.equals = function (e) {
            return e instanceof be ? this._start === e._start && this._end === e._end && this._step === e._step : ve(this, e)
        }, t(_e, n), t(we, _e), t(Se, _e), t(xe, _e), _e.Keyed = we, _e.Indexed = Se, _e.Set = xe;
        var Ee = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (e, t) {
            var n = 65535 & (e |= 0), i = 65535 & (t |= 0);
            return n * i + ((e >>> 16) * i + n * (t >>> 16) << 16 >>> 0) | 0
        };

        function ke(e) {
            return e >>> 1 & 1073741824 | 3221225471 & e
        }

        function Te(e) {
            if (!1 === e || null === e || void 0 === e) return 0;
            if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null === e || void 0 === e)) return 0;
            if (!0 === e) return 1;
            var t = void 0 === e ? "undefined" : a(e);
            if ("number" === t) {
                if (e != e || e === 1 / 0) return 0;
                var n = 0 | e;
                for (n !== e && (n ^= 4294967295 * e); e > 4294967295;) n ^= e /= 4294967295;
                return ke(n)
            }
            if ("string" === t) return e.length > je ? function (e) {
                var t = Ae[e];
                void 0 === t && (t = Ce(e), ze === Le && (ze = 0, Ae = {}), ze++, Ae[e] = t);
                return t
            }(e) : Ce(e);
            if ("function" == typeof e.hashCode) return e.hashCode();
            if ("object" === t) return function (e) {
                var t;
                if (Ie && void 0 !== (t = Oe.get(e))) return t;
                if (void 0 !== (t = e[De])) return t;
                if (!Pe) {
                    if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[De])) return t;
                    if (void 0 !== (t = function (e) {
                        if (e && e.nodeType > 0) switch (e.nodeType) {
                            case 1:
                                return e.uniqueID;
                            case 9:
                                return e.documentElement && e.documentElement.uniqueID
                        }
                    }(e))) return t
                }
                t = ++Me, 1073741824 & Me && (Me = 0);
                if (Ie) Oe.set(e, t); else {
                    if (void 0 !== Ne && !1 === Ne(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                    if (Pe) Object.defineProperty(e, De, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: t
                    }); else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) e.propertyIsEnumerable = function () {
                        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                    }, e.propertyIsEnumerable[De] = t; else {
                        if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                        e[De] = t
                    }
                }
                return t
            }(e);
            if ("function" == typeof e.toString) return Ce(e.toString());
            throw new Error("Value type " + t + " cannot be hashed.")
        }

        function Ce(e) {
            for (var t = 0, n = 0; n < e.length; n++) t = 31 * t + e.charCodeAt(n) | 0;
            return ke(t)
        }

        var Ne = Object.isExtensible, Pe = function () {
            try {
                return Object.defineProperty({}, "@", {}), !0
            } catch (e) {
                return !1
            }
        }();
        var Oe, Ie = "function" == typeof WeakMap;
        Ie && (Oe = new WeakMap);
        var Me = 0, De = "__immutablehash__";
        "function" == typeof Symbol && (De = Symbol(De));
        var je = 16, Le = 255, ze = 0, Ae = {};

        function Re(e) {
            ye(e !== 1 / 0, "Cannot perform this action with an infinite size.")
        }

        function $e(e) {
            return null === e || void 0 === e ? Ge() : Be(e) && !d(e) ? e : Ge().withMutations(function (t) {
                var n = i(e);
                Re(n.size), n.forEach(function (e, n) {
                    return t.set(n, e)
                })
            })
        }

        function Be(e) {
            return !(!e || !e[Fe])
        }

        t($e, we), $e.of = function () {
            var t = e.call(arguments, 0);
            return Ge().withMutations(function (e) {
                for (var n = 0; n < t.length; n += 2) {
                    if (n + 1 >= t.length) throw new Error("Missing value for key: " + t[n]);
                    e.set(t[n], t[n + 1])
                }
            })
        }, $e.prototype.toString = function () {
            return this.__toString("Map {", "}")
        }, $e.prototype.get = function (e, t) {
            return this._root ? this._root.get(0, void 0, e, t) : t
        }, $e.prototype.set = function (e, t) {
            return et(this, e, t)
        }, $e.prototype.setIn = function (e, t) {
            return this.updateIn(e, b, function () {
                return t
            })
        }, $e.prototype.remove = function (e) {
            return et(this, e, b)
        }, $e.prototype.deleteIn = function (e) {
            return this.updateIn(e, function () {
                return b
            })
        }, $e.prototype.update = function (e, t, n) {
            return 1 === arguments.length ? e(this) : this.updateIn([e], t, n)
        }, $e.prototype.updateIn = function (e, t, n) {
            n || (n = t, t = void 0);
            var i = function e(t, n, i, o) {
                var r = t === b;
                var a = n.next();
                if (a.done) {
                    var s = r ? i : t, l = o(s);
                    return l === s ? t : l
                }
                ye(r || t && t.set, "invalid keyPath");
                var c = a.value;
                var u = r ? b : t.get(c, b);
                var d = e(u, n, i, o);
                return d === u ? t : d === b ? t.remove(c) : (r ? Ge() : t).set(c, d)
            }(this, on(e), t, n);
            return i === b ? void 0 : i
        }, $e.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Ge()
        }, $e.prototype.merge = function () {
            return ot(this, void 0, arguments)
        }, $e.prototype.mergeWith = function (t) {
            return ot(this, t, e.call(arguments, 1))
        }, $e.prototype.mergeIn = function (t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, Ge(), function (e) {
                return "function" == typeof e.merge ? e.merge.apply(e, n) : n[n.length - 1]
            })
        }, $e.prototype.mergeDeep = function () {
            return ot(this, rt, arguments)
        }, $e.prototype.mergeDeepWith = function (t) {
            var n = e.call(arguments, 1);
            return ot(this, at(t), n)
        }, $e.prototype.mergeDeepIn = function (t) {
            var n = e.call(arguments, 1);
            return this.updateIn(t, Ge(), function (e) {
                return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, n) : n[n.length - 1]
            })
        }, $e.prototype.sort = function (e) {
            return Ot(Ht(this, e))
        }, $e.prototype.sortBy = function (e, t) {
            return Ot(Ht(this, t, e))
        }, $e.prototype.withMutations = function (e) {
            var t = this.asMutable();
            return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
        }, $e.prototype.asMutable = function () {
            return this.__ownerID ? this : this.__ensureOwner(new E)
        }, $e.prototype.asImmutable = function () {
            return this.__ensureOwner()
        }, $e.prototype.wasAltered = function () {
            return this.__altered
        }, $e.prototype.__iterator = function (e, t) {
            return new Je(this, e, t)
        }, $e.prototype.__iterate = function (e, t) {
            var n = this, i = 0;
            return this._root && this._root.iterate(function (t) {
                return i++, e(t[1], t[0], n)
            }, t), i
        }, $e.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID ? this : e ? Qe(this.size, this._root, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
        }, $e.isMap = Be;
        var We, Fe = "@@__IMMUTABLE_MAP__@@", Ue = $e.prototype;

        function Ye(e, t) {
            this.ownerID = e, this.entries = t
        }

        function Xe(e, t, n) {
            this.ownerID = e, this.bitmap = t, this.nodes = n
        }

        function He(e, t, n) {
            this.ownerID = e, this.count = t, this.nodes = n
        }

        function qe(e, t, n) {
            this.ownerID = e, this.keyHash = t, this.entries = n
        }

        function Ve(e, t, n) {
            this.ownerID = e, this.keyHash = t, this.entry = n
        }

        function Je(e, t, n) {
            this._type = t, this._reverse = n, this._stack = e._root && Ze(e._root)
        }

        function Ke(e, t) {
            return B(e, t[0], t[1])
        }

        function Ze(e, t) {
            return {node: e, index: 0, __prev: t}
        }

        function Qe(e, t, n, i) {
            var o = Object.create(Ue);
            return o.size = e, o._root = t, o.__ownerID = n, o.__hash = i, o.__altered = !1, o
        }

        function Ge() {
            return We || (We = Qe(0))
        }

        function et(e, t, n) {
            var i, o;
            if (e._root) {
                var r = S(_), a = S(w);
                if (i = tt(e._root, e.__ownerID, 0, void 0, t, n, r, a), !a.value) return e;
                o = e.size + (r.value ? n === b ? -1 : 1 : 0)
            } else {
                if (n === b) return e;
                o = 1, i = new Ye(e.__ownerID, [[t, n]])
            }
            return e.__ownerID ? (e.size = o, e._root = i, e.__hash = void 0, e.__altered = !0, e) : i ? Qe(o, i) : Ge()
        }

        function tt(e, t, n, i, o, r, a, s) {
            return e ? e.update(t, n, i, o, r, a, s) : r === b ? e : (x(s), x(a), new Ve(t, i, [o, r]))
        }

        function nt(e) {
            return e.constructor === Ve || e.constructor === qe
        }

        function it(e, t, n, i, o) {
            if (e.keyHash === i) return new qe(t, i, [e.entry, o]);
            var r, a = (0 === n ? e.keyHash : e.keyHash >>> n) & y, s = (0 === n ? i : i >>> n) & y;
            return new Xe(t, 1 << a | 1 << s, a === s ? [it(e, t, n + v, i, o)] : (r = new Ve(t, i, o), a < s ? [e, r] : [r, e]))
        }

        function ot(e, t, n) {
            for (var o = [], r = 0; r < n.length; r++) {
                var a = n[r], l = i(a);
                s(a) || (l = l.map(function (e) {
                    return fe(e)
                })), o.push(l)
            }
            return st(e, t, o)
        }

        function rt(e, t, n) {
            return e && e.mergeDeep && s(t) ? e.mergeDeep(t) : me(e, t) ? e : t
        }

        function at(e) {
            return function (t, n, i) {
                if (t && t.mergeDeepWith && s(n)) return t.mergeDeepWith(e, n);
                var o = e(t, n, i);
                return me(t, o) ? t : o
            }
        }

        function st(e, t, n) {
            return 0 === (n = n.filter(function (e) {
                return 0 !== e.size
            })).length ? e : 0 !== e.size || e.__ownerID || 1 !== n.length ? e.withMutations(function (e) {
                for (var i = t ? function (n, i) {
                    e.update(i, b, function (e) {
                        return e === b ? n : t(e, n, i)
                    })
                } : function (t, n) {
                    e.set(n, t)
                }, o = 0; o < n.length; o++) n[o].forEach(i)
            }) : e.constructor(n[0])
        }

        function lt(e) {
            return e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135, e += e >> 8, 127 & (e += e >> 16)
        }

        function ct(e, t, n, i) {
            var o = i ? e : k(e);
            return o[t] = n, o
        }

        Ue[Fe] = !0, Ue.delete = Ue.remove, Ue.removeIn = Ue.deleteIn, Ye.prototype.get = function (e, t, n, i) {
            for (var o = this.entries, r = 0, a = o.length; r < a; r++) if (me(n, o[r][0])) return o[r][1];
            return i
        }, Ye.prototype.update = function (e, t, n, i, o, r, a) {
            for (var s = o === b, l = this.entries, c = 0, u = l.length; c < u && !me(i, l[c][0]); c++) ;
            var d = c < u;
            if (d ? l[c][1] === o : s) return this;
            if (x(a), (s || !d) && x(r), !s || 1 !== l.length) {
                if (!d && !s && l.length >= ut) return function (e, t, n, i) {
                    e || (e = new E);
                    for (var o = new Ve(e, Te(n), [n, i]), r = 0; r < t.length; r++) {
                        var a = t[r];
                        o = o.update(e, 0, void 0, a[0], a[1])
                    }
                    return o
                }(e, l, i, o);
                var f = e && e === this.ownerID, p = f ? l : k(l);
                return d ? s ? c === u - 1 ? p.pop() : p[c] = p.pop() : p[c] = [i, o] : p.push([i, o]), f ? (this.entries = p, this) : new Ye(e, p)
            }
        }, Xe.prototype.get = function (e, t, n, i) {
            void 0 === t && (t = Te(n));
            var o = 1 << ((0 === e ? t : t >>> e) & y), r = this.bitmap;
            return 0 == (r & o) ? i : this.nodes[lt(r & o - 1)].get(e + v, t, n, i)
        }, Xe.prototype.update = function (e, t, n, i, o, r, a) {
            void 0 === n && (n = Te(i));
            var s = (0 === t ? n : n >>> t) & y, l = 1 << s, c = this.bitmap, u = 0 != (c & l);
            if (!u && o === b) return this;
            var d = lt(c & l - 1), f = this.nodes, p = u ? f[d] : void 0, h = tt(p, e, t + v, n, i, o, r, a);
            if (h === p) return this;
            if (!u && h && f.length >= dt) return function (e, t, n, i, o) {
                for (var r = 0, a = new Array(g), s = 0; 0 !== n; s++, n >>>= 1) a[s] = 1 & n ? t[r++] : void 0;
                return a[i] = o, new He(e, r + 1, a)
            }(e, f, c, s, h);
            if (u && !h && 2 === f.length && nt(f[1 ^ d])) return f[1 ^ d];
            if (u && h && 1 === f.length && nt(h)) return h;
            var m = e && e === this.ownerID, _ = u ? h ? c : c ^ l : c | l,
                w = u ? h ? ct(f, d, h, m) : function (e, t, n) {
                    var i = e.length - 1;
                    if (n && t === i) return e.pop(), e;
                    for (var o = new Array(i), r = 0, a = 0; a < i; a++) a === t && (r = 1), o[a] = e[a + r];
                    return o
                }(f, d, m) : function (e, t, n, i) {
                    var o = e.length + 1;
                    if (i && t + 1 === o) return e[t] = n, e;
                    for (var r = new Array(o), a = 0, s = 0; s < o; s++) s === t ? (r[s] = n, a = -1) : r[s] = e[s + a];
                    return r
                }(f, d, h, m);
            return m ? (this.bitmap = _, this.nodes = w, this) : new Xe(e, _, w)
        }, He.prototype.get = function (e, t, n, i) {
            void 0 === t && (t = Te(n));
            var o = (0 === e ? t : t >>> e) & y, r = this.nodes[o];
            return r ? r.get(e + v, t, n, i) : i
        }, He.prototype.update = function (e, t, n, i, o, r, a) {
            void 0 === n && (n = Te(i));
            var s = (0 === t ? n : n >>> t) & y, l = o === b, c = this.nodes, u = c[s];
            if (l && !u) return this;
            var d = tt(u, e, t + v, n, i, o, r, a);
            if (d === u) return this;
            var f = this.count;
            if (u) {
                if (!d && --f < ft) return function (e, t, n, i) {
                    for (var o = 0, r = 0, a = new Array(n), s = 0, l = 1, c = t.length; s < c; s++, l <<= 1) {
                        var u = t[s];
                        void 0 !== u && s !== i && (o |= l, a[r++] = u)
                    }
                    return new Xe(e, o, a)
                }(e, c, f, s)
            } else f++;
            var p = e && e === this.ownerID, h = ct(c, s, d, p);
            return p ? (this.count = f, this.nodes = h, this) : new He(e, f, h)
        }, qe.prototype.get = function (e, t, n, i) {
            for (var o = this.entries, r = 0, a = o.length; r < a; r++) if (me(n, o[r][0])) return o[r][1];
            return i
        }, qe.prototype.update = function (e, t, n, i, o, r, a) {
            void 0 === n && (n = Te(i));
            var s = o === b;
            if (n !== this.keyHash) return s ? this : (x(a), x(r), it(this, e, t, n, [i, o]));
            for (var l = this.entries, c = 0, u = l.length; c < u && !me(i, l[c][0]); c++) ;
            var d = c < u;
            if (d ? l[c][1] === o : s) return this;
            if (x(a), (s || !d) && x(r), s && 2 === u) return new Ve(e, this.keyHash, l[1 ^ c]);
            var f = e && e === this.ownerID, p = f ? l : k(l);
            return d ? s ? c === u - 1 ? p.pop() : p[c] = p.pop() : p[c] = [i, o] : p.push([i, o]), f ? (this.entries = p, this) : new qe(e, this.keyHash, p)
        }, Ve.prototype.get = function (e, t, n, i) {
            return me(n, this.entry[0]) ? this.entry[1] : i
        }, Ve.prototype.update = function (e, t, n, i, o, r, a) {
            var s = o === b, l = me(i, this.entry[0]);
            return (l ? o === this.entry[1] : s) ? this : (x(a), s ? void x(r) : l ? e && e === this.ownerID ? (this.entry[1] = o, this) : new Ve(e, this.keyHash, [i, o]) : (x(r), it(this, e, t, Te(i), [i, o])))
        }, Ye.prototype.iterate = qe.prototype.iterate = function (e, t) {
            for (var n = this.entries, i = 0, o = n.length - 1; i <= o; i++) if (!1 === e(n[t ? o - i : i])) return !1
        }, Xe.prototype.iterate = He.prototype.iterate = function (e, t) {
            for (var n = this.nodes, i = 0, o = n.length - 1; i <= o; i++) {
                var r = n[t ? o - i : i];
                if (r && !1 === r.iterate(e, t)) return !1
            }
        }, Ve.prototype.iterate = function (e, t) {
            return e(this.entry)
        }, t(Je, $), Je.prototype.next = function () {
            for (var e = this._type, t = this._stack; t;) {
                var n, i = t.node, o = t.index++;
                if (i.entry) {
                    if (0 === o) return Ke(e, i.entry)
                } else if (i.entries) {
                    if (o <= (n = i.entries.length - 1)) return Ke(e, i.entries[this._reverse ? n - o : o])
                } else if (o <= (n = i.nodes.length - 1)) {
                    var r = i.nodes[this._reverse ? n - o : o];
                    if (r) {
                        if (r.entry) return Ke(e, r.entry);
                        t = this._stack = Ze(r, t)
                    }
                    continue
                }
                t = this._stack = this._stack.__prev
            }
            return {value: void 0, done: !0}
        };
        var ut = g / 4, dt = g / 2, ft = g / 4;

        function pt(e) {
            var t = xt();
            if (null === e || void 0 === e) return t;
            if (ht(e)) return e;
            var n = o(e), i = n.size;
            return 0 === i ? t : (Re(i), i > 0 && i < g ? St(0, i, v, null, new gt(n.toArray())) : t.withMutations(function (e) {
                e.setSize(i), n.forEach(function (t, n) {
                    return e.set(n, t)
                })
            }))
        }

        function ht(e) {
            return !(!e || !e[mt])
        }

        t(pt, Se), pt.of = function () {
            return this(arguments)
        }, pt.prototype.toString = function () {
            return this.__toString("List [", "]")
        }, pt.prototype.get = function (e, t) {
            if ((e = C(this, e)) >= 0 && e < this.size) {
                var n = Tt(this, e += this._origin);
                return n && n.array[e & y]
            }
            return t
        }, pt.prototype.set = function (e, t) {
            return function (e, t, n) {
                if ((t = C(e, t)) != t) return e;
                if (t >= e.size || t < 0) return e.withMutations(function (e) {
                    t < 0 ? Ct(e, t).set(0, n) : Ct(e, 0, t + 1).set(t, n)
                });
                t += e._origin;
                var i = e._tail, o = e._root, r = S(w);
                t >= Pt(e._capacity) ? i = Et(i, e.__ownerID, 0, t, n, r) : o = Et(o, e.__ownerID, e._level, t, n, r);
                if (!r.value) return e;
                if (e.__ownerID) return e._root = o, e._tail = i, e.__hash = void 0, e.__altered = !0, e;
                return St(e._origin, e._capacity, e._level, o, i)
            }(this, e, t)
        }, pt.prototype.remove = function (e) {
            return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
        }, pt.prototype.insert = function (e, t) {
            return this.splice(e, 0, t)
        }, pt.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = v, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : xt()
        }, pt.prototype.push = function () {
            var e = arguments, t = this.size;
            return this.withMutations(function (n) {
                Ct(n, 0, t + e.length);
                for (var i = 0; i < e.length; i++) n.set(t + i, e[i])
            })
        }, pt.prototype.pop = function () {
            return Ct(this, 0, -1)
        }, pt.prototype.unshift = function () {
            var e = arguments;
            return this.withMutations(function (t) {
                Ct(t, -e.length);
                for (var n = 0; n < e.length; n++) t.set(n, e[n])
            })
        }, pt.prototype.shift = function () {
            return Ct(this, 1)
        }, pt.prototype.merge = function () {
            return Nt(this, void 0, arguments)
        }, pt.prototype.mergeWith = function (t) {
            return Nt(this, t, e.call(arguments, 1))
        }, pt.prototype.mergeDeep = function () {
            return Nt(this, rt, arguments)
        }, pt.prototype.mergeDeepWith = function (t) {
            var n = e.call(arguments, 1);
            return Nt(this, at(t), n)
        }, pt.prototype.setSize = function (e) {
            return Ct(this, 0, e)
        }, pt.prototype.slice = function (e, t) {
            var n = this.size;
            return P(e, t, n) ? this : Ct(this, O(e, n), I(t, n))
        }, pt.prototype.__iterator = function (e, t) {
            var n = 0, i = wt(this, t);
            return new $(function () {
                var t = i();
                return t === _t ? {value: void 0, done: !0} : B(e, n++, t)
            })
        }, pt.prototype.__iterate = function (e, t) {
            for (var n, i = 0, o = wt(this, t); (n = o()) !== _t && !1 !== e(n, i++, this);) ;
            return i
        }, pt.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID ? this : e ? St(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : (this.__ownerID = e, this)
        }, pt.isList = ht;
        var mt = "@@__IMMUTABLE_LIST__@@", vt = pt.prototype;

        function gt(e, t) {
            this.array = e, this.ownerID = t
        }

        vt[mt] = !0, vt.delete = vt.remove, vt.setIn = Ue.setIn, vt.deleteIn = vt.removeIn = Ue.removeIn, vt.update = Ue.update, vt.updateIn = Ue.updateIn, vt.mergeIn = Ue.mergeIn, vt.mergeDeepIn = Ue.mergeDeepIn, vt.withMutations = Ue.withMutations, vt.asMutable = Ue.asMutable, vt.asImmutable = Ue.asImmutable, vt.wasAltered = Ue.wasAltered, gt.prototype.removeBefore = function (e, t, n) {
            if (n === t ? 1 << t : 0 === this.array.length) return this;
            var i = n >>> t & y;
            if (i >= this.array.length) return new gt([], e);
            var o, r = 0 === i;
            if (t > 0) {
                var a = this.array[i];
                if ((o = a && a.removeBefore(e, t - v, n)) === a && r) return this
            }
            if (r && !o) return this;
            var s = kt(this, e);
            if (!r) for (var l = 0; l < i; l++) s.array[l] = void 0;
            return o && (s.array[i] = o), s
        }, gt.prototype.removeAfter = function (e, t, n) {
            if (n === (t ? 1 << t : 0) || 0 === this.array.length) return this;
            var i, o = n - 1 >>> t & y;
            if (o >= this.array.length) return this;
            if (t > 0) {
                var r = this.array[o];
                if ((i = r && r.removeAfter(e, t - v, n)) === r && o === this.array.length - 1) return this
            }
            var a = kt(this, e);
            return a.array.splice(o + 1), i && (a.array[o] = i), a
        };
        var yt, bt, _t = {};

        function wt(e, t) {
            var n = e._origin, i = e._capacity, o = Pt(i), r = e._tail;
            return a(e._root, e._level, 0);

            function a(e, s, l) {
                return 0 === s ? function (e, a) {
                    var s = a === o ? r && r.array : e && e.array, l = a > n ? 0 : n - a, c = i - a;
                    c > g && (c = g);
                    return function () {
                        if (l === c) return _t;
                        var e = t ? --c : l++;
                        return s && s[e]
                    }
                }(e, l) : function (e, o, r) {
                    var s, l = e && e.array, c = r > n ? 0 : n - r >> o, u = 1 + (i - r >> o);
                    u > g && (u = g);
                    return function () {
                        for (; ;) {
                            if (s) {
                                var e = s();
                                if (e !== _t) return e;
                                s = null
                            }
                            if (c === u) return _t;
                            var n = t ? --u : c++;
                            s = a(l && l[n], o - v, r + (n << o))
                        }
                    }
                }(e, s, l)
            }
        }

        function St(e, t, n, i, o, r, a) {
            var s = Object.create(vt);
            return s.size = t - e, s._origin = e, s._capacity = t, s._level = n, s._root = i, s._tail = o, s.__ownerID = r, s.__hash = a, s.__altered = !1, s
        }

        function xt() {
            return yt || (yt = St(0, 0, v))
        }

        function Et(e, t, n, i, o, r) {
            var a, s = i >>> n & y, l = e && s < e.array.length;
            if (!l && void 0 === o) return e;
            if (n > 0) {
                var c = e && e.array[s], u = Et(c, t, n - v, i, o, r);
                return u === c ? e : ((a = kt(e, t)).array[s] = u, a)
            }
            return l && e.array[s] === o ? e : (x(r), a = kt(e, t), void 0 === o && s === a.array.length - 1 ? a.array.pop() : a.array[s] = o, a)
        }

        function kt(e, t) {
            return t && e && t === e.ownerID ? e : new gt(e ? e.array.slice() : [], t)
        }

        function Tt(e, t) {
            if (t >= Pt(e._capacity)) return e._tail;
            if (t < 1 << e._level + v) {
                for (var n = e._root, i = e._level; n && i > 0;) n = n.array[t >>> i & y], i -= v;
                return n
            }
        }

        function Ct(e, t, n) {
            void 0 !== t && (t |= 0), void 0 !== n && (n |= 0);
            var i = e.__ownerID || new E, o = e._origin, r = e._capacity, a = o + t,
                s = void 0 === n ? r : n < 0 ? r + n : o + n;
            if (a === o && s === r) return e;
            if (a >= s) return e.clear();
            for (var l = e._level, c = e._root, u = 0; a + u < 0;) c = new gt(c && c.array.length ? [void 0, c] : [], i), u += 1 << (l += v);
            u && (a += u, o += u, s += u, r += u);
            for (var d = Pt(r), f = Pt(s); f >= 1 << l + v;) c = new gt(c && c.array.length ? [c] : [], i), l += v;
            var p = e._tail, h = f < d ? Tt(e, s - 1) : f > d ? new gt([], i) : p;
            if (p && f > d && a < r && p.array.length) {
                for (var m = c = kt(c, i), g = l; g > v; g -= v) {
                    var b = d >>> g & y;
                    m = m.array[b] = kt(m.array[b], i)
                }
                m.array[d >>> v & y] = p
            }
            if (s < r && (h = h && h.removeAfter(i, 0, s)), a >= f) a -= f, s -= f, l = v, c = null, h = h && h.removeBefore(i, 0, a); else if (a > o || f < d) {
                for (u = 0; c;) {
                    var _ = a >>> l & y;
                    if (_ !== f >>> l & y) break;
                    _ && (u += (1 << l) * _), l -= v, c = c.array[_]
                }
                c && a > o && (c = c.removeBefore(i, l, a - u)), c && f < d && (c = c.removeAfter(i, l, f - u)), u && (a -= u, s -= u)
            }
            return e.__ownerID ? (e.size = s - a, e._origin = a, e._capacity = s, e._level = l, e._root = c, e._tail = h, e.__hash = void 0, e.__altered = !0, e) : St(a, s, l, c, h)
        }

        function Nt(e, t, n) {
            for (var i = [], r = 0, a = 0; a < n.length; a++) {
                var l = n[a], c = o(l);
                c.size > r && (r = c.size), s(l) || (c = c.map(function (e) {
                    return fe(e)
                })), i.push(c)
            }
            return r > e.size && (e = e.setSize(r)), st(e, t, i)
        }

        function Pt(e) {
            return e < g ? 0 : e - 1 >>> v << v
        }

        function Ot(e) {
            return null === e || void 0 === e ? Dt() : It(e) ? e : Dt().withMutations(function (t) {
                var n = i(e);
                Re(n.size), n.forEach(function (e, n) {
                    return t.set(n, e)
                })
            })
        }

        function It(e) {
            return Be(e) && d(e)
        }

        function Mt(e, t, n, i) {
            var o = Object.create(Ot.prototype);
            return o.size = e ? e.size : 0, o._map = e, o._list = t, o.__ownerID = n, o.__hash = i, o
        }

        function Dt() {
            return bt || (bt = Mt(Ge(), xt()))
        }

        function jt(e, t, n) {
            var i, o, r = e._map, a = e._list, s = r.get(t), l = void 0 !== s;
            if (n === b) {
                if (!l) return e;
                a.size >= g && a.size >= 2 * r.size ? (i = (o = a.filter(function (e, t) {
                    return void 0 !== e && s !== t
                })).toKeyedSeq().map(function (e) {
                    return e[0]
                }).flip().toMap(), e.__ownerID && (i.__ownerID = o.__ownerID = e.__ownerID)) : (i = r.remove(t), o = s === a.size - 1 ? a.pop() : a.set(s, void 0))
            } else if (l) {
                if (n === a.get(s)[1]) return e;
                i = r, o = a.set(s, [t, n])
            } else i = r.set(t, a.size), o = a.set(a.size, [t, n]);
            return e.__ownerID ? (e.size = i.size, e._map = i, e._list = o, e.__hash = void 0, e) : Mt(i, o)
        }

        function Lt(e, t) {
            this._iter = e, this._useKeys = t, this.size = e.size
        }

        function zt(e) {
            this._iter = e, this.size = e.size
        }

        function At(e) {
            this._iter = e, this.size = e.size
        }

        function Rt(e) {
            this._iter = e, this.size = e.size
        }

        function $t(e) {
            var t = en(e);
            return t._iter = e, t.size = e.size, t.flip = function () {
                return e
            }, t.reverse = function () {
                var t = e.reverse.apply(this);
                return t.flip = function () {
                    return e.reverse()
                }, t
            }, t.has = function (t) {
                return e.includes(t)
            }, t.includes = function (t) {
                return e.has(t)
            }, t.cacheResult = tn, t.__iterateUncached = function (t, n) {
                var i = this;
                return e.__iterate(function (e, n) {
                    return !1 !== t(n, e, i)
                }, n)
            }, t.__iteratorUncached = function (t, n) {
                if (t === L) {
                    var i = e.__iterator(t, n);
                    return new $(function () {
                        var e = i.next();
                        if (!e.done) {
                            var t = e.value[0];
                            e.value[0] = e.value[1], e.value[1] = t
                        }
                        return e
                    })
                }
                return e.__iterator(t === j ? D : j, n)
            }, t
        }

        function Bt(e, t, n) {
            var i = en(e);
            return i.size = e.size, i.has = function (t) {
                return e.has(t)
            }, i.get = function (i, o) {
                var r = e.get(i, b);
                return r === b ? o : t.call(n, r, i, e)
            }, i.__iterateUncached = function (i, o) {
                var r = this;
                return e.__iterate(function (e, o, a) {
                    return !1 !== i(t.call(n, e, o, a), o, r)
                }, o)
            }, i.__iteratorUncached = function (i, o) {
                var r = e.__iterator(L, o);
                return new $(function () {
                    var o = r.next();
                    if (o.done) return o;
                    var a = o.value, s = a[0];
                    return B(i, s, t.call(n, a[1], s, e), o)
                })
            }, i
        }

        function Wt(e, t) {
            var n = en(e);
            return n._iter = e, n.size = e.size, n.reverse = function () {
                return e
            }, e.flip && (n.flip = function () {
                var t = $t(e);
                return t.reverse = function () {
                    return e.flip()
                }, t
            }), n.get = function (n, i) {
                return e.get(t ? n : -1 - n, i)
            }, n.has = function (n) {
                return e.has(t ? n : -1 - n)
            }, n.includes = function (t) {
                return e.includes(t)
            }, n.cacheResult = tn, n.__iterate = function (t, n) {
                var i = this;
                return e.__iterate(function (e, n) {
                    return t(e, n, i)
                }, !n)
            }, n.__iterator = function (t, n) {
                return e.__iterator(t, !n)
            }, n
        }

        function Ft(e, t, n, i) {
            var o = en(e);
            return i && (o.has = function (i) {
                var o = e.get(i, b);
                return o !== b && !!t.call(n, o, i, e)
            }, o.get = function (i, o) {
                var r = e.get(i, b);
                return r !== b && t.call(n, r, i, e) ? r : o
            }), o.__iterateUncached = function (o, r) {
                var a = this, s = 0;
                return e.__iterate(function (e, r, l) {
                    if (t.call(n, e, r, l)) return s++, o(e, i ? r : s - 1, a)
                }, r), s
            }, o.__iteratorUncached = function (o, r) {
                var a = e.__iterator(L, r), s = 0;
                return new $(function () {
                    for (; ;) {
                        var r = a.next();
                        if (r.done) return r;
                        var l = r.value, c = l[0], u = l[1];
                        if (t.call(n, u, c, e)) return B(o, i ? c : s++, u, r)
                    }
                })
            }, o
        }

        function Ut(e, t, n, i) {
            var o = e.size;
            if (void 0 !== t && (t |= 0), void 0 !== n && (n === 1 / 0 ? n = o : n |= 0), P(t, n, o)) return e;
            var r = O(t, o), a = I(n, o);
            if (r != r || a != a) return Ut(e.toSeq().cacheResult(), t, n, i);
            var s, l = a - r;
            l == l && (s = l < 0 ? 0 : l);
            var c = en(e);
            return c.size = 0 === s ? s : e.size && s || void 0, !i && re(e) && s >= 0 && (c.get = function (t, n) {
                return (t = C(this, t)) >= 0 && t < s ? e.get(t + r, n) : n
            }), c.__iterateUncached = function (t, n) {
                var o = this;
                if (0 === s) return 0;
                if (n) return this.cacheResult().__iterate(t, n);
                var a = 0, l = !0, c = 0;
                return e.__iterate(function (e, n) {
                    if (!l || !(l = a++ < r)) return c++, !1 !== t(e, i ? n : c - 1, o) && c !== s
                }), c
            }, c.__iteratorUncached = function (t, n) {
                if (0 !== s && n) return this.cacheResult().__iterator(t, n);
                var o = 0 !== s && e.__iterator(t, n), a = 0, l = 0;
                return new $(function () {
                    for (; a++ < r;) o.next();
                    if (++l > s) return {value: void 0, done: !0};
                    var e = o.next();
                    return i || t === j ? e : B(t, l - 1, t === D ? void 0 : e.value[1], e)
                })
            }, c
        }

        function Yt(e, t, n, i) {
            var o = en(e);
            return o.__iterateUncached = function (o, r) {
                var a = this;
                if (r) return this.cacheResult().__iterate(o, r);
                var s = !0, l = 0;
                return e.__iterate(function (e, r, c) {
                    if (!s || !(s = t.call(n, e, r, c))) return l++, o(e, i ? r : l - 1, a)
                }), l
            }, o.__iteratorUncached = function (o, r) {
                var a = this;
                if (r) return this.cacheResult().__iterator(o, r);
                var s = e.__iterator(L, r), l = !0, c = 0;
                return new $(function () {
                    var e, r, u;
                    do {
                        if ((e = s.next()).done) return i || o === j ? e : B(o, c++, o === D ? void 0 : e.value[1], e);
                        var d = e.value;
                        r = d[0], u = d[1], l && (l = t.call(n, u, r, a))
                    } while (l);
                    return o === L ? e : B(o, r, u, e)
                })
            }, o
        }

        function Xt(e, t, n) {
            var i = en(e);
            return i.__iterateUncached = function (i, o) {
                var r = 0, a = !1;
                return function e(l, c) {
                    var u = this;
                    l.__iterate(function (o, l) {
                        return (!t || c < t) && s(o) ? e(o, c + 1) : !1 === i(o, n ? l : r++, u) && (a = !0), !a
                    }, o)
                }(e, 0), r
            }, i.__iteratorUncached = function (i, o) {
                var r = e.__iterator(i, o), a = [], l = 0;
                return new $(function () {
                    for (; r;) {
                        var e = r.next();
                        if (!1 === e.done) {
                            var c = e.value;
                            if (i === L && (c = c[1]), t && !(a.length < t) || !s(c)) return n ? e : B(i, l++, c, e);
                            a.push(r), r = c.__iterator(i, o)
                        } else r = a.pop()
                    }
                    return {value: void 0, done: !0}
                })
            }, i
        }

        function Ht(e, t, n) {
            t || (t = nn);
            var i = l(e), o = 0, r = e.toSeq().map(function (t, i) {
                return [i, t, o++, n ? n(t, i, e) : t]
            }).toArray();
            return r.sort(function (e, n) {
                return t(e[3], n[3]) || e[2] - n[2]
            }).forEach(i ? function (e, t) {
                r[t].length = 2
            } : function (e, t) {
                r[t] = e[1]
            }), i ? V(r) : c(e) ? J(r) : K(r)
        }

        function qt(e, t, n) {
            if (t || (t = nn), n) {
                var i = e.toSeq().map(function (t, i) {
                    return [t, n(t, i, e)]
                }).reduce(function (e, n) {
                    return Vt(t, e[1], n[1]) ? n : e
                });
                return i && i[0]
            }
            return e.reduce(function (e, n) {
                return Vt(t, e, n) ? n : e
            })
        }

        function Vt(e, t, n) {
            var i = e(n, t);
            return 0 === i && n !== t && (void 0 === n || null === n || n != n) || i > 0
        }

        function Jt(e, t, i) {
            var o = en(e);
            return o.size = new te(i).map(function (e) {
                return e.size
            }).min(), o.__iterate = function (e, t) {
                for (var n, i = this.__iterator(j, t), o = 0; !(n = i.next()).done && !1 !== e(n.value, o++, this);) ;
                return o
            }, o.__iteratorUncached = function (e, o) {
                var r = i.map(function (e) {
                    return e = n(e), Y(o ? e.reverse() : e)
                }), a = 0, s = !1;
                return new $(function () {
                    var n;
                    return s || (n = r.map(function (e) {
                        return e.next()
                    }), s = n.some(function (e) {
                        return e.done
                    })), s ? {value: void 0, done: !0} : B(e, a++, t.apply(null, n.map(function (e) {
                        return e.value
                    })))
                })
            }, o
        }

        function Kt(e, t) {
            return re(e) ? t : e.constructor(t)
        }

        function Zt(e) {
            if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
        }

        function Qt(e) {
            return Re(e.size), T(e)
        }

        function Gt(e) {
            return l(e) ? i : c(e) ? o : r
        }

        function en(e) {
            return Object.create((l(e) ? V : c(e) ? J : K).prototype)
        }

        function tn() {
            return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : q.prototype.cacheResult.call(this)
        }

        function nn(e, t) {
            return e > t ? 1 : e < t ? -1 : 0
        }

        function on(e) {
            var t = Y(e);
            if (!t) {
                if (!H(e)) throw new TypeError("Expected iterable or array-like: " + e);
                t = Y(n(e))
            }
            return t
        }

        function rn(e, t) {
            var n, i = function (r) {
                if (r instanceof i) return r;
                if (!(this instanceof i)) return new i(r);
                if (!n) {
                    n = !0;
                    var a = Object.keys(e);
                    !function (e, t) {
                        try {
                            t.forEach(function (e, t) {
                                Object.defineProperty(e, t, {
                                    get: function () {
                                        return this.get(t)
                                    }, set: function (e) {
                                        ye(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e)
                                    }
                                })
                            }.bind(void 0, e))
                        } catch (e) {
                        }
                    }(o, a), o.size = a.length, o._name = t, o._keys = a, o._defaultValues = e
                }
                this._map = $e(r)
            }, o = i.prototype = Object.create(an);
            return o.constructor = i, i
        }

        t(Ot, $e), Ot.of = function () {
            return this(arguments)
        }, Ot.prototype.toString = function () {
            return this.__toString("OrderedMap {", "}")
        }, Ot.prototype.get = function (e, t) {
            var n = this._map.get(e);
            return void 0 !== n ? this._list.get(n)[1] : t
        }, Ot.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Dt()
        }, Ot.prototype.set = function (e, t) {
            return jt(this, e, t)
        }, Ot.prototype.remove = function (e) {
            return jt(this, e, b)
        }, Ot.prototype.wasAltered = function () {
            return this._map.wasAltered() || this._list.wasAltered()
        }, Ot.prototype.__iterate = function (e, t) {
            var n = this;
            return this._list.__iterate(function (t) {
                return t && e(t[1], t[0], n)
            }, t)
        }, Ot.prototype.__iterator = function (e, t) {
            return this._list.fromEntrySeq().__iterator(e, t)
        }, Ot.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e), n = this._list.__ensureOwner(e);
            return e ? Mt(t, n, e, this.__hash) : (this.__ownerID = e, this._map = t, this._list = n, this)
        }, Ot.isOrderedMap = It, Ot.prototype[m] = !0, Ot.prototype.delete = Ot.prototype.remove, t(Lt, V), Lt.prototype.get = function (e, t) {
            return this._iter.get(e, t)
        }, Lt.prototype.has = function (e) {
            return this._iter.has(e)
        }, Lt.prototype.valueSeq = function () {
            return this._iter.valueSeq()
        }, Lt.prototype.reverse = function () {
            var e = this, t = Wt(this, !0);
            return this._useKeys || (t.valueSeq = function () {
                return e._iter.toSeq().reverse()
            }), t
        }, Lt.prototype.map = function (e, t) {
            var n = this, i = Bt(this, e, t);
            return this._useKeys || (i.valueSeq = function () {
                return n._iter.toSeq().map(e, t)
            }), i
        }, Lt.prototype.__iterate = function (e, t) {
            var n, i = this;
            return this._iter.__iterate(this._useKeys ? function (t, n) {
                return e(t, n, i)
            } : (n = t ? Qt(this) : 0, function (o) {
                return e(o, t ? --n : n++, i)
            }), t)
        }, Lt.prototype.__iterator = function (e, t) {
            if (this._useKeys) return this._iter.__iterator(e, t);
            var n = this._iter.__iterator(j, t), i = t ? Qt(this) : 0;
            return new $(function () {
                var o = n.next();
                return o.done ? o : B(e, t ? --i : i++, o.value, o)
            })
        }, Lt.prototype[m] = !0, t(zt, J), zt.prototype.includes = function (e) {
            return this._iter.includes(e)
        }, zt.prototype.__iterate = function (e, t) {
            var n = this, i = 0;
            return this._iter.__iterate(function (t) {
                return e(t, i++, n)
            }, t)
        }, zt.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(j, t), i = 0;
            return new $(function () {
                var t = n.next();
                return t.done ? t : B(e, i++, t.value, t)
            })
        }, t(At, K), At.prototype.has = function (e) {
            return this._iter.includes(e)
        }, At.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                return e(t, t, n)
            }, t)
        }, At.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(j, t);
            return new $(function () {
                var t = n.next();
                return t.done ? t : B(e, t.value, t.value, t)
            })
        }, t(Rt, V), Rt.prototype.entrySeq = function () {
            return this._iter.toSeq()
        }, Rt.prototype.__iterate = function (e, t) {
            var n = this;
            return this._iter.__iterate(function (t) {
                if (t) {
                    Zt(t);
                    var i = s(t);
                    return e(i ? t.get(1) : t[1], i ? t.get(0) : t[0], n)
                }
            }, t)
        }, Rt.prototype.__iterator = function (e, t) {
            var n = this._iter.__iterator(j, t);
            return new $(function () {
                for (; ;) {
                    var t = n.next();
                    if (t.done) return t;
                    var i = t.value;
                    if (i) {
                        Zt(i);
                        var o = s(i);
                        return B(e, o ? i.get(0) : i[0], o ? i.get(1) : i[1], t)
                    }
                }
            })
        }, zt.prototype.cacheResult = Lt.prototype.cacheResult = At.prototype.cacheResult = Rt.prototype.cacheResult = tn, t(rn, we), rn.prototype.toString = function () {
            return this.__toString(ln(this) + " {", "}")
        }, rn.prototype.has = function (e) {
            return this._defaultValues.hasOwnProperty(e)
        }, rn.prototype.get = function (e, t) {
            if (!this.has(e)) return t;
            var n = this._defaultValues[e];
            return this._map ? this._map.get(e, n) : n
        }, rn.prototype.clear = function () {
            if (this.__ownerID) return this._map && this._map.clear(), this;
            var e = this.constructor;
            return e._empty || (e._empty = sn(this, Ge()))
        }, rn.prototype.set = function (e, t) {
            if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + ln(this));
            if (this._map && !this._map.has(e) && t === this._defaultValues[e]) return this;
            var n = this._map && this._map.set(e, t);
            return this.__ownerID || n === this._map ? this : sn(this, n)
        }, rn.prototype.remove = function (e) {
            if (!this.has(e)) return this;
            var t = this._map && this._map.remove(e);
            return this.__ownerID || t === this._map ? this : sn(this, t)
        }, rn.prototype.wasAltered = function () {
            return this._map.wasAltered()
        }, rn.prototype.__iterator = function (e, t) {
            var n = this;
            return i(this._defaultValues).map(function (e, t) {
                return n.get(t)
            }).__iterator(e, t)
        }, rn.prototype.__iterate = function (e, t) {
            var n = this;
            return i(this._defaultValues).map(function (e, t) {
                return n.get(t)
            }).__iterate(e, t)
        }, rn.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map && this._map.__ensureOwner(e);
            return e ? sn(this, t, e) : (this.__ownerID = e, this._map = t, this)
        };
        var an = rn.prototype;

        function sn(e, t, n) {
            var i = Object.create(Object.getPrototypeOf(e));
            return i._map = t, i.__ownerID = n, i
        }

        function ln(e) {
            return e._name || e.constructor.name || "Record"
        }

        function cn(e) {
            return null === e || void 0 === e ? vn() : un(e) && !d(e) ? e : vn().withMutations(function (t) {
                var n = r(e);
                Re(n.size), n.forEach(function (e) {
                    return t.add(e)
                })
            })
        }

        function un(e) {
            return !(!e || !e[fn])
        }

        an.delete = an.remove, an.deleteIn = an.removeIn = Ue.removeIn, an.merge = Ue.merge, an.mergeWith = Ue.mergeWith, an.mergeIn = Ue.mergeIn, an.mergeDeep = Ue.mergeDeep, an.mergeDeepWith = Ue.mergeDeepWith, an.mergeDeepIn = Ue.mergeDeepIn, an.setIn = Ue.setIn, an.update = Ue.update, an.updateIn = Ue.updateIn, an.withMutations = Ue.withMutations, an.asMutable = Ue.asMutable, an.asImmutable = Ue.asImmutable, t(cn, xe), cn.of = function () {
            return this(arguments)
        }, cn.fromKeys = function (e) {
            return this(i(e).keySeq())
        }, cn.prototype.toString = function () {
            return this.__toString("Set {", "}")
        }, cn.prototype.has = function (e) {
            return this._map.has(e)
        }, cn.prototype.add = function (e) {
            return hn(this, this._map.set(e, !0))
        }, cn.prototype.remove = function (e) {
            return hn(this, this._map.remove(e))
        }, cn.prototype.clear = function () {
            return hn(this, this._map.clear())
        }, cn.prototype.union = function () {
            var t = e.call(arguments, 0);
            return 0 === (t = t.filter(function (e) {
                return 0 !== e.size
            })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function (e) {
                for (var n = 0; n < t.length; n++) r(t[n]).forEach(function (t) {
                    return e.add(t)
                })
            }) : this.constructor(t[0])
        }, cn.prototype.intersect = function () {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function (e) {
                return r(e)
            });
            var n = this;
            return this.withMutations(function (e) {
                n.forEach(function (n) {
                    t.every(function (e) {
                        return e.includes(n)
                    }) || e.remove(n)
                })
            })
        }, cn.prototype.subtract = function () {
            var t = e.call(arguments, 0);
            if (0 === t.length) return this;
            t = t.map(function (e) {
                return r(e)
            });
            var n = this;
            return this.withMutations(function (e) {
                n.forEach(function (n) {
                    t.some(function (e) {
                        return e.includes(n)
                    }) && e.remove(n)
                })
            })
        }, cn.prototype.merge = function () {
            return this.union.apply(this, arguments)
        }, cn.prototype.mergeWith = function (t) {
            var n = e.call(arguments, 1);
            return this.union.apply(this, n)
        }, cn.prototype.sort = function (e) {
            return gn(Ht(this, e))
        }, cn.prototype.sortBy = function (e, t) {
            return gn(Ht(this, t, e))
        }, cn.prototype.wasAltered = function () {
            return this._map.wasAltered()
        }, cn.prototype.__iterate = function (e, t) {
            var n = this;
            return this._map.__iterate(function (t, i) {
                return e(i, i, n)
            }, t)
        }, cn.prototype.__iterator = function (e, t) {
            return this._map.map(function (e, t) {
                return t
            }).__iterator(e, t)
        }, cn.prototype.__ensureOwner = function (e) {
            if (e === this.__ownerID) return this;
            var t = this._map.__ensureOwner(e);
            return e ? this.__make(t, e) : (this.__ownerID = e, this._map = t, this)
        }, cn.isSet = un;
        var dn, fn = "@@__IMMUTABLE_SET__@@", pn = cn.prototype;

        function hn(e, t) {
            return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
        }

        function mn(e, t) {
            var n = Object.create(pn);
            return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
        }

        function vn() {
            return dn || (dn = mn(Ge()))
        }

        function gn(e) {
            return null === e || void 0 === e ? Sn() : yn(e) ? e : Sn().withMutations(function (t) {
                var n = r(e);
                Re(n.size), n.forEach(function (e) {
                    return t.add(e)
                })
            })
        }

        function yn(e) {
            return un(e) && d(e)
        }

        pn[fn] = !0, pn.delete = pn.remove, pn.mergeDeep = pn.merge, pn.mergeDeepWith = pn.mergeWith, pn.withMutations = Ue.withMutations, pn.asMutable = Ue.asMutable, pn.asImmutable = Ue.asImmutable, pn.__empty = vn, pn.__make = mn, t(gn, cn), gn.of = function () {
            return this(arguments)
        }, gn.fromKeys = function (e) {
            return this(i(e).keySeq())
        }, gn.prototype.toString = function () {
            return this.__toString("OrderedSet {", "}")
        }, gn.isOrderedSet = yn;
        var bn, _n = gn.prototype;

        function wn(e, t) {
            var n = Object.create(_n);
            return n.size = e ? e.size : 0, n._map = e, n.__ownerID = t, n
        }

        function Sn() {
            return bn || (bn = wn(Dt()))
        }

        function xn(e) {
            return null === e || void 0 === e ? Pn() : En(e) ? e : Pn().unshiftAll(e)
        }

        function En(e) {
            return !(!e || !e[Tn])
        }

        _n[m] = !0, _n.__empty = Sn, _n.__make = wn, t(xn, Se), xn.of = function () {
            return this(arguments)
        }, xn.prototype.toString = function () {
            return this.__toString("Stack [", "]")
        }, xn.prototype.get = function (e, t) {
            var n = this._head;
            for (e = C(this, e); n && e--;) n = n.next;
            return n ? n.value : t
        }, xn.prototype.peek = function () {
            return this._head && this._head.value
        }, xn.prototype.push = function () {
            if (0 === arguments.length) return this;
            for (var e = this.size + arguments.length, t = this._head, n = arguments.length - 1; n >= 0; n--) t = {
                value: arguments[n],
                next: t
            };
            return this.__ownerID ? (this.size = e, this._head = t, this.__hash = void 0, this.__altered = !0, this) : Nn(e, t)
        }, xn.prototype.pushAll = function (e) {
            if (0 === (e = o(e)).size) return this;
            Re(e.size);
            var t = this.size, n = this._head;
            return e.reverse().forEach(function (e) {
                t++, n = {value: e, next: n}
            }), this.__ownerID ? (this.size = t, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Nn(t, n)
        }, xn.prototype.pop = function () {
            return this.slice(1)
        }, xn.prototype.unshift = function () {
            return this.push.apply(this, arguments)
        }, xn.prototype.unshiftAll = function (e) {
            return this.pushAll(e)
        }, xn.prototype.shift = function () {
            return this.pop.apply(this, arguments)
        }, xn.prototype.clear = function () {
            return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Pn()
        }, xn.prototype.slice = function (e, t) {
            if (P(e, t, this.size)) return this;
            var n = O(e, this.size);
            if (I(t, this.size) !== this.size) return Se.prototype.slice.call(this, e, t);
            for (var i = this.size - n, o = this._head; n--;) o = o.next;
            return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : Nn(i, o)
        }, xn.prototype.__ensureOwner = function (e) {
            return e === this.__ownerID ? this : e ? Nn(this.size, this._head, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
        }, xn.prototype.__iterate = function (e, t) {
            if (t) return this.reverse().__iterate(e);
            for (var n = 0, i = this._head; i && !1 !== e(i.value, n++, this);) i = i.next;
            return n
        }, xn.prototype.__iterator = function (e, t) {
            if (t) return this.reverse().__iterator(e);
            var n = 0, i = this._head;
            return new $(function () {
                if (i) {
                    var t = i.value;
                    return i = i.next, B(e, n++, t)
                }
                return {value: void 0, done: !0}
            })
        }, xn.isStack = En;
        var kn, Tn = "@@__IMMUTABLE_STACK__@@", Cn = xn.prototype;

        function Nn(e, t, n, i) {
            var o = Object.create(Cn);
            return o.size = e, o._head = t, o.__ownerID = n, o.__hash = i, o.__altered = !1, o
        }

        function Pn() {
            return kn || (kn = Nn(0))
        }

        function On(e, t) {
            var n = function (n) {
                e.prototype[n] = t[n]
            };
            return Object.keys(t).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(n), e
        }

        Cn[Tn] = !0, Cn.withMutations = Ue.withMutations, Cn.asMutable = Ue.asMutable, Cn.asImmutable = Ue.asImmutable, Cn.wasAltered = Ue.wasAltered, n.Iterator = $, On(n, {
            toArray: function () {
                Re(this.size);
                var e = new Array(this.size || 0);
                return this.valueSeq().__iterate(function (t, n) {
                    e[n] = t
                }), e
            }, toIndexedSeq: function () {
                return new zt(this)
            }, toJS: function () {
                return this.toSeq().map(function (e) {
                    return e && "function" == typeof e.toJS ? e.toJS() : e
                }).__toJS()
            }, toJSON: function () {
                return this.toSeq().map(function (e) {
                    return e && "function" == typeof e.toJSON ? e.toJSON() : e
                }).__toJS()
            }, toKeyedSeq: function () {
                return new Lt(this, !0)
            }, toMap: function () {
                return $e(this.toKeyedSeq())
            }, toObject: function () {
                Re(this.size);
                var e = {};
                return this.__iterate(function (t, n) {
                    e[n] = t
                }), e
            }, toOrderedMap: function () {
                return Ot(this.toKeyedSeq())
            }, toOrderedSet: function () {
                return gn(l(this) ? this.valueSeq() : this)
            }, toSet: function () {
                return cn(l(this) ? this.valueSeq() : this)
            }, toSetSeq: function () {
                return new At(this)
            }, toSeq: function () {
                return c(this) ? this.toIndexedSeq() : l(this) ? this.toKeyedSeq() : this.toSetSeq()
            }, toStack: function () {
                return xn(l(this) ? this.valueSeq() : this)
            }, toList: function () {
                return pt(l(this) ? this.valueSeq() : this)
            }, toString: function () {
                return "[Iterable]"
            }, __toString: function (e, t) {
                return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
            }, concat: function () {
                return Kt(this, function (e, t) {
                    var n = l(e), o = [e].concat(t).map(function (e) {
                        return s(e) ? n && (e = i(e)) : e = n ? se(e) : le(Array.isArray(e) ? e : [e]), e
                    }).filter(function (e) {
                        return 0 !== e.size
                    });
                    if (0 === o.length) return e;
                    if (1 === o.length) {
                        var r = o[0];
                        if (r === e || n && l(r) || c(e) && c(r)) return r
                    }
                    var a = new te(o);
                    return n ? a = a.toKeyedSeq() : c(e) || (a = a.toSetSeq()), (a = a.flatten(!0)).size = o.reduce(function (e, t) {
                        if (void 0 !== e) {
                            var n = t.size;
                            if (void 0 !== n) return e + n
                        }
                    }, 0), a
                }(this, e.call(arguments, 0)))
            }, includes: function (e) {
                return this.some(function (t) {
                    return me(t, e)
                })
            }, entries: function () {
                return this.__iterator(L)
            }, every: function (e, t) {
                Re(this.size);
                var n = !0;
                return this.__iterate(function (i, o, r) {
                    if (!e.call(t, i, o, r)) return n = !1, !1
                }), n
            }, filter: function (e, t) {
                return Kt(this, Ft(this, e, t, !0))
            }, find: function (e, t, n) {
                var i = this.findEntry(e, t);
                return i ? i[1] : n
            }, forEach: function (e, t) {
                return Re(this.size), this.__iterate(t ? e.bind(t) : e)
            }, join: function (e) {
                Re(this.size), e = void 0 !== e ? "" + e : ",";
                var t = "", n = !0;
                return this.__iterate(function (i) {
                    n ? n = !1 : t += e, t += null !== i && void 0 !== i ? i.toString() : ""
                }), t
            }, keys: function () {
                return this.__iterator(D)
            }, map: function (e, t) {
                return Kt(this, Bt(this, e, t))
            }, reduce: function (e, t, n) {
                var i, o;
                return Re(this.size), arguments.length < 2 ? o = !0 : i = t, this.__iterate(function (t, r, a) {
                    o ? (o = !1, i = t) : i = e.call(n, i, t, r, a)
                }), i
            }, reduceRight: function (e, t, n) {
                var i = this.toKeyedSeq().reverse();
                return i.reduce.apply(i, arguments)
            }, reverse: function () {
                return Kt(this, Wt(this, !0))
            }, slice: function (e, t) {
                return Kt(this, Ut(this, e, t, !0))
            }, some: function (e, t) {
                return !this.every(Ln(e), t)
            }, sort: function (e) {
                return Kt(this, Ht(this, e))
            }, values: function () {
                return this.__iterator(j)
            }, butLast: function () {
                return this.slice(0, -1)
            }, isEmpty: function () {
                return void 0 !== this.size ? 0 === this.size : !this.some(function () {
                    return !0
                })
            }, count: function (e, t) {
                return T(e ? this.toSeq().filter(e, t) : this)
            }, countBy: function (e, t) {
                return function (e, t, n) {
                    var i = $e().asMutable();
                    return e.__iterate(function (o, r) {
                        i.update(t.call(n, o, r, e), 0, function (e) {
                            return e + 1
                        })
                    }), i.asImmutable()
                }(this, e, t)
            }, equals: function (e) {
                return ve(this, e)
            }, entrySeq: function () {
                var e = this;
                if (e._cache) return new te(e._cache);
                var t = e.toSeq().map(jn).toIndexedSeq();
                return t.fromEntrySeq = function () {
                    return e.toSeq()
                }, t
            }, filterNot: function (e, t) {
                return this.filter(Ln(e), t)
            }, findEntry: function (e, t, n) {
                var i = n;
                return this.__iterate(function (n, o, r) {
                    if (e.call(t, n, o, r)) return i = [o, n], !1
                }), i
            }, findKey: function (e, t) {
                var n = this.findEntry(e, t);
                return n && n[0]
            }, findLast: function (e, t, n) {
                return this.toKeyedSeq().reverse().find(e, t, n)
            }, findLastEntry: function (e, t, n) {
                return this.toKeyedSeq().reverse().findEntry(e, t, n)
            }, findLastKey: function (e, t) {
                return this.toKeyedSeq().reverse().findKey(e, t)
            }, first: function () {
                return this.find(N)
            }, flatMap: function (e, t) {
                return Kt(this, function (e, t, n) {
                    var i = Gt(e);
                    return e.toSeq().map(function (o, r) {
                        return i(t.call(n, o, r, e))
                    }).flatten(!0)
                }(this, e, t))
            }, flatten: function (e) {
                return Kt(this, Xt(this, e, !0))
            }, fromEntrySeq: function () {
                return new Rt(this)
            }, get: function (e, t) {
                return this.find(function (t, n) {
                    return me(n, e)
                }, void 0, t)
            }, getIn: function (e, t) {
                for (var n, i = this, o = on(e); !(n = o.next()).done;) {
                    var r = n.value;
                    if ((i = i && i.get ? i.get(r, b) : b) === b) return t
                }
                return i
            }, groupBy: function (e, t) {
                return function (e, t, n) {
                    var i = l(e), o = (d(e) ? Ot() : $e()).asMutable();
                    e.__iterate(function (r, a) {
                        o.update(t.call(n, r, a, e), function (e) {
                            return (e = e || []).push(i ? [a, r] : r), e
                        })
                    });
                    var r = Gt(e);
                    return o.map(function (t) {
                        return Kt(e, r(t))
                    })
                }(this, e, t)
            }, has: function (e) {
                return this.get(e, b) !== b
            }, hasIn: function (e) {
                return this.getIn(e, b) !== b
            }, isSubset: function (e) {
                return e = "function" == typeof e.includes ? e : n(e), this.every(function (t) {
                    return e.includes(t)
                })
            }, isSuperset: function (e) {
                return (e = "function" == typeof e.isSubset ? e : n(e)).isSubset(this)
            }, keyOf: function (e) {
                return this.findKey(function (t) {
                    return me(t, e)
                })
            }, keySeq: function () {
                return this.toSeq().map(Dn).toIndexedSeq()
            }, last: function () {
                return this.toSeq().reverse().first()
            }, lastKeyOf: function (e) {
                return this.toKeyedSeq().reverse().keyOf(e)
            }, max: function (e) {
                return qt(this, e)
            }, maxBy: function (e, t) {
                return qt(this, t, e)
            }, min: function (e) {
                return qt(this, e ? zn(e) : $n)
            }, minBy: function (e, t) {
                return qt(this, t ? zn(t) : $n, e)
            }, rest: function () {
                return this.slice(1)
            }, skip: function (e) {
                return this.slice(Math.max(0, e))
            }, skipLast: function (e) {
                return Kt(this, this.toSeq().reverse().skip(e).reverse())
            }, skipWhile: function (e, t) {
                return Kt(this, Yt(this, e, t, !0))
            }, skipUntil: function (e, t) {
                return this.skipWhile(Ln(e), t)
            }, sortBy: function (e, t) {
                return Kt(this, Ht(this, t, e))
            }, take: function (e) {
                return this.slice(0, Math.max(0, e))
            }, takeLast: function (e) {
                return Kt(this, this.toSeq().reverse().take(e).reverse())
            }, takeWhile: function (e, t) {
                return Kt(this, function (e, t, n) {
                    var i = en(e);
                    return i.__iterateUncached = function (i, o) {
                        var r = this;
                        if (o) return this.cacheResult().__iterate(i, o);
                        var a = 0;
                        return e.__iterate(function (e, o, s) {
                            return t.call(n, e, o, s) && ++a && i(e, o, r)
                        }), a
                    }, i.__iteratorUncached = function (i, o) {
                        var r = this;
                        if (o) return this.cacheResult().__iterator(i, o);
                        var a = e.__iterator(L, o), s = !0;
                        return new $(function () {
                            if (!s) return {value: void 0, done: !0};
                            var e = a.next();
                            if (e.done) return e;
                            var o = e.value, l = o[0], c = o[1];
                            return t.call(n, c, l, r) ? i === L ? e : B(i, l, c, e) : (s = !1, {
                                value: void 0,
                                done: !0
                            })
                        })
                    }, i
                }(this, e, t))
            }, takeUntil: function (e, t) {
                return this.takeWhile(Ln(e), t)
            }, valueSeq: function () {
                return this.toIndexedSeq()
            }, hashCode: function () {
                return this.__hash || (this.__hash = function (e) {
                    if (e.size === 1 / 0) return 0;
                    var t = d(e), n = l(e), i = t ? 1 : 0;
                    return function (e, t) {
                        return t = Ee(t, 3432918353), t = Ee(t << 15 | t >>> -15, 461845907), t = Ee(t << 13 | t >>> -13, 5), t = Ee((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507), t = ke((t = Ee(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
                    }(e.__iterate(n ? t ? function (e, t) {
                        i = 31 * i + Bn(Te(e), Te(t)) | 0
                    } : function (e, t) {
                        i = i + Bn(Te(e), Te(t)) | 0
                    } : t ? function (e) {
                        i = 31 * i + Te(e) | 0
                    } : function (e) {
                        i = i + Te(e) | 0
                    }), i)
                }(this))
            }
        });
        var In = n.prototype;
        In[f] = !0, In[R] = In.values, In.__toJS = In.toArray, In.__toStringMapper = An, In.inspect = In.toSource = function () {
            return this.toString()
        }, In.chain = In.flatMap, In.contains = In.includes, On(i, {
            flip: function () {
                return Kt(this, $t(this))
            }, mapEntries: function (e, t) {
                var n = this, i = 0;
                return Kt(this, this.toSeq().map(function (o, r) {
                    return e.call(t, [r, o], i++, n)
                }).fromEntrySeq())
            }, mapKeys: function (e, t) {
                var n = this;
                return Kt(this, this.toSeq().flip().map(function (i, o) {
                    return e.call(t, i, o, n)
                }).flip())
            }
        });
        var Mn = i.prototype;

        function Dn(e, t) {
            return t
        }

        function jn(e, t) {
            return [t, e]
        }

        function Ln(e) {
            return function () {
                return !e.apply(this, arguments)
            }
        }

        function zn(e) {
            return function () {
                return -e.apply(this, arguments)
            }
        }

        function An(e) {
            return "string" == typeof e ? JSON.stringify(e) : String(e)
        }

        function Rn() {
            return k(arguments)
        }

        function $n(e, t) {
            return e < t ? 1 : e > t ? -1 : 0
        }

        function Bn(e, t) {
            return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
        }

        return Mn[p] = !0, Mn[R] = In.entries, Mn.__toJS = In.toObject, Mn.__toStringMapper = function (e, t) {
            return JSON.stringify(t) + ": " + An(e)
        }, On(o, {
            toKeyedSeq: function () {
                return new Lt(this, !1)
            }, filter: function (e, t) {
                return Kt(this, Ft(this, e, t, !1))
            }, findIndex: function (e, t) {
                var n = this.findEntry(e, t);
                return n ? n[0] : -1
            }, indexOf: function (e) {
                var t = this.keyOf(e);
                return void 0 === t ? -1 : t
            }, lastIndexOf: function (e) {
                var t = this.lastKeyOf(e);
                return void 0 === t ? -1 : t
            }, reverse: function () {
                return Kt(this, Wt(this, !1))
            }, slice: function (e, t) {
                return Kt(this, Ut(this, e, t, !1))
            }, splice: function (e, t) {
                var n = arguments.length;
                if (t = Math.max(0 | t, 0), 0 === n || 2 === n && !t) return this;
                e = O(e, e < 0 ? this.count() : this.size);
                var i = this.slice(0, e);
                return Kt(this, 1 === n ? i : i.concat(k(arguments, 2), this.slice(e + t)))
            }, findLastIndex: function (e, t) {
                var n = this.findLastEntry(e, t);
                return n ? n[0] : -1
            }, first: function () {
                return this.get(0)
            }, flatten: function (e) {
                return Kt(this, Xt(this, e, !1))
            }, get: function (e, t) {
                return (e = C(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find(function (t, n) {
                    return n === e
                }, void 0, t)
            }, has: function (e) {
                return (e = C(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
            }, interpose: function (e) {
                return Kt(this, function (e, t) {
                    var n = en(e);
                    return n.size = e.size && 2 * e.size - 1, n.__iterateUncached = function (n, i) {
                        var o = this, r = 0;
                        return e.__iterate(function (e, i) {
                            return (!r || !1 !== n(t, r++, o)) && !1 !== n(e, r++, o)
                        }, i), r
                    }, n.__iteratorUncached = function (n, i) {
                        var o, r = e.__iterator(j, i), a = 0;
                        return new $(function () {
                            return (!o || a % 2) && (o = r.next()).done ? o : a % 2 ? B(n, a++, t) : B(n, a++, o.value, o)
                        })
                    }, n
                }(this, e))
            }, interleave: function () {
                var e = [this].concat(k(arguments)), t = Jt(this.toSeq(), J.of, e), n = t.flatten(!0);
                return t.size && (n.size = t.size * e.length), Kt(this, n)
            }, keySeq: function () {
                return be(0, this.size)
            }, last: function () {
                return this.get(-1)
            }, skipWhile: function (e, t) {
                return Kt(this, Yt(this, e, t, !1))
            }, zip: function () {
                return Kt(this, Jt(this, Rn, [this].concat(k(arguments))))
            }, zipWith: function (e) {
                var t = k(arguments);
                return t[0] = this, Kt(this, Jt(this, e, t))
            }
        }), o.prototype[h] = !0, o.prototype[m] = !0, On(r, {
            get: function (e, t) {
                return this.has(e) ? e : t
            }, includes: function (e) {
                return this.has(e)
            }, keySeq: function () {
                return this.valueSeq()
            }
        }), r.prototype.has = In.includes, r.prototype.contains = r.prototype.includes, On(V, i.prototype), On(J, o.prototype), On(K, r.prototype), On(we, i.prototype), On(Se, o.prototype), On(xe, r.prototype), {
            Iterable: n,
            Seq: q,
            Collection: _e,
            Map: $e,
            OrderedMap: Ot,
            List: pt,
            Stack: xn,
            Set: cn,
            OrderedSet: gn,
            Record: rn,
            Range: be,
            Repeat: ge,
            is: me,
            fromJS: fe
        }
    }, "object" === a(t) && void 0 !== e ? e.exports = r() : void 0 === (o = "function" == typeof (i = r) ? i.call(t, n, t, e) : i) || (e.exports = o)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
     * iScroll v4.2 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
     * Released under MIT license, http://cubiq.org/license
     */
    /*!
     * iScroll v4.2 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org
     * Released under MIT license, http://cubiq.org/license
     */
    !function (e, n) {
        var o = Math, r = n.createElement("div").style, a = function () {
                for (var e = "t,webkitT,MozT,msT,OT".split(","), t = 0, n = e.length; t < n; t++) if (e[t] + "ransform" in r) return e[t].substr(0, e[t].length - 1);
                return !1
            }(), s = a ? "-" + a.toLowerCase() + "-" : "", l = M("transform"), c = M("transitionProperty"),
            u = M("transitionDuration"), d = M("transformOrigin"), f = M("transitionTimingFunction"),
            p = M("transitionDelay"), h = /android/gi.test(navigator.appVersion),
            m = /iphone|ipad/gi.test(navigator.appVersion), v = /hp-tablet/gi.test(navigator.appVersion),
            g = M("perspective") in r, y = "ontouchstart" in e && !v, b = !!a, _ = M("transition") in r,
            w = "onorientationchange" in e ? "orientationchange" : "resize", S = y ? "touchstart" : "mousedown",
            x = y ? "touchmove" : "mousemove", E = y ? "touchend" : "mouseup", k = y ? "touchcancel" : "mouseup",
            T = "Moz" == a ? "DOMMouseScroll" : "mousewheel", C = function () {
                if (!1 === a) return !1;
                return {
                    "": "transitionend",
                    webkit: "webkitTransitionEnd",
                    Moz: "transitionend",
                    O: "oTransitionEnd",
                    ms: "MSTransitionEnd"
                }[a]
            }(),
            N = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                return setTimeout(e, 1)
            },
            P = e.cancelRequestAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout,
            O = g ? " translateZ(0)" : "", I = function (t, o) {
                var r, a = this;
                for (r in a.wrapper = "object" == (void 0 === t ? "undefined" : i(t)) ? t : n.getElementById(t), a.wrapper.style.overflow = "hidden", a.scroller = a.wrapper.children[0], a.options = {
                    hScroll: !0,
                    vScroll: !0,
                    x: 0,
                    y: 0,
                    bounce: !0,
                    bounceLock: !1,
                    momentum: !0,
                    lockDirection: !0,
                    useTransform: !0,
                    useTransition: !1,
                    topOffset: 0,
                    checkDOMChanges: !1,
                    handleClick: !0,
                    hScrollbar: !0,
                    vScrollbar: !0,
                    fixedScrollbar: h,
                    hideScrollbar: m,
                    fadeScrollbar: m && g,
                    scrollbarClass: "",
                    zoom: !1,
                    zoomMin: 1,
                    zoomMax: 4,
                    doubleTapZoom: 2,
                    wheelAction: "scroll",
                    snap: !1,
                    snapThreshold: 1,
                    onRefresh: null,
                    onBeforeScrollStart: function (e) {
                        e.preventDefault()
                    },
                    onScrollStart: null,
                    onBeforeScrollMove: null,
                    onScrollMove: null,
                    onBeforeScrollEnd: null,
                    onScrollEnd: null,
                    onTouchEnd: null,
                    onDestroy: null,
                    onZoomStart: null,
                    onZoom: null,
                    onZoomEnd: null
                }, o) a.options[r] = o[r];
                a.x = a.options.x, a.y = a.options.y, a.options.useTransform = b && a.options.useTransform, a.options.hScrollbar = a.options.hScroll && a.options.hScrollbar, a.options.vScrollbar = a.options.vScroll && a.options.vScrollbar, a.options.zoom = a.options.useTransform && a.options.zoom, a.options.useTransition = _ && a.options.useTransition, a.options.zoom && h && (O = ""), a.scroller.style[c] = a.options.useTransform ? s + "transform" : "top left", a.scroller.style[u] = "0", a.scroller.style[d] = "0 0", a.options.useTransition && (a.scroller.style[f] = "cubic-bezier(0.33,0.66,0.66,1)"), a.options.useTransform ? a.scroller.style[l] = "translate(" + a.x + "px," + a.y + "px)" + O : a.scroller.style.cssText += ";position:absolute;top:" + a.y + "px;left:" + a.x + "px", a.options.useTransition && (a.options.fixedScrollbar = !0), a.refresh(), a._bind(w, e), a._bind(S), y || "none" != a.options.wheelAction && a._bind(T), a.options.checkDOMChanges && (a.checkDOMTime = setInterval(function () {
                    a._checkDOMChanges()
                }, 500))
            };

        function M(e) {
            return "" === a ? e : (e = e.charAt(0).toUpperCase() + e.substr(1), a + e)
        }

        I.prototype = {
            enabled: !0,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            currPageX: 0,
            currPageY: 0,
            pagesX: [],
            pagesY: [],
            aniTime: null,
            wheelZoomCount: 0,
            handleEvent: function (e) {
                switch (e.type) {
                    case S:
                        if (!y && 0 !== e.button) return;
                        this._start(e);
                        break;
                    case x:
                        this._move(e);
                        break;
                    case E:
                    case k:
                        this._end(e);
                        break;
                    case w:
                        this._resize();
                        break;
                    case T:
                        this._wheel(e);
                        break;
                    case C:
                        this._transitionEnd(e)
                }
            },
            _checkDOMChanges: function () {
                this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
            },
            _scrollbar: function (e) {
                var t;
                this[e + "Scrollbar"] ? (this[e + "ScrollbarWrapper"] || (t = n.createElement("div"), this.options.scrollbarClass ? t.className = this.options.scrollbarClass + e.toUpperCase() : t.style.cssText = "position:absolute;z-index:100;" + ("h" == e ? "height:7px;bottom:1px;left:2px;right:" + (this.vScrollbar ? "7" : "2") + "px" : "width:7px;bottom:" + (this.hScrollbar ? "7" : "2") + "px;top:2px;right:1px"), t.style.cssText += ";pointer-events:none;" + s + "transition-property:opacity;" + s + "transition-duration:" + (this.options.fadeScrollbar ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.hideScrollbar ? "0" : "1"), this.wrapper.appendChild(t), this[e + "ScrollbarWrapper"] = t, t = n.createElement("div"), this.options.scrollbarClass || (t.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + s + "background-clip:padding-box;" + s + "box-sizing:border-box;" + ("h" == e ? "height:100%" : "width:100%") + ";" + s + "border-radius:3px;border-radius:3px"), t.style.cssText += ";pointer-events:none;" + s + "transition-property:" + s + "transform;" + s + "transition-timing-function:linear(0.22,0.44,0.44,0.8);" + s + "transition-duration:0;" + s + "transform: translate(0,0)" + O, this.options.useTransition && (t.style.cssText += ";" + s + "transition-timing-function:cubic-bezier(0.22,0.44,0.44,0.8)"), this[e + "ScrollbarWrapper"].appendChild(t), this[e + "ScrollbarIndicator"] = t), "h" == e ? (this.hScrollbarSize = this.hScrollbarWrapper.clientWidth, this.hScrollbarIndicatorSize = o.max(o.round(this.hScrollbarSize * this.hScrollbarSize / this.scrollerW), 8), this.hScrollbarIndicator.style.width = this.hScrollbarIndicatorSize + "px", this.hScrollbarMaxScroll = this.hScrollbarSize - this.hScrollbarIndicatorSize, this.hScrollbarProp = this.hScrollbarMaxScroll / this.maxScrollX) : (this.vScrollbarSize = this.vScrollbarWrapper.clientHeight, this.vScrollbarIndicatorSize = o.max(o.round(this.vScrollbarSize * this.vScrollbarSize / this.scrollerH), 8), this.vScrollbarIndicator.style.height = this.vScrollbarIndicatorSize + "px", this.vScrollbarMaxScroll = this.vScrollbarSize - this.vScrollbarIndicatorSize, this.vScrollbarProp = this.vScrollbarMaxScroll / this.maxScrollY), this._scrollbarPos(e, !0)) : this[e + "ScrollbarWrapper"] && (b && (this[e + "ScrollbarIndicator"].style[l] = ""), this[e + "ScrollbarWrapper"].parentNode.removeChild(this[e + "ScrollbarWrapper"]), this[e + "ScrollbarWrapper"] = null, this[e + "ScrollbarIndicator"] = null)
            },
            _resize: function () {
                var e = this;
                setTimeout(function () {
                    e.refresh()
                }, h ? 200 : 0)
            },
            _pos: function (e, t) {
                this.zoomed || (e = this.hScroll ? e : 0, t = this.vScroll ? t : 0, this.options.useTransform ? this.scroller.style[l] = "translate(" + e + "px," + t + "px) scale(" + this.scale + ")" + O : (e = o.round(e), t = o.round(t), this.scroller.style.left = e + "px", this.scroller.style.top = t + "px"), this.x = e, this.y = t, this._scrollbarPos("h"), this._scrollbarPos("v"))
            },
            _scrollbarPos: function (e, t) {
                var n, i = "h" == e ? this.x : this.y;
                this[e + "Scrollbar"] && ((i = this[e + "ScrollbarProp"] * i) < 0 ? (this.options.fixedScrollbar || ((n = this[e + "ScrollbarIndicatorSize"] + o.round(3 * i)) < 8 && (n = 8), this[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = n + "px"), i = 0) : i > this[e + "ScrollbarMaxScroll"] && (this.options.fixedScrollbar ? i = this[e + "ScrollbarMaxScroll"] : ((n = this[e + "ScrollbarIndicatorSize"] - o.round(3 * (i - this[e + "ScrollbarMaxScroll"]))) < 8 && (n = 8), this[e + "ScrollbarIndicator"].style["h" == e ? "width" : "height"] = n + "px", i = this[e + "ScrollbarMaxScroll"] + (this[e + "ScrollbarIndicatorSize"] - n))), this[e + "ScrollbarWrapper"].style[p] = "0", this[e + "ScrollbarWrapper"].style.opacity = t && this.options.hideScrollbar ? "0" : "1", this[e + "ScrollbarIndicator"].style[l] = "translate(" + ("h" == e ? i + "px,0)" : "0," + i + "px)") + O)
            },
            _start: function (t) {
                var n, i, r, a, s, c = y ? t.touches[0] : t;
                this.enabled && (this.options.onBeforeScrollStart && this.options.onBeforeScrollStart.call(this, t), (this.options.useTransition || this.options.zoom) && this._transitionTime(0), this.moved = !1, this.animating = !1, this.zoomed = !1, this.distX = 0, this.distY = 0, this.absDistX = 0, this.absDistY = 0, this.dirX = 0, this.dirY = 0, this.options.zoom && y && t.touches.length > 1 && (a = o.abs(t.touches[0].pageX - t.touches[1].pageX), s = o.abs(t.touches[0].pageY - t.touches[1].pageY), this.touchesDistStart = o.sqrt(a * a + s * s), this.originX = o.abs(t.touches[0].pageX + t.touches[1].pageX - 2 * this.wrapperOffsetLeft) / 2 - this.x, this.originY = o.abs(t.touches[0].pageY + t.touches[1].pageY - 2 * this.wrapperOffsetTop) / 2 - this.y, this.options.onZoomStart && this.options.onZoomStart.call(this, t)), this.options.momentum && (this.options.useTransform ? (i = 1 * (n = getComputedStyle(this.scroller, null)[l].replace(/[^0-9\-.,]/g, "").split(","))[4], r = 1 * n[5]) : (i = 1 * getComputedStyle(this.scroller, null).left.replace(/[^0-9-]/g, ""), r = 1 * getComputedStyle(this.scroller, null).top.replace(/[^0-9-]/g, "")), i == this.x && r == this.y || (this.options.useTransition ? this._unbind(C) : P(this.aniTime), this.steps = [], this._pos(i, r))), this.absStartX = this.x, this.absStartY = this.y, this.startX = this.x, this.startY = this.y, this.pointX = c.pageX, this.pointY = c.pageY, this.startTime = t.timeStamp || Date.now(), this.options.onScrollStart && this.options.onScrollStart.call(this, t), this._bind(x, e), this._bind(E, e), this._bind(k, e))
            },
            _move: function (e) {
                var t, n, i, r = y ? e.touches[0] : e, a = r.pageX - this.pointX, s = r.pageY - this.pointY,
                    c = this.x + a, u = this.y + s, d = e.timeStamp || Date.now();
                if (this.options.onBeforeScrollMove && this.options.onBeforeScrollMove.call(this, e), this.options.zoom && y && e.touches.length > 1) return t = o.abs(e.touches[0].pageX - e.touches[1].pageX), n = o.abs(e.touches[0].pageY - e.touches[1].pageY), this.touchesDist = o.sqrt(t * t + n * n), this.zoomed = !0, (i = 1 / this.touchesDistStart * this.touchesDist * this.scale) < this.options.zoomMin ? i = .5 * this.options.zoomMin * Math.pow(2, i / this.options.zoomMin) : i > this.options.zoomMax && (i = 2 * this.options.zoomMax * Math.pow(.5, this.options.zoomMax / i)), this.lastScale = i / this.scale, c = this.originX - this.originX * this.lastScale + this.x, u = this.originY - this.originY * this.lastScale + this.y, this.scroller.style[l] = "translate(" + c + "px," + u + "px) scale(" + i + ")" + O, void (this.options.onZoom && this.options.onZoom.call(this, e));
                this.pointX = r.pageX, this.pointY = r.pageY, (c > 0 || c < this.maxScrollX) && (c = this.options.bounce ? this.x + a / 2 : c >= 0 || this.maxScrollX >= 0 ? 0 : this.maxScrollX), (u > this.minScrollY || u < this.maxScrollY) && (u = this.options.bounce ? this.y + s / 2 : u >= this.minScrollY || this.maxScrollY >= 0 ? this.minScrollY : this.maxScrollY), this.distX += a, this.distY += s, this.absDistX = o.abs(this.distX), this.absDistY = o.abs(this.distY), this.absDistX < 6 && this.absDistY < 6 || (this.options.lockDirection && (this.absDistX > this.absDistY + 5 ? (u = this.y, s = 0) : this.absDistY > this.absDistX + 5 && (c = this.x, a = 0)), this.moved = !0, this._pos(c, u), this.dirX = a > 0 ? -1 : a < 0 ? 1 : 0, this.dirY = s > 0 ? -1 : s < 0 ? 1 : 0, d - this.startTime > 300 && (this.startTime = d, this.startX = this.x, this.startY = this.y), this.options.onScrollMove && this.options.onScrollMove.call(this, e))
            },
            _end: function (t) {
                if (!y || 0 === t.touches.length) {
                    var i, r, a, s, c, d, f, p = this, h = y ? t.changedTouches[0] : t, m = {dist: 0, time: 0},
                        v = {dist: 0, time: 0}, g = (t.timeStamp || Date.now()) - p.startTime, b = p.x, _ = p.y;
                    if (p._unbind(x, e), p._unbind(E, e), p._unbind(k, e), p.options.onBeforeScrollEnd && p.options.onBeforeScrollEnd.call(p, t), p.zoomed) return f = p.scale * p.lastScale, f = Math.max(p.options.zoomMin, f), f = Math.min(p.options.zoomMax, f), p.lastScale = f / p.scale, p.scale = f, p.x = p.originX - p.originX * p.lastScale + p.x, p.y = p.originY - p.originY * p.lastScale + p.y, p.scroller.style[u] = "200ms", p.scroller.style[l] = "translate(" + p.x + "px," + p.y + "px) scale(" + p.scale + ")" + O, p.zoomed = !1, p.refresh(), void (p.options.onZoomEnd && p.options.onZoomEnd.call(p, t));
                    if (!p.moved) return y && (p.doubleTapTimer && p.options.zoom ? (clearTimeout(p.doubleTapTimer), p.doubleTapTimer = null, p.options.onZoomStart && p.options.onZoomStart.call(p, t), p.zoom(p.pointX, p.pointY, 1 == p.scale ? p.options.doubleTapZoom : 1), p.options.onZoomEnd && setTimeout(function () {
                        p.options.onZoomEnd.call(p, t)
                    }, 200)) : this.options.handleClick && (p.doubleTapTimer = setTimeout(function () {
                        for (p.doubleTapTimer = null, i = h.target; 1 != i.nodeType;) i = i.parentNode;
                        "SELECT" != i.tagName && "INPUT" != i.tagName && "TEXTAREA" != i.tagName && ((r = n.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, t.view, 1, h.screenX, h.screenY, h.clientX, h.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), r._fake = !0, i.dispatchEvent(r))
                    }, p.options.zoom ? 250 : 0))), p._resetPos(400), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, t));
                    if (g < 300 && p.options.momentum && (m = b ? p._momentum(b - p.startX, g, -p.x, p.scrollerW - p.wrapperW + p.x, p.options.bounce ? p.wrapperW : 0) : m, v = _ ? p._momentum(_ - p.startY, g, -p.y, p.maxScrollY < 0 ? p.scrollerH - p.wrapperH + p.y - p.minScrollY : 0, p.options.bounce ? p.wrapperH : 0) : v, b = p.x + m.dist, _ = p.y + v.dist, (p.x > 0 && b > 0 || p.x < p.maxScrollX && b < p.maxScrollX) && (m = {
                        dist: 0,
                        time: 0
                    }), (p.y > p.minScrollY && _ > p.minScrollY || p.y < p.maxScrollY && _ < p.maxScrollY) && (v = {
                        dist: 0,
                        time: 0
                    })), m.dist || v.dist) return c = o.max(o.max(m.time, v.time), 10), p.options.snap && (a = b - p.absStartX, s = _ - p.absStartY, o.abs(a) < p.options.snapThreshold && o.abs(s) < p.options.snapThreshold ? p.scrollTo(p.absStartX, p.absStartY, 200) : (b = (d = p._snap(b, _)).x, _ = d.y, c = o.max(d.time, c))), p.scrollTo(o.round(b), o.round(_), c), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, t));
                    if (p.options.snap) return a = b - p.absStartX, s = _ - p.absStartY, o.abs(a) < p.options.snapThreshold && o.abs(s) < p.options.snapThreshold ? p.scrollTo(p.absStartX, p.absStartY, 200) : (d = p._snap(p.x, p.y)).x == p.x && d.y == p.y || p.scrollTo(d.x, d.y, d.time), void (p.options.onTouchEnd && p.options.onTouchEnd.call(p, t));
                    p._resetPos(200), p.options.onTouchEnd && p.options.onTouchEnd.call(p, t)
                }
            },
            _resetPos: function (e) {
                var t = this.x >= 0 ? 0 : this.x < this.maxScrollX ? this.maxScrollX : this.x,
                    n = this.y >= this.minScrollY || this.maxScrollY > 0 ? this.minScrollY : this.y < this.maxScrollY ? this.maxScrollY : this.y;
                if (t == this.x && n == this.y) return this.moved && (this.moved = !1, this.options.onScrollEnd && this.options.onScrollEnd.call(this)), this.hScrollbar && this.options.hideScrollbar && ("webkit" == a && (this.hScrollbarWrapper.style[p] = "300ms"), this.hScrollbarWrapper.style.opacity = "0"), void (this.vScrollbar && this.options.hideScrollbar && ("webkit" == a && (this.vScrollbarWrapper.style[p] = "300ms"), this.vScrollbarWrapper.style.opacity = "0"));
                this.scrollTo(t, n, e || 0)
            },
            _wheel: function (e) {
                var t, n, i, o, r, a = this;
                if ("wheelDeltaX" in e) t = e.wheelDeltaX / 12, n = e.wheelDeltaY / 12; else if ("wheelDelta" in e) t = n = e.wheelDelta / 12; else {
                    if (!("detail" in e)) return;
                    t = n = 3 * -e.detail
                }
                if ("zoom" == a.options.wheelAction) return (r = a.scale * Math.pow(2, 1 / 3 * (n ? n / Math.abs(n) : 0))) < a.options.zoomMin && (r = a.options.zoomMin), r > a.options.zoomMax && (r = a.options.zoomMax), void (r != a.scale && (!a.wheelZoomCount && a.options.onZoomStart && a.options.onZoomStart.call(a, e), a.wheelZoomCount++, a.zoom(e.pageX, e.pageY, r, 400), setTimeout(function () {
                    a.wheelZoomCount--, !a.wheelZoomCount && a.options.onZoomEnd && a.options.onZoomEnd.call(a, e)
                }, 400)));
                i = a.x + t, o = a.y + n, i > 0 ? i = 0 : i < a.maxScrollX && (i = a.maxScrollX), o > a.minScrollY ? o = a.minScrollY : o < a.maxScrollY && (o = a.maxScrollY), a.maxScrollY < 0 && a.scrollTo(i, o, 0)
            },
            _transitionEnd: function (e) {
                e.target == this.scroller && (this._unbind(C), this._startAni())
            },
            _startAni: function () {
                var e, t, n, i = this, r = i.x, a = i.y, s = Date.now();
                if (!i.animating) if (i.steps.length) {
                    if ((e = i.steps.shift()).x == r && e.y == a && (e.time = 0), i.animating = !0, i.moved = !0, i.options.useTransition) return i._transitionTime(e.time), i._pos(e.x, e.y), i.animating = !1, void (e.time ? i._bind(C) : i._resetPos(0));
                    (n = function () {
                        var l, c, u = Date.now();
                        if (u >= s + e.time) return i._pos(e.x, e.y), i.animating = !1, i.options.onAnimationEnd && i.options.onAnimationEnd.call(i), void i._startAni();
                        u = (u - s) / e.time - 1, t = o.sqrt(1 - u * u), l = (e.x - r) * t + r, c = (e.y - a) * t + a, i._pos(l, c), i.animating && (i.aniTime = N(n))
                    })()
                } else i._resetPos(400)
            },
            _transitionTime: function (e) {
                e += "ms", this.scroller.style[u] = e, this.hScrollbar && (this.hScrollbarIndicator.style[u] = e), this.vScrollbar && (this.vScrollbarIndicator.style[u] = e)
            },
            _momentum: function (e, t, n, i, r) {
                var a, s = o.abs(e) / t, l = s * s / .0012;
                return e > 0 && l > n ? (s = s * (n += r / (6 / (l / s * 6e-4))) / l, l = n) : e < 0 && l > i && (s = s * (i += r / (6 / (l / s * 6e-4))) / l, l = i), a = s / 6e-4, {
                    dist: l *= e < 0 ? -1 : 1,
                    time: o.round(a)
                }
            },
            _offset: function (e) {
                for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, n -= e.offsetTop;
                return e != this.wrapper && (t *= this.scale, n *= this.scale), {left: t, top: n}
            },
            _snap: function (e, t) {
                var n, i, r, a, s;
                for (r = this.pagesX.length - 1, n = 0, i = this.pagesX.length; n < i; n++) if (e >= this.pagesX[n]) {
                    r = n;
                    break
                }
                for (r == this.currPageX && r > 0 && this.dirX < 0 && r--, e = this.pagesX[r], a = (a = o.abs(e - this.pagesX[this.currPageX])) ? o.abs(this.x - e) / a * 500 : 0, this.currPageX = r, r = this.pagesY.length - 1, n = 0; n < r; n++) if (t >= this.pagesY[n]) {
                    r = n;
                    break
                }
                return r == this.currPageY && r > 0 && this.dirY < 0 && r--, t = this.pagesY[r], s = (s = o.abs(t - this.pagesY[this.currPageY])) ? o.abs(this.y - t) / s * 500 : 0, this.currPageY = r, {
                    x: e,
                    y: t,
                    time: o.round(o.max(a, s)) || 200
                }
            },
            _bind: function (e, t, n) {
                (t || this.scroller).addEventListener(e, this, !!n)
            },
            _unbind: function (e, t, n) {
                (t || this.scroller).removeEventListener(e, this, !!n)
            },
            destroy: function () {
                this.scroller.style[l] = "", this.hScrollbar = !1, this.vScrollbar = !1, this._scrollbar("h"), this._scrollbar("v"), this._unbind(w, e), this._unbind(S), this._unbind(x, e), this._unbind(E, e), this._unbind(k, e), this.options.hasTouch || this._unbind(T), this.options.useTransition && this._unbind(C), this.options.checkDOMChanges && clearInterval(this.checkDOMTime), this.options.onDestroy && this.options.onDestroy.call(this)
            },
            refresh: function () {
                var e, t, n, i, r = 0, a = 0;
                if (this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin), this.wrapperW = this.wrapper.clientWidth || 1, this.wrapperH = this.wrapper.clientHeight || 1, this.minScrollY = -this.options.topOffset || 0, this.scrollerW = o.round(this.scroller.offsetWidth * this.scale), this.scrollerH = o.round((this.scroller.offsetHeight + this.minScrollY) * this.scale), $("#j-pull-down-loading") && 62 === parseInt($("#j-pull-down-loading").height(), 10) && (this.scrollerH = o.round((this.scroller.offsetHeight - 62 + this.minScrollY) * this.scale)), this.maxScrollX = this.wrapperW - this.scrollerW, this.maxScrollY = this.wrapperH - this.scrollerH + this.minScrollY, this.dirX = 0, this.dirY = 0, this.options.onRefresh && this.options.onRefresh.call(this), this.hScroll = this.options.hScroll && this.maxScrollX < 0, this.vScroll = this.options.vScroll && (!this.options.bounceLock && !this.hScroll || this.scrollerH > this.wrapperH), this.hScrollbar = this.hScroll && this.options.hScrollbar, this.vScrollbar = this.vScroll && this.options.vScrollbar && this.scrollerH > this.wrapperH, e = this._offset(this.wrapper), this.wrapperOffsetLeft = -e.left, this.wrapperOffsetTop = -e.top, "string" == typeof this.options.snap) for (this.pagesX = [], this.pagesY = [], t = 0, n = (i = this.scroller.querySelectorAll(this.options.snap)).length; t < n; t++) (r = this._offset(i[t])).left += this.wrapperOffsetLeft, r.top += this.wrapperOffsetTop, this.pagesX[t] = r.left < this.maxScrollX ? this.maxScrollX : r.left * this.scale, this.pagesY[t] = r.top < this.maxScrollY ? this.maxScrollY : r.top * this.scale; else if (this.options.snap) {
                    for (this.pagesX = []; r >= this.maxScrollX;) this.pagesX[a] = r, r -= this.wrapperW, a++;
                    for (this.maxScrollX % this.wrapperW && (this.pagesX[this.pagesX.length] = this.maxScrollX - this.pagesX[this.pagesX.length - 1] + this.pagesX[this.pagesX.length - 1]), r = 0, a = 0, this.pagesY = []; r >= this.maxScrollY;) this.pagesY[a] = r, r -= this.wrapperH, a++;
                    this.maxScrollY % this.wrapperH && (this.pagesY[this.pagesY.length] = this.maxScrollY - this.pagesY[this.pagesY.length - 1] + this.pagesY[this.pagesY.length - 1])
                }
                this._scrollbar("h"), this._scrollbar("v"), this.zoomed || (this.scroller.style[u] = "0", this._resetPos(400))
            },
            scrollTo: function (e, t, n, i) {
                var o, r, a = e;
                for (this.stop(), a.length || (a = [{
                    x: e,
                    y: t,
                    time: n,
                    relative: i
                }]), o = 0, r = a.length; o < r; o++) a[o].relative && (a[o].x = this.x - a[o].x, a[o].y = this.y - a[o].y), this.steps.push({
                    x: a[o].x,
                    y: a[o].y,
                    time: a[o].time || 0
                });
                this._startAni()
            },
            scrollToElement: function (e, t) {
                var n;
                (e = e.nodeType ? e : this.scroller.querySelector(e)) && ((n = this._offset(e)).left += this.wrapperOffsetLeft, n.top += this.wrapperOffsetTop, n.left = n.left > 0 ? 0 : n.left < this.maxScrollX ? this.maxScrollX : n.left, n.top = n.top > this.minScrollY ? this.minScrollY : n.top < this.maxScrollY ? this.maxScrollY : n.top, t = void 0 === t ? o.max(2 * o.abs(n.left), 2 * o.abs(n.top)) : t, this.scrollTo(n.left, n.top, t))
            },
            scrollToPage: function (e, t, n) {
                var i, o;
                n = void 0 === n ? 400 : n, this.options.onScrollStart && this.options.onScrollStart.call(this), this.options.snap ? (e = "next" == e ? this.currPageX + 1 : "prev" == e ? this.currPageX - 1 : e, t = "next" == t ? this.currPageY + 1 : "prev" == t ? this.currPageY - 1 : t, e = e < 0 ? 0 : e > this.pagesX.length - 1 ? this.pagesX.length - 1 : e, t = t < 0 ? 0 : t > this.pagesY.length - 1 ? this.pagesY.length - 1 : t, this.currPageX = e, this.currPageY = t, i = this.pagesX[e], o = this.pagesY[t]) : (i = -this.wrapperW * e, o = -this.wrapperH * t, i < this.maxScrollX && (i = this.maxScrollX), o < this.maxScrollY && (o = this.maxScrollY)), this.scrollTo(i, o, n)
            },
            disable: function () {
                this.stop(), this._resetPos(0), this.enabled = !1, this._unbind(x, e), this._unbind(E, e), this._unbind(k, e)
            },
            enable: function () {
                this.enabled = !0
            },
            stop: function () {
                this.options.useTransition ? this._unbind(C) : P(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
            },
            zoom: function (e, t, n, i) {
                var o = n / this.scale;
                this.options.useTransform && (this.zoomed = !0, i = void 0 === i ? 200 : i, e = e - this.wrapperOffsetLeft - this.x, t = t - this.wrapperOffsetTop - this.y, this.x = e - e * o + this.x, this.y = t - t * o + this.y, this.scale = n, this.refresh(), this.x = this.x > 0 ? 0 : this.x < this.maxScrollX ? this.maxScrollX : this.x, this.y = this.y > this.minScrollY ? this.minScrollY : this.y < this.maxScrollY ? this.maxScrollY : this.y, this.scroller.style[u] = i + "ms", this.scroller.style[l] = "translate(" + this.x + "px," + this.y + "px) scale(" + n + ")" + O, this.zoomed = !1)
            },
            isReady: function () {
                return !this.moved && !this.zoomed && !this.animating
            }
        }, r = null, t.iScroll = I
    }(window, document)
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    !function (t, n, o) {
        var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            t.setTimeout(e, 1e3 / 60)
        }, a = function () {
            var e = {}, i = n.createElement("div").style, r = function () {
                for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, n = e.length; t < n; t++) if (e[t] + "ransform" in i) return e[t].substr(0, e[t].length - 1);
                return !1
            }();

            function a(e) {
                return !1 !== r && ("" === r ? e : r + e.charAt(0).toUpperCase() + e.substr(1))
            }

            e.getTime = Date.now || function () {
                return (new Date).getTime()
            }, e.extend = function (e, t) {
                for (var n in t) e[n] = t[n]
            }, e.addEvent = function (e, t, n, i) {
                e.addEventListener(t, n, !!i)
            }, e.removeEvent = function (e, t, n, i) {
                e.removeEventListener(t, n, !!i)
            }, e.prefixPointerEvent = function (e) {
                return t.MSPointerEvent ? "MSPointer" + e.charAt(9).toUpperCase() + e.substr(10) : e
            }, e.momentum = function (e, t, n, i, r, a) {
                var s, l, c = e - t, u = o.abs(c) / n;
                return l = u / (a = void 0 === a ? 6e-4 : a), (s = e + u * u / (2 * a) * (c < 0 ? -1 : 1)) < i ? (s = r ? i - r / 2.5 * (u / 8) : i, l = (c = o.abs(s - e)) / u) : s > 0 && (s = r ? r / 2.5 * (u / 8) : 0, l = (c = o.abs(e) + s) / u), {
                    destination: o.round(s),
                    duration: l
                }
            };
            var s = a("transform");
            return e.extend(e, {
                hasTransform: !1 !== s,
                hasPerspective: a("perspective") in i,
                hasTouch: "ontouchstart" in t,
                hasPointer: t.PointerEvent || t.MSPointerEvent,
                hasTransition: a("transition") in i
            }), e.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion), e.extend(e.style = {}, {
                transform: s,
                transitionTimingFunction: a("transitionTimingFunction"),
                transitionDuration: a("transitionDuration"),
                transitionDelay: a("transitionDelay"),
                transformOrigin: a("transformOrigin")
            }), e.hasClass = function (e, t) {
                return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, e.addClass = function (t, n) {
                if (!e.hasClass(t, n)) {
                    var i = t.className.split(" ");
                    i.push(n), t.className = i.join(" ")
                }
            }, e.removeClass = function (t, n) {
                if (e.hasClass(t, n)) {
                    var i = new RegExp("(^|\\s)" + n + "(\\s|$)", "g");
                    t.className = t.className.replace(i, " ")
                }
            }, e.offset = function (e) {
                for (var t = -e.offsetLeft, n = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, n -= e.offsetTop;
                return {left: t, top: n}
            }, e.preventDefaultException = function (e, t) {
                for (var n in t) if (t[n].test(e[n])) return !0;
                return !1
            }, e.extend(e.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), e.extend(e.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (e) {
                        return e * (2 - e)
                    }
                }, circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (e) {
                        return o.sqrt(1 - --e * e)
                    }
                }, back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (e) {
                        return (e -= 1) * e * (5 * e + 4) + 1
                    }
                }, bounce: {
                    style: "", fn: function (e) {
                        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }
                }, elastic: {
                    style: "", fn: function (e) {
                        return 0 === e ? 0 : 1 == e ? 1 : .4 * o.pow(2, -10 * e) * o.sin((e - .055) * (2 * o.PI) / .22) + 1
                    }
                }
            }), e.tap = function (e, t) {
                var i = n.createEvent("Event");
                i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i)
            }, e.click = function (e) {
                var t, i = e.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || ((t = n.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, e.view, 1, i.screenX, i.screenY, i.clientX, i.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), t._constructed = !0, i.dispatchEvent(t))
            }, e
        }();

        function s(e, t) {
            for (var i in this.wrapper = "string" == typeof e ? n.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0
            }, t) this.options[i] = t[i];
            this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function l(e, t, i) {
            var o = n.createElement("div"), r = n.createElement("div");
            return !0 === i && (o.style.cssText = "position:absolute;z-index:9999", r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), r.className = "iScrollIndicator", "h" == e ? (!0 === i && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", r.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (!0 === i && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", r.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", t || (o.style.pointerEvents = "none"), o.appendChild(r), o
        }

        function c(e, i) {
            for (var o in this.wrapper = "string" == typeof i.el ? n.querySelector(i.el) : i.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            }, i) this.options[o] = i[o];
            this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade && (this.wrapperStyle[a.style.transform] = this.scroller.translateZ, this.wrapperStyle[a.style.transitionDuration] = a.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
        }

        s.prototype = {
            version: "5.1.3", _init: function () {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            }, destroy: function () {
                this._initEvents(!0), this._execEvent("destroy")
            }, _transitionEnd: function (e) {
                e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            }, _start: function (e) {
                if ((1 == a.eventType[e.type] || 0 === e.button) && this.enabled && (!this.initiated || a.eventType[e.type] === this.initiated)) {
                    !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                    var t, n = e.touches ? e.touches[0] : e;
                    this.initiated = a.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, t = this.getComputedPosition(), this._translate(o.round(t.x), o.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
                }
            }, _move: function (e) {
                if (this.enabled && a.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && e.preventDefault();
                    var t, n, i, r, s = e.touches ? e.touches[0] : e, l = s.pageX - this.pointX,
                        c = s.pageY - this.pointY, u = a.getTime();
                    if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += l, this.distY += c, i = o.abs(this.distX), r = o.abs(this.distY), !(u - this.endTime > 300 && i < 10 && r < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (i > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= i + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) e.preventDefault(); else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                            c = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) e.preventDefault(); else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                            l = 0
                        }
                        l = this.hasHorizontalScroll ? l : 0, c = this.hasVerticalScroll ? c : 0, t = this.x + l, n = this.y + c, (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + l / 3 : t > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0, this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), u - this.startTime > 300 && (this.startTime = u, this.startX = this.x, this.startY = this.y)
                    }
                }
            }, _end: function (e) {
                if (this.enabled && a.eventType[e.type] === this.initiated) {
                    this.options.preventDefault && !a.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                    e.changedTouches && e.changedTouches[0];
                    var t, n, i = a.getTime() - this.startTime, r = o.round(this.x), s = o.round(this.y),
                        l = o.abs(r - this.startX), c = o.abs(s - this.startY), u = 0, d = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(r, s), !this.moved) return this.options.tap && a.tap(e, this.options.tap), this.options.click && a.click(e), void this._execEvent("scrollCancel");
                        if (this._events.flick && i < 200 && l < 100 && c < 100) this._execEvent("flick"); else {
                            if (this.options.momentum && i < 300 && (t = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, i, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, i, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: s,
                                duration: 0
                            }, r = t.destination, s = n.destination, u = o.max(t.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                                var f = this._nearestSnap(r, s);
                                this.currentPage = f, u = this.options.snapSpeed || o.max(o.max(o.min(o.abs(r - f.x), 1e3), o.min(o.abs(s - f.y), 1100)), 300), r = f.x, s = f.y, this.directionX = 0, this.directionY = 0, d = this.options.bounceEasing
                            }
                            if (r != this.x || s != this.y) return (r > 0 || r < this.maxScrollX || s > 0 || s < this.maxScrollY) && (d = a.ease.quadratic), void this.scrollTo(r, s, u, d);
                            this._execEvent("scrollEnd")
                        }
                    }
                }
            }, _resize: function () {
                var e = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                    e.refresh()
                }, this.options.resizePolling)
            }, resetPosition: function (e) {
                var t = this.x, n = this.y;
                return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), (t != this.x || n != this.y) && (this.scrollTo(t, n, e, this.options.bounceEasing), !0)
            }, disable: function () {
                this.enabled = !1
            }, enable: function () {
                this.enabled = !0
            }, refresh: function () {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, console.log(this.maxScrollY), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            }, on: function (e, t) {
                this._events[e] || (this._events[e] = []), this._events[e].push(t)
            }, off: function (e, t) {
                if (this._events[e]) {
                    var n = this._events[e].indexOf(t);
                    n > -1 && this._events[e].splice(n, 1)
                }
            }, _execEvent: function (e) {
                if (this._events[e]) {
                    var t = 0, n = this._events[e].length;
                    if (n) for (; t < n; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
                }
            }, scrollBy: function (e, t, n, i) {
                e = this.x + e, t = this.y + t, n = n || 0, this.scrollTo(e, t, n, i)
            }, scrollTo: function (e, t, n, i) {
                i = i || a.ease.circular, this.isInTransition = this.options.useTransition && n > 0, !n || this.options.useTransition && i.style ? (this._transitionTimingFunction(i.style), this._transitionTime(n), this._translate(e, t)) : this._animate(e, t, n, i.fn)
            }, scrollToElement: function (e, t, n, i, r) {
                if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                    var s = a.offset(e);
                    s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top, !0 === n && (n = o.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === i && (i = o.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), s.left -= n || 0, s.top -= i || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, t = void 0 === t || null === t || "auto" === t ? o.max(o.abs(this.x - s.left), o.abs(this.y - s.top)) : t, this.scrollTo(s.left, s.top, t, r)
                }
            }, _transitionTime: function (e) {
                if (e = e || 0, this.scrollerStyle[a.style.transitionDuration] = e + "ms", !e && a.isBadAndroid && (this.scrollerStyle[a.style.transitionDuration] = "0.001s"), this.indicators) for (var t = this.indicators.length; t--;) this.indicators[t].transitionTime(e)
            }, _transitionTimingFunction: function (e) {
                if (this.scrollerStyle[a.style.transitionTimingFunction] = e, this.indicators) for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
            }, _translate: function (e, t) {
                if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = o.round(e), t = o.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators) for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
            }, _initEvents: function (e) {
                var n = e ? a.removeEvent : a.addEvent, i = this.options.bindToWrapper ? this.wrapper : t;
                n(t, "orientationchange", this), n(t, "resize", this), this.options.click && n(this.wrapper, "click", this, !0), this.options.disableMouse || (n(this.wrapper, "mousedown", this), n(i, "mousemove", this), n(i, "mousecancel", this), n(i, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (n(this.wrapper, a.prefixPointerEvent("pointerdown"), this), n(i, a.prefixPointerEvent("pointermove"), this), n(i, a.prefixPointerEvent("pointercancel"), this), n(i, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this), n(i, "touchmove", this), n(i, "touchcancel", this), n(i, "touchend", this)), n(this.scroller, "transitionend", this), n(this.scroller, "webkitTransitionEnd", this), n(this.scroller, "oTransitionEnd", this), n(this.scroller, "MSTransitionEnd", this)
            }, getComputedPosition: function () {
                var e, n, i = t.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (e = +((i = i[a.style.transform].split(")")[0].split(", "))[12] || i[4]), n = +(i[13] || i[5])) : (e = +i.left.replace(/[^-\d.]/g, ""), n = +i.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: n
                }
            }, _initIndicators: function () {
                var e, t = this.options.interactiveScrollbars, n = "string" != typeof this.options.scrollbars, i = [],
                    o = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: l("v", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), i.push(e)), this.options.scrollX && (e = {
                    el: l("h", t, this.options.scrollbars),
                    interactive: t,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), i.push(e))), this.options.indicators && (i = i.concat(this.options.indicators));
                for (var r = i.length; r--;) this.indicators.push(new c(this, i[r]));

                function a(e) {
                    for (var t = o.indicators.length; t--;) e.call(o.indicators[t])
                }

                this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                    a(function () {
                        this.fade()
                    })
                }), this.on("scrollCancel", function () {
                    a(function () {
                        this.fade()
                    })
                }), this.on("scrollStart", function () {
                    a(function () {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function () {
                    a(function () {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function () {
                    a(function () {
                        this.refresh()
                    })
                }), this.on("destroy", function () {
                    a(function () {
                        this.destroy()
                    }), delete this.indicators
                })
            }, _initWheel: function () {
                a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                    a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            }, _wheel: function (e) {
                if (this.enabled) {
                    e.preventDefault(), e.stopPropagation();
                    var t, n, i, r, a = this;
                    if (void 0 === this.wheelTimeout && a._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                        a._execEvent("scrollEnd"), a.wheelTimeout = void 0
                    }, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, n = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, n = -e.deltaY); else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in e) t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                        if (!("detail" in e)) return;
                        t = n = -e.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (t *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = n, n = 0), this.options.snap) return i = this.currentPage.pageX, r = this.currentPage.pageY, t > 0 ? i-- : t < 0 && i++, n > 0 ? r-- : n < 0 && r++, void this.goToPage(i, r);
                    i = this.x + o.round(this.hasHorizontalScroll ? t : 0), r = this.y + o.round(this.hasVerticalScroll ? n : 0), i > 0 ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), r > 0 ? r = 0 : r < this.maxScrollY && (r = this.maxScrollY), this.scrollTo(i, r, 0)
                }
            }, _initSnap: function () {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                    var e, t, n, i, r, a, s = 0, l = 0, c = 0, u = this.options.snapStepX || this.wrapperWidth,
                        d = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (!0 === this.options.snap) for (n = o.round(u / 2), i = o.round(d / 2); c > -this.scrollerWidth;) {
                            for (this.pages[s] = [], e = 0, r = 0; r > -this.scrollerHeight;) this.pages[s][e] = {
                                x: o.max(c, this.maxScrollX),
                                y: o.max(r, this.maxScrollY),
                                width: u,
                                height: d,
                                cx: c - n,
                                cy: r - i
                            }, r -= d, e++;
                            c -= u, s++
                        } else for (e = (a = this.options.snap).length, t = -1; s < e; s++) (0 === s || a[s].offsetLeft <= a[s - 1].offsetLeft) && (l = 0, t++), this.pages[l] || (this.pages[l] = []), c = o.max(-a[s].offsetLeft, this.maxScrollX), r = o.max(-a[s].offsetTop, this.maxScrollY), n = c - o.round(a[s].offsetWidth / 2), i = r - o.round(a[s].offsetHeight / 2), this.pages[l][t] = {
                            x: c,
                            y: r,
                            width: a[s].offsetWidth,
                            height: a[s].offsetHeight,
                            cx: n,
                            cy: i
                        }, c > this.maxScrollX && l++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = o.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = o.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function () {
                    var e = this.options.snapSpeed || o.max(o.max(o.min(o.abs(this.x - this.startX), 1e3), o.min(o.abs(this.y - this.startY), 1100)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
                })
            }, _nearestSnap: function (e, t) {
                if (!this.pages.length) return {x: 0, y: 0, pageX: 0, pageY: 0};
                var n = 0, i = this.pages.length, r = 0;
                if (o.abs(e - this.absStartX) < this.snapThresholdX && o.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); n < i; n++) if (e >= this.pages[n][0].cx) {
                    e = this.pages[n][0].x;
                    break
                }
                for (i = this.pages[n].length; r < i; r++) if (t >= this.pages[0][r].cy) {
                    t = this.pages[0][r].y;
                    break
                }
                return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), e = this.pages[n][0].x), r == this.currentPage.pageY && ((r += this.directionY) < 0 ? r = 0 : r >= this.pages[0].length && (r = this.pages[0].length - 1), t = this.pages[0][r].y), {
                    x: e,
                    y: t,
                    pageX: n,
                    pageY: r
                }
            }, goToPage: function (e, t, n, i) {
                i = i || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
                var r = this.pages[e][t].x, a = this.pages[e][t].y;
                n = void 0 === n ? this.options.snapSpeed || o.max(o.max(o.min(o.abs(r - this.x), 1e3), o.min(o.abs(a - this.y), 1100)), 300) : n, this.currentPage = {
                    x: r,
                    y: a,
                    pageX: e,
                    pageY: t
                }, this.scrollTo(r, a, n, i)
            }, next: function (e, t) {
                var n = this.currentPage.pageX, i = this.currentPage.pageY;
                ++n >= this.pages.length && this.hasVerticalScroll && (n = 0, i++), this.goToPage(n, i, e, t)
            }, prev: function (e, t) {
                var n = this.currentPage.pageX, i = this.currentPage.pageY;
                --n < 0 && this.hasVerticalScroll && (n = 0, i--), this.goToPage(n, i, e, t)
            }, _initKeys: function (e) {
                var n, o = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
                if ("object" == i(this.options.keyBindings)) for (n in this.options.keyBindings) "string" == typeof this.options.keyBindings[n] && (this.options.keyBindings[n] = this.options.keyBindings[n].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
                for (n in o) this.options.keyBindings[n] = this.options.keyBindings[n] || o[n];
                a.addEvent(t, "keydown", this), this.on("destroy", function () {
                    a.removeEvent(t, "keydown", this)
                })
            }, _key: function (e) {
                if (this.enabled) {
                    var t, n = this.options.snap, i = n ? this.currentPage.pageX : this.x,
                        r = n ? this.currentPage.pageY : this.y, s = a.getTime(), l = this.keyTime || 0;
                    switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(o.round(t.x), o.round(t.y)), this.isInTransition = !1), this.keyAcceleration = s - l < 200 ? o.min(this.keyAcceleration + .25, 50) : 0, e.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? i -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            i = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            i = 0, r = 0;
                            break;
                        case this.options.keyBindings.left:
                            i += n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            r += n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            i -= n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    n ? this.goToPage(i, r) : (i > 0 ? (i = 0, this.keyAcceleration = 0) : i < this.maxScrollX && (i = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(i, r, 0), this.keyTime = s)
                }
            }, _animate: function (e, t, n, i) {
                var o = this, s = this.x, l = this.y, c = a.getTime(), u = c + n;
                this.isAnimating = !0, function d() {
                    var f, p, h, m = a.getTime();
                    if (m >= u) return o.isAnimating = !1, o._translate(e, t), void (o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"));
                    h = i(m = (m - c) / n), f = (e - s) * h + s, p = (t - l) * h + l, o._translate(f, p), o.isAnimating && r(d)
                }()
            }, handleEvent: function (e) {
                switch (e.type) {
                    case"touchstart":
                    case"pointerdown":
                    case"MSPointerDown":
                    case"mousedown":
                        this._start(e);
                        break;
                    case"touchmove":
                    case"pointermove":
                    case"MSPointerMove":
                    case"mousemove":
                        this._move(e);
                        break;
                    case"touchend":
                    case"pointerup":
                    case"MSPointerUp":
                    case"mouseup":
                    case"touchcancel":
                    case"pointercancel":
                    case"MSPointerCancel":
                    case"mousecancel":
                        this._end(e);
                        break;
                    case"orientationchange":
                    case"resize":
                        this._resize();
                        break;
                    case"transitionend":
                    case"webkitTransitionEnd":
                    case"oTransitionEnd":
                    case"MSTransitionEnd":
                        this._transitionEnd(e);
                        break;
                    case"wheel":
                    case"DOMMouseScroll":
                    case"mousewheel":
                        this._wheel(e);
                        break;
                    case"keydown":
                        this._key(e);
                        break;
                    case"click":
                        e._constructed || (e.preventDefault(), e.stopPropagation())
                }
            }
        }, c.prototype = {
            handleEvent: function (e) {
                switch (e.type) {
                    case"touchstart":
                    case"pointerdown":
                    case"MSPointerDown":
                    case"mousedown":
                        this._start(e);
                        break;
                    case"touchmove":
                    case"pointermove":
                    case"MSPointerMove":
                    case"mousemove":
                        this._move(e);
                        break;
                    case"touchend":
                    case"pointerup":
                    case"MSPointerUp":
                    case"mouseup":
                    case"touchcancel":
                    case"pointercancel":
                    case"MSPointerCancel":
                    case"mousecancel":
                        this._end(e)
                }
            }, destroy: function () {
                this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            }, _start: function (e) {
                var n = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = n.pageX, this.lastPointY = n.pageY, this.startTime = a.getTime(), this.options.disableTouch || a.addEvent(t, "touchmove", this), this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this), this.options.disableMouse || a.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            }, _move: function (e) {
                var t, n, i, o, r = e.touches ? e.touches[0] : e;
                a.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = r.pageX - this.lastPointX, this.lastPointX = r.pageX, n = r.pageY - this.lastPointY, this.lastPointY = r.pageY, i = this.x + t, o = this.y + n, this._pos(i, o), e.preventDefault(), e.stopPropagation()
            }, _end: function (e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                        var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            i = this.options.snapSpeed || o.max(o.max(o.min(o.abs(this.scroller.x - n.x), 1e3), o.min(o.abs(this.scroller.y - n.y), 1100)), 300);
                        this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, i, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            }, transitionTime: function (e) {
                e = e || 0, this.indicatorStyle[a.style.transitionDuration] = e + "ms", !e && a.isBadAndroid && (this.indicatorStyle[a.style.transitionDuration] = "0.001s")
            }, transitionTimingFunction: function (e) {
                this.indicatorStyle[a.style.transitionTimingFunction] = e
            }, refresh: function () {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = o.max(o.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = o.max(o.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            }, updatePosition: function () {
                var e = this.options.listenX && o.round(this.sizeRatioX * this.scroller.x) || 0,
                    t = this.options.listenY && o.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = o.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = o.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = o.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = o.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
            }, _pos: function (e, t) {
                e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? o.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? o.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
            }, fade: function (e, t) {
                if (!t || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var n = e ? 250 : 500, i = e ? 0 : 300;
                    e = e ? "1" : "0", this.wrapperStyle[a.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function (e) {
                        this.wrapperStyle.opacity = e, this.visible = +e
                    }.bind(this, e), i)
                }
            }
        }, s.utils = a, void 0 !== e && e.exports ? e.exports = s : t.IScroll = s
    }(window, document, Math)
}, function (e, t, n) {
    "use strict";
    var i;
    void 0 === (i = function (e, t, n) {
        var i, o, r = [], a = !1, s = 0, l = function (e) {
            o = e;
            var t = window.pageYOffset;
            o.offset = t - s, s = t
        }, c = function () {
            o && (r.forEach(function (e) {
                e(o)
            }), o = null)
        };
        n.exports = {
            add: function (e) {
                a || (a = !0, window.addEventListener("scroll", l), i = setInterval(c, 50)), r.push(e)
            }, remove: function (e) {
                var t = [];
                r.forEach(function (n) {
                    n !== e && t.push(n)
                }), (r = t).length || (a = !1, o = null, window.removeEventListener("scroll", l), i = clearInterval(i))
            }
        }
    }.call(t, n, t, e)) || (e.exports = i)
}, function (e, t, n) {
    "use strict";
    var i = {
        utf8: {
            stringToBytes: function (e) {
                return i.bin.stringToBytes(unescape(encodeURIComponent(e)))
            }, bytesToString: function (e) {
                return decodeURIComponent(escape(i.bin.bytesToString(e)))
            }
        }, bin: {
            stringToBytes: function (e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            }, bytesToString: function (e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                return t.join("")
            }
        }
    };
    e.exports = i
}, function (e, t, n) {
    "use strict";

    function i(e) {
        return function () {
            return e
        }
    }

    var o = function () {
    };
    o.thatReturns = i, o.thatReturnsFalse = i(!1), o.thatReturnsTrue = i(!0), o.thatReturnsNull = i(null), o.thatReturnsThis = function () {
        return this
    }, o.thatReturnsArgument = function (e) {
        return e
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    e.exports = {}
}, function (e, t, n) {
    "use strict";
    var i = function (e) {
    };
    e.exports = function (e, t, n, o, r, a, s, l) {
        if (i(t), !e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var u = [n, o, r, a, s, l], d = 0;
                (c = new Error(t.replace(/%s/g, function () {
                    return u[d++]
                }))).name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }
}, function (e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            }).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                i[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function (e, t) {
        for (var n, a, s = function (e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }(e), l = 1; l < arguments.length; l++) {
            for (var c in n = Object(arguments[l])) o.call(n, c) && (s[c] = n[c]);
            if (i) {
                a = i(n);
                for (var u = 0; u < a.length; u++) r.call(n, a[u]) && (s[a[u]] = n[a[u]])
            }
        }
        return s
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        return function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0) ;
                } catch (e) {
                    o = !0, r = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = c(r), s = n(7), l = c(n(29));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(144);
    var u = function () {
        var e = new Date;
        return e.getFullYear() + "_" + e.getMonth() + "_" + e.getDate()
    }, d = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.suspendClick = n.suspendClick.bind(n), n.closeLayer = n.closeLayer.bind(n), n.btnClick = n.btnClick.bind(n), n.showLayer = n.showLayer.bind(n), n.handleMaskTouchMove = n.handleMaskTouchMove.bind(n), n.state = {canShowLayer: !1}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "closeLayer", value: function () {
                $(".j-big-layer").css("animation", "layerClose .3s ease forwards"), $(".j-mask").css("animation", "maskHide .3s ease forwards"), setTimeout(function () {
                    $(".j-suspend").show()
                }, 200), setTimeout(function () {
                    $(".j-floating-layer-wrapper").hide(), $(".j-mask").css("animation", "maskShow .3s ease forwards"), $(".j-big-layer").css("animation", "layerShow .6s ease-in forwards")
                }, 300), (0, s.addLog)(l.default.cusine_dialog_close, {}), (0, s.addLog)(l.default.cusine_dialog_show, {pos: 2});
                var e = this.props.data[0];
                e.adv_status && (0, s.addLog)(l.default.adst_show_food_popup, {pos: 2, adv_id: e.id})
            }
        }, {
            key: "suspendClick", value: function () {
                var e = this.props.data[0];
                BNJS.page.start((0, s.effectiveUrl)(e.cont)), (0, s.addLog)(l.default.cusine_fdbutton_click, {}), e.adv_status && (0, s.addLog)(l.default.adst_click_food_popup, {
                    pos: "2",
                    adv_id: e.id
                })
            }
        }, {
            key: "btnClick", value: function () {
                $(".j-floating-layer-wrapper").hide(), $(".j-suspend").show();
                var e = this.props.data[0];
                (0, s.addLog)(l.default.cusine_dialog_show, {pos: 2}), (0, s.addLog)(l.default.cusine_dialog_click, {}), e.adv_status && ((0, s.addLog)(l.default.adst_show_food_popup, {
                    pos: 2,
                    adv_id: e.id
                }), (0, s.addLog)(l.default.adst_click_food_popup, {
                    pos: "1",
                    adv_id: e.id
                })), BNJS.page.start((0, s.effectiveUrl)(e.cont))
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = this.props.data, t = (void 0 === e ? [] : e)[0], n = this, o = new Promise(function (e, n) {
                    var i = new Image;
                    i.src = t.img, i.onload = function () {
                        e()
                    }
                }), r = new Promise(function (e, n) {
                    var i = u();
                    BNJS.localStorage.getItem("hide_layer_" + i + "_" + t.id, function (n) {
                        e(!("true" == n.data));
                        var i = $(".j-suspend");
                        "true" == n.data && i.is(":hidden") && (i.show(), (0, s.addLog)(l.default.cusine_dialog_show, {pos: 2}), t.adv_status && (0, s.addLog)(l.default.adst_show_food_popup, {
                            pos: 2,
                            adv_id: t.id
                        }))
                    })
                });
                Promise.all([o, r]).then(function (e) {
                    var o = i(e, 2);
                    o[0];
                    o[1] && n.showLayer(t)
                })
            }
        }, {
            key: "showLayer", value: function (e) {
                $(".j-floating-layer-wrapper").show();
                var t = $(window).width();
                if (t < 375) {
                    var n = $(".big-layer");
                    n.animate({
                        width: "88%",
                        height: 101.2 / 75 * t,
                        "margin-right": -.44 * t,
                        "margin-bottom": -101.2 / 75 / 2 * t,
                        opacity: "1"
                    }, 200), setTimeout(function () {
                        n.animate({
                            width: "76%",
                            height: 87.4 / 75 * t,
                            "margin-right": -.38 * t,
                            "margin-bottom": -87.4 / 75 / 2 * t,
                            opacity: "1"
                        }, 200)
                    }, 241), setTimeout(function () {
                        n.animate({
                            width: "80%",
                            height: 92 / 75 * t,
                            "margin-right": -.4 * t,
                            "margin-bottom": -92 / 75 / 2 * t,
                            opacity: "1"
                        }, 200, "linear")
                    }, 481)
                }
                var i, o, r = u(),
                    a = (i = 1, (o = new Date).setDate(o.getDate() + i), o.getFullYear() + "_" + (o.getMonth() + 1) + "_" + o.getDate());
                BNJS.localStorage.removeItem("hide_layer_" + a + "_" + e.id), BNJS.localStorage.setItem("hide_layer_" + r + "_" + e.id, "true"), (0, s.addLog)(l.default.cusine_dialog_show, {pos: 1}), e.adv_status && (0, s.addLog)(l.default.adst_show_food_popup, {
                    pos: 1,
                    adv_id: e.id
                })
            }
        }, {
            key: "handleMaskTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation(), e.returnValue = !1
            }
        }, {
            key: "render", value: function () {
                var e = this.props.data, t = void 0 === e ? [] : e;
                if (t.length < 1) return !1;
                var n = t[0], i = {backgroundImage: "url(" + n.img + ")"}, o = {backgroundImage: "url(" + n.img1 + ")"};
                return a.default.createElement("div", null, a.default.createElement("div", {
                    className: "j-floating-layer-wrapper floating-layer-wrapper",
                    onTouchMove: this.handleMaskTouchMove
                }, a.default.createElement("div", {
                    className: "j-mask mask",
                    onClick: this.closeLayer
                }), a.default.createElement("div", {className: "j-big-layer big-layer"}, a.default.createElement("div", {
                    className: "j-floating-layer floating-layer",
                    style: i,
                    onClick: this.btnClick
                }, 1 == parseInt(n.adv_status) && a.default.createElement("div", {className: "adv-tag"})), a.default.createElement("div", {
                    className: "close-wrap",
                    onClick: this.closeLayer
                }), a.default.createElement("div", {
                    className: "close",
                    onClick: this.closeLayer
                }))), a.default.createElement("div", {
                    className: "j-suspend suspend",
                    onClick: this.suspendClick
                }, a.default.createElement("div", {className: "suspend-img", style: o})))
            }
        }]), t
    }();
    t.default = d
}, , function (e, t, n) {
}, function (e, t, n) {
    e.exports = n.p + "img/0a9d0541a8f7ad777da39aec37c1fe4f.gif"
}, , function (e, t, n) {
}, , function (e, t, n) {
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = l(o), a = l(n(53)), s = n(7);

    function l(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(154);
    var c = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {id: "imagePoiItem" + ((new Date).getTime() + parseInt(1e3 * Math.random(0, 1)))}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                var e = $(".active" + this.state.id), t = void 0;
                e.on("touchstart", function (n) {
                    t = setTimeout(function () {
                        e.addClass("active-poi-item")
                    }, 200)
                }).on("touchmove", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                }).on("touchend", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                });
                var n = this.props.info;
                this.props.addShowLog({
                    place: this.props.place,
                    index: this.props.index,
                    poiid: n.poiId,
                    ad: 1 == n.source ? 1 : 0,
                    isgif: n.isGif || 0
                })
            }
        }, {
            key: "gotoDetail", value: function () {
                var e = $(".active" + this.state.id);
                e.addClass("active-poi-item");
                var t = this.props.info;
                1 == t.source && t.chargeUrl && BNJS.http.get({url: t.chargeUrl}), this.props.addPoiClickLog({
                    place: this.props.place,
                    index: this.props.index,
                    ad: 1 == t.source ? 1 : 0,
                    poiid: t.poiId,
                    isgif: t.isGif || 0
                }), BNJS.page.start(t.poiJumpUrl), setTimeout(function () {
                    e.removeClass("active-poi-item")
                }, 100)
            }
        }, {
            key: "getPoiNameWidth", value: function (e, t) {
                var n = 720;
                return e.isWangpu && (n = 620, 1 == e.source && (n = 630)), t && (n -= 52), n * document.documentElement.clientWidth / 750 + "px"
            }
        }, {
            key: "getPoiName", value: function (e, t) {
                var n = e.poiName.length > 18 ? e.poiName.substr(0, 18) + "..." : e.poiName;
                return e.isWangpu && (n = e.poiName.length > 16 ? e.poiName.substr(0, 16) + "..." : e.poiName, 1 == e.source && (n = e.poiName.length > 17 ? e.poiName.substr(0, 17) + "..." : e.poiName)), t && (n = e.poiName.length > 15 ? e.poiName.substr(0, 15) + "..." : e.poiName), n
            }
        }, {
            key: "getReasonWidth", value: function (e) {
                var t = 690;
                return (t -= 116 * e) * document.documentElement.clientWidth / 750 - 6 + "px"
            }
        }, {
            key: "render", value: function () {
                var e = this.props.info, t = e.certification_labels || [],
                    n = (0, s.isAndroid)() ? "image-new-poi-item border-android active" + this.state.id : "image-new-poi-item border-bottom active" + this.state.id,
                    i = e.recomReason, o = {maxWidth: this.getReasonWidth(t.length)},
                    l = !!(e.detail && e.detail.length && e.detail[0].minTitle) && e.detail[0],
                    c = (!e.payAtshop || e.shopingTitle, e.detail && e.detail.length && e.detail[0].price && (parseInt(e.detail[0].price, 10) / 100).toFixed(2), (0, s.isAndroid)() ? "poi-item-icon-info android-icon-info" : "poi-item-icon-info"),
                    u = (0, s.isAndroid)() ? "android-icon-span" : "", d = e.photoList || [],
                    f = {maxWidth: this.getPoiNameWidth(e, l)},
                    p = 1 == e.seapi__corner_is_open && e.seapi__corner_icon_url ? e.seapi__corner_icon_url : null,
                    h = this.getPoiName(e, l), m = e.isAr;
                return r.default.createElement("section", {
                    className: n,
                    onClick: this.gotoDetail.bind(this)
                }, r.default.createElement("div", {className: "poi-name-line"}, e.isWangpu && 1 != e.source ? r.default.createElement("span", {className: "wp-icon"}) : null, r.default.createElement("span", {
                    className: "poi-name",
                    style: f
                }, h), null, l ? r.default.createElement("div", {className: c}, r.default.createElement("span", {className: u}, "团")) : null, 1 == e.source ? r.default.createElement("span", {className: "poi-ad"}, "广告") : null), r.default.createElement("div", {className: "poi-star-line"}, r.default.createElement(a.default, {
                    hideScore: 1,
                    score: e.averageScore ? e.averageScore : -1
                }), e.perPrice ? r.default.createElement("div", {className: "item-price"}, "￥", parseInt(e.perPrice / 100), "/人") : null, e.bizareaTitle ? r.default.createElement("div", {className: "item-bizarea"}, e.bizareaTitle) : null), e.poiDistance ? r.default.createElement("div", {className: "poi-distance-line"}, e.poiDistance) : null, r.default.createElement("div", {className: "poi-imgs-line"}, p ? r.default.createElement("div", {className: "tag-cuxiao"}, r.default.createElement("img", {src: p})) : null, m ? r.default.createElement("div", {className: "poi-ar-info"}, r.default.createElement("span", {className: "text"}, "AR")) : null, d && d.length ? d.map(function (e, t) {
                    return t >= 5 ? null : r.default.createElement("div", {
                        key: t,
                        className: "poi-img-item"
                    }, r.default.createElement("img", {src: e}))
                }) : null, e.photoCount ? r.default.createElement("div", {className: "imgs-count"}, e.photoCount, "张样片") : null), i || t.length > 0 ? r.default.createElement("div", {className: "poi-tags-line"}, t.length > 0 ? r.default.createElement("div", {className: "info-tags-group"}, t.map(function (e, t) {
                    return t >= 3 ? null : r.default.createElement("div", {
                        key: t,
                        className: "tag-item-box"
                    }, r.default.createElement("p", null, r.default.createElement("span", {className: (0, s.isAndroid)() ? "tag-item tag-item-android" : "tag-item"}, e)))
                })) : null, i ? r.default.createElement("div", {
                    style: o,
                    className: "poi-reason-group"
                }, i) : null) : null)
            }
        }]), t
    }();
    t.default = c
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = l(o), a = l(n(53)), s = n(7);

    function l(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(157);
    var c = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {id: "tagPoiItem" + ((new Date).getTime() + parseInt(1e3 * Math.random(0, 1)))}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                var e = $(".active" + this.state.id), t = void 0;
                e.on("touchstart", function (n) {
                    t = setTimeout(function () {
                        e.addClass("active-poi-item")
                    }, 200)
                }).on("touchmove", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                }).on("touchend", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                });
                var n = this.props.info;
                this.props.addShowLog({
                    place: this.props.place,
                    index: this.props.index,
                    poiid: n.poiId,
                    ad: 1 == n.source ? 1 : 0,
                    isgif: n.isGif || 0
                })
            }
        }, {
            key: "gotoDetail", value: function () {
                var e = $(".active" + this.state.id);
                e.addClass("active-poi-item");
                var t = this.props.info;
                1 == t.source && BNJS.http.get({url: t.chargeUrl}), this.props.addPoiClickLog({
                    place: this.props.place,
                    index: this.props.index,
                    ad: 1 == t.source ? 1 : 0,
                    poiid: t.poiId,
                    isgif: t.isGif || 0
                }), BNJS.page.start(t.poiJumpUrl), setTimeout(function () {
                    e.removeClass("active-poi-item")
                }, 100)
            }
        }, {
            key: "getPoiNameWidth", value: function (e) {
                var t = 458;
                return e.poiDistance ? (t = 360, e.isWangpu ? t = 276 : 1 == e.source && (t = 292)) : e.isWangpu ? t = 328 : 1 == e.source && (t = 396), t * document.documentElement.clientWidth / 750 + "px"
            }
        }, {
            key: "getReasonWidth", value: function (e) {
                var t = 458;
                return (t -= 116 * e) * document.documentElement.clientWidth / 750 - 4 + "px"
            }
        }, {
            key: "render", value: function () {
                var e = this.props.info, t = e.certification_labels, n = {maxWidth: this.getPoiNameWidth(e)},
                    i = "tag-new-poi-item border-bottom active" + this.state.id,
                    o = !!(e.detail && e.detail.length && e.detail[0].minTitle) && e.detail[0],
                    l = !(!e.payAtshop || "" == e.shopingTitle),
                    c = e.detail && e.detail.length && e.detail[0].price ? +(parseInt(e.detail[0].price, 10) / 100).toFixed(2) : "",
                    u = e.recomReason, d = {maxWidth: this.getReasonWidth(t ? t.length : 0)},
                    f = (!(!(0, s.isArray)(e.impression_words) || !e.impression_words.length) && e.impression_words, e.poiName.length > 8 && ("ios" != BNJS.device.platform && parseInt(BNJS.device.os.substr(3)) < 20 || "ios" == BNJS.device.platform && parseInt(BNJS.device.os) <= 8) ? e.poiName.substr(0, 8) + "..." : e.poiName),
                    p = 1 == e.can_order ? 1 : 0,
                    h = 1 == e.seapi__corner_is_open && e.seapi__corner_icon_url ? e.seapi__corner_icon_url : null,
                    m = (0, s.isAndroid)() ? "android-icon-span" : "",
                    v = {backgroundImage: "url(" + e.tinyImage + ")"}, g = e.isAr;
                return r.default.createElement("section", {
                    className: i,
                    onClick: this.gotoDetail.bind(this)
                }, r.default.createElement("div", {
                    className: "item-image",
                    style: v
                }, g ? r.default.createElement("div", {className: "poi-ar-info"}, r.default.createElement("span", {className: "text"}, "AR")) : null), h ? r.default.createElement("div", {className: "tag-cuxiao"}, r.default.createElement("div", {className: "box-shadow"}), r.default.createElement("img", {src: h})) : null, r.default.createElement("ul", {className: "item-info"}, r.default.createElement("li", {className: "poi-name-line"}, e.isWangpu && 1 != e.source ? r.default.createElement("span", {className: "wp-icon"}) : null, r.default.createElement("div", {className: "poi-title"}, r.default.createElement("span", {
                    className: "poi-name-span",
                    style: n
                }, f), 1 == e.source ? r.default.createElement("span", {className: "poi-ad"}, "广告") : null), e.poiDistance ? r.default.createElement("span", {className: "poi-distance"}, e.poiDistance) : null), r.default.createElement("li", {className: "poi-star-line"}, r.default.createElement(a.default, {
                    hideScore: 1,
                    score: e.averageScore ? e.averageScore : -1
                }), e.perPrice ? r.default.createElement("div", {className: "item-price"}, "￥", parseInt(e.perPrice / 100), "/人") : null, e.bizareaTitle ? r.default.createElement("div", {className: "item-bizarea"}, e.bizareaTitle) : null), null, o ? r.default.createElement("li", {className: "poi-tuan-line"}, r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: m}, "团")), r.default.createElement("span", {className: "poi-tuan-info"}, c ? c + "元购" : "", o.minTitle)) : null, p ? r.default.createElement("li", {className: "poi-appoint-line"}, r.default.createElement("div", {className: "poi-item-icon-info poi-item-icon-appoint"}, r.default.createElement("span", {className: m}, "订")), r.default.createElement("span", {className: "poi-appoint-info"}, "支持在线预定")) : null, l && !p ? r.default.createElement("li", {className: o ? "poi-pay-line poi-pay-tuan-line" : "poi-pay-line"}, r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: m}, "付")), r.default.createElement("span", {className: "poi-pay-info"}, e.shopingTitle)) : null, u || t && t.length > 0 ? r.default.createElement("div", {className: "poi-tags-line"}, t && t.length > 0 ? r.default.createElement("div", {className: "info-tags-group"}, t.map(function (e, t) {
                    return t >= 3 ? null : r.default.createElement("div", {
                        key: t,
                        className: "tag-item-box"
                    }, r.default.createElement("p", null, r.default.createElement("span", {className: (0, s.isAndroid)() ? "tag-item tag-item-android" : "tag-item"}, e)))
                })) : null, u && (!t || t.length <= 2) ? r.default.createElement("div", {
                    style: d,
                    className: "poi-reason-group"
                }, u) : null) : null))
            }
        }]), t
    }();
    t.default = c
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = l(o), a = l(n(53)), s = n(7);

    function l(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(160);
    var c = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {id: "baseWpuPoiItem" + ((new Date).getTime() + parseInt(1e3 * Math.random(0, 1)))}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                var e = this.props.info;
                this.props.addShowLog({
                    place: this.props.place,
                    index: this.props.index,
                    poiid: e.poiId,
                    ad: 1 == e.source ? 1 : 0,
                    isgif: e.isGif || 0
                });
                var t = $("#" + this.state.id), n = void 0;
                t.on("touchstart", function (e) {
                    n = setTimeout(function () {
                        t.addClass("active-poi-item")
                    }, 200)
                }).on("touchmove", function () {
                    clearTimeout(n), t.removeClass("active-poi-item")
                }).on("touchend", function () {
                    clearTimeout(n), t.removeClass("active-poi-item")
                })
            }
        }, {
            key: "gotoDetail", value: function () {
                var e = $("#" + this.state.id);
                e.addClass("active-poi-item");
                var t = this.props.info;
                1 == t.source && t.chargeUrl && BNJS.http.get({url: t.chargeUrl}), this.props.addPoiClickLog({
                    place: this.props.place,
                    index: this.props.index,
                    ad: 1 == t.source ? 1 : 0,
                    poiid: t.poiId,
                    isgif: t.isGif || 0
                }), BNJS.page.start(t.poiJumpUrl), setTimeout(function () {
                    e.removeClass("active-poi-item")
                }, 100)
            }
        }, {
            key: "getPoiNameWidth", value: function (e) {
                var t = 720;
                return e.isWangpu && (t = 620, 1 == e.source && (t = 630)), t * document.documentElement.clientWidth / 750 + "px"
            }
        }, {
            key: "getPoiName", value: function (e) {
                var t = e.poiName.length > 18 ? e.poiName.substr(0, 18) + "..." : e.poiName;
                return e.isWangpu && (t = e.poiName.length > 16 ? e.poiName.substr(0, 16) + "..." : e.poiName, 1 == e.source && (t = e.poiName.length > 17 ? e.poiName.substr(0, 17) + "..." : e.poiName)), t
            }
        }, {
            key: "getReasonWidth", value: function (e) {
                var t = 690;
                return (t -= 116 * e) * document.documentElement.clientWidth / 750 - 6 + "px"
            }
        }, {
            key: "render", value: function () {
                var e = this.props.info, t = e.certification_labels || [],
                    n = {maxWidth: this.getReasonWidth(t.length)},
                    i = (0, s.isAndroid)() ? "base-wangpu-new-poi-item border-android " : "base-wangpu-new-poi-item border-bottom",
                    o = {maxWidth: this.getPoiNameWidth(e)}, l = e.recomReason,
                    c = !!(e.detail && e.detail.length && e.detail[0].minTitle) && e.detail[0],
                    u = !(!e.payAtshop || "" == e.shopingTitle),
                    d = e.detail && e.detail.length && e.detail[0].price ? +(parseInt(e.detail[0].price, 10) / 100).toFixed(2) : "",
                    f = u && c ? "promotion-icons" : "promotion-icons promotion-icons-single",
                    p = (0, s.isAndroid)() ? "android-icon-span" : "",
                    h = 1 == e.seapi__corner_is_open && e.seapi__corner_icon_url ? e.seapi__corner_icon_url : null,
                    m = this.getPoiName(e), v = e.isAr;
                return r.default.createElement("section", {
                    id: this.state.id,
                    className: i,
                    onClick: this.gotoDetail.bind(this)
                }, r.default.createElement("div", {className: "poi-name-line"}, e.isWangpu && 1 != e.source ? r.default.createElement("span", {className: "wp-icon"}) : null, r.default.createElement("span", {
                    className: "poi-name",
                    style: o
                }, m), 1 == e.source ? r.default.createElement("span", {className: "poi-ad"}, "广告") : null), r.default.createElement("div", {className: "poi-star-line"}, r.default.createElement(a.default, {
                    hideScore: 1,
                    score: e.averageScore ? e.averageScore : -1
                }), e.perPrice ? r.default.createElement("div", {className: "item-price"}, "￥", parseInt(e.perPrice / 100), "/人") : null, e.bizareaTitle ? r.default.createElement("div", {className: "item-bizarea"}, e.bizareaTitle) : null), e.poiDistance ? r.default.createElement("div", {className: "poi-distance-line"}, e.poiDistance) : null, r.default.createElement("div", {className: "poi-imgs-line"}, h ? r.default.createElement("div", {className: "tag-cuxiao"}, r.default.createElement("img", {src: h})) : null, v ? r.default.createElement("div", {className: "poi-ar-info"}, r.default.createElement("span", {className: "text"}, "AR")) : null, r.default.createElement("ul", {className: "poi-imgs-line-ul"}, e.photoList && e.photoList.length > 0 ? e.photoList.map(function (e, t) {
                    return t >= 3 ? null : r.default.createElement("li", {
                        key: t,
                        className: "poi-img-item"
                    }, r.default.createElement("img", {src: e}))
                }) : null)), c || u ? r.default.createElement("div", {className: "poi-promotion-line"}, r.default.createElement("div", {className: f}, c && u ? r.default.createElement("span", {className: "poi-item-icon-all-info"}, "团", r.default.createElement("em", null), "付") : null, c && !u ? r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: p}, "团")) : null, !c && u ? r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: p}, "付")) : null), r.default.createElement("div", {className: "promotion-title"}, c && d ? d + "元购" : "", c ? u ? c.minTitle + ";" : c.minTitle + "。" : null, u ? e.shopingTitle + "." : null)) : null, l || t.length > 0 ? r.default.createElement("div", {className: "poi-tags-line"}, t.length > 0 ? r.default.createElement("div", {className: "info-tags-group"}, t.map(function (e, t) {
                    return t >= 3 ? null : r.default.createElement("div", {
                        key: t,
                        className: "tag-item-box"
                    }, r.default.createElement("p", null, r.default.createElement("span", {className: (0, s.isAndroid)() ? "tag-item tag-item-android" : "tag-item"}, e)))
                })) : null, l ? r.default.createElement("div", {
                    style: n,
                    className: "poi-reason-group"
                }, l) : null) : null)
            }
        }]), t
    }();
    t.default = c
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    var i = function (e) {
        e.parentNode && e.parentNode.removeChild(e)
    };
    e.exports = function (e, t) {
        var n = (t = t || {}).useTransform = !t.hasOwnProperty("useTransform") || t.useTransform;
        if (e && e.nodeType && 0 !== e.children.length) {
            var o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                r = function (e) {
                    var t = ["transitionProperty", "WebkitTransition"];
                    for (var n in t) if (void 0 !== e.style[t[n]]) return !0;
                    return !1
                }(document.createElement("swipe"));
            if (o && r && 1 !== e.children.length) {
                var a, s, l, c, u = function (e) {
                    setTimeout(e, 0)
                }, d = t.scrollWidth, f = !1, p = parseInt(t.startSlide, 10) || 0, h = t.speed || 300;
                t.continuous = void 0 === t.continuous || t.continuous, function () {
                    if (t.pointers) {
                        var n = e.children.length, i = n;
                        for (c = t.pointers; i--;) {
                            var o = document.createElement("i");
                            n - i - 1 === p && (o.className = "active"), c.appendChild(o)
                        }
                    }
                }();
                var m, v = t.auto || 0;
                S(), v && (m = setTimeout(x, v));
                var g, y, b = {}, _ = {};
                return y = {
                    handleEvent: function (e) {
                        switch (e.type) {
                            case"touchstart":
                                this.start(e);
                                break;
                            case"touchmove":
                                this.move(e);
                                break;
                            case"touchend":
                                u(this.end(e));
                                break;
                            case"resize":
                                u(S.call());
                                break;
                            case"webkitTransitionEnd":
                            case"transitionend":
                                u(this.transitionEnd(event))
                        }
                    }, start: function (t) {
                        var n = t.touches[0];
                        b = {
                            x: n.pageX,
                            y: n.pageY,
                            time: +new Date
                        }, g = void 0, _ = {}, e.addEventListener("touchmove", this, !1), e.addEventListener("touchend", this, !1)
                    }, move: function (e) {
                        if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                            var n = e.touches[0];
                            _ = {
                                x: n.pageX - b.x,
                                y: n.pageY - b.y
                            }, void 0 === g && (g = !!(g || Math.abs(_.x) < Math.abs(_.y))), g || (e.preventDefault(), N(), t.continuous ? C(p, _.x + s[p], 0) : (_.x = _.x / (!p && _.x > 0 || p == a.length - 1 && _.x < 0 ? Math.abs(_.x) / d + 1 : 1), C(p, _.x + s[p], 0)))
                        }
                    }, end: function (n) {
                        var i = +new Date - b.time, o = Number(i) < 250 && Math.abs(_.x) > 20 || Math.abs(_.x) > d / 2,
                            r = !p && _.x > 0 || p == a.length - 1 && _.x < 0;
                        t.continuous && (r = !1);
                        var l = _.x < 0;
                        g || (o && !r ? (l ? (t.continuous ? (T(E(p - 1), -d, 0), T(E(p + 2), d, 0)) : T(p - 1, -d, 0), T(p, s[p] - d, h), T(E(p + 1), s[E(p + 1)] - d, h), p = E(p + 1)) : (t.continuous ? (T(E(p + 1), d, 0), T(E(p - 2), -d, 0)) : T(p + 1, d, 0), T(p, s[p] + d, h), T(E(p - 1), s[E(p - 1)] + d, h), p = E(p - 1)), t.pointers && w(p), t.callback && t.callback(p, a[p])) : (t.continuous, T(p, 0, h))), e.removeEventListener("touchmove", y, !1), e.removeEventListener("touchend", y, !1)
                    }, transitionEnd: function (e) {
                        parseInt(e.target.getAttribute("data-index"), 10) == p && (t.auto && (clearTimeout(m), m = setTimeout(x, t.auto)), t.transitionEnd && t.transitionEnd.call(event, p, a[p]))
                    }
                }, e.addEventListener("touchstart", y, !1), window.addEventListener("resize", y, !1), e.addEventListener("webkitTransitionEnd", y, !1), e.addEventListener("transitionend", y, !1), {
                    next: function () {
                        N(), x()
                    }, prev: function () {
                        N(), t.continuous ? k(p - 1) : p && k(p - 1)
                    }, slide: function (e, t) {
                        N(), k(e, t)
                    }, pos: function () {
                        return p
                    }, len: function () {
                        return f ? 2 : a.length
                    }
                }
            }
            e.style.visibility = "visible"
        }

        function w(e) {
            var t = c.children.length;
            for (e %= t; t--;) c.children[t].className = t === e ? "active" : ""
        }

        function S() {
            if (a = e.children, l = a.length) {
                if (e.style.width = l * (t.scrollWidth ? t.scrollWidth.scrollWidth : document.body.clientWidth), t.continuous && l < 3) {
                    for (var n = [], o = 0, r = a.length; o < r; o++) n[o] = a[o].cloneNode(!0), n[o].setAttribute("data-fake", "true"), e.appendChild(n[o]);
                    a = e.children, l = a.length, f = !0
                }
                s = new Array(l);
                for (var c = l; c--;) {
                    a[c].setAttribute("data-index", c), T(c, p > c ? -d : p < c ? d : 0, 0)
                }
                t.continuous && (0 === p && T(E(p - 1), -d, 0), p === l && T(E(p + 1), d, 0)), e.style.visibility = "visible", k(0)
            } else i(e.parentNode)
        }

        function x() {
            t.continuous ? k(p + 1) : p < a.length - 1 && k(p + 1)
        }

        function E(e) {
            return (a.length + e % a.length) % a.length
        }

        function k(e, n) {
            if ("shoubai" != window.issb && p != e) {
                var i = Math.abs(p - e) / (p - e);
                if (t.continuous) {
                    var o = i;
                    (i = -s[E(e)] / d) !== o && (e = -i * a.length + e)
                }
                for (var r = Math.abs(p - e) - 1; r--;) T(E((e > p ? e : p) - r - 1), d * i, 0);
                e = E(e), T(p, d * i, n || h), T(e, 0, n || h), t.continuous && T(E(e - i), -d * i, 0), p = e, t.pointers && w(p), u(t.callback && t.callback(p, a[p]))
            }
        }

        function T(e, t, n) {
            1 != e && (C(e, t, n), s[e] = t)
        }

        function C(t, i, o) {
            var r = e && e.style;
            if (r) {
                var a = 0 - t * d + i;
                r.webkitTransitionDuration = r.transitionDuration = o + "ms", n ? (r.webkitTransform = "translate(" + a + "px,0)translateZ(0)", r.transform = "translateX(" + a + "px)") : r.left = a + "px"
            }
        }

        function N() {
            v = 0, clearTimeout(m)
        }
    }
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = c(n(53)), s = c(n(164)), l = n(7);

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(163);
    var u = "basepoiitemgifslider", d = 0, f = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {id: "basePoiItem" + n.props.index + "_" + ((new Date).getTime() + parseInt(1e3 * Math.random(0, 1)))}, n.hideGif = n.hideGif.bind(n), n.gotoDetail = n.gotoDetail.bind(n), n.initSwiper = n.initSwiper.bind(n), n.clickTuiJian = n.clickTuiJian.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                this.props.info;
                BNJS.env.compId;
                var e = $(".active" + this.state.id), t = void 0;
                e.on("touchstart", function (n) {
                    t = setTimeout(function () {
                        e.addClass("active-poi-item")
                    }, 200)
                }).on("touchmove", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                }).on("touchend", function () {
                    clearTimeout(t), e.removeClass("active-poi-item")
                })
            }
        }, {
            key: "initSwiper", value: function () {
                var e = this, t = $("#" + this.state.id + " .tuijian-white").width(),
                    n = $("#" + this.state.id + " .poi-scroll").get(0), i = new s.default(n, {
                        continuous: !1,
                        pointers: !1,
                        speed: 150,
                        scrollWidth: t,
                        callback: function (t) {
                            BNJS.swipe && BNJS.swipe.prev(), BNJS.swipe = 1 == t ? i : null, 2 != e.props.index && BNJS.interval && e.hideGif(), !BNJS.interval && e.props.addSlideLog({action: "slide"})
                        }
                    });
                if (2 == this.props.index && $(".gif-silder-base-food-poi").length > 0 && "first" == this.props.from) {
                    var o = setInterval(function () {
                        "none" == $(".gif-silder-base-food-poi").css("display") && clearInterval(o), 0 == d ? (i.next(), $(".gif-silder-base-food-poi .gif-hand").css("width", 125 * document.documentElement.clientWidth / 750 + "px"), d = 1) : (i.prev(), $(".gif-silder-base-food-poi .gif-hand").css("width", "2px"), d = 0)
                    }, 1500);
                    BNJS.interval = o, setTimeout(function () {
                        clearInterval(BNJS.interval), BNJS.interval = 0, $(".gif-silder-base-food-poi").hide();
                        var e = {time: void 0 == BNJS[u] ? 0 : BNJS[u] + 1};
                        BNJS.localStorage.setItem(u, JSON.stringify(e))
                    }, 1e4)
                }
            }
        }, {
            key: "hideGif", value: function () {
                clearInterval(BNJS.interval), BNJS.interval = 0, $(".gif-silder-base-food-poi").hide();
                var e = {time: void 0 == BNJS[u] ? 0 : 10};
                BNJS.localStorage.setItem(u, JSON.stringify(e))
            }
        }, {
            key: "gotoDetail", value: function () {
                var e = $(".active" + this.state.id);
                e.addClass("active-poi-item");
                var t = this.props.info;
                1 == t.source && t.chargeUrl && BNJS.http.get({url: t.chargeUrl}), this.props.addPoiClickLog({
                    place: this.props.place,
                    index: this.props.index,
                    ad: 1 == t.source ? 1 : 0,
                    poiid: t.poiId,
                    isgif: t.isGif || 0
                }), BNJS.page.start(t.poiJumpUrl), setTimeout(function () {
                    e.removeClass("active-poi-item")
                }, 100)
            }
        }, {
            key: "clickTuiJian", value: function () {
                this.props.addSlideLog({action: "click"})
            }
        }, {
            key: "getPoiNameWidth", value: function (e) {
                var t = 458;
                return e.poiDistance ? (t = 360, e.isWangpu ? t = 276 : 1 == e.source && (t = 292)) : e.isWangpu ? t = 328 : 1 == e.source && (t = 396), t * document.documentElement.clientWidth / 750 + "px"
            }
        }, {
            key: "getReasonWidth", value: function (e) {
                var t = 458;
                return (t -= 116 * e) * document.documentElement.clientWidth / 750 - 4 + "px"
            }
        }, {
            key: "render", value: function () {
                for (var e = this.props.info, t = e.certification_labels, n = {maxWidth: this.getReasonWidth(t ? t.length : 0)}, i = {maxWidth: this.getPoiNameWidth(e)}, o = "base-new-poi-item border-bottom active" + this.state.id, s = e.recomReason, c = !!(e.detail && e.detail.length && e.detail[0].minTitle) && e.detail[0], u = !(!e.payAtshop || "" == e.shopingTitle), d = e.detail && e.detail.length && e.detail[0].price ? +(parseInt(e.detail[0].price, 10) / 100).toFixed(2) : "", f = e.poiName.length > 8 && ("ios" != BNJS.device.platform && parseInt(BNJS.device.os.substr(3)) < 20 || "ios" == BNJS.device.platform && parseInt(BNJS.device.os) <= 8) ? e.poiName.substr(0, 8) + "..." : e.poiName, p = ("642" == e.catgs || e.subcatgs && e.subcatgs.indexOf("341") > -1) && 1 == e.evo__ext__can_order ? 1 : 0, h = e.dish || [], m = [], v = 0, g = h.length; v < g; v += 3) m.push(h.slice(v, v + 3));
                var y = "cuisine-home" == BNJS.env.compId && !1, b = "cuisine-home" == BNJS.env.compId && !1,
                    _ = 1 == e.seapi__corner_is_open && e.seapi__corner_icon_url ? e.seapi__corner_icon_url : null,
                    w = (0, l.isAndroid)() ? "android-icon-span" : "",
                    S = {backgroundImage: "url(" + e.tinyImage + ")"}, x = e.isAr,
                    E = (0, l.isAndroid)() ? "android" : "";
                return r.default.createElement("section", {className: o}, y && 2 == this.props.index ? r.default.createElement("div", {
                    className: "gif-silder-base-food-poi",
                    onClick: this.hideGif
                }, r.default.createElement("div", {className: "gif-mask"}), r.default.createElement("div", {className: "gif-title"}, "左滑小手指，体验新功能"), r.default.createElement("div", {className: "gif-content"}, r.default.createElement("div", {className: "gif-hand"}, r.default.createElement("span", {className: "gif-hand-img"})))) : null, r.default.createElement("div", {
                    className: "item-image",
                    onClick: this.gotoDetail,
                    style: S
                }, x ? r.default.createElement("div", {className: "poi-ar-info"}, r.default.createElement("span", {className: "text"}, "AR")) : null), _ ? r.default.createElement("div", {className: "tag-cuxiao"}, r.default.createElement("div", {className: "box-shadow"}), r.default.createElement("img", {src: _})) : null, r.default.createElement("ul", {
                    className: "item-info",
                    onClick: this.gotoDetail
                }, r.default.createElement("li", {className: "poi-name-line"}, e.isWangpu && 1 != e.source ? r.default.createElement("span", {className: "wp-icon"}) : null, r.default.createElement("div", {className: "poi-title"}, r.default.createElement("span", {
                    className: "poi-name-span " + E,
                    style: i
                }, f), 1 == e.source ? r.default.createElement("span", {className: "poi-ad"}, "广告") : null), e.poiDistance ? r.default.createElement("span", {className: "poi-distance"}, e.poiDistance) : null), r.default.createElement("li", {className: "poi-star-line"}, r.default.createElement(a.default, {
                    hideScore: 1,
                    score: e.averageScore ? e.averageScore : -1
                }), e.perPrice ? r.default.createElement("div", {className: "item-price"}, "￥", parseInt(e.perPrice / 100), "/人") : null, e.bizareaTitle ? r.default.createElement("div", {className: "item-bizarea"}, e.bizareaTitle) : null), null, c ? r.default.createElement("li", {className: "poi-tuan-line"}, r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: w}, "团")), r.default.createElement("span", {className: "poi-tuan-info"}, d ? d + "元购" : "", c.minTitle)) : null, p ? r.default.createElement("li", {className: "poi-appoint-line"}, r.default.createElement("div", {className: "poi-item-icon-info poi-item-icon-appoint"}, r.default.createElement("span", {className: w}, "订")), r.default.createElement("span", {className: "poi-appoint-info"}, "支持在线预定")) : null, u && !p ? r.default.createElement("li", {className: c ? "poi-pay-line poi-pay-tuan-line" : "poi-pay-line"}, r.default.createElement("div", {className: "poi-item-icon-info"}, r.default.createElement("span", {className: w}, "付")), r.default.createElement("span", {className: "poi-pay-info"}, e.shopingTitle)) : null, s || t && t.length > 0 ? r.default.createElement("div", {className: "poi-tags-line"}, t && t.length > 0 ? r.default.createElement("div", {className: "info-tags-group"}, t.map(function (e, t) {
                    return t >= 3 ? null : r.default.createElement("div", {
                        key: t,
                        className: "tag-item-box"
                    }, r.default.createElement("p", null, r.default.createElement("span", {className: (0, l.isAndroid)() ? "tag-item tag-item-android" : "tag-item"}, e)))
                })) : null, s && (!t || t.length <= 2) ? r.default.createElement("div", {
                    style: n,
                    className: "poi-reason-group"
                }, s) : null) : null), b ? r.default.createElement("div", {
                    className: "poi-container",
                    id: this.state.id
                }, r.default.createElement("ul", {
                    className: "poi-scroll",
                    onClick: this.gotoDetail
                }, r.default.createElement("li", {className: "tuijian-white"}), r.default.createElement("li", {
                    className: "item-tuijian",
                    onClick: this.clickTuiJian
                }, r.default.createElement("div", {className: "tuijian-title"}, r.default.createElement("span", {className: "icon-tuijian"}), "推荐菜"), r.default.createElement("div", {className: "tuijian-list"}, m && m.length ? m.map(function (e, t) {
                    if (t >= 2) return null;
                    var n = e[1] ? "tuijian-item need-border" : "tuijian-item",
                        i = e[2] ? "tuijian-item need-border" : "tuijian-item";
                    return r.default.createElement("div", {className: "dish-line"}, e[0] ? r.default.createElement("span", {className: n}, e[0]) : null, e[1] ? r.default.createElement("span", {className: i}, e[1]) : null, e[2] ? r.default.createElement("span", {className: "tuijian-item"}, e[2]) : null)
                }) : r.default.createElement("span", {className: "tuijian-no-data"}, "暂无推荐菜品"))))) : null)
            }
        }]), t
    }();
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = d(o), a = d(n(167)), s = d(n(161)), l = d(n(158)), c = d(n(155)), u = n(7);
    d(n(29));

    function d(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(152);
    var f = 0, p = [], h = document.body.clientHeight, m = 0, v = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.addShowLog = n.addShowLog.bind(n), n.addSlideLog = n.addSlideLog.bind(n), n.addPoiClickLog = n.addPoiClickLog.bind(n), n.updateTagWidth = n.updateTagWidth.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                this.updateTagWidth()
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.updateTagWidth();
                var e = this, t = e.props.list;
                $(".search-poi-list section").each(function (n, i) {
                    var o = i.offsetTop, r = $.inArray(n, p) > -1;
                    o < h && !r && (1 == t[n].source && (m += 1), p.push(n), e.props.addPoiShowLog({
                        place: 1 == t[n].source ? m : 0,
                        index: n,
                        poiid: t[n].poiId,
                        ad: 1 == t[n].source ? 1 : 0,
                        isgif: t[n].isGif || 0,
                        dtype: t[n].rec_type || "",
                        svalue: t[n].s || ""
                    }))
                }), window.onscroll = function () {
                    $(".search-poi-list section").each(function (n, i) {
                        var o = i.offsetTop, r = document.documentElement.scrollTop || document.body.scrollTop,
                            a = $.inArray(n, p) > -1;
                        o - r < h && !a && (p.push(n), 1 == t[n].source && (m += 1), e.props.addPoiShowLog({
                            place: 1 == t[n].source ? m : 0,
                            index: n,
                            poiid: t[n].poiId,
                            ad: 1 == t[n].source ? 1 : 0,
                            isgif: t[n].isGif || 0,
                            dtype: t[n].rec_type || "",
                            svalue: t[n].s || ""
                        }))
                    })
                }
            }
        }, {
            key: "updateTagWidth", value: function () {
                $(".active-poi-item").removeClass("active-poi-item"), $(".tag-item-box").map(function (e, t) {
                    $(t).css({width: $(t).find("p").width(), height: $(t).find("p").height()})
                })
            }
        }, {
            key: "addSlideLog", value: function (e) {
                this.props.addCategorySlideLog && this.props.addCategorySlideLog(e)
            }
        }, {
            key: "addShowLog", value: function (e) {
            }
        }, {
            key: "addPoiClickLog", value: function (e) {
                var t = this.props.list;
                e.dtype = t[e.index].rec_type || "", e.svalue = t[e.index].s || "", this.props.addPoiClickLog && this.props.addPoiClickLog(e)
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.list, n = this.props.hashb || 0, i = this.props.startIndex || 0,
                    o = this.props.style || 0;
                return r.default.createElement("div", {className: "search-poi-list"}, t && t.length > 0 && t.map(function (t, d) {
                    var p = t.photoList, h = i + d;
                    return 1 == t.source && (f += 1), 2 == o ? r.default.createElement(l.default, {
                        key: d,
                        place: 1 == t.source ? f : 0,
                        from: e.props.from,
                        index: h,
                        info: t,
                        addShowLog: e.addShowLog,
                        addPoiClickLog: e.addPoiClickLog
                    }) : 1 == o && (0, u.isArray)(p) && p.length >= 3 ? r.default.createElement(c.default, {
                        key: d,
                        place: 1 == t.source ? f : 0,
                        from: e.props.from,
                        index: h,
                        info: t,
                        addShowLog: e.addShowLog,
                        addPoiClickLog: e.addPoiClickLog
                    }) : 1 == t.isWangpu && (0, u.isArray)(p) && 1 == n && p.length >= 3 ? (!0, r.default.createElement(s.default, {
                        key: d,
                        place: 1 == t.source ? f : 0,
                        from: e.props.from,
                        index: h,
                        info: t,
                        addShowLog: e.addShowLog,
                        addPoiClickLog: e.addPoiClickLog
                    })) : (!1, r.default.createElement(a.default, {
                        key: d,
                        place: 1 == t.source ? f : 0,
                        from: e.props.from,
                        index: h,
                        info: t,
                        addSlideLog: e.addSlideLog,
                        addShowLog: e.addShowLog,
                        addPoiClickLog: e.addPoiClickLog
                    }))
                }))
            }
        }]), t
    }();
    t.default = v
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = u(o), a = n(7), s = u(n(168)), l = u(n(97)), c = u(n(29));

    function u(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(147);
    var d = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.addShowLog = n.addShowLog.bind(n), n.addPoiClickLog = n.addPoiClickLog.bind(n), n.addCategorySlideLog = n.addCategorySlideLog.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "addCategorySlideLog", value: function (e) {
                (0, a.addLog)(c.default.cuisine_poilist_slide, {action: e.action})
            }
        }, {
            key: "addShowLog", value: function (e) {
                var t = this.props.hashb || 0;
                (0, a.addLog)(c.default.cuisine_poilist_show, {
                    place: e.place,
                    pos: e.index,
                    poi: e.poiid,
                    ad: e.ad,
                    ishb: t,
                    isgif: e.isgif,
                    dynamictype: e.dtype,
                    s: e.svalue
                })
            }
        }, {
            key: "addPoiClickLog", value: function (e) {
                var t = this.props.hashb || 0;
                (0, a.addLog)(c.default.cuisine_poilist_click, {
                    place: e.place,
                    pos: e.index,
                    poi: e.poiid,
                    ad: e.ad,
                    ishb: t,
                    isgif: e.isgif,
                    dynamictype: e.dtype,
                    s: e.svalue
                })
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement("div", {className: "poi-list-container"}, r.default.createElement(s.default, {
                    style: 0,
                    hashb: this.props.hashb,
                    from: "first",
                    list: this.props.list,
                    addCategorySlideLog: this.addCategorySlideLog,
                    addPoiShowLog: this.addShowLog,
                    addPoiClickLog: this.addPoiClickLog
                }), r.default.createElement(l.default, {status: this.props.loadingStatus}))
            }
        }]), t
    }();
    t.default = d
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = s(o), a = s(n(7));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(171);
    var l = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handleMaskTouchMove = n.handleMaskTouchMove.bind(n), n.handleContentTouchMove = n.handleContentTouchMove.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                a.default.isWap() ? $(".simple-sort-dropdown").css("top", 40) : this.props.hasPageStyle ? $(".simple-sort-dropdown").css("top", this.props.barHeight + 40 + "px") : $(".simple-sort-dropdown").css("top", 40), $(".simple-sort-dropdown").css("visibility", "visible")
            }
        }, {
            key: "handleMaskTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation(), e.returnValue = !1
            }
        }, {
            key: "handleContentTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation(), e.returnValue = !1
            }
        }, {
            key: "render", value: function () {
                if (!this.props.list || !this.props.list.length) return this.props.hideLayer(), null;
                var e = this.props.list.length, t = this.props.foreach_prefix || "",
                    n = this.props.list.map(function (n, i) {
                        var o = this.props.selectId == n[t + "id"] ? "selected" : "";
                        return "selected" == o && (o += 0 === i ? " border-bottom" : i === e - 1 ? " border-top" : " border-bottom border-top"), r.default.createElement("li", {
                            key: i,
                            className: o,
                            "data-index": i
                        }, r.default.createElement("a", {
                            onClick: this.props.changeEvent.bind(this, n),
                            href: "javascript:;"
                        }, n[t + "name"]))
                    }.bind(this));
                return r.default.createElement("div", {className: this.props.notouchmove ? "simple-sort-dropdown notouchmove" : "simple-sort-dropdown"}, r.default.createElement("div", {
                    className: "mask",
                    onClick: this.props.hideLayer,
                    onTouchMove: this.handleMaskTouchMove
                }), r.default.createElement("div", {
                    className: "content",
                    onTouchMove: this.handleContentTouchMove
                }, r.default.createElement("ul", {className: "item-list"}, n)))
            }
        }]), t
    }();
    t.default = l
}, , function (e, t, n) {
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = c(n(98)), s = c(n(7)), l = (c(n(100)), n(99));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(176);
    var u = a.default.is, d = a.default.fromJS, f = {}, p = void 0, h = void 0, m = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                parent_area_id: n.props.parent_area_id,
                area_id: n.props.area_id
            }, n.transitionend = n.transitionend.bind(n), n.handlerChangeSubCategory = n.handlerChangeSubCategory.bind(n), n.handlerChangeThirdCategory = n.handlerChangeThirdCategory.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.area_type !== f.area_type ? this.setState({
                    parent_area_id: 0,
                    area_id: 0
                }) : this.setState({parent_area_id: e.parent_area_id, area_id: e.area_id})
            }
        }, {
            key: "componentDidUpdate", value: function (e) {
                e.area_type !== this.props.area_type && (this.props.area_type === f.area_type ? ($(".two-column-list .left").scrollTop(f.left), $(".two-column-list .right").scrollTop(f.right)) : (h.scrollTo(0, 0), p.scrollTo(0, 0))), p.refresh(), h.refresh()
            }
        }, {
            key: "componentDidMount", value: function () {
                h = new l.iScroll("scroll-area-left", {
                    vScrollbar: !1,
                    hScrollbar: !1,
                    hScroll: !1,
                    onScrollMove: function () {
                        event.preventDefault()
                    }
                }), p = new l.iScroll("scroll-area-right", {
                    vScrollbar: !1,
                    hScrollbar: !1,
                    hScroll: !1,
                    onScrollMove: function () {
                        event.preventDefault()
                    }
                }), this.transitionend()
            }
        }, {
            key: "transitionend", value: function () {
                var e = 40 + $(window).scrollTop();
                if (this.props.haveTypeMenu && (e += 40), s.default.isWap()) {
                    var t = $(".two-column-list .left .second-item.selected").offset().top;
                    40 * $(".second-item").length < $(".scroll-area-right").height() || 0 == $(".second-item.selected").data("index") || (40 * ($(".second-item").length - $(".second-item.selected").data("index")) > $(".scroll-area-left").height() ? h.scrollTo(0, -(t - e)) : h.scrollTo(0, -(40 * $(".second-item").length - $(".scroll-area-left").height())));
                    var n = t;
                    if ($(".two-column-list .right .third-item.selected").length) {
                        n = $(".two-column-list .right .third-item.selected").offset().top;
                        40 * $(".third-item").length < $(".scroll-area-right").height() || 0 == $(".third-item.selected").data("index") || (40 * ($(".third-item").length - $(".third-item.selected").data("index")) > $(".scroll-area-right").height() ? p.scrollTo(0, -(n - e)) : p.scrollTo(0, -(40 * $(".third-item").length - $(".scroll-area-right").height())))
                    }
                } else if (this.props.hasPageStyle) {
                    t = $(".two-column-list .left .second-item.selected").offset().top;
                    40 * $(".second-item").length < $(".scroll-area-right").height() || 0 == $(".second-item.selected").data("index") || (40 * ($(".second-item").length - $(".second-item.selected").data("index")) > $(".scroll-area-left").height() ? h.scrollTo(0, -(t - e - this.props.barHeight)) : h.scrollTo(0, -(40 * $(".second-item").length - $(".scroll-area-left").height())));
                    n = t;
                    if ($(".two-column-list .right .third-item.selected").length) {
                        n = $(".two-column-list .right .third-item.selected").offset().top;
                        40 * $(".third-item").length < $(".scroll-area-right").height() || 0 == $(".third-item.selected").data("index") || (40 * ($(".third-item").length - $(".third-item.selected").data("index")) > $(".scroll-area-right").height() ? p.scrollTo(0, -(n - e - this.props.barHeight)) : p.scrollTo(0, -(40 * $(".third-item").length - $(".scroll-area-right").height())))
                    }
                } else {
                    t = $(".two-column-list .left .second-item.selected").offset().top;
                    40 * $(".second-item").length < $(".scroll-area-right").height() || 0 == $(".second-item.selected").data("index") || (40 * ($(".second-item").length - $(".second-item.selected").data("index")) > $(".scroll-area-left").height() ? h.scrollTo(0, -(t - e)) : h.scrollTo(0, -(40 * $(".second-item").length - $(".scroll-area-left").height())));
                    n = t;
                    if ($(".two-column-list .right .third-item.selected").length) {
                        n = $(".two-column-list .right .third-item.selected").offset().top;
                        40 * $(".third-item").length < $(".scroll-area-right").height() || 0 == $(".third-item.selected").data("index") || (40 * ($(".third-item").length - $(".third-item.selected").data("index")) > $(".scroll-area-right").height() ? p.scrollTo(0, -(n - e)) : p.scrollTo(0, -(40 * $(".third-item").length - $(".scroll-area-right").height())))
                    }
                }
                f = {
                    left: t - e + 2,
                    right: n - e + 2,
                    area_type: this.props.area_type,
                    parent_area_id: this.props.parent_area_id,
                    area_id: this.props.area_id
                }, $(".drop-down-city-list").css("visibility", "visible")
            }
        }, {
            key: "handlerChangeSubCategory", value: function (e) {
                var t = this;
                this.setState({parent_area_id: e.id}, function () {
                    "全线" === e.name && t.props.changeAreaParams({
                        parent_area_id: t.state.parent_area_id,
                        area_id: e.id,
                        area_name: e.name
                    })
                })
            }
        }, {
            key: "handlerChangeThirdCategory", value: function (e) {
                this.props.changeAreaParams({
                    parent_area_id: this.state.parent_area_id,
                    area_id: e.id,
                    area_name: e.name
                })
            }
        }, {
            key: "shouldComponentUpdate", value: function (e, t) {
                return !(this.props === e || u(d(this.props), d(e))) || !(this.state === t || u(d(this.state), d(t)))
            }
        }, {
            key: "render", value: function () {
                if (!this.props.data[this.props.area_type] || !s.default.isArray(this.props.data[this.props.area_type].d) || !this.props.data[this.props.area_type].d.length) return null;
                var e = [], t = this.props.data[this.props.area_type].d.map(function (t, n) {
                    var i = t.id == this.state.parent_area_id ? 1 : 0;
                    return i && (e = s.default.isArray(t.d) ? t.d.map(function (e, n) {
                        var i = e.id == this.state.area_id ? 1 : 0,
                            o = {id: e.id, name: parseInt(e.id, 10) ? e.name : t.name};
                        return r.default.createElement("li", {
                            key: n,
                            onClick: this.handlerChangeThirdCategory.bind(this, o),
                            className: i ? "third-item selected" : "third-item",
                            "data-index": n
                        }, e.name)
                    }.bind(this)) : []), r.default.createElement("li", {
                        key: n,
                        onClick: this.handlerChangeSubCategory.bind(this, t),
                        className: i ? "second-item selected border-top border-bottom" : "second-item border-right",
                        "data-index": n
                    }, t.name)
                }.bind(this));
                return r.default.createElement("div", {className: "two-column-list"}, r.default.createElement("div", {
                    className: "scroll-area-left scroll-area",
                    id: "scroll-area-left"
                }, r.default.createElement("ul", {className: "left"}, t)), r.default.createElement("div", {
                    className: "scroll-area-right scroll-area",
                    id: "scroll-area-right"
                }, r.default.createElement("ul", {className: "right"}, e)))
            }
        }]), t
    }();
    t.default = m
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = c(n(98)), s = c(n(7)), l = c(n(177));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(174);
    var u = a.default.is, d = a.default.fromJS, f = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                area_type: n.props.area_type,
                parent_area_id: n.props.parent_area_id,
                area_id: n.props.area_id
            }, n.handleChangeType = n.handleChangeType.bind(n), n.changeAreaParams = n.changeAreaParams.bind(n), n.handleTouchMove = n.handleTouchMove.bind(n), n.thirdMenu = n.thirdMenu.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                s.default.isWap() ? ($(".drop-down-city-list").css("top", "40px"), this.thirdMenu()) : this.props.hasPageStyle ? ($(".drop-down-city-list").css("top", this.props.barHeight + 40 + "px"), this.thirdMenu()) : ($(".drop-down-city-list").css("top", "40px"), this.thirdMenu())
            }
        }, {
            key: "thirdMenu", value: function () {
                if ($("#thirdMenu").length) {
                    var e = $("#thirdMenu li.selected span").offset().left;
                    $("#thirdMenu .selected-border").animate({left: e + "px"}, 200, "ease-out")
                }
            }
        }, {
            key: "shouldComponentUpdate", value: function (e, t) {
                return !(this.props === e || u(d(this.props), d(e))) || !(this.state === t || u(d(this.state), d(t)))
            }
        }, {
            key: "handleChangeType", value: function (e) {
                if ($("#thirdMenu").length) {
                    var t = $($("#thirdMenu li").get(e)).find("span").offset().left;
                    $("#thirdMenu .selected-border").animate({left: t + "px"}, 200, "ease-out"), this.setState({area_type: e})
                }
            }
        }, {
            key: "handleTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation(), e.returnValue = !1
            }
        }, {
            key: "changeAreaParams", value: function (e) {
                var t = s.default.extend({area_type: this.state.area_type}, e);
                this.props.receiveCityParams(t)
            }
        }, {
            key: "render", value: function () {
                if (!this.props.list.d || !this.props.list.d.length) return this.props.hideLayer(), null;
                var e = null;
                return this.props.list.d.length > 1 && (e = this.props.list.d.map(function (e, t) {
                    var n = t === this.state.area_type ? 1 : 0;
                    return r.default.createElement("li", {
                        key: t,
                        className: n ? "selected" : "",
                        onClick: this.handleChangeType.bind(this, t)
                    }, r.default.createElement("span", null, e.name))
                }.bind(this))), r.default.createElement("div", {className: "drop-down-city-list"}, r.default.createElement("div", {
                    className: "mask",
                    onClick: this.props.hideLayer,
                    onTouchMove: this.handleTouchMove
                }), r.default.createElement("div", {className: "content"}, this.props.list.d.length > 1 ? r.default.createElement("ul", {
                    id: "thirdMenu",
                    className: "third-menu border-bottom"
                }, e, r.default.createElement("div", {className: "selected-border"})) : null, r.default.createElement(l.default, {
                    data: this.props.list.d,
                    parent_area_id: this.state.parent_area_id,
                    area_type: this.state.area_type,
                    area_id: this.props.area_id,
                    changeAreaParams: this.changeAreaParams,
                    haveTypeMenu: this.props.list.d.length > 1 ? 1 : 0
                })))
            }
        }]), t
    }();
    t.default = f
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = (i = r) && i.__esModule ? i : {default: i};
    n(180);
    var s = function (e) {
        function t(e) {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "render", value: function () {
                var e = this.props.list.map(function (e, t) {
                    var n = e.d.map(function (e, n) {
                        var i = this.props.listStatus[t] == e.id ? 1 : 0;
                        return void 0 === this.props.listStatus[t] && 0 === n && (i = 1), a.default.createElement("li", {
                            key: n,
                            className: i ? "border-all" : "",
                            onClick: this.props.changeRadioStatus.bind(this, e.id, t)
                        }, e.name)
                    }.bind(this));
                    return a.default.createElement("div", {
                        key: t,
                        className: "one-line border-bottom"
                    }, a.default.createElement("div", {className: "title"}, e.name), a.default.createElement("ul", {className: "item-list"}, n))
                }.bind(this));
                return this.props.list && this.props.list.length ? a.default.createElement("div", {className: "radio-line"}, e) : null
            }
        }]), t
    }();
    t.default = s
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = (i = r) && i.__esModule ? i : {default: i};
    n(183);
    var s = function (e) {
        function t(e) {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "render", value: function () {
                var e = this.props.list.map(function (e, t) {
                    if (void 0 !== e.id) {
                        var n = this.props.listStatus[t] == e.id ? 1 : 0;
                        return a.default.createElement("div", {
                            key: t,
                            onClick: this.props.changeCheckStatus.bind(this, n ? void 0 : e.id, t)
                        }, a.default.createElement("span", {className: n ? "selected icon" : "icon"}), a.default.createElement("span", null, e.name))
                    }
                }.bind(this));
                return this.props.list && this.props.list.length ? a.default.createElement("div", {className: "check-line border-bottom"}, e) : null
            }
        }]), t
    }();
    t.default = s
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o);
    n(186);
    var a = c(n(7)), s = c(n(184)), l = c(n(181));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var u = [], d = [], f = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return u = a.default.clone(n.props.advanceCheckStatus), n.props.advanceCheck && n.props.advanceCheck.length && (u.length = n.props.advanceCheck.length), d = a.default.clone(n.props.classstatus), n.props.classlist && n.props.classlist.length && (d.length = n.props.classlist.length), n.state = {
                advanceCheckStatus: u || [],
                advanceStatusList: d || []
            }, n.changeCheckStatus = n.changeCheckStatus.bind(n), n.changeRadioStatus = n.changeRadioStatus.bind(n), n.filterParams = n.filterParams.bind(n), n.handleTouchMove = n.handleTouchMove.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                a.default.isWap() ? $(".multi-line-dropdown").css("top", "40px") : this.props.hasPageStyle ? $(".multi-line-dropdown").css("top", this.props.barHeight + 40 + "px") : $(".multi-line-dropdown").css("top", "40px"), $(".multi-line-dropdown").css("visibility", "visible"), setTimeout(function () {
                    -1 != BNJS.device.name.toLocaleLowerCase().indexOf("xiaomi") && $(".mask").css("background-color", "rgba(0, 0, 0, 0.6)")
                }, 350)
            }
        }, {
            key: "changeCheckStatus", value: function (e, t) {
                u.splice(t, 1, e), this.setState({advanceCheckStatus: u})
            }
        }, {
            key: "changeRadioStatus", value: function (e, t) {
                d.splice(t, 1, e), this.setState({advanceStatusList: d})
            }
        }, {
            key: "filterParams", value: function () {
                this.props.receiveParams({
                    advanceStatusList: this.state.advanceStatusList,
                    advanceCheckStatus: this.state.advanceCheckStatus
                })
            }
        }, {
            key: "handleTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation()
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement("div", {className: "multi-line-dropdown"}, r.default.createElement("div", {
                    className: "mask",
                    onClick: this.props.hideLayer,
                    onTouchMove: this.handleTouchMove
                }), r.default.createElement("div", {
                    className: "content",
                    onTouchMove: this.handleTouchMove
                }, r.default.createElement(s.default, {
                    list: this.props.advanceCheck,
                    listStatus: this.state.advanceCheckStatus,
                    changeCheckStatus: this.changeCheckStatus
                }), r.default.createElement(l.default, {
                    list: this.props.classlist,
                    listStatus: this.state.advanceStatusList,
                    changeRadioStatus: this.changeRadioStatus
                }), r.default.createElement("div", {
                    className: "filter-btn border-all",
                    onClick: this.filterParams
                }, "完成")))
            }
        }]), t
    }();
    t.default = f
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = l(o), a = l(n(7));
    n(189);
    l(n(100));
    var s = n(99);

    function l(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var c = void 0, u = void 0, d = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.transitionend = n.transitionend.bind(n), n.handleMaskTouchMove = n.handleMaskTouchMove.bind(n), n.handleListTouchMove = n.handleListTouchMove.bind(n), n.handleListTouchStart = n.handleListTouchStart.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                if (u = new s.iScroll("simple-content", {
                    vScrollbar: !1,
                    hScrollbar: !1,
                    hScroll: !1,
                    onScrollMove: function () {
                        event.preventDefault()
                    }
                }), a.default.isWap()) $(".simple-dropdown").css("top", 40); else {
                    this.props.hasPageStyle ? $(".simple-dropdown").css("top", this.props.barHeight + 40 + "px") : $(".simple-dropdown").css("top", 40)
                }
                this.transitionend(), setTimeout(function () {
                    -1 != BNJS.device.name.toLocaleLowerCase().indexOf("xiaomi") && $(".mask").css("background-color", "rgba(0, 0, 0, 0.6)")
                }, 400)
            }
        }, {
            key: "componentDidUpdate", value: function () {
                u.refresh()
            }
        }, {
            key: "transitionend", value: function () {
                var e = $(".simple-dropdown .border-bottom.selected");
                if (e.length) {
                    var t = e.offset().top;
                    a.default.isWap() ? 40 * $(".item-list li").length < $(".content").height() || 0 == $("li.selected").data("index") || (40 * ($(".item-list li").length - $("li.selected").data("index")) > $(".content").height() ? u.scrollTo(0, -(t - 40 - $(window).scrollTop())) : u.scrollTo(0, -(40 * $(".item-list li").length - $(".content").height()))) : this.props.hasPageStyle ? 40 * $(".item-list li").length <= $(".content").height() || 0 == $("li.selected").data("index") || (40 * ($(".item-list li").length - $("li.selected").data("index")) > $(".content").height() ? u.scrollTo(0, -(t - 40 - $(window).scrollTop() - this.props.barHeight)) : u.scrollTo(0, -(40 * $(".item-list li").length - $(".content").height()))) : 40 * $(".item-list li").length < $(".content").height() || (40 * ($(".item-list li").length - $("li.selected").data("index")) > $(".content").height() ? u.scrollTo(0, -(t - 40 - $(window).scrollTop())) : u.scrollTo(0, -(40 * $(".item-list li").length - $(".content").height())))
                }
                $(".simple-dropdown").css("visibility", "visible")
            }
        }, {
            key: "handleMaskTouchMove", value: function (e) {
                e.preventDefault(), e.stopPropagation(), e.returnValue = !1
            }
        }, {
            key: "handleListTouchMove", value: function (e) {
                $(".content").height() == $(".item-list").height() && (e.preventDefault(), e.stopPropagation(), e.returnValue = !1), $(".content").scrollTop() + $(".content").height() == 40 * $(".item-list li").length && e.touches[0].pageY - c < 0 && (e.preventDefault(), e.stopPropagation(), e.returnValue = !1), $(".content").scrollTop() < 50 && c - e.touches[0].pageY < 0 && (e.preventDefault(), e.stopPropagation(), e.returnValue = !1)
            }
        }, {
            key: "handleListTouchStart", value: function (e) {
                c = e.touches[0].pageY
            }
        }, {
            key: "render", value: function () {
                if (!this.props.list || !this.props.list.length) return this.props.hideLayer(), null;
                var e = this.props.list.length, t = this.props.foreach_prefix || "",
                    n = this.props.list.map(function (n, i) {
                        var o = this.props.selectId == n[t + "id"] ? "selected" : "";
                        return "selected" == o && (o += 0 === i ? " border-bottom" : i === e - 1 ? " border-top" : " border-bottom border-top"), r.default.createElement("li", {
                            key: i,
                            className: o,
                            "data-index": i
                        }, r.default.createElement("a", {
                            onClick: this.props.changeEvent.bind(this, n),
                            href: "javascript:;"
                        }, n[t + "name"]))
                    }.bind(this));
                return r.default.createElement("div", {className: this.props.notouchmove ? "simple-dropdown notouchmove" : "simple-dropdown"}, r.default.createElement("div", {
                    className: "mask",
                    onClick: this.props.hideLayer,
                    onTouchMove: this.handleMaskTouchMove
                }), r.default.createElement("div", {
                    className: "content",
                    id: "simple-content"
                }, r.default.createElement("ul", {className: "item-list"}, n)))
            }
        }]), t
    }();
    t.default = d
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = function () {
        var e, t, n, i, r, a, s = [], l = s.concat, c = s.filter, u = s.slice, d = window.document, f = {}, p = {},
            h = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
            m = /^\s*<(\w+|!)[^>]*>/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, y = /^(?:body|html)$/i,
            b = /([A-Z])/g, _ = ["val", "css", "html", "text", "data", "width", "height", "offset"],
            w = d.createElement("table"), S = d.createElement("tr"),
            x = {tr: d.createElement("tbody"), tbody: w, thead: w, tfoot: w, td: S, th: S, "*": d.createElement("div")},
            E = /complete|loaded|interactive/, k = /^[\w-]*$/, T = {}, C = T.toString, N = {},
            P = d.createElement("div"), O = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, I = Array.isArray || function (e) {
                return e instanceof Array
            };

        function M(e) {
            return null == e ? String(e) : T[C.call(e)] || "object"
        }

        function D(e) {
            return "function" == M(e)
        }

        function j(e) {
            return null != e && e == e.window
        }

        function L(e) {
            return null != e && e.nodeType == e.DOCUMENT_NODE
        }

        function z(e) {
            return "object" == M(e)
        }

        function A(e) {
            return z(e) && !j(e) && Object.getPrototypeOf(e) == Object.prototype
        }

        function R(e) {
            return "number" == typeof e.length
        }

        function $(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }

        function B(e) {
            return e in p ? p[e] : p[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
        }

        function W(e, t) {
            return "number" != typeof t || h[$(e)] ? t : t + "px"
        }

        function F(e) {
            return "children" in e ? u.call(e.children) : n.map(e.childNodes, function (e) {
                if (1 == e.nodeType) return e
            })
        }

        function U(e, t) {
            var n, i = e ? e.length : 0;
            for (n = 0; n < i; n++) this[n] = e[n];
            this.length = i, this.selector = t || ""
        }

        function Y(e, t) {
            return null == t ? n(e) : n(e).filter(t)
        }

        function X(e, t, n, i) {
            return D(t) ? t.call(e, n, i) : t
        }

        function H(e, t, n) {
            null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
        }

        function q(t, n) {
            var i = t.className || "", o = i && i.baseVal !== e;
            if (n === e) return o ? i.baseVal : i;
            o ? i.baseVal = n : t.className = n
        }

        function V(e) {
            try {
                return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? n.parseJSON(e) : e) : e
            } catch (t) {
                return e
            }
        }

        return N.matches = function (e, t) {
            if (!t || !e || 1 !== e.nodeType) return !1;
            var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (n) return n.call(e, t);
            var i, o = e.parentNode, r = !o;
            return r && (o = P).appendChild(e), i = ~N.qsa(o, t).indexOf(e), r && P.removeChild(e), i
        }, r = function (e) {
            return e.replace(/-+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, a = function (e) {
            return c.call(e, function (t, n) {
                return e.indexOf(t) == n
            })
        }, N.fragment = function (t, i, o) {
            var r, a, s;
            return v.test(t) && (r = n(d.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(g, "<$1></$2>")), i === e && (i = m.test(t) && RegExp.$1), i in x || (i = "*"), (s = x[i]).innerHTML = "" + t, r = n.each(u.call(s.childNodes), function () {
                s.removeChild(this)
            })), A(o) && (a = n(r), n.each(o, function (e, t) {
                _.indexOf(e) > -1 ? a[e](t) : a.attr(e, t)
            })), r
        }, N.Z = function (e, t) {
            return new U(e, t)
        }, N.isZ = function (e) {
            return e instanceof N.Z
        }, N.init = function (t, i) {
            var o, r;
            if (!t) return N.Z();
            if ("string" == typeof t) if ("<" == (t = t.trim())[0] && m.test(t)) o = N.fragment(t, RegExp.$1, i), t = null; else {
                if (i !== e) return n(i).find(t);
                o = N.qsa(d, t)
            } else {
                if (D(t)) return n(d).ready(t);
                if (N.isZ(t)) return t;
                if (I(t)) r = t, o = c.call(r, function (e) {
                    return null != e
                }); else if (z(t)) o = [t], t = null; else if (m.test(t)) o = N.fragment(t.trim(), RegExp.$1, i), t = null; else {
                    if (i !== e) return n(i).find(t);
                    o = N.qsa(d, t)
                }
            }
            return N.Z(o, t)
        }, (n = function (e, t) {
            return N.init(e, t)
        }).extend = function (n) {
            var i, o = u.call(arguments, 1);
            return "boolean" == typeof n && (i = n, n = o.shift()), o.forEach(function (o) {
                !function n(i, o, r) {
                    for (t in o) r && (A(o[t]) || I(o[t])) ? (A(o[t]) && !A(i[t]) && (i[t] = {}), I(o[t]) && !I(i[t]) && (i[t] = []), n(i[t], o[t], r)) : o[t] !== e && (i[t] = o[t])
                }(n, o, i)
            }), n
        }, N.qsa = function (e, t) {
            var n, i = "#" == t[0], o = !i && "." == t[0], r = i || o ? t.slice(1) : t, a = k.test(r);
            return e.getElementById && a && i ? (n = e.getElementById(r)) ? [n] : [] : 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType ? [] : u.call(a && !i && e.getElementsByClassName ? o ? e.getElementsByClassName(r) : e.getElementsByTagName(t) : e.querySelectorAll(t))
        }, n.contains = d.documentElement.contains ? function (e, t) {
            return e !== t && e.contains(t)
        } : function (e, t) {
            for (; t && (t = t.parentNode);) if (t === e) return !0;
            return !1
        }, n.type = M, n.isFunction = D, n.isWindow = j, n.isArray = I, n.isPlainObject = A, n.isEmptyObject = function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, n.inArray = function (e, t, n) {
            return s.indexOf.call(t, e, n)
        }, n.camelCase = r, n.trim = function (e) {
            return null == e ? "" : String.prototype.trim.call(e)
        }, n.uuid = 0, n.support = {}, n.expr = {}, n.noop = function () {
        }, n.map = function (e, t) {
            var i, o, r, a, s = [];
            if (R(e)) for (o = 0; o < e.length; o++) null != (i = t(e[o], o)) && s.push(i); else for (r in e) null != (i = t(e[r], r)) && s.push(i);
            return (a = s).length > 0 ? n.fn.concat.apply([], a) : a
        }, n.each = function (e, t) {
            var n, i;
            if (R(e)) {
                for (n = 0; n < e.length; n++) if (!1 === t.call(e[n], n, e[n])) return e
            } else for (i in e) if (!1 === t.call(e[i], i, e[i])) return e;
            return e
        }, n.grep = function (e, t) {
            return c.call(e, t)
        }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            T["[object " + t + "]"] = t.toLowerCase()
        }), n.fn = {
            constructor: N.Z,
            length: 0,
            forEach: s.forEach,
            reduce: s.reduce,
            push: s.push,
            sort: s.sort,
            splice: s.splice,
            indexOf: s.indexOf,
            concat: function () {
                var e, t, n = [];
                for (e = 0; e < arguments.length; e++) t = arguments[e], n[e] = N.isZ(t) ? t.toArray() : t;
                return l.apply(N.isZ(this) ? this.toArray() : this, n)
            },
            map: function (e) {
                return n(n.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return n(u.apply(this, arguments))
            },
            ready: function (e) {
                return E.test(d.readyState) && d.body ? e(n) : d.addEventListener("DOMContentLoaded", function () {
                    e(n)
                }, !1), this
            },
            get: function (t) {
                return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
            },
            toArray: function () {
                return this.get()
            },
            size: function () {
                return this.length
            },
            remove: function () {
                return this.each(function () {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function (e) {
                return s.every.call(this, function (t, n) {
                    return !1 !== e.call(t, n, t)
                }), this
            },
            filter: function (e) {
                return D(e) ? this.not(this.not(e)) : n(c.call(this, function (t) {
                    return N.matches(t, e)
                }))
            },
            add: function (e, t) {
                return n(a(this.concat(n(e, t))))
            },
            is: function (e) {
                return this.length > 0 && N.matches(this[0], e)
            },
            not: function (t) {
                var i = [];
                if (D(t) && t.call !== e) this.each(function (e) {
                    t.call(this, e) || i.push(this)
                }); else {
                    var o = "string" == typeof t ? this.filter(t) : R(t) && D(t.item) ? u.call(t) : n(t);
                    this.forEach(function (e) {
                        o.indexOf(e) < 0 && i.push(e)
                    })
                }
                return n(i)
            },
            has: function (e) {
                return this.filter(function () {
                    return z(e) ? n.contains(this, e) : n(this).find(e).size()
                })
            },
            eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function () {
                var e = this[0];
                return e && !z(e) ? e : n(e)
            },
            last: function () {
                var e = this[this.length - 1];
                return e && !z(e) ? e : n(e)
            },
            find: function (e) {
                var t = this;
                return e ? "object" == (void 0 === e ? "undefined" : o(e)) ? n(e).filter(function () {
                    var e = this;
                    return s.some.call(t, function (t) {
                        return n.contains(t, e)
                    })
                }) : 1 == this.length ? n(N.qsa(this[0], e)) : this.map(function () {
                    return N.qsa(this, e)
                }) : n()
            },
            closest: function (e, t) {
                var i = this[0], r = !1;
                for ("object" == (void 0 === e ? "undefined" : o(e)) && (r = n(e)); i && !(r ? r.indexOf(i) >= 0 : N.matches(i, e));) i = i !== t && !L(i) && i.parentNode;
                return n(i)
            },
            parents: function (e) {
                for (var t = [], i = this; i.length > 0;) i = n.map(i, function (e) {
                    if ((e = e.parentNode) && !L(e) && t.indexOf(e) < 0) return t.push(e), e
                });
                return Y(t, e)
            },
            parent: function (e) {
                return Y(a(this.pluck("parentNode")), e)
            },
            children: function (e) {
                return Y(this.map(function () {
                    return F(this)
                }), e)
            },
            contents: function () {
                return this.map(function () {
                    return this.contentDocument || u.call(this.childNodes)
                })
            },
            siblings: function (e) {
                return Y(this.map(function (e, t) {
                    return c.call(F(t.parentNode), function (e) {
                        return e !== t
                    })
                }), e)
            },
            empty: function () {
                return this.each(function () {
                    this.innerHTML = ""
                })
            },
            pluck: function (e) {
                return n.map(this, function (t) {
                    return t[e]
                })
            },
            show: function () {
                return this.each(function () {
                    var e, t, n;
                    "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (e = this.nodeName, f[e] || (t = d.createElement(e), d.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), "none" == n && (n = "block"), f[e] = n), f[e]))
                })
            },
            replaceWith: function (e) {
                return this.before(e).remove()
            },
            wrap: function (e) {
                var t = D(e);
                if (this[0] && !t) var i = n(e).get(0), o = i.parentNode || this.length > 1;
                return this.each(function (r) {
                    n(this).wrapAll(t ? e.call(this, r) : o ? i.cloneNode(!0) : i)
                })
            },
            wrapAll: function (e) {
                if (this[0]) {
                    var t;
                    for (n(this[0]).before(e = n(e)); (t = e.children()).length;) e = t.first();
                    n(e).append(this)
                }
                return this
            },
            wrapInner: function (e) {
                var t = D(e);
                return this.each(function (i) {
                    var o = n(this), r = o.contents(), a = t ? e.call(this, i) : e;
                    r.length ? r.wrapAll(a) : o.append(a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    n(this).replaceWith(n(this).children())
                }), this
            },
            clone: function () {
                return this.map(function () {
                    return this.cloneNode(!0)
                })
            },
            hide: function () {
                return this.css("display", "none")
            },
            toggle: function (t) {
                return this.each(function () {
                    var i = n(this);
                    (t === e ? "none" == i.css("display") : t) ? i.show() : i.hide()
                })
            },
            prev: function (e) {
                return n(this.pluck("previousElementSibling")).filter(e || "*")
            },
            next: function (e) {
                return n(this.pluck("nextElementSibling")).filter(e || "*")
            },
            html: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var i = this.innerHTML;
                    n(this).empty().append(X(this, e, t, i))
                }) : 0 in this ? this[0].innerHTML : null
            },
            text: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    var n = X(this, e, t, this.textContent);
                    this.textContent = null == n ? "" : "" + n
                }) : 0 in this ? this[0].textContent : null
            },
            attr: function (n, i) {
                var o;
                return "string" != typeof n || 1 in arguments ? this.each(function (e) {
                    if (1 === this.nodeType) if (z(n)) for (t in n) H(this, t, n[t]); else H(this, n, X(this, i, e, this.getAttribute(n)))
                }) : this.length && 1 === this[0].nodeType ? !(o = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : o : e
            },
            removeAttr: function (e) {
                return this.each(function () {
                    1 === this.nodeType && e.split(" ").forEach(function (e) {
                        H(this, e)
                    }, this)
                })
            },
            prop: function (e, t) {
                return e = O[e] || e, 1 in arguments ? this.each(function (n) {
                    this[e] = X(this, t, n, this[e])
                }) : this[0] && this[0][e]
            },
            data: function (t, n) {
                if (t) {
                    var i = "data-" + t.replace(b, "-$1").toLowerCase(),
                        o = 1 in arguments ? this.attr(i, n) : this.attr(i);
                    return null !== o ? V(o) : e
                }
            },
            val: function (e) {
                return 0 in arguments ? this.each(function (t) {
                    this.value = X(this, e, t, this.value)
                }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                    return this.selected
                }).pluck("value") : this[0].value)
            },
            offset: function (e) {
                if (e) return this.each(function (t) {
                    var i = n(this), o = X(this, e, t, i.offset()), r = i.offsetParent().offset(),
                        a = {top: o.top - r.top, left: o.left - r.left};
                    "static" == i.css("position") && (a.position = "relative"), i.css(a)
                });
                if (!this.length) return null;
                if (!n.contains(d.documentElement, this[0])) return {top: 0, left: 0};
                var t = this[0].getBoundingClientRect();
                return {
                    left: t.left + window.pageXOffset,
                    top: t.top + window.pageYOffset,
                    width: Math.round(t.width),
                    height: Math.round(t.height)
                }
            },
            css: function (e, i) {
                if (arguments.length < 2) {
                    var o, a = this[0];
                    if (!a) return;
                    if (o = getComputedStyle(a, ""), "string" == typeof e) return a.style[r(e)] || o.getPropertyValue(e);
                    if (I(e)) {
                        var s = {};
                        return n.each(e, function (e, t) {
                            s[t] = a.style[r(t)] || o.getPropertyValue(t)
                        }), s
                    }
                }
                var l = "";
                if ("string" == M(e)) i || 0 === i ? l = $(e) + ":" + W(e, i) : this.each(function () {
                    this.style.removeProperty($(e))
                }); else for (t in e) e[t] || 0 === e[t] ? l += $(t) + ":" + W(t, e[t]) + ";" : this.each(function () {
                    this.style.removeProperty($(t))
                });
                return this.each(function () {
                    this.style.cssText += ";" + l
                })
            },
            index: function (e) {
                return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function (e) {
                return !!e && s.some.call(this, function (e) {
                    return this.test(q(e))
                }, B(e))
            },
            addClass: function (e) {
                return e ? this.each(function (t) {
                    if ("className" in this) {
                        i = [];
                        var o = q(this);
                        X(this, e, t, o).split(/\s+/g).forEach(function (e) {
                            n(this).hasClass(e) || i.push(e)
                        }, this), i.length && q(this, o + (o ? " " : "") + i.join(" "))
                    }
                }) : this
            },
            removeClass: function (t) {
                return this.each(function (n) {
                    if ("className" in this) {
                        if (t === e) return q(this, "");
                        i = q(this), X(this, t, n, i).split(/\s+/g).forEach(function (e) {
                            i = i.replace(B(e), " ")
                        }), q(this, i.trim())
                    }
                })
            },
            toggleClass: function (t, i) {
                return t ? this.each(function (o) {
                    var r = n(this);
                    X(this, t, o, q(this)).split(/\s+/g).forEach(function (t) {
                        (i === e ? !r.hasClass(t) : i) ? r.addClass(t) : r.removeClass(t)
                    })
                }) : this
            },
            scrollTop: function (t) {
                if (this.length) {
                    var n = "scrollTop" in this[0];
                    return t === e ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                        this.scrollTop = t
                    } : function () {
                        this.scrollTo(this.scrollX, t)
                    })
                }
            },
            scrollLeft: function (t) {
                if (this.length) {
                    var n = "scrollLeft" in this[0];
                    return t === e ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                        this.scrollLeft = t
                    } : function () {
                        this.scrollTo(t, this.scrollY)
                    })
                }
            },
            position: function () {
                if (this.length) {
                    var e = this[0], t = this.offsetParent(), i = this.offset(),
                        o = y.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
                    return i.top -= parseFloat(n(e).css("margin-top")) || 0, i.left -= parseFloat(n(e).css("margin-left")) || 0, o.top += parseFloat(n(t[0]).css("border-top-width")) || 0, o.left += parseFloat(n(t[0]).css("border-left-width")) || 0, {
                        top: i.top - o.top,
                        left: i.left - o.left
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || d.body; e && !y.test(e.nodeName) && "static" == n(e).css("position");) e = e.offsetParent;
                    return e
                })
            }
        }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (t) {
            var i = t.replace(/./, function (e) {
                return e[0].toUpperCase()
            });
            n.fn[t] = function (o) {
                var r, a = this[0];
                return o === e ? j(a) ? a["inner" + i] : L(a) ? a.documentElement["scroll" + i] : (r = this.offset()) && r[t] : this.each(function (e) {
                    (a = n(this)).css(t, X(this, o, e, a[t]()))
                })
            }
        }), ["after", "prepend", "before", "append"].forEach(function (e, t) {
            var i = t % 2;
            n.fn[e] = function () {
                var e, o, r = n.map(arguments, function (t) {
                    return "object" == (e = M(t)) || "array" == e || null == t ? t : N.fragment(t)
                }), a = this.length > 1;
                return r.length < 1 ? this : this.each(function (e, s) {
                    o = i ? s : s.parentNode, s = 0 == t ? s.nextSibling : 1 == t ? s.firstChild : 2 == t ? s : null;
                    var l = n.contains(d.documentElement, o);
                    r.forEach(function (e) {
                        if (a) e = e.cloneNode(!0); else if (!o) return n(e).remove();
                        o.insertBefore(e, s), l && function e(t, n) {
                            n(t);
                            for (var i = 0, o = t.childNodes.length; i < o; i++) e(t.childNodes[i], n)
                        }(e, function (e) {
                            null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src || window.eval.call(window, e.innerHTML)
                        })
                    })
                })
            }, n.fn[i ? e + "To" : "insert" + (t ? "Before" : "After")] = function (t) {
                return n(t)[e](this), this
            }
        }), N.Z.prototype = U.prototype = n.fn, N.uniq = a, N.deserializeValue = V, n.zepto = N, n
    }();
    window.Zepto = r, void 0 === window.$ && (window.$ = r), function (e) {
        var t, n, i = 0, o = window.document, r = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            a = /^(?:text|application)\/javascript/i, s = /^(?:text|application)\/xml/i, l = "application/json",
            c = "text/html", u = /^\s*$/, d = o.createElement("a");

        function f(t, n, i, r) {
            if (t.global) return function (t, n, i) {
                var o = e.Event(n);
                return e(t).trigger(o, i), !o.isDefaultPrevented()
            }(n || o, i, r)
        }

        function p(e, t) {
            var n = t.context;
            if (!1 === t.beforeSend.call(n, e, t) || !1 === f(t, n, "ajaxBeforeSend", [e, t])) return !1;
            f(t, n, "ajaxSend", [e, t])
        }

        function h(e, t, n, i) {
            var o = n.context;
            n.success.call(o, e, "success", t), i && i.resolveWith(o, [e, "success", t]), f(n, o, "ajaxSuccess", [t, n, e]), v("success", t, n)
        }

        function m(e, t, n, i, o) {
            var r = i.context;
            i.error.call(r, n, t, e), o && o.rejectWith(r, [n, t, e]), f(i, r, "ajaxError", [n, i, e || t]), v(t, n, i)
        }

        function v(t, n, i) {
            var o = i.context;
            i.complete.call(o, n, t), f(i, o, "ajaxComplete", [n, i]), function (t) {
                t.global && !--e.active && f(t, null, "ajaxStop")
            }(i)
        }

        function g() {
        }

        function y(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function b(t, n, i, o) {
            return e.isFunction(n) && (o = i, i = n, n = void 0), e.isFunction(i) || (o = i, i = void 0), {
                url: t,
                data: n,
                success: i,
                dataType: o
            }
        }

        d.href = window.location.href, e.active = 0, e.ajaxJSONP = function (t, n) {
            if (!("type" in t)) return e.ajax(t);
            var r, a, s = t.jsonpCallback, l = (e.isFunction(s) ? s() : s) || "jsonp" + ++i,
                c = o.createElement("script"), u = window[l], d = function (t) {
                    e(c).triggerHandler("error", t || "abort")
                }, f = {abort: d};
            return n && n.promise(f), e(c).on("load error", function (i, o) {
                clearTimeout(a), e(c).off().remove(), "error" != i.type && r ? h(r[0], f, t, n) : m(null, o || "error", f, t, n), window[l] = u, r && e.isFunction(u) && u(r[0]), u = r = void 0
            }), !1 === p(f, t) ? (d("abort"), f) : (window[l] = function () {
                r = arguments
            }, c.src = t.url.replace(/\?(.+)=\?/, "?$1=" + l), o.head.appendChild(c), t.timeout > 0 && (a = setTimeout(function () {
                d("timeout")
            }, t.timeout)), f)
        }, e.ajaxSettings = {
            type: "GET",
            beforeSend: g,
            success: g,
            error: g,
            complete: g,
            context: null,
            global: !0,
            xhr: function () {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: l,
                xml: "application/xml, text/xml",
                html: c,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, e.ajax = function (i) {
            var r, v, b = e.extend({}, i || {}), _ = e.Deferred && e.Deferred();
            for (t in e.ajaxSettings) void 0 === b[t] && (b[t] = e.ajaxSettings[t]);
            !function (t) {
                t.global && 0 == e.active++ && f(t, null, "ajaxStart")
            }(b), b.crossDomain || ((r = o.createElement("a")).href = b.url, r.href = r.href, b.crossDomain = d.protocol + "//" + d.host != r.protocol + "//" + r.host), b.url || (b.url = window.location.toString()), (v = b.url.indexOf("#")) > -1 && (b.url = b.url.slice(0, v)), function (t) {
                t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() || (t.url = y(t.url, t.data), t.data = void 0)
            }(b);
            var w = b.dataType, S = /\?.+=\?/.test(b.url);
            if (S && (w = "jsonp"), !1 !== b.cache && (i && !0 === i.cache || "script" != w && "jsonp" != w) || (b.url = y(b.url, "_=" + Date.now())), "jsonp" == w) return S || (b.url = y(b.url, b.jsonp ? b.jsonp + "=?" : !1 === b.jsonp ? "" : "callback=?")), e.ajaxJSONP(b, _);
            var x, E = b.accepts[w], k = {}, T = function (e, t) {
                    k[e.toLowerCase()] = [e, t]
                }, C = /^([\w-]+:)\/\//.test(b.url) ? RegExp.$1 : window.location.protocol, N = b.xhr(),
                P = N.setRequestHeader;
            if (_ && _.promise(N), b.crossDomain || T("X-Requested-With", "XMLHttpRequest"), T("Accept", E || "*/*"), (E = b.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(E)), (b.contentType || !1 !== b.contentType && b.data && "GET" != b.type.toUpperCase()) && T("Content-Type", b.contentType || "application/x-www-form-urlencoded"), b.headers) for (n in b.headers) T(n, b.headers[n]);
            if (N.setRequestHeader = T, N.onreadystatechange = function () {
                if (4 == N.readyState) {
                    N.onreadystatechange = g, clearTimeout(x);
                    var t, n = !1;
                    if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == C) {
                        w = w || ((i = b.mimeType || N.getResponseHeader("content-type")) && (i = i.split(";", 2)[0]), i && (i == c ? "html" : i == l ? "json" : a.test(i) ? "script" : s.test(i) && "xml") || "text"), t = N.responseText;
                        try {
                            "script" == w ? (0, eval)(t) : "xml" == w ? t = N.responseXML : "json" == w && (t = u.test(t) ? null : e.parseJSON(t))
                        } catch (e) {
                            n = e
                        }
                        n ? m(n, "parsererror", N, b, _) : h(t, N, b, _)
                    } else m(N.statusText || null, N.status ? "error" : "abort", N, b, _)
                }
                var i
            }, !1 === p(N, b)) return N.abort(), m(null, "abort", N, b, _), N;
            if (b.xhrFields) for (n in b.xhrFields) N[n] = b.xhrFields[n];
            var O = !("async" in b) || b.async;
            for (n in N.open(b.type, b.url, O, b.username, b.password), k) P.apply(N, k[n]);
            return b.timeout > 0 && (x = setTimeout(function () {
                N.onreadystatechange = g, N.abort(), m(null, "timeout", N, b, _)
            }, b.timeout)), N.send(b.data ? b.data : null), N
        }, e.get = function () {
            return e.ajax(b.apply(null, arguments))
        }, e.post = function () {
            var t = b.apply(null, arguments);
            return t.type = "POST", e.ajax(t)
        }, e.getJSON = function () {
            var t = b.apply(null, arguments);
            return t.dataType = "json", e.ajax(t)
        }, e.fn.load = function (t, n, i) {
            if (!this.length) return this;
            var o, a = this, s = t.split(/\s/), l = b(t, n, i), c = l.success;
            return s.length > 1 && (l.url = s[0], o = s[1]), l.success = function (t) {
                a.html(o ? e("<div>").html(t.replace(r, "")).find(o) : t), c && c.apply(a, arguments)
            }, e.ajax(l), this
        };
        var _ = encodeURIComponent;
        e.param = function (t, n) {
            var i = [];
            return i.add = function (t, n) {
                e.isFunction(n) && (n = n()), null == n && (n = ""), this.push(_(t) + "=" + _(n))
            }, function t(n, i, o, r) {
                var a, s = e.isArray(i), l = e.isPlainObject(i);
                e.each(i, function (i, c) {
                    a = e.type(c), r && (i = o ? r : r + "[" + (l || "object" == a || "array" == a ? i : "") + "]"), !r && s ? n.add(c.name, c.value) : "array" == a || !o && "object" == a ? t(n, c, o, i) : n.add(i, c)
                })
            }(i, t, n), i.join("&").replace(/%20/g, "+")
        }
    }(r), (i = r).Callbacks = function (e) {
        var t, n, o, r, a, s, l = [], c = !(e = i.extend({}, e)).once && [], u = function i(u) {
            for (t = e.memory && u, n = !0, s = r || 0, r = 0, a = l.length, o = !0; l && s < a; ++s) if (!1 === l[s].apply(u[0], u[1]) && e.stopOnFalse) {
                t = !1;
                break
            }
            o = !1, l && (c ? c.length && i(c.shift()) : t ? l.length = 0 : d.disable())
        }, d = {
            add: function () {
                if (l) {
                    var n = l.length, s = function t(n) {
                        i.each(n, function (n, i) {
                            "function" == typeof i ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" != typeof i && t(i)
                        })
                    };
                    s(arguments), o ? a = l.length : t && (r = n, u(t))
                }
                return this
            }, remove: function () {
                return l && i.each(arguments, function (e, t) {
                    for (var n; (n = i.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (n <= a && --a, n <= s && --s)
                }), this
            }, has: function (e) {
                return !(!l || !(e ? i.inArray(e, l) > -1 : l.length))
            }, empty: function () {
                return a = l.length = 0, this
            }, disable: function () {
                return l = c = t = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = void 0, t || d.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return !l || n && !c || (t = [e, (t = t || []).slice ? t.slice() : t], o ? c.push(t) : u(t)), this
            }, fire: function () {
                return d.fireWith(this, arguments)
            }, fired: function () {
                return !!n
            }
        };
        return d
    }, function (e) {
        var t = Array.prototype.slice;

        function n(t) {
            var i = [["resolve", "done", e.Callbacks({
                once: 1,
                memory: 1
            }), "resolved"], ["reject", "fail", e.Callbacks({
                once: 1,
                memory: 1
            }), "rejected"], ["notify", "progress", e.Callbacks({memory: 1})]], o = "pending", r = {
                state: function () {
                    return o
                }, always: function () {
                    return a.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return n(function (n) {
                        e.each(i, function (i, o) {
                            var s = e.isFunction(t[i]) && t[i];
                            a[o[1]](function () {
                                var t = s && s.apply(this, arguments);
                                if (t && e.isFunction(t.promise)) t.promise().done(n.resolve).fail(n.reject).progress(n.notify); else {
                                    var i = this === r ? n.promise() : this, a = s ? [t] : arguments;
                                    n[o[0] + "With"](i, a)
                                }
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? e.extend(t, r) : r
                }
            }, a = {};
            return e.each(i, function (e, t) {
                var n = t[2], s = t[3];
                r[t[1]] = n.add, s && n.add(function () {
                    o = s
                }, i[1 ^ e][2].disable, i[2][2].lock), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? r : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), r.promise(a), t && t.call(a, a), a
        }

        e.when = function (i) {
            var o, r, a, s = t.call(arguments), l = s.length, c = 0,
                u = 1 !== l || i && e.isFunction(i.promise) ? l : 0, d = 1 === u ? i : n(), f = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? t.call(arguments) : r, i === o ? d.notifyWith(n, i) : --u || d.resolveWith(n, i)
                    }
                };
            if (l > 1) for (o = new Array(l), r = new Array(l), a = new Array(l); c < l; ++c) s[c] && e.isFunction(s[c].promise) ? s[c].promise().done(f(c, a, s)).fail(d.reject).progress(f(c, r, o)) : --u;
            return u || d.resolveWith(a, s), d.promise()
        }, e.Deferred = n
    }(r), function (e) {
        function t(e, t) {
            var n = this.os = {}, i = this.browser = {}, o = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                r = e.match(/(Android);?[\s\/]+([\d.]+)?/), a = !!e.match(/\(Macintosh\; Intel /),
                s = e.match(/(iPad).*OS\s([\d_]+)/), l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                c = !s && e.match(/(iPhone\sOS)\s([\d_]+)/), u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                d = /Win\d{2}|Windows/.test(t), f = e.match(/Windows Phone ([\d.]+)/), p = u && e.match(/TouchPad/),
                h = e.match(/Kindle\/([\d.]+)/), m = e.match(/Silk\/([\d._]+)/),
                v = e.match(/(BlackBerry).*Version\/([\d.]+)/), g = e.match(/(BB10).*Version\/([\d.]+)/),
                y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/), b = e.match(/PlayBook/),
                _ = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/), w = e.match(/Firefox\/([\d.]+)/),
                S = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
                x = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                E = !_ && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                k = E || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
            (i.webkit = !!o) && (i.version = o[1]), r && (n.android = !0, n.version = r[2]), c && !l && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), l && (n.ios = n.ipod = !0, n.version = l[3] ? l[3].replace(/_/g, ".") : null), f && (n.wp = !0, n.version = f[1]), u && (n.webos = !0, n.version = u[2]), p && (n.touchpad = !0), v && (n.blackberry = !0, n.version = v[2]), g && (n.bb10 = !0, n.version = g[2]), y && (n.rimtabletos = !0, n.version = y[2]), b && (i.playbook = !0), h && (n.kindle = !0, n.version = h[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && e.match(/Kindle Fire/) && (i.silk = !0), _ && (i.chrome = !0, i.version = _[1]), w && (i.firefox = !0, i.version = w[1]), S && (n.firefoxos = !0, n.version = S[1]), x && (i.ie = !0, i.version = x[1]), k && (a || n.ios || d) && (i.safari = !0, n.ios || (i.version = k[1])), E && (i.webview = !0), n.tablet = !!(s || b || r && !e.match(/Mobile/) || w && e.match(/Tablet/) || x && !e.match(/Phone/) && e.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(r || c || u || v || g || _ && e.match(/Android/) || _ && e.match(/CriOS\/([\d.]+)/) || w && e.match(/Mobile/) || x && e.match(/Touch/)))
        }

        t.call(e, navigator.userAgent, navigator.platform), e.__detect = t
    }(r), function (e) {
        var t, n = 1, i = Array.prototype.slice, o = e.isFunction, r = function (e) {
                return "string" == typeof e
            }, a = {}, s = {}, l = "onfocusin" in window, c = {focus: "focusin", blur: "focusout"},
            u = {mouseenter: "mouseover", mouseleave: "mouseout"};

        function d(e) {
            return e._zid || (e._zid = n++)
        }

        function f(e, t, n, i) {
            if ((t = p(t)).ns) var o = (r = t.ns, new RegExp("(?:^| )" + r.replace(" ", " .* ?") + "(?: |$)"));
            var r;
            return (a[d(e)] || []).filter(function (e) {
                return e && (!t.e || e.e == t.e) && (!t.ns || o.test(e.ns)) && (!n || d(e.fn) === d(n)) && (!i || e.sel == i)
            })
        }

        function p(e) {
            var t = ("" + e).split(".");
            return {e: t[0], ns: t.slice(1).sort().join(" ")}
        }

        function h(e, t) {
            return e.del && !l && e.e in c || !!t
        }

        function m(e) {
            return u[e] || l && c[e] || e
        }

        function v(n, i, o, r, s, l, c) {
            var f = d(n), v = a[f] || (a[f] = []);
            i.split(/\s/).forEach(function (i) {
                if ("ready" == i) return e(document).ready(o);
                var a = p(i);
                a.fn = o, a.sel = s, a.e in u && (o = function (t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return a.fn.apply(this, arguments)
                }), a.del = l;
                var d = l || o;
                a.proxy = function (e) {
                    if (!(e = S(e)).isImmediatePropagationStopped()) {
                        e.data = r;
                        var i = d.apply(n, e._args == t ? [e] : [e].concat(e._args));
                        return !1 === i && (e.preventDefault(), e.stopPropagation()), i
                    }
                }, a.i = v.length, v.push(a), "addEventListener" in n && n.addEventListener(m(a.e), a.proxy, h(a, c))
            })
        }

        function g(e, t, n, i, o) {
            var r = d(e);
            (t || "").split(/\s/).forEach(function (t) {
                f(e, t, n, i).forEach(function (t) {
                    delete a[r][t.i], "removeEventListener" in e && e.removeEventListener(m(t.e), t.proxy, h(t, o))
                })
            })
        }

        s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents", e.event = {
            add: v,
            remove: g
        }, e.proxy = function (t, n) {
            var a = 2 in arguments && i.call(arguments, 2);
            if (o(t)) {
                var s = function () {
                    return t.apply(n, a ? a.concat(i.call(arguments)) : arguments)
                };
                return s._zid = d(t), s
            }
            if (r(n)) return a ? (a.unshift(t[n], t), e.proxy.apply(null, a)) : e.proxy(t[n], t);
            throw new TypeError("expected function")
        }, e.fn.bind = function (e, t, n) {
            return this.on(e, t, n)
        }, e.fn.unbind = function (e, t) {
            return this.off(e, t)
        }, e.fn.one = function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        };
        var y = function () {
            return !0
        }, b = function () {
            return !1
        }, _ = /^([A-Z]|returnValue$|layer[XY]$)/, w = {
            preventDefault: "isDefaultPrevented",
            stopImmediatePropagation: "isImmediatePropagationStopped",
            stopPropagation: "isPropagationStopped"
        };

        function S(n, i) {
            return !i && n.isDefaultPrevented || (i || (i = n), e.each(w, function (e, t) {
                var o = i[e];
                n[e] = function () {
                    return this[t] = y, o && o.apply(i, arguments)
                }, n[t] = b
            }), (i.defaultPrevented !== t ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (n.isDefaultPrevented = y)), n
        }

        function x(e) {
            var n, i = {originalEvent: e};
            for (n in e) _.test(n) || e[n] === t || (i[n] = e[n]);
            return S(i, e)
        }

        e.fn.delegate = function (e, t, n) {
            return this.on(t, e, n)
        }, e.fn.undelegate = function (e, t, n) {
            return this.off(t, e, n)
        }, e.fn.live = function (t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function (t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function (n, a, s, l, c) {
            var u, d, f = this;
            return n && !r(n) ? (e.each(n, function (e, t) {
                f.on(e, a, s, t, c)
            }), f) : (r(a) || o(l) || !1 === l || (l = s, s = a, a = t), l !== t && !1 !== s || (l = s, s = t), !1 === l && (l = b), f.each(function (t, o) {
                c && (u = function (e) {
                    return g(o, e.type, l), l.apply(this, arguments)
                }), a && (d = function (t) {
                    var n, r = e(t.target).closest(a, o).get(0);
                    if (r && r !== o) return n = e.extend(x(t), {
                        currentTarget: r,
                        liveFired: o
                    }), (u || l).apply(r, [n].concat(i.call(arguments, 1)))
                }), v(o, n, l, s, a, d || u)
            }))
        }, e.fn.off = function (n, i, a) {
            var s = this;
            return n && !r(n) ? (e.each(n, function (e, t) {
                s.off(e, i, t)
            }), s) : (r(i) || o(a) || !1 === a || (a = i, i = t), !1 === a && (a = b), s.each(function () {
                g(this, n, a, i)
            }))
        }, e.fn.trigger = function (t, n) {
            return (t = r(t) || e.isPlainObject(t) ? e.Event(t) : S(t))._args = n, this.each(function () {
                t.type in c && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
            })
        }, e.fn.triggerHandler = function (t, n) {
            var i, o;
            return this.each(function (a, s) {
                (i = x(r(t) ? e.Event(t) : t))._args = n, i.target = s, e.each(f(s, t.type || t), function (e, t) {
                    if (o = t.proxy(i), i.isImmediatePropagationStopped()) return !1
                })
            }), o
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (t) {
            e.fn[t] = function (e) {
                return 0 in arguments ? this.bind(t, e) : this.trigger(t)
            }
        }), e.Event = function (e, t) {
            r(e) || (e = (t = e).type);
            var n = document.createEvent(s[e] || "Events"), i = !0;
            if (t) for (var o in t) "bubbles" == o ? i = !!t[o] : n[o] = t[o];
            return n.initEvent(e, i, !0), S(n)
        }
    }(r), function (e) {
        e.fn.serializeArray = function () {
            var t, n, i = [];
            return this[0] && e.each(this[0].elements, function (o, r) {
                n = r.type, (t = r.name) && "fieldset" != r.nodeName.toLowerCase() && !r.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || r.checked) && function e(n) {
                    if (n.forEach) return n.forEach(e);
                    i.push({name: t, value: n})
                }(e(r).val())
            }), i
        }, e.fn.serialize = function () {
            var e = [];
            return this.serializeArray().forEach(function (t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function (t) {
            if (0 in arguments) this.bind("submit", t); else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(r), function (e, t) {
        var n, i, r, a, s, l, c, u, d, f, p = "", h = document.createElement("div"),
            m = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, v = {};

        function g(e) {
            return n ? n + e : e.toLowerCase()
        }

        e.each({Webkit: "webkit", Moz: "", O: "o"}, function (e, t) {
            if (void 0 !== h.style[e + "TransitionProperty"]) return p = "-" + e.toLowerCase() + "-", n = t, !1
        }), i = p + "transform", v[r = p + "transition-property"] = v[a = p + "transition-duration"] = v[l = p + "transition-delay"] = v[s = p + "transition-timing-function"] = v[c = p + "animation-name"] = v[u = p + "animation-duration"] = v[f = p + "animation-delay"] = v[d = p + "animation-timing-function"] = "", e.fx = {
            off: void 0 === n && void 0 === h.style.transitionProperty,
            speeds: {_default: 400, fast: 200, slow: 600},
            cssPrefix: p,
            transitionEnd: g("TransitionEnd"),
            animationEnd: g("AnimationEnd")
        }, e.fn.animate = function (t, n, i, o, r) {
            return e.isFunction(n) && (o = n, i = void 0, n = void 0), e.isFunction(i) && (o = i, i = void 0), e.isPlainObject(n) && (i = n.easing, o = n.complete, r = n.delay, n = n.duration), n && (n = ("number" == typeof n ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3), r && (r = parseFloat(r) / 1e3), this.anim(t, n, i, o, r)
        }, e.fn.anim = function (t, n, p, h, g) {
            var y, b, _, w = {}, S = "", x = this, E = e.fx.transitionEnd, k = !1;
            if (void 0 === n && (n = e.fx.speeds._default / 1e3), void 0 === g && (g = 0), e.fx.off && (n = 0), "string" == typeof t) w[c] = t, w[u] = n + "s", w[f] = g + "s", w[d] = p || "linear", E = e.fx.animationEnd; else {
                for (y in b = [], t) m.test(y) ? S += y + "(" + t[y] + ") " : (w[y] = t[y], b.push(y.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()));
                S && (w[i] = S, b.push(i)), n > 0 && "object" === (void 0 === t ? "undefined" : o(t)) && (w[r] = b.join(", "), w[a] = n + "s", w[l] = g + "s", w[s] = p || "linear")
            }
            return _ = function (t) {
                if (void 0 !== t) {
                    if (t.target !== t.currentTarget) return;
                    e(t.target).unbind(E, _)
                } else e(this).unbind(E, _);
                k = !0, e(this).css(v), h && h.call(this)
            }, n > 0 && (this.bind(E, _), setTimeout(function () {
                k || _.call(x)
            }, 1e3 * (n + g) + 25)), this.size() && this.get(0).clientLeft, this.css(w), n <= 0 && setTimeout(function () {
                x.each(function () {
                    _.call(this)
                })
            }, 0), this
        }, h = null
    }(r), void 0 === String.prototype.trim && (String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }), void 0 === Array.prototype.reduce && (Array.prototype.reduce = function (e) {
        if (void 0 === this || null === this) throw new TypeError;
        var t, n = Object(this), i = n.length >>> 0, o = 0;
        if ("function" != typeof e) throw new TypeError;
        if (0 == i && 1 == arguments.length) throw new TypeError;
        if (arguments.length >= 2) t = arguments[1]; else for (; ;) {
            if (o in n) {
                t = n[o++];
                break
            }
            if (++o >= i) throw new TypeError
        }
        for (; o < i;) o in n && (t = e.call(void 0, t, n[o], o, n)), o++;
        return t
    }), void 0 !== e && e.exports ? e.exports = r : window.Zepto = window.$ = r
}, function (e, t, n) {
    "use strict";
    var i = n(7), o = n(191), r = n(101), a = o(window), s = {
        options: null, init: function (e) {
            this.options = e;
            var t = e.$ele;
            if (t) {
                var n, s, l = e.threshold || 0, c = 0;
                if (this.isWap()) if (BNJS.ui.title._mock && (t.addClass("iswap-with-title"), c = 41), i.featureTest("position", "sticky")) (s = t.is(".sticky") ? t : t.parents(".sticky")).length && (s.get(0).style.cssText += "position:sticky;position:-webkit-sticky;top:" + c + "px;z-index:101;"); else n = t.offset().top, r.add(function () {
                    0 == (n = o(".poi-container").offset().top) && (n = t.offset().top), n < a.scrollTop() + l + c ? (t.addClass("fixed"), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 40)) : n > a.scrollTop() && (t.removeClass("fixed"), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 0))
                }); else if (i.canSupportNav()) BNJS.ui.getBarHeight({
                    callback: function (e) {
                        var s = e.data.height;
                        BNJS.page.getData(function (e) {
                            if (c = e.pagestyle && 1 == e.pagestyle && i.canSupportNav() ? s : 0, i.featureTest("position", "sticky")) {
                                var u = t.is(".sticky") ? t : t.parents(".sticky");
                                u.length && (u.get(0).style.cssText += "position:sticky;position:-webkit-sticky;top:" + c + "px;z-index:101;")
                            } else n = t.offset().top, r.add(function () {
                                0 == (n = o(".poi-container").offset().top) && (n = t.offset().top), n < a.scrollTop() + l + c ? (t.addClass("fixed"), t.css("top", c - 1 + "px"), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 40)) : n > a.scrollTop() && (t.removeClass("fixed"), t.css("top", 0), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 0))
                            })
                        })
                    }
                }); else if (i.featureTest("position", "sticky")) (s = t.is(".sticky") ? t : t.parents(".sticky")).length && (s.get(0).style.cssText += "position:sticky;position:-webkit-sticky;top:" + c + "px;z-index:101;"); else n = t.offset().top, r.add(function () {
                    0 == (n = o(".poi-container").offset().top) && (n = t.offset().top), n < a.scrollTop() + l + c ? (t.addClass("fixed"), t.css("top", c - 1 + "px"), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 40)) : n > a.scrollTop() && (t.removeClass("fixed"), t.css("top", 0), t.parents(".poi-container").find(".poi-list-container").css("padding-top", 0))
                })
            }
        }, isWap: function () {
            return "com.nuomi" != BNJS.env.packageName && "com.renren-inc.nuomi" != BNJS.env.packageName && "com.baidu.nuomi.qa.BaiduNuomiTuan" != BNJS.env.packageName || "bainuo-wap" === BNJS.env.appName
        }, adjust: function () {
            options.$ele && window.scrollTo(0, Math.ceil(options.$ele.offset().top))
        }
    };
    e.exports = s
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = f(o);
    n(194);
    var a = f(n(7)), s = f(n(192)), l = f(n(190)), c = f(n(187)), u = f(n(178)), d = f(n(172));

    function f(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var p = void 0, h = 1, m = 0, v = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                index: 0,
                sub_category: [],
                sub_category_id: 0,
                sub_category_name: n.props.categoryName || "",
                sort: [],
                sort_id: 0,
                sort_name: "综合榜",
                area: [],
                area_type: 0,
                parent_area_id: 1,
                area_id: 0,
                area_name: "附近",
                advanceCheckList: [],
                advanceCheckStatus: [],
                advanceList: [],
                advanceStatusList: []
            }, n.renderDom = n.renderDom.bind(n), n.handleTouchMove = n.handleTouchMove.bind(n), n.autoBody = n.autoBody.bind(n), n.chooseType = n.chooseType.bind(n), n.hiddenBody = n.hiddenBody.bind(n), n.hideLayer = n.hideLayer.bind(n), n.changeCategory = n.changeCategory.bind(n), n.changeSort = n.changeSort.bind(n), n.receiveParams = n.receiveParams.bind(n), n.receiveCityParams = n.receiveCityParams.bind(n), n.searchList = n.searchList.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                this.renderDom(this.props.menuData), p = $(".menu-container").offset().top, BNJS.page.getData(function (e) {
                    e.pagestyle && 1 == e.pagestyle ? (h = 1, m = 0, a.default.canSupportNav() ? BNJS.ui.getBarHeight({
                        callback: function (e) {
                            m = e.data.height || 0
                        }
                    }) : m = 0) : h = 0
                })
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                e.isdown ? this.setState({
                    sub_category_id: 0,
                    sub_category_name: this.props.categoryName || "全部",
                    sort_id: 0,
                    area_type: 0,
                    parent_area_id: 1,
                    area_id: 0,
                    area_name: "附近",
                    sort_name: "综合榜",
                    advanceCheckStatus: [],
                    sub_category: e.menuData.category && e.menuData.category || [],
                    sort: e.menuData.sort && e.menuData.sort.d || [],
                    area: e.menuData.area || [],
                    advanceCheckList: e.menuData.advance_check || [],
                    advanceList: e.menuData.advance_radio || []
                }) : this.setState({
                    sub_category: e.menuData.category && e.menuData.category || [],
                    sort: e.menuData.sort && e.menuData.sort.d || [],
                    area: e.menuData.area || [],
                    advanceCheckList: e.menuData.advance_check || [],
                    advanceList: e.menuData.advance_radio || []
                })
            }
        }, {
            key: "componentWillUpdate", value: function (e, t) {
                t.index, 0 === t.index && ($(".menu-container").css("top", 0), this.autoBody())
            }
        }, {
            key: "renderDom", value: function (e) {
                this.setState({
                    sub_category: e.category && e.category || [],
                    sort: e.sort && e.sort.d || [],
                    area: e.area || [],
                    advanceCheckList: e.advance_check || [],
                    advanceList: e.advance_radio || []
                }), s.default.init({$ele: $("#stickyTab")});
                $(document).on("touchmove", ".stop-touch-move, .menu-container .mask, .menu-container>li, .menu-container .third-menu, .menu-container .multi-line-dropdown, .menu-container .notouchmove", this.handleTouchMove), $(document).on("touchmove", ".menu-container .content li", function (e) {
                    e.stopPropagation()
                })
            }
        }, {
            key: "handleTouchMove", value: function (e) {
                return e.preventDefault(), !1
            }
        }, {
            key: "autoBody", value: function () {
                window.settingNativeInterfere && window.settingNativeInterfere(!0)
            }
        }, {
            key: "chooseType", value: function (e) {
                p = $(".poi-container").offset().top;
                var t = document.body.clientHeight;
                h && (t -= m);
                var n = $(".poi-list-container").height() + 40;
                n < t && $(".poi-container").css("height", t), this.state.index === e ? (this.setState({index: 0}), $(".menu-container").css("top", 0), $(".poi-container").css("height", n)) : (this.hiddenBody(), a.default.isWap() ? ($(window).scrollTop() < p && window.scrollTo(0, p), $(".menu-container").css("top", 0), this.setState({index: e})) : h ? ($(window).scrollTop() < p - m && window.scrollTo(0, p - m), $(".menu-container").css("top", m), this.setState({index: e})) : ($(window).scrollTop() < p && window.scrollTo(0, p), $(".menu-container").css("top", 0), this.setState({index: e})), $("body").scrollTop())
            }
        }, {
            key: "hiddenBody", value: function () {
                window.settingNativeInterfere && window.settingNativeInterfere(!1)
            }
        }, {
            key: "hideLayer", value: function () {
                this.setState({index: 0}), $(".menu-container").css("top", 0)
            }
        }, {
            key: "changeCategory", value: function (e) {
                if (p = $(".poi-container").offset().top, e.schema) BNJS.page.start(e.schema); else {
                    var t = e.catg_name;
                    0 == +e.catg_id && (t = this.props.categoryName);
                    var n = {sub_category_id: e.catg_id, index: 0, sub_category_name: t};
                    this.setState(n), this.searchList(n), a.default.isWap() ? window.scrollTo(0, p) : h ? window.scrollTo(0, p - m) : window.scrollTo(0, p)
                }
            }
        }, {
            key: "changeSort", value: function (e) {
                p = $(".poi-container").offset().top;
                var t = {sort_id: e.id, index: 0, sort_name: e.name};
                this.setState(t), this.searchList(t), a.default.isWap() ? window.scrollTo(0, p) : h ? window.scrollTo(0, p - m) : window.scrollTo(0, p)
            }
        }, {
            key: "receiveParams", value: function (e) {
                p = $(".poi-container").offset().top;
                var t = this, n = a.default.extend(e, {index: 0});
                this.setState(n, function () {
                    t.searchList(n), a.default.isWap() ? window.scrollTo(0, p) : h ? window.scrollTo(0, p - m) : window.scrollTo(0, p)
                })
            }
        }, {
            key: "receiveCityParams", value: function (e) {
                p = $(".poi-container").offset().top;
                var t = a.default.extend(e, {index: 0});
                400, this.setState(t), this.searchList(t), a.default.isWap() ? window.scrollTo(0, p) : h ? window.scrollTo(0, p - m) : window.scrollTo(0, p)
            }
        }, {
            key: "searchList", value: function (e) {
                var t = {
                    sub_category_id: this.state.sub_category_id,
                    sort_id: this.state.sort_id,
                    area_type: this.state.area_type,
                    parent_area_id: this.state.parent_area_id,
                    area_id: this.state.area_id
                };
                t = a.default.extend(t, e, 1);
                for (var n = e.advanceCheckStatus || this.state.advanceCheckStatus, i = this.state.advanceCheckList, o = 0; o < n.length; o++) {
                    var r = i[o] && i[o].key, s = i[o] && i[o].id;
                    void 0 !== n[o] && r && (t[r] = s)
                }
                for (var l = this.state.advanceList, c = e.advanceStatusList || this.state.advanceStatusList, u = 0; u < c.length; u++) {
                    if (void 0 !== c[u]) (r = l[u] && l[u].key) && (t[r] = c[u])
                }
                t.category = this.props.category, delete t.advanceCheckStatus, delete t.advanceStatusList, this.props.afterBehavior(t)
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement("div", {
                    id: "stickyTab",
                    className: "sticky"
                }, r.default.createElement("ul", {
                    id: "menuTab",
                    className: 0 !== this.state.index ? "menu-container fixed" : "menu-container"
                }, r.default.createElement("li", {
                    onClick: this.chooseType.bind(this, 1),
                    className: 1 === this.state.index ? "choosed" : ""
                }, r.default.createElement("a", {href: "javascript:;"}, r.default.createElement("span", {className: "txt"}, this.state.sub_category_name), r.default.createElement("span", {className: "arrow"}))), r.default.createElement("li", {
                    onClick: this.chooseType.bind(this, 2),
                    className: 2 === this.state.index ? "choosed" : ""
                }, r.default.createElement("a", {href: "javascript:;"}, r.default.createElement("span", {className: "txt"}, this.state.area_name), r.default.createElement("span", {className: "arrow"}))), r.default.createElement("li", {
                    onClick: this.chooseType.bind(this, 3),
                    className: 3 === this.state.index ? "choosed" : ""
                }, r.default.createElement("a", {href: "javascript:;"}, r.default.createElement("span", {className: "txt"}, this.state.sort_name), r.default.createElement("span", {className: "arrow"}))), r.default.createElement("li", {
                    onClick: this.chooseType.bind(this, 4),
                    className: 4 === this.state.index ? "choosed" : ""
                }, r.default.createElement("a", {href: "javascript:;"}, r.default.createElement("span", {className: "txt"}, "筛选"), r.default.createElement("span", {className: "arrow"})))), 1 === this.state.index ? r.default.createElement(l.default, {
                    list: this.state.sub_category,
                    foreach_prefix: "catg_",
                    hideLayer: this.hideLayer,
                    changeEvent: this.changeCategory,
                    selectId: this.state.sub_category_id,
                    hasPageStyle: h,
                    barHeight: m
                }) : null, 2 === this.state.index ? r.default.createElement(u.default, {
                    list: this.state.area,
                    area_type: this.state.area_type,
                    area_id: this.state.area_id,
                    parent_area_id: this.state.parent_area_id,
                    receiveCityParams: this.receiveCityParams,
                    hideLayer: this.hideLayer,
                    hasPageStyle: h,
                    barHeight: m
                }) : null, 3 === this.state.index ? r.default.createElement(d.default, {
                    list: this.state.sort,
                    notouchmove: "1",
                    hideLayer: this.hideLayer,
                    selectId: this.state.sort_id,
                    changeEvent: this.changeSort,
                    hasPageStyle: h,
                    barHeight: m
                }) : null, 4 === this.state.index ? r.default.createElement(c.default, {
                    classlist: this.state.advanceList,
                    classstatus: this.state.advanceStatusList,
                    advanceCheck: this.state.advanceCheckList,
                    advanceCheckStatus: this.state.advanceCheckStatus,
                    hideLayer: this.hideLayer,
                    receiveParams: this.receiveParams,
                    hasPageStyle: h,
                    barHeight: m
                }) : null)
            }
        }]), t
    }();
    t.default = v
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = d(o);
    n(197);
    var a = d(n(195)), s = d(n(169)), l = d(n(101)), c = n(7), u = (d(n(97)), n(69));

    function d(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var f = 1, p = !0, h = !1, m = function (e, t, n) {
        e.pn = f, e.type = 50, e.cityId = BNJS && BNJS.location.selectCityCode, e.v = BNJS && BNJS.env.appVersion, e.deviceType = 0, e.compV = BNJS.env.compVersion || "", e.terminal = (0, c.isWap)() ? 3 : 1, e.cuid = BNJS.env.cuid || "", e.location = BNJS.location.latitude + "," + BNJS.location.longitude, BNJS.http.get({
            url: u.index,
            params: e,
            onSuccess: function (e) {
                0 == parseInt(e.errno, 10) && (0, c.isObject)(e.data) && (0, c.isArray)(e.data.search) && t(e)
            },
            onFail: function (e) {
            }
        })
    }, v = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                params: {
                    category: n.props.category,
                    categoryName: n.props.categoryName,
                    sub_category_id: 0,
                    sort_id: 0,
                    area_type: 0,
                    parent_area_id: 1,
                    area_id: 0
                },
                isdown: n.props.isdown,
                poiList: n.props.poiList || [],
                menuData: n.props.menuData || {},
                loadingStatus: (0, c.isArray)(n.props.poiList) && n.props.poiList.length ? 4 : 3,
                pre_page_poi_list: n.props.poiList && n.props.poiList[0] && n.props.poiList[0].pre_page_poi_list || []
            }, n.beforeBehavior = n.beforeBehavior.bind(n), n.afterBehavior = n.afterBehavior.bind(n), n.handleScroll = n.handleScroll.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                1 == e.isdown && (p = !0), this.setState({
                    isdown: e.isdown,
                    params: {
                        category: this.props.category,
                        categoryName: this.props.categoryName,
                        sub_category_id: 0,
                        sort_id: 0,
                        area_type: 0,
                        parent_area_id: 1,
                        area_id: 0
                    },
                    poiList: (0, c.isArray)(e.poiList) && e.poiList,
                    menuData: (0, c.isObject)(e.menuData) && e.menuData,
                    loadingStatus: (0, c.isArray)(e.poiList) && e.poiList.length ? 4 : 0,
                    pre_page_poi_list: e.poiList && e.poiList[0] && e.poiList[0].pre_page_poi_list || []
                })
            }
        }, {
            key: "beforeBehavior", value: function () {
            }
        }, {
            key: "afterBehavior", value: function (e) {
                var t = this, n = {};
                for (var i in f = 1, e.loadingStatus = 3, e.poiList = [], e.pre_page_poi_list = [], e) n[i] = e[i];
                h = !0, p = !0, this.setState({poiList: [], isdown: 0, loadingStatus: 3}, function () {
                    m(n, function (n) {
                        h = !1;
                        var i = void 0;
                        0 == n.data.search.length ? (i = 0, p = !1) : n.data.search.length < 6 ? (i = 2, p = !1) : i = 4, t.setState({
                            poiList: n.data.search,
                            params: e,
                            loadingStatus: i,
                            pre_page_poi_list: n.data.search && n.data.search[0] && (n.data.search[0].pre_page_poi_list || [])
                        })
                    })
                })
            }
        }, {
            key: "componentDidMount", value: function () {
                l.default.add(this.handleScroll)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                l.default.remove(this.handleScroll)
            }
        }, {
            key: "handleScroll", value: function () {
                if ($(window).scrollTop() - 200 >= $(".poi-list-container").offset().top && (BNJS.swipe && BNJS.swipe.prev(), $(".gif-silder-base-food-poi").hide()), $(window).scrollTop() >= $(document).height() - $(window).height() - 2 && p && !h && 0 !== this.state.loadingStatus && 3 !== this.state.loadingStatus) {
                    this.setState({loadingStatus: 1, isdown: 0});
                    var e = this;
                    h = !0, f++;
                    var t = {};
                    for (var n in this.state.params) "poiList" != n && "menuData" != n && "loadingStatus" != n && (t[n] = this.state.params[n]);
                    t.pre_page_poi_list = this.state.pre_page_poi_list, m(t, function (t) {
                        h = !1;
                        var n = void 0;
                        t.data.search.length < 6 ? (p = !1, n = 2) : (p = !0, n = 4), e.setState({
                            isdown: 0,
                            poiList: e.state.poiList.concat(t.data.search),
                            loadingStatus: n,
                            pre_page_poi_list: t.data.search && t.data.search[0] && (t.data.search[0].pre_page_poi_list || [])
                        })
                    })
                }
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement("div", {className: "poi-container"}, r.default.createElement(a.default, {
                    category: this.props.category,
                    beforebehavior: this.beforeBehavior,
                    afterBehavior: this.afterBehavior,
                    categoryName: this.props.categoryName,
                    menuData: this.state.menuData,
                    isdown: this.state.isdown
                }), r.default.createElement(s.default, {
                    list: this.state.poiList,
                    hashb: this.props.hashb,
                    loadingStatus: this.state.loadingStatus
                }))
            }
        }]), t
    }();
    t.default = v
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    var i = function (e) {
        e.parentNode && e.parentNode.removeChild(e)
    };
    e.exports = function (e, t) {
        var n = (t = t || {}).useTransform = !t.hasOwnProperty("useTransform") || t.useTransform;
        if (e && e.nodeType && 0 !== e.children.length) {
            var o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                r = function (e) {
                    var t = ["transitionProperty", "WebkitTransition"];
                    for (var n in t) if (void 0 !== e.style[t[n]]) return !0;
                    return !1
                }(document.createElement("swipe"));
            if (o && r && 1 !== e.children.length) {
                var a, s, l, c, u, d = function (e) {
                    setTimeout(e, 0)
                }, f = !1, p = parseInt(t.startSlide, 10) || 0, h = t.speed || 300;
                t.continuous = void 0 === t.continuous || t.continuous, function () {
                    if (t.pointers) {
                        var n = e.children.length, i = n;
                        for (u = t.pointers; i--;) {
                            var o = document.createElement("i");
                            n - i - 1 === p && (o.className = "active"), u.appendChild(o)
                        }
                    }
                }();
                var m, v = t.auto || 0;
                S(), v && (m = setTimeout(x, v));
                var g, y, b = {}, _ = {};
                return y = {
                    handleEvent: function (e) {
                        switch (e.type) {
                            case"touchstart":
                                this.start(e);
                                break;
                            case"touchmove":
                                this.move(e);
                                break;
                            case"touchend":
                                d(this.end(e));
                                break;
                            case"resize":
                                d(S.call());
                                break;
                            case"webkitTransitionEnd":
                            case"transitionend":
                                d(this.transitionEnd(event))
                        }
                    }, start: function (t) {
                        var n = t.touches[0];
                        b = {
                            x: n.pageX,
                            y: n.pageY,
                            time: +new Date
                        }, g = void 0, _ = {}, e.addEventListener("touchmove", this, !1), e.addEventListener("touchend", this, !1)
                    }, move: function (e) {
                        if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                            var n = e.touches[0];
                            _ = {
                                x: n.pageX - b.x,
                                y: n.pageY - b.y
                            }, void 0 === g && (g = !!(g || Math.abs(_.x) < Math.abs(_.y))), g || (e.preventDefault(), N(), t.continuous ? C(p, _.x + s[p], 0) : (_.x = _.x / (!p && _.x > 0 || p == a.length - 1 && _.x < 0 ? Math.abs(_.x) / l + 1 : 1), C(p, _.x + s[p], 0)))
                        }
                    }, end: function (n) {
                        var i = +new Date - b.time, o = Number(i) < 250 && Math.abs(_.x) > 20 || Math.abs(_.x) > l / 2,
                            r = !p && _.x > 0 || p == a.length - 1 && _.x < 0;
                        t.continuous && (r = !1);
                        var c = _.x < 0;
                        g || (o && !r ? (c ? (t.continuous ? (T(E(p - 1), -l, 0), T(E(p + 2), l, 0)) : T(p - 1, -l, 0), T(p, s[p] - l, h), T(E(p + 1), s[E(p + 1)] - l, h), p = E(p + 1)) : (t.continuous ? (T(E(p + 1), l, 0), T(E(p - 2), -l, 0)) : T(p + 1, l, 0), T(p, s[p] + l, h), T(E(p - 1), s[E(p - 1)] + l, h), p = E(p - 1)), t.pointers && w(p), t.callback && t.callback(p, a[p])) : (t.continuous, T(p, 0, h))), e.removeEventListener("touchmove", y, !1), e.removeEventListener("touchend", y, !1)
                    }, transitionEnd: function (e) {
                        parseInt(e.target.getAttribute("data-index"), 10) == p && (t.auto && (clearTimeout(m), m = setTimeout(x, t.auto)), t.transitionEnd && t.transitionEnd.call(event, p, a[p]))
                    }
                }, e.addEventListener("touchstart", y, !1), window.addEventListener("resize", y, !1), e.addEventListener("webkitTransitionEnd", y, !1), e.addEventListener("transitionend", y, !1), {
                    next: function () {
                        N(), x()
                    }, prev: function () {
                        N(), t.continuous ? k(p - 1) : p && k(p - 1)
                    }, slide: function (e, t) {
                        N(), k(e, t)
                    }, pos: function () {
                        return p
                    }, len: function () {
                        return f ? 2 : a.length
                    }
                }
            }
            e.style.visibility = "visible"
        }

        function w(e) {
            var t = u.children.length;
            for (e %= t; t--;) u.children[t].className = t === e ? "active" : ""
        }

        function S() {
            if (a = e.children, c = a.length) {
                if (e.style.width = c * document.body.clientWidth, t.continuous && c < 3) {
                    for (var n = [], o = 0, r = a.length; o < r; o++) n[o] = a[o].cloneNode(!0), n[o].setAttribute("data-fake", "true"), e.appendChild(n[o]);
                    a = e.children, c = a.length, f = !0
                }
                s = new Array(c), l = (l = document.body.clientWidth) - .08 * document.body.clientWidth + 8 * document.body.clientWidth / 375;
                for (var u = c; u--;) {
                    a[u].setAttribute("data-index", u), T(u, p > u ? -l : p < u ? l : 0, 0)
                }
                t.continuous && (0 === p && T(E(p - 1), -l, 0), p === c && T(E(p + 1), l, 0)), e.style.visibility = "visible", k(0)
            } else i(e.parentNode)
        }

        function x() {
            t.continuous ? k(p + 1) : p < a.length - 1 && k(p + 1)
        }

        function E(e) {
            return (a.length + e % a.length) % a.length
        }

        function k(e, n) {
            if ("shoubai" != window.issb && p != e) {
                var i = Math.abs(p - e) / (p - e);
                if (t.continuous) {
                    var o = i;
                    (i = -s[E(e)] / l) !== o && (e = -i * a.length + e)
                }
                for (var r = Math.abs(p - e) - 1; r--;) T(E((e > p ? e : p) - r - 1), l * i, 0);
                e = E(e), T(p, l * i, n || h), T(e, 0, n || h), t.continuous && T(E(e - i), -l * i, 0), p = e, t.pointers && w(p), d(t.callback && t.callback(p, a[p]))
            }
        }

        function T(e, t, n) {
            C(e, t, n), s[e] = t
        }

        function C(t, i, o) {
            var r = e && e.style;
            if (r) {
                var a = 0 - t * l + i;
                r.webkitTransitionDuration = r.transitionDuration = o + "ms", n ? (r.webkitTransform = "translate(" + a + "px,0)translateZ(0)", r.transform = "translateX(" + a + "px)") : r.left = a + "px"
            }
        }

        function N() {
            v = 0, clearTimeout(m)
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = n(7), s = c(n(29)), l = c(n(201));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function f(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    n(200);
    var p = void 0, h = function (e) {
        function t(e) {
            u(this, t);
            var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handlerClick = n.handlerClick.bind(n), n.state = {}, n.props.addLogFun && "[object Function]" == Object.prototype.toString.call(n.props.addLogFun) && (n.state.addLogFunFlag = !0), n
        }

        return f(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                var e = document.getElementById("detailHeader"), t = this;
                p = setTimeout(function () {
                    t.state.addLogFunFlag && t.props.addLogFun(e, 0)
                }, 0), this.swipeEvent(e)
            }
        }, {
            key: "componentDidUpdate", value: function () {
                clearTimeout(p);
                var e = document.getElementById("detailHeader");
                this.state.addLogFunFlag && this.props.addLogFun(e, 0), this.swipeEvent(e)
            }
        }, {
            key: "swipeEvent", value: function (e) {
                var t = this, n = .92 * document.body.clientWidth;
                if ($("#detailHeader li").each(function (e) {
                    $(this).css({width: n + "px"}), $(this)[0].addEventListener("touchstart", a.addClickEffect, !1)
                }), this.props.itemlist && this.props.itemlist.length > 1) {
                    var i = this.props.itemlist.length;
                    new l.default(e, {
                        continuous: !1, pointers: !1, callback: function (n) {
                            t.state.addLogFunFlag && t.props.addLogFun(e, n % i)
                        }
                    })
                }
            }
        }, {
            key: "handlerClick", value: function (e) {
                var t = e.currentTarget.getAttribute("data-index") % this.props.itemlist.length;
                (0, a.addClickEffect)(e), "shoubai" === (0, a.getChannel)() && (window.issb = "shoubai"), this.props.click && this.props.click(t)
            }
        }, {
            key: "render", value: function () {
                var e = this.props.itemlist, t = void 0 === e ? [] : e;
                if (!t.length) return null;
                var n = this, i = t.map(function (e, t) {
                    var i = 10 - t;
                    return r.default.createElement("li", {
                        key: t,
                        "data-index": t,
                        style: {zIndex: i},
                        className: "padding-sliders",
                        onClick: n.handlerClick
                    }, r.default.createElement("img", {
                        "data-index": t,
                        src: e.img
                    }), 1 == parseInt(e.adv_status) && r.default.createElement("div", {className: "adv-tag"}))
                });
                return r.default.createElement("div", {className: "detail-header"}, r.default.createElement("ul", {id: "detailHeader"}, i), r.default.createElement("div", {
                    id: "pointers",
                    className: "pointers"
                }))
            }
        }]), t
    }(), m = function (e) {
        function t(e) {
            u(this, t);
            var n = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.timer = null, n.state = {data: n.props.data}, n.bindEvent = n.bindEvent.bind(n), n.addShowLog = n.addShowLog.bind(n), n
        }

        return f(t, o.Component), i(t, [{
            key: "bindEvent", value: function (e) {
                var t = this.state.data && this.state.data[e] && this.state.data[e].cont,
                    n = this.state.data && this.state.data[e] && this.state.data[e].id;
                s.default.cuisine_banner_click && (0, a.addLog)(s.default.cuisine_banner_click, {
                    place: parseInt(e) + 1,
                    id: n
                });
                var i = this.state.data && this.state.data[e] && this.state.data[e].adv_status;
                parseInt(i) && s.default.adst_click_food_banner && (0, a.addLog)(s.default.adst_click_food_banner, {
                    pos: parseInt(e) + 1,
                    adv_id: n
                }), t && BNJS.page.start((0, a.effectiveUrl)(t))
            }
        }, {
            key: "componentWillReceiveProps", value: function (e) {
                e.data.length > 0 && this.setState({data: e.data})
            }
        }, {
            key: "addShowLog", value: function (e, t) {
                var n = this;
                clearTimeout(n.timer), n.timer = setTimeout(function () {
                    if ((0, a.inViewAll)(e, 0)) {
                        var i = n.state.data && n.state.data[t] && n.state.data[t].id;
                        s.default.cuisine_banner_show2 && (0, a.addLog)(s.default.cuisine_banner_show2, {
                            place: parseInt(t) + 1,
                            id: i
                        });
                        var o = n.state.data && n.state.data[t] && n.state.data[t].adv_status;
                        parseInt(o) && s.default.adst_show_food_banner && (0, a.addLog)(s.default.adst_show_food_banner, {
                            pos: parseInt(t) + 1,
                            adv_id: i
                        })
                    }
                }, 1e3)
            }
        }, {
            key: "render", value: function () {
                var e = this.state.data, t = void 0 === e ? [] : e;
                return r.default.createElement(h, {itemlist: t, click: this.bindEvent, addLogFun: this.addShowLog})
            }
        }]), t
    }();
    t.default = m
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    !function () {
        var r = {}.hasOwnProperty;

        function a() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                if (n) {
                    var i = void 0 === n ? "undefined" : o(n);
                    if ("string" === i || "number" === i) e.push(n); else if (Array.isArray(n)) e.push(a.apply(null, n)); else if ("object" === i) for (var s in n) r.call(n, s) && n[s] && e.push(s)
                }
            }
            return e.join(" ")
        }

        void 0 !== e && e.exports ? e.exports = a : "object" === o(n(49)) && n(49) ? void 0 === (i = function () {
            return a
        }.apply(t, [])) || (e.exports = i) : window.classNames = a
    }()
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = s(o);
    n(207);
    var a = s(n(54));

    function s(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var l = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {title: n.props.title}, n.move = n.move.bind(n), n.handlerClick = n.handlerClick.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                var e = this, t = this.props.data, n = void 0 === t ? [] : t,
                    i = parseInt(10 * document.body.clientWidth / 100 * 106 / 75);
                setTimeout(function () {
                    (0, a.default)(".top-line-icon").each(function (e) {
                        var t = (0, a.default)(".top-line-icon").eq(e).find("img"), o = new Image;
                        o.src = n[e].images, o.onload = function () {
                            var e = o.width, n = o.height;
                            if (e > n) {
                                t.css("height", i);
                                var r = (e * i / n - i) / 2;
                                t.css("left", -r)
                            }
                            if (e < n) {
                                t.css("width", i);
                                var a = (n * i / e - i) / 2;
                                t.css("top", -a)
                            }
                            e == n && (t.css("width", i), t.css("height", i))
                        }
                    }), e.move(i)
                }, 0)
            }
        }, {
            key: "move", value: function (e) {
                var t = 0, n = (0, a.default)(".font_inner"), i = (0, a.default)(".font_inner li");
                i.eq(0).clone(!0).appendTo(n);
                var o = this.props.data, r = void 0 === o ? [] : o, s = new Image;
                s.src = r[0].images;
                var l = (0, a.default)(".font_inner li").eq((0, a.default)(".font_inner li").length - 1).find("img");
                s.onload = function () {
                    var t = s.width, n = s.height;
                    if (t > n) {
                        l.css("height", e);
                        var i = (t * e / n - e) / 2;
                        l.css("left", -i)
                    }
                    if (t < n) {
                        l.css("width", e);
                        var o = (n * e / t - e) / 2;
                        l.css("top", -o)
                    }
                    t == n && (l.css("width", e), l.css("height", e))
                };
                var c = Math.round(10 * document.body.clientWidth / 100 * 166 / 75), u = i.length * c;
                n.height(u);
                setInterval(function () {
                    ++t > i.length && (t = 0), i.eq(t - 1).addClass("opacity"), n.animate({top: -t * c}, 600, "swing", function () {
                        t == i.length && (n.css({top: 0}), t = 0), i.eq(t - 1).removeClass("opacity")
                    })
                }, 3e3)
            }
        }, {
            key: "handlerClick", value: function (e) {
                this.props.click && this.props.click(e, e.currentTarget.getAttribute("data-index"))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props, n = t.data, i = void 0 === n ? [] : n, o = t.count,
                    a = void 0 === o ? 5 : o, s = this, l = (i.length > a ? i.slice(0, 5) : i).map(function (t, n) {
                        return r.default.createElement("li", {
                            key: n,
                            "data-index": n,
                            onClick: e.handlerClick
                        }, r.default.createElement("div", {className: "top-line-icon"}, r.default.createElement("img", {
                            src: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                            "data-src": t.images,
                            className: "lazyload",
                            alt: ""
                        })), r.default.createElement("div", {className: "top-line-right"}, r.default.createElement("div", {className: "right title"}, s.state.title, " ", s.state.title ? r.default.createElement("span", null, "|") : null, t.title), r.default.createElement("div", {className: "right subtitle"}, t.thumbNum, "人浏览")))
                    });
                return r.default.createElement("div", {className: "top-line-box"}, r.default.createElement("div", {className: "top-line-block"}, r.default.createElement("div", {className: "news_box"}, r.default.createElement("ul", {className: "font_inner"}, l)), r.default.createElement("div", {className: "top_line_arrow"})))
            }
        }]), t
    }();
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = d(o), a = n(69), s = n(7), l = d(n(208)), c = d(n(29)), u = d(n(205));

    function d(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(204);
    var f = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            n.bindEvent = n.bindEvent.bind(n), n.state = {list: []};
            var i = n;
            return BNJS.http.get({
                url: a.topline,
                params: {
                    action: "getChAreaInfo",
                    city_id: BNJS.location.selectCityCode,
                    location: BNJS.location.latitude + "," + BNJS.location.longitude,
                    bizfrom: "cuisine_homefeed",
                    config_id: 1,
                    pa: "nuomi"
                },
                onSuccess: function (e) {
                    if ((0, s.isObject)(e) && 0 === parseInt(e.errno, 10) && (0, s.isObject)(e.data)) {
                        var t = e.data.scroll_inform_list;
                        i.setState({list: t})
                    }
                },
                onFail: function (e) {
                }
            }), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidUpdate", value: function () {
                $(".topline-container").find("li").each(function () {
                    $(this)[0].addEventListener("touchstart", s.addClickEffect, !1)
                })
            }
        }, {
            key: "bindEvent", value: function (e, t) {
                var n = this.state.list;
                n && n[t] && n[t].id, this.props.action;
                (0, s.addLog)(c.default.cuisine_news_click), (0, s.addClickEffect)(e);
                var i = n && n[t] && n[t].url, o = n && n[t] && n[t].wap_url;
                BNJS.page.start((0, s.isWap)() ? o : i)
            }
        }, {
            key: "render", value: function () {
                var e = this.props.count, t = void 0 === e ? 5 : e,
                    n = (0, u.default)({"topline-container": !0, "border-top": this.state.list.length > 0});
                return r.default.createElement("div", {className: n}, this.state.list.length ? r.default.createElement(l.default, {
                    count: t,
                    data: this.state.list,
                    click: this.bindEvent,
                    title: "美食头条"
                }) : null)
            }
        }]), t
    }();
    t.default = f
}, , function (e, t, n) {
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = (i = r) && i.__esModule ? i : {default: i};
    n(213);
    var s = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.handlerClick = n.handlerClick.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "componentDidMount", value: function () {
            }
        }, {
            key: "handlerClick", value: function (e) {
                this.props.click && this.props.click(e, e.currentTarget.getAttribute("data-index"))
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.data, n = void 0 === t ? [] : t, i = n.length > 4 ? n.slice(0, 4) : n,
                    o = i.length % 2 != 0 && i.length <= 4 ? "block-three-column" : i.length % 2 != 0 ? "block-even-column uneven" : "block-even-column even",
                    r = i.map(function (t, n) {
                        return a.default.createElement("li", {
                            className: "block-item",
                            key: n,
                            "data-index": n,
                            onClick: e.handlerClick
                        }, a.default.createElement("div", {className: "block-item-div"}, a.default.createElement("div", {className: "block-item-content"}, a.default.createElement("h4", {className: "title"}, t.advName), a.default.createElement("div", {className: "subtitle"}, t.desc)), a.default.createElement("div", {
                            className: "bg-img",
                            style: {backgroundImage: "url(" + t.img + ")"}
                        }), 1 == parseInt(t.adv_status) && a.default.createElement("div", {className: "adv-tag"})))
                    });
                return a.default.createElement("div", {className: "block-list"}, a.default.createElement("ul", {className: o}, r))
            }
        }]), t
    }();
    t.default = s
}, function (e, t, n) {
    "use strict";

    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    function i(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    e.exports = function (e) {
        return null != e && (i(e) || function (e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && i(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}, function (e, t, n) {
    "use strict";
    var i, o;
    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {
        rotl: function (e, t) {
            return e << t | e >>> 32 - t
        }, rotr: function (e, t) {
            return e << 32 - t | e >>> t
        }, endian: function (e) {
            if (e.constructor == Number) return 16711935 & o.rotl(e, 8) | 4278255360 & o.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = o.endian(e[t]);
            return e
        }, randomBytes: function (e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
        }, bytesToWords: function (e) {
            for (var t = [], n = 0, i = 0; n < e.length; n++, i += 8) t[i >>> 5] |= e[n] << 24 - i % 32;
            return t
        }, wordsToBytes: function (e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
        }, bytesToHex: function (e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("")
        }, hexToBytes: function (e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t
        }, bytesToBase64: function (e) {
            for (var t = [], n = 0; n < e.length; n += 3) for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; r < 4; r++) 8 * n + 6 * r <= 8 * e.length ? t.push(i.charAt(o >>> 6 * (3 - r) & 63)) : t.push("=");
            return t.join("")
        }, base64ToBytes: function (e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var t = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && t.push((i.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | i.indexOf(e.charAt(n)) >>> 6 - 2 * o);
            return t
        }
    }, e.exports = o
}, function (e, t, n) {
    "use strict";
    var i, o, r, a, s;
    i = n(216), o = n(102).utf8, r = n(215), a = n(102).bin, (s = function e(t, n) {
        t.constructor == String ? t = n && "binary" === n.encoding ? a.stringToBytes(t) : o.stringToBytes(t) : r(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
        for (var s = i.bytesToWords(t), l = 8 * t.length, c = 1732584193, u = -271733879, d = -1732584194, f = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
        s[l >>> 5] |= 128 << l % 32, s[14 + (l + 64 >>> 9 << 4)] = l;
        var h = e._ff, m = e._gg, v = e._hh, g = e._ii;
        for (p = 0; p < s.length; p += 16) {
            var y = c, b = u, _ = d, w = f;
            u = g(u = g(u = g(u = g(u = v(u = v(u = v(u = v(u = m(u = m(u = m(u = m(u = h(u = h(u = h(u = h(u, d = h(d, f = h(f, c = h(c, u, d, f, s[p + 0], 7, -680876936), u, d, s[p + 1], 12, -389564586), c, u, s[p + 2], 17, 606105819), f, c, s[p + 3], 22, -1044525330), d = h(d, f = h(f, c = h(c, u, d, f, s[p + 4], 7, -176418897), u, d, s[p + 5], 12, 1200080426), c, u, s[p + 6], 17, -1473231341), f, c, s[p + 7], 22, -45705983), d = h(d, f = h(f, c = h(c, u, d, f, s[p + 8], 7, 1770035416), u, d, s[p + 9], 12, -1958414417), c, u, s[p + 10], 17, -42063), f, c, s[p + 11], 22, -1990404162), d = h(d, f = h(f, c = h(c, u, d, f, s[p + 12], 7, 1804603682), u, d, s[p + 13], 12, -40341101), c, u, s[p + 14], 17, -1502002290), f, c, s[p + 15], 22, 1236535329), d = m(d, f = m(f, c = m(c, u, d, f, s[p + 1], 5, -165796510), u, d, s[p + 6], 9, -1069501632), c, u, s[p + 11], 14, 643717713), f, c, s[p + 0], 20, -373897302), d = m(d, f = m(f, c = m(c, u, d, f, s[p + 5], 5, -701558691), u, d, s[p + 10], 9, 38016083), c, u, s[p + 15], 14, -660478335), f, c, s[p + 4], 20, -405537848), d = m(d, f = m(f, c = m(c, u, d, f, s[p + 9], 5, 568446438), u, d, s[p + 14], 9, -1019803690), c, u, s[p + 3], 14, -187363961), f, c, s[p + 8], 20, 1163531501), d = m(d, f = m(f, c = m(c, u, d, f, s[p + 13], 5, -1444681467), u, d, s[p + 2], 9, -51403784), c, u, s[p + 7], 14, 1735328473), f, c, s[p + 12], 20, -1926607734), d = v(d, f = v(f, c = v(c, u, d, f, s[p + 5], 4, -378558), u, d, s[p + 8], 11, -2022574463), c, u, s[p + 11], 16, 1839030562), f, c, s[p + 14], 23, -35309556), d = v(d, f = v(f, c = v(c, u, d, f, s[p + 1], 4, -1530992060), u, d, s[p + 4], 11, 1272893353), c, u, s[p + 7], 16, -155497632), f, c, s[p + 10], 23, -1094730640), d = v(d, f = v(f, c = v(c, u, d, f, s[p + 13], 4, 681279174), u, d, s[p + 0], 11, -358537222), c, u, s[p + 3], 16, -722521979), f, c, s[p + 6], 23, 76029189), d = v(d, f = v(f, c = v(c, u, d, f, s[p + 9], 4, -640364487), u, d, s[p + 12], 11, -421815835), c, u, s[p + 15], 16, 530742520), f, c, s[p + 2], 23, -995338651), d = g(d, f = g(f, c = g(c, u, d, f, s[p + 0], 6, -198630844), u, d, s[p + 7], 10, 1126891415), c, u, s[p + 14], 15, -1416354905), f, c, s[p + 5], 21, -57434055), d = g(d, f = g(f, c = g(c, u, d, f, s[p + 12], 6, 1700485571), u, d, s[p + 3], 10, -1894986606), c, u, s[p + 10], 15, -1051523), f, c, s[p + 1], 21, -2054922799), d = g(d, f = g(f, c = g(c, u, d, f, s[p + 8], 6, 1873313359), u, d, s[p + 15], 10, -30611744), c, u, s[p + 6], 15, -1560198380), f, c, s[p + 13], 21, 1309151649), d = g(d, f = g(f, c = g(c, u, d, f, s[p + 4], 6, -145523070), u, d, s[p + 11], 10, -1120210379), c, u, s[p + 2], 15, 718787259), f, c, s[p + 9], 21, -343485551), c = c + y >>> 0, u = u + b >>> 0, d = d + _ >>> 0, f = f + w >>> 0
        }
        return i.endian([c, u, d, f])
    })._ff = function (e, t, n, i, o, r, a) {
        var s = e + (t & n | ~t & i) + (o >>> 0) + a;
        return (s << r | s >>> 32 - r) + t
    }, s._gg = function (e, t, n, i, o, r, a) {
        var s = e + (t & i | n & ~i) + (o >>> 0) + a;
        return (s << r | s >>> 32 - r) + t
    }, s._hh = function (e, t, n, i, o, r, a) {
        var s = e + (t ^ n ^ i) + (o >>> 0) + a;
        return (s << r | s >>> 32 - r) + t
    }, s._ii = function (e, t, n, i, o, r, a) {
        var s = e + (n ^ (t | ~i)) + (o >>> 0) + a;
        return (s << r | s >>> 32 - r) + t
    }, s._blocksize = 16, s._digestsize = 16, e.exports = function (e, t) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
        var n = i.wordsToBytes(s(e, t));
        return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : i.bytesToHex(n)
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = (c(n(217)), c(n(214))), s = n(7), l = c(n(29));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(211);
    var u = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.bindEvent = n.bindEvent.bind(n), n.state = {data: n.props.data}, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({data: e.data})
            }
        }, {
            key: "componentDidMount", value: function () {
                this.addEffect()
            }
        }, {
            key: "componentDidUpdate", value: function () {
                this.addEffect()
            }
        }, {
            key: "addEffect", value: function () {
                $(".block-list .block-item").each(function (e) {
                    $(this)[0].addEventListener("touchstart", s.addClickEffect, !1)
                })
            }
        }, {
            key: "bindEvent", value: function (e, t) {
                (0, s.addClickEffect)(e);
                var n = this.props.data && this.props.data[t] && this.props.data[t].cont;
                (0, s.addLog)(l.default.cuisine_doufukuai_click, {place: parseInt(t) + 1});
                var i = this.props.data && this.props.data[t] && this.props.data[t].adv_status;
                parseInt(i) && l.default.adst_click_food_doufukuai && (0, s.addLog)(l.default.adst_click_food_doufukuai, {
                    pos: parseInt(t) + 1,
                    adv_id: this.props.data[t].id
                }), n && BNJS.page.start((0, s.effectiveUrl)(n))
            }
        }, {
            key: "render", value: function () {
                var e = this.state.data;
                this.state.openwomai;
                return r.default.createElement("div", null, r.default.createElement(a.default, {
                    data: e,
                    click: this.bindEvent
                }))
            }
        }]), t
    }();
    t.default = u
}, , function (e, t, n) {
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i, o = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), r = n(5), a = (i = r) && i.__esModule ? i : {default: i};
    n(7);
    n(222);
    var s = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {showMore: !1}, n.handleClick = n.handleClick.bind(n), n.moreClick = n.moreClick.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r.Component), o(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                this.setState({data: e.data, showMore: !1})
            }
        }, {
            key: "componentDidMount", value: function () {
                var e = Math.ceil(this.props.data.length / 4) >= 2 ? 2 : 1;
                $(".category-list-more").css("height", 93 * e + "px")
            }
        }, {
            key: "componentDidUpdate", value: function () {
                var e = Math.ceil(this.props.data.length / 4) >= 2 ? 2 : 1;
                $(".category-list-more").css("height", 93 * e + "px")
            }
        }, {
            key: "handleClick", value: function (e) {
                this.props.click && this.props.click(e.currentTarget.getAttribute("data-index"))
            }
        }, {
            key: "moreClick", value: function () {
                var e = Math.ceil(this.props.data.length / 4);
                this.setState({showMore: !0}, function () {
                    $(".category-list-more").animate({height: 93 * e + "px"}, 300, "ease")
                }), this.props.moreLogEvent && this.props.moreLogEvent()
            }
        }, {
            key: "render", value: function () {
                var e = this, t = this.props.data, n = void 0 === t ? [] : t, i = !1;
                n.length > 8 && !this.state.showMore && (n = n.slice(0, 7), i = !0);
                for (var o = this.props.color || "#f9f8ff", r = /Android/gi.test(navigator.userAgent) ? "item-text android" : "item-text", s = n.map(function (t, n) {
                    var i = {backgroundImage: "url(" + t.img + ")", backgroundColor: o},
                        s = {backgroundImage: "url(" + t.img1 + ")"};
                    return a.default.createElement("li", {
                        key: n,
                        className: "cate-item-out"
                    }, a.default.createElement("a", {
                        className: "cate-item-inner",
                        "data-index": n,
                        onClick: e.handleClick
                    }, a.default.createElement("div", {
                        className: "item-icon",
                        style: i
                    }, t.img1 && a.default.createElement("div", {
                        className: "super-icon",
                        style: s
                    })), a.default.createElement("div", {className: r}, t.advName), a.default.createElement("div", {className: "mask"})))
                }), l = [], c = [], u = 0, d = 0; d < s.length; d += 4) {
                    if (c = s.slice(d, d + 4), u++, i && c.length < 4) c.push(a.default.createElement("li", {
                        key: "8",
                        className: "cate-item-out"
                    }, a.default.createElement("a", {
                        className: "cate-item-inner",
                        onClick: this.moreClick
                    }, a.default.createElement("div", {className: "item-icon-more"}, a.default.createElement("p", null)), a.default.createElement("div", {className: "item-text"}, "更多"), a.default.createElement("div", {className: "mask"})))); else for (var f = 4 * (u + 1), p = 4; c.length < 4;) p--, c.push(a.default.createElement("li", {
                        key: f - p,
                        className: "cate-item-out"
                    }, a.default.createElement("a", {className: "cate-item-inner"})));
                    l.push(a.default.createElement("ul", {key: u, className: "category-list-ul"}, c))
                }
                return a.default.createElement("div", {className: "category-list-more"}, l)
            }
        }]), t
    }();
    t.default = s
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = n(7), s = c(n(223)), l = c(n(29));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(220);
    var u = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {data: n.props.data}, n.handleClick = n.handleClick.bind(n), n.moreClickLog = n.moreClickLog.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                e.data.length > 0 && this.setState({data: e.data})
            }
        }, {
            key: "handleClick", value: function (e) {
                var t = this.state.data && this.state.data[e] && this.state.data[e].cont;
                (0, a.addLog)(l.default.jingang_click, {place: parseInt(e) + 1}), t && BNJS.page.start((0, a.effectiveUrl)(t))
            }
        }, {
            key: "moreClickLog", value: function () {
                (0, a.addLog)(l.default.cuisine_jingangmore_click)
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement(s.default, {
                    data: this.state.data,
                    click: this.handleClick,
                    moreLogEvent: this.moreClickLog
                })
            }
        }]), t
    }();
    t.default = u
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = c(o), a = n(7), s = c(n(54)), l = c(n(29));

    function c(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(226);
    var u = !1, d = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {hotWord: "输入菜品名、商家名或地点"}, n.preTop = 0, n.handleClick = n.handleClick.bind(n), n.move = n.move.bind(n), n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentWillReceiveProps", value: function (e) {
                (0, a.isObject)(e.data) && e.data.searchWord && this.setState({hotWord: e.data.searchWord})
            }
        }, {
            key: "move", value: function (e) {
                var t = (0, s.default)(window).scrollTop();
                Date.parse(new Date);
                t >= 20 && this.preTop <= 20 && 0 == u ? (BNJS.ui.title.addActionButton({
                    tag: "1",
                    text: "Search",
                    icon: "search",
                    callback: function () {
                        BNJS.page.start("bainuo://search?vt_cat=326"), (0, a.addLog)(l.default.cuisine_searchbuttion_click)
                    }
                }), u = !0) : t <= 20 && this.preTop > 20 && 1 == u && (BNJS.ui.title.removeBtnByTag("1"), u = !1), this.preTop = t
            }
        }, {
            key: "componentDidMount", value: function () {
                document.addEventListener("touchmove", this.move), document.addEventListener("scroll", this.move)
            }
        }, {
            key: "componentWillUnmount", value: function () {
                document.removeEventListener("touchmove", this.move), document.removeEventListener("scroll", this.move)
            }
        }, {
            key: "handleClick", value: function () {
                (0, a.addLog)(l.default.cuisine_searchbar_click), BNJS.page.start("bainuo://search?vt_cat=326&externHintText=" + encodeURIComponent(this.state.hotWord))
            }
        }, {
            key: "render", value: function () {
                return r.default.createElement("div", {className: "search-box"}, r.default.createElement("div", {
                    className: "search-bar border-all",
                    onClick: this.handleClick
                }, r.default.createElement("div", {className: "serach-btn"}), r.default.createElement("div", {className: "serrch-keyword-flex"}, this.state.hotWord)))
            }
        }]), t
    }();
    t.default = d
}, function (e, t, n) {
    "use strict";
    n(7);
    e.exports = {
        baseData: {
            namis: {errno: 0, banners: [], jingang: [], block: [], tanchuang: []},
            search: [],
            filterlist: {
                category: [{catg_id: "0", catg_name: "全部"}, {catg_id: "327", catg_name: "其他美食"}, {
                    catg_id: "364",
                    catg_name: "火锅"
                }, {catg_id: "380", catg_name: "小吃快餐"}, {catg_id: "388", catg_name: "粤菜"}, {
                    catg_id: "389",
                    catg_name: "日韩料理"
                }, {catg_id: "390", catg_name: "东南亚菜"}, {catg_id: "391", catg_name: "西餐"}, {
                    catg_id: "392",
                    catg_name: "自助餐"
                }, {catg_id: "393", catg_name: "川湘菜"}, {catg_id: "424", catg_name: "江浙菜"}, {
                    catg_id: "439",
                    catg_name: "海鲜"
                }, {catg_id: "450", catg_name: "北京菜"}, {catg_id: "451", catg_name: "新疆菜"}, {
                    catg_id: "460",
                    catg_name: "烧烤/烤肉"
                }, {catg_id: "504", catg_name: "东北菜"}, {catg_id: "509", catg_name: "云贵菜"}, {
                    catg_id: "652",
                    catg_name: "鲁菜"
                }, {catg_id: "653", catg_name: "西北菜"}, {catg_id: "655", catg_name: "素食"}, {
                    catg_id: "690",
                    catg_name: "干锅/香锅"
                }, {catg_id: "692", catg_name: "创意菜/私房菜"}, {catg_id: "696", catg_name: "台湾菜/客家菜"}, {
                    catg_id: "874",
                    catg_name: "徽菜"
                }, {catg_id: "878", catg_name: "烤鱼"}, {catg_id: "880", catg_name: "甜品"}, {
                    catg_id: "881",
                    catg_name: "蛋糕"
                }, {catg_id: "883", catg_name: "烤鸭"}, {catg_id: "884", catg_name: "麻辣烫/冒菜"}, {
                    catg_id: "954",
                    catg_name: "咖啡"
                }, {catg_id: "962", catg_name: "中餐/家常菜"}, {catg_id: "2016", catg_name: "婚宴"}, {
                    catg_id: "2049",
                    catg_name: "夏日饮品"
                }, {catg_id: "2050", catg_name: "小龙虾"}, {catg_id: "2051", catg_name: "酒吧"}, {
                    catg_id: "2052",
                    catg_name: "粥店"
                }, {catg_id: "2055", catg_name: "储值卡"}, {catg_id: "2056", catg_name: "聚餐"}, {
                    catg_id: "2057",
                    catg_name: "外卖"
                }],
                area: {
                    d: [{
                        name: "商圈",
                        d: [{
                            name: "附近",
                            id: "1",
                            d: [{id: "0", name: "全城", need_loc: "1"}, {
                                id: "500",
                                name: "500m",
                                need_loc: "1"
                            }, {id: "1000", name: "1km", need_loc: "1"}, {
                                id: "3000",
                                name: "3km",
                                need_loc: "1"
                            }, {id: "5000", name: "5km", need_loc: "1"}]
                        }, {
                            name: "全城·热门",
                            id: "0",
                            d: [{name: "全城", id: "0"}, {name: "通州区", id: 1506}, {name: "黄村", id: 1427}, {
                                name: "房山",
                                id: 1417
                            }, {name: "五道口", id: 1318}, {name: "望京", id: 1388}, {name: "北太平庄", id: 1372}, {
                                name: "亚运村",
                                id: 1396
                            }, {name: "回龙观", id: 1405}, {name: "顺义", id: 1398}, {name: "昌平镇", id: 1397}, {
                                name: "中关村",
                                id: 1324
                            }, {name: "清河", id: 1440}, {name: "苏州桥", id: 1382}, {name: "安贞", id: 1316}, {
                                name: "双井",
                                id: 1384
                            }, {name: "密云", id: 20316}, {name: "怀柔", id: 1437}, {name: "方庄", id: 1325}, {
                                name: "五棵松",
                                id: 1403
                            }, {name: "梨园", id: 1443}]
                        }, {
                            id: "394",
                            name: "东城区",
                            d: [{id: "0", name: "全部"}, {id: "1321", name: "和平里", loc: "116.4283,39.9645"}, {
                                id: "1322",
                                name: "东直门",
                                loc: "116.4467,39.9435"
                            }, {id: "1328", name: "王府井", loc: "116.4181,39.9223"}, {
                                id: "1329",
                                name: "东单",
                                loc: "116.4241,39.9166"
                            }, {id: "1374", name: "广渠门", loc: "116.4476,39.9051"}, {
                                id: "1378",
                                name: "安定门",
                                loc: "116.4146,39.9559"
                            }, {id: "1389", name: "东四", loc: "116.4244,39.9306"}, {
                                id: "1393",
                                name: "建国门",
                                loc: "116.4422,39.9144"
                            }, {id: "1394", name: "北京站", loc: "116.4362,39.9111"}, {
                                id: "1441",
                                name: "崇文门",
                                loc: "116.4264,39.9031"
                            }, {id: "1454", name: "左安门", loc: "116.446,39.8796"}, {
                                id: "1455",
                                name: "前门",
                                loc: "116.4047,39.9049"
                            }, {id: "1458", name: "天坛", loc: "116.4128,39.8858"}, {
                                id: "1503",
                                name: "朝阳门",
                                loc: "116.4401,39.9296"
                            }, {id: "13895", name: "南锣鼓巷", loc: "116.4095,39.9393"}, {
                                id: "20538",
                                name: "雍和宫",
                                loc: "116.4236,39.956"
                            }, {id: "20626", name: "东四十条", loc: "116.4394,39.9397"}, {
                                id: "21400",
                                name: "簋街",
                                loc: "116.4313,39.9469"
                            }]
                        }, {
                            id: "395",
                            name: "丰台区",
                            d: [{id: "0", name: "全部"}, {id: "1325", name: "方庄", loc: "116.4458,39.8648"}, {
                                id: "1335",
                                name: "六里桥",
                                loc: "116.3182,39.892"
                            }, {id: "1336", name: "丽泽桥", loc: "116.3189,39.8733"}, {
                                id: "1385",
                                name: "沙子口",
                                loc: "116.4108,39.8688"
                            }, {id: "1420", name: "洋桥", loc: "116.3932,39.8632"}, {
                                id: "1421",
                                name: "木樨园",
                                loc: "116.4112,39.8641"
                            }, {id: "1422", name: "草桥", loc: "116.3615,39.8522"}, {
                                id: "1425",
                                name: "右安门",
                                loc: "116.3711,39.8754"
                            }, {id: "1433", name: "开阳里", loc: "116.3753,39.871"}, {
                                id: "1442",
                                name: "青塔",
                                loc: "116.2749,39.8994"
                            }, {id: "1444", name: "北大地", loc: "116.2934,39.8634"}, {
                                id: "1454",
                                name: "左安门",
                                loc: "116.446,39.8796"
                            }, {id: "1466", name: "刘家窑", loc: "116.4279,39.8643"}, {
                                id: "1504",
                                name: "看丹桥",
                                loc: "116.2933,39.8474"
                            }, {id: "5816", name: "公益西桥", loc: "116.3759,39.8408"}, {
                                id: "7932",
                                name: "马家堡",
                                loc: "116.3797,39.8588"
                            }, {id: "8858", name: "大红门", loc: "116.4088,39.845"}, {
                                id: "9198",
                                name: "卢沟桥",
                                loc: "116.2162,39.8504"
                            }, {id: "9199", name: "花乡", loc: "116.3369,39.8381"}, {
                                id: "9200",
                                name: "云岗",
                                loc: "116.1651,39.8146"
                            }, {id: "10239", name: "分钟寺", loc: "116.4612,39.8582"}, {
                                id: "11365",
                                name: "成寿寺",
                                loc: "116.4535,39.851"
                            }, {id: "21238", name: "新宫", loc: "116.3722,39.818"}]
                        }, {
                            id: "409",
                            name: "大兴区",
                            d: [{id: "0", name: "全部"}, {id: "1418", name: "亦庄", loc: "116.502,39.8031"}, {
                                id: "1427",
                                name: "黄村",
                                loc: "116.3535,39.7493"
                            }, {id: "1431", name: "旧宫", loc: "116.453,39.8123"}, {
                                id: "9075",
                                name: "西红门",
                                loc: "116.3468,39.7968"
                            }]
                        }, {
                            id: "6548",
                            name: "密云县",
                            d: [{id: "0", name: "全部"}, {
                                id: "14437",
                                name: "溪翁庄镇",
                                loc: "116.8591,40.4801"
                            }, {id: "20316", name: "密云", loc: "116.8501,40.3814"}, {
                                id: "21363",
                                name: "雾灵仙界度假村",
                                loc: "117.4354,40.6371"
                            }]
                        }, {
                            id: "6547",
                            name: "平谷区",
                            d: [{id: "0", name: "全部"}, {id: "1438", name: "平谷", loc: "117.1276,40.1467"}, {
                                id: "25040",
                                name: "北京平谷华联购物中心",
                                loc: "0,0"
                            }]
                        }, {
                            id: "6549",
                            name: "延庆县",
                            d: [{id: "0", name: "全部"}, {id: "1457", name: "延庆县", loc: "115.9817,40.4624"}, {
                                id: "25100",
                                name: "康庄镇",
                                loc: "0,0"
                            }]
                        }, {
                            id: "6546",
                            name: "怀柔区",
                            d: [{id: "0", name: "全部"}, {id: "1437", name: "怀柔", loc: "116.6392,40.3178"}, {
                                id: "20422",
                                name: "雁栖镇",
                                loc: "0,0"
                            }]
                        }, {
                            id: "6544",
                            name: "房山区",
                            d: [{id: "0", name: "全部"}, {id: "1417", name: "房山", loc: "116.1498,39.7535"}, {
                                id: "17861",
                                name: "良乡",
                                loc: "116.1503,39.7403"
                            }]
                        }, {
                            id: "406",
                            name: "昌平区",
                            d: [{id: "0", name: "全部"}, {id: "1397", name: "昌平镇", loc: "116.2531,40.2258"}, {
                                id: "1405",
                                name: "回龙观",
                                loc: "116.3386,40.0824"
                            }, {id: "1429", name: "天通苑", loc: "116.4243,40.082"}, {
                                id: "9201",
                                name: "小汤山",
                                loc: "116.4133,40.1826"
                            }, {id: "11688", name: "南口", loc: "116.1438,40.2498"}, {
                                id: "11689",
                                name: "沙河",
                                loc: "116.2757,40.1469"
                            }, {id: "13855", name: "北七家", loc: "116.4327,40.1225"}, {
                                id: "14546",
                                name: "生命科学园",
                                loc: "116.3001,40.0993"
                            }]
                        }, {
                            id: "307",
                            name: "朝阳区",
                            d: [{id: "0", name: "全部"}, {id: "929", name: "亮马桥", loc: "116.4738,39.9551"}, {
                                id: "930",
                                name: "三元桥",
                                loc: "116.4611,39.9632"
                            }, {id: "1316", name: "安贞", loc: "116.4076,39.9731"}, {
                                id: "1319",
                                name: "酒仙桥",
                                loc: "116.4977,39.9713"
                            }, {id: "1322", name: "东直门", loc: "116.4467,39.9435"}, {
                                id: "1323",
                                name: "朝外大街",
                                loc: "116.4525,39.9288"
                            }, {id: "1333", name: "对外经贸", loc: "116.4339,39.986"}, {
                                id: "1334",
                                name: "左家庄",
                                loc: "116.4535,39.9606"
                            }, {id: "1371", name: "国贸", loc: "116.4652,39.915"}, {
                                id: "1380",
                                name: "劲松",
                                loc: "116.4718,39.8918"
                            }, {id: "1381", name: "潘家园", loc: "116.4616,39.8797"}, {
                                id: "1384",
                                name: "双井",
                                loc: "116.4688,39.9001"
                            }, {id: "1388", name: "望京", loc: "116.4709,40.0032"}, {
                                id: "1392",
                                name: "三里屯",
                                loc: "116.4591,39.9426"
                            }, {id: "1396", name: "亚运村", loc: "116.4191,40.0026"}, {
                                id: "1407",
                                name: "大望路",
                                loc: "116.484,39.9132"
                            }, {id: "1409", name: "十八里店", loc: "116.4857,39.8477"}, {
                                id: "1410",
                                name: "十里堡",
                                loc: "116.5111,39.9257"
                            }, {id: "1411", name: "管庄", loc: "116.5965,39.92"}, {
                                id: "1412",
                                name: "朝阳公园",
                                loc: "116.4891,39.9489"
                            }, {id: "1413", name: "团结湖", loc: "116.4701,39.9376"}, {
                                id: "1415",
                                name: "首都机场",
                                loc: "116.6017,40.0845"
                            }, {id: "1426", name: "建外大街", loc: "116.4512,39.9142"}, {
                                id: "1449",
                                name: "北苑家园",
                                loc: "116.4282,40.0486"
                            }, {id: "5824", name: "蓝色港湾", loc: "116.4818,39.9543"}, {
                                id: "6440",
                                name: "青年路",
                                loc: "116.5236,39.9363"
                            }, {id: "8073", name: "太阳宫", loc: "116.4512,39.9781"}, {
                                id: "8150",
                                name: "永安里",
                                loc: "116.4564,39.9129"
                            }, {id: "8840", name: "鸟巢", loc: "116.4029,39.9998"}, {
                                id: "9194",
                                name: "东坝",
                                loc: "116.5654,39.9736"
                            }, {id: "10238", name: "高碑店", loc: "116.5372,39.9096"}, {
                                id: "11467",
                                name: "百子湾",
                                loc: "116.4935,39.905"
                            }, {id: "11561", name: "八里庄", loc: "116.5013,39.9269"}, {
                                id: "11562",
                                name: "北京东站",
                                loc: "116.4872,39.9067"
                            }, {id: "11563", name: "北京欢乐谷", loc: "116.5024,39.874"}, {
                                id: "11564",
                                name: "北沙滩",
                                loc: "116.3781,40.0098"
                            }, {id: "11565", name: "朝阳大悦城", loc: "116.5252,39.9301"}, {
                                id: "11566",
                                name: "传媒大学",
                                loc: "116.564,39.9186"
                            }, {id: "11567", name: "大屯", loc: "116.4195,40.0094"}, {
                                id: "11568",
                                name: "工体",
                                loc: "116.4537,39.9365"
                            }, {id: "11569", name: "立水桥", loc: "116.4183,40.0593"}, {
                                id: "11570",
                                name: "石佛营",
                                loc: "116.5092,39.9381"
                            }, {id: "11571", name: "四惠", loc: "116.5146,39.9114"}, {
                                id: "11572",
                                name: "双桥",
                                loc: "116.5859,39.9142"
                            }, {id: "11573", name: "甜水园", loc: "116.4891,39.9326"}, {
                                id: "11576",
                                name: "霄云路",
                                loc: "116.4719,39.9654"
                            }, {id: "11577", name: "小营", loc: "116.4299,39.9988"}, {
                                id: "11578",
                                name: "姚家园",
                                loc: "116.5194,39.946"
                            }, {id: "11579", name: "农展馆", loc: "116.47,39.9469"}, {
                                id: "11847",
                                name: "世贸天阶",
                                loc: "116.4578,39.9221"
                            }, {id: "14152", name: "常营", loc: "116.5907,39.9346"}, {
                                id: "17329",
                                name: "慈云寺",
                                loc: "116.5046,39.9239"
                            }, {id: "24600", name: "十里河", loc: "116.4662,39.8715"}, {
                                id: "24601",
                                name: "小红门",
                                loc: "116.4659,39.8336"
                            }, {id: "24691", name: "大鲁店", loc: "116.6059,39.856"}, {
                                id: "24703",
                                name: "西直河",
                                loc: "116.5302,39.8477"
                            }, {id: "24705", name: "豆各庄", loc: "116.5749,39.8631"}, {
                                id: "24706",
                                name: "平乐园",
                                loc: "116.4888,39.8885"
                            }, {id: "24707", name: "九龙山", loc: "116.4873,39.8959"}, {
                                id: "24710",
                                name: "南楼梓庄",
                                loc: "116.5099,39.8843"
                            }, {id: "24714", name: "孙河", loc: "116.5234,40.0344"}, {
                                id: "25999",
                                name: "蓝色港湾高感知",
                                loc: "116.4797,39.9545"
                            }]
                        }, {
                            id: "392",
                            name: "海淀区",
                            d: [{id: "0", name: "全部"}, {id: "1314", name: "魏公村", loc: "116.3281,39.9609"}, {
                                id: "1317",
                                name: "北下关",
                                loc: "116.3446,39.9606"
                            }, {id: "1318", name: "五道口", loc: "116.344,39.9983"}, {
                                id: "1320",
                                name: "双榆树",
                                loc: "116.3325,39.9754"
                            }, {id: "1324", name: "中关村", loc: "116.3277,39.9848"}, {
                                id: "1327",
                                name: "远大路",
                                loc: "116.2862,39.9632"
                            }, {id: "1330", name: "西直门", loc: "116.3597,39.9474"}, {
                                id: "1372",
                                name: "北太平庄",
                                loc: "116.3763,39.9735"
                            }, {id: "1376", name: "公主坟", loc: "116.3169,39.9129"}, {
                                id: "1377",
                                name: "万寿路",
                                loc: "116.3014,39.9229"
                            }, {id: "1382", name: "苏州桥", loc: "116.3149,39.9674"}, {
                                id: "1387",
                                name: "上地",
                                loc: "116.3186,40.0416"
                            }, {id: "1402", name: "航天桥", loc: "116.3161,39.93"}, {
                                id: "1403",
                                name: "五棵松",
                                loc: "116.2841,39.9167"
                            }, {id: "1439", name: "颐和园", loc: "116.2919,40.0005"}, {
                                id: "1440",
                                name: "清河",
                                loc: "116.3526,40.0376"
                            }, {id: "1447", name: "紫竹桥", loc: "116.3163,39.9484"}, {
                                id: "5743",
                                name: "大钟寺",
                                loc: "116.3437,39.9717"
                            }, {id: "8001", name: "万柳", loc: "116.3056,39.9727"}, {
                                id: "8349",
                                name: "香山",
                                loc: "116.2258,39.9891"
                            }, {id: "11835", name: "木樨地", loc: "116.3408,39.9136"}, {
                                id: "14350",
                                name: "圆明园",
                                loc: "116.3162,40.0144"
                            }, {id: "14352", name: "北京大学", loc: "116.3168,39.998"}, {
                                id: "14425",
                                name: "四季青",
                                loc: "116.2733,39.9549"
                            }, {id: "14427", name: "五路居", loc: "116.2697,39.9413"}, {
                                id: "14438",
                                name: "上庄镇",
                                loc: "116.199,40.1028"
                            }, {id: "14439", name: "温泉镇", loc: "116.1893,40.0503"}, {
                                id: "14441",
                                name: "阳坊镇",
                                loc: "0,0"
                            }, {id: "14457", name: "知春路", loc: "116.3478,39.9816"}, {
                                id: "15370",
                                name: "苏州街",
                                loc: "116.3131,39.981"
                            }, {id: "24610", name: "史各庄", loc: "0,0"}]
                        }, {
                            id: "410",
                            name: "石景山区",
                            d: [{id: "0", name: "全部"}, {id: "1434", name: "古城", loc: "116.1949,39.9173"}, {
                                id: "1435",
                                name: "八角",
                                loc: "116.205,39.9189"
                            }, {id: "1436", name: "苹果园", loc: "116.1938,39.9343"}, {
                                id: "1467",
                                name: "鲁谷",
                                loc: "116.2331,39.9056"
                            }, {id: "1536", name: "模式口", loc: "116.1653,39.9393"}]
                        }, {
                            id: "396",
                            name: "西城区",
                            d: [{id: "0", name: "全部"}, {id: "1315", name: "广外大街", loc: "116.3443,39.8954"}, {
                                id: "1326",
                                name: "西单",
                                loc: "116.3773,39.9149"
                            }, {id: "1330", name: "西直门", loc: "116.3597,39.9474"}, {
                                id: "1373",
                                name: "虎坊桥",
                                loc: "116.3902,39.8955"
                            }, {id: "1375", name: "新街口", loc: "116.3769,39.9464"}, {
                                id: "1379",
                                name: "月坛",
                                loc: "116.3547,39.9218"
                            }, {id: "1390", name: "广内大街", loc: "116.3691,39.8951"}, {
                                id: "1395",
                                name: "阜成门",
                                loc: "116.3616,39.9293"
                            }, {id: "1404", name: "地安门", loc: "116.402,39.942"}, {
                                id: "1421",
                                name: "木樨园",
                                loc: "116.4112,39.8641"
                            }, {id: "1424", name: "德外大街", loc: "116.3873,39.9687"}, {
                                id: "1425",
                                name: "右安门",
                                loc: "116.3711,39.8754"
                            }, {id: "1445", name: "复兴门", loc: "116.3598,39.9136"}, {
                                id: "1450",
                                name: "宣武门",
                                loc: "116.3814,39.9029"
                            }, {id: "1455", name: "前门", loc: "116.4047,39.9049"}, {
                                id: "1459",
                                name: "牛街",
                                loc: "116.3701,39.8923"
                            }, {id: "1500", name: "什刹海", loc: "116.3916,39.9403"}, {
                                id: "1505",
                                name: "西四",
                                loc: "116.3792,39.932"
                            }, {id: "1578", name: "菜市口", loc: "116.3809,39.8952"}, {
                                id: "9549",
                                name: "和平门",
                                loc: "116.3905,39.9062"
                            }]
                        }, {
                            id: "408",
                            name: "通州区",
                            d: [{id: "0", name: "全部"}, {id: "1432", name: "新华大街", loc: "116.6641,39.9141"}, {
                                id: "1443",
                                name: "梨园",
                                loc: "116.6707,39.8811"
                            }, {id: "1506", name: "通州区", loc: "116.6632,39.9162"}, {
                                id: "7370",
                                name: "果园",
                                loc: "116.6557,39.8986"
                            }, {id: "8064", name: "九棵树", loc: "116.6649,39.8949"}, {
                                id: "9325",
                                name: "马驹桥",
                                loc: "116.5715,39.7579"
                            }, {id: "11574", name: "通州北苑", loc: "116.6426,39.9099"}, {
                                id: "11575",
                                name: "武夷花园",
                                loc: "116.705,39.9236"
                            }, {id: "20747", name: "次渠", loc: "116.573,39.8041"}, {
                                id: "21366",
                                name: "宋庄商圈",
                                loc: "116.7422,39.9563"
                            }, {id: "21367", name: "西集镇", loc: "116.8861,39.8184"}, {
                                id: "21733",
                                name: "漷县镇",
                                loc: "116.798,39.7842"
                            }, {id: "21887", name: "北关商圈", loc: "116.6685,39.9293"}]
                        }, {
                            id: "5985",
                            name: "门头沟区",
                            d: [{id: "0", name: "全部"}, {id: "1430", name: "门头沟", loc: "116.1077,39.9458"}]
                        }, {
                            id: "6545",
                            name: "顺义区",
                            d: [{id: "0", name: "全部"}, {id: "1398", name: "顺义", loc: "116.6618,40.1357"}, {
                                id: "14391",
                                name: "南法信",
                                loc: "116.6163,40.1338"
                            }, {id: "14392", name: "石门", loc: "116.6473,40.136"}, {
                                id: "14449",
                                name: "后沙峪",
                                loc: "116.564,40.1144"
                            }, {id: "15286", name: "高丽营", loc: "116.5063,40.1639"}, {
                                id: "20712",
                                name: "牛栏山",
                                loc: "116.6629,40.2125"
                            }, {id: "21397", name: "马坡", loc: "116.6644,40.1771"}, {
                                id: "25041",
                                name: "祥云小镇",
                                loc: "116.5437,40.096"
                            }]
                        }]
                    }, {
                        name: "地铁", d: [{id: "0", name: "全线"}, {
                            name: "1号线",
                            id: "70",
                            d: [{id: "0", name: "全部"}, {
                                id: "357847",
                                name: "苹果园站",
                                loc: "116.184297,39.931860"
                            }, {id: "357848", name: "古城站", loc: "116.196975,39.913379"}, {
                                id: "357849",
                                name: "八角游乐园站",
                                loc: "116.219389,39.913070"
                            }, {id: "357850", name: "八宝山站", loc: "116.242276,39.913161"}, {
                                id: "357851",
                                name: "玉泉路站",
                                loc: "116.259474,39.913466"
                            }, {id: "357852", name: "五棵松站", loc: "116.280528,39.913807"}, {
                                id: "357853",
                                name: "万寿路站",
                                loc: "116.301526,39.913718"
                            }, {id: "357854", name: "公主坟站", loc: "116.316752,39.913520"}, {
                                id: "357855",
                                name: "军事博物馆站",
                                loc: "116.331217,39.913216"
                            }, {id: "357856", name: "木樨地站", loc: "116.343486,39.913129"}, {
                                id: "357857",
                                name: "南礼士路站",
                                loc: "116.359211,39.912925"
                            }, {id: "357858", name: "复兴门站", loc: "116.363104,39.912967"}, {
                                id: "357859",
                                name: "西单站",
                                loc: "116.383447,39.913357"
                            }, {id: "357860", name: "天安门西站", loc: "116.398067,39.913758"}, {
                                id: "357861",
                                name: "天安门东站",
                                loc: "116.407910,39.914041"
                            }, {id: "357862", name: "王府井站", loc: "116.417802,39.914409"}, {
                                id: "357863",
                                name: "东单站",
                                loc: "116.426013,39.914499"
                            }, {id: "357864", name: "建国门站", loc: "116.442266,39.914471"}, {
                                id: "357865",
                                name: "永安里站",
                                loc: "116.457072,39.914236"
                            }, {id: "357866", name: "国贸站", loc: "116.466675,39.914149"}, {
                                id: "357867",
                                name: "大望路站",
                                loc: "116.483149,39.914020"
                            }, {id: "357868", name: "四惠站", loc: "116.501920,39.914872"}, {
                                id: "357869",
                                name: "四惠东站",
                                loc: "116.522316,39.914900"
                            }]
                        }, {
                            name: "2号线",
                            id: "73",
                            d: [{id: "0", name: "全部"}, {
                                id: "357870",
                                name: "积水潭站",
                                loc: "116.379374,39.954766"
                            }, {id: "357871", name: "鼓楼大街站", loc: "116.399849,39.955322"}, {
                                id: "357872",
                                name: "安定门站",
                                loc: "116.414589,39.955360"
                            }, {id: "357873", name: "雍和宫站", loc: "116.424122,39.955482"}, {
                                id: "357874",
                                name: "东直门站",
                                loc: "116.440290,39.946904"
                            }, {id: "357875", name: "东四十条站", loc: "116.440634,39.939678"}, {
                                id: "357876",
                                name: "朝阳门站",
                                loc: "116.440984,39.930639"
                            }, {id: "357877", name: "建国门站", loc: "116.442266,39.914471"}, {
                                id: "357878",
                                name: "北京站",
                                loc: "116.433605,39.911097"
                            }, {id: "357879", name: "崇文门站", loc: "116.424063,39.907317"}, {
                                id: "357880",
                                name: "前门站",
                                loc: "116.404274,39.906543"
                            }, {id: "357881", name: "和平门站", loc: "116.390377,39.906334"}, {
                                id: "357882",
                                name: "宣武门站",
                                loc: "116.380798,39.905859"
                            }, {id: "357883", name: "长椿街站", loc: "116.369892,39.905320"}, {
                                id: "357884",
                                name: "复兴门站",
                                loc: "116.363104,39.912967"
                            }, {id: "357885", name: "阜成门站", loc: "116.362831,39.929440"}, {
                                id: "357886",
                                name: "车公庄站",
                                loc: "116.362408,39.938199"
                            }, {id: "357887", name: "西直门站", loc: "116.362178,39.946154"}]
                        }, {
                            name: "14号线",
                            id: "74",
                            d: [{id: "0", name: "全部"}, {
                                id: "358040",
                                name: "张郭庄站",
                                loc: "116.192638,39.863232"
                            }, {id: "358041", name: "园博园站", loc: "116.211080,39.867889"}, {
                                id: "358042",
                                name: "大瓦窑站",
                                loc: "116.246788,39.865300"
                            }, {id: "358043", name: "郭庄子站", loc: "116.260280,39.871115"}, {
                                id: "358044",
                                name: "大井站",
                                loc: "116.281920,39.871710"
                            }, {id: "358045", name: "西局站", loc: "116.310055,39.872624"}, {
                                id: "359281",
                                name: "善各庄站",
                                loc: "116.484762,40.033090"
                            }, {id: "359282", name: "来广营站", loc: "116.473489,40.026145"}, {
                                id: "359283",
                                name: "东湖渠站",
                                loc: "116.474032,40.016228"
                            }, {id: "359284", name: "望京站", loc: "116.476450,40.003973"}, {
                                id: "359285",
                                name: "阜通站",
                                loc: "116.477642,39.997887"
                            }, {id: "359286", name: "望京南站", loc: "116.488454,39.990534"}, {
                                id: "359287",
                                name: "将台站",
                                loc: "116.496253,39.976960"
                            }, {id: "359288", name: "东风北桥站", loc: "116.492579,39.964500"}, {
                                id: "359289",
                                name: "枣营站",
                                loc: "116.481308,39.950176"
                            }, {id: "359290", name: "金台路站", loc: "116.485121,39.928730"}]
                        }, {
                            name: "亦庄线",
                            id: "75",
                            d: [{id: "0", name: "全部"}, {
                                id: "358101",
                                name: "宋家庄站",
                                loc: "116.434912,39.851861"
                            }, {id: "358102", name: "肖村站", loc: "116.455078,39.840387"}, {
                                id: "358103",
                                name: "小红门站",
                                loc: "116.465785,39.834598"
                            }, {id: "358104", name: "旧宫站", loc: "116.467762,39.812792"}, {
                                id: "358105",
                                name: "亦庄桥站",
                                loc: "116.487237,39.809162"
                            }, {id: "358106", name: "亦庄文化园站", loc: "116.497109,39.812830"}, {
                                id: "358107",
                                name: "万源街站",
                                loc: "116.512138,39.809439"
                            }, {id: "358108", name: "荣京东街站", loc: "116.519926,39.799804"}, {
                                id: "358109",
                                name: "荣昌东街站",
                                loc: "116.528254,39.789631"
                            }, {id: "358110", name: "同济南路站", loc: "116.546525,39.779224"}, {
                                id: "358111",
                                name: "经海路站",
                                loc: "116.569127,39.789759"
                            }, {id: "358112", name: "次渠南站", loc: "116.587991,39.800764"}, {
                                id: "358113",
                                name: "次渠站",
                                loc: "116.598088,39.809494"
                            }]
                        }, {
                            name: "八通线",
                            id: "76",
                            d: [{id: "0", name: "全部"}, {
                                id: "358058",
                                name: "四惠站",
                                loc: "116.501996,39.915028"
                            }, {id: "358059", name: "四惠东站", loc: "116.522298,39.915014"}, {
                                id: "358060",
                                name: "高碑店站",
                                loc: "116.538306,39.915872"
                            }, {id: "358061", name: "传媒大学站", loc: "116.561482,39.915277"}, {
                                id: "358062",
                                name: "双桥站",
                                loc: "116.583347,39.916107"
                            }, {id: "358063", name: "管庄站", loc: "116.605881,39.915076"}, {
                                id: "358064",
                                name: "八里桥站",
                                loc: "116.625347,39.912039"
                            }, {id: "358065", name: "通州北苑站", loc: "116.643672,39.910178"}, {
                                id: "358066",
                                name: "果园站",
                                loc: "116.652997,39.899614"
                            }, {id: "358067", name: "九棵树站", loc: "116.663884,39.896521"}, {
                                id: "358068",
                                name: "梨园站",
                                loc: "116.675392,39.889746"
                            }, {id: "358069", name: "临河里站", loc: "116.685524,39.881303"}, {
                                id: "358070",
                                name: "土桥站",
                                loc: "116.693079,39.877842"
                            }]
                        }, {
                            name: "大兴线",
                            id: "77",
                            d: [{id: "0", name: "全部"}, {
                                id: "358078",
                                name: "公益西桥站",
                                loc: "116.377332,39.842444"
                            }, {id: "358079", name: "新宫站", loc: "116.371669,39.819896"}, {
                                id: "358080",
                                name: "西红门站",
                                loc: "116.335369,39.795802"
                            }, {id: "358081", name: "高米店北站", loc: "116.337446,39.779818"}, {
                                id: "358082",
                                name: "高米店南站",
                                loc: "116.338410,39.769052"
                            }, {id: "358083", name: "枣园站", loc: "116.338969,39.759076"}, {
                                id: "358084",
                                name: "清源路站",
                                loc: "116.339108,39.748427"
                            }, {id: "358085", name: "黄村西大街站", loc: "116.339264,39.737421"}, {
                                id: "358086",
                                name: "黄村火车站",
                                loc: "116.339439,39.728509"
                            }, {id: "358087", name: "义和庄站", loc: "116.325605,39.718395"}, {
                                id: "358088",
                                name: "生物医药基地站",
                                loc: "116.328390,39.692749"
                            }, {id: "358089", name: "天宫院站", loc: "116.326485,39.676285"}]
                        }, {
                            name: "房山线",
                            id: "78",
                            d: [{id: "0", name: "全部"}, {
                                id: "358090",
                                name: "苏庄站",
                                loc: "116.131867,39.729300"
                            }, {id: "358091", name: "良乡南关站", loc: "116.147291,39.729633"}, {
                                id: "358092",
                                name: "良乡大学城西站",
                                loc: "116.162688,39.729813"
                            }, {id: "358093", name: "良乡大学城站", loc: "116.182927,39.729800"}, {
                                id: "358094",
                                name: "良乡大学城北站",
                                loc: "116.189898,39.736625"
                            }, {id: "358095", name: "广阳城站", loc: "116.191407,39.754239"}, {
                                id: "358096",
                                name: "篱笆房站",
                                loc: "116.195934,39.767218"
                            }, {id: "358097", name: "长阳站", loc: "116.219326,39.769825"}, {
                                id: "358098",
                                name: "稻田站",
                                loc: "116.225309,39.801457"
                            }, {id: "358099", name: "大葆台站", loc: "116.298198,39.814344"}, {
                                id: "358100",
                                name: "郭公庄站",
                                loc: "116.308654,39.820966"
                            }]
                        }, {
                            name: "6号线",
                            id: "79",
                            d: [{id: "0", name: "全部"}, {
                                id: "357935",
                                name: "海淀五路居站",
                                loc: "116.282729,39.939456"
                            }, {id: "357936", name: "慈寿寺站", loc: "116.300075,39.939277"}, {
                                id: "357937",
                                name: "花园桥站",
                                loc: "116.317484,39.938544"
                            }, {id: "357938", name: "白石桥南站", loc: "116.331803,39.938267"}, {
                                id: "357939",
                                name: "车公庄西站",
                                loc: "116.350757,39.938253"
                            }, {id: "357940", name: "车公庄站", loc: "116.361357,39.938378"}, {
                                id: "357941",
                                name: "平安里站",
                                loc: "116.378996,39.938666"
                            }, {id: "357942", name: "北海北站", loc: "116.392937,39.939546"}, {
                                id: "357943",
                                name: "南锣鼓巷站",
                                loc: "116.410490,39.940023"
                            }, {id: "357944", name: "东四站", loc: "116.423958,39.930531"}, {
                                id: "357945",
                                name: "朝阳门站",
                                loc: "116.441158,39.930508"
                            }, {id: "357946", name: "东大桥站", loc: "116.458217,39.928668"}, {
                                id: "357947",
                                name: "呼家楼站",
                                loc: "116.468278,39.929062"
                            }, {id: "357948", name: "金台路站", loc: "116.485121,39.928730"}, {
                                id: "357949",
                                name: "十里堡站",
                                loc: "116.508504,39.929318"
                            }, {id: "357950", name: "青年路站", loc: "116.523811,39.929498"}, {
                                id: "357951",
                                name: "褡裢坡站",
                                loc: "116.570281,39.929837"
                            }, {id: "357952", name: "黄渠站", loc: "116.584995,39.929982"}, {
                                id: "357953",
                                name: "常营站",
                                loc: "116.605482,39.931740"
                            }, {id: "357954", name: "草房站", loc: "116.622589,39.930674"}]
                        }, {
                            name: "9号线",
                            id: "80",
                            d: [{id: "0", name: "全部"}, {
                                id: "357967",
                                name: "郭公庄站",
                                loc: "116.308627,39.820883"
                            }, {id: "357968", name: "丰台科技园站", loc: "116.304238,39.831479"}, {
                                id: "357969",
                                name: "科怡路站",
                                loc: "116.303964,39.838757"
                            }, {id: "357970", name: "丰台南路站", loc: "116.302481,39.846956"}, {
                                id: "357971",
                                name: "丰台东大街站",
                                loc: "116.300253,39.860970"
                            }, {id: "357972", name: "七里庄站", loc: "116.300776,39.873215"}, {
                                id: "357973",
                                name: "六里桥站",
                                loc: "116.309741,39.886674"
                            }, {id: "357974", name: "六里桥东站", loc: "116.321527,39.892929"}, {
                                id: "357975",
                                name: "北京西站",
                                loc: "116.327923,39.900887"
                            }, {id: "357976", name: "白堆子站", loc: "116.332357,39.929233"}, {
                                id: "357977",
                                name: "白石桥南站",
                                loc: "116.332163,39.938408"
                            }, {id: "357978", name: "国家图书馆站", loc: "116.331938,39.949524"}]
                        }, {
                            name: "5号线",
                            id: "81",
                            d: [{id: "0", name: "全部"}, {
                                id: "357912",
                                name: "天通苑北站",
                                loc: "116.419846,40.090369"
                            }, {id: "357913", name: "天通苑站", loc: "116.419558,40.081489"}, {
                                id: "357914",
                                name: "天通苑南站",
                                loc: "116.419388,40.073132"
                            }, {id: "357915", name: "立水桥站", loc: "116.419543,40.059195"}, {
                                id: "357916",
                                name: "立水桥南站",
                                loc: "116.421059,40.048268"
                            }, {id: "357917", name: "北苑路北站", loc: "116.424508,40.036862"}, {
                                id: "357918",
                                name: "大屯路东站",
                                loc: "116.423816,40.009928"
                            }, {id: "357919", name: "惠新西街北口站", loc: "116.423663,39.993785"}, {
                                id: "357920",
                                name: "惠新西街南口站",
                                loc: "116.424046,39.983291"
                            }, {id: "357921", name: "和平西桥站", loc: "116.424465,39.974024"}, {
                                id: "357922",
                                name: "和平里北街站",
                                loc: "116.425056,39.964754"
                            }, {id: "357923", name: "雍和宫站", loc: "116.423008,39.954668"}, {
                                id: "357924",
                                name: "北新桥站",
                                loc: "116.423242,39.947188"
                            }, {id: "357925", name: "张自忠路站", loc: "116.423504,39.939884"}, {
                                id: "357926",
                                name: "东四站",
                                loc: "116.423877,39.930682"
                            }, {id: "357927", name: "灯市口站", loc: "116.424156,39.923470"}, {
                                id: "357928",
                                name: "东单站",
                                loc: "116.424554,39.914542"
                            }, {id: "357929", name: "崇文门站", loc: "116.425007,39.906532"}, {
                                id: "357930",
                                name: "磁器口站",
                                loc: "116.425271,39.899280"
                            }, {id: "357931", name: "天坛东门站", loc: "116.427298,39.888913"}, {
                                id: "357932",
                                name: "蒲黄榆站",
                                loc: "116.427973,39.871711"
                            }, {id: "357933", name: "刘家窑站", loc: "116.428160,39.863479"}, {
                                id: "357934",
                                name: "宋家庄站",
                                loc: "116.434912,39.851861"
                            }]
                        }, {
                            name: "4号线",
                            id: "82",
                            d: [{id: "0", name: "全部"}, {
                                id: "357888",
                                name: "安河桥北站",
                                loc: "116.276562,40.019218"
                            }, {id: "357889", name: "北宫门站", loc: "116.284031,40.008862"}, {
                                id: "357890",
                                name: "西苑站",
                                loc: "116.296728,40.004867"
                            }, {id: "357891", name: "圆明园站", loc: "116.315831,40.005615"}, {
                                id: "357892",
                                name: "北京大学东门站",
                                loc: "116.322263,39.998168"
                            }, {id: "357893", name: "中关村站", loc: "116.323072,39.990125"}, {
                                id: "357894",
                                name: "海淀黄庄站",
                                loc: "116.324347,39.981971"
                            }, {id: "357895", name: "人民大学站", loc: "116.328066,39.972931"}, {
                                id: "357896",
                                name: "魏公村站",
                                loc: "116.329899,39.963669"
                            }, {id: "357897", name: "国家图书馆站", loc: "116.332001,39.949095"}, {
                                id: "357898",
                                name: "动物园站",
                                loc: "116.344775,39.944075"
                            }, {id: "357899", name: "西直门站", loc: "116.362220,39.946177"}, {
                                id: "357900",
                                name: "新街口站",
                                loc: "116.374167,39.946758"
                            }, {id: "357901", name: "平安里站", loc: "116.379298,39.939772"}, {
                                id: "357902",
                                name: "西四站",
                                loc: "116.379898,39.930134"
                            }, {id: "357903", name: "灵境胡同站", loc: "116.380222,39.922291"}, {
                                id: "357904",
                                name: "西单站",
                                loc: "116.381030,39.913478"
                            }, {id: "357905", name: "宣武门站", loc: "116.380774,39.905854"}, {
                                id: "357906",
                                name: "菜市口站",
                                loc: "116.381066,39.895656"
                            }, {id: "357907", name: "陶然亭站", loc: "116.380940,39.884888"}, {
                                id: "357908",
                                name: "北京南站",
                                loc: "116.384893,39.871558"
                            }, {id: "357909", name: "马家堡站", loc: "116.377940,39.859291"}, {
                                id: "357910",
                                name: "角门西站",
                                loc: "116.377689,39.852215"
                            }, {id: "357911", name: "公益西桥站", loc: "116.377332,39.842444"}]
                        }, {
                            name: "8号线",
                            id: "83",
                            d: [{id: "0", name: "全部"}, {
                                id: "357955",
                                name: "鼓楼大街站",
                                loc: "116.400083,39.955885"
                            }, {id: "357956", name: "安华桥站", loc: "116.400924,39.974800"}, {
                                id: "357957",
                                name: "北土城站",
                                loc: "116.400619,39.983223"
                            }, {id: "357958", name: "奥体中心站", loc: "116.400155,39.993152"}, {
                                id: "357959",
                                name: "奥林匹克公园站",
                                loc: "116.399293,40.007164"
                            }, {id: "357960", name: "森林公园南门站", loc: "116.398987,40.016032"}, {
                                id: "357961",
                                name: "林萃桥站",
                                loc: "116.379027,40.028465"
                            }, {id: "357962", name: "永泰庄站", loc: "116.361636,40.044485"}, {
                                id: "357963",
                                name: "西小口站",
                                loc: "116.358199,40.052913"
                            }, {id: "357964", name: "育新站", loc: "116.353900,40.066106"}, {
                                id: "357965",
                                name: "霍营站",
                                loc: "116.366453,40.078067"
                            }, {id: "357966", name: "回龙观东大街站", loc: "116.369908,40.087075"}]
                        }, {
                            name: "13号线",
                            id: "84",
                            d: [{id: "0", name: "全部"}, {
                                id: "358024",
                                name: "西直门站",
                                loc: "116.360097,39.947250"
                            }, {id: "358025", name: "大钟寺站", loc: "116.351725,39.971884"}, {
                                id: "358026",
                                name: "知春路站",
                                loc: "116.347335,39.982814"
                            }, {id: "358027", name: "五道口站", loc: "116.344435,39.998564"}, {
                                id: "358028",
                                name: "上地站",
                                loc: "116.326997,40.039292"
                            }, {id: "358029", name: "西二旗站", loc: "116.312936,40.058715"}, {
                                id: "358030",
                                name: "龙泽站",
                                loc: "116.325991,40.077783"
                            }, {id: "358031", name: "回龙观站", loc: "116.342304,40.077562"}, {
                                id: "358032",
                                name: "霍营站",
                                loc: "116.368327,40.076435"
                            }, {id: "358033", name: "立水桥站", loc: "116.418232,40.058853"}, {
                                id: "358034",
                                name: "北苑站",
                                loc: "116.441126,40.048853"
                            }, {id: "358035", name: "望京西站", loc: "116.455132,40.001056"}, {
                                id: "358036",
                                name: "芍药居站",
                                loc: "116.444136,39.984141"
                            }, {id: "358037", name: "光熙门站", loc: "116.438824,39.974318"}, {
                                id: "358038",
                                name: "柳芳站",
                                loc: "116.439614,39.963995"
                            }, {id: "358039", name: "东直门站", loc: "116.441506,39.949148"}]
                        }, {
                            name: "昌平线",
                            id: "85",
                            d: [{id: "0", name: "全部"}, {
                                id: "358071",
                                name: "西二旗站",
                                loc: "116.312936,40.058715"
                            }, {id: "358072", name: "生命科学园站", loc: "116.300861,40.100603"}, {
                                id: "358073",
                                name: "朱辛庄站",
                                loc: "116.320026,40.110955"
                            }, {id: "358074", name: "巩华城站", loc: "116.300839,40.137602"}, {
                                id: "358075",
                                name: "沙河站",
                                loc: "116.294730,40.155527"
                            }, {id: "358076", name: "沙河高教园站", loc: "116.286753,40.171958"}, {
                                id: "358077",
                                name: "南邵站",
                                loc: "116.294874,40.213458"
                            }]
                        }, {
                            name: "15号线",
                            id: "86",
                            d: [{id: "0", name: "全部"}, {
                                id: "358046",
                                name: "望京西站",
                                loc: "116.457295,40.001857"
                            }, {id: "358047", name: "望京站", loc: "116.476450,40.003973"}, {
                                id: "358048",
                                name: "崔各庄站",
                                loc: "116.499710,40.028395"
                            }, {id: "358049", name: "马泉营站", loc: "116.510146,40.039592"}, {
                                id: "358050",
                                name: "孙河站",
                                loc: "116.541441,40.052051"
                            }, {id: "358051", name: "国展站", loc: "116.561994,40.076734"}, {
                                id: "358052",
                                name: "花梨坎站",
                                loc: "116.563719,40.090645"
                            }, {id: "358053", name: "后沙峪站", loc: "116.570977,40.120390"}, {
                                id: "358054",
                                name: "南法信站",
                                loc: "116.616349,40.134411"
                            }, {id: "358055", name: "石门站", loc: "116.647609,40.136251"}, {
                                id: "358056",
                                name: "顺义站",
                                loc: "116.663822,40.136122"
                            }, {id: "358057", name: "俸伯站", loc: "116.691498,40.138299"}, {
                                id: "359275",
                                name: "关庄站",
                                loc: "116.437889,40.007136"
                            }, {id: "359276", name: "安立路站", loc: "116.414285,40.008946"}, {
                                id: "359277",
                                name: "奥林匹克公园站",
                                loc: "116.398711,40.007852"
                            }, {id: "359278", name: "北沙滩站", loc: "116.375561,40.007538"}, {
                                id: "359279",
                                name: "六道口站",
                                loc: "116.359309,40.006718"
                            }, {id: "359280", name: "清华东路西口站", loc: "116.345527,40.006300"}]
                        }, {
                            name: "7号线",
                            id: "87",
                            d: [{id: "0", name: "全部"}, {
                                id: "359291",
                                name: "北京西站",
                                loc: "116.327923,39.900887"
                            }, {id: "359292", name: "湾子站", loc: "116.334400,39.895902"}, {
                                id: "359293",
                                name: "达官营站",
                                loc: "116.342069,39.895671"
                            }, {id: "359294", name: "广安门内站", loc: "116.364626,39.895430"}, {
                                id: "359295",
                                name: "菜市口站",
                                loc: "116.381066,39.895656"
                            }, {id: "359296", name: "虎坊桥站", loc: "116.390654,39.895691"}, {
                                id: "359297",
                                name: "珠市口站",
                                loc: "116.403322,39.897569"
                            }, {id: "359298", name: "桥湾站", loc: "116.414901,39.899001"}, {
                                id: "359299",
                                name: "磁器口站",
                                loc: "116.425271,39.899280"
                            }, {id: "359300", name: "广渠门内站", loc: "116.440943,39.899616"}, {
                                id: "359301",
                                name: "广渠门外站",
                                loc: "116.455911,39.899309"
                            }, {id: "359302", name: "九龙山站", loc: "116.485339,39.899021"}, {
                                id: "359303",
                                name: "大郊亭站",
                                loc: "116.494711,39.899072"
                            }, {id: "359304", name: "百子湾站", loc: "116.503820,39.898935"}, {
                                id: "359305",
                                name: "化工站",
                                loc: "116.510091,39.893222"
                            }, {id: "359306", name: "南楼梓庄站", loc: "116.507717,39.880397"}, {
                                id: "359307",
                                name: "欢乐谷景区站",
                                loc: "116.505927,39.872916"
                            }, {id: "359308", name: "双合站", loc: "116.532712,39.866652"}, {
                                id: "359309",
                                name: "焦化厂站",
                                loc: "116.544703,39.861152"
                            }]
                        }, {
                            name: "10号线",
                            id: "88",
                            d: [{id: "0", name: "全部"}, {
                                id: "357979",
                                name: "车道沟站",
                                loc: "116.300259,39.954850"
                            }, {id: "357980", name: "长春桥站", loc: "116.300485,39.964615"}, {
                                id: "357981",
                                name: "火器营站",
                                loc: "116.295977,39.972025"
                            }, {id: "357982", name: "巴沟站", loc: "116.300558,39.980329"}, {
                                id: "357983",
                                name: "苏州街站",
                                loc: "116.312776,39.981702"
                            }, {id: "357984", name: "海淀黄庄站", loc: "116.324157,39.981779"}, {
                                id: "357985",
                                name: "知春里站",
                                loc: "116.335693,39.982648"
                            }, {id: "357986", name: "知春路站", loc: "116.348412,39.982036"}, {
                                id: "357987",
                                name: "西土城站",
                                loc: "116.360989,39.982703"
                            }, {id: "357988", name: "牡丹园站", loc: "116.376368,39.983367"}, {
                                id: "357989",
                                name: "健德门站",
                                loc: "116.387835,39.982983"
                            }, {id: "357990", name: "北土城站", loc: "116.400619,39.983223"}, {
                                id: "357991",
                                name: "安贞门站",
                                loc: "116.412947,39.983864"
                            }, {id: "357992", name: "惠新西街南口站", loc: "116.424014,39.983195"}, {
                                id: "357993",
                                name: "芍药居站",
                                loc: "116.443788,39.982813"
                            }, {id: "357994", name: "太阳宫站", loc: "116.454361,39.978612"}, {
                                id: "357995",
                                name: "三元桥站",
                                loc: "116.463791,39.967609"
                            }, {id: "357996", name: "亮马桥站", loc: "116.468534,39.955028"}, {
                                id: "357997",
                                name: "农业展览馆站",
                                loc: "116.468795,39.946980"
                            }, {id: "357998", name: "团结湖站", loc: "116.468451,39.939386"}, {
                                id: "357999",
                                name: "呼家楼站",
                                loc: "116.468381,39.929248"
                            }, {id: "358000", name: "金台夕照站", loc: "116.468351,39.922731"}, {
                                id: "358001",
                                name: "国贸站",
                                loc: "116.468305,39.914489"
                            }, {id: "358002", name: "双井站", loc: "116.468103,39.899140"}, {
                                id: "358003",
                                name: "劲松站",
                                loc: "116.467954,39.889953"
                            }, {id: "358004", name: "潘家园站", loc: "116.467556,39.881849"}, {
                                id: "358005",
                                name: "十里河站",
                                loc: "116.465785,39.871582"
                            }, {id: "358006", name: "分钟寺站", loc: "116.460329,39.857704"}, {
                                id: "358007",
                                name: "成寿寺站",
                                loc: "116.453577,39.851554"
                            }, {id: "358008", name: "宋家庄站", loc: "116.434912,39.851861"}, {
                                id: "358009",
                                name: "石榴庄站",
                                loc: "116.420623,39.852128"
                            }, {id: "358010", name: "大红门站", loc: "116.404555,39.851675"}, {
                                id: "358011",
                                name: "角门东站",
                                loc: "116.392794,39.851611"
                            }, {id: "358012", name: "角门西站", loc: "116.377657,39.851927"}, {
                                id: "358013",
                                name: "草桥站",
                                loc: "116.359251,39.851581"
                            }, {id: "358014", name: "纪家庙站", loc: "116.338848,39.850257"}, {
                                id: "358015",
                                name: "首经贸站",
                                loc: "116.326022,39.850323"
                            }, {id: "358016", name: "丰台站", loc: "116.311726,39.856923"}, {
                                id: "358017",
                                name: "泥洼站",
                                loc: "116.311649,39.864129"
                            }, {id: "358018", name: "西局站", loc: "116.310753,39.871364"}, {
                                id: "358019",
                                name: "六里桥站",
                                loc: "116.309894,39.886494"
                            }, {id: "358020", name: "莲花桥站", loc: "116.317152,39.904485"}, {
                                id: "358021",
                                name: "公主坟站",
                                loc: "116.316890,39.913102"
                            }, {id: "358022", name: "西钓鱼台站", loc: "116.304036,39.929244"}, {
                                id: "358023",
                                name: "慈寿寺站",
                                loc: "116.302291,39.938960"
                            }]
                        }]
                    }]
                },
                sort: {
                    d: [{id: "0", name: "综合榜"}, {id: "4", name: "热销榜"}, {id: "8", name: "好评榜"}, {
                        id: "6",
                        name: "新品榜"
                    }, {id: "5", name: "离我最近", need_loc: "1"}, {id: "9", name: "人均最低"}, {id: "10", name: "人均最高"}]
                },
                nearby: {
                    name: "附近",
                    id: "1",
                    d: [{id: "0", name: "全城", need_loc: "1"}, {id: "500", name: "500m", need_loc: "1"}, {
                        id: "1000",
                        name: "1km",
                        need_loc: "1"
                    }, {id: "3000", name: "3km", need_loc: "1"}, {id: "5000", name: "5km", need_loc: "1"}]
                },
                advance_radio: [{
                    name: "价格",
                    key: "priceRange",
                    d: [{id: "0", name: "不限"}, {id: "102_1", name: "50以下"}, {id: "102_2", name: "50-100"}, {
                        id: "102_3",
                        name: "100-200"
                    }, {id: "102_4", name: "200-300"}, {id: "102_5", name: "300以上"}]
                }, {
                    name: "套餐内容",
                    key: "labelid",
                    d: [{id: "0", name: "不限"}, {id: "100_1", name: "单人餐"}, {id: "100_2", name: "双人餐"}, {
                        id: "100_3",
                        name: "3-4人餐"
                    }, {id: "100_4", name: "5-10人餐"}, {id: "100_5", name: "其它"}, {
                        id: "107_0",
                        name: "代金卷"
                    }, {id: "111_0", name: "储值卡"}]
                }],
                advance_check: [{name: "免预约", key: "appointment", id: "106_1"}, {
                    name: "精选品牌",
                    key: "is_t10",
                    id: "110_1"
                }, {name: "外卖", key: "poi_tags", id: "203_0"}, {
                    name: "可预订",
                    key: "poi_tags",
                    id: "283_10094"
                }, {name: "在线排号", key: "poi_tags", id: "204_0"}, {
                    name: "在线点菜",
                    key: "poi_tags",
                    id: "216_0"
                }, {name: "聚优惠", key: "poi_tags", id: "poi_tags"}, {name: "优惠促销", key: "poi_tags", id: "2145_1"}]
            },
            hotword: {
                hotword_list: ["火锅", "好伦哥", "虾吃虾涮", "海鲜自助", "烤鱼", "麻辣烫", "生日蛋糕", "肯德基", "烤鸭"],
                searchWord: "玫瑰花园",
                hotword_num: 9,
                recomwd_id: "bd1472969f8e1bd1723dd5cd45e0a1c2",
                errno: 0
            }
        }, defaultData: {
            na: [{
                id: "200011452",
                img: "http://a.hiphotos.baidu.com/nuomi/pic/item/f7246b600c338744bbc0ead25b0fd9f9d72aa013.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=392",
                adv_status: "0",
                advName: "自助餐"
            }, {
                id: "200011454",
                img: "http://h.hiphotos.baidu.com/nuomi/pic/item/09fa513d269759eeba32f773b8fb43166d22df2c.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=460",
                adv_status: "0",
                advName: "烧烤"
            }, {
                id: "200011455",
                img: "http://d.hiphotos.baidu.com/nuomi/pic/item/3c6d55fbb2fb4316e6a1edc22aa4462308f7d3c8.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=380",
                adv_status: "0",
                advName: "小吃快餐"
            }, {
                id: "200011456",
                img: "http://e.hiphotos.baidu.com/nuomi/pic/item/bd3eb13533fa828ba2e50a5bf71f4134960a5a47.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=391",
                adv_status: "0",
                advName: "西餐"
            }, {
                id: "200011457",
                img: "http://d.hiphotos.baidu.com/nuomi/pic/item/9f510fb30f2442a7f2817b00db43ad4bd0130283.jpg",
                cont: "bainuo://component?compid=waimai&comppage=shoplist&ios_cid=100005952&android_cid=100005958",
                adv_status: "0",
                advName: "外卖"
            }, {
                id: "200011458",
                img: "http://c.hiphotos.baidu.com/nuomi/pic/item/9345d688d43f8794b6f1c98bd81b0ef41bd53a0c.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=364",
                adv_status: "0",
                advName: "火锅"
            }, {
                id: "200011459",
                img: "http://g.hiphotos.baidu.com/nuomi/pic/item/a5c27d1ed21b0ef43de809e6d7c451da81cb3e01.jpg",
                cont: "bainuo://categorylist?category=393",
                adv_status: "0",
                advName: "川湘菜"
            }, {
                id: "200011611",
                img: "http://b.hiphotos.baidu.com/nuomi/pic/item/09fa513d269759ee64ed8576b8fb43166c22dfca.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=439",
                adv_status: "0",
                advName: "海鲜"
            }, {
                id: "200011707",
                img: "http://c.hiphotos.baidu.com/nuomi/pic/item/242dd42a2834349b9194e320c3ea15ce37d3be81.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=880",
                adv_status: "0",
                advName: "甜点饮品"
            }, {
                id: "200011700",
                img: "http://e.hiphotos.baidu.com/nuomi/pic/item/e7cd7b899e510fb32bfafa32d333c895d0430cb7.jpg",
                cont: "bainuo://component?compid=catg&comppage=portal&category=962",
                adv_status: "0",
                advName: "中餐"
            }],
            wap: [{
                id: "200011467",
                img: "http://f.hiphotos.baidu.com/nuomi/pic/item/d043ad4bd11373f077d0b531ae0f4bfbfaed04b5.jpg",
                cont: "https://m.nuomi.com/392/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "自助餐"
            }, {
                id: "200011468",
                img: "http://f.hiphotos.baidu.com/nuomi/pic/item/9922720e0cf3d7ca7e8338caf81fbe096b63a910.jpg",
                cont: "https://m.nuomi.com/460/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "烤肉"
            }, {
                id: "200011469",
                img: "http://e.hiphotos.baidu.com/nuomi/pic/item/9345d688d43f879430a64f92d81b0ef41bd53a34.jpg",
                cont: "https://m.nuomi.com/380/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "小吃快餐"
            }, {
                id: "200011470",
                img: "http://g.hiphotos.baidu.com/nuomi/pic/item/a1ec08fa513d2697af790fe15ffbb2fb4216d8e0.jpg",
                cont: "https://m.nuomi.com/391/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "西餐"
            }, {
                id: "200011471",
                img: "http://b.hiphotos.baidu.com/nuomi/pic/item/dcc451da81cb39db575bbdf8da160924aa183081.jpg",
                cont: "https://waimai.baidu.com/fly/h5/advancedTemplate?game_id=19212",
                adv_status: "0",
                advName: "外卖"
            }, {
                id: "200011472",
                img: "http://f.hiphotos.baidu.com/nuomi/pic/item/d31b0ef41bd5ad6e004cbe448bcb39dbb7fd3ce3.jpg",
                cont: "https://m.nuomi.com/364/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "火锅"
            }, {
                id: "200011473",
                img: "http://c.hiphotos.baidu.com/nuomi/pic/item/eac4b74543a982260de32d9b8082b9014a90eb68.jpg",
                cont: "https://m.nuomi.com/393/0-0/0-0-0-0-0-0/0-0/0",
                adv_status: "0",
                advName: "川湘菜"
            }, {
                id: "200011612",
                img: "http://h.hiphotos.baidu.com/nuomi/pic/item/8cb1cb13495409231a2486c39858d109b3de493a.jpg",
                cont: "https://m.nuomi.com/439/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "海鲜"
            }, {
                id: "200011709",
                img: "http://b.hiphotos.baidu.com/nuomi/pic/item/574e9258d109b3de25a432cdc6bf6c81800a4c78.jpg",
                cont: "https://m.nuomi.com/2049/0-0/0-0-0-0-0",
                adv_status: "0",
                advName: "甜点饮品"
            }, {
                id: "200011710",
                img: "http://f.hiphotos.baidu.com/nuomi/pic/item/342ac65c103853438eec51849913b07eca808870.jpg",
                cont: "https://m.nuomi.com/962/0-0/0-0-0-0-0-0/0-0/0",
                adv_status: "0",
                advName: "中餐"
            }]
        }, cityList: {}
    }
}, , function (e, t, n) {
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = function (e) {
        return Object.prototype.toString.call(e)
    }, r = function (e) {
        return "[object Array]" === o(e)
    }, a = function (e) {
        return function (e) {
            return "[object Object]" == o(e)
        }(e) && Object.getPrototypeOf(e) == Object.prototype
    };
    e.exports = {
        addLog: function (e, t) {
            if (!e) return console.error("请确认包含logKey");
            var n = {};
            if (function e(t, n, i) {
                for (var o in n) i && (a(n[o]) || r(n[o])) ? (a(n[o]) && !a(t[o]) && (t[o] = {}), r(n[o]) && !r(t[o]) && (t[o] = []), e(t[o], n[o], i)) : void 0 !== n[o] && (t[o] = n[o])
            }(n, e, 1), n.note && "[object Object]" === Object.prototype.toString.call(n.note.ComExtraParams)) {
                if ("[object Object]" !== Object.prototype.toString.call(t)) return console.log("params不能为空");
                for (var i in n.note.ComExtraParams) if (i && n.note.ComExtraParams.hasOwnProperty(i) && n.note.ComExtraParams[i] && n.note.ComExtraParams[i].match(/\$\{\w+\}/)) {
                    if (void 0 === t[i]) return console.log("params缺少参数" + i);
                    n.note.ComExtraParams[i] = n.note.ComExtraParams[i].replace(/\$\{\w+\}/g, t[i])
                }
                n.note.ComExtraParams = JSON.stringify(n.note.ComExtraParams)
            }
            BNJS.statistic.addLog(n)
        }, addException: function (e, t, n) {
            if ("object" !== (void 0 === e ? "undefined" : i(e))) return console.error("参数错误");
            t = t || "";
            var o = e.pageName, r = e.msg && e.msg.replace(/\$msg\$/g, t);
            if (!o || !r) return console.error("请确认包含pageName和msg参数");
            BNJS.statistic.addLog({
                actionID: "CompPageError",
                actionExt: n || "channel",
                note: {compv: "1.0.0", comppage: o, detail: r}
            })
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = "https://chi.nuomi.com";
    i = window.location.search.match("need_proxy=1") ? "" : "https://chi.nuomi.com";
    var o = {};
    for (var r in o) r && o.hasOwnProperty(r) && (o[r] = i + o[r]);
    o.host = i, e.exports = o
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function (e) {
        var t = (e ? e.ownerDocument || e : document).defaultView || window;
        return !(!e || !("function" == typeof t.Node ? e instanceof t.Node : "object" === (void 0 === e ? "undefined" : i(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
}, function (e, t, n) {
    "use strict";
    var i = n(233);
    e.exports = function (e) {
        return i(e) && 3 == e.nodeType
    }
}, function (e, t, n) {
    "use strict";
    var i = n(234);
    e.exports = function e(t, n) {
        return !(!t || !n) && (t === n || !i(t) && (i(n) ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
    }
}, function (e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = Object.prototype.hasOwnProperty;

    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }

    e.exports = function (e, t) {
        if (r(e, t)) return !0;
        if ("object" !== (void 0 === e ? "undefined" : i(e)) || null === e || "object" !== (void 0 === t ? "undefined" : i(t)) || null === t) return !1;
        var n = Object.keys(e), a = Object.keys(t);
        if (n.length !== a.length) return !1;
        for (var s = 0; s < n.length; s++) if (!o.call(t, n[s]) || !r(e[n[s]], t[n[s]])) return !1;
        return !0
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
}, function (e, t, n) {
    "use strict";
    var i = !("undefined" == typeof window || !window.document || !window.document.createElement), o = {
        canUseDOM: i,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: i && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: i && !!window.screen,
        isInWorker: !i
    };
    e.exports = o
}, function (e, t, n) {
    "use strict";
    /** @license React v16.3.2
     * react-dom.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = n(105), r = n(5), a = n(238), s = n(106), l = n(103), c = n(237), u = n(236), d = n(235), f = n(104);

    function p(e) {
        for (var t = arguments.length - 1, n = "http://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 0; i < t; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        o(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    r || p("227");
    var h = {
        _caughtError: null,
        _hasCaughtError: !1,
        _rethrowError: null,
        _hasRethrowError: !1,
        invokeGuardedCallback: function (e, t, n, i, o, r, a, s, l) {
            (function (e, t, n, i, o, r, a, s, l) {
                this._hasCaughtError = !1, this._caughtError = null;
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (e) {
                    this._caughtError = e, this._hasCaughtError = !0
                }
            }).apply(h, arguments)
        },
        invokeGuardedCallbackAndCatchFirstError: function (e, t, n, i, o, r, a, s, l) {
            if (h.invokeGuardedCallback.apply(this, arguments), h.hasCaughtError()) {
                var c = h.clearCaughtError();
                h._hasRethrowError || (h._hasRethrowError = !0, h._rethrowError = c)
            }
        },
        rethrowCaughtError: function () {
            return function () {
                if (h._hasRethrowError) {
                    var e = h._rethrowError;
                    throw h._rethrowError = null, h._hasRethrowError = !1, e
                }
            }.apply(h, arguments)
        },
        hasCaughtError: function () {
            return h._hasCaughtError
        },
        clearCaughtError: function () {
            if (h._hasCaughtError) {
                var e = h._caughtError;
                return h._caughtError = null, h._hasCaughtError = !1, e
            }
            p("198")
        }
    };
    var m = null, v = {};

    function g() {
        if (m) for (var e in v) {
            var t = v[e], n = m.indexOf(e);
            if (-1 < n || p("96", e), !b[n]) for (var i in t.extractEvents || p("97", e), b[n] = t, n = t.eventTypes) {
                var o = void 0, r = n[i], a = t, s = i;
                _.hasOwnProperty(s) && p("99", s), _[s] = r;
                var l = r.phasedRegistrationNames;
                if (l) {
                    for (o in l) l.hasOwnProperty(o) && y(l[o], a, s);
                    o = !0
                } else r.registrationName ? (y(r.registrationName, a, s), o = !0) : o = !1;
                o || p("98", i, e)
            }
        }
    }

    function y(e, t, n) {
        w[e] && p("100", e), w[e] = t, S[e] = t.eventTypes[n].dependencies
    }

    var b = [], _ = {}, w = {}, S = {};

    function x(e) {
        m && p("101"), m = Array.prototype.slice.call(e), g()
    }

    function E(e) {
        var t, n = !1;
        for (t in e) if (e.hasOwnProperty(t)) {
            var i = e[t];
            v.hasOwnProperty(t) && v[t] === i || (v[t] && p("102", t), v[t] = i, n = !0)
        }
        n && g()
    }

    var k = Object.freeze({
        plugins: b,
        eventNameDispatchConfigs: _,
        registrationNameModules: w,
        registrationNameDependencies: S,
        possibleRegistrationNames: null,
        injectEventPluginOrder: x,
        injectEventPluginsByName: E
    }), T = null, C = null, N = null;

    function P(e, t, n, i) {
        t = e.type || "unknown-event", e.currentTarget = N(i), h.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), e.currentTarget = null
    }

    function O(e, t) {
        return null == t && p("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function I(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    var M = null;

    function D(e, t) {
        if (e) {
            var n = e._dispatchListeners, i = e._dispatchInstances;
            if (Array.isArray(n)) for (var o = 0; o < n.length && !e.isPropagationStopped(); o++) P(e, t, n[o], i[o]); else n && P(e, t, n, i);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function j(e) {
        return D(e, !0)
    }

    function L(e) {
        return D(e, !1)
    }

    var z = {injectEventPluginOrder: x, injectEventPluginsByName: E};

    function A(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var o = T(n);
        if (!o) return null;
        n = o[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
                (o = !o.disabled) || (o = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !o;
                break e;
            default:
                e = !1
        }
        return e ? null : (n && "function" != typeof n && p("231", t, void 0 === n ? "undefined" : i(n)), n)
    }

    function R(e, t) {
        null !== e && (M = O(M, e)), e = M, M = null, e && (I(e, t ? j : L), M && p("95"), h.rethrowCaughtError())
    }

    function $(e, t, n, i) {
        for (var o = null, r = 0; r < b.length; r++) {
            var a = b[r];
            a && (a = a.extractEvents(e, t, n, i)) && (o = O(o, a))
        }
        R(o, !1)
    }

    var B = Object.freeze({injection: z, getListener: A, runEventsInBatch: R, runExtractedEventsInBatch: $}),
        W = Math.random().toString(36).slice(2), F = "__reactInternalInstance$" + W, U = "__reactEventHandlers$" + W;

    function Y(e) {
        if (e[F]) return e[F];
        for (; !e[F];) {
            if (!e.parentNode) return null;
            e = e.parentNode
        }
        return 5 === (e = e[F]).tag || 6 === e.tag ? e : null
    }

    function X(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        p("33")
    }

    function H(e) {
        return e[U] || null
    }

    var q = Object.freeze({
        precacheFiberNode: function (e, t) {
            t[F] = e
        }, getClosestInstanceFromNode: Y, getInstanceFromNode: function (e) {
            return !(e = e[F]) || 5 !== e.tag && 6 !== e.tag ? null : e
        }, getNodeFromInstance: X, getFiberCurrentPropsFromNode: H, updateFiberProps: function (e, t) {
            e[U] = t
        }
    });

    function V(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function J(e, t, n) {
        for (var i = []; e;) i.push(e), e = V(e);
        for (e = i.length; 0 < e--;) t(i[e], "captured", n);
        for (e = 0; e < i.length; e++) t(i[e], "bubbled", n)
    }

    function K(e, t, n) {
        (t = A(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = O(n._dispatchListeners, t), n._dispatchInstances = O(n._dispatchInstances, e))
    }

    function Z(e) {
        e && e.dispatchConfig.phasedRegistrationNames && J(e._targetInst, K, e)
    }

    function Q(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst;
            J(t = t ? V(t) : null, K, e)
        }
    }

    function G(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = A(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = O(n._dispatchListeners, t), n._dispatchInstances = O(n._dispatchInstances, e))
    }

    function ee(e) {
        e && e.dispatchConfig.registrationName && G(e._targetInst, null, e)
    }

    function te(e) {
        I(e, Z)
    }

    function ne(e, t, n, i) {
        if (n && i) e:{
            for (var o = n, r = i, a = 0, s = o; s; s = V(s)) a++;
            s = 0;
            for (var l = r; l; l = V(l)) s++;
            for (; 0 < a - s;) o = V(o), a--;
            for (; 0 < s - a;) r = V(r), s--;
            for (; a--;) {
                if (o === r || o === r.alternate) break e;
                o = V(o), r = V(r)
            }
            o = null
        } else o = null;
        for (r = o, o = []; n && n !== r && (null === (a = n.alternate) || a !== r);) o.push(n), n = V(n);
        for (n = []; i && i !== r && (null === (a = i.alternate) || a !== r);) n.push(i), i = V(i);
        for (i = 0; i < o.length; i++) G(o[i], "bubbled", e);
        for (e = n.length; 0 < e--;) G(n[e], "captured", t)
    }

    var ie = Object.freeze({
        accumulateTwoPhaseDispatches: te, accumulateTwoPhaseDispatchesSkipTarget: function (e) {
            I(e, Q)
        }, accumulateEnterLeaveDispatches: ne, accumulateDirectDispatches: function (e) {
            I(e, ee)
        }
    }), oe = null;

    function re() {
        return !oe && a.canUseDOM && (oe = "textContent" in document.documentElement ? "textContent" : "innerText"), oe
    }

    var ae = {_root: null, _startText: null, _fallbackText: null};

    function se() {
        if (ae._fallbackText) return ae._fallbackText;
        var e, t, n = ae._startText, i = n.length, o = le(), r = o.length;
        for (e = 0; e < i && n[e] === o[e]; e++) ;
        var a = i - e;
        for (t = 1; t <= a && n[i - t] === o[r - t]; t++) ;
        return ae._fallbackText = o.slice(e, 1 < t ? 1 - t : void 0), ae._fallbackText
    }

    function le() {
        return "value" in ae._root ? ae._root.value : ae._root[re()]
    }

    var ce = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        ue = {
            type: null,
            target: null,
            currentTarget: l.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };

    function de(e, t, n, i) {
        for (var o in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = i : this[o] = n[o]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? l.thatReturnsTrue : l.thatReturnsFalse, this.isPropagationStopped = l.thatReturnsFalse, this
    }

    function fe(e, t, n, i) {
        if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, i), o
        }
        return new this(e, t, n, i)
    }

    function pe(e) {
        e instanceof this || p("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function he(e) {
        e.eventPool = [], e.getPooled = fe, e.release = pe
    }

    s(de.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = l.thatReturnsTrue)
        }, stopPropagation: function () {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = l.thatReturnsTrue)
        }, persist: function () {
            this.isPersistent = l.thatReturnsTrue
        }, isPersistent: l.thatReturnsFalse, destructor: function () {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            for (t = 0; t < ce.length; t++) this[ce[t]] = null
        }
    }), de.Interface = ue, de.extend = function (e) {
        function t() {
        }

        function n() {
            return i.apply(this, arguments)
        }

        var i = this;
        t.prototype = i.prototype;
        var o = new t;
        return s(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = s({}, i.Interface, e), n.extend = i.extend, he(n), n
    }, he(de);
    var me = de.extend({data: null}), ve = de.extend({data: null}), ge = [9, 13, 27, 32],
        ye = a.canUseDOM && "CompositionEvent" in window, be = null;
    a.canUseDOM && "documentMode" in document && (be = document.documentMode);
    var _e = a.canUseDOM && "TextEvent" in window && !be, we = a.canUseDOM && (!ye || be && 8 < be && 11 >= be),
        Se = String.fromCharCode(32), xe = {
            beforeInput: {
                phasedRegistrationNames: {bubbled: "onBeforeInput", captured: "onBeforeInputCapture"},
                dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {bubbled: "onCompositionEnd", captured: "onCompositionEndCapture"},
                dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                }, dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                }, dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")
            }
        }, Ee = !1;

    function ke(e, t) {
        switch (e) {
            case"topKeyUp":
                return -1 !== ge.indexOf(t.keyCode);
            case"topKeyDown":
                return 229 !== t.keyCode;
            case"topKeyPress":
            case"topMouseDown":
            case"topBlur":
                return !0;
            default:
                return !1
        }
    }

    function Te(e) {
        return "object" === (void 0 === (e = e.detail) ? "undefined" : i(e)) && "data" in e ? e.data : null
    }

    var Ce = !1;
    var Ne = {
        eventTypes: xe, extractEvents: function (e, t, n, i) {
            var o = void 0, r = void 0;
            if (ye) e:{
                switch (e) {
                    case"topCompositionStart":
                        o = xe.compositionStart;
                        break e;
                    case"topCompositionEnd":
                        o = xe.compositionEnd;
                        break e;
                    case"topCompositionUpdate":
                        o = xe.compositionUpdate;
                        break e
                }
                o = void 0
            } else Ce ? ke(e, n) && (o = xe.compositionEnd) : "topKeyDown" === e && 229 === n.keyCode && (o = xe.compositionStart);
            return o ? (we && (Ce || o !== xe.compositionStart ? o === xe.compositionEnd && Ce && (r = se()) : (ae._root = i, ae._startText = le(), Ce = !0)), o = me.getPooled(o, t, n, i), r ? o.data = r : null !== (r = Te(n)) && (o.data = r), te(o), r = o) : r = null, (e = _e ? function (e, t) {
                switch (e) {
                    case"topCompositionEnd":
                        return Te(t);
                    case"topKeyPress":
                        return 32 !== t.which ? null : (Ee = !0, Se);
                    case"topTextInput":
                        return (e = t.data) === Se && Ee ? null : e;
                    default:
                        return null
                }
            }(e, n) : function (e, t) {
                if (Ce) return "topCompositionEnd" === e || !ye && ke(e, t) ? (e = se(), ae._root = null, ae._startText = null, ae._fallbackText = null, Ce = !1, e) : null;
                switch (e) {
                    case"topPaste":
                        return null;
                    case"topKeyPress":
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which)
                        }
                        return null;
                    case"topCompositionEnd":
                        return we ? null : t.data;
                    default:
                        return null
                }
            }(e, n)) ? ((t = ve.getPooled(xe.beforeInput, t, n, i)).data = e, te(t)) : t = null, null === r ? t : null === t ? r : [r, t]
        }
    }, Pe = null, Oe = {
        injectFiberControlledHostComponent: function (e) {
            Pe = e
        }
    }, Ie = null, Me = null;

    function De(e) {
        if (e = C(e)) {
            Pe && "function" == typeof Pe.restoreControlledState || p("194");
            var t = T(e.stateNode);
            Pe.restoreControlledState(e.stateNode, e.type, t)
        }
    }

    function je(e) {
        Ie ? Me ? Me.push(e) : Me = [e] : Ie = e
    }

    function Le() {
        return null !== Ie || null !== Me
    }

    function ze() {
        if (Ie) {
            var e = Ie, t = Me;
            if (Me = Ie = null, De(e), t) for (e = 0; e < t.length; e++) De(t[e])
        }
    }

    var Ae = Object.freeze({injection: Oe, enqueueStateRestore: je, needsStateRestore: Le, restoreStateIfNeeded: ze});

    function Re(e, t) {
        return e(t)
    }

    function $e(e, t, n) {
        return e(t, n)
    }

    function Be() {
    }

    var We = !1;

    function Fe(e, t) {
        if (We) return e(t);
        We = !0;
        try {
            return Re(e, t)
        } finally {
            We = !1, Le() && (Be(), ze())
        }
    }

    var Ue = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ye(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Ue[e.type] : "textarea" === t
    }

    function Xe(e) {
        return (e = e.target || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function He(e, t) {
        return !(!a.canUseDOM || t && !("addEventListener" in document)) && ((t = (e = "on" + e) in document) || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t)
    }

    function qe(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function Ve(e) {
        e._valueTracker || (e._valueTracker = function (e) {
            var t = qe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                i = "" + e[t];
            if (!e.hasOwnProperty(t) && "function" == typeof n.get && "function" == typeof n.set) return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return n.get.call(this)
                },
                set: function (e) {
                    i = "" + e, n.set.call(this, e)
                }
            }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                getValue: function () {
                    return i
                }, setValue: function (e) {
                    i = "" + e
                }, stopTracking: function () {
                    e._valueTracker = null, delete e[t]
                }
            }
        }(e))
    }

    function Je(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), i = "";
        return e && (i = qe(e) ? e.checked ? "true" : "false" : e.value), (e = i) !== n && (t.setValue(e), !0)
    }

    var Ke = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Ze = "function" == typeof Symbol && Symbol.for, Qe = Ze ? Symbol.for("react.element") : 60103,
        Ge = Ze ? Symbol.for("react.call") : 60104, et = Ze ? Symbol.for("react.return") : 60105,
        tt = Ze ? Symbol.for("react.portal") : 60106, nt = Ze ? Symbol.for("react.fragment") : 60107,
        it = Ze ? Symbol.for("react.strict_mode") : 60108, ot = Ze ? Symbol.for("react.provider") : 60109,
        rt = Ze ? Symbol.for("react.context") : 60110, at = Ze ? Symbol.for("react.async_mode") : 60111,
        st = Ze ? Symbol.for("react.forward_ref") : 60112, lt = "function" == typeof Symbol && Symbol.iterator;

    function ct(e) {
        return null === e || void 0 === e ? null : "function" == typeof (e = lt && e[lt] || e["@@iterator"]) ? e : null
    }

    function ut(e) {
        if ("function" == typeof (e = e.type)) return e.displayName || e.name;
        if ("string" == typeof e) return e;
        switch (e) {
            case nt:
                return "ReactFragment";
            case tt:
                return "ReactPortal";
            case Ge:
                return "ReactCall";
            case et:
                return "ReactReturn"
        }
        if ("object" === (void 0 === e ? "undefined" : i(e)) && null !== e) switch (e.$$typeof) {
            case st:
                return "" !== (e = e.render.displayName || e.render.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"
        }
        return null
    }

    function dt(e) {
        var t = "";
        do {
            e:switch (e.tag) {
                case 0:
                case 1:
                case 2:
                case 5:
                    var n = e._debugOwner, i = e._debugSource, o = ut(e), r = null;
                    n && (r = ut(n)), n = i, o = "\n    in " + (o || "Unknown") + (n ? " (at " + n.fileName.replace(/^.*[\\\/]/, "") + ":" + n.lineNumber + ")" : r ? " (created by " + r + ")" : "");
                    break e;
                default:
                    o = ""
            }
            t += o, e = e.return
        } while (e);
        return t
    }

    var ft = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        pt = {}, ht = {};

    function mt(e, t, n, o) {
        if (null === t || void 0 === t || function (e, t, n, o) {
            if (null !== n && 0 === n.type) return !1;
            switch (void 0 === t ? "undefined" : i(t)) {
                case"function":
                case"symbol":
                    return !0;
                case"boolean":
                    return !o && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                    return !1
            }
        }(e, t, n, o)) return !0;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function vt(e, t, n, i, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t
    }

    var gt = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        gt[e] = new vt(e, 0, !1, e, null)
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
        var t = e[0];
        gt[t] = new vt(t, 1, !1, e[1], null)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        gt[e] = new vt(e, 2, !1, e.toLowerCase(), null)
    }), ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function (e) {
        gt[e] = new vt(e, 2, !1, e, null)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
        gt[e] = new vt(e, 3, !1, e.toLowerCase(), null)
    }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        gt[e] = new vt(e, 3, !0, e.toLowerCase(), null)
    }), ["capture", "download"].forEach(function (e) {
        gt[e] = new vt(e, 4, !1, e.toLowerCase(), null)
    }), ["cols", "rows", "size", "span"].forEach(function (e) {
        gt[e] = new vt(e, 6, !1, e.toLowerCase(), null)
    }), ["rowSpan", "start"].forEach(function (e) {
        gt[e] = new vt(e, 5, !1, e.toLowerCase(), null)
    });
    var yt = /[\-:]([a-z])/g;

    function bt(e) {
        return e[1].toUpperCase()
    }

    function _t(e, t, n, i) {
        var o = gt.hasOwnProperty(t) ? gt[t] : null;
        (null !== o ? 0 === o.type : !i && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (mt(t, n, o, i) && (n = null), i || null === o ? function (e) {
            return !!ht.hasOwnProperty(e) || !pt.hasOwnProperty(e) && (ft.test(e) ? ht[e] = !0 : (pt[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, i = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
    }

    function wt(e, t) {
        var n = t.checked;
        return s({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function St(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue, i = null != t.checked ? t.checked : t.defaultChecked;
        n = Ct(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: i,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function xt(e, t) {
        null != (t = t.checked) && _t(e, "checked", t, !1)
    }

    function Et(e, t) {
        xt(e, t);
        var n = Ct(t.value);
        null != n && ("number" === t.type ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)), t.hasOwnProperty("value") ? Tt(e, t.type, n) : t.hasOwnProperty("defaultValue") && Tt(e, t.type, Ct(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function kt(e, t) {
        (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) && ("" === e.value && (e.value = "" + e._wrapperState.initialValue), e.defaultValue = "" + e._wrapperState.initialValue), "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !e.defaultChecked, "" !== t && (e.name = t)
    }

    function Tt(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function Ct(e) {
        switch (void 0 === e ? "undefined" : i(e)) {
            case"boolean":
            case"number":
            case"object":
            case"string":
            case"undefined":
                return e;
            default:
                return ""
        }
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var t = e.replace(yt, bt);
        gt[t] = new vt(t, 1, !1, e, null)
    }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var t = e.replace(yt, bt);
        gt[t] = new vt(t, 1, !1, e, "http://www.w3.org/1999/xlink")
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(yt, bt);
        gt[t] = new vt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
    }), gt.tabIndex = new vt("tabIndex", 1, !1, "tabindex", null);
    var Nt = {
        change: {
            phasedRegistrationNames: {bubbled: "onChange", captured: "onChangeCapture"},
            dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")
        }
    };

    function Pt(e, t, n) {
        return (e = de.getPooled(Nt.change, e, t, n)).type = "change", je(n), te(e), e
    }

    var Ot = null, It = null;

    function Mt(e) {
        R(e, !1)
    }

    function Dt(e) {
        if (Je(X(e))) return e
    }

    function jt(e, t) {
        if ("topChange" === e) return t
    }

    var Lt = !1;

    function zt() {
        Ot && (Ot.detachEvent("onpropertychange", At), It = Ot = null)
    }

    function At(e) {
        "value" === e.propertyName && Dt(It) && Fe(Mt, e = Pt(It, e, Xe(e)))
    }

    function Rt(e, t, n) {
        "topFocus" === e ? (zt(), It = n, (Ot = t).attachEvent("onpropertychange", At)) : "topBlur" === e && zt()
    }

    function $t(e) {
        if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return Dt(It)
    }

    function Bt(e, t) {
        if ("topClick" === e) return Dt(t)
    }

    function Wt(e, t) {
        if ("topInput" === e || "topChange" === e) return Dt(t)
    }

    a.canUseDOM && (Lt = He("input") && (!document.documentMode || 9 < document.documentMode));
    var Ft = {
            eventTypes: Nt, _isInputEventSupported: Lt, extractEvents: function (e, t, n, i) {
                var o = t ? X(t) : window, r = void 0, a = void 0, s = o.nodeName && o.nodeName.toLowerCase();
                if ("select" === s || "input" === s && "file" === o.type ? r = jt : Ye(o) ? Lt ? r = Wt : (r = $t, a = Rt) : (s = o.nodeName) && "input" === s.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (r = Bt), r && (r = r(e, t))) return Pt(r, n, i);
                a && a(e, o, t), "topBlur" === e && null != t && (e = t._wrapperState || o._wrapperState) && e.controlled && "number" === o.type && Tt(o, "number", o.value)
            }
        }, Ut = de.extend({view: null, detail: null}),
        Yt = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function Xt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Yt[e]) && !!t[e]
    }

    function Ht() {
        return Xt
    }

    var qt = Ut.extend({
        screenX: null,
        screenY: null,
        clientX: null,
        clientY: null,
        pageX: null,
        pageY: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        getModifierState: Ht,
        button: null,
        buttons: null,
        relatedTarget: function (e) {
            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
        }
    }), Vt = {
        mouseEnter: {registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"]},
        mouseLeave: {registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"]}
    }, Jt = {
        eventTypes: Vt, extractEvents: function (e, t, n, i) {
            if ("topMouseOver" === e && (n.relatedTarget || n.fromElement) || "topMouseOut" !== e && "topMouseOver" !== e) return null;
            var o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window;
            if ("topMouseOut" === e ? (e = t, t = (t = n.relatedTarget || n.toElement) ? Y(t) : null) : e = null, e === t) return null;
            var r = null == e ? o : X(e);
            o = null == t ? o : X(t);
            var a = qt.getPooled(Vt.mouseLeave, e, n, i);
            return a.type = "mouseleave", a.target = r, a.relatedTarget = o, (n = qt.getPooled(Vt.mouseEnter, t, n, i)).type = "mouseenter", n.target = o, n.relatedTarget = r, ne(a, n, e, t), [a, n]
        }
    };

    function Kt(e) {
        var t = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            if (0 != (2 & t.effectTag)) return 1;
            for (; t.return;) if (0 != (2 & (t = t.return).effectTag)) return 1
        }
        return 3 === t.tag ? 2 : 3
    }

    function Zt(e) {
        return !!(e = e._reactInternalFiber) && 2 === Kt(e)
    }

    function Qt(e) {
        2 !== Kt(e) && p("188")
    }

    function Gt(e) {
        var t = e.alternate;
        if (!t) return 3 === (t = Kt(e)) && p("188"), 1 === t ? null : e;
        for (var n = e, i = t; ;) {
            var o = n.return, r = o ? o.alternate : null;
            if (!o || !r) break;
            if (o.child === r.child) {
                for (var a = o.child; a;) {
                    if (a === n) return Qt(o), e;
                    if (a === i) return Qt(o), t;
                    a = a.sibling
                }
                p("188")
            }
            if (n.return !== i.return) n = o, i = r; else {
                a = !1;
                for (var s = o.child; s;) {
                    if (s === n) {
                        a = !0, n = o, i = r;
                        break
                    }
                    if (s === i) {
                        a = !0, i = o, n = r;
                        break
                    }
                    s = s.sibling
                }
                if (!a) {
                    for (s = r.child; s;) {
                        if (s === n) {
                            a = !0, n = r, i = o;
                            break
                        }
                        if (s === i) {
                            a = !0, i = r, n = o;
                            break
                        }
                        s = s.sibling
                    }
                    a || p("189")
                }
            }
            n.alternate !== i && p("190")
        }
        return 3 !== n.tag && p("188"), n.stateNode.current === n ? e : t
    }

    function en(e) {
        if (!(e = Gt(e))) return null;
        for (var t = e; ;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child; else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    var tn = de.extend({animationName: null, elapsedTime: null, pseudoElement: null}), nn = de.extend({
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), on = Ut.extend({relatedTarget: null});

    function rn(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    var an = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, sn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ln = Ut.extend({
        key: function (e) {
            if (e.key) {
                var t = an[e.key] || e.key;
                if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type ? 13 === (e = rn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? sn[e.keyCode] || "Unidentified" : ""
        },
        location: null,
        ctrlKey: null,
        shiftKey: null,
        altKey: null,
        metaKey: null,
        repeat: null,
        locale: null,
        getModifierState: Ht,
        charCode: function (e) {
            return "keypress" === e.type ? rn(e) : 0
        },
        keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        },
        which: function (e) {
            return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
        }
    }), cn = qt.extend({dataTransfer: null}), un = Ut.extend({
        touches: null,
        targetTouches: null,
        changedTouches: null,
        altKey: null,
        metaKey: null,
        ctrlKey: null,
        shiftKey: null,
        getModifierState: Ht
    }), dn = de.extend({propertyName: null, elapsedTime: null, pseudoElement: null}), fn = qt.extend({
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: null, deltaMode: null
    }), pn = {}, hn = {};

    function mn(e, t) {
        var n = e[0].toUpperCase() + e.slice(1), i = "on" + n;
        t = {
            phasedRegistrationNames: {bubbled: i, captured: i + "Capture"},
            dependencies: [n = "top" + n],
            isInteractive: t
        }, pn[e] = t, hn[n] = t
    }

    "blur cancel click close contextMenu copy cut doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play rateChange reset seeked submit touchCancel touchEnd touchStart volumeChange".split(" ").forEach(function (e) {
        mn(e, !0)
    }), "abort animationEnd animationIteration animationStart canPlay canPlayThrough drag dragEnter dragExit dragLeave dragOver durationChange emptied encrypted ended error load loadedData loadedMetadata loadStart mouseMove mouseOut mouseOver playing progress scroll seeking stalled suspend timeUpdate toggle touchMove transitionEnd waiting wheel".split(" ").forEach(function (e) {
        mn(e, !1)
    });
    var vn = {
        eventTypes: pn, isInteractiveTopLevelEventType: function (e) {
            return void 0 !== (e = hn[e]) && !0 === e.isInteractive
        }, extractEvents: function (e, t, n, i) {
            var o = hn[e];
            if (!o) return null;
            switch (e) {
                case"topKeyPress":
                    if (0 === rn(n)) return null;
                case"topKeyDown":
                case"topKeyUp":
                    e = ln;
                    break;
                case"topBlur":
                case"topFocus":
                    e = on;
                    break;
                case"topClick":
                    if (2 === n.button) return null;
                case"topDoubleClick":
                case"topMouseDown":
                case"topMouseMove":
                case"topMouseUp":
                case"topMouseOut":
                case"topMouseOver":
                case"topContextMenu":
                    e = qt;
                    break;
                case"topDrag":
                case"topDragEnd":
                case"topDragEnter":
                case"topDragExit":
                case"topDragLeave":
                case"topDragOver":
                case"topDragStart":
                case"topDrop":
                    e = cn;
                    break;
                case"topTouchCancel":
                case"topTouchEnd":
                case"topTouchMove":
                case"topTouchStart":
                    e = un;
                    break;
                case"topAnimationEnd":
                case"topAnimationIteration":
                case"topAnimationStart":
                    e = tn;
                    break;
                case"topTransitionEnd":
                    e = dn;
                    break;
                case"topScroll":
                    e = Ut;
                    break;
                case"topWheel":
                    e = fn;
                    break;
                case"topCopy":
                case"topCut":
                case"topPaste":
                    e = nn;
                    break;
                default:
                    e = de
            }
            return te(t = e.getPooled(o, t, n, i)), t
        }
    }, gn = vn.isInteractiveTopLevelEventType, yn = [];

    function bn(e) {
        var t = e.targetInst;
        do {
            if (!t) {
                e.ancestors.push(t);
                break
            }
            var n;
            for (n = t; n.return;) n = n.return;
            if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
            e.ancestors.push(t), t = Y(n)
        } while (t);
        for (n = 0; n < e.ancestors.length; n++) t = e.ancestors[n], $(e.topLevelType, t, e.nativeEvent, Xe(e.nativeEvent))
    }

    var _n = !0;

    function wn(e) {
        _n = !!e
    }

    function Sn(e, t, n) {
        if (!n) return null;
        e = (gn(e) ? En : kn).bind(null, e), n.addEventListener(t, e, !1)
    }

    function xn(e, t, n) {
        if (!n) return null;
        e = (gn(e) ? En : kn).bind(null, e), n.addEventListener(t, e, !0)
    }

    function En(e, t) {
        $e(kn, e, t)
    }

    function kn(e, t) {
        if (_n) {
            var n = Xe(t);
            if (null !== (n = Y(n)) && "number" == typeof n.tag && 2 !== Kt(n) && (n = null), yn.length) {
                var i = yn.pop();
                i.topLevelType = e, i.nativeEvent = t, i.targetInst = n, e = i
            } else e = {topLevelType: e, nativeEvent: t, targetInst: n, ancestors: []};
            try {
                Fe(bn, e)
            } finally {
                e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > yn.length && yn.push(e)
            }
        }
    }

    var Tn = Object.freeze({
        get _enabled() {
            return _n
        }, setEnabled: wn, isEnabled: function () {
            return _n
        }, trapBubbledEvent: Sn, trapCapturedEvent: xn, dispatchEvent: kn
    });

    function Cn(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    var Nn = {
        animationend: Cn("Animation", "AnimationEnd"),
        animationiteration: Cn("Animation", "AnimationIteration"),
        animationstart: Cn("Animation", "AnimationStart"),
        transitionend: Cn("Transition", "TransitionEnd")
    }, Pn = {}, On = {};

    function In(e) {
        if (Pn[e]) return Pn[e];
        if (!Nn[e]) return e;
        var t, n = Nn[e];
        for (t in n) if (n.hasOwnProperty(t) && t in On) return Pn[e] = n[t];
        return e
    }

    a.canUseDOM && (On = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
    var Mn = {
        topAnimationEnd: In("animationend"),
        topAnimationIteration: In("animationiteration"),
        topAnimationStart: In("animationstart"),
        topBlur: "blur",
        topCancel: "cancel",
        topChange: "change",
        topClick: "click",
        topClose: "close",
        topCompositionEnd: "compositionend",
        topCompositionStart: "compositionstart",
        topCompositionUpdate: "compositionupdate",
        topContextMenu: "contextmenu",
        topCopy: "copy",
        topCut: "cut",
        topDoubleClick: "dblclick",
        topDrag: "drag",
        topDragEnd: "dragend",
        topDragEnter: "dragenter",
        topDragExit: "dragexit",
        topDragLeave: "dragleave",
        topDragOver: "dragover",
        topDragStart: "dragstart",
        topDrop: "drop",
        topFocus: "focus",
        topInput: "input",
        topKeyDown: "keydown",
        topKeyPress: "keypress",
        topKeyUp: "keyup",
        topLoad: "load",
        topLoadStart: "loadstart",
        topMouseDown: "mousedown",
        topMouseMove: "mousemove",
        topMouseOut: "mouseout",
        topMouseOver: "mouseover",
        topMouseUp: "mouseup",
        topPaste: "paste",
        topScroll: "scroll",
        topSelectionChange: "selectionchange",
        topTextInput: "textInput",
        topToggle: "toggle",
        topTouchCancel: "touchcancel",
        topTouchEnd: "touchend",
        topTouchMove: "touchmove",
        topTouchStart: "touchstart",
        topTransitionEnd: In("transitionend"),
        topWheel: "wheel"
    }, Dn = {
        topAbort: "abort",
        topCanPlay: "canplay",
        topCanPlayThrough: "canplaythrough",
        topDurationChange: "durationchange",
        topEmptied: "emptied",
        topEncrypted: "encrypted",
        topEnded: "ended",
        topError: "error",
        topLoadedData: "loadeddata",
        topLoadedMetadata: "loadedmetadata",
        topLoadStart: "loadstart",
        topPause: "pause",
        topPlay: "play",
        topPlaying: "playing",
        topProgress: "progress",
        topRateChange: "ratechange",
        topSeeked: "seeked",
        topSeeking: "seeking",
        topStalled: "stalled",
        topSuspend: "suspend",
        topTimeUpdate: "timeupdate",
        topVolumeChange: "volumechange",
        topWaiting: "waiting"
    }, jn = {}, Ln = 0, zn = "_reactListenersID" + ("" + Math.random()).slice(2);

    function An(e) {
        return Object.prototype.hasOwnProperty.call(e, zn) || (e[zn] = Ln++, jn[e[zn]] = {}), jn[e[zn]]
    }

    function Rn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function $n(e, t) {
        var n, i = Rn(e);
        for (e = 0; i;) {
            if (3 === i.nodeType) {
                if (n = e + i.textContent.length, e <= t && n >= t) return {node: i, offset: t - e};
                e = n
            }
            e:{
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Rn(i)
        }
    }

    function Bn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
    }

    var Wn = a.canUseDOM && "documentMode" in document && 11 >= document.documentMode, Fn = {
        select: {
            phasedRegistrationNames: {bubbled: "onSelect", captured: "onSelectCapture"},
            dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")
        }
    }, Un = null, Yn = null, Xn = null, Hn = !1;

    function qn(e, t) {
        if (Hn || null == Un || Un !== c()) return null;
        var n = Un;
        return "selectionStart" in n && Bn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? n = {
            anchorNode: (n = window.getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        } : n = void 0, Xn && u(Xn, n) ? null : (Xn = n, (e = de.getPooled(Fn.select, Yn, e, t)).type = "select", e.target = Un, te(e), e)
    }

    var Vn = {
        eventTypes: Fn, extractEvents: function (e, t, n, i) {
            var o, r = i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument;
            if (!(o = !r)) {
                e:{
                    r = An(r), o = S.onSelect;
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        if (!r.hasOwnProperty(s) || !r[s]) {
                            r = !1;
                            break e
                        }
                    }
                    r = !0
                }
                o = !r
            }
            if (o) return null;
            switch (r = t ? X(t) : window, e) {
                case"topFocus":
                    (Ye(r) || "true" === r.contentEditable) && (Un = r, Yn = t, Xn = null);
                    break;
                case"topBlur":
                    Xn = Yn = Un = null;
                    break;
                case"topMouseDown":
                    Hn = !0;
                    break;
                case"topContextMenu":
                case"topMouseUp":
                    return Hn = !1, qn(n, i);
                case"topSelectionChange":
                    if (Wn) break;
                case"topKeyDown":
                case"topKeyUp":
                    return qn(n, i)
            }
            return null
        }
    };

    function Jn(e, t, n, i) {
        this.tag = e, this.key = n, this.stateNode = this.type = null, this.sibling = this.child = this.return = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.expirationTime = 0, this.alternate = null
    }

    function Kn(e, t, n) {
        var i = e.alternate;
        return null === i ? ((i = new Jn(e.tag, t, e.key, e.mode)).type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.effectTag = 0, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null), i.expirationTime = n, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i
    }

    function Zn(e, t, n) {
        var o = e.type, r = e.key;
        e = e.props;
        var a = void 0;
        if ("function" == typeof o) a = o.prototype && o.prototype.isReactComponent ? 2 : 0; else if ("string" == typeof o) a = 5; else switch (o) {
            case nt:
                return Qn(e.children, t, n, r);
            case at:
                a = 11, t |= 3;
                break;
            case it:
                a = 11, t |= 2;
                break;
            case Ge:
                a = 7;
                break;
            case et:
                a = 9;
                break;
            default:
                if ("object" === (void 0 === o ? "undefined" : i(o)) && null !== o) switch (o.$$typeof) {
                    case ot:
                        a = 13;
                        break;
                    case rt:
                        a = 12;
                        break;
                    case st:
                        a = 14;
                        break;
                    default:
                        if ("number" == typeof o.tag) return (t = o).pendingProps = e, t.expirationTime = n, t;
                        p("130", null == o ? o : void 0 === o ? "undefined" : i(o), "")
                } else p("130", null == o ? o : void 0 === o ? "undefined" : i(o), "")
        }
        return (t = new Jn(a, e, r, t)).type = o, t.expirationTime = n, t
    }

    function Qn(e, t, n, i) {
        return (e = new Jn(10, e, i, t)).expirationTime = n, e
    }

    function Gn(e, t, n) {
        return (e = new Jn(6, e, null, t)).expirationTime = n, e
    }

    function ei(e, t, n) {
        return (t = new Jn(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    z.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), T = q.getFiberCurrentPropsFromNode, C = q.getInstanceFromNode, N = q.getNodeFromInstance, z.injectEventPluginsByName({
        SimpleEventPlugin: vn,
        EnterLeaveEventPlugin: Jt,
        ChangeEventPlugin: Ft,
        SelectEventPlugin: Vn,
        BeforeInputEventPlugin: Ne
    });
    var ti = null, ni = null;

    function ii(e) {
        return function (t) {
            try {
                return e(t)
            } catch (e) {
            }
        }
    }

    function oi(e) {
        "function" == typeof ti && ti(e)
    }

    function ri(e) {
        "function" == typeof ni && ni(e)
    }

    function ai(e) {
        return {
            baseState: e,
            expirationTime: 0,
            first: null,
            last: null,
            callbackList: null,
            hasForceUpdate: !1,
            isInitialized: !1,
            capturedValues: null
        }
    }

    function si(e, t) {
        null === e.last ? e.first = e.last = t : (e.last.next = t, e.last = t), (0 === e.expirationTime || e.expirationTime > t.expirationTime) && (e.expirationTime = t.expirationTime)
    }

    new Set;
    var li = void 0, ci = void 0;

    function ui(e) {
        li = ci = null;
        var t = e.alternate, n = e.updateQueue;
        null === n && (n = e.updateQueue = ai(null)), null !== t ? null === (e = t.updateQueue) && (e = t.updateQueue = ai(null)) : e = null, li = n, ci = e !== n ? e : null
    }

    function di(e, t) {
        ui(e), e = li;
        var n = ci;
        null === n ? si(e, t) : null === e.last || null === n.last ? (si(e, t), si(n, t)) : (si(e, t), n.last = t)
    }

    function fi(e, t, n, i) {
        return "function" == typeof (e = e.partialState) ? e.call(t, n, i) : e
    }

    function pi(e, t, n, i, o, r) {
        null !== e && e.updateQueue === n && (n = t.updateQueue = {
            baseState: n.baseState,
            expirationTime: n.expirationTime,
            first: n.first,
            last: n.last,
            isInitialized: n.isInitialized,
            capturedValues: n.capturedValues,
            callbackList: null,
            hasForceUpdate: !1
        }), n.expirationTime = 0, n.isInitialized ? e = n.baseState : (e = n.baseState = t.memoizedState, n.isInitialized = !0);
        for (var a = !0, l = n.first, c = !1; null !== l;) {
            var u = l.expirationTime;
            if (u > r) {
                var d = n.expirationTime;
                (0 === d || d > u) && (n.expirationTime = u), c || (c = !0, n.baseState = e)
            } else c || (n.first = l.next, null === n.first && (n.last = null)), l.isReplace ? (e = fi(l, i, e, o), a = !0) : (u = fi(l, i, e, o)) && (e = a ? s({}, e, u) : s(e, u), a = !1), l.isForced && (n.hasForceUpdate = !0), null !== l.callback && (null === (u = n.callbackList) && (u = n.callbackList = []), u.push(l)), null !== l.capturedValue && (null === (u = n.capturedValues) ? n.capturedValues = [l.capturedValue] : u.push(l.capturedValue));
            l = l.next
        }
        return null !== n.callbackList ? t.effectTag |= 32 : null !== n.first || n.hasForceUpdate || null !== n.capturedValues || (t.updateQueue = null), c || (n.baseState = e), e
    }

    function hi(e, t) {
        var n = e.callbackList;
        if (null !== n) for (e.callbackList = null, e = 0; e < n.length; e++) {
            var i = n[e], o = i.callback;
            i.callback = null, "function" != typeof o && p("191", o), o.call(t)
        }
    }

    var mi = Array.isArray;

    function vi(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" !== (void 0 === e ? "undefined" : i(e))) {
            if (n._owner) {
                var o = void 0;
                (n = n._owner) && (2 !== n.tag && p("110"), o = n.stateNode), o || p("147", e);
                var r = "" + e;
                return null !== t && null !== t.ref && t.ref._stringRef === r ? t.ref : ((t = function (e) {
                    var t = o.refs === f ? o.refs = {} : o.refs;
                    null === e ? delete t[r] : t[r] = e
                })._stringRef = r, t)
            }
            "string" != typeof e && p("148"), n._owner || p("254", e)
        }
        return e
    }

    function gi(e, t) {
        "textarea" !== e.type && p("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function yi(e) {
        function t(t, n) {
            if (e) {
                var i = t.lastEffect;
                null !== i ? (i.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, i) {
            if (!e) return null;
            for (; null !== i;) t(n, i), i = i.sibling;
            return null
        }

        function o(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function r(e, t, n) {
            return (e = Kn(e, t, n)).index = 0, e.sibling = null, e
        }

        function a(t, n, i) {
            return t.index = i, e ? null !== (i = t.alternate) ? (i = i.index) < n ? (t.effectTag = 2, n) : i : (t.effectTag = 2, n) : n
        }

        function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function l(e, t, n, i) {
            return null === t || 6 !== t.tag ? ((t = Gn(n, e.mode, i)).return = e, t) : ((t = r(t, n, i)).return = e, t)
        }

        function c(e, t, n, i) {
            return null !== t && t.type === n.type ? ((i = r(t, n.props, i)).ref = vi(e, t, n), i.return = e, i) : ((i = Zn(n, e.mode, i)).ref = vi(e, t, n), i.return = e, i)
        }

        function u(e, t, n, i) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ei(n, e.mode, i)).return = e, t) : ((t = r(t, n.children || [], i)).return = e, t)
        }

        function d(e, t, n, i, o) {
            return null === t || 10 !== t.tag ? ((t = Qn(n, e.mode, i, o)).return = e, t) : ((t = r(t, n, i)).return = e, t)
        }

        function f(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Gn("" + t, e.mode, n)).return = e, t;
            if ("object" === (void 0 === t ? "undefined" : i(t)) && null !== t) {
                switch (t.$$typeof) {
                    case Qe:
                        return (n = Zn(t, e.mode, n)).ref = vi(e, null, t), n.return = e, n;
                    case tt:
                        return (t = ei(t, e.mode, n)).return = e, t
                }
                if (mi(t) || ct(t)) return (t = Qn(t, e.mode, n, null)).return = e, t;
                gi(e, t)
            }
            return null
        }

        function h(e, t, n, o) {
            var r = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== r ? null : l(e, t, "" + n, o);
            if ("object" === (void 0 === n ? "undefined" : i(n)) && null !== n) {
                switch (n.$$typeof) {
                    case Qe:
                        return n.key === r ? n.type === nt ? d(e, t, n.props.children, o, r) : c(e, t, n, o) : null;
                    case tt:
                        return n.key === r ? u(e, t, n, o) : null
                }
                if (mi(n) || ct(n)) return null !== r ? null : d(e, t, n, o, null);
                gi(e, n)
            }
            return null
        }

        function m(e, t, n, o, r) {
            if ("string" == typeof o || "number" == typeof o) return l(t, e = e.get(n) || null, "" + o, r);
            if ("object" === (void 0 === o ? "undefined" : i(o)) && null !== o) {
                switch (o.$$typeof) {
                    case Qe:
                        return e = e.get(null === o.key ? n : o.key) || null, o.type === nt ? d(t, e, o.props.children, r, o.key) : c(t, e, o, r);
                    case tt:
                        return u(t, e = e.get(null === o.key ? n : o.key) || null, o, r)
                }
                if (mi(o) || ct(o)) return d(t, e = e.get(n) || null, o, r, null);
                gi(t, o)
            }
            return null
        }

        function v(i, r, s, l) {
            for (var c = null, u = null, d = r, p = r = 0, v = null; null !== d && p < s.length; p++) {
                d.index > p ? (v = d, d = null) : v = d.sibling;
                var g = h(i, d, s[p], l);
                if (null === g) {
                    null === d && (d = v);
                    break
                }
                e && d && null === g.alternate && t(i, d), r = a(g, r, p), null === u ? c = g : u.sibling = g, u = g, d = v
            }
            if (p === s.length) return n(i, d), c;
            if (null === d) {
                for (; p < s.length; p++) (d = f(i, s[p], l)) && (r = a(d, r, p), null === u ? c = d : u.sibling = d, u = d);
                return c
            }
            for (d = o(i, d); p < s.length; p++) (v = m(d, i, p, s[p], l)) && (e && null !== v.alternate && d.delete(null === v.key ? p : v.key), r = a(v, r, p), null === u ? c = v : u.sibling = v, u = v);
            return e && d.forEach(function (e) {
                return t(i, e)
            }), c
        }

        function g(i, r, s, l) {
            var c = ct(s);
            "function" != typeof c && p("150"), null == (s = c.call(s)) && p("151");
            for (var u = c = null, d = r, v = r = 0, g = null, y = s.next(); null !== d && !y.done; v++, y = s.next()) {
                d.index > v ? (g = d, d = null) : g = d.sibling;
                var b = h(i, d, y.value, l);
                if (null === b) {
                    d || (d = g);
                    break
                }
                e && d && null === b.alternate && t(i, d), r = a(b, r, v), null === u ? c = b : u.sibling = b, u = b, d = g
            }
            if (y.done) return n(i, d), c;
            if (null === d) {
                for (; !y.done; v++, y = s.next()) null !== (y = f(i, y.value, l)) && (r = a(y, r, v), null === u ? c = y : u.sibling = y, u = y);
                return c
            }
            for (d = o(i, d); !y.done; v++, y = s.next()) null !== (y = m(d, i, v, y.value, l)) && (e && null !== y.alternate && d.delete(null === y.key ? v : y.key), r = a(y, r, v), null === u ? c = y : u.sibling = y, u = y);
            return e && d.forEach(function (e) {
                return t(i, e)
            }), c
        }

        return function (e, o, a, l) {
            "object" === (void 0 === a ? "undefined" : i(a)) && null !== a && a.type === nt && null === a.key && (a = a.props.children);
            var c = "object" === (void 0 === a ? "undefined" : i(a)) && null !== a;
            if (c) switch (a.$$typeof) {
                case Qe:
                    e:{
                        var u = a.key;
                        for (c = o; null !== c;) {
                            if (c.key === u) {
                                if (10 === c.tag ? a.type === nt : c.type === a.type) {
                                    n(e, c.sibling), (o = r(c, a.type === nt ? a.props.children : a.props, l)).ref = vi(e, c, a), o.return = e, e = o;
                                    break e
                                }
                                n(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        a.type === nt ? ((o = Qn(a.props.children, e.mode, l, a.key)).return = e, e = o) : ((l = Zn(a, e.mode, l)).ref = vi(e, o, a), l.return = e, e = l)
                    }
                    return s(e);
                case tt:
                    e:{
                        for (c = a.key; null !== o;) {
                            if (o.key === c) {
                                if (4 === o.tag && o.stateNode.containerInfo === a.containerInfo && o.stateNode.implementation === a.implementation) {
                                    n(e, o.sibling), (o = r(o, a.children || [], l)).return = e, e = o;
                                    break e
                                }
                                n(e, o);
                                break
                            }
                            t(e, o), o = o.sibling
                        }
                        (o = ei(a, e.mode, l)).return = e, e = o
                    }
                    return s(e)
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== o && 6 === o.tag ? (n(e, o.sibling), (o = r(o, a, l)).return = e, e = o) : (n(e, o), (o = Gn(a, e.mode, l)).return = e, e = o), s(e);
            if (mi(a)) return v(e, o, a, l);
            if (ct(a)) return g(e, o, a, l);
            if (c && gi(e, a), void 0 === a) switch (e.tag) {
                case 2:
                case 1:
                    p("152", (l = e.type).displayName || l.name || "Component")
            }
            return n(e, o)
        }
    }

    var bi = yi(!0), _i = yi(!1);

    function wi(e, t, n, o, r, a, l) {
        function c(e, t, n) {
            d(e, t, n, t.expirationTime)
        }

        function d(e, t, n, i) {
            t.child = null === e ? _i(t, null, n, i) : bi(t, e.child, n, i)
        }

        function h(e, t) {
            var n = t.ref;
            (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
        }

        function m(e, t, n, i, o, r) {
            if (h(e, t), !n && !o) return i && P(t, !1), y(e, t);
            n = t.stateNode, Ke.current = t;
            var a = o ? null : n.render();
            return t.effectTag |= 1, o && (d(e, t, null, r), t.child = null), d(e, t, a, r), t.memoizedState = n.state, t.memoizedProps = n.props, i && P(t, !0), t.child
        }

        function v(e) {
            var t = e.stateNode;
            t.pendingContext ? N(e, t.pendingContext, t.pendingContext !== t.context) : t.context && N(e, t.context, !1), S(e, t.containerInfo)
        }

        function g(e, t, n, i) {
            var o = e.child;
            for (null !== o && (o.return = e); null !== o;) {
                switch (o.tag) {
                    case 12:
                        var r = 0 | o.stateNode;
                        if (o.type === t && 0 != (r & n)) {
                            for (r = o; null !== r;) {
                                var a = r.alternate;
                                if (0 === r.expirationTime || r.expirationTime > i) r.expirationTime = i, null !== a && (0 === a.expirationTime || a.expirationTime > i) && (a.expirationTime = i); else {
                                    if (null === a || !(0 === a.expirationTime || a.expirationTime > i)) break;
                                    a.expirationTime = i
                                }
                                r = r.return
                            }
                            r = null
                        } else r = o.child;
                        break;
                    case 13:
                        r = o.type === e.type ? null : o.child;
                        break;
                    default:
                        r = o.child
                }
                if (null !== r) r.return = o; else for (r = o; null !== r;) {
                    if (r === e) {
                        r = null;
                        break
                    }
                    if (null !== (o = r.sibling)) {
                        r = o;
                        break
                    }
                    r = r.return
                }
                o = r
            }
        }

        function y(e, t) {
            if (null !== e && t.child !== e.child && p("153"), null !== t.child) {
                var n = Kn(e = t.child, e.pendingProps, e.expirationTime);
                for (t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Kn(e, e.pendingProps, e.expirationTime)).return = t;
                n.sibling = null
            }
            return t.child
        }

        var b = e.shouldSetTextContent, _ = e.shouldDeprioritizeSubtree, w = t.pushHostContext, S = t.pushHostContainer,
            x = o.pushProvider, E = n.getMaskedContext, k = n.getUnmaskedContext, T = n.hasContextChanged,
            C = n.pushContextProvider, N = n.pushTopLevelContextObject, P = n.invalidateContextProvider,
            O = r.enterHydrationState, I = r.resetHydrationState, M = r.tryToClaimNextHydratableInstance,
            D = (e = function (e, t, n, i, o) {
                function r(e, t, n, i, o, r) {
                    if (null === t || null !== e.updateQueue && e.updateQueue.hasForceUpdate) return !0;
                    var a = e.stateNode;
                    return e = e.type, "function" == typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(n, o, r) : !(e.prototype && e.prototype.isPureReactComponent && u(t, n) && u(i, o))
                }

                function a(e, t) {
                    t.updater = g, e.stateNode = t, t._reactInternalFiber = e
                }

                function l(e, t, n, i) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && g.enqueueReplaceState(t, t.state, null)
                }

                function c(e, t, n, i) {
                    if ("function" == typeof (e = e.type).getDerivedStateFromProps) return e.getDerivedStateFromProps.call(null, n, i)
                }

                var d = e.cacheContext, p = e.getMaskedContext, h = e.getUnmaskedContext, m = e.isContextConsumer,
                    v = e.hasContextChanged, g = {
                        isMounted: Zt, enqueueSetState: function (e, i, o) {
                            e = e._reactInternalFiber, o = void 0 === o ? null : o;
                            var r = n(e);
                            di(e, {
                                expirationTime: r,
                                partialState: i,
                                callback: o,
                                isReplace: !1,
                                isForced: !1,
                                capturedValue: null,
                                next: null
                            }), t(e, r)
                        }, enqueueReplaceState: function (e, i, o) {
                            e = e._reactInternalFiber, o = void 0 === o ? null : o;
                            var r = n(e);
                            di(e, {
                                expirationTime: r,
                                partialState: i,
                                callback: o,
                                isReplace: !0,
                                isForced: !1,
                                capturedValue: null,
                                next: null
                            }), t(e, r)
                        }, enqueueForceUpdate: function (e, i) {
                            e = e._reactInternalFiber, i = void 0 === i ? null : i;
                            var o = n(e);
                            di(e, {
                                expirationTime: o,
                                partialState: null,
                                callback: i,
                                isReplace: !1,
                                isForced: !0,
                                capturedValue: null,
                                next: null
                            }), t(e, o)
                        }
                    };
                return {
                    adoptClassInstance: a, callGetDerivedStateFromProps: c, constructClassInstance: function (e, t) {
                        var n = e.type, i = h(e), o = m(e), r = o ? p(e, i) : f,
                            l = null !== (n = new n(t, r)).state && void 0 !== n.state ? n.state : null;
                        return a(e, n), e.memoizedState = l, null !== (t = c(e, 0, t, l)) && void 0 !== t && (e.memoizedState = s({}, e.memoizedState, t)), o && d(e, i, r), n
                    }, mountClassInstance: function (e, t) {
                        var n = e.type, i = e.alternate, o = e.stateNode, r = e.pendingProps, a = h(e);
                        o.props = r, o.state = e.memoizedState, o.refs = f, o.context = p(e, a), "function" == typeof n.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (n = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), n !== o.state && g.enqueueReplaceState(o, o.state, null), null !== (n = e.updateQueue) && (o.state = pi(i, e, n, o, r, t))), "function" == typeof o.componentDidMount && (e.effectTag |= 4)
                    }, resumeMountClassInstance: function (e, t) {
                        var n = e.type, a = e.stateNode;
                        a.props = e.memoizedProps, a.state = e.memoizedState;
                        var u = e.memoizedProps, d = e.pendingProps, f = a.context, m = h(e);
                        m = p(e, m), (n = "function" == typeof n.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (u !== d || f !== m) && l(e, a, d, m), f = e.memoizedState, t = null !== e.updateQueue ? pi(null, e, e.updateQueue, a, d, t) : f;
                        var g = void 0;
                        if (u !== d && (g = c(e, 0, d, t)), null !== g && void 0 !== g) {
                            t = null === t || void 0 === t ? g : s({}, t, g);
                            var y = e.updateQueue;
                            null !== y && (y.baseState = s({}, y.baseState, g))
                        }
                        return u !== d || f !== t || v() || null !== e.updateQueue && e.updateQueue.hasForceUpdate ? ((u = r(e, u, d, f, t, m)) ? (n || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (e.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (e.effectTag |= 4), i(e, d), o(e, t)), a.props = d, a.state = t, a.context = m, u) : ("function" == typeof a.componentDidMount && (e.effectTag |= 4), !1)
                    }, updateClassInstance: function (e, t, n) {
                        var a = t.type, u = t.stateNode;
                        u.props = t.memoizedProps, u.state = t.memoizedState;
                        var d = t.memoizedProps, f = t.pendingProps, m = u.context, g = h(t);
                        g = p(t, g), (a = "function" == typeof a.getDerivedStateFromProps || "function" == typeof u.getSnapshotBeforeUpdate) || "function" != typeof u.UNSAFE_componentWillReceiveProps && "function" != typeof u.componentWillReceiveProps || (d !== f || m !== g) && l(t, u, f, g), m = t.memoizedState, n = null !== t.updateQueue ? pi(e, t, t.updateQueue, u, f, n) : m;
                        var y = void 0;
                        if (d !== f && (y = c(t, 0, f, n)), null !== y && void 0 !== y) {
                            n = null === n || void 0 === n ? y : s({}, n, y);
                            var b = t.updateQueue;
                            null !== b && (b.baseState = s({}, b.baseState, y))
                        }
                        return d !== f || m !== n || v() || null !== t.updateQueue && t.updateQueue.hasForceUpdate ? ((y = r(t, d, f, m, n, g)) ? (a || "function" != typeof u.UNSAFE_componentWillUpdate && "function" != typeof u.componentWillUpdate || ("function" == typeof u.componentWillUpdate && u.componentWillUpdate(f, n, g), "function" == typeof u.UNSAFE_componentWillUpdate && u.UNSAFE_componentWillUpdate(f, n, g)), "function" == typeof u.componentDidUpdate && (t.effectTag |= 4), "function" == typeof u.getSnapshotBeforeUpdate && (t.effectTag |= 2048)) : ("function" != typeof u.componentDidUpdate || d === e.memoizedProps && m === e.memoizedState || (t.effectTag |= 4), "function" != typeof u.getSnapshotBeforeUpdate || d === e.memoizedProps && m === e.memoizedState || (t.effectTag |= 2048), i(t, f), o(t, n)), u.props = f, u.state = n, u.context = g, y) : ("function" != typeof u.componentDidUpdate || d === e.memoizedProps && m === e.memoizedState || (t.effectTag |= 4), "function" != typeof u.getSnapshotBeforeUpdate || d === e.memoizedProps && m === e.memoizedState || (t.effectTag |= 2048), !1)
                    }
                }
            }(n, a, l, function (e, t) {
                e.memoizedProps = t
            }, function (e, t) {
                e.memoizedState = t
            })).adoptClassInstance, j = e.callGetDerivedStateFromProps, L = e.constructClassInstance,
            z = e.mountClassInstance, A = e.resumeMountClassInstance, R = e.updateClassInstance;
        return {
            beginWork: function (e, t, n) {
                if (0 === t.expirationTime || t.expirationTime > n) {
                    switch (t.tag) {
                        case 3:
                            v(t);
                            break;
                        case 2:
                            C(t);
                            break;
                        case 4:
                            S(t, t.stateNode.containerInfo);
                            break;
                        case 13:
                            x(t)
                    }
                    return null
                }
                switch (t.tag) {
                    case 0:
                        null !== e && p("155");
                        var o = t.type, r = t.pendingProps, a = k(t);
                        return o = o(r, a = E(t, a)), t.effectTag |= 1, "object" === (void 0 === o ? "undefined" : i(o)) && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (a = t.type, t.tag = 2, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, "function" == typeof a.getDerivedStateFromProps && (null !== (r = j(t, o, r, t.memoizedState)) && void 0 !== r && (t.memoizedState = s({}, t.memoizedState, r))), r = C(t), D(t, o), z(t, n), e = m(e, t, !0, r, !1, n)) : (t.tag = 1, c(e, t, o), t.memoizedProps = r, e = t.child), e;
                    case 1:
                        return r = t.type, n = t.pendingProps, T() || t.memoizedProps !== n ? (o = k(t), r = r(n, o = E(t, o)), t.effectTag |= 1, c(e, t, r), t.memoizedProps = n, e = t.child) : e = y(e, t), e;
                    case 2:
                        r = C(t), null === e ? null === t.stateNode ? (L(t, t.pendingProps), z(t, n), o = !0) : o = A(t, n) : o = R(e, t, n), a = !1;
                        var l = t.updateQueue;
                        return null !== l && null !== l.capturedValues && (a = o = !0), m(e, t, o, r, a, n);
                    case 3:
                        e:if (v(t), o = t.updateQueue, null !== o) {
                            if (a = t.memoizedState, r = pi(e, t, o, null, null, n), t.memoizedState = r, null !== (o = t.updateQueue) && null !== o.capturedValues) o = null; else {
                                if (a === r) {
                                    I(), e = y(e, t);
                                    break e
                                }
                                o = r.element
                            }
                            a = t.stateNode, (null === e || null === e.child) && a.hydrate && O(t) ? (t.effectTag |= 2, t.child = _i(t, null, o, n)) : (I(), c(e, t, o)), t.memoizedState = r, e = t.child
                        } else I(), e = y(e, t);
                        return e;
                    case 5:
                        return w(t), null === e && M(t), r = t.type, l = t.memoizedProps, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, T() || l !== o || ((l = 1 & t.mode && _(r, o)) && (t.expirationTime = 1073741823), l && 1073741823 === n) ? (l = o.children, b(r, o) ? l = null : a && b(r, a) && (t.effectTag |= 16), h(e, t), 1073741823 !== n && 1 & t.mode && _(r, o) ? (t.expirationTime = 1073741823, t.memoizedProps = o, e = null) : (c(e, t, l), t.memoizedProps = o, e = t.child)) : e = y(e, t), e;
                    case 6:
                        return null === e && M(t), t.memoizedProps = t.pendingProps, null;
                    case 8:
                        t.tag = 7;
                    case 7:
                        return r = t.pendingProps, T() || t.memoizedProps !== r || (r = t.memoizedProps), o = r.children, t.stateNode = null === e ? _i(t, t.stateNode, o, n) : bi(t, e.stateNode, o, n), t.memoizedProps = r, t.stateNode;
                    case 9:
                        return null;
                    case 4:
                        return S(t, t.stateNode.containerInfo), r = t.pendingProps, T() || t.memoizedProps !== r ? (null === e ? t.child = bi(t, null, r, n) : c(e, t, r), t.memoizedProps = r, e = t.child) : e = y(e, t), e;
                    case 14:
                        return c(e, t, n = (n = t.type.render)(t.pendingProps, t.ref)), t.memoizedProps = n, t.child;
                    case 10:
                        return n = t.pendingProps, T() || t.memoizedProps !== n ? (c(e, t, n), t.memoizedProps = n, e = t.child) : e = y(e, t), e;
                    case 11:
                        return n = t.pendingProps.children, T() || null !== n && t.memoizedProps !== n ? (c(e, t, n), t.memoizedProps = n, e = t.child) : e = y(e, t), e;
                    case 13:
                        return function (e, t, n) {
                            var i = t.type._context, o = t.pendingProps, r = t.memoizedProps;
                            if (!T() && r === o) return t.stateNode = 0, x(t), y(e, t);
                            var a = o.value;
                            if (t.memoizedProps = o, null === r) a = 1073741823; else if (r.value === o.value) {
                                if (r.children === o.children) return t.stateNode = 0, x(t), y(e, t);
                                a = 0
                            } else {
                                var s = r.value;
                                if (s === a && (0 !== s || 1 / s == 1 / a) || s != s && a != a) {
                                    if (r.children === o.children) return t.stateNode = 0, x(t), y(e, t);
                                    a = 0
                                } else if (a = "function" == typeof i._calculateChangedBits ? i._calculateChangedBits(s, a) : 1073741823, 0 == (a |= 0)) {
                                    if (r.children === o.children) return t.stateNode = 0, x(t), y(e, t)
                                } else g(t, i, a, n)
                            }
                            return t.stateNode = a, x(t), c(e, t, o.children), t.child
                        }(e, t, n);
                    case 12:
                        e:{
                            o = t.type, a = t.pendingProps, l = t.memoizedProps, r = o._currentValue;
                            var u = o._changedBits;
                            if (T() || 0 !== u || l !== a) {
                                t.memoizedProps = a;
                                var d = a.unstable_observedBits;
                                if (void 0 !== d && null !== d || (d = 1073741823), t.stateNode = d, 0 != (u & d)) g(t, o, u, n); else if (l === a) {
                                    e = y(e, t);
                                    break e
                                }
                                c(e, t, n = (n = a.children)(r)), e = t.child
                            } else e = y(e, t)
                        }
                        return e;
                    default:
                        p("156")
                }
            }
        }
    }

    function Si(e, t) {
        var n = t.source;
        null === t.stack && dt(n), null !== n && ut(n), t = t.value, null !== e && 2 === e.tag && ut(e);
        try {
            t && t.suppressReactErrorLogging || console.error(t)
        } catch (e) {
            e && e.suppressReactErrorLogging || console.error(e)
        }
    }

    var xi = {};

    function Ei(e) {
        function t() {
            if (null !== ee) for (var e = ee.return; null !== e;) j(e), e = e.return;
            te = null, ne = 0, ee = null, re = !1
        }

        function n(e) {
            return null !== ae && ae.has(e)
        }

        function i(e) {
            for (; ;) {
                var t = e.alternate, n = e.return, i = e.sibling;
                if (0 == (512 & e.effectTag)) {
                    t = I(t, e, ne);
                    var o = e;
                    if (1073741823 === ne || 1073741823 !== o.expirationTime) {
                        e:switch (o.tag) {
                            case 3:
                            case 2:
                                var r = o.updateQueue;
                                r = null === r ? 0 : r.expirationTime;
                                break e;
                            default:
                                r = 0
                        }
                        for (var a = o.child; null !== a;) 0 !== a.expirationTime && (0 === r || r > a.expirationTime) && (r = a.expirationTime), a = a.sibling;
                        o.expirationTime = r
                    }
                    if (null !== t) return t;
                    if (null !== n && 0 == (512 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)), null !== i) return i;
                    if (null === n) {
                        re = !0;
                        break
                    }
                    e = n
                } else {
                    if (null !== (e = D(e))) return e.effectTag &= 2559, e;
                    if (null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 512), null !== i) return i;
                    if (null === n) break;
                    e = n
                }
            }
            return null
        }

        function o(e) {
            var t = O(e.alternate, e, ne);
            return null === t && (t = i(e)), Ke.current = null, t
        }

        function r(e, n, r) {
            G && p("243"), G = !0, n === ne && e === te && null !== ee || (t(), ne = n, ee = Kn((te = e).current, null, ne), e.pendingCommitExpirationTime = 0);
            for (var a = !1; ;) {
                try {
                    if (r) for (; null !== ee && !E();) ee = o(ee); else for (; null !== ee;) ee = o(ee)
                } catch (e) {
                    if (null === ee) {
                        a = !0, k(e);
                        break
                    }
                    var s = (r = ee).return;
                    if (null === s) {
                        a = !0, k(e);
                        break
                    }
                    M(s, r, e), ee = i(r)
                }
                break
            }
            return G = !1, a || null !== ee ? null : re ? (e.pendingCommitExpirationTime = n, e.current.alternate) : void p("262")
        }

        function a(e, t, n, i) {
            di(t, {
                expirationTime: i,
                partialState: null,
                callback: null,
                isReplace: !1,
                isForced: !1,
                capturedValue: e = {value: n, source: e, stack: dt(e)},
                next: null
            }), u(t, i)
        }

        function l(e, t) {
            e:{
                G && !oe && p("263");
                for (var i = e.return; null !== i;) {
                    switch (i.tag) {
                        case 2:
                            var o = i.stateNode;
                            if ("function" == typeof i.type.getDerivedStateFromCatch || "function" == typeof o.componentDidCatch && !n(o)) {
                                a(e, i, t, 1), e = void 0;
                                break e
                            }
                            break;
                        case 3:
                            a(e, i, t, 1), e = void 0;
                            break e
                    }
                    i = i.return
                }
                3 === e.tag && a(e, e, t, 1), e = void 0
            }
            return e
        }

        function c(e) {
            return e = 0 !== Q ? Q : G ? oe ? 1 : ne : 1 & e.mode ? we ? 10 * (1 + ((d() + 15) / 10 | 0)) : 25 * (1 + ((d() + 500) / 25 | 0)) : 1, we && (0 === he || e > he) && (he = e), e
        }

        function u(e, n) {
            e:{
                for (; null !== e;) {
                    if ((0 === e.expirationTime || e.expirationTime > n) && (e.expirationTime = n), null !== e.alternate && (0 === e.alternate.expirationTime || e.alternate.expirationTime > n) && (e.alternate.expirationTime = n), null === e.return) {
                        if (3 !== e.tag) {
                            n = void 0;
                            break e
                        }
                        var i = e.stateNode;
                        !G && 0 !== ne && n < ne && t(), G && !oe && te === i || v(i, n), Ee > xe && p("185")
                    }
                    e = e.return
                }
                n = void 0
            }
            return n
        }

        function d() {
            return K = Y() - J, 2 + (K / 10 | 0)
        }

        function h(e, t, n, i, o) {
            var r = Q;
            Q = 1;
            try {
                return e(t, n, i, o)
            } finally {
                Q = r
            }
        }

        function m(e) {
            if (0 !== ce) {
                if (e > ce) return;
                H(ue)
            }
            var t = Y() - J;
            ce = e, ue = X(y, {timeout: 10 * (e - 2) - t})
        }

        function v(e, t) {
            if (null === e.nextScheduledRoot) e.remainingExpirationTime = t, null === le ? (se = le = e, e.nextScheduledRoot = e) : (le = le.nextScheduledRoot = e).nextScheduledRoot = se; else {
                var n = e.remainingExpirationTime;
                (0 === n || t < n) && (e.remainingExpirationTime = t)
            }
            de || (be ? _e && (fe = e, pe = 1, S(e, 1, !1)) : 1 === t ? b() : m(t))
        }

        function g() {
            var e = 0, t = null;
            if (null !== le) for (var n = le, i = se; null !== i;) {
                var o = i.remainingExpirationTime;
                if (0 === o) {
                    if ((null === n || null === le) && p("244"), i === i.nextScheduledRoot) {
                        se = le = i.nextScheduledRoot = null;
                        break
                    }
                    if (i === se) se = o = i.nextScheduledRoot, le.nextScheduledRoot = o, i.nextScheduledRoot = null; else {
                        if (i === le) {
                            (le = n).nextScheduledRoot = se, i.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = i.nextScheduledRoot, i.nextScheduledRoot = null
                    }
                    i = n.nextScheduledRoot
                } else {
                    if ((0 === e || o < e) && (e = o, t = i), i === le) break;
                    n = i, i = i.nextScheduledRoot
                }
            }
            null !== (n = fe) && n === t && 1 === e ? Ee++ : Ee = 0, fe = t, pe = e
        }

        function y(e) {
            _(0, !0, e)
        }

        function b() {
            _(1, !1, null)
        }

        function _(e, t, n) {
            if (ye = n, g(), t) for (; null !== fe && 0 !== pe && (0 === e || e >= pe) && (!me || d() >= pe);) S(fe, pe, !me), g(); else for (; null !== fe && 0 !== pe && (0 === e || e >= pe);) S(fe, pe, !1), g();
            null !== ye && (ce = 0, ue = -1), 0 !== pe && m(pe), ye = null, me = !1, w()
        }

        function w() {
            if (Ee = 0, null !== Se) {
                var e = Se;
                Se = null;
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    try {
                        n._onComplete()
                    } catch (e) {
                        ve || (ve = !0, ge = e)
                    }
                }
            }
            if (ve) throw e = ge, ge = null, ve = !1, e
        }

        function S(e, t, n) {
            de && p("245"), de = !0, n ? null !== (n = e.finishedWork) ? x(e, n, t) : (e.finishedWork = null, null !== (n = r(e, t, !0)) && (E() ? e.finishedWork = n : x(e, n, t))) : null !== (n = e.finishedWork) ? x(e, n, t) : (e.finishedWork = null, null !== (n = r(e, t, !1)) && x(e, n, t)), de = !1
        }

        function x(e, t, n) {
            var i = e.firstBatch;
            if (null !== i && i._expirationTime <= n && (null === Se ? Se = [i] : Se.push(i), i._defer)) return e.finishedWork = t, void (e.remainingExpirationTime = 0);
            e.finishedWork = null, oe = G = !0, (n = t.stateNode).current === t && p("177"), 0 === (i = n.pendingCommitExpirationTime) && p("261"), n.pendingCommitExpirationTime = 0;
            var o = d();
            if (Ke.current = null, 1 < t.effectTag) if (null !== t.lastEffect) {
                t.lastEffect.nextEffect = t;
                var r = t.firstEffect
            } else r = t; else r = t.firstEffect;
            for (q(n.containerInfo), ie = r; null !== ie;) {
                var a = !1, s = void 0;
                try {
                    for (; null !== ie;) 2048 & ie.effectTag && L(ie.alternate, ie), ie = ie.nextEffect
                } catch (e) {
                    a = !0, s = e
                }
                a && (null === ie && p("178"), l(ie, s), null !== ie && (ie = ie.nextEffect))
            }
            for (ie = r; null !== ie;) {
                a = !1, s = void 0;
                try {
                    for (; null !== ie;) {
                        var c = ie.effectTag;
                        if (16 & c && z(ie), 128 & c) {
                            var u = ie.alternate;
                            null !== u && U(u)
                        }
                        switch (14 & c) {
                            case 2:
                                A(ie), ie.effectTag &= -3;
                                break;
                            case 6:
                                A(ie), ie.effectTag &= -3, $(ie.alternate, ie);
                                break;
                            case 4:
                                $(ie.alternate, ie);
                                break;
                            case 8:
                                R(ie)
                        }
                        ie = ie.nextEffect
                    }
                } catch (e) {
                    a = !0, s = e
                }
                a && (null === ie && p("178"), l(ie, s), null !== ie && (ie = ie.nextEffect))
            }
            for (V(n.containerInfo), n.current = t, ie = r; null !== ie;) {
                c = !1, u = void 0;
                try {
                    for (r = n, a = o, s = i; null !== ie;) {
                        var f = ie.effectTag;
                        36 & f && B(r, ie.alternate, ie, a, s), 256 & f && W(ie, k), 128 & f && F(ie);
                        var h = ie.nextEffect;
                        ie.nextEffect = null, ie = h
                    }
                } catch (e) {
                    c = !0, u = e
                }
                c && (null === ie && p("178"), l(ie, u), null !== ie && (ie = ie.nextEffect))
            }
            G = oe = !1, oi(t.stateNode), 0 === (t = n.current.expirationTime) && (ae = null), e.remainingExpirationTime = t
        }

        function E() {
            return !(null === ye || ye.timeRemaining() > ke) && (me = !0)
        }

        function k(e) {
            null === fe && p("246"), fe.remainingExpirationTime = 0, ve || (ve = !0, ge = e)
        }

        var T = function () {
            var e = [], t = -1;
            return {
                createCursor: function (e) {
                    return {current: e}
                }, isEmpty: function () {
                    return -1 === t
                }, pop: function (n) {
                    0 > t || (n.current = e[t], e[t] = null, t--)
                }, push: function (n, i) {
                    e[++t] = n.current, n.current = i
                }, checkThatStackIsEmpty: function () {
                }, resetStackAfterFatalErrorInDev: function () {
                }
            }
        }(), C = function (e, t) {
            function n(e) {
                return e === xi && p("174"), e
            }

            var i = e.getChildHostContext, o = e.getRootHostContext;
            e = t.createCursor;
            var r = t.push, a = t.pop, s = e(xi), l = e(xi), c = e(xi);
            return {
                getHostContext: function () {
                    return n(s.current)
                }, getRootHostContainer: function () {
                    return n(c.current)
                }, popHostContainer: function (e) {
                    a(s, e), a(l, e), a(c, e)
                }, popHostContext: function (e) {
                    l.current === e && (a(s, e), a(l, e))
                }, pushHostContainer: function (e, t) {
                    r(c, t, e), r(l, e, e), r(s, xi, e), t = o(t), a(s, e), r(s, t, e)
                }, pushHostContext: function (e) {
                    var t = n(c.current), o = n(s.current);
                    o !== (t = i(o, e.type, t)) && (r(l, e, e), r(s, t, e))
                }
            }
        }(e, T), N = function (e) {
            function t(e, t, n) {
                (e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = n
            }

            function n(e) {
                return 2 === e.tag && null != e.type.childContextTypes
            }

            function i(e, t) {
                var n = e.stateNode, i = e.type.childContextTypes;
                if ("function" != typeof n.getChildContext) return t;
                for (var o in n = n.getChildContext()) o in i || p("108", ut(e) || "Unknown", o);
                return s({}, t, n)
            }

            var o = e.createCursor, r = e.push, a = e.pop, l = o(f), c = o(!1), u = f;
            return {
                getUnmaskedContext: function (e) {
                    return n(e) ? u : l.current
                }, cacheContext: t, getMaskedContext: function (e, n) {
                    var i = e.type.contextTypes;
                    if (!i) return f;
                    var o = e.stateNode;
                    if (o && o.__reactInternalMemoizedUnmaskedChildContext === n) return o.__reactInternalMemoizedMaskedChildContext;
                    var r, a = {};
                    for (r in i) a[r] = n[r];
                    return o && t(e, n, a), a
                }, hasContextChanged: function () {
                    return c.current
                }, isContextConsumer: function (e) {
                    return 2 === e.tag && null != e.type.contextTypes
                }, isContextProvider: n, popContextProvider: function (e) {
                    n(e) && (a(c, e), a(l, e))
                }, popTopLevelContextObject: function (e) {
                    a(c, e), a(l, e)
                }, pushTopLevelContextObject: function (e, t, n) {
                    null != l.cursor && p("168"), r(l, t, e), r(c, n, e)
                }, processChildContext: i, pushContextProvider: function (e) {
                    if (!n(e)) return !1;
                    var t = e.stateNode;
                    return t = t && t.__reactInternalMemoizedMergedChildContext || f, u = l.current, r(l, t, e), r(c, c.current, e), !0
                }, invalidateContextProvider: function (e, t) {
                    var n = e.stateNode;
                    if (n || p("169"), t) {
                        var o = i(e, u);
                        n.__reactInternalMemoizedMergedChildContext = o, a(c, e), a(l, e), r(l, o, e)
                    } else a(c, e);
                    r(c, t, e)
                }, findCurrentUnmaskedContext: function (e) {
                    for ((2 !== Kt(e) || 2 !== e.tag) && p("170"); 3 !== e.tag;) {
                        if (n(e)) return e.stateNode.__reactInternalMemoizedMergedChildContext;
                        (e = e.return) || p("171")
                    }
                    return e.stateNode.context
                }
            }
        }(T);
        T = function (e) {
            var t = e.createCursor, n = e.push, i = e.pop, o = t(null), r = t(null), a = t(0);
            return {
                pushProvider: function (e) {
                    var t = e.type._context;
                    n(a, t._changedBits, e), n(r, t._currentValue, e), n(o, e, e), t._currentValue = e.pendingProps.value, t._changedBits = e.stateNode
                }, popProvider: function (e) {
                    var t = a.current, n = r.current;
                    i(o, e), i(r, e), i(a, e), (e = e.type._context)._currentValue = n, e._changedBits = t
                }
            }
        }(T);
        var P = function (e) {
                function t(e, t) {
                    var n = new Jn(5, null, null, 0);
                    n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function n(e, t) {
                    switch (e.tag) {
                        case 5:
                            return null !== (t = r(t, e.type, e.pendingProps)) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = a(t, e.pendingProps)) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function i(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag;) e = e.return;
                    d = e
                }

                var o = e.shouldSetTextContent;
                if (!(e = e.hydration)) return {
                    enterHydrationState: function () {
                        return !1
                    }, resetHydrationState: function () {
                    }, tryToClaimNextHydratableInstance: function () {
                    }, prepareToHydrateHostInstance: function () {
                        p("175")
                    }, prepareToHydrateHostTextInstance: function () {
                        p("176")
                    }, popHydrationState: function () {
                        return !1
                    }
                };
                var r = e.canHydrateInstance, a = e.canHydrateTextInstance, s = e.getNextHydratableSibling,
                    l = e.getFirstHydratableChild, c = e.hydrateInstance, u = e.hydrateTextInstance, d = null, f = null,
                    h = !1;
                return {
                    enterHydrationState: function (e) {
                        return f = l(e.stateNode.containerInfo), d = e, h = !0
                    }, resetHydrationState: function () {
                        f = d = null, h = !1
                    }, tryToClaimNextHydratableInstance: function (e) {
                        if (h) {
                            var i = f;
                            if (i) {
                                if (!n(e, i)) {
                                    if (!(i = s(i)) || !n(e, i)) return e.effectTag |= 2, h = !1, void (d = e);
                                    t(d, f)
                                }
                                d = e, f = l(i)
                            } else e.effectTag |= 2, h = !1, d = e
                        }
                    }, prepareToHydrateHostInstance: function (e, t, n) {
                        return t = c(e.stateNode, e.type, e.memoizedProps, t, n, e), e.updateQueue = t, null !== t
                    }, prepareToHydrateHostTextInstance: function (e) {
                        return u(e.stateNode, e.memoizedProps, e)
                    }, popHydrationState: function (e) {
                        if (e !== d) return !1;
                        if (!h) return i(e), h = !0, !1;
                        var n = e.type;
                        if (5 !== e.tag || "head" !== n && "body" !== n && !o(n, e.memoizedProps)) for (n = f; n;) t(e, n), n = s(n);
                        return i(e), f = d ? s(e.stateNode) : null, !0
                    }
                }
            }(e), O = wi(e, C, N, T, P, u, c).beginWork, I = function (e, t, n, i, o) {
                function r(e) {
                    e.effectTag |= 4
                }

                var a = e.createInstance, s = e.createTextInstance, l = e.appendInitialChild, c = e.finalizeInitialChildren,
                    u = e.prepareUpdate, d = e.persistence, f = t.getRootHostContainer, h = t.popHostContext,
                    m = t.getHostContext, v = t.popHostContainer, g = n.popContextProvider, y = n.popTopLevelContextObject,
                    b = i.popProvider, _ = o.prepareToHydrateHostInstance, w = o.prepareToHydrateHostTextInstance,
                    S = o.popHydrationState, x = void 0, E = void 0, k = void 0;
                return e.mutation ? (x = function () {
                }, E = function (e, t, n) {
                    (t.updateQueue = n) && r(t)
                }, k = function (e, t, n, i) {
                    n !== i && r(t)
                }) : p(d ? "235" : "236"), {
                    completeWork: function (e, t, n) {
                        var i = t.pendingProps;
                        switch (t.tag) {
                            case 1:
                                return null;
                            case 2:
                                return g(t), e = t.stateNode, null !== (i = t.updateQueue) && null !== i.capturedValues && (t.effectTag &= -65, "function" == typeof e.componentDidCatch ? t.effectTag |= 256 : i.capturedValues = null), null;
                            case 3:
                                return v(t), y(t), (i = t.stateNode).pendingContext && (i.context = i.pendingContext, i.pendingContext = null), null !== e && null !== e.child || (S(t), t.effectTag &= -3), x(t), null !== (e = t.updateQueue) && null !== e.capturedValues && (t.effectTag |= 256), null;
                            case 5:
                                h(t), n = f();
                                var o = t.type;
                                if (null !== e && null != t.stateNode) {
                                    var d = e.memoizedProps, T = t.stateNode, C = m();
                                    T = u(T, o, d, i, n, C), E(e, t, T, o, d, i, n, C), e.ref !== t.ref && (t.effectTag |= 128)
                                } else {
                                    if (!i) return null === t.stateNode && p("166"), null;
                                    if (e = m(), S(t)) _(t, n, e) && r(t); else {
                                        d = a(o, i, n, e, t);
                                        e:for (C = t.child; null !== C;) {
                                            if (5 === C.tag || 6 === C.tag) l(d, C.stateNode); else if (4 !== C.tag && null !== C.child) {
                                                C.child.return = C, C = C.child;
                                                continue
                                            }
                                            if (C === t) break;
                                            for (; null === C.sibling;) {
                                                if (null === C.return || C.return === t) break e;
                                                C = C.return
                                            }
                                            C.sibling.return = C.return, C = C.sibling
                                        }
                                        c(d, o, i, n, e) && r(t), t.stateNode = d
                                    }
                                    null !== t.ref && (t.effectTag |= 128)
                                }
                                return null;
                            case 6:
                                if (e && null != t.stateNode) k(e, t, e.memoizedProps, i); else {
                                    if ("string" != typeof i) return null === t.stateNode && p("166"), null;
                                    e = f(), n = m(), S(t) ? w(t) && r(t) : t.stateNode = s(i, e, n, t)
                                }
                                return null;
                            case 7:
                                (i = t.memoizedProps) || p("165"), t.tag = 8, o = [];
                                e:for ((d = t.stateNode) && (d.return = t); null !== d;) {
                                    if (5 === d.tag || 6 === d.tag || 4 === d.tag) p("247"); else if (9 === d.tag) o.push(d.pendingProps.value); else if (null !== d.child) {
                                        d.child.return = d, d = d.child;
                                        continue
                                    }
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === t) break e;
                                        d = d.return
                                    }
                                    d.sibling.return = d.return, d = d.sibling
                                }
                                return i = (d = i.handler)(i.props, o), t.child = bi(t, null !== e ? e.child : null, i, n), t.child;
                            case 8:
                                return t.tag = 7, null;
                            case 9:
                            case 14:
                            case 10:
                            case 11:
                                return null;
                            case 4:
                                return v(t), x(t), null;
                            case 13:
                                return b(t), null;
                            case 12:
                                return null;
                            case 0:
                                p("167");
                            default:
                                p("156")
                        }
                    }
                }
            }(e, C, N, T, P).completeWork, M = (C = function (e, t, n, i, o) {
                var r = e.popHostContainer, a = e.popHostContext, s = t.popContextProvider, l = t.popTopLevelContextObject,
                    c = n.popProvider;
                return {
                    throwException: function (e, t, n) {
                        t.effectTag |= 512, t.firstEffect = t.lastEffect = null, t = {value: n, source: t, stack: dt(t)};
                        do {
                            switch (e.tag) {
                                case 3:
                                    return ui(e), e.updateQueue.capturedValues = [t], void (e.effectTag |= 1024);
                                case 2:
                                    if (n = e.stateNode, 0 == (64 & e.effectTag) && null !== n && "function" == typeof n.componentDidCatch && !o(n)) {
                                        ui(e);
                                        var i = (n = e.updateQueue).capturedValues;
                                        return null === i ? n.capturedValues = [t] : i.push(t), void (e.effectTag |= 1024)
                                    }
                            }
                            e = e.return
                        } while (null !== e)
                    }, unwindWork: function (e) {
                        switch (e.tag) {
                            case 2:
                                s(e);
                                var t = e.effectTag;
                                return 1024 & t ? (e.effectTag = -1025 & t | 64, e) : null;
                            case 3:
                                return r(e), l(e), 1024 & (t = e.effectTag) ? (e.effectTag = -1025 & t | 64, e) : null;
                            case 5:
                                return a(e), null;
                            case 4:
                                return r(e), null;
                            case 13:
                                return c(e), null;
                            default:
                                return null
                        }
                    }, unwindInterruptedWork: function (e) {
                        switch (e.tag) {
                            case 2:
                                s(e);
                                break;
                            case 3:
                                r(e), l(e);
                                break;
                            case 5:
                                a(e);
                                break;
                            case 4:
                                r(e);
                                break;
                            case 13:
                                c(e)
                        }
                    }
                }
            }(C, N, T, 0, n)).throwException, D = C.unwindWork, j = C.unwindInterruptedWork,
            L = (C = function (e, t, n, i, o) {
                function r(e) {
                    var n = e.ref;
                    if (null !== n) if ("function" == typeof n) try {
                        n(null)
                    } catch (n) {
                        t(e, n)
                    } else n.current = null
                }

                function a(e) {
                    switch (ri(e), e.tag) {
                        case 2:
                            r(e);
                            var n = e.stateNode;
                            if ("function" == typeof n.componentWillUnmount) try {
                                n.props = e.memoizedProps, n.state = e.memoizedState, n.componentWillUnmount()
                            } catch (n) {
                                t(e, n)
                            }
                            break;
                        case 5:
                            r(e);
                            break;
                        case 7:
                            s(e.stateNode);
                            break;
                        case 4:
                            d && c(e)
                    }
                }

                function s(e) {
                    for (var t = e; ;) if (a(t), null === t.child || d && 4 === t.tag) {
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    } else t.child.return = t, t = t.child
                }

                function l(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function c(e) {
                    for (var t = e, n = !1, i = void 0, o = void 0; ;) {
                        if (!n) {
                            n = t.return;
                            e:for (; ;) {
                                switch (null === n && p("160"), n.tag) {
                                    case 5:
                                        i = n.stateNode, o = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        i = n.stateNode.containerInfo, o = !0;
                                        break e
                                }
                                n = n.return
                            }
                            n = !0
                        }
                        if (5 === t.tag || 6 === t.tag) s(t), o ? S(i, t.stateNode) : w(i, t.stateNode); else if (4 === t.tag ? i = t.stateNode.containerInfo : a(t), null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return;
                            4 === (t = t.return).tag && (n = !1)
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }

                var u = e.getPublicInstance, d = e.mutation;
                e = e.persistence, d || p(e ? "235" : "236");
                var f = d.commitMount, h = d.commitUpdate, m = d.resetTextContent, v = d.commitTextUpdate,
                    g = d.appendChild, y = d.appendChildToContainer, b = d.insertBefore, _ = d.insertInContainerBefore,
                    w = d.removeChild, S = d.removeChildFromContainer;
                return {
                    commitBeforeMutationLifeCycles: function (e, t) {
                        switch (t.tag) {
                            case 2:
                                if (2048 & t.effectTag && null !== e) {
                                    var n = e.memoizedProps, i = e.memoizedState;
                                    (e = t.stateNode).props = t.memoizedProps, e.state = t.memoizedState, t = e.getSnapshotBeforeUpdate(n, i), e.__reactInternalSnapshotBeforeUpdate = t
                                }
                                break;
                            case 3:
                            case 5:
                            case 6:
                            case 4:
                                break;
                            default:
                                p("163")
                        }
                    }, commitResetTextContent: function (e) {
                        m(e.stateNode)
                    }, commitPlacement: function (e) {
                        e:{
                            for (var t = e.return; null !== t;) {
                                if (l(t)) {
                                    var n = t;
                                    break e
                                }
                                t = t.return
                            }
                            p("160"), n = void 0
                        }
                        var i = t = void 0;
                        switch (n.tag) {
                            case 5:
                                t = n.stateNode, i = !1;
                                break;
                            case 3:
                            case 4:
                                t = n.stateNode.containerInfo, i = !0;
                                break;
                            default:
                                p("161")
                        }
                        16 & n.effectTag && (m(t), n.effectTag &= -17);
                        e:t:for (n = e; ;) {
                            for (; null === n.sibling;) {
                                if (null === n.return || l(n.return)) {
                                    n = null;
                                    break e
                                }
                                n = n.return
                            }
                            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag;) {
                                if (2 & n.effectTag) continue t;
                                if (null === n.child || 4 === n.tag) continue t;
                                n.child.return = n, n = n.child
                            }
                            if (!(2 & n.effectTag)) {
                                n = n.stateNode;
                                break e
                            }
                        }
                        for (var o = e; ;) {
                            if (5 === o.tag || 6 === o.tag) n ? i ? _(t, o.stateNode, n) : b(t, o.stateNode, n) : i ? y(t, o.stateNode) : g(t, o.stateNode); else if (4 !== o.tag && null !== o.child) {
                                o.child.return = o, o = o.child;
                                continue
                            }
                            if (o === e) break;
                            for (; null === o.sibling;) {
                                if (null === o.return || o.return === e) return;
                                o = o.return
                            }
                            o.sibling.return = o.return, o = o.sibling
                        }
                    }, commitDeletion: function (e) {
                        c(e), e.return = null, e.child = null, e.alternate && (e.alternate.child = null, e.alternate.return = null)
                    }, commitWork: function (e, t) {
                        switch (t.tag) {
                            case 2:
                                break;
                            case 5:
                                var n = t.stateNode;
                                if (null != n) {
                                    var i = t.memoizedProps;
                                    e = null !== e ? e.memoizedProps : i;
                                    var o = t.type, r = t.updateQueue;
                                    t.updateQueue = null, null !== r && h(n, r, o, e, i, t)
                                }
                                break;
                            case 6:
                                null === t.stateNode && p("162"), n = t.memoizedProps, v(t.stateNode, null !== e ? e.memoizedProps : n, n);
                                break;
                            case 3:
                                break;
                            default:
                                p("163")
                        }
                    }, commitLifeCycles: function (e, t, n) {
                        switch (n.tag) {
                            case 2:
                                if (e = n.stateNode, 4 & n.effectTag) if (null === t) e.props = n.memoizedProps, e.state = n.memoizedState, e.componentDidMount(); else {
                                    var i = t.memoizedProps;
                                    t = t.memoizedState, e.props = n.memoizedProps, e.state = n.memoizedState, e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                                }
                                null !== (n = n.updateQueue) && hi(n, e);
                                break;
                            case 3:
                                if (null !== (t = n.updateQueue)) {
                                    if (e = null, null !== n.child) switch (n.child.tag) {
                                        case 5:
                                            e = u(n.child.stateNode);
                                            break;
                                        case 2:
                                            e = n.child.stateNode
                                    }
                                    hi(t, e)
                                }
                                break;
                            case 5:
                                e = n.stateNode, null === t && 4 & n.effectTag && f(e, n.type, n.memoizedProps, n);
                                break;
                            case 6:
                            case 4:
                                break;
                            default:
                                p("163")
                        }
                    }, commitErrorLogging: function (e, t) {
                        switch (e.tag) {
                            case 2:
                                var n = e.type;
                                t = e.stateNode;
                                var i = e.updateQueue;
                                (null === i || null === i.capturedValues) && p("264");
                                var r = i.capturedValues;
                                for (i.capturedValues = null, "function" != typeof n.getDerivedStateFromCatch && o(t), t.props = e.memoizedProps, t.state = e.memoizedState, n = 0; n < r.length; n++) {
                                    var a = (i = r[n]).value, s = i.stack;
                                    Si(e, i), t.componentDidCatch(a, {componentStack: null !== s ? s : ""})
                                }
                                break;
                            case 3:
                                for ((null === (n = e.updateQueue) || null === n.capturedValues) && p("264"), r = n.capturedValues, n.capturedValues = null, n = 0; n < r.length; n++) Si(e, i = r[n]), t(i.value);
                                break;
                            default:
                                p("265")
                        }
                    }, commitAttachRef: function (e) {
                        var t = e.ref;
                        if (null !== t) {
                            var n = e.stateNode;
                            switch (e.tag) {
                                case 5:
                                    e = u(n);
                                    break;
                                default:
                                    e = n
                            }
                            "function" == typeof t ? t(e) : t.current = e
                        }
                    }, commitDetachRef: function (e) {
                        null !== (e = e.ref) && ("function" == typeof e ? e(null) : e.current = null)
                    }
                }
            }(e, l, 0, 0, function (e) {
                null === ae ? ae = new Set([e]) : ae.add(e)
            })).commitBeforeMutationLifeCycles, z = C.commitResetTextContent, A = C.commitPlacement,
            R = C.commitDeletion, $ = C.commitWork, B = C.commitLifeCycles, W = C.commitErrorLogging,
            F = C.commitAttachRef, U = C.commitDetachRef, Y = e.now, X = e.scheduleDeferredCallback,
            H = e.cancelDeferredCallback, q = e.prepareForCommit, V = e.resetAfterCommit, J = Y(), K = J, Z = 0, Q = 0,
            G = !1, ee = null, te = null, ne = 0, ie = null, oe = !1, re = !1, ae = null, se = null, le = null, ce = 0,
            ue = -1, de = !1, fe = null, pe = 0, he = 0, me = !1, ve = !1, ge = null, ye = null, be = !1, _e = !1,
            we = !1, Se = null, xe = 1e3, Ee = 0, ke = 1;
        return {
            recalculateCurrentTime: d,
            computeExpirationForFiber: c,
            scheduleWork: u,
            requestWork: v,
            flushRoot: function (e, t) {
                de && p("253"), fe = e, pe = t, S(e, t, !1), b(), w()
            },
            batchedUpdates: function (e, t) {
                var n = be;
                be = !0;
                try {
                    return e(t)
                } finally {
                    (be = n) || de || b()
                }
            },
            unbatchedUpdates: function (e, t) {
                if (be && !_e) {
                    _e = !0;
                    try {
                        return e(t)
                    } finally {
                        _e = !1
                    }
                }
                return e(t)
            },
            flushSync: function (e, t) {
                de && p("187");
                var n = be;
                be = !0;
                try {
                    return h(e, t)
                } finally {
                    be = n, b()
                }
            },
            flushControlled: function (e) {
                var t = be;
                be = !0;
                try {
                    h(e)
                } finally {
                    (be = t) || de || _(1, !1, null)
                }
            },
            deferredUpdates: function (e) {
                var t = Q;
                Q = 25 * (1 + ((d() + 500) / 25 | 0));
                try {
                    return e()
                } finally {
                    Q = t
                }
            },
            syncUpdates: h,
            interactiveUpdates: function (e, t, n) {
                if (we) return e(t, n);
                be || de || 0 === he || (_(he, !1, null), he = 0);
                var i = we, o = be;
                be = we = !0;
                try {
                    return e(t, n)
                } finally {
                    we = i, (be = o) || de || b()
                }
            },
            flushInteractiveUpdates: function () {
                de || 0 === he || (_(he, !1, null), he = 0)
            },
            computeUniqueAsyncExpiration: function () {
                var e = 25 * (1 + ((d() + 500) / 25 | 0));
                return e <= Z && (e = Z + 1), Z = e
            },
            legacyContext: N
        }
    }

    function ki(e) {
        function t(e, t, n, i, o, a) {
            if (i = t.current, n) {
                n = n._reactInternalFiber;
                var s = l(n);
                n = c(n) ? u(n, s) : s
            } else n = f;
            return null === t.context ? t.context = n : t.pendingContext = n, di(i, {
                expirationTime: o,
                partialState: {element: e},
                callback: void 0 === (t = a) ? null : t,
                isReplace: !1,
                isForced: !1,
                capturedValue: null,
                next: null
            }), r(i, o), o
        }

        var n = e.getPublicInstance, i = (e = Ei(e)).recalculateCurrentTime, o = e.computeExpirationForFiber,
            r = e.scheduleWork, a = e.legacyContext, l = a.findCurrentUnmaskedContext, c = a.isContextProvider,
            u = a.processChildContext;
        return {
            createContainer: function (e, t, n) {
                return e = {
                    current: t = new Jn(3, null, null, t ? 3 : 0),
                    containerInfo: e,
                    pendingChildren: null,
                    pendingCommitExpirationTime: 0,
                    finishedWork: null,
                    context: null,
                    pendingContext: null,
                    hydrate: n,
                    remainingExpirationTime: 0,
                    firstBatch: null,
                    nextScheduledRoot: null
                }, t.stateNode = e
            },
            updateContainer: function (e, n, r, a) {
                var s = n.current;
                return t(e, n, r, i(), s = o(s), a)
            },
            updateContainerAtExpirationTime: function (e, n, o, r, a) {
                return t(e, n, o, i(), r, a)
            },
            flushRoot: e.flushRoot,
            requestWork: e.requestWork,
            computeUniqueAsyncExpiration: e.computeUniqueAsyncExpiration,
            batchedUpdates: e.batchedUpdates,
            unbatchedUpdates: e.unbatchedUpdates,
            deferredUpdates: e.deferredUpdates,
            syncUpdates: e.syncUpdates,
            interactiveUpdates: e.interactiveUpdates,
            flushInteractiveUpdates: e.flushInteractiveUpdates,
            flushControlled: e.flushControlled,
            flushSync: e.flushSync,
            getPublicRootInstance: function (e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                        return n(e.child.stateNode);
                    default:
                        return e.child.stateNode
                }
            },
            findHostInstance: function (e) {
                var t = e._reactInternalFiber;
                return void 0 === t && ("function" == typeof e.render ? p("188") : p("268", Object.keys(e))), null === (e = en(t)) ? null : e.stateNode
            },
            findHostInstanceWithNoPortals: function (e) {
                return null === (e = function (e) {
                    if (!(e = Gt(e))) return null;
                    for (var t = e; ;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child && 4 !== t.tag) t.child.return = t, t = t.child; else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }(e)) ? null : e.stateNode
            },
            injectIntoDevTools: function (e) {
                var t = e.findFiberByHostInstance;
                return function (e) {
                    if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber) return !0;
                    try {
                        var n = t.inject(e);
                        ti = ii(function (e) {
                            return t.onCommitFiberRoot(n, e)
                        }), ni = ii(function (e) {
                            return t.onCommitFiberUnmount(n, e)
                        })
                    } catch (e) {
                    }
                    return !0
                }(s({}, e, {
                    findHostInstanceByFiber: function (e) {
                        return null === (e = en(e)) ? null : e.stateNode
                    }, findFiberByHostInstance: function (e) {
                        return t ? t(e) : null
                    }
                }))
            }
        }
    }

    var Ti = Object.freeze({default: ki}), Ci = Ti && ki || Ti, Ni = Ci.default ? Ci.default : Ci;
    var Pi = "object" === ("undefined" == typeof performance ? "undefined" : i(performance)) && "function" == typeof performance.now,
        Oi = void 0;
    Oi = Pi ? function () {
        return performance.now()
    } : function () {
        return Date.now()
    };
    var Ii = void 0, Mi = void 0;
    if (a.canUseDOM) if ("function" != typeof requestIdleCallback || "function" != typeof cancelIdleCallback) {
        var Di = null, ji = !1, Li = -1, zi = !1, Ai = 0, Ri = 33, $i = 33, Bi = void 0;
        Bi = Pi ? {
            didTimeout: !1, timeRemaining: function () {
                var e = Ai - performance.now();
                return 0 < e ? e : 0
            }
        } : {
            didTimeout: !1, timeRemaining: function () {
                var e = Ai - Date.now();
                return 0 < e ? e : 0
            }
        };
        var Wi = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener("message", function (e) {
            if (e.source === window && e.data === Wi) {
                if (ji = !1, e = Oi(), 0 >= Ai - e) {
                    if (!(-1 !== Li && Li <= e)) return void (zi || (zi = !0, requestAnimationFrame(Fi)));
                    Bi.didTimeout = !0
                } else Bi.didTimeout = !1;
                Li = -1, e = Di, Di = null, null !== e && e(Bi)
            }
        }, !1);
        var Fi = function (e) {
            zi = !1;
            var t = e - Ai + $i;
            t < $i && Ri < $i ? (8 > t && (t = 8), $i = t < Ri ? Ri : t) : Ri = t, Ai = e + $i, ji || (ji = !0, window.postMessage(Wi, "*"))
        };
        Ii = function (e, t) {
            return Di = e, null != t && "number" == typeof t.timeout && (Li = Oi() + t.timeout), zi || (zi = !0, requestAnimationFrame(Fi)), 0
        }, Mi = function () {
            Di = null, ji = !1, Li = -1
        }
    } else Ii = window.requestIdleCallback, Mi = window.cancelIdleCallback; else Ii = function (e) {
        return setTimeout(function () {
            e({
                timeRemaining: function () {
                    return 1 / 0
                }, didTimeout: !1
            })
        })
    }, Mi = function (e) {
        clearTimeout(e)
    };

    function Ui(e, t) {
        return e = s({children: void 0}, t), (t = function (e) {
            var t = "";
            return r.Children.forEach(e, function (e) {
                null == e || "string" != typeof e && "number" != typeof e || (t += e)
            }), t
        }(t.children)) && (e.children = t), e
    }

    function Yi(e, t, n, i) {
        if (e = e.options, t) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + n, t = null, o = 0; o < e.length; o++) {
                if (e[o].value === n) return e[o].selected = !0, void (i && (e[o].defaultSelected = !0));
                null !== t || e[o].disabled || (t = e[o])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Xi(e, t) {
        var n = t.value;
        e._wrapperState = {initialValue: null != n ? n : t.defaultValue, wasMultiple: !!t.multiple}
    }

    function Hi(e, t) {
        return null != t.dangerouslySetInnerHTML && p("91"), s({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function qi(e, t) {
        var n = t.value;
        null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && p("92"), Array.isArray(t) && (1 >= t.length || p("93"), t = t[0]), n = "" + t), null == n && (n = "")), e._wrapperState = {initialValue: "" + n}
    }

    function Vi(e, t) {
        var n = t.value;
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue)
    }

    function Ji(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t)
    }

    var Ki = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Zi(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Qi(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Zi(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }

    var Gi, eo = void 0, to = (Gi = function (e, t) {
        if (e.namespaceURI !== Ki.svg || "innerHTML" in e) e.innerHTML = t; else {
            for ((eo = eo || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = eo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return Gi(e, t)
        })
    } : Gi);

    function no(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
    }

    var io = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, oo = ["Webkit", "ms", "Moz", "O"];

    function ro(e, t) {
        for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
            var i = 0 === n.indexOf("--"), o = n, r = t[n];
            o = null == r || "boolean" == typeof r || "" === r ? "" : i || "number" != typeof r || 0 === r || io.hasOwnProperty(o) && io[o] ? ("" + r).trim() : r + "px", "float" === n && (n = "cssFloat"), i ? e.setProperty(n, o) : e[n] = o
        }
    }

    Object.keys(io).forEach(function (e) {
        oo.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), io[t] = io[e]
        })
    });
    var ao = s({menuitem: !0}, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function so(e, t, n) {
        t && (ao[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && p("137", e, n()), null != t.dangerouslySetInnerHTML && (null != t.children && p("60"), "object" === i(t.dangerouslySetInnerHTML) && "__html" in t.dangerouslySetInnerHTML || p("61")), null != t.style && "object" !== i(t.style) && p("62", n()))
    }

    function lo(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var co = l.thatReturns("");

    function uo(e, t) {
        var n = An(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = S[t];
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            n.hasOwnProperty(o) && n[o] || ("topScroll" === o ? xn("topScroll", "scroll", e) : "topFocus" === o || "topBlur" === o ? (xn("topFocus", "focus", e), xn("topBlur", "blur", e), n.topBlur = !0, n.topFocus = !0) : "topCancel" === o ? (He("cancel", !0) && xn("topCancel", "cancel", e), n.topCancel = !0) : "topClose" === o ? (He("close", !0) && xn("topClose", "close", e), n.topClose = !0) : Mn.hasOwnProperty(o) && Sn(o, Mn[o], e), n[o] = !0)
        }
    }

    function fo(e, t, n, i) {
        return n = 9 === n.nodeType ? n : n.ownerDocument, i === Ki.html && (i = Zi(e)), i === Ki.html ? "script" === e ? ((e = n.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : e = "string" == typeof t.is ? n.createElement(e, {is: t.is}) : n.createElement(e) : e = n.createElementNS(i, e), e
    }

    function po(e, t) {
        return (9 === t.nodeType ? t : t.ownerDocument).createTextNode(e)
    }

    function ho(e, t, n, i) {
        var o = lo(t, n);
        switch (t) {
            case"iframe":
            case"object":
                Sn("topLoad", "load", e);
                var r = n;
                break;
            case"video":
            case"audio":
                for (r in Dn) Dn.hasOwnProperty(r) && Sn(r, Dn[r], e);
                r = n;
                break;
            case"source":
                Sn("topError", "error", e), r = n;
                break;
            case"img":
            case"image":
            case"link":
                Sn("topError", "error", e), Sn("topLoad", "load", e), r = n;
                break;
            case"form":
                Sn("topReset", "reset", e), Sn("topSubmit", "submit", e), r = n;
                break;
            case"details":
                Sn("topToggle", "toggle", e), r = n;
                break;
            case"input":
                St(e, n), r = wt(e, n), Sn("topInvalid", "invalid", e), uo(i, "onChange");
                break;
            case"option":
                r = Ui(e, n);
                break;
            case"select":
                Xi(e, n), r = s({}, n, {value: void 0}), Sn("topInvalid", "invalid", e), uo(i, "onChange");
                break;
            case"textarea":
                qi(e, n), r = Hi(e, n), Sn("topInvalid", "invalid", e), uo(i, "onChange");
                break;
            default:
                r = n
        }
        so(t, r, co);
        var a, c = r;
        for (a in c) if (c.hasOwnProperty(a)) {
            var u = c[a];
            "style" === a ? ro(e, u) : "dangerouslySetInnerHTML" === a ? null != (u = u ? u.__html : void 0) && to(e, u) : "children" === a ? "string" == typeof u ? ("textarea" !== t || "" !== u) && no(e, u) : "number" == typeof u && no(e, "" + u) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (w.hasOwnProperty(a) ? null != u && uo(i, a) : null != u && _t(e, a, u, o))
        }
        switch (t) {
            case"input":
                Ve(e), kt(e, n);
                break;
            case"textarea":
                Ve(e), Ji(e);
                break;
            case"option":
                null != n.value && e.setAttribute("value", n.value);
                break;
            case"select":
                e.multiple = !!n.multiple, null != (t = n.value) ? Yi(e, !!n.multiple, t, !1) : null != n.defaultValue && Yi(e, !!n.multiple, n.defaultValue, !0);
                break;
            default:
                "function" == typeof r.onClick && (e.onclick = l)
        }
    }

    function mo(e, t, n, i, o) {
        var r = null;
        switch (t) {
            case"input":
                n = wt(e, n), i = wt(e, i), r = [];
                break;
            case"option":
                n = Ui(e, n), i = Ui(e, i), r = [];
                break;
            case"select":
                n = s({}, n, {value: void 0}), i = s({}, i, {value: void 0}), r = [];
                break;
            case"textarea":
                n = Hi(e, n), i = Hi(e, i), r = [];
                break;
            default:
                "function" != typeof n.onClick && "function" == typeof i.onClick && (e.onclick = l)
        }
        so(t, i, co), t = e = void 0;
        var a = null;
        for (e in n) if (!i.hasOwnProperty(e) && n.hasOwnProperty(e) && null != n[e]) if ("style" === e) {
            var c = n[e];
            for (t in c) c.hasOwnProperty(t) && (a || (a = {}), a[t] = "")
        } else "dangerouslySetInnerHTML" !== e && "children" !== e && "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && "autoFocus" !== e && (w.hasOwnProperty(e) ? r || (r = []) : (r = r || []).push(e, null));
        for (e in i) {
            var u = i[e];
            if (c = null != n ? n[e] : void 0, i.hasOwnProperty(e) && u !== c && (null != u || null != c)) if ("style" === e) if (c) {
                for (t in c) !c.hasOwnProperty(t) || u && u.hasOwnProperty(t) || (a || (a = {}), a[t] = "");
                for (t in u) u.hasOwnProperty(t) && c[t] !== u[t] && (a || (a = {}), a[t] = u[t])
            } else a || (r || (r = []), r.push(e, a)), a = u; else "dangerouslySetInnerHTML" === e ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (r = r || []).push(e, "" + u)) : "children" === e ? c === u || "string" != typeof u && "number" != typeof u || (r = r || []).push(e, "" + u) : "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && (w.hasOwnProperty(e) ? (null != u && uo(o, e), r || c === u || (r = [])) : (r = r || []).push(e, u))
        }
        return a && (r = r || []).push("style", a), r
    }

    function vo(e, t, n, i, o) {
        "input" === n && "radio" === o.type && null != o.name && xt(e, o), lo(n, i), i = lo(n, o);
        for (var r = 0; r < t.length; r += 2) {
            var a = t[r], s = t[r + 1];
            "style" === a ? ro(e, s) : "dangerouslySetInnerHTML" === a ? to(e, s) : "children" === a ? no(e, s) : _t(e, a, s, i)
        }
        switch (n) {
            case"input":
                Et(e, o);
                break;
            case"textarea":
                Vi(e, o);
                break;
            case"select":
                e._wrapperState.initialValue = void 0, t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!o.multiple, null != (n = o.value) ? Yi(e, !!o.multiple, n, !1) : t !== !!o.multiple && (null != o.defaultValue ? Yi(e, !!o.multiple, o.defaultValue, !0) : Yi(e, !!o.multiple, o.multiple ? [] : "", !1))
        }
    }

    function go(e, t, n, i, o) {
        switch (t) {
            case"iframe":
            case"object":
                Sn("topLoad", "load", e);
                break;
            case"video":
            case"audio":
                for (var r in Dn) Dn.hasOwnProperty(r) && Sn(r, Dn[r], e);
                break;
            case"source":
                Sn("topError", "error", e);
                break;
            case"img":
            case"image":
            case"link":
                Sn("topError", "error", e), Sn("topLoad", "load", e);
                break;
            case"form":
                Sn("topReset", "reset", e), Sn("topSubmit", "submit", e);
                break;
            case"details":
                Sn("topToggle", "toggle", e);
                break;
            case"input":
                St(e, n), Sn("topInvalid", "invalid", e), uo(o, "onChange");
                break;
            case"select":
                Xi(e, n), Sn("topInvalid", "invalid", e), uo(o, "onChange");
                break;
            case"textarea":
                qi(e, n), Sn("topInvalid", "invalid", e), uo(o, "onChange")
        }
        for (var a in so(t, n, co), i = null, n) n.hasOwnProperty(a) && (r = n[a], "children" === a ? "string" == typeof r ? e.textContent !== r && (i = ["children", r]) : "number" == typeof r && e.textContent !== "" + r && (i = ["children", "" + r]) : w.hasOwnProperty(a) && null != r && uo(o, a));
        switch (t) {
            case"input":
                Ve(e), kt(e, n);
                break;
            case"textarea":
                Ve(e), Ji(e);
                break;
            case"select":
            case"option":
                break;
            default:
                "function" == typeof n.onClick && (e.onclick = l)
        }
        return i
    }

    function yo(e, t) {
        return e.nodeValue !== t
    }

    var bo = Object.freeze({
        createElement: fo,
        createTextNode: po,
        setInitialProperties: ho,
        diffProperties: mo,
        updateProperties: vo,
        diffHydratedProperties: go,
        diffHydratedText: yo,
        warnForUnmatchedText: function () {
        },
        warnForDeletedHydratableElement: function () {
        },
        warnForDeletedHydratableText: function () {
        },
        warnForInsertedHydratedElement: function () {
        },
        warnForInsertedHydratedText: function () {
        },
        restoreControlledState: function (e, t, n) {
            switch (t) {
                case"input":
                    if (Et(e, n), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                            var i = n[t];
                            if (i !== e && i.form === e.form) {
                                var o = H(i);
                                o || p("90"), Je(i), Et(i, o)
                            }
                        }
                    }
                    break;
                case"textarea":
                    Vi(e, n);
                    break;
                case"select":
                    null != (t = n.value) && Yi(e, !!n.multiple, t, !1)
            }
        }
    });
    Oe.injectFiberControlledHostComponent(bo);
    var _o = null, wo = null;

    function So(e) {
        this._expirationTime = Co.computeUniqueAsyncExpiration(), this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function xo() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Eo(e, t, n) {
        this._internalRoot = Co.createContainer(e, t, n)
    }

    function ko(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function To(e, t) {
        switch (e) {
            case"button":
            case"input":
            case"select":
            case"textarea":
                return !!t.autoFocus
        }
        return !1
    }

    So.prototype.render = function (e) {
        this._defer || p("250"), this._hasChildren = !0, this._children = e;
        var t = this._root._internalRoot, n = this._expirationTime, i = new xo;
        return Co.updateContainerAtExpirationTime(e, t, null, n, i._onCommit), i
    }, So.prototype.then = function (e) {
        if (this._didComplete) e(); else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, So.prototype.commit = function () {
        var e = this._root._internalRoot, t = e.firstBatch;
        if (this._defer && null !== t || p("251"), this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                for (var i = null, o = t; o !== this;) i = o, o = o._next;
                null === i && p("251"), i._next = o._next, this._next = t, e.firstBatch = this
            }
            this._defer = !1, Co.flushRoot(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
        } else this._next = null, this._defer = !1
    }, So.prototype._onComplete = function () {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])()
        }
    }, xo.prototype.then = function (e) {
        if (this._didCommit) e(); else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, xo.prototype._onCommit = function () {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) {
                var n = e[t];
                "function" != typeof n && p("191", n), n()
            }
        }
    }, Eo.prototype.render = function (e, t) {
        var n = this._internalRoot, i = new xo;
        return null !== (t = void 0 === t ? null : t) && i.then(t), Co.updateContainer(e, n, null, i._onCommit), i
    }, Eo.prototype.unmount = function (e) {
        var t = this._internalRoot, n = new xo;
        return null !== (e = void 0 === e ? null : e) && n.then(e), Co.updateContainer(null, t, null, n._onCommit), n
    }, Eo.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
        var i = this._internalRoot, o = new xo;
        return null !== (n = void 0 === n ? null : n) && o.then(n), Co.updateContainer(t, i, e, o._onCommit), o
    }, Eo.prototype.createBatch = function () {
        var e = new So(this), t = e._expirationTime, n = this._internalRoot, i = n.firstBatch;
        if (null === i) n.firstBatch = e, e._next = null; else {
            for (n = null; null !== i && i._expirationTime <= t;) n = i, i = i._next;
            e._next = i, null !== n && (n._next = e)
        }
        return e
    };
    var Co = Ni({
        getRootHostContext: function (e) {
            var t = e.nodeType;
            switch (t) {
                case 9:
                case 11:
                    e = (e = e.documentElement) ? e.namespaceURI : Qi(null, "");
                    break;
                default:
                    e = Qi(e = (t = 8 === t ? e.parentNode : e).namespaceURI || null, t = t.tagName)
            }
            return e
        }, getChildHostContext: function (e, t) {
            return Qi(e, t)
        }, getPublicInstance: function (e) {
            return e
        }, prepareForCommit: function () {
            _o = _n;
            var e = c();
            if (Bn(e)) {
                if ("selectionStart" in e) var t = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                    var n = window.getSelection && window.getSelection();
                    if (n && 0 !== n.rangeCount) {
                        t = n.anchorNode;
                        var i = n.anchorOffset, o = n.focusNode;
                        n = n.focusOffset;
                        try {
                            t.nodeType, o.nodeType
                        } catch (e) {
                            t = null;
                            break e
                        }
                        var r = 0, a = -1, s = -1, l = 0, u = 0, d = e, f = null;
                        t:for (; ;) {
                            for (var p; d !== t || 0 !== i && 3 !== d.nodeType || (a = r + i), d !== o || 0 !== n && 3 !== d.nodeType || (s = r + n), 3 === d.nodeType && (r += d.nodeValue.length), null !== (p = d.firstChild);) f = d, d = p;
                            for (; ;) {
                                if (d === e) break t;
                                if (f === t && ++l === i && (a = r), f === o && ++u === n && (s = r), null !== (p = d.nextSibling)) break;
                                f = (d = f).parentNode
                            }
                            d = p
                        }
                        t = -1 === a || -1 === s ? null : {start: a, end: s}
                    } else t = null
                }
                t = t || {start: 0, end: 0}
            } else t = null;
            wo = {focusedElem: e, selectionRange: t}, wn(!1)
        }, resetAfterCommit: function () {
            var e = wo, t = c(), n = e.focusedElem, i = e.selectionRange;
            if (t !== n && d(document.documentElement, n)) {
                if (Bn(n)) if (t = i.start, void 0 === (e = i.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (window.getSelection) {
                    t = window.getSelection();
                    var o = n[re()].length;
                    e = Math.min(i.start, o), i = void 0 === i.end ? e : Math.min(i.end, o), !t.extend && e > i && (o = i, i = e, e = o), o = $n(n, e);
                    var r = $n(n, i);
                    if (o && r && (1 !== t.rangeCount || t.anchorNode !== o.node || t.anchorOffset !== o.offset || t.focusNode !== r.node || t.focusOffset !== r.offset)) {
                        var a = document.createRange();
                        a.setStart(o.node, o.offset), t.removeAllRanges(), e > i ? (t.addRange(a), t.extend(r.node, r.offset)) : (a.setEnd(r.node, r.offset), t.addRange(a))
                    }
                }
                for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
                for (n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
            }
            wo = null, wn(_o), _o = null
        }, createInstance: function (e, t, n, i, o) {
            return (e = fo(e, t, n, i))[F] = o, e[U] = t, e
        }, appendInitialChild: function (e, t) {
            e.appendChild(t)
        }, finalizeInitialChildren: function (e, t, n, i) {
            return ho(e, t, n, i), To(t, n)
        }, prepareUpdate: function (e, t, n, i, o) {
            return mo(e, t, n, i, o)
        }, shouldSetTextContent: function (e, t) {
            return "textarea" === e || "string" == typeof t.children || "number" == typeof t.children || "object" === i(t.dangerouslySetInnerHTML) && null !== t.dangerouslySetInnerHTML && "string" == typeof t.dangerouslySetInnerHTML.__html
        }, shouldDeprioritizeSubtree: function (e, t) {
            return !!t.hidden
        }, createTextInstance: function (e, t, n, i) {
            return (e = po(e, t))[F] = i, e
        }, now: Oi, mutation: {
            commitMount: function (e, t, n) {
                To(t, n) && e.focus()
            }, commitUpdate: function (e, t, n, i, o) {
                e[U] = o, vo(e, t, n, i, o)
            }, resetTextContent: function (e) {
                no(e, "")
            }, commitTextUpdate: function (e, t, n) {
                e.nodeValue = n
            }, appendChild: function (e, t) {
                e.appendChild(t)
            }, appendChildToContainer: function (e, t) {
                8 === e.nodeType ? e.parentNode.insertBefore(t, e) : e.appendChild(t)
            }, insertBefore: function (e, t, n) {
                e.insertBefore(t, n)
            }, insertInContainerBefore: function (e, t, n) {
                8 === e.nodeType ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n)
            }, removeChild: function (e, t) {
                e.removeChild(t)
            }, removeChildFromContainer: function (e, t) {
                8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)
            }
        }, hydration: {
            canHydrateInstance: function (e, t) {
                return 1 !== e.nodeType || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e
            }, canHydrateTextInstance: function (e, t) {
                return "" === t || 3 !== e.nodeType ? null : e
            }, getNextHydratableSibling: function (e) {
                for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
                return e
            }, getFirstHydratableChild: function (e) {
                for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
                return e
            }, hydrateInstance: function (e, t, n, i, o, r) {
                return e[F] = r, e[U] = n, go(e, t, n, o, i)
            }, hydrateTextInstance: function (e, t, n) {
                return e[F] = n, yo(e, t)
            }, didNotMatchHydratedContainerTextInstance: function () {
            }, didNotMatchHydratedTextInstance: function () {
            }, didNotHydrateContainerInstance: function () {
            }, didNotHydrateInstance: function () {
            }, didNotFindHydratableContainerInstance: function () {
            }, didNotFindHydratableContainerTextInstance: function () {
            }, didNotFindHydratableInstance: function () {
            }, didNotFindHydratableTextInstance: function () {
            }
        }, scheduleDeferredCallback: Ii, cancelDeferredCallback: Mi
    }), No = Co;

    function Po(e, t, n, i, o) {
        ko(n) || p("200");
        var r = n._reactRootContainer;
        if (r) {
            if ("function" == typeof o) {
                var a = o;
                o = function () {
                    var e = Co.getPublicRootInstance(r._internalRoot);
                    a.call(e)
                }
            }
            null != e ? r.legacy_renderSubtreeIntoContainer(e, t, o) : r.render(t, o)
        } else {
            if (r = n._reactRootContainer = function (e, t) {
                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild;) e.removeChild(n);
                return new Eo(e, !1, t)
            }(n, i), "function" == typeof o) {
                var s = o;
                o = function () {
                    var e = Co.getPublicRootInstance(r._internalRoot);
                    s.call(e)
                }
            }
            Co.unbatchedUpdates(function () {
                null != e ? r.legacy_renderSubtreeIntoContainer(e, t, o) : r.render(t, o)
            })
        }
        return Co.getPublicRootInstance(r._internalRoot)
    }

    function Oo(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return ko(t) || p("200"), function (e, t, n) {
            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {$$typeof: tt, key: null == i ? null : "" + i, children: e, containerInfo: t, implementation: n}
        }(e, t, null, n)
    }

    Re = No.batchedUpdates, $e = No.interactiveUpdates, Be = No.flushInteractiveUpdates;
    var Io = {
        createPortal: Oo,
        findDOMNode: function (e) {
            return null == e ? null : 1 === e.nodeType ? e : Co.findHostInstance(e)
        },
        hydrate: function (e, t, n) {
            return Po(null, e, t, !0, n)
        },
        render: function (e, t, n) {
            return Po(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function (e, t, n, i) {
            return (null == e || void 0 === e._reactInternalFiber) && p("38"), Po(e, t, n, !1, i)
        },
        unmountComponentAtNode: function (e) {
            return ko(e) || p("40"), !!e._reactRootContainer && (Co.unbatchedUpdates(function () {
                Po(null, null, e, !1, function () {
                    e._reactRootContainer = null
                })
            }), !0)
        },
        unstable_createPortal: function () {
            return Oo.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Co.batchedUpdates,
        unstable_deferredUpdates: Co.deferredUpdates,
        flushSync: Co.flushSync,
        unstable_flushControlled: Co.flushControlled,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: B,
            EventPluginRegistry: k,
            EventPropagators: ie,
            ReactControlledComponent: Ae,
            ReactDOMComponentTree: q,
            ReactDOMEventListener: Tn
        },
        unstable_createRoot: function (e, t) {
            return new Eo(e, !0, null != t && !0 === t.hydrate)
        }
    };
    Co.injectIntoDevTools({
        findFiberByHostInstance: Y,
        bundleType: 0,
        version: "16.3.2",
        rendererPackageName: "react-dom"
    });
    var Mo = Object.freeze({default: Io}), Do = Mo && Io || Mo;
    e.exports = Do.default ? Do.default : Do
}, function (e, t, n) {
    "use strict";
    !function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), e.exports = n(239)
}, function (e, t, n) {
    "use strict";
    /** @license React v16.3.2
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(106), r = n(105), a = n(104), s = n(103), l = "function" == typeof Symbol && Symbol.for,
        c = l ? Symbol.for("react.element") : 60103, u = l ? Symbol.for("react.portal") : 60106,
        d = l ? Symbol.for("react.fragment") : 60107, f = l ? Symbol.for("react.strict_mode") : 60108,
        p = l ? Symbol.for("react.provider") : 60109, h = l ? Symbol.for("react.context") : 60110,
        m = l ? Symbol.for("react.async_mode") : 60111, v = l ? Symbol.for("react.forward_ref") : 60112,
        g = "function" == typeof Symbol && Symbol.iterator;

    function y(e) {
        for (var t = arguments.length - 1, n = "http://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 0; i < t; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
        r(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    var b = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    };

    function _(e, t, n) {
        this.props = e, this.context = t, this.refs = a, this.updater = n || b
    }

    function w() {
    }

    function S(e, t, n) {
        this.props = e, this.context = t, this.refs = a, this.updater = n || b
    }

    _.prototype.isReactComponent = {}, _.prototype.setState = function (e, t) {
        "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e && null != e && y("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, _.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, w.prototype = _.prototype;
    var x = S.prototype = new w;
    x.constructor = S, o(x, _.prototype), x.isPureReactComponent = !0;
    var E = {current: null}, k = Object.prototype.hasOwnProperty, T = {key: !0, ref: !0, __self: !0, __source: !0};

    function C(e, t, n) {
        var i = void 0, o = {}, r = null, a = null;
        if (null != t) for (i in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (r = "" + t.key), t) k.call(t, i) && !T.hasOwnProperty(i) && (o[i] = t[i]);
        var s = arguments.length - 2;
        if (1 === s) o.children = n; else if (1 < s) {
            for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
            o.children = l
        }
        if (e && e.defaultProps) for (i in s = e.defaultProps) void 0 === o[i] && (o[i] = s[i]);
        return {$$typeof: c, type: e, key: r, ref: a, props: o, _owner: E.current}
    }

    function N(e) {
        return "object" === (void 0 === e ? "undefined" : i(e)) && null !== e && e.$$typeof === c
    }

    var P = /\/+/g, O = [];

    function I(e, t, n, i) {
        if (O.length) {
            var o = O.pop();
            return o.result = e, o.keyPrefix = t, o.func = n, o.context = i, o.count = 0, o
        }
        return {result: e, keyPrefix: t, func: n, context: i, count: 0}
    }

    function M(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > O.length && O.push(e)
    }

    function D(e, t, n, o) {
        var r = void 0 === e ? "undefined" : i(e);
        "undefined" !== r && "boolean" !== r || (e = null);
        var a = !1;
        if (null === e) a = !0; else switch (r) {
            case"string":
            case"number":
                a = !0;
                break;
            case"object":
                switch (e.$$typeof) {
                    case c:
                    case u:
                        a = !0
                }
        }
        if (a) return n(o, e, "" === t ? "." + j(e, 0) : t), 1;
        if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e)) for (var s = 0; s < e.length; s++) {
            var l = t + j(r = e[s], s);
            a += D(r, l, n, o)
        } else if (null === e || void 0 === e ? l = null : l = "function" == typeof (l = g && e[g] || e["@@iterator"]) ? l : null, "function" == typeof l) for (e = l.call(e), s = 0; !(r = e.next()).done;) a += D(r = r.value, l = t + j(r, s++), n, o); else "object" === r && y("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
        return a
    }

    function j(e, t) {
        return "object" === (void 0 === e ? "undefined" : i(e)) && null !== e && null != e.key ? function (e) {
            var t = {"=": "=0", ":": "=2"};
            return "$" + ("" + e).replace(/[=:]/g, function (e) {
                return t[e]
            })
        }(e.key) : t.toString(36)
    }

    function L(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function z(e, t, n) {
        var i = e.result, o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? A(e, i, n, s.thatReturnsArgument) : null != e && (N(e) && (t = o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n, e = {
            $$typeof: c,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }), i.push(e))
    }

    function A(e, t, n, i, o) {
        var r = "";
        null != n && (r = ("" + n).replace(P, "$&/") + "/"), t = I(t, r, i, o), null == e || D(e, "", z, t), M(t)
    }

    var R = {
        Children: {
            map: function (e, t, n) {
                if (null == e) return e;
                var i = [];
                return A(e, i, null, t, n), i
            }, forEach: function (e, t, n) {
                if (null == e) return e;
                t = I(null, null, t, n), null == e || D(e, "", L, t), M(t)
            }, count: function (e) {
                return null == e ? 0 : D(e, "", s.thatReturnsNull, null)
            }, toArray: function (e) {
                var t = [];
                return A(e, t, null, s.thatReturnsArgument), t
            }, only: function (e) {
                return N(e) || y("143"), e
            }
        },
        createRef: function () {
            return {current: null}
        },
        Component: _,
        PureComponent: S,
        createContext: function (e, t) {
            return void 0 === t && (t = null), (e = {
                $$typeof: h,
                _calculateChangedBits: t,
                _defaultValue: e,
                _currentValue: e,
                _changedBits: 0,
                Provider: null,
                Consumer: null
            }).Provider = {$$typeof: p, _context: e}, e.Consumer = e
        },
        forwardRef: function (e) {
            return {$$typeof: v, render: e}
        },
        Fragment: d,
        StrictMode: f,
        unstable_AsyncMode: m,
        createElement: C,
        cloneElement: function (e, t, n) {
            (null === e || void 0 === e) && y("267", e);
            var i = void 0, r = o({}, e.props), a = e.key, s = e.ref, l = e._owner;
            if (null != t) {
                void 0 !== t.ref && (s = t.ref, l = E.current), void 0 !== t.key && (a = "" + t.key);
                var u = void 0;
                for (i in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) k.call(t, i) && !T.hasOwnProperty(i) && (r[i] = void 0 === t[i] && void 0 !== u ? u[i] : t[i])
            }
            if (1 === (i = arguments.length - 2)) r.children = n; else if (1 < i) {
                u = Array(i);
                for (var d = 0; d < i; d++) u[d] = arguments[d + 2];
                r.children = u
            }
            return {$$typeof: c, type: e.type, key: a, ref: s, props: r, _owner: l}
        },
        createFactory: function (e) {
            var t = C.bind(null, e);
            return t.type = e, t
        },
        isValidElement: N,
        version: "16.3.2",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {ReactCurrentOwner: E, assign: o}
    }, $ = Object.freeze({default: R}), B = $ && R || $;
    e.exports = B.default ? B.default : B
}, function (e, t, n) {
    "use strict";
    var i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = n(5), r = y(o), a = y(n(240)), s = n(69), l = n(7), c = y(n(29));
    n(230);
    var u = n(228), d = y(n(227)), f = y(n(224)), p = y(n(218)), h = y(n(209)), m = y(n(202)), v = y(n(198)),
        g = y(n(145));

    function y(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var b = "basepoiitemgifslider", _ = "cuisine_channel_index", w = void 0, S = function (e) {
        function t(e) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function (e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return w = n, n.state = n.props.data, n
        }

        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, o.Component), i(t, [{
            key: "componentDidMount", value: function () {
                window.sampleObj.renderTime = +new Date
            }
        }, {
            key: "render", value: function () {
                var e = this.state.namis;
                return r.default.createElement("div", {className: "box"}, (0, l.isObject)(e) && e.tanchuang.length > 0 && r.default.createElement(g.default, {data: e.tanchuang}), r.default.createElement(d.default, {data: this.state.hotword}), (0, l.isObject)(e) && r.default.createElement(f.default, {data: e.jingang}), (0, l.isObject)(e) && (e.banners.length > 0 || e.block.length > 0) && r.default.createElement("div", {className: "banner_top_line border-top"}), (0, l.isObject)(e) && e.banners.length > 0 && r.default.createElement(m.default, {
                    count: 5,
                    data: e.banners
                }), (0, l.isObject)(e) && e.block.length > 0 && r.default.createElement(p.default, {data: e.block}), r.default.createElement(h.default, null), r.default.createElement("div", {className: "mar8"}), (0, l.isObject)(this.state.filterlist) && (0, l.isArray)(this.state.search) && r.default.createElement(v.default, {
                    category: "326",
                    isdown: this.state.isdown,
                    categoryName: "美食",
                    hashb: this.state.wandou && this.state.wandou.mark && this.state.wandou.mark.isHDImage,
                    poiList: this.state.search,
                    menuData: this.state.filterlist
                }))
            }
        }]), t
    }();
    (0, l.ready)(function (e) {
        window.sampleObj.bnjsReadyTime = +new Date, e.ui.hideLoadingPage(), e.ui.title.setTitle("美食");
        var t = function () {
            new Promise(function (t, n) {
                e.env.network(function (e) {
                    t(e.network)
                })
            }).then(function (t) {
                var n = {
                    bnjsReadyTime: window.sampleObj.bnjsReadyTime - window.sampleObj.startTime,
                    apiReadyTime: window.sampleObj.apiReady - window.sampleObj.bnjsReadyTime,
                    renderTime: window.sampleObj.renderTime - window.sampleObj.bnjsReadyTime,
                    deviceType: e.device.platform,
                    deviceName: e.device.name,
                    network: t,
                    appVersion: e.env.appVersion,
                    compVersion: e.env.compVersion
                };
                (0, l.addLog)(c.default.channel_cuisine_home_performance, n), e.http.post({
                    url: s.statistic,
                    params: {data: JSON.stringify(n), vt_cat: "cuisine-home"},
                    onSuccess: function (e) {
                    }
                })
            })
        };

        // function n(n, i) {
        //     var o = {
        //         type: 63,
        //         cityId: e.location.selectCityCode,
        //         location: e.location.latitude + "," + e.location.longitude,
        //         pn: 1,
        //         v: e.env.appVersion,
        //         deviceType: (0, l.isAndroid)() ? 1 : (0, l.isIos)() ? 2 : 0,
        //         compV: e.env.compVersion,
        //         cuid: e.env.cuid,
        //         terminal: (0, l.isWap)() ? 3 : 1,
        //         category: 326,
        //         categoryName: "美食",
        //         sub_category_id: 0,
        //         area_type: 0,
        //         parent_area_id: 1,
        //         area_id: 0
        //     };
        //     n.namis_preview && (o.namis_preview = n.namis_preview), e.http.get({
        //         url: s.index,
        //         params: o,
        //         onSuccess: function (n) {
        //             window.sampleObj.apiReady = +new Date, (0, l.isObject)(n) && 0 === parseInt(n.errno, 10) && (0, l.isObject)(n.data) ? (n.data.isdown = i ? 1 : 0, w.setState(n.data), (0, l.isObject)(n.data.namis) && (0, l.isArray)(n.data.namis.jingang) && n.data.namis.jingang.length && (n.data.namis.tanchuang = [], e.localStorage.setItem(_, JSON.stringify(n)))) : e.ui.toast.show("获取数据失败"), e.ui.closePullAction("pulldown"), t()
        //         },
        //         onFail: function (t) {
        //             e.ui.toast.show("网络异常"), e.ui.closePullAction("pulldown")
        //         }
        //     })
        // }

        e.page.getData(function (e) {
            n(e.namis_preview ? {namis_preview: e.namis_preview} : {})
        }), e.localStorage.getItem(b, function (t) {
            if (0 == t.errno && t.data) {
                var n = JSON.parse(t.data);
                e[b] = n.time
            } else e[b] = 0
        }, function () {
            e[b] = 0
        }, "2.7"), window.settingNativeInterfere = function (t) {
            e.ui.nativeInterfere({
                pullDown: t, pullDownCallback: function () {
                    e.page.getData(function (e) {
                        var t = e.data;
                        n(t && t.namis_preview ? {namis_preview: t.namis_preview} : {}, 1)
                    })
                }
            })
        }, (0, l.getLS)(_, function (t) {
            e.ui.hideLoadingPage(), a.default.render(r.default.createElement(S, {data: t.data}), document.getElementById("wrapContainer"))
        }, function () {
            e.ui.hideLoadingPage();
            var t = e.location.selectCityCode || e.location.cityCode;
            (0, l.isWap)() ? u.baseData.namis.jingang = u.cityList[t] ? u.cityList[t].wap : u.defaultData.wap : u.baseData.namis.jingang = u.cityList[t] ? u.cityList[t].na : u.defaultData.na, a.default.render(r.default.createElement(S, {data: u.baseData}), document.getElementById("wrapContainer"))
        })
    })
}]);
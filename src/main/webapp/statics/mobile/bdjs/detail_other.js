define("detail:widget/suggestion/suggestion.js", function (e, t, a) {
    function i(e, t, a) {
        var i = "", r = "", s = {"<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;"}, n = "";
        i += "<ul class='ui-detail-sug-hotbrand'>";
        for (var l = 0, o = e.length; o > l; l++) r = "item" + l % 3, i += "<li class='" + r + "'>" + e[l] + "</li>";
        for (i += "</ul>", i += "<div class='ui-detail-sug-line'></div>", i += "<ul class='ui-detail-sug-history'>", l = 0, o = t.length; o > l; l++) n = t[l].replace(/[<>&"']/g, function (e) {
            return s[e]
        }), i += "<li><span class='his-icon'></span><span>" + n + "</span></li>";
        i += "</ul>", i += ["<ul class='ui-detail-sug-btns'>", "<li class='ui-detail-sug-clear'>清除搜索历史</li>", "</ul>"].join(""), a.html(i)
    }

    function r(e) {
        var t = "";
        t += "<ul class='ui-detail-sug-wrapper'>";
        for (var a = 0, i = Math.min(d, e.length); i > a; a++) t += "<li><span class='item-search'>" + e[a].t + "</span>", t += "<span class='result-count'>约" + e[a].c + "单</span></li>";
        return t += "</ul>", t += ["<ul class='ui-detail-sug-btns'>", "<li class='ui-detail-sug-close'>关闭</li>", "</ul>"].join("")
    }

    function s(e, t) {
        n.ajax({
            type: "get", url: p, data: {kw: e}, dataType: "json", success: function (e) {
                if (e && 0 === e.errno && e.data.data && e.data.data.length > 0) {
                    var a = r(e.data.data);
                    t.html(a), t.find(".ui-detail-sug-wrapper").data("src", e.data.rid)
                }
            }
        })
    }

    var n = e("common:widget/lib/gmu/zepto/zepto.js"), l = e("common:widget/ui/usertrack/usertrack.js"),
        o = e("common:widget/ui/http/http.js"), c = e("common:widget/ui/storage/storage.js"), u = "/webapp/tuan/list",
        p = "/webapp/tuan/sug", d = 7, h = function (e, t, a) {
            if (t = t || u, "" === e.trim()) return void l.location(t + "?" + o.reject("kw"));
            var i = c.getItem("search_history") || [];
            "[object Array]" !== Object.prototype.toString.call(i) && (i = []);
            var r = i.indexOf(e);
            r > -1 && i.splice(r, 1), i.unshift(e), i.length > 10 && (i = i.slice(0, 10)), c.setItem("search_history", i, 365), l.location(a ? t + "?" + o.create({
                kw: e,
                rid: a
            }) : t + "?" + o.create({kw: e}))
        }, g = function (e) {
            e = n.extend({$input: "", $wrapper: "", hotbrand: [], hotword_rid: "", baseURL: u}, e);
            var t = c.getItem("search_history") || [];
            i(e.hotbrand, t, e.$wrapper);
            var a = null;
            e.$input.on("input focus", function () {
                var t = n(this).val();
                if (window.clearTimeout(a), "" === n.trim(t)) {
                    var r = c.getItem("search_history") || [];
                    "[object Array]" !== Object.prototype.toString.call(r) && (r = []), i(e.hotbrand, r, e.$wrapper)
                } else a = window.setTimeout(function () {
                    s(t, e.$wrapper)
                }, 300)
            }), e.$input.on("keydown", function (t) {
                var a = n(this).val();
                if (13 == t.which) {
                    t.preventDefault();
                    var i = "action=search&element_type=filter", r = i + "&area=search&element=###",
                        s = r.replace("###", a || "noKeyWord");
                    l.send(s), h(a, e.baseURL)
                }
            });
            var r = "action=search&element_type=filter";
            e.$wrapper.on("click", ".ui-detail-sug-hotbrand li", function () {
                var t = n(this).text();
                l.send(r + "&area=hotWord&element=" + t), h(t, e.baseURL, e.hotword_rid)
            }), e.$wrapper.on("click", ".ui-detail-sug-history li", function () {
                var t = n(this).text();
                l.send(r + "&area=history&element=" + t), h(t, e.baseURL)
            }), e.$wrapper.on("click", ".ui-detail-sug-wrapper li", function () {
                var t = n(this).find(".item-search").text(), a = n(this).parent().data("src");
                l.send(r + "&area=sug&element=" + t), h(t, e.baseURL, a)
            }), e.$wrapper.on("click", ".ui-detail-sug-clear", function () {
                c.removeItem("search_history"), l.send(r + "&area=searchFuc&element=clear"), e.$wrapper.find(".ui-detail-sug-history").remove()
            }), e.$wrapper.on("click", ".ui-detail-sug-close", function () {
                l.send(r + "&area=searchFuc&element=closeSug"), e.$wrapper.html(""), "function" == typeof e.onclose && e.onclose()
            }), e.$wrapper.on("click", ".ui-detail-sug-close-small", function () {
                l.send("action=search&area=searchFuc&element=close"), e.$wrapper.html(""), "function" == typeof e.onclose && e.onclose()
            })
        };
    a.exports = {search: h, suggest: g}
});
;define("detail:widget/ugc/merchant_info/merchant_info.js", function () {
});
;define("detail:widget/ugc/ugc_detail_old/ugc_detail_old.js", function (l, e, s) {
    function t(l) {
        o(".w-ugc-detail .w-ugc-label-type").on("tap", function () {
            var e = o("#j-w-ugc-list"), s = o(this), t = s.children(".w-ugc-label-text").text();
            s.hasClass("w-ugc-label-chosen") ? e.load("/webapp/tuan/comment?method=json&maxResults=3&pn=0&dealTinyUrl=" + l, function () {
                o(this).removeClass("w-ugc-list-good").removeClass("w-ugc-list-bad"), s.removeClass("w-ugc-label-chosen"), o(window).trigger("scrollStop"), a.initUgcMore()
            }) : s.hasClass("w-ugc-label-type1") ? e.load("/webapp/tuan/comment?method=json&maxResults=3&pn=0&dealTinyUrl=" + l + "&label=" + t, function () {
                o(this).addClass("w-ugc-list-good").removeClass("w-ugc-list-bad"), s.addClass("w-ugc-label-chosen").siblings().removeClass("w-ugc-label-chosen"), o(window).trigger("scrollStop"), a.initUgcMore()
            }) : e.load("/webapp/tuan/comment?method=json&maxResults=3&pn=0&dealTinyUrl=" + l + "&label=" + t, function () {
                o(this).removeClass("w-ugc-list-good").addClass("w-ugc-list-bad"), s.addClass("w-ugc-label-chosen").siblings().removeClass("w-ugc-label-chosen"), o(window).trigger("scrollStop"), a.initUgcMore()
            })
        })
    }

    var o = l("common:widget/lib/gmu/zepto/zepto.js"), a = l("detail:widget/ugc/ugc_list/ugc_list.js");
    s.exports = {init: t}
});
;define("detail:widget/ugc/ugc_label/ugc_label.js", function (e, t, l) {
    function a(e) {
        var t = c(".ugc-label-type");
        if (t.length && e) {
            for (var e = c(e), l = !1, a = 0, n = t.length; n > a; a++) {
                var o = c(t[a]);
                o.hasClass("ugc-label-chosen") && (u.label = o.find(".label-text").text().trim(), l = !0)
            }
            var d = window.location.pathname, g = window.location.search.slice(1), b = r.parse(g);
            b.pageSize = 20, b.pn = 0, b.newAjax = 1, b.label = u.label, l && s(e, d, b), i(e, d, b)
        }
    }

    function i(e, t, l) {
        c(document.body).on("tap", ".ugc-label-type", function () {
            var a = c(this);
            c(a).siblings().removeClass("ugc-label-chosen"), c(a).toggleClass("ugc-label-chosen"), u.label = u.label && u.label === a.find(".label-text").text().trim() ? "" : a.find(".label-text").text().trim(), l.label = u.label, s(e, t, l)
        })
    }

    function n(e, t) {
        g = c(e), f = t
    }

    function o() {
        return u.count = ++b, u
    }

    function s(e, t, l) {
        c.ajax({
            type: "get", url: t, data: l, dataType: "json",
            success: function (t) {
                if (b = 0, !t.response) return void (g && (g.text("已显示全部"), g.addClass("disabled")));
                if (e.html(t.response), d.init(), g) {
                    var l = t.data.total;
                    if (15 > l && 0 == f || 20 > l && 1 == f) return g.text("已显示全部"), void g.addClass("disabled");
                    u.total = t.data.total, g.text(f ? "努力加载中..." : "查看更多"), g.removeClass("disabled")
                }
            }, error: function () {
                console.log("sorry,加载出错!")
            }
        })
    }

    var c = e("common:widget/lib/gmu/zepto/zepto.js"), d = e("detail:widget/ugc/ugc_list/ugc_list.js"),
        r = e("common:widget/ui/http/http.js"), u = {}, g = "", b = 0, f = 0;
    l.exports = {init: a, getChoosed: o, checkViewMore: n}
});
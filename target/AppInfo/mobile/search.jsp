<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/8/22
  Time: 14:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-CN">
<head>

    <meta charset="utf-8">
    <title>${text} -搜索 -叮当食堂</title>
    <script charset="utf-8" src="https://ada.baidu.com/phone-tracker/insert_bdtj?sid=5899112"></script>
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.10.1.min.js"></script>
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-touch-startup-image" href="/static/img/apple-touch/start.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/img/apple-touch/icon-57.png">
    <!-- For the iPad mini and the first- and second-generation iPad (@1× display) on iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/img/apple-touch/icon-72.png">
    <!-- For iPhone with @2× display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/img/apple-touch/icon-114.png">
    <!-- For iPhone with @2× display running iOS ≥ 7: -->
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/img/apple-touch/icon-120.png">
    <!-- For iPad with @2× display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/img/apple-touch/icon-144.png">
    <link rel="shortcut icon" href="/static/img/favicon.ico">



    <script>
        var resourceMap = ({
            "album": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/album/album.6f155b910dcaf8dcbf46b3f766da5681.css"
            ],
            "cate-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cate-list/cate-list.bf8b6d13134e6361fdd252029b75ebcb.css"
            ],
            "cbd-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-detail/cbd-detail.35b1e74086a97b081da4e66bede0df25.css"
            ],
            "cbd-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-list/cbd-list.9d41c4533e786cd067532bcf218b299b.css"
            ],
            "common": [
            ],
            "detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail/detail.976d81470075d5ac9a6d2f0337f474b3.css"
            ],
            "detail-trade": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail-trade/detail-trade.71d7dab2061ef4902c474b071b69a14c.css"
            ],
            "food-safe": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/food-safe/food-safe.e003bcb067686f3552abd5ab56a1d2b2.css"
            ],
            "hongbao-rule": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/hongbao-rule/hongbao-rule.67cc84637b4c38dbef31a0f6bbb104f7.css"
            ],
            "index": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/index/index.9021d7c62a7772ad842695cd35d25bb0.css"
            ],
            "life": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/life/life.d41d8cd98f00b204e9800998ecf8427e.css"
            ],
            "list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/list/list.10e672d6643eb4657a5147c8e4798c1c.css"
            ],
            "maintain": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/maintain/maintain.f4974110791d4b714be094f008c3c8fb.css"
            ],
            "mall-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/mall-detail/mall-detail.ed52ac0f176a6908135473fcd7dffc9c.css"
            ],
            "merchant-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-detail/merchant-detail.2ea12d4864c0c8f30c19c6fc939002b4.css"
            ],
            "merchant-panorama": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-panorama/merchant-panorama.72a8fe6e081a4b62ad016fe0ba09c954.css"
            ],
            "na-food-insurance": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/na-food-insurance/na-food-insurance.61e620e73532c2966a76eb7b836648b1.css"
            ],
            "nuomi-middle": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/nuomi-middle/nuomi-middle.7a528a3e0de1ce59d08d2eebcfaf907c.css"
            ],
            "pos-login": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-login/pos-login.117ab7522422a7cf14b7e65c3b7f4795.css"
            ],
            "pos-result": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-result/pos-result.7251febf7cf88f40edf588183573cfcf.css"
            ],
            "pre-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pre-detail/pre-detail.fc143cfab7619e7a847661e76d77e255.css"
            ],
            "qunar-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-detail/qunar-detail.7f8400bd8f6c7c01c8ad5d80cac5961c.css"
            ],
            "qunar-merchant-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-merchant-detail/qunar-merchant-detail.b201172910c46bdbc187bee2e083fabd.css"
            ],
            "qunar-submission": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-submission/qunar-submission.69a4efab3692db07eb243d2028194da7.css"
            ],
            "rank": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/rank/rank.ee9e21bf96fbe225e05d7f559daefed6.css"
            ],
            "service": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service/service.b39df1722689aeff456c9d429e151fc5.css"
            ],
            "service-addr-edit": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-edit/service-addr-edit.515c65a4dd0e81ac9ca1462bb83cd09d.css"
            ],
            "service-addr-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-list/service-addr-list.e2b6fb203edf0bb4b2fc2b9af9545762.css"
            ],
            "simple-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/simple-list/simple-list.5150dd7fe38251f9ca9fca2525a1961f.css"
            ],
            "spu-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/spu-detail/spu-detail.329a8552e7627b53666bd4e40b0b6908.css"
            ],
            "submission": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/submission/submission.b74bcc1ec8856a614077363db8c23807.css"
            ],
            "test": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/test/test.176f0aefde10853ba60a92c7baec1679.css"
            ],
            "unpaid-order-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/unpaid-order-list/unpaid-order-list.6f7825417f98a2ee7a3b0d7100b0d7b8.css"
            ],
            "user-balance": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance/user-balance.ff87836ae9a738468f9053efc0a4d7d8.css"
            ],
            "user-balance-help": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance-help/user-balance-help.a52cd4b55789dc8300c1cb2fab67b0be.css"
            ],
            "user-voucher": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher/user-voucher.e91f6c517bb70fc190875666400e9e6e.css"
            ],
            "user-voucher-help": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher-help/user-voucher-help.23006569165c5fa74462a8974b4cee0e.css"
            ],
            "yuyue": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue/yuyue.fc5da13a23a67c6fd0bc93549984c2ba.css"
            ],
            "yuyue-result": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue-result/yuyue-result.ad47bfa70e2b0399217533b73eb1b64a.css"
            ]
        });
        var commonAssets = resourceMap['common'] || [];
        var assets = resourceMap['list'] || [];

        function escapeHTML(s) {
            return (s + '').replace(/[&<>"'`]/g, function (s) {
                return ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#39;',
                    '`': '&#96;'
                })[s];
            });
        }

        // js
        var head = document.getElementsByTagName('head')[0];
        var insertScript = function (url) {
// 使用appendChild插入script的话defer不靠谱:当从缓存读取js文件的时候，会无法保证在domready之后执行，也无法保证执行顺序
// HACK for QQ browser(X5)
            document.write('<s' + 'cript charset="utf-8" defer src="' + url + '"><\/s' + 'cript>');
        };
        // css
        var insertStyle = function (url) {
            document.write('<link rel="stylesheet" href="' + url + '">');
        };
        // insert assets
        var styles = [];
        var scripts = [];
        commonAssets.concat(assets).forEach(function (asset) {
            if (/\.js$/.test(asset)) {
                scripts.push(asset);
                return;
            }
            if (/\.css$/.test(asset)) {
                styles.push(asset);
                return;
            }
        });
        styles.forEach(insertStyle);
        scripts.forEach(insertScript);
    </script>
    <link rel="stylesheet"
          href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/list/list.10e672d6643eb4657a5147c8e4798c1c.css">

    <script>
        (function () {
            if (!(!('performance' in window) || !('getEntriesByType' in window.performance) || !(window.performance.getEntriesByType('resource') instanceof Array))) {
                var LOG_REQUEST_URL = window.location.host.indexOf('m.nuomi.com') !== -1 ? '//m.nuomi.com/v.gif?'
                    : '//www.nuomi.com/v.gif?';
                window.addEventListener('load', function () {
                    /* 不延后一点，loadEventEnd取不到*/
                    setTimeout(function () {
                        var events = [
                            'navigationStart',
                            'redirectStart',
                            'redirectEnd',
                            'fetchStart',
                            'domainLookupStart',
                            'domainLookupEnd',
                            'connectStart',
                            'connectEnd',
                            'secureConnectionStart',
                            'requestStart',
                            'responseStart',
                            'responseEnd',
                            'domLoading',
                            'domInteractive',
                            'domContentLoadedEventStart',
                            'domContentLoadedEventEnd',
                            'domComplete',
                            'loadEventStart',
                            'loadEventEnd'
                        ];
                        var timing = window.performance.timing;
                        var zero = timing.navigationStart;
                        var mon = document.body.getAttribute('mon') || 'page=unknown';
                        var query = ['performance=1', 'zero=' + zero, mon];
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            var eventTime = timing[event];
                            if (typeof eventTime !== 'undefined') {
                                var delta = eventTime - zero;
                                query.push(event + '=' + (delta < 0 ? 0 : delta));
                            }
                        }
                        var img = document.createElement('img');
                        img.style.display = 'none';
                        document.body.appendChild(img).src = LOG_REQUEST_URL + query.join('&');
                        img.onload = function () {
                            document.body.removeChild(img);
                            img = null;
                        };
                    }, 100);
                });
            }
        })();
    </script>
</head>

<body class="list-page" mon="position=list">

<header id="header" class="list-header" mon="area=header">
    <a class="back-link" data-role="back" href="javascript:;" mon="element=back"></a>
    <div id="j-list-search">
        <form class="list-search" method="get" action="/bj/search" data-role="form">
            <div class="input-wrapper">
                <input class="input" type="search" name="kw" maxlength="20" data-role="input" autocomplete="off"
                       placeholder="搜索商家、分类、地点" value="${text}">
                <span class="clear" data-role="clear" style="display: none;"><i class="icon-clear"></i></span>
                <a class="fake-home-link" href="/" mon="element=home"></a>
                <button class="cancel" type="button" data-role="cancel">关闭</button>
            </div>
            <div class="suggestion-wrapper" data-role="suggestion-wrapper" style="display: none;">
                <div class="history-block" data-role="history-block">
                    <ul class="history-list">

                        <li class="history-line">
                            <a class="history-item" href="javascript:;" data-role="history-item"
                               data-keyword="烧烤">烧烤</a>
                        </li>

                    </ul>
                    <div class="btn-line">
                        <a class="btn clean-btn" data-role="clean">清除历史记录</a>
                        <a class="btn close-btn" data-role="close">关闭</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</header>
<article>
    <section id="j-filter-sort">


    </section>
    <section id="j-list-top-poster"></section>
    <div id="j-topten-container">

        <div class="list-poi-goods">
        </div>
    </div>
    <section id="j-good-container">


        <div class="list-poi-goods-radical">
            <section class="poi">
                <a href="https://m.nuomi.com/mshop/9711709" class="poi-container"
                   data-url="https://m.nuomi.com/mshop/9711709" data-role="poi-header"
                   data-mon="element=9711709&amp;area=poiheader&amp;poi_id=9711709&amp;cateId="
                   bn_show="search_radical_show" bn_click="search_radical_click">
                    <div class="header">
                        <div class="img-wrapper">
                            <div class="img-placeholder">
                                <img src="https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/nuomi/pic/item/91529822720e0cf33e2735760346f21fbf09aa6f.jpg"
                                     data-role="deal-img"
                                     data-src="https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/nuomi/pic/item/91529822720e0cf33e2735760346f21fbf09aa6f.jpg"
                                     width="108" height="64" style="visibility: visible;">
                            </div>
                        </div>
                        <div class="header-right">
                            <div class="poi-header pdr-1 is-wangpu">
                                <span class="wangpu"></span>
                                <div class="title-line ">
                                    <div class="title">
                                        <div class="title-content ">
                                            <h4 class="item-name">鼎极轩海鲜烤肉自助(四道口店)</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="score-line">
                                <div class="star-gray">
                                    <div class="star-real" style="width: 94%;"></div>
                                </div>
                            </div>
                            <div class="icon-container">
                                <i class="icon wai">聚</i>
                            </div>
                            <div class="per-price" style="">
                                ￥81/人
                            </div>
                            <div class="distance-text">
                                大钟寺
                            </div>
                        </div>
                    </div>
                    <div class="introduce">
                        推荐理由：环境设计讲究清爽宜人
                    </div>
                    <div class="good-container">
                        <div class="good">
                            <div class="good-content" data-role="good-content" data-tiny-url="s00vy8u6l"
                                 data-full-url="" data-deal-id="42189295" data-deal-type="1" data-is-card="0"
                                 data-s="1c7e5e1e3557f4f91908c77d4d8dae94" data-rid="9d4eeba724143282d68dd1bdfbcff2f7"
                                 data-benefit-uid="" data-bnl-token="" data-cuid=""
                                 data-mon="element=42189295&amp;area=poi_list&amp;deal_id=42189295&amp;cateId=&amp;deal_type=normal"
                                 href="//m.nuomi.com/bj/deal/s00vy8u6l?rid=9d4eeba724143282d68dd1bdfbcff2f7">
                                <div class="tag-content">
                                </div>
                                <i class="icon tuan">团</i>
                                <div class="info-wrapper">
                                    86.9元购鼎极轩单人自助餐
                                </div>
                            </div>
                            <div class="good-content good-content-hidden" data-role="good-content"
                                 data-tiny-url="p00vyd1ry" data-full-url="" data-deal-id="42189267" data-deal-type="1"
                                 data-is-card="0" data-s="1c7e5e1e3557f4f91908c77d4d8dae94"
                                 data-rid="9d4eeba724143282d68dd1bdfbcff2f7" data-benefit-uid="" data-bnl-token=""
                                 data-cuid=""
                                 data-mon="element=42189267&amp;area=poi_list&amp;deal_id=42189267&amp;cateId=&amp;deal_type=normal"
                                 href="//m.nuomi.com/bj/deal/p00vyd1ry?rid=9d4eeba724143282d68dd1bdfbcff2f7">
                                <div class="tag-content">
                                </div>
                                <i class="icon tuan">团</i>
                                <div class="info-wrapper">
                                    79.9元购鼎极轩闲时单人自助餐
                                </div>
                            </div>
                            <div class="good-content good-content-hidden" data-role="good-content"
                                 data-tiny-url="n00vy80lv" data-full-url="" data-deal-id="42189247" data-deal-type="1"
                                 data-is-card="0" data-s="1c7e5e1e3557f4f91908c77d4d8dae94"
                                 data-rid="9d4eeba724143282d68dd1bdfbcff2f7" data-benefit-uid="" data-bnl-token=""
                                 data-cuid=""
                                 data-mon="element=42189247&amp;area=poi_list&amp;deal_id=42189247&amp;cateId=&amp;deal_type=normal"
                                 href="//m.nuomi.com/bj/deal/n00vy80lv?rid=9d4eeba724143282d68dd1bdfbcff2f7">
                                <div class="tag-content">
                                </div>
                                <i class="icon tuan">团</i>
                                <div class="info-wrapper">
                                    79.9元购鼎极轩酒吧自助烤肉夜宵
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </section>
        </div>
        <section class="list-viewmore" id="j-list-viewmore">
            <!--<a href="javascript:;" data-role="list-gotop" class="list-gotop" mon="area=toTop&element=toTop">回到顶部</a>-->
            <div data-role="viewmore">
                <div class="viewmore-block scroll">


                    <p class="status" data-role="status">点击加载更多</p>

                </div>
            </div>
        </section>

        <div class="qx-download-mask qx-hide"></div>
    </section>
</article>

<div class="filter-sort-mask" data-role="filter-sort-mask" style="display:none;"></div>
<div class="gotop" style="bottom: 45px; display: none;"></div>
<img style="display: none !important;"
     src="//m.nuomi.com/v.gif?performance=1&amp;zero=1566799062405&amp;position=list&amp;navigationStart=0&amp;redirectStart=0&amp;redirectEnd=0&amp;fetchStart=9&amp;domainLookupStart=9&amp;domainLookupEnd=9&amp;connectStart=9&amp;connectEnd=9&amp;secureConnectionStart=0&amp;requestStart=16&amp;responseStart=545&amp;responseEnd=566&amp;domLoading=576&amp;domInteractive=1151&amp;domContentLoadedEventStart=1276&amp;domContentLoadedEventEnd=1287&amp;domComplete=2239&amp;loadEventStart=2239&amp;loadEventEnd=2240"
     hidden="">
</body>
<script>
    var pageIndex = 1;
    $(document).ready(function(){
        $('.list-poi-goods-radical').html('');
        getSolr(pageIndex);
    });
    function getSolr() {
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }//getResault/${text}/"+pageIndex,//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                writeSolrData(data)
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        })
    }
    function writeSolrData(data) {
        solrList = "";
        for (var i = 0; i < data.length; i++) {
            solrList += "<section class=\"poi\">\n" +
                "                <a href=\"${pageContext.request.contextPath}/windowInfo/"+data[i].user+"\" class=\"poi-container\"\n" +
                "                   data-url=\"https://m.nuomi.com/mshop/9711709\" data-role=\"poi-header\"\n" +
                "                   data-mon=\"element=9711709&amp;area=poiheader&amp;poi_id=9711709&amp;cateId=\"\n" +
                "                   bn_show=\"search_radical_show\" bn_click=\"search_radical_click\">\n" +
                "                    <div class=\"header\">\n" +
                "                        <div class=\"img-wrapper\">\n" +
                "                            <div class=\"img-placeholder\">\n" +
                "                                <img src=\"https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/nuomi/pic/item/91529822720e0cf33e2735760346f21fbf09aa6f.jpg\"\n" +
                "                                     data-role=\"deal-img\"\n" +
                "                                     data-src=\"https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/nuomi/pic/item/91529822720e0cf33e2735760346f21fbf09aa6f.jpg\"\n" +
                "                                     width=\"108\" height=\"64\" style=\"visibility: visible;\">\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                        <div class=\"header-right\">\n" +
                "                            <div class=\"poi-header pdr-1 is-wangpu\">\n" +
                "                                <span class=\"wangpu\"></span>\n" +
                "                                <div class=\"title-line \">\n" +
                "                                    <div class=\"title\">\n" +
                "                                        <div class=\"title-content \">\n" +
                "                                            <h4 class=\"item-name\">"+data[i].name+"</h4>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <div class=\"score-line\">\n" +
                "                                <div class=\"star-gray\">\n" +
                "                                    <div class=\"star-real\" style=\"width: 94%;\"></div>\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <div class=\"icon-container\">\n" +
                "                                \n" +
                "                            </div>\n" +
                "                            <div class=\"per-price\" style=\"\">\n" +
                "                                ￥"+data[i].price+"/人\n" +
                "                            </div>\n" +
                "                            <div class=\"distance-text\">\n" +
                "                                "+data[i].address+"\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"good-container\">\n" +
                "                        <div class=\"good\">\n" +
                "                            <div class=\"good-content\" data-role=\"good-content\" data-tiny-url=\"s00vy8u6l\"\n" +
                "                                 data-full-url=\"\" data-deal-id=\"42189295\" data-deal-type=\"1\" data-is-card=\"0\"\n" +
                "                                 data-s=\"1c7e5e1e3557f4f91908c77d4d8dae94\" data-rid=\"9d4eeba724143282d68dd1bdfbcff2f7\"\n" +
                "                                 data-benefit-uid=\"\" data-bnl-token=\"\" data-cuid=\"\"\n" +
                "                                 data-mon=\"element=42189295&amp;area=poi_list&amp;deal_id=42189295&amp;cateId=&amp;deal_type=normal\"\n" +
                "                                 href=\"//m.nuomi.com/bj/deal/s00vy8u6l?rid=9d4eeba724143282d68dd1bdfbcff2f7\">\n" +
                "                                <div class=\"tag-content\">\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <div class=\"good-content good-content-hidden\" data-role=\"good-content\"\n" +
                "                                 data-tiny-url=\"p00vyd1ry\" data-full-url=\"\" data-deal-id=\"42189267\" data-deal-type=\"1\"\n" +
                "                                 data-is-card=\"0\" data-s=\"1c7e5e1e3557f4f91908c77d4d8dae94\"\n" +
                "                                 data-rid=\"9d4eeba724143282d68dd1bdfbcff2f7\" data-benefit-uid=\"\" data-bnl-token=\"\"\n" +
                "                                 data-cuid=\"\"\n" +
                "                                 data-mon=\"element=42189267&amp;area=poi_list&amp;deal_id=42189267&amp;cateId=&amp;deal_type=normal\"\n" +
                "                                 href=\"//m.nuomi.com/bj/deal/p00vyd1ry?rid=9d4eeba724143282d68dd1bdfbcff2f7\">\n" +
                "                                <div class=\"tag-content\">\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <div class=\"good-content good-content-hidden\" data-role=\"good-content\"\n" +
                "                                 data-tiny-url=\"n00vy80lv\" data-full-url=\"\" data-deal-id=\"42189247\" data-deal-type=\"1\"\n" +
                "                                 data-is-card=\"0\" data-s=\"1c7e5e1e3557f4f91908c77d4d8dae94\"\n" +
                "                                 data-rid=\"9d4eeba724143282d68dd1bdfbcff2f7\" data-benefit-uid=\"\" data-bnl-token=\"\"\n" +
                "                                 data-cuid=\"\"\n" +
                "                                 data-mon=\"element=42189247&amp;area=poi_list&amp;deal_id=42189247&amp;cateId=&amp;deal_type=normal\"\n" +
                "                                 href=\"//m.nuomi.com/bj/deal/n00vy80lv?rid=9d4eeba724143282d68dd1bdfbcff2f7\">\n" +
                "                                <div class=\"tag-content\">\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </a>\n" +
                "            </section>"
        }

        $('.list-poi-goods-radical').append(solrList)
    }







</script>
</html>

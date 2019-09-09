<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/7/30
  Time: 17:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="keywords">
    <meta name="description">
    <link rel="apple-touch-startup-image" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/img/start_83a773c.png">
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/img/logo-57_899958a.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/img/logo-72_6642ce0.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/img/logo-114_1ebba25.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/img/logo-144_98290d9.png">
    <link rel="shortcut icon" href="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/img/favicon.ico">
    <link href="${pageContext.request.contextPath }/statics/mobile/bdcss/reset.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath }/statics/js/jquery-1.10.1.min.js"></script>
    <style type="text/css">
        /* @require common:widget/ui/css_base/css_base.css */
    </style>

    <script src="//hm.baidu.com/hm.js?0d631c1cdc3af1f31d3fc673f262f1c2"></script><script src="https://zz.bdstatic.com/linksubmit/push.js"></script><script>
    var F = {};
    (function () {
        var b = {};
        F.context = function(p, r) {
            var q = arguments.length;
            if (q > 1) {
                b[p] = r
            } else {
                if (q == 1) {
                    if (typeof p == "object") {
                        for (var o in p) {
                            if (p.hasOwnProperty(o)) {
                                b[o] = p[o]
                            }
                        }
                    } else {
                        return b[p];
                    }
                }
            }
        };
    })();

    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else{
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();

    if (!location.hash) {
        document.addEventListener("DOMContentLoaded", function () {
            // 先让 DOMContentLoaded 的其他事件处理完成，再执行 UI
            setTimeout(function(){
                window.scrollTo(0, 1);
            }, 0);
        });
    }

</script>

    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?0d631c1cdc3af1f31d3fc673f262f1c2";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
    <title>北京辣老三老火锅怎么样|好不好？-百度糯米</title>
    <script>
        window.onerror = function(message, url, line, column, errorObj) {
            var href   = window.location.href;
            if (message.target) {
                url = message.target.src;
            }
            var params = [
                "pid=343",
                "client_type=WAP_SMART",
                "action=other",
                "type=jsError",
                "content=" + encodeURIComponent(message || "no-valid-message"),
                "href=" + encodeURIComponent(href),
                "stack=" + encodeURIComponent(errorObj && errorObj.stack),
                "line=" + encodeURIComponent(line),
                "fromurl=" + encodeURIComponent(url || "no-valid-url"),
                "timestamp=" + encodeURIComponent(+new Date())
            ].join("&");

            (new Image()).src = "/v.gif?" + params;
        };

        // 可惜 img 的 onerror 不是promise对象。
        document.addEventListener("DOMContentLoaded", function() {
            var imgs = document.getElementsByTagName("img");

            // @this the img itself
            function _imgErrorCallback () {
                var src = this.src;
                // this.src = __uri("img/error.png");
                this.src = "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/img/img_placeholder_small_d11b7fc.png";

                var params = [
                    "pid=343",
                    "client_type=WAP_SMART",
                    "action=other",
                    "type=imgError",
                    "content=" + encodeURIComponent(src),
                    "page=" + encodeURIComponent(window.location.href),
                    "timestamp=" + encodeURIComponent(+new Date())
                ].join("&");

                (new Image()).src = "/v.gif?" + params;
            }

            for (var i = 0, len = imgs.length; i < len; i++) {
                if (imgs[i].onerror !== null) {
                    imgs[i].onerror = (function (index) {
                        var func = imgs[index].onerror;

                        return function () {
                            var args = [].slice.apply(arguments);

                            (typeof func === "function") && func.apply(this, args);
                            _imgErrorCallback.apply(this, args);
                        };
                    })(i);
                } else {
                    imgs[i].onerror = _imgErrorCallback;
                }
            }
        });
    </script>


    <script src="https://static.alipay.com/aliBridge/1.0.0/aliBridge.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_other_css_0b6427e.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/footer/footer_20282f1.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/dialog/dialog_a6a3b84.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_css_0_80aa190.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_css_1_bbe1fa7.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/mall_merchant/mall_merchant_7f03b85.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/detail/widget/suggestion/suggestion_2753a93.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/detail/widget/ugc/merchant_info/merchant_info_ced78d6.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/detail/pkg/detail_css_0_8d99a68.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/detail/pkg/detail_css_2_b1ac7dd.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/detail/widget/ugc/ugc_detail_old/ugc_detail_old_d8cafc3.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/detail/widget/ugc/viewmore/viewmore-new_9cda485.css"><link rel="stylesheet" type="text/css" href="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/login/pkg/login_css_0_8f9f0b7.css"></head>





<body mon="position=">

<header id="header" class="w-header white-header" mon="area=header&amp;action=click&amp;element_type=nav">
    <a class="arrow-wrap" href="javascript:history.back()" mon="element=back" data-role="back-link">
        <span class="arrow-left"></span>
    </a>
    <div class="text">用户评价</div>
</header>


<h1 class="ugc-brand hidden">${window.windowname}</h1>
<section class="merchant_info">
    <a class="info-container" href="${pageContext.request.contextPath}/windowInfo/${window.id}">
        <img class="mini-img" src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C483%2C1080%2C654%3Bw%3D230%3Bq%3D80/sign=3175e9048b44ebf8793e3e7fe4c9fb1e/6a600c338744ebf84059b438d5f9d72a6059a789.jpg">
        <div class="detail">
            <p class="title">${window.windowname}</p>
            <p class="tips">
                <span class="item">${window.username}</span>
            </p>
        </div>
        <span class="arrow"></span>
    </a>
</section><section class="w-ugc-top w-ugc-normal">
    <a class="w-ugc-preview clearfix w-ugc-preview-no-rating w-ugc-normal" href="javascript:;" mon="area=ugcBtn">
        <div class="ugc-total ">
            评价 (${allcount})</div>
        <div class="ugc-rate">
            <div class="w-rate-star">
                <div class="rate-star-gray rate-star-gray-yellow rate-star-gray12">
                    <div class="rate-star-real j-rate-star-real" style="width:0px;"></div>
                </div>
            </div><div class="rate-score">
        </div>
        </div>
    </a>
    <div class="w-ugc-label">
        <div class="ugc-label-wrap">
            <div class="ugc-label-content">
                <a id="all" href="javascript:;" class="ugc-label-type ugc-label-type1 ugc-label-chosen " onclick="getAppraise(1,0)"><span class="label-text">全部</span></a>
                <a id="good" href="javascript:;" class="ugc-label-type ugc-label-type1 " onclick="getAppraise(1,1)"><span class="label-text">好评</span></a>
                <a id="bad" href="javascript:;" class="ugc-label-type ugc-label-type-1 " onclick="getAppraise(1,-1)"><span class="label-text">差评</span></a>
            </div>
        </div>
        <a href="javascript:;" class="ugc-more"></a>
    </div>
</section>
<ul id="j-w-ugc-list" class="w-ugc-list">
</ul>
<div class="ugc-viewmore">
    <div class="w-viewmore clearfix">
        <a id="j-viewmore" href="javascript:;" class="op-btn more hide disabled" mon="area=findAll&amp;element=findAll">已显示全部</a>
        <a href="javascript:;" id="j-gotop" class="op-btn gotop gotop-new" mon="area=toTop&amp;element=toTop" style="display: none;">回到顶部</a>
    </div>
</div>

<link rel="passport_header_css" href="//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/login/widget/update_passport/passport.css">
<span id="update_passport_dialog_callback_wrap" style="display:none;">
<img class="u-title-img" data-src="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/login/widget/update_passport/image/success_400be3e.png">
</span>




<script type="text/javascript">

    prev_chosen = $('#all');

    $(document).ready(function(){

        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/foodlist/${window.id}",//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                getAppraise(1,0)
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        })

    });

    function getAppraise(pageIndex, appraiseType) {

        $('.ugc-viewmore').remove();

        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/appraiselist/${window.id}/"+pageIndex+"/"+appraiseType,//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {

                if(appraiseType == 0){
                    prev_chosen.removeClass('ugc-label-chosen')
                    $('#all').addClass('ugc-label-chosen');
                    prev_chosen = $('#all');
                }
                if(appraiseType == 1){
                    $('#good').addClass('ugc-label-chosen');
                    prev_chosen.removeClass('ugc-label-chosen')
                    prev_chosen = $('#good');
                }
                if(appraiseType == -1){
                    $('#bad').addClass('ugc-label-chosen');
                    prev_chosen.removeClass('ugc-label-chosen')
                    prev_chosen = $('#bad');
                }
                writeAppraise(data,appraiseType)
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        })
    }

    function writeAppraise(data,appraiseType) {

        appraiselist = "";
        for (var i = 0; i < data.list.length; i++) {
            appraiselist += "    <li class=\"w-ugc-content\">\n" +
                "        <div class=\"figure\">\n" +
                "            <div class=\"head-portrait\" style=\"background-image:url(https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/baidu/wh%3D55%2C55/sign=a774a320e550352ab1342d0d666fcec7/730e0cf3d7ca7bcb97c16bb8b2096b63f724a8eb.jpg)\"></div>\n" +
                "        </div>\n" +
                "        <div class=\"w-ugc-content-r\">\n" +
                "            <div class=\"ugc-user-info clearfix\">\n" +
                "                <span class=\"ugc-username\">"+data.list[i].studentid.slice(0,3)+"****"+data.list[i].studentid.slice(-3)+"</span><span class=\"ugc-date\">"+data.list[i].date+"</span>\n" +
                "                " +
                "            </div>\n" +
                "            <div class=\"ugc-star-area\">\n" +
                "                <div class=\"w-rate-star\">\n" +
                "                    <div class=\"rate-star-gray rate-star-gray-yellow rate-star-gray9\">\n" +
                "                        <div class=\"rate-star-real j-rate-star-real\" style=\"width:70px;\"></div>\n" +
                "                    </div>\n" +
                "                </div></div>\n" +
                "            <div class=\"ugc-comment\">\n" +
                "                <div class=\"ugc-comment-content\">\n" +
                "                    <p class=\"ugc-comment-overtext\">"+data.list[i].info+"</p>\n" +
                "                </div>\n" +
                "                <a href=\"javascript:;\" class=\"ugc-comment-more\"></a>\n" +
                "            </div>\n" +
                "\n" +
                "        </div>\n" +
                "    </li>"

        }
        if(data.pageIndex < data.pageSize){
            appraiselist += "<div class=\"ugc-viewmore\">\n" +
                "    <div class=\"w-viewmore clearfix\">\n" +
                "        <a id=\"j-viewmore\" href=\"javascript:;\" class=\"op-btn more\" onclick='getAppraise("+(parseInt(data.pageIndex) + parseInt(1))+","+appraiseType+")'>点击加载更多</a>\n" +
                "        <a href=\"javascript:;\" id=\"j-gotop\" class=\"op-btn gotop gotop-new\" mon=\"area=toTop&amp;element=toTop\" style=\"display: none;\">回到顶部</a>\n" +
                "    </div>\n" +
                "</div>";
        }else {
            appraiselist += "<div class=\"ugc-viewmore\">\n" +
                "    <div class=\"w-viewmore clearfix\">\n" +
                "        <a id=\"j-viewmore\" href=\"javascript:;\" class=\"op-btn more\">全部加载完毕</a>\n" +
                "        <a href=\"javascript:;\" id=\"j-gotop\" class=\"op-btn gotop\">回到顶部</a>\n" +
                "    </div>\n" +
                "</div>";
        }
        if(data.pageIndex != 1)
            $('.w-ugc-list').append(appraiselist);
        else
            $('.w-ugc-list').html(appraiselist);
    }
    $('#j-gotop').on('click', function () {
        // usertrack.send($(this).attr("mon"), this);
        window.scrollTo(0, 0);
        var gotop = $('#j-gotop');
        var body = $(document.body);
        var height = window.innerHeight;
        gotop.hide();
        //返回顶部按钮显示与否
        onScroll.add(function() {
            if (body.scrollTop() < height) {
                gotop.hide();
            } else {
                gotop.show();
            }
        })
    });




</script>
<script>
    F.context('log-info-ext', []);
</script>
<script type="text/javascript" src="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_0_c9e5731.js"></script>
<script type="text/javascript">require.resourceMap({"res":{"common:static/lib/mod.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/lib/mod_bb4183f.js","pkg":"common:p15"},"common:widget/footer/footer.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/footer/footer_e808364.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/tools/tools.js"]},"common:widget/lancer/widget/emitter.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/widget/emitter_574541d.js","pkg":"common:p15"},"common:widget/lib/gmu/zepto/zepto.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lib/gmu/zepto/zepto_d920784.js","pkg":"common:p15"},"common:widget/onscroll/onscroll.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/onscroll/onscroll_2617464.js","pkg":"common:p15"},"common:widget/ui/cookie/cookie.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/cookie/cookie_2709005.js","pkg":"common:p15"},"common:widget/ui/dialog/dialog.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/dialog/dialog_9a64868.js","pkg":"common:p15"},"common:widget/ui/http/http.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/http/http_dfddabb.js","pkg":"common:p15"},"common:widget/ui/lazyload/lazyload.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/lazyload/lazyload_7dde6a4.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/ui/map_convert/map_convert.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/map_convert/map_convert_2fb078c.js","pkg":"common:p15"},"common:widget/ui/scrollstop/scrollstop.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/scrollstop/scrollstop_9db814d.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/ui/storage/storage.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/storage/storage_c8e8d52.js","pkg":"common:p15"},"common:widget/ui/toast/toast.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/toast/toast_ebbd0ec.js","pkg":"common:p15"},"common:widget/ui/tools/tools.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/tools/tools_05b4982.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/cookie/cookie.js"]},"common:widget/ui/usertrack/main.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/usertrack/main_43a7ca1.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/cookie/cookie.js","common:widget/lancer/widget/emitter.js","common:widget/ui/xiaoliuliang/log.js"]},"common:widget/ui/usertrack/usertrack.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/usertrack/usertrack_a25ab4b.js","pkg":"common:p15","deps":["common:widget/ui/usertrack/main.js","common:widget/ui/cookie/cookie.js","common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/gotop/gotop.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/gotop/gotop_8e930e6.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/onscroll/onscroll.js"]},"common:widget/sync_bduss/sync_bduss.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/sync_bduss/sync_bduss_d82b630.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/cookie/cookie.js"]},"common:widget/ui/map_geolocation/map_geolocation.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/map_geolocation/map_geolocation_86533b7.js","pkg":"common:p15","deps":["common:widget/ui/map_convert/map_convert.js","common:widget/ui/cookie/cookie.js","common:widget/lib/gmu/rsa_encrypt/encrypt.js","common:widget/ui/session/session.js","common:widget/ui/usertrack/usertrack.js","common:widget/ui/http/http.js","common:widget/ui/tools/tools.js"]},"common:widget/ui/suggestion/suggestion.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/suggestion/suggestion_938514c.js","pkg":"common:p15","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/usertrack/usertrack.js","common:widget/ui/http/http.js","common:widget/ui/storage/storage.js"]},"common:widget/lancer/popup/align.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/popup/align_e12d89b.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/popup/mask.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/popup/mask_abec0ed.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/popup/position.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/popup/position_979e668.js","pkg":"common:p18"},"common:widget/lancer/util/string.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/util/string_90f08aa.js","pkg":"common:p18"},"common:widget/lancer/widget/attribute.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/widget/attribute_17fb870.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/widget/class.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/widget/class_60d3c58.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/widget/status.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/widget/status_5b1502b.js","pkg":"common:p18"},"common:widget/ui/imageView/hammer.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/imageView/hammer_afbb79d.js","pkg":"common:p18"},"common:widget/ui/imageView/imageView.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/imageView/imageView_c6f4d7c.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/imageView/hammer.js"]},"common:widget/ui/validator/validator.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/validator/validator_f76ba96.js","pkg":"common:p18"},"common:widget/lancer/util.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/util_ffcf571.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/lancer/util/string.js"]},"common:widget/lancer/widget/main.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/widget/main_aa3e688.js","pkg":"common:p18","deps":["common:widget/lancer/widget/class.js","common:widget/lancer/widget/emitter.js","common:widget/lancer/widget/attribute.js","common:widget/lancer/widget/status.js"]},"common:widget/lancer/Popup.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Popup_835a1dd.js","pkg":"common:p18","deps":["common:widget/lancer/Widget.js","common:widget/lib/gmu/zepto/zepto.js","common:widget/lancer/popup/position.js","common:widget/lancer/popup/mask.js","common:widget/lancer/popup/align.js","common:widget/lancer/popup/animate.js"]},"common:widget/lancer/Widget.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Widget_160a2fd.js","pkg":"common:p18","deps":["common:widget/lancer/widget/main.js","common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/dialog/alert.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/dialog/alert_b41d43e.js","pkg":"common:p18","deps":["common:widget/lancer/dialog/base.js"]},"common:widget/lancer/dialog/base.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/dialog/base_1fa4bdb.js","pkg":"common:p18","deps":["common:widget/lancer/Popup.js","common:widget/lancer/util.js","common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/dialog/confirm.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/dialog/confirm_ec94725.js","pkg":"common:p18","deps":["common:widget/lancer/dialog/base.js"]},"common:widget/lancer/popup/animate.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/popup/animate_cebbafa.js","pkg":"common:p18","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/lancer/util.js"]},"common:widget/lancer/Dialog.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Dialog_1d58166.js","pkg":"common:p18","deps":["common:widget/lancer/dialog/base.js","common:widget/lancer/dialog/alert.js","common:widget/lancer/dialog/confirm.js"]},"common:widget/lancer/Toast.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Toast_f2bb1db.js","pkg":"common:p22","deps":["common:widget/lancer/Popup.js"]},"common:widget/lib/dep/etpl/main.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lib/dep/etpl/main_ee0ac07.js","pkg":"common:p22"},"common:widget/biz/etpl.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/biz/etpl_8af7137.js","pkg":"common:p22","deps":["common:widget/lib/dep/etpl/main.js"]},"common:widget/biz/List.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/biz/List_ec905fd.js","pkg":"common:p22","deps":["common:widget/lancer/Widget.js","common:widget/lib/gmu/zepto/zepto.js","common:widget/biz/etpl.js","common:widget/ui/usertrack/usertrack.js","common:widget/lancer/Toast.js"]},"common:static/lib/swiper/idangerous.swiper.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/lib/swiper/idangerous.swiper_733a50e.js","pkg":"common:p27"},"common:widget/lib/gmu/rsa_encrypt/encrypt.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lib/gmu/rsa_encrypt/encrypt_b9d6875.js","pkg":"common:p27"},"common:widget/ui/session/session.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/session/session_519ee86.js","pkg":"common:p27"},"common:widget/ui/xiaoliuliang/utils.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/xiaoliuliang/utils_b9c43a3.js","pkg":"common:p27"},"common:widget/ui/xiaoliuliang/log.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/xiaoliuliang/log_898b4bf.js","pkg":"common:p27","deps":["common:widget/ui/xiaoliuliang/utils.js"]},"common:widget/header/back_link.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/header/back_link_c221f29.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/http/http.js"]},"common:widget/header/header.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/header/header_fc6f0ca.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/header/back_link.js"]},"common:widget/lancer/lib/lang.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/lib/lang_224aa90.js","pkg":"common:p27"},"common:widget/lancer/lib.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/lib_17b5035.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/lancer/lib/lang.js"]},"common:widget/lancer/Picker.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Picker_81af435.js","pkg":"common:p27","deps":["common:widget/lancer/Widget.js","common:widget/lib/gmu/zepto/zepto.js","common:widget/lancer/lib.js"]},"common:widget/lancer/Switch.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Switch_6d8036c.js","pkg":"common:p27","deps":["common:widget/lancer/Widget.js","common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/lancer/Tip.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/Tip_70815b9.js","pkg":"common:p27","deps":["common:widget/lancer/Popup.js"]},"common:widget/lancer/template.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/template_67ee67a.js","pkg":"common:p27","deps":["common:widget/lib/dep/etpl/main.js"]},"common:widget/lancer/tip/base.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/tip/base_9b4048a.js","pkg":"common:p27"},"common:widget/lancer/util/base.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/lancer/util/base_d7a01df.js","pkg":"common:p27"},"common:widget/mall_merchant/mall_merchant.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/widget/mall_merchant/mall_merchant_fa25981.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js"]},"common:widget/sync_stoken/sync_stoken.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/sync_stoken/sync_stoken_86b2529.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/cookie/cookie.js"]},"common:widget/ui/bestpay/index.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/bestpay/index_2cc35a8.js","pkg":"common:p27"},"common:widget/ui/cookie/cookie.old.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/cookie/cookie.old_f555287.js","pkg":"common:p27"},"common:widget/ui/getapp/getapp.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/getapp/getapp_0ebfb77.js","pkg":"common:p27"},"common:widget/ui/usertrack/usertrack-old.js":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/widget/ui/usertrack/usertrack-old_5ab8cce.js","pkg":"common:p27","deps":["common:widget/lib/gmu/zepto/zepto.js","common:widget/ui/cookie/cookie.js"]}},"pkg":{"common:p15":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_0_c9e5731.js"},"common:p18":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_3_7bb4d76.js"},"common:p22":{"url":"//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_7_f4fe1d0.js"},"common:p27":{"url":"//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_other_js_12801ce.js"}}});</script><script type="text/javascript" src="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_other_js_12801ce.js"></script>
<script type="text/javascript" src="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_3_7bb4d76.js"></script>
<script type="text/javascript" src="//gss0.bdstatic.com/8r1VaTipBBZS8tG8nYGOKT67gB5-reHg-_/static/common/pkg/common_js_7_f4fe1d0.js"></script>
<script type="text/javascript" src="//gss0.bdstatic.com/8r1VaTipBBZV8tG8nYGOKT67gB5-reHg-_/static/detail/pkg/detail_js_1_fb36443.js"></script>
<script type="text/javascript">!function(){    F.context('enable-back-optimize', false);
}();
!function(){        require.async(['common:widget/header/header.js'], function (header) {
    header.init('#header');
});
}();
!function(){    require.async(['detail:widget/ugc/ugc_label/ugc_label.js'],
    function (ugcLabel) {
        ugcLabel.init('#j-w-ugc-list');
    }
);
}();
!function(){        require.async(["detail:widget/ugc/ugc_list/ugc_list.js"],
    function (ugcList) {
        ugcList.init();
    }
);
}();
!function(){            if (navigator && navigator.standalone) {
    require.async("common:widget/lib/gmu/zepto/zepto.js", function($) {
        $(document).on("click", "a", function(e){
            e.preventDefault();
            location.href = $(e.currentTarget).attr("href");
        });
    });
}
}();
!function(){	require.async(['common:widget/lib/gmu/zepto/zepto.js', 'common:widget/ui/usertrack/usertrack.js'], function($, usertrack){
    // 初始化点击监听
    usertrack.init();

    usertrack.register(".ns-track[mon]"); //click日志监听，非a[mod]情况

    usertrack.send({
        element_type: "pv"
    });
});

}();
!function(){        var $ = require('common:widget/lib/gmu/zepto/zepto.js'),
    Http = require('common:widget/ui/http/http.js'),
    Cookie = require("common:widget/ui/cookie/cookie.js"),
    Dialog = require("common:widget/ui/dialog/dialog.js");
}();
!function(){        require.async(["common:widget/sync_stoken/sync_stoken.js"], function(sync_stoken){
    sync_stoken.init();
});
}();
!function(){        require.async(["common:widget/ui/map_geolocation/map_geolocation.js"],function(){
    window.geolocation.getCurrentPosition(null, null, {
        usePositionIn30Min: false,
        needAddress: false
    });
});
}();
!function(){    (function () {if (!(!('performance' in window) || !('getEntriesByType' in window.performance) || !(window.performance.getEntriesByType('resource') instanceof Array))) {var LOG_REQUEST_URL = window.location.host.indexOf('m.nuomi.com') !== -1 ? '//m.nuomi.com/v.gif?' : 'http://www.nuomi.com/v.gif?';window.addEventListener('load', function () {/* 不延后一点，loadEventEnd取不到*/setTimeout(function () {var events = ['navigationStart','redirectStart','redirectEnd','fetchStart','domainLookupStart','domainLookupEnd','connectStart','connectEnd','secureConnectionStart','requestStart','responseStart','responseEnd','domLoading','domInteractive','domContentLoadedEventStart','domContentLoadedEventEnd','domComplete','loadEventStart','loadEventEnd'];var timing = window.performance.timing;var zero = timing.navigationStart;var mon = document.body.getAttribute('mon') || 'page=unknown';var query = ['performance=1', 'zero=' + zero, mon];for (var i = 0; i < events.length; i++) {var event = events[i];var eventTime = timing[event];if (typeof eventTime !== 'undefined') {var delta = eventTime - zero;query.push(event + '=' + (delta < 0 ? 0 : delta));}}var img = document.createElement('img');img.style.display = 'none';document.body.appendChild(img).src = LOG_REQUEST_URL + query.join('&');}, 100);});}})();
}();</script>
<img style="display: none !important;" src="//m.nuomi.com/v.gif?performance=1&amp;zero=1564479787603&amp;position=&amp;navigationStart=0&amp;redirectStart=0&amp;redirectEnd=0&amp;fetchStart=9&amp;domainLookupStart=9&amp;domainLookupEnd=9&amp;connectStart=9&amp;connectEnd=9&amp;secureConnectionStart=0&amp;requestStart=12&amp;responseStart=308&amp;responseEnd=317&amp;domLoading=319&amp;domInteractive=841&amp;domContentLoadedEventStart=841&amp;domContentLoadedEventEnd=853&amp;domComplete=1723&amp;loadEventStart=1723&amp;loadEventEnd=1724" hidden="">
</body></html>

<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/8/6
  Time: 16:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <link href="//p0.meituan.net" rel="dns-prefetch">
    <link href="//p1.meituan.net" rel="dns-prefetch">
    <link href="//s3plus.meituan.net" rel="dns-prefetch">
    <script src="${pageContext.request.contextPath }/statics/js/jquery-1.10.1.min.js"></script>
    <title>个人信息-叮当食堂</title>
    <meta name="meituan_check">
    <meta name="applicable-device" content="mobile">


    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1, user-scalable=no">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="icon" href="//p1.meituan.net/codeman/44f8f3736d61a550dc0fa7bc1a70b6056518.ico" type="image/x-icon">


    <link rel="apple-touch-icon-precomposed" sizes="57x57"
          href="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/startup/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120"
          href="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/startup/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="196x196"
          href="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/startup/apple-touch-icon-196x196-precomposed.png">
    <link rel="apple-touch-startup-image"
          href="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/startup/apple-touch-startup-image-640x1096.png"
          media="(device-height:568px)">
    <link rel="apple-touch-startup-image"
          href="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/startup/apple-touch-startup-image-640x920.png"
          media="(device-height:480px)">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="address=no">



    <style>
        @font-face {
            font-family: 'cate_icon';
            src: url(//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/fonts/cate4.woff?v7) format("woff"), url(//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/fonts/cate4.otf?v7);
        }

        @font-face {
            font-family: 'base_icon';
            src: url(//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/fonts/base14.woff) format("woff"), url(//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/css/i/fonts/base14.otf);
        }

    </style>
    <style>
        .quick-app .navbar,
        .quick-app .banner-download,
        .quick-app #nav-bread,
        .quick-app footer {
            display: none;
        }
    </style>
    <link href="../statics/mobile/bdcss/eve.css" rel="stylesheet" onload="MT.pageData.eveTime=Date.now()">
    <style>
        .my-account {
            color: #333;
            position: relative;
            background: -webkit-linear-gradient(top, #e1dace, #dfc8b4);
            border-bottom: 1px solid #C0BBB2;
            display: block;
            height: 1.6rem;
            position: relative;
            padding-right: .2rem;
        }

        .my-account > img {
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 0;
        }

        .my-account .user-info {
            z-index: 1;
            position: relative;
            height: 100%;
            padding: .28rem .2rem;
            margin-right: .2rem;
            box-sizing: border-box;
            padding-left: 2rem;
            font-size: .24rem;
            color: #666;
        }

        .my-account .uname {
            font-size: .3rem;
            color: #333;
            margin-top: .1rem;
            margin-bottom: .25rem;
        }

        .my-account strong {
            color: #FF9712;
            font-weight: normal;
        }

        .my-account .avater {
            position: absolute;
            top: .2rem;
            left: .4rem;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
        }

        .my-account .more.more-weak:after {
            border-color: #666;
            -webkit-transform: translateY(-50%) scaleY(1.2) rotateZ(-135deg);
        }

        .orderindex li {
            display: inline-block;
            width: 24%;
            text-align: center;
            position: relative;
        }

        .orderindex li .react {
            padding: .28rem 0;
        }

        .orderindex .text-icon {
            display: block;
            font-size: .6rem;
            margin-bottom: .18rem;
        }

        .orderindex .amount-icon {
            position: absolute;
            left: 50%;
            top: .16rem;
            color: white;
            background: #EC5330;
            border-radius: 50%;
            padding: .08rem .06rem;
            min-width: .28rem;
            font-size: .24rem;
            margin-left: .1rem;
            display: none;
        }

        .order-icon {
            display: inline-block;
            width: .5rem;
            height: .5rem;
            text-align: center;
            line-height: .5rem;
            border-radius: .06rem;
            color: white;
            margin-right: .25rem;
            margin-top: -.06rem;
            margin-bottom: -.06rem;
            background-color: #F5716E;
            vertical-align: initial;
            font-size: .3rem;
        }

        .order-all {
            background: #FE8C00;
            border-radius: 0.04rem;
        }

        .order-zuo, .order-jiudian {
            background-color: #F5716E;
        }

        .order-fav {
            background-color: #0092DE;
        }

        .order-card {
            background-color: #EB2C00;
        }

        .order-lottery {
            background-color: #F5B345;
        }

        .level-icon {
            vertical-align: middle;
            margin-left: .2rem;
        }

        .icon-point {
            display: inline-block;
            width: .5rem;
            height: .5rem;
            border-radius: .06rem;
            margin-right: .25rem;
            margin-top: -.06rem;
            margin-bottom: -.06rem;
            background-color: #F5716E;
            vertical-align: middle;
            background: url(//p0.meituan.net/mmc/7a85a206820814190b1fc332c10f37cf3081.png);
            background-size: 100%;

        }

        .icon-treasure {
            display: inline-block;
            width: .5rem;
            height: .5rem;
            border-radius: .06rem;
            margin-right: .25rem;
            margin-top: -.06rem;
            margin-bottom: -.06rem;
            background-color: #F5716E;
            vertical-align: middle;
            background: url(//p1.meituan.net/tuanpic/7514a5a1756103ba382f3a1a605882621188.png);
            background-size: 100%;
        }

        .icon-new {
            display: inline-block;
            background: url(//p1.meituan.net/mmc/304e239b309615cc12f7565729a709e12024.png);
            background-size: 100%;
            width: .41rem;
            height: .21rem;
            background-repeat: no-repeat;
            vertical-align: top;
            margin-left: .1rem;
        }
    </style>

</head>
<body id="account" data-com="pagecommon" data-page-id="100039" data-iswebview="false">
<style>
    .navbar {
        height: 1.01rem;
        display: -webkit-box;
        display: -ms-flexbox;
        position: relative;
        background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
        border: none;
    }

    .navbar .nav-city {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #222222;
        margin: 0.31rem 0 0.31rem 0.37rem;
    }

    .navbar .box-search {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        line-height: .64rem;
        -webkit-box-sizing: border-box;
        position: relative;
        margin-top: .2rem;
        opacity: 0.9;
        background: #FFFFFF;
        border-radius: 0.18rem;
        width: 4.85rem;
        height: 0.64rem;
        color: #999999;
    }

    .navbar .box-search span {
        font-size: .26rem;
        box-sizing: border-box;
        width: 100%;
        color: #999999;
        padding-left: 0rem;
        display: contents;
    }

    .nav-city img.icn_down {
        width: 0.16rem;
        height: 0.09rem;
        padding-right: 0.315rem;
        margin-left: -0.1rem;
        margin-top: -0.07rem;
    }

    .navbar .nav-wrap-left {
        width: 1.9rem;
    }

    .navbar .nav-wrap-right {
        width: 1.7rem;
        text-align: right;
        padding-right: .2rem;
    }

    .navbar .nav-wrap-right a {
        width: auto;
        padding: .2rem 0 0 .2rem;
    }

    .nav-wrap-right img.icn_mine {
        width: 0.48rem;
        height: 0.48rem;
    }

    a.react img.icn_search {
        width: 0.28rem;
        height: 0.28rem;
        padding: 0.15rem 0.13rem 0.16rem 0.27rem;
    }

    a.react .nav-btn img.icn_home {
        width: 0.48rem;
        height: 0.48rem;
    }

    a.back img.icn_back {
        width: 0.2rem;
        height: 0.36rem;
    }

    .navbar .h1.nav-header {
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        color: #222222;
    }

    .nav-btn img.icn_search_2 {
        width: 0.48rem;
        height: 0.48rem;
        padding-right: 0.2rem;
    }

    .nav-btn img.icn_edit {
        width: 0.48rem;
        height: 0.48rem;
    }

    .nav-btn img.icn_menu {
        width: 0.48rem;
        height: 0.48rem;
    }

    img.icn_drop_home, img.icn_drop_mine, img.icn_drop_search {
        width: 0.48rem;
        height: 0.48rem;
    }

    .navbar .nav-dropdown {
        position: absolute;
        right: .04rem;
        top: 1rem;
        width: 2rem;
        opacity: 1;
        -webkit-transition: height .1s;
        background: #FFFFFF;
        color: #222222;
        box-shadow: 0 0.12rem 0.6rem 0 rgba(196, 196, 196, 0.60);
        border-radius: 0.1rem;
        overflow: visible;
        z-index: 100;
        display: none;
    }

    .nav-dropdown li {
        height: .83rem;
        line-height: .83rem;
        border-bottom: none;
        text-align: center;
    }

    .nav-dropdown.active {
        display: block !important;
        height: 2.5rem;
        width: 2rem;
    }

    .navbar .nav-dropdown:before {
        content: "";
        background-image: url('https://p0.meituan.net/travelcube/dc0f73a6ecc53ad44da9d5bc10ceff96421.png');
        background-size: contain;
        display: block;
        width: 0.38rem;
        height: 0.12rem;
        position: absolute;
        top: -0.12rem;
        right: 0.2rem;
        box-shadow: 0 0 0 0 rgba(196, 196, 196, 0.60);
        border-radius: 0.05rem;
    }
</style>
<header class="navbar">
    <div class="nav-wrap-left">

        <a class="react back" href="${pageContext.request.contextPath}/main">
            <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" class="icn_back">
        </a>
    </div>
    <span class="nav-header h1">个人信息</span>
    <div class="nav-wrap-right">

        <a class="react" gaevent="imt/hd/home" href="${pageContext.request.contextPath}/main">
                                <span class="nav-btn">
                                    <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
                                         class="icn_home">
                                </span>
        </a>


    </div>
    <div id="nav-dropdown" class="nav-dropdown">
        <ul>
            <li><a class="react" gaevent="imt/hd/index" href="${pageContext.request.contextPath}/main"><img
                    src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
                    class="icn_drop_home">
                <space></space>
                首页</a></li>
        </ul>
    </div>
</header>

<div id="tips"></div>

<div><a class="my-account" gaevent="imt/account/myinfo" href="//i.meituan.com/account/myinfo">
    <img src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png">
    <img class="avater"
         src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/pic-default.png">
    <div class="user-info more more-weak">
        <p class="uname">${user.stuname}<i class="level-icon level0"></i></p>
        <p>今日花费：<strong>${consume}</strong>元</p>
    </div>
</a></div>


<dl class="list">
    <dd>
        <a class="react" href="${pageContext.request.contextPath}/order/全部">
            <div class="more more-weak">
                <i class="text-icon order-all order-icon">⎕</i>全部订单<span data-key="all" class="more-after"></span>
            </div>
        </a>
    </dd>
    <dd>
        <ul class="orderindex">
            <li><a href="${pageContext.request.contextPath}/order/待付款" class="react">
                <i class="text-icon">⌸</i>
                <span>待付款</span>
                <span data-key="unpaid" class="amount-icon"></span>
            </a>
            </li>
            <li><a href="${pageContext.request.contextPath}/order/待使用" class="react">
                <i class="text-icon">⌻</i>
                <span>待使用</span>
                <span data-key="unused" class="amount-icon"></span>
            </a>
            </li>
            <li><a href="${pageContext.request.contextPath}/order/待评价" class="react">
                <i class="text-icon">⌹</i>
                <span>待评价</span>
                <span data-key="needfeedback" class="amount-icon" style="display: block;">1</span>
            </a>
            </li>
            <li><a href="${pageContext.request.contextPath}/order/退款" class="react">
                <i class="text-icon">⌺</i>
                <span>退款/售后</span>
            </a>
            </li>
        </ul>
    </dd>
</dl>
<style>
    footer {
        background: #FFFFFF;
    }

    .footer-bar {
        margin-top: -0.3rem;
        padding-top: 0.3rem;
        padding-left: 0.3rem;
    }

    .footer-nav li > a {
        color: #FE8C00;
        font-weight: 400;
        font-size: 0.22rem;
    }

    .footer-links {
        margin: .3rem .2rem;
        font-size: .22rem;
        text-align: center;
        color: #646464;
        font-family: PingFangSC-Medium;
    }

    .footer-links a {
        color: #646464;
        font-family: PingFangSC-Regular;
        font-size: inherit;
    }

    .footer-links a + a {
        padding-bottom: .2rem;
    }

    .m_city {
        color: #999999;
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        padding-right: 0.1rem;
    }

    .footer-copyright-text {
        background: #FFFFFF;
        font-size: inherit;
    }

    .footer-copyright a {
        font-size: inherit;
    }

    .pull-right {
        padding-top: 0.06rem;
    }

    .pull-right_2 {
        margin-bottom: -.3rem;
    }

    img.icn_local {
        width: 0.24rem;
        height: 0.274rem;
        margin-top: -0.06rem;
    }

    .city_name_a {
        background: #FFFFFF;
        padding-left: 0;
        color: #222222;
        margin-top: -0.06rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Medium;
    }

    .btn-login, .btn-reg {
        background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
        border-radius: 0.1rem;
        font-size: 0.26rem;
        color: #222222;
        width: 1.1rem;
        height: 0.54rem;
        padding: 0;
        font-family: PingFangSC-Medium;
        line-height: 0.54rem;
    }

    .top-btn {
        width: 1rem;
        height: 1rem;
        background: none;
    }

    img.icn_top {
        width: 1rem;
        height: 1rem;
    }
</style>


<div id="meituan_check"><br><br><br></div>
<script>

    $(document).ready(function(){
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/orderlist/${user.stuno}",//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                orderlist = "    <li><a href=\"${pageContext.request.contextPath}/order/待付款\" class=\"react\">\n" +
                    "        <i class=\"text-icon\">⌸</i>\n" +
                    "    <span>待付款</span>\n" +
                    "    <span data-key=\"unpaid\" class=\"amount-icon\"";
                if(data.obligations>0){
                    orderlist+=" style=\"display: block;\">"+data.obligations+"</span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }else {
                    orderlist+="></span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }
                orderlist +="<li><a href=\"${pageContext.request.contextPath}/order/待使用\" class=\"react\">\n" +
                    "        <i class=\"text-icon\">⌻</i>\n" +
                    "    <span>待使用</span>\n" +
                    "    <span data-key=\"unused\" class=\"amount-icon\"";
                if(data.useing>0){
                    orderlist+=" style=\"display: block;\">"+data.useing+"</span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }else {
                    orderlist+="></span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }

                orderlist += "        <li><a href=\"${pageContext.request.contextPath}/order/待评价\" class=\"react\">\n" +
                    "        <i class=\"text-icon\">⌹</i>\n" +
                    "    <span>待评价</span>\n" +
                    "    <span data-key=\"needfeedback\" class=\"amount-icon\"";
                if(data.evaluating>0){
                    orderlist+=" style=\"display: block;\">"+data.evaluating+"</span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }else {
                    orderlist+="></span>\n" +
                        "        </a>\n" +
                        "        </li>"
                }
                orderlist+="<li><a href=\"${pageContext.request.contextPath}/order/退款\" class=\"react\">\n" +
                    "        <i class=\"text-icon\">⌺</i>\n" +
                    "    <span>退款/售后</span>\n" +
                    "    </a>\n" +
                    "    </li>";

                $('.orderindex').html(orderlist);
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载数据失败！" + data);
            }
        });
    });



</script>

</body>
</html>

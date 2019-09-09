<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/7/28
  Time: 15:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="utf-8"/>
    <title>【百度糯米】高品质生活服务网站！</title>
    <script>
        /* 配置需要统计的模块，以及整体的抽样率，不需要的模块不配置即可（可点击上面的模块名称自动隐藏） */
        window.alogObjectConfig = {
            sample: '0.005', // 配置整体的抽样率（下面各个统计模块的抽样是在此基础上进行的再抽样），https协议的网页必须配置(需要保证抽样后的PV控制在100万以内)，http的可以不配置（默认为1）
            product: '765',  // 必须, DP平台产品线id
            page: '765_1',  // 必须, DP平台页面id
            monkey_page: '',  // 如果页面已经有hunter平台的monkey，则为monkey的pageId, 否侧无需该字段
            speed_page: '',  // 如果页面已经有webspeed平台的性能监控，则为性能的page_id,否侧无需该字段
// 性能----------------------------------------------------------------------------------
            speed: {
                sample: '1'   // 抽样率, 0~1，建议使采样的pv控制在100万以内，必须要设定，否则统计不会生效
//custom_metrics: ['c_item1','p_item3']  //自定义的性能指标，自动上报，只有这些指标都统计完毕之后数据才会发送
//special_pages: [{id:34, sample:1}]  // 特殊页面，和老的性能配置一致
            },
// 访问和点击----------------------------------------------------------------------------
            monkey: {
                sample: '1'   // 抽样率, 0~1  建议使采样的pv控制在50万以内，必须要设定，否则统计不会生效
//hid: ''       // 兼容hunter的monkey，monkey实验的ID
//pageflag: ''  // 个别特殊产品线使用hunter的monkey的pageflag
            },
// js异常，配合FIS插件还可以自动加try/catch监控，详见‘帮助文档’--------------------------
            exception: {
                sample: '1'   // 抽样率, 0~1  建议使采样的pv控制在50万以内，必须要设定，否则统计不会生效
            },
        };
        void function(a,b,c,d,e,f,g){a.alogObjectName=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=a[e].l||+new Date,d="https:"===a.location.protocol?"https://fex.bdstatic.com"+d:"http://fex.bdstatic.com"+d;var h=!0;if(a.alogObjectConfig&&a.alogObjectConfig.sample){var i=Math.random();a.alogObjectConfig.rand=i,i>a.alogObjectConfig.sample&&(h=!1)}h&&(f=b.createElement(c),f.async=!0,f.src=d+"?v="+~(new Date/864e5)+~(new Date/864e5),g=b.getElementsByTagName(c)[0],g.parentNode.insertBefore(f,g))}(window,document,"script","/hunter/alog/alog.mobile.min.js","alog"),void function(){function a(){}window.PDC={mark:function(a,b){alog("speed.set",a,b||+new Date),alog.fire&&alog.fire("mark")},init:function(a){alog("speed.set","options",a)},view_start:a,tti:a,page_ready:a}}();
        void function(n){var o=!1;n.onerror=function(n,e,t,c){var i=!0;return!e&&/^script error/i.test(n)&&(o?i=!1:o=!0),i&&alog("exception.send","exception",{msg:n,js:e,ln:t,col:c}),!1},alog("exception.on","catch",function(n){alog("exception.send","exception",{msg:n.msg,js:n.path,ln:n.ln,method:n.method,flag:"catch"})})}(window);
    </script>
    <meta name="location" content="province=北京;city=北京;coord=">
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" >
    <meta name="apple-mobile-web-app-capable" content="yes" >
    <meta name="keywords" content="百度糯米,本地生活服务,美食,电影,旅游,酒店,KTV" />
    <meta name="description" content="中国领先的互联网本地生活服务平台，精选美食、电影、旅游、酒店、结婚、休闲娱乐，以及鲜花、机票、充值等服务，惠享品质生活！" />
    <link rel="apple-touch-startup-image" href="/static/img/apple-touch/start.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/static/img/apple-touch/icon-57.png" />
    <!-- For the iPad mini and the first- and second-generation iPad (@1× display) on iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/img/apple-touch/icon-72.png" />
    <!-- For iPhone with @2× display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/img/apple-touch/icon-114.png" />
    <!-- For iPhone with @2× display running iOS ≥ 7: -->
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/img/apple-touch/icon-120.png">
    <!-- For iPad with @2× display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/img/apple-touch/icon-144.png" />
    <link rel="shortcut icon" href="/static/img/favicon.ico" />
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.10.1.min.js"></script>
    <script>
        var resourceMap = ({
            "album": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/album/album.d19fc64da602307eb46c.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/album/album.6f155b910dcaf8dcbf46b3f766da5681.css"
            ],
            "cate-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cate-list/cate-list.e0f297729eadc4f8b08d.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cate-list/cate-list.bf8b6d13134e6361fdd252029b75ebcb.css"
            ],
            "cbd-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-detail/cbd-detail.819626754a423481f14d.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-detail/cbd-detail.35b1e74086a97b081da4e66bede0df25.css"
            ],
            "cbd-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-list/cbd-list.ab93b9b92193de74e547.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/cbd-list/cbd-list.9d41c4533e786cd067532bcf218b299b.css"
            ],
            "common": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/common/common.14170162740e40f29391.js"
            ],
            "detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail/detail.8e916778e15a1c7859b0.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail/detail.976d81470075d5ac9a6d2f0337f474b3.css"
            ],
            "detail-trade": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail-trade/detail-trade.764bfaa72d81407e0d26.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/detail-trade/detail-trade.71d7dab2061ef4902c474b071b69a14c.css"
            ],
            "food-safe": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/food-safe/food-safe.53b2d70e2aea7b75ea92.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/food-safe/food-safe.e003bcb067686f3552abd5ab56a1d2b2.css"
            ],
            "hongbao-rule": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/hongbao-rule/hongbao-rule.235c560b397c2084bc38.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/hongbao-rule/hongbao-rule.67cc84637b4c38dbef31a0f6bbb104f7.css"
            ],
            "index": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/index/index.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/index/index.9021d7c62a7772ad842695cd35d25bb0.css"
            ],
            "life": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/life/life.88218f528e92a6d26768.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/life/life.d41d8cd98f00b204e9800998ecf8427e.css"
            ],
            "list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/list/list.87aab5ff2916b1843e25.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/list/list.10e672d6643eb4657a5147c8e4798c1c.css"
            ],
            "maintain": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/maintain/maintain.df56ea794d778fa91b84.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/maintain/maintain.f4974110791d4b714be094f008c3c8fb.css"
            ],
            "mall-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/mall-detail/mall-detail.38ac43e6b835f137d74a.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/mall-detail/mall-detail.ed52ac0f176a6908135473fcd7dffc9c.css"
            ],
            "merchant-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-detail/merchant-detail.b4ba70e7de06b56f63ab.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-detail/merchant-detail.2ea12d4864c0c8f30c19c6fc939002b4.css"
            ],
            "merchant-panorama": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-panorama/merchant-panorama.66e67bd9c78ff8d8498b.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/merchant-panorama/merchant-panorama.72a8fe6e081a4b62ad016fe0ba09c954.css"
            ],
            "na-food-insurance": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/na-food-insurance/na-food-insurance.c468ad91efd1025b2d83.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/na-food-insurance/na-food-insurance.61e620e73532c2966a76eb7b836648b1.css"
            ],
            "nuomi-middle": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/nuomi-middle/nuomi-middle.bc73b304563fcdad516f.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/nuomi-middle/nuomi-middle.7a528a3e0de1ce59d08d2eebcfaf907c.css"
            ],
            "pos-login": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-login/pos-login.e569cba6c93c0e6fb95e.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-login/pos-login.117ab7522422a7cf14b7e65c3b7f4795.css"
            ],
            "pos-result": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-result/pos-result.3f284d0745281062e8d8.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pos-result/pos-result.7251febf7cf88f40edf588183573cfcf.css"
            ],
            "pre-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pre-detail/pre-detail.78b331d0cc3af082017b.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/pre-detail/pre-detail.fc143cfab7619e7a847661e76d77e255.css"
            ],
            "qunar-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-detail/qunar-detail.40e5fd6330e11fe238f7.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-detail/qunar-detail.7f8400bd8f6c7c01c8ad5d80cac5961c.css"
            ],
            "qunar-merchant-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-merchant-detail/qunar-merchant-detail.26b4fceff464e2beccc4.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-merchant-detail/qunar-merchant-detail.b201172910c46bdbc187bee2e083fabd.css"
            ],
            "qunar-submission": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-submission/qunar-submission.e3df1e47fdde4c989844.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/qunar-submission/qunar-submission.69a4efab3692db07eb243d2028194da7.css"
            ],
            "rank": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/rank/rank.bd208c9263cc3ab59728.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/rank/rank.ee9e21bf96fbe225e05d7f559daefed6.css"
            ],
            "service": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service/service.3c9aeb9d3fb0ca5e09a7.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service/service.b39df1722689aeff456c9d429e151fc5.css"
            ],
            "service-addr-edit": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-edit/service-addr-edit.f3319cb703363a0a0798.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-edit/service-addr-edit.515c65a4dd0e81ac9ca1462bb83cd09d.css"
            ],
            "service-addr-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-list/service-addr-list.252bd03db029e71e21dc.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/service-addr-list/service-addr-list.e2b6fb203edf0bb4b2fc2b9af9545762.css"
            ],
            "simple-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/simple-list/simple-list.5cb91860df98e1e4c993.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/simple-list/simple-list.5150dd7fe38251f9ca9fca2525a1961f.css"
            ],
            "spu-detail": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/spu-detail/spu-detail.6cfa4489765122870473.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/spu-detail/spu-detail.329a8552e7627b53666bd4e40b0b6908.css"
            ],
            "submission": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/submission/submission.ecee56977666b1e157c8.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/submission/submission.b74bcc1ec8856a614077363db8c23807.css"
            ],
            "test": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/test/test.a4656b7a02e034d696c8.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/test/test.176f0aefde10853ba60a92c7baec1679.css"
            ],
            "unpaid-order-list": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/unpaid-order-list/unpaid-order-list.003775604786c75679ff.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/unpaid-order-list/unpaid-order-list.6f7825417f98a2ee7a3b0d7100b0d7b8.css"
            ],
            "user-balance": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance/user-balance.7b6627c2557b1a59bc18.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance/user-balance.ff87836ae9a738468f9053efc0a4d7d8.css"
            ],
            "user-balance-help": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance-help/user-balance-help.1ddfe6ee7310d0082536.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-balance-help/user-balance-help.a52cd4b55789dc8300c1cb2fab67b0be.css"
            ],
            "user-voucher": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher/user-voucher.20713783d837e56b6f2a.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher/user-voucher.e91f6c517bb70fc190875666400e9e6e.css"
            ],
            "user-voucher-help": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher-help/user-voucher-help.5dc38301a3437e3a5908.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/user-voucher-help/user-voucher-help.23006569165c5fa74462a8974b4cee0e.css"
            ],
            "yuyue": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue/yuyue.1f4a691b5fc4099b46d1.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue/yuyue.fc5da13a23a67c6fd0bc93549984c2ba.css"
            ],
            "yuyue-result": [
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue-result/yuyue-result.7dbb114844d5dcbe1efd.js",
                "//gss0.bdstatic.com/8r1VaTipBBZU8tG8nYGOKT67gB5-reHg-_/static/page/yuyue-result/yuyue-result.ad47bfa70e2b0399217533b73eb1b64a.css"
            ]
        });
        var commonAssets = resourceMap['common'] || [];
        var assets = resourceMap['index'] || [];
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

    <script>
        window.F = (function () {
            var b = {};
            return {
                context: function(p, r) {
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
                }
            }
        })();
    </script>
    <script>
        // 注意这里的hm原始url为hm.baidu.com
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement('script');
            hm.src = 'https://gsp0.baidu.com/7Ld1bjeh1BF3odCf/hm.js?0d631c1cdc3af1f31d3fc673f262f1c2';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
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

    <script>
        // 当前页面标识信息
        F.context('page-info', {
            name: 'index'
        });
        // 小流量平台命中信息
        F.context('hit', '');
        // 小流量平台统计字段
        F.context('log-info-ext', []);
        F.context('has-scheme', "bainuo:\/\/home?tsmcid=zhifang_index");
        F.context('activity_float', null);
    </script>
    <script>
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
    </script>
    <script>
        F.context('city-info', {"map_id":"131","pid":"100000000","is_show":"7","areaId":"100010000","areaName":"\u5317\u4eac\u5e02","shortName":"\u5317\u4eac","areaSpell":"beijing","order":"100","domainUrl":"bj"});
        F.context('back-optimize', true);
        F.context('is-dayuecheng', 0);
    </script>
</head>
<script> alog('speed.set', 'ht', +new Date); </script>
<body class="index-page" mon="position=index">
<script>
    F.context('urls', {
        logout: "http:\/\/wappass.baidu.com\/passport\/?logout&u=http%3A%2F%2Fm.nuomi.com%2Fwebapp%2Fuser%2Flogoutaccount&tpl=nuomi"});
    F.context('sync', 0);
    F.context('ad-bottom', {
        data: {"ad_type":"download_banner","data":{"linkUrl":"&tsmcid=zhifang_index","download":"http:\/\/d.nuomi.com?1010036g"},"ad_id":"82121d222253dca5bb9b45e56e171b2c"},
        isShow:  true});
</script>
<div class="main-wrapper" id="j-main-content">
    <div class="new-top" style="background-image: url(${pageContext.request.contextPath}/statics/mobile/img/bg-index.jpg)">

        <header id="j-index-header" class="header-wrapper index-header index-header-wrapper fixed" mon="area=header&action=click&element_type=nav">
            <%--<a class="city-link" href="//m.nuomi.com/changecity" mon="area=changeCity&element=changeCity">--%>
                <%--<span class="city-name">北京</span>--%>
                <%--<i class="arrow-down"></i>--%>
            <%--</a>--%>
            <a class="user-center-link" href="${pageContext.request.contextPath}/student/info">
                <i class="user"></i>
            </a>
            <section id="index-search-top-wrapper" class="index-search-top-wrapper no-banner">

                <form class="index-top-search">
                    <div class="input-wrapper">
                        <!-- <button class="submit" type="submit" data-role="submit"></button> -->
                        <input class="input" type="search" data-role="input"/>
                        <div class="input-other">
                            <button class="submit" type="submit" data-role="submit"></button>
                            <span class="input-placeholder">搜索商家或地点</span>
                        </div>
                    </div>
                </form>
            </section>
            <div class="title"></div>
        </header>
        <section class="index-catg" mon="area=class">
            <ul id="catg-wraps" class="wraps">
                <li class="wrap wrap10">
                    <a class="item item1 item-new" href="${pageContext.request.contextPath}/mobile/allFood" mon="position=1&content=美食" data-mon="1">
                        <div class="img"><img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/72f082025aafa40f41262056a764034f79f0195c.jpg"/></div>
                        <div class="text">
                            全部美食</div>
                    </a>
                    <a class="item item2 item-new" href="https://mdianying.baidu.com/?sfrom=newnuomi&amp;source=nuomi&amp;sub_channel=nuomi_wap_rukou1&amp;c=131" mon="position=2&content=电影演出" data-mon="2">
                        <div class="img"><img src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/aec379310a55b31907e7b4f94fa98226cffc171b.jpg"/></div>
                        <div class="text">
                            盖浇饭</div>
                    </a>
                    <a class="item item3 item-new" href="https://m.nuomi.com/component/maphotel/vuepage/channelpage/channelpage.html?src_from=nuomiwap&amp;_t_=1529567613&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=3&content=酒店" data-mon="3">
                        <div class="img"><img src="https://ss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/79f0f736afc37931ab02ffa7e7c4b74542a911d1.jpg"/></div>
                        <div class="text">
                            素菜</div>
                    </a>
                    <a class="item item4 item-new" href="http://m.baidu.com/aladdin.php?url=a00000jhgn1qR9NZ40TP7stczjUcE7MqbiC3zc4l_HTLfNks7bF121jsBCyJeWBvJqQJpaaCWElYhQLfuu56UkNxnPbyMw1FPFyqKkEfk5u-p5YH-tcuGS8xZWbdKn3M-ntNpgNy-mdoarrvAgcvU7xz0Js2-fbvum9UtWMq42gMbgYYx6.7Y_NR2Ar5Od66YSRPauSPDZ0hqMZW6C59eRYc2j3XdPj81wCEuB9HBmvI5HYe8MoZBmovU_-XlVi_nYQZZWuvXc.THdUUMNEUybVIv7sgT57koZP4_jy0Au-uywGujYknjmkPHD0pgPxIv-zuyk-TLnqnfK-TMKWUvw-5N0zP1D10APzm1YznHf3n0" mon="position=4&content=门票玩乐" data-mon="4">
                        <div class="img"><img src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/838ba61ea8d3fd1f1a87dbb43c4e251f94ca5fb5.jpg"/></div>
                        <div class="text">
                            荤菜</div>
                    </a>
                    <a class="item item5 item-new" href="https://m.nuomi.com/bj/338/0-0/0-0-0-0-0" mon="position=5&content=温泉洗浴" data-mon="5">
                        <div class="img"><img src="https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/ac6eddc451da81cb4a68ec435e66d016082431b5.jpg"/></div>
                        <div class="text">
                            面食</div>
                    </a>
                    <a class="item item6 item-new" href="https://m.nuomi.com/component/entertainment/html/home.html?_t_=1529567613&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=6&content=休闲娱乐" data-mon="6">
                        <div class="img"><img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/c9fcc3cec3fdfc03e0119836d83f8794a5c226d6.jpg"/></div>
                        <div class="text">
                            麻辣烫/米线</div>
                    </a>
                    <a class="item item7 item-new" href="http://kuai.nuomi.com/webapp/train/index.html?us=wap_nuomi" mon="position=7&content=火车票" data-mon="7">
                        <div class="img"><img src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/9f2f070828381f3029baf627a5014c086f06f099.jpg"/></div>
                        <div class="text">
                            铁板烧</div>
                    </a>
                    <a class="item item8 item-new" href="https://m.nuomi.com/component/marry-home/html/home.html?_t_=1529574604&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=8&content=结婚" data-mon="8">
                        <div class="img"><img src="https://gss0.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/nuomi/pic/item/500fd9f9d72a6059c2db8f182634349b023bbaed.jpg"/></div>
                        <div class="text">
                            饮料</div>
                    </a>
                    <a class="item item9 item-new" href="https://m.nuomi.com/component/ktv-home/html/home.html?_t_=1529574604&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=9&content=KTV" data-mon="9">
                        <div class="img"><img src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/c83d70cf3bc79f3db630b6beb6a1cd11738b296e.jpg"/></div>
                        <div class="text">
                            羊肉汤/牛肉汤</div>
                    </a>
                </li>
                <li class="wrap wrap9">
                    <a class="item item1 item-new" href="https://m.nuomi.com/component/bj_pinecone_beauty/html/home.html?_t_=1529650836&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=11&content=丽人" data-mon="11">
                        <div class="img"><img src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/9f510fb30f2442a75df8902bdd43ad4bd013024d.jpg"/></div>
                        <div class="text">
                            丽人</div>
                    </a>
                    <a class="item item2 item-new" href="https://m.nuomi.com/bj/2042/0-0/0-0-0-0-0" mon="position=12&content=运动健身" data-mon="12">
                        <div class="img"><img src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/562c11dfa9ec8a13ef92f2f3f903918fa0ecc01d.jpg"/></div>
                        <div class="text">
                            运动健身</div>
                    </a>
                    <a class="item item3 item-new" href="https://m.nuomi.com/component/ktv-wei/home/index.html?catTagid=2145&amp;_t_=1529570830&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=13&content=亲子" data-mon="13">
                        <div class="img"><img src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/a1ec08fa513d269794d364d359fbb2fb4316d838.jpg"/></div>
                        <div class="text">
                            亲子</div>
                    </a>
                    <a class="item item4 item-new" href="https://m.nuomi.com/component/decoration-home/html/home.html?_t_=1529570830&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=14&content=家装" data-mon="14">
                        <div class="img"><img src="https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/279759ee3d6d55fb62e31aa861224f4a20a4dd13.jpg"/></div>
                        <div class="text">
                            家装</div>
                    </a>
                    <a class="item item5 item-new" href="https://m.nuomi.com/component/health-home/html/home.html?_t_=1529570830&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=15&content=健康养生" data-mon="15">
                        <div class="img"><img src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/f636afc379310a552677b27abb4543a9832610e8.jpg"/></div>
                        <div class="text">
                            健康养生</div>
                    </a>
                    <a class="item item6 item-new" href="https://m.nuomi.com/bj/392/0-0/0-0-0-0-0" mon="position=16&content=自助餐" data-mon="16">
                        <div class="img"><img src="https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/908fa0ec08fa513dea5d0050316d55fbb3fbd94d.jpg"/></div>
                        <div class="text">
                            自助餐</div>
                    </a>
                    <a class="item item7 item-new" href="https://m.nuomi.com/bj/search?kw=%E6%B1%BD%E8%BD%A6%E7%BE%8E%E5%AE%B9" mon="position=17&content=汽车美容" data-mon="17">
                        <div class="img"><img src="https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/b999a9014c086e06a77953c50e087bf40bd1cb6f.jpg"/></div>
                        <div class="text">
                            汽车美容</div>
                    </a>
                    <a class="item item8 item-new" href="https://m.nuomi.com/component/community-home/html/home.html?_t_=1529570830&amp;webapp_nojump=1&amp;_t_=1564290301" mon="position=18&content=生活服务" data-mon="18">
                        <div class="img"><img src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/c9fcc3cec3fdfc03f41a8c36d83f8794a5c226d9.jpg"/></div>
                        <div class="text">
                            生活服务</div>
                    </a>
                    <a class="item item9 item-new" href="https://m.nuomi.com/webapp/tuan/category" mon="position=19&content=更多分类" data-mon="19">
                        <div class="img"><img src="https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/b812c8fcc3cec3fd99cfc8fbda88d43f8694274e.jpg"/></div>
                        <div class="text">
                            更多分类</div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
    <article class="main-content"  mon="action=click">
        <section id="index-search-wrapper">

            <form class="index-search" method="get" action="/bj/search" data-role="form">
                <div class="input-wrapper">
                    <input class="input" type="search" name="kw" maxlength="20" data-role="input" autocomplete="off" placeholder="搜索商家、分类、地点"/>
                    <i class="clear" data-role="clear"></i>
                    <button class="submit" type="submit" data-role="submit"></button>
                </div>
                <div class='cancel' data-role="cancel">关闭</div>
                <div class="suggestion-wrapper" data-role="suggestion-wrapper"></div>
            </form>
            <script>
            </script>
        </section>
        <script>
            F.context('topBigPromotion', null);
            F.context('bigPromotions', null);
        </script>
        <script>
            F.context('headlines', {"isCityArea":true,"areaName":"\u5546\u5708","scroll_inform_list":[{"id":281100,"title":"\u65b0\u7c0b\u8857\u600e\u4e48\u5403\uff1f\u638f\u5fc3\u638f\u80ba\u63a8\u835014\u5bb6","type":"biz","label":"\u706b\u7206","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281100&config_id=0","images":"https:\/\/gss0.baidu.com\/-4o3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/11385343fbf2b2113fcb1b54c78065380dd78ec7.jpg","thumbNum":15635,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281100&config_id=0"},{"id":279630,"title":"\u5168\u5317\u4eac\u6700\u540e\u4e00\u5bb6\uff0170\u5e74\u4ee3\u7684\u56fd\u8425\u526f\u98df\u5e97\uff01\u53ef\u80fd\u4e5f\u8981\u5173\u95e8\u4e86...","type":"biz","label":"\u63a8\u8350","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=279630&config_id=0","images":"https:\/\/gss0.baidu.com\/-fo3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/314e251f95cad1c8d98be73d723e6709c93d51f3.jpg","thumbNum":19961,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=279630&config_id=0"},{"id":281103,"title":"\u300a\u5982\u61ff\u4f20\u300b\u91cc\u8d70\u51fa\u7684\u5fa1\u81b3\u623f\uff01\u95e8\u53e3\u653e\u774020\u4e07\uff01","type":"biz","label":"\u7cbe\u9009","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281103&config_id=0","images":"https:\/\/gss0.baidu.com\/9fo3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/77c6a7efce1b9d1657f0787bfedeb48f8c5464f1.jpg","thumbNum":15524,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281103&config_id=0"},{"id":281101,"title":"\u4e00\u79d2\u840c\u70b8\u5c11\u5973\u5fc3\uff01\u8fd9\u4e9b\u706b\u7206\u5c0f\u7ea2\u4e66\u7684\u7f51\u7ea2\u5c0f\u53ef\u7231\uff0c\u6211\u53ea\u60f3\u770b\u4e0d\u60f3\u5403\uff01\uff01","type":"biz","label":"\u79d8\u5bc6","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281101&config_id=0","images":"https:\/\/ss0.baidu.com\/9vo3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/43a7d933c895d143a43f04397ef082025aaf075a.jpg","thumbNum":19771,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281101&config_id=0"},{"id":279628,"title":"\u5e1d\u90fd\u7b2c\u4e00\u7f51\u7ea2\u5c0f\u9762\uff01\u4e3a\u4e86\u8fd9\u4e00\u53e3\u201c\u8fc7\u6c14\u7f51\u7ea2\u201d\uff01\u7adf\u7136\u8fd8\u8981\u6392\u961f\u4e00\u5c0f\u65f6\uff1f\uff01","type":"biz","label":"\u70ed\u641c","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=279628&config_id=0","images":"https:\/\/gss0.baidu.com\/-4o3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/a686c9177f3e67094d325ce536c79f3df8dc55fd.jpg","thumbNum":16021,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=279628&config_id=0"},{"id":281102,"title":"\u5e1d\u90fd\u60ca\u73b0\u6700\u201c\u58d5\u201d\u4e09\u8272\u9505\u5e95\uff01\u725b\u808914\u5403\uff0c\u8fd8\u85cf\u7740\u72ec\u5bb6\u6d77\u9c9c\u4e32\uff01","type":"biz","label":"\u706b\u7206","url":"bainuo:\/\/component?compid=t10bizareatop&comppage=homefeed&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281102&config_id=0","images":"https:\/\/gss0.baidu.com\/94o3dSag_xI4khGko9WTAnF6hhy\/lbs\/pic\/item\/1c950a7b02087bf44ac0b4f3ffd3572c11dfcff8.jpg","thumbNum":15634,"wap_url":"http:\/\/chi.nuomi.com\/bizareatop\/homefeed.html?&pos=&area_id=100010000&poiIdArrs=&city_id=100010000&bizfrom=wap_home&pa=nuomi&colid=281102&config_id=0"}]});
        </script>

        <section class="j-index-bizareatop" id="j-index-bizareatop">

        </section><script>
        F.context('activities', [{"bannerId":"200014185","advName":null,"title":"\u7cbe\u9009\u6392\u884c","subtitle":"\u672c\u5730\u6392\u884c\u699c","linkUrl":"https:\/\/m.nuomi.com\/component\/meishiRank\/rank\/index\/index.html?fr=11&f_ctag_id=326&category_id=364&loc_id=100010000&area_id=100010000&rank_type=2&district_id=100010000","image":"https:\/\/gss0.bdstatic.com\/7Po3dSag_xI4khGkpoWK1HF6hhy\/nuomi\/pic\/item\/d788d43f8794a4c21a138d0f05f41bd5ad6e39e5.jpg","tinyImgUrl":null,"image1":null,"image2":null,"weight":"10"},{"bannerId":"200017296","advName":null,"title":"\u75af\u72c2\u780d\u4ef7","subtitle":"\u5f00\u5e74\u51b0\u70b9\u4ef7","linkUrl":"https:\/\/huodong.nuomi.com\/acplat\/data\/acbasicwap?ac_id=79","image":"https:\/\/gss0.baidu.com\/-vo3dSag_xI4khGko9WTAnF6hhy\/nuomi\/pic\/item\/a08b87d6277f9e2f1a98c7d11430e924b999f3be.jpg","tinyImgUrl":null,"image1":null,"image2":null,"weight":"40"},{"bannerId":"200020902","advName":null,"title":"\u70ed\u6620\u5927\u7247","subtitle":"\u62bd\u7ea2\u5305\u770b\u7535\u5f71","linkUrl":"https:\/\/mdianying.baidu.com\/edison\/activity\/page\/214378363287?sfrom=newnuomi&from=wapapp&sub_channel=nuomi_dianying_wap_highdfk","image":"https:\/\/gss0.baidu.com\/9fo3dSag_xI4khGko9WTAnF6hhy\/nuomi\/pic\/item\/94cad1c8a786c917adc6bcd6c73d70cf3ac7571c.jpg","tinyImgUrl":null,"image1":null,"image2":null,"weight":"50"}]);
    </script>

        <script>
            void function(e,t){for(var n=t.getElementsByTagName("img"),a=+new Date,i=[],o=function(){this.removeEventListener&&this.removeEventListener("load",o,!1),i.push({img:this,time:+new Date})},s=0;s< n.length;s++)!function(){var e=n[s];e.addEventListener?!e.complete&&e.addEventListener("load",o,!1):e.attachEvent&&e.attachEvent("onreadystatechange",function(){"complete"==e.readyState&&o.call(e,o)})}();alog("speed.set",{fsItems:i,fs:a})}(window,document);
        </script>
        <section class="feed-area feed-display">
            <h3 class="goods-list-title">
                <span class="feed-list-title-icon">猜你喜欢</span>
            </h3>
        </section>
        <section id="goods-container" class="feed-display" mon="action=click&amp;area=itemList&amp;element_type=item">
                <div class="feed-wrapper">

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/5537169" class="feed-content" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/5537169" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="1">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D38%2C0%2C527%2C320%3Bw%3D230%3Bq%3D79/sign=f92913d8cf177f3e047ba64d4dfc03eb/aa18972bd40735face2ccfd798510fb30e2408fb.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">美味时光巫山烤鱼</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>卢沟桥 </span>
                                        <span class="price-ins"><ins>69</ins></span>

                                    </div>

                                    <div class="item-desc"><div class="text">味道不错</div></div>



                                </div>
                            </div>

                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/1392878" class="feed-content" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/1392878" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="2">


                            <div class="multiple-feed">
                                <div class="title-line">
                                    <div class="title">
                                        <h3 class="item-name">六合顺(左家庄店)</h3>
                                    </div>
                                </div>
                                <div class="price-distance">

                                    <span>三元桥 </span>
                                    <span class="price-ins"><ins>58</ins></span>

                                </div>
                                <div class="multiple-images" style="height: 80.47111111111111px;">

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://ss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/lbs/pic/item/c995d143ad4bd113ead5cbf851afa40f4afb05db.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/d62a6059252dd42ae030b5f70a3b5bb5c9eab8b5.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/dc54564e9258d10929e59ee9d858ccbf6c814d62.jpg)"></div>
                                    </div>

                                </div>

                                <div class="item-desc">最受男生欢迎的餐厅</div>



                            </div>


                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/16675890" class="feed-content" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/16675890" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="3">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/lbs/pic/item/faf2b2119313b07e86a86b3a00d7912397dd8cee.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">虾吃虾涮(世纪金源店)</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>远大路 </span>
                                        <span class="price-ins"><ins>71</ins></span>

                                    </div>


                                    <div class="item-desc"><div class="text">火锅油条 | 小料 | 雪花羊肋肉 | 青笋 | 爽口牛舌 | 油豆皮</div></div>


                                </div>
                            </div>

                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/component/meishiRank/1.6.1/rank/index/index.html?loc_id=100010000&amp;category_id=391&amp;rank_type=2&amp;fr=16&amp;loc_type=1&amp;f_ctag_id=326&amp;district_id=&amp;area_id=" class="feed-content" data-role="feed-content" data-full-url="https://m.nuomi.com/component/meishiRank/1.6.1/rank/index/index.html?loc_id=100010000&amp;category_id=391&amp;rank_type=2&amp;fr=16&amp;loc_type=1&amp;f_ctag_id=326&amp;district_id=&amp;area_id=" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="4">




                            <div class="rank-feed">
                                <div class="title-line">
                                    <div class="title">
                                        <h3 class="item-name">北京人气爆棚的西餐,体验米其林星级品质</h3>
                                    </div>
                                </div>
                                <div class="multiple-images" style="height: 80.47111111111111px;">

                                    <div class="img-wrapper">
                                        <div class="img-placeholder">
                                            <div class="img" data-role="deal-img" style="background-image: url(https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/nuomi/pic/item/f636afc379310a5523cb8a86be4543a9832610d0.jpg)"></div>
                                        </div>
                                        <span class="tag">1</span>
                                    </div>

                                    <div class="img-wrapper">
                                        <div class="img-placeholder">
                                            <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C0%2C470%2C285%3Bw%3D230%3Bq%3D79/sign=5d081a2fb4119313d30ca5f0580820e7/4afbfbedab64034f76bb16eba9c379310b551dec.jpg)"></div>
                                        </div>
                                        <span class="tag">2</span>
                                    </div>

                                    <div class="img-wrapper">
                                        <div class="img-placeholder">
                                            <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C0%2C720%2C436%3Bw%3D720%3Bq%3D99/sign=883c586d85025aafc77d248bc6dd8754/e4dde71190ef76c6fec0e5869a16fdfaaf516708.jpg)"></div>
                                        </div>
                                        <span class="tag">3</span>
                                    </div>

                                </div>
                                <div class="multiple-poi-name">

                                    <p class="poi-wrapper">赛百味(大钟寺中坤广场店)</p>

                                    <p class="poi-wrapper">福德林(平谷店)</p>

                                    <p class="poi-wrapper">花舍咖餐(罗斯福广场店)</p>

                                </div>
                                <div class="desc-wrapper">

                                    <div class="item-desc">
                                        <p class="item-desc-content">精选榜单</p>
                                    </div>


                                    <div class="item-num">1.9万浏览</div>

                                </div>
                            </div>




                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/5740344" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/5740344" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="5">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/lbs/pic/item/574e9258d109b3de5ad904a5c7bf6c81810a4c9d.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">虾吃虾涮(十里河店)</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>十八里店 </span>
                                        <span class="price-ins"><ins>73</ins></span>

                                    </div>



                                </div>
                            </div>

                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/1492781" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/1492781" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="6">


                            <div class="multiple-feed">
                                <div class="title-line">
                                    <div class="title">
                                        <h3 class="item-name">万龙洲海鲜(安定门店)</h3>
                                    </div>
                                </div>
                                <div class="price-distance">

                                    <span>安贞 </span>
                                    <span class="price-ins"><ins>156.5</ins></span>

                                </div>
                                <div class="multiple-images" style="height: 80.47111111111111px;">

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C0%2C899%2C600%3Bw%3D640%3Bq%3D84/sign=cb06d8cd26738bd4d06ee8719cbbabe6/d058ccbf6c81800a086a2e1eb93533fa828b4716.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://ss0.bdstatic.com/7LsWdDW5_xN3otebn9fN2DJv/bainuo/wh%3D690%2C460%3Bq%3D90%3Bc%3Dnuomi%2C95%2C95/sign=1f0c1047ab44ad342eea8f81e99220c0/b999a9014c086e0693ba8de108087bf40ad1cb0e.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/91ef76c6a7efce1b863b9491a651f3deb48f655c.jpg)"></div>
                                    </div>

                                </div>



                            </div>


                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/3701925" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/3701925" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="7">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C167%2C960%2C582%3Bw%3D470%3Bq%3D48/sign=225ead643efae6cd18fbf12132832315/b3fb43166d224f4a95d13f4002f790529822d11d.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">张亮麻辣烫(北关店)</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>房山 </span>
                                        <span class="price-ins"><ins>22</ins></span>

                                    </div>

                                    <div class="item-desc"><div class="text">北京市小吃快餐销量第5名</div></div>



                                </div>
                            </div>

                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/11301914" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/11301914" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="8">


                            <div class="multiple-feed">
                                <div class="title-line">
                                    <div class="title">
                                        <h3 class="item-name">大强虫控</h3>
                                    </div>
                                </div>
                                <div class="price-distance">

                                    <span>新华大街 </span>


                                </div>
                                <div class="multiple-images" style="height: 80.47111111111111px;">

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://ss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/lbs/pic/item/562c11dfa9ec8a137a0367d2fb03918fa0ecc0e2.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/lbs/pic/item/d833c895d143ad4b0a1876f28e025aafa40f06c9.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://ss0.bdstatic.com/9r-1bjml2gcT8tyhnq/v1/duzhanread/28ff66e5-53d5-44a2-ab81-2d63056a95ee_cut.jpg)"></div>
                                    </div>

                                </div>

                                <div class="item-desc">100%用户好评商家</div>



                            </div>


                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/18065785" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/18065785" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="9">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://ss0.bdstatic.com/7LsWdDW5_xN3otebn9fN2DJv/bainuo/wh%3D690%2C460%3Bq%3D90%3Bc%3Dnuomi%2C95%2C95/sign=7f2518fa5de736d15846840ea26063f6/09fa513d269759eefa4636edbbfb43166d22df86.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">过桥缘(土桥店)</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>梨园 </span>
                                        <span class="price-ins"><ins>28</ins></span>

                                    </div>

                                    <div class="item-desc"><div class="text">梨园小吃快餐销量第5名</div></div>



                                </div>
                            </div>

                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/2260503" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/2260503" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="10">


                            <div class="multiple-feed">
                                <div class="title-line">
                                    <div class="title">
                                        <h3 class="item-name">麻里麻里香锅(房山城关店)</h3>
                                    </div>
                                </div>
                                <div class="price-distance">

                                    <span>房山 </span>
                                    <span class="price-ins"><ins>57.5</ins></span>

                                </div>
                                <div class="multiple-images" style="height: 80.47111111111111px;">

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/lbs/pic/item/d439b6003af33a87be29ced3cd5c10385243b5b7.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/0b7b02087bf40ad1121a59b85e2c11dfa8ecceeb.jpg)"></div>
                                    </div>

                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/nuomi/pic/item/5fdf8db1cb134954a0bf333e5f4e9258d0094ac3.jpg)"></div>
                                    </div>

                                </div>



                            </div>


                        </a>
                    </section>

                    <section class="feed">
                        <a href="https://m.nuomi.com/mshop/3788778" class="feed-content out-of-view" data-role="feed-content" data-full-url="https://m.nuomi.com/mshop/3788778" data-poi-id="" data-s="9628dd16e96e4a30f9d60ddda754db3e" data-pos="11">

                            <div class="single-feed">
                                <div class="feed-left-image" style="width: 120.707px; height: 90.53px;">
                                    <div class="img-placeholder">
                                        <div class="img" data-role="deal-img" style="background-image: url(&quot;https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/bainuo/crop%3D0%2C0%2C750%2C498%3Bw%3D690%3Bq%3D99%3Bc%3Dnuomi%2C95%2C95/sign=f5a7727587025aafc77d248bc6dd8754/562c11dfa9ec8a1347936355f203918fa1ecc0fd.jpg&quot;); width: 120.707px; height: 90.53px;"></div>
                                    </div>
                                </div>
                                <div class="right-info-wrapper" style="margin-left: 128.707px; min-height: 90.53px;">
                                    <div class="title-line">
                                        <div class="title">
                                            <h3 class="item-name">英尚造型</h3>
                                        </div>
                                    </div>
                                    <div class="price-distance">

                                        <span>五道口 </span>
                                        <span class="price-ins"><ins>102</ins></span>

                                    </div>



                                </div>
                            </div>

                        </a>
                    </section>

                </div>
            </section>
    </article>
    <section class="feed-viewmore feed-display" id="j-feed-viewmore">
        <div data-role="viewmore"></div>
    </section>
    <div id="feed-end-footer">

        <footer id="footer" class="footer">
            <section class="copyright-block">
                &copy;nuomi.com 京ICP证060807号
            </section>
            <section class="police-record">
                <a class="record-link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001">
                    <img src="/static/img/footer/beian.png"/>
                    <p class="record-text">京公网安备 11000002000001号</p>
                </a>
            </section>
        </footer>
    </div>
</div>
<div id="j-popup-search" class="popup-search-wrapper">

    <div class="index-popup-search-wrapper" id="i-popup-search-wrapper">
        <form class="index-popup-search" method="get" action="${pageContext.request.contextPath}/s" data-role="form">
            <div class="input-wrapper">
                <input class="input" type="search" name="popup-kw" maxlength="20" data-role="input" autocomplete="off" placeholder="搜索商家或地点"/>
                <i class="clear" data-role="clear"></i>
                <i class="submit"></i>
            </div>
            <div class='cancel' data-role="cancel">取消</div>
        </form>
        <div class="suggestion-popup-wrapper" data-role="suggestion-popup-wrapper"></div>
    </div>
</div>
<script>
    void function(a,b,c,d,e,f){function g(b){a.attachEvent?a.attachEvent("onload",b,!1):a.addEventListener&&a.addEventListener("load",b)}function h(a,c,d){d=d||15;var e=new Date;e.setTime((new Date).getTime()+1e3*d),b.cookie=a+"="+escape(c)+";path=/;expires="+e.toGMTString()}function i(a){var c=b.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));return null!=c?unescape(c[2]):null}function j(){var a=i("PMS_JT");if(a){h("PMS_JT","",-1);try{a=a.match(/{["']s["']:(\d+),["']r["']:["']([\s\S]+)["']}/),a=a&&a[1]&&a[2]?{s:parseInt(a[1]),r:a[2]}:{}}catch(c){a={}}a.r&&b.referrer.replace(/#.*/,"")!=a.r||alog("speed.set","wt",a.s)}}if(a.alogObjectConfig){var k=a.alogObjectConfig.sample,l=a.alogObjectConfig.rand;d="https:"===a.location.protocol?"https://fex.bdstatic.com"+d:"http://fex.bdstatic.com"+d,k&&l&&l>k||(g(function(){alog("speed.set","lt",+new Date),e=b.createElement(c),e.async=!0,e.src=d+"?v="+~(new Date/864e5)+~(new Date/864e5),f=b.getElementsByTagName(c)[0],f.parentNode.insertBefore(e,f)}),j())}}(window,document,"script","/hunter/alog/dp.mobile.min.js");
</script>
<script>
    $(".index-top-search").children().click(function () {
        $("#j-popup-search").css("display","block");
        $("#j-main-content").addClass('invisible');
    });
    $('.cancel').click(function () {
        $("#j-popup-search").css("display","none");
        $("#j-main-content").removeClass('invisible');
    })
    var startX;
    var startY;

    // $("body").on("touchstart", function(e) {
    //     // 判断默认行为是否可以被禁用
    //     if (e.cancelable) {
    //         // 判断默认行为是否已经被禁用
    //         if (!e.defaultPrevented) {
    //             e.preventDefault();
    //         }
    //     }
    //     startX = e.originalEvent.changedTouches[0].pageX,
    //         startY = e.originalEvent.changedTouches[0].pageY;
    // });
    //
    // $("body").on("touchend", function(e) {
    //     // 判断默认行为是否可以被禁用
    //     if (e.cancelable) {
    //         // 判断默认行为是否已经被禁用
    //         if (!e.defaultPrevented) {
    //             e.preventDefault();
    //         }
    //     }
    //     moveEndX = e.originalEvent.changedTouches[0].pageX,
    //         moveEndY = e.originalEvent.changedTouches[0].pageY,
    //         X = moveEndX - startX,
    //         Y = moveEndY - startY;
    //     //下滑
    //     if ( Y > 0) {
    //         $("#j-index-header").removeClass('fixed')
    //     }
    //     //上滑
    //     else if ( Y < 0 ) {
    //
    //         var scrollTop = $(this).scrollTop();//滚动条的高度，即页面滚动的高度
    //         var scrollHeight = $(document).height();//页面总内容的高度
    //         var windowHeight = $(this).height();//页面可视区的高度即设备的高度
    //         if(scrollTop + windowHeight == scrollHeight){
    //             $("#j-index-header").addClass('fixed')
    //         }
    //
    //     }
    // });

</script>
</body>
</html>



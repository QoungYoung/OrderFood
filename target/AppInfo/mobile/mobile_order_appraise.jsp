<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/8/21
  Time: 16:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html data-cssawait="0" style=""><head><style type="text/css">
    .mti .header {
        background: #06c1ae;
        border-bottom-color: #21897d;
    }

    .mti .header .i-back {
        background-position: 0 -152px;
    }

    .mti .nav-item.focus {
        color: #FFD161;
    }

    .mti .page-name {
        color: #333;
    }
</style>


    <script async="" src="//s0.meituan.net/bs/js/?f=mta-js:mta.min.js"></script><script>
        /* OWL 监控 */
        "use strict"; !function () { var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "_Owl_", n = window, a = { page: !0, resource: !0, js: !0 }; n[i] || (n[i] = { isRunning: !1, isReady: !1, preTasks: [], config: a, dataSet: [], use: function (i, a) { this.isReady && n.Owl && n.Owl[i](a), this.preTasks.push({ api: i, data: [a] }) }, add: function (i) { this.dataSet.push(i) }, run: function (i) { var a = this; if (!this.isRunning) { this.isRunning = !0; var e = i || this.config; if (!1 !== e.js) { var t = n.onerror; n.onerror = function () { this.isReady || this.add({ type: "jsError", data: arguments }), t && t.apply(n, arguments) }.bind(this) } !1 !== e.page && n.addEventListener("load", function () { if (!a.isReady) { var i = window.performance && window.performance.timing; a.add({ type: "pageTime", data: [i] }) } }), !1 !== e.resource && (window.addEventListener("error", function (i) { a.isReady || a.add({ type: "resError", data: [i] }) }, !0), window.addEventListener("load", function (i) { a.isReady || a.add({ type: "resTime", data: [i] }) })) } } }) }();
        _Owl_.run()
    </script>


    <title>美团外卖</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="edge">
    <link href="//p1.meituan.net" rel="dns-prefetch">
    <link href="//mc.meituan.net" rel="dns-prefetch">
    <link href="//s3plus.meituan.net" rel="dns-prefetch">
    <link href="//analytics.meituan.net" rel="dns-prefetch">
    <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/favicon3.png">
    <link rel="icon" href="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/favicon3.png" size="16x16 32x32">
    <link rel="apple-touch-icon-precomposed" href="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/favicon4.59fe5045.png" size="114x114">
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.10.1.min.js"></script>
    <script>
        var MT_WM = window.MT_WM || {};
        MT_WM.TimeTracker = {rt: 1566375756351, st: Date.now()};
        MT_WM.logFirstScreenTime = function () {
            MT_WM.TimeTracker.fst = Date.now();
        };
        window.addEventListener('load', function () {
            //保存性能时间
            MT_WM.TimeTracker.lt = Date.now();
        });
        MT_WM.STATIC_ROOT = '//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production';
        function delayGo(u, t) {
            setTimeout(function () {
                if (typeof u == 'string') location = u;
                else if (typeof u == 'function') u();
            }, (t == null ? 300 : t));
        }
    </script>
    <!--<script type="text/javascript">
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//mc.meituan.net/ga.js', 'ga');
        ga('create', 'UA-45741865-3', 'i.waimai.meituan.com');
        ga('send', 'pageview');
    </script>-->
    <script type="text/javascript">
        !function(e,t,n){function s(){var e=t.createElement("script");e.async=!0,e.src="//s0.meituan."+(-1===t.location.protocol.indexOf("https")?"net":"com")+"/bs/js/?f=mta-js:mta.min.js";var n=t.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}if(e.MeituanAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},"complete"===t.readyState)s();else{var i="addEventListener",r="attachEvent";if(e[i])e[i]("load",s,!1);else if(e[r])e[r]("onload",s);else{var a=e.onload;e.onload=function(){s(),a&&a()}}}}(window,document,"mta"),function(e,t,n){if(t&&!("_mta"in t)){t._mta=!0;var s=e.location.protocol;if("file:"!==s){var i=e.location.host,r=t.prototype.open;t.prototype.open=function(t,n,a,o,l){if(this._method="string"==typeof t?t.toUpperCase():null,n){if(0===n.indexOf("http://")||0===n.indexOf("https://")||0===n.indexOf("//"))this._url=n;else if(0===n.indexOf("/"))this._url=s+"//"+i+n;else{var h=s+"//"+i+e.location.pathname;h=h.substring(0,h.lastIndexOf("/")+1),this._url=h+n}var u=this._url.indexOf("?");-1!==u?(this._searchLength=this._url.length-1-u,this._url=this._url.substring(0,u)):this._searchLength=0}else this._url=null,this._searchLength=0;return this._startTime=(new Date).getTime(),r.apply(this,arguments)};var a="onreadystatechange",o="addEventListener",l=t.prototype.send;t.prototype.send=function(t){function n(n,i){if(0!==n._url.indexOf(s+"//frep.meituan.net/_.gif")){var r;if(n.response)switch(n.responseType){case"json":r=JSON&&JSON.stringify(n.response).length;break;case"blob":case"moz-blob":r=n.response.size;break;case"arraybuffer":r=n.response.byteLength;case"document":r=n.response.documentElement&&n.response.documentElement.innerHTML&&n.response.documentElement.innerHTML.length+28;break;default:r=n.response.length}e.mta("send","browser.ajax",{url:n._url.replace(/\.[^\.]*\.css/,'/css').replace(/\.[^\.]*\.js/,'/js'),method:n._method,error:!(0===n.status.toString().indexOf("2")||304===n.status),responseTime:(new Date).getTime()-n._startTime,requestSize:n._searchLength+(t?t.length:0),responseSize:r||0})}}if(o in this){var i=function(e){n(this,e)};this[o]("load",i),this[o]("error",i),this[o]("abort",i)}else{var r=this[a];this[a]=function(t){r&&r.apply(this,arguments),4===this.readyState&&e.mta&&n(this,t)}}return l.apply(this,arguments)}}}}(window,window.XMLHttpRequest,"mta");

        mta("create","56dfb105aa3d255a13b57474");
        mta("send","page");
    </script>
    <script>!function(){var e;window.lsloader={jsRunSequence:[],jsnamemap:{},cssnamemap:{}},lsloader.removeLS=function(e){try{localStorage.removeItem(e)}catch(t){}},lsloader.setLS=function(e,t){try{localStorage.setItem(e,t)}catch(s){}},lsloader.getLS=function(e){var t="";try{t=localStorage.getItem(e)}catch(s){t=""}return t},lsloader.load=function(e,t,s){s=s||function(){};var n;if(n=this.getLS(e),!/\/\*codestartv1\*\//.test(n))return this.removeLS(e),void this.requestResource(e,t,s);if(n){var a=n.split("/*codestartv1*/")[0];if(a!=t)return this.removeLS(e),void this.requestResource(e,t,s);n=n.split("/*codestartv1*/")[1],/\.js$/.test(a)?(this.jsRunSequence.push({name:e,code:n}),this.runjs(t,e,n)):(document.getElementById(e).appendChild(document.createTextNode(n)),s())}else this.requestResource(e,t,s)},lsloader.requestResource=function(e,t,s){var n=this;/\.js$/.test(t)?this.iojs(t,e,function(e,t,s){n.setLS(t,e+"/*codestartv1*/"+s),n.runjs(e,t,s)}):/\.css$/.test(t)&&this.iocss(t,e,function(s){document.getElementById(e).appendChild(document.createTextNode(s)),n.setLS(e,t+"/*codestartv1*/"+s)},s)},lsloader.iojs=function(e,t,s){var n=this;n.jsRunSequence.push({name:t,code:""});try{var a=new XMLHttpRequest;a.open("get",e,!0),a.onreadystatechange=function(){if(4==a.readyState){if((a.status>=200&&a.status<300||304==a.status)&&""!=a.response)return void s(e,t,a.response);n.jsfallback(e,t)}},a.send(null)}catch(u){n.jsfallback(e,t)}},lsloader.iocss=function(e,t,s,n){var a=this;try{var u=new XMLHttpRequest;u.open("get",e,!0),u.onreadystatechange=function(){if(4==u.readyState){if((u.status>=200&&u.status<300||304==u.status)&&""!=u.response)return s(u.response),void n();a.cssfallback(e,t,n)}},u.send(null)}catch(c){a.cssfallback(e,t,n)}},lsloader.runjs=function(e,t,s){if(t&&s)for(var n in this.jsRunSequence)this.jsRunSequence[n].name==t&&(this.jsRunSequence[n].code=s);if(this.jsRunSequence[0]&&this.jsRunSequence[0].code&&"failed"!=this.jsRunSequence[0].status){var a=document.createElement("script"),u=document.getElementsByTagName("script")[0];a.appendChild(document.createTextNode(this.jsRunSequence[0].code)),u.parentNode.insertBefore(a,u),this.jsRunSequence.shift(),this.jsRunSequence.length>0&&this.runjs()}else if(this.jsRunSequence[0]&&"failed"==this.jsRunSequence[0].status){var c=this,a=document.createElement("script");a.src=this.jsRunSequence[0].path,this.jsRunSequence[0].status="loading",a.onload=function(){c.jsRunSequence.shift(),c.jsRunSequence.length>0&&c.runjs()};var u=document.getElementsByTagName("script")[0];u.parentNode.insertBefore(a,u)}},lsloader.tagLoad=function(e,t){this.jsRunSequence.push({name:t,code:"",path:e,status:"failed"}),this.runjs()},lsloader.jsfallback=function(e,t){if(!this.jsnamemap[t]){this.jsnamemap[t]=t;for(var s in this.jsRunSequence)this.jsRunSequence[s].name==t&&(this.jsRunSequence[s].code="",this.jsRunSequence[s].status="failed",this.jsRunSequence[s].path=e);this.runjs()}},lsloader.cssfallback=function(e,t,s){if(!this.cssnamemap[t]){this.cssnamemap[t]=1;var n=document.createElement("link");n.type="text/css",n.href=e,n.rel="stylesheet",n.onload=n.onerror=s;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a)}},lsloader.runInlineScript=function(e,t){var s=document.getElementById(t).innerText;this.jsRunSequence.push({name:e,code:s}),this.runjs()},lsloader.loadCombo=function(t){var s="",n={};for(var a in t){var u=this.getLS(t[a].name);if(u)var c=u.split("/*codestartv1*/")[0],o=u.split("/*codestartv1*/")[1];else var c="";c==t[a].path?this.jsRunSequence.push({name:t[a].name,code:o,path:t[a].path}):(this.jsRunSequence.push({name:t[a].name,code:null,path:t[a].path,status:"comboloading"}),n[t[a].name]=!0,s+=(""==s?"":";")+t[a].path)}var i=this;if(s){var r=new XMLHttpRequest;r.open("get",e+s,!0),r.onreadystatechange=function(){if(4==r.readyState)if(r.status>=200&&r.status<300||304==r.status){if(""!=r.response)return void i.runCombo(r.response,n)}else{for(var e in i.jsRunSequence)n[i.jsRunSequence[e].name]&&(i.jsRunSequence[e].status="failed");i.runjs()}},r.send(null)}this.runjs()},lsloader.runCombo=function(e,t){e=e.split("/*combojs*/"),e.shift();for(var s in this.jsRunSequence)t[this.jsRunSequence[s].name]&&e[0]&&(this.jsRunSequence[s].status="comboJS",this.jsRunSequence[s].code=e[0],this.setLS(this.jsRunSequence[s].name,this.jsRunSequence[s].path+"/*codestartv1*/"+e[0]),e.shift());this.runjs()}}();</script>

    <script>document.documentElement.style.display='none';document.documentElement.setAttribute('data-cssawait',1);</script>
    <script>window._clog_={};var protocol = window.location.protocol;_clog_.url=protocol+'//log.waimai.meituan.com/i/ilog';_clog_.ctype='mti'</script>
    <style id="/static/css/global.css">body{font-family:Arial,Helvetica,sans-serif;font-size:1em;-webkit-text-size-adjust:none;}input,textarea,select{font-size:100%;font-family:inherit;}html,body,h1,h2,h3,h4,h5,h6,p,ul,ol,form,button,dl,dt,dd,input,textarea{margin:0;-webkit-box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);word-wrap:break-word;word-break:break-all;padding:0;margin:0;}h4,h5,h6{font-size:1em;}ul,ol{padding-left:0;list-style-type:none;}img{border:0;}a{text-decoration:none;outline:none;}input,textarea{outline:none;-webkit-appearance:none;border-radius:0;}i{font-style:normal;}button{outline:none;border:none;background:none;}.cc-yellow{color:#FF9F00;}.cc-lyellow{background-color:#ffaa1e;}.cc-syellow{color:#ED9400;}.cc-darkgrey{color:#535353;}.cc-red{color:red;}.cc-deepred{color:#EB6100;}a.ca-lightgrey{color:#898989;}a.ca-dyellow{color:#da911a;}a.ca-darkgrey{color:#3E4545;}a.ca-black{color:#000000;}a.ca-deepgrey{color:#434343;}a.ca-brown{color:#444444;}.ct-white{color:#FFFFFF;}.ct-lightgreen{color:#E8FABF;}.ct-black{color:#000000;}.ct-gray{color:#A0A0A0;}.ct-green{color:#53c123;}.ct-darkgreen{color:#96BD38;}.ct-lightwhite{color:#D3D3D3;}.ct-lightgrey{color:#898989;}.ct-middlegrey{color:#686868;}.ct-deepgrey{color:#434343;}.ct-red{color:#E64B2C;}.ct-darkgrey{color:#3E4545;}.icon{background-image:url("//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/sprite/tiny-icon.19ecbb4e.png");background-size:150px 350px;display:inline-block;}.i-center{width:11px;height:16px;background-position:-15px -180px;}.i-take-pri{width:8px;height:11px;background-position:0px -49px;}.i-back{width:12px;height:20px;background-position:0 -130px;}.i-tri{width:10px;height:8px;background-position:0 0;}.i-tri-r{width:9px;height:13px;background-position:0 -23px;}.i-download{width:20px;height:20px;background-position:0 -202px;}.i-mobile{width:13px;height:13px;background-position:0 -228px;}.i-locate{width:12px;height:17px;background-position:0 -62px;}.i-gift{width:15px;height:15px;background-position:-35px -180px;}.i-firstdeal{width:15px;height:15px;background-position:-35px -200px;}.i-discount{width:15px;height:15px;background-position:-35px -220px;}.i-coupon{width:15px;height:15px;background-position:-55px -180px;}.i-pluscircle{width:17px;height:17px;background-position:-120px -91px;}.i-minuscircle{width:17px;height:17px;background-position:-120px -110px;}.i-x12{height:12px;}.i-12x12{width:12px;height:12px;}.i-x15{height:15px;}.i-15x15{width:15px;height:15px;}.i-x17{height:17px;}.i-17x17{width:17px;height:17px;}.i-rightgreen{width:20px;height:15px;background-position:-120px -130px;}.i-wrongred{width:20px;height:15px;background-position:-116px -145px;}.i-circle{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;display:inline-block;}.i-warn{width:20px;height:20px;background-position:0 -275px;}.i-compensate{width:15px;height:15px;background-position:-75px -258px;}.i-star{width:13px;height:12px;background-position:-97px -295px;}.i-star-light{width:13px;height:12px;background-position:-97px -275px;}.i-star-half{width:13px;height:12px;background-position:-97px -315px;}.i-star13{width:13px;height:12px;background-position:-97px -295px;}.i-star13-light{width:13px;height:12px;background-position:-97px -275px;}.i-star13-half{width:13px;height:12px;background-position:-97px -315px;}.i-add-food{width:25px;height:25px;background:url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/add-food.c3470351.png') no-repeat center;-webkit-background-size:25px;background-size:25px;}.i-remove-food{width:25px;height:25px;background-position:-15px -28px;}.i-arrow-up-flat{width:9px;height:4px;background-position:-16px -62px;background-color:#fff;}.icon-detail{background-image:url("//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/img/sprite/icon2.5047f759.png");background-size:128px 24px;display:inline-block;}.i-back-detail{width:16px;height:27px;background-position:-20px 1px;background-repeat:no-repeat;margin-top:12px;}.icon-detail-right{float:right;margin-right:12px;}.i-forward-detail{width:25px;height:43px;background-position:-59px 12px;background-repeat:no-repeat;float:left;margin-right:20px;}.i-phone-detail{width:23px;height:43px;background-position:-101px 12px;background-repeat:no-repeat;}[class^="icon-"],[class*=" icon-"]{display:inline-block;}@font-face{font-family:'iconfonts';src:url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/fonts/iconfonts.46f9ca6a.eot');src:url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/fonts/iconfonts.46f9ca6a.eot?#iefix') format('embedded-opentype'),url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/fonts/iconfonts.611acd53.woff') format('woff'),url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/fonts/iconfonts.c8fb99c6.ttf') format('truetype'),url('//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/fonts/iconfonts.f87c5c33.svg#iconfonts') format('svg');font-weight:normal;font-style:normal;}[class^="icon-"],[class*=" icon-"]{font-family:'iconfonts';speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.icon-page:before{content:"\e600";}.icon-shop:before{content:"\e601";}.icon-cross:before{content:"\e602";}.icon-phoneO:before{content:"\e603";}.icon-tick:before{content:"\e604";}.icon-rperson:before{content:"\e605";}.icon-speaker:before{content:"\e606";}.icon-cart:before{content:"\e607";}.icon-crossO:before{content:"\e608";}.icon-list:before{content:"\e609";}.icon-series:before{content:"\e60a";}.icon-yuanO:before{content:"\e60b";}.icon-upO:before{content:"\e60c";}.icon-funnel:before{content:"\e60d";}.icon-clock:before{content:"\e60e";}.icon-mobile:before{content:"\e60f";}.icon-rclock:before{content:"\e610";}.icon-trumpet:before{content:"\e611";}.icon-bar:before{content:"\e612";}.icon-graph:before{content:"\e613";}.icon-floppy:before{content:"\e614";}.icon-person:before{content:"\e615";}.icon-loc:before{content:"\e616";}.icon-plus:before{content:"\e617";}.icon-minus:before{content:"\e618";}.icon-crossthick:before{content:"\e619";}.icon-tickthick:before{content:"\e61a";}.icon-exclamation:before{content:"\e61b";}.icon-arrow-right-tall:before{content:"\e61c";}.icon-refresh:before{content:"\e61d";}.icon-instrument:before{content:"\e61e";}.icon-alarm:before{content:"\e61f";}.icon-arrow-down:before{content:"\e620";}.icon-talk:before{content:"\e621";}.icon-arrow-right:before{content:"\e622";}.icon-thumb:before{content:"\e623";}.icon-crossregu:before{content:"\e624";}.icon-exclaO:before{content:"\e625";}.icon-arrow-right-thin:before{content:"\e626";}.icon-arrow-left-thin:before{content:"\e627";}.icon-coupon-incline:before{content:"\e628";}.icon-magnifier:before{content:"\e629";}.icon-close_marquee:before{content:"\e62a";}.icon-triangle-down:before{content:"\e62b";}.icon-triangle-up:before{content:"\e62c";}.icon-loc-hollow:before{content:"\e62d";}.icon-series2:before{content:"\e62e";}.icon-bowl:before{content:"\e62f";}.icon-bowl-fill:before{content:"\e630";}.icon-paper:before{content:"\e631";}.icon-paper-fill:before{content:"\e632";}.icon-user:before{content:"\e633";}.icon-user-fill:before{content:"\e634";}.icon-star:before{content:"\e635";}.icon-clock3:before{content:"\e636";}.icon-crossO2:before{content:"\e637";}.icon-tickO2:before{content:"\e638";}.icon-exclaO2:before{content:"\e639";}.icon-warn:before{content:"\e640";}.icon-phone:before{content:"\e63a";}.icon-tick2:before{content:"\e63b";}.icon-cross2:before{content:"\e63c";}.icon-paper-fill2:before{content:"\e63d";}.icon-paper-fill3:before{content:"\e63e";}.icon-van:before{content:"\e63f";}.icon-faq-1:before{content:"\e900";}.icon-faq-2:before{content:"\e901";}.icon-faq-3:before{content:"\e902";}.icon-faq-4:before{content:"\e903";}.icon-magnifier-1:before{content:"\e904";}html{height:100%;}body{position:relative;min-height:100%;background-color:#efefef;color:#2f2f2f;}input,textarea{border:1px solid #C6C6C6;padding:3px;}input{box-sizing:border-box;}::-webkit-input-placeholder{color:#bfbfbf;}.fr{float:right;}.fl{float:left;}.hidden{display:none;}.unvisialbe{visibility:hidden;}.clear{clear:both;}.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0;}.clearfix{zoom:1}.header{height:42px;border-bottom:1px solid #ffd705;background-color:#ffd705;}.header .inner{padding:0 15px;}.header .site-name{color:#6b450a;line-height:42px;font-size:20px;margin-left:10px;font-weight:normal;float:left;}.header .logo{margin-top:4px;}.header .logo img{width:34px;height:34px;}.header .o-center{padding-top:12px;float:right;}.header .o-center .i-center{display:inline-block;vertical-align:top;margin-top:1px;}.header .o-center .o-center-word{display:inline-block;vertical-align:top;}.header .o-center span{font-size:16px;color:#6b450a;}.header .header-right{position:absolute;top:0;right:10px;height:100%;line-height:42px;}.header .place{margin-left:10px;padding-top:12px;}.header .place .name{font-size:16px;color:#6b450a;}.header .place .i-tri{vertical-align:1px;}.page-header{text-align:center;position:relative;}.page-name{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0 65px;text-align:center;line-height:44px;font-size:17px;color:#333;}.page-name-marquee{display:inline-block;white-space:nowrap;}.header .back-wrap{position:absolute;top:0;left:0;height:42px;line-height:42px;padding:0 30px 0 8px;}.header .i-back{font-size:24px;color:#333;display:inline-block;vertical-align:top;margin-top:11px;float:left;}.header360{background-color:#00c9b0;border-bottom:1px solid #00c9b0;}.new-header{height:43px;background:#fff;border-bottom:1px solid #b2b2b2;}.service{margin-top:27px;}.service .i-mobile{vertical-align:-3px;}.service span{margin-left:5px;}.service .service-wrap{font-size:14px;text-align:center;}.service-wrap a{color:#999;}.service-wrap a label{color:#FFB000;}.sd-table,td,tr,th{font-size:12px;border-collapse:collapse;}.sd-table th,.sd-table td{border-collapse:collapse;border:#dddddd solid 1px;vertical-align:top;margin:0;padding:0;}.sd-table .th-inner,.sd-table .td-inner{padding:6px 15px;}.sd-table{width:100%;}.mask{position:absolute;position:fixed;z-index:10000;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);}.simpledialog{position:absolute;z-index:20000;width:305px;background-color:#fff;border-radius:8px;-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;}.buttondialog-word{padding:19px 32px 18px;text-align:center;font-size:16px;border-bottom:1px solid #dcdcdc;color:#333333;word-break:normal;}.buttondialog-op{display:-webkit-box;display:-ms-flexbox;display:-moz-box;display:box;}.buttondialog-op button{line-height:45px;color:#ff6900;font-size:17px;text-align:center;display:block;border-left:1px solid #dcdcdc;-webkit-box-flex:1;-ms-flex:1 0 auto;-moz-box-flex:1;box-flex:1;}.buttondialog-op button:first-child{border-left:none;}.tipdialog{position:absolute;z-index:10001;border-radius:3px;background-color:rgba(0,0,0,0.5);-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;transition:opacity 300ms linear;-webkit-transition:opacity 300ms linear;}.tipdialog-content{width:270px;padding:10px 12px;font-size:17px;text-align:center;color:#ffffff;}.tipdialog-content .icon-tick{color:#53c123;vertical-align:-1px;}.tipdialog-content .icon-cross{color:red;vertical-align:-1px;}.menudialog{position:fixed;width:100%;bottom:0;z-index:10001;}.menudialog-group{margin:10px;background-color:#ffffff;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;}.menudialog-item-html,.menudialog-item-button,.menudialog-item-cancel{text-align:center;border-top:1px solid #d2d2d2;}.menudialog-item-button,.menudialog-item-cancel{font-size:20px;padding:11px;}.menudialog-item-first{border:none;}.menudialog-item-button{color:#ff6900;}.menudialog-item-cancel{color:#959595;}.commondialog-close{position:absolute;top:0;right:0;width:36px;height:35px;z-index:10;}.commondialog-close i{margin:15px 0 0 10px;width:11px;height:10px;display:block;font-size:14px;color:#a0a0a0;line-height:10px;text-indent:-2px;}.commondialog-content{padding:15px 20px;}.borderradius-1{border-radius:1px;-moz-border-radius:1px;-webkit-border-radius:1px;-ms-boder-radius:1px;-o-boder-radius:1px;}.borderradius-2{border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-ms-boder-radius:2px;-o-boder-radius:2px;}.borderradius-3{border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;-o-boder-radius:3px;}.borderradius-4{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;-ms-boder-radius:4px;-o-boder-radius:4px;}.borderradius-5{border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;-ms-boder-radius:5px;-o-boder-radius:5px;}.text-overflow-ellipsis{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.text-overflow-ellipsis-2{line-height:1.15em;max-height:2.3em;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;}.text-overflow-ellipsis-3{line-height:1.15em;max-height:3.45em;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;}.combtn{border:0;color:#FFFFFF;background-color:#FF6900;text-align:center;cursor:pointer;-webkit-appearance:none;-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;-o-boder-radius:3px;border-radius:3px;}.comtextarea{border:1px solid #D2D2D2;resize:none;padding:10px;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;-ms-boder-radius:3px;}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}.flexbox,.flexboxv{display:-webkit-box;display:-ms-flexbox;display:-moz-box;display:box;}.flexboxv{-webkit-box-orient:vertical;-ms-flex-direction:column;-moz-box-orient:vertical;box-orient:vertical;}.flex{-webkit-box-flex:1;-ms-flex:1 1 auto;-moz-box-flex:1;box-flex:1;}.comselect{border:1px solid #d2d2d2;position:relative;display:inline-block;width:210px;height:30px;line-height:30px;}.comselect-select{position:absolute;top:50%;left:0;margin-top:-11px;width:100%;opacity:0;z-index:1;}.comselect-value{padding:0 28px 0 10px;display:block;height:100%;overflow:hidden;}.comselect-value.comselect-unselected{color:#bfbfbf;}.comselect-i{position:absolute;top:50%;margin-top:-3px;right:9px;width:12px;height:6px;line-height:6px;font-size:12px;color:#d2d2d2;}.btn-invalid{background-color:#898989!important;}.text-marquee{white-space:nowrap;display:inline-block;}.field-load,.field-load-btn{text-align:center;font-size:14px;height:26px;line-height:26px;}.field-load{padding-left:20px;}.field-load-loading:before{content:"";display:inline-block;position:relative;left:-11px;padding:0;border:0;background:0;width:2px;height:2px;border-radius:100%;box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;transform:rotate(360deg);animation:spin 1.5s linear infinite;-webkit-transform:rotate(360deg);-webkit-animation:spin 1.5s linear infinite;top:-4px;}.combtn{background:#ffd300;color:#6b450a;}.btn-invalid{color:#ddd !important;}.removeHeader .header,.removeHeader .page-header{display:none!important;}.removeHeader .comment-menu-content,.detail-menu-content{padding-top:46px;}.removeHeader .menu-tabs-fixed{top:0;}.https{};</style><script>lsloader.load("/static/css/global.css","//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/global.7685afe6.css",function(){document.documentElement.setAttribute('data-cssawait',parseInt(document.documentElement.getAttribute('data-cssawait'))-1);if(parseInt(document.documentElement.getAttribute('data-cssawait'))==0){document.documentElement.style.display='';}} )</script>
    <!-- 上报通道标识 -->
    <meta name="lx:category" content="waimai">
    <!-- 关闭灵犀自动发送PV -->
    <meta name="lx:autopv" content="off">
    <script type="text/javascript">
        !(function (win, doc, ns) {
            var cacheFunName = '_MeiTuanALogObject';
            win[cacheFunName] = ns;
            if (!win[ns]) {
                var _LX = function () {
                    _LX.q.push(arguments);
                    return _LX;
                };
                _LX.q = _LX.q || [];
                _LX.l = +new Date();
                win[ns] = _LX;
            }
        })(window, document, 'LXAnalytics');

        var searchlist = {}, reg = /([^?=&]+)(=([^&]*))?/g;
        location.search.replace(reg, function($0, $1, $2, $3) {
            searchlist[$1] = $3;
        });
        var ctype = searchlist['wm_ctype'];

        // 设置应用名称
        // 区分所在环境：团购app/外卖app/i版
        if(ctype && ctype.indexOf('mt') > -1){
            LXAnalytics('set', 'appnm', 'group');
        } else if(ctype && (ctype.indexOf('iphone') > -1 || ctype.indexOf('android') > -1)) {
            LXAnalytics('set', 'appnm', 'waimai');
        } else {
            LXAnalytics('set', 'appnm', 'waimai_i');
        }
        // 区分普通i、wxi、mti
        var path = location.pathname;
        var wx_scene = searchlist['wx_scene'];
        if(/mti/.test(path)){
            LXAnalytics('set', 'lch', 'mti');
        } else if(/wxi/.test(path)){
            LXAnalytics('set', 'lch', 'wxi');
        } else {
            LXAnalytics('set', 'lch', 'i');
        }
        if(!!searchlist['os_version']){
            LXAnalytics('set', 'os', decodeURIComponent(searchlist['os_version']));
        }
        if(ctype == 'wxapp' && wx_scene){
            // 拼团提单，嵌入小程序上报 跟小程序一致
            LXAnalytics('set', 'appnm', 'waimai_wxapp');
            LXAnalytics('set', 'lch', wx_scene);
        }

        function getCookie(key) {
            var cookies = document.cookie ? document.cookie.split('; ') : [];

            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split('=');
                if(parts[0] === key) {
                    return  decodeURIComponent(parts[1]);
                }
            }
        }
        window.LXPV = function (cid, valLabExtend) {
            var environment =
                {
                    "uid": getCookie('u')?getCookie('u'):'',
                    "logintype": getCookie('logintype')?getCookie('logintype'):'',
                    "cityid": getCookie('w_cid')
                };
            // 设置PV相关扩展信息，可以为null
            var latlng = getCookie('w_latlng')?getCookie('w_latlng').split(','):[0,0];
            var valLab = { // 设置扩展信息
                custom : {
                    latitude: latlng[0],
                    longitude: latlng[1]
                }
            };
            if(valLabExtend&&(typeof valLabExtend ==='function')){
                valLab = valLabExtend(valLab);
            }

            LXAnalytics('pageView', valLab, environment, cid);
        }

    </script>

    <link href="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/css/page/order/evaluate.104147ef.css" rel="stylesheet">

</head>
<body class="mti">

<header id="header" class="new-header page-header  ">
    <a class="j-back-link back-wrap" href="/" onclick="if(document.referrer){delayGo(function(){history.go(-1)});return false;}">
        <i class="icon i-back"></i>
    </a>
    <div class="header-right"></div>
    <h1 class="j-page-name page-name">评价</h1>
</header>



<div class="field">
    <div class="evalu-field">
        <div class="evalu-value clearfix">
            <div id="evalu-star" class="evalu-star">
                <i class="j-i i-star"></i><i class="j-i i-star"></i><i class="j-i i-star"></i><i class="j-i i-star"></i><i class="j-i i-star"></i>
            </div>
        </div>
    </div>


    <div class="tips-comment-field">

        <div class="comment-field clearfix">
            <textarea id="comment-input" class="comment-input" placeholder="亲，菜品的口味如何，商家的服务是否周到?" data-max="140" maxlength="140"></textarea>
            <div class="comment-num"><span id="comment-num">140</span></div>
        </div>
    </div>

    <ul id="food-field" class="food-field">
        <li class="food-item">
            <div class="food-name text-overflow-ellipsis">${name}</div>
            <button class="j-food-evalu food-evalu borderradius-3" data-foodid="1313953153"></button>
        </li>
    </ul>
</div>


<div class="console-field">
    <button id="btn-commit" class="combtn console-commit">提交评价</button>
</div>



<script>

    $('#btn-commit').click(function () {

        if($('#comment-input').val().length>0){
            var stars = $('.i-star-light').length;
            var appraise = $('#comment-input').val();
            alert(appraise)
            $.ajax({
                type: "POST",//请求类型
                contentType :'application/json;charset=utf-8',
                traditional:true,
                url: "${pageContext.request.contextPath }/appraiseSubmit",//请求的url
                data:JSON.stringify({
                    info:appraise,
                    star:stars,
                    orderid:"${id}"
                }),
                dataType: "text",//ajax接口（请求url）返回的数据类型
                success: function (data) {

                    if(data == "sucess")
                        window.location.href=
                            "${pageContext.request.contextPath}/mobile/appraiseSucess.html";
                    else
                        alert("评价提交失败！！" + data);

                },
                error: function (data) {//当访问时候，404，500 等非200的错误状态码
                    alert("加载数据失败！" + data);
                }
            });

        }





    })



</script>

<script src="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/js/lib/wm_lib.64ab1c01.js"></script>

<script>require.config({
    baseUrl: "//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/js",
    shim: {
        'zepto': {
            exports: 'Zepto'
        },
        'jquery': {
            exports: 'Zepto'
        }
    },
    paths: {
        'zepto': 'fe_common/lib/zepto',
        'jquery': 'fe_common/lib/zepto'
    }
});
(function (){
    var conch = /conch/.test(navigator.userAgent);
    if(conch){ //钱包内嵌去除顶部
        $(document.body).addClass("removeHeader")
    }
})()
</script>

<script>Raven.config('https://e284c96b17d24de69b3ac24cae61c5d0@sentry.sankuai.com/78').install();</script>  <script src="//s3plus.meituan.net/v1/mss_55947e464b144ac4b0636ecb58afb82d/waimai-i-production/js/page/order/evaluate.7ffccc3b.js"></script>
<script>
    require(['page/order/evaluate'],function(page) {
        page.init({
            baseurl : '/mti',
            orderViewId : '20033773489637133'
        });
    });
</script>


<script src="//analytics.meituan.net/analytics.js" type="text/javascript" charset="utf-8" async="" defer=""></script>



</body></html>

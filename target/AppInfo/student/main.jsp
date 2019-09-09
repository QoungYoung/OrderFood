<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/7/12
  Time: 16:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie6"><![endif]--><!--[if IE 7]><html class="ie7"><![endif]--><!--[if IE 8]><html class="ie8"><![endif]--><!--[if IE 9]><html class="ie9"><![endif]--><!--[if !IE]><!--><html><!--<![endif]--><head>
<meta charset="utf-8">
<link rel="shortcut icon" href="favicon.ico">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="renderer" content="webkit">
<script src="${pageContext.request.contextPath }/statics/js/jquery-1.10.1.min.js"></script>
<script>
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
</script>



<script>!F.context('staticController') && F.context('staticController',{run: function (f) { f && f.call(this); }, /**/fail: function () { /**/ }});</script>
<script src="${pageContext.request.contextPath }/statics/js/staticLoader_f1971d5.js"></script>
<script>F.context('staticController').init && F.context('staticController').init(!!'',!!'',!!'',null,'');</script>


<title>【叮当食堂】在学校享受高品质的生活服务</title>
<meta name="description" content="百度糯米，中国领先的互联网本地生活服务平台，精选美食、电影、旅游、酒店、KTV、丽人、结婚、休闲娱乐，及鲜花、汽车、机票火车票等优享服务。一起百度糯米，惠享品质生活！！" />
<meta name="keywords" content="百度糯米,本地生活服务,美食,电影,旅游,酒店,KTV">




<script>
    var _hmt = _hmt || [];
    F.context('tongji_hm', {
        init: (function() {
                return function (rtTag) {
                    rtTag && _hmt.push(['_trackRTEvent', rtTag]);
                    var hm = document.createElement('script');
                    hm.src = 'hm.js-a028c07bf31ffce4b2d21dd85b0b8907.js'/*tpa=https://hm.baidu.com/hm.js?a028c07bf31ffce4b2d21dd85b0b8907*/;
                    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);
                }
            }
        )()
    });
    F.context('tongji_hm').init();
</script>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/statics/css/global.css"/>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/statics/css/common.css"/>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/statics/css/header.css"/>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/statics/css/index.css"/>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/statics/css/list.css"/>
<link rel="stylesheet" href="${pageContext.request.contextPath }/statics/css/swiper.min.css">


<style>
    html, body {
        position: relative;
        height: 100%;
        width: 100%;
    }
    body {
        margin: 0;
        overflow: hidden;
    }
    #preload{
        position:absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;

        z-index:200;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .preload-bg{
        position:absolute;
        width:50%;
        height:50%;
        background:#000;
    }
    #preload .tip{
        display:inline;
        color:#fff;
        font-size:4vw;
        text-transform:uppercase;
        font-weight:bold;
        line-height:1;
        position:relative;
        overflow:hidden;
    }
    .tip-bg{
        position:absolute;
        width:0px;
        height:100%;
        background:#fff;
    }
    .swiper-container {
        width: 50%;
        height: 50%;
        z-index: 100;
    }
    #txt {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .box {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    h2 {
        cursor: pointer;
        color: #fff;
        font-size: 11vw;
        line-height: 0;
        letter-spacing: -0.04em;
        display: inline;
        position: absolute;
        max-width: 74.61937%;
        white-space: normal;
        left: 0;
        bottom: calc(50% - 75px);
        margin-left: 12.69031%;
    }

    .swiper-slide h2 {
        display: none;
    }
</style>


</head>


<body mon="page=index_new" class="gl-big-screen">

<script>
    F.context({
        'channel': 'zhifang', //
        'channel_content': '', //
        'da_page': 'index_new', //
        'nuomi_base': 'https://www.nuomi.com/',
        'logout_nuomi': '/pclogin/main/logout',
        'baid_uss_url': '//nuomipassport.baidu.com/getbduss',
        'baidu_stoken_url': '//passport.baidu.com/v3/login/api/auth?tpl=nuomi&return_type=5&u=https%3A%2F%2Fm.nuomi.com%2Fwebapp%2Fuser%2Fsetstoken%3Fcallback%3Dcb',
        'logout_baidu': 'https://passport.baidu.com/?logout',
        'xll': '', //
        'label_sort_js': '', //
        'loginTest': '1', //
        'passport_base': 'https://passport.baidu.com/',
        'nuomi_old_base': 'https://login.nuomi.com/',
        'login_idc':'' || 'sh',
        'passport_reg': '//passport.baidu.com/v2/?reg&tpl=nuomi&color=pink',
        'login_id': '',
        'sample_hit': '' //
    });
</script>


<!--[if IE 6]>
<div id="kie-bar" class="kie-bar">
    目前您正在使用ie6浏览器，该浏览器已经过时了，为了更加安全和方便地进行团购，百度糯米推荐您使用以下浏览器：<a href="javascript:if(confirm(%27http://www.microsoft.com/china/windows/IE/upgrade/index.aspx  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.microsoft.com/china/windows/IE/upgrade/index.aspx%27" tppabs="http://www.microsoft.com/china/windows/IE/upgrade/index.aspx" class="kie-setup-IE8"  target="_blank" title="免费升级至IE8浏览器">免费升级</a>或下载使用<a href="javascript:if(confirm(%27http://browser.baidu.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://browser.baidu.com/%27" tppabs="http://browser.baidu.com/" class="kie-setup-baidu" target="_blank" title="百度浏览器">百度浏览器</a>，体验极速浏览体验！</div>
<style>
    .kie-bar {
        height: 24px;
        line-height: 1.8;
        font-weight:normal;
        text-align: center;
        border-bottom:1px solid #fce4b5;
        background-color:#FFFF9B;
        color:#e27839;
        position: relative;
        font-size: 14px;
        text-shadow:  0 0  1px #efefef;
        padding: 5px 0;
    }
    .kie-bar a {
        color:#08c;
        text-decoration: none;
    }
</style>
<![endif]-->




<div class="search-bar clearfix flexible static-hook-real static-hook-id-2" mon="area=searchTop">
    <div class="logo-area">
        <a href="javascript:;" tppabs="https://www.nuomi.com/" class="logo" mon="element=logo" title="餐厅订餐">
            <img class="fix-new-logo" src="re-logo_7c90a10.png" tppabs="https://gss0.bdstatic.com/8r1VfDn-KggZnd_b8IqT0jB-xx1xbK/static/common/nis_index/sub/img/re-logo_7c90a10.png">
        </a>
    </div>
    <div class="search-area clearfix">
        <div data-ui-id="main-searcher" class="form-wrap clearfix">
            <form method="get" action="https://bj.nuomi.com/search" id="j-searchForm" >
                <input type="text" id="j-searchInput" class="searchinput" name="k" value="" data-placeholder=""placeholder="搜索菜品" autocomplete="off" mon="element=search_input"/>
                <div class="searchbtn-wrap"><input type="submit" class="searchbtn" id="j-searchBtn" value="" mon="element=search_button"/>
                    <span class="search-text">搜&nbsp;索</span>
                    <div class="btn-shadow"></div>
                </div><input type="hidden" id="j-input-hidden" name="rid" value="e7c9787d6cded2769910d9275f189d16">
            </form>
        </div>
    </div>
</div></div><script type="text/template" id="autocomplete-template">
    <!--for:${data} as ${suggestion}, ${index}-->
    <div data-index="${index}" class="j-suggestion-item n-textbox-autocomplete-item" mon="area=sug&element=${suggestion.relword}">
        <span class="word">${suggestion.relword}</span>
        <span class="sug-count">约<em class="count">${suggestion.count}</em>个结果</span>
    </div>
    <!--/for-->
</script>
<div class="nav-bar-header nav-area-index static-hook-real static-hook-id-3" >
    <div class="nav-inner flexible clearfix">
        <ul class="nav-list clearfix" mon="area=nav&element_type=nav" id="j-catg">
            <li class="nav-item cate-row all-cate deep"><span class="item ">今日信息</span><span class="item-img"></span>
                <div class="left-menu clearfix" id="j-catg-list">

                    <div class="level-item" catg-id="326">
                        <div data-index="0" class="first-level j-catg-row " mon="area=catg_326">

                            <dl>
                                <dt class="title">
                                    <a href="${pageContext.request.contextPath }/window" target="_top" mon="element=美食">美食分类</a></dt>
                            </dl></div>
                        <div class="second-level with-min" mon="area=catg_hover_326"><div class="section clearfix"><div class="section-item clearfix  no-top-border ">
                        <h3>餐厅分类</h3><ul><li><a href="327.htm" tppabs="https://bj.nuomi.com/327" target="_top" class="" mon="element=第一餐厅">第一餐厅</a></li><li><a href="364.htm" tppabs="https://bj.nuomi.com/364" target="_top" class="" mon="element=第二餐厅">第二餐厅</a></li><li><a href="380.htm" tppabs="https://bj.nuomi.com/380" target="_top" class="" mon="element=第三餐厅">第三餐厅</a></li>
                    </ul></div><div class="section-item clearfix ">
                        <h3>荤素分类</h3><ul><li><a href="388.htm" tppabs="https://bj.nuomi.com/388" target="_top" class="" mon="element=盖浇饭">盖浇饭</a></li><li><a href="393.htm" tppabs="https://bj.nuomi.com/393" target="_top" class="" mon="element=汤面拌面">汤面拌面</a></li><li><a href="424.htm" tppabs="https://bj.nuomi.com/424" target="_top" class="" mon="element=荤菜">荤菜</a></li><li><a href="450.htm" tppabs="https://bj.nuomi.com/450" target="_top" class="" mon="element=素菜">素菜</a></li><li><a href="451.htm" tppabs="https://bj.nuomi.com/451" target="_top" class="" mon="element=羊肉汤/牛肉汤">羊肉汤/牛肉汤</a></li><li><a href="504.htm" tppabs="https://bj.nuomi.com/504" target="_top" class="" mon="element=清真窗口">清真窗口</a></li><li><a href="509.htm" tppabs="https://bj.nuomi.com/509" target="_top" class="" mon="element=麻辣烫/米线">麻辣烫/米线</a></li>
                    </ul></div><div class="section-item clearfix ">
                        <h3>价位分类</h3><ul><li><a href="javascript:;"  target="_top" class="" mon="element=5-10元">5-10元</a></li><li><a href="javascript:;"tppabs="https://bj.nuomi.com/390" target="_top" class="" mon="element=10-15元">10-15元</a></li><li><a href="javascript:;" tppabs="https://bj.nuomi.com/391" target="_top" class="" mon="element=20+">20+</a></li></ul></div></div></div></div>
                    <div class="level-item" catg-id="320">
                        <div  class="first-level j-catg-row " mon="area=catg_320">
                            <dl><dt class="title"><a href="javascript:;" target="_top" class="">今日花费：XX元</a></dt>
                                <dd class="title"><a href="javascript:;" target="_top" class="">${sessionScope.consume} 元</a></dd>
                            </dl>
                        </div>
                        <div class="level-item" catg-id="316"><div class="first-level j-catg-row " mon="area=catg_316"><dl><dd><a>超过了全校 <span>XX</span>%的人</a></dd><dd>
                        </dl></div></div>
                        <div class="level-item" catg-id="320"><div  class="first-level j-catg-row " mon="area=catg_320">
                            <dl><dt class="title"><a href="javascript:;" target="_top" class="">今日摄入：</a></dt>
                                <dd class="title"><a href="javascript:;" target="_top" class="">${sessionScope.cal} 卡</a></dd>
                                <div class="second-level with-min" mon="area=catg_hover_320"></div></dl></div>



                            <div class="level-item" catg-id="316"><div class="first-level j-catg-row " mon="area=catg_316"><dl><dd><a>超过了全校 <span>XX</span>%的人</a></dd><dd>
                            </dl></div></div>
                            <div  class="first-level j-catg-row " mon="area=catg_320">
                                <dl><dt class="title"><a href="javascript:;" target="_top" class="">购物车</a></dt>
                                    <dd class="title"><a href="javascript:;" target="_top" class="">0</a></dd>
                                </dl>
                            </div>
                        </div></div></div>
            </li>
            <li class="nav-item nav-item-first"><a href="//www.nuomi.com" target="_top" class="item first new-item" mon="element=首页">一餐</a></li>
            <li class="nav-item nav-item-first"><a href="//www.nuomi.com" target="_top" class="item first new-item" mon="element=首页">二餐</a></li>
            <li class="nav-item nav-item-first"><a href="//www.nuomi.com" target="_top" class="item first new-item" mon="element=首页">三餐</a></li>

        </ul></div></div>

<div class="container clearfix flexible">
    <div class="re-top-content">
        <div class="mid-area-re">


            <!--banner轮播-->

            <iframe height="372" width="717" src="${pageContext.request.contextPath }/student/lunbo.html"></iframe>


        </div>

        <div class="right-sidebar-re">
            <div class="login-container">
                <div class="default" style="display: none;">
                    <div class="head-img-row">
                        <img src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt="">
                    </div>
                    <p class="user-name">Hi！你好</p>
                </div>
                <div class="default" style="display: block;">
                    <div class="setting">
                        <a href="https://www.meituan.com/account/settings" target="_blank">
                            <div class="icon">
                                <i class="iconfont icon-setting_iconx"></i>
                            </div>
                        </a>
                    </div>
                    <div class="head-img-row">
                        <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt="">
                        </a>
                    </div>
                    <div class="nickname-row">
                        <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                            <p class="user-name">${sessionScope.user.stuname}</p></a>
                        <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                            <i class="iconfont iconfont_level icon-lable_level_0"></i>
                        </a>
                    </div>

                    <div class="fn-row clearfix">
                        <div class="fn-item">
                            <a href="https://www.meituan.com/orders/ " target="_blank"><div class="icon">
                                <i class="iconfont icon-order_iconx"></i>
                            </div>
                                <p class="fn-name">修改资料</p>
                            </a>
                        </div>
                        <div class="fn-row clearfix">
                            <div class="fn-item">
                                <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                                    <div class="icon"><i class="iconfont icon-more_iconx"></i></div>
                                    <p class="fn-name">退出登录</p></a></div></div>
                    </div></div></div>
        </div>
        <div class="re-mid-content">
            <div class="content-header clearfix">
                <h3>今日优选</h3>
                <ul class="reco-words">
                    <li class="link-all"><a href="javascript:;" target="_blank" mon="element=top_link">查看全部<span class="all-arrow"></span></a></li>
                </ul>
            </div>
            <ul class="item-list" id = "todayprev">
            </ul>
        </div>
    </div>

    <%--<div class="re-footer-content">--%>
        <%--<div id="footer" class="footer">--%>
        <%--</div>--%>
        <%--<div class="footer-bottom">--%>
            <%--<a target="_blank" href="" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="police_logo_2aa5dfa.png" tppabs="https://gss0.bdstatic.com/8r1VfDn7KggZnd_b8IqT0jB-xx1xbK/static/common/widget/revision_footer/imgs/police_logo_2aa5dfa.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;">京公网安备 11000002000001号</p></a>--%>
        <%--</div>--%>
    <%--</div>--%>
</div>




<script>
    $(document).ready(function(){
        $.ajax({
            type:"GET",//请求类型
            url:"todaypreferencelist.json",//请求的url
            dataType:"json",//ajax接口（请求url）返回的数据类型
            success:function(data){//data：返回数据（json对象）
                var options = "";
                for(var i = 0; i < data.length; i++){



                    options += "<li class='item yule-item clearfix'>" +
                        "<a href=/food/"+data[i].id+
                        " target='_blank' class='yule-content'>"+
                        "<img class=\"yule-image\" src=${pageContext.request.contextPath }"+data[i].img+">"+
                        "<div class=\"yule-title\">"+data[i].name+"</div>"+
                        "     <object>\n" +
                        "     <a href=\"javascript:;\"target=\"_blank\" class=\"yule-ugc\">\n" +
                        "     <div class=\"s-grey\">\n" +
                        "     <div class=\"s-color\" style=\"width: 98.938%\"></div>\n" +
                        "     </div>\n" +
                        "     </a>\n" +
                        "     </object>\n" +
                        "     <div class=\"shop-info\">\n" +
                        "     <span>"+data[i].foodUsername+"</span>\n" +
                        "     <span class=\"has-sale\">已售"+data[i].count+"</span></div>\n" +
                        "     </a>\n" +
                        "     </li>";
                }
                $("#todayprev").html(options);
            },
            error:function(data){//当访问时候，404，500 等非200的错误状态码
                alert("加载今日优选失败！"+data);
            }
        });
    });
</script>


<script type="text/javascript">
    (function (d) {
        (window.bd_cpro_rtid = window.bd_cpro_rtid || []).push({id:"nH0znjDv"});
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = location.protocol + "//cpro.baidu.com/cpro/ui/rt.js";
        var s0 = d.getElementsByTagName("script")[0];
        s0.parentNode.insertBefore(s, s0);
    })(document);
</script>


<script>
</script>



</body><script type="text/javascript" src="${pageContext.request.contextPath }/statics/js/mod.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/statics/js/common.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/statics/js/list.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/statics/js/index.js"></script>
<script type="text/javascript">
    !function(){
        require.async(['common:widget/static/init.js'], function(init){});
    }();
    !function(){
        F.context('staticController').run(function (data, tools) {

        });
    }();
    !function(){
        F.context('staticController').run(function () {
            require.async(['common:widget/new_header/bar/revision_bar.js']);
            require.async(['common:widget/new_header/bar/dropdown.js'], function (Dropdown) {
                var nav = new Dropdown({
                    container:'#header-bar',
                    containerClass:'j-bar-dropdown'
                });
            });
        });
    }();
    !function(){F.context('staticController').run(function () {require.async(['common:widget/new_header/nav/nav.js'], function (Nav) {var nav = new Nav({selectedClass: 'selected',container:'#j-catg',navContainerClass:'all-cate',navClass:'j-catg-row'});});});}();
    !function(){        F.context({
        isHotCity: '', //
        isIndex: '1', //
        erweimaCurrentTime: new Date(1562403860 * 1000)
    });
        F.context('staticController').run(function () {
            require.async(['common:widget/iot_header/revision_header.js']);
        });
    }();
    !function(){    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https'){
            bp.src = 'push.js'/*tpa=https://zz.bdstatic.com/linksubmit/push.js*/;
        }
        else{
            bp.src = 'push-1.js'/*tpa=http://push.zhanzhang.baidu.com/push.js*/;
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
    }();
    !function(){require.async('common:widget/top_search_box_revision/top_search_box.js', function(topSearch){
        topSearch.init();
    });
    }();
    !function(){    require.async(['common:widget/ui/dialog/dialog.js'], function(Dialog){
        $('#j-tttel').on('click', function(){
            Dialog.confirm({
                width : 560,
                customClassName : "ui-confirm-lz",
                content : '<p>业务投诉平台受理对团购业务运营过程的投诉和建议:<br />投诉地址：<a target="_blank" href="http://help.baidu.com/newadd?prod_id=25" class="link">http://help.baidu.com/newadd?prod_id=25</a></p><p>感谢您的反馈！</p>',
                footer : ['<a href="javascript:;" class="dialog-btn-cancel j-dialog-btn" data-event="cancel">关闭</a>'].join('')
            });
        });
    });
    }();
    !function(){F.context('staticController').run(function (data, tools) {
        var isStatic = this.isStatic;

        $.ajaxSetup({
            cache : false
        });

        //2014_10_11 zhangyijun02: 因增加广告轮播曝光日志逻辑，调整showtrack初始化方式

    });}();
    !function(){
        require.async("common:widget/ui/httpslink/httpslink.js",
            function (httpslink) {
                httpslink.init();
            });
    }();
    !function(){
        require.async('common:widget/util/request_check.js',
            function (reqCheck) {
                reqCheck.init(F.context('da_page'));
            }
        );
    }();
</script>


<canvas id="shows" style="position: absolute; left: 0px; top: 0px;"></canvas>
<script src="js/swiper.min.js"></script>
<script src="js/TweenMax.min.js"></script>

</html>

<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/7/28
  Time: 16:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE>
<!DOCTYPE html>


<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>${window.windowname}地址,营业时间(图)</title>
    <meta name="keywords">
    <meta name="description">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link href="${pageContext.request.contextPath }/statics/mobile/bdcss/reset.css" rel="stylesheet">
    <script src="${pageContext.request.contextPath }/statics/js/jquery-1.10.1.min.js"></script>
</head>
<body>


<section class="decorator-runtime-main-wrapper">
    <section class="widget-video-signboard-basic-only widget-signboard decorator-runtime-widget-wrapper"
             data-widget="base.SignboardBasic">
        <div class="header-pic signboard-basic-pic ">
            <div class="swiper-container swiper-container-horizontal" id="headerPicture">
                <img src="${pageContext.request.contextPath}/statics/img/default_winImg.jpg" width="411" height="230">
            </div>
        </div>

        <div class="poi-name-basic rowOne">
            <div class="name-wrapper">
                <div class="name">
                    <div class="name-inner">${window.windowname}</div>
                </div>
            </div>
        </div>
        <div class="merchant-info-basic" data-role="merchantInfo">
            <div class="contact-info">
                <div class="address" id="address">
                    <span class="icon"></span>
                    <span class="with-icon">${window.username}</span>
                </div>
                <div id="phone" class="contact-info-icon phone-icon">
                    <div class="phone"></div>
                </div>
                <div class="vertical-line "></div>
            </div>
        </div>
    </section>
    <div class="widget-service-id decorator-runtime-widget-wrapper" data-widget="winport.serviceId"
         style="display: none;">
        <div class="service-msg">
            <div class="service-bg">
                <div class="service-pic"></div>
                <div class="service-bg-mask"></div>
            </div>
            <div class="service-desc">
                <div class="title-line">
                    <div class="title"></div>
                    <div class="service-icon">
                        <div class="icon">熊掌号</div>
                    </div>
                </div>
                <p class="sub-title"></p>
                <div class="mask"></div>
            </div>
        </div>
        <div class="attention">
            <div class="attention-btn">
                <span class="text">关注</span>
            </div>
        </div>
        <div class="tip">
            <span class="tip-text">关注获取最新优惠</span>
            <span class="tip-close"></span>
        </div>
    </div>
    <section data-widget="feedHongBao.HongBao" class="hong-bao-section decorator-runtime-widget-wrapper"
             id="widget-hong-bao-popup-container-wapper" style="display: none">
        <div id="scratchCard">
            <div class="red-container">
                <div class="red-envelopes">
                    <div class="store-img">
                        <img src="" alt="店铺图片">
                    </div>
                    <p class="store-name"></p>
                    <div class="canvas-container">
                        <div class="gift-con">
                            <p><span></span>元现金红包</p>
                            <em>满<span></span>可使用</em>
                        </div>
                        <canvas width="404px" height="192px" id="canvas" style="width: 202px;height: 96px;"
                                class="canvas"></canvas>
                    </div>
                    <div class="bottom-con">
                        <p>点击领取将视为您同意将手机号码提供给商家</p>
                        <p>便于商家与您联系及接受商家咨询</p>
                        <p class="mobile">存入账户：<span></span></p>
                        <p class="protocal"><span class="right done"></span>同意<a
                                href="https://m.nuomi.com/webapp/common/statichongbao">《红包协议》</a></p>
                    </div>
                    <div class="bottom-button">
                        <button type="button" class="close-button">继续逛逛</button>
                    </div>
                </div>
                <div class="close-dialog"></div>
            </div>
            <div class="cover"></div>
        </div>
        <div id="redEnvelopes">
            <div class="nuomi-mask"></div>
            <div class="widget-red-envelop-popup-container" data-role="j-red-envelop-popup">
                <div class="bg-main">
                    <div class="store-msg">
                        <div class="store-img">
                            <img src="" alt="" id="hb-dealTinyImg">
                        </div>
                        <div class="store-name">“<span id="hb-dealBrand"></span>”送红包</div>
                    </div>
                    <div class="header-bg"></div>
                    <div class="ribbon-bg"></div>
                    <div class="red-envelop-main"></div>
                    <div class="red-envelop-main2"></div>
                    <div class="cover-inner"></div>
                    <div class="money-icon"></div>
                    <div class="money-drop"></div>

                    <div class="get-section">
                        <div class="get-button button">领红包</div>
                        <div class="red-envelop-tips">
                            <div id="hb-user-tel" class="hide">存入账户：<span></span></div>
                            <div class="rule-section">
                                <label class="done"></label>&nbsp;同意
                                <a href="https://m.nuomi.com/webapp/common/statichongbao" class="link">《红包协议》</a>
                            </div>
                            <div class="protocal-tip">
                                <p>点击领取将视为您同意将手机号码提供给商家</p>
                                <p>便于商家与您联系及接受商家咨询</p>
                            </div>
                        </div>
                    </div>

                    <div class="done-section">
                        <div class="sum-roll">
                            <span class="sum-roll-number"></span>
                            <span class="sum-yuan">&nbsp;元</span>
                        </div>
                        <div class="sum-limit-tip">满<span class="hb-shreshold"></span>元可用</div>
                        <div class="personal-link">已存入个人账户，可在个人中心查看</div>
                        <div class="done-button button">进店逛逛</div>
                    </div>

                    <div class="footer-bg"></div>
                    <div class="cancel-icon cancel-package-btn" data-role="j-cancel-btn"></div>
                </div>
                <!--overlay-->
                <div class="cast-overlay">
                    <div class="cast-container">
                        <div class="cast-text">领取失败, 请稍候重试</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="redEnvelopesNew">
            <div class="red-container">
                <div class="red-envelopes-new">
                    <p class="store-name"></p>
                    <div class="get-section">
                        <a href="https://m.nuomi.com/webapp/common/statichongbao" class="link">《红包协议》</a>
                        <div class="protocal-tip">
                            <p>点击领取将视为您同意将手机号码提供给商家</p>
                            <p>便于商家与您联系及接受商家咨询</p>
                        </div>
                        <div class="rule-section">
                            <span class="right done"></span>同意
                        </div>
                        <button class="feed-button get-button">领取红包</button>
                    </div>
                    <div class="done-section">
                        <div class="sum-roll">
                            <span class="sum-roll-number"></span>
                            <span class="sum-yuan">元</span>
                        </div>
                        <div class="sum-limit-tip">满<span class="hb-shreshold"></span>元可用</div>
                        <button class="feed-button done-button">进店逛逛</button>
                    </div>
                    <div class="personal-info">已存入个人账户:<span></span></div>
                </div>
                <div class="close-dialog"></div>
            </div>
            <div class="cover"></div>
        </div>
    </section>
    <section style="display:none" class="decorator-runtime-widget-wrapper"></section>
    <section style="display:none" class="decorator-runtime-widget-wrapper"></section>
    <div class="widget-clue-selected-services noop decorator-runtime-widget-wrapper"></div>
    <section class="widget-all-goods-no-pic goods-area decorator-runtime-widget-wrapper"
             data-widget="base.AllGoodsNoPic">
        <h1 class="widget-all-goods-title">本店优惠</h1>
        <div class="goods-container noop"></div>
        <div class="goods-container deal" data-role="goods-container" data-type="deal">
            <div class="goods-wrapper">
                <div class="icon-block">
                    <span class="icon icon-tag icon-tuan"></span>

                </div>
                <div class="goods-block" data-role="goods-block">
                    <ul class="goods">
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section style="display:none" class="decorator-runtime-widget-wrapper"></section>
    <section class="widget-technician noop decorator-runtime-widget-wrapper"></section>
    <section style="display:none" class="decorator-runtime-widget-wrapper"></section>
    <section class="widget-comment has-landing-page decorator-runtime-widget-wrapper">
        <div class="container">
            <a class="heading" href="https://m.nuomi.com/mshop/comment/97880598">
                <span class="title">评价<span class="total">(${allcount})</span></span>
                <div class="right">
                    <div class="rating">
                        <div class="fill" style="width: 96%;"></div>
                    </div>
                    <span class="score">4.8</span>
                    <div class="link-more">
                        <span class="arrow"></span>
                    </div>
                </div>
            </a>

            <div class="label-list-wrapper">
                <ul class="label-list level-list">
                    <li class="" data-desc="最新评价" data-index="0" data-pos="1">
                        <span class="name">最新评价</span>
                    </li>
                    <li class="" data-desc="有图" data-index="1" data-pos="1">
                        <span class="name">有图</span><span class="count">(1)</span>
                    </li>
                    <li class="" data-desc="好评" data-index="2" data-pos="1">
                        <span class="name">好评</span><span class="count">(1)</span>
                    </li>
                    <li class="negative" data-desc="差评" data-index="3" data-pos="1">
                        <span class="name">差评</span><span class="count">(0)</span>
                    </li>
                </ul>
            </div>

            <div class="comment-list-wrapper">
                <ul class="comment-list">
                </ul>
            </div>

            <div class="more">
                <a class="link-more" href="${pageContext.request.contextPath}/allAppraise/${window.id}">
                    <div class="more-text">查看全部评价</div>
                    <div class="more-arrow"></div>
                </a>
            </div>
        </div>
    </section>
    <section style="display:none" class="decorator-runtime-widget-wrapper"></section>
    <section class="widget-rank hidden decorator-runtime-widget-wrapper">
        <div>
            <div class="rank-header border-bottom-1px">
                <div class="rank-header-text">排行榜</div>
            </div>
            <div class="c-rank-box">
            </div>
        </div>
    </section>
    <section class="widget-merchant-info decorator-runtime-widget-wrapper" data-href="merchantId=97880598"
             data-widget="base.MerchantInfo">
        <div class="content-wrap">
            <article class="business-hours">
                营业时间：全天
            </article>
        </div>
    </section>
    <section data-widget="ugcEntrance.UgcEntranceNew" id="ugc-entrance-section"
             class="decorator-runtime-widget-wrapper">
        <div id="ugc-entrance-holder" class="show">
            <ul class="grid-1">
                <li class="j-ugc-entrance-comment" data-id="comment.merge">
                    <div id="ugc-entrance-comment">
                        <span></span>
                        <div>写评论</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show ugc-entrance-footer"></div>
    </section>
</section>
<script>


    $(document).ready(function(){
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/foodlist/${window.id}",//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                foodlist = "";
                for (var i = 0; i < data.length ; i++) {
                    foodlist += "                        <li class=\"good \" data-role=\"merchant-good\">\n" +
                        "                            <a class=\"good-item\" href=\"javascript:;\" data-role=\"merchant-good-item\"\n" +
                        "                               data-url=\"bainuo://tuandetail?tuanid=41064486&amp;areaid=100010000&amp;sellid=97880598&amp;lat=0.000000&amp;lng=0.000000&amp;s=f6ff186fd6b17207e8fb0491fc8a6c11\"\n" +
                        "                               data-gtype=\"deal\">\n" +
                        "\n" +
                        "                                <div class=\"pic-block\">\n" +
                        "                                    <img src=\"${pageContext.request.contextPath }"+data[i].img+"\"\n" +
                        "                                         alt=\""+data[i].name+"\">\n" +
                        "                                </div>\n" +
                        "\n" +
                        "                                <div class=\"basic-info\">\n" +
                        "                                    <p class=\"name name-with-pic-true\">"+data[i].name+"</p>\n" +
                        "                                    <div class=\"price\">\n" +
                        "                                        <div class=\"current\">"+data[i].price+"\n" +
                        "                                        </div>\n" +
                        "                                        <div class=\"origin\">"+(data[i].price+1)+"</div>\n" +
                        "                                    </div>\n" +
                        "                                </div>\n" +
                        "\n" +
                        "                                <div class=\"buy-button-container buy-button-container-deal\" data-role=\"buy-button\">\n" +
                        "                                    <div class=\"buy-button-wrap\">\n" +
                        "                                        <button class=\"buy-button buy-button-deal\" onclick='buy("+data[i].id+")' >购买\n" +
                        "                                        </button>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"sale-count\">已售"+data[i].count+"</div>\n" +
                        "                                </div>\n" +
                        "                            </a>\n" +
                        "                        </li>"

                }
                $('.goods').html(foodlist);
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        });
        getAppraise(0)
    });

    function getAppraise(star) {
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/appraiselist/${window.id}/0/"+star,//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                if(star == 0)
                    $('.total').html("("+data.list.length+")");
                writeAppraise(data)
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        })
    }
    function writeAppraise(data) {

        appraiselist = "";
        for (var i = 0; i < 3; i++) {
            appraiselist += "                    <li class=\"comment\" data-index=\"0\">\n" +
                "                        <div class=\"comment-header\">\n" +
                "                            <div class=\"avatar\" data-uid=\"607126802\">\n" +
                "                                <img src=\"${pageContext.request.contextPath}/statics/img/studentImg.jpg\">\n" +
                "                            </div>\n" +
                "                            <div class=\"meta-wrapper\">\n" +
                "                                <div class=\"meta\">\n" +
                "                                    <div class=\"profile\">\n" +
                "                                        <div class=\"name\">"+data.list[i].studentid.slice(0,3)+"****"+data.list[i].studentid.slice(-3)+"</div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"rating\">\n" +
                "                                        <div class=\"fill\" style=\"width: 100%;\"></div>\n" +
                "                                    </div>\n" +
                "\n" +
                "                                </div>\n" +
                "                            </div>\n" +
                "                            <div class=\"date\">2017-04-21</div>\n" +
                "                        </div>\n" +
                "                        <div class=\"comment-text\" data-commentitem=\"0\" data-pos=\"0\">\n" +
                "                            <div class=\"inner\">"+data.list[i].info+"</div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "                        <div class=\"comment-footer\">\n" +
                "                            <span class=\"from\">消费评价</span>\n" +
                "                        </div>\n" +
                "                    </li>"

        }
        $('.comment-list').html(appraiselist)

    }


    function buy(id) {
        window.location.href="${pageContext.request.contextPath}/buy/"+id
    }


</script>
</body>



</html>
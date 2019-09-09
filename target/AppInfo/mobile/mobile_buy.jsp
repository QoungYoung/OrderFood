<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/8/1
  Time: 15:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html class="ratio--1" style="font-size: 50px;"><head>
    <meta charset="utf-8">
    <meta name="for" content="meituan.com">
    <title>提交订单</title>
    <meta name="lx:category" content="meishi">
    <meta name="lx:appnm" content="imt">
    <meta name="lx:cid" content="c_FxXkF">
    <meta name="lx:autopv" content="off">
    <link rel="shortcut icon" href="favicon.ico" tppabs="http://meishi.meituan.com/i/favicon.ico" type="image/x-icon">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1,width=device-width, height=device-height, user-scalable=no">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1,width=device-width, height=device-height, user-scalable=no">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1,width=device-width, height=device-height, user-scalable=no">
    <link href="${pageContext.request.contextPath}/statics/mobile/bdcss/cssm-f=meis-meishi.mobile-page-order-index-index.css@3bcf852.css" type="text/css" rel="stylesheet">
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.10.1.min.js"></script>
</head>
<body>
<div id="app">
    <div class="main-content" data-reactroot="" data-reactid="1">
        <header class="navbar" data-reactid="2">

            <div class="nav-header" data-reactid="6">提交订单</div>
            <div class="nav-wrap-right" data-reactid="7"></div><!-- react-text: 8 --><!-- /react-text --></header>
        <div class="content-wrapper" data-reactid="9" style="min-height: 466px;">
            <div class="content-title" data-reactid="10">${food.name}</div>
            <div class="deal-content-wrapper deal-info" data-reactid="11">
                <div class="content-info-line" data-reactid="12"><!-- react-text: 13 -->单价：<!-- /react-text --><span class="deal-price" data-reactid="14"><!-- react-text: 15 -->${food.price}<!-- /react-text -->
                    <!-- react-text: 16 -->元<!-- /react-text --></span></div>
                <div class="content-info-line" data-reactid="17"><!-- react-text: 18 -->数量：<!-- /react-text -->
                    <div class="operate" data-reactid="19">
                        <button type="button" class="btn btn-weak btn-disabled minus">-</button>
                        <input type="text" class="number" value="1" data-reactid="21">
                        <button id="plus" type="button" class="btn btn-weak add" data-reactid="22">+</button>
                    </div>
                </div>
                <div class="content-info-line" data-reactid="23"><!-- react-text: 24 -->总价：<!-- /react-text --><span id="count" class="amount" data-reactid="25">${food.price}
                   元</span></div>
            </div><!-- react-text: 28 --><!-- /react-text -->
            <div class="btn-wrapper" data-reactid="29">
                <button id="submit" type="button" class="btn btn-block btn-strong btn-larger" data-reactid="30">提交订单
                </button>
            </div>

            <div class="meishi-msg-toast" style="display:none;" data-reactid="34">
                <div class="meishi-msg-toast-content" data-reactid="35"></div>
            </div>
            <div style="display:none;" class="" data-reactid="36">
                <div class="meishi-msg-bg" data-reactid="37"></div>
                <div class="meishi-msg-doc" data-reactid="38"><!-- react-text: 39 --><!-- /react-text -->
                    <div class="meishi-msg-bd" data-reactid="40"></div>
                    <div class="meishi-msg-ft" data-reactid="41"><a href="javascript:;" class="meishi-msg-btn meishi-msg-btn-cancel" data-reactid="42">取消</a><a href="javascript:;" class="meishi-msg-btn meishi-msg-btn-ok" data-reactid="43">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="javascript:;" class="top-btn" data-reactid="44"><span class="icon icon-top" data-reactid="45"></span></a>

        <div class="meishi-msg-toast" style="display:none;" data-reactid="75">
            <div class="meishi-msg-toast-content" data-reactid="76"></div>
        </div>
        <div style="display:none;" class="" data-reactid="77">
            <div class="meishi-msg-bg" data-reactid="78"></div>
            <div class="meishi-msg-doc" data-reactid="79"><!-- react-text: 80 --><!-- /react-text -->
                <div class="meishi-msg-bd" data-reactid="81"></div>
                <div class="meishi-msg-ft" data-reactid="82"><a href="javascript:;" class="meishi-msg-btn meishi-msg-btn-cancel" data-reactid="83">取消</a><a href="javascript:;" class="meishi-msg-btn meishi-msg-btn-ok" data-reactid="84">确定</a>
                </div>
            </div>
        </div><!-- react-text: 85 --><!-- /react-text --></div>
</div>
<script>


    $(".add").click(function () {
       $(".number").val(parseInt($(".number").val())+1);
       $("#count").html(parseInt($(".number").val())*${food.price}+"元");
       if(parseInt($(".number").val()) >1){
           $('.minus').removeClass("btn-disabled")
       }

    });
    $(".minus").click(function () {
        if(parseInt($(".number").val())>1){
            $(".number").val(parseInt($(".number").val())-1);
            $("#count").html(parseInt($(".number").val())*${food.price}+"元");
            if(parseInt($(".number").val()) == 1){
                $('.minus').addClass("btn-disabled")
            }
        }


    });
    $(".number").blur(function () {
        if(parseInt($(".number").val()) < 1)
            $(".number").val(1)
        $("#count").html(parseInt($(".number").val())*${food.price}+"元");
    })
    $("#submit").click(function () {
        var count = $(".number").val();
        window.location.href="${pageContext.request.contextPath}/orderSubmit/${food.id}/"+count;
    })
</script>
</body></html>

<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/7/28
  Time: 16:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE>
<html data-fontscale="1" class=" flex_support" style="font-size: 41.1px;">
<head>
    <style>
        body {
            opacity: 0
        }

        .BNJS-body-with-loading {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #EEE
        }

        .BNJS-body-with-loading:before {
            z-index: 998;
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #EEE
        }

        .BNJS-body-with-loading:after {
            z-index: 999;
            position: absolute;
            content: "加载中...";
            width: 100%;
            margin-top: 150px;
            top: 0;
            bottom: 0;
            padding-top: 30%;
            background-image: url(//gss0.bdstatic.com/5eR1ciub_Q63otebn9fN2DJv/wap-bainuo/zujianhua/bnjs/loading.jpg);
            text-align: center;
            background-position: center top;
            background-size: 30% auto;
            background-repeat: no-repeat;
            line-height: 1.6em;
            color: #898989;
            font-size: 14px
        }

        .BNJS-body-with-title-bar .BNJS-body-with-loading:after {
            margin-top: 109px
        }
    </style>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <title>百度糯米 - 美食</title>

    <link href="${pageContext.request.contextPath }/statics/mobile/bdcss/common.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath }/statics/mobile/bdcss/home.css" rel="stylesheet">


    <style type="text/css">
        .BNJS-download-mask {
        position: fixed;
        left: 0;
        top: 0;
        height: 45px;
        width: 100%;
        z-index: 99999
    }


    .BNJS-download-mask .link {
        display: block;
        width: 100%;
        height: 0;
        padding-bottom: 14%;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%
    }

    .BNJS-download-mask .download-close {
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border-bottom-right-radius: 20px
    }</style>
    <style type="text/css">
        .BNJS-popup-mask {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);
        z-index: 90000
    }

    .BNJS-popup-mask article, .BNJS-popup-mask aside, .BNJS-popup-mask audio, .BNJS-popup-mask canvas, .BNJS-popup-mask caption, .BNJS-popup-mask details, .BNJS-popup-mask div, .BNJS-popup-mask figure, .BNJS-popup-mask footer, .BNJS-popup-mask header, .BNJS-popup-mask hgroup, .BNJS-popup-mask iframe, .BNJS-popup-mask img, .BNJS-popup-mask mark, .BNJS-popup-mask menu, .BNJS-popup-mask nav, .BNJS-popup-mask object, .BNJS-popup-mask section, .BNJS-popup-mask span, .BNJS-popup-mask summary, .BNJS-popup-mask table, .BNJS-popup-mask tbody, .BNJS-popup-mask td, .BNJS-popup-mask tfoot, .BNJS-popup-mask thead, .BNJS-popup-mask tr, .BNJS-popup-mask video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-popup-mask a, .BNJS-popup-mask abbr, .BNJS-popup-mask address, .BNJS-popup-mask b, .BNJS-popup-mask blockquote, .BNJS-popup-mask cit, .BNJS-popup-mask code, .BNJS-popup-mask dd, .BNJS-popup-mask del, .BNJS-popup-mask dfn, .BNJS-popup-mask dl, .BNJS-popup-mask dt, .BNJS-popup-mask em, .BNJS-popup-mask fieldset, .BNJS-popup-mask h1, .BNJS-popup-mask h2, .BNJS-popup-mask h3, .BNJS-popup-mask h4, .BNJS-popup-mask h5, .BNJS-popup-mask h6, .BNJS-popup-mask hr, .BNJS-popup-mask i, .BNJS-popup-mask ins, .BNJS-popup-mask label, .BNJS-popup-mask legend, .BNJS-popup-mask li, .BNJS-popup-mask ol, .BNJS-popup-mask p, .BNJS-popup-mask pre, .BNJS-popup-mask q, .BNJS-popup-mask samp, .BNJS-popup-mask small, .BNJS-popup-mask strong, .BNJS-popup-mask sub, .BNJS-popup-mask sup, .BNJS-popup-mask ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-popup-mask article, .BNJS-popup-mask aside, .BNJS-popup-mask audio, .BNJS-popup-mask canvas, .BNJS-popup-mask figcaption, .BNJS-popup-mask figure, .BNJS-popup-mask figure img, .BNJS-popup-mask footer, .BNJS-popup-mask header, .BNJS-popup-mask hgroup, .BNJS-popup-mask nav, .BNJS-popup-mask section, .BNJS-popup-mask video {
        display: block
    }

    .BNJS-popup-mask table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-popup-mask table caption, .BNJS-popup-mask table td, .BNJS-popup-mask table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-popup-mask a img {
        border: 0
    }

    .BNJS-popup-mask :focus {
        outline: 0
    }</style>
    <style type="text/css">
        .BNJS-call-popup {
        position: relative;
        border: 1px solid #ccc;
        border-radius: 4px 4px 4px 4px;
        position: fixed;
        width: 120px;
        z-index: 99999;
        color: #333;
        background-color: #fff;
        border-radius: 4px
    }

    .BNJS-call-popup article, .BNJS-call-popup aside, .BNJS-call-popup audio, .BNJS-call-popup canvas, .BNJS-call-popup caption, .BNJS-call-popup details, .BNJS-call-popup div, .BNJS-call-popup figure, .BNJS-call-popup footer, .BNJS-call-popup header, .BNJS-call-popup hgroup, .BNJS-call-popup iframe, .BNJS-call-popup img, .BNJS-call-popup mark, .BNJS-call-popup menu, .BNJS-call-popup nav, .BNJS-call-popup object, .BNJS-call-popup section, .BNJS-call-popup span, .BNJS-call-popup summary, .BNJS-call-popup table, .BNJS-call-popup tbody, .BNJS-call-popup td, .BNJS-call-popup tfoot, .BNJS-call-popup thead, .BNJS-call-popup tr, .BNJS-call-popup video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-call-popup a, .BNJS-call-popup abbr, .BNJS-call-popup address, .BNJS-call-popup b, .BNJS-call-popup blockquote, .BNJS-call-popup cit, .BNJS-call-popup code, .BNJS-call-popup dd, .BNJS-call-popup del, .BNJS-call-popup dfn, .BNJS-call-popup dl, .BNJS-call-popup dt, .BNJS-call-popup em, .BNJS-call-popup fieldset, .BNJS-call-popup h1, .BNJS-call-popup h2, .BNJS-call-popup h3, .BNJS-call-popup h4, .BNJS-call-popup h5, .BNJS-call-popup h6, .BNJS-call-popup hr, .BNJS-call-popup i, .BNJS-call-popup ins, .BNJS-call-popup label, .BNJS-call-popup legend, .BNJS-call-popup li, .BNJS-call-popup ol, .BNJS-call-popup p, .BNJS-call-popup pre, .BNJS-call-popup q, .BNJS-call-popup samp, .BNJS-call-popup small, .BNJS-call-popup strong, .BNJS-call-popup sub, .BNJS-call-popup sup, .BNJS-call-popup ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-call-popup article, .BNJS-call-popup aside, .BNJS-call-popup audio, .BNJS-call-popup canvas, .BNJS-call-popup figcaption, .BNJS-call-popup figure, .BNJS-call-popup figure img, .BNJS-call-popup footer, .BNJS-call-popup header, .BNJS-call-popup hgroup, .BNJS-call-popup nav, .BNJS-call-popup section, .BNJS-call-popup video {
        display: block
    }

    .BNJS-call-popup table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-call-popup table caption, .BNJS-call-popup table td, .BNJS-call-popup table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-call-popup a img {
        border: 0
    }

    .BNJS-call-popup :focus {
        outline: 0
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-call-popup {
            border: none
        }

        .BNJS-call-popup:after {
            content: " ";
            display: block;
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            border: 1px solid #ccc;
            pointer-events: none;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: 200%;
            border-radius: 8px 8px 8px 8px
        }
    }

    .BNJS-call-popup .call-foot, .BNJS-call-popup .call-head, .BNJS-call-popup .call-link {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center
    }

    .BNJS-call-popup .call-foot:not(:first-child), .BNJS-call-popup .call-head:not(:first-child), .BNJS-call-popup .call-link:not(:first-child) {
        position: relative;
        border-top: 1px solid #ccc;
        border-right: 0 solid #ccc;
        border-bottom: 0 solid #ccc;
        border-left: 0 solid #ccc;
        border-radius: 0 0 0 0
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-call-popup .call-foot:not(:first-child), .BNJS-call-popup .call-head:not(:first-child), .BNJS-call-popup .call-link:not(:first-child) {
            border: none
        }

        .BNJS-call-popup .call-foot:not(:first-child):after, .BNJS-call-popup .call-head:not(:first-child):after, .BNJS-call-popup .call-link:not(:first-child):after {
            content: " ";
            display: block;
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            border-top: 1px solid #ccc;
            border-right: 0 solid #ccc;
            border-bottom: 0 solid #ccc;
            border-left: 0 solid #ccc;
            pointer-events: none;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: 200%;
            border-radius: 0 0 0 0
        }
    }

    .BNJS-call-popup .call-link {
        color: #ff4978;
        text-decoration: none
    }

    .BNJS-call-popup .call-link:active {
        color: #ff4978
    }</style>
    <style type="text/css">
        .BNJS-weixin-notice {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        z-index: 100000;
        background-color: rgba(0, 0, 0, .75);
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACDCAYAAACp87Q2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhCOEJFNDdCRjQ4MTFFNTkxNDA4QkE0NjQ3QTkxMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhCOEJFNDhCRjQ4MTFFNTkxNDA4QkE0NjQ3QTkxMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEI4QkU0NUJGNDgxMUU1OTE0MDhCQTQ2NDdBOTExMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEI4QkU0NkJGNDgxMUU1OTE0MDhCQTQ2NDdBOTExMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pje1kvsAAA4dSURBVHja7F0LuBVV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);
        background-position: 95% top;
        background-repeat: no-repeat;
        background-size: 40.33333333px 43.66666667px
    }

    .BNJS-weixin-notice article, .BNJS-weixin-notice aside, .BNJS-weixin-notice audio, .BNJS-weixin-notice canvas, .BNJS-weixin-notice caption, .BNJS-weixin-notice details, .BNJS-weixin-notice div, .BNJS-weixin-notice figure, .BNJS-weixin-notice footer, .BNJS-weixin-notice header, .BNJS-weixin-notice hgroup, .BNJS-weixin-notice iframe, .BNJS-weixin-notice img, .BNJS-weixin-notice mark, .BNJS-weixin-notice menu, .BNJS-weixin-notice nav, .BNJS-weixin-notice object, .BNJS-weixin-notice section, .BNJS-weixin-notice span, .BNJS-weixin-notice summary, .BNJS-weixin-notice table, .BNJS-weixin-notice tbody, .BNJS-weixin-notice td, .BNJS-weixin-notice tfoot, .BNJS-weixin-notice thead, .BNJS-weixin-notice tr, .BNJS-weixin-notice video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-weixin-notice a, .BNJS-weixin-notice abbr, .BNJS-weixin-notice address, .BNJS-weixin-notice b, .BNJS-weixin-notice blockquote, .BNJS-weixin-notice cit, .BNJS-weixin-notice code, .BNJS-weixin-notice dd, .BNJS-weixin-notice del, .BNJS-weixin-notice dfn, .BNJS-weixin-notice dl, .BNJS-weixin-notice dt, .BNJS-weixin-notice em, .BNJS-weixin-notice fieldset, .BNJS-weixin-notice h1, .BNJS-weixin-notice h2, .BNJS-weixin-notice h3, .BNJS-weixin-notice h4, .BNJS-weixin-notice h5, .BNJS-weixin-notice h6, .BNJS-weixin-notice hr, .BNJS-weixin-notice i, .BNJS-weixin-notice ins, .BNJS-weixin-notice label, .BNJS-weixin-notice legend, .BNJS-weixin-notice li, .BNJS-weixin-notice ol, .BNJS-weixin-notice p, .BNJS-weixin-notice pre, .BNJS-weixin-notice q, .BNJS-weixin-notice samp, .BNJS-weixin-notice small, .BNJS-weixin-notice strong, .BNJS-weixin-notice sub, .BNJS-weixin-notice sup, .BNJS-weixin-notice ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-weixin-notice article, .BNJS-weixin-notice aside, .BNJS-weixin-notice audio, .BNJS-weixin-notice canvas, .BNJS-weixin-notice figcaption, .BNJS-weixin-notice figure, .BNJS-weixin-notice figure img, .BNJS-weixin-notice footer, .BNJS-weixin-notice header, .BNJS-weixin-notice hgroup, .BNJS-weixin-notice nav, .BNJS-weixin-notice section, .BNJS-weixin-notice video {
        display: block
    }

    .BNJS-weixin-notice table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-weixin-notice table caption, .BNJS-weixin-notice table td, .BNJS-weixin-notice table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-weixin-notice a img {
        border: 0
    }

    .BNJS-weixin-notice :focus {
        outline: 0
    }

    .BNJS-weixin-notice .notice-confirm-line, .BNJS-weixin-notice .notice-content {
        position: absolute;
        width: 60%;
        left: 20%
    }

    .BNJS-weixin-notice .notice-content {
        bottom: 100px;
        line-height: 1.6em
    }

    .BNJS-weixin-notice .notice-confirm-line {
        bottom: 50px
    }

    .BNJS-weixin-notice .notice-confirm-line .notice-confirm-button {
        padding: 0 28px;
        height: 30px;
        line-height: 28px;
        border: 1px solid #fff;
        border-radius: 3px;
        background-color: transparent
    }</style>
    <style type="text/css">
        .BNJS-body-with-title-bar {
        box-sizing: border-box;
        padding-top: 41px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 41px;
        box-sizing: border-box;
        line-height: 40px;
        overflow: hidden;
        z-index: 99999;
        font-size: 14px;
        background-color: #fff;
        -webkit-tap-highlight-color: transparent;
        border-bottom: 1px solid #d5d5d5
    }

    .BNJS-body-with-title-bar .BNJS-title-bar article, .BNJS-body-with-title-bar .BNJS-title-bar aside, .BNJS-body-with-title-bar .BNJS-title-bar audio, .BNJS-body-with-title-bar .BNJS-title-bar canvas, .BNJS-body-with-title-bar .BNJS-title-bar caption, .BNJS-body-with-title-bar .BNJS-title-bar details, .BNJS-body-with-title-bar .BNJS-title-bar div, .BNJS-body-with-title-bar .BNJS-title-bar figure, .BNJS-body-with-title-bar .BNJS-title-bar footer, .BNJS-body-with-title-bar .BNJS-title-bar header, .BNJS-body-with-title-bar .BNJS-title-bar hgroup, .BNJS-body-with-title-bar .BNJS-title-bar iframe, .BNJS-body-with-title-bar .BNJS-title-bar img, .BNJS-body-with-title-bar .BNJS-title-bar mark, .BNJS-body-with-title-bar .BNJS-title-bar menu, .BNJS-body-with-title-bar .BNJS-title-bar nav, .BNJS-body-with-title-bar .BNJS-title-bar object, .BNJS-body-with-title-bar .BNJS-title-bar section, .BNJS-body-with-title-bar .BNJS-title-bar span, .BNJS-body-with-title-bar .BNJS-title-bar summary, .BNJS-body-with-title-bar .BNJS-title-bar table, .BNJS-body-with-title-bar .BNJS-title-bar tbody, .BNJS-body-with-title-bar .BNJS-title-bar td, .BNJS-body-with-title-bar .BNJS-title-bar tfoot, .BNJS-body-with-title-bar .BNJS-title-bar thead, .BNJS-body-with-title-bar .BNJS-title-bar tr, .BNJS-body-with-title-bar .BNJS-title-bar video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-body-with-title-bar .BNJS-title-bar a, .BNJS-body-with-title-bar .BNJS-title-bar abbr, .BNJS-body-with-title-bar .BNJS-title-bar address, .BNJS-body-with-title-bar .BNJS-title-bar b, .BNJS-body-with-title-bar .BNJS-title-bar blockquote, .BNJS-body-with-title-bar .BNJS-title-bar cit, .BNJS-body-with-title-bar .BNJS-title-bar code, .BNJS-body-with-title-bar .BNJS-title-bar dd, .BNJS-body-with-title-bar .BNJS-title-bar del, .BNJS-body-with-title-bar .BNJS-title-bar dfn, .BNJS-body-with-title-bar .BNJS-title-bar dl, .BNJS-body-with-title-bar .BNJS-title-bar dt, .BNJS-body-with-title-bar .BNJS-title-bar em, .BNJS-body-with-title-bar .BNJS-title-bar fieldset, .BNJS-body-with-title-bar .BNJS-title-bar h1, .BNJS-body-with-title-bar .BNJS-title-bar h2, .BNJS-body-with-title-bar .BNJS-title-bar h3, .BNJS-body-with-title-bar .BNJS-title-bar h4, .BNJS-body-with-title-bar .BNJS-title-bar h5, .BNJS-body-with-title-bar .BNJS-title-bar h6, .BNJS-body-with-title-bar .BNJS-title-bar hr, .BNJS-body-with-title-bar .BNJS-title-bar i, .BNJS-body-with-title-bar .BNJS-title-bar ins, .BNJS-body-with-title-bar .BNJS-title-bar label, .BNJS-body-with-title-bar .BNJS-title-bar legend, .BNJS-body-with-title-bar .BNJS-title-bar li, .BNJS-body-with-title-bar .BNJS-title-bar ol, .BNJS-body-with-title-bar .BNJS-title-bar p, .BNJS-body-with-title-bar .BNJS-title-bar pre, .BNJS-body-with-title-bar .BNJS-title-bar q, .BNJS-body-with-title-bar .BNJS-title-bar samp, .BNJS-body-with-title-bar .BNJS-title-bar small, .BNJS-body-with-title-bar .BNJS-title-bar strong, .BNJS-body-with-title-bar .BNJS-title-bar sub, .BNJS-body-with-title-bar .BNJS-title-bar sup, .BNJS-body-with-title-bar .BNJS-title-bar ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-body-with-title-bar .BNJS-title-bar article, .BNJS-body-with-title-bar .BNJS-title-bar aside, .BNJS-body-with-title-bar .BNJS-title-bar audio, .BNJS-body-with-title-bar .BNJS-title-bar canvas, .BNJS-body-with-title-bar .BNJS-title-bar figcaption, .BNJS-body-with-title-bar .BNJS-title-bar figure, .BNJS-body-with-title-bar .BNJS-title-bar figure img, .BNJS-body-with-title-bar .BNJS-title-bar footer, .BNJS-body-with-title-bar .BNJS-title-bar header, .BNJS-body-with-title-bar .BNJS-title-bar hgroup, .BNJS-body-with-title-bar .BNJS-title-bar nav, .BNJS-body-with-title-bar .BNJS-title-bar section, .BNJS-body-with-title-bar .BNJS-title-bar video {
        display: block
    }

    .BNJS-body-with-title-bar .BNJS-title-bar table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-body-with-title-bar .BNJS-title-bar table caption, .BNJS-body-with-title-bar .BNJS-title-bar table td, .BNJS-body-with-title-bar .BNJS-title-bar table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-body-with-title-bar .BNJS-title-bar a img {
        border: 0
    }

    .BNJS-body-with-title-bar .BNJS-title-bar :focus {
        outline: 0
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-body-with-title-bar .BNJS-title-bar {
            border-bottom: none;
            background-image: linear-gradient(0, #d5d5d5, #d5d5d5 50%, transparent 0);
            background-image: -webkit-linear-gradient(90deg, #d5d5d5, #d5d5d5 50%, transparent 0);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: bottom
        }
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-tags {
        position: absolute;
        box-sizing: border-box;
        height: 100%;
        left: 60px;
        right: 60px;
        padding: 8px 0;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        z-index: 10000;
        font-size: 0;
        line-height: 22px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-tags .title-tag {
        display: inline-block;
        box-sizing: border-box;
        width: 60px;
        line-height: 22px;
        overflow: hidden;
        font-size: 12px;
        color: #f64a6f;
        background-color: #fff;
        border: 1px solid #f64a6f;
        border-left-width: 0
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-tags .title-tag:first-child {
        border-left-width: 1px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-tags .title-tag:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-tags .title-tag.active, .BNJS-body-with-title-bar .BNJS-title-bar .title-tags .title-tag:active {
        color: #fff;
        background-color: #f64a6f
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar, .BNJS-body-with-title-bar .BNJS-title-bar .title-btns, .BNJS-body-with-title-bar .BNJS-title-bar .title-text {
        position: absolute;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .title-text {
        padding: 0 80px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn, .BNJS-body-with-title-bar .BNJS-title-bar .right-btn {
        position: relative;
        box-sizing: border-box;
        width: 40px;
        color: #ff4978;
        text-align: center;
        background-color: #fff
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn:active, .BNJS-body-with-title-bar .BNJS-title-bar .right-btn:active {
        background-color: #f2f2f2
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn.text-btn, .BNJS-body-with-title-bar .BNJS-title-bar .right-btn.text-btn {
        padding: 0 8px;
        width: auto;
        min-width: 40px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn .btn-icon, .BNJS-body-with-title-bar .BNJS-title-bar .right-btn .btn-icon {
        display: block;
        width: 100%;
        height: 40px;
        background-size: 16px;
        background-repeat: no-repeat;
        background-position: 50%
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn .btn-badge, .BNJS-body-with-title-bar .BNJS-title-bar .right-btn .btn-badge {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        top: 0;
        right: 0;
        font-size: 12px;
        text-align: center;
        font-style: normal;
        color: #fff;
        background-color: #ff4978;
        border-radius: 10px;
        -webkit-transform: scale(.7);
        transform: scale(.7)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .back-btn {
        float: left
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .right-btn {
        float: right
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-back {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjA5RDAzQzM1ODgxMUU0OEVDREU2N0EyMkU4MTkzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjA5RDAzQjM1ODgxMUU0OEVDREU2N0EyMkU4MTkzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkyQ0E4OTUzQjIwNjgxMTgyMkE5NkFDNzkwQkM1RkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/tEMrAAABpklEQVR42rSW20oCYRSFx1HnobzoAYoQURHpDCGdiCQroq5NokRErCyyiCgiuuwJei37W1vWwG4YdQ664XPmX/8+rJlRmYQxxhrG/Kl8roE5UAEDa7aRBD3wA/rW98VQTKmEDXDPxDTXgxmaeQSrYJ1aXz5slZRhosQKeFLraZvp04zrIeNu6jtU4XGTx2WQ4GMcTNHMM1hS2oOa/e8OGW70lCaFL1O6U0n20mZ6nGn8DLmmtsCt0srgNaapJHuUlXbHWUYn2j7FkrADbpRWAm+eRxw0UqwtKU0ueNtrZpQh19Qu6CqtyMbpCGaKSuvygo1fgT2mmRTsgY7SCiFMpZlbUFqHPc2oIntCUyncB22l5TnIGVPn+Jhps5cZN9AOcKXS4AC0PKbeR5hyuJdXWos9zKRhdsDvgjSqgqbScuDDY8qhlvOYqQYxE8aQG4fgWq2z4JNGHJ5n1X6TZkL9CsJGjVdb43oRfPF8QeVdgaMo/xFRQgb9gmMfIxKX4CRKY9uKHjKw4aM3opqJa0hCXqLqal2nFjlSVvw44+OTN4PzuM3+BBgApEpV4D6RHN0AAAAASUVORK5CYII=);
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-search {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEU5QkExOUVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEU5QkExOEVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FGOTAzMDY0RjIwNjgxMTgyMkE5MENGOTI0RDhDNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4/s/91AAACV0lEQVR42sSXS0tbQRiGk1RULO60aIoNwQhautQfEAURFVov8daNUBqlaBdSFFe68YIWTYvipRs3kqAicSNuvNB9N5boykutbandegGrpu/Im3oInsmoEzzw8CU5h3lm5nwz38QaDoct93FZL8WlnbJnnoAG4AZPQTr4C/bBHlgFM2Bb2brYZ0mIIewHNeBB1L0kkEuKQQ/lHexMzMtm8ns5+ArqwTmYApUgB6SwIw7eD4AzUAdCnJ2Y13UjfguG2anIKHaveW6PCHE26AMeMA3s4P1NRlwLfEBkXBO/7yoMYIuvpIUzNABeqorFO/0kEg60gslbJOso6GQbE8CpIhZTlQr8YOwOK2UQzIKHTE6p2MHkOAHvNCzTNnAKqs1GHRHXGZLppwbxPkdtY+abit2MQY2b0wJjkUz8jPGLRvE6Y55MnMb4Q6P4F+MjmdgahzpwqrKO/zA+1ijOZDyQiTcY8zWKCxg3ZeJlxgqN4heMKzKxWL8X3OTtGqRZoIptBmTiHS74ZDCkQSzaSATzLCDSvVqUvyNWpDd3kLZwqzwG7SpF4ht4zZL48ZZ7tuj8B37+LCup0fXYzw3exiozB1wKQhe3235DmyWsclbVo4+Px5xDJkiIyVfPM1Yqc8HJYj/LZ55zepcMbTWZyc0Oe0GeKLtBI7PdIxnxBc9lXeA7GAdeg1yIm/kapWILG3jFE6Qom4XsTAbv/+ZI1/iKjNnbzOiNiv/lCQrvT5yXe4nqFY4lt8Xxz0JEbjy7CfmI7FwdT3mh6lTrkp9xiZVd/Xe6h+ufAAMAp3WG6vLxQB4AAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-close {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEZBNzVGNEVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEU5QkEyMEVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FGOTAzMDY0RjIwNjgxMTgyMkE5MENGOTI0RDhDNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pfEzZAAABhUlEQVR42uzXy07CQBQG4HYiTyAovoH320a3IJioT+QT+EQakmrduXHjBUWfQCmaGDcuXNR/kjNmPOkwF4vdOMlP2hT40jmnwxDneR5VMURU0agMnvo+2j+M8XqFfCAHyGtJRgPpIZ/RydG26Y7l+RaSINMloefIJlIzTbXssl3kEdkoAVfoEnKH7I2r8RPS0vDTQHyGofI7M1tzKfwBWQ/AJZoydOTa1RJvM7zuifZNqO1x4nhiwfXp7dNnR6HPsSuu0EXk1oa6LiC85hyfZeiODfVZuZ4LGq5OaOqL/ly53HEJrRFeI/QG6biivrDC2xoehaChPxK55XwisGqkBeQaGdCdJ7RETgRuMrRLNR9oNW+UDTeprjoqazok/B5Z9cFFAMobaUgNp/AzF1x4Tq9EXwrep+MrLrhwQOdpZ2JCg3ATPMfQrgXV8ZYLLgxoGoCqkTE8LcKFBe14ohyXG4HlIpzDPYb+ZqeZUc0VfjwOfkcuSkA5fom86Rfi/78wfzW+BBgAnS6HBTghQoAAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-collection {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEQxNDkzOEVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEQxNDkzN0VBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FGOTAzMDY0RjIwNjgxMTgyMkE5MENGOTI0RDhDNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5I3qiZAAACIUlEQVR42sSXuy8EQRzHdy9C5ShER6IRf4JXPCsXl7h41agUHCpXK3QEhQoVCeIRhCgIBcE/4FGKaCicq2jW97f33Vj3cDPnbk3ymZ3Z++18du72N7NnWpZl/EcxU4oDkTbU/UCOlTz7CE7BBjhJuEI3PkEciNSgXgQtGW74DAyzrRN/lywORJpR74Ni8Arm2HeCq0EnmABlIMbzTvwMOAAPPC+TCIKwK17659/i+EyvQAnYAkPG4XQ04et3WqVgBXSxvwsGwFua2frBMugGMmatTMa0OiZNNC5AHdgGPZBaKX73Hz8Rr5HSADI9oRK/SfklaCxA1U7pi33nqaTJRWI6XG2V+EHQBOrF6UPVxw8XIH3XyIgoUS0y9izbfSJuZWfPg/Q9cNLP58q7Ow/E9zxWiPjDwwWr0GmI+NmVd/kuVTw+ifiGnaAH4k4eL0W8xs4IctWfR6mMPcb2qoiPwTUoB0uQm/nYjOyx4w5xHfu4YAwwz3rs3SQQKc6hVMZa59gxuiyf/dHh9C3qEJ9wCZjK0cxNeyzD6OXYsr7fOk+1QfmpSx62V5m/yU2uVGGOGeL+bPwUx+VHOZKnkh6pvIHIBrADirgvjytuBkrS9OLs5UrS38X6cmVpZrG6XEuqJk6Wz3MFsrKVqovTy41spFIKNFLESTWRj7peabSlujN2Wu6ZG9lIkxcQvZl/Em2p7ledKG/gjd/k7r+TB+VLgAEA1PbQvmVBsPAAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-location {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEU5QkExREVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEU5QkExQ0VBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FGOTAzMDY0RjIwNjgxMTgyMkE5MENGOTI0RDhDNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6iJ9cbAAADCElEQVR42sSX/WuOURjH74eNuQubn2bmbYUpZe1ZWhM9m5d5Z5vxB3hY3pZok/ArUmKMZljELzRvyWLEXookSYk8Xtts8oOEWg2P2/fS967T6Xm5z/384NSn63Tu6z7f+5znOtd1noDjOJa1ZJdl0IaDalABisA48BP0gOfgKmgFg3FnaNtvDbHM2hrwFpwHlWACGApGgGmgClygT3WiibwKy+THwUWu8CnYCKaCNJBO4VrwjD6XwFG+61tYJtjE7RPBIGgCr0EU/AYRcAwUgs303Qoa/ApXUXQALKCgk8D/DzgBFvId+YjVpsISSAfZ3w66DeKhC+xg/zAYZiK8AuTxd2vWnuWDG+A7kUieovmcYqTncuc8C1fSNmvbOx08BMvASCITP9LE5fc/zf4qE+FC2g5t/ADIlBMJssF49rPAPs33Nu0sdTAtiXAubY82Po9WIvwz+2HQzwBU2zvabJMVp9P+8hBMrq8TZzxgItxPm6eN36NtYrLIAY0cu6v5TqT9ZCL8hLZcG98JvoLF4CPoA8s5tlvznUv72ET4Gu06LfW9BDPBFfADfKNvMTOYpWxvjTaXJ2HJze/BDLBee9bLIzSKEV6hiboBV8AduWwiLOWunv1DyrZ5aXPAESXrDZrm6lamPBu0g7Ue3pHcfIfvNLBS+apOdeAsc3cLCCXwlWfn6HsGbEulLEYZYC1cxU1QFsOvjM9s+m5I9SLglrswc6/NAqFmqfkcs1kcwnzHWFiitRO8AZOVrCSrOEmB6zzj5ezbTCo1SWp23Fw9mkm/RCkSpcy7DnN0lBcE93xm8AKwJZlovBWL6C2KfgAPeKnrUEqeQ4FGCmaw70k01oozeQyKmDhklV+4ejmX9xlAEQrUMmtJ2+tVVBfOomiQW1qqlMNFjNaQIv6KQnssH83d6jGsKkEGU0irwXJpW8qqlEPxfCuF5gq38bYRoWhvDN8BViD5wLEsFI4PulVhOQYvuL19CT5UxFcy4Py2SepvXKB8UbIm4rNZJqN+1QP//rT9h/ZXgAEAo3DEaX7uU78AAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-scan {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjFDNEMyRkY4NTgxMUUzQUEyNThBN0Y2QUZGNjU2RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjFDNEMyRUY4NTgxMUUzQUEyNThBN0Y2QUZGNjU2RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODdDRTJGQzgyMDIwNjgxMTgyMkE4MTMzQjAwQTI0NzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7wflY/AAAAvUlEQVR42uxXgQ2AIAwDs7PgAT/yAj/ygeFdaAwxStBtKhINS8BQcVUss2rvvSoRsPRth3NviLlubnYzxnCMMTrP0FsIA8O4SUOMRXkgAvXBZOn7IPM0qlBU4v8Tw031qqu7oNkUByrGREFJYaw8kKg+3LBMrIprR4xBEG80LPXE+q64auXKJi6MrsUERp1fsacdCNuh5HIg3/k6ScKdrFBWYsrqZiOW2tp/OxA2sWMs1ygU2immS/20TQIMAA2hSwKNI9MjAAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-share {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMEQxNDk0MEVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMEQxNDkzRkVBNDkxMUUzODg5NEFDQTQ3QUY3NzQzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FGOTAzMDY0RjIwNjgxMTgyMkE5MENGOTI0RDhDNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ROmspAAABkklEQVR42mL8//8/Axh4VTJQCTAB8T+cstva4YqoCUDmXQXic0AsSkghNQEo+H4CsSEQ78NnObLFh6EaScGHsVjsCvW1Dj7LkS22IcOHjFjEXgOxIyHLmXAYRizG5ViCllM7jom2nIUCg2E+9gJiCyDWAmIxPOpBlu8BYn1yLQaFUhwQgzK+GiX5jhQAsugEEM+Hsu8CcTs0JUsBMTNaGhCDBjUDlHYlJ6g9gHg1EPMA8QMgLgfiNXhKKVB87gdibailTkD8ilSLQZZuBGI2IF4MxFlA/AWPenRLHaGJjaSg1oD6FGRpLxDHU2opMRaD4mwpNHiXA3EptHTCl9J3E7KUGIsTgdgIiB8CcSoBS2EWcwDxRXyWEopjkKMqoGxQQvpKRLT8g+bn/4Qcic9ieyBWhqbg1SSkflypHFah2BKy2BtKr8BbsRMPbIiNY0sovZcWBTk+i1Wh9HV6WywEpV/RwmJ8cQxqN/0B4t/0ttiMhnU1TRsCoxYTjOP/9PbxETrYdxRem8D7TnQGA2YxQIABANrCZIoP1YD2AAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-collected {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAADtUlEQVRYCb2Y7U9TSRSHn9Pb8lJYNBB8QVq0oKggZP1kDK4x+3E/7CZLsn/jJuwH/wKjEr8pmoC6ur4AZkVICMoiUKSzOTO9tNuda+8tF0/Sdu505neeOefcmduKMcYQx3TYfgUqFQhnCJDJQJAB0Ys6Szq+bmp9M1t/Edne3cO8W4Pny5jFFdjYwlJ2d0LxBHKhgJw9CZ0dTmJ7B7P4AfPnMiytwj/bgMDxLmToFIwWkEI/tOciXYZffB2wUsG8X8fMzsPcS8zKOnz6DLt7oBFqy0FPHtN/DBkvIVNjVtfMLmDmX8PaRze+vOci3J7D9OSRk72Yq+eRqXHkdK/LQkjU8CmRKVa41+8xtx9gHr2Aj1sOSlMZplNTHVbId3ko9jv5pTXY/OzadnzVq47Vl/Yd60KuXkB+vo6UTkdCRgJqSs3vdzAPFmCnHClQW7A6r17ZcmyoydpA19Ja7mhDro8hv91CBquLaxiXabi2l2Z7F3P3MebhC9jZiwGn06qRtdFtAqfD9ebaKVsf5u4T1KfPvIC8XcHM/eXqJxPDmU85Tp9Cak3PvUR9+swLaObfwupGLWW+mWn1aWWsbmB9ejS9gLz6Gza3bdY8c9Lt0gSpL/XpMT/g+iaUv9TuVs/E1Lq0ZnUbUp8e8wPa3vCW9MxKu8tuVxWvqh9Q97Rc9tvUoGLlAujOJwA80w/5jtom7J2aUmfFQFcnDJ3wCnojKOPnoK/HO+FIOvt67FHp0/YCMjqIXB6CfDvoCo/KVDvf7nyNDnq9eAGluxP58XvkUhGywdHUoq47G1gf1pc+GXnMC6iHuZQGkF+mHKQ+76UZSNUKMg5OfZQGIrc0P6CuRFc3fg759QZysegeSsMnF89KY3ephsJdLDptrXfNUoRFA+qEtiwyOYJMK2QBAk33IUJp4QKrZTUnR6yPCDbb/XXA/0DerEJquluAPIhcAZm+aReuAWhmzUccQA67s3nmHubZEuzvR9bN/5yGkbtURKZ/QCaGm0Yu1IgHWA+p7SSQjXCTw+6UCgmafMYHVKFc1q0+LmQjnEZOj9AElmy0CuuNo47UZu5jni36030AN+RusgRpdeLuPTmgzgsh9VluBszTBsgQ7nIV7kr8mquH03ZrgPWQ+ltEazKE1O+CwB5f7oYoJU5rPWTrgKpia7Lk9P64j5l/Y9sydtZtwhOHg1OxwwE2Qna4fwrkp2tICnAqH/m72IYiyVv5i/vnAYOc6ou9zzVzkR5gM08tft/8qGtROK1p/wKusjDv6kB0YgAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-home {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjlCRkM5MEZBQTRFMzExQTkzRUI5NUY0NEE2NjlGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMEUzRjVGRUJCNzAxMUU1QjMzQUVDREIzQkI2NUU3RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMEUzRjVGREJCNzAxMUU1QjMzQUVDREIzQkI2NUU3RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgzMjFDNzJCODBGMTFFM0JBMUY5RjVCRUJFQTFFNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgzMjFDNzNCODBGMTFFM0JBMUY5RjVCRUJFQTFFNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6v0lgKAAACjklEQVR42tSXTUhUURTH5zmGuulDHSIiIiKMNkLZKktrE5WTRV8MqZELMQlBoyxdVAvBWpTQB7XpG7JvaSCIdFsSBEW1KAkKokURItGHpE6/Q2fidnm9ns+ZJg/88HLuffc/57xzz7s6iUQilAnLCmXInOGK1iDPFcI1HW8Mx9s//ouIZ8JNKFe6R6Jts9ItPFeEYKnhK1XxeekSLobbUOIytxDiiC9KtfAS2RgWeKwpUvGyVAmvgRtgvsfv0ALVMGD4Z0jRIb5uvMKb4QJMN3zD0AyH4RLEwKzqCJxDvDqocL1unG/4hqAOjsMyWM5RusvfLZb4FDiLeONYhSWNx2CS4RuEGtlQK1mO1C02r0C8l3EU3hrrw9DJ/H6/wgehA7IN3yfYBleTZxcKNLLLbB5D/AHj9Za4AweYP+TVuXLgCDRYa97DVuiBMu1YEWuNFFsT4if0SMmaOdYaydRO1nwxI86D0y6i72CDIXrFRTSkr+Qooi1s/IjxKnhhrdmu731yMmIZnFEB0yRlm6BP03td0/s360B8HwJF+krmW/N3oFYiPuUi+kqLpU8j7fIpKrYX0ZOIS8Rr4bk1v1rqIsvqu2IvQRrAY1ghlWudYz+2A/HziPczXglPrPkCEe40HE+1Mp/JGdVIpwX85NYg3q3HsBLuq1+Ka1e2pnqxFtpueGOIRsb5va/UjMU0oD3QTyZ6ksdJRBNKLrwOkF4v60IsZjqSTWLUaipTPTaRlN3T5uDos3naNmd73FhCbsK2jXgIN8HDX30x3v7zgWjbZ+16vvYLcvX5MEZ/yu5cf8pSeEJcb/87YSfV9/d0Ruz1Y0f9FMo3uAhVfjdR+6rt0LYh/bL9/isz9U/bDwEGAJ08tlMkDadUAAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-arrowdown_red {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMzUyM0IyQzEwMjA2ODExODA4MzlEQkM5Qzc5RDU2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjA5RDAzQzM1ODgxMUU0OEVDREU2N0EyMkU4MTkzQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjA5RDAzQjM1ODgxMUU0OEVDREU2N0EyMkU4MTkzQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkyQ0E4OTUzQjIwNjgxMTgyMkE5NkFDNzkwQkM1RkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzM1MjNCMkMxMDIwNjgxMTgwODM5REJDOUM3OUQ1NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/tEMrAAABpklEQVR42rSW20oCYRSFx1HnobzoAYoQURHpDCGdiCQroq5NokRErCyyiCgiuuwJei37W1vWwG4YdQ664XPmX/8+rJlRmYQxxhrG/Kl8roE5UAEDa7aRBD3wA/rW98VQTKmEDXDPxDTXgxmaeQSrYJ1aXz5slZRhosQKeFLraZvp04zrIeNu6jtU4XGTx2WQ4GMcTNHMM1hS2oOa/e8OGW70lCaFL1O6U0n20mZ6nGn8DLmmtsCt0srgNaapJHuUlXbHWUYn2j7FkrADbpRWAm+eRxw0UqwtKU0ueNtrZpQh19Qu6CqtyMbpCGaKSuvygo1fgT2mmRTsgY7SCiFMpZlbUFqHPc2oIntCUyncB22l5TnIGVPn+Jhps5cZN9AOcKXS4AC0PKbeR5hyuJdXWos9zKRhdsDvgjSqgqbScuDDY8qhlvOYqQYxE8aQG4fgWq2z4JNGHJ5n1X6TZkL9CsJGjVdb43oRfPF8QeVdgaMo/xFRQgb9gmMfIxKX4CRKY9uKHjKw4aM3opqJa0hCXqLqal2nFjlSVvw44+OTN4PzuM3+BBgApEpV4D6RHN0AAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-more {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAD8UlEQVR42u2Yz29MURTHBwkLW4k0RFDUbwmLpvPmTUcVpYiI/hXmvTcNGxbShbAgkUjQklaifjRYsPYraetHbCyIimoqsbCgHUV/0fY69703b86dX+/caZfnk9x0cnvv/Z5zf5x7z4tEGIZhGIZhGIZhGIZhGIZhGIZhGIZhGGZuEZHIPGHY+4Vp34K/gyJmz0AZg/IZyl1hWo2yzZzpmc5eGLc9T8twbsDfhjn1DcaD0uH7MubrfXH1KVoibq+Fhq+giJLFtN+AA1WzM/bYOhirO1zLeiniqQ2z0oL+MNaLUK2Y3VPULxF34tBguECncSh/C9Snwfja8naNVVtEawLKZH6981PEk3VlaRn2Trc/WQv8iqUS6iA1yfU5g6Rh4JNg1Krg2JnWRqg/52/NTLtR3dX1V/O3OtHOKRG1KlV77DNqO7APbNDXwn65v1vkSclOoFPl1qk2qX5Bx170z7ciYS0vKhq1N0Obr6j9a2pMcidaOcLWe1HTvKxoe2+iBpTjphH/co7VB7wI+VrNa/zYpPoFM7gbVQ4JM1VBCKxbc45dg0aQzPQZEYnUytA+3oKMo0lqJB7jRqT1h6TlTdKo4pd/W3gVcKzoccS+iga6SYwHncjR0xpx5BLq10WcoC50qZzV8Os8mo/OiLvNA0ebV9PPd7IOTVAfcQd9zIrTb0ERTdUgrQGiFjou1jaNY7lD0UK3yYTeTZSqQAP9IopnAuGUaGpaQNZKHF+Cb1WiVvZY7rMWkbU2tSxEWpPY6H8i0jKfPtPOijKMngj6gCFkrWpnKdKaIWpNB332nFhM1oK2+CkgB+oLKuLJLRoTdAAN9IkYF/rL2vbqcf5CjFuDWb/sKP1kJA0U7/rlBF1GRl/QCJwP0PuilbiqbVlx56JGXLiNJqiD2Kcd+XVNw6/rSKstIl+NyqvZTG0n7p4ZZEA9zWirXn3JOtWEW2WXclwgd9PI8UQQPmBnhNvnzsVUnl85OdG3UlsSbp9DMiij3dOr+XjrQVrfhWGZIe+mEZwraSan3eiq/yHTjpDFGyrol5ekKqnGtPdmkTsFkkr5ojWto1Ae5eVImkmr97TP0Yo5d8DAg4GWYR0B/YfqLpX5WDZFIGl5D780DvBQ7nmLDFrSFjN1GOru52nl+gWVMXdFwzPe7Ksb+pSXyYOWXFG61rBMpsvL5N0kfIis5dpVxC/5UIRGjwkDPSuV19Aef1YljPMkXMt6rrtzCu8kGCdMy3CekvxyP0cY9hXvlS2Pgyzu79a8TwGz/mCW0bLf+Y/WdKBVImbM4tNHq589DHsFfkv9Mj/dMAzDMAzDMAzDMAzDMAzDMAzDMAzDMEwI/wGpoEv5xZWM8gAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-shopcart {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjlFNkQzNTFEQUNFMTFFNTk0NDE5QkYzQ0U1Njg5RDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjlFNkQzNTJEQUNFMTFFNTk0NDE5QkYzQ0U1Njg5RDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUU2RDM0RkRBQ0UxMUU1OTQ0MTlCRjNDRTU2ODlEMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUU2RDM1MERBQ0UxMUU1OTQ0MTlCRjNDRTU2ODlEMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrfqkK8AAATDSURBVHjaxJnbj11jGMbX+mZNZ1RLhTIqVEtTitJqhSkSFxppRNImJE1KuHAlFXHpb3BDJK4IiRtSog164xCHiYxDFFXUIaV16KStqZmp2XvPWqvPG78lny97rb1n7DW+5MmavY7v9x6f9504Hd55TRRFZwsLhFSYEf4SfheOCa3o75VzjEEW9WC5kScrryfC3cKN/J0j5JjwjvCGcBRhYq77guZRjSvb9HBsQjWFW9BgzLVJ4WLhoPCnMFW3MCXazU3A14SzhH6wThgW1gt3CuPCl8GzeZ1aK4QrTPyN8LidQ4vbhRXCUmGz8GEbAWvV2r9+C9P4nAXFb8I+YVToE4aERdH/uJLgtwXIt8IHwl3CgHCOcEFdZpVJw4DLUNq0tDkTCpiRWn7i90LhHvxxvtZx3GpEwo8lbW5osYMIDVoKumEeBbSgvEpYI7zXTsDMU3eLVPMz6agwRdbr2ODYR9FYJay2oE1KHigSckN4X9hNACX4adZDn3SegJZF1goPYLWhMgEzNJajtRPCF22qx38VMkZrxTeLXDzO+cSVaG+aEmfXN5C8c09zeQ81aO/MFLF2PF+4Trjwn/MlAh4RXqTMLRcuqSkgws0uo4qZoCPCu65kR78Krwh/4BcL5imCFwsXkT3M999OSnZldOsXL3LjuthLUdqowX24lfngYcuJVVE84wWJ4+G0RqJQfOcE/OAzU5CbxcNxzeZdTkCaIj6h5GZJBwee8tJNHtVXj23zlws3U16t3E34GTwqKXkHYDp1VI9COJNhEIJ8GQLOFN9zFSY9JewVvieqFnN/3GOT9yPcKsx7HEbflm755m1BVM1prxRuh303emhq2+QSYRtE2fLvcxYgPqOuyvCTCGPs4iHhthoi2Qjx9V4PdIj8G3USMEYYW+dBu9bXlF4GyLuWWo5R9joKGPbCVp+/xoGjHps5goy8DgeIuhEwD8xtwj2CE2c1CGjV6yQ+HnWrwZC3JV6OSucoSB6es4AgF7pw40nFywrCOgr9vlR4lLzYmENeLBVQwuXk3LcgKs1uNdiggbmaSNvSY/P661PM/CZK6JgHYwLiR+FjojjyknXu9RHOGyilIPbGKY2SwPPPNSCqZ84mSBy58GXU72hqnCfEAHAk9wmcfZDpREI/k3mbyNlYhhJSr5s8NZsgybxhkoP63yes5MU2jdgjfEQ/nXkfc16j1WKcsp1mKIetvMQkYzIcecwmimPqpdH+B6kmS/nIOMcfaE39TWWwIQdT2SFsZXM5bWVhfvO/tBgctetHOwk4yIs3Y+L9wueMRW4SNgbjEZ9QnEGQbaHn2I9PG/m4Vbi2Yv4Td6vBJWhwEB/bha+sQZt3MC7ZGzAd87Nz2dwifHMX2n4M3x1ioydDM9vcxnXBovtpZNZ6LlG0BE00tJp7Io87Fv44BSMqWogm5/s4VwxISweYnUpdC4YxyiDJtHkvL19IoDxL/mr3jgnuacBY7idal5HCxtBs5UykaqVEqLWBT8ERLV9dAX97WnjVC5JQwCZVwvrsr4jmdQhtz+2Tpprdzger6P93whOUoo2Mje3Dz3gppmyZBZ5HU5vQvAXZCzD2cj9Lh3fOhX3EQa6MK+Y1ftVxwT15p39DnBZgAFj1le5siwTxAAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .icon-camera {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNDQyODQ4NS0yNWJlLTQ2NDAtYTE2Mi1kZjNjNzdiMDA4YjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDAyQkQyQkJBNzgyMTFFNUFBNjE4OEZCM0JBNjBDRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDAyQkQyQkFBNzgyMTFFNUFBNjE4OEZCM0JBNjBDRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzMyNjFlNDktNmM0YS00MDJhLTkwNjEtNTdjMTM0ZTU1MTliIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI0NDI4NDg1LTI1YmUtNDY0MC1hMTYyLWRmM2M3N2IwMDhiNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvnQQaIAAAK1SURBVHja7Jg/aFNBHMeTGHUxoq2QdKg6GBwUZzehiLSLg0rFoiD+QeqUpy7SoXapuFRxErQiaBQKCjqoiIM6uVehqIMOlqhEbetUIc/vT74Hx/H+3OXlpRnygw/v7t7vl/vm/r67rO/7mU62XKbDrSswqeU9z3ONWQ0ugIugYBnzC0yA68Bp0OebEHcfHHKM2wiugV3glIvIvKO4B+Bggh47wae1yFwCcQ/BGpCNYRW4bYi8xXctERgm7gj4axHfAKebFakEllnpApteZzmBuDiRjYD6FlhHWY3B7eAt2GBRkQSOOIozRepjMcjWgwNgAOyWFpy0FJehuOUEk6TBCWJjomlSBO7VCh+DYsSATyJOmR/x+0VqULYvxyZVJl3w3bHCdUBW+1egTgF15j2+D7IhME+GWCZ1n9V/25zFPxzFSZd/BFNgD+hheQ/zU3w/EhA7DfrItFY+36q9eBxUQSnGr0S/8QifbKs/FqRFLmn5L2AUbAFr+RxluTLxP6rlZbLUwFdwMlR5pVLxbf6JMeY+cUCLPQfDYCnAVz4mZsAg8zI2t4HfFhOp6RY8ron7DA6HiMuwfJh+Yr1GK6byPbhfS18GizH+IvJKSHwqAndo6WeWMU+19M60BW7S0t8sY2paujdtgXUtXbSMKYXEpyLwnbEb2Nigln6ftsAnWtrmXFKgn77fpyrwjjb2tnKdK0SIm6Gf6t57aQv8A84b3TcLzoB+HgP6mZ81utezWKQTneqUVbkjqO1OtrYbMTHie7edB/cJ7go1iyXmGP3bfrNQ5dnhHHgDfrJcnq9ZXnYdd63oYnNMXiWp3830dcB1zGZT4KKxhJRXUJzUfVPvHenilzzm/T+kgA8ddLn1QlpwzHVtapOJpjEROCcHZPAo4sOznbZELaJpLtu9o+4KXGH7J8AAG+Ca6OfrSK4AAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar {
        left: 10%;
        width: 100%;
        height: 75%;
        margin: 5px 0;
        z-index: 10001
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar .search-bar-form {
        float: left;
        height: 100%;
        border-radius: 15px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar .search-bar-form input {
        width: 85%;
        height: 35px;
        font-size: 14px;
        line-height: 35px;
        margin-bottom: 10px;
        border: none;
        background: none
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar .search-bar-form button {
        float: right;
        width: 24px;
        height: 35px;
        line-height: 35px;
        margin: 3px 5px 0 0;
        border: none;
        border-radius: 12px;
        background: #e8e8e8;
        color: #666
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar.j-search-bar .search-bar-form {
        width: 80%;
        background: #f2f2f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUFERTgzRDkxMTI2MTFFNkJBMkFCRTEwQzFBNDhGQzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUFERTgzREExMTI2MTFFNkJBMkFCRTEwQzFBNDhGQzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QURFODNENzExMjYxMUU2QkEyQUJFMTBDMUE0OEZDMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QURFODNEODExMjYxMUU2QkEyQUJFMTBDMUE0OEZDMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pli1XZYAAAMSSURBVHjaxJhLSBVRGMfHwaK8lmklLTIte1Cm9kKyRbUrCiqSwHYRRSYFLYJy24PKaFUhtxctWggVtShqV/RAC8XoIr3LrtHTjIirPaD6f/Ef+DzM5NzHjB/84HzHO/f87jnHmfNNVjQatXxGNqgiM0AxyAXDQD94D16BDnAXvLNSiGwfn8kH68EaUODxGZEaDaaDZeAPxc6B28zTFrJBLagDOUn+0Cwwj8TAIfA4HaE8sB8sNPq7QQto5fL0ggSIcPYm85pqUMRrysFZcIwzlrTQeHAcTFF9InGGy+AWCSLCt9g3l7M7n+PsoLD80N9+hWSTHlUyMsgBcD2F/SnyW8BKsIvLvprLuddrX9nGuu8BU5l/AhtTlNFxFWwCPcxXgQ3/27iW+uBiNTPbwQsrM/EUbAN9zLdyb3kK5fICJw6C51ZmQ76vUY3bYEzIAKF1vN9Y/De9ZgUTV0Ab23LPWu4mZFPIiSYr2Dip2rVuQpWgkPlLcD9goXYQZ3uWcXv5J1Sl8ptWOKHHWWQKlan8QUhCepxKU6hE5V0hCcVVu9gUylN5b0hCPao9zhSKqPx7SEL9qj3cFEqofERIQiNV+6cp9FXlBSEJjfXaJjbPNU6UhCSkN/JrUyim8jkhCelxYqZQq8qXhCS01Dj8DRDq5ElPotS4cwcRcoKcpB5VT0whObk1q766gIU2q/YFr+PHZdZVEhUsZYKIFWAB2285rqvQD3BE9Teoo2ymQr5vt8obzXuQeYS9AS4Zh/3SDMlMYxnk1HfnwZ3BztSOdYcqh067nepSWKZT6pn1mbOV70foF+unNjVT+/jrKpIUkbosykomoiqZHP6tyU0qy+NlgzzwdoK1HpVri6pc+ziIU7lWG5WrExf5kmK26nsG6sGXwYT0DUzEJqSxZPIW5DAr2kLOWpGXlO3jqFnDvRVPUqSLLxlqVHn9kdVst7HhpXQf42eGzCjjcpTzQSyvYEaBbzw1iMRDcI9PAK+QmToBJhrFZH2yQpkMN6l22xq6cJbvjeqbOZRCEh8o9YjH2ua/AgwAZtKkfHMVIM0AAAAASUVORK5CYII=) 10px no-repeat;
        background-size: 16px 16px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar.j-search-bar .search-bar-form input {
        text-indent: 30px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar.j-search-form .search-bar-form {
        width: 70%;
        background-color: #f2f2f2
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar.j-search-form .search-bar-form input {
        text-indent: 15px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar .search-bar .btn-cancel {
        background: none;
        border: none;
        margin: 0 0 10px 10px
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap {
        color: #fff;
        background-color: #ff4683;
        border-bottom: 1px solid #ff4683
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap {
            border-bottom: none;
            background-image: linear-gradient(0, #ff4683, #ff4683 50%, transparent 0);
            background-image: -webkit-linear-gradient(90deg, #ff4683, #ff4683 50%, transparent 0);
            background-size: 100% 1px;
            background-repeat: no-repeat;
            background-position: bottom
        }
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .back-btn, .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .right-btn {
        color: #fff;
        background-color: #ff4683
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .back-btn:active, .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .right-btn:active {
        background-color: #ff2c72
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .back-btn .btn-badge, .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .right-btn .btn-badge {
        color: #ff4978;
        background-color: #fff
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-back {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRTBEQjlCODQ5MTFFNUFFMzFGOEMwOTAzNzVFNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRTBEQkFCODQ5MTFFNUFFMzFGOEMwOTAzNzVFNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUVFMERCN0I4NDkxMUU1QUUzMUY4QzA5MDM3NUU3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUVFMERCOEI4NDkxMUU1QUUzMUY4QzA5MDM3NUU3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmiG0kgAAAEmSURBVHjatNXdCoIwFAfwZLnXjN6juxCJkogwE+miDyIyIqLHK9asMzgdNpubHjggc/ufnxdqTwjRQz2QvZHNyHoXzWDWEK/jDdWNp/jWrmNUlb2FWS+MwpsK8Vv7jlAMHhhXoQMFGtShZRSDTIoJdCCFysmBY0soBlm4cozRgRQqIwdPnigGGbjWFGMCKdSKBJxl9x0wfTiLK9Nh6kAKlZKgUnbYEFOSjNSE+QdSqCUJvFiiQg1mWYexASnUQoPiNWc47MG1+IexBSnUnAy4GlAc7uGa22CagFQnZNCNoDisUYz1DJdXeEYG3gHC4RpX0jTf9bsyJYMf0LimLtk+X96JMNfENdf3dxBrMLFPZhs/zAhhIt+8z6vYQo1lB7JHvkFvAQYAf4WmZjnHAfUAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-search {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjcxRjE0ODFCODQ5MTFFNUI2MTg5MENENDA2RjU3QjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjcxRjE0ODJCODQ5MTFFNUI2MTg5MENENDA2RjU3QjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNzFGMTQ3RkI4NDkxMUU1QjYxODkwQ0Q0MDZGNTdCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNzFGMTQ4MEI4NDkxMUU1QjYxODkwQ0Q0MDZGNTdCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsgE1hgAAAH5SURBVHjaxJc7S0MxGIbbWlAH3Ry8W+ug4qg/oLgIOtRJq7t4QxwUQfwbgh2kk7W2DnXq4uUXuDjYzUGkgk71Xm17fAPvgSDnkrZpDTx8cJKTp0lOvqRewzA8/1H8Cm36wAIIgVHQAX7AA7gHVyAJ7ioyixHb0AfioGi4lxI45jseFewqZkCenRZADMyCIdAKfJTMU1hg21ewUK14gyMQ5QQMKHQUBElpBrYqFc+BMqd3SXXaJNb4ruhjUVUspu6Fv3ilCqnJNvt4AwEV8RFfiNcgNUlKS+Uo7ue6foAuDeIefnAlu1H7uKvmgY/7MachP4g9nmKfEasGpjjEmNaYnM4YJ53EY4zXGsU3jCNWlV7m6i/QDJpAWZO4HeRBySo1myP21uEc+HaqNMXPjN0axZ2MT07iW8ZxjeIJxqyT+IJxVqM4zHjpdCwGuNk/NSWQXimBBN1SZoJpLqFBnGJfKZVc3c/ELspqDdJ19vGuekgIItKxuFWFdEc6yzPAW8lFYJNyUU5563ATijZpiyvRgZ3crqMwrzHm1SfJ2RgGbaCF07jIdSxI05tRkbt9mYfS1Lld9mK8TAhJ9E999K9cZd0GwS44Bzkug+CRz/Ystoyr3KNh69jhKK+n2E6+3wixlTwrnvsb8DdJHPjLoAimwLR8EWh4+RVgAFHH8JIF19aBAAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-close {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkEyNjQxMjFCODQ5MTFFNTkzM0Y4REE3MEVCMjI1RDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkEyNjQxMjJCODQ5MTFFNTkzM0Y4REE3MEVCMjI1RDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTI2NDExRkI4NDkxMUU1OTMzRjhEQTcwRUIyMjVENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTI2NDEyMEI4NDkxMUU1OTMzRjhEQTcwRUIyMjVENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoN5YQUAAAEjSURBVHja7NdJCsIwFAZgK3iCjl7DjXvx1i7ciSgOdT6DIIgXiO9hCzFkes/UujDw05a0+TqkSRsJITptlG6npfITcAQpIXNIHNBIIauqXeMV4/YQMgmEIzqFDCC9txrsXFL6kIt4lTUkVuopSSGHqi1cZnK97gAZ3zDxTEFTdR/TgYifmbgTtcE6PCGiexPqgqk4okcf1Af2xWV050J9YUxhwXMqSoFVfFvhLJQK1/hJwmu0pKAcWMVZKIYzSQjHtmcrtDPNlVstrzd2qwsNJJ9I2UTnKixXl3M6GQdNDI8g6ACie3dtz98b545WH+MhZybSuB0a9Z6pQn4AkOZmdecyEKrDF7Yh8wGZQcaQW4CvzCtkBFlC7nJF9P+F+VZ5CjAAso+C/n4TJS4AAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-collection {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTIxN0IzRjlCODQ5MTFFNUJENkJBN0RGREI5QjMyMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTIxN0IzRkFCODQ5MTFFNUJENkJBN0RGREI5QjMyMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMjE3QjNGN0I4NDkxMUU1QkQ2QkE3REZEQjlCMzIxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMjE3QjNGOEI4NDkxMUU1QkQ2QkE3REZEQjlCMzIxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmCrDqYAAAGiSURBVHjaxJc9TsMwFMfjDoWFliuwpUOVhb1S6NBIsPYulbgDIKZegQ/1CJ2oUK8QRoREWWgnymLek/6uLKtp/NyQWvopsfPyfrYT50NpraNDlEZBe0qMiZxYgxxtFxXERxGP2CImprq8TBErjd+4bGmPWCHwi7gmEuIIdIkRjmnE2vEjxJj4BDns+J4r5t58I+CJaDszYXNKTKzRTNBWFN9CTg1HbMSKmOHAM+pRCeacmSDeyF+4zo19NCzQu8iTdsnMbBv5Aq4+39VD3Gf3xEqwIpbAt3DuG+wPuSc5epEIeh9KF643nntec03iGOvvP0sTjt9GDTJXvHlyfWA/rkF8hu07i+eoXNUgvsR2xhd8gAv+KVxOUlpwcBmYxf2KhkfPB4IUhdwaLmUOdIilJT+pUMq5Hqzndcd9SaTEDwJuKxq5Qi6N3Om2txOTVSh3pVnRa7FK+U5pkXhfeal0lzhU7iUtE0vl3lIfsa9cJPUVu/I7Ry6WSsRF8iCpVLxNHiQNEbvyIGmo2MjXIAvJofb4dzrHh8Q85GR1qJ+2PwEGANBOCmDmGV/mAAAAAElFTkSuQmCC)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-location {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE1NkFFMjFCODQ5MTFFNUE2NTlDMjdBQzI3NTAwNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE1NkFFMjJCODQ5MTFFNUE2NTlDMjdBQzI3NTAwNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTU2QUUxRkI4NDkxMUU1QTY1OUMyN0FDMjc1MDA3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTU2QUUyMEI4NDkxMUU1QTY1OUMyN0FDMjc1MDA3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plt0amgAAAJ1SURBVHjarJfPSxVRFMffPMsHEv1wE2olCb3KdVtFpGgd+pQCl6EIUX9EaxH1oVjiUvIHEtGqMipCwX5I2iLMIivbaYhmKTJ+L3wHDpf7ZubMdODDzDv33Pu9b+bMOTOe7/sZpeVAAVwDl0AN2AWrYAlMg0nwL3QVI6ygDfzwo83EFMLWiitYBopi4XegC5zj2CGQB7fAgojr43hi4UD0LwW9kNgs6GassYGkwi1cYBs0KG5LI+cYa9UK58AKJ3cq8yHDq2PsOyjXCBc4ccFxeS+AR2CTTPKe27mxyDWua4THOKnb8l8EG45sXneI3+bYA43wJ06qt/wP6X8MToJTPDc24bgyxr5qhIPkOGL5t+g/I3xV9P22Ysvp35H+bESVOszjXoyKFsT6JfyedEYJr/FYZ/lneBxiyawGA/Q9tWJrefylKZlTvEx3HMm1XiK58iUeqXHNPe7gpEVH6TvNjW3yvk47RM0j+J5r3NAIm8T4woldCQrITdE0ctqS2SpKZqNCtEE8FW1Jm0SPaBLtMTcbNInetG1xVPzzppDYJvFP76ftx0G7GxHizY6YZiE6wjmphYMsvSfEr4ixy0J0OKJnhwofBS/AZ3DWEh+iwB9wlQSig1GiYcLHwGtRGL6BOku8KGrwDs+LcURLCRvRWdFRgg2sWi3PCPSLzfXHFXUJHwfzXMgUjlp2ppeiEOQt8bvE0+SL/HECvKHAitXyKsBzjv0E5xNUMadwJXjLhZdZh+1gI/6MMWts8KmF57igeeOoCZlgxJ/46eyVFP4APoLqGLutsDJea+aNM+Px2ynLNwfNh1QZ2M8kNC/BR9t/sQMBBgAAu6IPoAFl4wAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-scan {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUY3QjM1NjFCODQ5MTFFNTgwQjRGNEQyRDU0NDgzQUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUY3QjM1NjJCODQ5MTFFNTgwQjRGNEQyRDU0NDgzQUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjdCMzU1RkI4NDkxMUU1ODBCNEY0RDJENTQ0ODNBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjdCMzU2MEI4NDkxMUU1ODBCNEY0RDJENTQ0ODNBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjmhrMQAAACqSURBVHja7FaLCoAwCNTos+rrt77LGhSEkN6qIT0EqQndYd62YxGhiOjWZ1pSnEzq23RQg3B47Rhtm3fvYtRcnN4AphOAME5HQfETv5+4v6heOrsLto4zADapdT6oQTgcfWR+jxg53O/KFNUx/+J6tANBHEoTB0KgQ2nmQJ5zO9VENv6QPzM145p5adGUGNEZ30UslfaXX+dAYOIilKHSgXhCM2thl8QswACxr3aZBMZF9AAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-share {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNDNTAwQzFCODQ5MTFFNThCQTlBNkNFRjlFNDM2RUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNDNTAwQzJCODQ5MTFFNThCQTlBNkNFRjlFNDM2RUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQ0M1MDBCRkI4NDkxMUU1OEJBOUE2Q0VGOUU0MzZFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQ0M1MDBDMEI4NDkxMUU1OEJBOUE2Q0VGOUU0MzZFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoNAYJwAAAFnSURBVHja5Ja/SgNBEIf3NiGNthfIAySIjdgppAlYiPbaWfkSvoCVT2EhvoQ2FxshQTSihRDfwSpEPH8Dk7CGYzK72TuLDHzs/dnbj92d3b0kz3MTOSz40VSKLX0FQ5BWKabhm4BdcC/KaaiZLPePzPl+RgpG/P6F7xfr/BGHRL+oUY28SGwiIcrLFIvyxFlOs4tEmUhUrwuOwB7YBs0l3zyDHbqoBy6ZM3ABOuH57zfUHfDo1P0Al+AAtIAVhprKZsgcH4IvrjMGJwUildRHTNIJv78Gmx5JNQpdTltOT69AsqpUI66BAT+/UUjp/dMyqUZ8zs8+wYZi3dKcv7M8lepKYstZS3HqsWlYxciI4p6TwTbCLpa5h4q0gRxzeas52BXR1Z7H+1zemRJCEre5fCtDLB0S36AGGmAa6e9k3r40x0OWT6vusSnhf2zevjX/FOsnrgtzUVmP+xX4Hoqyej3m+FeAAQCqRr6wyF6XswAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-collected {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAfCAYAAACVgY94AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM5MTk4NDFCODQ5MTFFNUFEMTVFM0ZENThFNEUyQTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM5MTk4NDJCODQ5MTFFNUFEMTVFM0ZENThFNEUyQTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQzkxOTgzRkI4NDkxMUU1QUQxNUUzRkQ1OEU0RTJBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzkxOTg0MEI4NDkxMUU1QUQxNUUzRkQ1OEU0RTJBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpcJHkAAAAEXSURBVHja7JZBDoIwEEULK3GhES/AHTg58RKexJ0aXCgr6jQZEhMdOtMOxUV/8tMECvPSQucX1loj0AbHLY5PHAel+d9ygAzX4IulNYKbj/kNXqPU4zu9tX0TSvDJ8tWjuTphDZKhmNniEnwH78yyeoAP4JGCoNQlgDNYo6NuUitYg68mrY7gGxfQLXeRGND+2lFqi1PDkTVL8+fKgBkwAwYCtiuwtJJO4tQnanVTP95LAV2WeyUCrKiMOPcNDvjganCcn2RpyMqXrjl/8VKQXjjJMaMNyYKTnoNakGy4kIM6FlIEF9pJQiHFcDGtTgoZBBfbi7mQwXAaYcEHGQWnlWYoyGg4zbg1QZ7RKnC+sJADK0dvAQYAjZhWLwtGJYsAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-home {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjlCRkM5MEZBQTRFMzExQTkzRUI5NUY0NEE2NjlGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBN0QzNzM2QkJCNzIxMUU1QjMzQUVDREIzQkI2NUU3RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBN0QzNzM2QUJCNzIxMUU1QjMzQUVDREIzQkI2NUU3RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgzMjFDNzJCODBGMTFFM0JBMUY5RjVCRUJFQTFFNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgzMjFDNzNCODBGMTFFM0JBMUY5RjVCRUJFQTFFNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz54Y2rJAAACCUlEQVR42tSXTShEURTHvTHlM1mIhTQLSUlRJCJjUBYUC5FiYUWRjWJHVlK2LEXK98JGqSkLYiOFCCULohmMRBgfzfW/dSav674374034V+/ut1z7v2775375lAYY1G/IeW/GaeARRo3Ap/pHbixSdLBOvvSBsgwu49Z00ywzb5rB2RFyjgPHDJtHYMCq41LwTkLrSvgtMq4FngEgzfQB1rBnRC7Bg0/NW4CPmHjd9CtyqkBt0LOPWgL17iTTqaWH7RTvBy4aFwlMf8APWaN++lk4imaKF5GRnyujuZKwIWwJgAGjRoPSYrmAdRTvEI43SNooVihxJxrRM84BoxJFnlBNeU4qXiYpNi6KIdfqTNJzgSIF43jwKQk+ZIea9DUo3OV3ugV8dxsutei5kFS0JgPliRJ/JEVazxePQ2rzI8k8RWQxhNmJMFTkG/wpDKN01r+GT2QxNeiJMVwAnJpYaXkA2FUU6oflV0htscDvaqJfZBDC1wahWRGyyAROMAmzT3xYuUGCWAOLFBC0NTLrJEbpIBUMAo61FVtAwqNY8N4p6E0K95jO/UDAVVvYAPJOr3DFnDz7oXga+NAM3DodCwhO5B4eg9aKtL4zA7orFkV821h9Fs3JuelCsfYrjEfHWljS/TnjBWr+/dInljvjw0YKRQ/mAatRjchvYBnyfwrWPoz/zt9CjAAK2yBjkj2PaAAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-arrowdown_red {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRTBEQjlCODQ5MTFFNUFFMzFGOEMwOTAzNzVFNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRTBEQkFCODQ5MTFFNUFFMzFGOEMwOTAzNzVFNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUVFMERCN0I4NDkxMUU1QUUzMUY4QzA5MDM3NUU3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUVFMERCOEI4NDkxMUU1QUUzMUY4QzA5MDM3NUU3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmiG0kgAAAEmSURBVHjatNXdCoIwFAfwZLnXjN6juxCJkogwE+miDyIyIqLHK9asMzgdNpubHjggc/ufnxdqTwjRQz2QvZHNyHoXzWDWEK/jDdWNp/jWrmNUlb2FWS+MwpsK8Vv7jlAMHhhXoQMFGtShZRSDTIoJdCCFysmBY0soBlm4cozRgRQqIwdPnigGGbjWFGMCKdSKBJxl9x0wfTiLK9Nh6kAKlZKgUnbYEFOSjNSE+QdSqCUJvFiiQg1mWYexASnUQoPiNWc47MG1+IexBSnUnAy4GlAc7uGa22CagFQnZNCNoDisUYz1DJdXeEYG3gHC4RpX0jTf9bsyJYMf0LimLtk+X96JMNfENdf3dxBrMLFPZhs/zAhhIt+8z6vYQo1lB7JHvkFvAQYAf4WmZjnHAfUAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-more {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0YwNzVCNTJEQUQzMTFFNUE5RDdGMDNBQjM3NUZEREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0YwNzVCNTNEQUQzMTFFNUE5RDdGMDNBQjM3NUZEREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjA3NUI1MERBRDMxMUU1QTlEN0YwM0FCMzc1RkRERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjA3NUI1MURBRDMxMUU1QTlEN0YwM0FCMzc1RkRERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl3gU7IAAAOtSURBVHja7JvNb0xRGMY7qlqJSCQ2tAsf1VGaVlgI+qFVaaOIiERSERJ/BSsLiQ0bCxvBgvjcsMaUtj5iI5EGizZE0UW/pkq/aMdzknfk7XFn5r23E6vnTX7pnTvve55znnvP3HOmmVgqlSpgZI5FtIAG0SAaRINoEA2iQTSIQYNoEA2iQTSIBtEgGsSgQTSIBtEgGkSDaBANYtCgCAbFwD5wE3wEc2AC9ILboE1y8hUt4GqA1nXQmufxuvauSfsTovdJ9IO13P/mFRvAy1TueA3iXm1YKkCnQesFqFyglqt/btDq8selG6kHIwFFk2Am4PwoaIjY4YYMWlNgOuB8EjRF1GqUequWG9du36CNXiMu6TRYK+/HwCZwHkyovJ8Rrq7LH/e0zoD1Ksf155yXl5Q+hNVKem2clZmSzonLufGgcaWTutWbb0BZFtEq0K/yX4mBlg7HvCncA0qz5Duj+rzpFgthkJ5W77yL4FMOev1xuTf2qpPDYJVBuNqbdq3GDreqmjGwxlBTJdM8HW1GrTZV88OoVS53z99xuadYu/rMvgAGDE+Dt/LJn45241PkmDq+KE+QXNEDrqjXx41aOu+SUcs93S7P66/c5ulYF+L2bVJ17401H1RNmKfgDlXXZ6zR06UmhNY2reXm8wicWgGmQUmINcUq8E2Ox8FyQ43LWwZmQbH8tcRKMCjHU2CpoWZSjadExmeJJSp3xk2xInlRGHJlXZTh2FJTKFhD5xaHGGg6FkccV8oZ8kU1sjlEQ9XquN9Yo/MqQ2jpfn021ui8mhBaW3R/nUEJdeJEiIZOquOEsSaRoT5XnPqPWvPHJatGvWreavgg2w/mVF2z8QOw2VvJbjfU7AGzqq7FqNWian6BXYYa58VvPa70G3pPNAB2ZmnkIPiu8rtDLt66VO0gqMuxbhrz9kphVtJ6XEOy7ch28Yb9celNql6Suyt2Q+6UClnRHgEPA/ZIYTet8QCtW+CA0joMHnh3adLbIhQYF36jqg3X3j25yBXSl0PgfoBW3N+s1soVtcaw1ETZQNbKFbXGiGymo2jVe3dGrhjS4/IbcwvFR4ZGEjn2NRZc/WODVkeEOyfoTuowaD3xxxXL8FuNBnAU1IMyOeeWA93gDniaxy+x0lp1oFS+jPsqWndBRx61GkWrFqyWc26x2ylaz/759pA/ZuF30jSIBtEgGkSDaBANYtAgGkSDaBANokE0iAYxaBANokE0iAbRIBpEgxg0iAYtLP4IMABzY7dhkpnxpgAAAABJRU5ErkJggg==)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-shopcart {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIzOTRCMDhEQUQzMTFFNTgwMDRDRDc2NjcyMDU4MTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIzOTRCMDlEQUQzMTFFNTgwMDRDRDc2NjcyMDU4MTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjM5NEIwNkRBRDMxMUU1ODAwNENENzY2NzIwNTgxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjM5NEIwN0RBRDMxMUU1ODAwNENENzY2NzIwNTgxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn2KXoIAAASMSURBVHjaxJjZixxVFIeramoyY5YxQRNjXGLUENdoogZ38MEgQUSFCIKKPvjki/h3+CSCPokgCIpIFJcXF9yQUUPUxBUNcddg4ujMxHTPdF1/R78Lx6Kqu9SutuBjpqurq3517llvGkI4P0mSY8US0ROL4nfxo/hZLCR/HYG/KRTJCI5c7BSX8n9A5EHxqnhB/ISYlO+90NCyvtREdcVVWDDlizlxivhc/CbmRyCm6ggm8DkxJcZhi7hcbBXXixmxt/zDNq3mn2ECPxX3iwwr3io2iNViu3i7QmCrVvMfTNRRfM6C4gfxvpgWY2KtWJ78j0de+mwB8pl4U9wgJsQqccIIljXev8BoxmJZYEFq+YrPS8Ut+OOojkO41Vu2snnFBQuoT7CgpaBtIxRoQXmuOEe8XiWwcOZeINV8TTqKSzHsJJ3xd4yisVFssqDN+0SS0RFviGcIoBw/LYbok5kTaFlks7iLVVtbJ7DAYgGrHRYfVlSPMITgGHPPjLl4hvN5VmO9o5Q4+/5ikndwlgtDtGDhWCMuFCfGc3UCvxVPUObWi1NbTMr+ZddRxdYQxa9lNW/0vXha/IJfLBlRBK8QJ5E9zPdfqbOgtVvfuchNXY1sy4rRHzN88BvLif2ieNH9MOPHvRYrSnzOYfqDPWag7B/8OG15edcTkGaI9yi5RT7A9PMu3YSWrXemuJLyauVu1mfwpKbkfUyn00b18Il6kgb5DAQuxudlfd7oiHhRfEFUreD6YQfNOOI2sryH6OiTfgIDFtyL054trnXpZljLbS+5UtxMo2yZ41ECJMSWv1+Gn+NC6y7uEde0EMnWEF/kZqAD5N/KhrX8dj3+P562a2tLATKB9fbQjxZNBJZnYavPn+DAwxycoi9bM/I8PUDSRGAoLbeJuxcnLloQaNXrV1q8pKkFy+kgdzmq91/GyYpzsZKEJgJT17BO036fJu4jL3b+RV4cJNBy7ss0Kt2mFuwwwJxHpO0Y8vL6YzfL/BJG6CswmtwCYr94lyhOXLIObo7I3IZSD1K3ndKpCTx/rkOjuuxvZg8hNBlmlpFQM4aazImYgIzkPouzT7I7kTPPFO4lAi9WYISemyaPuEwxUKD3lSla/zvE6dzEdiOeFe+4/BUfFmtszucNVIttCLRu5Ul2Mubq3CZvKG6ctv9uqslqbjjD3y8ZTRMXPAXdUEancpu4iZcLjJVx+Xe7FalcwkECJ7nxdpZ4n/iAbZHLxCWl7RHfUBxDkO1g5tiHT1vzcbW4oM/+T9pU4EosOImPPSUeJx2YNa9jGgslceZnx/Fyy/FN++3DVIwJNqhWVQxRf5I16KLHGWQ2O5eII0EXC23imsT1jtEf5+mI4gjR5fwY5+IGae0G5qBSt0CHMc1Gklnzdm6+lEB5hPxVdY9ZrunQsdxJtK4jhR3Esn3TSL+jR4TaGPggPaLlq7OYnx8Su1yQlAV2qRI2Z39ENG9B9C6iuFu7jA3TTHwZa7t2EhRTPPiBcotUU+JOFjeKK7C8BdljdOzFMATWTXhFRVWo25zMStcMfPgfAgwAIe91xZgtg+EAAAAASUVORK5CYII=)
    }

    .BNJS-body-with-title-bar .BNJS-title-bar.theme-wap .icon-camera {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERDQjBCNjVEQjY0MTFFNUFGMTJFMDM4MEZBODBDNEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERDQjBCNjZEQjY0MTFFNUFGMTJFMDM4MEZBODBDNEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRENCMEI2M0RCNjQxMUU1QUYxMkUwMzgwRkE4MEM0RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRENCMEI2NERCNjQxMUU1QUYxMkUwMzgwRkE4MEM0RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgaqmyMAAAI1SURBVHja7Ji7SgNBFIY3AZMmK0HwCm63aOED6BsYCxFLL6VoIYilVUrxGUSwNwlqY2vnA6iQzoiaWBhvsdHC9R89I+OQzc7s5LJIDnwwmz1n9mMvc0nM8zwryhG3Ih5dwU4I9oAt8Ao8RR7BBohpX419JBr0gAMvfOyBmM41deVynnloSZrI5ej3oNo4SYWSbLWcsSRvuCAPXhQeka5cI8l68UIuLhccA0+K7w+TS4SQ05X0yGmM3eI8PuZ5xY8+CT4MhzY21Hwq5hYs6bEeggGDO2TKADnwqFnSbe0P0WkKbIJTUKV+qnS8Sefr1WVAmcgIv4+IQrKgrtwCqAS8SxXKk2vLQk5ZOtcUwazmAJ1tIFhptuCCVFcCa8Chr9yh45KUtyT0MUNit9RumiB7p+6FmhNg++TadJ7HA0grXMNIcF3IvwK9Afk25fFY1xEMs9yaFdrbtOxqFDWw41MfPGh6fzclKuu1OzBCbQfcKNSwvGtqV4R631WgieA7SGjOLAmqsyg/qSoY5hFXhfagYs2QT31LlvwXQjujWDMttC9bLXgstNnexA7ItymPx5HunuTfjYOMxTozySoYpZlklI7lmWRZsf9IzMUtF+R3UmU1s6TZ72+EGQflSIEVMAcmQB9t1M/pg9gFb7rbdZOBuh3hO1APR0DOkcdBcbLfB24H5Vx6JXi86e7q2h0FJjiOxhlIR0zuGUyxR1wEk9970J+1W6ejRi7MqRjr/kfdFexwfAkwAIg0TH+WQv8+AAAAAElFTkSuQmCC)
    }

    .fix-ios-bug {
        position: absolute
    }</style>
    <style type="text/css">
        .BNJS-page {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: #333;
        text-align: center;
        background-color: #eee;
        z-index: 99998
    }

    .BNJS-page article, .BNJS-page aside, .BNJS-page audio, .BNJS-page canvas, .BNJS-page caption, .BNJS-page details, .BNJS-page div, .BNJS-page figure, .BNJS-page footer, .BNJS-page header, .BNJS-page hgroup, .BNJS-page iframe, .BNJS-page img, .BNJS-page mark, .BNJS-page menu, .BNJS-page nav, .BNJS-page object, .BNJS-page section, .BNJS-page span, .BNJS-page summary, .BNJS-page table, .BNJS-page tbody, .BNJS-page td, .BNJS-page tfoot, .BNJS-page thead, .BNJS-page tr, .BNJS-page video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-page a, .BNJS-page abbr, .BNJS-page address, .BNJS-page b, .BNJS-page blockquote, .BNJS-page cit, .BNJS-page code, .BNJS-page dd, .BNJS-page del, .BNJS-page dfn, .BNJS-page dl, .BNJS-page dt, .BNJS-page em, .BNJS-page fieldset, .BNJS-page h1, .BNJS-page h2, .BNJS-page h3, .BNJS-page h4, .BNJS-page h5, .BNJS-page h6, .BNJS-page hr, .BNJS-page i, .BNJS-page ins, .BNJS-page label, .BNJS-page legend, .BNJS-page li, .BNJS-page ol, .BNJS-page p, .BNJS-page pre, .BNJS-page q, .BNJS-page samp, .BNJS-page small, .BNJS-page strong, .BNJS-page sub, .BNJS-page sup, .BNJS-page ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-page article, .BNJS-page aside, .BNJS-page audio, .BNJS-page canvas, .BNJS-page figcaption, .BNJS-page figure, .BNJS-page figure img, .BNJS-page footer, .BNJS-page header, .BNJS-page hgroup, .BNJS-page nav, .BNJS-page section, .BNJS-page video {
        display: block
    }

    .BNJS-page table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-page table caption, .BNJS-page table td, .BNJS-page table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-page a img {
        border: 0
    }

    .BNJS-page :focus {
        outline: 0
    }

    .BNJS-page .BNJS-page-image {
        margin-top: 40%;
        margin-left: 35%;
        width: 30%;
        height: 0;
        padding-bottom: 30%;
        background-position: bottom;
        background-size: 100%;
        background-repeat: no-repeat
    }

    .BNJS-page .BNJS-page-title {
        margin: 10px 2em 0;
        line-height: 1.6em;
        color: #898989;
        font-size: 14px
    }

    .BNJS-page .BNJS-page-content {
        margin: 10px 0 0;
        font-size: 14px
    }

    .BNJS-page.BNJS-loading-page .BNJS-page-image {
        background-image: url(//gss0.bdstatic.com/5eR1ciub_Q63otebn9fN2DJv/wap-bainuo/zujianhua/bnjs/loading.jpg)
    }

    .BNJS-page.BNJS-error-page .BNJS-page-image {
        background-image: url(data:image/png;base64,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)
    }

    .BNJS-page.BNJS-error-page .BNJS-error-page-retry-btn {
        background: none;
        border-style: none;
        padding: 0;
        margin: 0;
        color: #ff4978;
        font-size: 13px;
        width: 144px;
        height: 26px;
        line-height: 26px;
        border: 1px solid #c6c6c6;
        border-radius: 3px;
        background-color: #fff
    }

    .BNJS-page.BNJS-error-page .BNJS-error-page-retry-btn:focus {
        outline: none
    }

    .BNJS-page.BNJS-page-type-9011 .BNJS-page-image {
        background-image: url(data:image/png;base64,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)
    }

    .BNJS-page.BNJS-page-type-9012 .BNJS-page-image {
        background-image: url(data:image/png;base64,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)
    }

    .BNJS-page.BNJS-page-type-9013 .BNJS-page-image {
        background-image: url(data:image/png;base64,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)
    }

    .BNJS-page.BNJS-page-type-9014 .BNJS-page-image {
        background-image: url(data:image/png;base64,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)
    }</style>
    <style type="text/css">
        .BNJS-share-page {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: #333;
        text-align: center;
        z-index: 100000;
        background-color: none
    }

    .BNJS-share-page .BNJS-page-content {
        position: relative;
        width: 100%;
        height: 100%
    }

    .BNJS-share-page .BNJS-page-content .BNJS-share-page-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .75)
    }

    .BNJS-share-page .BNJS-page-content .BNJS-page-image {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 81px;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEVCAYAAACWi11PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YWU0ZTk5ZC02MDgzLTQyOTktYWY4Yy1mY2RlZmFkMGZlODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDA1NTFDNjFBRDI0MTFFNUE5RERCQUU4MUM2Mjc4NzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDA1NTFDNjBBRDI0MTFFNUE5RERCQUU4MUM2Mjc4NzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTMxNzY3MDQtZDg5Mi00NzI4LWJiZGMtZjFkYWFlODBjNWRmIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRhZTRlOTlkLTYwODMtNDI5OS1hZjhjLWZjZGVmYWQwZmU4NyIvPiA8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);
        background-position: 0 0;
        background-size: 100% 100%
    }

    .BNJS-share-page .BNJS-page-content button {
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 50px;
        left: 50%;
        margin-left: -50px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #fff;
        border-radius: 3px;
        background: none;
        color: #fff;
        font-size: 12px
    }</style>
    <style type="text/css">
        .BNJS-toast {
        position: fixed;
        left: 50%;
        top: 50%;
        width: 75%;
        padding: 10px;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        background-color: hsla(0, 0%, 39%, .7);
        z-index: 99999
    }

    .BNJS-toast article, .BNJS-toast aside, .BNJS-toast audio, .BNJS-toast canvas, .BNJS-toast caption, .BNJS-toast details, .BNJS-toast div, .BNJS-toast figure, .BNJS-toast footer, .BNJS-toast header, .BNJS-toast hgroup, .BNJS-toast iframe, .BNJS-toast img, .BNJS-toast mark, .BNJS-toast menu, .BNJS-toast nav, .BNJS-toast object, .BNJS-toast section, .BNJS-toast span, .BNJS-toast summary, .BNJS-toast table, .BNJS-toast tbody, .BNJS-toast td, .BNJS-toast tfoot, .BNJS-toast thead, .BNJS-toast tr, .BNJS-toast video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-toast a, .BNJS-toast abbr, .BNJS-toast address, .BNJS-toast b, .BNJS-toast blockquote, .BNJS-toast cit, .BNJS-toast code, .BNJS-toast dd, .BNJS-toast del, .BNJS-toast dfn, .BNJS-toast dl, .BNJS-toast dt, .BNJS-toast em, .BNJS-toast fieldset, .BNJS-toast h1, .BNJS-toast h2, .BNJS-toast h3, .BNJS-toast h4, .BNJS-toast h5, .BNJS-toast h6, .BNJS-toast hr, .BNJS-toast i, .BNJS-toast ins, .BNJS-toast label, .BNJS-toast legend, .BNJS-toast li, .BNJS-toast ol, .BNJS-toast p, .BNJS-toast pre, .BNJS-toast q, .BNJS-toast samp, .BNJS-toast small, .BNJS-toast strong, .BNJS-toast sub, .BNJS-toast sup, .BNJS-toast ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-toast article, .BNJS-toast aside, .BNJS-toast audio, .BNJS-toast canvas, .BNJS-toast figcaption, .BNJS-toast figure, .BNJS-toast figure img, .BNJS-toast footer, .BNJS-toast header, .BNJS-toast hgroup, .BNJS-toast nav, .BNJS-toast section, .BNJS-toast video {
        display: block
    }

    .BNJS-toast table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-toast table caption, .BNJS-toast table td, .BNJS-toast table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-toast a img {
        border: 0
    }

    .BNJS-toast :focus {
        outline: 0
    }</style>
    <style type="text/css">
        .BNJS-loading {
        position: fixed;
        left: 50%;
        top: 50%;
        padding: 15px;
        min-width: 60px;
        min-height: 60px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        background: hsla(0, 0%, 39%, .7) url("http://hybrid-static.cdn.bcebos.com/6a600c338744ebf874748491d1f9d72a6059a713.jpg") no-repeat center 15px;
        background-size: 30px 30px;
        z-index: 99999
    }

    .BNJS-loading article, .BNJS-loading aside, .BNJS-loading audio, .BNJS-loading canvas, .BNJS-loading caption, .BNJS-loading details, .BNJS-loading div, .BNJS-loading figure, .BNJS-loading footer, .BNJS-loading header, .BNJS-loading hgroup, .BNJS-loading iframe, .BNJS-loading img, .BNJS-loading mark, .BNJS-loading menu, .BNJS-loading nav, .BNJS-loading object, .BNJS-loading section, .BNJS-loading span, .BNJS-loading summary, .BNJS-loading table, .BNJS-loading tbody, .BNJS-loading td, .BNJS-loading tfoot, .BNJS-loading thead, .BNJS-loading tr, .BNJS-loading video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-loading a, .BNJS-loading abbr, .BNJS-loading address, .BNJS-loading b, .BNJS-loading blockquote, .BNJS-loading cit, .BNJS-loading code, .BNJS-loading dd, .BNJS-loading del, .BNJS-loading dfn, .BNJS-loading dl, .BNJS-loading dt, .BNJS-loading em, .BNJS-loading fieldset, .BNJS-loading h1, .BNJS-loading h2, .BNJS-loading h3, .BNJS-loading h4, .BNJS-loading h5, .BNJS-loading h6, .BNJS-loading hr, .BNJS-loading i, .BNJS-loading ins, .BNJS-loading label, .BNJS-loading legend, .BNJS-loading li, .BNJS-loading ol, .BNJS-loading p, .BNJS-loading pre, .BNJS-loading q, .BNJS-loading samp, .BNJS-loading small, .BNJS-loading strong, .BNJS-loading sub, .BNJS-loading sup, .BNJS-loading ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-loading article, .BNJS-loading aside, .BNJS-loading audio, .BNJS-loading canvas, .BNJS-loading figcaption, .BNJS-loading figure, .BNJS-loading figure img, .BNJS-loading footer, .BNJS-loading header, .BNJS-loading hgroup, .BNJS-loading nav, .BNJS-loading section, .BNJS-loading video {
        display: block
    }

    .BNJS-loading table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-loading table caption, .BNJS-loading table td, .BNJS-loading table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-loading a img {
        border: 0
    }

    .BNJS-loading :focus {
        outline: 0
    }

    .BNJS-loading.BNJS-loading-text {
        padding-top: 55px
    }</style>
    <style type="text/css">
        .BNJS-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        overflow: hidden;
        color: #333;
        font-size: 14px;
        text-align: center;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid #e8e8e8;
        box-shadow: 0 0 60px #ccc;
        z-index: 99999
    }

    .BNJS-dialog article, .BNJS-dialog aside, .BNJS-dialog audio, .BNJS-dialog canvas, .BNJS-dialog caption, .BNJS-dialog details, .BNJS-dialog div, .BNJS-dialog figure, .BNJS-dialog footer, .BNJS-dialog header, .BNJS-dialog hgroup, .BNJS-dialog iframe, .BNJS-dialog img, .BNJS-dialog mark, .BNJS-dialog menu, .BNJS-dialog nav, .BNJS-dialog object, .BNJS-dialog section, .BNJS-dialog span, .BNJS-dialog summary, .BNJS-dialog table, .BNJS-dialog tbody, .BNJS-dialog td, .BNJS-dialog tfoot, .BNJS-dialog thead, .BNJS-dialog tr, .BNJS-dialog video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-dialog a, .BNJS-dialog abbr, .BNJS-dialog address, .BNJS-dialog b, .BNJS-dialog blockquote, .BNJS-dialog cit, .BNJS-dialog code, .BNJS-dialog dd, .BNJS-dialog del, .BNJS-dialog dfn, .BNJS-dialog dl, .BNJS-dialog dt, .BNJS-dialog em, .BNJS-dialog fieldset, .BNJS-dialog h1, .BNJS-dialog h2, .BNJS-dialog h3, .BNJS-dialog h4, .BNJS-dialog h5, .BNJS-dialog h6, .BNJS-dialog hr, .BNJS-dialog i, .BNJS-dialog ins, .BNJS-dialog label, .BNJS-dialog legend, .BNJS-dialog li, .BNJS-dialog ol, .BNJS-dialog p, .BNJS-dialog pre, .BNJS-dialog q, .BNJS-dialog samp, .BNJS-dialog small, .BNJS-dialog strong, .BNJS-dialog sub, .BNJS-dialog sup, .BNJS-dialog ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-dialog article, .BNJS-dialog aside, .BNJS-dialog audio, .BNJS-dialog canvas, .BNJS-dialog figcaption, .BNJS-dialog figure, .BNJS-dialog figure img, .BNJS-dialog footer, .BNJS-dialog header, .BNJS-dialog hgroup, .BNJS-dialog nav, .BNJS-dialog section, .BNJS-dialog video {
        display: block
    }

    .BNJS-dialog table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-dialog table caption, .BNJS-dialog table td, .BNJS-dialog table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-dialog a img {
        border: 0
    }

    .BNJS-dialog :focus {
        outline: 0
    }

    .BNJS-dialog .BNJS-dialog-title {
        line-height: 20px;
        font-size: 16px;
        padding: 10px;
        font-weight: 700
    }

    .BNJS-dialog .BNJS-dialog-content {
        padding: 6px 10px;
        min-height: 40px;
        line-height: 20px;
        border-bottom: 1px solid #d5d5d5;
        word-break: break-all;
        ord-break: normal
    }

    .BNJS-dialog .BNJS-dialog-btns {
        height: 40px;
        line-height: 40px
    }

    .BNJS-dialog .BNJS-dialog-btns .BNJS-dialog-btn {
        float: left;
        box-sizing: border-box;
        width: 50%;
        height: 40px;
        color: inherit;
        border-style: none;
        background: transparent;
        outline: none
    }

    .BNJS-dialog .BNJS-dialog-btns .BNJS-dialog-btn-cancel {
        border-left: 1px solid #e1e1e1
    }

    .BNJS-dialog .BNJS-dialog-btns.BNJS-dialog-btns-no-cancel .BNJS-dialog-btn {
        float: left;
        width: 100%
    }

    .BNJS-dialog .BNJS-dialog-btns.BNJS-dialog-btns-no-cancel .BNJS-dialog-btn-cancel {
        display: none
    }</style>
    <style type="text/css">
        .BNJS-options-popup {
        position: fixed;
        bottom: 0;
        left: 0;
        padding-bottom: 52px;
        width: 100%;
        z-index: 99999
    }

    .BNJS-options-popup article, .BNJS-options-popup aside, .BNJS-options-popup audio, .BNJS-options-popup canvas, .BNJS-options-popup caption, .BNJS-options-popup details, .BNJS-options-popup div, .BNJS-options-popup figure, .BNJS-options-popup footer, .BNJS-options-popup header, .BNJS-options-popup hgroup, .BNJS-options-popup iframe, .BNJS-options-popup img, .BNJS-options-popup mark, .BNJS-options-popup menu, .BNJS-options-popup nav, .BNJS-options-popup object, .BNJS-options-popup section, .BNJS-options-popup span, .BNJS-options-popup summary, .BNJS-options-popup table, .BNJS-options-popup tbody, .BNJS-options-popup td, .BNJS-options-popup tfoot, .BNJS-options-popup thead, .BNJS-options-popup tr, .BNJS-options-popup video {
        border: 0;
        margin: 0;
        padding: 0;
        font-size: inherit;
        color: inherit;
        line-height: inherit
    }

    .BNJS-options-popup a, .BNJS-options-popup abbr, .BNJS-options-popup address, .BNJS-options-popup b, .BNJS-options-popup blockquote, .BNJS-options-popup cit, .BNJS-options-popup code, .BNJS-options-popup dd, .BNJS-options-popup del, .BNJS-options-popup dfn, .BNJS-options-popup dl, .BNJS-options-popup dt, .BNJS-options-popup em, .BNJS-options-popup fieldset, .BNJS-options-popup h1, .BNJS-options-popup h2, .BNJS-options-popup h3, .BNJS-options-popup h4, .BNJS-options-popup h5, .BNJS-options-popup h6, .BNJS-options-popup hr, .BNJS-options-popup i, .BNJS-options-popup ins, .BNJS-options-popup label, .BNJS-options-popup legend, .BNJS-options-popup li, .BNJS-options-popup ol, .BNJS-options-popup p, .BNJS-options-popup pre, .BNJS-options-popup q, .BNJS-options-popup samp, .BNJS-options-popup small, .BNJS-options-popup strong, .BNJS-options-popup sub, .BNJS-options-popup sup, .BNJS-options-popup ul {
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        margin: 0;
        padding: 0
    }

    .BNJS-options-popup article, .BNJS-options-popup aside, .BNJS-options-popup audio, .BNJS-options-popup canvas, .BNJS-options-popup figcaption, .BNJS-options-popup figure, .BNJS-options-popup figure img, .BNJS-options-popup footer, .BNJS-options-popup header, .BNJS-options-popup hgroup, .BNJS-options-popup nav, .BNJS-options-popup section, .BNJS-options-popup video {
        display: block
    }

    .BNJS-options-popup table {
        border-collapse: separate;
        border-spacing: 0
    }

    .BNJS-options-popup table caption, .BNJS-options-popup table td, .BNJS-options-popup table th {
        text-align: left;
        vertical-align: middle
    }

    .BNJS-options-popup a img {
        border: 0
    }

    .BNJS-options-popup :focus {
        outline: 0
    }

    .BNJS-options-popup .option-list {
        width: 100%;
        font-size: 14px;
        text-align: center;
        color: #333;
        background-color: #fff;
        position: relative;
        border-top: 1px solid #ccc;
        border-right: 0 solid #ccc;
        border-bottom: 0 solid #ccc;
        border-left: 0 solid #ccc;
        border-radius: 0 0 0 0
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-options-popup .option-list {
            border: none
        }

        .BNJS-options-popup .option-list:after {
            content: " ";
            display: block;
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            border-top: 1px solid #ccc;
            border-right: 0 solid #ccc;
            border-bottom: 0 solid #ccc;
            border-left: 0 solid #ccc;
            pointer-events: none;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: 200%;
            border-radius: 0 0 0 0
        }
    }

    .BNJS-options-popup .option-list .option-item {
        display: block;
        line-height: 40px;
        position: relative;
        border-top: 0 solid #ccc;
        border-right: 0 solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: 0 solid #ccc;
        border-radius: 0 0 0 0
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-options-popup .option-list .option-item {
            border: none
        }

        .BNJS-options-popup .option-list .option-item:after {
            content: " ";
            display: block;
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            border-top: 0 solid #ccc;
            border-right: 0 solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: 0 solid #ccc;
            pointer-events: none;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: 200%;
            border-radius: 0 0 0 0
        }
    }

    .BNJS-options-popup .option-list .option-item.highlight {
        color: #ff4978
    }

    .BNJS-options-popup .option-list .option-item:active {
        background-color: #eee
    }

    .BNJS-options-popup .option-list-footer {
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
        padding: 8px;
        width: 100%;
        height: 52px;
        background-color: #eee
    }

    .BNJS-options-popup .option-list-footer .cancel-btn {
        display: block;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: #666;
        background-color: #fff;
        position: relative;
        border: 1px solid #ccc;
        border-radius: 4px 4px 4px 4px
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {
        .BNJS-options-popup .option-list-footer .cancel-btn {
            border: none
        }

        .BNJS-options-popup .option-list-footer .cancel-btn:after {
            content: " ";
            display: block;
            box-sizing: border-box;
            position: absolute;
            top: -50%;
            bottom: -50%;
            left: -50%;
            right: -50%;
            border: 1px solid #ccc;
            pointer-events: none;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: 200%;
            border-radius: 8px 8px 8px 8px
        }
    }

    .BNJS-options-popup .option-list-footer .cancel-btn:active {
        background-color: #eee
    }</style>
</head>
<body class="" style="opacity: 1; font-size: 12px;">
<div id="wrapContainer">
    <div class="box">
        <div class="search-box">
            <div class="search-bar border-all">
                <div class="serach-btn"></div>
                <div class="serrch-keyword-flex">输入菜品名、商家名或地点</div>
            </div>
        </div>
        <div class="category-list-more" style="height: 186px;">
            <ul class="category-list-ul">
                <li class="cate-item-out"><a class="cate-item-inner" data-index="0">
                    <div class="item-icon"
                         style="background-image: url('http://f.hiphotos.baidu.com/nuomi/pic/item/d043ad4bd11373f077d0b531ae0f4bfbfaed04b5.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">盖浇饭</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner" data-index="1">
                    <div class="item-icon"
                         style="background-image: url('http://f.hiphotos.baidu.com/nuomi/pic/item/9922720e0cf3d7ca7e8338caf81fbe096b63a910.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">荤菜</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner" data-index="2">
                    <div class="item-icon"
                         style="background-image: url('http://e.hiphotos.baidu.com/nuomi/pic/item/9345d688d43f879430a64f92d81b0ef41bd53a34.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">素菜</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner" data-index="3">
                    <div class="item-icon"
                         style="background-image: url('http://g.hiphotos.baidu.com/nuomi/pic/item/a1ec08fa513d2697af790fe15ffbb2fb4216d8e0.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">面食</div>
                    <div class="mask"></div>
                </a></li>
            </ul>
            <ul class="category-list-ul">
                <li class="cate-item-out"><a class="cate-item-inner" data-index="4">
                    <div class="item-icon"
                         style="background-image: url('http://b.hiphotos.baidu.com/nuomi/pic/item/dcc451da81cb39db575bbdf8da160924aa183081.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">外卖</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner" data-index="5">
                    <div class="item-icon"
                         style="background-image: url('http://f.hiphotos.baidu.com/nuomi/pic/item/d31b0ef41bd5ad6e004cbe448bcb39dbb7fd3ce3.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">火锅</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner" data-index="6">
                    <div class="item-icon"
                         style="background-image: url('http://c.hiphotos.baidu.com/nuomi/pic/item/eac4b74543a982260de32d9b8082b9014a90eb68.jpg'); background-color: rgb(249, 248, 255);"></div>
                    <div class="item-text android">川湘菜</div>
                    <div class="mask"></div>
                </a></li>
                <li class="cate-item-out"><a class="cate-item-inner">
                    <div class="item-icon-more"><p></p></div>
                    <div class="item-text">更多</div>
                    <div class="mask"></div>
                </a></li>
            </ul>
        </div>
        <div class="topline-container"></div>
        <div class="mar8"></div>
        <div class="poi-container">
            <div id="stickyTab" class="sticky">
                <ul id="menuTab" class="menu-container" style="top: 0px;">
                    <li class=""><a href="javascript:;"><span class="txt">全部美食</span></a></li>
                    <li class=""><a href="javascript:;"></a></li>
                    <li class=""><a href="javascript:;"></a></li>
                    <li class=""><a href="javascript:;"></a></li>
                </ul>
            </div>
            <div class="poi-list-container" style="padding-top: 0px;">
                <div class="search-poi-list">
                    <section class="base-new-poi-item border-bottom activebasePoiItem0_1564302986917" onclick="alert('11111')">
                        <div class="item-image"
                             style="background-image: url('https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/nuomi/eWH%3D216%2C140/sign=6f205cf2cdfdfc03f7129eb5e60eb1b8/242dd42a2834349ba4e7c489c7ea15ce37d3bedd.jpg');"></div>
                        <ul class="item-info">
                            <li class="poi-name-line">
                                <div class="poi-title"><span class="poi-name-span android"
                                                             style="max-width: 250.984px;">超市营养果园时尚鲜花</span></div>
                            </li>
                            <li class="poi-star-line">
                                <div class="unscore">暂无评分</div>
                                <div class="item-bizarea">什刹海</div>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="show-more">上拉加载更多</div>
            </div>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath }/statics/js/jquery-1.10.1.min.js"></script>
<script type="text/javascript">


    $(document).ready(function(){
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/category/all/all",//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {
                writeData(data)
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载餐厅失败！" + data);
            }
        });

    });

    function writeData(data) {
        var section = ""
        for (var i = 0; i < data.length ; i++) {

            section += "    <section class=\"base-new-poi-item border-bottom activebasePoiItem0_1564302986917\" onclick='gotoInfo("+data[i].id+")'>" +
                "<div class=\"item-image\"" +
                "        style=\"background-image: url('https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/nuomi/eWH%3D216%2C140/sign=6f205cf2cdfdfc03f7129eb5e60eb1b8/242dd42a2834349ba4e7c489c7ea15ce37d3bedd.jpg');\"></div>\n" +
                "            <ul class=\"item-info\">\n" +
                "            <li class=\"poi-name-line\">\n" +
                "            <div class=\"poi-title\"><span class=\"poi-name-span android\"\n" +
                "        style=\"max-width: 250.984px;\">"+data[i].windowname+
                "</span></div>\n" +
                "        </li>\n" +
                "        <li class=\"poi-star-line\">\n" +
                "            <div class=\"unscore\">"+"4.7分"+
                "</div>\n" +
                "            <div class=\"item-bizarea\">"+data[i].username+
                "</div>\n" +
                "            </li>\n" +
                "            </ul>\n" +
                " </section>"

        }
        $(".search-poi-list").html(section);

    }

    function gotoInfo( id ) {

        window.location.href = "${pageContext.request.contextPath }/windowInfo/"+id;

    }


    // document.addEventListener('DOMContentLoaded', function () {
    //     document.removeEventListener('DOMContentLoaded', arguments.callee, false);
    // }, false);
    // window.onload = function () {
    //     var isIphoneX = /iphone/gi.test(navigator.userAgent) && (window.screen.height == 812 && window.screen.width == 375);
    //     if (isIphoneX) {
    //         document.body.classList.add('isIphoneX');
    //     }
    //     var ispad = /pad/gi.test(navigator.userAgent) && window.screen.width > 600;
    //     if (ispad) {
    //         document.body.classList.add('ispad');
    //     }
    // };


    //文档高度
    function getDocumentTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }
    //可视窗口高度

    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }
    //滚动条滚动高度
    function getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }
    window.onscroll = function () {
        //监听事件内容
        if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
            //当滚动条到底时,这里是触发内容
//            异步请求数据,局部刷新dom
//            var page =$("input[name='push_id']").val();
            var page = parseInt($("#page").val())
            var favorites_id = parseInt($("#favorites_id").val())
            paget = page + 1
            var ajax = new XMLHttpRequest();
            var url = "{:url('请求地址（方法）')}";
            ajax.open('post', url, true);
            ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            ajax.send('page=' + paget+'&favorites_id='+favorites_id+'&type='+1);
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    data = eval("(" + ajax.responseText + ")");
                    if (data.status == 1) {
                        //ajax 返回数据处理
                    } else {

                    }
                }
            }
        }
    };


</script>

</body>
</html>
<%--
  Created by IntelliJ IDEA.
  User: Java
  Date: 2019/8/13
  Time: 16:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html class="ratio--1" style="font-size: 50px;">
<head>
    <meta charset="UTF-8">
    <title>全部订单</title>
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.10.1.min.js"></script>

    <meta name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no">

    <meta name="format-detection" content="telephone=no"><!-- 禁止浏览器自动将手机号码变为拨号链接 -->
    <meta name="format-detection" content="address=no"><!-- 禁止浏览器自动将地址转换 -->

    <style id="styles/eve_webview.css,page/order-center/index.css,component/i-simple-header/index.css,component/i-filter/index.css,component/i-footer/index.css,component/i-order/index.css,vendor/msg.css">

    td, th, ul {
        padding: 0
    }

    .text-block, h6, p {
        text-align: justify
    }

    .select select:focus, .stepper .btn, .stepper input, a, a:active, a:hover, button:focus, input.input-weak:focus {
        outline: 0
    }

    .dropdown-sub-scroller .sub-name, .nav-head-name, .single-line, .toggle-btn {
        white-space: nowrap;
        overflow: hidden
    }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0
    }

    button, html input[type=button], input[type=reset], input[type=submit] {
        -webkit-appearance: button;
        cursor: pointer
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    img {
        vertical-align: middle;
        border: none
    }

    @-ms-viewport {
        width: device-width;
    }

    html {
        font-size: 50px;
        -webkit-tap-highlight-color: transparent;
        height: 100%;
        min-width: 320px;
        overflow-x: hidden
    }

    body {
        margin: 0;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: .28em;
        line-height: 1;
        color: #333;
        background-color: #f0efed
    }

    .btn, .nav-bar .nav {
        -webkit-user-select: none
    }

    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        line-height: 1.1
    }

    .h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {
        font-weight: 400;
        line-height: 1
    }

    .h1, .h2, .h3, h1, h2, h3 {
        margin-top: .28rem;
        margin-bottom: .14rem
    }

    .h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small {
        font-size: 65%
    }

    .h4, .h5, .h6, h4, h5, h6 {
        margin-top: .14rem;
        margin-bottom: .14rem
    }

    .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {
        font-size: 75%
    }

    .h1, h1 {
        font-size: .364rem
    }

    .h2, h2 {
        font-size: .2996rem
    }

    .h3, h3 {
        font-size: .238rem
    }

    .h4, h4 {
        font-size: .175rem
    }

    .h5, h5 {
        font-size: .14rem
    }

    .h6, h6 {
        font-size: .119rem
    }

    h6 {
        margin-top: 0;
        margin-bottom: 0
    }

    button, input, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit
    }

    a {
        color: #06c1ae;
        text-decoration: none
    }

    a:focus {
        outline: dotted thin;
        outline: -webkit-focus-ring-color auto 5px;
        outline-offset: -2px
    }

    a.react, label.react {
        display: block;
        color: inherit;
        height: 100%
    }

    a.react.react-active, a.react:active, label.react:active {
        background: rgba(0, 0, 0, .1)
    }

    ul {
        margin: 0;
        list-style-type: none
    }

    hr {
        margin-top: .28rem;
        margin-bottom: .28rem;
        border: 0;
        border-top: 1px solid #DDD8CE
    }

    h6, p {
        line-height: 1.41;
        margin: -.2em 0;
        word-break: break-all
    }

    small, weak {
        color: #666
    }

    .color-weak {
        color: #666 !important
    }

    .color-weaker {
        color: #999 !important
    }

    .color-strong {
        color: #06c1ae !important
    }

    .color-stronger {
        color: #cc7a00 !important
    }

    .color-ok {
        color: #6bbd00 !important
    }

    .color-warning {
        color: #fa7251 !important
    }

    space {
        display: inline-block;
        width: .12rem
    }

    .clearfix:after, .clearfix:before {
        content: " ";
        display: table
    }

    .clearfix:after {
        clear: both
    }

    .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto
    }

    .pull-right {
        float: right !important
    }

    .pull-left {
        float: left !important
    }

    .hide {
        display: none !important
    }

    .invisible {
        visibility: hidden
    }

    .text-hide {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0
    }

    .userImgbox, .userImgbox img {
        border-radius: 50%
    }

    .single-line {
        text-overflow: ellipsis
    }

    .text-block {
        line-height: 1.41
    }

    .albumContainer .page-number-container, .btn, input.mt.number, ol.crumbs, ol.crumbs li {
        text-align: center
    }

    .nopadding {
        padding: 0 !important
    }

    .nomargin {
        margin: 0 !important
    }

    .strong-color {
        color: #06c1ae
    }

    .more {
        position: relative;
        padding-right: .3rem;
        width: 100%;
        box-sizing: border-box
    }

    .more:after {
        position: absolute;
        right: .05rem;
        top: 50%;
        display: block;
        content: '';
        width: .6em;
        height: .6em;
        border-left: .04rem solid #06c1ae;
        border-bottom: .04rem solid #06c1ae;
        -webkit-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
        -moz-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg);
        -ms-transform: translateY(-50%) scaleY(.7) rotateZ(-135deg)
    }

    .stars, ol.crumbs li {
        display: inline-block
    }

    .flex1, .flex10, .flex11, .flex12, .flex2, .flex3, .flex4, .flex5, .flex7, .flex8, .flex9 {
        width: 1px
    }

    disabled{
        display: none;
    }

    .more-weak:after {
        border-left: .04rem solid #999;
        border-bottom: .04rem solid #999
    }

    .more .more-after {
        position: absolute;
        right: .25rem;
        top: 50%;
        -webkit-transform: translateY(-.5em);
        color: #06c1ae
    }

    .more-weak .more-after {
        color: #999
    }

    .more-down:after {
        -webkit-transform: translateY(-80%) scaleX(.8) rotateZ(-45deg);
        -ms-transform: translateY(-80%) scaleX(.8) rotateZ(-45deg)
    }

    .imgbox {
        background-image: url(data:image/png;base64,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);
        background-color: #E0E0E0;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50%;
        max-width: 4rem;
        position: relative
    }

    .userImgbox {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAAA3NCSVQICAjb4U/gAAABm1BMVEX////q6urJycnq6urJycnq6urJycnq6urd3d3Jycnq6urJycnq6urJycvq6urJycnq6urJycnq6urJycnq6urq6urJycnq6urJycnq6urJycnq6urJycn79/b59vX59fT59fX39PP38/L18fHz8O/y7+/z7+/x7u3w7ezx7e3t6+rv6+vq6urt6unp6enr6ejr6enn5+fq5+fp5+fp5ubl5eXn5eXn5OPj4+Pl4+Pl4+Lh4eHj4eHf39/i39/h39/d3d3f3d7f3d3e3Nvb29vd29rd29vZ2dnZ2drb2drb2dnY2NnZ2NfX19fZ19fV1dbX1dXV1dXU1NXV1NPV1NXT09PV09PR0dHR0dLR0M/Pz8/Pz9DPzs3MzMzJycnJycvLycnHx8fFxcbGxcXExMXDw8PExMPBwcHBwcK/v8C/v7+9vb69vb2+vb28vb27u7u6u7u5ubq6urm5ubm4ubm5t7e1t7e2t7e1tbSztLSys7OxsbCvsLCvr6+tr6+srK2rq6yqq6upqaqnp6ekpaWjpKSio6OhoaGgoaGh6GQLAAAAiXRSTlMAEREiIjMzREREVVVmZnd3iIiZmaq7u8zM3d3u7v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////54pIicAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAF3RFWHRDcmVhdGlvbiBUaW1lADIwMTUuNS4xNBgX2AIAAAgTSURBVGiBvVr5XxNHFIdiasVUIoYjhoUSQGgag0FAlMOgUFBYoyACYXfW0KThKh6lWKm11R76ZzfZfTM752ZzfPr9ic9k5n15b94x82abmqpCS6A1FO6KRBOJaKQrHGoNtFS33j+az7eXWERE2883N5orEJJSEcpQoIFcYS8qjHBDGJuDnnoxOgbrtWpzyC+Xg1A9hNWS1UcYrJ6sjGBNZC2R2tgSiUgNwdheK1kZ7f+barUo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);
        background-size: cover
    }

    .imgbox img {
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%)
    }

    .stars {
        color: #f90
    }

    .stars i {
        margin-right: .2em;
        vertical-align: 0rem
    }

    .btn, .stars em, input.mt.number, label.mt {
        vertical-align: middle
    }

    .stars em {
        font-style: normal;
        margin-left: .4em
    }

    ol.crumbs {
        list-style: none;
        padding-left: 0;
        margin: 0
    }

    ol.crumbs li + li {
        margin-left: .6rem;
        position: relative
    }

    ol.crumbs li.active {
        color: #06c1ae
    }

    ol.crumbs li + li:before {
        content: ">";
        display: block;
        position: absolute;
        left: -.4rem;
        font-weight: bolder;
        color: #aaa
    }

    .hBox, .vBox {
        display: -webkit-flex;
        display: -webkit-box
    }

    .hBox {
        -webkit-box-orient: horizontal
    }

    .vBox {
        -webkit-box-orient: vertical
    }

    .flex1 {
        -webkit-box-flex: 1
    }

    .flex2 {
        -webkit-box-flex: 2
    }

    .flex3 {
        -webkit-box-flex: 3
    }

    .flex4 {
        -webkit-box-flex: 4
    }

    .flex5 {
        -webkit-box-flex: 5
    }

    .flex6 {
        -webkit-box-flex: 6;
        width: 1px
    }

    .flex7 {
        -webkit-box-flex: 7
    }

    .flex8 {
        -webkit-box-flex: 8
    }

    .flex9 {
        -webkit-box-flex: 9
    }

    .flex10 {
        -webkit-box-flex: 10
    }

    .flex11 {
        -webkit-box-flex: 11
    }

    .flex12 {
        -webkit-box-flex: 12
    }

    input.mt[type=radio], input.mt[type=checkbox] {
        -webkit-appearance: none;
        width: .45rem;
        height: .45rem;
        margin: -.07rem 0;
        border-radius: 50%;
        border: .02rem solid #DDD8CE;
        text-align: center;
        vertical-align: middle;
        line-height: .45rem;
        outline: 0
    }

    input.mt[type=checkbox] {
        border-radius: .06rem
    }

    label.mt {
        margin-right: .16rem;
        font-size: .3rem
    }

    label.btn input {
        display: none
    }

    input.mt[type=radio]:checked, input.mt[type=checkbox]:checked {
        background-color: #06c1ae;
        border: none;
        color: #fff
    }

    input.mt[type=radio]:checked:after, input.mt[type=checkbox]:checked:after {
        content: "✓";
        font-size: .4rem;
        font-family: base_icon
    }

    .select::after, .toggle-btn:after {
        content: ''
    }

    .mt[disabled=disabled] {
        background: #eee;
        border-color: #ccc;
        color: #ccc
    }

    input.input-weak, textarea.input-weak {
        border: none;
        height: .6rem;
        margin: -.15rem 0;
        text-indent: .1rem;
        line-height: 1;
        font-size: .3rem;
        border-radius: .06rem;
        padding: 0
    }

    input.input-strong, input.mt.number {
        border: .02rem solid #DDD8CE;
        box-sizing: border-box
    }

    input.input-strong {
        height: .8rem;
        line-height: .8rem;
        width: 100%;
        padding: 0 .2rem
    }

    input.input-weak:focus {
        background: #ececec
    }

    textarea.input-weak {
        padding: 0;
        margin: -.2em 0;
        line-height: 1.41;
        height: 2.8em
    }

    input.mt.number {
        -webkit-appearance: initial;
        height: .6rem;
        display: inline-block;
        border-radius: .06rem;
        line-height: .6rem;
        width: 1.2rem
    }

    .stepper .btn {
        width: .6rem;
        padding: 0;
        font-size: .5rem;
        line-height: .6rem;
        font-weight: lighter;
        font-family: CourierNewPSMT, "Times New Roman"
    }

    .select, .select select {
        width: 100%;
        display: block
    }

    .stepper .btn.minus {
        font-family: CourierNewPSMT, Verdana
    }

    .select {
        height: .6rem;
        margin: -.15rem 0;
        position: relative
    }

    .select select {
        text-indent: .1rem;
        line-height: 1;
        -webkit-appearance: none;
        border: none;
        background: 0 0;
        font-size: .3rem;
        height: 100%
    }

    .select select:focus {
        background: #ececec
    }

    .select::after {
        display: inline-block;
        position: absolute;
        top: 50%;
        right: .2rem;
        width: .5em;
        height: .5em;
        border-bottom: .03rem solid #999;
        border-left: .03rem solid #999;
        -webkit-transform: translateY(-70%) rotateZ(-45deg);
        -moz-transform: translateY(-70%) rotateZ(-45deg);
        -ms-transform: translateY(-70%) rotateZ(-45deg)
    }

    .albumContainer, .page {
        height: 100%;
        left: 0;
        top: 0;
        width: 100%
    }

    .albumContainer {
        position: fixed;
        background: #000;
        z-index: 1000;
        display: none
    }

    .page {
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        overflow: hidden;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -ms-box-align: center;
        -ms-flex-pack: justify
    }

    .page.next {
        -webkit-transform: translateX(105%);
        -ms-transform: translateX(105%)
    }

    .page.prev {
        -webkit-transform: translateX(-105%);
        -ms-transform: translateX(-105%)
    }

    .page.next2 {
        -webkit-transform: translateX(210%);
        -ms-transform: translateX(210%)
    }

    .page.prev2 {
        -webkit-transform: translateX(-210%);
        -ms-transform: translateX(-210%)
    }

    .page.current {
        z-index: 2
    }

    .automove .page {
        -webkit-transition: -webkit-transform .2s
    }

    .albumContainer .page img {
        display: block
    }

    .albumContainer .page-number-container {
        z-index: 2;
        position: absolute;
        color: #fff;
        font-size: .4rem;
        left: 0;
        top: 0;
        width: 100%;
        margin-top: .3rem
    }

    .albumContainer .page-number {
        padding: .2rem;
        background: rgba(0, 0, 0, .5)
    }

    .btn {
        display: inline-block;
        margin: 0;
        height: .6rem;
        padding: 0 .32rem;
        border-radius: .06rem;
        color: #fff;
        border: none;
        background-color: #06c1ae;
        font-size: .28rem;
        line-height: .6rem;
        box-sizing: border-box;
        cursor: pointer
    }

    .btn-block {
        display: block;
        width: 100%
    }

    .btn-large {
        height: .8rem;
        line-height: .8rem;
        font-size: .4rem
    }

    .btn-large.btn-link {
        font-size: .3rem
    }

    .btn-larger {
        height: .94rem;
        line-height: .94rem;
        font-size: .4rem
    }

    .toggle-btn, .toggle-btn:after {
        display: inline-block;
        height: .58rem
    }

    .btn:active {
        background-color: #21897d
    }

    .btn-weak {
        border: .02rem solid #06c1ae;
        padding: 0 .3rem;
        background: 0 0;
        color: #06c1ae
    }

    .btn-weak:active {
        color: #fff;
        background: #06c1ae
    }

    .btn-link {
        padding: 0 .3rem;
        background: 0 0;
        color: #06c1ae
    }

    .btn-link:active {
        background-color: rgba(0, 0, 0, .1)
    }

    .btn-weak.color-strong {
        border-color: #f90;
        color: #f90 !important
    }

    .btn-weak.color-strong:active {
        background-color: #f90;
        color: #fff
    }

    .btn-strong {
        background-color: #f90
    }

    .btn-strong:active {
        background-color: #cc7a00
    }

    .btn-warning {
        background-color: #fa7251
    }

    .btn-warning:active {
        background-color: #f94a1f
    }

    .btn.btn-disabled, .btn:disabled {
        background-color: #dcdcdc;
        color: #999;
        border: none
    }

    .toggle-btn {
        width: 1rem;
        border-radius: 1rem;
        border: .04rem solid #DDD8CE;
        background: #eee;
        padding: 0;
        box-sizing: content-box;
        text-align: left;
        position: relative
    }

    dl.list, dl.list dd, dl.list dt {
        border-bottom: 1px solid #DDD8CE
    }

    .box-btn, .tab li, .taba li {
        text-align: center
    }

    .toggle-btn:after {
        width: .58rem;
        background-color: #fff;
        border-radius: 50%;
        position: absolute
    }

    .toggle-btn.active {
        background-color: #06c1ae
    }

    .toggle-btn.active:after {
        right: 0
    }

    .wrapper {
        overflow: hidden;
        padding: 0 .2rem
    }

    .wrapper h4 {
        font-size: .3rem
    }

    .wrapper-list h4 {
        margin: .6rem .2rem .2rem;
        font-size: .34rem;
        font-weight: 400
    }

    .weapper-list h4:first-of-type {
        margin-top: .3rem
    }

    .box {
        padding: .28rem .2rem;
        border: 1px solid #DDD8CE;
        border-radius: .06rem;
        overflow: hidden;
        background-color: #FDFDFC
    }

    .box-btn {
        padding: 0
    }

    .box-btn a {
        padding: .2rem
    }

    dl.list {
        border-top: 1px solid #DDD8CE;
        margin-top: .2rem;
        margin-bottom: 0;
        background-color: #fff
    }

    dl.list dd, dl.list dt {
        margin: 0;
        overflow: hidden;
        font-size: inherit;
        font-weight: 400;
        position: relative
    }

    dl.list dd:last-of-type, dl.list dt:last-child {
        border-bottom: none
    }

    dl.list .dd-padding, dl.list dd > .react, dl.list dt {
        padding: .28rem .2rem
    }

    dl.list dd.poi-list-item > .react {
        padding-bottom: .2rem;
        padding-top: .2rem
    }

    dl.list dt {
        font-size: .34rem;
        padding-bottom: .2rem;
        color: #333
    }

    dl.list .db {
        height: .8rem;
        line-height: .8rem;
        font-size: .3rem
    }

    dl.list dd dl {
        margin: 0 0 -1px;
        padding-left: .2rem;
        border: none
    }

    dl.list dd dl dd > .react, dl.list dd dl > .dd-padding, dl.list dd dl > dt {
        padding-left: 0
    }

    dl.list .db > .react {
        color: #06c1ae;
        padding: 0 .2rem
    }

    dl.list .posi-right-bottom {
        position: absolute;
        bottom: .26rem;
        right: .2rem
    }

    .taba, .taba li {
        position: relative
    }

    dl.list .statusInfo {
        color: #666;
        font-size: .24rem
    }

    dl.list-in, dl.list:first-child {
        margin: 0;
        border-top: 0
    }

    dl.list dd > .input-weak {
        width: 100%;
        display: block
    }

    dl.list dd > .btn {
        margin-top: -.15rem;
        margin-bottom: -.15rem
    }

    .kv-line {
        display: -webkit-box;
        display: -ms-flexbox;
        margin: .2rem 0
    }

    .kv-line > .kv-k, .kv-line > h6 {
        display: block;
        width: 5em;
        font-size: inherit;
        font-weight: 400
    }

    .kv-line > .kv-v, .kv-line > p {
        display: block;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1
    }

    .kv-line-r {
        display: -webkit-box;
        display: -ms-flexbox;
        margin: .2rem 0
    }

    .kv-line-r > .kv-k, .kv-line-r > h6 {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        font-size: inherit;
        font-weight: 400;
        margin-right: .2rem;
        display: block
    }

    .kv-line-r > .kv-v, .kv-line-r > p {
        display: block
    }

    .tab li, ul.tab {
        display: inline-block
    }

    ul.tab {
        height: .6rem;
        line-height: .6rem;
        border-radius: .04rem;
        border: 1px solid #666
    }

    .tab li {
        width: 2.4rem;
        border-right: 1px solid #666
    }

    .tab li:last-child {
        border: none
    }

    .tab li.active {
        background: #666;
        color: #fff
    }

    .nav-bread, .nav-bread h1, .taba li.active, ul.tab-strong {
        color: #06c1ae
    }

    ul.tab-strong {
        border-color: #06c1ae
    }

    .tab-strong li {
        border-right-color: #06c1ae
    }

    .tab-strong li.active {
        background: #06c1ae
    }

    .taba {
        display: -webkit-box;
        display: -ms-flexbox;
        padding-left: .2rem;
        padding-right: .2rem;
        border-bottom: .08rem solid #DDD8CE
    }

    .taba li {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1
    }

    .taba .slide, .taba li.active:after {
        position: absolute;
        bottom: -.08rem;
        border-bottom: .08rem solid #06c1ae
    }

    .taba li.active:after {
        content: "";
        display: block;
        width: 100%
    }

    .taba li a.react {
        padding-top: .28rem;
        padding-bottom: .2rem
    }

    .taba.noslide li.active:after {
        content: none
    }

    .taba .slide {
        -webkit-transition: left .2s ease-in
    }

    .nav-bread {
        padding: .3rem .2rem 0;
        margin-bottom: .3rem;
        font-size: .24rem
    }

    .nav-bread h1 {
        font-size: .24rem;
        font-weight: 400;
        display: inline
    }

    .cinemacard, .dealcard {
        position: relative;
        box-sizing: border-box;
        margin: -.08rem 0
    }

    .dealcard .dealcard-new {
        position: absolute;
        right: -.2rem;
        top: -.2rem;
        padding-right: .08rem;
        font-size: .24rem;
        height: .28rem;
        line-height: .28rem;
        width: .6rem;
        background: #06c1ae;
        color: #fff;
        text-align: right
    }

    .dealcard .dealcard-nobooking {
        position: absolute;
        overflow: hidden;
        width: 1rem;
        height: 1rem;
        z-index: 1
    }

    .dealcard .dealcard-nobooking:after {
        content: "免预约";
        font-size: .24rem;
        background: #06c1ae;
        color: #fff;
        padding: .05rem;
        position: absolute;
        width: 1.3rem;
        text-align: center;
        -webkit-transform: rotateZ(-45deg);
        left: -.35rem;
        top: .2rem
    }

    .dealcard .dealcard-new:before {
        position: absolute;
        content: '';
        display: block;
        top: 0;
        left: -.2rem;
        border: .14rem solid #06c1ae;
        border-left: .14rem solid transparent
    }

    .dealcard-img {
        position: absolute;
        width: 1.8rem;
        height: 1.64rem;
        text-align: center;
        overflow: hidden
    }

    .dealcard-img > img {
        background-size: 100%;
        background-color: #f0efed;
        border: none
    }

    .dealcard .dealcard-block-right {
        margin-left: 2rem;
        position: relative;
        height: 1.64rem
    }

    .cinemacard .cinemacard-brand, .dealcard .dealcard-brand {
        padding-top: .1rem;
        margin-bottom: .12rem;
        font-size: .3rem;
        font-weight: 400;
        color: #333
    }

    .cinemacard .cinemacard-brand {
        padding-top: 0
    }

    .cinemacard .title, .dealcard .title {
        font-size: .24rem;
        height: .68rem;
        margin-bottom: .16rem;
        color: #666;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden
    }

    .cinemacard .price, .dealcard .price {
        color: #666;
        position: relative
    }

    .dealcard .price {
        position: absolute;
        width: 100%;
        bottom: 0
    }

    .dealcard .price > del, .dealcard .price > span {
        vertical-align: sub
    }

    .cinemacard .price .strong, .cinemacard .price > strong, .dealcard .price .strong, .dealcard .price > strong {
        font-size: .38rem;
        color: #06c1ae
    }

    .cinemacard .price del, .dealcard .price del {
        font-size: .24rem
    }

    .cinemacard .price > .strong-color, .dealcard .price > .strong-color {
        font-size: .26rem;
        color: #06c1ae
    }

    .cinemacard .price .line-right, .dealcard .line-right {
        position: absolute;
        top: .04rem;
        right: 0;
        font-size: .24rem
    }

    .dealcard .tag, .poi-dealcard .tag {
        border: .02rem solid #f90;
        color: #f90;
        line-height: 1.5;
        display: inline-block;
        padding: 0 .06rem;
        font-size: .22rem;
        border-radius: .06rem
    }

    .simpleCard .dealcard .dealcard-block-right {
        margin-left: .45rem;
        margin-right: .2rem
    }

    .more .dealcard .line-right {
        display: none
    }

    .cinemacard .cinemacard-brand, .cinemacard .cinemacard-type, .dealtype-icon, .loadmore .more {
        display: inline-block
    }

    .simpleCard .title {
        font-size: .3rem;
        height: .78rem
    }

    .dealcard .dealtype-icon {
        position: absolute;
        top: .03rem
    }

    .dealtype-icon {
        background-color: #06c1ae;
        color: #fff;
        font-size: .24rem;
        padding: .05rem;
        border-radius: .06rem;
        vertical-align: text-bottom;
        line-height: 1
    }

    .dealtype-icon.dealcard-magiccard {
        background-color: #FF500B
    }

    .cinemacard .cinemacard-type {
        vertical-align: top;
        margin-top: .14rem
    }

    .tuangou, .xuanzuo {
        padding: .02rem .04rem;
        border-radius: 20%;
        color: #fff
    }

    .tuangou {
        background: #06c1ae
    }

    .xuanzuo {
        background: #e95200
    }

    .loadmore {
        text-align: center
    }

    .loadmore .more {
        padding-right: .45rem;
        width: auto
    }

    .preferent::before {
        content: '惠';
        font-size: .28rem;
        background: #f90;
        color: #fff;
        font-weight: 400;
        margin-right: .2rem;
        padding: .02rem .04rem;
        border-radius: 20%;
        vertical-align: middle
    }

    .cinemacard .stars {
        margin-top: .16rem;
        margin-bottom: .12rem
    }

    #deal-list-abtest .poi-list-item .dealcard-img {
        width: 1.63rem;
        height: 1.45rem;
        margin: -.08rem 0
    }

    #deal-list-abtest .poi-list-item .info-right {
        margin-left: 1.84rem;
        height: 1.3rem
    }

    #deal-list-abtest .poi-list-item .name-line {
        height: .55rem
    }

    #deal-list-abtest .poi-list-item .score-line {
        margin-bottom: .24rem
    }

    #deal-list-abtest .poi-list-item .addr-line {
        font-size: .24rem;
        color: #666
    }

    #deal-list-abtest .poi-dealcard .left {
        display: inline-blcok;
        width: 1.52rem;
        height: .88rem
    }

    #deal-list-abtest .poi-dealcard .right {
        display: block;
        position: absolute;
        right: .2rem;
        bottom: .18rem;
        top: .18rem;
        left: 1.74rem
    }

    #deal-list-abtest .poi-dealcard strong {
        font-size: .4rem
    }

    #deal-list-abtest .poi-dealcard .color-strong {
        display: block;
        margin-bottom: .2rem
    }

    #deal-list-abtest .poi-dealcard del {
        color: #666;
        font-size: .24rem
    }

    #deal-list-abtest .poi-dealcard h6 {
        font-size: .26rem;
        height: .74rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden
    }

    #deal-list-abtest .poi-dealcard .right small {
        float: right
    }

    #deal-list-abtest .list-poi dl {
        padding-left: .3rem
    }

    #deal-list-abtest .list-poi dl a.react {
        padding-top: .18rem;
        padding-bottom: .18rem
    }

    #deal-list .poi-list-item .kv-line-r, #search .poi-list-item .kv-line-r {
        margin-top: .1rem;
        margin-bottom: 0;
        -webkit-box-align: center
    }

    #deal-list .poi-list-item h6, #search .poi-list-item h6 {
        overflow: hidden;
        text-overflow: ellipsis
    }

    #deal-list .poi-list-item .poiname, #search .poi-list-item .poiname {
        font-size: .3rem
    }

    #deal-list .poi-list-item p, #search .poi-list-item p {
        font-size: .24rem;
        color: #666
    }

    #deal-list .dealcard-poi .title, #search .dealcard-poi .title {
        font-size: .3rem;
        color: #333;
        height: .8rem;
        margin-bottom: .32rem;
        line-height: 1.41
    }

    .poi-list-item {
        position: relative
    }

    .poi-list-item p[data-com=redirect] {
        position: absolute;
        right: .2rem;
        bottom: .2rem;
        font-size: .24rem;
        color: #666
    }

    .poi-list-item p[data-com=redirect] a {
        color: #666
    }

    .feedbackCard .userInfo {
        margin-bottom: .12rem;
        font-size: .24rem
    }

    .feedbackCard .time {
        color: #999
    }

    .feedbackCard .score {
        margin-bottom: .4rem;
        font-size: .24rem
    }

    .feedbackCard .stars {
        font-size: .28rem;
        margin-right: .2rem;
        vertical-align: bottom
    }

    .feedbackCard .comment {
        margin-bottom: .22rem;
        font-size: .3rem
    }

    .feedbackCard .comment-rich {
        display: inline-block;
        width: 1.1rem;
        height: .36rem;
        line-height: .36rem;
        vertical-align: text-bottom;
        text-align: center;
        font-size: .24rem;
        border-radius: .06rem;
        background-color: #06c1ae;
        color: #fff
    }

    .feedbackCard .pics {
        margin-bottom: .26rem
    }

    .feedbackCard .pics .pic-container {
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
        margin-bottom: .14rem;
        overflow: hidden;
        text-align: center;
        vertical-align: top
    }

    .block-reply {
        color: #666;
        margin-top: .2rem;
        background-color: #F7F7F6;
        padding: .2rem;
        position: relative;
        border-radius: .06rem
    }

    .block-reply:before {
        content: "";
        display: block;
        position: absolute;
        width: .2rem;
        height: .2rem;
        top: -.1rem;
        left: .5rem;
        background-color: #F7F7F6;
        -webkit-transform: rotateZ(45deg);
        -moz-transform: rotateZ(45deg);
        -ms-transform: rotateZ(45deg)
    }

    .block-reply .reply-time {
        float: right;
        color: #999
    }

    .block-reply-head {
        border-bottom: 1px solid #E0DDD7;
        font-size: .24rem;
        padding-bottom: .2rem
    }

    .block-reply p {
        margin-top: .2rem;
        font-size: .3rem;
        color: #ED852C
    }

    .icon-toggle-arrow {
        float: right;
        width: 2em;
        text-align: center
    }

    .toggleContent.active .icon-toggle-arrow:after {
        top: 0;
        -webkit-transform: rotateZ(135deg);
        -moz-transform: rotateZ(135deg);
        -ms-transform: rotateZ(135deg)
    }

    .toggleContent .feedbackmore {
        display: none
    }

    .toggleContent.active .feedbackmore {
        display: inline
    }

    .toggleContent.active .icon-ell {
        display: none
    }

    .deal-container {
        position: relative
    }

    .no-deals {
        padding-top: .6rem;
        padding-bottom: 1.25rem;
        font-size: .32rem;
        text-align: center;
        margin: 0
    }

    .pager {
        padding: .2rem;
        padding-top: .16rem;
        padding-bottom: .16rem
    }

    .pager-current {
        color: #666;
        display: inline-block;
        width: .45rem;
        text-align: center
    }

    .loading, .shade {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .7);
        z-index: 20
    }

    .loading .loading-spin {
        position: absolute;
        left: 50%;
        font-size: .6rem;
        margin-left: -.15rem
    }

    .dropdown-wrapper, .nav-bar {
        position: relative
    }

    .nav-bar {
        z-index: 30
    }

    .nav-bar .nav {
        display: -webkit-box;
        display: -ms-flexbox;
        background: #FFF;
        border-bottom: 1px solid #c6c0b3;
        text-align: center;
        height: .84rem;
        line-height: .84rem
    }

    .dropdown-toggle {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        border-left: 1px solid #c6c0b3;
        width: 100%;
        text-align: left;
        text-align: center;
        color: #666
    }

    .dropdown-toggle.active, .sort-wrapper li.active {
        color: #06c1ae
    }

    .dropdown-toggle:first-child {
        border: none
    }

    .dropdown-toggle.caret.active:after, .dropdown-toggle.caret:after {
        border-left: .09rem solid transparent;
        border-right: .09rem solid transparent
    }

    .dropdown-toggle.caret:after {
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border-top: .15rem solid #B7B7B7;
        border-bottom: none;
        margin-left: .12rem
    }

    .dropdown-toggle.caret.active:after {
        border-top: none;
        border-bottom: .15rem solid #06c1ae;
        margin-bottom: .04rem
    }

    .biz .sub-nav, .subway .sub-nav {
        display: block
    }

    .nav-head-name {
        display: inline-block;
        max-width: 80%;
        vertical-align: middle;
        text-overflow: ellipsis
    }

    .biz-wrapper, .brand-wrapper, .category-wrapper, .csp-wrapper, .floor-wrapper, .sort-wrapper, .sub-nav, .subway-wrapper {
        display: none
    }

    .sub-nav {
        background: #FEFEFE;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #c6c0b3;
        text-align: center
    }

    .dropdown-module {
        position: absolute;
        width: 100%;
        height: 0;
        overflow: hidden;
        -webkit-transition: height .3s
    }

    .scroller-wrapper {
        position: relative
    }

    .scroller-wrapper .dropdown-scroller {
        width: 100%;
        background: #f6f4f0
    }

    .scroller-wrapper .dropdown-scroller ul {
        width: 100%;
        background: #FFF
    }

    .scroller-wrapper .dropdown-sub-scroller {
        position: absolute;
        top: 0;
        right: 0;
        left: 100%;
        bottom: 0;
        border-left: 1px solid #ddd8cd;
        background: #f6f4f0
    }

    .biz-wrapper.active, .brand-wrapper.active, .category-wrapper.active, .csp-wrapper.active, .floor-wrapper.active, .sort-wrapper.active, .subway-wrapper.active {
        display: block
    }

    .dropdown-list {
        width: 100%
    }

    .dropdown-list > li {
        -webkit-transform: translate3d(0, 0, 0);
        border-bottom: 1px solid #ddd8cd;
        line-height: .87rem;
        height: .87rem;
        position: relative
    }

    .dropdown-list > li.active {
        background: #f6f4f0
    }

    .dropdown-list > li:last-child {
        border-bottom: none
    }

    .dropdown-sub-scroller li.active {
        border-left: none
    }

    .dropdown-list span {
        text-align: left;
        margin: 0;
        margin-left: .4rem
    }

    .dropdown-list .quantity {
        display: inline-block;
        text-align: right;
        margin-right: .16rem;
        font-size: .22rem;
        position: absolute;
        right: 0;
        top: .3rem
    }

    #tips, .top-btn {
        text-align: center
    }

    .dropdown-sub-scroller .sub-quantity {
        color: #B4B4B4;
        position: absolute;
        margin-right: .16rem;
        right: 0;
        top: 0
    }

    .dropdown-sub-scroller .sub-name {
        display: block;
        margin-right: .6rem;
        text-overflow: ellipsis
    }

    .dropdown-sub-scroller .dropdown-list > li:active .sub-quantity {
        color: #FFF
    }

    .dropdown-list .quantity > b {
        font-weight: 400;
        background: #CCC;
        border-radius: .8rem;
        padding: 0 .14rem;
        color: #FFF;
        line-height: .28rem;
        font-size: .24rem;
        height: .28rem;
        float: right
    }

    .right-arrow-point-right .quantity > b:after {
        content: '>';
        -webkit-transform: scale(.8, 1.5);
        padding-left: 7px;
        font-family: simsun
    }

    .geo-addr {
        padding-left: .2rem;
        height: .8rem;
        line-height: .8rem;
        margin: 0;
        border-bottom: 1px solid #DDD8CE;
        color: #999
    }

    .geo-addr .kv-v {
        position: relative;
        padding-right: .2rem;
        padding-left: .5rem
    }

    .csp-wrapper .kv-line-r {
        margin: 0
    }

    .csp-wrapper .footer {
        background-color: #f6f4f0
    }

    .csp-wrapper .radioarea {
        margin-left: -.06rem;
        margin-right: -.06rem;
        margin-bottom: -.2rem
    }

    .csp-wrapper .dd-padding label.btn {
        margin: 0;
        margin-left: .06rem;
        margin-right: .06rem;
        margin-bottom: .2rem;
        min-width: 1.4rem;
        padding: 0 .2rem
    }

    .csp-wrapper .checklist h6 {
        font-size: .28rem;
        font-weight: 400;
        margin-bottom: .3rem
    }

    .merchant {
        display: -webkit-box;
        display: -ms-flexbox;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-box-align: center
    }

    .merchant .biz-detail {
        -webkit-box-flex: 1;
        -ms-box-flex: 1
    }

    .merchant .biz-detail h5 {
        font-size: .32rem;
        margin-top: 0;
        margin-bottom: .18rem;
        color: #000
    }

    .merchant .biz-detail .address {
        padding-right: .2rem;
        color: #666
    }

    .merchant .biz-call {
        width: 1.4rem;
        text-align: center;
        border-left: 1px solid #DDD8CE;
        font-size: .5rem;
        height: 1.2rem;
        line-height: 1.2rem;
        color: #06c1ae
    }

    .merchant .dist {
        margin-top: .2rem;
        color: #666
    }

    .merchant .dist .dist-text {
        margin-left: .12rem
    }

    @font-face {
        font-family: cate_icon;
        src: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:styles/fonts/cate4.woff@4b49aac) format("woff"), url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:styles/fonts/cate4.otf@4b49aac)
    }

    @font-face {
        font-family: base_icon;
        src: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:assets/5082119ba1604062.woff@4b49aac) format("woff"), url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:assets/5082119ba1604062.otf@4b49aac)
    }

    @font-face {
        font-family: sm_icon;
        src: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:styles/fonts/shoppingcenter.woff@4b49aac) format("woff"), url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:styles/fonts/shoppingcenter.otf@4b49aac)
    }

    @-webkit-keyframes rotateing-anim {
        0% {
            -webkit-transform: rotate(0)
        }
        100% {
            -webkit-transform: rotate(360deg)
        }
    }

    @keyframes rotateing-anim {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0)
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    .text-icon {
        font-family: base_icon;
        display: inline-block;
        vertical-align: middle;
        font-style: normal
    }

    .loading-spin {
        opacity: .8;
        display: inline-block;
        border-radius: 50%;
        width: .25em;
        height: .25em;
        box-shadow: 0 -.4em 0 0 #fff, -.28em -.28em 0 0 rgba(255, 255, 255, .75), -.4em 0 0 0 rgba(255, 255, 255, .5), -.28em .28em 0 0 rgba(255, 255, 255, .25);
        -webkit-animation: .85s rotateing-anim steps(8) infinite;
        animation: .85s rotateing-anim steps(8) infinite
    }

    .icon-refresh {
        width: 1em;
        height: 1em;
        position: relative
    }

    .icon-refresh:after, .icon-refresh:before {
        content: "";
        position: absolute
    }

    .icon-refresh:before {
        box-sizing: border-box;
        width: 1em;
        height: 1em;
        border: .1em solid #999;
        border-top: .1em solid transparent;
        border-radius: 50%;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        display: inline-block;
        top: 0
    }

    .icon-refresh:after {
        border: .25em solid transparent;
        border-left: .25em solid #999;
        top: -.2em;
        left: .5em
    }

    .icon-downarrow:after, .icon-toggle-arrow:after {
        content: '';
        display: inline-block;
        top: -.2em;
        width: .5em;
        height: .5em
    }

    .icon-downarrow, .icon-downarrow:after, .icon-toggle-arrow, .text-icon.icon-back {
        position: relative
    }

    .icon-downarrow:after {
        border-bottom: .03rem solid #fff;
        border-left: .03rem solid #fff;
        -webkit-transform: scaleX(.7) rotateZ(-45deg);
        -moz-transform: scaleX(.7) rotateZ(-45deg);
        -ms-transform: scaleX(.7) rotateZ(-45deg)
    }

    .icon-toggle-arrow:after {
        position: relative;
        border-bottom: .03rem solid #C3C5C9;
        border-left: .03rem solid #C3C5C9;
        -webkit-transform: rotateZ(-45deg);
        -moz-transform: rotateZ(-45deg);
        -ms-transform: rotateZ(-45deg)
    }

    .icon-ell:after {
        content: "...";
        display: inline
    }

    .text-icon.icon-back:after, .text-icon.icon-back:before {
        content: '';
        display: block
    }

    .text-icon.icon-back {
        width: .45rem;
        height: .45rem;
        vertical-align: middle
    }

    .text-icon.icon-back:before {
        position: absolute;
        left: .07rem;
        top: 0;
        width: .4rem;
        height: .4rem;
        border-bottom: .04rem solid #fff;
        border-left: .04rem solid #fff;
        -webkit-transform: scaleY(.7) rotateZ(45deg);
        -moz-transform: scaleY(.7) rotateZ(45deg);
        -ms-transform: scaleY(.7) rotateZ(45deg)
    }

    .text-icon.icon-back:after {
        position: absolute;
        top: .2rem;
        left: .03rem;
        height: 0;
        width: .45rem
    }

    .text-icon.icon-star:after {
        content: '★'
    }

    .text-icon.icon-star-empty:after {
        content: '☆'
    }

    .text-icon.icon-star-gray:after, .text-icon.icon-star-half:after {
        content: '★'
    }

    .text-icon.icon-star-half {
        position: absolute;
        left: 0;
        width: .55em;
        overflow: hidden
    }

    .text-icon.icon-star-gray {
        position: relative
    }

    .text-icon.icon-star-gray:after {
        color: #E2E2E2
    }

    .text-icon.icon-share:after {
        content: '⎋'
    }

    .text-icon.icon-card:after {
        content: "▭"
    }

    #tips {
        display: none;
        font-size: .26rem;
        background-color: #FFF6E0;
        color: #D78900;
        border-bottom: 1px solid #FFEBC8;
        padding: .2rem;
        line-height: 1.4
    }

    #tips.tips-err {
        display: block
    }

    .btn-wrapper {
        margin: .28rem .2rem
    }

    .banner img {
        width: 6.4rem
    }

    .banner {
        height: 1rem
    }

    #meituan_check {
        height: 0;
        overflow: hidden
    }

    .top-btn {
        display: none;
        position: fixed;
        right: .3rem;
        bottom: 1.5rem;
        width: .86rem;
        height: .86rem;
        line-height: .86rem;
        background: #06c1ae;
        z-index: 130;
        border-radius: 50%;
        color: #fff;
        overflow: hidden;
        font-size: .5rem
    }

    .level-icon {
        display: inline-block;
        width: .31rem;
        height: .3rem;
        background: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:styles/fonts/vipicon.png@4b49aac);
        background-size: .3rem
    }

    .level1 {
        background-position-y: -.32rem
    }

    .level2 {
        background-position-y: -.64rem
    }

    .level3 {
        background-position-y: -.95rem
    }

    .level4 {
        background-position-y: -1.26rem
    }

    .level5 {
        background-position-y: -1.59rem
    }

    .level6 {
        background-position-y: -1.9rem
    }

    .order-container, .tablist {
        box-sizing: border-box;
        background: #fff
    }

    .sp-order-center {
        background-image: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:assets/5ceecc08a1760b20.png@82580f0)
    }

    .sp-order-center__01 {
        background-position: 68.23529% 0;
        background-size: 403.57143%;
        width: 56px;
        height: 50px
    }

    .sp-order-center__02, .sp-order-center__03, .sp-order-center__04 {
        background-size: 403.57143%;
        width: 56px;
        height: 48px
    }

    .sp-order-center__02 {
        background-position: 35.29412% 100%
    }

    .sp-order-center__03 {
        background-position: 68.23529% 46.55172%
    }

    .sp-order-center__04 {
        background-position: 0 100%
    }

    .sp-order-center__coupon {
        background-position: 0 0;
        background-size: 418.51852%;
        width: 54px;
        height: 54px
    }

    .sp-order-center__delete {
        background-position: 96.7033% 45%;
        background-size: 513.63636%;
        width: 44px;
        height: 44px
    }

    .sp-order-center__down {
        background-position: 97.08738% 70.83333%;
        background-size: 1130%;
        width: 20px;
        height: 20px
    }

    .sp-order-center__gift, .sp-order-center__order, .sp-order-center__score {
        background-size: 418.51852%;
        width: 54px;
        height: 54px
    }

    .sp-order-center__gift {
        background-position: 33.72093% 0
    }

    .sp-order-center__order {
        background-position: 0 52.72727%
    }

    .sp-order-center__score {
        background-position: 33.72093% 52.72727%
    }

    .sp-order-center__spinner {
        background-position: 100% 0;
        background-size: 452%;
        width: 50px;
        height: 50px
    }

    .sp-order-center__up {
        background-position: 85.43689% 70.83333%;
        background-size: 1130%;
        width: 20px;
        height: 20px
    }

    #wrapper, body {
        height: 100%
    }

    #wrapper {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column
    }

    dl, dl dt {
        margin: 0;
        padding: 0
    }

    .tablist {
        display: -webkit-box;
        height: .84rem;
        line-height: .84rem;
        font-size: .3rem;
        text-align: center;
        color: #333;
        padding-right: .1rem;
        margin-bottom: .2rem
    }

    .tablist dt {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1
    }

    .tablist dt span {
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding: 0 .05rem;
        opacity: .8
    }

    .tablist dt.active span {
        border-bottom: .04rem solid #FFC700;
        color: #222;
        opacity: 1
    }

    .order-container {
        overflow-x: hidden
    }

    .pagination {
        padding: .16rem .2rem;
        background: #fff
    }

    .pagination .page-current {
        color: #666;
        display: inline-block;
        width: .45rem;
        text-align: center
    }

    .no-order-info {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        position: relative
    }

    .no-order-info .container {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 4.5rem;
        margin-top: -2.25rem;
        text-align: center
    }

    .no-order-info .bg {
        margin: 0 auto;
        width: 2.92rem;
        height: 2.92rem;
        background: url(//s0.meituan.net/bs/file/?f=mob/touch-meituan-node:assets/19f6b79331d1b081.png@82580f0) no-repeat;
        background-size: cover
    }

    .no-order-info .message {
        color: #5b5b5b;
        text-align: center;
        height: .3rem;
        line-height: .3rem;
        font-size: .26rem;
        margin-top: .2rem
    }

    .no-order-info .ease-btn {
        display: inline-block;
        text-align: center;
        line-height: .8rem;
        width: 2.8rem;
        height: .8rem;
        border-radius: .06rem;
        background: #06c1ae;
        color: #fff;
        font-size: .34rem;
        margin: .28rem auto 0
    }

    .no-data-container {
        display: none;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        position: relative;
        background: #fff
    }

    .no-data-container .container, .no-data-container .loading-spinner {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        color: #666;
        font-size: .28rem
    }

    .no-data-container .container {
        height: 3.5rem;
        margin-top: -1.75rem
    }

    .no-data-container .container .bg .bg-img {
        width: 3.4rem;
        background: url(https://p1.meituan.net/travelcube/fab5511d136557b163d7ccf6d45aa06a9800.png) no-repeat;
        height: 3.28rem;
        background-size: 3.4rem 2.8rem;
        margin: -1rem auto 0rem
    }

    .no-data-container .container .bg .bg-desc {
        font-family: PingFangSC-Medium;
        font-size: .32rem;
        color: #222
    }

    .no-data-container .container .info {
        height: .3rem;
        line-height: .3rem;
        margin-top: .28rem;
        color: #666;
        font-size: .28rem
    }

    #order-spinner {
        display: none;
        text-align: center;
        height: .9rem;
        line-height: .9rem
    }

    .oc-icon {
        overflow: hidden;
        display: inline-block;
        vertical-align: middle;
        width: .52rem;
        height: .52rem;
        -webkit-transform: rotate(0) translateZ(0);
        -webkit-transition-duration: 0s;
        -webkit-animation-name: loading;
        -webkit-animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear
    }

    @-webkit-keyframes loading {
        from {
            -webkit-transform: rotate(0) translateZ(0)
        }
        to {
            -webkit-transform: rotate(360deg) translateZ(0)
        }
    }

    .navbar {
        height: 1.01rem;
        display: -webkit-box;
        position: relative;
        background: linear-gradient(135deg, #FFD000 0, #FFBD00 100%)
    }

    .navbar .nav-wrap-left {
        height: 1.01rem;
        line-height: 1.01rem;
        width: 1.5rem
    }

    .navbar .nav-wrap-left .back {
        height: 1rem;
        width: .45rem;
        line-height: 1rem;
        padding: .3rem .3rem
    }

    .navbar .nav-wrap-left .back img.icn_back {
        width: .2rem;
        height: .36rem
    }

    .navbar .nav-header {
        display: block;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        font-size: .36rem;
        text-align: center;
        line-height: 1rem;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden
    }

    .navbar .nav-header img.icn_down {
        width: .25rem;
        height: .25rem;
        padding: 0 0 .05rem .1rem
    }

    .navbar .nav-header.down span i, .navbar .nav-header.up span i {
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid
    }

    .navbar .nav-header.down span i {
        margin-bottom: .05rem;
        border-width: .1rem .1rem 0;
        border-color: #fff transparent transparent
    }

    .navbar .nav-header.up span i {
        margin-bottom: .05rem;
        border-width: 0 .1rem .1rem;
        border-color: transparent transparent #fff
    }

    .navbar .nav-wrap-right {
        position: relative;
        height: 100%;
        width: 1.2rem;
        margin-right: .3rem;
        margin-top:.3rem;
    }

    .navbar .nav-wrap-right a {
        display: inline-block;
        height: 100%;
        line-height: 1rem;
        text-align: center;
        width: auto
    }

    .navbar .nav-wrap-right a .nav-btn {
        display: none;
        font-size: .2rem;
        line-height: 1;
        vertical-align: middle
    }

    .navbar .nav-wrap-right a .nav-btn img.icn_menu {
        width: .48rem;
        height: .48rem
    }

    .navbar .nav-wrap-right a .nav-btn.active {
        display: inline-block
    }

    .navbar .nav-wrap-right a:last-child {
        position: absolute;
        top: 0;
        right: 0
    }

    .navbar #nav-dropdown {
        font-size: .28rem;
        position: absolute;
        right: .04rem;
        top: 1rem;
        width: 2rem;
        height: 0;
        background: #FFF;
        z-index: 100;
        overflow: visible;
        -webkit-transition: height .1s;
        display: none;
        box-shadow: 0 .12rem .6rem 0 rgba(196, 196, 196, .6);
        border-radius: .1rem
    }

    .navbar #nav-dropdown li {
        height: .84rem;
        line-height: .84rem;
        text-align: center;
        border-bottom: none
    }

    .navbar #nav-dropdown li img.icn_home, .navbar #nav-dropdown li img.icn_mine, .navbar #nav-dropdown li img.icn_search {
        width: .48rem;
        height: .48rem;
        padding-right: .1rem
    }

    .navbar #nav-dropdown:before {
        content: "";
        background-image: url(https://p0.meituan.net/travelcube/dc0f73a6ecc53ad44da9d5bc10ceff96421.png);
        background-size: contain;
        display: block;
        width: .38rem;
        height: .12rem;
        position: absolute;
        top: -.12rem;
        right: .26rem;
        box-shadow: 0 0 0 0 rgba(196, 196, 196, .6);
        border-radius: .05rem
    }

    .navbar #nav-dropdown.active {
        display: block !important;
        height: 2.5rem;
        width: 2rem
    }

    ul, ul li {
        margin: 0;
        padding: 0
    }

    .modal-container {
        position: absolute;
        display: none;
        top: 1.02rem;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(100, 100, 100, .4);
        z-index: 100
    }

    .filter-container {
        min-height: 2.4rem;
        background: #fff
    }

    .filter-container .filter {
        display: none;
        background: #fff;
        box-sizing: border-box;
        padding: .5rem .24rem .52rem
    }

    .filter-container .filter li {
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
        height: .64rem;
        list-style: none;
        margin-bottom: .2rem;
        padding-right: .2rem;
        width: 24%;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-align: center
    }

    .filter-container .filter li a {
        display: inline-block;
        border: 1px solid #bfbfbf;
        color: #666;
        height: .64rem;
        line-height: .65rem;
        width: 100%;
        box-sizing: border-box;
        border-radius: .05rem
    }

    .filter-container .filter li.active span {
        color: #06c1ae;
        background: #eafcfa;
        border: 1px solid #06c1ac
    }

    .filter-container .filter li:nth-child(4n) {
        padding-right: 0
    }

    .filter-container .spinner-container {
        display: none;
        margin: auto 0;
        width: 100%;
        height: 2.4rem;
        line-height: 2.4rem;
        text-align: center;
        background: #fff
    }

    .filter-container .spinner-container span {
        display: inline-block
    }

    .filter-container .fail-container {
        display: none;
        height: 2.4rem;
        box-sizing: border-box;
        padding-top: .6rem;
        text-align: center
    }

    .filter-container .fail-container .msg {
        height: .5rem;
        line-height: .5rem;
        color: #666;
        font-size: .28rem
    }

    .filter-container .fail-container .reload-btn {
        display: inline-block;
        box-sizing: border-box;
        height: .8rem;
        line-height: .8rem;
        border-radius: .06rem;
        background: #06c1ae;
        color: #fff;
        font-size: .34rem;
        padding: 0 .3rem
    }

    .filter-container .info {
        display: none;
        color: #666;
        font-size: .24rem;
        margin: auto 0;
        text-align: center;
        padding: .05rem;
        line-height: 2.4rem
    }

    footer {
    / / margin-top: .3 rem;
        padding: 0 .2rem .4rem;
        background: #fff
    }

    footer .footer-bar {
        font-size: .28rem;
        margin-bottom: .4rem
    }

    footer .footer-nav {
        margin-bottom: .18rem
    }

    footer .footer-nav ul {
        margin: 0;
        padding: .18rem 0;
        font-size: .24rem;
        white-space: nowrap;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        display: -webkit-box
    }

    footer .footer-nav ul li {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        border-right: .02rem solid #666;
        text-align: center
    }

    footer .footer-nav ul li:last-child {
        border-right: 0
    }

    footer .footer-nav ul li > a {
        color: #FE8C00
    }

    footer .footer-links {
        font-size: .24rem;
        margin: .3rem .2rem;
        text-align: center
    }

    footer .footer-links a {
        color: #646464
    }

    footer .footer-copyright {
        color: #999;
        font-size: .22rem;
        text-align: center;
        position: relative
    }

    footer .footer-copyright .hr {
        display: block;
        content: "";
        width: 100%;
        position: absolute;
        top: 50%;
        border-top: 1px solid #999
    }

    footer .footer-copyright .footer-copyright-text {
        position: relative;
        padding: 0 .3rem;
        background-color: #fff;
        font-size: .2rem;
        color: #999
    }

    footer .footer-copyright .footer-copyright-text a {
        text-decoration: none;
        color: #999
    }

    .order-item {
        box-sizing: border-box;
        padding: .3rem .24rem;
        border-bottom: 1px solid #ccc;
        position: relative;
        overflow: visible;
        -webkit-transition: -webkit-transform .2s
    }

    .order-item .right dl .item, .order-item .right dl dt.title div:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .order-item .countdown {
        display: none
    }

    .order-item .order {
        width: 100%;
        position: relative
    }

    .order-item .left {
        position: absolute;
        left: 0;
        top: 0;
        width: .76rem
    }

    .order-item .left .img-ctn {
        background: #f4f4f4;
        width: .76rem;
        height: .76rem
    }

    .order-item .left .img-ctn img {
        width: .76rem;
        height: .76rem;
        border-radius: .08rem
    }

    .order-item .right {
        box-sizing: border-box;
        margin-left: .92rem
    }

    .order-item .right dl dt {
        height: .36rem;
        line-height: .36rem;
        color: #999;
        font-size: .26rem
    }

    .order-item .right dl dt.title {
        color: #333;
        height: .44rem;
        line-height: .44rem;
        font-size: .26rem;
        padding-bottom: .1rem;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex
    }

    .order-item .right dl dt.title div:first-child {
        box-sizing: border-box;
        padding-right: .2rem;
        font-size: .32rem;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-flex: 1
    }

    .order-item .right dl dt.title div:last-child {
        color: #646464
    }

    .order-item .right dl .btn-container.disabled .mt-btn {
        color: #ccc;
        border-color: #ccc
    }

    .order-item .right dl .btn-container {
        text-align: right;
        height: .54rem;
        margin-top: -.2rem
    }

    .order-item .right dl .btn-container .mt-btn {
        display: inline-block;
        box-sizing: border-box;
        height: .54rem;
        line-height: .54rem;
        color: #646464;
        margin-right: .1rem;
        border: .01rem solid #999;
        padding: 0 .24rem;
        border-radius: .15rem
    }

    .order-item .right dl .btn-container .mt-btn:last-child {
        margin-right: 0
    }

    .order-item .del-btn {
        display: none;
        width: .45rem;
        height: .45rem;
        text-align: center;
        line-height: .45rem;
        position: absolute;
        left: -.65rem;
        top: 50%;
        background-color: #EC5330;
        color: #fff;
        -webkit-transform: translateY(-50%);
        border-radius: 50%;
        font-size: .4rem
    }

    .order-item .del-btn.show {
        display: block
    }

    .order-item.del-order {
        -webkit-transform: translateX(1.15rem)
    }

    .msg-ft .msg-btn, .msg-hd, .msg-toast {
        text-align: center
    }

    .msg-bg {
        background: rgba(0, 0, 0, .7);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 998
    }

    .msg-doc {
        position: fixed;
        left: .3rem;
        right: .3rem;
        bottom: 45%;
        border-radius: .06rem;
        background: #fff;
        overflow: hidden;
        z-index: 999
    }

    .msg-hd {
        background: #f0efed;
        color: #333;
        padding: .28rem 0;
        overflow: hidden;
        font-size: .4rem;
        border-bottom: 1px solid #DDD8CE
    }

    .msg-bd {
        font-size: .34rem;
        padding: .43rem;
        border-bottom: 1px solid #D8D8D8
    }

    .msg-toast {
        background: rgba(0, 0, 0, .8);
        font-size: .4rem;
        color: #fff;
        border: none;
        padding: .4rem;
        -webkit-animation-name: pop-hide;
        -webkit-animation-duration: 5s;
        border-radius: .12rem;
        bottom: 60%;
        opacity: 0;
        pointer-events: none
    }

    .msg-alert, .msg-confirm {
        -webkit-animation-name: pop;
        -webkit-animation-duration: .3s
    }

    .msg-option, .msg-slide {
        -webkit-animation-name: slideup;
        -webkit-animation-duration: .3s
    }

    .msg-option {
        background: 0 0;
        bottom: .5rem
    }

    @-webkit-keyframes pop-hide {
        0% {
            -webkit-transform: scale(.8);
            opacity: 0
        }
        2% {
            -webkit-transform: scale(1.1);
            opacity: 1
        }
        6% {
            -webkit-transform: scale(1)
        }
        90% {
            -webkit-transform: scale(1);
            opacity: 1
        }
        100% {
            -webkit-transform: scale(.9);
            opacity: 0
        }
    }

    @-webkit-keyframes pop {
        0% {
            -webkit-transform: scale(.8);
            opacity: 0
        }
        40% {
            -webkit-transform: scale(1.1);
            opacity: 1
        }
        100% {
            -webkit-transform: scale(1)
        }
    }

    @-webkit-keyframes slideup {
        0% {
            -webkit-transform: translateY(100%)
        }
        40% {
            -webkit-transform: translateY(-10%)
        }
        100% {
            -webkit-transform: translateY(0)
        }
    }

    .msg-ft {
        display: -webkit-box;
        display: -ms-flexbox;
        font-size: .34rem
    }

    .msg-ft .msg-btn {
        display: block;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        margin-right: -1px;
        border-right: 1px solid #D8D8D8;
        height: .88rem;
        line-height: .88rem;
        color: #06c1ae
    }

    .msg-btn:last-child {
        border-right: none
    }

    .msg-option .msg-option-btns:first-child .btn:first-child, .msg-option div:first-child {
        border-radius: .06rem .06rem 0 0;
        border-top: 0
    }

    .msg-option .btn {
        width: 100%;
        background: #fff;
        border: 0;
        color: #06c1ae;
        border-radius: 0;
        height: .8rem;
        line-height: .8rem;
        border-top: 1px solid #ccc
    }

    .msg-option .msg-bd {
        background: #fff;
        border-bottom: none
    }

    .msg-option-btns .btn:last-child {
        border-radius: 0 0 .06rem .06rem;
        border-bottom: 1px solid #ccc
    }

    .msg-option .msg-btn-cancel {
        padding: 0;
        margin-top: .14rem;
        color: #06c1ae;
        border-radius: .06rem
    }

    .msg-dialog .msg-hd {
        background-color: #fff
    }

    .msg-dialog .msg-bd {
        background-color: #f0efed
    }

    .msg-slide {
        background: 0 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0
    }</style>


</head>
<body id="" ontouchstart="">

<div id="wrapper">


    <header class="navbar">
        <div class="nav-wrap-left">
            <a class="react back" href="javascript:history.back();">
                <img src="https://p1.meituan.net/travelcube/53361fd0bb6b333e779377789a8d669e531.png" class="icn_back"
                     alt="">
            </a>
        </div>
        <div class="nav-header down">全部订单
            <img src="https://p0.meituan.net/travelcube/1716d6a3ad892866d4592daebaea9505277.png" alt=""
                 class="icn_down">
        </div>
        <div class="nav-wrap-right">
            <a class="react nav-dropdown-btn" data-target="nav-dropdown">
            <span class="nav-btn active">
                <img src="https://p0.meituan.net/travelcube/7289ad16274ae18417b84c916bb6a711169.png" alt=""
                     class="icn_menu">
            </span>
            </a>
        </div>
        <div id="nav-dropdown" class="nav-dropdown">
            <ul>
                <li><a class="react" href="//i.meituan.com/">
                    <img src="https://p1.meituan.net/travelcube/142ba119b889881105236ef57446e6bf866.png"
                         class="icn_home">首页</a></li>
                <li><a class="react" rel="nofollow" href="//i.meituan.com/account/">
                    <img src="https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png"
                         class="icn_mine">我的</a></li>
                <li><a class="react headSearch" href="//i.meituan.com/s/">
                    <img src="https://p0.meituan.net/travelcube/4b45dc09c35f9175498345f8672d08991022.png"
                         class="icn_search">搜索</a></li>
            </ul>
        </div>

    </header>


    <div class="modal-container" style="display: none;">
        <div class="filter-container">
            <ul class="filter"></ul>
            <div class="spinner-container">
                <img src="https://p0.meituan.net/travelcube/06577df3fb56249aa484bbb3a4a1a85b4451.png" class="oc-icon">
                <span>加载中...</span>
            </div>
            <div class="fail-container">
                <div class="msg">网络异常, 请稍后再试</div>
                <div class="reload-btn" id="reload-btn">重新加载</div>
            </div>
            <div class="info">暂无分类</div>
        </div>
    </div>
    <dl id="tablist" class="tablist">
        <dt id="all" data-name="all" data-status="0" class="active" onclick="getList('全部')">
            <span>全部</span>
        </dt>
        <dt id="obligations" class="" data-name="notpayed" onclick="getList('待付款')" data-status="1" >
            <span>待付款</span>
        </dt>
        <dt id="useing" data-name="notused" data-status="2" class="" onclick="getList('待使用')" >
            <span>待使用</span>
        </dt>
        <dt id="evaluating" data-name="notevaluated" data-status="3" class="" onclick="getList('待评价')" >
            <span>待评价</span>
        </dt>
        <dt id="refund" data-name="refund" data-status="4" class="" onclick="getList('退款')" >
            <span>退款/售后</span>
        </dt>
    </dl>
    <div class="order-container" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
        <div style="display:none;"></div>


        <div class="order-item" id="Infinity">
            <a class="del-btn sp-order-center sp-order-center__delete show"
               data-href="http://api.waimai.meituan.com/mtapi/v2/order/mtapp/deleteorder"></a>

    </div>
    <div id="order-spinner">
        <img src="https://p0.meituan.net/travelcube/06577df3fb56249aa484bbb3a4a1a85b4451.png" class="oc-icon"> 加载中...
    </div>
        <div class="no-data-container" style="display: block; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
            <div class="container disabled" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);">
                <div class="bg">
                    <div class="bg-img"></div>
                    <div class="bg-desc">您还没有相关订单</div>
                </div>
            </div>
            <div class="loading-spinner" style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;">
                <img src="https://p0.meituan.net/travelcube/06577df3fb56249aa484bbb3a4a1a85b4451.png" class="oc-icon">
                <span>加载中...</span>
            </div>
        </div>


</div>


<script>

    var active_css = $('#all');

    $(document).ready(function(){
        getList("${type}")
    });

    
    function writeData(data) {
        var list = "";
        for (var i = 0; i < data.length; i++) {
            list += "    <div class=\"order-item\" data-id=\"Infinity\">\n" +
                "        <a class=\"del-btn sp-order-center sp-order-center__delete show\"\n" +
                "    href=\"http://api.waimai.meituan.com/mtapi/v2/order/mtapp/deleteorder\"></a>\n" +
                "        <div class=\"order\" >\n" +
                "        <div class=\"left\">\n" +
                "        <div class=\"img-ctn\"><img class=\"deal-avatar\"\n" +
                "    src=\"${pageContext.request.contextPath}/statics/img/default_winImg.jpg\"\n" +
                "    onerror=\"loadError()\"></div>\n" +
                "        </div>\n" +
                "        <div class=\"right\">\n" +
                "        <dl>\n" +
                "        <dt class=\"title\">\n" +
                "        <div>"+data[i].address+"</div>\n" +
                "        <div>"+data[i].statue+"</div>\n" +
                "        </dt>\n" +
                "        <dt class=\"item\">下单时间："+data[i].time+"</dt>\n" +
                "    <dt class=\"item\">总价：¥"+data[i].price+"</dt>\n"

               switch (data[i].statue) {
                   case "待付款":
                       list +=                 "    <dt class=\"btn-container \">\n" +
                           "    <a class=\"mt-btn\" data-style=\"1\" href=\"${pageContext.request.contextPath}/mobile/buy/"+data[i].id+"\">付款</a>\n" +
                           "    </dt>";
                           break;
                   case "待使用":
                       list +=                 "    <dt class=\"btn-container \">\n" +
                           "    <a class=\"mt-btn\" data-style=\"1\" href=\"${pageContext.request.contextPath}/mobile/QRcode/"+data[i].id+"\">查看券码</a>\n" +
                           "    </dt>";
                       break;
                   case "待评价":
                       list +=                 "    <dt class=\"btn-container \">\n" +
                           "    <a class=\"mt-btn\" data-style=\"1\" href=\"${pageContext.request.contextPath}/mobile/orderAppraise/"+data[i].id+"\">评价</a>\n" +
                           "    </dt>";
                       break;
                   case "退款":
                       list +="<dt class=\"btn-container \">\n" +
                           "    <a class=\"mt-btn\" data-style=\"1\" href=\"${pageContext.request.contextPath}/mobile/refund/"+data[i].id+"\">退款进度</a>\n" +
                           "    </dt>";
                       break;
                   
               }
               
               list += "    </dl>\n" +
                "    </div>\n" +
                "    </div>\n" +
                "    </div>"
        }
        if(data.length < 1)
            list+="    <div id=\"order-spinner\">\n" +
                "        <img src=\"https://p0.meituan.net/travelcube/06577df3fb56249aa484bbb3a4a1a85b4451.png\" class=\"oc-icon\"> 加载中...\n" +
                "    </div>\n" +
                "        <div class=\"no-data-container\" style=\"display: block; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);\">\n" +
                "            <div class=\"container disabled\" style=\"transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);\">\n" +
                "                <div class=\"bg\">\n" +
                "                    <div class=\"bg-img\"></div>\n" +
                "                    <div class=\"bg-desc\">您还没有相关订单</div>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <div class=\"loading-spinner\" style=\"transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1); display: none;\">\n" +
                "                <img src=\"https://p0.meituan.net/travelcube/06577df3fb56249aa484bbb3a4a1a85b4451.png\" class=\"oc-icon\">\n" +
                "                <span>加载中...</span>\n" +
                "            </div>\n" +
                "        </div>";
        $(".order-container").html(list);

    }

    function getList(type) {
        $.ajax({
            type: "GET",//请求类型
            url: "${pageContext.request.contextPath }/orderListInfo/${sessionScope.user.stuno}/"+type,//请求的url
            dataType: "json",//ajax接口（请求url）返回的数据类型
            success: function (data) {

                if(type=="全部"){
                    active_css.removeClass('active')
                    $("#all").addClass('active');
                    active_css = $('#all')
                }


                if(type=="待付款"){
                    active_css.removeClass('active')
                    $("#obligations").addClass('active');
                    active_css = $('#obligations')
                }
                if(type=="待使用"){
                    active_css.removeClass('active')
                    $("#useing").addClass('active');
                    active_css = $('#useing')
                }
                if(type=="待评价"){

                    active_css.removeClass('active')
                    $("#evaluating").addClass('active');
                    active_css = $('#evaluating')
                }
                if(type=="退款"){
                    active_css.removeClass('active')
                    $("#refund").addClass('active');
                    active_css = $('#refund')
                }
                    writeData(data);
            },
            error: function (data) {//当访问时候，404，500 等非200的错误状态码
                alert("加载数据失败！" + data);
            }
        })

    }


</script>




</body>
</html>

F.context("staticController",function(e,t,n,a,i){"use strict";function r(e,t,a){if(h.failList.push(arguments),s&&i.trace&&i.trace(e.toLowerCase(),a,t),!(e&&~",SCRIPTS,".indexOf(e)||~n.href.indexOf("originver=1"))){var r,o,c=n.href,l=c.indexOf("#");~l?(r=c.slice(l),o=c.slice(0,l)):(r="",o=c),n.href=o+(~o.indexOf("?")?"&":"?")+"originver=1"+r}}function o(e){if(s)e.call(h,h.data&&h.data.data,h.tools);else try{e.call(h,h.data&&h.data.data,h.tools)}catch(t){r("SCRIPTS",t,e)}}function c(e){return e&&g--,!g}function l(){if(c(!0)){u&&(y(h.data),d("replace-done"));for(var e=0,t=m.length;t>e;e++)o(m[e]);m.length=0,d("continue")}}function f(i){if(u){var o=(n.search||"").replace(/^\?/,"");x="/pcindex/main/dealajax?_="+ +new Date+"&callback="+a('F.context("staticController").jsonpReady')+(/(?:^|[?&])id=.*?(?:[&#]|$)/.test(o)?"":"&id="+a(i))+(o?"&"+o:"");var c="&referer="+a(t.referrer);if(c="",!((x+c).length>=2048&&e.ActiveXObject)){S=t.createElement("script"),S.charset="UTF-8",S.async=!0,S.onerror=function(e){r("JSONP",e)},S.src=x+c;var l=t.getElementsByTagName("script"),f=l.length&&l[l.length-1];f.parentNode.insertBefore(S,f),T=setTimeout(function(){r("TIMEOUT")},v)}}}function d(e){var t=new Date-A;h.info+=""+e+new Array(20-e.length).join(" ")+new Array(5-(t+"").length).join(" ")+t+"\n"}var s,u,p,h,g,y,x,S,T,m=[],v=1e4,A=+new Date;return h={isStatic:null,tools:null,init:function(e,t,a,i,r){s=e||~n.search.indexOf("FE_IS_DEBUG=1"),h.isStatic=u=t,p=a,g=u?2:1,h.pageData=i,f(r)},run:function(e){!u||c()?o(e):m.push(e)},pageData:null,pageReady:function(e,t){h.tools=e,y=t,d("page-ready"),l()},loadAjax:function(e){u&&!S&&e.ajax({type:"POST",dataType:"text",url:x,data:{referer:t.referrer},timeout:v}).done(function(e){try{new Function(e)()}catch(t){r("AJAX_JSON_INVALID",t,e)}}).fail(function(){r("AJAX",null,arguments)})},data:null,jsonpReady:function(e){h.data=e,d("jsonp-ready"),e&&0===e.errno&&e.data&&2!==+e.data.dtail_attr.hidden?(T&&clearTimeout(T),l()):r("STATUS",null,e)},fail:r,failList:[],info:"\n",dispose:function(){S=y=m=h=h.data=h.tools=h.failList=null}}}(window,document,location,encodeURIComponent,"undefined"==typeof console?{}:console));
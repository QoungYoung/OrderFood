define("detail:widget/ugc/user_comment/user_comment.js",function(e,t,a){var n=e("common:widget/ui/dialog/dialog.js"),l=e("common:widget/ui/pager/pager.js"),i=e("common:widget/ui/comment/comment.js"),s=e("detail:widget/ui/change_pic/change_pic.js"),r=e("common:widget/ui/usertrack/usertrack.js"),c=e("common:widget/ui/passport/passport.js"),o=function(){function e(){j.label="",j.label_type=0,$("#j-label-list a").removeClass("good-label-clicked bad-label-clicked")}function t(){j.page=1,j.level=0,$("#j-level-filter .level-item[data-level=0]").addClass("current").siblings().removeClass("current"),j.sort[0]=1,j.sort[1]=j.sort[2]=j.sort[3]=0,$("#j-comment-filter").find("a").removeClass("pic-clicked content-clicked time-clicked").end().find(".default").addClass("default-clicked")}function a(){$(document.body).on("mousedown",".w-comment-content .ns-track",function(e){var t=$(this);if(!t.is("a[mon], input[mon], span[mon]")){var a=$(e.target),n=[];do{var l=a.attr("mon");l&&n.push(l),a=a.parent()}while(!a.is("html"));n=n.join("&").split("&");for(var i={},s=0,c=n.length;c>s;s++){var o=n[s].split("=");i[o[0]]=o[1]}var d={da_src:encodeURIComponent($.stringify({page:i.page,area:i.area,element:i.element,position:i.position}))};i.element_type&&(d.element_type=i.element_type),r.send(d)}})}function o(e,t,a){if("object"!=typeof e)try{e=$.parseJSON(e)}catch(n){return a&&a("JSON_INVALID",n,e)}return!e||0!==e.errno&&"0"!==e.errno?a&&a("ERRNO",e):t&&t(e)}var d,u,p=["消费本团购后才能评价，立即行动吧！","购买本团购后才能发表评价，","抱歉，您尚未购买，不能发表评价!","商品派送中，您暂不能评价。"],m=410,f=30,g=166,v="/pcindex/main/comment",h="/pcindex/main/commentreply",b='<div class="no-comment">暂时没有该类型的评论</div>',k={status:F.context("status"),buyUrl:F.context("buyUrl"),dealId:F.context("dealId"),orderId:F.context("orderId"),catg_ids:F.context("catg_ids"),merchant_id:F.context("merchant_id")},C=null,y={currentPage:1,totalPage:10,viewSize:5,tplUrl:"##{pageNum}",tplLabelNormal:"#{pageNum}",tplLabelCurrent:"#{pageNum}",labelFirst:"首页",labelPrev:"上一页",labelNext:"下一页",labelLast:"尾页"},j={page:1,label:"",label_type:0,sort:{0:1,1:0,2:0,3:0},level:0},_=function(e){var t={width:m,title:"提示",content:e},a=new n(t);a.center()},w=function(){var e="";c.check(function(){1==k.status?(e=['<div class="p-info-tip">',"<span>"+p[1]+"</span>",'<a target="_blank" href='https://gss0.bdstatic.com/8r1VfDn7KggZnd_b8IqT0jB-xx1xbK/static/detail/widget/ugc/user_comment/+k.buyUrl+%22>立即购买</a>%22,%22</div>%22].join(%22%22),_(e)):2==k.status?(e='<div class="p-info-tip">'+p[0]+"</div>",_(e)):5==k.status?(e='<div class="p-info-tip">'+p[2]+"</div>",_(e)):6==k.status?(e='<div class="p-info-tip">'+p[3]+"</div>",_(e)):i.init({dealId:k.dealId,orderId:k.orderId,catg_ids:k.catg_ids})})},x=function(){var e=$("#j-add-comment");e.length&&e.on("click",function(){w()})},I=function(){var e=$("#j-edit-button");e.length&&e.on("click",function(){i.init({dealId:k.dealId,orderId:k.orderId,catg_ids:k.catg_ids})})},P=function(){var e=$("#j-label-list"),a=e.find("a"),n=$("#j-more-label"),l=e.height();if(0!=e.length){if(l>g)var i=!0;l>f&&(e.addClass("label-hidden"),n.addClass("close-status"),n.removeClass("hide-arrow")),n.on("click",function(t){t.preventDefault();var a=$(this);a.hasClass("close-status")?(a.removeClass("close-status"),a.addClass("open-status"),e.addClass(i?"label5-show":"label-show")):(a.removeClass("open-status"),a.addClass("close-status"),e.removeClass(i?"label5-show":"label-show"))}),a.on("click",function(){var e=$(this);e.siblings("a").removeClass("good-label-clicked").removeClass("bad-label-clicked"),e.hasClass("good-label")&&(e.hasClass("good-label-clicked")?(j.label="",j.label_type=0,e.removeClass("good-label-clicked")):(j.label=e.find(".name").text(),j.label_type=1,e.addClass("good-label-clicked"))),e.hasClass("bad-label")&&(e.hasClass("bad-label-clicked")?(j.label="",j.label_type=0,e.removeClass("bad-label-clicked")):(j.label=e.find(".name").text(),j.label_type=2,e.addClass("bad-label-clicked"))),j.page=y.currentPage=1,t(),R()})}},N=function(e){if(y.totalPage=e,y.autoDispose=!0,0!==$("#j-pager-comment").length){var t=new l("j-pager-comment",y);$("#j-pager-comment a").attr("href","#nextComment"),t.on("pagechange",function(e){y.currentPage=e,j.page=e,R()})}},O=function(){var t=$("#j-time-sort"),a=$("#j-default-sort"),n=$("#j-comment-filter"),l=$("#j-sort p"),i=$("#j-select-box"),s=$("#j-level-filter");s.on("click",".level-item",function(){var t=$(this),a="current";if(!t.hasClass(a)&&!t.hasClass("disabled")){t.addClass(a).siblings().removeClass(a);var n=t.data("level");j.level=n,j.page=1,y.currentPage=1,e(),R()}}),n.on("click",function(n){var s=$(n.target);if(s.is(".pic")&&(s.hasClass("pic-clicked")?(s.removeClass("pic-clicked"),j.sort[1]=0):(s.addClass("pic-clicked"),j.sort[1]=1)),s.is(".content")&&(s.hasClass("content-clicked")?(s.removeClass("content-clicked"),j.sort[2]=0):(s.addClass("content-clicked"),j.sort[2]=1)),s.is(".time")){if(i.css("display","none"),l.text("按时间"),s.hasClass("time-clicked"))return;s.addClass("time-clicked"),a.removeClass("default-clicked"),j.sort[0]=0,j.sort[3]=1}if(s.is(".default")){if(i.css("display","none"),l.text("默认"),s.hasClass("default-clicked"))return;s.addClass("default-clicked"),t.removeClass("time-clicked"),j.sort[0]=1,j.sort[3]=0}j.page=y.currentPage=1,e(),R()})},S=function(){var e=[],t=j.sort;for(var a in t)t.hasOwnProperty(a)&&1===t[a]&&e.push(a);return e.join(",")},T=function(){var e={label:j.label,label_type:j.label_type,page:j.page,sort:S(),level:j.level,t:+new Date};return"merchant_detail"===F.context("page")?e.merchantId=k.merchant_id:e.dealId=k.dealId,e},D=function(e){function t(){return d.find(".ur-list-item")}function a(){return o}function n(){var t=e.data("widget");return"object"==typeof t?t:$.parseJSON(t)}function i(t){var a=n();return a=$.extend({},a,t||{}),e.data("widget",a),a}function s(e){var a=u*(e-1);t().hide().slice(a,a+u).show()}function r(){u=u||e.data("pageSize");var t=new l(e,n());return t.on("pagechange",function(e){var t=n();+e!==+t.currentPage&&(s(e),t.currentPage=e,i(t))}),t}function c(){o.dispose(),o=null}var o,d=e.parents(".ur-reply-list-wrap").find(".ur-reply-list");return o=r(),e.getWidget=a,{getReplyList:t,$container:e,getWidget:a,update:function(e){s(i(e).currentPage),o=r()},dispose:function(){c(),e.getWidget=null,e=d=null}}},L=function(e,t,a){function l(){var e=r.val();return 0===e.length?{status:"EMPTY",text:"还能输入"}:e.length>d?{status:"UPPER_BOUND_OVERFLOW",text:"已超出"}:{status:0,text:"还能输入"}}function i(e){function t(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var a=['<div class="ur-list-item">','<div class="ur-header">','<span class="ur-user-name">#{nickname}：</span>','<span class="ur-date">#{updateTime}</span>',"</div>",'<div class="ur-content">#{content}</div>',"</div>"].join("");e.nickname=e.nickname||"";var n=e.updateTime;return e.updateTime=[n.getFullYear(),n.getMonth()+1,n.getDate()].join("-"),e.content=(e.content||"").replace(/\\n/g,"  "),a.replace(/#\{(.*?)\}/g,function(a,n){return t(e[n])})}var s=t.find(".ur-btn-submit"),r=t.find("textarea"),p=t.find(".ur-count-rest"),m=p.find("em"),f=p.find("i");d=d||+m.html(),e.click(function(){c.check(function(){t.toggle()})}),r.on("input propertychange",function(){var e=$(this),a=l(),n="UPPER_BOUND_OVERFLOW"!==a.status;t[n?"removeClass":"addClass"]("ur-reply-invalid"),f.html(a.text),m.html(Math.abs(d-e.val().length)),r.focus()}),s.click(function(){function s(){function e(){t&&(t.dispose(),t=null)}var t=new n({width:135,title:"<i>×</i>回复失败",content:""});t.center(),t.$dom.addClass("user-reply-dialog-hack").click(e),setTimeout(e,3e3)}function c(n){var l=t.parents(".user-reply").find(".ur-reply-list-wrap"),c=l.find(".ur-reply-list");o(n,function(){var n=i({nickname:"您的最新回复",updateTime:new Date,content:r.val()});c.prepend(n),r.val("");var s=e.find("i"),o=+s.html()+1;s.html(o),a.update({currentPage:1,totalPage:Math.ceil(o/u)}),l.show(),t.hide()},s)}var p=$(this);if(!p.data("isLock")){var g=l(),v=0===g.status;if(!v)return t.addClass("ur-reply-invalid"),f.html(g.text),m.html(Math.abs(d-r.val().length)),void r.focus();p.data("isLock",!0),$.ajax({url:h,type:"POST",dataType:"json",data:{tuanId:k.dealId,dealId:k.dealId,cmtId:p.data("cmtId"),type:0,content:r.val()}}).done(c).fail(s).always(function(){p.data("isLock",!1)})}})},U=function(e){L(e.find(".ur-btn-toggle-panel"),e.find(".ur-reply-panel"),D(e.find(".ur-reply-pager")))},R=function(){htmlStr=['<div class="load">',"</div>"].join(""),C.html("").append(htmlStr);var e=T();$.get(v,e,function(e){var e="string"==typeof e?$.parseJSON(e):e,t=e.data.pageNum,a=e.errno,n=e.html||b;0==a?(s.deleteCache(),C.html("").append(n),N(t),C.find(".user-reply").each(function(e,t){U($(t))})):(src="comment-failure_a986ebd.png"/*tpa=https://gss0.bdstatic.com/8r1VfDn-KggZnd_b8IqT0jB-xx1xbK/static/detail/img/comment-failure_a986ebd.png*/,htmlStr=['<div class="load">',"<img src="+src+">",'<span class="load-desc">加载失败...</span>',"</div>"].join(""),C.html("").append(htmlStr))})};return{init:function(e){C=$("#j-comment-list"),P(),x(),I(),C.length>0&&(e&&e.isAsyncData?R():e&&e.commentTotal&&e.commentTotal>0&&N(Math.ceil(e.commentTotal/25)),O()),a()}}}();a.exports={init:o.init}});
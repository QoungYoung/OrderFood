define("list:widget/ui/ajax_get_goods/ajax_get_goods.js",function(a,o,n){n.exports={init:function(a){var o=this;this.goodsWrap=a.goodsWrap,this.itemWrap=a.itemWrap,this.itemName=a.itemName,this.asyncLoadPage=2,this.canAsyncLoad=!0,this.asyncLoadNum=0,this.goodsNum=F.context("goods_num"),this.asyncLoadMaxNum=F.context("goods_total")/this.goodsNum>2?2:1,$(window).on("scroll",function(){var a=$(document).scrollTop()+$(window).height(),n=o.goodsWrap.find(o.itemName).last().offset().top-1504;a>=n&&o.canAsyncLoad&&(o.canAsyncLoad=!1,o.sendRuqest())})},sendRuqest:function(){var a=this,o=F.context("page_base_url"),n=F.context("url_param_suffix");n&&(o+="?"+n);var t;"1"==F.context("quanwang_search_page")&&(t=-1==o.indexOf("?")?"?":"&",o+=t+"quanwangdijia=1"),"1"==F.context("jingxuan_search_page")&&(t=-1==o.indexOf("?")?"?":"&",o+=t+"jingxuanpinpai=1");var s={async_load_page:a.asyncLoadPage};$.get(o,s,function(o){a.goodsWrap.find(a.itemWrap).append(o);var n=$(document).scrollTop()+$(window).height(),t=a.goodsWrap.find(a.itemName).last().offset().top-752;a.asyncLoadNum++,a.asyncLoadPage++,a.asyncLoadNum<a.asyncLoadMaxNum&&t>n&&(a.canAsyncLoad=!0)},"html")}}});
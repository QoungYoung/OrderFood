define("list:widget/new_list/item.js",function(i,t,e){function n(i){var t=$("#hover-overlay");$(i.element).on("mouseenter",function(){var i=$(this),e=i.offset();t.css({left:e.left-5,top:e.top-5,visibility:"visible"})}).on("mouseleave",function(){t.css({visibility:"hidden"})});var e=setInterval(function(){window.t10JingxuanComplete&&(window.isNoT10JingXuan&&($("#section-floor-1 .floor-header").css("width","964px"),$("#section-floor-1 .itemlist li:nth-child(5)").css("visibility","hidden"),$("#j-fix-right-container").css({height:"378px","border-bottom":"1px solid #dfdfdf"})),clearInterval(e))},100)}e.exports={init:n}});
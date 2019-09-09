$(document).ready(function(){
    $.ajax({
        type:"GET",//请求类型
        url:"todaypreferencelist.json",//请求的url
        dataType:"json",//ajax接口（请求url）返回的数据类型
        success:function(data){//data：返回数据（json对象）
            var options = "";
            for(var i = 0; i < data.length; i++){



                options += "<li class='item yule-item clearfix'>" +
                    "<a href=/food/"+data[i].user+
                    " target='_blank' class='yule-content'>"+
                    "<img class=\"yule-image\" src="+data[i].img+"/>"+
                    "<div class=\"yule-title\">"+data[i].name+"</div>"+
                    "     <object>\n" +
                    "     <a href=\"javascript:;\"target=\"_blank\" class=\"yule-ugc\">\n" +
                    "     <div class=\"s-grey\">\n" +
                    "     <div class=\"s-color\" style=\"width: 98.938%\"></div>\n" +
                    "     </div>\n" +
                    "     </a>\n" +
                    "     </object>\n" +
                    "     <div class=\"shop-info\">\n" +
                    "     <span>"+data[i].username+"</span>\n" +
                    "     <span class=\"has-sale\">已售"+data[i].count+"</span></div>\n" +
                    "     </a>\n" +
                    "     </li>";
            }
            $("#todayprev").html(options);
        },
        error:function(data){//当访问时候，404，500 等非200的错误状态码
            alert("加载今日优选失败！");
        }
    });
});
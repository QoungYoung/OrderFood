define("list:widget/qingrenjie/huaban/huaban.js",function(){!function(){function t(t,a){this.$ele=$(t),this.time=a,this.fromY="-10%",this.toY="110%"}function a(){for(var a=0;22>a;a++)r.push($('<div class="qrj15-huaban qrj15-huaban'+(a%17+1)+'"></div>').appendTo("body"));e.push(new t(r[14].addClass("qrj15-rotate1"),6e3)),e.push(new t(r[15].addClass("qrj15-rotate1"),4500)),e.push(new t(r[16].addClass("qrj15-rotate3"),5e3)),e.push(new t(r[17].addClass("qrj15-rotate4"),2200)),e.push(new t(r[18].addClass("qrj15-rotate4"),3e3)),e.push(new t(r[19].addClass("qrj15-rotate4"),2400)),e.push(new t(r[20].addClass("qrj15-rotate2"),6e3)),e.push(new t(r[21].addClass("qrj15-rotate2"),4500)),e.push(new t(r[1].addClass("qrj15-rotate4"),3e3)),e.push(new t(r[2].addClass("qrj15-rotate2"),3500)),e.push(new t(r[3].addClass("qrj15-rotate2"),3800)),e.push(new t(r[5].addClass("qrj15-rotate2"),5800)),e.push(new t(r[6].addClass("qrj15-rotate3"),4700)),e.push(new t(r[7].addClass("qrj15-rotate4"),2e3)),e.push(new t(r[8].addClass("qrj15-rotate4"),6e3)),e.push(new t(r[9].addClass("qrj15-rotate3"),4800)),e.push(new t(r[10].addClass("qrj15-rotate1"),7e3)),e.push(new t(r[11].addClass("qrj15-rotate1"),8e3)),e.push(new t(r[12].addClass("qrj15-rotate3"),4900)),e.push(new t(r[13].addClass("qrj15-rotate3"),4500)),e.push(new t(r[0].addClass("qrj15-rotate4"),3e3)),e.push(new t(r[4].addClass("qrj15-rotate2"),5800)),$.each(e,function(t,a){setTimeout(function(){a.run()},200*t)})}function s(){$.each(e,function(t,a){a.destroy()}),e=[],r=[]}var e=[],r=[];t.prototype={constructor:t,run:function(){var t=$(window).width(),a=100+Math.floor(Math.random()*(t-200)),s=this,e=-200+Math.floor(400*Math.random());return this.$ele.css({top:this.fromY,left:a}),this.$ele.animate({top:this.toY,left:a+e},this.time,"linear",function(){s.run()}),this},destroy:function(){var t=this;this.$ele.stop().fadeOut("400",function(){t.$ele.remove()})}};var n=window.navigator.userAgent,o=n.match(/iPad/i)?!0:!1,d=n.match(/MSIE (\d+)/i),h=!0;(d&&d[1]<=8||o)&&(h=!1),h&&(a(),setTimeout(s,5e3))}()});
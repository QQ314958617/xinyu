$(function(){
		$(".lis h4").click(function(){
			$(this).parent().toggleClass("on").siblings().removeClass("on");
		})
		$(".m_top").click(function(){
			$(".m_down").animate({"left":"0"});
			$(this).hide();
			$(".lx_top").hide();
		})
		$(".lx_top").click(function(){
			$(".m_down").animate({"left":"0"});
			$(this).hide();
			$(".m_top").hide();
		})
		$(".tuichu i").click(function(){
			$(".m_down").stop().animate({"left":"-142"});
			$(".m_top").show(200);
			$(".lx_top").show(200)
		})
		
//moban01 end
		$(".hua .zu_lis01").fadeIn(1000);
		$(".hua .zu_lis02").delay(1000).fadeIn(1000);
		$(".hua .zu_lis03").delay(2000).fadeIn(1000);
		$(".hua .zu_lis04").delay(3000).fadeIn(1000);
//moban02 end
		$.getJSON("js/aa.json",function(data){ 
			var str="";
			$.each(data[0].tiyan,function(infoIndex,info){ 
				str +='<li class="'+info["name"]+" "+info["style"]+'"><dl><dt val="'+info["img"]+'" tit="'+info["xias"]+'"><img src="'+info["img"]+'"/></dt><dd><span>'+info["type"]+'</span><b>'+info["wuming"]+'</b><i>'+info["bianhao"]+'</i></dd></dl></li>';
			})
			$(".jiachang").html(str);
			jQuery(".zuu").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:5});
			$(document).on("click",".wuzi li",function(){
				$(this).addClass("yaored").siblings().removeClass("yaored");
				var b=$(this).attr("date");
				var a=$(".yangs .yaored").attr("date")
				$(".jiachang").find("li").hide();
				
				if(a){
					$("."+b+"."+a).show();
				}else{
					$("."+b).show();
				}
			})
			$(document).on("click",".fenge li",function(){
				$(this).addClass("yaored").siblings().removeClass("yaored");
				var b=$(this).attr("date");
				var a=$(".fangz .yaored").attr("date")
				$(".jiachang").find("li").hide();
				if(a){
					$("."+b+"."+a).show();
				}else{
					$("."+b).show();
				}
			})
			$(document).on("click",".leitit",function(){
				$(this).siblings("ul").find(".yaored").removeClass("yaored");
				$(".jiachang").find("li").hide();
				var a=$(".tiyan_top .yaored").attr("date");
				$("."+a).show();
				if(!a){
					$(".jiachang li").show();
					var img=$(".jiachang li").first().find("img").attr("src");
					$(".jiachang li").first().find("dt").addClass("padb").parents().siblings().find("dt").removeClass("padb");
					$(".changjing img").attr("src",img);
				}
			})
			
				$(".jiachang").html(str);
			$(document).on("click",".jiachang dt",function(){
				$(this).addClass("padb").parents().siblings().find("dt").removeClass("padb");
				$(".changjing img").attr("src",$(this).attr("val"));
				var tit=$(this).attr("tit");
				var stp01="",
					stp02="",
					stp03="",
					stp04="";
				$.each(data,function(i,info){ 
					if(info[tit]){
						$.each(info[tit],function(key,val){ 
							for(var i=0;i<val["qiangz"].length;i++){
								stp01 +='<li><img src="'+val["qiangz"][i]+'"/></li>';
							}
							for(var i=0;i<val["ruanb"].length;i++){
								stp02 +='<li><img src="'+val["ruanb"][i]+'"/></li>';
							}
							for(var i=0;i<val["chuangl"].length;i++){
								stp03 +='<li><img src="'+val["chuangl"][i]+'"/></li>';
							}
							for(var i=0;i<val["ditan"].length;i++){
								stp04 +='<li><img src="'+val["ditan"][i]+'"/></li>';
							}
						})
					}
				})
				$(".jia01").html(stp01);
				$(".jia02").html(stp02);
				$(".jia03").html(stp03);
				$(".jia04").html(stp04);
			})
			$(document).on("click",".tiao li",function(){
				var sc=$(this).find("img").attr("src");
				$(".changjing img").attr("src",sc);
			})
			
			
			var W=$(".jiachang li").length*208;
			$(".jiachang").css("width",W);
		}) 
		
		$(document).on("click",".tiao li",function(){
			$(this).addClass("or").siblings().removeClass("or");
		})
		$(".tiao_top .rod").click(function(){
			$(this).addClass("gaored").siblings().removeClass("gaored");
			$(".tiao_top ul").eq($(this).index()).show().siblings("ul").hide();
		})
		$(".tiao_down .rod").click(function(){
			$(this).addClass("gaored").siblings().removeClass("gaored");
			$(".tiao_down ul").eq($(this).index()).show().siblings("ul").hide();
		})
//moban03 end	
		jQuery(".pro_main").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:4});
		$(".pro_main li").hover(function(){
			$(this).toggleClass("caichang");
			$(this).find(".xa").fadeToggle(400);
		});
//moban04 end
		jQuery(".team_down").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});
		$(".team_down li").hover(function(){
			$(this).addClass("kanjie").siblings().removeClass("kanjie");
		});
//moban05 end		
	$(".dd_right li").hover(function(){
			$(this).addClass("zhanxian").siblings().removeClass("zhanxian");
	});
//moban06 end
	$(".footlis a").click(function(){
			$(this).addClass("zhuanq").siblings().removeClass("zhuanq");
	});
//moban07 end							   
})
function scrolla(){
		 //滚动
        var Bool=false;
        var Scro=$("#scroll");
        var Scrp=$("#p");
        var Scrobd=$("#bd");
        var Scroul=$("#ul");
        var Scrp_Height =Scrp.outerHeight()/2;
        var Num2=Scro.outerHeight()-Scrp.outerHeight();
        var offsetX=0;
        var offsetY=0;
        Scrp.mousedown(function(e){  
            Bool=true;
        });
        $(document).mouseup(function(){
            Bool=false;
        });
        $(document).mousemove(function(e){
            if(Bool){
                var Num1= e.clientY - Scro.position().top;
                var y=Num1 - Scrp_Height;
                if(y<=1){
                    Scrll(0);
                    Scrp.css("top",1);
                }else if(y>=Num2){
                    Scrp.css("top",Num2);
                    Scrll(Num2);
                }else{
                    Scrll(y);
                }
            }
        });
        function Scrll(y){
            Scrp.css("top",y);
            Scroul.css("margin-top",-(y/(Scro.outerHeight()-Scrp.outerHeight()))*(Scroul.outerHeight()-Scrobd.height()));
        }
        if(document.getElementById("scroll_bd").addEventListener) 
        document.getElementById("scroll_bd").addEventListener('DOMMouseScroll',wheel,true);
        document.getElementById("scroll_bd").onmousewheel=wheel;
        var Distance=Num2*0.1;
        function wheel(e){
            var evt = e || window.event;
            var wheelDelta = evt.wheelDelta || evt.detail;
            if(wheelDelta == -120 || wheelDelta == 3){
                var Distances=Scrp.position().top+Distance;
                if(Distances>=Num2){
                    Scrp.css("top",Num2);
                    Scrll(Num2);
                }else{
                    Scrll(Distances);
                }
                return false;
            }else if (wheelDelta == 120 || wheelDelta == -3){
                var Distances=Scrp.position().top-Distance;
                if(Distances<=1){
                    Scrll(0);
                    Scrp.css("top",1);
                }else{
                    Scrll(Distances);
                }
                return false;
            }   
        }
	}
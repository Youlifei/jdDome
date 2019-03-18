//头部广告
$(".grid_cl span").click(function(){
	$(".J_event").hide();
})
//定位北京
$(".w .fl").mouseover(function(){
	$(".w .fl .bj_fl1").addClass("bj");
	$(".bj_con1").show();
})
$(".w .fl").mouseout(function(){
	$(".w .fl .bj_fl1").removeClass("bj");
	$(".bj_con1").hide();
})
$(".w .fl .bj_con1 .bj_conn1 span").click(function(){
	$(this).addClass("bj_red").siblings().removeClass("bj_red");
	//$(this).find("a").css({"color":"#fff"});
	var arr = $(this).html();
	$(".w .fl .bj_fl1 span").html(arr);
	return false;
})
//二级菜单
$(".fr .fr_fr1").mousemove(function(){
	$(this).find(".bj_fr1").css({"background":"#fff","border":"1px solid #ccc","padding":"0 6px","border-bottom":0});
	$(this).children(".fr_con1").show();
})
$(".fr .fr_fr1").mouseout(function(){
	$(this).find(".bj_fr1").css({"background":0,"border":0});
	$(this).children(".fr_con1").hide();
})

//京东狗
$(function(){
	$(".header .header_l").mouseover(function(){
		$(this).children(".header_one").hide();
		$(this).children(".header_tow").animate({"z-index":10},function(){
			$(".header .header_l").children(".header_zi").animate({"z-index":12},2500,function(){
				$(".header .header_l").children(".header_one").show().animate({"z-index":13},1500);
			});
		})
	})
})
//轮播字
$(function(){
	let $inout_lb = $(".input_lb")
	let $inp = $(".input_con .input_con1");
	let index=0;
	let timer = setInterval(auto,2500);
	function auto(){
		index++;
		if(index==$(".input_lb a").size()){
			index = 0;
		}
		$inout_lb.eq(index).show().siblings().hide();
	}
	$inp.focus(function(){
		clearInterval(timer);
	})
	$inp.blur(function(){
		timer = setInterval(auto,2500);
	})
	$inp.keyup(function(){
		$inout_lb.hide();
	})
	if($inp.html() != ''){
		$inout_lb.hide();
	}else{
		$inout_lb.show();
	}
})
//输入框联想
	var txt = document.getElementById("txt");
	var oUl = document.getElementById("uul");
	function fn(data){
			for(var i = 0;i < data.s.length;i++){
				var li = document.createElement('li');
				li.innerHTML = data.s[i];
				oUl.appendChild(li);
			}
			for(var j = 0 ; j < oUl.children.length ; j++){
				oUl.children[j].onclick = function(){
					var arr = this.innerHTML;
					txt.value = arr;
					oUl.style.display="none";
				}
			}
		}
		
		txt.onkeyup = function(){
			oUl.innerHTML = '';
			var sc = document.createElement('script');
			sc.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.value+'&cb=fn';
			document.querySelector('head').appendChild(sc);
		}
$("#txt").keyup(function(){
	$(".input_con ul").addClass('lx');
})

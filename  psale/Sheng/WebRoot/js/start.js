// JavaScript Document
var i = 0;
$(document).ready(function() {
	$("#sysmessage").hide();
	$("#menu").hide();
	$("#login,#aboutsys,#tip,#copyright,#menu a").mouseover(function() {
		$(this).css("background", "red");
	});
	$("#login,#aboutsys,#tip,#copyright,#menu a").mouseout(function() {
		$(this).css("background", "none");
	});
	$("#systitle img").click(function() {
		$("#sysmessage").animate( {
			left : "0px",
			top : "0px",
			opacity : "hide"
		}, 1000);
	});
	//������ڱ�ϵͳ��Ч��
		$("#aboutsyslink").click(function() {
			var winx = $(window).width();
			var winy = $(window).height();
			var scrollleft = $(window).scrollLeft();
			var scrolltop = $(window).scrollTop();
			var x = parseFloat($("#sysmessage").css("width"));
			var y = parseFloat($("#sysmessage").css("height"));
			var realx = (winx + scrollleft - x) / 2;
			var realy = (winy + scrolltop - y) / 2;
			$("#sysmessage").animate( {
				left : realx + "px",
				top : realy + "px",
				opacity : "show"
			}, 1000);
		});

		$("#tip").click(function() {
			i++;
			if (i % 2 == 0) {
				$("#menu").hide();
			} else {
				var ls = $(this).offset();
				var tt = document.body.scrollTop + ls.top;
				var ll = document.body.scrollLeft + ls.left;
				$("#menu")[0].style.left = ll / 2 + "px";
				$("#menu")[0].style.top = tt - 230 + "px";
				$("#menu").show();
			}
		});
		//�����ڱ�ϵͳ�Ľ����������ƶ�,��������Ϊwindowʱ���Ա�����ֳ�����Χʱ���ֹ�����
		$("#sysmessage").draggable({ 
							containment:"window",
							scroll: false ,
							cursor:"move",
							opacity: 0.7
							});
	});
// JavaScript Document
var i = 0;
$(document).ready(function() {
	$("#sysmessage").hide();
	$("#menu").hide();
	$("#logoutdiv").hide();
	$("#saveandbackdiv").hide();
	$("#login,#aboutsys,#tip,#copyright,#menu a").mouseover(function() {
		$(this).css("background", "red");
	});
	$("#login,#aboutsys,#tip,#copyright,#menu a").mouseout(function() {
		$(this).css("background", "none");
	});
	
	$("#logout").mouseover(function(){
		$(this).css("background", "red");
	});
	
	$("#logout").mouseout(function(){
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
				$("#menu")[0].style.left = ll / 2 -20+ "px";
				$("#menu")[0].style.top = tt - 290+ "px";
				$("#menu").show();
			}
		});
		
		$("#menutitle").click(function() {
				i++;	
				$("#menu").hide();
		});
		//�����ڱ�ϵͳ�Ľ����������ƶ�,��������Ϊwindowʱ���Ա�����ֳ�����Χʱ���ֹ�����
		$("#sysmessage").draggable({ 
							containment:"window",
							scroll: false ,
							cursor:"move",
							opacity: 0.7
							});
		
		$("#menu").draggable({ 
							containment:"window",
							scroll: false ,
							cursor:"move",
							});
		
		$("#logout").click(function(){
			$("#logoutdiv").show();
			$.getJSON("Logoutaction.action",function(data){
				if(data.i==1){
					$("#logoutmessage").html("<font color='red'>���Ѿ��ɹ�ע��</font>");
					$("#logoutdiv").fadeOut(3000);
				}
				if(data.i==0){
					$("#logoutmessage").html("<font color='red'>������û�е�¼</font>");
					$("#logoutdiv").fadeOut(3000);
				}
			});
		});
	    /*��������*/
		$("#saveandback").click(function(){	
			$("#saveandbackdiv").show();
			$.getJSON("saveandbackaction",function(data){
			if(data.i==1){
		$("#saveandbackmessage").html("<font color='red'>�Ѿ��ɹ������ݿⱸ�ݵ�<font color='green'>C</font>���£��뼰ʱ���ñ���ת��</font>");
		$("#saveandbackdiv").fadeOut(3000);
			}else{
				$("#saveandbackmessage").html("<font color='red'>����ʱ����Щ���⣬�����Ƿ��ѱ����</font>");
				$("#saveandbackdiv").fadeOut(3000);
			}
		});
		});
	
	});
//��������ú�css��ʹ����л�ɫ
var yanse;
$(document).ready(function(){
	$("#reporttip").hide();
	$("tr:odd").css("background","#e7eef8");	
	$("tr").mouseover(function(){
		 yanse=$(this).css("background");
		$(this).css("background","grey");
	});
	$("tr").mouseout(function(){
			$(this).css("background",yanse);
	});
	
	//���ڵ���pdfʱ�Ľű�����
	$("#pdf").click(function(){
	    var x=$(window).width();
		var y=$(window).height();
		var scrollleft=$(window).scrollLeft();
		var scrolltop=$(window).scrollTop();
		var sx=parseFloat($("#reporttip").css("width"));
		var sy=parseFloat($("#reporttip").css("height"));
		var realx=(x+scrollleft-sx)/2;
		var realy=(y+scrolltop-sy)/2;
		$("#reporttip").css("left",realx);
		$("#reporttip").css("top",realy);
		$("#reporttip").fadeIn(1000).delay(5000).fadeOut(1000);
	});
});


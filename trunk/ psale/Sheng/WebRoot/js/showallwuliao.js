//��������ú�css��ʹ����л�ɫ
var yanse;
$(document).ready(function(){
	$("tr:odd").css("background","#e7eef8");	
	$("tr").mouseover(function(){
		 yanse=$(this).css("background");
		$(this).css("background","green");
	});
	$("tr").mouseout(function(){
			$(this).css("background",yanse);
	});
});


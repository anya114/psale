//��Ҫҳ����û��������
var yanse;
$(document).ready(function(){
		$("tr").mouseover(function(){
			yanse=$(this).css("background");
			$(this).css("background","green");	
		});
		$("tr").mouseout(function(){		
			$(this).css("background",yanse);	
		});
		$("tr").click(function(){
			$(this).css("background",yanse);	
		});
		$("a").click(function(){
			$(this).parent.parent.css("background",yanse);
		});
});

//��������ú�css��ʹ����л�ɫ
var yanse;
$(document).ready(function(){
	$("#lightbox").hide();
	$("#editwuliao").hide();
	$("#save")[0].onclick=saveproduct;
	$("#swuliao tr:odd").css("background","#e7eef8");	
	$("#swuliao tr").mouseover(function(){
		 yanse=$(this).css("background");
		$(this).css("background","grey");
	});
	$("#swuliao tr").mouseout(function(){
			$(this).css("background",yanse);
	});
	//����رհ�ť
	$("#editwuliaotitle").click(function(){
			$("#editwuliao").hide();
			$("#lightbox").hide();
	});
});
/*
�û�����༭����¼�
**/
function edit(s){
	var left=$(window).width()+document.body.scrollLeft;	
	var top=$(window).height()+document.body.scrollTop;
	var dwidth=$("#editwuliao")[0].width||$("#editwuliao").width();
	var dheight=$("#editwuliao")[0].height||$("#editwuliao").height();
	var realx=(left-dwidth)/2;
	var realy=(top-dheight)/2;
	$("#editwuliao")[0].style.left=realx+"px";
	$("#editwuliao")[0].style.top=realy+"px";
	$.getJSON("editproductaction.action",{flag:s},function(data){
		$("#id").val(data.id);
		$("#inname").val(data.inname);
		$("#innum").val(data.innum);
		$("#inprice").val(data.inprice);
		$("#inuserid").val(data.inuserid);
		$("#indate").val(data.indate);
		$("#detail").val(data.detail);
	});
	$("#lightbox").show();
	$("#editwuliao").show();
}
/*
�û��޸Ĺ���Ϣ֮�󣬵�����水ťʱִ�еĲ���
**/
function saveproduct(){
		var id=$("#id").val();
		var inname=encodeURI(encodeURI($("#inname").val()));
		var innum=$("#innum").val();
		var inprice=$("#inprice").val();
		var inuserid=$("#inuserid").val();
		var indate=$("#indate").val();
		var detail=encodeURI(encodeURI($("#detail").val()));
		$.getJSON("modifyproductaction.action",{pid:id,inname:inname,innum:innum,inprice:inprice,inuserid:inuserid,indate:indate,detail:detail},function(data){
			if(data.flag==0){
				alert("false");
			}else{
				window.location.reload();
				$("#editwuliao").hide();
				$("#lightbox").hide();
			}
		});
}


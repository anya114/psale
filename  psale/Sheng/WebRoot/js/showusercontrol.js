//�û�����ҳ�����js
$(document).ready(function(){
				$("#lightbox").hide();
				$("#edituser").hide();
				closeedit();
				$("#save")[0].onclick=savenewuser;
});
//����༭����¼�
function edit(s){
	var left=$(window).width()+document.body.scrollLeft;	
	var top=$(window).height()+document.body.scrollTop;
	var dwidth=$("#edituser")[0].width||$("#edituser").width();
	var dheight=$("#edituser")[0].height||$("#edituser").height();
	var realx=(left-dwidth)/2;
	var realy=(top-dheight)/2;
	$("#edituser")[0].style.left=realx+"px";
	$("#edituser")[0].style.top=realy+"px";
	$.getJSON("edituseraction.action",{id:s},function(data){
		$("#userid").val(data.userid);
		$("#username").val(data.username);
		$("#passwd").val(data.passwd);
	});
	$("#lightbox").show();
	$("#edituser").show();
}
//�رձ༭ҳ��
function closeedit(){
	$("#title").children("img").click(function(){
		$("#edituser").hide();
		$("#lightbox").hide();
	});
}
//�����û��޸ĺ��ύ��Ϣ
function savenewuser(){
		var userid=$("#userid").val();
		var username=encodeURI(encodeURI($("#username").val()));
		//var username=$("#username").val();
		var passwd=$("#passwd").val();
	  $.getJSON("modifyaction.action",{userid:userid,username:username,passwd:passwd},function(data){
		if(data.flag==0){
			alert("false");
		}else{
			window.location.reload();
			$("#edituser").hide();
			$("#lightbox").hide();
		}
	});
		
	/*$.ajax({
		type:"POST",
		url:"modifyaction.action",
		date:"userid="+userid+"&username="+username+"&passwd="+passwd+"",
		dateType:"json",
		error:function(msg){
			alert("���������ʧ��");
		},
		success:function(msg){
			alert(msg.flag);
			if(msg.flag==0){
			alert("����ʧ��");
		}else{
			window.location.reload();
			$("#edituser").hide();
			$("#lightbox").hide();
		}
		}
	});*/
}
// JavaScript Document
// ����½ʱ������
$(function(){
		   $("#useriderror").hide();
		   $("#passwderror").hide();
		   })
//���id�Ƿ�Ϸ�
function checkuserid(t){
	var userid=$("#userid").val();
	var l=$(t).offset();
	rs=/[0-9]+/;
	if(rs.test(userid)){
		$("#useriderror").hide();
		$("#userid").removeClass("username");
		return true;
		}
		else{
			var tt=l.top-35+document.body.scrollLeft;
			var ll=l.left+130+document.body.scrollTop;
			$("#useriderror")[0].style.left=ll+"px";
			$("#useriderror")[0].style.top=tt+"px";
			$("#useriderror").show();
			$("#userid").addClass("username");
			 return false;
			}
	}
//����û����밲ȫ����Ĭ��������λ
function checkpasswd(t){
	var passwd=$.trim($("#passwd").val());
	var l=$(t).offset();
	if(passwd.length<6){
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#passwderror")[0].style.left=ll+"px";
		$("#passwderror")[0].style.top=tt+"px";
		$("#passwderror").show();
		$("#passwd").addClass("username");
		 return false;
	}
	else{
		$("#passwderror").hide();
		$("#passwd").removeClass("username");
		return true;
	}	
}
//�ύ��β���
function tijiao(){
	if(checkuserid()){
		return true;
	}else{
		return false;
	}
}
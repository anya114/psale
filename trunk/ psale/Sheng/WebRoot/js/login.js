// JavaScript Document
var a=0,b=0;
// ����½ʱ������
$(function(){
		   $("#useriderror").hide();
		   $("#passwderror").hide();
		   $("#submitmessage").hide();
		   })
//���id�Ƿ�Ϸ�
function checkuserid(t){
	var userid=$("#userid").val();
	var l=$(t).offset();
	rs=/[0-9]+/;
	if(rs.test(userid)){
		$(this).hidediv("useriderror","userid");
		a=1;
		return true;
		}
		else{
			$(this).getpos(l,"useriderror","userid");
			return false;
			}
	}
//����û����밲ȫ����Ĭ��������λ
function checkpasswd(t){
	var passwd=$.trim($("#passwd").val());
	var l=$(t).offset();
	if(passwd.length<6){
		$(this).getpos(l,"passwderror","passwd");
		 return false;
	}
	else{
		$(this).hidediv("passwderror","passwd");
		b=1;
		return true;
	}	
}

//�ύ������
function tijiao(){
	if(a==1&&b==1){
		return true;
	}else{
		$("#submitmessage").show().delay(1000).fadeOut(2000);
		return false;
	}
}


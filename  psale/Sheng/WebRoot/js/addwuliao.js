//�������ʱ��js��֤
var a=0,b=0,c=0,d=0,e=0;
$(document).ready(function(){
	$("#innameerror").hide();
	$("#innumerror").hide();
	$("#inpriceerror").hide();
	$("#inuseriderror").hide();
	$("#unuseridexit").hide();
	$("#submitmessage").hide();
	//��ֹ��ͳ�¼�ģʽ�ı׶ˡ�ע�����¼��㱨 ����̫��
	$("#inuserid").blur(function(){
			var s=$(this)[0];
		if(checkuserid(s)){
			checkuseridexit(s);
		}
	});
});
//����Ʒ���Ʋ���Ϊ��
function checkinname(t){
	var inname=$.trim($("#inname").val());
	var l=$(t).offset();
	if(inname.length==0){
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#innameerror")[0].style.left=ll+"px";
		$("#innameerror")[0].style.top=tt+"px";
		$("#innameerror").show();
		$("#inname").addClass("username");
		return false;
	}
	else{
		$("#innameerror").hide();
		$("#inname").removeClass("username");
		a=1;
		return true;
	}
}
//������ݿ����Ƿ����ָ���Ĳ�Ʒ���ƣ���ʱ�ȷ��ţ�����Ҫ����д----------------------���ʱ����Ҫ������Ƶ�

//���������飬����Ϊ����
function checkinnum(t){
	var innum=$.trim($("#innum").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(innum)){
		$("#innumerror").hide();
		$("#innum").removeClass("username");
		b=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#innumerror")[0].style.left=ll+"px";
		$("#innumerror")[0].style.top=tt+"px";
		$("#innumerror").show();
		$("#innum").addClass("username");
		return false;
	}
}
//��Ʒ�۸�Ϊ�������
function checkinprice(t){
	var inprice=$.trim($("#inprice").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(inprice)){
		$("#inpriceerror").hide();
		$("#inprice").removeClass("username");
		c=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#inpriceerror")[0].style.left=ll+"px";
		$("#inpriceerror")[0].style.top=tt+"px";
		$("#inpriceerror").show();
		$("#inprice").addClass("username");
		return false;
	}
}
//�����Ա�������Ϊ����
function checkuserid(t){
	var inuserid=$.trim($("#inuserid").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(inuserid)){
		$("#inuseriderror").hide();
		$("#inuserid").removeClass("username");
		d=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#inuseriderror")[0].style.left=ll+"px";
		$("#inuseriderror")[0].style.top=tt+"px";
		$("#inuseriderror").show();
		$("#inuserid").addClass("username");
		return false;
	}
}
//��鹤�������ݿ����Ƿ����
function checkuseridexit(t){
	var inuserid=$("#inuserid").val();
	var l=$(t).offset();
	if(checkuserid()){
		$.getJSON("Checkaduseraction.action",{inuserid:inuserid},function(date){
			if(date.message==1){
				$("#content").html("<font color='red'>��ID�����ڣ�����</font>");
				var tt=l.top-35+document.body.scrollLeft;
				var ll=l.left+130+document.body.scrollTop;
				$("#unuseridexit")[0].style.left=ll+"px";
				$("#unuseridexit")[0].style.top=tt+"px";
				$("#unuseridexit").show();
			}
			else{
				e=1;
				$("#unuseridexit").hide();
			}
		});	
	}	
}
//���ύʱ�Ĳ���
function checksubmit(){
	if(a==1&&b==1&&c==1&&d==1&&e==1){
		return true;
	}else{
		$("#submitmessage").show().delay(1000).fadeOut(2000);
		return false;
	}
}
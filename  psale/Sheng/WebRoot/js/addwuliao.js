//�������ʱ��js��֤
var a=0,b=0,c=0,d=0,e=0,f=0,g=0;
$(document).ready(function(){
	$("#innameerror").hide();
	$("#innumerror").hide();
	$("#inpriceerror").hide();
	$("#inuseriderror").hide();
	$("#unuseridexit").hide();
	$("#submitmessage").hide();
	$("#piderror").hide();
	$("#pidexisterror").hide();
	//��ֹ��ͳ�¼�ģʽ�ı׶ˡ�ע�����¼��ᱨ ����̫��
	$("#pid").blur(function(){
		var s=$(this)[0];
		if(checkpid(s)){
			checkpidexit(s);
		}
	});
	$("#inuserid").blur(function(){
			var s=$(this)[0];
		if(checkuserid(s)){
			checkuseridexit(s);
		}
	});
});
//����Ʒ��Ų���Ϊ�ն��Ҳ��ܲ�����
function checkpid(t){
	var pid=$.trim($("#pid").val());
	var l=$(t).offset();
	if(pid.length==0){
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#piderror")[0].style.left=ll+"px";
		$("#piderror")[0].style.top=tt+"px";
		$("#piderror").show();
		$("#pid").addClass("username");
		return false;
	}
	else{
		$("#piderror").hide();
		$("#pid").removeClass("username");
		f=1;
		return true;
	}
}

//����Ʒ����Ƿ����
function checkpidexit(t){
	var l=$(t).offset();
	var pid=$.trim($("#pid").val());
	if(checkpid()){
		$.getJSON("checkpidexistaction.action",{pid:pid},function(data){
			if(data.message==0){
				$("#pidexistmessage").html("<font color='red'>�˲�ƷID�Ѵ��ڣ���ȷ���������</font>");
				var tt=l.top-35+document.body.scrollLeft;
				var ll=l.left+130+document.body.scrollTop;
				$("#pidexisterror")[0].style.left=ll+"px";
				$("#pidexisterror")[0].style.top=tt+"px";
				$("#pidexisterror").show();
				return false;
			}else{
				g=1;
				$("#pidexisterror").hide();
				return true;
			}
		});
	}
}

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
	if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1&&g==1){
		return true;
	}else{
		$("#submitmessage").show().delay(1000).fadeOut(2000);
		return false;
	}
}
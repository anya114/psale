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
		$(this).getpos(l,"piderror","pid");
		return false;
	}
	else{
		$(this).hidediv("piderror","pid");
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
		$(this).getpos(l,"innameerror","inname");
		return false;
	}
	else{
		$(this).hidediv("innameerror","inname");
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
		$(this).hidediv("innumerror","innum");
		b=1;
		return true;
	}else{
		$(this).getpos(l,"innumerror","innum");
		return false;
	}
}
//��Ʒ�۸�Ϊ�������
function checkinprice(t){
	var inprice=$.trim($("#inprice").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(inprice)){
		$(this).hidediv("inpriceerror","inprice");
		c=1;
		return true;
	}else{
		$(this).getpos(l,"inpriceerror","inprice");
		return false;
	}
}
//�����Ա�������Ϊ����
function checkuserid(t){
	var inuserid=$.trim($("#inuserid").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(inuserid)){
		$(this).hidediv("inuseriderror","inuserid");
		d=1;
		return true;
	}else{
		$(this).getpos(l,"inuseriderror","inuserid");
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
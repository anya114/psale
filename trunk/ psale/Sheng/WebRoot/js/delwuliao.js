//ɾ������ʱ��js��֤
var a=0,b=0,c=0,d=0,e=0,f=0,g=0;
$(document).ready(function(){
	$("#outnameerror").hide();
	$("#outnumerror").hide();
	$("#outpriceerror").hide();
	$("#outuseriderror").hide();
	$("#outnummessage").hide();
	$("#outnamemessage").hide();
	$("#outuseridmessage").hide();
	$("#submitmessage").hide();
	$("#purchasererror").hide();
	//��ֹ��ͳ�ķ�ʽ�������⣬����������ע����һ���¼��ϳ��ֵ�����
	$("#pid").blur(function(){
		var s=$(this)[0];
		if(checkpid(s)){
			checkpidexit(s);//����д��if(checkpidexit(s))
			getpname();
		}
	});
	$("#outuserid").blur(function(){
		var t=$(this)[0];
		if(checkuserid(t)){
			checkuseridexit(t);
		}
	});
});
//�����ƷID����Ϊ��
function checkpid(t){
	var pid=$.trim($("#pid").val());
	var l=$(t).offset();
	if(pid.length==0){
		$(this).getpos(l,"outnameerror","pid");
		return false;
	}
	else{
		$(this).hidediv("outnameerror","pid");
		a=1;
		return true;
	}
}
//����ƷID�Ƿ����
function checkpidexit(t){
	var pid=$.trim($("#pid").val());
	var l=$(t).offset();
		$.getJSON("Checkoutnameaction.action",{pid:pid},function(date){
			if(date.message==1){
				$("#contentoutname").html("<font color='red'>�����������ı�ţ���ȷ���������?</font>");
				var tt=l.top-35+document.body.scrollLeft;
				var ll=l.left+130+document.body.scrollTop;
				$("#outnamemessage")[0].style.left=ll+"px";
				$("#outnamemessage")[0].style.top=tt+"px";
				$("#outnamemessage").show();
			}else{
				$("#outnamemessage").hide();
				b=1;
			}
		});
}
//�õ�ָ��ID�Ĳ�Ʒ����
function getpname(){
	var pid=$.trim($("#pid").val());
	$.getJSON("getpnameaction.action",{pid:pid},function(date){
		if(date.message.length==0){
			alert("û�������Ʒ");
		}else{
			$("#outname").val(date.message);
		}
	});
}
//����������飬����Ϊ����
function checkoutnum(t){
	var outnum=$.trim($("#outnum").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(outnum)){
		$(this).hidediv("outnumerror","outnum");
		c=1;
		return true;
	}else{
		$(this).getpos(l,"outnumerror","outnum");
		return false;
	}
}
//��Ʒ�۸�Ϊ�������
function checkoutprice(t){
	var outprice=$.trim($("#outprice").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(outprice)){
		$(this).hidediv("outpriceerror","outprice");
		d=1;
		return true;
	}else{
		$(this).getpos(l,"outpriceerror","outprice");
		return false;
	}
}
//�����Ա�������Ϊ����
function checkuserid(t){
	var outuserid=$.trim($("#outuserid").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(outuserid)){
		$("#outuseriderror").hide();
		$("#outuserid").removeClass("username");
		$(this).hidediv("outuseriderror","outuserid");
		e=1;
		return true;
	}else{
		$(this).getpos(l,"outuseriderror","outuserid");
		return false;
	}
}
//�����Ա�����Ƿ����Ҳ�ü��
function checkuseridexit(t){
	var inuserid=$("#outuserid").val();
	var l=$(t).offset();
	if(checkuserid()){
		$.getJSON("Checkaduseraction.action",{inuserid:inuserid},function(date){
			if(date.message==1){
				$("#contentuserid").html("<font color='red'>��ID�������ڣ���ȷ���������</font>");
				var tt=l.top-35+document.body.scrollLeft;
				var ll=l.left+130+document.body.scrollTop;
				$("#outuseridmessage")[0].style.left=ll+"px";
				$("#outuseridmessage")[0].style.top=tt+"px";
				$("#outuseridmessage").show();
			}else{
				$("#outuseridmessage").hide();
				f=1;
			}
		});	
	}	
}
//���˿������Ƿ�Ϊ��
function checkpurchaser(t){
	var purchaser=$.trim($("#purchaser").val());
	var l=$(t).offset();
	if(purchaser.length!=0){
		$(this).hidediv("purchasererror","purchaser");
		g=1;
		return true;
	}else{
		$(this).getpos(l,"purchasererror","purchaser");
		return false;
	}
}
//���û�����ʱ���ָ���Ĳ�Ʒ���������ݲ�ʹ��
function checkrnum(t){
	var outname=$.trim($("#outname").val());
	
	//�����û�������Ʒ����
	if(outname.length==0){
		//��������Ӧ����ʾ��Ϣ
		$("#outnummessage").show(200).delay(1000).hide();
	}
	else{
		$("#outnummessage").hide();
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
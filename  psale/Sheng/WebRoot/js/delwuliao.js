//ɾ������ʱ��js��֤
var a=0,b=0,c=0,d=0,e=0,f=0;
$(document).ready(function(){
	$("#outnameerror").hide();
	$("#outnumerror").hide();
	$("#outpriceerror").hide();
	$("#outuseriderror").hide();
	$("#outnummessage").hide();
	$("#outnamemessage").hide();
	$("#outuseridmessage").hide();
	$("#submitmessage").hide();
	//��ֹ��ͳ�ķ�ʽ�������⣬����������ע����һ���¼��ϳ��ֵ�����
	$("#outname").blur(function(){
		var s=$(this)[0];
		if(checkoutname(s)){
			checkoutnameexit(s);
		}
	});
	$("#outuserid").blur(function(){
		var t=$(this)[0];
		if(checkuserid(t)){
			checkuseridexit(t);
		}
	});
});
//�����Ʒ���Ʋ���Ϊ��
function checkoutname(t){
	var outname=$.trim($("#outname").val());
	var l=$(t).offset();
	if(outname.length==0){
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#outnameerror")[0].style.left=ll+"px";
		$("#outnameerror")[0].style.top=tt+"px";
		$("#outnameerror").show();
		$("#outname").addClass("username");
		return false;
	}
	else{
		$("#outnameerror").hide();
		$("#outname").removeClass("username");
		a=1;
		return true;
	}
}
//����Ʒ�����Ƿ����
function checkoutnameexit(t){
	var outname=$.trim($("#outname").val());
	var l=$(t).offset();
	if(checkoutname()){
		$.getJSON("Checkoutnameaction.action",{outname:outname},function(date){
			if(date.message==1){
				$("#contentoutname").html("<font color='red'>�����������Ĳ�Ʒ����ȷ���������?</font>");
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
}
//����������飬����Ϊ����
function checkoutnum(t){
	var outnum=$.trim($("#outnum").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(outnum)){
		$("#outnumerror").hide();
		$("#outnum").removeClass("username");
		c=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#outnumerror")[0].style.left=ll+"px";
		$("#outnumerror")[0].style.top=tt+"px";
		$("#outnumerror").show();
		$("#outnum").addClass("username");
		return false;
	}
}
//��Ʒ�۸�Ϊ�������
function checkoutprice(t){
	var outprice=$.trim($("#outprice").val());
	var l=$(t).offset();
	var rs=/\d+/;
	if(rs.test(outprice)){
		$("#outpriceerror").hide();
		$("#outprice").removeClass("username");
		d=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#outpriceerror")[0].style.left=ll+"px";
		$("#outpriceerror")[0].style.top=tt+"px";
		$("#outpriceerror").show();
		$("#outprice").addClass("username");
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
		e=1;
		return true;
	}else{
		var tt=l.top-35+document.body.scrollLeft;
		var ll=l.left+130+document.body.scrollTop;
		$("#outuseriderror")[0].style.left=ll+"px";
		$("#outuseriderror")[0].style.top=tt+"px";
		$("#outuseriderror").show();
		$("#outuserid").addClass("username");
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
	if(a==1&&b==1&&c==1&&d==1&&e==1&&f==1){
		return true;
	}else{
		$("#submitmessage").show().delay(1000).fadeOut(2000);
		return false;
	}
}
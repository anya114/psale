// JavaScript Document
// ���ע��ʱ������
var a = 0, b = 0, c = 0, d = 0;
$(function() {
	$("#useriderror").hide();
	$("#passwderror").hide();
	$("#usernameerror").hide();
	$("#usermessage").hide();
	$("#submitmessage").hide();
	//�����ͳ��ʽע������������
	$("#userid").blur(function() {
		var s = $(this)[0];
		if (checkuserid(s)) {
			checkuserexit(s);
		}
	});
})
//����û�id
function checkuserid(t) {
	var userid = $.trim($("#userid").val());
	var l = $(t).offset();
	rs = /[0-9]+/;
	if (rs.test(userid)) {
		$(this).hidediv("useriderror", "userid");
		a = 1;
		return true;
	} else {
		$(this).getpos(l, "useriderror", "userid");
		return false;
	}
}
//����û����밲ȫ����Ĭ��������λ
function checkpasswd(t) {
	var passwd = $.trim($("#passwd").val());
	var l = $(t).offset();
	if (passwd.length < 6) {
		$(this).getpos(l, "passwderror", "passwd");
		return false;
	} else {
		$(this).hidediv("passwderror", "passwd");
		b = 1;
		return true;
	}
}
//����û�������Ϊ��
function checkusername(t) {
	var username = $.trim($("#username").val());
	var l = $(t).offset();
	if (username.length == 0) {
		$(this).getpos(l, "usernameerror", "username");
		return false;
	} else {
		$(this).hidediv("usernameerror", "username");
		c = 1;
		return true;
	}
}
//������ݿ������Ƿ���ڸ�id��
function checkuserexit(t) {
	var userid = $.trim($("#userid").val());
	var l = $(t).offset();
	if (checkuserid()) {
		$.getJSON("Checkuseraction.action", {
			userid : userid
		}, function(date) {
			if (date.showmessage == 1) {
				$("#useridcontent").html(
						"<font color='red'>���ID�Ѿ���ʹ�ù��ˣ�����ѡһ��</font>");
				var tt = l.top - 35 + document.body.scrollLeft;
				var ll = l.left + 130 + document.body.scrollTop;
				$("#usermessage")[0].style.left = ll + "px";
				$("#usermessage")[0].style.top = tt + "px";
				$("#usermessage").show();
			} else {
				d = 1;
				$("#usermessage").hide();
			}
		});
	}
}
//�ύ��β���
function tijiao() {
	if (a == 1 && b == 1 && c == 1 && d == 1) {
		return true;
	} else {
		$("#submitmessage").show().delay(1000).fadeOut(2000);
		return false;
	}
}

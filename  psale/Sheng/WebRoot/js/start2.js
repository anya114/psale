// JavaScript Document
$(document).ready(function(){
						   $("#movemessage").hide();
						   $("#mainmenu2").draggable({cursor:"move"});
						   $("#movemessage").draggable({cursor:"move"});
						   $("#movemessage").resizable({alsoResize:"#closetip"});
						   $("#movemessage").resizable({alsoResize:"#movemessage2"});
						   $("#movemessage2").resizable();
						   $("#mainmenu2").resizable({alsoResize:"#t1"});
						   $("#t1").resizable();
						   });
//�ر�����
function closecal(){
	$("#mainmenu2").fadeOut(2000);
	}
//�û����ϱ��ʱ���¼�
function showmessage(objevent,day){
	var divobj=$("#movemessage")[0];
	divobj.style.left=document.body.scrollLeft+objevent.clientX+5+"px";
	divobj.style.top=document.body.scrollTop+objevent.clientY+5+"px";
	divobj.style.display="block";
	//�˴���������ajax��ú�̨���ݲ���ʾ��div��
	$("#movemessage2").html(day+"���ｫ����ʾ�������ʾ��Ϣ������������ʾ��������Ҫ�������Ƿ���Զ��Ǹ�����"+"<a href='http://www.baidu.com/' target='_blank'>ȥ�ٶȿ���</a>");
	$("#movemessage").show();
	}
//���û����ϵ���ʾdiv��ʱ���¼�
function divmouseover(){
	$("#movemessage2").focus();
	}
//�û��뿪ʱ���¼�
function closemessage(){
	 $("#movemessage").fadeOut(1000);
	}


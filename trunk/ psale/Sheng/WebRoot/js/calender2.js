// JavaScript Document
var x;
var i=0;
var x=0;
var Today;
// ��ǰʱ����Ϣ
var date;
var Month;
var Year ;
$(document).ready(function(){
						   $("#dialog").hide();
		 					$("#comeback").hide();
						   if(i==0){
							   Today = new Date();
							   date= Today.getDate();//��ȡ�����ﵱ�����ڵ���
							   Month = Today.getMonth();
							   Year= Today.getYear();
							   }
						   start();
						   });
//�ص����������
function comeback(){
	Today = new Date();
	date= Today.getDate();//��ȡ�����ﵱ�����ڵ���
	Month = Today.getMonth();
	Year= Today.getYear();
	$("table").remove();
	start();
	$("#comeback").fadeOut(1000);
	}
//++
function countadd(){
		i++;
		if(i!=0){
			x=1;
			$("#comeback").fadeIn(1000);
			}else{
				x==0;
				$("#comeback").fadeOut(1000);
				}
		Month=Month+1;
		if(Month<=11){
			Today=new Date(Year,Month,date);//�겻��
			$("table").remove();
			start();
			}
		else{
			Month=Month-12;
			Year=Year+1;
			Today=new Date(Year,Month,date);//��䣬�±�
			$("table").remove();
			start();
			}
	}
//--
function countpase(){
	i--;
	if(i!=0){
			x=1;
			$("#comeback").fadeIn(1000);
			}else{
				x==0;
				$("#comeback").fadeOut(1000);
				}
	Month=Month-1;
	if(Month>0){
		Today=new Date(Year,Month,date);//�겻��
		$("table").remove();
		start();
		}
	else{
		Month=11;
		Year=Year-1;
		Today=new Date(Year,Month,date);//��䣬�±�
		$("table").remove();
		start();
		}
	}
/*

���ĳ��򣬹�������
**/
function start(){
	var Weekday = new Array();
	Weekday[0] = "������";
	Weekday[1] = "����һ";
	Weekday[2] = "���ڶ�";
	Weekday[3] = "������";
	Weekday[4] = "������";
	Weekday[5] = "������";
	Weekday[6] = "������";
	var MonthA = new Array();
	MonthA[0] = "һ��";
	MonthA[1] = "����";
	MonthA[2] = "����";
	MonthA[3] = "����";
	MonthA[4] = "����";
	MonthA[5] = "����";
	MonthA[6] = "����";
	MonthA[7] = "����";
	MonthA[8] = "����";
	MonthA[9] = "ʮ��";
	MonthA[10] = "ʮһ��";
	MonthA[11] = "ʮ����";
	var Mdays = new Array();
	Mdays[0] = 31;
	Mdays[1] = 28;
	Mdays[2] = 31;
	Mdays[3] = 30;
	Mdays[4] = 31;
	Mdays[5] = 30;
	Mdays[6] = 31;
	Mdays[7] = 31;
	Mdays[8] = 30;
	Mdays[9] = 31;
	Mdays[10] = 30;
	Mdays[11] = 31;
// ��day��������i���Ƹߣ�j������ƿ������7��ÿ������������
	var day = 1;
	var i, j;
// �õ���������
	if (Year < 2000) {
		Year += 1900;
	}
//��ȡָ����Ϣ
 dow= Today.getDay();//��ȡ����������ĵ�������
//������ж�
	if ((Year % 400 == 0) || ((Year % 4 == 0) && (Year % 100 !=0)))
		Mdays[1] = 29;
//������һ��
	var Mfirst = Today;
	Mfirst.setDate(1);
	var dow1 = Mfirst.getDay();//����ֵΪ1��������֪��ÿ�µĵ�һ��
// Ϊ��ǰ����������
var t1=$("<table cellpadding=0 cellspacing=0 width=350 height=300 id='t1'>" +
		"<div id='t2'><tr background='white'><th colspan=7 align=center><font color='red' size=4><a href='javascript:countpase()'><<</a></font>" + MonthA[Month] + " " + Year + "<font color='red' size=4><a href='javascript:countadd()'>>></a></font></th></tr></div><tr bgcolor='#e7eef8' id='t3'><th>��</th><th>һ</th><th>��</th><th>��</th>" +
		"<th>��</th><th>��</th><th>��</th></tr>");
	var mainmenu=$("#mainmenu2")[0];
	t1.appendTo($("#mainmenu2"));
	for (i = 0; i < 6; i++) {
// �������һ�������
		var t2=$("<tr>");
		t2.appendTo(t1);
		for (j = 0; j < 7; j++) {
// ȷ����Щ���Ǳ���ʾ��
			if ((i == 0 && j < dow1) || (day > Mdays[Month])) {
// ʹ��ÿ���µ��ǿհ��У��������ڵ����ڲ���ʾ
				var t3=$("<td><br></td>");
				t3.appendTo(t2);
			} else {
				if (day == date) {
// ����ǰʱ�ڸ���
				var t4=$("<td bgcolor=#e7eef8 align='center'><span id='"+day+"' onmouseover='showmessage(event,"+day+")'>"+day+"</span></td>");
				t4.appendTo(t2);
				} else {
// ��ʾ�����Ķ�Ӧ����
			var t5=$("<td  align='center' ><span id='"+day+"' onmouseover='showmessage(event,"+day+")'>" + day + "</span></td>");
				t5.appendTo(t2);
				}
// ����Ӧ������++
				day++;
			}
		}
// �������
		var t6=$("</tr>");
		t2.after(t6);
		if (day > Mdays[Month]) {
			i = 6;
		}
	}
	var t7=$("</table>");
	t1.after(t7);
	}
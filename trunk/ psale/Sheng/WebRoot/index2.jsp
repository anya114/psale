<%@ page language="java" contentType="text/html; charset=GB18030"
    pageEncoding="GB18030"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
<title>�ҵĲֿ����ƽ̨</title>
<link  href="base/jquery.ui.all.css" rel="stylesheet" />
<link  rel="stylesheet" href="css/mainpage.css"/>
<link href="css/circleconer.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="img/favicon.ico"/>
<script language="javascript" src="js/jquery-1.4.2.js"></script>
	<script language="javascript" src="js/jquery.ui.core.js"></script>
	<script language="javascript" src="js/jquery.ui.widget.js"></script>
	<script language="javascript" src="js/jquery.ui.mouse.js"></script>
	<script language="javascript" src="js/jquery.ui.draggable.js"></script>
	<script language="javascript" src="js/start.js"></script>
</head>
<body>
<div id="mainmenu" class="tts" style="visibility:visible;display:block;">
	<div id="login"><a href="index.jsp">��½</a></div>
    <div id="aboutsys"><a href="#" id="aboutsyslink">���ڱ�ϵͳ</a></div>
    <div id="tip"><a href="#">�˵�</a></div>
    <div id="logout"><a href="#">ע����¼</a></div>
    <div id="copyright"><font size="3" color="red"><a href="#">author:zqiangzhang@gmail.com</a></font></div>
</div>
<div id="menu">
	<div id="menutitle"><img src="img/close.gif"/></div>
	<table width="580" height="250">
	<tr>
		<td><div align="center"><a href="delwuliao.jsp">����</a></div></td>
		<td><div align="center"><a href="addwuliao.jsp">���</a></div></td>
	</tr>
	<tr>
		<td><div align="center"><a href="lookwuliaoaction.action">�鿴���</a></div></td>
		<td><div align="center"><a href="lookallproducts.action">��Ʒ����</a></div></td>
	</tr>
	<tr>
		<td><div align="center"><a href="lookalluseraction.action">��Ա����</a></div></td>
		<td><div align="center"><a href="#">����ӹ���</a></div></td>
	</tr>
	<tr>
		<td><div align="center"><a href="#">����ӹ���</a></div></td>
		<td><div align="center"><a href="#">����ӹ���</a></div></td>
	</tr>
	<tr>
		<td><div align="center"><a href="lookallwuliaobf.action">�鿴������ⵥ</a></div></td>
		<td><div align="center"><a href="adduser.jsp">��ӹ�����Ա</a></div></td>
	</tr>
	<tr>
		
		<td><div align="center"><a href="lookoutaction.action">�鿴���г��ⵥ</a></div></td>
		<td><div align="center"><a href="Lookpersonsubmit.jsp">�鿴������Ա����</a></div></td>
	</tr>
	</table>
</div>
<div id="sysmessage">
	<div id="systitle"><img src="img/close.gif"/></div>
	<div id="syscontent">
		��ϵͳ����java��д�����ݿ����������mysql�����Ĺ���Ϊ�����档ĿǰΪSale RC-2�����滹��Щ�ɼ��벻�ɼ��Ĵ���
		<p>ֻ�в��ϲ��ԣ�Sale�Ż᲻�ϳɳ�������ʹ�òŻ�������ʣ�����ڲ��Թ��������������⣬�뽫���¼�������������������</p>
		������ԵĻ���������ϵ<font color="red">QQ525091883.</font>
		ĿǰRC-3�����ڱ�д�У���Ҫ�ǶԺ�̨�Ͳ���ǰ̨���޸ġ�ʹ�����ܸ��ã�������չ�������Ժ�ʹ���������ݿ������<br/>
		Ԥף������������
	</div>
</div>
<br/><br/><br/><br/><br/><br/><br/>


<div align="center" id="logoutdiv">
	<div id="contain" class="contain">
	<div class="containtop">
    	<div class="tleft"></div>
        <div class="tright"></div>
    </div>
    <div class="containrcenter">
    	
    	<div class="containcenter2">    	
    		<div id="logoutmessage">��ȴ�......</div>
    	</div>
        
    </div>
    <div class="containbottom">
    	<div class="bleft"></div>
        <div class="bright"></div>
    </div>
</div>
</div>
</body>
</html>

<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��Ա����</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="js/jquery-1.4.2.js"></script>
		<script language="javascript" src="js/showallperson.js"></script>
		<script language="javascript" src="js/showusercontrol.js"></script>
	</head>
	<body>
		<h3 align="center">
			��Ա����
		</h3>
		<hr />
		<div align="center" id="personmana">
			<table border="1" cellpadding="0" cellspacing="0" width="600" bordercolor="#c3d9ff">
				<tr background="img/back.png" height="30">
					<td>
						�û�ID
					</td>
					<td>
						�û���
					</td>
					<td>
						�û�����
					</td>
					<td>
						�༭
					</td>
				</tr>
				<s:iterator value="ls" status="ls">
					<tr>
					<td id="<s:property value='userid'/>">
						<s:property value="userid" />
					</td>
					<td>
						<s:property value="username" />
					</td>
					<td>
						<s:property value="passwd" />
					</td>
					<td>
						<a href="javascript:edit(<s:property value="userid"/>)">�༭</a>
					</td>
					</tr>
				</s:iterator>
			</table>
		</div>
		<div id="lightbox"></div>
		<div id="edituser">
			<div id="title"><img src="img/close.gif"/></div>
			<div id="contentt">
				<table width="400" height="280" cellpadding="0" cellspacing="0" border="1" bordercolor="#c3d9ff">
						<tr>
							<td class="STYLE3">�û�ID</td>
							<td><input type="text" id="userid"/></td>
						</tr>
						<tr>
							<td class="STYLE3">�û���</td>
							<td><input type="text" id="username"/></td>
						</tr>
						<tr>							
							<td class="STYLE3">�û�����</td>
							<td><input type="text" id="passwd"/></td>
						</tr>
						<tr>
							<td colspan="2" align="center"><input type="button" id="save" class="STYLE3" value="����"/></td>
						</tr>
				</table>
			</div>
		</div>
	</body>
</html>
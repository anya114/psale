<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��½ҳ��</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<link href="css/mycss2.css" rel="stylesheet" type="text/css" />
		<link href="css/wrongmessage.css" rel="stylesheet" type="text/css" />
		<link href="css/circleconer.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="img/favicon.ico"/>
		<script language="javascript" src="js/jquery-1.4.2.js"></script>
		<script language="javascript" src="js/commonplugin.js"></script>
		<script language="javascript" src="js/login.js"></script>
	</head>
	<body>
		<h3 align="center">
			��¼ҳ��
		</h3>
		<a href="index2.jsp">������ҳ</a>
		<hr />
		<div id="login" class="circlecorner3">
		<div align="center" class="circlecontent3">
			<form action="loginaction.action" onSubmit="return tijiao();" method="post">
				<table width="380" height="210" border="0" cellpadding="1" cellspacing="1">
					<tr>
						<td>
							<span class="STYLE3">�û�ID</span>
						</td>
						<td>
							<input type="text" name="userid" id="userid"
								onBlur="checkuserid(this)" />
						</td>
					</tr>
					<tr>
						<td>
							<span class="STYLE3">�û�����</span>
						</td>
						<td>

							<input type="password" name="passwd" id="passwd"
								onblur="checkpasswd(this)" />

						</td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<input type="submit" class="button" value="��½" />
						</td>
					</tr>
				</table>
			</form>
		</div>
		</div>
		<div id="useriderror">
			<div id="tip" class="tipgreen">
				<pre class="perclass">�û�IDΪ�������</pre>
			</div>
			<div id="bkimg" class="tip-arrow-bottom"></div>
		</div>
		<div id="passwderror">
			<div id="tip" class="tipgreen">
				<pre class="perclass">�����ʽ����Ŷ</pre>
			</div>
			<div id="bkimg" class="tip-arrow-bottom"></div>
		</div>
		<div id="submitmessage">
			����ϸ�������������ʾ��Ϣ
		</div>
	</body>
</html>
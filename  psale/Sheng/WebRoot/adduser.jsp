<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>������û�</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<link href="css/mycss2.css" rel="stylesheet" type="text/css" />
		<link href="css/wrongmessage.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="js/jquery-1.4.2.js"></script>
		<script language="javascript" src="js/adduser.js"></script>
		<style type="text/css">
<!--
.STYLE4 {
	font-family: "����_GB2312"
}
-->
</style>
	</head>
	<body>
		<h3 align="center">
			������û�ҳ��
		</h3>
		<a href="index2.jsp">������ҳ</a>
		<hr />
		<div id="adduser">
			<div align="center">
				<form name="form3" method="post" action="adduseraction.action"
					onSubmit="return tijiao();">
					<table cellpadding="0" cellspacing="0" bgcolor="#e7eef8">
						<tr>
							<td colspan="2">
								<div align="center" class="STYLE3 STYLE4">
									������û�
								</div>
							</td>
						</tr>
						<tr>
							<td class="STYLE3">
								�û�ID
							</td>
							<td>
								<input type="text" name="userid" id="userid">
							</td>
						</tr>
						<tr>
							<td class="STYLE3">
								�û���
							</td>
							<td>
							<input type="text" name="username" id="username" onblur="checkusername(this)">
							</td>
						</tr>
						<tr>
							<td class="STYLE3">
								�û�����
							</td>
							<td>
								<input type="text" name="passwd" id="passwd"
									onblur="checkpasswd(this)">
							</td>
						</tr>
						<tr>
							<td class="STYLE3">
								Ա��״̬
							</td>
							 <td>
					            <select name="existstate" id="existstate">
					              <option value="0">����</option>
					              <option value="1">������</option>
					            </select>
				          </td>
						</tr>
						<tr>
							<td class="STYLE3">
								Ա��Ȩ��
							</td>
							<td>
					            <select name="management" id="management">
					              <option value="0">0</option>
					              <option value="1">1</option>
					              <option value="2">2</option>
					              <option value="3">3</option>
					              <option value="4">4</option>
					            </select>
				          </td>
						</tr>
						<tr>
							<td colspan="2">
								<div align="center">
									<input type="submit" class="STYLE3" value="���">
								</div>
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
			<div id="tip2" class="tipgreen">
				<pre class="perclass">�����ʽ����Ŷ</pre>
			</div>
			<div id="bkimg2" class="tip-arrow-bottom"></div>
		</div>
		<div id="usernameerror">
			<div id="tip2" class="tipgreen">
				<pre class="perclass">�û�������Ϊ��</pre>
			</div>
			<div id="bkimg2" class="tip-arrow-bottom"></div>
		</div>
		<div id="usermessage">
			<div id="tip2" class="tipgreen">
				<pre class="perclass" id="useridcontent"></pre>
			</div>
			<div id="bkimg2" class="tip-arrow-bottom"></div>
		</div>
		<div id="submitmessage">
			����ϸ�������������ʾ��Ϣ
		</div>
	</body>
</html>
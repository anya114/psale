<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��Ա����</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<link href="css/circleconer.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="img/favicon.ico"/>
		<script language="javascript" src="js/jquery-1.4.2.js">
</script>
		<script language="javascript" src="js/showallperson.js">
</script>
		<script language="javascript" src="js/showusercontrol.js">
</script>
	</head>
	<body>
		<h3 align="center">
			��Ա����
		</h3>
		<a href="index2.jsp">������ҳ</a>
		<hr />
		<div align="center">
			<div id="contain" class="contain">
				<div class="containtop">
					<div class="tleft"></div>
					<div class="tright"></div>
				</div>
				<div class="containrcenter">

					<div class="containcenter">
						<div align="center" id="personmana">
							<table border="0" style="border: 1px solid #c3d9ff;"
								cellpadding="1" cellspacing="2" width="600">
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
										Ա��״̬
									</td>
									<td>
										Ա��Ȩ��
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
											<s:property value="existstate" />
										</td>
										<td>
											<s:property value="management" />
										</td>
										<td>
											<a href="javascript:edit(<s:property value="userid"/>)">�༭</a>
										</td>
									</tr>
								</s:iterator>
							</table>
						</div>

					</div>

				</div>
				<div class="containbottom">
					<div class="bleft"></div>
					<div class="bright"></div>
				</div>
			</div>
		</div>
		<div id="page" align="center">
			<a href="lookalluseraction.action?pageNo=${pageNo-1}">&lt;&lt;��һҳ</a>
			Ŀǰ�ǵ�
			<font color="red">${pageNo}</font>ҳ,��
			<font color="red">${sumpage}</font>ҳ
			<a href="lookalluseraction.action?pageNo=${pageNo+1}">��һҳ&gt;&gt;</a>
		</div>

		<div id="lightbox"></div>
		<div id="edituser">
			<div id="title">
				<img src="img/close.gif" />
			</div>
			<div id="contentt">
				<table width="400" height="280" border="0" style="border: 1px solid #c3d9ff;"
								cellpadding="1" cellspacing="0">
					<tr>
						<td class="STYLE3">
							�û�ID
						</td>
						<td>
							<input type="text" id="userid" readonly="readonly"
								style="background: red" />
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							�û���
						</td>
						<td>
							<input type="text" id="username" />
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							�û�����
						</td>
						<td>
							<input type="text" id="passwd" />
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							Ա��״̬
						</td>
						<td>
							<select name="existstate" id="existstate">
								<option value="0">
									����
								</option>
								<option value="1">
									������
								</option>
							</select>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							Ա��Ȩ��
						</td>
						<td>
							<select name="management" id="management">
								<option value="0">
									��Ȩ��
								</option>
								<option value="1">
									��дȨ��
								</option>
								<option value="2">
									��д��Ȩ��
								</option>
								<option value="3">
									��д��ɾȨ��
								</option>
								<option value="4">
									admin
								</option>
							</select>
						</td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<input type="button" id="save" class="button" value="����" />
						</td>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>
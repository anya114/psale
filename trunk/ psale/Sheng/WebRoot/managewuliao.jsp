<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��Ʒ����</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="js/jquery-1.4.2.js">
</script>
		<script language="javascript" src="js/showwuliaocontrol.js">
</script>
	</head>
	<body>
		<h3 align="center">
			��Ʒ����
		</h3>
		<hr />
		<div align="center" id="swuliao">
			<table border="0" style="border: 1px solid #c3d9ff;" cellpadding="0"
				cellspacing="1" width="600">
				<tr bordercolor="#c3d9ff">
					<td>
						ID
					</td>
					<td>
						����
					</td>
					<td>
						����
					</td>
					<td>
						�۸�
					</td>
					<td>
						��������
					</td>
					<td>
						����
					</td>
					<td>
						�༭
					</td>
				</tr>
				<s:iterator value="ls" status="ls">
					<tr bordercolor="#c3d9ff">
						<td width="40">
							<s:property value="id" />
						</td>
						<td>
							<s:property value="inname" />
						</td>
						<td>
							<s:property value="innum" />
						</td>
						<td>
							<s:property value="inprice" />
						</td>
						<td>
							<s:property value="inuserid" />
						</td>
						<td>
							<s:property value="indate" />
						</td>
						<td>
							<a href="javascript:edit(<s:property value="id"/>)">�༭</a>
						</td>
					</tr>
				</s:iterator>
			</table>
		</div>
		<div id="editwuliao">
			<div id="editwuliaotitle">
				<img src="img/close.gif" />
			</div>
			<div id="editwuliaocontent">
				<table width="450" height="350" border="0"
					style="border: 1px solid #c3d9ff;" cellpadding="0" cellspacing="1">
					<tr>
						<td class="STYLE3">
							ID
						</td>
						<td>
							<div align="center">
								<input type="text" id="id" align="right" readonly="readonly"
									style="background: red" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							����
						</td>
						<td>
							<div align="center">
								<input type="text" id="inname" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							����
						</td>
						<td>
							<div align="center">
								<input type="text" id="innum" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							�۸�
						</td>
						<td>
							<div align="center">
								<input type="text" id="inprice" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							��⹤��
						</td>
						<td>
							<div align="center">
								<input type="text" id="inuserid" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							�������
						</td>
						<td>
							<div align="center">
								<input type="text" id="indate" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<input type="button" value="����" class="STYLE3" id="save"/>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div id="lightbox"></div>
	</body>
</html>
<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��ʾ���п��</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="js/jquery-1.4.2.js">
</script>
		<script language="javascript" src="js/showallwuliao.js">
</script>
		<style type="text/css">
<!--
.STYLE4 {
	color: #FF0000;
	font-size: 36px;
	font-family: "����_GB2312";
}
-->
</style>
	</head>
	<body>
		<h3 align="center">
			������������ⵥ��ʾҳ��
			<a href="rukubfpdf.action" id="pdf"><img src="img/pdf.jpg"
					width="70" height="70" />
			</a>
		</h3>
		<a href="index2.jsp">������ҳ</a>
		<hr />
		<div align="center" style="z-index: 20">
			<table border="1" cellpadding="0" cellspacing="0" width="600"
				bordercolor="#c3d9ff">
				<tr bordercolor="#c3d9ff">
					<td>
						���
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
						��ע��Ϣ
					</td>
				</tr>
				<s:iterator value="mylist" status="ls">
					<tr bordercolor="#c3d9ff">
						<td>
							<s:property value="pid" />
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
							<s:property value="productsdetail" />
						</td>
					</tr>
				</s:iterator>
			</table>
		</div>
		<div id="reporttip">
			<div class="STYLE4" id="reporttipcontent">
				<div align="center">
					ϵͳ����Ϊ��׼��pdf�ļ�,�벻Ҫ�ظ������лл��
				</div>
			</div>
			<div id="reportwait">
				<img src="img/img-loading.gif" />
			</div>
		</div>
	</body>
</html>
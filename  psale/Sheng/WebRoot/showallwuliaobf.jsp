<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��ʾ���п��</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<link href="css/circleconer.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="img/favicon.ico"/>
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
					width="70" height="70" /> </a>
		</h3>
		<a href="index2.jsp">������ҳ</a>
		<hr />
		<div align="center">
			<div id="contain" class="contain2">
				<div class="containtop">
					<div class="tleft"></div>
					<div class="tright"></div>
				</div>
				<div class="containrcenter">

					<div class="containcenter">
						<div align="center" style="z-index: 20">
							<table border="0" style="border: 1px solid #c3d9ff;"
								cellpadding="0" cellspacing="2" width="800">
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
					</div>
				</div>
				<div class="containbottom">
					<div class="bleft"></div>
					<div class="bright"></div>
				</div>
			</div>
		</div>
		<div id="page" align="center">
			<a href="lookallwuliaobf.action?pageNo=${pageNo-1}">&lt;&lt;��һҳ</a>
			Ŀǰ�ǵ�
			<font color="red">${pageNo}</font>ҳ,��
			<font color="red">${sumpage}</font>ҳ
			<a href="lookallwuliaobf.action?pageNo=${pageNo+1}">��һҳ&gt;&gt;</a>
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
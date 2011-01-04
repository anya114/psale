<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>Insert title here</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="js/jquery-1.4.2.js"></script>
		<script language="javascript" src="js/showallwuliao.js"></script>
		 <style type="text/css">
<!--
.STYLE4 {
	color: #FF0000;
	font-size: 36px;
	font-family: "楷体_GB2312";
}
-->
        </style>
	</head>
	<body>
		<h3 align="center">
			所有销售单页
			<a href="delpdf.action" id="pdf"><img src="img/pdf.jpg" width="70" height="70"/></a>
		</h3>
		<a href="index2.jsp">返回首页</a>
		<hr>
		<div align="center">
			<table border="1" cellpadding="0" cellspacing="0" width="600"
				bordercolor="#c3d9ff">
				<tr bordercolor="#c3d9ff">
					<td>
						编号
					</td>
					<td>
						名称
					</td>
					<td>
						数量
					</td>
					<td>
						价格
					</td>
					<td>
						开单工号
					</td>
					<td>
						日期
					</td>
					<td>
						顾客姓名
					</td>
					<td>
						毛利
					</td>
				</tr>
				<s:iterator value="ls" status="ls">
					<tr bordercolor="#c3d9ff">
						<td>
							<s:property value="pid" />
						</td>
						<td>
							<s:property value="outname" />
						</td>
						<td>
							<s:property value="outnum" />
						</td>
						<td>
							<s:property value="outprice" />
						</td>
						<td>
							<s:property value="outuserid" />
						</td>
						<td>
							<s:property value="outdate" />
						</td>
						<td>
							<s:property value="purchaser" />
						</td>
						<td>
							<s:property value="maori" />
						</td>
					</tr>
				</s:iterator>
			</table>
			<table border="1" cellpadding="0" cellspacing="0" width="600"
				bordercolor="#c3d9ff">
				<tr>
					<td>总销售额</td>
					<td id="sumsale">${sumsale}</td>
				</tr>
				<tr>
					<td>总毛利</td>
					<td id="summaori">${summaori}</td>
				</tr>
			</table>
		</div>
			<div id="reporttip">
			<div class="STYLE4" id="reporttipcontent">
				<div align="center">系统正在为您准备pdf文件,请不要重复点击，谢谢！</div>
			</div>
		<div id="reportwait">
				<img src="img/img-loading.gif"/>
			</div>
		</div>
	</body>
</html>
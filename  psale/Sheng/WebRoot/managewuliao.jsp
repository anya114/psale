<%@ page language="java" contentType="text/html; charset=GB18030"
	pageEncoding="GB18030"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=GB18030">
		<title>��Ʒ����</title>
		<link href="css/mycss.css" rel="stylesheet" type="text/css" />
		<link href="css/circleconer.css" rel="stylesheet" type="text/css" />
		<link rel="shortcut icon" href="img/favicon.ico"/>
		<script language="javascript" src="js/jquery-1.4.2.js"></script>
		<script language="javascript" src="js/showwuliaocontrol.js"></script>
	</head>
	<body>
		<h3 align="center">
			��Ʒ����
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
						<div align="center" id="swuliao">
							<table border="0" style="border: 1px solid #c3d9ff;"
								cellpadding="1" cellspacing="2" width="800">
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
									<td>
										�༭
									</td>
								</tr>
								<s:iterator value="ls" status="ls">
									<tr bordercolor="#c3d9ff">
										<td width="40">
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
										<td>
											<a href="javascript:edit('${pid}')">�༭</a>
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
			<a href="lookallproducts.action?pageNo=${pageNo-1}">&lt;&lt;��һҳ</a>
			Ŀǰ�ǵ�
			<font color="red">${pageNo}</font>ҳ,��
			<font color="red">${sumpage}</font>ҳ
			<a href="lookallproducts.action?pageNo=${pageNo+1}">��һҳ&gt;&gt;</a>
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
							���
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
								<input type="text" id="inuserid" align="right"
									readonly="readonly" style="background: red" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							�������
						</td>
						<td>
							<div align="center">
								<input type="text" id="indate" align="right" readonly="readonly"
									style="background: red" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="STYLE3">
							��ע��Ϣ
						</td>
						<td>
							<div align="center">
								<input type="text" id="detail" align="right" />
							</div>
						</td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<input type="button" value="����" class="button" id="save" />
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div id="lightbox"></div>
	</body>
</html>
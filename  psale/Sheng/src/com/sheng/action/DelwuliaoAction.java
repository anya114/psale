package com.sheng.action;


import java.text.SimpleDateFormat;
import java.util.Date;

import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.CheckuserexistDAO;
import com.sheng.dao.CheckuserexistDaoImpl;
import com.sheng.dao.DelwuliaoDAO;
import com.sheng.dao.DelwuliaoDaoImpl;
import com.sheng.po.Outwuliao;


public class DelwuliaoAction extends ActionSupport {

	/**
	 * ����action�����ⵥ��
	 */
	CheckuserexistDAO cdao = new CheckuserexistDaoImpl();
	DelwuliaoDAO ddao = new DelwuliaoDaoImpl();
	private static final long serialVersionUID = 1L;
	private String outname;
	private String outnum;
	private String outprice;
	private String outuserid;
	private String outdate;
	private int a;// �����

	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public String getOutuserid() {
		return outuserid;
	}

	public void setOutuserid(String outuserid) {
		this.outuserid = outuserid;
	}

	public String getOutname() {
		return outname;
	}

	public void setOutname(String outname) {
		this.outname = outname;
	}

	public String getOutnum() {
		return outnum;
	}

	public void setOutnum(String outnum) {
		this.outnum = outnum;
	}

	public String getOutprice() {
		return outprice;
	}

	public void setOutprice(String outprice) {
		this.outprice = outprice;
	}

	public String getOutdate() {
		return outdate;
	}

	public void setOutdate(String outdate) {
		this.outdate = outdate;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	// ���ݿ��δ�ӣ��ȴ��Ӻž�ok�ˣ���Ҫ�����ݱ����������¼
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		outdate = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss")
				.format(new Date());
		Outwuliao ow = new Outwuliao();
		ow.setOutdate(outdate);
		ow.setOutname(outname);
		ow.setOutnum(outnum);
		ow.setOutprice(outprice);
		ow.setOutuserid(outuserid);
		String forward = "";
		boolean s = outname.length() != 0 && outnum.length() != 0
				&& outprice.length() != 0 && outuserid.length() != 0
				&& outdate.length() != 0;
		if (s && checkname() && checknum()) {
			// �������ⵥ��дһ����¼
			if (ddao.savedel(ow)) {
				forward = "success";
			} else {
				forward = "input";
			}
			// �ٴ���ⵥ�����һ������
			int i = a - Integer.parseInt(outnum);
			if (i == 0) {
				if (ddao.delwuliao(outname)) {
					forward = "success";
				} else {
					forward = "input";
				}
			} else {
				String num = String.valueOf(i);
				if (ddao.updatenum(num, outname)) {
					forward = "success";
				} else {
					forward = "input";
				}
			}
		} else {
			forward = "input";
		}
		return forward;
	}

	/*
	 * ����Ƿ���������Ĳ�Ʒ�� *
	 */
	public boolean checkname() {
		boolean flag = false;
		if (ddao.checkwuliaonameexist(outname)) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}

	/*
	 * ����Ѵ��ڵĲ�Ʒ�������������������ֵ֮���Ƿ�����߼� *
	 */
	public boolean checknum() {
		boolean flag = false;
		boolean g = checkname();
		boolean h = checkuserid();
		if (g && h) {
			a = ddao.getnum(outname);// ���ݿ���Ŀ����
			if (a < Integer.parseInt(outnum)) {
				flag = false;
			} else {
				flag = true;
			}
		}
		return flag;
	}

	/*
	 * ���userid�Ƿ����,���ڱ�־Ϊtrue,�����ڱ�־Ϊfalse; *
	 */
	public boolean checkuserid() {
		boolean flag = false;
		if (cdao.checkuseridexist(getOutuserid())) {
			flag = true;
		} else {
			flag = false;
		}
		return flag;
	}
}

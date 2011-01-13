package com.sheng.action;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.CheckuserexistDAO;

import com.sheng.dao.InsertwuliaoDAO;

import com.sheng.po.Addwuliao;
import com.sheng.util.DaoconfigReader;

public class AddwuliaoAction extends ActionSupport {
	/**
	 * �������action
	 */
	private static final long serialVersionUID = 1L;
	Addwuliao aw=new Addwuliao();
	InsertwuliaoDAO dao=null;
	Logger logger=Logger.getLogger(AddwuliaoAction.class);
	private String pid;
	private String inname;
	private int innum;
	private double inprice;
	private String inuserid;
	private String indate;
	private String detail;
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getInname() {
		return inname;
	}
	public void setInname(String inname) {
		this.inname = inname;
	}
	public int getInnum() {
		return innum;
	}
	public void setInnum(int innum) {
		this.innum = innum;
	}
	public double getInprice() {
		return inprice;
	}
	public void setInprice(double inprice) {
		this.inprice = inprice;
	}
	public String getInuserid() {
		return inuserid;
	}
	public void setInuserid(String inuserid) {
		this.inuserid = inuserid;
	}
	public String getIndate() {
		return indate;
	}
	public void setIndate(String indate) {
		this.indate = indate;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	/*
	 * �������
	 * **/
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		try{
			dao=(InsertwuliaoDAO) Class.forName(DaoconfigReader.getInstance().getDp().getInsertwuliaodao()).newInstance();
		}catch(Exception e){
			e.printStackTrace();
		}
		String forward="";
		indate=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date());
		PropertyConfigurator.configure(Thread.currentThread().getContextClassLoader().getResource("log4j.properties"));
		aw.setPid(pid);
		aw.setProductsdetail(detail);
		aw.setInname(inname);
		aw.setInnum(innum);
		aw.setInuserid(inuserid);
		aw.setInprice(inprice);
		aw.setIndate(indate);		
			if(inname.length()!=0&&inuserid.length()!=0&&indate.length()!=0){
				if(checkuseid()){
					if(dao.addwuliao(aw)){
						forward="success";
logger.info(ActionContext.getContext().getSession().get("username")+"��"+new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date())+"���������"+pid);
					}	
					else{
						forward="input";
					}
				}
				else{
					forward="input";
				}
			}
			else{
				forward="input";
			}
		return forward;
	}
/*
 * ���ָ�����û�ID�Ƿ����
 * **/
public boolean checkuseid() throws ClassNotFoundException{
		boolean flag = false;
		CheckuserexistDAO cedao=null;
		try{
		cedao=(CheckuserexistDAO) Class.forName(DaoconfigReader.getInstance().getDp().getCheckuserexistdao()).newInstance();
		}catch(Exception e){
			e.printStackTrace();
		}
		if(cedao.checkuseridexist(getInuserid())){
			flag = true;//-----------���ھͷ���true
		}else{
			flag =false;
		}
		return flag;
	}
}

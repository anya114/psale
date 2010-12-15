package com.sheng.action;

import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.CheckuserexistDAO;
import com.sheng.dao.CheckuserexistDaoImpl;
import com.sheng.dao.InsertUserDAO;
import com.sheng.dao.InsertUserDaoImpl;

public class AdduserAction extends ActionSupport {
	/**
	 * ������Ñ���action
	 */
	CheckuserexistDAO dao=new CheckuserexistDaoImpl();
	InsertUserDAO insertdao=new InsertUserDaoImpl(); 
	private static final long serialVersionUID = 1L;
	private String userid;//�Ñ�ID
	private String username;//�Ñ���
	private String passwd;//�Ñ��ܴa
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
			String forward;
			if(userid.length()!=0&&username.length()!=0&&passwd.length()>=6&&checkuserid()){
				insertdao.saveuser(userid, username, passwd);
				forward="success";
			}		
			else{
				forward="input";
				}		
		return forward;
	}	
	/*
	 * ���userid�Ƿ����
	 * **/
	public boolean checkuserid(){
		boolean flag=false;			
				if(dao.checkuseridexist(userid)){
					flag=true;
				}
				else{
					flag=true;
				}
		return flag;
	}
	
}

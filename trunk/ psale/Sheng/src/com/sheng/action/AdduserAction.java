package com.sheng.action;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.CheckuserexistDAO;
import com.sheng.dao.InsertUserDAO;
import com.sheng.po.User;
import com.sheng.util.DaoconfigReader;


public class AdduserAction extends ActionSupport {
	/**
	 * ������Ñ���action
	 */
    CheckuserexistDAO dao=null;
	InsertUserDAO insertdao=null;
	Logger logger=Logger.getLogger(AdduserAction.class);
	private static final long serialVersionUID = 1L;
	private String userid;//�Ñ�ID
	private String username;//�Ñ���
	private String passwd;//�Ñ��ܴa
	private int existstate;//����״̬
	private int management;//Ȩ��
	public InsertUserDAO getInsertdao() {
		return insertdao;
	}
	public void setInsertdao(InsertUserDAO insertdao) {
		this.insertdao = insertdao;
	}
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
	public int getExiststate() {
		return existstate;
	}
	public void setExiststate(int existstate) {
		this.existstate = existstate;
	}
	public int getManagement() {
		return management;
	}
	public void setManagement(int management) {
		this.management = management;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		 try{
			 dao=(CheckuserexistDAO) Class.forName(DaoconfigReader.getInstance().getDp().getCheckuserexistdao()).newInstance();
			 insertdao=(InsertUserDAO) Class.forName(DaoconfigReader.getInstance().getDp().getInsertuserdao()).newInstance();
		 }catch(Exception e){
			 e.printStackTrace();
		 }
		PropertyConfigurator.configure(Thread.currentThread().getContextClassLoader().getResource("log4j.properties"));
			String forward;
			User u=new User();
			u.setExiststate(existstate);
			u.setManagement(management);
			u.setPasswd(passwd);
			u.setUserid(userid);
			u.setUsername(username);
			if(userid.length()!=0&&username.length()!=0&&passwd.length()>=6&&checkuserid()){
				insertdao.saveuser(u);
				forward="success";
logger.info(ActionContext.getContext().getSession().get("username")+"��"+new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date())+"�����һ�����û�"+userid);
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

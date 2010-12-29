package com.sheng.action;



import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.DelwuliaoDAO;
import com.sheng.dao.DelwuliaoDaoImpl;


public class CheckoutnameAction extends ActionSupport {

	/**
	 * 出库时，检查产品名是否存在的action
	 */
	private static final long serialVersionUID = 1L;
	DelwuliaoDAO ddao=new DelwuliaoDaoImpl();
	private String pid;
	private int message;
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public int getMessage() {
		return message;
	}
	public void setMessage(int message) {
		this.message = message;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
			if(ddao.checkwuliaonameexist(pid)){
				message=0;//代表数据库中存在
			}else{
				message=1;//代表数据库中不存在
			}
		return SUCCESS;
	}
	
	
}

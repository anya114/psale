package com.sheng.action;



import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.DelwuliaoDAO;
import com.sheng.dao.DelwuliaoDaoImpl;


public class CheckoutnameAction extends ActionSupport {

	/**
	 * ����ʱ������Ʒ���Ƿ���ڵ�action
	 */
	private static final long serialVersionUID = 1L;
	DelwuliaoDAO ddao=new DelwuliaoDaoImpl();
	private String outname;
	private int message;
	public String getOutname() {
		return outname;
	}
	public void setOutname(String outname) {
		this.outname = outname;
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
			if(ddao.checkwuliaonameexist(outname)){
				message=0;//�������ݿ��д���
			}else{
				message=1;//�������ݿ��в�����
			}
		return SUCCESS;
	}
	
	
}

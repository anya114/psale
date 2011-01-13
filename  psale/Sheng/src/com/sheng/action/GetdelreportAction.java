package com.sheng.action;

import java.util.ArrayList;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.sheng.dao.DelwuliaoDAO;

import com.sheng.po.Outwuliao;
import com.sheng.util.DaoconfigReader;

public class GetdelreportAction extends ActionSupport {

	/**
	 * �������г��ⵥ
	 */
	private static final long serialVersionUID = 1L;
	DelwuliaoDAO ddao=null;
	private List<Outwuliao> ls;
	public List<Outwuliao> getLs() {
		return ls;
	}
	public void setLs(List<Outwuliao> ls) {
		this.ls = ls;
	}
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		try{
			ddao=(DelwuliaoDAO) Class.forName(DaoconfigReader.getInstance().getDp().getDelwuliaodao()).newInstance();
		}catch(Exception e){
			e.printStackTrace();
		}
		ls=new ArrayList<Outwuliao>();
		ls=ddao.findallout();
		String forward="";
			if(ls!=null){
					forward="success";
				}
			else{
				forward="input";
			}
		return forward;
	}
}

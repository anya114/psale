package com.sheng.dao;

import java.util.List;

import com.sheng.po.User;

public interface ManageUserDAO {
	public List<User> getalluser();//�鿴���е��û�
	
	public List<User> getalluserbypage(int pageNo,int pageSize);//�鿴�����û���������ҳ��ʾ
	
	public List<Integer> gettotalpage(int pageSize);//�鿴��ҳ��
}

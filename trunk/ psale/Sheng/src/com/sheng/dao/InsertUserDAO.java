package com.sheng.dao;

import com.sheng.po.User;

public interface InsertUserDAO {
	public void saveuser(String userid,String username,String passwd);//�������û�
	
	/*
	 * @param User �����û�
	 * **/
	public int updateuser(User u);//�����û�
}

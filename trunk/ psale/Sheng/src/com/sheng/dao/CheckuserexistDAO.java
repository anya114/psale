package com.sheng.dao;

import java.util.List;

public interface CheckuserexistDAO {	
	public boolean getuser(String userid,String passwd);//����û����������Ƿ�ƥ��
	
	public boolean checkuseridexist(String userid);//���ָ����userid�Ƿ����
	
	public int getmanagement(String userid);//�õ�ָ����Ա��Ȩ��
	
	public int getexiststate(String userid);//�õ�ָ����Ա�Ĵ���״̬
	
	public List<Integer> getmanageexiststate(String userid);//�õ�ָ����Ա�Ĵ���״̬�Լ�Ȩ��
}

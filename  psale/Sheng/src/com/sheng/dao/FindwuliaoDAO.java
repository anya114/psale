package com.sheng.dao;

import java.util.List;

import com.sheng.po.Addwuliao;

public interface FindwuliaoDAO {
	public List<Addwuliao> findalladd();//���ҿ��
	
	public Addwuliao getwuliaobyid(String pid);//����ָ��������
	
	public List<Addwuliao> findalladdbf();//�鿴������ⵥ
	
	public List<Addwuliao> findaddbfbypage(int pageNo,int pageSize);//�鿴������ⵥ�����շ�ҳ��ѯ��ʽ
	
	public List<Integer> gettotalpage(int pageSize);//�õ�������ⵥҳ����������ⵥ��ҳ��
	
	public List<Addwuliao> getaddbypage(int pageNo,int pageSize);//�õ�������������ݣ����շ�ҳ��ѯ��ʽ
	
	public List<Integer> getaddpage(int pageSize);//�õ����п�浥ҳ��,ָ���ǿ������ҳ��
}

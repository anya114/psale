package com.sheng.dao;

import java.util.List;

import com.sheng.po.Outwuliao;

public interface DelwuliaoDAO {
	public boolean checkwuliaonameexist(String pid);//������ʱ�Ĳ�Ʒ�����Ƿ����
	
	public int getnum(String pid);//�鿴����ﻹ�ж��ٿ��
	
	public boolean savedel(Outwuliao ow);//�����������
	
	public boolean updatenum(int num,String pid);//�����¸ò�Ʒ�Ŀ����
	
	public boolean delwuliao(String pid);//��������֮����������Ϊ0����ô��ɾ������ﻹ�е�����
	
	public List<Outwuliao> findallout();//�鿴���г��ⵥ
	
	public String getpname(String pid);//�õ�ָ��ID��Ʒ������
	
	public double getprice(String pid);//�õ�ָ����Ʒ�����۸�
	
	public List<Outwuliao> findalloutbypage(int pageSize,int pageNo);//�鿴���г��ⵥ�����÷�ҳģʽ��ʾ
	
	public List<Integer> gettotalpage(int pageSize);//�õ�һ���ж���ҳ
	
	public List<Double> getsumsm();//�õ��ܹ���Ӫҵ���ë��
}

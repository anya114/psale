package com.sheng.dao;

import java.sql.Timestamp;
import java.util.List;

import com.sheng.po.Outwuliao;

public interface LookpersonDAO {
	//�鿴ָ����Ա��ָ�������ڵ�����
	public List<Outwuliao> getpersonout(String userid,Timestamp startdate,Timestamp enddate);
	
	//�鿴ָ����Ա��ָ�����ڣ���ҳ��ʾ
   public List<Outwuliao> getpersonoutbypage(String userid,Timestamp startdate,Timestamp enddate,int pageSize,int pageNo);

   //�鿴ָ����Ա��ָ�����ڵ����۶����ë��
   public List<Double> getsumms(String userid,Timestamp startdate,Timestamp enddate);
   
   //�鿴ָ����Ա��ָ�����ڣ���ҳ��ʾ����ҳ��
   public List<Integer> getsumpage(String userid,Timestamp startdate,Timestamp enddate,int pageSize);
}

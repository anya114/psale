package com.sheng.dao;

import java.sql.Timestamp;
import java.util.List;

import com.sheng.po.Outwuliao;

public interface LookpersonDAO {
	//�鿴ָ����Ա��ָ�������ڵ�����
	public List<Outwuliao> getpersonout(String userid,Timestamp startdate,Timestamp enddate);
}

package com.sheng.dao;

import com.sheng.po.Outwuliao;

public interface DelwuliaoDAO {
	public boolean checkwuliaonameexist(String name);//������ʱ�Ĳ�Ʒ�����Ƿ����
	
	public int getnum(String name);//�鿴����ﻹ�ж��ٿ��
	
	public boolean savedel(Outwuliao ow);//�����������
	
	public boolean updatenum(String num,String name);//�����¸ò�Ʒ�Ŀ����
	
	public boolean delwuliao(String name);//��������֮����������Ϊ0����ô��ɾ������ﻹ�е�����
}

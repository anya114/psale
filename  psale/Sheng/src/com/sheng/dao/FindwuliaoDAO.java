package com.sheng.dao;

import java.util.List;

import com.sheng.po.Addwuliao;

public interface FindwuliaoDAO {
	public List<Addwuliao> findalladd();//���ҿ��
	
	public Addwuliao getwuliaobyid(String pid);//����ָ��������
	
	public List<Addwuliao> findalladdbf();//�鿴������ⵥ
}

package com.sheng.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;


import com.sheng.util.Jdbcutil;

public class SaveandBackdataImpl implements SaveandBackdata {

	public boolean save() {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		boolean forward=false;
		Connection conn=null;
		PreparedStatement pm1=null;
		PreparedStatement pm2=null;
		try{
			conn=jdbc.getConnection();
			pm1=conn.prepareStatement("select * into outfile 'c:\\\\saveadd.sql' from addwuliao");
			pm2=conn.prepareStatement("select * into outfile 'c:\\\\savedel.sql' from delwuliao");
			forward=pm1.execute();
			forward=pm2.execute();
			jdbc.close(pm2);
			jdbc.close(pm1);
			jdbc.close(conn);
		}catch(Exception e){
			System.out.println("���ݿ�����������,�����Ҫ�������ݣ����Կ���������ǰ���ݣ�Ȼ���������");
			jdbc.close(pm2);
			jdbc.close(pm1);
			jdbc.close(conn);
		}finally{
			jdbc.close(pm2);
			jdbc.close(pm1);
			jdbc.close(conn);
		}
		return forward;
	}

}

package com.sheng.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.sheng.util.Jdbcutil;

public class CheckuserexistDaoImpl implements CheckuserexistDAO {
	//����û��Ƿ����
	public boolean getuser(String userid, String passwd){
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		boolean forward=false;
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try {
			 conn=jdbc.getConnection();
			 pm=conn.prepareStatement("select * from user where userid=?and passwd=?");
			pm.setString(1,userid);
			pm.setString(2,passwd);
			 rs=pm.executeQuery();
			if(rs!=null){
				if(rs.next()){
					forward=true;					
				}
			}
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			forward=false;
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			forward=false;
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return forward;
	}
//����û�ID�Ƿ����
	public boolean checkuseridexist(String userid) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		boolean forward=false;
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from user where userid=?");
			pm.setString(1, userid);
			rs=pm.executeQuery();
			if(rs!=null){
				if(rs.next()){
					forward=true;
				}
			}
		jdbc.close(rs);
		jdbc.close(pm);
		jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
			forward=false;
		}finally{
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return forward;
	}
	/*
	 * �õ�ָ����Ա��Ȩ��
	 * **/
	public int getmanagement(String userid) {
		// TODO Auto-generated method stub
		int i=0;
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select management from user where userid=?");
			pm.setString(1,userid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					i=rs.getInt(1);
				}
			}
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return i;
	}
	
}

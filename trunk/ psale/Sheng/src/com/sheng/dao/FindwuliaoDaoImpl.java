package com.sheng.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sheng.po.Addwuliao;
import com.sheng.util.Jdbcutil;

public class FindwuliaoDaoImpl implements FindwuliaoDAO {
	/*
	 * �������е��������
	 * **/
	public List<Addwuliao> findalladd() {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		List<Addwuliao> list=new ArrayList<Addwuliao>();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliao");
			rs=pm.executeQuery();
			while(rs.next()){
				Addwuliao a = setproperty(rs);
				list.add(a);
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
		return list;
	}
	/*
	 * �ع��Ĺ�������
	 * **/
	private Addwuliao setproperty(ResultSet rs) throws SQLException {
		Addwuliao a=new Addwuliao();
		a.setPid(rs.getString("pid"));
		a.setInname(rs.getString("inname"));
		a.setInnum(rs.getInt("innum"));
		a.setInprice(rs.getDouble("inprice"));
		a.setInuserid(rs.getString("inuserid"));
		a.setIndate(rs.getString("indate").substring(0,19));
		a.setProductsdetail(rs.getString("productsdetail"));
		return a;
	}

	/*
	 * ����ָ���������Ƿ���ڲ���������
	 * **/
	public Addwuliao getwuliaobyid(String pid) {
		// TODO Auto-generated method stub
		Addwuliao aw=null;
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliao where pid=?");
			pm.setString(1,pid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					aw=new Addwuliao();
					aw.setPid(rs.getString("pid"));
					aw.setInname(rs.getString("inname"));
					aw.setInnum(rs.getInt("innum"));
					aw.setInprice(rs.getDouble("inprice"));
					aw.setInuserid(rs.getString("inuserid"));
					aw.setIndate(rs.getString("indate").substring(0,19));
					aw.setProductsdetail(rs.getString("productsdetail"));
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
		return aw;
	}
	/*
	 * �鿴������ⵥ
	 * **/

	public List<Addwuliao> findalladdbf() {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		List<Addwuliao> list=new ArrayList<Addwuliao>();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliaobeifen");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					Addwuliao a = setproperty(rs);
					list.add(a);
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
		return list;
	}

	/*
	 *��ҳ��ѯ
	 * **/
	public List<Addwuliao> findaddbfbypage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		List<Addwuliao> list=new ArrayList<Addwuliao>();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliaobeifen limit "+(pageNo*pageSize-pageSize)+","+pageSize+"");
			rs=pm.executeQuery();
			while(rs.next()){
				Addwuliao a = setproperty(rs);
				list.add(a);
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
		return list;
	}

	/*
	 *�����¼��һ����������ҳ
	 * **/
	public List<Integer> gettotalpage(int pageSize) {
		// TODO Auto-generated method stub
		List<Integer> ls=new ArrayList<Integer>();
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select count(*) from addwuliaobeifen");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					ls.add(rs.getInt(1)/pageSize);
					ls.add(rs.getInt(1)%pageSize);
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
		return ls;
	}
	/*
	 * �õ�������������ݣ����շ�ҳ��ѯ��ʽ
	 * **/
	public List<Addwuliao> getaddbypage(int pageNo, int pageSize) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		List<Addwuliao> list=new ArrayList<Addwuliao>();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliao limit "+(pageNo*pageSize-pageSize)+","+pageSize+"");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					Addwuliao a = setproperty(rs);
					list.add(a);
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
		return list;
	}
	/*
	 * �õ����п�浥ҳ��
	 **/
	public List<Integer> getaddpage(int pageSize) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		List<Integer> list=new ArrayList<Integer>();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select count(*) from addwuliao");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					list.add(rs.getInt(1)/pageSize);
					list.add(rs.getInt(1)%pageSize);
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
		return list;
	}
	
}

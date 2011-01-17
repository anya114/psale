package com.sheng.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sheng.po.Outwuliao;
import com.sheng.util.Jdbcutil;
public class DelwuliaoDaoImpl implements DelwuliaoDAO {

	public boolean checkwuliaonameexist(String pid) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		boolean flag=false;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from addwuliao where pid=?");
			pm.setString(1,pid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					flag=true;
				}
			}else{
				flag=false;
			}
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			flag=false;
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(rs);
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return flag;
	}
	/*
	 * �鿴ָ�����ƵĿ����
	 * **/
	public int getnum(String pid) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		int a=0;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select innum from addwuliao where pid=?");
			pm.setString(1, pid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					a=rs.getInt("innum");
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
		return a;
	}
	/*
	 * �����������
	 * **/
	public boolean savedel(Outwuliao ow) {
		// TODO Auto-generated method stub
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		boolean flag=false;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("insert into delwuliao(pid,outname,outnum,outprice,outuserid,outdate,maori,sumsales,summaori,purchaser)values(?,?,?,?,?,?,?,?,?,?)");
			pm.setString(1,ow.getPid());						
			pm.setString(2, ow.getOutname());
			pm.setInt(3, ow.getOutnum());
			pm.setDouble(4, ow.getOutprice());
			pm.setString(5, ow.getOutuserid());
			pm.setString(6, ow.getOutdate());
			pm.setDouble(7, ow.getMaori());
			pm.setDouble(8, ow.getSumsales());
			pm.setDouble(9, ow.getSummaori());
			pm.setString(10, ow.getPurchaser());
			flag=pm.execute();
			jdbc.close(pm);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return flag;
	}
	/*
	 * �����������
	 * **/
	public boolean updatenum(int num,String pid) {
		// TODO Auto-generated method stub
		boolean flag=false;
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("update addwuliao set innum=? where pid=?");
			pm.setInt(1, num);
			pm.setString(2, pid);
			int a=pm.executeUpdate();
			if(a==0){
				flag=false;
			}else{
				flag=true;
			}
			jdbc.close(pm);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			flag=false;
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return flag;
	}
	/*
	 * ��������֮����������Ϊ0����ô��ɾ����������ϵ�����
	 * **/
	public boolean delwuliao(String pid) {
		// TODO Auto-generated method stub
		boolean flag=false;
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("delete from addwuliao where pid=?");
			pm.setString(1, pid);
			int x=pm.executeUpdate();
			if(x==0){
				flag=false;
			}else{
				flag=true;
			}
			jdbc.close(pm);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			flag=false;
			jdbc.close(pm);
			jdbc.close(conn);
		}finally{
			jdbc.close(pm);
			jdbc.close(conn);
		}
		return flag;
	}
	/*
	 * �鿴���г��ⵥ
	 * **/
	public List<Outwuliao> findallout() {
		// TODO Auto-generated method stub
		List<Outwuliao> ls=new ArrayList<Outwuliao>();
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from delwuliao");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					Outwuliao ow = setproperty(rs);
					ls.add(ow);
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
	 * ���ָ��ID������
	 * **/
	public String getpname(String pid) {
		// TODO Auto-generated method stub
		String message="";
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select inname from addwuliao where pid=?");
			pm.setString(1,pid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					message=rs.getString("inname");
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
		return message;
	}
	/*
	 * ���ָ����Ʒ�����۸�
	 * **/
	public double getprice(String pid) {
		// TODO Auto-generated method stub
		double price=0.0;
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select inprice from addwuliao where pid=?");
			pm.setString(1,pid);
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					price=rs.getDouble("inprice");
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
		return price;
	}
	
	/*
	 *��ҳ��ʾ���ⵥ
	 * **/
	public List<Outwuliao> findalloutbypage(int pageSize, int pageNo) {
		// TODO Auto-generated method stub
		List<Outwuliao> ls=new ArrayList<Outwuliao>();
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select * from delwuliao limit "+(pageSize*pageNo-pageSize)+","+pageSize+"");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					Outwuliao ow = setproperty(rs);
					ls.add(ow);
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
	 *�ع��Ĺ�������
	 * **/
	
	private Outwuliao setproperty(ResultSet rs) throws SQLException {
		Outwuliao ow=new Outwuliao();
		ow.setPid(rs.getString("pid"));
		ow.setPurchaser(rs.getString("purchaser"));
		ow.setMaori(rs.getDouble("maori"));
		ow.setOutname(rs.getString("outname"));
		ow.setOutnum(rs.getInt("outnum"));
		ow.setOutprice(rs.getDouble("outprice"));
		ow.setOutuserid(rs.getString("outuserid"));
		ow.setOutdate(rs.getString("outdate").substring(0, 19));
		return ow;
	}
	
	/*
	 * �õ����е�ҳ����
	 * **/
	public List<Integer> gettotalpage(int pageSize) {
		// TODO Auto-generated method stub
		List<Integer> num=new ArrayList<Integer>();
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm=null;
		ResultSet rs=null;
		try{
			conn=jdbc.getConnection();
			pm=conn.prepareStatement("select count(*) from delwuliao");
			rs=pm.executeQuery();
			if(rs!=null){
				while(rs.next()){
					num.add(rs.getInt(1)/pageSize);
					num.add(rs.getInt(1)%pageSize);
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
		return num;
	}
	
	/*
	 * �õ����е�Ӫҵ���ë��
	 * **/
	public List<Double> getsumsm() {
		// TODO Auto-generated method stub
		List<Double> ls=new ArrayList<Double>();
		Jdbcutil jdbc=new Jdbcutil();
		Connection conn=null;
		PreparedStatement pm1=null;
		PreparedStatement pm2=null;
		ResultSet rs1=null;
		ResultSet rs2=null;
		try{
			conn=jdbc.getConnection();
			pm1=conn.prepareStatement("select sum(outprice) from delwuliao");
			pm2=conn.prepareStatement("select sum(maori) from delwuliao");
			rs1=pm1.executeQuery();
			rs2=pm2.executeQuery();
			if(rs1!=null&&rs2!=null){
				while(rs1.next()&&rs2.next()){
					ls.add(rs1.getDouble(1));
					ls.add(rs2.getDouble(1));
				}
			}
			jdbc.close(rs1);
			jdbc.close(rs2);
			jdbc.close(pm1);
			jdbc.close(pm2);
			jdbc.close(conn);
		}catch(Exception e){
			e.printStackTrace();
			jdbc.close(rs1);
			jdbc.close(rs2);
			jdbc.close(pm1);
			jdbc.close(pm2);
			jdbc.close(conn);
		}finally{
			jdbc.close(rs1);
			jdbc.close(rs2);
			jdbc.close(pm1);
			jdbc.close(pm2);
			jdbc.close(conn);
		}
		return ls;
	}	
	
}
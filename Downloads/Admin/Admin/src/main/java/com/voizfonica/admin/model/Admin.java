package com.voizfonica.admin.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin",schema = "my_data")
public class Admin 
{

	@Id
	private Integer id;
	private String fname;
	private String lname;
	private String email;
	private String password;
	private long phno;
	
	public Admin() 
	{
		
	}

	public Admin(int eid, String fname, String lname, String email, String password, long phno) 
	{
		super();
		this.id = eid;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.phno = phno;
	}

	public Integer getid() {
		return id;
	}

	public void setid(int eid) {
		this.id = eid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getPhno() {
		return phno;
	}

	public void setPhno(long phno) {
		this.phno = phno;
	}
	
	
	
}

package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "my_data",name = "customer_admin")
public class Cust_Admin {
	@Id
	private long phno;
	private String Address;
	private String adhar_no;
	private long alt_phone;
	private String fname;
	private String lname;
	private String type;
	private String email;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Cust_Admin(long phno, String address, String adhar_no, long alt_phone, String fname, String lname,
			String type, String email) {
		super();
		this.phno = phno;
		Address = address;
		this.adhar_no = adhar_no;
		this.alt_phone = alt_phone;
		this.fname = fname;
		this.lname = lname;
		this.type = type;
		this.email = email;
	}
	public Cust_Admin() {
		super();
	}
	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getAdhar_no() {
		return adhar_no;
	}
	public void setAdhar_no(String adhar_no) {
		this.adhar_no = adhar_no;
	}
	public long getAlt_phone() {
		return alt_phone;
	}
	public void setAlt_phone(long alt_phone) {
		this.alt_phone = alt_phone;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	

}

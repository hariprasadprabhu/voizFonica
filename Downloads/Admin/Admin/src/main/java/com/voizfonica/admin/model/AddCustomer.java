package com.voizfonica.admin.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CustomerAdmin", schema = "my_data")
public class AddCustomer 
{
	@Id
	private long phno;
	private String fname;
	private String lname;
	private long altPhno;
	private String type;
	private String email;
	private long adharNo;
	private String address;
	
	public AddCustomer() {
		
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public AddCustomer(long phno, String fname, String lname, long altPhno, String type, String email, long adharNo,
			String address) {
		super();
		this.phno = phno;
		this.fname = fname;
		this.lname = lname;
		this.altPhno = altPhno;
		this.type = type;
		this.email = email;
		this.adharNo = adharNo;
		this.address = address;
	}

	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
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
	public long getAltPhno() {
		return altPhno;
	}
	public void setAltPhno(long altPhno) {
		this.altPhno = altPhno;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public long getAdharNo() {
		return adharNo;
	}
	public void setAdharNo(long adharNo) {
		this.adharNo = adharNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "AddCustomer [phno=" + phno + ", fname=" + fname + ", lname=" + lname + ", altPhno=" + altPhno
				+ ", type=" + type + ", adharNo=" + adharNo + ", address=" + address + "]";
	}
	
	
}

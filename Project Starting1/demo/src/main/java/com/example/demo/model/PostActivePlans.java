package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "my_data",name = "post_active")
public class PostActivePlans {
	@Id
	private long phno;
	private int plan_id;
	private Date edate;
	private int paid;
	
	public int getPaid() {
		return paid;
	}
	public void setPaid(int paid) {
		this.paid = paid;
	}
	public PostActivePlans(long phno, int plan_id, Date edate, int paid) {
		super();
		this.phno = phno;
		this.plan_id = plan_id;
		this.edate = edate;
		this.paid = paid;
	}
	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
	}
	public int getPlan_id() {
		return plan_id;
	}
	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}
	public Date getEdate() {
		return edate;
	}
	public void setEdate(Date edate) {
		this.edate = edate;
	}
	public PostActivePlans() {
		super();
	}
	

}

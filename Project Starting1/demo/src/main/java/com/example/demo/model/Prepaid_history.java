package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(schema = "my_data",name = "prepaid_history")
public class Prepaid_history {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Incchat")
    @SequenceGenerator(sequenceName = "my_data.Inchistory", allocationSize = 1, name = "Incchat")
	private int id;
	private long phno;
	private long ph_num;
	private int plan_id;
	private Date rdate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public Date getRdate() {
		return rdate;
	}
	public void setRdate(Date rdate) {
		this.rdate = rdate;
	}
	
	public long getPh_num() {
		return ph_num;
	}
	public void setPh_num(long ph_num) {
		this.ph_num = ph_num;
	}
	public Prepaid_history(int id, long phno, long ph_num, int plan_id, Date rdate) {
		super();
		this.id = id;
		this.phno = phno;
		this.ph_num = ph_num;
		this.plan_id = plan_id;
		this.rdate = rdate;
	}
	public Prepaid_history() {
		super();
	}
	

}

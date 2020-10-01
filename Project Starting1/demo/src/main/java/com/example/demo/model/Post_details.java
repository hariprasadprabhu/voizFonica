package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(schema = "my_data",name = "post_details")
public class Post_details {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "my_data.INCpostdetails", allocationSize = 1, name = "CUST_SEQ")
	private int id;
	private long phno;
	@Value("${some.key:0}")
	private  int plan_id;
	private Date pdate;
	@Value("${some.key:0}")
	private int paid;
	public Post_details(int id, long phno, int plan_id, Date pdate, int paid) {
		super();
		this.id = id;
		this.phno = phno;
		this.plan_id = plan_id;
		this.pdate = pdate;
		this.paid = paid;
	}
	public Post_details() {
		super();
	}
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
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
	}
	public int getPaid() {
		return paid;
	}
	public void setPaid(int paid) {
		this.paid = paid;
	}
	
	

}

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
@Table(schema = "my_data",name = "details")
public class Details {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "INColder", allocationSize = 1, name = "CUST_SEQ")
	private int id;
	private long phone_num;
	@Value("${some.key:0}")
	private int plan_id;
	private Date d;
	@Value("${some.key:0}")
	private int expired;
	
	public int getExpired() {
		return expired;
	}
	public void setExpired(int expired) {
		this.expired = expired;
	}
	
	public Date getD() {
		return d;
	}
	public void setD(Date d) {
		this.d = d;
	}
	public Details(int id, long phone_num, int plan_id, Date d, int expired) {
		super();
		this.id = id;
		this.phone_num = phone_num;
		this.plan_id = plan_id;
		this.d = d;
		this.expired = expired;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getPhone_num() {
		return phone_num;
	}
	public void setPhone_num(long phone_num) {
		this.phone_num = phone_num;
	}
	public int getPlan_id() {
		return plan_id;
	}
	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}
	public Details() {
		
	}
	

}

package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(schema = "my_data",name = "activeplans")
public class ActivePlans {
	@Id
	private long phone_num;
	@Value("${some.key:0}")
	private int plan_id;
	@Value("${some.key:default}")
	private Date ddate;
	
	public Date getDdate() {
		return ddate;
	}
	public void setDdate(Date ddate) {
		this.ddate = ddate;
	}
	public ActivePlans(long phone_num, int plan_id, Date date) {
		super();
		this.phone_num = phone_num;
		this.plan_id = plan_id;
		this.ddate = date;
	}
	public ActivePlans() {
		super();
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
	
	

}

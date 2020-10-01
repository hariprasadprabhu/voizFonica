package com.example.demo.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(schema = "my_data",name = "cust_sub")
public class PostCustmerBill {
	@Id
	private long phno;
	private int data_used;
	private Date bdate;
	private int amount;
	public PostCustmerBill(long phno, int data_used, Date bdate, int amount) {
		super();
		this.phno = phno;
		this.data_used = data_used;
		this.bdate = bdate;
		this.amount = amount;
	}
	public PostCustmerBill() {
		super();
	}
	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
	}
	public int getData_used() {
		return data_used;
	}
	public void setData_used(int data_used) {
		this.data_used = data_used;
	}
	public Date getBdate() {
		return bdate;
	}
	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	

}

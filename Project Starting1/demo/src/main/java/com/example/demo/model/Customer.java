package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;


@Entity
@Table(schema = "my_data",name = "Cust01")
public class Customer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "customer_seq", allocationSize = 1, name = "CUST_SEQ")
	private int id;
	private long phoneNum;
	private String emailId;
	private String userName; 
	private String password;
	@Value("${some.key:0}")
	private int activePlan;
	private String service;
	public Customer()
	{
		
	}
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	

	public int getActivePlan() {
		return activePlan;
	}

	public void setActivePlan(int activePlan) {
		this.activePlan = activePlan;
	}

	


	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public Customer(int id, long phoneNum, String emailId, String userName, String password, int activePlan,
			String service) {
		super();
		this.id = id;
		this.phoneNum = phoneNum;
		this.emailId = emailId;
		this.userName = userName;
		this.password = password;
		this.activePlan = activePlan;
		this.service = service;
	}

	public long getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(long phoneNum) {
		this.phoneNum = phoneNum;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	

}

package com.voizfonica.admin.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "query",schema = "my_data")
public class Queries 
{
	@Id
	private Integer id;
	private Integer custId;
	private String custQuery;
	private String qdate;
	private Integer empId;
	private String empAns;
	private String adate;
	
	
	
	public Queries() {
		super();
	}



	public Queries(Integer id, Integer custId, String custQuery, String qdate, Integer empId, String empAns,
			String adate) {
		super();
		this.id = id;
		this.custId = custId;
		this.custQuery = custQuery;
		this.qdate = qdate;
		this.empId = empId;
		this.empAns = empAns;
		this.adate = adate;
	}



	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public Integer getCustId() {
		return custId;
	}



	public void setCustId(Integer custId) {
		this.custId = custId;
	}



	public String getCustQuery() {
		return custQuery;
	}



	public void setCustQuery(String custQuery) {
		this.custQuery = custQuery;
	}



	public String getQdate() {
		return qdate;
	}



	public void setQdate(String qdate) {
		this.qdate = qdate;
	}



	public Integer getEmpId() {
		return empId;
	}



	public void setEmpId(Integer empId) {
		this.empId = empId;
	}



	public String getEmpAns() {
		return empAns;
	}



	public void setEmpAns(String empAns) {
		this.empAns = empAns;
	}



	public String getAdate() {
		return adate;
	}



	public void setAdate(String adate) {
		this.adate = adate;
	}
	
	



}
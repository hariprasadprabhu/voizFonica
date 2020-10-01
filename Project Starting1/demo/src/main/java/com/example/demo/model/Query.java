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
@Table(schema = "my_data",name="cust_emp_query")
public class Query {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "INCquery", allocationSize = 1, name = "CUST_SEQ")
	private int id;
	private long custNum;
	private String custQuery;
	private Date qDate;
	@Value("${some.key:0}")
	private int empId;
	private String solution;
	private Date sDate;
	public Query(int id, long custNum, String custQuery, Date qDate, int empId, String solution, Date sDate) {
		super();
		this.id = id;
		this.custNum = custNum;
		this.custQuery = custQuery;
		this.qDate = qDate;
		this.empId = empId;
		this.solution = solution;
		this.sDate = sDate;
	}
	public Query() {

	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getCustNum() {
		return custNum;
	}
	public void setCustNum(long custNum) {
		this.custNum = custNum;
	}
	public String getCustQuery() {
		return custQuery;
	}
	public void setCustQuery(String custQuery) {
		this.custQuery = custQuery;
	}
	public Date getqDate() {
		return qDate;
	}
	public void setqDate(Date qDate) {
		this.qDate = qDate;
	}
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	public Date getsDate() {
		return sDate;
	}
	public void setsDate(Date sDate) {
		this.sDate = sDate;
	}
	
	

}

package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(schema = "my_data",name = "plan")
public class Plan {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ")
    @SequenceGenerator(sequenceName = "INColder", allocationSize = 1, name = "CUST_SEQ")
	private int id;
	private String name;
	@Value("${some.key:0}")
	private int pack;
	@Value("${some.key:0}")
	private int amount;
	@Value("${some.key:0}")
	private int validity;
	public int getId() {
		return id;
	}
		
	public int getPack() {
		return pack;
	}

	public void setPack(int pack) {
		this.pack = pack;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	public int getValidity() {
		return validity;
	}
	public void setValidity(int validity) {
		this.validity = validity;
	}
	public Plan(int id, String name,int amount, int validity) {
		super();
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.validity = validity;
	}
	public Plan() {
		super();
	}
	

}

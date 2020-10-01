package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(schema = "my_data",name = "plans")
public class PrepaidPlans {
	
	@Id
	private int id;
	private String name;
	private int dataPack;
	private int amount;
	public PrepaidPlans(int id, String name, int dataPack, int amount) {
		super();
		this.id = id;
		this.name = name;
		this.dataPack = dataPack;
		this.amount = amount;
	}
	
	public PrepaidPlans()
	{
		
	}

	public int getId() {
		return id;
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

	public int getDataPack() {
		return dataPack;
	}

	public void setDataPack(int dataPack) {
		this.dataPack = dataPack;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
}

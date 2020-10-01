package com.voizfonica.admin.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Offers", schema = "my_data")
public class AddOffer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String packname;
	private int amount;
	private int validity;
	private String dataPack;
	
	
	
	public AddOffer() 
	{
		
	}

	public AddOffer(int id, String packname, int amount, int validity, String dataPack) {
		super();
		this.id = id;
		this.packname = packname;
		this.amount = amount;
		this.validity = validity;
		this.dataPack = dataPack;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPackname() {
		return packname;
	}

	public void setPackname(String packname) {
		this.packname = packname;
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

	public String getDataPack() {
		return dataPack;
	}

	public void setDataPack(String dataPack) {
		this.dataPack = dataPack;
	}

	


	
}

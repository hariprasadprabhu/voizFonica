package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(schema = "my_data",name = "chat")
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Incchat")
    @SequenceGenerator(sequenceName = "my_data.Incchat", allocationSize = 1, name = "Incchat")
	private int id;
	private long phone_num;
	@Value("${some.key:0}")
	private int admin_id;
	private String message;
	public Chat(int id, long phon_num, int admin_id, String message) {
		super();
		this.id = id;
		this.phone_num = phon_num;
		this.admin_id = admin_id;
		this.message = message;
	}
	
	public long getPhone_num() {
		return phone_num;
	}

	public void setPhone_num(long phone_num) {
		this.phone_num = phone_num;
	}

	public Chat() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	
}

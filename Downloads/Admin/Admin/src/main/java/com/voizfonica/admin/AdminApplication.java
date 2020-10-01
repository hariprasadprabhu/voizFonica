package com.voizfonica.admin;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@SpringBootApplication
public class AdminApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(AdminApplication.class, args);
		
		
	}
	
	
}

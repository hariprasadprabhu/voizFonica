package com.voizfonica.admin.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.voizfonica.admin.model.GenerateOtp;

@RestController
public class OtpController
{
	private Map<String,GenerateOtp> otp_data=new HashMap<>();
	
	
	private final static String ACCOUNT_SID = "ACa94590d90f64e7c8e24cdee56d6fc884";
	private final static String AUTH_ID = "da8cc9532013be79eeb1b1bd518e5826";
	
	static {
	      Twilio.init(ACCOUNT_SID, AUTH_ID);
	   }
	
	

	
	
	@PostMapping("/checkotp/{phno}/otp")
	public ResponseEntity<Object> SendOTP(@PathVariable("phno") String phno)
	{
		GenerateOtp otpSystem=new GenerateOtp();
		otpSystem.setPhno(phno);
		otpSystem.setOtp(String.valueOf(((int)(Math.random()*(10000-1000)))+1000));
		otpSystem.setExpire(System.currentTimeMillis()+50000);
		otp_data.put(phno,otpSystem);
		Message.creator(new PhoneNumber("+918056846711"), new PhoneNumber("+19852874633"),
		         "Message from Spring Boot Application for otp"+otpSystem.getOtp()).create();
		return new ResponseEntity<>("otp sent successfully",HttpStatus.OK);
	}
	
	
	
	@PutMapping("/checkotp/{phno}/verify")
	public ResponseEntity<Object> verifyOTP(@PathVariable("phno") String phno,@RequestBody GenerateOtp otpval)
	{
		
		if(otpval.getOtp()==null || otpval.getOtp().length()<=0)
		{
			return new ResponseEntity<> ("provide a otp",HttpStatus.BAD_REQUEST);
		}
		
		
		if(otp_data.containsKey(phno))
		{
			GenerateOtp otpSystem=otp_data.get(phno);
			if(otpSystem!=null)
			{
				if(otpSystem.getExpire()>=System.currentTimeMillis())
				{
					if(otpval.getOtp().equals(otpSystem.getOtp()))
					{
						otp_data.remove(phno);
						return new ResponseEntity<>("otp is verified success",HttpStatus.OK);
					}
					return new ResponseEntity<>("Invalid otp",HttpStatus.BAD_REQUEST);
					
				}
				return new ResponseEntity<>("otp expired",HttpStatus.BAD_REQUEST);
			}
			return new ResponseEntity<> ("Something wrong",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>("mobile no not found",HttpStatus.NOT_FOUND);
		
		
	}
	
	
	
	
	
}

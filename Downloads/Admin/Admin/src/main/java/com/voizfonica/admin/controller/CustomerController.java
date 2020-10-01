
package com.voizfonica.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.voizfonica.admin.model.AddCustomer;
import com.voizfonica.admin.model.AddOffer;
import com.voizfonica.admin.service.CustomerService;



@RestController
public class CustomerController 
{
	@Autowired
	private CustomerService service;
	
	@Autowired
	JdbcTemplate jdbcTemplate; 
	
	@ResponseBody
	@PostMapping("/addcustomer")
	@CrossOrigin("http://localhost:4201")
	public AddCustomer addCustomer(@RequestBody AddCustomer customer) throws Exception
	{
		System.out.println("enter here");
		long phno=customer.getPhno();
		if(!"".equals(phno))
		{
			AddCustomer addcust=service.validateNumber(phno);
			if(addcust!=null)
			{
				throw new Exception("User with PhoneNumber "+phno+" already exists");
			}
		}
		
		service.addCustomer(customer);
		return customer;
	}
	
	@PostMapping("/editcustomer")
	@CrossOrigin("http://localhost:4201")
	public AddCustomer editCustomer(@RequestBody AddCustomer customer) throws Exception
	{
		System.out.println("enter here");
		service.updateCustomer(customer,customer.getFname(),customer.getLname(),customer.getType(),customer.getAddress(),customer.getAdharNo(),customer.getAltPhno());
		return customer;
	}
	
	
	@PostMapping("/delcustomer")
	@CrossOrigin("http://localhost:4201")
	public AddCustomer delCustomer(@RequestBody AddCustomer customer) throws Exception
	{
		System.out.println("enter here");
		service.delete(customer.getPhno());
		return customer;
	}
	
	
	@GetMapping("/viewuser/{services}")
	@CrossOrigin("http://localhost:4201")
	public List<AddCustomer> viewCustomer(@PathVariable("services") String type)
	{
		System.out.println(1);
		String query;
		if(type.equalsIgnoreCase("Prepaid") || type.equals("prepaid"))
		{
			query="select * from my_data.customer_admin where type="+"'prepaid'";
		}
		else if(type.equals("Postpaid") || type.equals("postpaid"))
		{
			query="select * from my_data.customer_admin where type="+"'postpaid'";
		}	
		else
		{
			query="select * from my_data.customer_admin where type="+"'Dongle'";
		}
		List<AddCustomer> list=jdbcTemplate.query(query,BeanPropertyRowMapper.newInstance(AddCustomer.class));
		System.out.println(list);
		return list;
		
	}
	
	
	@ResponseBody
	@PostMapping("/addoffer")
	@CrossOrigin(origins = "http://localhost:4200")
	public AddOffer addOffer(@RequestBody AddOffer offer) throws Exception
	{
		service.addOffer(offer);
		return offer;
	}
	
}

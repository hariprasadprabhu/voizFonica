package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Customer;
import com.example.demo.model.Details;

public interface RegistrationRepository extends JpaRepository<Customer, Long>
{
	public Customer findByphoneNum(Long num);
	public Customer findByphoneNumAndPassword(Long num,String password);
	
}

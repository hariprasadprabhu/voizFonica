package com.voizfonica.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.voizfonica.admin.model.AddCustomer;



public interface CustomerRepository extends JpaRepository<AddCustomer, Long> 
{

	public AddCustomer findByPhno(Long number);
	
}

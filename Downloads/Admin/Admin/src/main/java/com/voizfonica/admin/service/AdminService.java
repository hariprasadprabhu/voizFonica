package com.voizfonica.admin.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voizfonica.admin.model.Admin;

import com.voizfonica.admin.repository.AdminRepo;


@Service
public class AdminService
{
	@Autowired
	public AdminRepo repo;
	
	public Admin validate(Integer tid, String tpwd) 
	{
		return repo.findByIdAndPassword(tid,tpwd);
		
	}

	public Admin validateEmail(String email) 
	{
		
		return repo.findByEmail(email);
	}

	public Admin saveAdmin(Admin admin)
	{
		return repo.save(admin);
		
	}

	

}

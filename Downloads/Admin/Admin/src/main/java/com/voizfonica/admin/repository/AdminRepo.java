package com.voizfonica.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voizfonica.admin.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> 
{

    public Admin findByIdAndPassword(Integer id, String Password);

	public Admin findByEmail(String email);


	

}

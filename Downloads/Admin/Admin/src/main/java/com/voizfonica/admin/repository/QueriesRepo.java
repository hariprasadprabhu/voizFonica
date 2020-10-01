package com.voizfonica.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voizfonica.admin.model.Admin;
import com.voizfonica.admin.model.Queries;

@Repository
public interface QueriesRepo extends JpaRepository<Queries, Integer> 
{

    

	

}

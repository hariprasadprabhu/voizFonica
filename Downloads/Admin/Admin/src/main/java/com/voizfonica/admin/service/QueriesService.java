package com.voizfonica.admin.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.voizfonica.admin.model.Queries;

import com.voizfonica.admin.repository.QueriesRepo;

@Service
public class QueriesService
{
	
	@Autowired
	public QueriesRepo qrepo;

	public Optional<Queries> checkId(Integer id)
	{
		return qrepo.findById(id);
	}

	public Queries updateQuery(Queries query, Integer eid, String ans, String adate) 
	{
		query.setEmpId(eid);
		query.setEmpAns(ans);
		query.setAdate(adate);
		return qrepo.save(query);
	}




	
	

}

package com.voizfonica.admin.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.voizfonica.admin.model.Admin;
import com.voizfonica.admin.model.Queries;
import com.voizfonica.admin.service.AdminService;
import com.voizfonica.admin.service.QueriesService;

@RestController
public class QueriesController
{
	@Autowired
	public QueriesService service;
	
	@ResponseBody
	@PostMapping("/Submitanswers")
	@CrossOrigin("http://localhost:4201")
	public Queries updateAnswers(@RequestBody Queries query)throws Exception
	{
		Queries qobj=null;
		Integer id=query.getId();
		Optional<Queries> qid=null;
		if(id!=null)
		{
			qid=service.checkId(id);
			
		}
		if(qid !=null)
		{
			qobj=service.updateQuery(query,query.getEmpId(),query.getEmpAns(),query.getAdate());

		}
		else
		{
			throw new Exception("query is not exist");
		}
		return 	qobj;
	}
	
}

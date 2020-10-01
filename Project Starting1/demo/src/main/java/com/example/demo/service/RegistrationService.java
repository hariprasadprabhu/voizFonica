package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ActivePlans;
import com.example.demo.model.Chat;
import com.example.demo.model.Customer;
import com.example.demo.model.Details;
import com.example.demo.model.PostPlanActive;
import com.example.demo.model.PostActivePlans;
import com.example.demo.model.PostCustmerBill;
import com.example.demo.repository.Activepalnrepo;
import com.example.demo.repository.ChatRepository;
import com.example.demo.repository.PostActivePlanRepo;
import com.example.demo.repository.PostCustSub;
import com.example.demo.repository.PostpaidRepo;
import com.example.demo.repository.PreHistory_Repo;
import com.example.demo.repository.RegistrationRepository;
import com.example.demo.repository.PostPlanDetailsRepo;
import com.example.demo.model.Post_details;
import com.example.demo.model.Prepaid_history;

@Service
public class RegistrationService 
{
	@Autowired
	private RegistrationRepository repo;
	@Autowired
	private ChatRepository crepo;
	
	@Autowired
	private Activepalnrepo arepo;
	
	@Autowired
	private PostpaidRepo prepo;
	
	@Autowired
	private PostActivePlanRepo paprepo;
	
	@Autowired
	private PostPlanDetailsRepo postplandetails;
	
	@Autowired
	private PreHistory_Repo preo2;
	
	@Autowired
	private PostCustSub postsubrepo;

	public Customer saveCustomer(Customer cust)
	{
		return repo.save(cust);
	}
	
	public Chat saveChat(Chat cust)
	{
		return crepo.save(cust);
	}
	
	public Customer fetchCustByNumber(long num)
	{
		return repo.findByphoneNum(num);
	}
	public Customer fetchCustByNumberAndPassword(long num,String password)
	{
		return repo.findByphoneNumAndPassword(num, password);
	}
	public Customer fetchAll(long num) {
		return repo.findByphoneNum(num);
		
	}
	
	public  ActivePlans saveACtive(ActivePlans cust)
	{
		return arepo.save(cust);
	}
	public PostActivePlans savePostPlan(PostActivePlans num)
	{
		return prepo.save(num);
	}
	public PostPlanActive saveToPost(PostPlanActive pap)
	{
		return paprepo.save(pap);
	}
	public Post_details updatepostpaid(Post_details pap)
	{
		return postplandetails.save(pap);
	}
	public Prepaid_history updateprepaid(Prepaid_history pap)
	{
		return preo2.save(pap);
	}
	public Customer updatepwd(Customer c,String pwd) 
	{
		c.setPassword(pwd);
		return repo.save(c);	
	}
	public PostCustmerBill insertbillvalue(PostCustmerBill abc)
	{
		return postsubrepo.save(abc);
	}
	
}

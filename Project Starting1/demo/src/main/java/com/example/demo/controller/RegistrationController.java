package com.example.demo.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ActivePlans;
import com.example.demo.model.Chat;
import com.example.demo.model.Cust_Admin;
import com.example.demo.model.Cust_sub;
import com.example.demo.model.Customer;
import com.example.demo.model.Details;
import com.example.demo.model.GenerateOtp;
import com.example.demo.model.Plan;
import com.example.demo.model.PostActivePlans;
import com.example.demo.model.PostCustmerBill;
import com.example.demo.model.PostPlanActive;
import com.example.demo.model.Post_details;
import com.example.demo.model.PrepaidPlans;
import com.example.demo.model.Prepaid_history;
import com.example.demo.model.Query;
import com.example.demo.service.RegistrationService;


@RestController
public class RegistrationController 
{
	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private RegistrationService service;
	@PostMapping(path = "/registercustomer")
	@CrossOrigin(origins = "http://localhost:4200")
	public Customer registerCustomer(@RequestBody Customer cust) throws Exception
	{
		long num=cust.getPhoneNum();
		if(num!=0)
		{
			Customer custObje=service.fetchCustByNumber(num);
			if(custObje!=null)
			{
				throw new Exception("User with "+num+" is already exist");
			}
		}
		String id1=Long.toString(num);
		String sql="SELECT * FROM my_data.customer_admin WHERE phno="+id1;
		List<Cust_Admin> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cust_Admin.class));
		try {
			Cust_Admin ca=list.get(0);
			//service.savePostPlan();
		}
		catch(Exception e)
		{
			throw new Exception("This Number is not subscribed to our service");
		}
		if(list.get(0).getType().equalsIgnoreCase("postpaid"))
		{
			PostPlanActive ppa = new PostPlanActive();
			ppa.setPhno(num);
			ppa.setPlan_id(1);
			Calendar c = Calendar.getInstance();
			c.setTime(new java.util.Date());
			c.add(Calendar.DATE, 30);
			Date d = new Date(c.getTimeInMillis());
			ppa.setEdate(d);
			PostPlanActive spa = service.saveToPost(ppa);
			System.out.println(d);
			cust.setService("postpaid");
		}
		else if("dongle".equalsIgnoreCase(list.get(0).getType()))
		{
			cust.setService("dongle");
		}
		else
		{
			cust.setService("prepaid");
		}
		Customer custObje=null;
		custObje=service.saveCustomer(cust);
		return custObje;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public Cust_Admin loginCustomer(@RequestBody Customer cust) throws Exception
	{
		long tempNumber=cust.getPhoneNum();
		String tempPass=cust.getPassword();
		Customer custObj=null;
		if(tempNumber!=0 && tempPass!=null)
		{
			custObj= service.fetchCustByNumberAndPassword(tempNumber, tempPass);
			
		}
		if(custObj==null)
			throw new Exception("User Does not Exist with the given Credentials");
		String id1=Long.toString(tempNumber);
		String sql="SELECT * FROM my_data.customer_admin WHERE phno="+id1;
		List<Cust_Admin> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cust_Admin.class));
		
		return list.get(0);
	}
	
	@PostMapping("/getall")
	public List<Customer> showall()
	{
		String sql="SELECT * FROM my_data.CUST01";
		List<Customer> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Customer.class));
		
		return list;
	}
	@GetMapping("/getallPlans")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Plan> showallPlans()
	{
		String sql="SELECT * FROM my_data.plan";
		List<Plan> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Plan.class));
		
		return list;
	}
	@GetMapping("/query/{mobNum}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Query> showAllQueries(@PathVariable("mobNum") long mob)
	{
		String mobn=Long.toString(mob);
		String sql="SELECT * FROM my_data.cust_emp_query where cust_Num="+mobn;
		System.out.println("hi");
		List<Query> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Query.class));
		System.out.println(list.get(0).getCustQuery());
		return list;
	}
	
	@GetMapping("/history/{mobNum}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Prepaid_history> showHistory(@PathVariable("mobNum") long mob)
	{
		String mobn=Long.toString(mob);
		System.out.println("mobnumber in hitory="+mob);
		String sql="SELECT * FROM my_data.prepaid_history where PH_NUM="+mobn;
		List<Prepaid_history> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Prepaid_history.class));
		return list;
		
	}
	
	@PostMapping("/sethistory")
	@CrossOrigin(origins = "http://localhost:4200")
	public Prepaid_history sethistory(@RequestBody Prepaid_history cust)
	{
		cust.setPh_num(cust.getPhno());
		service.updateprepaid(cust);
		return null;
	}
	
	@GetMapping("/getplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Plan> selectPlanById(@PathVariable("id") long id)
	{
		String id1=Long.toString(id);
		String sql="SELECT * FROM my_data.plan where id="+id1;
		List<Plan> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Plan.class));
		return list;
		
	}
	
	@GetMapping("/getActiveplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Plan findActivePlan(@PathVariable("id") long id)
	{
		String id1=Long.toString(id);
		String sql="SELECT * FROM my_data.plan where id IN (SELECT plan_id FROM my_data.activeplans WHERE phone_num="+id1+")";
		List<Plan> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Plan.class));
		System.out.println(list.get(0));
		return list.get(0);
		
	}
	
	@GetMapping("/getActiveplanDate/{phno}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ActivePlans findActiveDate(@PathVariable("phno") long phno)
	{
		String id1=Long.toString(phno);
		String sql="SELECT * FROM my_data.activeplans where phone_num="+id1;
		List<ActivePlans> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(ActivePlans.class));
		System.out.println(list.get(0));
		System.out.println("hio");
		return list.get(0);
		
	}
	
	
	@GetMapping("/getAllChats/{phno}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Chat> findAllchats(@PathVariable("phno") long phno)
	{
		String id1=Long.toString(phno);
		String sql="SELECT * FROM my_data.chat where phone_num="+id1+" order by id";
		List<Chat> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Chat.class));
		return list;
		
	}
	
	
	@GetMapping("/getAlChats/{phno}")
	@CrossOrigin(origins = "http://localhost:4201")
	public List<Chat> findAllchat(@PathVariable("phno") long phno)
	{
		String id1=Long.toString(phno);
		String sql="SELECT * FROM my_data.chat where phone_num="+id1+" order by id";
		List<Chat> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Chat.class));
		return list;
		
	}
	
	@PostMapping("/getAlChatContact")
	@CrossOrigin(origins = "http://localhost:4201")
	public List<Chat> findAllchatContact(@RequestBody Chat chat)
	{
		String sql="select distinct phone_num from (select phone_num,id from my_data.chat order by id DESC)";
		List<Chat> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Chat.class));
		return list;
		
	}
	
	@PostMapping("/insertChats")
	@CrossOrigin(origins = "http://localhost:4200")
	public Chat inserchats(@RequestBody Chat chat)
	{
		Chat cobj=service.saveChat(chat);
		return cobj;
		
	}


	@PostMapping("/insertChat")
	@CrossOrigin(origins = "http://localhost:4201")
	public Chat insertchats(@RequestBody Chat chat)
	{
		Chat cobj=service.saveChat(chat);
		return cobj;
		
	}
	
	
	@PostMapping("/updateActivePlan")
	@CrossOrigin(origins = "http://localhost:4200")
	public ActivePlans updateActivePlan(@RequestBody ActivePlans act)
	{
		
		ActivePlans ap=service.saveACtive(act);
		
		return ap;
		
		
	}
	
	/*            admin side                */
	
	
	
	
	@PostMapping("/updatePostSub")
	@CrossOrigin("http://localhost:4200")
	public Customer updatePostSub(@RequestBody PostCustmerBill cust) {
		System.out.println("Started");
		Calendar c = Calendar.getInstance();
        c.setTime(new java.util.Date());
        c.add(Calendar.DATE, 30);
        Date d=new Date(c.getTimeInMillis());
        cust.setBdate(d);
		String sql1="SELECT * FROM my_data.cust_sub where phno="+cust.getPhno();
		List<PostCustmerBill> list2=jdbcTemplate.query(sql1, BeanPropertyRowMapper.newInstance(PostCustmerBill.class));
		try {
			System.out.println("success==="+list2.get(0));
		}
		catch (Exception e) {
			service.insertbillvalue(cust);
		}
		
		long phno = cust.getPhno();
		int data=cust.getData_used();
		int amount=cust.getAmount();
		System.out.println("nor done");
		String query;
		String sql="UPDATE my_data.cust_sub SET data_used=?,bdate=?,amount=? WHERE phno=?";  
	    jdbcTemplate.update(sql,data,cust.getBdate(),amount ,phno);
			

		return null;
	}
	
	@GetMapping("/getBill/{number}")
	@CrossOrigin(origins = "http://localhost:4201")
	public List getBill(@PathVariable("number") long mob)
	{
		
		String id1=Long.toString(mob);
		String sql="SELECT * FROM my_data.customer_admin where phno="+id1;
		List list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cust_Admin.class));
		String sql1="SELECT * FROM my_data.cust_sub where phno="+id1;
		List list2=jdbcTemplate.query(sql1, BeanPropertyRowMapper.newInstance(Cust_sub.class));
		System.out.println(list.get(0));
		System.out.println(list2.get(0));
		System.out.println("hio");
		list.add(list2.get(0));
		return list;
	}
	
	@GetMapping("/getallPostpaidPlans")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Cust_Admin> showallPostpaidPlans()
	{
		String sql="SELECT * FROM my_data.customer_admin where type='postpaid'";
		List<Cust_Admin> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Cust_Admin.class));
		
		return list;
	}
	
	
	@GetMapping("/postpaidHistory/{mobNum}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Post_details> showHistorypostpaid(@PathVariable("mobNum") long mob)
	{
		String mobn=Long.toString(mob);
		String sql="SELECT * FROM my_data.post_details where phno="+mobn;
		List<Post_details> list= jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Post_details.class));
		return list;
		
	}
	
	@GetMapping("/getpostActiveplan/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public PostPlanActive findPostActivePlan(@PathVariable("id") long id)
	{
		String id1=Long.toString(id);
		String sql="SELECT * FROM my_data.post_active_plans WHERE phno="+id1;
		List<PostPlanActive> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(PostPlanActive.class));
		System.out.println(list.get(0));
		return list.get(0);
		
	}
	
	@GetMapping("/getpostPendingActive")
	@CrossOrigin(origins = "http://localhost:4201")
	public List<PostPlanActive> findPostPendingActive()
	{
		
		String sql="SELECT * FROM my_data.post_active_plans order by phno";
		List<PostPlanActive> list=jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(PostPlanActive.class));
		return list;
		
	}
	
	@PostMapping("/updatepostpaiddetails")
	@CrossOrigin(origins = "http://localhost:4200")
	public PostActivePlans updateActivepostplandetails(@RequestBody PostActivePlans postAplan)
	{	
		postAplan.setPaid(1);
		System.out.println(postAplan.getPaid());
		return service.savePostPlan(postAplan);
		
	}
	
	
	@PostMapping("/updatepostpaid")
	@CrossOrigin(origins = "http://localhost:4200")
	public PostActivePlans updateActivepostplan(@RequestBody PostActivePlans postAplan)
	{	
		PostPlanActive ppa=new PostPlanActive();
		ppa.setPhno(postAplan.getPhno());
		ppa.setPlan_id(1);
		Calendar c = Calendar.getInstance();
        c.setTime(new java.util.Date());
        c.add(Calendar.DATE, 30);
        Date d=new Date(c.getTimeInMillis());
        ppa.setEdate(d);
        PostPlanActive spa=service.saveToPost(ppa);
        System.out.println(d);
        
        Post_details pa=new Post_details();
        pa.setPaid(ppa.getPlan_id());
        pa.setPhno(ppa.getPhno());
        Calendar c1 = Calendar.getInstance();
        c1.setTime(new java.util.Date());
        Date d1=new Date(c1.getTimeInMillis());
        pa.setPdate(d1);
        pa.setPaid(1);
        Post_details pd=service.updatepostpaid(pa);
		postAplan.setPaid(1);
		System.out.println(postAplan.getPaid());
		return null;
		
	}
	
	
	//Reset password
	
	


	@PostMapping("/updatepwd")
	@CrossOrigin("http://localhost:4200")
	public Customer updatepwd(@RequestBody Customer cust) {
		long phno = cust.getPhoneNum();
		String email=cust.getEmailId();
		String pwd=cust.getPassword();
		System.out.println(phno);
		String query;
		String sql="UPDATE my_data.cust01 SET password=? WHERE phone_num=?";  
	    jdbcTemplate.update(sql, pwd,phno);
			

		return null;
	}
	
	//profile updation
	long refid;
	
	@GetMapping("/getval/{phno}")
	@CrossOrigin("http://localhost:4200")
	public Cust_Admin getvalue(@PathVariable("phno") long phno) {
		refid=phno;
		String query;
		Cust_Admin cust= null;
		System.out.println("entered");
		query = "select * from my_data.customer_admin where phno="+phno;

		List<Cust_Admin> list = jdbcTemplate.query(query, BeanPropertyRowMapper.newInstance(Cust_Admin.class));
		
		
		for(Cust_Admin a:list)
		{
			System.out.println(a);
			cust=a;
			break;
		}
		return cust;

	}
	@PostMapping("/updatecustomer")
	@CrossOrigin("http://localhost:4200")
	public Cust_Admin editCustomer(@RequestBody Cust_Admin  customer) throws Exception
	{
		System.out.println("entering update");
		String sql="UPDATE my_data.customer_admin SET fname=?,lname=?,email=?,address=?,adhar_no=?,alt_phno=? WHERE phno=?";  
	    jdbcTemplate.update(sql, customer.getFname(),customer.getLname(),customer.getEmail(),customer.getAddress(),customer.getAdhar_no(),customer.getAlt_phone(),customer.getPhno());
		return customer;
		
	}

	
}

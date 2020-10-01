package com.voizfonica.admin.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.mail.Message; import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.itextpdf.html2pdf.HtmlConverter;
import com.voizfonica.admin.model.AddCustomer;
import com.voizfonica.admin.model.Admin;
import com.voizfonica.admin.model.Email;
import com.voizfonica.admin.model.Queries;
import com.voizfonica.admin.service.AdminService;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.xhtmlrenderer.pdf.ITextRenderer;

import com.lowagie.text.DocumentException;





@RestController
public class AdminController
{
	@Autowired
	public AdminService service;
	
	@Autowired
	JdbcTemplate jdbcTemplate; 
	
	@Autowired
	public JavaMailSender javaMailSender;
	
	@Autowired
	private TemplateEngine templateEngine;

	
	@ResponseBody
	@PostMapping("/login")
	@CrossOrigin("http://localhost:4201")
	public Admin login(@RequestBody Admin admin)
	{
		Admin aobj = null;
		Integer tid=admin.getid();
		String tpwd=admin.getPassword();
		if(tid!=null && tpwd != null)
		{
			aobj=service.validate(tid,tpwd);
		}
		if(aobj==null)
		{
			System.out.println("no details");;
		}
		return aobj;
	}
	
	@ResponseBody
	@PostMapping("/reg")
	@CrossOrigin("http://localhost:4201")
	public Admin registration(@RequestBody Admin admin) throws Exception
	{
		Integer eid=admin.getid();
		String email=admin.getEmail();
		Admin adminobj=null;
		Admin obj=null;
		if(email!=null)
		{
			adminobj=service.validateEmail(email);
			if(adminobj !=null)
			{
				throw new Exception("user with "+eid+" is already exists ");
				
			}
			else
			{
				obj = service.saveAdmin(admin);
			}
		}
		
		return obj;
		
	}
	
	@GetMapping("/search/{phno}")
	@CrossOrigin("http://localhost:4201")
	public List<AddCustomer> viewCustomer(@PathVariable("phno") long number)
	{
		System.out.println(1);
		String query;
		
		query="select * from my_data.customer_admin where phno="+number;
		
		List<AddCustomer> list=jdbcTemplate.query(query,BeanPropertyRowMapper.newInstance(AddCustomer.class));
		System.out.println(list);
		return list;
		
	}
	
	
	
	@PostMapping("/sendEmail")
	public void sendEmail() throws MessagingException
	{
		MimeMessage message=javaMailSender.createMimeMessage();
		MimeMessageHelper helper=new MimeMessageHelper(message,true);
		helper.setTo("lshariprasadp@gmail.com");
		helper.setSubject("Voizfonica Bill generation");
		helper.setText("hi here is the attached copy of bill");
		
		
		ClassPathResource path=new ClassPathResource("hello.pdf");
		helper.addAttachment("hello.pdf", path);
		
		
		javaMailSender.send(message);
		
		
	}
	
	
	@PostMapping("/send")
	public ModelAndView demo(@RequestBody AddCustomer customer)
	{
		ModelAndView mv=new ModelAndView("hello");
		String name=customer.getFname();
		mv.addObject("name","keerthi");
		
		
		return mv;	
	}
	
	@PostMapping("/genpdf")
	public void generatePdf(@RequestBody AddCustomer customer,Model model) throws FileNotFoundException, IOException, MessagingException
	{
		String name=customer.getFname();
		model.addAttribute("fname",name);
		HtmlConverter.convertToPdf(new FileInputStream("src/main/resources/templates/hello.html"), 
	            new FileOutputStream("src/main/resources/templates/"));

	        System.out.println( "PDF Created!" );
	    sendEmail();
	}
	long refid;
	@GetMapping("/getval/{id}")
	@CrossOrigin("http://localhost:4201")
	public Admin getvalue(@PathVariable("id") long id) {
		refid=id;
		String query;
		Admin admin = null;
		query = "select * from my_data.admin where id=" + id;

		List<Admin> list = jdbcTemplate.query(query, BeanPropertyRowMapper.newInstance(Admin.class));
		
		for(Admin a:list)
		{
			admin=a;
			break;
		}
		return admin;

	}
	@PostMapping("/updateadmin")
	@CrossOrigin("http://localhost:4201")
	public Admin editCustomer(@RequestBody Admin admin) 
	{
		System.out.println("entering update");
		String sql="UPDATE my_data.admin SET fname=?,lname=?,phno=?,email=? WHERE id=?";  
	    jdbcTemplate.update(sql, admin.getFname(),admin.getLname(),admin.getPhno(),admin.getEmail(),refid);
		return admin;
	}
	
	// we add this file /Admin/src/main/java/com/voizfonica/admin/ThymeleafConfiguration.java,then some thymeleaf dependency
	
	@PostMapping("/generate")
	public void call() throws Exception
	{
		Map<String,String> data = new HashMap<String,String>();
	    data.put("name","keerthi");
	    createPdf("abc",data); // abc is our html file inside template
	}
	
	
	
	
	
	public void createPdf(String templateName, Map map) throws Exception {
		Assert.notNull(templateName, "The templateName can not be null");
		Context ctx = new Context();
		if (map != null) {
		     Iterator itMap = map.entrySet().iterator();
		       while (itMap.hasNext()) {
			  Map.Entry pair = (Map.Entry) itMap.next();
		          ctx.setVariable(pair.getKey().toString(), pair.getValue());
			}
		}
		
		String processedHtml = templateEngine.process(templateName, ctx);
		  FileOutputStream os = null;
		  String fileName = "hellopdf";//any name for pdf file
	        try {
	            final File outputFile = File.createTempFile(fileName, ".pdf");
	            os = new FileOutputStream(outputFile);

	            ITextRenderer renderer = new ITextRenderer();
	            renderer.setDocumentFromString(processedHtml);
	            renderer.layout();
	            renderer.createPDF(os, false);
	            renderer.finishPDF();
	            System.out.println("PDF created successfully");
	        }
	        finally {
	            if (os != null) {
	                try {
	                    os.close();
	                } catch (IOException e) { /*ignore*/ }
	            }
	        }
	}
	// hari pdf will be generated inside users/appdata/local/temp
}

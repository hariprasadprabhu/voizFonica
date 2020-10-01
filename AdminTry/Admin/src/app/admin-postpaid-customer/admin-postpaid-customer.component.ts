import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AddUserService} from '../add-user.service';
import { User } from '../user';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Mailinfo } from '../mailinfo';
import {Mailformat} from '../mailformat'


@Component({
  selector: 'app-admin-postpaid-customer',
  templateUrl: './admin-postpaid-customer.component.html',
  styleUrls: ['./admin-postpaid-customer.component.css']
})
export class AdminPostpaidCustomerComponent implements OnInit {
  customers : Observable<User[]>;
  customerForm:FormGroup;
  user=new User();
  mail=new Mailformat();
  actives:{}
  constructor(private service:AddUserService,private router:Router) { }

  ngOnInit(): void 
  {
    this.initialize();
    this.reloadData();
  }


  initialize()
  {
    
    this.customers=this.service.displayPostpaid();
   
  }

  reloadData()
  {
    this.customers=this.service.displayPostpaid();
  }

  update(cust)
  {
    this.user=cust;
    this.service.update(this.user).subscribe(
      data=>{console.log("response recived"),
      window.location.reload();

    },
      error=>{console.log("exception occured")}
      
    

    );
  }

  delete(cust)
  {
    this.user=cust;
    this.service.delete(this.user).subscribe(
      data=>{console.log("response recived"),
      this.reloadData();

    },
      error=>{console.log("exception occured")}
    
    );

  }

  generateBill(cust)
  {
    this.user=cust;
    this.service.generate(this.user).subscribe(
      data=>{console.log("response recived")
      

    },
      error=>{console.log("exception occured")}
    
    );

  }
  generate(val)
  {
    
    let str=''+val
    console.log("mob number--->"+str)
    localStorage.setItem('mob',str);
    this.router.navigate(['/pdfgen'])
  }

  sendMail(val,val2)
  {
    let str=''+val
    localStorage.setItem('mob',str);
    this.mail.text="Hi "+val2+" It's seems like you forgot to pay the bill of your number "+str+"\nDon't worry we are here to help you please visit www.voizfonoc.com and pay your bill quickely and safely\n\n\nThank you and Regards\nVoizFonica";
    this.mail.to="lshariprasadp@gmail.com";
    this.mail.subject="Payment Reminder!!"
    console.log(this.mail.subject+"    "+this.mail.to+"    "+this.mail.text)
    this.service.send_reminder(this.mail).subscribe(
      data=>{
        console.log("mails sent")
      },
      error=>{
        console.log(error)
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'
import {RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { Mailformat } from '../mailformat';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail=new Mailformat();
  cust = new Customer();
  password1:String;
  password2:String;
  msg=""
  trueOrFalse=true
  constructor(private _service: RegistrationService,private _router:Router) {
    if(localStorage.getItem('key')!=null)
    {
     _router.navigate['loginsuccessful']   
    }
    else
    {
    }
   }

  ngOnInit(): void {
  }


  OnInput(event: any) {
    this.password1 = event.target.value;
    }
  OnInput1(event: any) 
  {
      this.password2 = event.target.value;
   }
   iscorrect():boolean
   {
     if(this.password1 === this.password2)
     {
        return false;
     }
     else
     {
       return true;
     }
   }

  loginCust()
  {
    this._service.loginCustomerFromRemote(this.cust).subscribe(
      data=>{console.log("response recived");
      let value = data.phno+'';
      localStorage.setItem('key', value);

      
      if(data.type=='Prepaid' || data.type=='prepaid')
        localStorage.setItem('service','prepaid')
      else if(data.type=='Postpaid' || data.type=='postpaid')
        localStorage.setItem('service','postpaid')
      else
       localStorage.setItem('service','dongle')
      localStorage.setItem('name',data.fname)
      console.log("type of customer= "+data.type)
      if(data.type=='postpaid')
        this._router.navigate(['/postpaidhome'])
      else
        this._router.navigate(['/loginsuccess'])
    },
      error=>{console.log("exception occured")
      this.msg="Bad Credentials, Please enter valid number and password"}
    );
  }

  otp=Math.floor(Math.random() * Math.floor(10000));
  message;
  message1;
  sendEmail()
  {
    console.log("OTP IS="+this.otp)
    // this.mail.text="Hi please use below otp to reset your password \nOTP="+this.otp+"\nDont Share this OTP with any one\nThank you And Regards\nVoizFonica";
    // this.mail.to="lshariprasadp@gmail.com";
    // this.mail.subject="ResetPassword!";
    // this._service.send_confirmation(this.mail).subscribe(
    //   data=>{
    //     console.log("mails sent")
    //   },
    //   error=>{
    //     console.log(error)
    //   }
    // );
  }

  verify(otpval)
  {
    if(this.otp==parseInt(otpval))
    {
      this.message="OTP verified successfully Please press on RESET NOW";
      this.message1="green";
      this.trueOrFalse=false
    }
    else{
      this.message="Sorry OTP Not matched";
      this.message1="red";
    }
    // this._service.check(otpval).subscribe(
    //   data=>
    //   {
    //     this.message="success";
    //   },
    //   error=>{
    //     this.message="false";
    //   }
      
    // );
    console.log(this.message);
  }

  updatepwd()
  {
    this._service.update(this.cust).subscribe(
      data=>{
        console.log("successfully uploaded")
      },
      error=>{
        console.log("error occured while updateing")
      }
    );
  }
  
}

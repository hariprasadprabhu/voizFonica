import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activeplans } from '../activeplans';
import { Plans } from '../plans';
import { RegistrationService } from '../registration.service';
import * as firebase from 'firebase'
import {PostActivePlan} from '../post-active-plan'
import { Mailformat } from '../mailformat';

@Component({
  selector: 'app-postpaid-billpayment',
  templateUrl: './postpaid-billpayment.component.html',
  styleUrls: ['./postpaid-billpayment.component.css']
})
export class PostpaidBillpaymentComponent implements OnInit {

  planid;
  toggle=false
  event;
  pn;
  mail=new Mailformat();
  code;
  msg="";
  img1="none";
  img2="none";
  distance=0;
  activeplans= new PostActivePlan();
  abc=true;
  data;
  amount;
  service;
  days;
  plan:Observable<Plans[]>;
  constructor(private router:Router,private _service:RegistrationService,private datePipe: DatePipe) {
    this.service=localStorage.getItem('service')
this.activeplans.phno=parseInt(localStorage.getItem('key')) //parseInt(localStorage.getItem('key'))
this.activeplans.plan_id=parseInt(localStorage.getItem('postactiveid'))
this.activeplans.date=new Date(localStorage.getItem('postactivedate'))
this.pn=localStorage.getItem('key');
    this._service.getPlanIdFromRemote(localStorage.getItem('rechargekey')).subscribe(
      data=>
      {
        for(let l of data)
        {
          this.data=l.pack;
          this.days=l.validity;
          this.amount=l.amount;
          console.log(data)
        }
      }
    )

    var date = new Date();
    this.act.setddate(this.datePipe.transform(date,"yyyy-MM-dd"));
    this.act.setphone_num(parseInt(localStorage.getItem('key')));
    this.act.setplan_id(parseInt(localStorage.getItem('rechargekey')))
   }
  
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyC6u0bOCITXdLvNQszLUCGSkFDWbpqddtk",
      authDomain: "otp-generator-ac884.firebaseapp.com",
      databaseURL: "https://otp-generator-ac884.firebaseio.com",
      projectId: "otp-generator-ac884",
      storageBucket: "otp-generator-ac884.appspot.com",
      messagingSenderId: "585045980602",
      appId: "1:585045980602:web:8f548b13daa06fa7e45983",
      measurementId: "G-NY9Y10Z8YW"
    };
    firebase.initializeApp(firebaseConfig)

    }
      otp(){
    console.log("hellox")
    let recaption=new firebase.auth.RecaptchaVerifier('recaptcha')
    let number='+916360634388';
    firebase.auth().signInWithPhoneNumber(number,recaption).then(async (e)=>{
      this.event=e
      this.toggle=true;
    })
  }
  done()
  {
    console.log("called");
    this.router.navigate(['/processing'])
  }

  act=new Activeplans();
  verify(){
    
    this.event.confirm(this.code).then(res=>{
      this.msg="OPT Matched Please press CONFIRM to Continue"
      this.abc=false;
    })
    .catch(err=>{
      this.msg="Wrong OTP"
    })
  }

  confirmation()
  {
    //this._service.sendBill("tesing","lshariprasadp@gmail.com",'7353164950',2500);
    this.mail.text="You have successfuly Paid your Bill "+localStorage.getItem('key')+" with amount "+this.amount+" Rs.";
    this.mail.to="lshariprasadp@gmail.com";
    this.mail.subject="Bill Payment Successful"
    console.log(this.mail.subject+"    "+this.mail.to+"    "+this.mail.text)
    this._service.send_confirmation(this.mail).subscribe(
      data=>{
        console.log("mails sent")
      },
      error=>{
        console.log(error)
      }
    );
      this._service.updateActivepostPlan(this.activeplans).subscribe(
        data=>{
          console.log("success")
          this.router.navigate(['/processing'])
        },
        error=>{
          console.log("fialed")
        }
      )
  }
}

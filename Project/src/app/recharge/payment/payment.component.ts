import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import * as firebase from 'firebase'
import { Router } from '@angular/router';
import { Plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import {Activeplans} from 'src/app/activeplans';
import { DatePipe } from '@angular/common';
import { Mailformat } from 'src/app/mailformat';
import {PrepaidHistory} from 'src/app/prepaid-history'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  planid;
  toggle=false
  event;
  code;
  mail=new Mailformat();
  msg="";
  img1="none";
  img2="none";
  distance=0;
  service=localStorage.getItem('service')
  abc=true;
  data;
  hist=new PrepaidHistory()
  amount;
  days;
  plan:Observable<Plans[]>;
  constructor(private router:Router,private _service:RegistrationService,private datePipe: DatePipe) {

    if(localStorage.getItem('key')=='no' ||localStorage.getItem('key')=='null')
    {
      router.navigate(['/login'])
    }

    this._service.getPlanIdFromRemote(localStorage.getItem('rechargekey')).subscribe(
      data=>
      {
        for(let l of data)
        {
          this.hist.plan_id=l.id;
          this.hist.rdate= new Date()
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
    console.log("hello")
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
    this.mail.text="You have successfuly recharged your number "+localStorage.getItem('key')+" with amount "+this.amount+" Rs.";
    this.mail.to="lshariprasadp@gmail.com";
    this.mail.subject="Recharge Successful"
    console.log(this.mail.subject+"    "+this.mail.to+"    "+this.mail.text)
    this._service.send_confirmation(this.mail).subscribe(
      data=>{
        console.log("mails sent")
      },
      error=>{
        console.log(error)
      }
    );
    this.hist.phno=parseInt(localStorage.getItem('key'))

    this._service.updatehistory(this.hist).subscribe(
      data=>{
        console.log("saved ro history")
      },
      error=>{
        console.log("error occurd while saving history");
      }
    );
      this._service.updateActivePlanq(this.act).subscribe(
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

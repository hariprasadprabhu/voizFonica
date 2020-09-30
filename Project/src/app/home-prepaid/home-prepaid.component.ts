import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import {Details} from '../details';
import { Plans } from '../plans';
import { Router } from '@angular/router';
import { error } from 'jquery';
import {PrepaidHistory} from  'src/app/prepaid-history'

@Component({
  selector: 'app-home-prepaid',
  templateUrl: './home-prepaid.component.html',
  styleUrls: ['./home-prepaid.component.css']
})
export class HomePrepaidComponent implements OnInit {

  plans: Observable<Plans[]>;
  act;
  activeid:number;
  res1:Observable<Plans[]>
  activename:string;
  activevalidity:number;
  activeamount:number;
  activepack:number;
  activedate:Date;
  mb=localStorage.getItem('key');
  planId;
  demo:any;
  pln=[]
  hist;
  service=localStorage.getItem('service')
  ress
  colrtime="text-success"
  msg="Yout Current Plan Expires In ";
  constructor(private _service:RegistrationService,private rout:Router) {
   
   
     }

  ngOnInit(): void {
    this.mb=localStorage.getItem('key')
    this.load();
  }

  load()
  {
    this._service.historyCustomerFromRemote(this.mb).subscribe(
      data=>{
        this.ress=data;
        console.log("Plan_id="+data[0].plan_id)
      },
      error=>{

      }
    )
    this._service.getActivePlanFromRemote(this.mb).subscribe(
      data=>{
        this.activeid=data.id;
        console.log(data.id)
        this.activename=data.name;
        this.activeamount=data.amount;
        this.activevalidity=data.validity;
        this.activepack=data.pack;
  },
  error=>{
    this.activeid=0;
  });
  this._service.getDatePlanFromRemote(this.mb).subscribe(data=>{
    this.activedate=data.ddate;
    console.log(this.activedate)
  })
  }
  
  //countDouwnDate=this.activevalidity*1000*60*60*24;
  
  //countDouwnDate=new Date("october 14, 2020 00:00:00").getTime();
  x=setInterval(()=>{
    var countDouwnDate;
    if(this.activeid!=0)
    {
        countDouwnDate=new Date(this.activedate).getTime()+this.activevalidity*1000*60*60*24;
    }
    else
    {
      countDouwnDate=new Date("october 14, 2010 00:00:00").getTime();
    }
    var now = new Date().getTime();
    var distance = countDouwnDate-now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/(1000));
    this.demo = days + " Days "+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds";
    if(distance<86400000)
    {
      this.colrtime= "text-danger";
    }
    if(distance<0)
    {
      clearInterval(this.x)
      this.demo="Your plan is expired"
      this.colrtime= "text-danger";
      this.msg="Oops...!!"
    }
  })
}

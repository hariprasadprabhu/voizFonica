import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Details } from '../details';
import { Plans } from '../plans';
import { RegistrationService } from '../registration.service';
import {Posthistory} from '../posthistory';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-postpaidhome',
  templateUrl: './postpaidhome.component.html',
  styleUrls: ['./postpaidhome.component.css']
})
export class PostpaidhomeComponent implements OnInit {

  plans: Observable<Plans[]>;
  act;
  d;
  activeid:number;
  res1:Observable<Posthistory[]>
  datee
  mb;
  planId;
  activedate;
  name=localStorage.getItem('name');
  activevalidity;
  demo:any;
  pln=[]
  res:Observable<Posthistory[]>;
  colrtime="text-success"
  msg="Yout Current Plan Expires In ";
  constructor(private _service:RegistrationService,private rout:Router,private datepipe:DatePipe) {
     }

  ngOnInit(): void {
    this.mb=localStorage.getItem('key')
    this.load();
  }

  load()
  {
    this.res=this._service.historyPostCustomerFromRemote(this.mb);
    this._service.getpostActiveplan(this.mb).subscribe(
      data=>{
        var str=data.plan_id+''
        localStorage.setItem('postactiveid',str);
        var d=data.edate+''
        this.d=data.edate;
        localStorage.setItem('postactivedate',d);
        var date1=new Date() 
        var month=date1.getMonth()+1;
        var date=date1.getDate();
        var year=date1.getFullYear();
        console.log("dateee="+d)
        console.log(year+" "+month+" "+date+"          "+parseInt(d.substring(0,4))+" "+ parseInt(d.substring(5,7))+" "+parseInt(d.substring(8,10)))
        if(parseInt(d.substring(0,4))<=year && parseInt(d.substring(5,7))<=month && parseInt(d.substring(8,10))<=date)
        {
          console.log("notpaid")
          this.colrtime="notpaid"
        }
        else{
          console.log("paid")
          this.colrtime="paid"
        }
  },
  error=>{
    this.activeid=0;
  });
  }
  
}

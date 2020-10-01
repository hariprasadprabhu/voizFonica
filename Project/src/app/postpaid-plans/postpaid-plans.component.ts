import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Postpaidsub} from '../postpaidsub'
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-postpaid-plans',
  templateUrl: './postpaid-plans.component.html',
  styleUrls: ['./postpaid-plans.component.css']
})
export class PostpaidPlansComponent implements OnInit {
  postpaids=[
    {Data:"75",Monthly:"499",Pack:"Student pack",Validity:"28",Action:"Recharge"},
    {Data:"125",Monthly:"749",Pack:"Student pack",Validity:"28",Action:"Recharge"},
    {Data:"150",Monthly:"999",Pack:"Student pack",Validity:"28",Action:"Recharge"},
    {Data:"250",Monthly:"1599",Pack:"Family pack",Validity:"56",Action:"Recharge"},
    {Data:"350",Monthly:"2999",Pack:" Mega Pack",Validity:"84",Action:"Recharge"},
    {Data:"450",Monthly:"3999",Pack:" Ultra Mega Pack",Validity:"128 Day",Action:"Recharge"}
];
service=localStorage.getItem('service')
postsub= new Postpaidsub();
  constructor(private _router:Router,private  _service:RegistrationService) { }

  ngOnInit(): void {
  }
  getPostpaid() {
    
    response=>{
      this.postpaids=response;
    }
  }
  save(val)
  {
    console.log(this.postpaids[val].Pack+"***")
    this.postsub.phno=parseInt(localStorage.getItem('key'))
    this.postsub.amount=parseInt(this.postpaids[val].Monthly);
    this.postsub.data_used=parseInt(this.postpaids[val].Data);
    this._service.updatecustsub(this.postsub).subscribe(
      data=>{
        console.log("done")
      },
      error=>{
        console.log("error")
      }
    )
    this._router.navigate(['\planselected'])
  }


}

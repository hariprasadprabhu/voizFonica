import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Plans} from '../plans'
import {RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prepaid-plans',
  templateUrl: './prepaid-plans.component.html',
  styleUrls: ['./prepaid-plans.component.css']
})
export class PrepaidPlansComponent implements OnInit {
  
  plans: Observable<Plans[]>;
  act;
  active=[];
  ph=localStorage.getItem('key');

  constructor(private _service: RegistrationService,private _router:Router,cd: ChangeDetectorRef) {
    if(localStorage.getItem('key')=='no')
    {
      _router.navigate(['/login'])
    }

   }

  ngOnInit(): void {  
    this.reloadData();
  }
  reloadData() {
    this.plans = this._service.plansPrepaidCustomerFromRemote();
    this.act=this._service.getActivePlanFromRemote(this.ph);
    console.log(this)

  }
  recharge(val)
  {
    let str=val+''
    localStorage.setItem('planid',str);
    this._router.navigate(['/payment'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plans } from '../plans';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  plan:Observable<Plans[]>
  mb;
  constructor(private _service:RegistrationService,private router:Router) {
    // if(localStorage.getItem('key')=='no')
    // {
    //   router.navigate(['/login'])
    // }

    this.mb=localStorage.getItem('key');
   }

  ngOnInit(){
    this.plan=this._service.plansPrepaidCustomerFromRemote();
  }
  
  myFunc(val)
  {
    var x=document.getElementById(val);
    if(x.className.indexOf("w3-show")==-1){
      x.className+="w3-show";
    }else{
      x.className=x.className.replace("w3-show","")
    }
  }

  recharge(val)
  {
    console.log(val)
    var str=val+''
    localStorage.setItem('rechargekey',str);
    this.router.navigate(['payment']) ;

  }

}

import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer'
import {RegistrationService} from '../registration.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  password1:String;
  password2:String;
  regForm:FormGroup;
  cust=new Customer();
  flag=false;  
  msg=""
  constructor(private _service: RegistrationService,private _router:Router) { }

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
  registerForm()
  {
    this._service.registerCustomerFromRemote(this.cust).subscribe(
      data=>{console.log("response recived");
      this._router.navigate(['/login']) 
    },
      error=>{
        
      console.log("exception occured")
        this.msg="user already exist OR User with this number not belongs to our service"}

      
    );
  }
}

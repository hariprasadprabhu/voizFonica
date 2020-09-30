import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  password1:String;
  password2:String;
  regForm:FormGroup;
  cust=new Customer();
  flag=false;  
  msg=""  
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
  registerForm()
  {
    this._service.registerCustomerFromRemote(this.cust).subscribe(
      data=>{console.log("response recived");
      this._router.navigate(['/login']) 
    },
      error=>{console.log("exception occured")
      this.msg="user already exist"}
    );
  }
}

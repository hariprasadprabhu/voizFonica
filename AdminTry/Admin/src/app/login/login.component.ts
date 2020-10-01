import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg="";
  admin=new Admin();
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin()
  {
    this.service.checkAdmin(this.admin).subscribe(
      data=>{console.log("response recived");
      if(data==null)
      {
        console.log("error");
        this.router.navigate(['/login']);
        this.msg="Bad Credentials, Please enter valid number and password";
        
      }
      else
      {
        let str=''+this.admin.id;
      localStorage.setItem('key',str)
      this.msg="";
      this.router.navigate(['/customerdetails']);
      }
    },
      error=>{console.log("exception occured");}
      
    );
  }
}

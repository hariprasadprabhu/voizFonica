import { Component, OnInit } from '@angular/core';
import {AddUserService} from '../add-user.service';
import {User} from '../user';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  customerForm:FormGroup;
  user=new User();
  ngOnInit(): void {
  }
  
  constructor(private service:AddUserService,private router:Router){}
  public storeuser()
  {
    return this.service.call(this.user).subscribe(
      data=>{console.log("response recived");
      this.router.navigate(['/customerdetails'])
    },
      error=>{console.log("exception occured")}
      
    
    );
  }


}

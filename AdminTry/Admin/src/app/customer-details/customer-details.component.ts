import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddUserService } from '../add-user.service';
import { User } from '../user';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  val:User;
  type:string;
  users : Observable<User[]>;
  constructor(private service:AddUserService) { }

  ngOnInit(): void
  {
    
  }
searchuser(num)
{
  this.users=this.service.search(num);
  this.users.subscribe(lists=>{
    lists.forEach(user=>{
        this.type=user.type;
    })
  })
  
}


}

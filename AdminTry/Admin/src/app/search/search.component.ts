import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component'
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  users:Observable<User[]>
  constructor(private c:CustomerDetailsComponent) { }

  ngOnInit(): void 
  {
    this.users=this.c.users;
    
  }

}

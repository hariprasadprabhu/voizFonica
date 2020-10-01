import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import {Customer1} from '../customer1'
@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
  phno;
  service=localStorage.getItem('service')
  customer:Observable<Customer1>
  cust=new Customer1();
  constructor(private _service:RegistrationService) { 
    this.phno=localStorage.getItem('key');
    this.customer=_service.getvalue(this.phno);
    this.customer.subscribe(customer=>{
      this.cust=customer;
    });
  }

  ngOnInit(): void {
  }

  update()
  {
    return this._service.updatecust(this.cust).subscribe();
  }
  
}

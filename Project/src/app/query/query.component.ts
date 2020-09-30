import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Query} from '../query';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  
  phno;
  qrys: Observable<Query[]>;
  constructor(private _service: RegistrationService) { 
    this.phno=parseInt(localStorage.getItem('key'));
  }

  ngOnInit(): void {
    this.qrys=this._service.queryCustomerFromRemote(this.phno);
  }

}

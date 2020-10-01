import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Chat} from '../chat'
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-cust-chat',
  templateUrl: './cust-chat.component.html',
  styleUrls: ['./cust-chat.component.css']
})
export class CustChatComponent implements OnInit {

  res=new Chat();
  items:Observable<Chat[]>
  constructor(private _service:RegistrationService,private router:Router) {
    this._service.getAllcontacts(this.res).subscribe(
      data=>{
        this.items=data;
      }
    )
   }

  ngOnInit() {
    
  }
  reply(val)
  {
    console.log(val)
    var str=val+''
    localStorage.setItem('mobno',str);
    this.router.navigate(['/chating'])

  }

}

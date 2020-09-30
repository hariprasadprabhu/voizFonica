import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from '../registration.service';
import {Chat} from '../chat';
import { data } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerchat',
  templateUrl: './customerchat.component.html',
  styleUrls: ['./customerchat.component.css']
})
export class CustomerchatComponent implements OnInit {

  chats:Observable<Chat>;
  chat=new Chat();
  mob;
  service;
  name=localStorage.getItem('name')
  constructor(private _service:RegistrationService,private router:Router) {
    this.service=localStorage.getItem('service');
    // if(localStorage.getItem('key')=='no')
    // {
    //   router.navigate(['/login'])
    // }
    this.mob=localStorage.getItem('key');
   }

  ngOnInit(): void {
    this.load()
  }
  load()
  {
    this.chats=this._service.getChats(this.mob)
    this.chat.phone_num=parseInt(this.mob);
    this.chat.admin_id=0;
  }
  call()
  {
    this._service.inserMessage(this.chat).subscribe(
      data=>
      {
          
        this.load();

      }
    );
  }
  x=setInterval(()=>{
    this.load();
  },10000)

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../chat';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats:Observable<Chat>;
  chat=new Chat();
  mob
  constructor(private _service:RegistrationService) { 

    this.mob=localStorage.getItem('mobno');
    console.log("mob number="+this.mob)
  }

  ngOnInit(): void {
    this.load()
  }

  load()
  {
    this.chats=this._service.getChats(this.mob)
    this.chat.phone_num=parseInt(localStorage.getItem('mobno'));
    this.chat.admin_id=1;
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

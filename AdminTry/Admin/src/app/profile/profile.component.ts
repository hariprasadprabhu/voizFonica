import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fname;
    lname;
    id;
    email;
    phno;
    admin:Observable<Admin>;
    adm=new Admin();
  constructor(private service:RegistrationService) {
    this.id=localStorage.getItem('key');
    this.admin=service.getvalue(this.id);
    this.admin.subscribe(admin=>{
      this.adm=admin;
    });
   }

  ngOnInit(): void {
  }

  update()
  {
    this.service.update(this.adm).subscribe();
    
  }
}

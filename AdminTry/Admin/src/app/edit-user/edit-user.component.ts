import { Component, OnInit } from '@angular/core';
import {AddUserService} from '../add-user.service';
import {User} from '../user';
import {FormGroup, FormsModule, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  payForm:FormGroup;


    msg=""


  constructor() { }

  ngOnInit(): void {
  }
  paymentForm()
  {
console.warn(this.payForm.value)
  }
  showValue(cardno){
    console.log(cardno);
  }
  cardnumber(inputtxt)
{
  var cardno = /^4[0-9]\d+$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      
}

}





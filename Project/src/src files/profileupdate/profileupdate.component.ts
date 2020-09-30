import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {
name="hari"
service="Postpaid"
ids="overview"
act=""
act2=""
act3=" "
  constructor() { 
    this.act=localStorage.getItem('act')
    this.act2=localStorage.getItem('act2')
    this.act3=localStorage.getItem('act3')
  }

  ngOnInit(): void {
  }

  setting()
  {
    this.ids="settigns"

    this.act=localStorage.getItem('act')
    this.act2=localStorage.getItem('act2')
    this.act3=localStorage.getItem('act3')

    localStorage.setItem('act','')
    localStorage.setItem('act2','active')
    localStorage.setItem('act3','')
  }
}

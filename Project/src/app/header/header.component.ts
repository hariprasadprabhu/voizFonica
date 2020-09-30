import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  phno;
  constructor() {
    this.phno=localStorage.getItem('key');
   }

  ngOnInit(): void {
  }

}

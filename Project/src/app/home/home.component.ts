import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num=10;

  constructor() { }

  ngOnInit(): void {
  }

  x=setInterval(()=>{
    if(this.num>138646)
    {
      clearInterval(this.x)
    }
    else{
      this.num=this.num+5007
    }
  },100)
}

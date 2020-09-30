import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  distance=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  x=setInterval(()=>{
    
    if(this.distance>0)
    {
      clearInterval(this.x);
      this.router.navigate(['/done'])
    }
    this.distance=this.distance+1;
  },3000)
}

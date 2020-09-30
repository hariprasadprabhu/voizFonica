import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  distance=0
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  x=setInterval(()=>{
    
    if(this.distance>0)
    {
      clearInterval(this.x);
      this.router.navigate(['/home'])
    }
    this.distance=this.distance+1;
  },3000)
}

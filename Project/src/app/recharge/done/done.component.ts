import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  service
  distance=0;
  constructor(private router:Router) { 
    this.service=localStorage.getItem('service')
  }

  ngOnInit(): void {
  }
  
  

}

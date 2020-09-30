import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepaid-history',
  templateUrl: './prepaid-history.component.html',
  styleUrls: ['./prepaid-history.component.css']
})
export class PrepaidHistoryComponent implements OnInit {

  constructor(private router:Router) { 
    if(localStorage.getItem('key')=='no')
    {
      router.navigate(['/login'])
    }

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pretopost',
  templateUrl: './pretopost.component.html',
  styleUrls: ['./pretopost.component.css']
})
export class PretopostComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  gohome()
  {
    this._router.navigate(['/loginsuccess'])
  }
}

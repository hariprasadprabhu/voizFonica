import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AddoffersService} from '../addoffers.service';
import { Offers } from '../offers';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offers=new Offers();
  value:string;

  constructor(private service: AddoffersService) { }

  ngOnInit(): void {
  }

  addOffer1()
  {
    this.value="2 GB/day data pack";
    this.add();
  }

  addOffer2()
  {
    this.value="3 GB/day data pack";
    this.add();
  }

  addOffer3()
  {
    this.value="LONG TERM PACKS";
    this.add();
  }

  addOffer4()
  {
    this.value="FOOTBALL PACK";
    this.add();
  }

  addOffer5()
  {
    this.value="DATA ADD ON PACKS";
    this.add();
  }
  
  addOffer6()
  {
    this.value="LONG TERM VOICE PACK";
    this.add();
  }
  
  addOffer7()
  {
    this.value="LONG TERM VOICE PACK";
    this.add();
  }
  
  add()
  {
    this.offers.packname=this.value;
    this.service.addoffer(this.offers).subscribe(
      data =>console.log("response received"),
      error=>console.log("exception occured")
    )
  }

  
  

}



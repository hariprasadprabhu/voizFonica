import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from './offers';

@Injectable({
  providedIn: 'root'
})
export class AddoffersService {

  
  constructor(private http:HttpClient) { }

  public addoffer(offers:Offers):Observable<any>
  {
    return this.http.post("http://localhost:8090/addoffer",offers)
  }

}

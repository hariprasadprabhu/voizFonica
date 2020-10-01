import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
checkAdmin(admin:Admin):Observable<any>
{
  return this.http.post("http://localhost:8090/login",admin);
}
}

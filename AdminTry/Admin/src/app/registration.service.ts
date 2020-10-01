import { Injectable } from '@angular/core';
import {Admin} from './admin';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Chat } from './chat';
import { Mailinfo } from './mailinfo';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public storeDetails(admin :Admin):Observable<any>
  {
    return this.http.post("http://localhost:8090/reg",admin);
  }
  public getAllcontacts(res:Chat):Observable<any>
  {
    return this.http.post<any>("http://localhost:8081/getAlChatContact",res);
  }
  public getChats(phono):Observable<any>{
    return this.http.get<any>("http://localhost:8081/getAlChats/"+phono);
  }
  public inserMessage(chat:Chat):Observable<any>{
    return this.http.post<any>("http://localhost:8081/insertChat/",chat);
  }
  public getBillPostPaidCust(mob):Observable<any>{
    return this.http.get<any>("http://localhost:8081/getBill/"+mob);
  }
  public sendmailabc(mail:Mailinfo):Observable<any>{
    return this.http.post<any>("http://localhost:8083/send-mail",mail);
  }
  public getvalue(id):Observable<any>
  {
    return this.http.get("http://localhost:8090/getval/"+id);
  }
  public update(admin:Admin):Observable<any>
  {
    return this.http.post("http://localhost:8090/updateadmin",admin);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminPrepaidCustomerComponent } from './admin-prepaid-customer/admin-prepaid-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AdminPostpaidCustomerComponent } from './admin-postpaid-customer/admin-postpaid-customer.component';
import { AdminDongleCustomerComponent } from './admin-dongle-customer/admin-dongle-customer.component';
import { from } from 'rxjs';
import { AddUsersComponent } from './add-users/add-users.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchComponent } from './search/search.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { CustChatComponent } from './cust-chat/cust-chat.component';
import { ChatComponent } from './chat/chat.component';
import { PdfgenComponent } from './pdfgen/pdfgen.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdminPrepaidCustomerComponent,
    CustomerDetailsComponent,
    AdminPostpaidCustomerComponent,
    AdminDongleCustomerComponent,
    AddUsersComponent,
    AddOfferComponent,
    EditUserComponent,
    SearchComponent,
    ProfileupdateComponent,
    CustChatComponent,
    ChatComponent,
    PdfgenComponent,
    HeaderComponent,
    ProfileComponent
    ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

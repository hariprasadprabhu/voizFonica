import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPrepaidCustomerComponent } from './admin-prepaid-customer/admin-prepaid-customer.component';
import {AdminPostpaidCustomerComponent} from  './admin-postpaid-customer/admin-postpaid-customer.component';
import {AdminDongleCustomerComponent} from './admin-dongle-customer/admin-dongle-customer.component'
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AddUsersComponent} from './add-users/add-users.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SearchComponent } from './search/search.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { CustChatComponent } from './cust-chat/cust-chat.component';
import { ChatComponent } from './chat/chat.component';
import { PdfgenComponent } from './pdfgen/pdfgen.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'edit',component:EditUserComponent},
  {path:'customerdetails',component:CustomerDetailsComponent,
  children : [
    {path:'prepaid',component:AdminPrepaidCustomerComponent},
    
    {path:'postpaid',component:AdminPostpaidCustomerComponent},
    {path:'dongle',component:AdminDongleCustomerComponent},
    {path:'adduser',component:AddUsersComponent},
    {path:'addoffer',component:AddOfferComponent},
    {path:'search',component:SearchComponent},
    {path:'chat',component:CustChatComponent},
    {path:'profile',component:ProfileComponent}

  ]

},
{path:'update',component:ProfileupdateComponent,
children:[
  {path:'editt',component:EditUserComponent}
]

},
{path:'chating',component:ChatComponent},
{path:'pdfgen',component:PdfgenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

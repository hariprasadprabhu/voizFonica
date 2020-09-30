import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePrepaidComponent } from './home-prepaid/home-prepaid.component';
import { RegistrationComponent } from './registration/registration.component';
import { PrepaidPlansComponent } from './prepaid-plans/prepaid-plans.component';
import { HomeComponent } from './home/home.component';
import { PrepaidhomeComponent } from './prepaidhome/prepaidhome.component';
import{LogoutComponent} from './logout/logout.component';
import { QueryComponent } from './query/query.component';
import { PrepaidHistoryComponent } from './prepaid-history/prepaid-history.component';
import { CustomerchatComponent } from './customerchat/customerchat.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './recharge/payment/payment.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { CommonComponent } from './recharge/common/common.component';
import { DoneComponent } from './recharge/done/done.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { EditComponent } from './profileupdate/edit/edit.component';
import { SettingsComponent } from './profileupdate/settings/settings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MailingComponent} from './mailing/mailing.component'
import { PretopostComponent } from './pretopost/pretopost.component';
import { PostpaidhomeComponent } from './postpaidhome/postpaidhome.component';
import { PostpaidBillpaymentComponent } from './postpaid-billpayment/postpaid-billpayment.component';
import { SpeedComponent } from './speed/speed.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'register',component:RegistrationComponent},
  {path:'loginsuccess',component:HomePrepaidComponent},
  {path:'login',component:LoginComponent},
  {path:'prepaidplans',component:PrepaidPlansComponent},
  {path:"home",component:HomeComponent},
  {path:'homeprepaid',component:HomePrepaidComponent},
  {path:'query',component:QueryComponent},
  {path:'history',component:PrepaidHistoryComponent},
  {path:'logout',component:LogoutComponent},
  {path:'chat',component:CustomerchatComponent},
  {path:'recharge',component:RechargeComponent},
  {path:'payment',component:PaymentComponent},
  {path:'phoneotp',component:PhoneLoginComponent},
  {path:'processing',component:CommonComponent},
  {path:'done',component:DoneComponent},
  {path:'update',component:ProfileupdateComponent,
  children:[
  {path:'editprofile',component:EditComponent},
  {path:'setting',component:SettingsComponent}
  ]  
  },
  {path:'welcome',component:WelcomeComponent},
  {path:'mail',component:MailingComponent},
  {path:'pretoposttrack',component:PretopostComponent},
  {path:'postpaidhome',component:PostpaidhomeComponent},
  {path:'postpaidbill',component:PostpaidBillpaymentComponent},
  {path:'speed',component:SpeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

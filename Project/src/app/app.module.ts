import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePrepaidComponent } from './home-prepaid/home-prepaid.component';
import { PrepaidPlansComponent } from './prepaid-plans/prepaid-plans.component';
import { PrepaidhomeComponent } from './prepaidhome/prepaidhome.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HeadernavPrepaidComponent } from './headernav-prepaid/headernav-prepaid.component';
import { FooterComponent } from './footer/footer.component';
import { QueryComponent } from './query/query.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { PrepaidHistoryComponent } from './prepaid-history/prepaid-history.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerchatComponent } from './customerchat/customerchat.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './recharge/payment/payment.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { CommonComponent } from './recharge/common/common.component';
import { DoneComponent } from './recharge/done/done.component';
import {DatePipe} from '@angular/common';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { EditComponent } from './profileupdate/edit/edit.component';
import { SettingsComponent } from './profileupdate/settings/settings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailingComponent } from './mailing/mailing.component';
import { PretopostComponent } from './pretopost/pretopost.component';
import { PostpaidhomeComponent } from './postpaidhome/postpaidhome.component';
import { HeadernavPostpaidComponent } from './headernav-postpaid/headernav-postpaid.component';
import { PostpaidBillpaymentComponent } from './postpaid-billpayment/postpaid-billpayment.component';
import { SpeedComponent } from './speed/speed.component';
import { PostpaidPlansComponent } from './postpaid-plans/postpaid-plans.component';
import { PlanBoughtComponent } from './plan-bought/plan-bought.component';

localStorage.setItem('key','no');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomePrepaidComponent,
    PrepaidPlansComponent,
    PrepaidhomeComponent,
    HeaderComponent,
    HomeComponent,
    HeadernavPrepaidComponent,
    FooterComponent,
    QueryComponent,
    PrepaidHistoryComponent,
    LogoutComponent,
    CustomerchatComponent,
    RechargeComponent,
    PaymentComponent,
    PhoneLoginComponent,
    CommonComponent,
    DoneComponent,
    ProfileupdateComponent,
    EditComponent,
    SettingsComponent,
    WelcomeComponent,
    MailingComponent,
    PretopostComponent,
    PostpaidhomeComponent,
    HeadernavPostpaidComponent,
    PostpaidBillpaymentComponent,
    SpeedComponent,
    PostpaidPlansComponent,
    PlanBoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StickyNavModule,
    CountdownModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

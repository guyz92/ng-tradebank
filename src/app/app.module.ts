import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TradeBankOfferComponent } from './trade-bank-offer/trade-bank-offer.component';
import { TradeBankLoanComponent } from './trade-bank-loan/trade-bank-loan.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TradeBankOfferComponent,
    TradeBankLoanComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
//    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

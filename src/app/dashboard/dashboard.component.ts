import { Component, OnInit } from '@angular/core';
import { TradeBankOfferComponent } from '../trade-bank-offer/trade-bank-offer.component';
import { TradeBankLoanComponent } from '../trade-bank-loan/trade-bank-loan.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

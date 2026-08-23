import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TradeBankOfferComponent } from '../trade-bank-offer/trade-bank-offer.component';
import { TradeBankLoanComponent } from '../trade-bank-loan/trade-bank-loan.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

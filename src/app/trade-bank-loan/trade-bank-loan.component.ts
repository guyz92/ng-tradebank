import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-trade-bank-loan',
    templateUrl: './trade-bank-loan.component.html',
    styleUrls: ['./trade-bank-loan.component.css'],
    standalone: false
})
export class TradeBankLoanComponent implements OnInit {

  checkCircle = faCheckCircle;
  timesCircle = faTimesCircle;

  constructor() { }

  ngOnInit() {
  }

}

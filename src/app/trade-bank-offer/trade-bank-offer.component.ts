import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-trade-bank-offer',
    templateUrl: './trade-bank-offer.component.html',
    styleUrls: ['./trade-bank-offer.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TradeBankOfferComponent implements OnInit {

  checkCircle = faCheckCircle;
  timesCircle = faTimesCircle;

  constructor() { }

  ngOnInit() {
  }

}

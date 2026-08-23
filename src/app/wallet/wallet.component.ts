import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WalletComponent implements OnInit {

  plusSquare = faPlusSquare;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.css'],
    standalone: false
})
export class WalletComponent implements OnInit {

  plusSquare = faPlusSquare;

  constructor() { }

  ngOnInit() {
  }

}

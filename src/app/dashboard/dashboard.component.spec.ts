import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TradeBankOfferComponent } from '../trade-bank-offer/trade-bank-offer.component';
import { TradeBankLoanComponent } from '../trade-bank-loan/trade-bank-loan.component'
import { WalletComponent } from '../wallet/wallet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent,TradeBankOfferComponent, TradeBankLoanComponent, WalletComponent ],
      imports: [ FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

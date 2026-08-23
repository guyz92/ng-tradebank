import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TradeBankLoanComponent } from './trade-bank-loan.component';

describe('TradeBankLoanComponent', () => {
  let component: TradeBankLoanComponent;
  let fixture: ComponentFixture<TradeBankLoanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBankLoanComponent ],
      imports: [ FontAwesomeModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBankLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TradeBankOfferComponent } from './trade-bank-offer.component';

describe('TradeBankOfferComponent', () => {
  let component: TradeBankOfferComponent;
  let fixture: ComponentFixture<TradeBankOfferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBankOfferComponent ],
      imports: [ FontAwesomeModule ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeBankOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

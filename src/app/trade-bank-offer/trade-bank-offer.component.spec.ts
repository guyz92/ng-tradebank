import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBankOfferComponent } from './trade-bank-offer.component';

describe('TradeBankOfferComponent', () => {
  let component: TradeBankOfferComponent;
  let fixture: ComponentFixture<TradeBankOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBankOfferComponent ]
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

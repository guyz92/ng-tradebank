import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeBankLoanComponent } from './trade-bank-loan.component';

describe('TradeBankLoanComponent', () => {
  let component: TradeBankLoanComponent;
  let fixture: ComponentFixture<TradeBankLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeBankLoanComponent ]
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

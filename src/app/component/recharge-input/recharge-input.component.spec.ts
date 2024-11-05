import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeInputComponent } from './recharge-input.component';

describe('RechargeInputComponent', () => {
  let component: RechargeInputComponent;
  let fixture: ComponentFixture<RechargeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechargeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

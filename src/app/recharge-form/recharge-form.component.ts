import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Promotion {
  id: number,
  description: string;
  applyPromotion(amount: number): number;
}

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recharge-form.component.html',
  styleUrls: ['./recharge-form.component.css']
})
export class RechargeFormComponent implements OnInit {
  rechargeForm: FormGroup;
  promotions: Promotion[] = [
    {
      id: 1,
      description: 'Mobile Store Recharge 9.95% Discount',
      applyPromotion: (amount: number) => amount * 0.995
    },
    {
      id: 2,
      description: 'Mobile Store Recharge 8.95% Discount',
      applyPromotion: (amount: number) => amount * 0.985
    },
    {
      id: 3,
      description: 'Mobile Store Recharge 7.95% Discount',
      applyPromotion: (amount: number) => amount * 0.975
    }
  ];

  selectedPromotion: Promotion | undefined = undefined;

  constructor(private fb: FormBuilder) { 
    this.rechargeForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      discount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(10), Validators.max(3000)]]
    });

  }

  ngOnInit() {
  }

  setAmount(amount: number) {
    this.rechargeForm?.patchValue({ amount });
  }

  calculatePaymentAmount() {
    const amount = this.rechargeForm?.get('amount')?.value;
    if (!this.selectedPromotion)
      return 0;
    return this.selectedPromotion.applyPromotion(amount);
  }

  onSubmit() {
    if (this.rechargeForm?.valid) {
      console.log('Form Submitted', this.rechargeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // 只允许输入数字
  onPhoneInput(event: any) {
    const input = event.target.value;
    this.rechargeForm?.controls['phone'].setValue(input.replace(/[^0-9]/g, ''));
  }

  onPromotionChange(event: any) {
    const selectedId = parseInt(event.target.value, 10);
    this.selectedPromotion = this.promotions.find(promotion => promotion.id === selectedId);
  }
}

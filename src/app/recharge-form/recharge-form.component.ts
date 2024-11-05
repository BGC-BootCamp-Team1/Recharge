import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})

export interface Promotion {
  description: string;
  applyPromotion(amount: number): number;
}

export class RechargeFormComponent {
  rechargeForm: FormGroup;  
  promotions: Promotion[] = [
    {
      description: 'Mobile Store Recharge 9.95% Discount',
      applyPromotion: (amount: number) => amount * 0.995
    },
    {
      description: 'Mobile Store Recharge 8.95% Discount',
      applyPromotion: (amount: number) => amount * 0.985
    },
    {
      description: 'Mobile Store Recharge 7.95% Discount',
      applyPromotion: (amount: number) => amount * 0.975
    }
  ];

  selectedPromotion: Promotion | undefined = undefined;

  constructor(private fb: FormBuilder) {
    this.rechargeForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      discount: [''],
      amount: ['', [Validators.required, Validators.min(10), Validators.max(3000)]]
    });}

  onSubmit() {
    if (this.rechargeForm.valid) {
      console.log(this.rechargeForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  setAmount(amount: number) {
    this.rechargeForm.get('amount')?.setValue(amount);
  }

  calculatePaymentAmount(): number {
    const amount = this.rechargeForm.get('amount')?.value;
    if (!this.selectedPromotion)
    {
      return 0;
    }
    return this.selectedPromotion.applyPromotion(amount);
  }
  
  onPhoneInput(event: any) {
    const input = event.target.value;
    this.rechargeForm.controls['phone'].setValue(input.replace(/[^0-9]/g, ''));
  }
  
  // onPromotionChange(event: any) {
  //   const selectedDescription = event.target.value;
  //   this.selectedPromotion = this.promotions.find(promotion => promotion.description === selectedDescription);
  // }
}
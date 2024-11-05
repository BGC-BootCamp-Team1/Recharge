import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
      description: 'Mobile Store Recharge 10% Discount',
      applyPromotion: (amount: number) => amount * 0.9
    },
    {
      id: 2,
      description: 'Save 30 for each 200',
      applyPromotion: (amount: number) => amount - Math.floor(amount/200) * 30
    },
    {
      id: 3,
      description: 'Save 50 for each 300',
      applyPromotion: (amount: number) => amount - Math.floor(amount/300) * 50
    }
  ];

  amountOptions: number[] = [30, 50, 100, 300, 500];
  selectedAmount: number | null = null;
  selectedPromotion: Promotion | undefined = undefined;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.rechargeForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      discount: [''],
      amount: ['', [Validators.required, Validators.min(10), Validators.max(3000)]]
    });

  }

  ngOnInit() {
  }

  calculatePaymentAmount() {
    const amount = this.rechargeForm?.get('amount')?.value;
    if (!this.selectedPromotion)
      return amount;
    return this.selectedPromotion.applyPromotion(amount);
  }

  onSubmit() {
    if (this.rechargeForm?.valid) {
      console.log('Form Submitted', this.rechargeForm.value);
      this.router.navigate(['/confirm'], {
        queryParams: {
          amount: this.selectedAmount,
          paymentAmount: this.calculatePaymentAmount()
        }
      });} else {
      console.log('Form is invalid');
    }
  }

  onPhoneInput(event: any) {
    const input = event.target.value;
    this.rechargeForm?.controls['phone'].setValue(input.replace(/[^0-9]/g, ''));
  }

  onPromotionChange(event: any) {
    const selectedId = parseInt(event.target.value, 10);
    this.selectedPromotion = this.promotions.find(promotion => promotion.id === selectedId);
  }
  
  setAmount(amount: number) {
    this.rechargeForm.patchValue({ amount });
    this.selectedAmount = amount;
  }

  onAmountInput(event: any) {
    const input = event.target.value;
    this.rechargeForm.controls['amount'].setValue(input.replace(/[^0-9]/g, ''));
    this.selectedAmount = null;
  }
}

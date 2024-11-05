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
export class RechargeFormComponent {
  rechargeForm: FormGroup;

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

  calculatePaymentAmount(): string {
    const amount = this.rechargeForm.get('amount')?.value;
    const discount = 0.9995; // 9.95% discount
    return (amount * discount).toFixed(2);
  }
  
  onPhoneInput(event: any) {
    const input = event.target.value;
    this.rechargeForm.controls['phone'].setValue(input.replace(/[^0-9]/g, ''));
  }
}
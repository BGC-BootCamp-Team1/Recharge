import { Component } from '@angular/core';
import {PhoneNumberComponent} from "../phone-number/phone-number.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [
    PhoneNumberComponent, CommonModule, FormsModule
  ],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  selectedDiscount: string = 'Mobile Store Recharge 9.95% Discount';
  amounts: number[] = [30, 50, 100, 300, 500];
  selectedAmount: number | null = 100;
  customAmount: string = '';
  errorMessage: string | null = null;
  paymentAmount : number = 0;
  amountReceived : number = 0;

  updateDiscountTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDiscount = selectElement.options[selectElement.selectedIndex].text;
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
    this.errorMessage = null;

  }

  removeActiveClass() {
    this.selectedAmount = null;
    this.errorMessage = null;

  }

  validateCustomAmount() {
    const value = parseInt(this.customAmount, 10);
    if (isNaN(value) || value < 10 || value > 3000) {
      this.errorMessage = '请输入10到3000之间的整数';
    } else {
      this.errorMessage = null;
    }
  }


}

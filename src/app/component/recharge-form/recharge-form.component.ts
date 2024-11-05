import { Component } from '@angular/core';
import {PhoneNumberComponent} from "../phone-number/phone-number.component";

@Component({
  selector: 'app-recharge-form',
  standalone: true,
  imports: [
    PhoneNumberComponent
  ],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  selectedDiscount: string = 'Mobile Store Recharge 9.95% Discount';

  updateDiscountTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDiscount = selectElement.options[selectElement.selectedIndex].text;
  }
}

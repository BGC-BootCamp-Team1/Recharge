import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
export class RechargeFormComponent implements OnInit{
  @Output() dataEvent = new EventEmitter<{ phone: string, paymentAmount: number, amountReceived: number }>();

  selectedDiscountStr: string = 'Mobile Store Recharge 9.95% Discount';
  amounts: number[] = [30, 50, 100, 300, 500];
  selectedAmount: number | null = 100;
  customAmount: string = '';
  errorMessage: string | null = null;
  paymentAmount : number = 90.05;
  amountReceived : number = 100;
  phone:string = "";

  ngOnInit(): void {
  }

  updateDiscountTag(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDiscountStr = "Mobile Store Recharge " +
      parseFloat(parseFloat(selectElement.options[selectElement.selectedIndex].value).toFixed(3))*100+
      " % Discount";
    this.calculateReceivedAmount(parseFloat(selectElement.value));

  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = '';
    this.errorMessage = null;
    const discountValue = parseFloat((document.getElementById('discount') as HTMLSelectElement).value);
    this.calculateReceivedAmount(discountValue);

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
      const discountValue = parseFloat((document.getElementById('discount') as HTMLSelectElement).value);
      this.calculateReceivedAmount(discountValue);

    }
  }
  calculateReceivedAmount(discountValue: number) {
    const amount = this.selectedAmount || parseInt(this.customAmount, 10);
    if (!isNaN(amount)) {
      this.amountReceived= amount;
      this.paymentAmount = amount * (1 - discountValue);
    }
    this.dataEvent.emit({"phone": this.phone, "paymentAmount": this.paymentAmount, "amountReceived": this.amountReceived})
  }


  receivePhone($event: string) {
    this.phone = $event;
  }
}

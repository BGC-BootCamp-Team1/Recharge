import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumberLocationService } from './location-service/phone-number-location.service';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [FormsModule, CommonModule, PhoneNumberComponent],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css',
})
export class RechargeFormComponent implements OnInit {
  selectedDiscount = '';
  discountTag = '';
  discountOptions = [
    { value: '10% off', label: 'Mobile Store Recharge at 10% Off' },
    { value: '200-10', label: 'Get ¥10 off on purchases over ¥200' },
    { value: '50-10', label: 'Get ¥10 off on purchases over ¥50' }];

  @Output() stepChange = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit() {
    this. selectedDiscount = this.discountOptions[0].value;
    this. discountTag = this.discountOptions[0].label;
  }

  

  updateDiscount() {
    switch (this.selectedDiscount) {
      case '10% off':
        this.discountTag = 'Discount - Mobile Store Recharge at 10% Off';
        break;
      case '200-10':
        this.discountTag = 'Discount - Get ¥10 off on purchases over ¥200';
        break;
      case '50-10':
        this.discountTag = 'Discount - Get ¥10 off on purchases over ¥50';
        break;
      default:
        this.discountTag = 'Discount - Mobile Store Recharge at 10% Off';
        break;
    }
  }


  selectedAmount: number | null = null; // 默认选中100
  typedAmount: number =0 ; // 用户输入的金额
  isTypedAmountValid = false; // 用户输入的金额是否合法
  paymentAmount: number = 0; // 实际支付的金额
  amountReceived: number = 0; // 实际收到的金额
  selectAmount(amount: number) {
    // if(this.typedAmount === null){
    this.selectedAmount = amount;
    this.isTypedAmountValid = false;
    this.amountReceived = amount;
    this.paymentAmount = this.calculatePaymentAmount(amount);
  // }
}

  // isDisabled() {
  //   return this.typedAmount !== '';
  // }
  
  // clearCustomAmount() {
  //   this.typedAmount = '';
    
  // }

  calculatePaymentAmount(amount: number){
    let finalAmount = amount;

    switch (this.selectedDiscount) {
      case '10% off':
        finalAmount = amount * 0.9;
        break;
      case '200-10':
        if (amount >= 200) {
          finalAmount = amount - 10;
        }
        break;
      case '50-10':
        if (amount >= 50) {
          finalAmount = amount - 10;
        }
        break;
      default:
        // 默认情况下不应用任何折扣
        break;
    }
  
    return finalAmount;
  }

  onTypedAmountChange() {

    this.isTypedAmountValid = true;
    if(this.typedAmount >=10 || this.typedAmount<3000){
      this.selectedAmount = this.typedAmount;
      this.paymentAmount = this.typedAmount;
    }

  }

  navigateToComfirmPage(event: Event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    // this.validatePhoneNumber();
    // if (this.isPhoneNumberValid)
    this.stepChange.emit(2);
    this.router.navigate(['/confirmpage'], { state: { currentStep: 2 } });
    // }
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumberLocationService } from './phone-number-location.service';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css',
})
export class RechargeFormComponent {
  @Output() stepChange = new EventEmitter<number>();
  // locationService: PhoneNumberLocationService;
  constructor(
    private router: Router,
    private locationService: PhoneNumberLocationService
  ) {}

  phoneNumber: string = '';
  isPhoneNumberValid: boolean = true; // 定义一个属性来存储用户输入的值
  location: string = '';

  validatePhoneNumber(): void {
    this.isPhoneNumberValid = /^\d{11}$/.test(this.phoneNumber);
  }

  onInput(): void {
    if (this.phoneNumber.length !== 11) {
      this.location = '';
      this.isPhoneNumberValid = true;
      return;
    } else {
      this.validatePhoneNumber();
      if (this.isPhoneNumberValid) {
        this.location = this.locationService.getLocation(this.phoneNumber);
      }
    }
  }

  navigateToComfirmPage(event: Event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    this.validatePhoneNumber();
    if (this.isPhoneNumberValid) {
      this.stepChange.emit(2);
      this.router.navigate(['/confirmpage'], { state: { currentStep: 2 } });
    }
  }
}

import { Component } from '@angular/core';
import { PhoneNumberLocationService } from '../location-service/phone-number-location.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.css'
})
export class PhoneNumberComponent {
  phoneNumber: string = '';
  isPhoneNumberValid: boolean = true; // 定义一个属性来存储用户输入的值
  location: string = '';
  constructor(private locationService: PhoneNumberLocationService) { }

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

}

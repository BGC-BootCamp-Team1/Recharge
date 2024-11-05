import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-phone-number',
  standalone: true,
  imports: [
    FormsModule,CommonModule
  ],
  templateUrl: './phone-number.component.html',
  styleUrl: './phone-number.component.css'
})
export class PhoneNumberComponent {
  phoneNumber: string = '';
  phoneNumberInfo: string | null = null;

  checkPhoneNumber() {
    const phoneRegex = /^1[3-9]\d{9}$/; // 简单的手机号码正则表达式
    if (phoneRegex.test(this.phoneNumber)) {
      this.phoneNumberInfo = this.getPhoneNumberInfo(this.phoneNumber);
    } else {
      this.phoneNumberInfo = '请输入有效的手机号码';
    }
  }

  getPhoneNumberInfo(phoneNumber: string): string {
    // 这里可以添加更多的号码归属地判断逻辑
    const prefix = phoneNumber.substring(0, 3);
    switch (prefix) {
      case '130':
      case '131':
      case '132':
        return '中国联通号码';
      case '133':
      case '153':
        return '中国电信号码';
      case '134':
      case '135':
      case '136':
        return '中国移动号码';
      default:
        return '未知运营商';
    }
  }

}

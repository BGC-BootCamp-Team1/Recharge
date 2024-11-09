import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css',
})
export class RechargeFormComponent {
  @Output() stepChange = new EventEmitter<number>();
  constructor(private router: Router) {}

  phoneNumber: string = '';
  isPhoneNumberValid: boolean = true;// 定义一个属性来存储用户输入的值

  validatePhoneNumber():void {
    this.isPhoneNumberValid = /^\d{11}$/.test(this.phoneNumber);
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

import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css',
})
export class RechargeFormComponent {
  @Output() stepChange = new EventEmitter<number>();
  constructor(private router: Router) {}

  
  phoneNumber: string = ''; // 定义一个属性来存储用户输入的值

  validatePhoneNumber(): boolean {
    const errorMessage = document.getElementById('error-message');

    if (this.phoneNumber.length !== 3) {
      if (errorMessage) {
        errorMessage.style.display = 'inline';
      }
      return false;
    } else {
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      return true;
    }
  }

  navigateToComfirmPage(event: Event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    if (this.validatePhoneNumber()) {
      this.stepChange.emit(2);
      this.router.navigate(['/submit-btn'], { state: { currentStep: 2 } });
    }
  }
}

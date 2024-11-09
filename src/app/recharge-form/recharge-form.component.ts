import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PhoneNumberLocationService } from './phone-number-location.service';
import { PhoneNumberComponent } from "./phone-number/phone-number.component";

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [FormsModule, CommonModule, PhoneNumberComponent],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css',
})
export class RechargeFormComponent {
  @Output() stepChange = new EventEmitter<number>();
  // locationService: PhoneNumberLocationService;
  constructor(
    private router: Router,
    
  ) {}

  
  navigateToComfirmPage(event: Event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    // this.validatePhoneNumber();
    // if (this.isPhoneNumberValid) 
      this.stepChange.emit(2);
      this.router.navigate(['/confirmpage'], { state: { currentStep: 2 } });
    // }
  }
}

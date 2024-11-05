import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  @Output() stepChange = new EventEmitter<number>();
  constructor(private router:Router) { }

  navigateToComfirmPage() {
    this.stepChange.emit(2);
    this.router.navigate(['/submit-btn'],{state:{currentStep:2}});
  }
}

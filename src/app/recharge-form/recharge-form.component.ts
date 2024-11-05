import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recharge-form',
  standalone: true,
  imports: [],
  templateUrl: './recharge-form.component.html',
  styleUrl: './recharge-form.component.css'
})
export class RechargeFormComponent {
  constructor(private router:Router) { }

  navigateToComfirmPage() {
    console.log('navigate to comfirm page');
    this.router.navigate(['/submit-btn']);
  }
}

import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {RechargeFormComponent} from "../recharge-form/recharge-form.component";
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-recharge-input',
  standalone: true,
    imports: [
        MenuComponent,
        RechargeFormComponent,
        RouterOutlet
    ],
  templateUrl: './recharge-input.component.html',
  styleUrl: './recharge-input.component.css'
})
export class RechargeInputComponent {
  phone:string='';
  paymentAmount:number=0;
  amountReceived:number=0;

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/confirm'],{ queryParams: { phone: this.phone, paymentAmount: this.paymentAmount, amountReceived: this.amountReceived } });
  }

  receiveData($event: { phone: string; paymentAmount: number; amountReceived: number }) {
    this.phone=$event.phone;
    this.paymentAmount=$event.paymentAmount;
    this.amountReceived=$event.amountReceived;
  }
}

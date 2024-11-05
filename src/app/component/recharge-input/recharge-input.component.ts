import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {RechargeFormComponent} from "../recharge-form/recharge-form.component";
import {RouterOutlet} from "@angular/router";

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

}

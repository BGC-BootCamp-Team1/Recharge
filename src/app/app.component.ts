import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./component/menu/menu.component";
import {RechargeFormComponent} from "./component/recharge-form/recharge-form.component";
import {RechargeInputComponent} from "./component/recharge-input/recharge-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, RechargeFormComponent, RechargeInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
}

import { Component } from '@angular/core';
import { RechargeFormComponent } from '../recharge-form/recharge-form.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RechargeFormComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { }
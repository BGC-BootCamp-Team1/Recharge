import { Component } from '@angular/core';
import { RechargeFormComponent } from '../recharge-form/recharge-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RechargeFormComponent, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { }
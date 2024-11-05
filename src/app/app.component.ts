import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { MenuComponent } from './menu/menu.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,RechargeFormComponent,SubmitBtnComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recharge';
  
}

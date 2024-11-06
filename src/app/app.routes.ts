import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';

export const routes: Routes = [
  { path: '', component: RechargeFormComponent },
  { path: 'submit-btn', component: SubmitBtnComponent },
];

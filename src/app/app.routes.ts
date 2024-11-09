import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';

export const routes: Routes = [
  { path: '', component: RechargeFormComponent },
  { path: 'confirmpage', component: ConfirmpageComponent },
];

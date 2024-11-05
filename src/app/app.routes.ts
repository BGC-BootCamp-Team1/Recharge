import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { ConfirmComponent } from './confirm/confirm.component';

export const routes: Routes = [
    { path: 'recharge', component: RechargeFormComponent },
    { path: 'confirm', component: ConfirmComponent },
    { path: '**', redirectTo: 'recharge' }
  ];
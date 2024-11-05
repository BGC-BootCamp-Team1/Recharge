import { Routes } from '@angular/router';
import {RechargeInputComponent} from "./component/recharge-input/recharge-input.component";
import {ConfirmComponent} from "./component/confirm/confirm.component";

export const routes: Routes = [
  { path: '', component: RechargeInputComponent },
  { path: 'confirm', component: ConfirmComponent },

];

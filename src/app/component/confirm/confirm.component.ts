import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {RechargeFormComponent} from "../recharge-form/recharge-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [
    MenuComponent,
    RechargeFormComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit{
  phone:string='';
  paymentAmount:number=0;
  amountReceived:number=0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.phone = params['phone'];
      this.paymentAmount = params['paymentAmount'];
      this.amountReceived = params['amountReceived'];

    });

  }

}

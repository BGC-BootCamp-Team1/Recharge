import { Component } from '@angular/core';
import { RechargeFormComponent } from '../recharge-form/recharge-form.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RechargeFormComponent, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentRoute: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isStepActive(step: number): boolean {
    if (step === 1) {
      return this.currentRoute.includes('recharge');
    } else if (step === 2) {
      return this.currentRoute.includes('confirm');
    } else if (step === 3) {
      return this.currentRoute.includes('complete'); // 如果你有第三步
    }
    return false;
  }
}


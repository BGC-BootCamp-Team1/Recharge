import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { MenuComponent } from './menu/menu.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { filter } from 'rxjs/operators';

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
  currentStep:number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state?.['currentStep']) {
          this.currentStep = navigation.extras.state['currentStep'];
        }
      }
    });
  }

  updateStep(step: number) {
    this.currentStep = step;
  }

  
}

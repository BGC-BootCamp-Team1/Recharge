import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'steps',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  //  currentStep: number = 1;

  //  constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.subscribe(() => {
  //     const navigation = this.router.getCurrentNavigation();
  //     if (navigation?.extras.state?.['currentStep']) {
  //       this.currentStep = navigation.extras.state['currentStep'];
  //     }
  //   });
  // }
  @Input() currentStep: number =1;
}

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
  
  @Input() currentStep: number =1;
  
}



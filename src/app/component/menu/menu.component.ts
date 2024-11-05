import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  activeStep: number = 1;

  constructor(private router: Router) {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.updateActiveStep(val.url);
      }
    });
  }

  ngOnInit() {
    // 直接调用 updateActiveStep 并传递当前 URL
    this.updateActiveStep(this.router.url);

  }


  updateActiveStep(url: string) {
    const cleanUrl = url.split('?')[0]; // 去掉查询参数
    console.log('Clean URL:', cleanUrl); // 添加日志
    if (cleanUrl === '/') {
      this.activeStep = 1;
    } else if (cleanUrl.startsWith('/confirm')) {
      this.activeStep = 2;
    } else {
      this.activeStep = 3;
    }
  }
}

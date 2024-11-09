import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhoneNumberLocationService {
  constructor() {}
  getLocation(phoneNumber: string): string {
    if (phoneNumber.startsWith('1')) {
      return 'Beijing';
    } 
    else return 'Shanghai';
  }
}

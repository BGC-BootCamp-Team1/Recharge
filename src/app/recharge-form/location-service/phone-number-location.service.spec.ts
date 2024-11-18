import { TestBed } from '@angular/core/testing';
import { PhoneNumberLocationService } from './phone-number-location.service';



describe('PhoneNumberLocationService', () => {
  let service: PhoneNumberLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneNumberLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

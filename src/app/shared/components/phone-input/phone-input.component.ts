import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent {
  countryCodes = [
    { name: 'السعودية', code: '+1', id: 'SA' },
    { name: 'مصر', code: '+20', id: 'EG' },
  ];
  number: string;
  country = this.countryCodes[0];
  @Input() phoneNumber: string;

  onChangeCountry(country: any) {
    this.country = country;
    this.phoneNumber = `${country.code} ${this.number}`;
  }

  onChangeNumber(val: any) {
    this.number = val;
    this.phoneNumber = `${this.country.code} ${this.number}`;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent implements OnChanges {
  countryCodes = [
    { name: 'السعودية', code: '+1', id: 'SA' },
    { name: 'مصر', code: '+20', id: 'EG' },
  ];
  number: any;
  country = this.countryCodes[0];
  @Input() phoneNumber: string;
  @Output() onPhoneChange = new EventEmitter<string>();

  onChangeCountry(country: any) {
    this.country = country;
    this.phoneNumber = `${country.code} ${this.number}`;
    this.onPhoneChange.emit(this.phoneNumber);
  }

  onChangeNumber(val: any) {
    this.number = val;
    this.phoneNumber = `${this.country.code} ${this.number}`;
    this.onPhoneChange.emit(this.phoneNumber);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.phoneNumber) this.number = null;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export interface IUser {
  id: string;
  name?: string;
  phoneNumber?: string;
  avatar?: string;
  isSelected?: boolean;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user: IUser = {
    id: '',
    name: '',
    phoneNumber: '',
    avatar: '',
    isSelected: false,
  };
  @Output() onChange = new EventEmitter<IUser>();
}

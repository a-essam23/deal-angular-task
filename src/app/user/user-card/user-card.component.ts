import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User, UserMessageService } from '../user-message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  loading$ = new Observable();
  @Input() user: User = {
    _id: '',
    name: '',
    phone: '',
    avatar: '',
    isSelected: false,
  };
  constructor(private userMessageSerivce: UserMessageService) {
    this.loading$ = this.userMessageSerivce.loading$;
  }
  onChange(user: User) {
    this.userMessageSerivce.changeSelectUser(user);
  }
}

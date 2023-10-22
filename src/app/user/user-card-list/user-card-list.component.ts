import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserMessageService } from '../user-message.service';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardListComponent {
  allSelected$: Observable<boolean>;
  page: number = 1;
  users$ = new Observable<User[]>();
  config$: Observable<any>;
  constructor(private userMessageSerivce: UserMessageService) {
    this.allSelected$ = this.userMessageSerivce.allSelected$;
    this.users$ = this.userMessageSerivce.users$;
    this.config$ = this.userMessageSerivce.paginationData$;
  }

  selectAll(event: any) {
    this.userMessageSerivce.selectAllUsers(event.target.checked);
  }
}

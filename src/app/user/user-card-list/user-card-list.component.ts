import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserMessageService } from '../user-message.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardListComponent {
  allSelected: boolean;
  page: number = 1;
  users$ = new Observable<User[]>();
  config: Observable<PaginationInstance>;
  constructor(private userMessageSerivce: UserMessageService) {
    //TODO Fix all selected
    this.allSelected = userMessageSerivce.allSelected;
    this.users$ = this.userMessageSerivce.users$;
    this.config = this.userMessageSerivce.paginationData$;
  }

  selectAll(val: boolean) {
    this.userMessageSerivce.selectAllUsers(val);
  }
}

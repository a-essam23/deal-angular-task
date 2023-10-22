import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { UserMessageService } from '../user-message.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-user-card-list-container',
  templateUrl: './user-card-list-container.component.html',
  styleUrls: ['./user-card-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardListContainerComponent implements OnInit {
  paginationData$ = this.userMessageSerivce.paginationData$;
  content$ = this.userMessageSerivce.messageContent$;
  setContent = this.userMessageSerivce.setMessageContent;

  constructor(private userMessageSerivce: UserMessageService) {}
  selectAll(val: boolean) {
    this.userMessageSerivce.selectAllUsers(val);
  }

  ngOnInit(): void {}
  changePage(event: PageChangedEvent) {
    this.userMessageSerivce.changePage(event.page);
  }
}

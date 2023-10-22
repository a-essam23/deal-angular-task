import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserMessageService } from '../user-message.service';

@Component({
  selector: 'app-user-card-list-container',
  templateUrl: './user-card-list-container.component.html',
  styleUrls: ['./user-card-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardListContainerComponent implements OnInit {
  content = '';
  constructor(private userMessageSerivce: UserMessageService) {}
  selectAll(val: boolean) {
    this.userMessageSerivce.selectAllUsers(val);
  }

  ngOnInit(): void {}
  changePage(page: number) {
    console.log('changing page to', page);
    this.userMessageSerivce.changePage(page);
  }
}

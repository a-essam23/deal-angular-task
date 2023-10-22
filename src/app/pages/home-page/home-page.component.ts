import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserMessageService } from 'src/app/user/user-message.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  modalVisible = new BehaviorSubject(true);
  modalVisible$ = this.modalVisible.asObservable();
  send = this.userMessageService.sendData;

  constructor(private userMessageService: UserMessageService) {}

  showModal() {
    this.modalVisible.next(true);
  }
  hideModal() {
    this.modalVisible.next(false);
  }
}

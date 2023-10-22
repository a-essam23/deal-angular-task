import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  modalVisible = new BehaviorSubject(true);
  modalVisible$ = this.modalVisible.asObservable();
  messageContent = '';
  messageFilters = '';
  send() {
    console.log('sent!');
  }

  showModal() {
    this.modalVisible.next(true);
  }
  hideModal() {
    this.modalVisible.next(false);
  }
}

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

  send() {
    console.log('sent!');
  }

  showModal() {
    this.modalVisible.next(true);
  }
}

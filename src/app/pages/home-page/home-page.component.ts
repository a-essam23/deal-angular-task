import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/components/user-card/user-card.component';
const mockData = Array(15)
  .fill(null)
  .map((val, index) => ({
    id: `user ${index}`,
    name: `مستخدم ${index + 1}`,
    phoneNumber: `${Math.floor(Math.random() * 1000000000)}`,
    avatar: '',
    isSelected: Math.random() > 0.49,
  }));

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  modalVisible = new BehaviorSubject(true);
  modalVisible$ = this.modalVisible.asObservable();
  users = new BehaviorSubject<IUser[]>(mockData);
  users$ = this.users.asObservable();

  send() {
    console.log('sent!');
  }

  showModal() {
    this.modalVisible.next(true);
  }

  onUserSelectChange(user: IUser) {
    this.users.next(
      this.users.value.map((val: IUser) => {
        if (val.id === user.id) {
          return { ...val, isSelected: !user.isSelected };
        }
        return val;
      })
    );
  }
}

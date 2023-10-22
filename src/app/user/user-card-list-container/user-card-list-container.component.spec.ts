import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardListContainerComponent } from './user-card-list-container.component';

describe('UserCardListContainerComponent', () => {
  let component: UserCardListContainerComponent;
  let fixture: ComponentFixture<UserCardListContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCardListContainerComponent]
    });
    fixture = TestBed.createComponent(UserCardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

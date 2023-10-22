import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import {
  BehaviorSubject,
  Subscription,
  catchError,
  delay,
  distinctUntilChanged,
  finalize,
  map,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

export interface User {
  _id: string;
  name?: string;
  phone?: string;
  avatar?: string;
  isSelected?: boolean;
}

interface getUsersToMessageResponse {
  data: User[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  total: number;
  totalPage: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserMessageService {
  allSelected = false;

  private paginationData = new BehaviorSubject<PaginationInstance>({
    currentPage: 1,
    itemsPerPage: 15,
    id: 'user-message-list',
  });
  paginationData$ = this.paginationData.asObservable();

  private loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  private users = new BehaviorSubject<User[]>(
    Array(15)
      .fill(null)
      .map((el, index) => ({ _id: `key ${index}`, isSelected: false }))
  );
  users$ = this.users.asObservable();

  private pageSubscription: Subscription;

  messageContent = '';
  selected: string[] = [];

  // needs to be handeled better
  private token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE2MzhhNjVkYWQxNTNjYTJmMjYwYTQiLCJyb2xlIjoiQURNSU4iLCJzdGF0dXMiOiJBQ1RJVkUiLCJwaG9uZSI6Iis5NjY1MDA4NDQ2NjYiLCJuYW1lIjoi2YXYrdmF2K8g2KfZhNiu2KfZhNiv2YoiLCJpYXQiOjE2ODM1NDk1MTh9.1bcVpARcGX8_WJJT-BXRqXn0jZTfxnH1oarASy9o-EM';

  constructor(private http: HttpClient) {
    // this.pageSubscription = this.paginationData
    //   .pipe(
    //     tap((data) =>
    //       console.log('requesting data for page ', data.currentPage)
    //     ),
    //     distinctUntilChanged(
    //       (prev, current) => prev.currentPage === current.currentPage
    //     ),
    //     switchMap((data) => this.getPage(data.currentPage))
    //   )
    //   .subscribe((res) => {
    //     this.users.next(res.data);
    //     this.paginationData.next({
    //       ...this.paginationData.value,
    //       currentPage: res.page,
    //       totalItems: res.total,
    //     });
    //   });
    this.users$.subscribe((users) => {
      this.checkIfAllAreSelected(users);
    });
  }

  getPage(page: number) {
    this.loading.next(true);
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      Authorization: this.token,
    });
    return this.http
      .get<getUsersToMessageResponse>(
        `https://api.dealapp.sa/staging/marketing-requests/agents/652ac0193d81d0ce97ad55fd?page=${page}&limit=15`,
        {
          headers,
        }
      )
      .pipe(
        tap((res) => console.log(res)),
        // add isSelected to data
        map((res) => ({
          ...res,
          data: res.data.map((user) => ({ ...user, isSelected: false })),
        })),
        finalize(() => {
          this.loading.next(false);
        }),
        catchError((error) => {
          console.error('An error occurred:', error);
          return [];
        })
      );
  }

  selectAllUsers(checked: boolean) {
    this.users.next(
      this.users.value.map((val) => ({ ...val, isSelected: checked }))
    );
  }

  changeSelectUser(user: User) {
    this.users.next(
      this.users.value.map((val) => {
        if (user._id === val._id) {
          return { ...val, isSelected: !val.isSelected };
        }
        return val;
      })
    );
    if (this.selected.includes(user._id)) {
      return this.selected.push(user._id);
    }
    return this.selected.filter((id) => user._id !== id);
  }

  changePage(newPage: number) {
    this.paginationData.next({
      ...this.paginationData.value,
      currentPage: newPage,
    });
  }

  private checkIfAllAreSelected(users: User[]) {
    const allUsersSelected =
      users.findIndex((user) => user.isSelected === false) === -1;
    if (allUsersSelected) {
      if (!this.allSelected) this.allSelected = true;
    } else {
      if (this.allSelected) this.allSelected = false;
    }
    console.log('allSelected', this.allSelected);
  }
}

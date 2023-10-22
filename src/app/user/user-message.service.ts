import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
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
  private paginationData = new BehaviorSubject<any>({
    currentPage: 1,
    itemsPerPage: 15,
    id: 'user-message-list',
    total: 20,
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

  allSelected$ = this.users$.pipe(
    map((users) => {
      const allUsersSelected =
        users.findIndex((user) => !user.isSelected) === -1;
      if (allUsersSelected) {
        return true;
      } else {
        return false;
      }
    }),
    startWith(false)
  );
  // needs to be handeled better
  private token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE2MzhhNjVkYWQxNTNjYTJmMjYwYTQiLCJyb2xlIjoiQURNSU4iLCJzdGF0dXMiOiJBQ1RJVkUiLCJwaG9uZSI6Iis5NjY1MDA4NDQ2NjYiLCJuYW1lIjoi2YXYrdmF2K8g2KfZhNiu2KfZhNiv2YoiLCJpYXQiOjE2ODM1NDk1MTh9.1bcVpARcGX8_WJJT-BXRqXn0jZTfxnH1oarASy9o-EM';

  constructor(private http: HttpClient) {
    this.paginationData
      .pipe(
        distinctUntilChanged(
          (prev, current) => prev.currentPage === current.currentPage
        ),
        switchMap((data) => this.getPage(data.currentPage))
      )
      .subscribe((res) => {
        this.users.next(res.data);
        // this.paginationData.next({
        //   ...this.paginationData.value,
        //   currentPage: res.page,
        //   totalItems: res.total,
        // });
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
    const newusers = this.users.value.map((val) => ({
      ...val,
      isSelected: checked,
    }));
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
  }

  changePage(newPage: number) {
    this.paginationData.next({
      ...this.paginationData.value,
      currentPage: newPage,
    });
  }
}

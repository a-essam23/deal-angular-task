import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { UserMessageService } from './user-message.service';
import { FormsModule } from '@angular/forms';
import { UserCardListContainerComponent } from './user-card-list-container/user-card-list-container.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    UserCardComponent,
    UserCardListComponent,
    UserCardListContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    NgxPaginationModule,
  ],
  exports: [
    UserCardComponent,
    UserCardListComponent,
    UserCardListContainerComponent,
  ],
  providers: [UserMessageService],
})
export class UserModule {}

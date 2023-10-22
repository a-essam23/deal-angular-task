import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTabComponent } from './filter-tab/filter-tab.component';
import { ModalComponent } from './modal/modal.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    ModalComponent,
    FilterTabComponent,
    SearchInputComponent,
    PhoneInputComponent,
    TextBoxComponent,
    PaginationComponent,
  ],
  exports: [
    ModalComponent,
    FilterTabComponent,
    SearchInputComponent,
    PhoneInputComponent,
    TextBoxComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class SharedComponentsModule {}

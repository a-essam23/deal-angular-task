import { ChangeDetectionStrategy, Component } from '@angular/core';

type QueryParam = any;

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTabComponent {
  filters: Record<string, QueryParam> = {};

  applyFilters() {
    console.log('filters', this.filters);
  }
  deleteFilter() {
    this.filters = {};
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() searchVal: string;
  @Output() searchValChange: EventEmitter<string> = new EventEmitter();
}

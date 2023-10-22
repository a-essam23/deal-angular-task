import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() id: string = '';
  @Input() maxSize: number = 10;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;
  constructor() {}
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() textBoxValue = '';
  @Output() textBoxValueChange = new EventEmitter<string>();
}

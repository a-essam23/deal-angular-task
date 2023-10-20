import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() confirmLabel: string = '';
  @Output() onConfirm = new EventEmitter();
  @Output() onExit = new EventEmitter();

  emitConfirm() {
    this.onConfirm.emit();
  }

  emitOnExit() {
    this.onExit.emit();
  }
}

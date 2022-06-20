import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-number-handler',
  template: `
  <button class="trivia-button" [ngClass]="color" (click)="handlerClicked.emit()">
    {{ label }}
  </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberHandlerComponent {
  @Input() color?: 'violet' | 'blue' = 'violet';
  @Input() label?: string = 'no text';
  @Output() handlerClicked: EventEmitter<void> = new EventEmitter();
}

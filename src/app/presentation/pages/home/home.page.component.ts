import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  DecreaseNumberAction,
  IncreaseNumberAction,
} from 'src/app/state-management/trivia/trivia.actions';

@Component({
  templateUrl: 'home.page.component.html',
  styleUrls: ['home.page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor(private readonly store: Store) {}
  increaseNumber(): void {
    this.store.dispatch(new IncreaseNumberAction());
  }
  decreaseNumber(): void {
    this.store.dispatch(new DecreaseNumberAction());
  }
}

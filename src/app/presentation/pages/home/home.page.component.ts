import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NumberTriviaEntity } from '../../../core/entity/number.trivia.entity';
import {
  DecreaseNumberAction,
  IncreaseNumberAction,
} from '../../../state-management/trivia/trivia.actions';
import { TriviaStateModelSelectors } from '../../../state-management/trivia/trivia.model.selectors';

@Component({
  templateUrl: 'home.page.component.html',
  styleUrls: ['home.page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  @Select(TriviaStateModelSelectors.CURRENT_NUMBER)
  currentNumber$: Observable<NumberTriviaEntity>;

  constructor(private readonly store: Store) {}
  increaseNumber(): void {
    this.store.dispatch(new IncreaseNumberAction());
  }
  decreaseNumber(): void {
    this.store.dispatch(new DecreaseNumberAction());
  }
}

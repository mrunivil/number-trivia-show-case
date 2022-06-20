import { Selector } from '@ngxs/store';
import { TriviaState } from './trivia.state';
import { ITriviaStateModel } from './trivia.state.model';

export abstract class TriviaStateModelSelectors {
  @Selector([TriviaState])
  static CURRENT_NUMBER({ currentNumber }: ITriviaStateModel): number {
    return currentNumber;
  }
}

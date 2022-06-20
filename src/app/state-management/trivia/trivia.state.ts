import { Injectable } from '@angular/core';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { State } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { DecreaseNumberAction, IncreaseNumberAction } from './trivia.actions';
import {
  DEFAULT_TRIVIA_STATE_MODEL,
  ITriviaStateModel,
} from './trivia.state.model';

@Injectable()
@State<ITriviaStateModel>({
  name: 'trivia',
  defaults: DEFAULT_TRIVIA_STATE_MODEL,
})
export class TriviaState {
  @Action(IncreaseNumberAction)
  increaseNumber({
    patchState,
    getState,
  }: StateContext<ITriviaStateModel>): void {
    patchState({
      currentNumber: getState().currentNumber + 1,
    });
  }

  @Action(DecreaseNumberAction)
  decreaseNumber({
    setState,
    getState,
  }: StateContext<ITriviaStateModel>): void {
    setState(
      patch<ITriviaStateModel>({
        currentNumber: getState().currentNumber - 1,
      })
    );
  }
}

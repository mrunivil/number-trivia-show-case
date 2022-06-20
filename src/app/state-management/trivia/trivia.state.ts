import { Injectable } from '@angular/core';
import { Action } from '@ngxs/store';
import { StateContext } from '@ngxs/store';
import { State } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { DecreaseNumberTriviaUseCase } from '../../features/trivia/use-cases/trivia.decrease.number.use.case';
import { IncreaseNumberTriviaUseCase } from '../../features/trivia/use-cases/trivia.increase.number.use.case';
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
  constructor(
    private readonly increaseNumberTriviaUseCase: IncreaseNumberTriviaUseCase,
    private readonly decreaseNumberTriviaUseCase: DecreaseNumberTriviaUseCase
  ) {}

  @Action(IncreaseNumberAction)
  async increaseNumber({
    patchState,
    getState,
  }: StateContext<ITriviaStateModel>): Promise<void> {
    const ret = await this.increaseNumberTriviaUseCase.execute(
      getState().currentNumber
    );
    if (ret instanceof Error) {
      console.error('number could not be increased');
    } else {
      patchState({
        currentNumber: ret,
      });
    }
    return;
  }

  @Action(DecreaseNumberAction)
  async decreaseNumber({
    patchState,
    getState,
  }: StateContext<ITriviaStateModel>): Promise<void> {
    const ret = await this.decreaseNumberTriviaUseCase.execute(
      getState().currentNumber
    );
    if (ret instanceof Error) {
      console.error('number could not be increased');
    } else {
      patchState({
        currentNumber: ret,
      });
    }
    return;
  }
}

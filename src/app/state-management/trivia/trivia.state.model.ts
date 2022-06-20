import { NumberTriviaEntity } from '../../core/entity/number.trivia.entity';

export interface ITriviaStateModel {
  readonly currentNumber: NumberTriviaEntity;
}

export const DEFAULT_TRIVIA_STATE_MODEL: ITriviaStateModel = {
  currentNumber: { currentNumber: 0 },
};

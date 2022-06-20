export interface ITriviaStateModel {
  readonly currentNumber: number;
}

export const DEFAULT_TRIVIA_STATE_MODEL: ITriviaStateModel = {
  currentNumber: 0,
};

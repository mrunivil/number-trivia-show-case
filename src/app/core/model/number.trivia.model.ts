export class NumberTriviaModel {
  readonly currentNumber?: number;
  constructor(obj: NumberTriviaModel) {
    Object.assign(this, obj);
  }
}

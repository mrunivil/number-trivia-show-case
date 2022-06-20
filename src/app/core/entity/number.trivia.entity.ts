import { NumberTriviaModel } from '../model/number.trivia.model';

export class NumberTriviaEntity {
  readonly currentNumber?: number;
  constructor(obj: NumberTriviaEntity) {
    Object.assign(this, obj);
  }
  static fromModel(model: NumberTriviaModel): NumberTriviaEntity {
    return new NumberTriviaEntity({
      currentNumber: model.currentNumber,
    });
  }
  static toModel(entity: NumberTriviaEntity): NumberTriviaModel {
    return new NumberTriviaModel({
      currentNumber: entity.currentNumber,
    });
  }
}

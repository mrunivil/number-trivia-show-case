import { Injectable } from '@angular/core';
import { NumberTriviaModel } from '../../../core/model/number.trivia.model';
import { AbstractTriviaDataSource } from './abstract.trivia.data.source';

@Injectable()
export class DefaultNumberTriviaDataSource extends AbstractTriviaDataSource {
  async decreaseNumber(params: NumberTriviaModel): Promise<NumberTriviaModel> {
    return new NumberTriviaModel({
      currentNumber: params.currentNumber - 1,
    });
  }
  async increaseNumber(params: NumberTriviaModel): Promise<NumberTriviaModel> {
    return new NumberTriviaModel({
      currentNumber: params.currentNumber + 1,
    });
  }
}

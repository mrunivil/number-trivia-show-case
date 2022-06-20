import { Injectable } from '@angular/core';
import { IDataSource } from '../../../core/feature/data-source/data.source';
import { NumberTriviaModel } from '../../../core/model/number.trivia.model';

@Injectable()
export abstract class AbstractTriviaDataSource implements IDataSource {
  abstract increaseNumber(
    params: NumberTriviaModel
  ): Promise<NumberTriviaModel>;
  abstract decreaseNumber(
    params: NumberTriviaModel
  ): Promise<NumberTriviaModel>;
}

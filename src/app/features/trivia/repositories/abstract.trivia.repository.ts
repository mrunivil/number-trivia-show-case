import { Injectable } from '@angular/core';
import { NumberTriviaEntity } from '../../../core/entity/number.trivia.entity';
import { IRepository } from '../../../core/feature/repository/repository';

@Injectable()
export abstract class AbstractTriviaRepository implements IRepository {
  abstract increaseNumber(
    params?: NumberTriviaEntity
  ): Promise<NumberTriviaEntity | Error>;
  abstract decreaseNumber(
    params?: NumberTriviaEntity
  ): Promise<NumberTriviaEntity | Error>;
}

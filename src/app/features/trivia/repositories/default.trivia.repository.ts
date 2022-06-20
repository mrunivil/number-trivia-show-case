import { Injectable } from '@angular/core';
import { NumberTriviaEntity } from '../../../core/entity/number.trivia.entity';
import { AbstractTriviaDataSource } from '../data-sources/abstract.trivia.data.source';
import { AbstractTriviaRepository } from './abstract.trivia.repository';

@Injectable()
export class DefaultNumberTriviaRepository extends AbstractTriviaRepository {
  constructor(private readonly dataSource: AbstractTriviaDataSource) {
    super();
  }
  async decreaseNumber(
    params?: NumberTriviaEntity
  ): Promise<NumberTriviaEntity | Error> {
    if (!params) return new Error('missing params');
    try {
      const ret = await this.dataSource.decreaseNumber(
        NumberTriviaEntity.toModel(params)
      );
      return NumberTriviaEntity.fromModel(ret);
    } catch (e) {
      return e;
    }
  }

  async increaseNumber(
    params?: NumberTriviaEntity
  ): Promise<NumberTriviaEntity | Error> {
    if (!params) return new Error('missing params');
    try {
      const ret = await this.dataSource.increaseNumber(
        NumberTriviaEntity.toModel(params)
      );
      return NumberTriviaEntity.fromModel(ret);
    } catch (e) {
      return e;
    }
  }
}

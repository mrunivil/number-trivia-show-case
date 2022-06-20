import { Injectable } from '@angular/core';
import { NumberTriviaEntity } from '../../../core/entity/number.trivia.entity';
import { IUseCase } from '../../../core/feature/use-case/use.case';
import { NumberTriviaModel } from '../../../core/model/number.trivia.model';
import { AbstractTriviaRepository } from '../repositories/abstract.trivia.repository';

@Injectable()
export class IncreaseNumberTriviaUseCase
  implements IUseCase<NumberTriviaEntity, NumberTriviaEntity>
{
  constructor(private readonly repository: AbstractTriviaRepository) {}

  async execute(
    params?: NumberTriviaEntity
  ): Promise<NumberTriviaEntity | Error> {
    return this.repository.increaseNumber(params);
  }
}

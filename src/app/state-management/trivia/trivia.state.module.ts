import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TriviaFeatureModule } from '../../features/trivia/trivia.feature.module';
import { TriviaState } from './trivia.state';

@NgModule({
  imports: [TriviaFeatureModule, NgxsModule.forFeature([TriviaState])],
})
export class TriviaStateModule {}

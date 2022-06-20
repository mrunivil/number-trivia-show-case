import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TriviaState } from './trivia.state';

@NgModule({
  imports: [NgxsModule.forFeature([TriviaState])],
})
export class TriviaStateModule {}

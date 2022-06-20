import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.page.component';

import { NumberHandlerComponentModule } from './components/controls/number-handler/number.handler.component.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
    // custom components
    NumberHandlerComponentModule,
  ],
})
export class HomePageModule {}

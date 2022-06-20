import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberHandlerComponent } from './number.handler.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NumberHandlerComponent],
  exports: [NumberHandlerComponent],
})
export class NumberHandlerComponentModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BageModule } from '../bage/bage.module';
import { ButtonModule } from '../button/button.module';
import { RatingModule } from '../rating/rating.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BageModule, ButtonModule, RatingModule],
})
export class CardProductModule {}

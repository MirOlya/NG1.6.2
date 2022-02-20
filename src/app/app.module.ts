import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardProductModule } from './card-product/card-product.module';
import { DropDownListModule } from './drop-down-list/drop-down-list.module';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';

import { AppComponent } from './app.component';
import { CardProductComponent } from './card-product/card-product.component';
import { ButtonModule } from './button/button.module';
import { BageModule } from './bage/bage.module';
import { RatingModule } from './rating/rating.module';

// import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
// import { IconTooltipComponent } from './icon-tooltip/icon-tooltip.component';

@NgModule({
  declarations: [AppComponent, CardProductComponent],
  imports: [
    BrowserModule,
    CardProductModule,
    DropDownListModule,
    IconTooltipModule,
    ButtonModule,
    BageModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

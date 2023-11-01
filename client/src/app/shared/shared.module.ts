import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './basket-summary/basket-summary.component';
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { PagerComponent } from './pager/pager.component';
import { PagingHeaderComponent } from './paging-header/paging-header.component';



@NgModule({
  declarations: [
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
    OrderTotalsComponent,
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

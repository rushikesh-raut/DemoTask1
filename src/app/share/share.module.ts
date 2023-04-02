import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillComponent } from './fill/fill.component';
import { ConditionComponent } from './condition/condition.component';



@NgModule({
  declarations: [
    FillComponent,
    ConditionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from "./ElementsHome/ElementsHome.component";


@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [ElementsHomeComponent]
})
export class ElementsModule { }

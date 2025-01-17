import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from "./ElementsHome/ElementsHome.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { TimesDirective } from "./times.directive";
import { SharedModule } from "../shared/shared.module";
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }

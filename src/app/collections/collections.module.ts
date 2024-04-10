import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsHomeComponent } from './collections-home/CollectionsHome.component';
import { CollectionsRoutingModule } from './collections-routing.module';


@NgModule({
  declarations: [CollectionsHomeComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: []
})
export class CollectionsModule { }

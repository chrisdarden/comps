import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsHomeComponent } from './collections-home/CollectionsHome.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { RouterModule } from '@angular/router';
// ...

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    RouterModule // Add RouterModule here
  ],
  exports: []
})
export class CollectionsModule { }

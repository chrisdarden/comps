import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/CollectionsHome.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';


const routes: Routes = [
  { path: '', component: CollectionsHomeComponent,

  // Add children routes here
  children: [
    { path: "", component: BiographyComponent },
    { path: "companies", component: CompaniesComponent },
    { path: "partners", component: PartnersComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }

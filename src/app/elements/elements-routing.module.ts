import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsHomeComponent } from './ElementsHome/ElementsHome.component';

const routes: Routes = [
 { path: '', component: ElementsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }

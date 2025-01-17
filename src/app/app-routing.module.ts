import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

const routes: Routes = [
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  { path: 'views', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)},
  { path: 'modules', loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule)},

  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

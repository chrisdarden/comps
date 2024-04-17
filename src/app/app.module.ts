import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ElementsModule } from "./elements/elements.module"; -- implimenting lazy loading
// import { CollectionsModule } from "./collections/collections.module"; -- implimenting lazy loading
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';

const routes = [
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule) },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // ElementsModule, -- implimenting lazy loading
    // CollectionsModule, -- implimenting lazy loading
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

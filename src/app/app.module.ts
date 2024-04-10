import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ElementsModule } from "./elements/elements.module"; -- implimenting lazy loading
// import { CollectionsModule } from "./collections/collections.module"; -- implimenting lazy loading
import { HomeComponent } from './Home/Home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    // ElementsModule, -- implimenting lazy loading
    // CollectionsModule, -- implimenting lazy loading
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

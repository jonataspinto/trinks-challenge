import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './containers/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsComponent } from './shared/components/artists/artists.component';
import { SearchComponent } from './containers/search/search.component';
import { CardsComponent } from './shared/components/cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    SearchComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

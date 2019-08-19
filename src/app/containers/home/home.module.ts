import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ],
  providers:[HomeComponent]
})
export class HomeModule { }

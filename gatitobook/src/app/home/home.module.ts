import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// toda vez que criar um componente novo é necessário declarar ele no module

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent //expondo o home e importando no app module posso chamar no appComponent
  ],
})
export class HomeModule { }

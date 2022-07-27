import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HomeModule //expondo o home no home.module e importando no app module posso chamar no appComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HomeModule //expondo o home no home.module e importando no app module posso chamar no appComponent
    HttpClientModule,
    CabecalhoModule, // preciso importar ele aqui para aparecer em todas as paginas, em todos os componentes
    RodapeModule, // preciso importar ele aqui para aparecer em todas as paginas, em todos os componentes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

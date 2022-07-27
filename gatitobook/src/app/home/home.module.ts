import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
// toda vez que criar um componente novo é necessário declarar ele no module

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule, // para informar ao angular que usari o formulário tipo template
    MensagemModule ,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent //expondo o home e importando no app module posso chamar no appComponent
  ],
})
export class HomeModule { }

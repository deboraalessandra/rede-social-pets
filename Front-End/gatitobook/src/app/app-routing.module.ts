import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [ //array de rotas
  {
    path:'', //se acessar sem nenhuma rota irá acessar a home
    pathMatch:'full', //para tirar espaços em branco da url
    redirectTo:'home'
  },
  {
    path: 'home', //assim que o usuário acessar home irá carregar essa rota
    loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule),
    //then vai retonar uma promisse que é o M
    canLoad: [LoginGuard],
  },
  {
    path: 'animais',
    loadChildren:()=>
    import('./animais/animais.module').then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

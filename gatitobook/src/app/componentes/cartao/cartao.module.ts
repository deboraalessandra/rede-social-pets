import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoComponent } from './cartao.component';



@NgModule({
  declarations: [
    CartaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ //criei o exports pois é uma propriedade que será utlizada em outros mod
    CartaoComponent
  ]

})
export class CartaoModule { }

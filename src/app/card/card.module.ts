import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FiltroPorTitulo } from './card.pipes';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,  
  ],
  declarations: [ CardComponent, FiltroPorTitulo],
  exports: [ CardComponent, FiltroPorTitulo ]
})
export class CardModule { }

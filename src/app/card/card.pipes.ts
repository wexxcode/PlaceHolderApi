import { Pipe, PipeTransform } from '@angular/core';
import { CardComponent } from './card.component';

@Pipe({
    name:'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform {
    transform(meuArrayFinal: CardComponent[], digitado: string) {
        digitado = digitado.toLowerCase();
        return meuArrayFinal.filter( dado => dado.dado.title.toLowerCase().includes(digitado) );
    }
}
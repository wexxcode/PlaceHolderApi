import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusca'
})


export class BuscaPipe implements PipeTransform {
  
  transform(meuArrayFinal, digitado: string ) {
    digitado = digitado.toLowerCase();
    console.log(digitado);
    return meuArrayFinal.filter( dado => dado.dado.titulo.toLowerCase().includes(digitado));  
    
}

}

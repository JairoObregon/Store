import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resul= [];
      for( let producto of value){
        if(producto.nombreProducto.indexOf(arg)> -1) {
          resul.push(producto)
          console.log(producto)
        }
      }
    return resul;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.model'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriaService {

  
  constructor( private httpcliente: HttpClient,
  ) {
   
    
   }
  
  

  obtenerCategorias(){
    return this.httpcliente.get('http://127.0.0.1:8000/categoria/')
  }
  mandarProducto(producto: Product)  : Observable<any>{

    return this.httpcliente.post('http://127.0.0.1:8000/producto/',producto );
  }
}

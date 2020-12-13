import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {categoria} from './categoria.model'; //para recibir
import {category} from './../new-categoria/categoria.model';  //para enviar
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {
  listaCategoria : categoria[];
  httpOptions : any

  constructor(private htpp:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }
  
  getListCategoria(){
    return this.htpp.get('http://127.0.0.1:8000/categoria/')
  }
  getCategoria(id){
    return this.htpp.get('http://127.0.0.1:8000/categoria/'+id)
  }
  deleteCategoria(id:number){
    return this.htpp.delete('http://127.0.0.1:8000/categoria/'+id,this.httpOptions)
  }
  putCategoria(id:number,obj:categoria){
   return this.htpp.put('http://127.0.0.1:8000/categoria/'+id+'/',obj,this.httpOptions)
  }
  createCategoria(cate : category){
    return this.htpp.post('http://127.0.0.1:8000/categoria/',cate,this.httpOptions)
  }
}

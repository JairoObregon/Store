import { Component, OnInit } from '@angular/core';
import {CategoriaServiceService} from './../lista-categoria/categoria-service.service'
import {category} from './categoria.model'

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrls: ['./new-categoria.component.css']
})
export class NewCategoriaComponent implements OnInit {
  nombre: string

  constructor( private servicio: CategoriaServiceService) { }

  ngOnInit(): void {

  }
  agregar(){
    let a =new category(this.nombre)
    console.log(a)
    this.servicio.createCategoria(a).subscribe(
      (data)=>{
        console.log(data)
      },
      error=> {
        console.log(error)
      }
    )
    


  }

}

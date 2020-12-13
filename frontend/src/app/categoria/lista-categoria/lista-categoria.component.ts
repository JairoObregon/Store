import { Component, OnInit } from '@angular/core';
import {categoria} from './categoria.model'
import {CategoriaServiceService} from './categoria-service.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  ListaCategoria: categoria[];

  constructor(public servicio:CategoriaServiceService,
    private route: Router) {}

  ngOnInit(): void {
    this.leer()
  }

  leer(){
    this.servicio.getListCategoria().subscribe(
      (lista: categoria[])=>{
        this.ListaCategoria=lista
      },
      (error) => {
        console.log(error)
      }
    )

  }

  eliminar(id: any){
    console.log(id)
    this.servicio.deleteCategoria(id).subscribe(
      (data) =>{
        this.leer()
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    )

  }
  editar(id:number){
    this.route.navigate(['editor/listacategorias/'+id])

  }
  redirigir(){
    console.log("listo para amdnar")
    this.route.navigate(['editor/listacategorias/nuevacategoria'])
  }

}

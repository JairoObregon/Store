import { Component, OnInit } from '@angular/core';
import {CategoriaServiceService} from '../lista-categoria/categoria-service.service'
import {categoria} from '../lista-categoria/categoria.model'
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-categoriaform',
  templateUrl: './categoriaform.component.html',
  styleUrls: ['./categoriaform.component.css']
})
export class CategoriaformComponent implements OnInit {

  public objeto: categoria;

  constructor(public servicio: CategoriaServiceService,
    private route: ActivatedRoute,
    private rou:Router
    ) { }

  ngOnInit(): void {
    this.LoadData() 
  }
  LoadData(){
    let id=this.route.snapshot.params['id'];
    this.servicio.getCategoria(id).subscribe(
      (data: categoria ) =>{
        this.objeto =data
        console.log(data)
      },
      (error) =>{
        console.log(error)
      }
    )
  }
  agregar(id,objeto){
    this.servicio.putCategoria(id,objeto).subscribe(
      (data) =>{
        console.log(data)
      },
      (error) =>{
        console.log(error)
      }

    )
    this.rou.navigate(['editor/listacategorias'])
  
  }

}

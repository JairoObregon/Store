import { Component, OnInit } from '@angular/core';
import { RestService} from './rest.service'
import { Productos} from './productos.model'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Listaproductos: Productos[] = [];
  Lista = ''
  constructor(private restService: RestService) { }
 
  

  ngOnInit(): void {
    this.restService.cargarProductos()
    .subscribe(
      (productos: Productos[]) => {
        this.Listaproductos = productos;
        console.log(this.Listaproductos)
      },
      (error) => {
        console.log(error);
        
      }  
    )
  }

  buscador(){
    this.restService.cargarProductos()
    .subscribe(
      (productos: Productos[]) => {
        this.Listaproductos = productos;
        console.log(this.Listaproductos)
      },
      (error) => {
        console.log(error);
        
      }  

    )

  }

}

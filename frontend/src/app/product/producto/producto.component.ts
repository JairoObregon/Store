import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from '../productos/productos.model';
import { RestService } from '../productos/rest.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  index: number;
  Listaproductos: Productos[] = [];
  producto: Productos;

  constructor( private route: ActivatedRoute,
            private restService: RestService
    ) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['id'];
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
    this.producto=this.Listaproductos[this.index];
  }

}

import { Component, OnInit } from '@angular/core';
import {categoria} from './categoria.model'
import {ServiceCategoriaService} from './service-categoria.service';
import {Product} from './product.model';
import {Router} from '@angular/router'
@Component({
  selector: 'app-productoform',
  templateUrl: './productoform.component.html',
  styleUrls: ['./productoform.component.css']
})
export class ProductoformComponent implements OnInit {


  idAux: number;
  nombreAux: string;
  DescripcionAux: string;
  PrecioAux: number;
  CategoriaAux: string;
  nuevoproducto : Product = new Product();

  ListaCategorias: categoria[] = [];
  constructor(private ServicioCategoria: ServiceCategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.ServicioCategoria.obtenerCategorias()
    .subscribe((categorias: categoria[]) => 
      { this.ListaCategorias = categorias
        console.log(this.ListaCategorias) },
        (error) => {
          console.log(error)
        }
    );
    
    

  }
  agregar(){
    
    this.ServicioCategoria.mandarProducto(this.nuevoproducto).subscribe(( response) => console.log(response));
    this.nuevoproducto =new Product();
    this.router.navigate(['editor/listaproductos'])
    
  }

}

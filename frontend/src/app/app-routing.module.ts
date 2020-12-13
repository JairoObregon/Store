import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './product/productos/productos.component';
import {MainComponent} from './main/main.component';


import {CarteraComponent} from './usuario/cartera/cartera.component';
import {ProductoComponent} from './product/producto/producto.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {MenueditorComponent} from './menueditor/menueditor.component';
import {ListaUsuarioComponent} from './admi/lista-usuario/lista-usuario.component';
import {ListaProductosComponent} from './product/lista-productos/lista-productos.component';
import {ListaCategoriaComponent} from './categoria/lista-categoria/lista-categoria.component';
import {LoginComponent} from './usuario/login/login.component';
import {ProductoformComponent} from './product/productoform/productoform.component';
import { UsuarioformComponent } from './usuario/usuarioform/usuarioform.component';
import { CategoriaformComponent } from './categoria/categoriaform/categoriaform.component';
import { NewCategoriaComponent } from './categoria/new-categoria/new-categoria.component';
import { GuardregistrousuarioGuard } from './usuario/usuarioform/guardregistrousuario.guard';
import { EditorGuard } from './admi/editor.guard';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },

  {
  path: 'productos',
  component: ProductosComponent,
},

{
  path: 'cartera',
  component: CarteraComponent,
},
{
  path: 'producto/:id',
  component: ProductoComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'formularioUsuario',
  component: UsuarioformComponent,
  canDeactivate: [GuardregistrousuarioGuard]
},
{
  path: 'editor',
  component: MenueditorComponent,
  canActivate:[],
  canActivateChild:[EditorGuard],
  children: [
    {
      path: 'listausuarios',
      component: ListaUsuarioComponent,
    },
    {
      path: 'listaproductos',
      component: ListaProductosComponent,
    },
    {
      path: 'formularioProducto',
      component: ProductoformComponent,
    },
    {
      path: 'listacategorias',
      component: ListaCategoriaComponent,
    },
    {
      path: 'listacategorias/nuevacategoria',
      component: NewCategoriaComponent,
    },
    {
      path: 'listacategorias/:id',
      component: CategoriaformComponent,
    },

    
  ]
},

{
  path: '**',
  component: NotfoundComponent,
}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}



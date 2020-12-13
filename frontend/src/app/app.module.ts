import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductosComponent } from './product/productos/productos.component';
import { ProductoComponent } from './product/producto/producto.component';

import { CarteraComponent } from './usuario/cartera/cartera.component';
import {HttpClientModule} from '@angular/common/http';
import { RestService} from './product/productos/rest.service';
import { NotfoundComponent } from './notfound/notfound.component';

import { MenueditorComponent } from './menueditor/menueditor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ListaUsuarioComponent } from './admi/lista-usuario/lista-usuario.component';
import { ListaProductosComponent } from './product/lista-productos/lista-productos.component';
import { ListaCategoriaComponent } from './categoria/lista-categoria/lista-categoria.component';
import { UsuarioformComponent } from './usuario/usuarioform/usuarioform.component';
import { CategoriaformComponent } from './categoria/categoriaform/categoriaform.component';
import { ProductoformComponent } from './product/productoform/productoform.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './usuario/login/login.component';
import { BuscadorPipe } from './product/productos/buscador.pipe';
import { NewCategoriaComponent } from './categoria/new-categoria/new-categoria.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductosComponent,
    ProductoComponent,

    CarteraComponent,
    NotfoundComponent,
    MenueditorComponent,
    ListaUsuarioComponent,
    ListaProductosComponent,
    ListaCategoriaComponent,
    UsuarioformComponent,
    CategoriaformComponent,
    ProductoformComponent,
    LoginComponent,
    BuscadorPipe,
    NewCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
